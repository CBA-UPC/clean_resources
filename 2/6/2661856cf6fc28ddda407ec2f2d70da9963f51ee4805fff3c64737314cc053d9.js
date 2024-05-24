//~~tv:23012.v453.20200113
//~~tc: Adding support for Mapp Intelligence version 4.5.3

/**
 ************ Don't change anything beyond this line ************
 ********************* Start webtrekk_v4.js *********************
 */
(function(g){g.webtrekkUnloadObjects=g.webtrekkUnloadObjects||[];g.webtrekkLinktrackObjects=g.webtrekkLinktrackObjects||[];var E=function(a){a.getJSON=function(a){if("string"===typeof a&&a&&"{"===a.charAt(0)&&"}"===a.charAt(a.length-1))try{a=a.replace(/'/g,'"').replace(/(['"])?([a-zA-Z0-9]+)(['"])?\s?:/g,'"$2":');var b;b="object"===typeof JSON&&"function"===typeof JSON.parse?JSON.parse(a):/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?(new Function("return "+a))():null;if("object"===typeof b)return b}catch(d){}return null};a.parseJSON=
a.getMappingParam=,F=G=H=function(a){a.maxlen=a.indexOf=a.wtTypeof=a.wtLength=a.wtEscape=function(a){try{return encodeURIComponent(a)}catch(b){return escape(a)}};
a.wtUnescape=a.getAttribute=a.plugInArray=,I=J=x=function(a,c,b){b=RegExp(c+"="+b);var d=document.location.href;c=(new Date).getTime();b=b.exec(d);d=/wt_t=([\d]{13})/.exec(d);if(b&&"undefined"!==typeof b[1]&&d&&"undefined"!==typeof d[1]){d=parseInt(d[1])+9E5;if(!a.maxURLParameterValidity||c+a.maxURLParameterValidity<d)return!1;if(d>c)return a.wtUnescape(b[1])}return!1},K=x=function(a,c,b){b=RegExp(c+"="+b);var d=document.location.href;c=(new Date).getTime();b=b.exec(d);d=/wt_t=([\d]{13})/.exec(d);if(b&&"undefined"!==typeof b[1]&&d&&"undefined"!==typeof d[1]){d=parseInt(d[1])+9E5;if(!a.maxURLParameterValidity||c+a.maxURLParameterValidity<d)return!1;if(d>c)return a.wtUnescape(b[1])}return!1},A=function(a,c,b,d){"1"!==
a.cookie||(a.optOut||a.deactivatePixel)||a.firstParty();(b=b?b:"")||(b=a.formObject&&"noForm"!==c?"form":"link");"function"===typeof a.beforeUnloadPixel?a.beforeUnloadPixel():"form"===b&&a.executePlugin(a.getPluginConfig("form","before"));var f="";if(a.config.linkId&&(f+="&ct="+a.wtEscape(a.maxlen(a.wtUnescape(a.config.linkId),255)))){var e=a.ccParams;"string"===typeof e&&""!==e&&(f+=e)}if(a.wtEp)if(a.wtEpEncoded)f+=a.wtEp;else if(e=a.wtEp,"string"===typeof e&&""!==e)for(var e=e.split(/;/),h=0;h<
e.length;h++)if("undefined"!==typeof e[h]){var k=e[h].split(/\=/);a.checkSC("custom")&&(k[1]=a.decrypt(k[1]));k[1]=a.wtEscape(k[1]);f+="&"+k[0]+"="+k[1]}"noForm"!==c&&(f+=d.getFormTrackingData());""!==f&&(a.quicksend(a.wtEscape(a.contentId.split(";")[0])+",1,"+a.baseparams(),f),a.config.linkId="",a.ccParams="",a.wtEp="");"function"===typeof a.afterUnloadPixel?a.afterUnloadPixel():"form"===b&&a.executePlugin(a.getPluginConfig("form","after"))},z=function(a){var c=[],b;for(b in a.safetagParameter){var d=
b;if("executePluginFunction"===d)a.executePluginFunction+=a.safetagParameter[d],a.safetagParameter[d]="";else if("object"!==typeof a.safetagParameter[d]||a.safetagParameter[d]instanceof RegExp)a[d]=a.safetagParameter[d],"linkTrack"!==d&&"tabBrowsing"!==d&&"execCDB"!==d||c.push(d);else{"object"!==typeof a[d]&&(a[d]={});for(var f in a.safetagParameter[d]){var e=f;a[d][e]=a.safetagParameter[d][e]}}}for(b=0;b<c.length;b++)switch(c[b]){case "linkTrack":a.linkTrackInit();break;case "tabBrowsing":a.startTabBrowsing();
break;case "execCDB":a.startCDB()}a.safetagParameter.pixel=a},L=function(a){var c=b=function(a,b){for(var d=[],f=a.split("&"),c=0,e=f.length,m,g;c<e;c++){m=f[c];g=!1;for(var q=0,p=b.length,t;q<p;q++)if(t=b[q],0===m.indexOf(t+"=")){g=!0;break}g||d.push(m)}return d.join("&")},d=function(a){a=a.split("&");for(var b="?",d=0,f=a.length;f;)d=parseInt(Math.random()*f),b+=a.splice(d,1)+"&",f--;return b.substr(0,b.length-1)},f=function(){for(var a=
parseInt(10*Math.random())+5,b="",d=0,f;d<a;d++)f=parseInt(37*Math.random()),b+="abcdefghijklmnopqrstuvwxyz-_0123456789".charAt(f);return b};a.getMediaCode=a.getExtLifeCycles=
a.quicksend=function(c,e,l){if(!a.trackDomain||!a.trackId||a.deactivatePixel||a.deactivateRequest)a.deactivateRequest=
!1;else{l||(l="wt"+(a.fileSuffix?".pl":""));a.requestObfuscation&&(l+=f());"undefined"===typeof a.requestTimeout&&(a.requestTimeout=5);a.cdbeid&&(e="&cdbeid="+a.cdbeid+e);var n="";"1"===a.cookie&&(a.eid&&(n+="&eid="+a.eid),a.cookieOne&&(n+="&one=1"),a.forceNewSession&&(n+="&fns=1"));e=n+e;a.isUserIdentificationOptOuted_()&&(e="&nc=1"+e);n=document.location.href.split("#")[0];if(a.pageURLPattern&&a.pageURLReplace)try{n=n.replace(a.pageURLPattern,a.pageURLReplace)}catch(v){}e+="&pu="+a.wtEscape(n);
e="p="+a.version+","+c+e;c="//";c=a.sendViaServerActivated&&a.sendViaServerDomain&&a.sendViaServerPath?c+(a.sendViaServerDomain+"/"+a.sendViaServerPath):c+(a.trackDomain+"/"+a.trackId+"/"+l);0<a.suppressIdentificationParameter.length&&a.isUserIdentificationOptOuted_()&&(e=b(e,a.suppressIdentificationParameter));c=a.requestObfuscation?c+d(e):c+("?"+e);a.tabBrowsing?a.sendTabBrowsingPixel(c,l):a.ignorePrerendering||"undefined"===typeof document.hidden?a.sendPixel(c,l):("object"!==typeof a.prerendering&&
(a.prerendering=[]),document.hidden?(a.prerendering.push(c),a.registerEvent(document,"visibilitychange",function(){a.sendPrerendering()})):a.sendPixel(c,l));"hm"!==l&&"hm.pl"!==l&&(a.cookieOne=!1,a.forceNewSession=!1,a.sentFullPixel=1)}};a.sendPrerendering=a.send=function(b,d,c){if("link"===d||"click"===d)a.config.linkId=b;a.config.contentId=a.config.contentId?a.config.contentId:
a.contentId;(b=b?b:a.config.contentId)||(b="no_content");b=a.wtEscape(b)+",1,";b+=a.baseparams();var f;f=[];if(navigator.plugins&&"Microsoft Internet Explorer"!==navigator.appName)for(var e=0,s=navigator.plugins.length;e<s;e++){var m="",m="Shockwave Flash"===navigator.plugins[e].name?navigator.plugins[e].description:navigator.plugins[e].name;(m=a.plugInArray(a.plugins,m))&&f.push(m)}f=f.join("|");e="";if(a.paramFirst)for(s=a.paramFirst.split(";"),m=0;m<s.length;m++){var r=a.getMappingParam(s[m]),
q=r.mapping,r=r.index;q&&(r?a.config[q]&&("undefined"!==typeof a.config[q][r]&&a.config[q][r])&&(e+="&"+s[m]+"="+a.wtEscape(a.config[q][r])):a.config[q]&&(e+="&"+s[m]+"="+a.wtEscape(a.config[q])))}if("string"===typeof c&&""!==c)for(var p=c.split(/;/),t=0;t<p.length;t++)"undefined"!==typeof p[t]&&(c=p[t].split(/\=/),a.checkSC("custom")&&(c[1]=a.decrypt(c[1])),c[1]=a.wtEscape(c[1]),e+="&"+c[0]+"="+c[1]);else{a.wtEpEncoded=!1;var w=new a.PredefinedParameter;for(t in a.config)c=t+"",w.put(c,a.config[c]);
r=w.get("all");a.config.customParameter=a.mergeCustomParameter(a.config.customParameter,r.customParameter);t=a.checkCustomParameter(a.config.customParameter,"cp");a.config.customSessionParameter=a.mergeCustomParameter(a.config.customSessionParameter,r.customSessionParameter);c=a.checkCustomParameter(a.config.customSessionParameter,"cs");s=a.checkCustomParameter(a.config.customTimeParameter,"ce");m=a.checkCustomParameter(a.cdb,"cdb");a.config.customEcommerceParameter=a.mergeCustomParameter(a.config.customEcommerceParameter,
r.customEcommerceParameter);q=a.checkCustomParameter(a.config.customEcommerceParameter,"cb");a.config.orderValue&&-1===a.paramFirst.indexOf("ov;")&&(e=a.checkSC("order")?e+("&ov="+a.wtEscape(a.decrypt(a.config.orderValue))):e+("&ov="+a.wtEscape(a.config.orderValue)));a.config.currency&&-1===a.paramFirst.indexOf("cr;")&&(e=a.checkSC("order")?e+("&cr="+a.wtEscape(a.decrypt(a.config.currency))):e+("&cr="+a.wtEscape(a.config.currency)));a.config.orderId&&-1===a.paramFirst.indexOf("oi;")&&(e+="&oi="+a.wtEscape(a.config.orderId));
a.config.product&&(-1===a.paramFirst.indexOf("ba;")&&(e+="&ba="+a.wtEscape(a.config.product)),a.config.productCost&&-1===a.paramFirst.indexOf("co;")&&(e+="&co="+a.wtEscape(a.config.productCost)),a.config.productQuantity&&-1===a.paramFirst.indexOf("qn;")&&(e+="&qn="+a.wtEscape(a.config.productQuantity)),a.config.productCategory=a.mergeCustomParameter(a.config.productCategory,r.productCategory),e+=a.checkCustomParameter(a.config.productCategory,"ca"),a.config.productStatus&&-1===a.paramFirst.indexOf("st;")&&
(e+="&st="+a.wtEscape(a.config.productStatus)));var u=x(a,"wt_cd","(.+?)(&|$)");a.config.customerId||(a.config.customerId=u);a.config.customerId&&-1===a.paramFirst.indexOf("cd;")&&(e+="&cd="+a.wtEscape(a.config.customerId));a.config.crmCategory=a.mergeCustomParameter(a.config.crmCategory,r.crmCategory);e+=a.checkCustomParameter(a.config.crmCategory,"vc");null===w.get("birthday")&&(a.config.birthdayJ&&a.config.birthdayM&&a.config.birthdayD)&&w.put("birthday",a.config.birthdayJ+a.config.birthdayM+a.config.birthdayD);
null!==w.get("telefon")&&w.put("telefon",w.get("telefon").replace(/\W|_/g,""));a.config.urmCategory=a.mergeCustomParameter(a.config.urmCategory,r.urmCategory);e+=a.checkCustomParameter(a.config.urmCategory,"uc");a.browserLang&&(e+="&la="+a.wtEscape(a.browserLang));a.config.contentGroup=a.mergeCustomParameter(a.config.contentGroup,r.contentGroup);e+=a.checkCustomParameter(a.config.contentGroup,"cg");w="";if(a.config.campaignId){var u=a.config.campaignAction?a.config.campaignAction.substring(0,1):"c",
y=u+"_"+a.config.campaignId;y in a.sentCampaignIds?a.config.campaignId="ignore%3Dignore":a.sentCampaignIds[y]=!0;"c"===u&&(u="");-1===a.paramFirst.indexOf("mc;")&&(e+="&mc="+a.wtEscape(a.config.campaignId));-1===a.paramFirst.indexOf("mca;")&&u&&(e+="&mca="+u)}a.config.customCampaignParameter=a.mergeCustomParameter(a.config.customCampaignParameter,r.customCampaignParameter);w+=a.checkCustomParameter(a.config.customCampaignParameter,"cc");a.config.internalSearch&&-1===a.paramFirst.indexOf("is;")&&(e+=
"&is="+a.wtEscape(a.maxlen(a.wtUnescape(a.config.internalSearch),255)));if(a.config.dynamicParameters)for(p in a.config.dynamicParameters)r=p+"",a.config.dynamicParameters[r]&&(e="object"===typeof a.config.dynamicParameters[r]?e+a.checkCustomParameter(a.config.dynamicParameters,r):e+("&"+p+"="+a.wtEscape(a.config.dynamicParameters[r])));t&&(e+=t);w&&(e+=w);s&&(e+=s);q&&(e+=q);c&&(e+=c);m&&(e+=m);a.config.customEid&&(e+="&ceid="+a.config.customEid);a.config.xwtip&&(e+="&X-WT-IP="+a.wtEscape(a.config.xwtip));
p="string"===typeof g.webtrekkApplicationUserAgent?g.webtrekkApplicationUserAgent:"object"===typeof g.WebtrekkAndroidWebViewCallback&&"function"===typeof g.WebtrekkAndroidWebViewCallback.getUserAgent?g.WebtrekkAndroidWebViewCallback.getUserAgent():"";if(a.config.xwtua||p)e+="&X-WT-UA="+(a.config.xwtua?a.wtEscape(a.config.xwtua):a.wtEscape(p));a.config.xwtrq&&(e+="&X-WT-RQ="+a.wtEscape(a.config.xwtrq));a.xwteid&&(e+="&X-WT-EID="+a.wtEscape(a.xwteid),a.xwteid=!1);a.config.xwtstt&&(e+="&X-WT-STT="+a.wtEscape(a.config.xwtstt))}a.config.linkId&&
a.config.customClickParameter&&(e+=a.checkCustomParameter(a.config.customClickParameter[a.config.linkId]?a.config.customClickParameter[a.config.linkId]:a.config.customClickParameter,"ck"),a.ccParams=!1);a.config.xlc&&a.config.xlct&&(""!==a.config.xlc||""!==a.config.xlct)&&(p="",p=a.config.xlcv?a.getExtLifeCycles(a.config.xlc,a.config.xlct,a.config.xlcv):a.getExtLifeCycles(a.config.xlc,a.config.xlct),e+=p);a.config.contentId||a.config.linkId||(a.config.contentId=a.contentId,a.config.linkId="wt_ignore");
a.config.linkId?(a.wtEp=e,a.wtEpEncoded=!0,A(a,"noForm",d)):("1"===a.cookie?a.cookieOne&&(e+="&np="+a.wtEscape(f)):e+="&np="+a.wtEscape(f),a.quicksend(b,e))};var e=a.sendinfo=function(b,d,f,n){f=f?f:"page";-1===location.href.indexOf("fb_xd_fragment")&&(a.safetag&&z(a),a.config="object"===typeof b?b:a.getConfig(),a.safetagInProgress?(b?a.saveSendinfoArguments.push([a.config,d,f,n]):a.saveSendinfoArguments.push([!1,d,f,n]),a.safetagTimeoutStarted||(a.startSafetagTimeoutDate=(new Date).getTime(),g.setTimeout(function(){e()},5))):(a.config.campaignId||(!a.mediaCode||"page"!==f||a.config.linkId)||a.getMediaCode(),
a.config.linkId&&(f="click",d||(d=a.config.linkId)),a.isUserIdentificationOptOuted_()?a.deleteUserIdentification_():a.optOut||a.deactivatePixel||("1"===a.cookie?a.firstParty():a.xwteid=x(a,"wt_eid","([\\d]{19})")),c(a.beforeSendinfoPixel,f,"before"),a.safetag&&z(a),""===a.contentId&&""===d||a.send(d,f,n),c(a.afterSendinfoPixel,f,"after")))}},M=N=O=function(a){a.url2contentId=function(c){if(!c)return"no_content";if(a.pageURLPattern&&a.pageURLReplace)try{c=
c.replace(a.pageURLPattern,a.pageURLReplace)}catch(b){}c=/\/\/(.*)/.exec(c);return 1>c.length?"no_content":c[1].split("?")[0].split("#")[0].replace(/\./g,"_").replace(/\//g,".").replace(/\.{2,}/g,".").toLowerCase().split(";")[0]};a.generateDefaultConfig("contentId contentGroup internalSearch numberSearchResults errorMessages npsScore npsScoreFeedback paywall articleTitle pageMainCategory pageSubCategory pageAuthor contentTags pageTitle pageType pageLength daysSincePublication testVariant testExperiment customParameter".split(" "));
a.contentId=a.contentId?a.contentId:a.url2contentId(document.location.href)},P=Q=
R=function(a){a.generateDefaultConfig("customEcommerceParameter orderValue currency orderId product productCost productQuantity productCategory productStatus couponValue productLabel productMainCategory productSubCategory productManufacturer paymentMethod productShortDescription productLongDescription shippingService shippingSpeed shippingCosts grossMargin orderStatus productVariant productSoldOut".split(" "))},S=
T=U=
V=W=X=z=function(a){var c=[],b;for(b in a.safetagParameter){var d=b;if("executePluginFunction"===d)a.executePluginFunction+=a.safetagParameter[d],a.safetagParameter[d]="";else if("object"!==typeof a.safetagParameter[d]||a.safetagParameter[d]instanceof RegExp)a[d]=a.safetagParameter[d],"linkTrack"!==d&&"tabBrowsing"!==d&&"execCDB"!==d||c.push(d);else{"object"!==typeof a[d]&&(a[d]={});for(var f in a.safetagParameter[d]){var e=
f;a[d][e]=a.safetagParameter[d][e]}}}for(b=0;b<c.length;b++)switch(c[b]){case "linkTrack":a.linkTrackInit();break;case "tabBrowsing":a.startTabBrowsing();break;case "execCDB":a.startCDB()}a.safetagParameter.pixel=a},Y=function(a){a.pageCounter=0;a.clickCounter=0;a.linkCounter=0;a.formCounter=0;a.configCounter=0;a.mediaCounter=0;a.plugin={};a.setProperty("executePluginFunction","");a.getRequestCounter=a.getPluginConfig=a.executePlugin=function(c,b){if(!a.executePluginFunction||"string"!==typeof a.executePluginFunction)return!1;var d=b?b:{};a.epf=!1;for(var f=a.executePluginFunction.split(";"),e=0;e<f.length;e++)if(f[e]&&"function"===typeof g[f[e]]){a.epf=g[f[e]];try{a.epf(c,d)}catch(h){}}return!1!==a.epf};a.triggerConfigPlugins=,Z=function(a){a.setProperty("cookie","3");a.setProperty("updateCookie",!0);a.setProperty("cookieSecure",!1);a.setProperty("cookieEidTimeout",!1);a.setProperty("cookieSidTimeout",!1);var c=function(b,d,c,e,h){b=a.wtEscape(b)+"="+a.wtEscape(d);b=b+(";domain="+c)+";path=/";e&&(b+=";expires="+a.getExpiryDate(e,
h));a.cookieSecure&&(b+=";secure");document.cookie=b};a.getExpiryDate=function(a,d){var c=new Date,e=c.getTime();d&&(e=parseInt(d));c.setTime(e+6E4*a);return c.toUTCString()};a.setCookie=function(b,d,f,e){var h=document.location.hostname;if(-1===h.search(/^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$/))for(var k=h.split("."),l=k[k.length-1],n=k.length-2;0<=n;n--)if(l=k[n]+"."+l,c(b,d,l,f,e),a.getCookie(b)===d)return;c(b,d,h,f,e)};a.getCookie=,$=aa=ba=function(a){a.optOut=!1;a.setProperty("optoutName","webtrekkOptOut");a.optOut=""!==a.getCookie(a.optoutName);a.optOut&&(a.deactivatePixel=!0);a.getTrackingOptOut=a.setTrackingOptOut=function(c,b){var d="number"===typeof c?c:2592E3,f="function"===typeof b?b:function(){};a.setCookie(a.optoutName,"1",d);a.trackId&&a.trackDomain?a.invokeImage("https://"+a.trackDomain+"/"+
a.trackId+"/optout?duration="+parseInt(d/1440+""),f):f()};a.removeTrackingOptOut=,ca=function(a){var c=function(){a.enableIdentificationOptOut&&(a.enableAnonymousFunction=a.enableIdentificationOptOut);"miCookieOptOut"!==a.optOutIdentificationName&&(a.anonymousCookieName=a.optOutIdentificationName)};a.setProperty("enableIdentificationOptOut",!1);a.setProperty("enableAnonymousFunction",!1);a.setProperty("anonymousOptIn",!1);a.setProperty("optOutIdentificationName",
"miCookieOptOut");a.setProperty("anonymousCookieName","miCookieOptOut");a.setProperty("suppressIdentificationParameter",[]);a.getIdentifierOptOut=function(){c();return!!a.getCookie(a.anonymousCookieName)};a.setIdentifierOptOut=function(b,d){c();var f="function"===typeof d?d:function(){};a.setCookie(a.anonymousCookieName,"1","number"===typeof b?b:2592E3);f()};a.removeIdentifierOptOut=function(){c();a.setIdentifierOptOut(-3600)};a.getAnonymousCookie=a.getIdentifierOptOut;a.setAnonymousCookie=a.setIdentifierOptOut;
a.removeAnonymousCookie=a.removeIdentifierOptOut;a.isUserIdentificationOptOuted_=function(){c();var b=!!a.getAnonymousCookie();return a.enableAnonymousFunction&&(!a.anonymousOptIn&&b||a.anonymousOptIn&&!b)};a.deleteUserIdentification_=function(){a.eid=!1;a.firstVisitContact=!1;a.firstVisitTimestamp=!1;a.lastVisitContact=!1;a.cookieOne=!1;a.forceNewSession=!1;a.setCookie("wt3_eid","",-3600);a.setCookie("wt3_sid","",-3600);a.setCookie("wt_cdbeid","",-3600)}},da=ea=function(a,c,b){a.deactivatePixel=!1;ba(a);da(a);ca(a)},fa={data_:{},setItem:getItem:function(a){return"undefined"!==typeof this.data_[a]?this.data_[a]:null},removeItem:clear:,ga=function(){var a;try{g.localStorage.setItem("wt_test","1"),g.localStorage.removeItem("wt_test"),a=g.localStorage}catch(c){a=fa}return a},ha=
function(a){var c=ga();this.setItem_=this.removeItem_=this.getItem_=function(){var b=c.getItem(a);return"string"===typeof b&&b?b:""};this.clear_=function(){c.clear()}},ia=function(a,c){var b=this,d=new ha(a),f=[];b.MAX_QUEUEING_ITEMS=c;var e=function(){for(;f.length>b.MAX_QUEUEING_ITEMS;)b.shift_();d.setItem_(f.join("|"))},f=function(){var a=d.getItem_(),b=[];a&&"string"===typeof a&&(b=a.split("|"));return b}();b.length_=
b.push_=b.first_=b.shift_=function(){var a=f.shift();e();return"string"===typeof a?a:""};b.clear_=,ja=function(a,c,b){var d=this,f=!1,e=null,h=c.resendInterval,k=c.ttl;d.queue_=new ia(a,c.size);var l=function(a){a=b.urlParam(a,"p","").replace(/[\s\S]+,(\d{13}),.+/,"$1");return"string"===typeof a&&a&&(a=parseInt(a),!isNaN(a)&&Date.now()<=a+k)?!1:!0},n=function(){if(0>=d.queue_.length_())f=!1;else{var a=
d.queue_.first_();l(a)?(d.queue_.shift_(),n()):b.invokeImage(a,function(a,c,f){b._requestLoadHandler(a,c,f);"success"===c?(d.queue_.shift_(),n()):e=g.setTimeout(function(){n()},h)},6E4)}},v=function(){!f&&0<d.queue_.length_()&&(f=!0,n())};v();d.add_=d.remove_=function(){g.clearTimeout(e);d.queue_.clear_();f=!1}},ka=function(a){var c=!1,b,d=function(){b="object"===typeof g.WebtrekkAndroidWebViewCallback?g.WebtrekkAndroidWebViewCallback:{};c="function"===typeof b.trackCustomPage};
d();this.isActive_=this.add_=function(d){if(c){var e=d.split("?")[1].split("&");d={};for(var h=0,k=e.length;h<k;h++){var l=e[h].split("=");d[a.wtUnescape(l[0])]=a.wtUnescape(l[1])}delete d.eid;delete d.fns;delete d.one;delete d.la;delete d["X-WT-UA"];e=d.p.split(",");e.splice(-8);e.shift();e=e.join(",");delete d.p;b.trackCustomPage(e,g.JSON.stringify(d))}}},la=function(a){a.deactivateRequest=!1;a.completeRequest=!1;a.requestQueue={};a.webtrekkSDKCallback=null;a.setProperty("simulatedRequestTimeout",
500);a.setProperty("replaceMutatedVowel",!1);a.setProperty("requestLimitAmount",1E3);a.setProperty("requestLimitTime",1800);a.setProperty("maxRequestLength",24576);a.setProperty("requestObfuscation",!1);a.setProperty("requestQueueActivated",!1);a.setProperty("requestQueueTTL",3E5);a.setProperty("requestQueueResendInterval",5E3);a.setProperty("requestQueueSize",100);a.setProperty("sendViaSDK",!1);a.setProperty("sendViaServerActivated",!1);a.setProperty("sendViaServerDomain","");a.setProperty("sendViaServerPath",
"");a.setProperty("sendViaServerDroppedRequests",0);a.setProperty("sendViaServerBlacklist",[/.+/]);var c=!1,b=function(a){return-1!==a.indexOf("ct=")?"link":-1!==a.indexOf("fn=")?"form":-1!==a.indexOf("mi=")?"media":-1!==a.indexOf("/cdb")||-1!==a.indexOf("/fbc")?"cdb":-1!==a.indexOf("/ce")?"independent":-1!==a.indexOf("/re")?"redirect":"page"},d=function(a,b,d){"function"!==typeof g.Image&&(g.Image=;var c=new g.Image;(function(a,c){var f=!1,k=function(d){return f?
!1:(f=!0,b(a,d,Date.now()-c))};a.onerror=function(){k("error")};a.onload=function(){k("success")};g.setTimeout(d)})(c,Date.now());c.src=a};a._requestLoadHandler=function(d,c,h){if(d&&c){var k=b(d.src);a.executePlugin({instance:a,mode:k,type:c,requestCounter:0},{status:c,time:h,request:d.src,item:d})}};a.invokeImage=function(a,b,c){a&&"string"===typeof a&&d(a,"function"===typeof b?b:function(){},"number"===typeof c?c:2E3)};a.sendPixel=function(d,e){var h=d,k=b(h),l;l=a.sendViaServerBlacklist;
for(var n=[],g=0;g<l.length;g++)if("string"===typeof l[g]){if(-1!==l[g].indexOf("*"))try{l[g]=RegExp(l[g].replace(/(\.)/g,"\\$1").replace(/\*/g,".*"))}catch(s){}n.push(l[g])}else l[g]instanceof RegExp&&n.push(l[g]);0===n.length&&(n=[/.+/]);l=n;if(a.sendViaServerActivated&&0!==a.sendViaServerDroppedRequests&&(1===a.sendViaServerDroppedRequests&&-1!==h.search(/[?&]ov=.+/)||2===a.sendViaServerDroppedRequests&&-1!==h.search(/[?&]st=(view|add|conf)/)||3===a.sendViaServerDroppedRequests&&"page"===k)){var m,
n="";try{m=d.split("?")[1].split("&");for(var g={},r=0,q=m.length;r<q;r++){var p=m[r].split("=");g[a.wtUnescape(p[0])]=a.wtUnescape(p[1])}var t=g.p.split(",");t.splice(-8);t.shift();n=t.join(",")}catch(w){}m=n;q=!1;for(p=0;p<l.length;p++)if("string"===typeof l[p]){if(l[p]===m){q=!0;break}}else if(l[p].test(m)){q=!0;break}if(q)return}var u;a:{m=a.trackId.split(",")[0];q=a.getCookie("wt_rla").split(";");l={};p=0;for(t=q.length;p<t;p++)n=q[p].split(","),3<=n.length&&(g=parseInt(n[1]),r=parseInt(n[2]),
l[n[0]]={amount:isNaN(g)?0:g,time:isNaN(r)?(new Date).getTime():r});"undefined"===typeof l[m]&&(l[m]={amount:0,time:(new Date).getTime()});q=(new Date).getTime();if(q-l[m].time>1E3*a.requestLimitTime)c=!1,l[m]={amount:0,time:q};else if(l[m].amount===a.requestLimitAmount-1&&(c=!0),l[m].amount>=a.requestLimitAmount){u=!0;break a}if("link"===k||"page"===k||"form"===k){l[m].amount++;k=[];for(u in l)k.push(u+","+l[u].amount+","+l[u].time);a.setCookie("wt_rla",k.join(";"),86400)}u=!1}if(!u){if(a.replaceMutatedVowel){u=
[[/%C3%84/g,"ae"],[/%C3%A4/g,"ae"],[/%C4/g,"ae"],[/%E4/g,"ae"],[/%C3%96/g,"oe"],[/%C3%B6/g,"oe"],[/%D6/g,"oe"],[/%F6/g,"oe"],[/%C3%9C/g,"ue"],[/%C3%BC/g,"ue"],[/%DC/g,"ue"],[/%FC/g,"ue"],[/%C3%9F/g,"ss"],[/%DF/g,"ss"]];k=0;for(l=u.length;k<l;k++)h=h.replace(u[k][0],u[k][1]);h=h.toLowerCase()}a.completeRequest=h.split("?")[1];h=a.maxlen(h,a.maxRequestLength);c&&(h+="&rla="+a.requestLimitAmount+"%7C"+a.requestLimitTime);a.sendPixelImage(h,e)}};a.sendPixelImage=function(b,d){var c=b;0!==c.search(/https:|http:/)&&
(c="https:"+c);if("hm"===d||"hm.pl"===d)c+="&hm_ts="+(new Date).getTime();a.sendViaSDK&&null===a.webtrekkSDKCallback&&(a.webtrekkSDKCallback=new ka(a));if("hm"!==d&&"hm.pl"!==d&&a.sendViaSDK&&a.webtrekkSDKCallback.isActive_())a.webtrekkSDKCallback.add_(c);else if(a.requestQueueActivated){var k=a.trackId.split(",")[0];"undefined"===typeof a.requestQueue[k]&&(a.requestQueue[k]=new ja(k,{activated:a.requestQueueActivated,ttl:a.requestQueueTTL,resendInterval:a.requestQueueResendInterval,size:a.requestQueueSize},
a));a.requestQueue[k].add_(c)}else a.invokeImage(c,a.simulatedRequestTimeout)}},x=function(a,c,b){b=RegExp(c+"="+b);var d=document.location.href;c=(new Date).getTime();b=b.exec(d);d=/wt_t=([\d]{13})/.exec(d);if(b&&"undefined"!==typeof b[1]&&d&&"undefined"!==typeof d[1]){d=parseInt(d[1])+9E5;if(!a.maxURLParameterValidity||c+a.maxURLParameterValidity<d)return!1;if(d>c)return a.wtUnescape(b[1])}return!1},B=function(a){var c=a.trackId.split(",")[0],b="number"===
typeof a.cookieEidTimeout?a.cookieEidTimeout:6,d=a.generateEid(),f="",e="",h=[],k=-1,l="",n=!1,v=d,s=!1,m=!1,r=function(d){b?a.setCookie("wt3_eid",h.join(";"),43200*b,d):a.setCookie("wt3_eid",h.join(";"))},q=function(b,d,c){for(var e=!1,f=a.getCookie("wt3_eid").split(";"),k=0,g=f.length;k<g;k++)if(-1!==f[k].indexOf(d+"|")){e=!0;f[k]=d+"|"+b;break}e||f.push(d+"|"+b);h=f;r(c)},p=this.init=function(){h=a.getCookie("wt3_eid").split(";");for(var b=0;b<h.length;b++)if(-1!==h[b].indexOf(c+"|")){k=b;e=h[b];l=e.replace(c+"|","").split("#")[0];-1!==e.indexOf("#")&&(v=e.replace(c+"|","").split("#")[1]);break}f=x(a,"wt_eid","([\\d]{19})");"string"===typeof g.webtrekkApplicationEverId?
f=g.webtrekkApplicationEverId:"object"===typeof g.WebtrekkAndroidWebViewCallback&&(f=g.WebtrekkAndroidWebViewCallback.getEverId());l?(f&&(h[k]=c+"|"+f,l=f,a.updateCookie=!0),"undefined"!==typeof g.wt_mcp_eid&&(n=!0),-1===h[k].indexOf("#")?h[k]+="#"+d:h[k]=e.replace(/#[0-9]{19}/g,"#"+d),a.updateCookie?r():s=v=!1):("string"===typeof g.wt_mcp_eid&&-1!==g.wt_mcp_eid.indexOf(c+"|")?(l=g.wt_mcp_eid.replace(c+"|",""),n=!0):f?l=f:(l=a.generateEid(),n=!0),h.push(c+"|"+l+"#"+d),r());if(a.updateCookie)a:{if(v=
p(v),s=p(l),(b=l)&&"2"===b.substring(0,1)&&(b=parseInt(b.substring(1,11)),1089676800<b&&23E8>b)){m=b+"000";break a}m=!1}};this.getId=this.setId=this.getUrlId=function(){return f};this.getLastVisitContact=function(){return v};this.getFirstVisitContact=function(){return s};this.getFirstVisitContactTimestamp=function(){return m};this.getCookieOne=
function(){return n}},C=ma=function(a){var c=!1,b=d=function(a,b){var d=document.createElement("img");d.crossOrigin="use-credentials";((d,b);0!==a.search(/https:|http:/)&&(a="https://"+a);d.src=a},f=e=h=k=function(b){h(function(){var d;if("1"===a.cookie)d="https://fbc.wcfbc.net/v1/fbc"+("?p="+a.version+",0"),d+="&eid="+a.wtEscape(a.eid),d+="&acc="+a.wtEscape(a.trackId),d+="&t="+(new Date).getTime(),d+="&err="+b,a.invokeImage(d);else for(var c=a.trackId.split(","),e=0,f=c.length;e<f;e++){var h="https://fbc.wcfbc.net/v1/fbc",h=h+("?p="+a.version+",0"),h=h+("&acc="+a.wtEscape(c[e])),h=h+("&t="+(new Date).getTime()),h=h+("&err="+b);d="https://";d+=a.trackDomain+
"/"+a.trackId+"/cc";d+="?a=r&c=wteid_"+c[e];d+="&t="+a.wtEscape(h);a.invokeImage(d)}})},l=function(){c=!0;if(!(a.deactivatePixel||a.isSafari||a.isUserIdentificationOptOuted_())){var g=a.getCookie("wt_cdbeid");g&&-1!==g.search(/^[0-9a-f]{32}$/)&&(a.cdbeid=g);g||(a.useCDBCache&&!a.isIE&&b("2d")?("string"!==typeof a.useCDBCache&&(a.useCDBCache="fbc.wcfbc.net/v1/fbc"),d(a.useCDBCache,function(b,d){var c=f(b);c?(e(c),h(function(){a.quicksend(a.wtEscape(a.contentId.split(";")[0])+",1,"+a.baseparams(),"&cdbeid="+
c,"cdb")})):(e("1"),k(d?d:"6"))})):(g="",a.useCDBCache&&a.isIE?g="1":a.useCDBCache&&!b("2d")&&(g="2"),e("1"),k(g)))}};a.cdbeid=!1;a.setProperty("execCDB",!0);a.setProperty("useCDBCache",!1);a.startCDB=a.execCDB&&l()},na=function(a,c,b){a.eid=!1;a.firstVisitContact=!1;a.firstVisitTimestamp=!1;a.lastVisitContact=!1;a.cookieOne=!1;a.setProperty("globalVisitorIds",!1);a.setProperty("validateEverId",!1);a.setProperty("maxURLParameterValidity",9E5);a.zeroPad=a.generateEid=a.setEverId=function(b,c,e){b&&("string"===typeof b&&-1!==b.search(/^[0-9]{19}$/))&&(c&&"string"===typeof c||(c=a.trackId.split(",")[0]),(new B(a)).setId(b,c,e),(new C(a)).setId(c))};
a.firstParty=function(){if(!a.isUserIdentificationOptOuted_()){var b=new B(a);b.init();var c=new C(a);c.init();a.eid=b.getId();a.cookieOne=b.getCookieOne();c.getId()||(b.getId()!==b.getUrlId()&&(a.forceNewSession=!0),a.firstVisitContact=b.getFirstVisitContact(),a.lastVisitContact=b.getLastVisitContact());a.firstVisitTimestamp=b.getFirstVisitContactTimestamp()}};a.globalVisitorIds&&(c.execCDB=!0);ma(a,c,b)},oa=pa=function(a,c,b){a.setProperty("reporturl","report2.webtrekk.de/cgi-bin/wt");
a.setProperty("disableOverlayView",!1);var d=a.searchContentIds=a.startOverlay=function(b,c){a.searchContentIds();a.urlParam(a.wtHref(),
"wt_reporter",!1)?a.reporturl=d(a.urlParam(a.wtHref(),"wt_reporter",!1)):a.getCookie("wt_overlayFrame")&&(a.reporturl=d(a.getCookie("wt_overlayFrame")));-1===a.reporturl.search(/http|https/)&&(a.reporturl=document.location.protocol+"//"+a.reporturl);if(a.contentIds){var h=a.reporturl+"/"+b+".pl?wt_contentId="+a.contentIds+"&x="+(new Date).getTime();if(a.include(h))if("complete"!==document.readyState)a.registerEvent(g,"load",c);else return c()}return 0};(function(){for(var b=!1,d=0;d<g.webtrekkUnloadObjects.length;d++)a===
g.webtrekkUnloadObjects[d]&&(b=!0);b||g.webtrekkUnloadObjects.push(a);oa(a)})()},qa=
ra=sa=function(a,c,b){var d=this;d.item=b;d.href="undefined"!==typeof b.href?b.href:
"";d.href||(d.href=a.getAttribute(b,"href")?a.getAttribute(b,"href"):"");d.linkIdByNameOrId=a.getAttribute(b,"name")?a.getAttribute(b,"name"):"";d.linkIdByNameOrId||(d.linkIdByNameOrId=a.getAttribute(b,"id")?a.getAttribute(b,"id"):"");d.linkId="";d.action="link";d.isDownloadFile=!1;d.isInternalLink=function(){var c;if(a.linkTrackDownloads){c=a.linkTrackDownloads.split(";");for(var e=d.href.split("."),e=e.pop(),h=0;h<c.length;h++)if(c[h]===e){d.isDownloadFile=!0;break}}if(d.isDownloadFile||"_blank"===
b.target)d.action="click";c=d.href;var e=c.toLowerCase(),h=c.split("#")[0],g=document.location,l=d.item,n=a.getAttribute,v=n(l,"onclick"),s=n(l,"onmousedown"),l=n(l,"ontouchstart");c=a.noDelayLinkTrackAttribute?!!a.getAttribute(b,a.noDelayLinkTrackAttribute):!(c&&!(0===e.indexOf("javascript:")||0===e.indexOf("#")||"click"===d.action||h===g.href.split("#")[0]&&-1!==c.indexOf("#")||h===g.pathname.split("#")[0]&&-1!==c.indexOf("#")||v&&-1!==v.search(/return false[;]?$/)||s&&-1!==s.search(/return false[;]?$/)||
l&&-1!==l.search(/return false[;]?$/)));return c};d.getCCParams=d.setJSONParams=d.getLinkId=,ta=function(a){var c=this;c.triggerObjectName="__"+(new Date).getTime()+"_"+parseInt(1E3*Math.random());var b=function(b,d){var h=d[c.triggerObjectName];a.config=a.getConfig(!0);a.config.customClickParameter=a.customClickParameter;a.ccParams=h.getCCParams();var g=a.config.linkId=h.getLinkId();a.sendinfo(a.config,
g,h.action)},d=function(d){a.registerEvent(d,"click",function(e){if(e.which&&1===e.which||e.button&&1===e.button)!a.delayLinkTrack||(e.ctrlKey||e.altKey||e.metaKey||e.shiftKey||"function"!==typeof e.preventDefault||d[c.triggerObjectName].isInternalLink())||(e.preventDefault(),g.setTimeout(a.delayLinkTrackTime)),b(e,d)})};c.linkTrackInit=,ua=D=function(a,c){var b=this,d=null,f=null;b.formObject=!1;b.formFocus=!1;b.formName=!1;b.form=a.form;b.formSubmit=!1;b.formFieldData={};b.formFieldDataUnused={};b.formFieldDataPathAnalysis=[];b.triggerObjectName="__"+(new Date).getTime()+"_"+parseInt(1E3*Math.random()+"");var e=h=function(d,c){if(a.formPathAnalysis)if("select-multiple"===c.type)for(var e=b.getFormFieldValue(c).split("|"),f=0,h=e.length;f<h;f++)b.formFieldDataPathAnalysis.push([d,c.type,e[f]]);else b.formFieldDataPathAnalysis.push([d,c.type,b.getFormFieldValue(c)])},k=function(c,e){a.registerEvent(e,"click",function(){if(e!==d){null!==d&&h(f,d);d=e;var a=f=c;b.formObject&&(b.formFocus=a,delete b.formFieldDataUnused[a])}})},l=n=v=function(){l();if(b.formObject){var d=a.getAttribute(b.formObject,a.formAttribute);b.formName=d?d:a.contentId.split(";")[0];for(var d=0,e=b.formObject.elements,f=e.length;d<f;d++){var h=e[d],m=b.getFormFieldName(h);"hidden"!==h.type&&("button"!==h.type&&"image"!==h.type&&"reset"!==h.type&&"submit"!==h.type&&
"fieldset"!==h.type)&&m&&("undefined"===typeof b.formFieldData[m]&&(b.formFieldData[m]=[]),"undefined"===typeof b.formFieldDataUnused[m]&&(b.formFieldDataUnused[m]=[]),b.formFieldData[m].push(h),b.formFieldDataUnused[m].push(h),k(m,h))}a.registerEvent(b.formObject,"submit",n);a.registerEvent(g,"beforeunload",function(){c(b)});a.registerEvent(g,"unload",}},s=m=r=function(a,d,c,e){var f=a.replace(/[.;|]/g,"_")+".",f=f+(d+"|")+(c+"|");return f=e?f+"0":f+(b.formFocus&&b.formFocus===a?"1":"0")},q=p=function(a){for(var d in a){var c=d+"";if(1<a[c].length){for(var e=!1,f=0;f<a[c].length;f++){var h=b.getFormFieldValue(a[c][f]);if("empty"!==h){a[c]=[a[c][f].type,h];e=!0;break}}e||(a[c]=[a[c][0].type,"empty"])}else a[c]=[a[c][0].type,b.getFormFieldValue(a[c][0])]}},t=function(){if(!b.formObject)return"";p(b.formFieldData);p(b.formFieldDataUnused);var d=[],
c;c=[];if("undefined"!==typeof b.formObject.elements.wt_fields){var e=b.formObject.elements.wt_fields.value;e&&(c=e.split(";"))}if(0>=c.length)for(var f in b.formFieldData)e=f+"","string"===typeof e&&e&&c.push(e);f=!1;if(a.formPathAnalysis){(e=q(b.formFieldDataUnused,c))&&d.push(e);for(var e=0,h=b.formFieldDataPathAnalysis.length;e<h;e++){var g=b.formFieldDataPathAnalysis,k;a:{k=0;for(var l=c.length;k<l;k++)if(g[e][0]===c[k]){k=!0;break a}k=!1}k&&(f=!0,d.push(r(g[e][0],g[e][1],g[e][2],!0)))}f&&(c=
d[d.length-1],c=c.substr(0,c.length-1),d[d.length-1]=c+"1")}else return q(b.formFieldData,c);return d.join(";")};b.getFormFieldName=b.getFormFieldValue=function(c){var d=c.type,e="";if("select-multiple"===d){for(var e=[],f=0,h=c.options,g=h.length;f<g;f++)h[f].selected&&e.push(m(c,h[f]));0>=e.length&&e.push("empty");e=e.join("|")}else"select-one"===d?(e="",-1!==c.selectedIndex&&
((e=m(c,c.options[c.selectedIndex]))||(e="empty"))):"checkbox"===d||"radio"===d?c.checked?(e=m(c))||(e="checked"):e="empty":"hidden"!==d&&("button"!==d&&"image"!==d&&"reset"!==d&&"submit"!==d)&&(f=(e=m(c))?"filled_out":"empty",s(c)||(f=e),h=b.getFormFieldName(c),"undefined"!==typeof a.formFieldDefaultValue[h]&&a.formFieldDefaultValue[h]===e&&"empty"!==f&&(f="empty"),f||(f="empty"),e=f);return s(c)&&"select-multiple"!==d&&"empty"!==e&&"filled_out"!==e?"anon":e};b.formTrackInstall=b.getFormTrackingData=function(){var c="";if(b.formObject){null!==d&&h(f,d);var e=t();if(e){var g=b.formSubmit;a.formSubmit&&(g=a.formSubmit);c+="&fn="+a.wtEscape(b.formName)+"%7C"+(g?"1":"0");c+="&ft="+a.wtEscape(e)}b.formSubmit=!1;a.formSubmit=!1;b.formName=!1;b.formObject=!1;b.formFocus=!1;b.formFieldData={};b.formFieldDataUnused={};b.formFieldDataPathAnalysis=[]}return c};b.formTrackSubmit=b.sendFormRequest=
b.updateFormFieldStatus=function(a){if(a&&"undefined"!==typeof a.type){var c=a.type,d=b.getFormFieldName(a),
e=b.getFormFieldValue(a);d&&(e&&"undefined"!==typeof b.formFieldData[d])&&(b.formFieldData[d].splice(0,0,a),b.formFieldDataPathAnalysis.push([d,c,e]),b.formFocus=d,delete b.formFieldDataUnused[d])}};b.init=,va=wa=A=function(a,c,b,d){"1"!==a.cookie||(a.optOut||a.deactivatePixel)||a.firstParty();(b=b?b:"")||(b=a.formObject&&"noForm"!==c?"form":"link");"function"===typeof a.beforeUnloadPixel?a.beforeUnloadPixel():"form"===b&&a.executePlugin(a.getPluginConfig("form","before"));var f="";if(a.config.linkId&&(f+="&ct="+
a.wtEscape(a.maxlen(a.wtUnescape(a.config.linkId),255)))){var e=a.ccParams;"string"===typeof e&&""!==e&&(f+=e)}if(a.wtEp)if(a.wtEpEncoded)f+=a.wtEp;else if(e=a.wtEp,"string"===typeof e&&""!==e)for(var e=e.split(/;/),h=0;h<e.length;h++)if("undefined"!==typeof e[h]){var g=e[h].split(/\=/);a.checkSC("custom")&&(g[1]=a.decrypt(g[1]));g[1]=a.wtEscape(g[1]);f+="&"+g[0]+"="+g[1]}"noForm"!==c&&(f+=d.getFormTrackingData());""!==f&&(a.quicksend(a.wtEscape(a.contentId.split(";")[0])+",1,"+a.baseparams(),f),
a.config.linkId="",a.ccParams="",a.wtEp="");"function"===typeof a.afterUnloadPixel?a.afterUnloadPixel():"form"===b&&a.executePlugin(a.getPluginConfig("form","after"))},xa=ya=za=g.webtrekkV3=g.WebtrekkV3=)(window);

/** End webtrekk_v4.js */

//tealium universal tag - utag.sender.23012 ut4.0.202308230822, Copyright 2023 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {"id" : id};
    utag.o[loader].sender[id] = u;
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.41
    /* utag.js version 4.26 or above is required to avoid errors with this loader function */
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader =  } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = } else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf
    u.toBoolean = 
    u.ev = {"view" : 1, "link" : 1};

      u.map={"page_content_id":"contentId","page_domain":"contentGroup01","page_navigation_level_1":"contentGroup02","page_navigation_level_2":"contentGroup03","page_navigation_level_3":"contentGroup04","page_navigation_level_4":"contentGroup05","page_navigation_level_5":"contentGroup06","page_navigation_level_6":"contentGroup07","page_target_group":"contentGroup08","page_type":"contentGroup10","wt_link_id":"linkId","wt_track_id":"trackId","page_searchfilter_1":"customParameter01","page_searchfilter_2":"customParameter02","search_engine_searchword":"internalSearch","wt_campaign_id":"campaignId","wt_media_code":"mediaCode","wt_media_code_cookie":"mediaCodeCookie","page_name":"contentGroup09","page_active_tab":"customParameter10","search_engine_page_number":"customParameter01","search_engine_results_per_page":"customParameter05","search_engine_total_results":"customParameter06","shop_customer_type":"customSessionParameter01","shop_order_id":"orderId","shop_product_bookability":"customEcommerceParameter05","shop_product_business_case":"customEcommerceParameter04","shop_product_sku":"customEcommerceParameter02,customEcommerceParameter03","shop_product_status":"productStatus","shop_product_type":"customEcommerceParameter06","shop_order_value":"orderValue","shop_product_name":"product","shop_product_price":"productCost","shop_product_quantity":"productQuantity","shop_vo":"customEcommerceParameter01","shop_product_bundle":"customEcommerceParameter38","shop_product_category":"customEcommerceParameter25","shop_product_class":"customEcommerceParameter39","shop_product_duration":"customEcommerceParameter42","shop_product_family":"customEcommerceParameter31","shop_product_group":"customEcommerceParameter30","LE2_Section_Unit":"customParameter44","shop_customer_loginstatus":"customParameter54","shop_product_directadd":"customEcommerceParameter53","js_page.page_test_case":"customParameter84","cp.content_consumer":"customSessionParameter25","cp.content_consumer_id":"customSessionParameter25","page_filter_category":"customParameter35","page_filter_manufacturer":"customParameter25","page_filter_product":"customParameter26","click_filter_category":"customClickParameter71","click_filter_manufacturer":"customClickParameter72","click_filter_product":"customClickParameter73","shop_customer_lifetime_value":"customEcommerceParameter43","shop_payment_mode":"customEcommerceParameter64","shop_shipping_mode":"customEcommerceParameter65","page_dom_url":"customParameter57","customer_service_case":"customParameter85","page_customer_device":"customParameter14","shop_coupon_available":"customParameter52","shop_coupon_campaign":"customParameter53","shop_coupon_value":"customParameter51","shop_customer_stock":"customEcommerceParameter54","page_category_1":"contentGroup14","page_category_2":"contentGroup15","page_category_3":"contentGroup16","shop_product_average_price":"customEcommerceParameter66","shop_product_discount":"customEcommerceParameter67","shop_product_discount_value":"customEcommerceParameter68","shop_product_value":"customEcommerceParameter50","shop_product_mnp":"customEcommerceParameter69","shop_product_color":"customEcommerceParameter70","shop_product_storage":"customEcommerceParameter71","shop_product_manufacturer":"customEcommerceParameter72","shop_product_size":"customEcommerceParameter73","shop_product_sub":"customEcommerceParameter74","shop_product_tv":"customEcommerceParameter75","shop_order_ixus":"customEcommerceParameter76","shop_product_detail_business_case":"customEcommerceParameter77","user_additional_card_amount":"customEcommerceParameter78","user_transaction_stock":"customEcommerceParameter79","user_stock_sku":"customEcommerceParameter80","shop_product_name2":"customEcommerceParameter81","shop_product_status2":"customEcommerceParameter82","ckp1":"customClickParameter20","ckp2":"customClickParameter21","shop_product_shipping_mode":"customEcommerceParameter65","user_lifetime_value":"customEcommerceParameter43","user_stock":"customEcommerceParameter54","shop_customer_login_status":"customParameter54","user_login_status":"customParameter54","shop_product_non_discounted_value":"customEcommerceParameter85","qp.activetabid":"customParameter96","shop_product_new":"customEcommerceParameter60","qp.tb":"customParameter104"};
  u.extend=[function(a,b){ try{ if(typeof b['qp.tb']!='undefined'){try{b['qp.tb']=b["qp.tb"]=("treuebonus " + b["qp.tb"])}catch(e){}} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(1){
u.data.wt_config.executePluginFunction += ";wt_nukeCookies";
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){

var consentValues = [], cookieValue = r("CONSENTMGR"), consent = cookieValue.split("|");
for (i = 0; i < consent.length; i++) {
    consentPart = consent[i].split(":");
    consentValues[consentPart[0]] = consentPart[1];
}

var analyticsConsentGranted = false;
analyticsConsentGranted = (cookieValue !== "" && consentValues.consent === "true" && consentValues.c1 !== "0");

u.data.wt_config.enableAnonymousFunction = !analyticsConsentGranted;
u.data.wt_config.anonymousOptIn = !analyticsConsentGranted;

window.mappObjectNames = window.mappObjectNames || [];
window.mappObjectNames[u.data.wt_object_name] = u.data.wt_object_name;

for(let instance_name in window.mappObjectNames){
    if(typeof window[instance_name] === "object") {
        window[instance_name].enableAnonymousFunction = !analyticsConsentGranted;
        window[instance_name].anonymousOptIn = !analyticsConsentGranted;
    }
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
if(a === "link") {
  return true;
}

u.data.wt_config.cookieSecure = true;
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
u.data.wt_config.executePluginFunction += ";wt_replacePersonalData";
} } catch(e){ utag.DB(e) }  },
function(a,b){
/*

// TEST DATA

var b = {
    "page_content_id": "www.telekom.de.privatkunden.unterwegs.warenkorb.add",
    "page_type": "basket",
    "shop_product_bundle": "apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy;apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy;apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy;apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy;apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy;apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy;apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy;apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy;apple iphone 6 plus silber 16gb und magenta mobil l mit top-handy",
    "shop_product_business_case": "ng mit eg;ng mit eg;ng mit eg;ng mit eg;ng mit eg;ng mit eg;ng mit eg;ng mit eg;ng mit eg",
    "shop_product_category": "endgeraet;contract;endgeraet;contract;endgeraet;contract;endgeraet;contract;endgeraet",
    "shop_product_class": "endgeraet;tarif;endgeraet;tarif;endgeraet;tarif;endgeraet;tarif;endgeraet",
    "shop_product_duration": "1;24;1;24;1;24;1;24;1",
    "shop_product_family": "apple iphone 6 plus;magenta mobil mit top-handy;apple iphone 6 plus;magenta mobil mit top-handy;apple iphone 6 plus;magenta mobil mit top-handy;apple iphone 6 plus;magenta mobil mit top-handy;apple iphone 6 plus",
    "shop_product_name": "apple iphone 6 plus silber 16gb;magenta mobil l mit top-handy",
    "shop_product_price": "169.95;62.95;169.95;62.95;169.95;62.95;169.95;62.95;169.95",
    "shop_product_quantity": "1;1;1;1;1;1;1;1;1",
    "shop_product_sku": "99921961;12779;99921961;12779;99921961;12779;99921961;12779;99921961",
    "shop_product_status": "add",
    "shop_vo": "ESHOP"
};

*/

var datasources_to_check = ["shop_product_name", 
                            "shop_product_sku", 
                            "shop_product_business_case", 
                            "shop_product_category", 
                            "shop_product_family",
           //                 "shop_product_bundle",
                            "shop_product_class",
                            "shop_product_duration",
                            "shop_product_price",
                            "shop_product_quantity"
                            ], // add more data sources into this array if required
    string_delimeter = ";", // change this if the delimiter for multiple products is not a semicolon
    character_limit = 255,  // maximum size of product strings
    // internal only:
    longest,
    total_items;

    // only run on basket page and confirmation page
    if (b.page_type !== "basket" && !b.shop_order_id) {
        return true;
    }


    // find the longest string if there are any longer than the character limit
    function findLongest (arr, b, limit, delim) {
        var maxLen = 0, longestStr = null, i = 0, cur_ds, index;
        for (i = 0; i < arr.length; i++) {
            cur_ds = b[arr[i]];
            if (cur_ds === undefined) {
                continue;
            }
            if (utag.ut.typeOf(cur_ds) === "array") {
                cur_ds = cur_ds.join(delim);
            }
            if (cur_ds.length > maxLen) {
                maxLen = cur_ds.length;
                longestStr = arr[i];
                index = i;
            }
        }
        if (maxLen < limit) {
            return false;
        }
        return longestStr;
    }

    // truncate arrays and return a string joined by the delimiter
    function truncate(arr, string_delim, bound) {
        var i;

        for (i = 0; i < arr.length; i++) {
            if (utag.ut.typeOf(b[arr[i]]) === "string") {
                b[arr[i]] = b[arr[i]].split(string_delim);
            }
            b[arr[i]] = b[arr[i]].slice(0, bound).join(string_delim);
        }
    }

    // longest = findLongest(datasources_to_check, b, character_limit, string_delimeter);

    
    (function master (longest) {
        longest = findLongest(datasources_to_check, b, character_limit, string_delimeter);
        // only run if we have a long string
        if (longest) {
            // if the semicolon is the last character, then we can take the whole string
            if (b[longest].charAt(character_limit) === string_delimeter) {
                b[longest] = b[longest].substring(0, character_limit); // up to, but not including the delimiter
            } else {
                // 
                //if (b[longest].charAt(character_limit + 1) === ";") {
                  //  b[longest] = b[longest].substring(0, character_limit + 1);
                //} else {
                    // truncate the string to the character limit
                    b[longest] = b[longest].substring(0, character_limit);
                    // truncate again to go back to the last semicolon, so we don't miss any data
                    b[longest] = b[longest].substring(0, b[longest.lastIndexOf(string_delimeter)]);
                //}
                
            }
            // get the total items from the number of semicolons
            total_items = b[longest].replace(/[^\;]/g, "").length;
            // call truncate function to make sure all data sources have the same number of items
            truncate(datasources_to_check, string_delimeter, total_items);
            // recursively call the function until all strings are under 255 characters
            master();
        }         
    }(longest));
},


function(a,b,c,d,e,f,g){if(1){d=b['page_content_id'];if(typeof d=='undefined')return;c=[{'www.telekom.de.privatkunden.start.zuhause.tarife':'new-b2c-sales-wireline'},{'www.telekom.de.privatkunden.start.zuhause.zubuchoptionen':'new-b2c-sales-wireline'},{'www.telekom.de.privatkunden.start.zuhause.geraete-zubehoer':'new-b2c-sales-wireline'},{'www.telekom.de.privatkunden.start.zuhause.smarthome':'b2c-smarthome-sales'},{'www.telekom.de.privatkunden.start.zuhause.de-mail':'b2c-wireline-service'},{'www.telekom.de.privatkunden.unterwegs.tarife-und-optionen.roaming.magenta-eins-eu-flat':'b2c-mobile-service'},{'www.telekom.de.privatkunden.start':'new-b2c-sales-wireline'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['liveperson__unit']=c[e][f];m=true};};if(m)break};if(!m)b['liveperson__unit']='new-b2c-sales';   }},



function(a,b,c,d,e,f,g){if(1){d=b['page_content_id'];if(typeof d=='undefined')return;c=[{'www.telekom.de.privatkunden.unterwegs.tarife-und-optionen.prepaid-tarife.aktivierung':'-not set- '},{'www.telekom.de.privatkunden.unterwegs.tarife.prepaid.aktivierung.zusammenfassung':'-not set- '},{'www.telekom.de.privatkunden.unterwegs.tarife-und-optionen.prepaid.aktivierung.ausweisdaten':'-not set- '},{'www.telekom.de.privatkunden.unterwegs.tarife.prepaid.aktivierung.persoenliche-daten':'-not set- '},{'www.telekom.de.privatkunden.unterwegs.tarife.prepaid.aktivierung.prepaid-karte':'-not set- '},{'www.telekom.de.privatkunden.unterwegs.tarife-und-optionen.prepaid-tarife.aktivierung':'-not set- '},{'www.telekom.de.privatkunden.unterwegs.tarife.prepaid.aktivierung':'-not set- '},{'www.telekom.de.privatkunden.start.entertainment.musik.magenta-eins-prio-tickets':'-not set- '},{'www.telekom.de.privatkunden.unterwegs.de.tarife':'pk-mf-service'},{'www.telekom.de.privatkunden.start.impressum':'pk-mf-service'},{'www.telekom.de.privatkunden.start.datentransparenz':'pk-mf-service'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-s-xl-aktion':'-not set-'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-m-xl-aktion':'-not set-'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-l-xl-aktion':'-not set-'},{'www.telekom.de.privatkunden.unterwegs.warenkorb':'-not set-'},{'www.telekom.de.privatkunden.festnetz.aktion-magentazuhause-mit-magentatv':'-not set-'},{'www.telekom.de.privatkunden.festnetz.aktion-magentazuhause-l-mit-magentatv':'-not set-'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-s-vvl':'-not set-'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-m-vvl':'-not set-'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-l-vvl':'-not set-'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-s-mit-magentatv-vvl':'-not set-'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-m-mit-magentatv-vvl':'-not set-'},{'www.telekom.de.privatkunden.festnetz.magentazuhause-l-mit-magentatv-vvl':'-not set-'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['LE2_Section_Unit']=c[e][f];m=true};};if(m)break};   }},

function(a,b){ try{ if(typeof b['cp.content_consumer']!='undefined'||typeof b['qp.utag_app']!='undefined'){b['LE2_Section_Unit']='-not set-'} } catch(e){ utag.DB(e); }  },

function(a,b,c,d,e,f,g){if(1){d=b['page_content_id'];if(typeof d=='undefined')return;c=[{'.unterwegs.apps-und-dienste.kommunikation.telekom-e-mail':'pk-omni-service'},{'.unterwegs.apps-und-dienste.connect-app':'pk-omni-service'},{'.unterwegs.apps-und-dienste.hd-voice':'pk-omni-service'},{'.unterwegs.apps-und-dienste.konnektivitaet.wlan-to-go':'pk-fn-service'},{'.unterwegs.apps-und-dienste.online-manager-pc':'pk-omni-service'},{'.unterwegs.apps-und-dienste.kommunikation.voicemail':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sprachbox-pro':'pk-fn-service'},{'.unterwegs.apps-und-dienste.undefined':'pk-mf-service'},{'.unterwegs.apps-und-dienste.kommunikation':'pk-mf-service'},{'.unterwegs.apps-und-dienste.kommunikation.hd-voice-und-hd-voice-plus':'pk-mf-service'},{'.unterwegs.apps-und-dienste.kommunikation.hometalk':'pk-mf-service'},{'.unterwegs.apps-und-dienste.kommunikation.messageplus':'pk-mf-service'},{'.unterwegs.apps-und-dienste.kommunikation.suche.suchergebnis':'pk-mf-service'},{'.unterwegs.apps-und-dienste.kommunikation.wlan-call':'pk-mf-service'},{'.unterwegs.apps-und-dienste.kommunikation.wlan-call.suche.suchergebnis':'pk-mf-service'},{'.unterwegs.apps-und-dienste.konnektivitaet':'pk-mf-service'},{'.unterwegs.apps-und-dienste.mobile-tv':'pk-mf-service'},{'.unterwegs.apps-und-dienste.mobile-tv.suche.suchergebnis':'pk-mf-service'},{'.unterwegs.apps-und-dienste.readly':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sicherheit':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sicherheit.handyversicherung':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sicherheit.handyversicherung.suche.suchergebnis':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sicherheit.protect-mobile':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sicherheit.protect-mobile.schutz-vor-cyberangriffen':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sicherheit.suche.suchergebnis':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sicherheit-und-cloud':'pk-mf-service'},{'.unterwegs.apps-und-dienste.sicherheit-und-cloud.suche.suchergebnis':'pk-mf-service'},{'.unterwegs.apps-und-dienste.suche.suchergebnis':'pk-mf-service'},{'.unterwegs.apps-und-dienste.telekom-apps':'pk-mf-service'},{'www.telekom.de.privatkunden.start.datentransparenz':'pk-mf-service'},{'www.telekom.de.privatkunden.start.impressum':'pk-mf-service'},{'www.telekom.de.privatkunden.start.geschaeftsfuehrung':'pk-omni-service'},{'www.telekom.de.privatkunden.start.ueber-das-unternehmen':'pk-omni-service'},{'www.telekom.de.privatkunden.unterwegs.reservierungs-service':'pk-mf-sales'},{'www.telekom.de.privatkunden.tv.sport.gewinnspiel':'-not set-'},{'www.telekom.de.privatkunden.unterwegs':'pk-mf-sales'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['LE2_Section_Unit']=c[e][f];m=true};};if(m)break};   }},
function(a,b,c,d,e,f,g){if(1){d=b['dom.url'];if(typeof d=='undefined')return;c=[{'www.telekom.de/festnetz/angebot-magenta-zuhause-m':'-not set-'},{'www.telekom.de/tv/angebot-magenta-tv-mit-magenta-zuhause-m':'-not set-'},{'www.telekom.de/festnetz/angebot-magenta-zuhause-l':'-not set-'},{'www.telekom.de/tv/angebot-magenta-tv-mit-magenta-zuhause-l':'-not set-'},{'www.telekom.de/tv/tarife-und-optionen/magentatv-aktion-fuer-magentazuhause':'-not set-'},{'www.telekom.de/tv/sport/gewinnspiel':'-not set- '},{'www.telekom.de/magenta-eins/magenta-eins-plus':'pk-sales-m1nl'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['LE2_Section_Unit']=c[e][f];m=true};};if(m)break};   }},

function(a,b){ try{ if(typeof b['cp.content_consumer']!='undefined'||typeof b['qp.utag_app']!='undefined'){b['content_consumer_id']=b['cp.content_consumer_id']} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['page_content_id'].toString().toLowerCase().indexOf('www.telekom.de.privatkunden.benutzer'.toLowerCase())>-1){b['page_content_id']='www.telekom.de.privatkunden.login.benutzer';b['page_navigation_level_1']='login';b['page_navigation_level_2']='benutzer';b['page_name']='benutzer'} } catch(e){ utag.DB(e); }  },
function(a,b){ try{ if(b['page_content_id'].toString().toLowerCase().indexOf('www.telekom.de.privatkunden.passwort'.toLowerCase())>-1){b['page_content_id']='www.telekom.de.privatkunden.login.passwort';b['page_navigation_level_1']='login';b['page_navigation_level_2']='passwort';b['page_name']='passwort'} } catch(e){ utag.DB(e); }  }];


    u.send = function(a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:225");

        var c, d, e, f, prop;

        u.data = {
          "qsp_delim" : "&",
          "kvp_delim" : "=",
          "base_url" : "",
          "optoutName" : "",
          "optoutTimeFrame" : "",
          "paramFirst" : "",
          "linkTrackIgnorePattern" : "^[javascript\:|\#]",
          "delayLinkTrack" : "",
          "delayLinkTrackTime" : 300,
          // E-Commerce Vars
          "product_id" : [],
          "product_name" : [],
          "product_sku" : [],
          "product_brand" : [],
          "product_category" : [],
          "product_subcategory" : [],
          "product_quantity" : [],
          "product_unit_price" : [],
          "product_discount" : [],
          "wt_object_name" : "wt_02" || "wt",
          "wt_config" :{
            "trackId" : "827974826901109",
            "trackDomain" : "pix.telekom.de",
            "domain" : "REGEXP:.*((3d-?secure|securesuite|arcot|verified-?by-?visa\\.|geschuetzt-?einkaufen\\.|secure\\.dkb|mastercardsecurecode\\.|acs\\.|attempts\\.securecode|secure-?code\\.|computop-paygate|\\.wlp-acs|hvbmc\\.|paypal|secure\\.payengine|sofort\\.com)|([0-9a-zA-Z\\-]*\\.?(telekom\\.payback|telekom|t-mobile|t-online|entertain|corporatebenefits\\.spectrum8)\\.[a-zA-Z]{2,3}$)).*",
            "linkTrack" : "link",
            "linkTrackAttribute" : "data-tealium-rel",
            "linkTrackParams" : "shortcut",
            "linkTrackDownloads" : "",
            "linkTrackPattern" : new RegExp(";jsessionid=[a-zA-Z0-9\.]+[#|?|&]?","g"),
            "linkTrackReplace" : "?",
            "pixelSampling" : "",
            "forceHTTPS" : "1",
            "cookie" : "3",
            "cookieDomain" : "",
            "contentId" : "",
            "form" : "0",
            "sendViaServerActivated" : "false",
            "requestQueueActivated" : "true",
            "executePluginFunction" : ";",
            "mediaCodeCookie" : "",
            "mediaCode" : "",
            "enableAnonymousFunction": "",
            "anonymousOptIn": "",
            "anonymousCookieName": "",
            "suppressIdentificationParameter": ""
          },
          "pixelConfig" : {
            "linkId": "",
            "productCategory" : {}
          }
        };

        // Start tag-scoped extensions
        for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){if(typeof utag_err!='undefined'){utag_err.push({e:'extension error:'+e,s:utag.cfg.path+'utag.'+id+'.js',l:c,t:'ex'})}}};
        utag.DB("send:225:EXTENSIONS");
        utag.DB(b);
        // End tag-scoped extensions

        c = [];

        // Start Mapping
        // mapping runs after pulling values from the E-Commerce extension
        // to give mappinged values top priority
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.data[e[f]] = b[d];

              if (/^(order|product)_/.test(e[f])) {
                continue;
              }
              // Test for webtrekk numbered variables e.g. contentGroup01
              var match = /^([a-zA-Z]+)([0-9]+)$/.exec(e[f]);

              if (match !== null) {
                var paramName = match[1];
                var paramIndex = parseInt(match[2], 10);
                if (typeof u.data.pixelConfig[paramName] !== "object") {
                  u.data.pixelConfig[paramName] = {};
                }
                u.data.pixelConfig[paramName][paramIndex] = b[d];
              } else {
                // special global page config type keyword
                if (e[f] !== "linkId" &&  u.data.wt_config[e[f]] !== undefined) {
                  // contentId has to be in both the global config and the pixel config
                  // contentId is required to be set at tracking instance instantiation time
                  // contentId is needed for ajax driven sites where contentId value is changing
                  // on utag.view/utag.link requests
                  if (e[f] === "contentId") {
                    u.data.pixelConfig[e[f]] = b[d];
                  }
                  u.data.wt_config[e[f]] = b[d];
                } else if(e[f].indexOf("wt_config.") === 0){
                  e[f] = e[f].split("wt_config.")[1];
                  if (/^(ignorePrerendering|formPathAnalysis|tabBrowsing|globalVisitorIds|execCDB|useCDBCache|useCDBScript|requestQueueActivated|enableAnonymousFunction|anonymousOptIn)$/.test(e[f])) {
                    b[d] = u.toBoolean(b[d]);
                  }
                  u.data.wt_config[e[f]] = b[d];
                }  else {
                  // Not a special type parameter, set it as wt.variable
                  u.data.pixelConfig[e[f]] = b[d];
                }
              }
            }
          }
        }

        utag.DB("send:225:MAPPINGS");
        utag.DB(u.data);
        // End Mapping

        // Pull E-Commerce extension values
        // Mappings override E-Commerce extension values
        u.data.order_id = u.data.order_id || u.data.orderId || b._corder || "";
        u.data.order_total = u.data.order_total || u.data.orderValue ||b._ctotal || "";
        u.data.order_subtotal = u.data.order_subtotal || b._csubtotal || "";
        u.data.order_currency = u.data.order_currency || u.data.orderCurrency || b._ccurrency || "";
        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_name.length === 0 && b._cprodname !== undefined) { u.data.product_name = b._cprodname.slice(0); }
        if (u.data.product_brand.length === 0 && b._cbrand !== undefined) { u.data.product_brand = b._cbrand.slice(0); }
        if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
        if (u.data.product_subcategory.length === 0 && b._ccat2 !== undefined) { u.data.product_subcategory = b._ccat2.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }

        if (u.data.order_id) {
          if (u.data.order_couponValue) {u.data.pixelConfig.order_couponValue = u.data.order_couponValue;}
          u.data.pixelConfig.orderId = u.data.order_id;
          u.data.pixelConfig.orderValue = u.data.order_total || u.data.order_subtotal;
          u.data.pixelConfig.orderCurrency = u.data.order_currency;
          if (u.data.product) {
            u.data.pixelConfig.product = (u.typeOf(u.data.product) === "array")  ? u.data.product.join(";") : u.data.product ;
          } else {
            u.data.pixelConfig.product = (u.data.product_id.length && u.data.product_id.length > 0 && u.data.product_id.join) ?
              u.data.product_id.join(";") : (u.data.product_name.length && u.data.product_name.length > 0 && u.data.product_name.join) ?
              u.data.product_name.join(";") : "";
          }

          if (!u.data.pixelConfig.productCategory[1]) {
            u.data.pixelConfig.productCategory[1] = (u.data.product_category.length && u.data.product_category.length > 0 && u.data.product_category.join) ? u.data.product_category.join(";") : "";
          }
          if (!u.data.pixelConfig.productCategory[2]) {
            u.data.pixelConfig.productCategory[2] = (u.data.product_brand.length && u.data.product_brand.length > 0 && u.data.product_brand.join) ? u.data.product_brand.join(";") : "";
          }
          if (!u.data.pixelConfig.productCategory[3]) {
            u.data.pixelConfig.productCategory[3] = (u.data.product_subcategory.length && u.data.product_subcategory.length > 0 && u.data.product_subcategory.join) ? u.data.product_subcategory.join(";") : "";
          }
          if (!u.data.pixelConfig.productQuantity) {
            u.data.pixelConfig.productQuantity = (u.data.product_quantity.length && u.data.product_quantity.length > 0 && u.data.product_quantity.join) ? u.data.product_quantity.join(";") : "";
          }
          if (!u.data.pixelConfig.productCost) {
            u.data.pixelConfig.productCost = (u.data.product_unit_price.length && u.data.product_unit_price.length > 0 && u.data.product_unit_price.join) ? u.data.product_unit_price.join(";") : "";
          }
          u.data.pixelConfig.productStatus = u.data.pixelConfig.productStatus || "conf";
        } // end e-commerce block

        // link requests must have a "linkId" keyword
        if (a === "link") {
          u.data.pixelConfig.linkId = u.data.linkId || "";
        } else {
          // linkId only sent with a link event
          delete u.data.pixelConfig.linkId;
        }

        if (!window[u.data.wt_object_name]) {
          // webtrekk config must be initialised to something. If it already exists, then the new object will overwrite it in the initialisation call
          window.webtrekkConfig = window.webtrekkConfig || u.data.wt_config;
          window[u.data.wt_object_name] = new webtrekkV3(u.data.wt_config);
          if (u.data.optoutName || u.data.optoutTimeFrame) {
            window[u.data.wt_object_name].optoutName = u.data.optoutName || "webtrekkOptOut";
            if (u.data.optoutTimeFrame ) {
              var optOutTF = parseInt(u.data.optoutTimeFrame);
              if(!isNaN(optOutTF)) {
                window[u.data.wt_object_name].setCookie(window[u.data.wt_object_name].optoutName, 1, optOutTF);
              }
            }
          }
          // form tracking on single pages only - only one form can be tracked per pixel instance and page
          if (u.data.pixelConfig.formTrackInstall && window[u.data.wt_object_name].formTrackInstall) {
            window[u.data.wt_object_name].formTrackInstall(u.data.pixelConfig.formTrackInstall);
            // delete so it will not be sent in sendinfo
            delete u.data.pixelConfig.formTrackInstall;
          }
        }

        // clear out pixelConfig if properties are not set before transmitting
        for (prop in utag.loader.GV(u.data.pixelConfig)) {
          if (u.data.pixelConfig[prop] === "" || (u.typeOf(u.data.pixelConfig[prop]) === "array" && u.data.pixelConfig[prop].length === 0)) {
            try{
              delete u.data.pixelConfig[prop];
            }catch(e){
              u.data.pixelConfig[prop] = undefined;
              utag.DB(e);
            }
          }
        }

        // call sendinfo with custom arguments for one or more pixel request
        // from potentially the same page
        if (window[u.data.wt_object_name].sendinfo) {
          window[u.data.wt_object_name].sendinfo(u.data.pixelConfig);

          // update globalConfig contentId with any view/link request sent from the same page
          if (u.data.pixelConfig.contentId !== undefined) {
            window[u.data.wt_object_name].contentId = u.data.pixelConfig.contentId;
          }
        }

        utag.DB("send:225:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("225", "telekom.phoenix"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag
