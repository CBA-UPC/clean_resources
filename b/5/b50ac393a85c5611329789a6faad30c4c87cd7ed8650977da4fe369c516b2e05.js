(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[109,123],{"28zg":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("QjXU"),a=t("MJsD"),c=t("B5kz"),u=t("gCKw"),i=t("mJgL"),o=t("W7wX"),s=t("s1V1"),l=t("ohjr"),f=t("8VPm");function d(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,c.a.fetchQuery([e.key],(function(){var n={featureGatesPromise:Object(u.a)(),featureSettingsPromise:Object(i.a)(),userEntitlementsPromise:Object(s.a)(),contextPromise:Object(a.a)(),identityPromise:Object(o.a)()};return Object(l.a)(n,e)}),f.a)];case 1:return[2,n.sent()]}}))}))}},"4PWS":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={home:"5099F2E5-AD99-4BF2-BF82-DF525FFD0BE2",create:"83D3F491-B586-4266-8738-89776471BF21",mycontent:"F57D5D29-4967-495C-A648-F7AB66BF8572",orion:"099317ab-9a66-4a75-868c-dc2263ce2eb9",intents:"2CC62124-219E-4777-9A92-00CDE9062859",feed:"261d33d6-15ba-4e1d-b298-8096960fab40",appgallery:"26706956-2AAE-4A22-8960-09B98C35B28C",outlook:"Mail",onedrive:"Documents",teams:"SkypeTeams",word:"WordOnline",excel:"ExcelOnline",powerpoint:"PowerPointOnline",onenote:"OneNoteOnline",sway:"Sway",forms:"OfficeForms",admin:"Admin",visio:"VisioOnline",stream:"MicrosoftStream",todo:"ToDo",familysafety:"FamilySafety",calendar:"Calendar",skype:"Skype",people:"People",powerautomate:"LogicFlows",clipchamp:"Clipchamp",lists:"Lists",yammer:"Yammer",powerbi:"PowerBIv2",bing:"Bing",msn:"MSN",privacy:"Privacy",rewards:"Rewards",whiteboard:"Whiteboard",defender:"Defender"}},"5HQQ":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("QjXU");function a(e){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,Promise.all([t.e(51),t.e(719)]).then(t.bind(null,"fTj/"))];case 1:return[2,n.sent().getInstalledApp(e).then(().catch(()]}}))}))}},C2Jl:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("slmW");function a(e){if(e.fileType&&!e.isEmailAttachment&&e.canonicalUrl){var n=Object(r.a)(e.fileType);if(n){var t=e.canonicalUrl.lastIndexOf("?"),a=e.canonicalUrl;return t>0&&(a=e.canonicalUrl.substring(0,t)),"".concat(n).concat(a)}}}},"DCX/":function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("QjXU"),a=t("28zg"),c=t("ddw+");function u(){return Object(r.__awaiter)(this,void 0,void 0,(function(){return Object(r.__generator)(this,(function(e){return[2,Object(a.a)(c.a)]}))}))}},DZQ9:VDyW:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("QjXU"),a=t("nX9G"),c=function(e){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return[4,Object(a.a)()];case 1:return[2,(0,n.sent().openFileInExplorer)(e)]}}))}))}},ZsNf:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var r=t("QjXU"),a=t("MJsD"),c=t("V9hE"),u=t("/Oio"),i=t("CMIS"),o=t("GMuP"),s=t("Dn7E"),l=t("+k3c"),f=t("gd1C"),d=function(e,n,t){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var a;return Object(r.__generator)(this,(function(r){switch(r.label){case 0:if(!n.disableDefaultLinkBehavior&&event&&!event.defaultPrevented)return[3,4];r.label=1;case 1:return r.trys.push([1,3,,4]),a=n.action,[4,Object(f.a)(e,{action:a},t)];case 2:return[2,r.sent()];case 3:return r.sent(),[2,{success:!1,message:"launchWebApp:launchUrlException"}];case 4:return[2,{success:!1,message:"launchWebApp:fallThrough"}]}}))}))},p=t("KSsg"),b=t("5HQQ"),v=function(e,n){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){var t,v,h,m,O,j,g,w,_,y,D,P,F,A,k,E,C;return Object(r.__generator)(this,(function(I){switch(I.label){case 0:t={success:!1},v="launchApp",I.label=1;case 1:return I.trys.push([1,14,15,16]),[4,Object(a.a)()];case 2:return h=I.sent(),m=e.appName,O=e.url,(j=h.workload==u.a.Hwa&&m)?[4,Object(b.a)(m)]:[3,4];case 3:j=I.sent(),I.label=4;case 4:if(!j)return[3,11];g=e.disableDefaultLinkBehavior,_=!(w=e.event)||w.defaultPrevented||g?void 0:y=void 0,I.label=5;case 5:return I.trys.push([5,7,,8]),[4,Object(l.a)({appName:m,filePath:e.useUrl?O:"",prelaunchCallback:_})];case 6:return y=I.sent(),Object(p.a)({launchInstrumentationParams:n,success:y.success}),y.success&&(t=Object(r.__assign)(Object(r.__assign)({},y),{result:"Native"})),[3,8];case 7:return I.sent(),[3,8];case 8:return(null==y?void 0:y.success)?[3,10]:[4,d(O,e,n)];case 9:t=I.sent(),I.label=10;case 10:return[3,13];case 11:return D=e.targetTab,[4,Object(f.a)(O,{action:"OpenInApp",targetTab:D},n)];case 12:t=I.sent(),I.label=13;case 13:return[3,16];case 14:return P=I.sent(),F=void 0,A=void 0,P instanceof Error?(F=P.stack,A=P.message):"string"==typeof P?A=P:"object"==typeof P&&(A=null==P?void 0:P.toString()),Object(i.a)({debugInfo:F,errorType:"LaunchApp_Error",eventName:v,message:A}),F&&(k={DebugInfo:F,Message:null!=A?A:""},Object(o.a)({eventName:v,params:k}),Object(c.a)(v,k,[])),[3,16];case 15:return k={Success:t.success,Message:null!==(E=t.message)&&void 0!==E?E:"",AppLaunchResult:null!==(C=t.result)&&void 0!==C?C:""},Object(s.a)({eventName:v,featureName:"LauncherService",params:k}),[7];case 16:return[2,t]}}))}))}},nX9G:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("QjXU"),a=t("MJsD"),c=t("yQST"),u=t("/Oio"),i=void 0;function o(){return Object(r.__awaiter)(this,void 0,void 0,(function(){var e;return Object(r.__generator)(this,(function(n){switch(n.label){case 0:return i?[3,4]:[4,Object(a.a)()];case 1:return(e=n.sent()).workload===u.a.Hwa||Object(c.a)()?[4,Promise.all([t.e(51),t.e(649)]).then(t.bind(null,"N3Xl")).then((function(n){return{launchFile:n.getLaunchFileFunc(e),launchInDesktopApps:n.launchInDesktopApps,launchTemplate:n.launchTemplate,openFileInExplorer:n.openFileInExplorer}}))]:[3,3];case 2:return i=n.sent(),[3,4];case 3:i={launchFile:function(){return Promise.reject()},launchInDesktopApps:function(){return Promise.reject()},launchTemplate:function(){return Promise.reject()},openFileInExplorer:,n.label=4;case 4:return[2,i]}}))}))}},rZux:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("QjXU"),a=t("nX9G"),c=function(e,n){return Object(r.__awaiter)(void 0,void 0,void 0,(function(){return Object(r.__generator)(this,(function(t){switch(t.label){case 0:return[4,Object(a.a)()];case 1:return[2,(0,t.sent().launchTemplate)(e,n)]}}))}))}},slmW:function(e,n,t){"use strict";t.d(n,"a",();var r=t("6ib3");}]);
//# sourceMappingURL=109.c0e41a6acbf2ef3f6bd4.chunk.v7.js.map