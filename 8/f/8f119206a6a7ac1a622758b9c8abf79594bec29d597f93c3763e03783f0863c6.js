(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[737],{WJ2C:function(e,t,n){"use strict";n.d(t,"a",();var r=n("QjXU"),a=n("MJsD"),i=n("B5kz"),o=n("W7wX"),c=n("/5so");function s(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,Object(a.a)()];case 1:return e=n.sent(),[4,Object(o.a)()];case 2:return t=n.sent(),[2,i.a.fetchQuery(["ConsumerInstallInfoConfig"],(,{staleTime:1/0,cacheTime:1/0})]}}))}))}},"fTj/":function(e,t,n){"use strict";n.r(t),n.d(t,"getInstalledApp",(function(){return r.a})),n.d(t,"getInstalledAppsEx",(function(){return a.a})),n.d(t,"getLocalMru",(function(){return w})),n.d(t,"launchOfficeApp",(function(){return g.a})),n.d(t,"launchUri",(),n.d(t,"getDeviceId",(function(){return j})),n.d(t,"isSurfaceDevice",(function(){return D}));var r=n("W1wp"),a=n("vhka"),i=n("QjXU"),o=n("6ib3"),c=n("cenr"),s=n("a3FV"),u=n("8/lW"),f=n("Dn7E"),d=n("CMIS"),l=n("gY3Z");ar p=n("rjBA"),v=n("tBub"),y=n("Ohvh"),S=n("5ANk"),h=n("CKW3"),b=0;function w(e){return Object(i.__awaiter)(this,void 0,void 0,(function(){var t,n,a,w,g;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return[4,Object(h.a)()];case 1:return t=i.sent(),n=e?Array.from(e).map(().join(","):"",a=[{method:"LocalProviders.GetMruLocalDocuments",data:{apps:n}}],w=performance.now(),[2,new Promise((function(e,n){t.sendCommands(a).then((function(t){if(g=Object(l.a)(w),0!==t.status)throw new Error("Error in response: "+t.status);var n=JSON.parse(t.message["LocalProviders.GetMruLocalDocuments"]).mru.filter(m),a=function(){e(function(e){return e.map((function(e){var t=e.location.split("\\"),n=t.length>1?t[t.length-2]:"",r=e.location.substring(0,e.location.lastIndexOf("\\")),a=new Date(e.lastAccessedDate),i=e.applicationName.charAt(0).toUpperCase()+e.applicationName.substring(1),o=e.name.replace(/\0/gi,"").trim(),c=Object(p.a)(o),s=Object(v.a)(o),u="LocalBridgeFile:".concat(Object(S.a)());return{app:i,attribution:n,attributionUrl:r,canonicalUrl:e.location,containerTitle:n,createdDate:a,docId:"",driveId:"",extension:s,fileName:o,fileType:Object(y.a)(e.applicationName),id:u,isLocalFile:!0,isPinned:!1,isRedeemed:!0,lastAccessedTime:a,lastActionTime:a,lastModifiedTime:a,pathArray:[n],title:c,url:e.location,webUrl:void 0}}))}(n));var t={State:"Success"};t.Index=b.toString(),t.Latency=g.toString(),Object(c.a)(s.a.LocalMruFetch,t,[],u.a.Enhanced),Object(f.a)({featureName:"LocalMRU",eventName:"Parsed_Local_Documents",params:{state:"Success",index:b,latency:g}}),b++},i=function(){return n=n.filter((function(e){return e.applicationName.toLowerCase()!==o.a.OneNote.toLowerCase()}))};return Object(r.a)(o.a.OneNote).then((,()})).catch((function(e){g=g||Object(l.a)(w);var t={State:"Failed"};t.Error="getLocalMru failed: "+e,t.Index=(b++).toString(),t.Latency=g.toString(),Object(c.a)(s.a.LocalMruFetch,t,[],u.a.Enhanced),Object(d.a)({eventName:"Local_MRU_Fetch_Failed",errorType:"AppService_Error",message:e}),n("Local MRU failed")}))}))]}}))}))}var g=n("1R5x"),O=n("0mcE");function j(){try{if("undefined"!=typeof Windows&&void 0!==Windows.System.Profile.SystemIdentification&&void 0!==Windows.Security.Cryptography.CryptographicBuffer){var e=Windows.System.Profile.SystemIdentification.getSystemIdForPublisher();return void 0!==e&&e.id?Windows.Security.Cryptography.CryptographicBuffer.encodeToHexString(e.id):""}return""}catch(e){var t="Error in getDeviceId: ".concat(e);return Object(d.a)({eventName:"GetDeviceId",message:t}),""}}var I=n("muUJ");function D(){var e;try{if("undefined"!=typeof Windows&&void 0!==Windows.System.Profile.SystemManufacturers.SystemSupportInfo&&void 0!==Windows.System.Profile.SystemManufacturers.SystemSupportInfo.localDeviceInfo){var t=Windows.System.Profile.SystemManufacturers.SystemSupportInfo.localDeviceInfo.systemManufacturer,n=Windows.System.Profile.SystemManufacturers.SystemSupportInfo.localDeviceInfo.systemProductName;if(t&&n)return t.toLowerCase().indexOf("microsoft")>=0&&n.toLowerCase().indexOf("surface")>=0}return!1}catch(t){var r="Error in isSurfaceDevice: ".concat(t);return Object(I.a)(s.a.SurfaceDeviceDetectionError,((e={}).Error=r,e)),Object(d.a)({eventName:"Surface_Device_Detection_Error",message:r}),!1}}},rjBA:function(e,t,n){"use strict";function r(e){if(!e)return e;var t=e.lastIndexOf(".");return-1===t?e:e.substring(0,t)}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=737.95ff99ea3b4bccbaf712.chunk.v7.js.map