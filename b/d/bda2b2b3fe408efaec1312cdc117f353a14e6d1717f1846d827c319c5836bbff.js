(function (doc, win) {
    var ID = "0cceecb9cae9f51a31123c541910d59b";
    win.reviveAsync = win.reviveAsync || {};

    /*
     * IE backwards compatibility
     */
    (function (w) {

        if ( typeof w.CustomEvent === "function" ) return false;

        
        CustomEvent.prototype = w.Event.prototype;

        w.CustomEvent = CustomEvent;
    })(win);

    try {
        if (!win.reviveAsync.hasOwnProperty(ID)) {
            var rv = win.reviveAsync[ID] = {
                id: Object.keys(win.reviveAsync).length,
                name: "revive",
                seq: 0,

                /**
                 * Initialise the async delivery mechanism.
                 */
                main: 

                /**
                 * The start event handler. Delivery can be prevented by setting e.detail.start = false.
                 *
                 * @param {CustomEvent} e
                 */
                start: 

                /**
                 * The refresh event handler.
                 *
                 * @param {CustomEvent} e
                 */
                refresh: 

                /**
                 * Perform the AJAX call.
                 *
                 * @param {string} url
                 * @param {Object} data
                 */
                ajax: 

                /**
                 * Utility method to generate the query string.
                 *
                 * @param {Object} data the input hash
                 * @param {string} arrayName the variable "array" name (optional)
                 * @returns {Array}
                 */
                encode: 

                /**
                 * Start the asynchronous process to fill the <ins> tags.
                 *
                 * @param {Array} data
                 */
                apply: function (data) {
                    if (data.zones.length) {
                        var url = "https://newrevive.detik.com/delivery/asyncspc.php";

                        data.zones = data.zones.join("|");
                        data.loc = doc.location.href;
                        if (doc.referrer) {
                            data.referer = doc.referrer;
                        }

                        rv.ajax(url, data);
                    }
                },

                /**
                 * Search the DOM for <ins> tags that need to be filled.
                 *
                 * @returns {{zones: Array, prefix: string}}
                 */
                detect: function () {
                    var elements = doc.querySelectorAll("ins[" + rv.getDataAttr("id") + "='" + ID + "']");
                    var data = {
                        zones: [],
                        prefix: rv.name + "-" + rv.id + "-"
                    };

                    for (var idx = 0; idx < elements.length; idx++) {
                        var zoneidAttr = rv.getDataAttr("zoneid"),
                            seqAttr = rv.getDataAttr("seq"),
                            i = elements[idx],
                            seq;

                        if (i.hasAttribute(seqAttr)) {
                            seq = i.getAttribute(seqAttr);
                        } else {
                            seq = rv.seq++;
                            i.setAttribute(seqAttr, seq);
                            i.id = data.prefix + seq;
                        }

                        if (i.hasAttribute(zoneidAttr)) {
                            var loadedAttr = rv.getDataAttr("loaded"),
                                regex = new RegExp("^" + rv.getDataAttr("(.*)") + "$"),
                                m;

                            if (i.hasAttribute(loadedAttr) && i.getAttribute(loadedAttr)) {
                                // The tag has already been loaded, skip
                                continue;
                            }

                            i.setAttribute(rv.getDataAttr("loaded"), "1");

                            for (var j = 0; j < i.attributes.length; j++) {
                                if (m = i.attributes[j].name.match(regex)) {
                                    if ('zoneid' === m[1]) {
                                        data.zones[seq] = i.attributes[j].value;
                                    } else if (!(/^(id|seq|loaded)$/).test(m[1])) {
                                        data[m[1]] = i.attributes[j].value;
                                    }
                                }
                            }
                        }
                    }

                    return data;
                },

                /**
                 * Create and return a new iframe.
                 *
                 * @param {Object} data
                 * @returns {Element}
                 */
                createFrame: function (data) {
                    var i = doc.createElement('IFRAME'), s = i.style;

                    i.scrolling = "no";
                    i.frameBorder = 0;
                    i.width = data.width > 0 ? data.width : 0;
                    i.height = data.height > 0 ? data.height : 0;
                    s.border = 0;
                    s.overflow = "hidden";

                    return i;
                },

                /**
                 * Inject the HTML into the iframe.
                 *
                 * @param {Element} iframe
                 * @param {string} html
                 */
                loadFrame: 

                /**
                 * The AJAX Callback.
                 *
                 * @param {Object} data
                 */
                spc: function (data) {

                    let numOfAllElementsNeedLoading = 0;
                    let loadedElementsNeedLoading = 0;
                    let arrayZone = [];
                    var selfParent = this;
                    // Post-ajax hook
                    this.dispatchEvent('receive', data);

                    for (var id in data) {
                        if (data.hasOwnProperty(id)) {
                            var d = data[id];
                            var ins = doc.getElementById(id);

                            if (ins) {
                                var newIns = ins.cloneNode(false);
                                /* Prepare data */
                                let regex = /<div.*id=.beacon_.*<img.*src=\'([^"]+)\'.*<\/div>/;
                                let beaconElement  = regex.exec(d.html)[1];
                                let query = beaconElement.split('?');
                                let dataQuery = rv.getParseQuery(query[1].replace(/amp;/gi,''),"&");
                                let zoneList = {};
                                zoneList.bannerid = dataQuery.bannerid;
                                zoneList.zoneid = dataQuery.zoneid;
                                zoneList.height = data[id].height;
                                zoneList.width = data[id].width;
                                arrayZone.push(zoneList);
                                /* Prepare data End */

                                if (d.iframeFriendly) {
                                    var ifr = rv.createFrame(d);
                                    newIns.appendChild(ifr);
                                    ins.parentNode.replaceChild(newIns, ins);
                                    rv.loadFrame(ifr, d.html);
                                    ifr.addEventListener('load',function () {
                                        loadedElementsNeedLoading++;
                                        if(loadedElementsNeedLoading === numOfAllElementsNeedLoading){
                                            console.log('completed');
                                            selfParent.dispatchEvent('afterRenderBanner', arrayZone);
                                        }
                                    });
                                    ifr.addEventListener('error', function(){
                                            
                                            loadedElementsNeedLoading++;
                                            if(loadedElementsNeedLoading === numOfAllElementsNeedLoading){
                                                console.log('completed');
                                                selfParent.dispatchEvent('afterRenderBanner', arrayZone);
                                            }

                                            console.log('error listener Iframe Async Element Banner');
                                            //console.log(this);
                                    });
                                    numOfAllElementsNeedLoading++;
                                } else {
                                    newIns.style.textDecoration = 'none';
                                    newIns.innerHTML = d.html;
                                    var scripts = newIns.getElementsByTagName('SCRIPT');

                                    for (var i = 0; i < scripts.length; i++) {
                                        var s = document.createElement('SCRIPT');
                                        var a = scripts[i].attributes;
                                        for (var j = 0; j < a.length; j++) {
                                            s[a[j].nodeName] = a[j].value;
                                        }
                                        if (scripts[i].innerHTML) {
                                            s.text = scripts[i].innerHTML;
                                        }

                                        scripts[i].parentNode.replaceChild(s, scripts[i]);
                                    }

                                    ins.parentNode.replaceChild(newIns, ins);
                                    /* add loaded event */
                                    let elementsNeedLoading = document.getElementById(id).querySelectorAll('img,[type=image]');
                                    numOfAllElementsNeedLoading += elementsNeedLoading.length;
                                    for(let i=0;i < elementsNeedLoading.length;i++){
                                        //console.log(this);
                                        elementsNeedLoading[i].addEventListener('load', function(){
                                            //console.log(this);
                                            loadedElementsNeedLoading++;
                                            if(loadedElementsNeedLoading === numOfAllElementsNeedLoading){
                                                console.log('completed');
                                                selfParent.dispatchEvent('afterRenderBanner', arrayZone);
                                            }
                                        });
                                        
                                        elementsNeedLoading[i].addEventListener('error', function(){
                                            
                                            loadedElementsNeedLoading++;
                                            if(loadedElementsNeedLoading === numOfAllElementsNeedLoading){
                                                console.log('completed');
                                                selfParent.dispatchEvent('afterRenderBanner', arrayZone);
                                            }

                                            console.log('error listener Async Element Banner');
                                            //console.log(this);
                                        });

                                    }
                                }
                            }
                        }
                    }



                },

                /**
                 * return query parse
                 * @params {string} query
                 * @return {object}
                 */
                getParseQuery : function (queryString,by) {
                    var query = {};
                    var pairs = queryString.split(by);
                    for (var i = 0; i < pairs.length; i++) {
                        var pair = pairs[i].split('=');
                        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
                    }
                    return query;
                },

                /**
                 * Returnrs the data HTML attribute name.
                 *
                 * @param {string} name
                 * @returns {string}
                 */
                getDataAttr: 

                /**
                 * Returns the custom event name.
                 *
                 * @param {string} eventName
                 * @returns {string}
                 */
                getEventName: 

                /**
                 * Listen for a custom event.
                 *
                 * @param {string} eventName
                 * @param {EventListener|Function} callback
                 */
                addEventListener: 

                /**
                 * Remove an existing listener.
                 *
                 * @param {string} eventName
                 * @param {EventListener|Function} callback
                 */
                removeEventListener: 

                /**
                 * Dispatch a custom event.
                 *
                 * @param {string} eventName
                 * @param {Object} [data]
                 */
                dispatchEvent:             };

            // Register the DOM event listeners or start if the DOM is already loaded
            rv.main();
        }
    } catch (e) {
        if (console.log) {
            console.log(e);
        }
    }
})(document, window);/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Modified for use in Revive Adserver
 */
if (typeof org == "undefined")
    var org = {};
if (typeof org.openx == "undefined")
    org.openx = {};
if (typeof org.openx.util == "undefined")
    org.openx.util = {};
if (typeof org.openx.SWFObjectUtil == "undefined")
    org.openx.SWFObjectUtil = {};

org.openx.SWFObject = org.openx.SWFObject.prototype = {
    setAttribute: function (name, value) {
        this.attributes[name] = value;
    },
    getAttribute: function (name) {
        return this.attributes[name];
    },
    addParam: function (name, value) {
        this.params[name] = value;
    },
    getParams: function () {
        return this.params;
    },
    addVariable: 
    getVariable: 
    getVariables: 
    getVariablePairs: 
    getSWFHTML: 
    write: 
    logImpression: }

/* ---- detection functions ---- */
org.openx.SWFObjectUtil.getPlayerVersion = function () {
    var PlayerVersion = new org.openx.PlayerVersion([0, 0, 0]);
    if (navigator.plugins && navigator.mimeTypes.length) {
        var x = navigator.plugins["Shockwave Flash"];
        if (x && x.description) {
            PlayerVersion = new org.openx.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".").split("."));
        }
    } else if (navigator.userAgent && navigator.userAgent.indexOf("Windows CE") >= 0) { // if Windows CE
        var axo = 1;
        var counter = 3;
        while (axo) {
            try {
                counter++;
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + counter);
//				document.write("player v: "+ counter);
                PlayerVersion = new org.openx.PlayerVersion([counter, 0, 0]);
            } catch (e) {
                axo = null;
            }
        }
    } else { // Win IE (non mobile)
        // do minor version lookup in IE, but avoid fp6 crashing issues
        // see http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
        try {
            var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
        } catch (e) {
            try {
                var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                PlayerVersion = new org.openx.PlayerVersion([6, 0, 21]);
                axo.AllowScriptAccess = "always"; // error if player version < 6.0.47 (thanks to Michael Williams @ Adobe for this code)
            } catch (e) {
                if (PlayerVersion.major == 6) {
                    return PlayerVersion;
                }
            }
            try {
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            } catch (e) {
            }
        }
        if (axo != null) {
            PlayerVersion = new org.openx.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));
        }
    }
    return PlayerVersion;
}
org.openx.PlayerVersion = org.openx.PlayerVersion.prototype.versionIsValid = function (fv) {
    if (this.major < fv.major)
        return false;
    if (this.major > fv.major)
        return true;
    if (this.minor < fv.minor)
        return false;
    if (this.minor > fv.minor)
        return true;
    if (this.rev < fv.rev)
        return false;
    return true;
}
/* ---- get value of query string param ---- */
org.openx.util = {
    getRequestParameter: }
/* fix for video streaming bug */
org.openx.SWFObjectUtil.cleanupSWFs = // fixes bug in some fp9 versions see http://blog.deconcept.com/2006/07/28/swfobject-143-released/
if (org.openx.SWFObject.doPrepUnload) {
    if (!org.openx.unloadSet) {
        org.openx.SWFObjectUtil.prepUnload =         window.attachEvent("onbeforeunload", org.openx.SWFObjectUtil.prepUnload);
        org.openx.unloadSet = true;
    }
}
/* add document.getElementById if needed (mobile IE < 5) */
if (!document.getElementById && document.all) {
    document.getElementById = }

/* add some aliases for ease of use/backwards compatibility */
var getQueryParamValue = org.openx.util.getRequestParameter;
var FlashObject = org.openx.SWFObject; // for legacy support
var SWFObject = org.openx.SWFObject;

/* Set a document variable to track if this code has been included on the current page */
document.mmm_fo = 1;
