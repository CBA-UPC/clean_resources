/*
 * advancedLinkTracking v.2.2
 * Tested with Tagbuilder 4.1.3.2 (minified)
 *
 * Link tracking plugin with options to support as many configurations as possible.
 *
 * USAGE:
 * See external documentation.
 *
 * Author: Wes Contreras
 */

(function(window, document, undefined) {
  var AdvLinkTrack = {

    trackersEnabled: [],
    trackersForExclude: [],
    trackerData: {},
    trigger: '',

    // Helper function: Accepts any vv, returns true if vv is an Array object
    isArray: function (vv) {
      return (typeof(vv) === 'object' && vv.constructor === Array);
    },

    // Helper function: Accepts any vv, returns true if vv is a RegExp object
    isRegExp: function (vv) {
      return (typeof(vv) === 'object' && vv.constructor === RegExp);
    },

    // Helper function: Accepts a string, returns string escaped as appropriate for RegExp constructor
    escapeRegExp: 

    // Helper function: Accepts a string, returns argsa-formatted parameter name
    stringToParam: function (str) {
      if (str.indexOf('WT.') === 0 || str.indexOf('DCS.') === 0 || str.indexOf('DCSext.') === 0) {
        return str;
      } else {
        return 'DCSext.' + str;
      }
    },

    // Helper function: Accepts array of strings like ['a','b']. Returns object like {'a':1,'b':1}
    arrayToChecklist: function(arr) {
      var t = {}, i, len;
      if (!AdvLinkTrack.isArray(arr)) {
        return {};
      }
      len = arr.length;
      for (i=0; i < len; i++) {
        t[arr[i].toUpperCase()] = 1;
      }
      return t;
    },

    // Helper function: Accepts DOM node and array of tags. Returns first containing DOM node of listed tag type
    // or empty object if no parent found of that tag type.
    findParent: function (e, tags) {
      var t = AdvLinkTrack.arrayToChecklist(AdvLinkTrack.cleanArray(tags));
      while (e && e.tagName && !t[e.tagName.toUpperCase()]) {
        e = e.parentElement || e.parentNode;
        if (e === document) {
          return {};
        }
      }
      return e;
    },

    // Helper function: Accepts array of strings, returns even-numbered elements as argsa-formatted parameter names
    cleanArgsaArray: function (arr) {
      var newarr = [], len, i;
      if (AdvLinkTrack.isArray(arr) && arr.length % 2 === 0) {
        len = arr.length;
        for (i = 0; i < len; i += 2) {
          newarr.push(AdvLinkTrack.stringToParam(arr[i]), arr[i + 1]);
        }
      } else {
        return null;
      }
      return newarr;
    },

    // Helper function: Accepts an array, returns array after removing elements with null values or strings with
    // only white space.
    removeEmpties: function (arr) {
      var len, i, newarr = [];
      len = arr.length;
      if (len > 0) {
        for (i = 0; i < len; i++) {
          if (typeof(arr[i]) === 'string' && arr[i].trim === '') {
            arr[i] = null;
          }
          if (arr[i] !== null) {
            newarr.push(arr[i]);
          }
        }
      }
      return newarr;
    },

    // Helper function: Accepts variable and optional delimiter string; always returns an array. If variable is array,
    // returns array unmodified. If variable is a string, splits string by delimiter and returns array. If variable
    // is anything else, returns single-element array containing that value. Always removes empty elements first.
    cleanArray: function (arr, delim) {
      var newarr = [];
      if (delim && typeof(arr) === 'string') {
        newarr = arr.split(delim);
      } else if (AdvLinkTrack.isArray(arr)) {
        newarr = arr;
      } else {
        newarr = [arr];
      }
      return AdvLinkTrack.removeEmpties(newarr);
    },

    // Helper function: Returns boolean value if the tracker has that property set, else returns the boolean value
    // of the AdvLinkTrack property of the same name.
    reconcileBoolean: function(tracker, prop) {
      if (tracker[prop]) {
        return true;
      } else if (tracker[prop] === false) {
        return false;
      } else {
        return AdvLinkTrack[prop];
      }
    },

    // Helper function: Accepts a string. Returns copy of string with HTML elements removed, leading and trailing
    // white space removed, and any amount of internal white space replaced by single space.
    readableHTML: function (str) {
      var txt, nn;
      nn = document.createElement("DIV");
      nn.innerHTML = str;
      txt = nn.textContent || nn.innerText || "";
      txt = txt.replace(/\s+/g, ' ').trim();
      return txt;
    },

    // Helper function: Accepts a DOM node and a tester function; the tester function must accept a DOM node and return
    // true if a match is found. This helper will test the function against the current node, its parent, its parent,
    // and so on until reaching the document level, and returns true if the tester returns true against at least one
    // of those nodes.
    ancestorTest: function(node, tester) {
      var n;
      if (typeof(node) !== 'object' || typeof(tester) !== 'function') {
        return false;
      }
      n = node;
      while (n !== document) {
        if (tester(n)) {
          return true;
        }
        n = n.parentNode;
      }
      return false;
    },

    // Helper function: Accepts a DOM node and an attribute name. Returns the value of that attribute from that node,
    // or it's parent, or it's parent, up to the document level. If the attribute is not present, returns null.
    getFromAncestor: function(node, attr) {
      var n;
      if (typeof(node) !== 'object' || typeof(attr) !== 'string') {
        return null;
      }
      n = node;
      while (n !== document) {
        if (n.hasAttribute(attr)) {
          return n.getAttribute(attr);
        }
        n = n.parentNode;
      }
      return null;
    },

    // Helper function: Accepts DOM node and an array of ID values. Returns true if the node has that ID, or has an
    // ancestor with that ID. Otherwise, returns false.
    inIDCheck: function(node, id) {
      var n, len, i;
      if (typeof(node) !== 'object' || !AdvLinkTrack.isArray(id)) {
        return false;
      }
      len = id.length;
      return AdvLinkTrack.ancestorTest(node, function(node) {
        for (i = 0; i < len; i++) {
          if (node.id === id[i]) {
            return true;
          }
        }
        return false;
      });
    },

    // Helper function: Accepts html DOM node and an array of class names. Returns true if node has a class name
    // in the array or has an ancestor with such a class name. Otherwise, returns false.
    inClassCheck: function(node, cc) {
      var classNames;
      if (typeof(node) !== 'object' || !AdvLinkTrack.isArray(cc)) {
        return false;
      }
      classNames = AdvLinkTrack.arrayToChecklist(cc);
      return AdvLinkTrack.ancestorTest(node, function(node) {
        var c, len, i;
        c = node.className.split(' ');
        len = c.length;
        for (i = 0; i < len; i++) {
          if (classNames[c[i].toUpperCase()]) {
            return true;
          }
        }
        return false;
      });
    },

    // Helper function: Accepts string, parses it for parameter/value pairs and returns argsa-suitable array
    // String should be in form param=value;;param=value;;etc
    parseParamString: function (pstring) {
      var len, i, pairs, paramval, ret = [];
      pairs = AdvLinkTrack.cleanArray(pstring, ';;');
      len = pairs.length;
      for (i = 0; i < len; i++) {
        if (pairs[i].indexOf('=') !== -1) {
          paramval = AdvLinkTrack.cleanArray(pairs[i], '=');
          if (paramval.length === 2) {
            paramval[0] = AdvLinkTrack.stringToParam(paramval[0]);
            ret = ret.concat(paramval);
          }
        }
      }
      return ret;
    },

    // Accepts HTML DOM node. Returns WT.ti value according to this plugin's 'content' methodology.
    getContentTitle: function (el, tracker) {
      var len, i, img, ttl = '';
      len = tracker.titleAttrib.length;
      for (i = 0; i < len; i++) {
        if (el.getAttribute && el.getAttribute(tracker.titleAttrib[i])) {
          return el.getAttribute(tracker.titleAttrib[i]);
        }
      }
      if (el.getElementsByTagName) {
        img = el.getElementsByTagName('img')[0];
      }
      if (img) {
        ttl = img.alt;
      }
      ttl = ttl || el.innerText || el.innerHTML;
      ttl = AdvLinkTrack.readableHTML(ttl);
      ttl = ttl.trim();
      return ttl;
    },

    // Accepts a DOM node. Returns WT.nv value according to this plugin's 'parent_div' methodology.
    getNvFromParentDiv: function (e, tracker) {
      var d = AdvLinkTrack.findParent(e, 'div');
      if (d.getAttribute(tracker.nvOverride)) {
        return d.getAttribute(tracker.nvOverride);
      }
      if (d.getAttribute('id')) {
        return d.getAttribute('id');
      }
      if (d.className) {
        return d.className;
      }
      return '';
    },

    // Child transform to harvest data from HTML attribute and push into WT parameters
    captureHTMLDataTransform: function (dcs, opt, attribNames, inherit) {
      var el, len, i, att;
      el = opt.element || {};
      len = attribNames.length;
      for (i = 0; i < len; i++) {
        att = null;
        if (inherit) {
          att = AdvLinkTrack.getFromAncestor(el, attribNames[i]);
        } else {
          att = el.getAttribute(attribNames[i]);
        }
        if (att) {
          opt.argsa.push('WT.z_' + attribNames[i], att);
        }
      }
    },

    // Child transform to harvest formatted parameter/value pairs from HTML attribute and push into WT parameters
    captureHTMLDataParams: function (dcs, opt, attribNames, inherit) {
      var el, len, i, att;
      el = opt.element || {};
      len = attribNames.length;
      for (i = 0; i < len; i++) {
        att = null;
        if (inherit) {
          att = AdvLinkTrack.getFromAncestor(el, attribNames[i]);
        } else {
          att = el.getAttribute(attribNames[i]);
        }
        if (att) {
          Array.prototype.push.apply(opt.argsa, AdvLinkTrack.parseParamString(att));
        }
      }
    },

    clearParams: function (opt, params, except) {
      var lenp, lene, i, toClear = {};
      if (!except) {
        except = [];
      }
      lenp = params.length;
      for (i = 0; i < lenp; i++) {
        toClear[params[i]] = true;
      }
      lene = except.length;
      for (i = 0; i < lene; i++) {
        if (toClear[except[i]]) {
          toClear[except[i]] = false;
        }
      }
      for (i = 0; i < lenp; i++) {
        if (toClear[params[i]]) {
          opt.argsa.push(params[i], '');
        }
      }
    },

    // Helper function adapted from WT tag
    getURIArrFromEvent: function (e) {
      var a, res;
      //Can't pull hostname and pathname from event due to the way IE
      //handles relative links
      a = document.createElement("a");
      a.href = e.href;
      res = {};
      res.dcssip = a.hostname ? (a.hostname.split(":")[0]) : window.location.hostname;
      res.dcsuri = a.pathname ? ((a.pathname.indexOf("/") !== 0) ? "/" + a.pathname : a.pathname) : "/";
      res.dcsqry = a.search ? a.search.substring(a.search.indexOf("?") + 1, a.search.length) : "";
      res.dcsref = window.location;
      if (a.hash && a.hash !== '' && a.hash !== '#') {
        res.hash = a.hash;
      }
      return res;
    },

    // Helper function adapted from WT tag
    dcsIsRightClick: function (evt) {
      var rightclick = false;
      if (!evt) {
        evt = window.event;
      }
      if (evt.which) {
        rightclick = (evt.which === 3);
      }
      else if (evt.button) {
        rightclick = (evt.button === 2);
      }
      return rightclick;
    },

    // Helper function adapted from WT tag
    dcsIsOnsite: function (host, onsiteDoms) {
      var len, i;
      if (host.length === 0) {
        return false;
      }
      host = host.toLowerCase();
      if (host === window.location.hostname.toLowerCase()) {
        return true;
      }
      if (onsiteDoms.length > 0) {
        len = onsiteDoms.length;
        for (i = 0; i < len; i++) {
          if (typeof(onsiteDoms[i]) === 'string') {
            if (host === onsiteDoms[i]) {
              return true;
            }
          } else {
            if (typeof(onsiteDoms[i].test) === 'function') {
              if(onsiteDoms[i].test(host)) {
                return true;
              }
            }
          }
        }
      }
      return false;
    },

    // Check a set of includes to determine if the current event matches at least one of them
    checkFilters: function (tracker, dcs, opt, res) {
      var len, i, inc;
      len = tracker.excludes.length;
      if (len > 0) {
        for (i = 0; i < len; i++) {
          inc = tracker.excludes[i];
          if (typeof(AdvLinkTrack.filterTest[inc.type]) === 'function' && AdvLinkTrack.filterTest[inc.type](inc, dcs, opt, res)) {
            return false;
          }
        }
      }
      len = tracker.includes.length;
      if (len > 0) {
        for (i = 0; i < len; i++) {
          inc = tracker.includes[i];
          if (typeof(AdvLinkTrack.filterTest[inc.type]) === 'function' && AdvLinkTrack.filterTest[inc.type](inc, dcs, opt, res)) {
            return true;
          }
        }
      }
      return false;
    },

    // Test functions for individual filters
    filterTest: {

      // --- Start filter test functions

      // Matches anything
      alwaysTrue: 

      // Requires inc.attr to be object. Matches if element clicked on has an attribute with the same name as a
      // property of inc.attr, and with a matching value (inc.attr[val]=true matches all values of attribute val).
      hasAttribute: function (inc, dcs, opt, res) {
        var i;
        for (i in inc.attr) {
          if (inc.attr.hasOwnProperty(i) && opt.element.hasAttribute(i)) {
            if (inc.attr[i] === true || opt.element.getAttribute(i) === inc.attr[i]) {
              return true;
            }
          }
        }
        return false;
      },

      // Requires inc.ext to be array of file extensions. Matches if destination URL points to file with one of those
      // file extensions.
      hasFileExtension: function (inc, dcs, opt, res) {
        var pth, ext, len, i;
        pth = opt.element.pathname;
        if (typeof(pth) !== 'string' || pth.indexOf('.') === -1) {
          return false;
        }
        ext = pth.substring(pth.lastIndexOf('.') + 1).toLowerCase();
        if (ext.indexOf('#') !== -1) {
          ext = ext.substring(0, ext.indexOf('#'));
        }
        if (ext.indexOf('?') !== -1) {
          ext = ext.substring(0, ext.indexOf('?'));
        }
        len = inc.ext.length;
        for (i = 0; i < len; i++) {
          if (ext === inc.ext[i]) {
            return true;
          }
        }
        return false;
      },

      // Requires inc.patterns to be array of regex objects. Matches if link's href matches one of those patterns.
      hasURLPattern: function (inc, dcs, opt, res) {
        var i, len, url;
        len = inc.patterns.length;
        url = opt.element.href;
        for (i = 0; i < len; i++) {
          if (url.match(inc.patterns[i]) !== null) {
            return true;
          }
        }
        return false;
      },

      // Requires inc.classes to be array of class names. Matches if element has one of those classes, or is contained
      // in a parent node that has one of those classes.
      inClass: function (inc, dcs, opt, res) {
        return AdvLinkTrack.inClassCheck(opt.element, inc.classes);
      },

      // Requires inc.ids to be array of IDs. Matches if element has one of those IDs, or is contained in a parent
      // node that has that one of those IDs.
      inID: function (inc, dcs, opt, res) {
        return AdvLinkTrack.inIDCheck(opt.element, inc.ids);
      },

      // Matches if the event is an anchor tag with the JavaScript protocol
      isJS: function (inc, dcs, opt, res) {
        return (opt.element.href && opt.element.protocol && opt.element.protocol.toLowerCase() === 'javascript:');
      },

      // Requires inc.doms to be array of domains. Matches if link's href matches current domain or domain in doms array.
      isOnsite: function (inc, dcs, opt, res) {
        return AdvLinkTrack.dcsIsOnsite(res.dcssip, inc.doms);
      },

      // Matches if event is triggered by a right-click.
      isRightClick: 

      // Matches according to a custom function.
      zFunction: 

      // --- End filter test functions
    },

    // Initializations for each supported tracker type
    trackerInit: {
      // --- Start tracker initialization functions

      // Captures all anchor tags on page
      all_links: function (tracker) {
        tracker.includes = [{type: 'alwaysTrue'}];
        return tracker;
      },

      // Captures links which have a given attribute value
      attributes: function (tracker) {
        if (typeof(tracker.attributes) === 'object') {
          tracker.includes = [{type: "hasAttribute", attr:tracker.attributes}];
        }
        return tracker;
      },

      // Captures links which have or are children of nodes which have specified classes
      classes: function (tracker) {
        if (tracker.classNames) {
          tracker.classNames = AdvLinkTrack.cleanArray(tracker.classNames, ' ');
        }
        if (AdvLinkTrack.isArray(tracker.classNames) && tracker.classNames.length > 0) {
          tracker.includes = [{type: "inClass", classes: tracker.classNames}];
        }
        return tracker;
      },

      // Captures links which have or are children of nodes which have specified ID
      ids: function (tracker) {
        if (tracker.idNames) {
          tracker.idNames = AdvLinkTrack.cleanArray(tracker.idNames, ' ');
        }
        if (AdvLinkTrack.isArray(tracker.idNames) && tracker.idNames.length > 0) {
          tracker.includes = [{type: "inID", ids: tracker.idNames}];
        }
        return tracker;
      },

      // Captures download links
      downloads: function (tracker) {
        if (tracker.downloadTypes) {
          tracker.downloadTypes = AdvLinkTrack.cleanArray(tracker.downloadTypes, ',');
        }
        if (AdvLinkTrack.isArray(tracker.downloadTypes) && tracker.downloadTypes.length > 0) {
          tracker.titlePrefix = tracker.titlePrefix || 'Download';
          tracker.includes = [{type: 'hasFileExtension', ext: tracker.downloadTypes}];
          tracker.transform = function (tracker, dcs, opt, res) {
            opt.argsa.push("WT.dl", "20");
          };
        }
        return tracker;
      },

      // Captures JavaScript links
      javascript: function (tracker) {
        tracker.titlePrefix = tracker.titlePrefix || 'JavaScript';
        tracker.includes = [{type:'isJS'}];
        tracker.transform = function (tracker, dcs, opt, res) {
          opt.argsa.push("WT.dl", "22");
        };
        return tracker;
      },

      // Captures offsite links
      offsite: function (tracker) {
        tracker.titlePrefix = tracker.titlePrefix || 'Offsite';
        tracker.title = tracker.title || 'url';
        tracker.includes = [{type: 'alwaysTrue'}];
        tracker.excludes = [{type: 'isOnsite', doms: tracker.onsiteDoms}];
        tracker.transform = function (tt, dcs, opt, res) {
          opt.argsa.push("WT.dl", "24");
        };
        return tracker;
      },

      //Captures links matching specified URL patterns
      urls: function (tracker) {
        var i, len;
        if (!tracker.URLPatterns) {
          return null;
        }
        tracker.URLPatterns = AdvLinkTrack.cleanArray(tracker.URLPatterns);
        len = tracker.URLPatterns.length;
        for (i = 0; i < len; i++) {
          if (typeof(tracker.URLPatterns[i]) === 'string') {
            tracker.URLPatterns[i] = new RegExp(AdvLinkTrack.escapeRegExp(tracker.URLPatterns[i]));
          } else if (!AdvLinkTrack.isRegExp(tracker.URLPatterns[i])) {
            tracker.URLPatterns.splice(i, 1);
          }
        }
        tracker.includes = [{type: 'hasURLPattern', patterns: tracker.URLPatterns}];
        return tracker;
      },

      custom: function (tracker) {
        var len, i;
        if (!AdvLinkTrack.isArray(tracker.includes)) {
          return null;
        }
        len = tracker.includes.length;
        for (i = 0; i < len; i++) {
          if (typeof(tracker.includes[i].type) !== 'string') {
            return null;
          }
          if (typeof(AdvLinkTrack.filterTest[tracker.includes[i].type]) !== 'function') {
            return null;
          }
        }
        if (!AdvLinkTrack.isArray(tracker.excludes)) {
          tracker.excludes = [];
        }
        len = tracker.excludes.length;
        for (i = 0; i < len; i++) {
          if (typeof(tracker.excludes[i].type) !== 'string') {
            return null;
          }
        }
        return tracker;
      }
      // --- End tracker initialization functions
    },

    // Public function to register link tracker; requires unique name, must have include function
    addLinkTrack: function (tracker) {
      if (typeof(tracker.name) === 'string' && tracker.includes && tracker.includes.length > 0 && tracker.excludes) {
        if (typeof(AdvLinkTrack.trackerData[tracker.name]) === 'undefined') {
          if (tracker.exclude === true) {
            AdvLinkTrack.trackersForExclude.push(tracker.name);
          } else {
            AdvLinkTrack.trackersEnabled.push(tracker.name);
          }
          AdvLinkTrack.trackerData[tracker.name] = tracker;
        }
      }
    },

    // Filter to exclude any events that match an exclude or that don't match any registered include
    advancedFilter: function (dcs, opt) {
      var len, i, tracker, res;
      res = AdvLinkTrack.getURIArrFromEvent(opt.element || {});
      // If it matches an exclude filter, do not fire an event
      len = AdvLinkTrack.trackersForExclude.length;
      if (len > 0) {
        for (i = 0; i < len; i++) {
          tracker = AdvLinkTrack.trackerData[AdvLinkTrack.trackersForExclude[i]];
          if (AdvLinkTrack.checkFilters(tracker, dcs, opt, res)) {
            AdvLinkTrack.trigger = null;
            return true;
          }
        }
      }
      // Else if it matches an include filter, fire an event
      len = AdvLinkTrack.trackersEnabled.length;
      for (i = 0; i < len; i++) {
        tracker = AdvLinkTrack.trackerData[AdvLinkTrack.trackersEnabled[i]];
        if (AdvLinkTrack.checkFilters(tracker, dcs, opt, res)) {
          AdvLinkTrack.trigger = tracker.name;
          return false;
        }
      }
      // Else if it matches nothing, do not fire an event
      return true;
    },

    // Main transform function to set WT parameters in priority order
    advancedTransform: function (dcs, opt) {
      var tracker, res, len, i, arrp,
        paramsToClear = ['WT.ac', 'WT.ad', 'WT.mc_id', 'WT.oss', 'WT.oss_r', 'WT.si_n', 'WT.si_p', 'WT.si_x', 'WT.srch', 'WT.tx_e', 'WT.tx_s', 'WT.tx_i', 'WT.tx_id', 'WT.tx_it', 'WT.pn_sku'];
      tracker = AdvLinkTrack.trackerData[AdvLinkTrack.trigger];
      res = AdvLinkTrack.getURIArrFromEvent(opt.element || {});
      AdvLinkTrack.clearParams(opt, paramsToClear, tracker.inheritParams);
      opt.argsa.push(
        "DCS.dcssip", res.dcssip,
        "DCS.dcsqry", res.dcsqry,
        "DCS.dcsref", res.dcsref,
        "WT.dl", "99"
      );
      if (tracker.hashInURI && res.hash) {
        opt.argsa.push("DCS.dcsuri", res.dcsuri + res.hash);
      } else {
        opt.argsa.push("DCS.dcsuri", res.dcsuri);
      }
      if (tracker.hashParam) {
        opt.argsa.push(tracker.hashParam, res.hash);
      }
      if (AdvLinkTrack.hashParam) {
        opt.argsa.push(AdvLinkTrack.hashParam, res.hash);
      }
      if (tracker.title === 'url') {
        opt.argsa.push("WT.ti", tracker.titlePrefix + ": " + res.dcssip + res.dcsuri + (res.dcsqry.length ? ("?" + res.dcsqry) : ""));
      } else if (tracker.title === 'urlnoq') {
        opt.argsa.push("WT.ti", tracker.titlePrefix + ": " + res.dcssip + res.dcsuri);
      } else {   // Only remaining (and default) title value is 'content'
        opt.argsa.push("WT.ti", tracker.titlePrefix + ": " + AdvLinkTrack.getContentTitle(opt.element, tracker));
      }
      if (tracker.nvMethod === 'default') {
        opt.argsa.push("WT.nv", dcs.dcsNavigation(opt.event || {}, (dcs.navigationtag || ["div", "table"])));
      } else if (tracker.nvMethod === 'parent_div') {
        opt.argsa.push("WT.nv", AdvLinkTrack.getNvFromParentDiv(opt.element, tracker));
      }
      if (tracker.transform) {
        AdvLinkTrack.trackerData[AdvLinkTrack.trigger].transform(tracker, dcs, opt, res);
      }
      if (AdvLinkTrack.globalParams) {
        len = AdvLinkTrack.globalParams.length;
        for (i = 0; i < len; i+=2) {
          if (typeof(AdvLinkTrack.globalParams[i+1]) === 'string') {
            opt.argsa.push(AdvLinkTrack.globalParams[i], AdvLinkTrack.globalParams[i+1]);
          } else if (typeof(AdvLinkTrack.globalParams[i+1]) === 'function') {
            opt.argsa.push(AdvLinkTrack.globalParams[i], AdvLinkTrack.globalParams[i+1]());
          } else if (typeof(AdvLinkTrack.globalParams[i+1]) === 'number') {
            opt.argsa.push(AdvLinkTrack.globalParams[i+1], AdvLinkTrack.globalParams[i+1] + '');
          }
        }
      }
      if (tracker.params) {
        len = tracker.params.length;
        for (i = 0; i < len; i+=2) {
          if (typeof(tracker.params[i+1]) === 'string') {
            opt.argsa.push(tracker.params[i], tracker.params[i+1]);
          } else if (typeof(tracker.params[i+1]) === 'function') {
            opt.argsa.push(tracker.params[i], tracker.params[i+1]());
          }
        }
      }
      if (AdvLinkTrack.attribCapture.length > 0 || tracker.attribCapture.length > 0) {
        AdvLinkTrack.captureHTMLDataTransform(dcs, opt, Array.prototype.concat(AdvLinkTrack.attribCapture, tracker.attribCapture), tracker.attribInherit);
      }
      if (AdvLinkTrack.attribParams.length > 0 || tracker.attribParams.length > 0) {
        AdvLinkTrack.captureHTMLDataParams(dcs, opt, Array.prototype.concat(AdvLinkTrack.attribParams, tracker.attribParams), tracker.attribInherit);
      }
    },

    // Main plugin function to validate incoming data and register trackers
    advancedLinkTracking: function (dcs, opt) {
      var len, i, tracker, tdata;
      if (!AdvLinkTrack.isArray(opt.trackers)) {
        return;
      }
      // Validate global config
      if (opt.globalParams) {
        AdvLinkTrack.globalParams = AdvLinkTrack.cleanArgsaArray(opt.globalParams);
      }
      if (opt.attribCapture) {
        AdvLinkTrack.attribCapture = AdvLinkTrack.cleanArray(opt.attribCapture, ' ');
      }
      if (opt.attribParams) {
        AdvLinkTrack.attribParams = AdvLinkTrack.cleanArray(opt.attribParams, ' ');
      }
      if (typeof(opt.hashParam) === 'string') {
        AdvLinkTrack.hashParam = AdvLinkTrack.stringToParam(opt.hashParam);
      }
      if (opt.inheritParams) {
        AdvLinkTrack.inheritParams = AdvLinkTrack.cleanArray(opt.inheritParams, ' ');
      }
      if (typeof(opt.nvMethod) === 'string') {
        AdvLinkTrack.nvMethod = opt.nvMethod;
      }
      if (typeof(opt.nvOverride) === 'string') {
        AdvLinkTrack.nvOverride = opt.nvOverride;
      }
      AdvLinkTrack.hashInURI = !!opt.hashInURI;
      AdvLinkTrack.attribInherit = !!opt.attribInherit;
      AdvLinkTrack.catchRightClicks = !!opt.catchRightClicks;

      // Set global defaults
      AdvLinkTrack.attribCapture = AdvLinkTrack.attribCapture || [];
      AdvLinkTrack.attribParams = AdvLinkTrack.attribParams || [];
      AdvLinkTrack.nvMethod = AdvLinkTrack.nvMethod || 'default';
      AdvLinkTrack.nvOverride = AdvLinkTrack.nvOverride || 'data-wt_name';

      // Validate config for individual trackers
      len = opt.trackers.length;
      for (i = 0; i < len; i++) {
        tracker = opt.trackers[i];
        tdata = '';
        // Check universal properties
        if (typeof(tracker.name) !== 'string' || typeof(tracker.type) !== 'string') {
          continue;
        }
        tracker.params = AdvLinkTrack.cleanArgsaArray(tracker.params);
        if (typeof(tracker.titlePrefix) !== 'string') {
          tracker.titlePrefix = null;
        }
        if (tracker.titleAttrib) {
          tracker.titleAttrib = AdvLinkTrack.cleanArray(tracker.titleAttrib);
        }
        if (tracker.title) {
          tracker.title = tracker.title.toLowerCase();
        }
        if (tracker.title !== 'url' && tracker.title !== 'urlnoq' && tracker.title !== 'content') {
          tracker.title = null;
        }
        if (tracker.attribCapture) {
          tracker.attribCapture = AdvLinkTrack.cleanArray(tracker.attribCapture, ' ');
        }
        tracker.attribCapture = tracker.attribCapture || [];
        if (tracker.attribParams) {
          tracker.attribParams = AdvLinkTrack.cleanArray(tracker.attribParams, ' ');
        }
        tracker.attribParams = tracker.attribParams || [];
        if (typeof(tracker.hashParam) === 'string') {
          tracker.hashParam = AdvLinkTrack.stringToParam(tracker.hashParam);
        } else {
          tracker.hashParam = null;
        }
        if (tracker.hashInURI) {
          tracker.hashInURI = true;
        } else if (tracker.hashInURI === false) {
          tracker.hashInURI = false;
        } else {
          tracker.hashInURI = AdvLinkTrack.hashInURI;
        }
        tracker.attribInherit = AdvLinkTrack.reconcileBoolean(tracker, 'attribInherit');
        tracker.catchRightClicks = AdvLinkTrack.reconcileBoolean(tracker, 'catchRightClicks');
        if (tracker.inheritParams) {
          tracker.inheritParams = AdvLinkTrack.cleanArray(tracker.inheritParams, ' ');
        }
        tracker.inheritParams = tracker.inheritParams || AdvLinkTrack.inheritParams || [];

        tracker.onsiteDoms = AdvLinkTrack.cleanArray(tracker.onsiteDoms, ' ');
        if (!tracker.onsiteDoms && dcs.config && dcs.config.onsiteDoms) {
          tracker.onsiteDoms = AdvLinkTrack.cleanArray(dcs.config.onsiteDoms, ' ');
        }

        // Run tracker init functions
        if (typeof(AdvLinkTrack.trackerInit[tracker.type]) === 'function') {
          tracker = AdvLinkTrack.trackerInit[tracker.type](tracker);
        }
        if (tracker === null) {
          continue;
        }

        // Set tracker-level defaults
        tracker.titlePrefix = tracker.titlePrefix || 'Link';
        tracker.title = tracker.title || 'content';
        tracker.nvMethod = tracker.nvMethod || AdvLinkTrack.nvMethod;
        tracker.nvOverride = tracker.nvOverride || AdvLinkTrack.nvOverride;
        if (!AdvLinkTrack.isArray(tracker.excludes)) {
          tracker.excludes = [];
        }
        if (!tracker.catchRightClicks) {
          tracker.excludes.push({type: 'isRightClick'});
        }
        if (!tracker.titleAttrib || tracker.titleAttrib.length === 0) {
          tracker.titleAttrib = ['data-wt_title'];
        }
        AdvLinkTrack.addLinkTrack(tracker);
      }

      // Register selector
      AdvLinkTrack.dcs = dcs;
      if (opt.deferReg === true) {
        window.Webtrends.registerLinkTracking = AdvLinkTrack.registerLinkTracking;
      } else {
        AdvLinkTrack.registerLinkTracking();
      }
  	},

    registerLinkTracking: 


  };

//  Webtrends.addLinkTrack = AdvLinkTrack.addLinkTrack;

  // Register plugin with Webtrends tag
  window.Webtrends.registerPlugin("advancedLinkTracking", AdvLinkTrack.advancedLinkTracking);

})(window, window.document);
