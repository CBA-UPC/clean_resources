"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4766],{12659:64766:function(e,t,n){n.d(t,{Z:function(){return IntegrationDisplay}});var a=n(52322),r=n(2784),s=n(18406),i=n(31455),o=n(81291),l=n(73235),c=n(66547),d=n(91210),m=n(26806);function _templateObject(){let e=(0,l._)(["\n    mutation UpdateWebhookActive($id: String!, $active: Boolean!) {\n  updateWebhookActive(id: $id, active: $active) {\n    ...Webhook\n  }\n}\n    ",""]);return _templateObject=function(){return e},e}let u=(0,c.ZP)(_templateObject(),d.$);var h=n(27364),p=n(45152),b=n(77512),v=n(96577),f=n.n(v);ar x=n(83122);ar g=n(6676),j=n.n(g),_=n(8583),y=n(32517),w=n(52934),N=n(47330);let sendTestEvent=var S=n(89747);let sampleBaseEvent=e=>({id:"test_event_id",type:e,createdAt:new Date,uniqueDeviceId:"test_unique_device_id",customerId:"test_customer_id",sessionId:"test_session_id",flow:{id:"test_flow_id",name:"Test flow"},step:{indx:0,id:"test_step_id",name:"The first step"},project:{id:"test_project_id",name:"Sample project name"},projectVersionId:void 0,path:"/r/aww",clientSideMetadata:{os:"Mac OS X",browser:"Chrome",referrer:"https://navattic.com",referring_domain:"navattic.com",device:"Macbook Pro",current_url:"https://navattic.com",search_engine:"Google",browser_version:"1.0",host:"navattic.com",search_keyword:"navattic",screen_height:1e3,screen_width:1e3,pathname:"/test",query_strings:{},gclid:"1234"},eventAttributes:(0,S.n)()}),sampleViewStepEvent=sampleChecklistEvent=e=>({...sampleBaseEvent(e),checklist:{id:"test_checklist_id",name:"Test checklist"}}),sampleTaskEvent=sampleIdUserEventData=sampleNavigateEvent=e=>({...sampleBaseEvent(e),url:"https://my.product.com"}),sampleEventFromType=var Configuration_WebhookEventTable=k=n(56958),E=n(70805),T=n(58389),I=n(8339),C=n(84038),A=n(4652),O=n(69260);let ProjectConnectionCard=e=>{var t;let{project:n,webhook:r}=e,[{data:s}]=(0,I.Y)({variables:{projectId:null==n?void 0:n.id}}),[,i]=(0,T.k)(),o=null==s?void 0:null===(t=s.projectWebhooks)||void 0===t?void 0:t.some(e=>e.format===r.format),onChange=async e=>{let t=null==r?void 0:r.id,a=e?{connectWebhookId:t}:{disconnectWebhookId:t},s=e?"Connecting ".concat(n.name,"..."):"Disconnecting ".concat(n.name,"..."),o=e?"Connected ".concat(n.name):"Disconnected ".concat(n.name);k.A.promise(i({projectId:null==n?void 0:n.id,...a}),{loading:s,success:o,error:e=>e})},l="project-".concat(n.id);return(0,a.jsxs)("div",{className:"relative flex items-start py-4",children:[(0,a.jsx)("div",{className:"flex min-w-0 flex-1 items-center text-base",children:(0,a.jsx)("label",{htmlFor:l,className:"label-base mb-0 select-none text-base font-normal text-gray-500",children:n.name})}),(0,a.jsx)("div",{className:"ml-3 flex h-6 items-center",children:(0,a.jsx)(b.XZ,{name:l,checked:o||!1,onChange:onChange})})]})};var Tabs_ConnectedProjects=M=n(37100);function deleteWebhook_templateObject(){let e=(0,l._)(["\n    mutation DeleteWebhook($id: String!) {\n  deleteWebhook(id: $id) {\n    ...Webhook\n  }\n}\n    ",""]);return deleteWebhook_templateObject=function(){return e},e}let L=(0,c.ZP)(deleteWebhook_templateObject(),d.$);var W=n(86414),P=n(12659);function IntegrationConnected(e){let{webhook:t,integrationSettings:n,clientId:r}=e,[,s]=m.Db(L),{workspace:i}=(0,p.cF)(),{name:o,screenshot:l}=n,confirmedDelete=async()=>{confirm("Are you sure you want to disconnect the Navattic integration?")&&k.A.promise(s({id:t.id}).then(,{loading:"Disconnecting...",success:"Disconnected ".concat(o," integration"),error:)};return(0,a.jsxs)("div",{className:"mx-auto max-w-lg rounded border",children:[(0,a.jsx)("div",{className:"relative py-3",children:(0,a.jsx)("div",{className:"mx-auto flex w-fit rounded-2xl bg-gradient-to-b from-gray-100/50 to-gray-200/50 p-2 ",children:(0,a.jsx)("div",{className:"relative w-full overflow-hidden rounded-lg border",children:(0,a.jsx)("div",{className:"h-[160px] w-[310px]",children:(0,a.jsx)(f(),{alt:"".concat(o," dashboard"),src:l,fill:!0,style:{objectFit:"cover",objectPosition:"top left"},priority:!0})})})})}),(0,a.jsxs)("div",{className:"flex justify-between border-t bg-gray-50 px-5 py-4",children:[(0,a.jsxs)("div",{className:"flex items-center text-base font-medium leading-none text-gray-800",children:[(0,a.jsxs)("span",{children:["Connected to ",o]}),(0,a.jsx)(_.XfM,{className:"ml-2 h-4 w-4 flex-shrink-0 text-blue-500"})]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[n.allowReAuth&&(0,a.jsx)("button",{className:"btn-gray-border bg-white px-3 py-1.5 text-sm hover:text-blue-400 hover:shadow-sm",onClick:children:"Update"}),(0,a.jsx)("button",{className:"btn-gray-border bg-white px-3 py-1.5 text-sm hover:text-rose-900 hover:shadow-sm",onClick:confirmedDelete,children:"Disconnect"})]})]})]})}var TestIntegrationConnection=e=>{let{webhook:t,integrationSettings:n}=e,{Logo:s,name:i}=n,[o,l]=(0,r.useState)(""),[c,d]=(0,r.useState)("navattic-example@email.com"),[m,u]=(0,r.useState)("Example User"),[h,p]=(0,r.useState)("Navattic Example"),[v,f]=(0,r.useState)(!1),onSubmit=async e=>{e.preventDefault(),f(!0),l("");let n=(0,S.n)(),a={...sampleBaseEvent(N.tw.IdentifyUser),eventAttributes:{...n,[N.eT.Form]:{"user.email":c,"user.fullName":m,"company.name":h,"company.linkedinUrl":"https://www.linkedin.com/company/navattic/","company.websiteDomain":"https://navattic.com/".concat(j()()),"company.description":"Example description here!","company.employeeCount":100}}};k.A.promise(sendTestEvent(t,a).then(()=>(a.step.id+=1,a.type=N.tw.ViewStep,sendTestEvent(t,a))),{loading:"Sending to ".concat(i,"..."),success:"Successfully sent to ".concat(i),error:),f(!1)};return t?(0,a.jsxs)("div",{className:"mx-auto max-w-md",children:[o&&(0,a.jsx)("div",{className:"mb-5 flex w-full rounded-md border bg-gray-50 px-3 py-2 text-sm text-rose-900",children:(0,a.jsxs)("span",{children:["Error: ",o]})}),(0,a.jsxs)("form",{onSubmit:onSubmit,className:"grid gap-y-3",children:[(0,a.jsx)(b.oi,{className:"w-full",labelText:"Example name",name:"name",value:m,onChange:u}),(0,a.jsx)(b.oi,{className:"w-full",labelText:"Example email",name:"email",value:c,onChange:d}),(0,a.jsx)(b.oi,{labelText:"Example company",className:"w-full",name:"company",value:h,onChange:p}),(0,a.jsxs)("button",{disabled:v,className:"btn-white mt-2 justify-center bg-white font-medium shadow",type:"submit",children:[(0,a.jsx)(s,{className:"mr-2 h-4 w-4"}),"Send test event"]})]})]}):null};ar U=n(89623),F=n(43913),D=n(68810),R=n(53430);et $=(0,c.ZP)(webhookLog_templateObject());et Z=(0,c.ZP)(listWebhookLogs_templateObject(),$);var V=n(65054);let H={[N.Cb.Debug]:"bg-sky-500",[N.Cb.Info]:"bg-slate-300",[N.Cb.Warn]:"bg-amber-500",[N.Cb.Error]:"bg-rose-500"};8406:70805:31455:37100:81291:91210:58389:function(e,t,n){n.d(t,{k:function(){return useUpdateProjectWebhooksMutation}});var a=n(73235),r=n(66547),s=n(91210),i=n(26806);function _templateObject(){let e=(0,a._)(["\n    mutation UpdateProjectWebhooks($projectId: String!, $connectWebhookId: String, $disconnectWebhookId: String) {\n  updateProjectWebhooks(\n    projectId: $projectId\n    connectWebhookId: $connectWebhookId\n    disconnectWebhookId: $disconnectWebhookId\n  ) {\n    ...Webhook\n  }\n}\n    ",""]);return _templateObject=function(){return e},e}let o=(0,r.ZP)(_templateObject(),s.$);function useUpdateProjectWebhooksMutation(){return i.Db(o)}},52934:8339:function(e,t,n){n.d(t,{Y:function(){return useGetProjectWebhooksQuery}});var a=n(73235),r=n(66547),s=n(91210),i=n(26806);function _templateObject(){let e=(0,a._)(["\n    query GetProjectWebhooks($projectId: String!) {\n  projectWebhooks(projectId: $projectId) {\n    ...Webhook\n  }\n}\n    ",""]);return _templateObject=function(){return e},e}let o=(0,r.ZP)(_templateObject(),s.$);function useGetProjectWebhooksQuery(e){return i.aM({query:o,...e})}},27364:4652:13077:81571:function(e,t,n){n.d(t,{Ul:function(){return i},yd:function(){return r}});var a,r,s=n(73022);(a=r||(r={})).ContactsWrite="crm.objects.contacts.write",a.ContactsRead="crm.objects.contacts.read",a.CompaniesWrite="crm.objects.companies.write",a.CompaniesRead="crm.objects.companies.read",a.ContactsSchemaWrite="crm.schemas.contacts.write",a.ContactsSchemaRead="crm.schemas.contacts.read",a.Timeline="timeline";let i={fieldMappings:{},pushCompany:!1};s.HY.FIRST_NAME,s.HY.LAST_NAME,s.HY.FIRST_NAME,s.HY.LAST_NAME,s.HY.FIRST_NAME,s.HY.LAST_NAME},73022:function(e,t,n){n.d(t,{HY:function(){return l},Rz:function(){return i},VG:function(){return d},zt:function(){return o}});var a,r,s,i,o,l,c=n(21254);(a=i||(i={})).FLOW_ID="Last Viewed Flow ID",a.FLOW_TITLE="Last Viewed Flow Title",a.PROJECT_ID="Last Viewed Project ID",a.PROJECT_TITLE="Last Viewed Project Title",a.STEP_ID="Last Viewed Flow Step ID",a.STEP_NUMBER="Last Viewed Flow Step Number",a.STEP_TITLE="Last Viewed Flow Step Title",a.SESSION_ID="Session ID",a.CHECKLIST_NAME="Checklist Name",a.UTM_CAMPAIGN="UTM Campaign",a.UTM_CONTENT="UTM Content",a.UTM_MEDIUM="UTM Medium",a.UTM_SOURCE="UTM Source",a.UTM_TERM="UTM Term",a.BROWSER="Browser",a.CURRENT_URL="Current URL",a.PATH="Path",a.SCREEN_WIDTH="Screen Width",a.SCREEN_HEIGHT="Screen Height",a.DEVICE="Device",a.OS="Operating System",a.NAME="Visitor Name",a.FIRST_NAME="Visitor First Name",a.LAST_NAME="Visitor Last Name",(r=o||(o={})).STRING="String",r.NUMBER="Number",(s=l||(l={})).FLOW_ID="navattic_last_viewed_flow_id",s.FLOW_TITLE="navattic_last_viewed_flow",s.STEP_ID="navattic_last_viewed_step_id",s.STEP_TITLE="navattic_last_viewed_step",s.STEP_NUMBER="navattic_last_viewed_step_number",s.PROJECT_ID="navattic_last_viewed_step_project_id",s.PROJECT_TITLE="navattic_last_viewed_step_project",s.SESSION_ID="session_id",s.CHECKLIST_NAME="checklist_name",s.UTM_CAMPAIGN="utm_campaign",s.UTM_CONTENT="utm_content",s.UTM_MEDIUM="utm_medium",s.UTM_SOURCE="utm_source",s.UTM_TERM="utm_term",s.BROWSER="browser",s.CURRENT_URL="current_url",s.PATH="path",s.SCREEN_WIDTH="screen_width",s.SCREEN_HEIGHT="screen_height",s.DEVICE="device",s.OS="os",s.NAME="visitor_name",s.FIRST_NAME="visitor_first_name",s.LAST_NAME="visitor_last_name";let d=[{label:"Last Viewed Flow ID",name:"navattic_last_viewed_flow_id",type:"String",description:"ID of the most recently viewed flow in the Navattic product tour",fromEvent:e=>e.flow.id},{label:"Last Viewed Flow Title",name:"navattic_last_viewed_flow",type:"String",description:"Title of the most recently viewed flow",fromEvent:e=>e.flow.name},{label:"Last Viewed Project ID",name:"navattic_last_viewed_step_project_id",type:"String",description:"ID of the most recently viewed project",fromEvent:e=>e.project.id},{label:"Last Viewed Project Title",name:"navattic_last_viewed_step_project",type:"String",description:"Title of the most recently viewed project",fromEvent:e=>e.project.name},{label:"Last Viewed Flow Step ID",name:"navattic_last_viewed_step_id",type:"String",description:"ID of the most recently viewed step",fromEvent:e=>e.step.id},{label:"Last Viewed Flow Step Number",name:"navattic_last_viewed_step_number",type:"Number",description:"Number of the most recently viewed step",fromEvent:e=>e.step.indx.toString()},{label:"Last Viewed Flow Step Title",name:"navattic_last_viewed_step",type:"String",description:"Title of the most recently viewed step",fromEvent:e=>e.step.name},{label:"Session ID",name:"session_id",type:"String",description:"The ID of the most recently viewed session.",fromEvent:,{label:"Checklist Name",name:"checklist_name",type:"String",description:"The name of the most recently viewed checklist.",fromEvent:,{label:"UTM Campaign",name:"utm_campaign",type:"String",description:"UTM campaign.",fromEvent:e=>{let t=(0,c.I4)(e.eventAttributes);return e.clientSideMetadata.query_strings.utm_campaign||t.utm_campaign||""}},{label:"UTM Content",name:"utm_content",type:"String",description:"UTM content.",fromEvent:e=>{let t=(0,c.I4)(e.eventAttributes);return e.clientSideMetadata.query_strings.utm_content||t.utm_content||""}},{label:"UTM Medium",name:"utm_medium",type:"String",description:"UTM medium.",fromEvent:e=>{let t=(0,c.I4)(e.eventAttributes);return e.clientSideMetadata.query_strings.utm_medium||t.utm_medium||""}},{label:"UTM Source",name:"utm_source",type:"String",description:"UTM source.",fromEvent:e=>{let t=(0,c.I4)(e.eventAttributes);return e.clientSideMetadata.query_strings.utm_source||t.utm_source||""}},{label:"UTM Term",name:"utm_term",type:"String",description:"UTM term.",fromEvent:e=>{let t=(0,c.I4)(e.eventAttributes);return e.clientSideMetadata.query_strings.utm_term||t.utm_term||""}},{label:"Browser",name:"browser",type:"String",description:"The browser this viewer viewed your demo with.",fromEvent:e=>e.clientSideMetadata.browser},{label:"Current URL",name:"current_url",type:"String",description:"The URL at the time of the last event.",fromEvent:e=>e.clientSideMetadata.current_url},{label:"Path",name:"path",type:"String",description:"The path at the time of the last event.",fromEvent:e=>e.clientSideMetadata.pathname},{label:"Screen Width",name:"screen_width",type:"Number",description:"The width of the user's screen.",fromEvent:e=>e.clientSideMetadata.screen_width.toString()},{label:"Screen Height",name:"screen_height",type:"Number",description:"The height of the user's screen.",fromEvent:,{label:"Device",name:"device",type:"String",description:"The type of device the user is using.",fromEvent:e=>e.clientSideMetadata.device},{label:"Operating System",name:"os",type:"String",description:"The operating system the user is using.",fromEvent:,{label:"Visitor First Name",name:"visitor_first_name",type:"String",description:"The first name of the user.",fromEvent:e=>{let t=(0,c.I4)(e.eventAttributes);return(0,c.I2)(t).firstName||""}},{label:"Visitor Last Name",name:"visitor_last_name",type:"String",description:"The last name of the user.",fromEvent:e=>{let t=(0,c.I4)(e.eventAttributes);return(0,c.I2)(t).lastName||""}}]},21254:89747:]);
//# sourceMappingURL=4766-0bb0cea813b45542.js.map