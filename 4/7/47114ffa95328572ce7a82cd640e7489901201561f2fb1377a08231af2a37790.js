(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[42],{"5DIn":"5PdT":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU");function o(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){return[2,window.crypto.subtle.importKey("jwk",e,"AES-GCM",!1,["encrypt","decrypt"])]}))}))}function a(e){var t;return Object(r.__awaiter)(this,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return(n=null===(t=e.encryptionConfig)||void 0===t?void 0:t.cryptoKey)?[4,o(n)]:[2,{key:null}];case 1:return[2,{key:r.sent()}]}}))}))}},"5eS3":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("GeVZ");function o(e,t){if(!e||!t)return e;var n=Object(r.a)(e);if(!n)return e;var o=n.hostname,a=n.port,i=n.path,u=n.search,c=n.hash;return"".concat(n.protocol,"//").concat(o).concat(a?":"+a:"").concat(i).concat(u?u+"&":"?").concat(t).concat(c)}},"6y6H":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("QjXU"),o=n("B5kz"),a=n("5PdT"),i=n("W7wX");function u(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e;return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(i.a)()];case 1:return e=t.sent(),[2,o.a.fetchQuery(["EncryptionKey",e.puid],(,{staleTime:1/0,cacheTime:1/0})]}}))}))}},AcOL:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("5DIn"),o={Tab:r.a.Tab,Enter:r.a.Enter,Shift:r.a.Shift,Esc:r.a.Escape,Escape:r.a.Escape,Space:r.a.Space," ":r.a.Space,Left:r.a.ArrowLeft,ArrowLeft:r.a.ArrowLeft,Up:r.a.ArrowUp,ArrowUp:r.a.ArrowUp,Right:r.a.ArrowRight,ArrowRight:r.a.ArrowRight,Down:r.a.ArrowDown,ArrowDown:r.a.ArrowDown,Zero:r.a.Zero,Nine:r.a.Nine,a:r.a.A,z:r.a.Z,A:r.a.A,Z:r.a.Z,ContextMenu:r.a.ContextMenu,"/":r.a.Slash,F10:r.a.F10,Home:r.a.Home,End:r.a.End,Delete:r.a.Delete,Backspace:r.a.Backspace};,"Eac/":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n("QjXU");function o(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,window.crypto.getRandomValues(new Uint8Array(12))]}))}))}function a(e){return[e.slice(0,12),e.slice(12,e.byteLength)]}},JGoI:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("mgFK"),o=n("aADZ"),a={key:"SharedContext",isGetClientGeneratedConfigEnabled:getClientGeneratedConfig:function(e){var t,n,r,a,i,u,c,l,s,d,f,v,b=e.featureSettings,g=e.userEntitlements,p=e.componentContext,O=null!==(n=null===(t=b.resources)||void 0===t?void 0:t.graph)&&void 0!==n?n:"",j=Object(o.a)(null!==(a=null===(r=b.sharedContext)||void 0===r?void 0:r.iceApplicationId)&&void 0!==a?a:"-1"),m=Object(o.a)(null!==(u=null===(i=b.authModel)||void 0===i?void 0:i.recommendedIceApplicationId)&&void 0!==u?u:"-1"),h=null!==(l=null===(c=b.sharedContext)||void 0===c?void 0:c.supportDocsUrl)&&void 0!==l?l:"",S=null!==(d=null===(s=b.sharedContext)||void 0===s?void 0:s.teamsUrl)&&void 0!==d?d:"";return{graphApiRoot:O,iceApplicationId:j,officeMarketLcid:p.officeMarketLcid,oneDriveResourceId:null!==(f=null==g?void 0:g.OneDriveResourceId)&&void 0!==f?f:"",recommendedIceApplicationId:m,sharePointResourceId:null!==(v=null==g?void 0:g.SharePointResourceId)&&void 0!==v?v:"",supportDocsUrl:h,teamsUrl:S}},getServerGeneratedConfig:function(e){return e)}}},KSsg:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("lOFt"),o=n("V9hE"),a=n("iPRk"),i=n("HQCr"),u=n("Dn7E"),c=n("CMIS"),l=n("GMuP"),s={AppBar:"AppBar",AppList:"AppGallery",AppsNotificationDialog:"AppsNotificationDialog",Edgeworth:"Edgeworth",Recommended:"Recommended",QuickAccess:"QuickAccess",MyContent:"MyContent",MyContentOdspView:"MyContent",MyContentPeopleView:"MyContent",MyContentPeopleViewDetailed:"MyContent",TuiCallout:"TeachingUi",GettingToKnowYou:"GettingToKnowYou"};function d(e){if(!e)return"Other";var t=s[e];return null!=t?t:"Other"}var f=n("KbiU"),v=n("rTyw"),b=function(e){var t,n=e.launchInstrumentationParams,s=e.success,b=e.platform,g=e.uiHost;if(n){var p=n.area,O=n.dataSecurityLevel,j=n.eventName,m=n.elementId,h=n.renderTimingInstrumentationParams,S=n.referral,w=n.isScdType,_=n.pageName,y=n.clickParams;if(!n.isLogged){if(n.isLogged=!0,y||(y={}),y.ClickDestination=g?"ContentPage":"ExternalPage",Object(r.a)(j,m,p,s?S:"",b,y,[],O),s)Object(i.a)(m,p,S,void 0,void 0,j,w,_),Object(u.a)({featureName:d(p),eventName:j,params:Object(f.a)(y),area:p});else{var T=S?Object(v.a)(S):"Other",U="Error: \nelementId: ".concat(m,"\n referral: ").concat(T,"}"),A=((t={}).DebugInfo=U,t);Object(c.a)({eventName:j,debugInfo:U}),Object(l.a)({eventName:j,params:A,area:p}),Object(o.a)(j,A,[],O)}if(h){var C=h.clickMarker,k=h.paintMarker;Object(a.a)(C,k)}}}}},KbiU:function(e,t,n){"use strict";function r(e){var t,n={};if(!e)return n;for(var r in e){var o=e[r],a="";if("object"==typeof o){if("value"in o&&(a=o.value),"defaultValue"in o){var i=o.defaultValue;a="object"==typeof i?i.value:i}}else a=null!==(t=o)&&void 0!==t?t:"";n[r]=a}return n}n.d(t,"a",(function(){return r}))},NkqM:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),o=["^.*[\0- ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:.*","^.*[\0- ]*d[\r\n\t]*a[\r\n\t]*t[\r\n\t]*a[\r\n\t]*:.*"];function a(e){var t,n;if(e)try{for(var a=Object(r.__values)(o),i=a.next();!i.done;i=a.next()){var u=new RegExp(i.value);if(e.match(u))return e.replace(u,"")}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return e}},OoM2:P1B7:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n("QjXU");function o(e,t,n,o,a){return Object(r.__awaiter)(this,void 0,void 0,(function(){var i,u,c,l;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:i=e(),u=t(),c=null,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,u];case 2:return c=r.sent(),[3,4];case 3:return r.sent(),[3,4];case 4:return l=i.then((function(e){var t=a(e);return c&&o({result:t,fromPersistence:!1}),n(e),{result:t,fromPersistence:!1}})),c?[2,{result:a(c),fromPersistence:!0}]:[2,l]}}))}))}function a(e,t,n,a){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(r){return[2,o(e,t,n,a,()]}))}))}},VOWq:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("QjXU"),o=n("Eac/");function a(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n;return Object(r.__generator)(this,(function(a){switch(a.label){case 0:return n=Object(r.__read)(Object(o.b)(e),2),[4,window.crypto.subtle.decrypt({name:"AES-GCM",iv:n[0],tagLength:128},t,n[1])];case 1:return[2,a.sent()]}}))}))}},fNDz:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("z+rT");function o(e,t,n,o){void 0===n&&(n=!1);var a="".concat(e,"/").concat(n?"beta":"v1.0","/").concat(t);return o&&(a=Object(r.a)(a,o)),a}},"faS/":function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var r=n("NrNW"),o=n("CU8J"),a=n("ynVX"),i=n("B5kz"),u=n("CaQ9"),c=n("QjXU"),l=n("j7b/"),s=n("6y6H"),d=n("P1B7"),f=n("wRjz"),v=n("lwUs"),b=n("m32Q"),g=n("lkvL"),p=n("Ot9e"),O=n("8wW2"),j=n("a3FV"),m=n("Wa5Y"),h=n("fNDz"),S="graph-unified-storage-api",w=n("gd1C"),_=n("h8qh"),y=n("wVmX"),T=n("laSs"),U=n("lUkk"),A=n("5eS3"),C=n("pKjf"),k=n("mXGw"),M=n("i1Ej"),E=/\.?0+$/;function W(e,t,n){if(void 0===n&&(n={}),"number"!=typeof t||isNaN(t)||n.ignoreZero&&0===t||t<0)return"";var r=n.trimDecimal||!1;return 1===t?e.get("fileSizeBytesSingular")||"":t<1024?D(e.get("fileSizeBytesPlural")||"",t,r):t<1024e3?D(e.get("fileSizeKB")||"",t/1024,r):t<1048576e3?D(e.get("fileSizeMB")||"",t/1048576,r):t<0xfa00000000?D(e.get("fileSizeGB")||"",t/1073741824,r):D(e.get("fileSizeTB")||"",t/1099511627776,r)}function D(e,t,n){return e.replace("{0}",function(e,t){if(e>=100||e===Math.floor(e))return e.toFixed(0);var n=e.toFixed(1);return t?n.replace(E,""):n}(t,n))}var Q=n("bcUD"),B=n("faO/"),N=n("u9fO"),P=n("/Oio"),F=function(e){var t=e.disableSubscriptionCheck,n=void 0!==t&&t,o=function(e,t){var n=function(e){var t=Object(r.a)().data,n={web:"cmmrvb0fezi",desktop:"cmm97cde5ll"};switch(e){case"MyContent":n.web="cmmcg3fk2g0",n.desktop="cmmapwu43rs"}return(null==t?void 0:t.workload)===P.a.Hwa?n.desktop:n.web}(t);return Object(k.useMemo)((,[e,n])}(e.baseUrl,e.area),a=Object(Q.a)({disableSubscriptionCheck:n,experiences:[B.a.WelcomeBadge]}),i=Object(k.useCallback)((,[a,o]);return Object(k.useMemo)((,[a,i])};function R(e){var t,n,E=e.area,D=e.showEnforcement,Q=e.logFullQuota,B=void 0!==Q&&Q,N=Object(u.a)().data,P=Object(r.a)().data,R=Object(_.a)().data,I=Object(o.a)().data,G=null==R?void 0:R.welcomeBadgeResources,x=null==R?void 0:R.edgeworthResources,L=Object(k.useMemo)((function(){var e,t;return(null===(t=null===(e=null==I?void 0:I.result)||void 0===e?void 0:e.useUSQGates)||void 0===t?void 0:t.useUSQEnabled)||!1}),[I]),q=Object(k.useMemo)((function(){var e,t;return(null===(t=null===(e=null==I?void 0:I.result)||void 0===e?void 0:e.welcomeBadgeV2Gates)||void 0===t?void 0:t.welcomeBadgeV2Enabled)||!1}),[I]),z=F({baseUrl:M.c,area:E}),V=F({area:E,baseUrl:M.c,disableSubscriptionCheck:!0}),K=Object(k.useMemo)((function(){var e,t;return(null===(t=null===(e=null==I?void 0:I.result)||void 0===e?void 0:e.wbShowStoragePercentageGates)||void 0===t?void 0:t.wbShowStoragePercentageEnabled)||!1}),[I]),X=Object(k.useMemo)((function(){var e,t;return(null===(t=null===(e=null==I?void 0:I.result)||void 0===e?void 0:e.myContentUsqGates)||void 0===t?void 0:t.myContentUsqEnabled)||!1}),[I]),H=null===(n=null===(t=function(e){var t=Object(r.a)().data,n=Object(u.a)().data,o=Object(a.a)().data,w=[e?"GraphUnifiedStorageQuota":"OneDriveGraphStorageQuota"];return Object(i.c)(w,(function(){return e&&t&&n&&o&&(null==n?void 0:n.isMsa)?function(e,t,n,r){return Object(c.__awaiter)(this,void 0,void 0,(function(){var o,a,i,u,w,_,y,T,U,A,C,k=this;return Object(c.__generator)(this,(function(M){switch(M.label){case 0:return o=e.officeHomeApiRoot,a=e.jwtAuthEnabled,i=e.correlationId,u=e.getAccessToken,w=e.inMockMode,[4,Object(s.a)()];case 1:return _=M.sent(),y=[],T=Object(p.a)(location.search),U="1"===T.mockauth,(null==_?void 0:_.key)&&y.push(Object(f.a)(_.key)),y.push(Object(v.a)(w||U?-1:4*l.b)),C="".concat((A={officeApiRoot:o,jwtAuthEnabled:a,correlationId:i,getAccessToken:u,graphApiRoot:n.graphApiRoot,userId:w?t.puid:t.userPrincipalName,inMockMode:w}).userId),[2,Object(d.a)((function(){return function(e){var t=e.correlationId,n=e.jwtAuthEnabled,r=e.getAccessToken,o=e.graphApiRoot,a=e.officeApiRoot,i=e.inMockMode;return Object(c.__awaiter)(this,void 0,void 0,(function(){var e,u,l,s,d;return Object(c.__generator)(this,(function(c){return e={method:"GET"},u=Object(p.a)(location.search),l="1"===u.mockauth,s=i?"".concat(a,"/api"):o,d=Object(h.a)(s,"users/me/settings/storage/quota",!0),l?[2,Promise.resolve({total:+u.total,used:+u.used})]:[2,Object(m.a)(j.a.UnifiedStorageRequest,"Unified_Storage_Request",d,e,n,r,a,t,"Graph").then((function(e){if(!e||!e.ok||void 0===e.data)throw new Error((null==e?void 0:e.statusText)||"Graph API error");return e.data})).catch((function(e){Object(O.a)().handleError(e,"WBFtm")}))]}))}))}(A)}),(function(){var e=Object(c.__spreadArray)([],Object(c.__read)(y),!1).reverse();return Object(b.a)({userId:t.puid,collectionName:S,collectionVersion:1,key:C,plugins:e})}),(function(e){return Object(c.__awaiter)(k,void 0,void 0,(function(){return Object(c.__generator)(this,(function(n){switch(n.label){case 0:return[4,Object(g.a)({userId:t.puid,collectionName:S,collectionVersion:1,key:C,data:e,plugins:y,writeBehavior:"sync"})];case 1:return n.sent(),[2]}}))}))}),r)]}}))}))}(t,n,o,():void 0}),{staleTime:1/0,cacheTime:1/0,enabled:t&&n&&o})}(L))||void 0===t?void 0:t.data)||void 0===n?void 0:n.result,Z=Object(k.useMemo)((function(){return(null==H?void 0:H.used)||0}),[null==H?void 0:H.used]),J=Object(k.useMemo)((function(){return(null==H?void 0:H.total)||0}),[null==H?void 0:H.total]),Y=function(e,t){var n,r,o,a={state:e?e.toLowerCase():"empty",toolTip:null!==(n=null==t?void 0:t.manageStorage)&&void 0!==n?n:""};switch(e.toLowerCase()){case"empty":case"normal":return a;case"nearing":case"critical":return Object(c.__assign)(Object(c.__assign)({},a),{toolTip:null!==(r=null==t?void 0:t.criticalStateTooltip)&&void 0!==r?r:""});case"full":case"over":case"overLimit":return Object(c.__assign)(Object(c.__assign)({},a),{toolTip:null!==(o=null==t?void 0:t.fullStateTooltip)&&void 0!==o?o:""})}return a}(Object(k.useMemo)((,[null==H?void 0:H.state]),x),$=Object(k.useMemo)((function(){return H&&H.used<=0}),[H]),ee=Object(y.a)(),te=Object(k.useMemo)((function(){return!!z&&!ee&&Z>=J*M.d&&!(null==N?void 0:N.isPipl)}),[null==N?void 0:N.isPipl,ee,z,J,Z]),ne="MyContent"===E,re=Object(k.useMemo)((function(){return ne?X:"WelcomeBadge"===E&&q&&!!G}),[E,ne,X,G,q]),oe=Object(k.useMemo)((function(){return!!(P&&H&&J>0&&re)}),[re,P,H,J]),ae=Object(k.useMemo)((function(){var e=M.c;return P&&(e=P.loginHint?Object(A.a)(M.c,"".concat(M.b,"=").concat(P.loginHint)):M.c),e}),[P]),ie=Object(k.useMemo)((function(){return new Map([["fileSizeBytesSingular",null==G?void 0:G.storageSingularByte],["fileSizeBytesPlural",null==G?void 0:G.storageBytes],["fileSizeKB",null==G?void 0:G.storageKB],["fileSizeMB",null==G?void 0:G.storageMB],["fileSizeGB",null==G?void 0:G.storageGB],["fileSizeTB",null==G?void 0:G.storageTB]])}),[null==G?void 0:G.storageBytes,null==G?void 0:G.storageGB,null==G?void 0:G.storageKB,null==G?void 0:G.storageMB,null==G?void 0:G.storageSingularByte,null==G?void 0:G.storageTB]),ue=Object(k.useMemo)((function(){return $?null==G?void 0:G.firstTimeAvailableStorage:W(ie,+Z,{trimDecimal:!0})}),[$,ie,Z,null==G?void 0:G.firstTimeAvailableStorage]),ce=Object(k.useMemo)((function(){return W(ie,+J,{trimDecimal:!0})}),[ie,J]),le=Object(k.useMemo)((function(){return function(e,t){var n=e/t*100;return n>0&&n<1?Number(n.toFixed(2)):Math.floor(n)}(Z,J)}),[J,Z]);Object(k.useEffect)((function(){oe&&Object(T.a)({eventName:"WelcomeBadgeV2_Impression",area:E,subArea:"StorageQuota",distribution:te?"StorageQuotaDimeExperience":"StorageQuotaDefaultExperience"})}),[E,oe,te]);var se=Object(k.useCallback)((function(){Object(U.a)({id:"StorageQuota_Dime",area:E,subArea:"StorageQuota",result:"Navigate",target:"Other",eventName:"StorageQuota_Dime"})}),[E]),de=Object(k.useCallback)((function(){te&&!ne?(se(),z&&z()):(Object(U.a)({id:"StorageQuota_OneDrive",area:E,subArea:"StorageQuota",result:"Navigate",target:"Other",eventName:"StorageQuota_OneDrive"}),Object(w.a)(ae,{action:"OpenFileLocation",linkTarget:"_blank"}))}),[E,te,ne,se,ae,z]),fe=Object(k.useMemo)((function(){return $?C.a.None:Z>J?C.a.Over:Z===J?C.a.Full:!L&&Z>J*M.d?C.a.Warning:L&&Z>=J*M.d&&Z<J*M.e?C.a.WarningUSQ:L&&Z>=J*M.e?C.a.CriticalUSQ:C.a.Default}),[$,J,L,Z]),ve=fe===C.a.Full||fe===C.a.Over;Object(k.useEffect)((function(){oe&&B&&ve&&Object(T.a)({eventName:"User_Storage_Full_Or_Over_Impression",area:E})}),[E,ve,oe,B]);var be=Object(k.useMemo)((,[$,null==G?void 0:G.firstTimeStorageMessage,null==G?void 0:G.storageMessage]),ge=Object(k.useCallback)((function(e){return e===C.a.Over?null==G?void 0:G.paidUserStorageOverTooltip:e===C.a.Full?null==G?void 0:G.storageFullWarningTooltip:e===C.a.Warning?null==G?void 0:G.paidUserStorageWarningTooltip:null==G?void 0:G.defaultStorageTooltip}),[null==G?void 0:G.defaultStorageTooltip,null==G?void 0:G.paidUserStorageOverTooltip,null==G?void 0:G.paidUserStorageWarningTooltip,null==G?void 0:G.storageFullWarningTooltip]),pe=Object(k.useCallback)((function(e){return e===C.a.Over?null==G?void 0:G.usqUserStorageOverTooltip:e===C.a.Full?null==G?void 0:G.usqUserStorageFullTooltip:e===C.a.WarningUSQ?null==G?void 0:G.usqUserStorageWarningTooltip:e===C.a.CriticalUSQ?null==G?void 0:G.usqUserStorageCriticalTooltip:null==G?void 0:G.defaultStorageTooltip}),[null==G?void 0:G.defaultStorageTooltip,null==G?void 0:G.usqUserStorageCriticalTooltip,null==G?void 0:G.usqUserStorageFullTooltip,null==G?void 0:G.usqUserStorageOverTooltip,null==G?void 0:G.usqUserStorageWarningTooltip]),Oe=Object(k.useCallback)((function(e){return te&&C.a.Over?null==G?void 0:G.freeUserStorageOverTooltipWithDime:te&&C.a.Full?null==G?void 0:G.storageFullWarningTooltipWithDime:e===C.a.Over?null==G?void 0:G.freeUserStorageOverTooltip:e===C.a.Full?null==G?void 0:G.storageFullWarningTooltip:e===C.a.Warning?null==G?void 0:G.freeUserStorageWarningTooltip:null==G?void 0:G.defaultStorageTooltip}),[te,null==G?void 0:G.defaultStorageTooltip,null==G?void 0:G.freeUserStorageOverTooltip,null==G?void 0:G.freeUserStorageOverTooltipWithDime,null==G?void 0:G.freeUserStorageWarningTooltip,null==G?void 0:G.storageFullWarningTooltip,null==G?void 0:G.storageFullWarningTooltipWithDime]),je=Object(k.useCallback)((function(e){return e===C.a.Over?null==G?void 0:G.usqUserStorageOverTooltip:e===C.a.Full?null==G?void 0:G.usqUserStorageFullTooltip:e===C.a.WarningUSQ?null==G?void 0:G.usqUserStorageWarningTooltip:e===C.a.CriticalUSQ?null==G?void 0:G.usqUserStorageCriticalTooltip:null==G?void 0:G.defaultStorageTooltip}),[null==G?void 0:G.defaultStorageTooltip,null==G?void 0:G.usqUserStorageCriticalTooltip,null==G?void 0:G.usqUserStorageFullTooltip,null==G?void 0:G.usqUserStorageOverTooltip,null==G?void 0:G.usqUserStorageWarningTooltip]),me=Object(k.useMemo)((function(){return ee?L?pe(fe):ge(fe):L?je(fe):Oe(fe)}),[Oe,ge,je,pe,ee,fe,L]),he=Object(k.useMemo)((,[null==G?void 0:G.usqPreEnforcementTooltip]),Se=D&&(fe==C.a.Warning||fe==C.a.WarningUSQ||fe==C.a.CriticalUSQ||fe==C.a.Full||fe==C.a.Over);Object(k.useEffect)((function(){Se&&he&&Object(T.a)({eventName:"USQ_Pre_Enforcement_Tooltip_Impression",area:"WelcomeBadge",subArea:"StorageQuota"})}),[he,Se]);var we=Object(k.useMemo)((function(){return Z/J*100||0}),[Z,J]),_e=Object(k.useCallback)((function(){return we&&K?we<1?" (0%)":" (".concat(Math.floor(we),"%)"):""}),[we,K]),ye=Object(k.useCallback)((,[se,V]);return Object(k.useMemo)((function(){return oe?{enforcementToolTip:null!=he?he:"",storageAlertLevel:fe,storageDisabled:M.f,storageLabel:null!=be?be:"",storageStateNameProps:Y,storageToolTip:null!=me?me:"",storageUsedOrAvailableLabel:null!=ue?ue:"",totalStorageQuotaLabel:null!=ce?ce:"",usedStorageBarWidth:le,onStorageClick:de,storagePercentage:onGetMoreStorageClick:ye}:void 0}),[oe,he,fe,be,Y,me,ue,ce,_e,le,de,ye])}},gd1C:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r,o=n("QjXU"),a=n("MJsD"),i=n("yQST"),u=n("gCKw"),c=n("mJgL"),l=n("/Oio"),s=n("dSKW"),d=n("NkqM"),f=n("KSsg"),v=function(e){var t,n=e.left,r=e.top,o=e.width,a=e.height;return n&&r&&(t="left=".concat(n,",top=").concat(r)),o&&a&&(t=(t?"".concat(t,","):"")+"width=".concat(o,",height=").concat(a)),t},b=function(e,t,n,r){return Object(o.__awaiter)(void 0,void 0,void 0,(function(){var i,u,c,l,b,g,p,O;return Object(o.__generator)(this,(function(j){switch(j.label){case 0:return i=!1,c="defaultLaunchUrl",e?e)?[4,Object(a.a)()]:[3,3]:[2,{message:c,result:u,success:i}];case 1:return l=j.sent().router,n&&(n.pageName=Object(s.a)(l.getCurrentPageForLogging())),[4,l.navigateTo(e,!1,r)];case 2:return i=j.sent(),u="Inline",c+=".navigateTo:".concat(i),[3,4];case 3:b=Object(o.__read)(function(e,t){if(void 0===t&&(t="_blank"),!e)return[void 0,t,window];var n=e.linkTarget,r=e.targetTab;return[v(e),null!=n?n:t,null!=r?r:window]}(t),3),g=b[0],p=b[1],O=b[2].open(Object(d.a)(e),p,g),c+=".open:".concat(i=!!O),u=function(e,t){return null===e?"OpenNull":void 0===e?"OpenUndefined":"_blank"===t?"NewTab":"Inline"}(O,p),j.label=4;case 4:return null!==i&&Object(f.a)({launchInstrumentationParams:n,success:i,platform:"Web"}),[2,{message:c,result:u,success:i}]}}))}))},g={chat:"d870f6cd-4aa5-4d42-9626-ab690c041429",testapp:"07b75f22-72b5-4063-b7fc-0ed5ea8ff3ff",onedrive:"377c982d-9686-450e-9a7c-22aeaf1bc162"},p=function(e,t,n){if(e&&t&&t.length){var r="";if(-1===e.indexOf("/"))r=e;else{var o=e.replace("/pwa","").replace("/embed","").replace("/v2",""),a=o.indexOf("/m365apps")>-1?o.split("/m365apps")[1].split("/"):o.split("/");a.length>=2&&a[1]&&(r=a[1])}if(r){if(t.includes(r))return n?r:g[r];var i=Object.keys(g).find(();if(i&&t.includes(i))return n?i:r}}},O=function(e,t,s,d){return Object(o.__awaiter)(void 0,void 0,void 0,(function(){var f,v;return Object(o.__generator)(this,(function(o){switch(o.label){case 0:return r?[3,4]:[4,Object(a.a)()];case 1:return o.sent().workload===l.a.Hwa||Object(i.a)()?[4,Promise.all([n.e(3),n.e(475)]).then(n.bind(null,"rYv4")).then(()]:[3,3];case 2:return r=o.sent(),[3,4];case 3:r=b,o.label=4;case 4:return"string"!=typeof e?[3,7]:[4,Object(u.a)()];case 5:return f=o.sent(),[4,Object(c.a)()];case 6:v=o.sent(),e=function(e,t,n){var r,o,a;if((null===(r=null==t?void 0:t.mosAppHostedAtRootGates)||void 0===r?void 0:r.mosAppHostedAtRootEnabled)&&e.indexOf("/m365apps")>-1){var i=null===(a=null===(o=null==n?void 0:n.routing)||void 0===o?void 0:o.mosAppsHostedAtRoot)||void 0===a?void 0:a.split(","),u=p(e,i,!0);if(u){var c=p(e,i,!1);e=e.replace("/m365apps","").replace("/".concat(c),"/".concat(u))}}return e}(e,null==f?void 0:f.result,null==v?void 0:v.result),o.label=7;case 7:return[2,r(e,t,s,d)]}}))}))}},i1Ej:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return c}));var r=!1,o=.8,a=.9,i="https://account.microsoft.com/services/microsoft365/renew?fref=Office-value-banner-renew",u="https://go.microsoft.com/fwlink/?linkid=2228772",c="login_hint"},lJoY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("QjXU"),o=n("OoM2"),a=n.n(o),i=n("mXGw"),u=n("NrNW"),c=function(){var e=Object(u.a)().data,t=Object(r.__read)(Object(i.useState)(null==e?void 0:e.router.getCurrentRoute()),2),n=t[0],o=t[1];return Object(i.useEffect)((function(){var t=null==e?void 0:e.router.getRouteObservable(),n=null==t?void 0:t.subscribe((function(e){o(()}));return ),[e]),Object(i.useMemo)((function(){return n}),[n])}},lOFt:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("8/lW"),o=n("a3FV"),a=n("rTyw"),i=n("4CZh");function u(e,t,n,u,c,l,s,d){if(void 0===l&&(l={}),void 0===s&&(s=[]),void 0===d&&(d=r.a.Security),s=s||[],n&&t&&"Unknown"!==t&&s.push("".concat(e,".").concat(n,".").concat(t)),t&&(l.ElementId=t),u){var f=Object(a.a)(u);l.Referral=f,s.push("Referral.".concat(f)),l.ReferralPlatform=c?{defaultValue:c,securityThreshold:r.a.Enhanced,fallbackValue:"Web"}:"Web"}n&&(l.Area=n),Object(i.b)(e,o.a.GenericClick,d,l,s,!0)}},pKjf:rbGx:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n("mXGw"),o=Object(r.createContext)({dialogState:void 0,convertedToPaid:void 0}),a=Object(r.createContext)({setDialogState:function(e){},setConvertedToPaid:)},tUM7:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("QjXU"),o=n("Eac/");unction i(e,t){return Object(r.__awaiter)(this,void 0,void 0,(function(){var n,i;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return[4,Object(o.a)()];case 1:return n=r.sent(),[4,window.crypto.subtle.encrypt({name:"AES-GCM",iv:n,tagLength:128},t,e)];case 2:return i=r.sent(),[2,a(n.buffer,i)]}}))}))}},u9fO:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("z+rT");function o(e,t,n){if(!e||!t)return e;var o={};return o[t]=n,Object(r.a)(e,o)}},wRjz:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("QjXU"),o=n("tUM7"),a=n("VOWq"),i=n("HZp7");function u(e){var t=this;return{onBeforeWriteValue:function(n){return Object(r.__awaiter)(t,void 0,void 0,(function(){var t,a,u;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return n?n instanceof ArrayBuffer?(t=n,a="rawbytes",[3,3]):[3,1]:[2,n];case 1:return[4,Object(i.b)(JSON.stringify(n))];case 2:u=r.sent(),t=u.buffer,a="utf8-encoded-string",r.label=3;case 3:return[4,Object(o.a)(t,e)];case 4:return[2,{buffer:r.sent(),payloadType:a}]}}))}))},onAfterReadValue:function(n){return Object(r.__awaiter)(t,void 0,void 0,(function(){var t,o;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:return n?[4,Object(a.a)(new Uint8Array(n.buffer),e)]:[2,n];case 1:return t=r.sent(),"rawbytes"!==n.payloadType?[3,2]:[2,t];case 2:return[4,Object(i.a)(new Uint8Array(t))];case 3:return o=r.sent(),[2,JSON.parse(o)]}}))}))}}}},ynVX:"z+rT":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("5eS3"),o=n("zP6S");function a(e,t,n){return e?Object(r.a)(e,Object(o.a)(t,n)):e}},zP6S:function(e,t,n){"use strict";function r(e,t){if(!e)return"";var n="";for(var r in e){var o,a=n?"&":"";o=t?e[r]?"".concat(e[r]):"":e[r]?"".concat(encodeURIComponent(e[r])):"",n="".concat(n).concat(a).concat(r,"=").concat(o)}return n}n.d(t,"a",()}}]);
//# sourceMappingURL=42.4c216100ab15a537319c.chunk.v7.js.map