(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5469,2347],{45901:1991:function(t,e,r){"use strict";r.d(e,{$T:function(){return apiProjectVersionIdRoute},C2:function(){return apiAuthSsoAuditPortalRoute},CW:function(){return apiGuideVisitorsRoute},T6:function(){return apiIntegrationSalesforceSobjectsRoute},ZA:function(){return apiIntegrationMarketoProgramsRoute},e9:function(){return previewFlowFlowIdRoute},g5:function(){return apiAuthSsoPortalRoute},g9:function(){return apiIntegrationMarketoFieldsRoute},h7:function(){return apiEnrichmentRoute},iu:function(){return apiGuideTimeMeasurementsRoute},nt:function(){return previewCaptureIdRoute},p3:function(){return previewProjectIdRoute},u4:function(){return apiEdgeExportVisitorsRoute},xH:);let previewProjectIdRoute=previewFlowFlowIdRoute=t=>{let{flow_id:e}=t;return"/preview/flow/".concat(e)},previewCaptureIdRoute=t=>{let{id:e}=t;return"/preview/capture/".concat(e)},apiProjectVersionIdRoute=t=>{let{id:e}=t;return"/api/project-version/".concat(e)},apiGuideVisitorsRoute=()=>"/api/guide/visitors",apiGuideTimeMeasurementsRoute=()=>"/api/guide/time-measurements",apiEnrichmentRoute=()=>"/api/enrichment",apiIntegrationSalesforceSobjectsRoute=()=>"/api/integration/salesforce/sobjects",apiIntegrationMarketoProgramsRoute=()=>"/api/integration/marketo/programs",apiIntegrationMarketoFieldsRoute=()=>"/api/integration/marketo/fields",apiEdgeExportVisitorsRoute=()=>"/api/edge/export/visitors",apiEdgeExportAccountsRoute=()=>"/api/edge/export/accounts",apiAuthSsoPortalRoute=()=>"/api/auth/sso/portal",apiAuthSsoAuditPortalRoute=,46085:42906:47147:function(t,e,r){"use strict";r.d(e,{E3:function(){return cacheProjectGuides},GG:function(){return fetchProject},Gt:function(){return fetchGuide},MH:function(){return isPasscodeProtected},YO:function(){return isPublishedChecklist},aV:function(){return loadFlowCaptures},fi:function(){return formatGuideResponse},pw:function(){return isPublishedFlow},r1:function(){return preloadStartFlowsFromChecklistTasks},vc:function(){return isPasscodeProtectedProject}});var o=r(47330),i=r(22146),n=r(20851),a=r(83408),s=r(23712);let u=new Map,c=new Map,isPublishedFlow=t=>"FLOW"===t.type,isPublishedChecklist=isPasscodeProtected=formatGuideResponse=cacheProjectGuides=isPasscodeProtectedProject=fetchProject=fetchGuide=t l=new Set,loadFlowCaptures=async function loadStartFlowsFromActions(t){for(let e of t){if(e.type!==o.yo.StartFlow||!e.startFlowId)continue;let t=await fetchGuide(e.startFlowId);(null==t?void 0:t.type)===o.De.Flow&&loadFlowCaptures(t.published)}}async function preloadStartFlowsFromChecklistTasks(t){var e;(null==t?void 0:null===(e=t.published)||void 0===e?void 0:e.tasks)&&function(t){if(t)for(let e of t)e.actions&&loadStartFlowsFromActions(e.actions)}(t.published.tasks)}},60028:]);
//# sourceMappingURL=5469.4d3ae3c3c4317947.js.map