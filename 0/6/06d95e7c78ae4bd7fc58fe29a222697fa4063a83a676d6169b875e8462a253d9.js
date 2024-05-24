window['amplitudeDeps'] = ["/integrations/vendor/commons.c42222c4cb2f8913500f.js"];window['amplitudeLoader'] = function() { return window.amplitudeIntegration=function(e){function t(t){for(var r,s,a=t[0],p=t[1],u=t[2],c=0,l=[];c<a.length;c++)s=a[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&l.push(o[s][0]),o[s]=0;for(r in p)Object.prototype.hasOwnProperty.call(p,r)&&(e[r]=p[r]);for(d&&d(t);l.length;)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var p=n[a];0!==o[p]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={9:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var a=window.webpackJsonp_name_Integration=window.webpackJsonp_name_Integration||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var d=p;return i.push(["wtW4",0]),n()}({wtW4:function(e,t,n){"use strict";var r=n("QN7Q"),o=n("hjHq"),i=n("1JUM"),s=n("patC"),a=n("qMUi"),p=n("6YGp"),u=n("NGGi").Track,d="function"==typeof window.define&&window.define.amd,c="https://cdn.amplitude.com/libs/amplitude-5.2.2-min.gz.js",l=e.exports=o("Amplitude").global("amplitude").option("apiKey","").option("trackAllPages",!1).option("trackNamedPages",!0).option("trackCategorizedPages",!0).option("trackUtmProperties",!0).option("trackReferrer",!1).option("batchEvents",!1).option("eventUploadThreshold",30).option("eventUploadPeriodMillis",3e4).option("useLogRevenueV2",!1).option("forceHttps",!1).option("trackGclid",!1).option("saveParamsReferrerOncePerSession",!0).option("deviceIdFromUrlParam",!1).option("mapQueryParams",{}).option("trackRevenuePerProduct",!1).option("preferAnonymousIdForDeviceId",!1).option("traitsToSetOnce",[]).option("traitsToIncrement",[]).option("appendFieldsToEventProps",{}).option("unsetParamsReferrerOnNewSession",!1).option("trackProductsOnce",!1).option("versionName","").option("useAmplitudeReferral",!1).tag('<script src="'+c+'">');function f(e,t){this.setDeviceIdFromAnonymousId(e);var n=e.properties(),r=e.options(this.name),o=e.event(),i=this.options.mapQueryParams,s=e.proxy("context.page.search");if(!a.empty(i)){var u,d={};p((function(e,t){"user_properties"===(u=e)?d[t]=s:n[t]=s}),i),"user_properties"===u&&window.amplitude.getInstance().setUserProperties(d)}p((function(t,r){n[t]=e.proxy(r)}),this.options.appendFieldsToEventProps),r.groups?window.amplitude.getInstance().logEventWithGroups(o,n,r.groups):window.amplitude.getInstance().logEvent(o,n),e.revenue()&&!t&&this.setRevenue(v(e))}function v(e){return{price:e.price(),productId:e.productId(),revenueType:e.proxy("properties.revenueType")||{"order completed":"Purchase","completed order":"Purchase","product purchased":"Purchase"}[e.event().toLowerCase()],quantity:e.quantity(),eventProps:e.properties(),revenue:e.revenue()}}l.prototype.initialize=function(){!function(e,t){var n=e.amplitude||{_q:[],_iq:{}};function r(e,t){e.prototype[t]=function(){return this._q.push([t].concat(Array.prototype.slice.call(arguments,0))),this}}for(var o=function(){return this._q=[],this},i=["add","append","clearAll","prepend","set","setOnce","unset"],s=0;s<i.length;s++)r(o,i[s]);n.Identify=o;for(var a=function(){return this._q=[],this},p=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"],u=0;u<p.length;u++)r(a,p[u]);n.Revenue=a;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"];function c(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}for(var n=0;n<d.length;n++)t(d[n])}c(n),n.getInstance=function(e){return e=(e&&0!==e.length?e:"$default_instance").toLowerCase(),n._iq.hasOwnProperty(e)||(n._iq[e]={_q:[]},c(n._iq[e])),n._iq[e]},e.amplitude=n}(window,document),this.setDomain(window.location.href),window.amplitude.getInstance().init(this.options.apiKey,null,{includeUtm:this.options.trackUtmProperties,batchEvents:this.options.batchEvents,eventUploadThreshold:this.options.eventUploadThreshold,eventUploadPeriodMillis:this.options.eventUploadPeriodMillis,forceHttps:this.options.forceHttps,includeGclid:this.options.trackGclid,saveParamsReferrerOncePerSession:this.options.saveParamsReferrerOncePerSession,includeReferrer:this.options.useAmplitudeReferral,deviceIdFromUrlParam:this.options.deviceIdFromUrlParam,unsetParamsReferrerOnNewSession:this.options.unsetParamsReferrerOnNewSession,deviceId:this.options.preferAnonymousIdForDeviceId&&this.analytics&&this.analytics.user()&&this.analytics.user().anonymousId()});var e=this.options.versionName;e&&window.amplitude.getInstance().setVersionName(e);var t=r(this,this.loaded),n=this.ready;d?window.require([c],(function(e){window.amplitude=e,s(t,(function(){window.amplitude.runQueuedFunctions(),n()}))})):this.load((function(){window.amplitude.runQueuedFunctions&&(window.amplitude.runQueuedFunctions(),n())}))},l.prototype.loaded=function(){return!(!window.amplitude||!window.amplitude.getInstance().options)},l.prototype.page=function(e){this.setDeviceIdFromAnonymousId(e),this.options.trackReferrer&&!this.options.useAmplitudeReferral&&this.sendReferrer();var t=e.category(),n=e.fullName(),r=this.options;r.trackAllPages&&this.track(e.track()),t&&r.trackCategorizedPages&&this.track(e.track(t)),n&&r.trackNamedPages&&this.track(e.track(n))},l.prototype.identify=function(e){this.setDeviceIdFromAnonymousId(e);var t=e.userId(),n=e.traits();t&&window.amplitude.getInstance().setUserId(t);var r=this.options.mapQueryParams,o=e.proxy("context.page.search");a.empty(r)||p((function(e,t){n[t]=o}),r),this.setTraits(n);var i=e.options(this.name).groups;if(i&&a.object(i))for(var s in i)i.hasOwnProperty(s)&&window.amplitude.getInstance().setGroup(s,i[s])},l.prototype.setTraits=function(e){var t=this.options.traitsToIncrement||[],n=this.options.traitsToSetOnce||[],r=new window.amplitude.Identify;for(var o in e)if(e.hasOwnProperty(o)){var i=t.indexOf(o)>=0,s=n.indexOf(o)>=0;i&&r.add(o,e[o]),s&&r.setOnce(o,e[o]),i||s||r.set(o,e[o])}window.amplitude.identify(r)},l.prototype.track=f,l.prototype.orderCompleted=function(e){this.setDeviceIdFromAnonymousId(e);var t,n=e.products(),r=e.json(),o=this.options.trackRevenuePerProduct,i=e.proxy("properties.revenueType"),s=e.revenue();if(this.options.trackProductsOnce){for(var a=[],d=Object.keys(n),c=0;c<d.length;c++){var l=new u({properties:n[c]});a.push({productId:(t=l).productId(),sku:t.sku(),name:t.name(),price:t.price(),quantity:t.quantity(),category:t.category()})}return r.properties.products=a,void f.call(this,new u(r),o)}delete r.properties.products,f.call(this,new u(r),o),p(function(e){var t=e.price,n=e.quantity;r.properties=e,r.event="Product Purchased",o&&null!=t&&n&&(i&&(r.properties.revenueType=i),s&&(r.properties.revenue=s),this.setRevenue(v(new u(r)))),f.call(this,new u(r),o)}.bind(this),n)},l.prototype.group=function(e){this.setDeviceIdFromAnonymousId(e);var t=e.traits()[this.options.groupTypeTrait],n=e.traits()[this.options.groupValueTrait];if(t&&n)window.amplitude.getInstance().setGroup(t,n);else{var r=e.groupId();r&&window.amplitude.getInstance().setGroup("[Segment] Group",r)}},l.prototype.setDomain=function(e){var t=i(e);window.amplitude.setDomain(t)},l.prototype.setDeviceIdFromAnonymousId=function(e){this.options.preferAnonymousIdForDeviceId&&this.setDeviceId(e.anonymousId())},l.prototype.setDeviceId=function(e){e&&window.amplitude.getInstance().setDeviceId(e)},l.prototype.setRevenue=function(e){var t=e.price,n=e.productId,r=e.revenueType,o=e.quantity,i=e.eventProps,s=e.revenue;if(this.options.useLogRevenueV2){t||(t=s,o=1);var a=(new window.amplitude.Revenue).setPrice(t).setQuantity(o).setEventProperties(i);r&&a.setRevenueType(r),n&&a.setProductId(n),window.amplitude.getInstance().logRevenueV2(a)}else window.amplitude.getInstance().logRevenue(s||t*o,o,n)},l.prototype.sendReferrer=function(){var e=new window.amplitude.Identify,t=this.getReferrer();if(t&&0!==t.length){e.setOnce("initial_referrer",t),e.set("referrer",t);var n=t.split("/");if(n.length>=3){var r=n[2];e.setOnce("initial_referring_domain",r),e.set("referring_domain",r)}window.amplitude.getInstance().identify(e)}},l.prototype.getReferrer=function(){return document.referrer}}});
//# sourceMappingURL=amplitude.js.map
};?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/eb4c83/000000000000000077359574/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/eb4c83/000000000000000077359574/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:600;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/d45b9a/000000000000000077359577/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/d45b9a/000000000000000077359577/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/d45b9a/000000000000000077359577/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/6cc429/00000000000000007735957a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/6cc429/00000000000000007735957a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/6cc429/00000000000000007735957a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/56b0cd/00000000000000007735957d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/56b0cd/00000000000000007735957d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/56b0cd/00000000000000007735957d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:300;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/fcae55/000000000000000077359580/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/fcae55/000000000000000077359580/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/fcae55/000000000000000077359580/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:300;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/0758f3/000000000000000077359583/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/0758f3/000000000000000077359583/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/0758f3/000000000000000077359583/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:500;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova";
src:url("https://use.typekit.net/af/69ecb3/000000000000000077359585/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/69ecb3/000000000000000077359585/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/69ecb3/000000000000000077359585/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:500;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/23bc2c/00000000000000007735954c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/23bc2c/00000000000000007735954c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/23bc2c/00000000000000007735954c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:900;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/2dbea6/000000000000000077359551/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff2"),url("https://use.typekit.net/af/2dbea6/000000000000000077359551/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff"),url("https://use.typekit.net/af/2dbea6/000000000000000077359551/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:900;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/1aa497/000000000000000077359555/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/1aa497/000000000000000077359555/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/1aa497/000000000000000077359555/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/c42914/00000000000000007735955c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/c42914/00000000000000007735955c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/c42914/00000000000000007735955c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/754704/000000000000000077359560/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/754704/000000000000000077359560/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/754704/000000000000000077359560/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:300;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/46fbe4/000000000000000077359566/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/46fbe4/000000000000000077359566/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/46fbe4/000000000000000077359566/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:300;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/ee884b/00000000000000007735956b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/ee884b/00000000000000007735956b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/ee884b/00000000000000007735956b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/d36e0e/00000000000000007735956e/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/d36e0e/00000000000000007735956e/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/d36e0e/00000000000000007735956e/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/cf0a93/000000000000000077359570/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/cf0a93/000000000000000077359570/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/cf0a93/000000000000000077359570/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:600;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/6e151c/000000000000000077359573/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/6e151c/000000000000000077359573/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/6e151c/000000000000000077359573/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:600;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/d130c6/000000000000000077359576/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff2"),url("https://use.typekit.net/af/d130c6/000000000000000077359576/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff"),url("https://use.typekit.net/af/d130c6/000000000000000077359576/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:200;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/4571d0/000000000000000077359579/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff2"),url("https://use.typekit.net/af/4571d0/000000000000000077359579/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff"),url("https://use.typekit.net/af/4571d0/000000000000000077359579/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:200;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/bf6045/00000000000000007735957b/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3") format("woff2"),url("https://use.typekit.net/af/bf6045/00000000000000007735957b/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3") format("woff"),url("https://use.typekit.net/af/bf6045/00000000000000007735957b/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:800;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/d7a2a5/00000000000000007735957e/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("woff2"),url("https://use.typekit.net/af/d7a2a5/00000000000000007735957e/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("woff"),url("https://use.typekit.net/af/d7a2a5/00000000000000007735957e/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:800;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/443bcc/000000000000000077359582/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/443bcc/000000000000000077359582/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/443bcc/000000000000000077359582/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:500;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-condensed";
src:url("https://use.typekit.net/af/d490b1/000000000000000077359584/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/d490b1/000000000000000077359584/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/d490b1/000000000000000077359584/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:500;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/b7ac56/00000000000000007735954d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/b7ac56/00000000000000007735954d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/b7ac56/00000000000000007735954d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:900;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/88de78/00000000000000007735954f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/88de78/00000000000000007735954f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/88de78/00000000000000007735954f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/8f0f9d/000000000000000077359556/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/8f0f9d/000000000000000077359556/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/8f0f9d/000000000000000077359556/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/fabe0e/00000000000000007735955a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/fabe0e/00000000000000007735955a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/fabe0e/00000000000000007735955a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i3&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:300;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/cbc835/00000000000000007735955f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/cbc835/00000000000000007735955f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/cbc835/00000000000000007735955f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:300;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/e310eb/000000000000000077359563/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff2"),url("https://use.typekit.net/af/e310eb/000000000000000077359563/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("woff"),url("https://use.typekit.net/af/e310eb/000000000000000077359563/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i9&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:900;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/d2b9f4/000000000000000077359567/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/d2b9f4/000000000000000077359567/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/d2b9f4/000000000000000077359567/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/b7df9a/00000000000000007735956a/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/b7df9a/00000000000000007735956a/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/b7df9a/00000000000000007735956a/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/b2b88d/00000000000000007735956d/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/b2b88d/00000000000000007735956d/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/b2b88d/00000000000000007735956d/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i6&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:600;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/b2dced/00000000000000007735956f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/b2dced/00000000000000007735956f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/b2dced/00000000000000007735956f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n6&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:600;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/7973aa/000000000000000077359572/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff2"),url("https://use.typekit.net/af/7973aa/000000000000000077359572/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("woff"),url("https://use.typekit.net/af/7973aa/000000000000000077359572/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n2&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:200;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/f5568e/000000000000000077359575/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff2"),url("https://use.typekit.net/af/f5568e/000000000000000077359575/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("woff"),url("https://use.typekit.net/af/f5568e/000000000000000077359575/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i2&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:200;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/b54a69/000000000000000077359578/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3") format("woff2"),url("https://use.typekit.net/af/b54a69/000000000000000077359578/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3") format("woff"),url("https://use.typekit.net/af/b54a69/000000000000000077359578/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n8&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:800;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/8a31d8/00000000000000007735957c/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("woff2"),url("https://use.typekit.net/af/8a31d8/00000000000000007735957c/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("woff"),url("https://use.typekit.net/af/8a31d8/00000000000000007735957c/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i8&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:800;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/171617/00000000000000007735957f/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff2"),url("https://use.typekit.net/af/171617/00000000000000007735957f/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("woff"),url("https://use.typekit.net/af/171617/00000000000000007735957f/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n5&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:500;font-stretch:normal;
}

@font-face {
font-family:"proxima-nova-extra-condensed";
src:url("https://use.typekit.net/af/aaf791/000000000000000077359581/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff2"),url("https://use.typekit.net/af/aaf791/000000000000000077359581/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("woff"),url("https://use.typekit.net/af/aaf791/000000000000000077359581/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i5&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:500;font-stretch:normal;
}

.tk-proxima-nova { font-family: "proxima-nova",sans-serif; }
.tk-proxima-nova-condensed { font-family: "proxima-nova-condensed",sans-serif; }
.tk-proxima-nova-extra-condensed { font-family: "proxima-nova-extra-condensed",sans-serif; }