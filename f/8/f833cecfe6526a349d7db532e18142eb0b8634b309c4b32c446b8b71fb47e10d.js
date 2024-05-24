///////
// gaAddons.js
// @Author Stéphane Hamel - shamel@immeria.net - http://immeria.net
// See http://code.google.com/p/gaddons/people/list for contributors
//
// Google Groups forum: http://groups.google.com/group/gaaddons
// Google Code repository: http://code.google.com/p/gaddons/
//
///////
// License: Version: MPL 1.1
// The contents of this file are subject to the Mozilla Public License Version
// 1.1 (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
// http://www.mozilla.org/MPL/
//
// Software distributed under the License is distributed on an "AS IS" basis,
// WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
// for the specific language governing rights and limitations under the
// License.
//
// Changelog:
// v2.8 - Jan. 9 2010 - Fix link for document download when image inside anchor
// v2.7 - Nov. 10 2009 - Further improvement to outbound links tracking
// v2.6 - Oct. 22 2009 - Fix outbound link sometime showing //
// v2.5 - Jun. 1st 2009 - Make sure to load at "onload", rewritten as an object
// v2.4 - Apr. 21st 2009 - Fix trackPageview() syntax
// v2.3 - Apr. 10th 2009 - Fix logic issues. Add tracking of mailto links. Allow tracker to be named something else than pageTracker
// v2.2 - Mar. 20nd 2009 - Fix issue with tracking download docs on current domain
// v2.1 - Jan. 22nd 2009 - Set bUseEventForOutbout and bUserEventForDownload to toggle use of Events or Page Views
// v2.0 - Jan. 2009 - Use Google Analytics Events to track downloads and external links
// v1.0 - Inspired by the work of Justin Cutroni - Google Analytics Short Cut - http://gashortcut.com/
///////
/*
* @fileoverview Wrapper for gaAddons
*/
var bUseEventForOutbound = true;
// Set to false to use trackPageview for outbount links
var bUseEventForDownload = true;
// Set to false to use trackPageview for downloads
var gaA_fileTypes = new RegExp(/\.(docx*|xlsx*|pptx*|exe|zip|pdf|xpi|mp3|mp4)$/i);
// Indicate each file extension that needs to be tracked, gaA_fileTypes is the regular expression that matches downloadable files
//var gaA_gaq = _gaq;
// Should be set to the name of your tracker variable
/// No need to change anything below this line
/**
* @class ga Addons component.
* This class encapsulates all logic for the Google Analytics addons
* @constructor
*/
var gaAddons = function() {
   /**
   * startListening: add a new listner for onclick event, handle Mozilla or IE methods
   * @param {Object} obj HREF object to listen to
   * @param {String} evnt event type (usually "click")
   * @param {Object} func Function to call when evnt is triggered
   */
   var startListening =
   /**
   * trackDocument: make GA call when downloading one of detected file extension, use trackEvent() or trackPageView() methods
   * @param {Object} evnt Object where the event happened
   */
   var trackDocument = function(evnt) {
      evnt = evnt || event;
      var elmnt = evnt.srcElement || evnt.target;
      if (elmnt) {
         while (elmnt.tagName != "A") elmnt = elmnt.parentNode;
		}
      var pathname = ("/" + elmnt.pathname).replace(/\/\//,'');
      bUseEventForDownload ? ga("send","event","download", "click", pathname) : ga("send","pageview","/download" + pathname);
      }
   /**
   * trackExternalLink: make GA call when clicking an outbound link, use trackEvent() or trackPageView() methods
   * @param {Object} evnt Object where the event happened
   */
   var trackExternalLink = function(evnt) {
      evnt = evnt || event;
      var elmnt = evnt.srcElement || evnt.target;
      if (elmnt) {
         while (elmnt.tagName != "A") elmnt = elmnt.parentNode;
         if (/http/.test(elmnt.protocol)) { url = elmnt.href.substr(elmnt.href.indexOf('//')+2,Infinity);
         bUseEventForOutbound ? ga("send","event","outbound", "click", url) : ga("send","pageview",("/outbound/" + url));
         }
      if (elmnt.protocol == "mailto:") bUseEventForOutbound ? ga("send","event","mailto", "click", elmnt.href.replace(/mailto:/, "")) : ga("send","pageview","/mailto/" + elmnt.href.replace(/mailto:/));
      }
   else {
      if (/http/.test(this.protocol)) { url = this.href.substr(this.href.indexOf('//')+2,Infinity);
      bUseEventForOutbound ? ga("send","event","outbound", "click", url) : ga("send","pageview","/outbound/" + url);
      }
   if (this.protocol == "mailto:") bUseEventForOutbound ? ga("send","event","mailto", "click", this.href.replace(/mailto:/, "")) : ga("send","pageview","/mailto/" + this.href.replace(/mailto:/));
   }
}
/**
* Initialize gaAddons
*/
if (document.getElementsByTagName && typeof ga == "function") {
var hrefs = document.getElementsByTagName('a');
for (var l = 0, m = hrefs.length; l < m; l++) if (gaA_fileTypes.test(hrefs[l].pathname)) startListening(hrefs[l], "click", trackDocument);
else if (hrefs[l].hostname != location.hostname) startListening(hrefs[l], "click", trackExternalLink);
}
}
if (window.addEventListener) // Standard
window.addEventListener('load', gaAddons, false);
else if (window.attachEvent) // old IE
window.attachEvent('onload', gaAddons);
/// EOF ///