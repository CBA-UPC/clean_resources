(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[146],{aVUP:function(a,e,t){"use strict";t.r(e),t.d(e,"ashaReady",(function(){return g})),t.d(e,"initializeAshaForFluid",(function(){return w})),t.d(e,"shutdownAshaForFluid",(function(){return x})),t.d(e,"updateAshaAdditionalPartCEventDataFromTelemetryProperties",(function(){return D})),t.d(e,"handleAshaEvent",();const n={partAMetadata:{},ariaTenantPrefix:"",ariaHeartbeatTenantPrefix:"",isAshaEnabled:!1,isHeartbeatEventEnabled:!1,additionalPartCEventData:{},heartbeatIntervalMs:18e5,pillarIntervalMs:864e5,disabledAshaErrors:[],sendTelemetryEventCallback:;var r=t("3M/p");const i={dataCategories:2,diagnosticLevel:110};let s=[],o=[];function l(){o=[];for(const a in n.additionalPartCEventData)o.push({name:a,dataType:0,value:n.additionalPartCEventData[a].toString()})}function d(a,e){T&&n.isAshaEnabled&&n.sendTelemetryEventCallback({eventName:a,eventContract:{name:"AshaPartAMetadata",dataFields:s},dataFields:[...e,...o],eventFlags:i})}const u=new Set;let v=0,c=0;function E(a){T&&n.isAshaEnabled&&(v=Date.now(),d(`${n.ariaTenantPrefix}.Asha.Pillars`,[Object(r.d)("Pillars",a?a.toString():[...u].join(","))]))}function p(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.pillarIntervalMs;c=window.setTimeout((()=>{u.size>0&&E(),p()}),a)}let h=0;function f(){T&&n.isAshaEnabled&&n.isHeartbeatEventEnabled&&0!==u.size&&d(`${n.ariaHeartbeatTenantPrefix}.Asha.Heartbeat`,[Object(r.d)("Pillars",[...u].join(","))])}function b(){n.isHeartbeatEventEnabled&&0===h&&A()}unction A(){f(),h=window.setTimeout((,n.heartbeatIntervalMs)}let P,T=!1;function I(){T&&n.isAshaEnabled&&(function(a){y(),n.isAshaEnabled=!1}(),),T=!1)}function M(a){n.additionalPartCEventData&&function(a,e){const t=Object.keys(a),n=Object.keys(e);return t.length===n.length&&t.every(()&&t.every(()}(n.additionalPartCEventData,a)||(n.additionalPartCEventData=Object.assign(Object.assign({},n.additionalPartCEventData),a),l(),f(),E())}function y(){m(),)}const C=()=>new Promise(();let g=C();const w=(a,e,t)=>{!function(a){var e,t,r,i;!T&&a&&a.partAMetadata&&a.ariaTenantPrefix&&a.ariaHeartbeatTenantPrefix&&a.sendTelemetryEventCallback&&(n.partAMetadata=a.partAMetadata,n.ariaTenantPrefix=a.ariaTenantPrefix,n.ariaHeartbeatTenantPrefix=a.ariaHeartbeatTenantPrefix,n.isAshaEnabled=a.isAshaEnabled,n.isHeartbeatEventEnabled=a.isHeartbeatEventEnabled,n.additionalPartCEventData=null!==(e=a.additionalPartCEventData)&&void 0!==e?e:n.additionalPartCEventData,n.heartbeatIntervalMs=null!==(t=a.heartbeatIntervalMs)&&void 0!==t?t:n.heartbeatIntervalMs,n.pillarIntervalMs=null!==(r=a.pillarIntervalMs)&&void 0!==r?r:n.pillarIntervalMs,n.disabledAshaErrors=null!==(i=a.disabledAshaErrors)&&void 0!==i?i:n.disabledAshaErrors,n.sendTelemetryEventCallback=a.sendTelemetryEventCallback,function(){s=[];for(const a in n.partAMetadata)s.push({name:a,dataType:0,value:n.partAMetadata[a].toString()})}(),l(),T=!0)}({ariaHeartbeatTenantPrefix:a,ariaTenantPrefix:a,isAshaEnabled:!0,isHeartbeatEventEnabled:!0,sendTelemetryEventCallback:t,partAMetadata:{},additionalPartCEventData:H(e)}),P()},x=()=>g.then((()=>{I(),g=C()})),D=a=>g.then((),S=async a=>{const{props:e}=a;switch(e.eventName){case"AshaPillarAdd":return(a=>g.then((()=>function(a){if(!T||!n.isAshaEnabled||!a||u.has(a))return;const e=0===u.size;u.add(a),e?function(){T&&n.isAshaEnabled&&(b(),function(){if(0===c)if(0===v)p();else{const a=Date.now()-v;n.pillarIntervalMs&&a>=n.pillarIntervalMs||a<=0?(E(),p()):n.pillarIntervalMs&&p(n.pillarIntervalMs-a)}}())}():f(),E(a)}(a.props.pillar))))(a);case"AshaPillarRemove":return(a=>g.then((()=>function(a){T&&n.isAshaEnabled&&a&&u.has(a)&&(u.delete(a),E(a),f(),0===u.size&&y())}(a.props.pillar))))(a);case"AshaError":return(a=>{const{props:e}=a,{errorName:t,veto:r,pillar:i,durationMs:s,inStaging:o,isIntentional:l,isInternal:v,isSessionEndingError:c,...p}=e;return g.then((()=>{M(H(p)),function(a){var e;if(!(T&&n.isAshaEnabled&&a&&a.errorName))return;if(n.disabledAshaErrors)for(const e of n.disabledAshaErrors)if(e.vetoName){if(e.vetoName.toLowerCase()===a.veto.name.toLowerCase()&&e.errorName.toLowerCase()===a.errorName.toLowerCase())return}else if(e.errorName.toLowerCase()===a.errorName.toLowerCase())return;const t=[{name:"Pillar",dataType:0,value:a.veto.pillar},{name:"Veto",dataType:0,value:a.veto.name},{name:"InStaging",dataType:1,value:null===(e=a.inStaging)||void 0===e||e}];if(void 0!==a.isIntentional&&t.push({name:"IsIntentional",dataType:1,value:a.isIntentional}),void 0!==a.isInternal&&t.push({name:"IsInternal",dataType:1,value:a.isInternal}),void 0!==a.durationMs&&t.push({name:"DurationMs",dataType:3,value:a.durationMs}),void 0!==a.isSessionEndingError&&t.push({name:"IsSessionEndingError",dataType:1,value:a.isSessionEndingError}),void 0!==a.extendedProperties)for(const e in a.extendedProperties)t.push({name:`ExtendedProperties_${e}`,dataType:0,value:a.extendedProperties[e].toString()});u.has(a.veto.pillar)?d(`${n.ariaTenantPrefix}.Asha.Error.${a.errorName}`,t):(t.push({name:"Error",dataType:0,value:a.errorName}),t.push({name:"FailureReason",dataType:0,value:"Inactive Pillar"}),d(`${n.ariaTenantPrefix}.Asha.ApiError.DroppedErrors`,t)),a.isSessionEndingError&&(E(),I())}({errorName:t,veto:{name:r,pillar:i},durationMs:s,inStaging:o,isIntentional:l,isInternal:v,isSessionEndingError:c})}))})(a)}},N=["containerType","hostCorrelationId","hostName","hostScenarioName"],H=a=>{const e={};for(const t of N){const n=a[t];void 0!==n&&"object"!=typeof n&&(e[t]=n)}return e}}}]);
//# sourceMappingURL=ashautils.8baa7fa488bffa984859.chunk.v7.js.map