(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[115],{"/zXs":"Pd+Y":function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a("QjXU"),o=a("8wW2"),r=a("a3FV"),c=a("0TX8"),i=a("Wa5Y"),s=a("mpo9");function d(e,n,a,d){var l=this;return void 0===a&&(a=!1),void 0===d&&(d=1),new Promise((function(m,u){return Object(t.__awaiter)(l,void 0,void 0,(function(){var l,f,b,p;return Object(t.__generator)(this,(function(h){switch(h.label){case 0:return(l=Object(s.b)()).hasOwnProperty(e)&&!a?(f=Array.isArray(l[e])?l[e]:Object(t.__assign)({},l[e]),m(f),[2]):Object(s.c)()||d<1?(m(void 0),[2]):[4,n.getIdentity()];case 1:return b=h.sent(),n.jwtAuthEnabled&&b.isMsa?(u("User storage does not support roaming"),[2]):(p={},[4,Object(c.a)(p,n.inMockMode,n.workload,n.getIdentity)]);case 2:return h.sent(),Object(i.a)(r.a.OfficeHomeStorageReadRequest,"OfficeHomeStorage_Read","".concat(n.officeHomeApiRoot,"/api/userstorage/").concat(e,"/"),p,n.jwtAuthEnabled,n.getAccessToken,n.officeHomeApiRoot,n.correlationId,"OfficeHome",{populateRequestEvent:function(n,a){a.RequestId=e},isRetriableError:).then((function(n){n.data&&(l[e]=Array.isArray(n.data)?n.data:Object(t.__assign)({},n.data)),m(n.data)})).catch((function(n){Object(o.a)().handleError(n,"Bn3rc"),n&&n.httpResponse&&404===n.httpResponse.status?m(void 0):u("Failed to get value from user data storage for <".concat(e,"> key."))})),[2]}}))}))}))}},Qh9q:function(e,n,a){"use strict";a.d(n,"a",(function(){return r})),a.d(n,"b",(function(){return c})),a.d(n,"c",(function(){return i}));var t=a("4PWS"),o=a("fcAT"),r="apps",c=new Map([[t.a.home,0],[t.a.create,1],[t.a.mycontent,2],[t.a.orion,3],[t.a.feed,4],[t.a.appgallery,5],[t.a.alps,6]]),i=new Map([[t.a.home,0],[t.a.create,1],[t.a.mycontent,2],[t.a.orion,3],[t.a.feed,4],[t.a.appgallery,5],[o.b,6],[t.a.alps,7]])},"Yh/z":function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var t=a("QjXU"),o=a("8wW2"),r=a("muUJ"),c=a("a3FV"),i=a("CMIS"),s=a("0TX8"),d=a("cy7S"),l=a("oK0o"),m=a("mpo9");function u(e,n,a){var u=this;return new Promise((function(f,b){return Object(t.__awaiter)(u,void 0,void 0,(function(){var u,p,h;return Object(t.__generator)(this,(function(_){switch(_.label){case 0:return Object(m.b)()[e]=Array.isArray(n)?n:Object(t.__assign)({},n),[4,a.getIdentity()];case 1:if(u=_.sent(),a.jwtAuthEnabled&&u.isMsa)return b("User storage does not support roaming"),[2];if(p={headers:{}},!a.inMockMode&&!a.jwtAuthEnabled){if(!(h=l.get("AjaxSessionKey")))return Object(r.a)(c.a.CsrfTokenError),Object(i.a)({eventName:"Csrf_Token",errorType:"User_Storage_Error"}),b("CSRF token missing"),[2];p.headers.AjaxSessionKey=h}return[4,Object(s.a)(p,a.inMockMode,a.workload,a.getIdentity)];case 2:return _.sent(),Object(d.a)(c.a.OfficeHomeStorageWriteRequest,"OfficeHomeStorage_Write","".concat(a.officeHomeApiRoot,"/api/userstorage/").concat(e,"/"),n,p,a.jwtAuthEnabled,a.getAccessToken,a.officeHomeApiRoot,a.correlationId,"OfficeHome",{populateRequestEvent:).then(().catch((function(n){Object(o.a)().handleError(n,"J7GBR"),b("Failed to update or create value in roaming user data storage for <".concat(e,"> key."))})),[2]}}))}))}))}},cy7S:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var t=a("QjXU"),o=a("kb6k"),r=a("lAHu");function c(e,n,a,c,i,s,d,l,m,u,f,b){void 0===f&&(f={});var p=Object(t.__assign)(Object(t.__assign)({},i),{url:a,method:"PUT",body:c});return Object(o.a)((function(a){return Object(r.a)(e,n,a,l,m,void 0,f.populateRequestEvent,f.onUploadProgress,f.onDownloadProgress,f.cancellationToken,f.timeoutInMs)}),e,n,p,s,d,u,f.mockParam,f.resourceUrl,f.rpsHeaderPrefix,f.additionalAuthErrors,f.isRetriableError,f.updateRequestWithAuth,void 0,void 0,void 0,b)}},kOyC:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var t=a("QjXU"),o=a("8FCE"),r=a("4PWS"),c=a("NrNW"),i=a("fcAT"),s=a("CU8J"),d=a("mXGw");function l(){var e=Object(c.a)().data,n=Object(s.a)().data,a=Object(t.__read)(d.useState(),2),l=a[0],f=a[1];return d.useEffect((function(){var n=null==e?void 0:e.router.getRouteObservable(),a=null==n?void 0:n.subscribe(();return ),[e]),d.useMemo((function(){return function(e,n){var a,t;if(null==e?void 0:e.route)switch(e.route){case"M365Apps":(t=e.app)===o.h&&(t=r.a.appgallery),t===i.g&&(null===(a=null==n?void 0:n.oneDriveMosAppGates)||void 0===a?void 0:a.oneDriveMosAppEnabled)&&(t=r.a.onedrive);break;case"Start":case"Templates":e.app&&(t=u[e.app.toLowerCase()]);break;default:t=m[e.route.toLowerCase()]}return null!=t?t:r.a.home}(l,null==n?void 0:n.result)}),[l,null==n?void 0:n.result])}var m={officehome:r.a.home,create:r.a.create,mycontent:r.a.mycontent,intents:r.a.create,orion:r.a.orion,feed:r.a.feed,appgallery:r.a.appgallery,alps:r.a.alps},u={word:r.a.word,excel:r.a.excel,powerpoint:r.a.powerpoint,onenote:r.a.onenote,sway:r.a.sway,forms:r.a.forms,visio:r.a.visio,stream:r.a.stream,whiteboard:r.a.whiteboard,clipchamp:r.a.clipchamp}},mpo9:function(e,n,a){"use strict";a.d(n,"b",(function(){return l})),a.d(n,"c",(function(){return m})),a.d(n,"a",(function(){return u}));var t,o,r,c=a("E7ar"),i=a("8wW2"),s=!1;function d(){if(!s){s=!0;var e=void 0;try{e=Object(c.a)("userStorageCache")}catch(e){Object(i.a)().handleError(e)}t=e?e.content:{},o=!!e&&e.firstUse,r=e?e.firstUseTimestamp:0}}function l(){return d(),t}function m(){return d(),o},oK0o:ps8P:function(e,n,a){"use strict";a.d(n,"a",();var t=a("QjXU"),o=a("4PWS"),r=a("v5sg"),c=a("jVk8"),i=a("CaQ9"),s=a("h8qh"),d=a("I0st"),l=a("mXGw");function m(){var e=Object(s.a)().data,n=Object(i.a)().data,a=Object(d.a)().data,m=Object(r.a)(),u=null==e?void 0:e.appBarResources;l.useEffect((function(){var e,n;if(u){try{for(var a=Object(t.__values)(b),r=a.next();!r.done;r=a.next()){var c=r.value;switch(c.node.id){case o.a.home:c.node.name=c.node.accessibleName=u.homeTileName;break;case o.a.create:c.node.name=c.node.accessibleName=u.createTileName;break;case o.a.mycontent:c.node.name=c.node.accessibleName=u.myContentTileName;break;case o.a.orion:c.node.name=c.node.accessibleName=u.orionTileName;break;case o.a.feed:c.node.name=c.node.accessibleName=u.feedTileName;break;case o.a.appgallery:c.node.name=c.node.accessibleName=u.flyoutButtonText;break;case o.a.alps:c.node.name=c.node.accessibleName=u.alpsTileName}}}catch(n){e={error:n}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}p(Object(t.__spreadArray)([],Object(t.__read)(b),!1))}}),[u]),l.useEffect((function(){var e,o;if(a&&n){var r=n.isMsa,i=Object(t.__spreadArray)(Object(t.__spreadArray)([],Object(t.__read)(a.coreAndSegmentApps),!1),Object(t.__read)(a.nonCoreAndSegmentApps),!1),s=function(e){var n=Object(c.a)(e.node.id,r),a=i.find(();a&&(e.node.name=a.Text,e.node.accessibleName=a.Title)};try{for(var d=Object(t.__values)(b),l=d.next();!l.done;l=d.next())s(l.value)}catch(n){e={error:n}}finally{try{l&&!l.done&&(o=d.return)&&o.call(d)}finally{if(e)throw e.error}}p(Object(t.__spreadArray)([],Object(t.__read)(b),!1))}}),[a,n]);var f=Object(t.__read)(l.useState((function(){return[{node:{id:o.a.home,name:null==u?void 0:u.homeTileName,accessibleName:null==u?void 0:u.homeTileName,icon:{__typename:"InternalIcon",name:"HomeIcon"},selectedStateIconOverride:{__typename:"InternalIcon",name:"HomeIconSelected"},canLaunchOut:!0,isPinnable:!1,enablePlatformCommands:!1,lockedIndex:void 0,pinnedIndex:void 0,isInUse:!1}},{node:{id:o.a.create,name:null==u?void 0:u.createTileName,icon:{__typename:"InternalIcon",name:"CreateIcon"},selectedStateIconOverride:{__typename:"InternalIcon",name:"CreateIconSelected"},canLaunchOut:!0,isPinnable:!1,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.mycontent,name:null==u?void 0:u.myContentTileName,icon:{__typename:"InternalIcon",name:"MyContentIcon"},selectedStateIconOverride:{__typename:"InternalIcon",name:"MyContentIconSelected"},canLaunchOut:!0,isPinnable:!1,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.orion,name:null==u?void 0:u.orionTileName,icon:{__typename:"InternalIcon",name:"MyContentIcon"},selectedStateIconOverride:{__typename:"InternalIcon",name:"MyContentIconSelected"},canLaunchOut:!0,isPinnable:!1,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.feed,name:null==u?void 0:u.feedTileName,icon:{__typename:"InternalIcon",name:"FeedIcon"},selectedStateIconOverride:{__typename:"InternalIcon",name:"FeedIconSelected"},canLaunchOut:!0,isPinnable:!1,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.appgallery,name:null==u?void 0:u.flyoutButtonText,icon:{__typename:"InternalIcon",name:"AppsIcon"},selectedStateIconOverride:{__typename:"InternalIcon",name:"AppsIconSelected"},canLaunchOut:!0,isPinnable:!1,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.alps,name:null==u?void 0:u.alpsTileName,icon:{__typename:"InternalIcon",name:"MyContentIcon"},selectedStateIconOvverride:{__typename:"InternalIcon",name:"MyContentIconSelected"},canLaunchOut:!0,isPinnable:!1,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.outlook,name:"Outlook",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/outlook_24x.59692ba8e1f344194426952916c16896.svg"},brandingColor:"#0078D7",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.onedrive,name:"OneDrive",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/onedrive_24x.48ff325b96939ffeb92ab7ba4dc237d1.svg"},brandingColor:"#0078D7",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.teams,name:"Teams",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/teams_24x.1da2a0886d3c616a6242b1f249a9bdce.svg"},brandingColor:"#5558AF",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.word,name:"Word",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/word_24x.21f886b59cf807ae5818458ffa8cecd4.svg"},brandingColor:"#2B579A",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.excel,name:"Excel",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/excel_24x.067c6a6a32c636ef30bc50ddb143b7d9.svg"},brandingColor:"#217346",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.powerpoint,name:"PowerPoint",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/powerpoint_24x.5326aeabae2168deb16e6da825978d4f.svg"},brandingColor:"#B7472A",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.onenote,name:"OneNote",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/onenote_24x.84709e2492984ff1f10c0c1e4cd3dae6.svg"},brandingColor:"#7719AA",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.sway,name:"Sway",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/sway_24x.9c22be76a16820bd5a29a987de9d305e.svg"},brandingColor:"#008272",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.forms,name:"Forms",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/forms_24x.01909bf15ef50ec31db9988e84cecd16.svg"},brandingColor:"#008272",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.admin,name:"Admin",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/admin_24x.8b38efcc63cc87244d60058f2677e22c.svg"},canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.visio,name:"Visio",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/visio_24x.c475b8c5b0c9e2f8117ef74d4d61542b.svg"},brandingColor:"#3955A3",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.stream,name:"Stream",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/stream_24x.12dba766a9c30382b781c971070dc87c.svg"},brandingColor:"#C30052",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.todo,name:"ToDo",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/todo_24x.efcbeee6bef8b16fcebf3174335d91bb.svg"},brandingColor:"#00AFF0",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.familysafety,name:"Family Safety",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/familysafety_24x.c8729c60957826249cdc4a3ff6ae7da6.svg"},brandingColor:"#0C9D8C",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.calendar,name:"Calendar",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/calendar_24x.102f9e31d85b6335f286b6850da33f4a.svg"},brandingColor:"#0072C6",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.skype,name:"Skype",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/skype_24x.4d805c0782f5d0f1fbe48a3e78a6a5c6.svg"},brandingColor:"#00AFF0",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.people,name:"People",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/people_24x.897015202ac96f22ef9c79762255b645.svg"},brandingColor:"#0072C6",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.powerautomate,name:"Power Automate",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/powerautomate_24x.cb65672f4be34cbee045be6c6231e7e6.svg"},brandingColor:"#0077FF",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.clipchamp,name:"Clipchamp",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/clipchamp_24x.c65dac0a000ab12ac8dc18992da964c5.svg"},brandingColor:"#0C9D8C",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.lists,name:"Lists",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/lists_24x.6cb43f7df77f1c997f4c8fe7e93b8f3c.svg"},brandingColor:"#974B8B",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.yammer,name:"Yammer",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/yammer_24x.a06b4022cbdae2410e0acca4e087d460.svg"},brandingColor:"#0078D7",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.powerbi,name:"Power BI",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/powerbi_24x.6594f787c6ffbbc80b66e0610988a113.svg"},brandingColor:"#FFB900",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.bing,name:"Bing",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/bing_24x.165d62399a74f9d0f8ac1b4ce4037a2c.svg"},brandingColor:"#0C8484",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.msn,name:"MSN",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/msn_24x.22c2af001040d7ec2c24632b9da7beda.svg"},brandingColor:"#1E1E1E",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.privacy,name:"Privacy",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/privacy_24x.80370d11c09f4cd63d4afdb5ee9da598.svg"},brandingColor:"#00AFF0",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.rewards,name:"Rewards",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/rewards_24x.436dd1a94e8799fae539a54a76ee66af.svg"},brandingColor:"#00AFF0",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.whiteboard,name:"Whiteboard",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/whiteboard_24x.8e9f0e2b4e42c8297f4835289fd88547.svg"},brandingColor:"#0C34FA",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}},{node:{id:o.a.defender,name:"Microsoft Defender",icon:{__typename:"RemoteImage",src:"https://res-1.cdn.office.net/shellux/defender_24x.46e80ccde634e5ea47c305618ca536e2.svg"},brandingColor:"#3A80D2",canLaunchOut:!0,isPinnable:!0,enablePlatformCommands:!1,isInUse:!1}}]})),2),b=f[0],p=f[1];return l.useMemo((function(){var e,n,a=[];if(m){var o=function(e){var n=m.find(();n&&(e.node.pinnedIndex=n.pinnedIndex,a.push(e))};try{for(var r=Object(t.__values)(b),c=r.next();!c.done;c=r.next())o(c.value)}catch(n){e={error:n}}finally{try{c&&!c.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}}return a}),[m,b])}}}]);
//# sourceMappingURL=115.c20f4dc60c0645d12c11.chunk.v7.js.map