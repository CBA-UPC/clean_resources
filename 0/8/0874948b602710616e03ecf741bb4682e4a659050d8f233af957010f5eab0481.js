"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7473],{34585:2769:3526:45263:91170:9314:80033:57473:function(e,t,n){n.d(t,{ZP:function(){return PanelProvider},uR:function(){return usePanel}});var s=n(52322),i=n(2784),r=n(62671),o=n(2769),a=n(3526),l=n(45263),c=n(8583),d=n(42176),u=n(39708),m=n(68810),p=n(83122);ar v=n(13507),x=n(32517),h=n(18318),y=n(73235),j=n(66547);function _templateObject(){let e=(0,y._)(["\n    fragment GenerateCompanyAccountProspectsResult on GenerateCompanyAccountProspectsResult {\n  count\n}\n    "]);return _templateObject=function(){return e},e}let f=(0,j.ZP)(_templateObject());var g=n(26806);function generateCompanyAccountProspects_templateObject(){let e=(0,y._)(["\n    mutation GenerateCompanyAccountProspects($id: String!, $role: EnrichedProspectRole!) {\n  generateCompanyAccountProspects(id: $id, role: $role) {\n    ...GenerateCompanyAccountProspectsResult\n  }\n}\n    ",""]);return generateCompanyAccountProspects_templateObject=function(){return e},e}let b=(0,j.ZP)(generateCompanyAccountProspects_templateObject(),f);var w=n(43123);function getCompanyAccount_templateObject(){let e=(0,y._)(["\n    query GetCompanyAccount($id: String!, $showDemoData: Boolean) {\n  companyAccount(id: $id, showDemoData: $showDemoData) {\n    ...CompanyAccount\n  }\n}\n    ",""]);return getCompanyAccount_templateObject=function(){return e},e}let S=(0,j.ZP)(getCompanyAccount_templateObject(),w.h);function getCompanyAccountOverview_templateObject(){let e=(0,y._)(["\n    query GetCompanyAccountOverview($id: String!, $showDemoData: Boolean) {\n  companyAccountOverview(id: $id, showDemoData: $showDemoData) {\n    id\n    results {\n      totalDuration\n      totalSteps\n      totalSessions\n    }\n  }\n}\n    "]);return getCompanyAccountOverview_templateObject=function(){return e},e}let A=(0,j.ZP)(getCompanyAccountOverview_templateObject());function getLaunchpadCompanyAccountOverview_templateObject(){let e=(0,y._)(["\n    query GetLaunchpadCompanyAccountOverview($id: String!) {\n  launchpadCompanyAccountOverview(id: $id) {\n    id\n    results {\n      totalDuration\n      totalSteps\n      totalSessions\n    }\n  }\n}\n    "]);return getLaunchpadCompanyAccountOverview_templateObject=function(){return e},e}let N=(0,j.ZP)(getLaunchpadCompanyAccountOverview_templateObject());function listCompanyAccountDemos_templateObject(){let e=(0,y._)(["\n    query ListCompanyAccountDemos($id: String!, $showDemoData: Boolean) {\n  companyAccountDemos(id: $id, showDemoData: $showDemoData) {\n    id\n    results {\n      id\n      name\n      totalDuration\n      totalSteps\n    }\n  }\n}\n    "]);return listCompanyAccountDemos_templateObject=function(){return e},e}let P=(0,j.ZP)(listCompanyAccountDemos_templateObject());function enrichedProspect_templateObject(){let e=(0,y._)(["\n    fragment EnrichedProspect on EnrichedProspect {\n  id\n  name\n  role\n  title\n  seniority\n  email\n}\n    "]);return enrichedProspect_templateObject=function(){return e},e}let C=(0,j.ZP)(enrichedProspect_templateObject());function listCompanyAccountEnrichedProspects_templateObject(){let e=(0,y._)(["\n    query ListCompanyAccountEnrichedProspects($id: String!) {\n  companyAccountEnrichedProspects(id: $id) {\n    ...EnrichedProspect\n  }\n}\n    ",""]);return listCompanyAccountEnrichedProspects_templateObject=function(){return e},e}let D=(0,j.ZP)(listCompanyAccountEnrichedProspects_templateObject(),C);function prospectSlim_templateObject(){let e=(0,y._)(["\n    fragment ProspectSlim on Prospect {\n  id\n  firstName\n  lastName\n  email\n  photoUrl\n  createdAt\n}\n    "]);return prospectSlim_templateObject=function(){return e},e}let O=(0,j.ZP)(prospectSlim_templateObject());function listCompanyAccountProspects_templateObject(){let e=(0,y._)(["\n    query ListCompanyAccountProspects($id: String!) {\n  companyAccountProspects(id: $id) {\n    id\n    results {\n      id\n      prospect {\n        ...ProspectSlim\n      }\n      totalDuration\n    }\n  }\n}\n    ",""]);return listCompanyAccountProspects_templateObject=function(){return e},e}let _=(0,j.ZP)(listCompanyAccountProspects_templateObject(),O);function visitorSlim_templateObject(){let e=(0,y._)(["\n    fragment VisitorSlim on VisitorSlim {\n  id\n  name\n  email\n  companyDomain\n  mostRecentCountry\n  mostRecentCountryRegion\n  mostRecentCity\n}\n    "]);return visitorSlim_templateObject=function(){return e},e}let E=(0,j.ZP)(visitorSlim_templateObject());function listCompanyAccountVisitors_templateObject(){let e=(0,y._)(["\n    query ListCompanyAccountVisitors($id: String!, $showDemoData: Boolean) {\n  companyAccountVisitors(id: $id, showDemoData: $showDemoData) {\n    id\n    results {\n      id\n      visitor {\n        ...VisitorSlim\n      }\n      totalSteps\n      totalDuration\n    }\n  }\n}\n    ",""]);return listCompanyAccountVisitors_templateObject=function(){return e},e}let I=(0,j.ZP)(listCompanyAccountVisitors_templateObject(),E);function listLaunchpadCompanyAccountDemos_templateObject(){let e=(0,y._)(["\n    query ListLaunchpadCompanyAccountDemos($id: String!) {\n  launchpadCompanyAccountDemos(id: $id) {\n    id\n    results {\n      id\n      name\n      totalDuration\n      totalSteps\n    }\n  }\n}\n    "]);return listLaunchpadCompanyAccountDemos_templateObject=function(){return e},e}let k=(0,j.ZP)(listLaunchpadCompanyAccountDemos_templateObject());var V=n(47330),R=n(86414),F=n(46085),L=n(12298),M=n(45152),T=n(20851),$=n(56958),U=n(57643),Z=n(80033),q=n(64529);ar G=n(9314);let HeaderInfo=Info=et ActivityCardRowsLoading=ActivityCard=EmptyActivityCard=e=>{let{title:t}=e;return(0,s.jsx)("div",{className:"flex items-center justify-center p-4 text-center text-gray-500 md:p-6",children:(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("div",{className:"w-full max-w-2xl text-center text-sm text-gray-500",children:t})})})},SummaryCard=on People(e){let t=(0,L.Do)();return t?(0,s.jsx)(Prospects,{...e}):(0,s.jsx)(Visitors,{...e})}ction CompanyAccountSessionSummary(e){let{companyAccountId:t}=e,{workspace:n}=(0,M.cF)(),[i]=(0,U._)((0,v.$X)(n.id),!1),[{data:r,fetching:o}]=g.aM({query:A,variables:{id:t||"",showDemoData:i},pause:!t});return(0,s.jsx)(SessionSummary,{fetching:o,summary:null==r?void 0:r.companyAccountOverview})}function LaunchpadCompanyAccountSessionSummary(e){let{companyAccountId:t}=e,[{data:n,fetching:i}]=g.aM({query:N,variables:{id:t||""},pause:!t});return(0,s.jsx)(SessionSummary,{fetching:i,summary:null==n?void 0:n.launchpadCompanyAccountOverview})}function MainCompanyAccountSessionSummary(e){let{companyAccountId:t}=e,n=(0,L.Do)();return n?(0,s.jsx)(LaunchpadCompanyAccountSessionSummary,{companyAccountId:t}):(0,s.jsx)(CompanyAccountSessionSummary,{companyAccountId:t})}function LaunchpadCompanyAccountDemosActivity(e){var t,n;let{companyAccountId:i}=e,[{data:r,fetching:o}]=g.aM({query:k,variables:{id:i||""},pause:!i}),a=null!==(n=null==r?void 0:null===(t=r.launchpadCompanyAccountDemos)||void 0===t?void 0:t.results)&&void 0!==n?n:[];return(0,s.jsx)(DemosActivity,{fetching:o,demos:a})}function CompanyAccountDemosActivity(e){var t,n;let{companyAccountId:i}=e,{workspace:r}=(0,M.cF)(),[o]=(0,U._)((0,v.$X)(r.id),!1),[{data:a,fetching:l}]=g.aM({query:P,variables:{id:i||"",showDemoData:o},pause:!i}),c=null!==(n=null==a?void 0:null===(t=a.companyAccountDemos)||void 0===t?void 0:t.results)&&void 0!==n?n:[];return(0,s.jsx)(DemosActivity,{fetching:l,demos:c})}unction CompanyAccountEnrichedProspects(e){var t,n;let{companyAccount:i}=e,[{data:r,fetching:o}]=(n={variables:{id:i.id}},g.aM({query:D,...n})),a=null!==(t=null==r?void 0:r.companyAccountEnrichedProspects)&&void 0!==t?t:[],l=a.length>0;return(0,s.jsxs)("div",{className:"mt-2 space-y-4",children:[(0,s.jsx)(GenerateEnrichedProspectsForm,{companyAccount:i}),o?(0,s.jsx)(ActivityCardRowsLoading,{}):l?(0,s.jsx)(EnrichedProspectsList,{enrichedProspects:a}):(0,s.jsxs)("div",{className:"rounded-md border bg-gray-50 py-10 text-center text-sm font-medium text-gray-500",children:["Generate a list of prospects from ",i.name]})]})}let formatRole=H=Object.values(V.Uq).map(;ction listProspectDemos_templateObject(){let e=(0,y._)(["\n    query ListProspectDemos($id: String!) {\n  prospectDemos(id: $id) {\n    id\n    results {\n      id\n      name\n      totalDuration\n      totalSteps\n    }\n  }\n}\n    "]);return listProspectDemos_templateObject=function(){return e},e}let B=(0,j.ZP)(listProspectDemos_templateObject());unction listProspectSessions_templateObject(){let e=(0,y._)(["\n    query ListProspectSessions($id: String!) {\n  prospectSessions(id: $id) {\n    id\n    results {\n      id\n      createdAt\n      totalDuration\n      totalSteps\n    }\n  }\n}\n    "]);return listProspectSessions_templateObject=function(){return e},e}let W=(0,j.ZP)(listProspectSessions_templateObject());var z=n(59813);unction getProspectOverview_templateObject(){let e=(0,y._)(["\n    query GetProspectOverview($id: String!) {\n  prospectOverview(id: $id) {\n    id\n    results {\n      totalDuration\n      totalSteps\n      totalSessions\n    }\n  }\n}\n    "]);return getProspectOverview_templateObject=function(){return e},e}let K=(0,j.ZP)(getProspectOverview_templateObject()); Q=n(28909);function getProspect_templateObject(){let e=(0,y._)(["\n    query GetProspect($id: String!) {\n  prospect(id: $id) {\n    ...Prospect\n  }\n}\n    ",""]);return getProspect_templateObject=function(){return e},e}let X=(0,j.ZP)(getProspect_templateObject(),Q.z);et getValue=J=["Identified","Enriched","Tracking","Device","Other"],Y={Identified:["email","name","phone"],Enriched:["company.name","company.description","company.website_domain","company.linkedin_url","company.industry","company.employee_count","company.estimated_annual_revenue","company.city","company.state","company.country","company.postal_code","company.technologies","company.confidence_score"],Tracking:["referrer","utm_source","utm_medium","utm_campaign","utm_term","utm_content"],Device:["browser","os","screen_size"]},ee=["company"],et={Identified:e=>Y.Identified.includes(e),Enriched:Tracking:Other:,en={os:"OS"},formatName=formatBrowser=formatScreenSize=var es=n(78991et isConversionEventTypk,ei={[V.tw.Navigate]:(0,s.jsx)(c.lDB,{}),[V.tw.Converted]:(0,s.jsx)(c.U65,{}),[V.tw.Engage]:(0,s.jsx)(c.U65,{}),[V.tw.CompleteFlow]:(0,s.jsx)(c.nQG,{}),[V.tw.CompleteTask]:(0,s.jsx)(c.nQG,{}),[V.tw.CloseChecklist]:(0,s.jsx)(c.nQG,{}),[V.tw.IdentifyUser]:(0,s.jsx)(c.U65,{}),[V.tw.StartFlow]:(0,s.jsx)(c.Dx1,{}),[V.tw.OpenChecklist]:(0,s.jsx)(c.U65,{}),[V.tw.StartChecklist]:(0,s.jsx)(c.U65,{}),[V.tw.ViewStep]:(0,s.jsx)(c.tEF,{})},er={[V.tw.Navigate]:"Navigated to URL",[V.tw.Converted]:"Marked as converted",[V.tw.Engage]:"Marked as engaged",[V.tw.CompleteFlow]:"Completed flow",[V.tw.CompleteTask]:"Compeleted task",[V.tw.CloseChecklist]:"Closed checklist",[V.tw.IdentifyUser]:"Identified user",[V.tw.StartFlow]:"Started flow",[V.tw.OpenChecklist]:"Opened checklist",[V.tw.StartChecklist]:"Started checklist",[V.tw.ViewStep]:"Viewed step"})}function listVisitorDemos_templateObject(){let e=(0,y._)(["\n    query ListVisitorDemos($id: String!, $showDemoData: Boolean) {\n  visitorDemos(id: $id, showDemoData: $showDemoData) {\n    id\n    results {\n      id\n      name\n      totalDuration\n      totalSteps\n    }\n  }\n}\n    "]);return listVisitorDemos_templateObject=function(){return e},e}let eo=(0,j.ZP)(listVisitorDemos_templateObje:c})}function listVisitorSessions_templateObject(){let e=(0,y._)(["\n    query ListVisitorSessions($id: String!, $showDemoData: Boolean) {\n  visitorSessions(id: $id, showDemoData: $showDemoData) {\n    id\n    results {\n      id\n      createdAt\n      totalDuration\n      totalSteps\n    }\n  }\n}\n    "]);return listVisitorSessions_templateObject=function(){return e},e}let ea=(0,j.ZP)(listVisitorSessions_templateObje)})}function getVisitorOverview_templateObject(){let e=(0,y._)(["\n    query GetVisitorOverview($id: String!, $showDemoData: Boolean) {\n  visitorOverview(id: $id, showDemoData: $showDemoData) {\n    id\n    results {\n      totalDuration\n      totalSteps\n      totalSessions\n    }\n  }\n}\n    "]);return getVisitorOverview_templateObject=function(){return e},e}let el=(0,j.ZP)(getVisitorOverview_templateObjeew})}function endUserAttribute_templateObject(){let e=(0,y._)(["\n    fragment EndUserAttribute on EndUserAttribute {\n  id\n  createdAt\n  updatedAt\n  name\n  source\n  dataType\n  valueString\n  valueBool\n  valueNumber\n  valueJSON\n  valueDateTime\n}\n    "]);return endUserAttribute_templateObject=function(){return e},e}let ec=(0,j.ZP)(endUserAttribute_templateObject());function guideSessionSlim_templateObject(){let e=(0,y._)(["\n    fragment GuideSessionSlim on RecordedGuideSessionSlim {\n  id\n  createdAt\n  updatedAt\n  browser\n  browserVersion\n  device\n  os\n  screenHeight\n  screenWidth\n  referrer\n  searchEngine\n  searchKeyword\n  gclid\n  country\n  countryRegion\n  city\n}\n    "]);return guideSessionSlim_templateObject=function(){return e},e}let ed=(0,j.ZP)(guideSessionSlim_templateObject());function recordedEvent_templateObject(){let e=(0,y._)(["\n    fragment RecordedEvent on RecordedEvent {\n  id\n  type\n  createdAt\n  recordedStepId\n  recordedStepIndex\n  recordedStepCommonId\n  recordedStepName\n  recordedFlowId\n  recordedFlowName\n  recordedProjectId\n  recordedProjectName\n  recordedChecklistId\n  recordedChecklistName\n  urlNavigated\n}\n    "]);return recordedEvent_templateObject=function(){return e},e}let eu=(0,j.ZP)(recordedEvent_templateObjee},e}let em=(0,j.ZP)(visitor_templateObject(),w.h,ec,ee},e}let ep=(0,j.ZP)(getVisitor_templateObject(),em);var ev=n(e},e}let ex=(0,j.ZP)(guideSession_templateObjee},e}let eh=(0,j.ZP)(listVisitorSessionEvents_templateObject(),ex,ec,eu),VisitorSe]})}let formatVisitorLoc,n)}let ey=(0,i.createContext)({openCompanyPanel:()=>{},openPerson)=)]})}let use)(ey)},me)}},61543:function(e,t,n){n.d(t,{I8:function(){return formatReviewShareLink},Lp:function(){return removeStartSlash},U4:function(){return previewFlowUrl},V7:function(){return formatURLForDisplay},fJ:function(){return projectPlayerUrl},fP:function(){return formatShareLinkWithPath},fy:function(){return i},s1:function(){return replaceSubdomainInHost},wn:function(){return removeHttpFromUrl}});var s,i,r=n(42906),o=n(1991);n(16377);let previewFlowUrl=(e,t)=>"".concat((0,o.e9)({flow_id:e}),"?s=").concat(null!=t?t:0),projectPlayat(e),replaceSubdomainIt}))},formatURLForDi/,""),removeWWWFr",""),removeHttpFr","");(s=i||(i={})).G2="g2",s.TrustRadius="trustRadius",s.Capterra="capterra",s.Gartner="gartner";let formatReviewShar1):e}let formatShareLinkWit(n))}},tion},".")}}]);
//# sourceMappingURL=7473-c3f30db395e89751.js.map