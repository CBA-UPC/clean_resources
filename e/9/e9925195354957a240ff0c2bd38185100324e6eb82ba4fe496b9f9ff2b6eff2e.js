(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[660],{"0Egu":function(e,t,n){"use strict";n.r(t),n.d(t,"getDataManager",(function(){return T}));var i=n("QjXU"),r=n("B5kz"),o=n("P1B7"),a=n("m32Q"),c=n("lkvL"),s=n("7fMX"),u=n("MQWb"),d=n("P7p1"),l=n("pXA3"),f=n("Aj9g"),p=n("4Ump"),m=n("8wW2"),b=n("mJgL"),v=n("5ANk"),h=n("a3FV"),_=n("CMIS"),j=n("Wa5Y"),g=n("zPk6");function O(e,t){return function(n,i){if(i.RequestId=Object(g.a)(n)||"",i.DebugInfo=function(e){if(!e||!e.headers)return"";var t=e.headers,n=t["X-FEServer"]||"";return"BE: ".concat(t["X-CalculatedBETarget"]||"",". FE: ").concat(n,".")}(n),i.Index=e.toString(),i.ImpressionId=!!n.headers&&n.headers[u.a]||t,n.ok&&n.data){var r=0;n.data.documents_group&&n.data.documents_group.documents&&(r=n.data.documents_group.documents.length,i.ResourceIdDistribution=n.data.documents_group.documents.map((function(e){return e.resource_id})).toString()),i.ActualSize=r.toString()}}}var y=0;function w(e){return Object(i.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o,a,c=this;return Object(i.__generator)(this,(function(s){switch(s.label){case 0:return t=function(t){return Object(i.__awaiter)(c,void 0,void 0,(function(){var n,r,o,a,c,s,d,l,f;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return n=e.substrateAppId,r=e.aadClientId,a=e.tenantId,(l={"X-AnchorMailbox":"".concat(o=e.objectId,"@").concat(a),"X-Office-Application":n.toString(),"X-RoutingParameter-SessionKey":o,"X-Ms-ClientAppId":r})[u.a]=t,c=l,[4,Object(b.a)()];case 1:return s=i.sent(),(d=null===(f=null==s?void 0:s.result)||void 0===f?void 0:f.threeSRDLFlightHeader)&&d.value&&(c["X-Client-Flights"]=d.value),[2,c]}}))}))},n=Object(v.a)(),[4,t(n)];case 1:return r=s.sent(),o={headers:r},a=function(e){var t=e.filesPath,n=e.numItemsToRequest,i=e.officeMarket,r=e.sources,o=(e.inMockMode?e.officeApiRoot:e.substrateApi)+"/".concat(e.rootPath,"/"),a=e.fileTypes.join(","),c=r.join(",");return"".concat(o).concat(t,"?").concat("show=").concat(n,"&").concat("skipCache=false","&").concat("apps=").concat(a,"&").concat("rs=").concat(i,"&").concat("sources=").concat(c)}(e),[2,Object(j.a)(h.a.RecommendedRequest,"Recommended",a,o,e.jwtAuthEnabled,e.getAccessToken,e.officeApiRoot,e.correlationId,"Substrate",{mockParam:"mockrecommended",populateRequestEvent:O(y++,n)}).then((function(e){if(e.data)return{data:e.data,headers:e.headers};Object(_.a)({eventName:"Recommended_Files_Service_Error",message:"No data returned in recommended files call"})})).catch((function(e){throw Object(m.a)().handleError(e,"FUfu0"),e}))]}}))}))}var I=n("6Vlo"),A=n("6ib3"),P=n("k8cM"),R=n("PZ4A"),E=n("RAp9"),k=n("2GJt"),x=n("ywfh"),S=n("qyk8"),F=n("cHft"),M=n("jwpY"),C=n("7EhF"),U=n("8eS9");function T(e){var t=this,n=e.identity,m=e.officeComponentContext,b=e.recommendedConfig,_=e.encryptionKeyResult,j={aadClientId:m.aadAppId,filesPath:b.filesPath,inMockMode:!!m.inMockMode,numItemsToRequest:b.numItemsToRequest,objectId:n.objectId,officeApiRoot:m.officeHomeApiRoot,officeMarket:m.preferredCulture,rootPath:b.rootPath,substrateApi:b.substrateApi,substrateAppId:b.substrateAppId,tenantId:n.tenantId,jwtAuthEnabled:m.jwtAuthEnabled,correlationId:m.correlationId,getAccessToken:m.getAccessToken};return{addFilesActions:function(e){return Object(s.b)(e,Object(i.__assign)(Object(i.__assign)({},j),{filesActionsPath:b.filesActionsPath}),!1)},getRecommendedData:function(e,s){var l=Object(d.a)(e,b.pdfEnabled,!1,b.visioEnabled),m=Object(i.__assign)(Object(i.__assign)({},j),{fileTypes:l,sources:Object(f.a)()});return Object(o.b)((function(){return Object(i.__awaiter)(t,void 0,void 0,(function(){var e;return Object(i.__generator)(this,(function(t){switch(t.label){case 0:return[4,w(m)];case 1:return(e=t.sent())?[2,{data:e.data,headers:e.headers}]:[2,void 0]}}))}))}),(function(){var e=Object(p.b)(_),t=Object(i.__spreadArray)([],Object(i.__read)(e),!1).reverse();return Object(a.a)({userId:n.puid,collectionName:u.c,collectionVersion:u.d,key:Object(p.a)(l,u.c),plugins:t})}),(function(e){return Object(i.__awaiter)(t,void 0,void 0,(function(){var t;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return t=Object(p.b)(_),[4,Object(c.a)({userId:n.puid,collectionName:u.c,collectionVersion:u.d,key:Object(p.a)(l,u.c),data:e,plugins:t})];case 1:return i.sent(),[2]}}))}))}),(,(function(e){return function(e){var t,n;return{documents:((null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.documents_group.documents)||[]).map((function(e){var t,n,r,o,a=e.activity_info?e.activity_info.badge:void 0,c=a&&a.timestamp?new Date(a.timestamp):void 0,s="EmailAttachment"===e.service_info.service_id||"FP_EXCHANGE_ORGID"===e.service_info.service_id;s&&(o={AttachmentType:I.a.Classic,ConversationId:"",Subject:a&&a.conversation_info?a.conversation_info.subject:""});var u=Object(R.b)(e.extension);u===A.a.None&&e.app&&(u=Object(E.a)(e.app));var d={app:e.app,attribution:e.url,docId:null===(t=e.onedrive_info)||void 0===t?void 0:t.item_id,driveId:e.onedrive_info.drive_id,extension:e.extension,id:e.id,title:e.title,fileName:e.title,url:s&&e.web_url?e.web_url:e.url,webUrl:e.web_url,lastAccessedTime:c,fileType:u,resourceId:e.resource_id,isCollab:!!e.activity_info&&e.activity_info.is_collab,downloadUrl:e.url,canonicalUrl:e.url||e.web_url,isEmailAttachment:s,emailReference:o,attributionUrl:Object(k.a)(e.url)};if(null===(n=e.activity_info)||void 0===n?void 0:n.badge){var l=e.activity_info.badge,f=[],p=[];l.users&&(f=l.users.map((),p=l.users.map((function(e,t){return{upn:e.upn,name:e.display_name,tag:t.toString()}})));var m={formatString:l.message_format,plainText:S.a.apply(void 0,Object(i.__spreadArray)([l.message_format],Object(i.__read)(f),!1)),people:p,reasonType:P.a.Default,id:l.navigation_info.id,timestamp:new Date(l.timestamp)};d.activity=m}if(e.sharepoint_info){var b=e.sharepoint_info;d.sharepointIds={listId:b.list_id,listItemId:"",listItemUniqueId:b.list_item_unique_id,siteId:b.site_id,siteUrl:b.site_url,webId:b.web_id}}var v=Object(x.a)(e.url);return d.isOneDriveForBusinessFile="Documents"===v,d.isSharePointFile="Sites"===v,d.actionInfo={odspShareInfo:Object(F.a)({isOneDriveForBusinessFile:d.isOneDriveForBusinessFile,isSharePointFile:d.isSharePointFile,itemId:e.id,sharepointInfo:d.sharepointIds,url:d.url,webUrl:null!==(r=d.webUrl)&&void 0!==r?r:d.url})},d})),diagnosticData:{serverRequestId:null!==(n=null==e?void 0:e.headers[u.e])&&void 0!==n?n:""}}}(e)}))},removeDocument:function(e){return function(e,t,n){return Object(i.__awaiter)(this,void 0,void 0,(function(){var r,o,a,c,s,u,d,l,f,p,m,b,_,j,g;return Object(i.__generator)(this,(function(i){return r=e.dismissedDocumentsPath,o=e.substrateAppId,a=e.substrateApi,c=e.rootPath,s=e.inMockMode,u=e.officeApiRoot,d=e.aadClientId,l=e.objectId,f=e.tenantId,p=Object(v.a)(),m=Object(C.a)({aadClientId:d,objectId:l,requestId:p,substrateAppId:o,tenantId:f,contentType:"application/json"}),b=a,s&&(b=u,_={mockParam:"mockrecommendeddelete"}),j="".concat(Object(U.a)({apiRoot:b,rootPath:c}),"/").concat(r),g={id:t,until:n},s?[2,Promise.resolve()]:[2,Object(M.a)(h.a.RecommendedDelete,"Recommended_Delete",j,JSON.stringify(g),m,e.jwtAuthEnabled,e.getAccessToken,e.officeApiRoot,e.correlationId,"Substrate",_).catch(()]}))}))}(Object(i.__assign)(Object(i.__assign)({},j),{dismissedDocumentsPath:b.dismissedDocumentsPath}),e.docId,e.snoozeUntil)},onRemoveSuccessCallback:function(e,t){var i=[],o=Object(l.a)("RecommendedFilesApi");if(i.push(o),e.docFileType){var a=Object(l.a)("RecommendedFilesApi",e.docFileType);i.push(a)}i.forEach((function(t){r.a.cancelQueries(t);var n=r.a.getQueryData(t);if(null==n?void 0:n.result){var i=n.result.documents.filter(();r.a.setQueryData(t,{result:{documents:i,diagnosticData:n.result.diagnosticData},fromPersistence:n.fromPersistence})}})),Object(p.c)({docProps:e,isOfficeFeed:!1,pdfEnabled:b.pdfEnabled,upcomingMeetingEnabled:!1,visioEnabled:b.visioEnabled,encryptionKeyResult:_,identity:n,persistenceKey:u.c})},onRemoveErrorCallback:}},"2GJt":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("GeVZ"),r=n("qAi5");function o(e,t){var n;void 0===t&&(t=!1);var o=e?e.lastIndexOf(t?"\\":"/"):-1,a=-1===o?e:e.substring(0,o+1);if(a.match(r.b)){var c=null===(n=Object(i.a)(a))||void 0===n?void 0:n.path;if(!c)return a;if(c.lastIndexOf("/",c.length-2)<=0)return"".concat(a,"?id=root")}return a}},"4Ump":function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p}));var i=n("QjXU"),r=n("j7b/"),o=n("wRjz"),a=n("lwUs"),c=n("m32Q"),s=n("lkvL"),u=n("MQWb"),d=n("P7p1");function l(e,t){return JSON.stringify([t,e.join(",")])}function f(e){var t=[],n=e.key;return n&&t.push(Object(o.a)(n)),t.push(Object(a.a)(60*r.a)),t}var p=function(e){return Object(i.__awaiter)(void 0,void 0,void 0,(function(){var t,n,r,o,a,p,m,b;return Object(i.__generator)(this,(function(v){switch(v.label){case 0:return t=Object(d.a)(e.isOfficeFeed?void 0:e.docProps.docFileType,e.pdfEnabled,e.upcomingMeetingEnabled,e.visioEnabled),n=f(e.encryptionKeyResult),r=Object(i.__spreadArray)([],Object(i.__read)(n),!1).reverse(),[4,Object(c.a)({userId:e.identity.puid,collectionName:e.persistenceKey,collectionVersion:u.d,key:l(t,e.persistenceKey),plugins:r})];case 1:return o=v.sent(),a=e.isOfficeFeed?null===(p=o.data)||void 0===p?void 0:p.items.filter((function(t){return t&&t.itemId!==e.docProps.docId})):(null===(b=null===(m=o.data)||void 0===m?void 0:m.documents_group.documents)||void 0===b?void 0:b.filter(())||[],Object(s.a)({userId:e.identity.puid,collectionName:e.persistenceKey,collectionVersion:u.d,key:l(t,e.persistenceKey),data:a,plugins:n}),[2]}}))}))}},"6Vlo":"7EhF":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("QjXU"),r=n("MQWb"),o=function(e){var t,n=e.aadClientId,o=e.objectId,a=e.requestId,c=e.substrateAppId,s=e.tenantId,u=e.contentType,d=((t={"X-AnchorMailbox":"".concat(o,"@").concat(s),"X-Office-Application":c.toString(),"X-RoutingParameter-SessionKey":o,"X-Ms-ClientAppId":n})[r.a]=a,t);return u&&(d=Object(i.__assign)(Object(i.__assign)({},d),{"Content-Type":u})),{headers:d}}},"7fMX":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var i,r=n("5ANk"),o=n("a3FV"),a=n("jwpY"),c=n("7EhF"),s=n("8eS9");!i||(i={}));var u=function(e,t,n){var u,d=t.aadClientId,l=t.correlationId,f=t.filesActionsPath,p=t.getAccessToken,m=t.jwtAuthEnabled,b=t.objectId,v=t.officeApiRoot,h=t.rootPath,_=t.substrateAppId,j=t.tenantId,g=t.substrateApi;t.inMockMode&&(g=v,u={mockParam:"mockrecommendedfilesactions"});var O="".concat(Object(s.a)({apiRoot:g,rootPath:h}),"/").concat(f),y={id:e.id,action_type:e.type,source_file_id:e.type===i.PdfCreated?e.sourceFileId:void 0};return Object(a.a)(n?o.a.OfficeFeedAction:o.a.RecommendedFilesActions,n?"OfficeFeedAction":"Recommended_Files_Actions",O,JSON.stringify(y),Object(c.a)({aadClientId:d,objectId:b,requestId:Object(r.a)(),substrateAppId:_,tenantId:j}),m,p,v,l,"Substrate",u)}},"8eS9":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){return e.apiRoot+"/".concat(e.rootPath)}},Aj9g:function(e,t,n){"use strict";.d(t,"a",(function(){return i}))},"Eac/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var i=n("QjXU");function r(){return Object(i.__awaiter)(this,void 0,void 0,(function(){return Object(i.__generator)(this,(function(e){return[2,window.crypto.getRandomValues(new Uint8Array(12))]}))}))}function o(e){return[e.slice(0,12),e.slice(12,e.byteLength)]}},MQWb:P7p1:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("6ib3");function r(e,t,n,r){var o;return null!==(o=e&&(e===i.a.Stream?[i.a.Video,i.a.PlayList]:[e]))&&void 0!==o?o:function(e,t,n){var r=[i.a.Word,i.a.Excel,i.a.PowerPoint,i.a.OneNote];return e&&r.push(i.a.Pdf),n&&r.push(i.a.Visio),t&&r.push(i.a.UpcomingMeeting),r}(t,n,r)}},PZ4A:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var i,r,o=n("6ib3");function a(){return(i={})[o.a[o.a.Excel]]=["xls","xlsx","xlb","xlc","xlsb","xlsm","xlt","xltx","xltm","xlm","xla","xll","xlam","xlw","excel","csv"],i[o.a[o.a.Visio]]=["vsd","vss","vst","vdx","vsx","vtx","vsl","vsu","vsw","vsdx","vsdm","vssm","vstx","vstm"],i[o.a[o.a.PowerPoint]]=["ppt","pptx","pot","potx","potm","ppam","ppsx","ppsm","sldx","sldm","ppa","pps","pptm","powerpoint"],i[o.a[o.a.Word]]=["doc","dot","docx","docm","dotx","dotm","docb","word"],i[o.a[o.a.Photos]]=["jpg","png","jpeg","gif","svg","bmp","tif","tiff","heic"],i[o.a[o.a.Outlook]]=["msg","eml"],i[o.a[o.a.OneNote]]=["one"],i[o.a[o.a.Pdf]]=["pdf"],i[o.a[o.a.Audio]]=["mp3","m4a","wav","wma"],i[o.a[o.a.Text]]=["txt"],i[o.a[o.a.Fluid]]=["fluid","loop"],i[o.a[o.a.Stream]]=["mts","m2ts","ts","3g2","3gp","3gp2","3gpp","asf","wmv","avi","m4v","mov","mp4","mp4v","ogg","webm","movie","mkv","mpg","mpeg"],i[o.a[o.a.Whiteboard]]=["whiteboard"],i[o.a[o.a.MeetingNotes]]=["note"],i[o.a[o.a.Clipchamp]]=["clipchamp"],i[o.a[o.a.Link]]=["url"],i[o.a[o.a.Draft]]=["draft"],i}function c(e){return r||(r=function(){i||(i=a()),r={};var e=function(e){if(!i.hasOwnProperty(e))return"continue";var t=i[e];if(!t)return"continue";t.forEach(()};for(var t in i)e(t);return r}()),e&&r[e.toLowerCase()]||o.a.None}function s(e){return i||(i=a()),i[e]}},RAp9:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("6ib3"),r={none:i.a.None,excel:i.a.Excel,fluidapp:i.a.Fluid,forms:i.a.Forms,onenote:i.a.OneNote,powerpoint:i.a.PowerPoint,ppt:i.a.PowerPoint,stream:i.a.Stream,sway:i.a.Sway,visio:i.a.Visio,word:i.a.Word,playlist:i.a.PlayList,video:i.a.Stream,clipchamp:i.a.Clipchamp};,VOWq:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("QjXU"),r=n("Eac/");function o(e,t){return Object(i.__awaiter)(this,void 0,void 0,(function(){var n;return Object(i.__generator)(this,(function(o){switch(o.label){case 0:return n=Object(i.__read)(Object(r.b)(e),2),[4,window.crypto.subtle.decrypt({name:"AES-GCM",iv:n[0],tagLength:128},t,n[1])];case 1:return[2,o.sent()]}}))}))}},cHft:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("Dn7E"),r=function(e,t){var n;Object(i.a)({featureName:"Recommended",eventName:"Recommended_Parse_Error",params:(n={},n.DocumentId=e,n.Error=t,n)})},o=function(e){var t=e.itemId,n=e.sharepointInfo,i=e.url,o=e.webUrl;if(!e.isOneDriveForBusinessFile&&!e.isSharePointFile)return{enabled:!1};if(void 0===n)return r(t,"item is missing sharePoint Ids"),{enabled:!1};var a=!(!n.siteUrl||!i&&!o);return a||r(t,"Sharing disabled for item. siteUrl or URLs are missing"),{enabled:a,type:"Commercial",sharePointIds:n,url:null!=i?i:o}}},jwpY:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("QjXU"),r=n("kb6k"),o=n("lAHu");function a(e,t,n,a,c,s,u,d,l,f,p,m,b){void 0===p&&(p={});var v="cache-only"===m;v&&(f="None");var h=Object(i.__assign)(Object(i.__assign)({},c),{url:n,method:"POST",body:a});return Object(r.a)((function(n){return Object(o.a)(e,t,n,d,l,m,p.populateRequestEvent,p.onUploadProgress,p.onDownloadProgress,p.cancellationToken,p.timeoutInMs)}),e,t,h,s,u,f,p.mockParam,p.resourceUrl,p.rpsHeaderPrefix,p.additionalAuthErrors,p.isRetriableError,p.updateRequestWithAuth,v,void 0,void 0,b)}},k8cM:pXA3:function(e,t,n){"use strict";function i(e,t){var n=["RecommendedData",e];return t&&n.push(t),n}n.d(t,"a",(function(){return i}))},tUM7:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("QjXU"),r=n("Eac/");unction a(e,t){return Object(i.__awaiter)(this,void 0,void 0,(function(){var n,a;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return[4,Object(r.a)()];case 1:return n=i.sent(),[4,window.crypto.subtle.encrypt({name:"AES-GCM",iv:n,tagLength:128},t,e)];case 2:return a=i.sent(),[2,o(n.buffer,a)]}}))}))}},wRjz:function(e,t,n){"use strict";n.d(t,"a",();var i=n("QjXU"),r=n("tUM7"),o=n("VOWq"),a=n("HZp7");function c(e){var t=this;return{onBeforeWriteValue:function(n){return Object(i.__awaiter)(t,void 0,void 0,(function(){var t,o,c;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return n?n instanceof ArrayBuffer?(t=n,o="rawbytes",[3,3]):[3,1]:[2,n];case 1:return[4,Object(a.b)(JSON.stringify(n))];case 2:c=i.sent(),t=c.buffer,o="utf8-encoded-string",i.label=3;case 3:return[4,Object(r.a)(t,e)];case 4:return[2,{buffer:i.sent(),payloadType:o}]}}))}))},onAfterReadValue:function(n){return Object(i.__awaiter)(t,void 0,void 0,(function(){var t,r;return Object(i.__generator)(this,(function(i){switch(i.label){case 0:return n?[4,Object(o.a)(new Uint8Array(n.buffer),e)]:[2,n];case 1:return t=i.sent(),"rawbytes"!==n.payloadType?[3,2]:[2,t];case 2:return[4,Object(a.a)(new Uint8Array(t))];case 3:return r=i.sent(),[2,JSON.parse(r)]}}))}))}}}}}]);
//# sourceMappingURL=vendors~rf-dataprovider.a05f94fef16244c2a70f.chunk.v7.js.map