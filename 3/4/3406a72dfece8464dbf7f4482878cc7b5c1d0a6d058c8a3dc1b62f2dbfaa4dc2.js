yolWPJsonp([63],{374:function(n,e,t){"use strict";t(1)(function(){function n(n){var e=n.split(".")[1],t=e.replace(/-/g,"+").replace(/_/g,"/"),i=decodeURIComponent(window.atob(t).split("").map(.join(""));return JSON.parse(i)}function e(n){var e=document.cookie;if(e.length>0)for(var t=e.split(";"),i=0;i<t.length;i++){var o=t[i].split("=");if(n===o[0].trim())return o[1]}return null}function t(n){var e=n.credential,t=n.userId;return new Promise(function(n,i){var o=window.location.href.split("?")[0];jQuery.ajax({type:"post",url:"/m_ajax/",data:JSON.stringify({controller:"gns",method:"userState",others:{credential:e,user_id:t,url:o}}),contentType:"application/json",dataType:"json",success:function(e){0===e.result_code?n(e.data):i("error")},error:)})}ar o=function(){var n=window.location.search,e={};if(n.length>0)for(var t=n.substring(1).split("&"),i=0;i<t.length;i++){var o=t[i].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}(),r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r={};return n&&(r.id=n),e&&(r.registrationTimestamp=e),t&&(r.subscriptionTimestamp=t),null!==i&&(r.granted=i),null!==o&&(r.grantReason=o),r}(o[GNS_PARAMETER_USER]||e(YOL_GNS_COOKIE_PARAM_USER_ID),o[GNS_PARAM_REGIST_DATE]||e(YOL_GNS_COOKIE_PARAM_USER_REG),null,gnsArticleReadable,gnsGrantReason),a=new Promise(function(e){GaaMetering.getGaaUserPromise().then(function(i){var o={};o.credential=n(i.credential),t(o).then(function(n){r.id=n.id,r.registrationTimestamp=n.registrationTimestamp,e(r)}).catch(function(n){console.error(n),e({})})})}),l=new Promise(function(){GaaMetering.getLoginPromise().then(function(){var n=encodeURIComponent(window.location.href);window.location.href=gnsYolLoginPage+"?to="+n})}),s=new Promise(function(n){var o=r.id||e(YOL_GNS_COOKIE_PARAM_USER_ID);o&&i()?t({userId:o}).then(function(e){r.id=e.id,r.registrationTimestamp=e.registrationTimestamp,n(r)}).catch(:n(r)}),c=function(){o[GNS_METER_CHECK_PARAM]||gnsArticleReadable||(window.location.href=window.location.href+"&"+GNS_METER_CHECK_PARAM+"=1&"+GNS_PARAMETER_USER+"="+r.id+"&"+GNS_PARAM_REGIST_DATE+"="+r.registrationTimestamp)},u=GaaMetering.init({googleApiClientId:GNS_CLIENT_ID,userState:r,showcaseEntitlement:null,allowedReferrers:GNS_ALLOWED_REFERRERS,registerUserPromise:a,handleLoginPromise:l,publisherEntitlementPromise:s,unlockArticle:c,showPaywall:u})})}},[374]);