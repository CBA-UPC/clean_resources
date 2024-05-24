
/**
 * @constructor
 * @class GSAnalytics
 */
var GSAnalytics = function(){
    var self = this;

    /**
     * @public
     * @name GSAnalytics#debugFlag
     */
    self.debugFlag = true;

    /**
     * @public
     * @name GSAnalytics#logHistory
     */
    self.logHistory = [];

    self.isDevAccount = 

    /**
     * Logger: will log something if the hostname is not www.gs.com, or if gsAnalytics.debugFlag is set to true.
     * Logs to gsAnalytics.logHistory and to the console, if available.
     * @function
     * @public
     * @name GSAnalytics#log
     *
     * @param {...*} arguments any number of objects
     */
    self.log = (self.debugFlag === true && self.isDevAccount(window.location.href)) ?
        function () {
            self.logHistory.push(arguments);
            if (window.location.hostname != 'www.goldmansachs.com') {
                if (typeof console != 'undefined' && typeof console.log != 'undefined') {
                    try {
                        console.log.apply(console, arguments);
                    }
                    catch (e) {
                        console.log('GSAnalytics' + JSON.stringify(arguments));
                    }
                }
            }
        } :
        function(){};

    /**
     * Utility function to pluck a variable from the Omniture s variable if it has a useful value
     * @function
     * @private
     * @name GSAnalytics#getVariableIfSVarHasIt
     *
     * @param {string} varName Your variable name
     * @param {AppMeasurement} sVar Your AppMeasurement object
     *
     * @returns {Object}
     */
    var getVariableIfSVarHasIt = function(varName, sVar) {
        if (sVar[varName] && sVar[varName] != '') {
            return {name: varName, value: sVar[varName]};
        }
    };

    /**
     * If you have console.table, spit out a table of the frequently used s variables.
     *
     * @function
     * @public
     * @name GSAnalytics#showVars
     *
     * @param {AppMeasurement} sVar Your AppMeasurement object
     *
     */
    self.showVars = (self.debugFlag === true && self.isDevAccount(window.location.href)) ?
        function (sVar) {
            var variables = [
                {name: 'account', value: sVar.account},
                {name: 'pageName', value: sVar.pageName},
                {name: 'events', value: sVar.events}];

            for (var i = 1; i < 100; i++) {
                var eVar = getVariableIfSVarHasIt('eVar' + i, sVar),
                    prop = getVariableIfSVarHasIt('prop' + i, sVar);
                if (eVar) {
                    variables.push(eVar);
                }
                if (prop) {
                    variables.push(prop);
                }
            }
            console.table(variables);
        } :
        function(){};

    /**
     * Escape a string so that it only contains analytics-friendly characters.
     * @function
     * @public
     * @name GSAnalytics#escape
     *
     * @param {string} input
     * @returns {string} escaped output
     */
    self.escape = function() {
        var regex = /(\||'|\$|%|\^|\*|:|~|,)/gi;
        return 
    }();

    /**
     * Determine if something is an array
     * @function
     * @public
     * @name GSAnalytics#isArray
     *
     * @param {*} possibleArray
     *
     * @returns {boolean}
     */
    self.isArray = 

    /**
     * Determine if an array contains a value
     * @function
     * @public
     * @name GSAnalytics#inArray
     *
     * @param {*} value
     * @param {Array} array
     *
     * @returns {boolean}
     */
    self.inArray = function(value, array) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    };

    /**
     * Turn a comma-delimited string or an array into an Omniture-friendly comma-delimited string
     * @function
     * @private
     * @name GSAnalytics#createCommaList
     *
     * @param {string|Array} inputList string or array
     *
     * @returns {string}
     */
    var createCommaList = function(inputList) {
        if (inputList)
            return (self.isArray(inputList)) ? inputList.join(',') : inputList;
        else
            return "";
    };

    /**
     * Turn a comma-delimited string or an array into an array
     * @function
     * @private
     * @name GSAnalytics#createArray
     *
     * @param {string|Array} inputList string or array
     *
     * @returns {Array}
     */
    var createArray = function(inputList) {
        if (inputList)
            return (self.isArray(inputList)) ? inputList.slice(0) : inputList.split(',');
        else
            return [];
    };

    /**
     * Does a link open in the same window?
     * @function
     * @private
     * @name GSAnalytics#isOpenInSameWindow
     *
     * @param {HTMLElement} linkElement
     *
     * @returns {boolean}
     */
    var isOpenInSameWindow = function(linkElement) {
        if (typeof linkElement.target == 'undefined') {
            return true;
        }
        else {
            return ((linkElement.target == '_blank') || (linkElement.target.indexOf('_') != 0));
        }
    };

    /**
     * Is an element an <a> tag with an href attribute?
     * @function
     * @private
     * @name GSAnalytics#isLinkWithHref
     *
     * @param {HTMLElement} linkElement possibly a link element
     *
     * @returns {boolean}
     */
    var isLinkWithHref = function(linkElement) {
        return (typeof linkElement == 'object' &&
        linkElement.tagName == 'A' &&
        linkElement.href &&
        linkElement.href != '');
    };

    /**
     * Is a link a link to something within the site?  (Uses s.linkInternalFilters)
     * @function
     * @private
     * @name GSAnalytics#isInternalLink
     *
     * @param {string} linkHref
     *
     * @returns {boolean}
     */
    var isInternalLink = function(linkHref) {
        var internalFiltersArray = s.linkInternalFilters.split(',');
        for (var i = 0; i < internalFiltersArray.length; i++) {
            if (linkHref.toLowerCase().indexOf(internalFiltersArray[0].toLowerCase() != 1)) {
                return true;
            }
        }
        return false;
    };

    /**
     * Is a link a file download?  (Uses s.linkDownloadFileTypes)
     * @function
     * @private
     * @name GSAnalytics#isDownloadLink
     *
     * @param {string} linkHref
     *
     * @returns {boolean}
     */
    var isDownloadLink = function(linkHref) {
        var downloadFileTypesArray = s.linkDownloadFileTypes.split(',');
        for (var i = 0; i < downloadFileTypesArray.length; i++) {
            if (linkHref.toLowerCase().indexOf('.' + downloadFileTypesArray[i].toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    };

    /**
     * Is a mouse event a simple left click, or is it a right click/or CTRL, SHIFT, or ALT click
     * @function
     * @private
     * @name GSAnalytics#isUnmodifiedLeftClick
     *
     * @param {jQueryEvent} jqEvent mouse event
     *
     * @returns {boolean}
     */
    var isUnmodifiedLeftClick = function(jqEvent) {
        return jqEvent.which === 1 && !jqEvent.ctrlKey && !jqEvent.shiftKey && !jqEvent.altKey;
    };

    /**
     * Load a JS file
     * @function
     * @public
     * @name GSAnalytics#loadJS
     *
     * @param {string} jsPath source
     */
    self.loadJS = function(jsPath) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = jsPath;
        self.log(['Loading JS', jsPath]);
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    /**
     * Load a tracking pixel
     * @function
     * @public
     * @name GSAnalytics#loadImage
     *
     * @param {string} imgPath source
     *
     */
    self.loadImage = function(imgPath) {
        var img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.src = imgPath;
        self.log(['Loading img', imgPath]);
        document.getElementsByTagName("body")[0].appendChild(img);
    };

    /**
     * Do two strings match exactly?
     * Used in conditional tag loaders
     * @function
     * @public
     * @name GSAnalytics#exact
     *
     * @param {string} a string a
     * @param {string} b string b
     *
     * @returns {boolean}
     */
    self.exact = 

    /**
     * Does string a start with string b?
     * Used in conditional tag loaders
     * @function
     * @public
     * @name GSAnalytics#startsWith
     *
     * @param {string} a string a
     * @param {string} b string b
     *
     * @returns {boolean}
     */
    self.startsWith = 

    self.reducedAnalytics = window.location.search.match('snap=true');
    /**
     * Does string a contain string b?
     * Used in conditional tag loaders
     * @function
     * @public
     * @name GSAnalytics#contains
     *
     * @param {string} a string a
     * @param {string} b string b
     *
     * @returns {boolean}
     */
    self.contains = 

    /**
     * Get a conditional loader
     * @function
     * @private
     * @name GSAnalytics#loadMatcher
     *
     * @param {Object} options
     * @param {function} options.loader the function with one argument that loads what you're looking to load
     * @param {boolean} [options.firstOnly] do you only want to load the first match? (If not, it loads all matches)
     *
     * @returns {function} partially-applied function
     *
     */
    var loadMatcher = function(options) {
        return function(pixelMap) {
            for (var i = 0, len = pixelMap.length; i < len; i++) {
                var pixelMatcher = pixelMap[i];
                if (pixelMatcher.match(pixelMatcher.variable, pixelMatcher.criterion)) {
                    options.loader(pixelMatcher.pixel);
                    self.log(['Loading item from', pixelMap, "found", pixelMatcher]);
                    if (options.firstOnly === true) {
                        break;
                    }
                }
            }
        };
    };

    /**
     * Given a set of criteria, load the first matching image
     * @function
     * @public
     * @name GSAnalytics#loadFirstMatchingImage
     *
     * @param {criterion[]} criteria (e.g., {match: gsAnalytics.contains, variable: s.pageName, criterion: "Goldman Sachs:Citizenship", pixel: 'http://www.foo.com/s.jpg'});
     */
    self.loadFirstMatchingImage = loadMatcher({
        loader: self.loadImage,
        firstOnly: true
    });

    /**
     * Given a set of criteria, load the first matching JS
     * @function
     * @public
     * @name GSAnalytics#loadFirstMatchingJS
     *
     * @param {criterion[]} criteria (e.g., {match: gsAnalytics.contains, variable: s.pageName, criterion: "Goldman Sachs:Citizenship", pixel: 'http://www.foo.com/t.js'});
     */
    self.loadFirstMatchingJS = loadMatcher({
        loader: self.loadJS,
        firstOnly: true
    });

    /**
     * Return a function that attaches a type of event to an element
     * @function
     * @private
     * @name GSAnalytics#eventAttacher
     *
     * @param {string} event
     *
     * @returns {function}
     */
    var eventAttacher = function(event) {
        return function(elem, func) {
            if (elem.addEventListener) {
                elem.addEventListener(event, func, false);
            }
            else if (elem.attachEvent) {
                elem.attachEvent('on' + event, func);
            }
        };
    };

    /**
     * Attach an event to an element (needed because gsAnalytics can't depend on libs)
     * @function
     * @public
     * @name GSAnalytics#attachEvent
     *
     * @param {string} event
     * @param {HTMLElement} element
     * @param {function} function
     */
    self.attachEvent = function(event, elem, func) {
        eventAttacher(event)(elem, func);
    };

    /**
     * Attach  a click event to an element
     * @function
     * @public
     * @name GSAnalytics#attachClickEvent
     *
     * @param {HTMLElement} element
     * @param {functon} function
     */
    self.attachClickEvent = eventAttacher('click');

    /**
     * Create an object hierarchy according to our naming scheme.  Assumes that you've already populated your gsAnalytics's native hierarchical variables.
     * (i.e., at least some of siteName, sectionName, subSectionName, subSubSectionName and pageName)
     * This function is responsible for inserting delimiters, and 'inheriting' values down the hierarchy
     * @function
     * @public
     * @name GSAnalytics#calculateHierarchy
     *
     * @returns {Object} hierarchy object
     */
    self.calculateHierarchy = function() {
        var calculatedHierarchy = {};
        calculatedHierarchy.site = self.siteName;
        calculatedHierarchy.section = (self.sectionName == "") ? calculatedHierarchy.site : calculatedHierarchy.site + ':' + self.escape(self.sectionName);
        calculatedHierarchy.subSection = (self.subSectionName == "") ? calculatedHierarchy.section : calculatedHierarchy.section + ':' + self.escape(self.subSectionName);
        calculatedHierarchy.subSubSection = (self.subSubSectionName == "") ? calculatedHierarchy.subSection : calculatedHierarchy.subSection + ':' + self.escape(self.subSubSectionName);
        calculatedHierarchy.page = (calculatedHierarchy.subSubSection == "") ? self.escape(self.pageName) : calculatedHierarchy.subSubSection + ':' + self.escape(self.pageName);
        self.log('calculated hierarchy', calculatedHierarchy);
        return calculatedHierarchy;
    };

    /**
     * Given an object, populate any unpopulated values with the values of a set of "defaults"
     * Useful for functions that take in "options" objects
     * @function
     * @private
     * @name GSAnalytics#populateDefaults
     *
     * @param {Object} options
     * @param {Object} defaults
     *
     * @returns options options with defaults
     */
    var populateDefaults = function(options, defaults) {
        if (typeof options != 'object') {
            return defaults;
        }
        else {
            var populatedOptions = options;
            for (var i in defaults) {
                if (defaults.hasOwnProperty(i)) {
                    if (typeof populatedOptions[i] == 'undefined') {
                        populatedOptions[i] = defaults[i];
                    }
                }
            }
            return populatedOptions;
        }
    };

    /* Link and custom event tracking */
    /**
     * Set up an Omniture appMeasurement object with your variables and events.
     * Doesn't need to be called directly in modern usage; instead just use fireEvent or fireLinkEvent
     * @function
     * @private
     * @name GSAnalytics#setUpLinkVar
     *
     * @param {string|Array} variables your Omniture variables (e.g., eVar2,prop11)
     * @param {string|Array} events your Omniture events (e.g., event3,event3,event10)
     *
     * @returns {AppMeasurement}
     */
    var setUpLinkVar = function(variables, events) {
        var sVar = s_gi(s_account);
        var variableListArray = createArray(variables);
        var eventListString = createCommaList(events);
        if (eventListString != '') {
            if (!(self.inArray('events', variableListArray))) {
                variableListArray.push('events');
            }
            sVar.linkTrackEvents = sVar.events = eventListString;
        }
        variableListArray.push('eVar1', 'eVar2', 'eVar3', 'eVar11', 'eVar12');
        sVar.linkTrackVars = createCommaList(variableListArray);
        var ch=self.calculateHierarchy();
        sVar.eVar1=ch.section;
        sVar.eVar2=ch.subSection;
        sVar.eVar3=ch.subSubSection;
        sVar.eVar11=ch.page;
        sVar.eVar12=ch.site;
        self.log(['sVar set up', sVar]);
        return sVar;
    };

    /**
     * Set up an Omniture appMeasurement from a map of variables and their values, and a list of events.
     * Doesn't need to be called directly in modern usage; instead just use fireEvent or fireLinkEvent
     * @function
     * @private
     * @name GSAnalytics#setUpLinkVarFromMap
     *
     * @param {Object} variables your Omniture variables (e.g., {eVar2: 'foo', prop11: 'bar'})
     * @param {string|Array} events your Omniture events (e.g., event3,event3,event10)
     *
     * @returns {AppMeasurement}
     */
    var setUpLinkVarFromMap = function(variableMap, events) {
        var variableArray = [];
        for (var v in variableMap) {
            if (variableMap.hasOwnProperty(v)) {
                variableArray.push(v);
            }
        }
        var sVar = setUpLinkVar(variableArray, events);
        for (var i = 0, len = variableArray.length; i<len; i++) {
            sVar[variableArray[i]] = variableMap[variableArray[i]];
        }
        self.log(['sVar set up from map', sVar]);
        return sVar;
    };

    /**
     * Send a link to Omniture.
     * Doesn't need to be called directly in modern usage; instead just use fireEvent or fireLinkEvent
     * @function
     * @private
     * @name GSAnalytics#sendLink
     *
     * @param {Object} variableMap
     * @param {string|Array} events your Omniture events (e.g., event3,event3,event10)
     * @param {HTMLElement|boolean} elem the element the event is bound to, or true if no element
     * @param {string} [options.linkType='o'] The Omniture code for link type ('e' = exit; 'd' = download; 'o' = 'other).  Almost always 'o' (defaulted)
     * @param {string} [options.linkName='custom'] The name for your link.  Used for deduplication and shows in Omniture's (rarely used) custom link reports
     * @param {function} [options.callback] A callback function that gets executed after the event is sent to Omniture or 500ms elapses (whichever comes first)
     */
    var sendLink = function(variableMap, events, elem, linkType, linkName, callback) {
        var sVar = setUpLinkVarFromMap(variableMap, events);
        self.log(['s.tl()', elem, linkType, linkName, callback, sVar]);
        sVar.tl(elem, linkType, linkName, null, callback);
    };

    /**
     * Fire a custom event.  Use this to send an event and optionally fire a callback after the event is sent.
     * If you want this event to happen on a link with a traditional HREF, use fireLinkEvent instead.
     * Note that gsAnalytics sets certain page-level variables automatically, so you only need to set any event-specific variables.
     * @function
     * @public
     * @name GSAnalytics#fireEvent
     *
     * @param {Object} [options] Custom event options
     * @param {Object} [options.variableMap] A map of Omniture variable names to their values (e.g., eVar1: "My variable value")
     * @param {string|Array} [options.events] An array or comma-separated list of events
     * @param {string} [options.linkType='o'] The Omniture code for link type ('e' = exit; 'd' = download; 'o' = 'other).  Almost always 'o' (defaulted)
     * @param {string} [options.linkName='custom'] The name for your link.  Used for deduplication and shows in Omniture's (rarely used) custom link reports
     * @param {function} [options.callback] A callback function that gets executed after the event is sent to Omniture or 500ms elapses (whichever comes first)
     */
    self.fireEvent = function(options) {
        options = populateDefaults(options, {
            variableMap: {},
            events: '',
            linkType: 'o',
            linkName: 'custom',
            callback: null
        });
        if (typeof options.callback != 'function') {
            options.callback = null;
        }
        self.log("fireEvent", options);

        // When Omniture is turned off, s_gi will evaluate to undefined.
        if (typeof s_gi !== 'undefined') {
            sendLink(options.variableMap, options.events, true, options.linkType, options.linkName, options.callback);
        }
    };

    /**
     * Fire a custom link event.  Use this when you want tracking before someone clicks on a traditional link (that takes them to a different page)
     * For best deduplication, add an attribute to the HTMLElement called "gsAnalyticsjQEvent" with jQuery's event object...  Like:
     * $('#foo').click(function(e){
	  * 	 e.target['gsAnalyticsjQEvent'] = e;
	  * });
     * @function
     * @public
     * @name GSAnalytics#fireLinkEvent
     *
     * @param {element} elem The element with the href attached to it.
     * @param {Object} [options] Custom event options
     * @param {Object} [options.variableMap] A map of Omniture variable names to their values (e.g., eVar1: "My variable value")
     * @param {string|Array} [options.events] An array or comma-separated list of events
     * @param {string} [options.linkType='o'] The Omniture code for link type ('e' = exit; 'd' = download; 'o' = 'other).  Almost always 'o' (defaulted)
     * @param {string} [options.linkName='custom'] The name for your link.  Used for deduplication and shows in Omniture's rarely used custom link reports
     */
    self.fireLinkEvent = function(elem, options) {
        // If there's no element for some reason, use fireEvent instead
        if (elem === true) {
            self.fireEvent(options);
            return;
        }
        var jqEvent = elem.originalClickEvent || elem.gsAnalyticsjQEvent,
            callback = null;

        options = populateDefaults(options, {
            variableMap: {},
            events: '',
            linkType: 'o',
            linkName: 'custom'
        });
        while (elem.parentNode && elem.tagName != 'A') {
            elem = elem.parentNode;
        }
        if (isLinkWithHref(elem)) {
            if (elem.gsAnalyticsClicksFired) {
                if (self.inArray(options.linkName, elem.gsAnalyticsClicksFired)) {
                    return;
                }
                elem.gsAnalyticsClicksFired.push(options.linkName);
            }
            else {
                elem.gsAnalyticsClicksFired = [options.linkName];
            }
            if (isOpenInSameWindow(elem) &&
                isInternalLink(elem.href) &&
                !isDownloadLink(elem.href)) {
                if (!jqEvent || isUnmodifiedLeftClick(jqEvent)) {
                    callback = 
                }
                else {
                    // Omniture-speak for not being bound to link traversal.
                    elem = true;
                }
            }
            else {
                elem = true;
            }
            self.log("fireLinkEvent", options, callback);
            if (typeof s_gi !== 'undefined') {
                sendLink(options.variableMap, options.events, elem, options.linkType, options.linkName, callback);
            }
        }
    };

    /**
     * @deprecated
     * @public
     * @name GSAnalytics#setUpSVarForLink
     * @function
     *
     * @param {string|Array} variables your Omniture variables (e.g., eVar2,prop11)
     * @param {string|Array} events your Omniture events (e.g., event3,event3,event10)
     */
    self.setUpSVarForLink = 

    /**
     * @deprecated
     * @public
     * @name GSAnalytics#sendCustomLink
     * @function
     *
     * @param {HTMLElement|boolean} elem
     * @param {string} linkType
     * @param {string} linkName
     * @param {AppMeasurement} sVar
     * @param {function} callback
     */
    self.sendCustomLink = function(elem, linkType, linkName, sVar, callback) {
        self.log("legacy sendCustomLink", elem, linkType, linkName, null, callback);
        sVar.tl(elem, linkType, linkName, null, callback);
        sVar.linkTrackVars=sVar.linkTrackEvents=sVar.events=s.linkTrackVars=s.linkTrackEvents=s.events='';
    };

    /**
     * @deprecated
     * @public
     * @name GSAnalytics#sendClickTrackingLink
     * @function
     *
     * @param {HTMLElement|boolean} elem
     * @param {string} linkType
     * @param {string} linkName
     * @param {AppMeasurement} sVar
     */
    self.sendClickTrackingLink = function(elem, linkType, linkName, sVar) {
        var jqEvent = elem.originalClickEvent || elem.gsAnalyticsjQEvent;
        do {
            if (elem.tagName == 'A') {
                break;
            }
            elem = elem.parentNode;
        } while (elem.parentNode);
        if (isLinkWithHref(elem)) {
            var callback = null;
            if (elem.gsAnalyticsClicksFired) {
                if (self.inArray(linkName, elem.gsAnalyticsClicksFired)) {
                    return;
                }
                elem.gsAnalyticsClicksFired.push(linkName);
            }
            else {
                elem.gsAnalyticsClicksFired = [linkName];
            }
            if (isOpenInSameWindow(elem) &&
                isInternalLink(elem.href) &&
                !isDownloadLink(elem.href)) {
                if (!jqEvent || isUnmodifiedLeftClick(jqEvent)) {
                    callback = 
                }
                else {
                    elem = true;
                }
            }
            else {
                elem = true;
            }
            self.log("legacy sendClickTrackingLink", elem, linkType, linkName, sVar, callback);
            self.sendCustomLink(elem, linkType, linkName, sVar, callback);
        }
    };

    /* Legacy calls used on the old sites */
    /**
     * @public
     * @deprecated
     * @name GSAnalytics#gsamHandleDisclaimer
     * @function
     *
     * @param {HTMLElement|boolean} obj Element clicked on (if href link) or true if not
     * @param {Object} config
     */
    self.gsamHandleDisclaimer = function(obj, config) {
        var s=s_gi(config.account);
        s.linkTrackVars='eVar14,eVar18,eVar23,eVar24,eVar25,channel,campaign,siteName';
        s.eVar23=(config.acceptDisclaimerEvarValue) ? config.acceptDisclaimerEvarValue : 'true';
        linkTitle=(config.linkTitle) ? config.linkTitle : "Accept Disclaimer";
        s.tl(obj,'o',linkTitle);
    };

    /**
     * @public
     * @name GSAnalytics#handleOverlay
     * @function
     *
     * @param {HTMLElement|boolean} obj Element clicked on (if href link) or true if not
     * @param {string} name overlay name
     */
    self.handleOverlay = function(obj, name) {
        if (name) {
            var t=self.setUpSVarForLink(['prop23','eVar33'],'event11');
            t.prop23=t.eVar33=name;
            self.sendCustomLink(true,'o',name,t);
        }
    };

    /**
     * Used for progress phase 1
     * @public
     * @name GSAnalytics#handleProgressEvent
     * @function
     *
     * @param {HTMLElement|boolean} obj Element clicked on (if href link) or true if not
     * @param {string} name name of the progress event
     */
    self.handleProgressEvent = function(obj, name) {
        if (name) {
            var t=self.setUpSVarForLink(['prop11','eVar19'],'event12');
            t.prop11=t.eVar19=name;
            self.sendCustomLink(true,'o',name,t);
        }
    };

    /**
     * @public
     * @deprecated
     * @function
     * @name GSAnalytics#handleProgressLearnMore
     */
    self.handleProgressLearnMore = function(obj, name) {
        if (name) {
            var t=self.setUpSVarForLink(['prop25','eVar37'],'event7');
            t.prop25=t.eVar37=name;
            self.sendCustomLink(true,'o',name,t);
        }
    };

    /**
     * Pagination within the 'pause' state
     * @public
     * @name GSAnalytics#handleProgressPaginate
     * @function
     *
     * @param {HTMLElement|boolean} obj Element clicked on (if href link) or true if not
     * @param {string} name string to get tracked into Omniture; includes the story and target page number
     */
    self.handleProgressPaginate = function(obj, name) {
        if (name) {
            var t=self.setUpSVarForLink(['prop26','eVar38'],'event24');
            t.prop26=t.eVar38=name;
            self.sendCustomLink(true,'o',name,t);
        }
    };

    /**
     * "Pause" video event - used for tracking invoking the 'learn more' experience
     * @public
     * @name GSAnalytics#handleProgressPause
     * @function
     *
     * @param {HTMLElement|boolean} obj Element clicked on (if href link) or true if not
     * @param {string} name name of the progress video
     */
    self.handleProgressPause = function(obj, name) {
        if (name) {
            var t=self.setUpSVarForLink(['prop27','eVar39'],'event25');
            t.prop27=t.eVar39=name;
            self.sendCustomLink(true,'o',name,t);
        }
    };

    /**
     * Progress video start on mobile
     * @public
     * @name GSAnalytics#handleMobileVideo
     * @function
     *
     * @param {HTMLElement|boolean} obj Element clicked on (if href link) or true if not
     * @param {string} name name of the progress event
     */
    self.handleMobileVideo = function(obj, name) {
        if (name) {
            var t=self.setUpSVarForLink(['prop28','eVar40'],'event26');
            t.prop28=t.eVar40=name;
            self.sendClickTrackingLink(obj,'o',name,t);
        }
    };

    /**
     * Initiate share event within the progress site
     * @public
     * @name GSAnalytics#handleInitiateShare
     * @function
     *
     * @param {HTMLElement|boolean} obj Element clicked on (if href link) or true if not
     */
    self.handleInitiateShare = function(obj) {
        self.sendCustomLink(true,'o','Progress Share',self.setUpSVarForLink([],'event8'));
    };

    /**
     * When there's a tout impression, a syntax is used in the s.products variable, and events are fired.
     * Given an array of touts that received impressions, this attaches the relevant variables to your s Variable
     * @public
     * @name GSAnalytics#setProductsAndEventsFromToutImpression
     * @function
     *
     * @param {Array.<string>} touts names of the touts that receive impressions (should match the name when it's clicked on)
     * @param {AppMeasurement} sVar your AppMeasurement variable - usually s (window.s)
     */
    self.setProductsAndEventsFromToutImpression = function(touts, sVar) {
        var productsString = ';';
        var eventsString = (sVar.events && sVar.events != '') ? sVar.events + ',event31' : 'event31';
        for (var i = 0; i < touts.length; i++) {
            var safeName = self.escape(touts[i]);
            productsString = productsString + safeName;
            eventsString = eventsString + ',event35';
            if (i < touts.length-1) {
                productsString = productsString + ',;';
            }
        }
        sVar.events = eventsString;
        sVar.products = productsString;
    };

    /**
     * Fires a separate link event for sidebar touts.  Deprecated in favor of the version that bundles this into the core PV.
     * @public
     * @deprecated
     * @function
     * @name GSAnalytics#handleSidebarToutImpression
     *
     * @param {Array.<string>} touts names of the touts that receive impressions (should match the name when it's clicked on)
     */
    self.handleSidebarToutImpression = function(touts) {
        if (touts.length > 0) {
            var t = self.setUpSVarForLink(['products'],'event31');
            self.setProductsAndEventsFromToutImpression(touts, t);
            self.sendCustomLink(true,'o','tout impressions',t);
        }
    };

    /* 2011 redesign */
    /**
     * Breadcrumb click.
     * @public
     * @function
     * @name GSAnalytics#handleBreadcrumb
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name The name of the breadcrumb that was clicked on
     */
    self.handleBreadcrumb = function(obj, name) {
        if (name) {
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop36: name,
                    eVar46: name
                },
                events: 'event29',
                linkName: name
            });
        }
    };

    /**
     * Homepage grid tout click
     * @public
     * @function
     * @name GSAnalytics#handleGridTout
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name The name of the grid tout
     * @param {string} position The position of the tout
     * @param {string} numTouts The number of touts in the grid
     * @param {string} pageTitle The title of the page (as the grid appears on multiple pages)
     * @param {string} [subTitle] If a user clicks on one of a set of links in a grid, name the particular link.  (Expectation is that position reflects this too)
     */
    self.handleGridTout = function(obj, name, position, numTouts, pageTitle, subTitle) {
        if (name) {
            name = self.escape(name);
            pageTitle = self.escape(pageTitle);
            if ((typeof subTitle != 'undefined') && (subTitle != '')) {
                subTitle = self.escape(subTitle);
                name = name + ':' + subTitle;
            }
            var fullPosition = [pageTitle, numTouts, position].join(':');
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop30: fullPosition,
                    prop31: name,
                    eVar42: fullPosition,
                    eVar43: name
                },
                events: 'event27',
                linkName: name
            });
        }
    };

    /**
     * Sidebar tout click
     * @public
     * @function
     * @name GSAnalytics#handleSidebarToutClick
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name The name of the tout that was clicked on
     * @param {string} position The position of the tout (i.e., "1", "2", etc)
     */
    self.handleSidebarToutClick = function(obj, name, position) {
        if (name) {
            name = self.escape(name);
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop35: position,
                    prop36: name,
                    eVar47: position,
                    eVar48: name,
                    products: ';' + name
                },
                events: 'event30',
                linkName: name
            });
        }
    };

    /**
     * Global nav item click click.
     * @public
     * @function
     * @name GSAnalytics#handleGlobalNav
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name The name of the global nav item.  If hierarchical, the expectation is that this will be colon-delimited
     * @param {string} position The colon-delimited position of this global nav item (e.g., 3:1:5)
     */
    self.handleGlobalNav = function(obj, name, position) {
        if (name) {
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop32: position,
                    prop33: name,
                    eVar44: position,
                    eVar45: name
                },
                events: 'event28',
                linkName: name
            });
        }
    };

    /**
     * Fire an event when a homepage is swiped.  A bit of a special case as this also registers a page view.
     * @public
     * @function
     * @name GSAnalytics#handleHomepageSwipe
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name The name of the page that is being navigated to
     * @param {string} direction The swipe direction (left or right)
     */
    self.handleHomepageSwipe = function(obj, name, direction) {
        if (name) {
            name = self.escape(name);
            self.fireEvent({
                variableMap: {
                    prop41: direction,
                    prop42: name,
                    eVar51: direction,
                    eVar52: name
                },
                events: 'event33',
                linkName: name
            });
            if (typeof s_gi !== 'undefined') {
                fireHomepageSwipePageView(true, name);
            }
        }
    };

    /**
     * 10,000 Small Businesses register page link
     * @public
     * @function
     * @name GSAnalytics#handleSBLink
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name The name of the page that is being navigated to
     */
    self.handleSBLink = function(obj, name) {
        if (name) {
            name = self.escape(name);
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop46: name,
                    eVar56: name
                },
                events: 'event3',
                linkName: name
            });
        }
    };

    /**
     * @public
     * @deprecated
     * @function
     * @name GSAnalytics#handleOurThinkingVideo
     *
     * @param {string} name The name of the page that is being navigated to
     */
    self.handleOurThinkingVideo = function(name) {
        if (name) {
            name = self.escape(name);
            self.fireEvent({
                variableMap: {
                    prop48: name,
                    eVar60: name
                },
                events: 'event43',
                linkName: name
            });
        }
    };

    /**
     * @public
     * @deprecated
     * @function
     * @name GSAnalytics#handleOurThinkingDownload
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name The name of the page that is being navigated to
     */
    self.handleOurThinkingDownload = function(obj, name) {
        if (name) {
            name = self.escape(name);
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop49: name,
                    eVar61: name
                },
                events: 'event44',
                linkName: name
            });
        }
    };

    /**
     * 10,000 Women Infographic Click
     * @public
     * @function
     * @name GSAnalytics#handleOCEBlocksClick
     *
     * @param {string} name The name of the section of the experience being navigated to
     */
    self.handleOCEBlocksClick = function(name) {
        var fullPageName = "Goldman Sachs:Citizenship:10,000 Women:International Women's Day Blocks:";
        if (name == '') {
            name = "International Women's Day Blocks";
        }
        fullPageName = fullPageName + name;
        self.fireEvent({
            variableMap: {
                pageName: fullPageName,
                eVar11: fullPageName
            },
            events: 'event2',
            linkName: fullPageName
        });
    };

    /**
     * In-page infographic click
     * @public
     * @function
     * @name GSAnalytics#handleDataVizInteraction
     *
     * @param {string} dataVizName the name of the data visualization
     * @param {string} interactionName a title for the interaction within the data visualization
     */
    self.handleDataVizInteraction = function(dataVizName, interactionName) {
        if (dataVizName && interactionName) {
            dataVizName = self.escape(dataVizName);
            interactionName = self.escape(interactionName);

            var fullName = dataVizName + ':' + interactionName;

            self.fireEvent({
                variableMap: {
                    prop51: fullName,
                    eVar71: fullName,
                    eVar72: '+1'
                },
                events: 'event45',
                linkName: fullName
            });
        }
    };

    /**
     * Clicks on the 'focus on' page grid
     * @public
     * @function
     * @name GSAnalytics#handleFocusOnGridClick
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} position The position of the clicked-on item within the gridl
     * @param {string} toutName The name of the tout within the grid
     */
    self.handleFocusOnGridClick = function(obj, position, toutName) {
        if (toutName) {
            var fullName = self.escape(self.pageName) + ':' + position + ':' + toutName;
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop52: fullName,
                    eVar73: fullName
                },
                events: 'event46',
                linkName: fullName
            });
        }
    };

    /**
     * Clicks to the "learn more about cookies" link
     * @public
     * @function
     * @name GSAnalytics#handleLearnAboutCookies
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     */
    self.handleLearnAboutCookies = 

    /**
     * Click on a video recommendation at the end frame of the video
     * @public
     * @function
     * @name GSAnalytics#handleVideoRecommedationClick
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name The name of the video recommendation
     * @param {string} position The position of the recommendation (e.g., "1" for first video)
     */
    self.handleVideoRecommendationClick = function(obj, name, position) {
        if (name) {
            name = self.escape(name);
            self.fireLinkEvent(obj, {
                variableMap: {
                    eVar6: fullName,
                    list1: position
                },
                events: 'event50',
                linkName: name
            });
        }
    };

    /**
     * Video recommendations that were recommended
     * @public
     * @function
     * @name GSAnalytics#handleVideoRecommendationImpression
     *
     * @param {Array.<string>} videos the names of the videos that were recommended
     */
    self.handleVideoRecommendationImpression = function(videos) {
        if (videos.length > 0) {
            for (var i = 0; i < videos.length; i++) {
                videos[i] = self.escape(videos[i]);
            }
            self.fireCustomEvent({
                variableMap: {
                    list1: videos.join('|')
                },
                events: 'event49',
                linkName: 'Video Recommendation Impressions'
            });
        }
    };

    /**
     * Careers quiz - user submitting information
     * @public
     * @function
     * @name GSAnalytics#handleQuizSubmitInformation
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} country
     * @param {string} location
     * @param {string} degree
     * @param {string} degreeType
     * @param {string} major
     * @param {string} educationType
     * @param {string} rangeStart
     * @param {string} rangeEnd
     * @param {string} school
     */
    self.handleQuizSubmitInformation = function(obj,
                                                country,
                                                location,
                                                degree,
                                                degreeType,
                                                major,
                                                educationType,
                                                rangeStart,
                                                rangeEnd,
                                                school) {

        var rangeString = (educationType != 'professional') ? '|' + rangeStart + '|' + rangeEnd : '';

        self.fireEvent({
            variableMap: {
                eVar16: [self.escape(degree),
                    self.escape(degreeType),
                    self.escape(major),
                    self.escape(educationType)
                ].join('|') + rangeString,
                eVar17: self.escape(school),
                eVar18: [self.escape(country), self.escape(location)].join('|')
            },
            events: 'event4',
            linkName: 'Quiz Submit Information'
        });
    };

    /**
     * Careers quiz - answering question
     * @public
     * @function
     * @name GSAnalytics#handleQuizAnswerQuestion
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {Array.<string>} questions
     * @param {Array.<string>} answers
     * @param {Array.<string>} modules
     * @param {Array.<string>} divisions
     */
    self.handleQuizAnswerQuestion = function(obj,
                                             questions,
                                             answers,
                                             modules,
                                             divisions) {

        var answersWithQuestions = [],
            escapedDivisions = [],
            escapedModules = [];

        for (var i = 0, len = answers.length; i < len; i++) {
            answersWithQuestions.push(questions[i] + answers[i]);
        }
        for (var i = 0, len = divisions.length; i < len; i++) {
            escapedDivisions.push(self.escape(divisions[i]));
        }
        for (var i = 0, len = modules.length; i < len; i++) {
            escapedModules.push(self.escape(modules[i]));
        }

        self.fireEvent({
            variableMap: {
                prop16: answers.length,
                eVar14: answersWithQuestions.slice(0,7).join('|'),
                eVar15: escapedDivisions.slice(0,3).join('>'),
                eVar20: answersWithQuestions.slice(7).join('|'),
                eVar21: escapedDivisions.slice(3,7).join('>'),
                eVar22: escapedDivisions.slice(7,11).join('>'),
                eVar23: escapedDivisions.slice(11).join('>'),
                list2: escapedModules.join('|')
            },
            events: 'event5,event31',
            linkName: 'Quiz Answer'
        });
    };

    /**
     * Careers quiz - clicking on a quiz tout
     * @public
     * @function
     * @name GSAnalytics#handleQuizToutClick
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name tout name
     */
    self.handleQuizToutClick = function(obj, name) {
        if (name) {
            name = self.escape(name);
            self.fireEvent({
                variableMap: {
                    list2: name
                },
                events: 'event30',
                linkName: 'Quiz Tout Click - ' + name
            });
        }
    };

    /**
     * Careers quiz - completing the quiz
     * @public
     * @function
     * @name GSAnalytics#handleQuizComplete
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {Array.<string>} questions
     * @param {Array.<string>} answers
     * @param {Array.<string>} divisions
     */
    self.handleQuizComplete = function(obj, questions, answers, divisions) {
        var answersWithQuestions = [],
            escapedDivisions = [];

        for (var i = 0, len = answers.length; i < len; i++) {
            answersWithQuestions.push(questions[i] + answers[i]);
        }
        for (var i = 0, len = divisions.length; i < len; i++) {
            escapedDivisions.push(self.escape(divisions[i]));
        }

        self.fireEvent({
            variableMap: {
                prop16: 'complete',
                eVar14: answersWithQuestions.slice(0,7).join('|'),
                eVar15: escapedDivisions.slice(0,3).join('>'),
                eVar20: answersWithQuestions.slice(7).join('|'),
                eVar21: escapedDivisions.slice(3,7).join('>'),
                eVar22: escapedDivisions.slice(7,11).join('>'),
                eVar23: escapedDivisions.slice(11).join('>')
            },
            events: 'event10',
            linkName: 'Quiz Complete'
        });
    };

    /**
     * Reaching a milestone in the BSC microsite (by scrolling or clicking)
     * @public
     * @function
     * @name GSAnalytics#handleBSCEvent
     *
     * @param {string} description the milestone that the user has reached
     */
    self.handleBSCEvent = function(description) {
        if (description) {
            t.eVar24 = description;
            self.fireEvent({
                variableMap: {
                    eVar24: description
                },
                events: 'event53',
                linkName: description
            });
        }
    };

    /**
     *
     * Send the page view event when the homepage is swiped
     * @private
     * @function
     * @name GSAnalytics#fireHomepageSwipePageView
     *
     * @param {HTMLElement|boolean} obj The clicked-on object (i.e., the <a> tag).  If not needed, set true
     * @param {string} name page name
     */
    // TODO: revisit
    var fireHomepageSwipePageView = function(obj, name) {
        if (name) {
            name = self.escape(name);
            var channelTitle = 'Goldman Sachs';
            var hierTitle = (name == "Home") ? channelTitle : channelTitle + ":" + name;
            var pageTitle = (name == "Home") ? channelTitle : hierTitle + ":" + name;
            var titleOnly = (name == "Home") ? channelTitle : name;
            if (name == 'HOMEPAGE') {
                hierTitle = titleOnly = channelTitle;
                pageTitle = channelTitle + ':' + channelTitle;
            }
            var s=s_gi(s_account);
            s.linkTrackVars='channel,prop1,prop2,prop3,prop5,prop24,hier1,pageName,eVar1,eVar2,eVar3,eVar5,eVar11,eVar12,eVar34,events';
            s.linkTrackEvents=s.events='event2';
            s.channel=s.eVar12=channelTitle;
            s.pageName=s.eVar11=pageTitle;
            s.prop1=s.eVar1=s.prop2=s.eVar2=s.prop3=s.eVar3=s.hier1=hierTitle;
            s.prop5=s.eVar5=titleOnly;
            s.prop24=s.eVar34=window.location.href;
            self.log('Homepage swipe', obj, name, s);
            s.t();
        }
    };

    self.handleHorizontalNav = function(obj, name, direction) {
        if (name) {
            name = self.escape(name);
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop40: name,
                    eVar50: name,
                    prop39: direction,
                    eVar49: direction
                },
                events: 'event32',
                linkName: name
            });
        }
    };

    self.handleHeaderFooterNav = function(obj, name) {
        // Need to delimit hierarchy by colons
        // Need to call gsAnalytics.escape on each element of the name - this is duplicated in gs.sitewide.js as analyticsEscape and should be pulled into the new codebase
        if (name) {
            self.fireLinkEvent(obj, {
                variableMap: {
                    prop32: name,
                    eVar44: name
                },
                events: 'event28',
                linkName: name
            });
        }
    };

    self.handleToutClick = function(obj, section, name) {
        if (name) {
            section = self.escape(section);
            name = self.escape(name);
            self.fireLinkEvent(obj, {
                variableMap: {
                    eVar38: section + ':' + name
                },
                events: 'event63',
                linkName: section + ':' + name
            });
        }
    };

    self.handleCarouselCardClick = function(obj, section, name) {
        if (name) {
            section = self.escape(section);
            name = self.escape(name);

            if(obj === true){
                self.fireEvent({
                    variableMap: {
                        eVar37: section + ':' + name
                    },
                    events: 'event64',
                    linkName: section + ':' + name
                });
            }else{
                self.fireLinkEvent(obj, {
                    variableMap: {
                        eVar37: section + ':' + name
                    },
                    events: 'event64',
                    linkName: section + ':' + name
                });
            }
        }
    };

    self.toutImpressions = function (toutList) {
        if (toutList.length > 0) {
            var currentHierarchy = self.calculateHierarchy(),
                safeToutNames = [];

            for (var i = 0; i < toutList.length; i++) {
                safeToutNames.push(self.escape(toutList[i]));
            }

            self.fireEvent({
                variableMap: {
                    channel: currentHierarchy.site,
                    eVar12: currentHierarchy.site,
                    pageName: currentHierarchy.page,
                    eVar11: currentHierarchy.page,
                    prop1: currentHierarchy.section,
                    eVar1: currentHierarchy.section,
                    prop2: currentHierarchy.subSection,
                    eVar2: currentHierarchy.subSection,
                    prop3: currentHierarchy.subSubSection,
                    eVar3: currentHierarchy.subSubSection,
                    prop5: self.escape(self.pageName),
                    eVar5: self.escape(self.pageName),
                    prop24: "D=g",
                    eVar34: "D=g",
                    hier1: "D=c3",
                    list3: safeToutNames.join('|')
                },
                events: 'event31',
                linkName: 'Touts'
            })
        }
    };

    self.toutClick = function(obj, name){
        if (name) {
            self.fireLinkEvent(obj, {
                variableMap: {
                    list3: self.escape(name)
                },
                events: 'event27',
                linkName: self.escape(name)
            });
        }
    };

    self.initNewPageView = function() {
        var currentHierarchy = self.calculateHierarchy();

        var props = {
            channel: currentHierarchy.site,
            eVar12: currentHierarchy.site,
            pageName: currentHierarchy.page,
            eVar11: currentHierarchy.page,
            prop1: currentHierarchy.section,
            eVar1: currentHierarchy.section,
            prop2: currentHierarchy.subSection,
            eVar2: currentHierarchy.subSection,
            prop3: currentHierarchy.subSubSection,
            eVar3: currentHierarchy.subSubSection,
            prop5: self.escape(self.pageName),
            eVar5: self.escape(self.pageName),
            prop24: "D=g",
            eVar34: "D=g",
            hier1: "D=c3"
        };
        var events = "event2";

        var t = setUpLinkVarFromMap(props, events);
        t.t();
    };

    self.clickedFromSearchTout = function(text) {
        if (text) {
            self.fireEvent({
                variableMap: {
                    eVar64: self.escape(text)
                },
                events: 'event57',
                linkName: 'Search Tout:' + text
            });
        }
    };

    self.handleLivestreamQuestion = function(el) {
        self.fireEvent({
            variableMap: {},
            events: 'event54',
            linkName: 'Livestream question'
        });
    };

    self.handleCareersBlogClick = function(obj, name) {
        if (name) {
            self.fireEvent({
                variableMap: {
                    eVar28: self.escape(name)
                },
                events: 'event55',
                linkName: name
            });
        }
    };

    self.handleSocialShare = function(obj, tool) {
        if (tool) {
            if (obj === true) {
                self.fireEvent({
                    variableMap: {
                        eVar33: self.escape(tool)
                    },
                    events: 'event56',
                    linkName: tool
                });
            } else {
                self.fireLinkEvent(obj, {
                    variableMap: {
                        eVar33: self.escape(tool)
                    },
                    events: 'event56',
                    linkName: tool
                });
            }
        }
    };

    self.invokeABTest = function(testName, testValue) {
        self.fireEvent({
            variableMap: {
                eVar33: [testName, testValue].join('=')
            },
            events: 'event58',
            linkName: [testName, testValue].join('=')
        });
    };

    self.moduleViewed = function (moduleNumber, moduleName, totalNumberOfModules) {
        if (moduleNumber && moduleName && totalNumberOfModules) {
            moduleName = self.escape(moduleName);
            var fullName = 'Module(' + moduleNumber + '/' + totalNumberOfModules + ') - ' + moduleName + ' Viewed';
            self.fireEvent({
                variableMap: {
                    prop51: fullName,
                    eVar71: fullName,
                    eVar72: '+1'
                },
                events: 'event58',
                linkName: fullName
            });
        }
    };


// function to be completed when Omniture vars completed. Called within doAnalytics function on line 2619 in gs.sitewide.js
    self.trackScroll = function(percentPageViewed) {
        self.fireEvent({
            variableMap: {
                eVar75: percentPageViewed
            },
            events: 'event60',
            linkName: 'Total Page Viewed %: ' + percentPageViewed
        });
    };

    function fireWhenVisible() {
        var currentHierarchy = self.calculateHierarchy();

        self.fireEvent({
            variableMap: {
                channel: currentHierarchy.site,
                eVar12: currentHierarchy.site,
                pageName: currentHierarchy.page,
                eVar11: currentHierarchy.page,
                prop1: currentHierarchy.section,
                eVar1: currentHierarchy.section,
                prop2: currentHierarchy.subSection,
                eVar2: currentHierarchy.subSection,
                prop3: currentHierarchy.subSubSection,
                eVar3: currentHierarchy.subSubSection,
                prop5: self.escape(self.pageName),
                eVar5: self.escape(self.pageName),
                prop24: "D=g",
                eVar34: "D=g",
                hier1: "D=c3"
            },
            events: 'event61',
            linkName: currentHierarchy.page
        });
    };

    // Check whether page has been fully loaded. For use in pages seen by SnapChat app
    // To be called in page specific js
    self.pageViewedByUser = function(doc) {
        if (doc['visibilityState'] == 'visible') {
            fireWhenVisible()
        } else {
            doc['addEventListener']('onVisibilityChange', 
        }
    };

    self.trackEmailSignup = function(address) {
        self.fireEvent({
            variableMap: {
                eVar68: address
            },
            events: 'event59',
            linkName: 'E-mail signup: ' + address,
            callback:  
        });
    };

    self.updateHierarchy = function(site, section, subSection, subSubSection, pageName){
        self.siteName 			= site 			|| "";
        self.sectionName 		= section 		|| "";
        self.subSectionName     = subSection 	|| "";
        self.subSubSectionName 	= subSubSection || "";
        self.pageName 			= pageName 		|| "";

        if (self.pageName == "") {
            if (self.subSubSectionName != "") {
                self.pageName = self.subSubSectionName;
            }
            else if (self.subSectionName != "") {
                self.pageName = self.subSectionName;
            }
            else if (self.sectionName != "") {
                self.pageName = self.sectionName;
            }
            else if (self.siteName != "") {
                self.pageName = self.siteName;
            }
        }

        self.ch = self.calculateHierarchy();
    };

    self.inPlacePageLoad = function(site, section, subSection, subSubSection, pageName){
        self.updateHierarchy(site, section, subSection, subSubSection, pageName);
        var currentHierarchy = self.calculateHierarchy();

        var props = {
            pageURL:    window.location.href,
            channel:    currentHierarchy.site,
            eVar12:     currentHierarchy.site,
            pageName:   currentHierarchy.page,
            eVar11:     currentHierarchy.page,
            prop1:      currentHierarchy.section,
            eVar1:      currentHierarchy.section,
            prop2:      currentHierarchy.subSection,
            eVar2:      currentHierarchy.subSection,
            prop3:      currentHierarchy.subSubSection,
            eVar3:      currentHierarchy.subSubSection,
            prop5:      self.escape(self.pageName),
            eVar5:      self.escape(self.pageName),
            prop24:     "D=g",
            eVar34:     "D=g",
            hier1:      "D=c3"
        };
        var events = "event2";

        var t = setUpLinkVarFromMap(props, events);
        t.t();
    };

    self.handleNavLinkClick = function(obj, itemName, isStickyNav) {
        if (itemName) {
            self.fireLinkEvent(obj, self.getNavClickOptions(itemName, isStickyNav));
        }
    };

    self.handleNavButtonClick = function(itemName, isStickyNav) {
        if (itemName) {
            self.fireEvent(self.getNavClickOptions(itemName, isStickyNav));
        }
    };

    self.getNavClickOptions = function (itemName, isStickyNav) {
        if (isStickyNav == null || isStickyNav === '') {
            isStickyNav = false;
        }
        return {
            variableMap: {
                eVar45: itemName,
                eVar77: isStickyNav === true ? "Sticky" : "Non-Sticky"
            },
            events: 'event28',
            linkName: itemName
        };
    };

    self.handleBreadcrumbNavLinkClick = function(obj, itemName) {
        if (itemName) {
            self.fireLinkEvent(obj, self.getBreadcrumbNavClickOptions(itemName));
        }
    };

    self.handleBreadcrumbNavButtonClick = function(itemName) {
        if (itemName) {
            self.fireEvent(self.getBreadcrumbNavClickOptions(itemName));
        }
    };

    self.getBreadcrumbNavClickOptions = function (itemName) {
        return {
            variableMap: {
                eVar46: itemName
            },
            events: 'event65',
            linkName: itemName
        };
    };

    self.handleFooterLinkClick = function(obj, itemName) {
        if (itemName) {
            self.fireLinkEvent(obj, self.getFooterClickOptions(itemName));
        }
    };

    self.handleFooterButtonClick = 

    self.getFooterClickOptions = function (itemName) {
        return {
            variableMap: {
                eVar78: itemName
            },
            events: 'event66',
            linkName: itemName
        };
    };

    self.marketplaceToutClicked = function(obj, tabIsFeatured, itemName) {
        if (itemName) {
            var tab = 'all';
            if (tabIsFeatured === true) {
                tab = 'featured'
            }
            itemName = self.escape(itemName);
            var options = {
                variableMap: {
                    eVar38: "MP " + tab + " tout:" + itemName
                },
                events: 'event63',
                linkName: itemName
            };
            self.fireLinkEvent(obj, options);
        }
    };

    self.marketplaceTabClicked = function(tabIsFeatured) {
        var tab = 'all';
        if (tabIsFeatured === true) {
            tab = 'featured'
        }
        var options = {
            variableMap: {
                eVar71: "MP " + tab + " tab click"
            },
            events: 'event45',
            linkName: tab + " Tab"
        };
        self.fireEvent(options);
    };

    self.oneGSTabClick = function(tabName, opening) {
        var open = opening ? "open" : "close";
        var options = {
            variableMap: {
                eVar71: tabName + " OneGS Tab: " + open
            },
            events: 'event45',
        };
        self.fireEvent(options);
    };

    self.oneGSCardClick = function(cardName, tabName, ctaText) {
        var options = {
            variableMap: {
                eVar38: tabName + " Tab Item: " + cardName + ": " + ctaText + " Click"
            },
            events: 'event63',
            linkName: name
        };
        self.fireEvent(options);
    };

    self.oneGSTabLearnMoreClick = function(tabName, ctaText) {
        var options = {
            variableMap: {
                eVar38: tabName + " Tab CTA: " + ctaText + " Click"
            },
            events: 'event63',
            linkName: name
        };
        self.fireEvent(options);
    };

    self.exploreMoreCtaClick = function(toutTitle, ctaText) {
        var options = {
            variableMap: {
                eVar71: toutTitle + ": Intro CTA: " + ctaText
            },
            events: 'event45',
            linkName: name
        };
        self.fireEvent(options);
    }
};

/**
 * @preserve
 *
 * Adobe Visitor API for JavaScript version: 1.3.3
 * Copyright 1996-2013 Adobe, Inc. All Rights Reserved
 * More info available at http://www.omniture.com
 */
function Visitor(k,s){if(!k)throw"Visitor requires Adobe Marketing Cloud Org ID";var a=this;a.version="1.3.3";var h=window,m=h.Visitor;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._c="Visitor";a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;var x=h.document,j=h.O;j||(j=null);var i=h.P;i||(i=!0);var p=h.N;p||(p=!1);a.C=function(a){var c=0,b,e;if(a)for(b=0;b<a.length;b++)e=a.charCodeAt(b),c=(c<<5)-c+e,c&=c;return c};a.m=function(a){var c="0123456789",b="",e="",f,g=8,h=10,i=10;if(1==a){c+="ABCDEF";for(a=
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            0;16>a;a++)f=Math.floor(Math.random()*g),b+=c.substring(f,f+1),f=Math.floor(Math.random()*g),e+=c.substring(f,f+1),g=16;return b+"-"+e}for(a=0;19>a;a++)f=Math.floor(Math.random()*h),b+=c.substring(f,f+1),0==a&&9==f?h=3:(1==a||2==a)&&10!=h&&2>f?h=10:2<a&&(h=10),f=Math.floor(Math.random()*i),e+=c.substring(f,f+1),0==a&&9==f?i=3:(1==a||2==a)&&10!=i&&2>f?i=10:2<a&&(i=10);return b+e};a.I=function(){var a;!a&&h.location&&(a=h.location.hostname);if(a)if(/^[0-9.]+$/.test(a))a="";else{var c=a.split("."),b=
    c.length-1,e=b-1;1<b&&2>=c[b].length&&(2==c[b-1].length||0>",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,nd,".indexOf(","+
    c[b]+","))&&e--;if(0<e)for(a="";b>=e;)a=c[b]+(a?".":"")+a,b--}return a};a.cookieRead=function(a){var a=encodeURIComponent(a),c=(";"+x.cookie).split(" ").join(";"),b=c.indexOf(";"+a+"="),e=0>b?b:c.indexOf(";",b+1);return 0>b?"":decodeURIComponent(c.substring(b+2+a.length,0>e?c.length:e))};a.cookieWrite=function(d,c,b){var e=a.cookieLifetime,f,c=""+c,e=e?(""+e).toUpperCase():"";b&&"SESSION"!=e&&"NONE"!=e?(f=""!=c?parseInt(e?e:0):-60)?(b=new Date,b.setTime(b.getTime()+1E3*f)):1==b&&(b=new Date,f=b.getYear(),
    b.setYear(f+2+(1900>f?1900:0))):b=0;return d&&"NONE"!=e?(x.cookie=encodeURIComponent(d)+"="+encodeURIComponent(c)+"; path=/;"+(b?" expires="+b.toGMTString()+";":"")+(a.cookieDomain?" domain="+a.cookieDomain+";":""),a.cookieRead(d)==c):0};a.e=j;a.w=a.L=function(d,c){c&&(a.e==j&&(a.e={}),void 0==a.e[d]&&(a.e[d]=[]),a.e[d].push(c))};a.l=a.j=
    j;a.J=function(d,c,b){!c&&b&&b();var e=x.getElementsByTagName("HEAD")[0],f=x.createElement("SCRIPT");f.type="text/javascript";f.setAttribute("async","async");f.src=c;e.firstChild?e.insertBefore(f,e.firstChild):e.appendChild(f);b&&(a.j==j&&(a.j={}),a.j[d]=setTimeout(b,a.loadTimeout))};a.H=a.D=p;a.F=p;a.isAllowed=function(){if(!a.D&&(a.D=i,a.cookieRead(a.cookieName)||a.cookieWrite(a.cookieName,"T",1)))a.F=i;return a.F};a.a=j;a.c=j;var v=a.V;
    v||(v="MC");var n=a.Y;n||(n="MCMID");var w=a.X;w||(w="MCCIDH");var y=a.W;y||(y="MCAS");var t=a.T;t||(t="A");var l=a.Q;l||(l="MCAID");var u=a.U;u||(u="AAM");var r=a.S;r||(r="MCAAMLH");var o=a.R;o||(o="MCAAMB");var q=a.Z;q||(q="NONE");a.t=0;a.B=function(){if(!a.t){var d=a.version;a.audienceManagerServer&&(d+="|"+a.audienceManagerServer);a.audienceManagerServerSecure&&(d+="|"+a.audienceManagerServerSecure);if(a.audienceManagerCustomerIDDPIDs)for(var c in a.audienceManagerCustomerIDDPIDs)!Object.prototype[c]&&
    a.audienceManagerCustomerIDDPIDs[c]&&(d+=c+"="+a.audienceManagerCustomerIDDPIDs[c]);a.t=a.C(d)}return a.t};a.G=p;a.h=function(){if(!a.G){a.G=i;var d=a.B(),c=p,b=a.cookieRead(a.cookieName),e,f,g,h=new Date;a.a==j&&(a.a={});if(b&&"T"!=b){b=b.split("|");b[0].match(/^[\-0-9]+$/)&&(parseInt(b[0])!=d&&(c=i),b.shift());1==b.length%2&&b.pop();for(d=0;d<b.length;d+=2)e=b[d].split("-"),f=e[0],g=b[d+1],e=1<e.length?parseInt(e[1]):0,c&&(f==w&&(g=""),0<e&&(e=h.getTime()/1E3-60)),f&&g&&(a.d(f,g,1),0<e&&(a.a["expire"+
    f]=e,h.getTime()>=1E3*e&&(a.c||(a.c={}),a.c[f]=i)))}if(!a.b(l)&&(b=a.cookieRead("s_vi")))b=b.split("|"),1<b.length&&0<=b[0].indexOf("v1")&&(g=b[1],d=g.indexOf("["),0<=d&&(g=g.substring(0,d)),g&&g.match(/^[0-9a-fA-F\-]+$/)&&a.d(l,g))}};a.M=function(){var d=a.B(),c,b;for(c in a.a)!Object.prototype[c]&&a.a[c]&&"expire"!=c.substring(0,6)&&(b=a.a[c],d+=(d?"|":"")+c+(a.a["expire"+c]?"-"+a.a["expire"+c]:"")+"|"+b);a.cookieWrite(a.cookieName,d,1)};a.b=function(d,c){return a.a!=j&&(c||!a.c||!a.c[d])?a.a[d]:
        j};a.d=function(d,c,b){a.a==j&&(a.a={});a.a[d]=c;b||a.M()};a.p=function(d,c){var b=new Date;b.setTime(b.getTime()+1E3*c);a.a==j&&(a.a={});a.a["expire"+d]=Math.floor(b.getTime()/1E3);0>c?(a.c||(a.c={}),a.c[d]=i):a.c&&(a.c[d]=p)};a.A=function(a){if(a&&("object"==typeof a&&(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:""+a),a&&(a=a.toUpperCase(),"NOTARGET"==a&&(a=q)),!a||a!=q&&!a.match(/^[0-9a-fA-F\-]+$/)))a="";return a};a.i=function(d,c){a.H(d);a.g!=j&&(a.g[d]=p);if(d==v){var b=
        a.b(n);if(!b){b="object"==typeof c&&c.mid?c.mid:a.A(c);if(!b){if(a.r){a.getAnalyticsVisitorID(null,!1,!0);return}b=a.m()}a.d(n,b)}if(!b||b==q)b="";"object"==typeof c&&((c.d_region||c.dcs_region||c.d_blob||c.blob)&&a.i(u,c),a.r&&c.mid&&a.i(t,{id:c.id}));a.l(n,[b])}if(d==u&&"object"==typeof c){b=604800;void 0!=c.id_sync_ttl&&c.id_sync_ttl&&(b=parseInt(c.id_sync_ttl));var e=a.b(r);e||((e=c.d_region)||(e=c.dcs_region),e&&(a.p(r,b),a.d(r,e)));e||(e="");a.l(r,[e]);e=a.b(o);if(c.d_blob||c.blob)(e=c.d_blob)||
    (e=c.blob),a.p(o,b),a.d(o,e);e||(e="");a.l(o,[e]);!c.error_msg&&a.o&&a.d(w,a.o)}if(d==t){b=a.b(l);b||((b=a.A(c))?a.p(o,-1):b=q,a.d(l,b));if(!b||b==q)b="";a.l(l,[b])}};a.g=j;a.n=function(d,c,b,e){var f="",g;if(a.isAllowed()&&(a.h(),f=a.b(d),!f&&(d==n?g=v:d==r||d==o?g=u:d==l&&(g=t),g))){if(c&&(a.g==j||!a.g[g]))a.g==j&&(a.g={}),a.g[g]=i,a.J(g,c,function(){if(!a.b(d)){var b="";d==n&&(b=a.m());a.i(g,b)}});a.L(d,b);c||a.i(g,{id:q});return""}if((d==n||d==l)&&f==q)f="",e=i;b&&e&&a.w(b,[f]);return f};a._setMarketingCloudFields=
        function(d){a.h();a.i(v,d)};a.setMarketingCloudVisitorID=function(d){a._setMarketingCloudFields(d)};a.r=p;a.getMarketingCloudVisitorID=function(d,c){return a.isAllowed()?(a.marketingCloudServer&&0>a.marketingCloudServer.indexOf(".demdex.net")&&(a.r=i),a.n(n,a.s("_setMarketingCloudFields"),d,c)):""};a.K=a.f={};a.z=p;a.o="";a.setCustomerIDs=function(d){a.f=d;if(a.isAllowed()){a.h();var d=a.b(w),c="",b,e;d||(d=0);for(b in a.f)e=a.f[b],!Object.prototype[b]&&e&&(c+=
        (c?"|":"")+b+"|"+e);a.o=a.C(c);a.o!=d&&(a.z=i,a.K())}};a.getCustomerIDs=a._setAnalyticsFields=function(d){a.h();a.i(t,d)};a.setAnalyticsVisitorID=a.getAnalyticsVisitorID=function(d,c,b){if(a.isAllowed()){var e="";b||(e=a.getMarketingCloudVisitorID(function(){a.getAnalyticsVisitorID(d,i)}));if(e||b){var f=b?a.marketingCloudServer:a.trackingServer,g="";a.loadSSL&&(b?a.marketingCloudServerSecure&&(f=a.marketingCloudServerSecure):a.trackingServerSecure&&
    (f=a.trackingServerSecure));f&&(g="http"+(a.loadSSL?"s":"")+"://"+f+"/id?callback=s_c_il%5B"+a._in+"%5D._set"+(b?"MarketingCloud":"Analytics")+"Fields&mcorgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&mid="+e:""));return a.n(b?n:l,g,d,c)}}return""};a._setAudienceManagerFields=a.s=function(d){var c=a.audienceManagerServer,b="",e=a.b(n),f=a.b(o,i),g=a.b(l),g=g&&g!=q?"&d_cid_ic=AVID%01"+encodeURIComponent(g):"",h="",j,k;a.loadSSL&&a.audienceManagerServerSecure&&(c=
        a.audienceManagerServerSecure);if(c){if(a.f)for(j in a.f)if(!Object.prototype[j]&&(b=a.f[j]))g+="&d_cid_ic="+encodeURIComponent(j)+"%01"+encodeURIComponent(b),a.audienceManagerCustomerIDDPIDs&&(k=a.audienceManagerCustomerIDDPIDs[j])&&(h+="&d_cid="+k+"%01"+encodeURIComponent(b));d||(d="_setAudienceManagerFields");b="http"+(a.loadSSL?"s":"")+"://"+c+"/id?d_rtbd=json&d_ver=2"+(!e&&a.r?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(a.marketingCloudOrgID)+(e?"&d_mid="+e:"")+(f?"&d_blob="+encodeURIComponent(f):
            "")+g+h+"&d_cb=s_c_il%5B"+a._in+"%5D."+d}return b};a.getAudienceManagerLocationHint=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerLocationHint(d,i)})){var b=a.b(l);b||(b=a.getAnalyticsVisitorID(function(){a.getAudienceManagerLocationHint(d,i)}));if(b)return a.n(r,a.s(),d,c)}return""};a.getAudienceManagerBlob=function(d,c){if(a.isAllowed()&&a.getMarketingCloudVisitorID(function(){a.getAudienceManagerBlob(d,i)})){var b=a.b(l);b||(b=a.getAnalyticsVisitorID();if(b)return b=a.s(),a.z&&a.p(o,-1),a.n(o,b,d,c)}return""};m.AUTH_STATE_UNAUTHENTICATED=0;m.AUTH_STATE_AUTHENTICATED=1;m.AUTH_STATE_ASSUMED_AUTHENTICATED=2;m.AUTH_STATE_LOGGEDOUT=3;a.setAuthState=function(d){a.isAllowed()&&(a.h(),a.d(y,d))};a.getAuthState=function(){return a.isAllowed()?(a.h(),a.b(y)):0};a.k="";a.q={};a.u="";a.v={};a.getSupplementalDataID=function(d,c){!a.k&&!c&&(a.k=a.m(1));var b=a.k;a.u&&!a.v[d]?(b=a.u,a.v[d]=i):b&&(a.q[d]&&(a.u=a.k,a.v=a.q,a.k=b=!c?a.m(1):"",a.q={}),b&&(a.q[d]=
        i));return b};0>k.indexOf("@")&&(k+="@AdobeOrg");a.marketingCloudOrgID=k;a.namespace=s;a.cookieName="AMCV_"+k;a.cookieDomain=a.I();a.cookieDomain==h.location.hostname&&(a.cookieDomain="");if(s){var m="AMCV_"+s,A=a.cookieRead(a.cookieName),z=a.cookieRead(m);!A&&z&&(a.cookieWrite(a.cookieName,z,1),a.cookieWrite(m,"",-60))}a.loadSSL=0<=h.location.protocol.toLowerCase().indexOf("https");a.loadTimeout=500;a.marketingCloudServer=a.audienceManagerServer="dpm.demdex.net"}
Visitor.getInstance=function(k,s){var a,h=window.s_c_il,m;0>k.indexOf("@")&&(k+="@AdobeOrg");if(h)for(m=0;m<h.length;m++)if((a=h[m])&&"Visitor"==a._c&&(a.marketingCloudOrgID==k||s&&a.namespace==s))return a;return new Visitor(k,s)};

var visitor = new Visitor("96F41CFE53295F140A490D45@AdobeOrg");
visitor.trackingServer = "goldmansachs.122.2o7.net"; // same as s.trackingServer


gsAnalytics = new GSAnalytics();
