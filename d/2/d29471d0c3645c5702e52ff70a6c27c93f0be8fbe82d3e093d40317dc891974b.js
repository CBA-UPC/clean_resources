(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[112],{"28zg":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("QjXU"),i=n("MJsD"),o=n("B5kz"),a=n("gCKw"),c=n("mJgL"),u=n("W7wX"),s=n("s1V1"),d=n("ohjr"),l=n("8VPm");function f(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,o.a.fetchQuery([e.key],(function(){var t={featureGatesPromise:Object(a.a)(),featureSettingsPromise:Object(c.a)(),userEntitlementsPromise:Object(s.a)(),contextPromise:Object(i.a)(),identityPromise:Object(u.a)()};return Object(d.a)(t,e)}),l.a)];case 1:return[2,t.sent()]}}))}))}},"8VPm":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={staleTime:1/0,cacheTime:1/0}},DFYB:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("QjXU"),i=n("mgFK"),o=n("QLkI"),a=n("aADZ"),c=n("S0Or"),u=n("Rh0W"),s={key:"EdgeworthConfig",isGetClientGeneratedConfigEnabled:function(e){var t;return!!(null===(t=e.edgeworthConfigGates)||void 0===t?void 0:t.edgeworthConfigEnabled)},getClientGeneratedConfig:function(e){var t,n,r,i,o,s,d,l,f,v,g,h,b,p,m=e.featureGates,C=e.featureSettings,y=e.identity,S=m.edgeworthConfigGates,j=null!==(t=null==S?void 0:S.edgeworthConfigBackgroundSyncEnabled)&&void 0!==t&&t,w=null!==(n=null==S?void 0:S.edgeworthConfigS2SRecentEnabled)&&void 0!==n&&n,O=null!==(r=null==S?void 0:S.edgeworthConfigTaggingEnabled)&&void 0!==r&&r,E=null!==(i=null==S?void 0:S.edgeworthConfigTopicsEnabled)&&void 0!==i&&i,_=null!==(o=null==S?void 0:S.edgeworthConfigPlayListsEnabled)&&void 0!==o&&o,G=null!==(s=null==S?void 0:S.edgeworthConfigUserActionSortOrderEnabled)&&void 0!==s&&s,I=null!==(l=null===(d=m.edgeworthMeetingObjectsGates)||void 0===d?void 0:d.edgeworthMeetingObjectsEnabled)&&void 0!==l&&l,A=null!==(v=null===(f=m.quickAccessV1Gates)||void 0===f?void 0:f.quickAccessV1Enabled)&&void 0!==v&&v,P=Object(a.a)(null!==(h=null===(g=C.authModel)||void 0===g?void 0:g.recommendedIceApplicationId)&&void 0!==h?h:"-1"),k=null!==(p=null===(b=C.resources)||void 0===b?void 0:b.substrate)&&void 0!==p?p:"";return{deleteSettingApiPath:"/deletesetting",deltaSyncApiPath:"/deltasync",edgeworthApiRootPath:"/recommended/api/beta/edgeworth",favoritesApiPath:"/favorites",favoritesItemsCount:1e3,hideApiPath:"/hide",periodicSyncIntervalInMin:10,pinApiPath:"/pin",recentApiPath:"/recent",recentItemsCount:15,reindexThresholdInDays:15,tabFocusSyncThrottleWindowCount:5,tabFocusSyncThrottleWindowInSeconds:60,unhideApiPath:"/unhide",unpinApiPath:"/unpin",upsertSettingApiPath:"/upsertsetting",backgroundSyncEnabled:j,edgeworthS2SRecentEnabled:w,taggingEnabled:O,edgeworthTopicsEnabled:E,meetingObjectsEnabled:I,playListsEnabled:_,settingApiEnabled:!Object(u.a)()&&A,userActionSortOrderEnabled:G,EdgeworthMSITFeatureEnabled:Object(c.a)(C,y),iceApplicationId:P,substrateApiEndpoint:k}},getServerGeneratedConfig:function(e){return function(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){var t,n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,Object(o.a)()];case 1:return t=r.sent(),[4,Object(i.a)("edgeworthConfig",e)];case 2:if(!(n=r.sent())||!t)throw new Error("Cannot parse EdgeworthConfig");return n.iceApplicationId=t.recommendedIceApplicationId,[2,n]}}))}))}(e)}}},JGoI:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("mgFK"),i=n("aADZ"),o={key:"SharedContext",isGetClientGeneratedConfigEnabled:getClientGeneratedConfig:function(e){var t,n,r,o,a,c,u,s,d,l,f,v,g=e.featureSettings,h=e.userEntitlements,b=e.componentContext,p=null!==(n=null===(t=g.resources)||void 0===t?void 0:t.graph)&&void 0!==n?n:"",m=Object(i.a)(null!==(o=null===(r=g.sharedContext)||void 0===r?void 0:r.iceApplicationId)&&void 0!==o?o:"-1"),C=Object(i.a)(null!==(c=null===(a=g.authModel)||void 0===a?void 0:a.recommendedIceApplicationId)&&void 0!==c?c:"-1"),y=null!==(s=null===(u=g.sharedContext)||void 0===u?void 0:u.supportDocsUrl)&&void 0!==s?s:"",S=null!==(l=null===(d=g.sharedContext)||void 0===d?void 0:d.teamsUrl)&&void 0!==l?l:"";return{graphApiRoot:p,iceApplicationId:m,officeMarketLcid:b.officeMarketLcid,oneDriveResourceId:null!==(f=null==h?void 0:h.OneDriveResourceId)&&void 0!==f?f:"",recommendedIceApplicationId:C,sharePointResourceId:null!==(v=null==h?void 0:h.SharePointResourceId)&&void 0!==v?v:"",supportDocsUrl:y,teamsUrl:S}},getServerGeneratedConfig:function(e){return e)}}},QLkI:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),i=n("28zg"),o=n("JGoI");function a(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,Object(i.a)(o.a)]}))}))}},QgWk:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),i=n("28zg"),o=n("DFYB");function a(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,Object(i.a)(o.a)]}))}))}},Rh0W:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("Zmq1"),i=new Set(["iPad","AndroidPhone","AndroidTablet","iPhone","WindowsPhone"]);function o(){var e=Object(r.a)();return i.has(e.platform.platformType)}},S0Or:function(e,t,n){"use strict";function r(e,t){var n,r=null===(n=e.ring)||void 0===n?void 0:n.msftTenants,i=t.tenantId;return!(!r||!r.split(",").some(())}n.d(t,"a",(function(){return r}))},aADZ:function(e,t,n){"use strict";function r(e){if(void 0===e)return NaN;var t=parseInt(e);return Number.isNaN(t)?NaN:t}n.d(t,"a",(function(){return r}))},ohjr:function(e,t,n){"use strict";n.d(t,"a",();var r=n("QjXU"),i=n("iPRk"),o=n("CMIS"),a=n("Dn7E"),c=n("TfV2");function u(e,t,n,r){void 0===r&&(r=3);var i,u=s(e,t,r),d=u.detectedMismatches,l=u.error;return l?(i=l instanceof Error?l.message:l,"Error occurred while validating config equality:\n\n".concat(i)),!1):!(d.length>0&&(function(e){Object(a.a)({featureName:"ConfigQueryWrapper",eventName:"ValidateConfigEquality",params:e},c.a.Security,!1)}({QueryKey:n,Mismatches:d.join(",")}),1))}function s(e,t,n){var i,o,a,c,u=[],d=function(e){var t,n,r=e.key,i=e.mismatchType,o=e.val1,a=e.val2,c="string"==typeof o&&"SubLvl"!==i?"StrLen:".concat(o.length.toString()):null!==(t=null==o?void 0:o.toString())&&void 0!==t?t:"undefined",s="string"==typeof a&&"SubLvl"!==i?"StrLen:".concat(a.length.toString()):null!==(n=null==a?void 0:a.toString())&&void 0!==n?n:"undefined",d="".concat(r,":[").concat(i,"(").concat(c);void 0!==a&&(d+="|".concat(s)),u.push(d+=")]")};try{if(n<=0)return{detectedMismatches:u};try{for(var l=Object(r.__values)(Object.keys(t)),f=l.next();!f.done;f=l.next()){var v=f.value,g=t[v],h=e[v];if(void 0!==h)if("object"==typeof g&&null!==g)if(g instanceof Set){if(g.size!==h.size){d({key:v,mismatchType:"SetLen",val1:h.size,val2:g.size});continue}try{for(var b=(a=void 0,Object(r.__values)(g)),p=b.next();!p.done;p=b.next()){var m=p.value;h.has(m)||d({key:v,mismatchType:"SetMis",val1:m})}}catch(e){a={error:e}}finally{try{p&&!p.done&&(c=b.return)&&c.call(b)}finally{if(a)throw a.error}}}else{if(g instanceof Array&&g.length!==h.length){d({key:v,mismatchType:"ArrLen",val1:h.length,val2:g.length});continue}var C=s(h,g,n-1).detectedMismatches;C.length>0&&d({key:v,mismatchType:"SubLvl",val1:C.join(",")})}else g!==h&&d({key:v,mismatchType:"KeyMis",val1:h,val2:g})}}catch(e){i={error:e}}finally{try{f&&!f.done&&(o=l.return)&&o.call(l)}finally{if(i)throw i.error}}return{detectedMismatches:u}}catch(e){return{detectedMismatches:u,error:e}}}function d(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,o,s,d,g,h,b,p;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return g={ConfigKey:d=t.key,Completed:!1,Status:"Undefined"},[4,e.featureGatesPromise];case 1:return h=r.sent(),t=function(e,t){var n,r;return(null===(r=null===(n=e.result)||void 0===n?void 0:n.clientConfigStandaloneGates)||void 0===r?void 0:r.clientConfigStandaloneEnabled)&&v(t)&&(t={key:t.key,getClientGeneratedConfig:t.getClientGeneratedConfig}),t}(h,t))?[4,f(e,t)]:[3,3];case 2:p=r.sent(),n=p.data,g.Completed=p.success,r.label=3;case 3:return v(t)?(b=!0,t)&&(b=t.isGetClientGeneratedConfigEnabled(h.result)),b?[4,l(e,{key:d,getClientGeneratedConfig:t.getClientGeneratedConfig})]:[3,5]):[3,5];case 4:p=r.sent(),o=p.data,g.Completed=g.Completed||p.success,r.label=5;case 5:return g.Completed&&(void 0!==n&&void 0!==o?u(n,o,d)?(g.Status="Client",s=o):(g.Status="Mismatch",s=n):void 0!==o?(g.Status="Client",s=o):void 0!==n&&(g.Status="Server",s=n)),Object(i.a)("Fetch_".concat(d,"_").concat(g.Status)),function(e){Object(a.a)({featureName:"ConfigQueryWrapper",eventName:"FetchConfigInternalFinished",params:e},c.a.Security,!0)}(g),[2,s]}}))}))}function l(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,i,a,c,u,s,d,l,f,v;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:n=t.getClientGeneratedConfig,i=t.key,r.label=1;case 1:return r.trys.push([1,7,,8]),[4,e.featureGatesPromise];case 2:return a=r.sent(),[4,e.featureSettingsPromise];case 3:return c=r.sent(),[4,e.userEntitlementsPromise];case 4:return u=r.sent(),[4,e.contextPromise];case 5:return s=r.sent(),[4,e.identityPromise];case 6:return d=r.sent(),[2,{data:n({featureGates:a.result,featureSettings:c.result,userEntitlements:u.result,componentContext:s,identity:d}),success:!0}];case 7:return l=r.sent(),f="".concat(i,"_ClientGenerated_Error"),v="Fetching client generated ".concat(i,", but encountered an error: ").concat(l),Object(o.a)({eventName:f,errorType:"FetchConfigInternal_Error",message:v}),[3,8];case 8:return[2,{data:void 0,success:!1}]}}))}))}function f(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,i,a,c,u,s;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:n=t.getServerGeneratedConfig,i=t.key,r.label=1;case 1:return r.trys.push([1,4,,5]),[4,e.contextPromise];case 2:return a=r.sent(),[4,n(a)];case 3:return[2,{data:r.sent(),success:!0}];case 4:return c=r.sent(),u="".concat(i,"_ServerGenerated_Error"),s="Fetching server generated ".concat(i,", but encountered an error: ").concat(c),Object(o.a)({eventName:u,errorType:"FetchConfigInternal_Error",message:s}),[3,5];case 5:return[2,{data:void 0,success:!1}]}}))}))}}]);
//# sourceMappingURL=112.05b3813b6e3b4189bfab.chunk.v7.js.map