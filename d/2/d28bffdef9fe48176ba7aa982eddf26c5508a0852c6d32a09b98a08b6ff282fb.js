// For license information, see `https://assets.adobedtm.com/4a848ae9611a/aa520520f55b/217d9b88c258/RCeb12d4e491b043b5b58f643beef73ef4-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/4a848ae9611a/aa520520f55b/217d9b88c258/RCeb12d4e491b043b5b58f643beef73ef4-source.min.js', "consentAdobe=_satellite.getVar(\"Consent Adobe\");var cookies={aa:[\"s_pers\",\"s_sess\",\"AMCV_4D6368F454EC41940A4C98A6@AdobeOrg\",\"AMCVS_4D6368F454EC41940A4C98A6@AdobeOrg\"],target:[\"mbox\"]};for(var s in rootDomain=\"mendeley.com\",consentAdobe)if(Object.prototype.hasOwnProperty.call(consentAdobe,s))if(consentAdobe[s])_satellite.logger.log(\"optIn: approve \"+s),adobe.optIn.approve(s,!0);else{if(_satellite.logger.log(\"optIn: deny \"+s),adobe.optIn.deny(s,!0),cookies[s])for(var i=0;i<cookies[s].length;i++){var c=cookies[s][i];_satellite.cookie.remove(c,{domain:rootDomain}),_satellite.logger.log(\"remove cookie: \"+c)}var optCookie=_satellite.cookie.get(\"OptanonAlertBoxClosed\");optCookie&&(_satellite.cookie.remove(\"aa_usr\",{domain:rootDomain}),_satellite.logger.log(\"remove aa_usr cookie\"))}adobe.optIn.complete();");