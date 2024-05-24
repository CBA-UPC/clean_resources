
var webtrekkConfig = webtrekkConfig || {
    trackId: "602039762736393",
    trackDomain : "rai-italia01.wt-eu02.net",
    forceHTTPS: true,
	  domain : "www.dummydomain-donotchange.com",
	  cookie : "3",
	  mediaCode : "wt_mc",
	  contentId : "",
    tabBrowsing: false,
    execCDB: false,
    execRTA: false,
    safetag: {
        async: true,
        timeout: 2000,
        /** Load SafeTag from Webtrekk Server */
        safetagDomain: "responder.wt-safetag.com",
        safetagId: "602039762736393",
        /** Load SafeTag from Customer Server */
        // customDomain: "www.domain.de",
        // customPath: "javascripts/webtrekk_safetag.js",
        option: {}
    }
};

/**
 ************ Don't change anything beyond this line ************
 ********************* Start webtrekk_v4.js *********************
 */
(function(k){k.webtrekkUnloadObjects=k.webtrekkUnloadObjects||[];k.webtrekkLinktrackObjects=k.webtrekkLinktrackObjects||[];k.webtrekkHeatmapObjects=k.webtrekkHeatmapObjects||[];var D=function(a){a.getJSON=function(a){if("string"===typeof a&&a&&"{"===a.charAt(0)&&"}"===a.charAt(a.length-1))try{var c=(new Function("return "+a))();if("object"===typeof c)return c}catch(b){}return null};a.parseJSON=a.getMappingParam=,E=F=G=H=I=x=function(a,d,c){var b=RegExp(d+"="+
c);c=document.location.href;d=(new Date).getTime();b=b.exec(c);c=/wt_t=([\d]{13})/.exec(c);return b&&("undefined"!==typeof b[1]&&c&&"undefined"!==typeof c[1])&&parseInt(c[1])+9E5>d?a.wtUnescape(b[1]):!1},J=x=function(a,d,c){var b=RegExp(d+"="+c);c=document.location.href;d=(new Date).getTime();
b=b.exec(c);c=/wt_t=([\d]{13})/.exec(c);return b&&("undefined"!==typeof b[1]&&c&&"undefined"!==typeof c[1])&&parseInt(c[1])+9E5>d?a.wtUnescape(b[1]):!1},z=function(a,d,c,b){"1"!==a.cookie||(a.optOut||a.deactivatePixel)||a.firstParty();(c=c?c:"")||(c=a.formObject&&"noForm"!==d?"form":"link");"function"===typeof a.beforeUnloadPixel?a.beforeUnloadPixel():"form"===c&&a.executePlugin(a.getPluginConfig("form","before"));var f="";if(a.config.linkId&&(f+="&ct="+a.wtEscape(a.maxlen(a.wtUnescape(a.config.linkId),
255)))){a.linktrackOut&&(f+="&ctx=1");var h=a.ccParams;"string"===typeof h&&""!==h&&(f+=h)}if(a.wtEp)if(a.wtEpEncoded)f+=a.wtEp;else if(h=a.wtEp,"string"===typeof h&&""!==h)for(var h=h.split(/;/),g=0;g<h.length;g++)if("undefined"!==typeof h[g]){var e=h[g].split(/\=/);a.checkSC("custom")&&(e[1]=a.decrypt(e[1]));e[1]=a.wtEscape(e[1]);f+="&"+e[0]+"="+e[1]}"noForm"!==d&&(f+=b.getFormTrackingData());""!==f&&(a.quicksend(a.wtEscape(a.contentId.split(";")[0])+",1,"+a.baseparams(),f),a.config.linkId="",a.ccParams=
"",a.wtEp="");"function"===typeof a.afterUnloadPixel?a.afterUnloadPixel():"form"===c&&a.executePlugin(a.getPluginConfig("form","after"))},y=function(a){var d=[],c;for(c in a.safetagParameter){var b=c;if("executePluginFunction"===b)a.executePluginFunction+=a.safetagParameter[b],a.safetagParameter[b]="";else if("object"===typeof a.safetagParameter[b]){"object"!==typeof a[b]&&(a[b]={});for(var f in a.safetagParameter[b]){var h=f;a[b][h]=a.safetagParameter[b][h]}}else a[b]=a.safetagParameter[b],"linkTrack"!==
b&&"heatmap"!==b&&"tabBrowsing"!==b&&"execCDB"!==b&&"execRTA"!==b||d.push(b)}for(c=0;c<d.length;c++)switch(d[c]){case "linkTrack":a.linkTrackInit();break;case "heatmap":a.heatmapTrackInit();break;case "tabBrowsing":a.startTabBrowsing();break;case "execCDB":a.startCDB();break;case "execRTA":a.startRTA()}a.safetagParameter.pixel=a},K=function(a){var d=a.getMediaCode=a.getExtLifeCycles=a.quicksend=function(b,c,d){!a.trackDomain||!a.trackId||a.deactivatePixel||a.deactivateRequest?a.deactivateRequest=!1:(d||(d="wt"+(a.fileSuffix?".pl":"")),"undefined"===typeof a.requestTimeout&&(a.requestTimeout=5),a.geid&&(c="&geid="+a.geid+c),a.cdbeid&&(c="&cdbeid="+a.cdbeid+c),"1"===a.cookie&&(c="&eid="+a.eid+"&one="+(a.cookieOne?
"1":"0")+"&fns="+(a.forceNewSession?"1":"0")+c),"1"!==a.cookie&&(a.cookieEidTimeout&&(c="&cet="+a.cookieEidTimeout+c),a.cookieSidTimeout&&(c="&cst="+a.cookieSidTimeout+c)),0<a.pixelSampling&&(c+="&ps="+a.pixelSampling),c="&tz="+a.getTimezone()+c,c+="&pu="+a.wtEscape(document.location.href.split("#")[0]),b="//"+a.trackDomain+"/"+a.trackId+"/"+d+"?p="+a.version+","+b+c+"&eor=1",a.tabBrowsing?a.sendTabBrowsingPixel(b,d):!a.ignorePrerendering&&a.isChrome&&"undefined"!==typeof document.webkitHidden?("object"!==
typeof a.prerendering&&(a.prerendering=[]),document.webkitHidden?(a.prerendering.push(b),a.registerEvent(document,"webkitvisibilitychange",function(){a.sendPrerendering()})):a.sendPixel(b,d)):a.sendPixel(b,d),"hm"!==d&&"hm.pl"!==d&&(a.cookieOne=!1,a.forceNewSession=!1,a.sentFullPixel=1))};a.sendPrerendering=a.send=var c=a.sendinfo=,L=M=N=
O=P=Q=function(a){a.generateDefaultConfig("customEcommerceParameter orderValue currency orderId product productCost productQuantity productCategory productStatus couponValue productLabel productMainCategory productSubCategory productManufacturer paymentMethod productShortDescription productLongDescription shippingService shippingSpeed shippingCosts grossMargin orderStatus productVariant productSoldOut".split(" "))},
R=S=T=
U=V=W=y=X=Y=Z=$=aa=ba=ca=x=A=function(a){var d=a.trackId.split(",")[0],c="number"===typeof a.cookieEidTimeout?a.cookieEidTimeout:6,b=a.generateEid(),f="",h="",g=[],e=-1,m="",p=!1,l=b,n=!1,r=q=s=this.init=function(){g=a.getCookie("wt3_eid").split(";");for(var c=0;c<g.length;c++)if(-1!==
g[c].indexOf(d+"|")){e=c;h=g[c];m=h.replace(d+"|","").split("#")[0];-1!==h.indexOf("#")&&(l=h.replace(d+"|","").split("#")[1]);break}f=x(a,"wt_eid","([\\d]{19})");"string"===typeof k.webtrekkApplicationEverId&&(f=k.webtrekkApplicationEverId);m?(f&&(g[e]=d+"|"+f,m=f,a.updateCookie=!0),"undefined"!==typeof k.wt_mcp_eid&&(p=!0),-1===g[e].indexOf("#")?g[e]+="#"+b:g[e]=h.replace(/#[0-9]{19}/g,"#"+b),a.updateCookie?r():n=l=!1):("string"===typeof k.wt_mcp_eid&&-1!==k.wt_mcp_eid.indexOf(d+"|")?(m=k.wt_mcp_eid.replace(d+
"|",""),p=!0):f?m=f:(m=a.generateEid(),p=!0),g.push(d+"|"+m+"#"+b),r());a.updateCookie&&(l=s(l),n=s(m))};this.getId=this.setId=this.getUrlId=function(){return f};this.getLastVisitContact=function(){return l};this.getFirstVisitContact=function(){return n};this.getCookieOne=function(){return p}},B=ea=fa=ga=ha=ia=ja=ka=la=ma=na=oa=pa=C=qa=ra=z=sa=
ta=ua=k.webtrekkV3=k.WebtrekkV3=)(window);

if("object"===typeof webtrekkConfig&&"object"===typeof webtrekkConfig.safetag&&-1===document.cookie.indexOf("wt_r=1")){var wts=wts||[],wt_safetagConfig={async:"undefined"!==typeof webtrekkConfig.safetag.async?webtrekkConfig.safetag.async:!0,timeout:"undefined"!==typeof webtrekkConfig.safetag.timeout?webtrekkConfig.safetag.timeout:2E3,safetagDomain:"undefined"!==typeof webtrekkConfig.safetag.safetagDomain?webtrekkConfig.safetag.safetagDomain:!1,safetagId:"undefined"!==typeof webtrekkConfig.safetag.safetagId?
webtrekkConfig.safetag.safetagId:!1,customDomain:"undefined"!==typeof webtrekkConfig.safetag.customDomain?webtrekkConfig.safetag.customDomain:!1,customPath:"undefined"!==typeof webtrekkConfig.safetag.customPath?webtrekkConfig.safetag.customPath:!1,option:"undefined"!==typeof webtrekkConfig.safetag.option?webtrekkConfig.safetag.option:{}};(function(b,g){var d=e=document.location.protocol;if("http:"==e||"https:"==e){var a="";b.customDomain&&
b.customPath?a=e+"//"+b.customDomain+"/"+b.customPath:b.safetagDomain&&(b.safetagId&&-1!==b.safetagId.search(/^\d+$/))&&(a=e+"//"+b.safetagDomain+"/resp/api/get/"+b.safetagId+"?url="+d(document.location.href));if(a){for(var f in b.option)a+="&"+f+"="+d(b.option[f]);webtrekkV3.prototype.safetag=b;webtrekkV3.prototype.safetagInProgress=!0;webtrekkV3.prototype.safetagParameter={};webtrekkV3.prototype.update=function(){};window.wts=g;window.safetagLoaderHandler=if(b.async||"complete"===document.readyState||"interactive"===document.readyState){var d=document.getElementsByTagName("script")[0],c=document.createElement("script");
c.async=b.async;c.type="text/javascript";c.onerror=c.onload=function(){safetagLoaderHandler(c,"onload")};c.onreadystatechange=c.src=a;d.parentNode.insertBefore(c,d)}else a='<script type="text/javascript" src="'+a+'" onerror="safetagLoaderHandler(this,\'onerror\')"',
a+=" onload=\"safetagLoaderHandler(this,'onload')\"",a+=" onreadystatechange=\"safetagLoaderHandler(this,'onreadystatechange')\"",a+=">\x3c/script>",document.write(a)}}})(wt_safetagConfig,wts)};

/** End webtrekk_v4.js */