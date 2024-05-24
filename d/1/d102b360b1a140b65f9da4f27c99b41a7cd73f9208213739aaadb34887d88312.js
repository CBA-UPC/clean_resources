//Read me
/******************************************************************************************************************************
JS files such as s_codeCommon.js, s_accountSetting.js, and s_customTracking.js are tags that are required to load the AdobeAnalytics tool.
These files will be loaded on many pages.
The AdobeAnalytics tool that was implemented in the past has now been discontinued.
All JavaScript code in these JS file contents has been removed. However, functions that may be called on the web page side have been retained.
The functions that may be called on the web page side are "s.t", "s.tl", and the functions under the rakutenSC object.
These functions have also been modified to return false when they are called.
In addition to these functions, AdobeAnalytics tags may contain things like "s.propXX = ...", "s.eVarXX = ...", "s.events=...", etc.
AdobeAnalytics Tags are characterized by having an s object.
When deleting these JS files, please first delete the AdobeAnalytics tags that remain on the web page side.
There are several implementation patterns for AdobeAnalytics tags, including include files, tag manager tools (e.g. GTM), or hard coding on the web page side.
Second, delete these JS files.If you delete the JS file while the Adobe Analytics tag remains on the web page side, a JavaScript error is likely to occur.
When a JavaScript error occurs, it can adversely affect the action on the web page side. Please be careful.
*****************************************************************************************************************************/

var rakutenSC = {};

rakutenSC.setPrototypeOf = 
rakutenSC.log = 
rakutenSC.getPaddedString = 
rakutenSC.getdefaultRSID = function() {
	return false;
}

rakutenSC.getServiceName = 