/*******************************************************************************
 *   PubMatic Inc. ("PubMatic") CONFIDENTIAL
 *   Unpublished Copyright (c) 2006-2014 PubMatic, All Rights Reserved.
 *
 *
 *
 *   NOTICE:  All information contained herein is, and remains the property of PubMatic. The intellectual and technical concepts contained
 *
 *   herein are proprietary to PubMatic and may be covered by U.S. and Foreign Patents, patents in process, and are protected by trade secret or copyright law.
 *
 *   Dissemination of this information or reproduction of this material is strictly forbidden unless prior written permission is obtained
 *
 *   from PubMatic.  Access to the source code contained herein is hereby forbidden to anyone except current PubMatic employees, managers or contractors who have executed
 *
 *   Confidentiality and Non-disclosure agreements explicitly covering such access.
 *
 *
 *
 *   The copyright notice above does not evidence any actual or intended publication or disclosure  of  this source code, which includes
 *
 *   information that is confidential and/or proprietary, and is a trade secret, of  PubMatic.   ANY REPRODUCTION, MODIFICATION, DISTRIBUTION, PUBLIC  PERFORMANCE,
 *
 *   OR PUBLIC DISPLAY OF OR THROUGH USE  OF THIS  SOURCE CODE  WITHOUT  THE EXPRESS WRITTEN CONSENT OF PubMatic IS STRICTLY PROHIBITED, AND IN VIOLATION OF APPLICABLE
 *
 *   LAWS AND INTERNATIONAL TREATIES.  THE RECEIPT OR POSSESSION OF  THIS SOURCE CODE AND/OR RELATED INFORMATION DOES NOT CONVEY OR IMPLY ANY RIGHTS
 *
 *   TO REPRODUCE, DISCLOSE OR DISTRIBUTE ITS CONTENTS, OR TO MANUFACTURE, USE, OR SELL ANYTHING THAT IT  MAY DESCRIBE, IN WHOLE OR IN PART.
 *******************************************************************************/

var OptOut = function () {

	this.isOptOut = false;
	this.userCookieExist = false;
	this.params = this.urlToObject().params;

	if (this.getCookieValue(this.USER_COOKIE_NAME)) {
		this.userCookieExist = true;
	}
	if ( (this.getCookieValue(this.OPT_OUT_COOKIE_NAME) === "true") || (this.getCookieValue(this.OLD_OPT_OUT_COOKIE_NAME) === "true")) {
		this.isOptOut = true;
	}
};

OptOut.prototype = {
	constructor : OptOut,

	OPT_OUT_COOKIE_NAME : "optout",

	OLD_OPT_OUT_COOKIE_NAME : "pmoo",

	USER_COOKIE_NAME : "KADUSERCOOKIE",

	RESULT_CODE : {
		SUCCESS : 1,
		FAILURE : 2,
		TOKEN_MISMATCH : 3
	},

	STATUS_CODE : {
		NO_OBA : 1,
		OBA : 2,
		OPT_OUT : 3
	},

	urlToObject : function (url) {
		var tempArr,
			item,
			i,
			returnObj = {};
		url = url || window.location.href;
		tempArr = url.split("?");
		returnObj.baseURL = tempArr[0];
		returnObj.params = {};
		if (tempArr.length > 1) {
			returnObj.queryString = tempArr[1];
			tempArr = tempArr[1].split("&");
			for (i = 0; i < tempArr.length; i++) {
				item = tempArr[i].split("=");
				returnObj.params[item[0]] = item[1];
			}
		} else {
			returnObj.queryString = "";
		}
		return returnObj;
	},

	generateToken : function (tokenLength) {
		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
			length = chars.length,
			token = "",
			i,
			random;
		tokenLength = tokenLength || 36;
		for (i = 0; i < tokenLength; i++) {
			random = Math.floor(Math.random() * length);
			token += chars[random];
		}
		this.setCookie("pub_coop_token", token, 60 * 60);
		return token;
	},

	validateToken : function () {
		var tokenExist = false;
		if (this.params.token === this.getCookieValue("pub_coop_token")) {
			tokenExist = true;
		}
		return tokenExist;
	},

	getOptOutStatus : function () {
		var status;
		if (this.isOptOut) {
			status = this.STATUS_CODE.OPT_OUT;
		} else if (this.userCookieExist) {
			status = this.STATUS_CODE.OBA;
		} else {
			status = this.STATUS_CODE.NO_OBA;
		}
		return status;
	},

	setOptOutCookie : function (value) {
		var status = this.setCookie(this.OPT_OUT_COOKIE_NAME, value, 5*366*24*60*60, ".pubmatic.com");
		return status;
	},

	doAction : function () {
		var oThis = this,
			actionId,
			statusId,
			participantId,
			resultId,
			redirectURL,
			token;
		participantId = oThis.params.participant_id;
		actionId = oThis.params.action_id;
		redirectURL = oThis.params.rd ? decodeURIComponent(oThis.params.rd) : "";
		switch (actionId) {
			case "1" :
				redirectURL = "/companyInfo.jsp";
			break;
			case "2" :
				//not used
			break;
			case "3" :
				/**
				 * This helps the 3rd party optout services to fetch the state of the cookie stored on a client machine
				 */
				token = oThis.generateToken();
				statusId = oThis.getOptOutStatus();
				redirectURL += "/token/" + participantId + "/" + statusId + "/" + token + "/";
			break;
			case "4" :
				/**
				 * This is where the actual optout process takes place when called from 3rd party services
				 */
				if (!this.validateToken()) {
					resultId = oThis.RESULT_CODE.TOKEN_MISMATCH;
				} else {
					if (oThis.setOptOutCookie("true")) {
						resultId = oThis.RESULT_CODE.SUCCESS;
					} else {
						resultId = oThis.RESULT_CODE.FAILURE;
					}
				}
				redirectURL += "/finish/" + participantId + "/" + actionId + "/" + resultId + "/"; // + "message" + "/";

				/*
				 * store optout out preference @ the server side and redirect to the
				 * passed URL;
				 */
				PubMatic_OptOut(true, redirectURL);
			break;
			case "5" :
				//reserved for optIn
				//oThis.setOptOutCookie("false");
			break;
			default :
			//default operation
		}

		/* 
		 *	Here we send the response for the request we got for actionId 3 or 1.
		 *  We are skipping this call for actionId 4 to avoid a race-condition 
		 *  between SPug & the following call.
		 *  But this will be eventually handled as a part of SPug response.
		*/
		if (redirectURL !== "" && Number(actionId) !== 4) {
			window.location = redirectURL;
		}
	},

	getCookieValue : function (key) {
		var cookies = document.cookie.split(";"),
			index,
			key,
			value = null,
			i;
		for (i = 0; i < cookies.length; i++) {
			if (cookies[i].indexOf(key + "=") > -1) {
				index = cookies[i].indexOf("=");
				key = cookies[i].substr(0, index);
				value = unescape(cookies[i].substr(index + 1));
				break;
			}
		}
		return value;
	},

	setCookie : function (key, value, expires, domain, path) {
		var date = new Date(),
			cookie,
			browser;

		// 1. Set key-value of the cookie
		cookie = key + "=" + escape(value);

		// 2. Set expiry of the cookie
		if (expires) {
			date.setTime(date.getTime() + (expires * 1000));
			cookie += "; expires=" + date.toGMTString();
			//console.log(date.toGMTString());
		}

		// 3. domain of the cookie
		if (domain) {
			cookie += "; domain=" + domain;
		}
		// 4. Set path on which cookie should be accessible
		path = path || "/";
		cookie += "; path=" + path;

		// 5. Allow restriction-free access across multiple sites
		// https://inside.pubmatic.com:9443/jira/browse/UD-1511
		browser = this.getBrowser();
		if (browser.name === 'Chrome' && browser.version >= 67) {
			cookie += "; SameSite=None";
		}

		cookie += "; secure";

		document.cookie = cookie;

		if (this.getCookieValue(key) === value) {
			return true;
		} else {
			return false;
		}
	},

	// Ref - https://stackoverflow.com/questions/5916900/how-can-you-detect-the-version-of-a-browser
	getBrowser: function() {
		'use strict';

		var ua= navigator.userAgent,
			tem,
			M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
			operaMatch = ua.match(/\b(OPR|Edge)\/(\d+)/),
			bName,
			bVersion;

		if (/trident/i.test(M[1])) {
			tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
			bName = 'IE';
			bVersion = (tem[1] || '');
		} else if (M[1] === 'Chrome' && operaMatch != null){
			operaMatch = operaMatch.slice(1);
			bName = operaMatch[0].replace('OPR', 'Opera');
			bVersion = operaMatch[1];
		}

		bName = M[2] ? M[1] : navigator.appName;
		bVersion = M[2] ? M[2] : navigator.appVersion;

		if (tem= ua.match(/version\/(\d+)/i)) {
			bVersion = tem[1];
		}

		return {
			name: bName,
			version: bVersion ? parseInt(bVersion, 10) : 0
		};
	},

	deleteCookies: function(optout) {
		if (!optout) return;
		const excludeCookies = [
			"KADUSERCOOKIE", "optout"
		];
		document.cookie.split(';')
			.forEach(cookie => {
				const [key, value] = cookie.trim().split('=');
				if (excludeCookies.indexOf(key) < 0) {
					document.cookie = `${key}=; domain=.pubmatic.com; SameSite=None; secure; expires=Thu, 18-Nov-1900 06:23:32 GMT; path=/`;
				}
			});
	}

};

/*
	Usage:
		Following function will call PubMatic Opt-Out API with AdTruth Payload and then PubMatic will redirect page back to currentURL
	Parameters:
		optout: mandatory parameter, boolean value expected
			if user has opted out, pass true else false
		currentURL: Optional parameter, string value expected
			expects (non encoded) URL to which page should be redirected by PubMatic API.
			If not provided, current page's URL will be used for redirection.
	Note:
		This file should be included in Publisher's page using hosted (at PubMatic) path. Because we might require to change AdTruth related code.
*/

function PubMatic_OptOut(optout, currentURL) {

	var optoutObj = new OptOut();
	var kAdUser = optoutObj.getCookieValue(optoutObj.USER_COOKIE_NAME);

	currentURL = ( typeof currentURL != 'undefined' && currentURL != '' ) ? currentURL : window.location.href;

	optoutObj.deleteCookies(optout);

	// window.location.href	=	(location.protocol != "https:" ? "http://" : "https://s") +
	// 							"image4.pubmatic.com/AdServer/SPug?o=2&po=" + ((optout) ? '1' : '0') +
	// 							((navigator.cookieEnabled === false) ? '&fpcd=1' : '') +
	// 							"&pr=" + encodeURIComponent(currentURL) +
	// 							"&u=" + (kAdUser || '00000000-0000-0000-0000-000000000000');
	// 							//"&pp=" + fortyone.collect();

	window.location.href	=	"https://simage4.pubmatic.com/AdServer/SPug?o=2&po=" + ((optout) ? '1' : '0') +
								((navigator.cookieEnabled === false) ? '&fpcd=1' : '') +
								"&pr=" + encodeURIComponent(currentURL) +
								"&u=" + (kAdUser || '00000000-0000-0000-0000-000000000000');
	

}