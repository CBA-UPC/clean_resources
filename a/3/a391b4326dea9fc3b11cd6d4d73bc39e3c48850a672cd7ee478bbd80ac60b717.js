(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[730],{"/1bu":function(e,t,a){"use strict";a.r(t),a.d(t,"advanceState",(function(){return n.a})),a.d(t,"getUploadStateMetrics",(function(){return r.a})),a.d(t,"useUploadCallback",(function(){return o.a})),a.d(t,"useUploadErrorDialog",(function(){return u.a})),a.d(t,"useUploadFile",(function(){return c.a})),a.d(t,"useUploadFileDirect",(function(){return U})),a.d(t,"useUploadState",(function(){return f.a})),a.d(t,"useV2UploadCallback",(function(){return b.a})),a.d(t,"executeLargeUploadFlow",(function(){return m.a})),a.d(t,"executeSimpleRetryUploadFlow",(function(){return j.a})),a.d(t,"executeSimpleUploadFlow",(function(){return v.a})),a.d(t,"executeUploadFlow",(function(){return O.a})),a.d(t,"fetchUploadConfig",(function(){return w})),a.d(t,"UploadContext",();var n=a("zIbX"),r=a("/9Rm"),o=a("LHhM"),u=a("6EQ0"),c=a("68nG"),d=a("6ib3"),l=a("xvrq"),i=a("d1AP"),s=a("mXGw"),p=a("Ug56"),f=a("svnf"),U=function(){var e=Object(f.a)(),t=e.addFileUploadState,a=e.setShowUploadFileUnsupportedDialog,n=e.uploadState,r=Object(p.a)();return Object(s.useCallback)((function(e){var o=e.area,u=e.file,c=e.source;u&&(r(u.name)!==d.a.None?t({sequenceNumber:n.nextSequenceNumber,file:u,uploadStatus:i.d.Started,progress:0,cancellationToken:Object(l.a)(),telemetry:{area:o,source:c}}):a(!0))}),[t,r,a,n.nextSequenceNumber])},b=a("V+NM"),m=a("UKGo"),j=a("k34z"),v=a("8mU8"),O=a("bcvx"),S=a("28zg"),g=a("9pOv"),w=F=a("AeLC")},"/9Rm":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("QjXU"),r=a("d1AP");function o(e){var t={totalConfirmedUploads:0,queuedUploads:0,inProgressUploads:0,failedUploads:0,canceledUploads:0,completedUploads:0,unsupportedUploads:0,endStateUploads:0};return e&&Object.entries(e).length>0&&Object.entries(e).forEach((function(e){var a=Object(n.__read)(e,2)[1];switch(a.uploadStatus){case r.d.Completed:t.completedUploads++,t.endStateUploads++;break;case r.d.Failed:t.failedUploads++,t.endStateUploads++;break;case r.d.Cancelled:t.canceledUploads++,t.endStateUploads++;break;case r.d.Unsupported:t.unsupportedUploads++,t.endStateUploads++;break;case r.d.Queued:t.queuedUploads++;break;case r.d.Uploading:t.inProgressUploads++}a.uploadStatus!==r.d.Started&&t.totalConfirmedUploads++})),t}},AeLC:Ug56:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("6ib3"),r=a("+jQL"),o=a("mXGw"),u=a("MhuU"),c=function(){var e,t=null===(e=Object(u.a)())||void 0===e?void 0:e.data;return Object(o.useCallback)((function(e){if(!t||!e)return n.a.None;var a=e&&Object(r.a)(e);return a&&t.uploadFileTypes.has(a)?a:n.a.None}),[t])}},"V+NM":function(e,t,a){"use strict";a.d(t,"a",();var n=a("QjXU"),r=a("6ib3"),o=a("PZ4A"),u=a("xvrq"),c=a("Dn7E"),d=a("d1AP"),l=a("mXGw"),i=a("BCEv"),s=a("RYUs"),p=a("5Ulw"),f=a("Ug56"),U=a("MhuU"),b=a("svnf");function m(e){var t=e.area,a=e.source,m=e.version,j=Object(U.a)().data,v=Object(f.a)(),O=Array.from((null==j?void 0:j.uploadFileTypes.values())||[]).map((function(e){return Object(o.a)(e)||[]})).reduce((,[]).filter(().map((),S=Object(b.a)(),g=S.uploadState,w=S.addFileUploadState,F=S.setShowUploadFileUnsupportedDialog,_=Object(n.__read)(Object(i.useFilePicker)({multiple:!1,accept:O,readAs:"ArrayBuffer"}),4),N=_[0],h=_[1],k=_[2],C=_[3];return Object(l.useEffect)((function(){var e,o,l=Object(s.a)(a,m);if(h.length&&Object(c.a)({featureName:"Upload",eventName:"File_Picker_Error",params:Object(n.__assign)(Object(n.__assign)({},l),(e={},e.Error=Object(p.a)(h),e))}),(!h||!h.length)&&N&&N.length&&N[0]&&!C){var i=N[0],f=i.name,U=i.content,b=v(f);if(b===r.a.None)F(!0),Object(c.a)({featureName:"Upload",eventName:"Unsupported_File_Type",params:l});else{var j=new Blob([U],{type:"text/plain"}),O=new File([j],f);O&&(w({sequenceNumber:g.nextSequenceNumber,file:O,uploadStatus:d.d.Started,progress:0,cancellationToken:Object(u.a)(),telemetry:{area:t,source:null!=a?a:d.c.Button,version:m}}),Object(c.a)({featureName:"Upload",eventName:"File_Selected",params:Object(n.__assign)(Object(n.__assign)({},l),(o={},o.DocumentType=b,o.Area=t,o))}))}}}),[h,N,v,C,w,F,t]),Object(l.useMemo)((,[k])}}}]);
//# sourceMappingURL=730.b4cd6869bc49130e06a0.chunk.v7.js.map