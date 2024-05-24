"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6456],{27091:function(e,t,n){n.d(t,{Z:function(){return Layout_AppLayout}});var r=n(52322);n(15733);var a=n(73364),o=n(5546),i=n(96020),l=n(72901),c=n(93466),s=n(16377),d=n(40230),u=n(41270);n(34406);let invalidateCachedField=addToCacheList=invalidateListIfChangedPrivacy=writeGlobalEditsToCache=p=(0,c.eI)({exchanges:[i.r,(0,c.Dk)({onError:),c.B5,(0,l.HG)({keys:{ProjectActivityResult:()=>null,ProjectViewsResult:()=>null,ProjectBreakdownResult:()=>null,ProjectActivityGuideActivityResult:()=>null,ViewResult:()=>null,ProjectActivityGuideResult:()=>null,ProjectBreakdownStepResult:()=>null,GuideQueryResult:()=>null,ProjectQueryResult:()=>null,CaptureCollectionQueryResult:()=>null,WorkspaceLayoutConfig:()=>null,VisitorQueryResult:()=>null,VisitorActivityTimeSlice:()=>null,TimeSeriesDatum:()=>null,FlowDocument:()=>null,ProjectDocument:()=>null,ChecklistDocument:()=>null,Selector:()=>null,FreeSelectorDimensions:()=>null,SelectorDimensions:()=>null,EmbeddedCapture:()=>null,DialogButton:()=>null,FlowDocumentAction:()=>null,BoardTeamAccess:e=>e.team.id,BoardProject:e=>e.project.id,ProjectOnBoard:ActivityOverviewResult:,optimistic:{},resolvers:{Query:{project:(e,t,n,r)=>{let{id:a}=t;return{__typename:"Project",id:a}},theme:(e,t,n,r)=>{let{id:a}=t;return{__typename:"Theme",id:a}},webCapture:(e,t,n,r)=>{let{id:a}=t;return{__typename:"WebCapture",id:a}},captureCollection:(e,t,n,r)=>{let{id:a}=t;return{__typename:"CaptureCollection",id:a}},guide:(e,t,n,r)=>{let{id:a}=t;return{__typename:"Guide",id:a}},visitor:(e,t,n,r)=>{let{id:a}=t;return{__typename:"Visitor",id:a}},companyAccount:},updates:{Mutation:{createProjectcreateTaginviteToWorkspacecreateApiKeycreateWorkspaceRolecreateWebhook(e,t,n){e.createWebhook&&addToCacheList({listName:"webhooks",args:{workspaceId:t.workspaceId},cache:n,item:e.createWebhook})},setProjectShareLinkAsPrimary(e,t,n,r){if(!e.setProjectShareLinkAsPrimary)return;let a=e.setProjectShareLinkAsPrimary,o={__typename:"Project",id:a.projectId},i=n.readFragment(d.q,o);n.writeFragment(d.q,{...i,primaryShareLink:a})},createShareLinkMetacreateProjectShareLink(e,t,n){let r=e.createProjectShareLink;r&&invalidateCachedField(n,"projectShareLinks")},createEngagementMetriccreateFlow(e,t,n){let r=e.createFlow;r&&n.invalidate({__typename:"Project",id:t.projectId})},createPersonalizationTemplate(e,t,n){let r=e.createPersonalizationTemplate;r&&addToCacheList({listName:"personalizationTemplates",args:{workspaceId:t.workspaceId},cache:n,item:r})},createPersonalizationVariablecreateFormFieldMetadata(e,t,n){var r;let a=e.createFormFieldMetadata;a&&addToCacheList({listName:"formFieldMetadata",args:{workspaceId:null===(r=t.data)||void 0===r?void 0:r.workspaceId},cache:n,item:a})},addProjectLanguage(e,t,n){let r=e.addProjectLanguage;r&&addToCacheList({listName:"projectLanguages",args:{projectId:t.data.projectId},cache:n,item:r})},removeProjectLanguagefindAndReplaceTextAcrossCaptureCollection(e,t,n){let r=e.findAndReplaceTextAcrossCaptureCollection;writeGlobalEditsToCache({edits:r,cache:n})},findAndReplaceImageAcrossCaptureCollection(e,t,n){let r=e.findAndReplaceImageAcrossCaptureCollection;writeGlobalEditsToCache({edits:r,cache:n})},personalizeTextAcrossCaptureCollection(e,t,n){let r=e.personalizeTextAcrossCaptureCollection;writeGlobalEditsToCache({edits:r,cache:n})},personalizeImageAcrossCaptureCollectioncreateTeam(e,t,n){var r;let a=e.createTeam;a&&addToCacheList({listName:"teams",args:{workspaceId:null===(r=t.data)||void 0===r?void 0:r.workspaceId},cache:n,item:a})},createProjectCaptureCollectioncreateBoardcreateProjectScreenshotCapture(e,t,n){let r=e.createProjectScreenshotCapture;r&&n.invalidate({__typename:"ScreenshotCaptureCollection",id:t.input.collectionId})},restoreProjectVersionpublishWebBasedCaptureVersioncreateCaptureFromNodeKeygenerateCompanyAccountProspectscreateWorkspaceDataDeletionRequestupdateProject(e,t,n,r){var a,o;invalidateListIfChangedPrivacy(t,n,"projects"),((null===(a=t.data)||void 0===a?void 0:a.boards)||(null===(o=t.data)||void 0===o?void 0:o.privacy))&&(invalidateCachedField(n,"boardsWithProjectsPreview"),invalidateCachedField(n,"boardProjects"),n.invalidate("Query","projectBoards",{id:t.data.id}))},updateProjectShareLink(e,t,n){invalidateCachedField(n,"projectShareLinks")},deleteProjectShareLink(e,t,n){invalidateCachedField(n,"projectShareLinks")},archiveProjectShareLink(e,t,n){invalidateCachedField(n,"projectShareLinks")},updateThemeupdateWorkspacePermissions(e,t,n){invalidateCachedField(n,"workspace")},updateFlowDefaultCaptureCollection(e,t,n){e.updateFlowDefaultCaptureCollection&&n.invalidate({__typename:"Flow",id:t.flowId})},updateWebhookupdateProjectWebhooksupdateEditChecklistVersionupdateEngagementMetricupdateUser(e,t,n){n.invalidate({__typename:"User",id:t.userId})},deployProjectupdateStartingFlowrenameWebBasedCapture(e,t,n){n.invalidate({__typename:"WebBasedCapture",id:t.input.id})},updateWebCaptureCollection(e,t,n){n.invalidate({__typename:"WebCaptureCollection",id:t.input.id})},renameProjectScreenshotCapturebatchUpdateScreenshotBasedCapturesupdateBoardreorderBoardsdeleteProject(e,t,n,r){n.invalidate({__typename:"Project",id:t.id})},deleteChecklist(e,t,n,r){n.invalidate({__typename:"Project",id:t.projectId})},deleteEngagementMetric(e,t,n,r){n.invalidate({__typename:"EngagementMetricExtended",id:t.id})},deleteTheme(e,t,n,r){n.invalidate({__typename:"Theme",id:t.id})},deleteTag(e,t,n,r){n.invalidate({__typename:"Tag",id:t.id})},deleteApiKey(e,t,n,r){n.invalidate({__typename:"ApiKey",id:t.id})},deleteWebhook(e,t,n,r){n.invalidate({__typename:"Webhook",id:t.id})},removeMemberFromWorkspacedeletePersonalizationTemplate(e,t,n,r){n.invalidate({__typename:"PersonalizationTemplate",id:t.id})},deletePersonalizationVariable(e,t,n,r){n.invalidate({__typename:"PersonalizationVariable",id:t.id})},deleteFormFieldMetadatadeleteWorkspaceRoledeleteTeam(e,t,n,r){e.deleteTeam&&n.invalidate({__typename:"Team",id:t.id})},deleteProjectCaptureCollectiondeleteProjectWebCapture(e,t,n,r){e.deleteProjectWebCapture&&n.invalidate({__typename:"ProjectCaptureCollection",id:e.deleteProjectWebCapture.collectionId})},deleteProjectScreenshotCapture(e,t,n,r){e.deleteProjectScreenshotCapture&&n.invalidate({__typename:"ProjectCaptureCollection",id:e.deleteProjectScreenshotCapture.collectionId})},deleteBoardduplicateProject(e,t,n,r){e.duplicateProject&&addToCacheList({listName:"projects",args:{workspaceId:e.duplicateProject.workspaceId,privacy:e.duplicateProject.privacy},cache:n,item:e.duplicateProject})},duplicateProjectWebCaptureduplicateProjectCaptureCollection(e,t,n,r){e.duplicateProjectCaptureCollection&&addToCacheList({listName:"projectCaptureCollections",args:{projectId:e.duplicateProjectCaptureCollection.projectId},cache:n,item:e.duplicateProjectCaptureCollection})},duplicateThemeduplicateFlow}}),c.Ek],fetchOptions:{credentials:"include"},requestPolicy:"cache-and-network",url:"/api",maskTypename:!0});var m=n(89370),h=n(23848),g=n(45847),f=n.n(g),v=n(56958),b=n(26806);globalThis.__navatticControlled=!0;var Layout_AppLayout=,73364:5841:12902:function(e,t,n){n.d(t,{o:function(){return i}});var r=n(73235),a=n(66547),o=n(77894);function _templateObject(){let e=(0,r._)(["\n    fragment Checklist on Checklist {\n  id\n  createdAt\n  updatedAt\n  versions {\n    ...ChecklistVersion\n  }\n  editVersion {\n    ...ChecklistVersion\n  }\n}\n    ",""]);return _templateObject=function(){return e},e}let i=(0,a.ZP)(_templateObject(),o.r)},77894:function(e,t,n){n.d(t,{r:function(){return s}});var r=n(73235),a=n(66547),o=n(77243);function _templateObject(){let e=(0,r._)(["\n    fragment Task on Task {\n  id\n  order\n  title\n  body\n  actions {\n    ...FlowDocumentAction\n  }\n}\n    ",""]);return _templateObject=function(){return e},e}let i=(0,a.ZP)(_templateObject(),o.$);var l=n(17554);function checklistDocument_templateObject(){let e=(0,r._)(["\n    fragment ChecklistDocument on ChecklistDocument {\n  schemaVersion\n  checklistLauncherShowRemainder\n  checklistOpenOnStart\n  checklistOpenOnComplete\n  checklistResetOnStart\n  checklistLauncherText\n  checklistTitle\n  checklistBody\n  showBackdrop\n  backdropStyle\n  tasks {\n    ...Task\n  }\n  themeId\n  theme {\n    id\n    name\n    published {\n      ...ThemeVersion\n    }\n  }\n}\n    ","\n",""]);return checklistDocument_templateObject=function(){return e},e}let c=(0,a.ZP)(checklistDocument_templateObject(),i,l.A);function checklistVersion_templateObject(){let e=(0,r._)(["\n    fragment ChecklistVersion on ChecklistVersion {\n  id\n  createdAt\n  updatedAt\n  doc {\n    ...ChecklistDocument\n  }\n}\n    ",""]);return checklistVersion_templateObject=function(){return e},e}let s=(0,a.ZP)(checklistVersion_templateObject(),c)},43123:function(e,t,n){n.d(t,{h:function(){return o}});var r=n(73235),a=n(66547);function _templateObject(){let e=(0,r._)(["\n    fragment CompanyAccount on CompanyAccount {\n  id\n  name\n  hubspotCompanyId\n  salesforceAccountId\n  accountOwner {\n    id\n    email\n  }\n  updatedAt\n  engaged\n  description\n  websiteDomain\n  linkedinUrl\n  industry\n  employeeCount\n  estimatedAnnualRevenue\n  city\n  state\n  country\n  postalCode\n}\n    "]);return _templateObject=function(){return e},e}let o=(0,a.ZP)(_templateObject())},77243:function(e,t,n){n.d(t,{$:function(){return o}});var r=n(73235),a=n(66547);function _templateObject(){let e=(0,r._)(["\n    fragment FlowDocumentAction on FlowDocumentAction {\n  id\n  type\n  url\n  startFlow {\n    id\n    name\n  }\n  newTab\n  shareLinkCTA\n  startFlowId\n}\n    "]);return _templateObject=function(){return e},e}let o=(0,a.ZP)(_templateObject())},54786:function(e,t,n){n.d(t,{s:function(){return o}});var r=n(73235),a=n(66547);function _templateObject(){let e=(0,r._)(["\n    fragment PersonalizationVariable on PersonalizationVariable {\n  id\n  variableType\n  displayName\n  attributeName\n  example\n  deletable\n}\n    "]);return _templateObject=function(){return e},e}let o=(0,a.ZP)(_templateObject())},40230:function(e,t,n){n.d(t,{q:function(){return c}});var r=n(73235),a=n(66547),o=n(46678),i=n(2835),l=n(12902);function _templateObject(){let e=(0,r._)(["\n    fragment Project on Project {\n  ...ProjectListItem\n  primaryShareLink {\n    ...ProjectShareLink\n  }\n  startingFlowId\n  checklist {\n    ...Checklist\n  }\n  flows {\n    id\n    name\n    createdAt\n    updatedAt\n    defaultCaptureCollectionId\n    editVersion {\n      id\n      doc {\n        stepCount\n        hasForm\n      }\n    }\n    projectId\n    isStarting\n  }\n}\n    ","\n","\n",""]);return _templateObject=function(){return e},e}let c=(0,a.ZP)(_templateObject(),o.c,i.D,l.o)},46678:2835:function(e,t,n){n.d(t,{D:function(){return c}});var r=n(73235),a=n(66547),o=n(54786),i=n(28909),l=n(43123);et c=(0,a.ZP)(_templateObject(),o.s,i.z,l.h)},28909:84902:function(e,t,n){n.d(t,{P:function(){return o}});var r=n(73235),a=n(66547);function _templateObject(){let e=(0,r._)(["\n    fragment ScreenshotBasedCapture on ScreenshotBasedCapture {\n  id\n  createdAt\n  updatedAt\n  name\n  deviceScreenshot\n  deviceScreenshotHeight\n  deviceScreenshotWidth\n  deviceTemplate\n  deviceBgScreenshot\n  deviceBgColor\n  lockVerticalScroll\n  lockHorizontalScroll\n  scrollLeft\n  scrollTop\n  collectionId\n  collection {\n    id\n    name\n  }\n}\n    "]);return _templateObject=function(){return e},e}let o=(0,a.ZP)(_templateObject())},50828:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(73235),a=n(66547);function _templateObject(){let e=(0,r._)(["\n    fragment ShareLinkMeta on ShareLinkMeta {\n  id\n  projectId\n  title\n  description\n  image\n  enableIndex\n}\n    "]);return _templateObject=function(){return e},e}let o=(0,a.ZP)(_templateObject())},70167:function(e,t,n){n.d(t,{u:function(){return o}});var r=n(73235),a=n(66547);function _templateObject(){let e=(0,r._)(["\n    fragment Tag on Tag {\n  id\n  label\n  color\n  privacy\n  updatedAt\n}\n    "]);return _templateObject=function(){return e},e}let o=(0,a.ZP)(_templateObject())},17554:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(73235),a=n(66547);function _templateObject(){let e=(0,r._)(["\n    fragment ThemeVersion on ThemeVersion {\n  id\n  primaryColor\n  secondaryColor\n  backdropColor\n  backdropHeavyOpacity\n  backdropHighlightShadow\n  backdropLightOpacity\n  backdropMediumOpacity\n  backdropHighlightBorderColor\n  anchorHighlightOpacity\n  beaconColor\n  buttonBgColor\n  buttonBgColorActive\n  buttonBgColorHover\n  buttonBorderColor\n  buttonBorderColorHover\n  buttonBorderColorActive\n  buttonBorderRadius\n  buttonFontWeight\n  buttonSecondaryBgColor\n  buttonSecondaryBgColorActive\n  buttonSecondaryBgColorHover\n  buttonSecondaryBorderColor\n  buttonSecondaryBorderColorHover\n  buttonSecondaryBorderColorActive\n  buttonSecondaryFontWeight\n  buttonSecondaryTextColor\n  buttonTextColor\n  checklistCheckmarkBgColor\n  checklistFilter\n  checklistHorizontalPadding\n  checklistLauncherBgColor\n  checklistLauncherBorderRadius\n  checklistLauncherFontWeight\n  checklistLauncherHPadding\n  checklistLauncherPosition\n  checklistLauncherTextColor\n  checklistLauncherVPadding\n  checklistProgressBarVisible\n  checklistTaskCompletionDecoration\n  checklistVerticalPadding\n  checklistWidth\n  closeColor\n  dialogBgColor\n  dialogBorderRadius\n  dialogBorderWidth\n  dialogBorderColor\n  dialogFilter\n  dialogFontFamily\n  dialogFontUrl\n  dialogFontSize\n  dialogLineHeight\n  dialogLinkColor\n  dialogLinkHoverColor\n  dialogProgressBarVisible\n  dialogTextColor\n  dialogPaddingVertical\n  dialogPaddingHorizontal\n  modalWidth\n  progressBarColor\n  progressBarHeight\n  progressBarTextColor\n  tooltipPointerSize\n  tooltipWidthSmall\n  tooltipWidth\n  tooltipWidthLarge\n  beaconDiameterSmall\n  beaconDiameterMedium\n  beaconDiameterLarge\n  bannerEnabled\n  bannerColor\n  bannerText\n  bannerTextColor\n  bannerButtonEnabled\n  bannerButtonColor\n  bannerButtonText\n  bannerButtonTextColor\n  bannerButtonLink\n  selectedGoogleFamily\n  defaultStepAppearance\n  defaultNavigationButtons\n  defaultNavigationButtonsStepCount\n  defaultEscapeView\n  defaultBackdrop\n  watermarkImageSrc\n  watermarkPosition\n  watermarkHref\n  watermarkOpacity\n}\n    "]);return _templateObject=function(){return e},e}let o=(0,a.ZP)(_templateObject())},41270:28616:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(73235),a=n(66547);et o=(0,a.ZP)(_templateObject())},86414:24595:83122:23375:69260:function(e,t,n){n.d(t,{Dq:function(){return c},Fn:function(){return u},G1:function(){return i},PD:function(){return o},TQ:function(){return h},Vt:function(){return r},cv:function(){return s},o0:function(){return l},ph:function(){return p},pp:function(){return a},sg:function(){return d},uI:function(){return m}});let r="Admin",a="Builder",o="Launchpad Rep",i=200,l=.35,c=20,s=20,d=25,u=10,p=3,m=1,h={ENTITY_TAG_MISMATCH:"ENTITY_TAG_MISMATCH"}},15733:5546:77512:function(e,t,n){n.d(t,{zx:function(){return d},XZ:function(){return Checkbox},E1:function(){return SearchBar},rs:function(){return Switch},oi:function(){return TextInput_TextInput},gx:);var r=n(52322),a=n(2784),o=n(61335),i=n(49815),l=n(6277),c=n(20324);et s=(0,o.j)(["flex items-center justify-center whitespace-nowrap rounded-md","text-base font-medium transition-colors","focus:outline-none focus:ring-2 ring-blue-200","disabled:pointer-events-none disabled:opacity-50"],{variants:{variant:{default:"bg-gray-800 shadow shadow-inner text-white hover:bg-gray-800/90",secondary:"bg-white shadow-border text-gray-900 hover:bg-white/80",minimal:"bg-transparent text-gray-900 hover:bg-primary/5"},size:{sm:"h-7 px-2 gap-x-1 leading-3",md:"h-9 px-4 gap-x-2 leading-5",lg:"h-11 px-5 gap-x-3 leading-6"},icon:{left:"pl-3.5",right:"pr-3.5",both:"pl-3.5 pr-3.5"}},defaultVariants:{variant:"default",size:"md",icon:null},compoundVariants:[{size:"sm",icon:"left",className:"pl-2"},{size:"sm",icon:"right",className:"pr-2"},{size:"sm",icon:"both",className:"px-2"},{size:"lg",icon:"left",className:"pl-4"},{size:"lg",icon:"right",className:"pr-4"},{size:"lg",icon:"both",className:"px-4"}]}),d=a.forwardRef(;d.displayName="Button",n(98036);let u=(0,o.j)(["flex items-center justify-between overflow-hidden","border rounded-md text-sm font-normal leading-5 p-0","transition duration-100 ease-in-out","disabled:cursor-not-allowed"],{variants:{disabled:{true:"border-gray-300 bg-gray-100 text-gray-400",false:"bg-white text-gray-900"},error:{true:"!border-red-700",false:""},variant:{subtle:"border-transparent",default:"border-gray-300"},focused:{true:"ring-2 ring-blue-200 border-gray-300",false:""},size:{sm:"text-sm h-8",md:"text-base h-10"}},compoundVariants:[{variant:"subtle",focused:!1,error:!1,className:"hover:border-gray-200"},{disabled:!1,focused:!1,className:"hover:border-gray-400"},{variant:"default",disabled:!1,className:"bg-white"}]}),p=(0,o.j)(["flex h-full items-center bg-gray-100 px-3 text-gray-900 border-inherit"],{variants:{error:{true:"text-red-700",false:""}}}),m=(0,o.j)(["text-sm font-medium leading-none text-gray-900"],{variants:{error:{true:"text-red-700",false:""}}});function Input(e){let{error:t,styles:n,className:o,left:i,right:l,leftIcon:c,rightIcon:s,labelText:d,size:h="md",variant:g="default",...f}=e,[v,b]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:utils_cn("flex flex-col gap-2",o),style:null==n?void 0:n.root,children:[d&&(0,r.jsx)("label",{htmlFor:f.id,className:m({error:!!t}),style:null==n?void 0:n.label,children:d}),(0,r.jsxs)("div",{className:u({disabled:f.disabled,error:!!t,focused:v,size:h,variant:g}),style:null==n?void 0:n.wrapper,onFocus:()=>b(!0),onBlur:()=>b(!1),children:[i&&(0,r.jsx)("div",{className:utils_cn(p({error:!!t}),"border-r"),style:null==n?void 0:n.left,children:i}),(0,r.jsxs)("div",{className:"flex h-full flex-grow items-center gap-2 px-3",style:null==n?void 0:n.iconWrapper,children:[c,(0,r.jsx)("input",{style:null==n?void 0:n.input,className:utils_cn("h-full flex-grow focus:outline-none"),...f}),s]}),l&&(0,r.jsx)("div",{className:utils_cn(p({error:!!t}),"border-l"),style:null==n?void 0:n.right,children:l})]}),t&&(0,r.jsx)("span",{className:"mx-1 text-xs text-red-900",style:null==n?void 0:n.error,children:t})]})}ar h=n(94225);et g=(0,o.j)(["text-gray-900 border border-gray-300 rounded-md p-2 text-sm font-normal leading-5","transition duration-100 ease-in-out","disabled:cursor-not-allowed","focus:ring-2 focus:ring-blue-200 focus:border-gray-300","hover:border-gray-400"],{variants:{disabled:{true:"border-gray-300 bg-gray-100 text-gray-400",false:""},error:{true:"border-red-700",false:""}}}),f=(0,o.j)(["text-sm font-medium leading-none text-gray-900"],{variants:{error:{true:"text-red-700",false:""}}}),v=(0,a.forwardRef)(;v.displayName="Textarea";var b=n(71710),y=n(83030);let j=(0,o.j)(["duration-150 flex items-center gap-2 select-none"],{variants:{disabled:{true:"cursor-not-allowed",false:"hover:cursor-pointer"}}}),C=(0,o.j)(["flex h-5 w-5 appearance-none items-center shrink-0","justify-center rounded-md text-white border","disabled:cursor-not-allowed disabled:hover:cursor-not-allowed"],{variants:{checked:{true:"bg-black text-white",false:"bg-gray-100 shadow shadow-inner"},error:{true:"border-red-700",false:""},disabled:{true:"bg-gray-300 text-gray-400",false:""}}});0,o.j)([],{variants:{size:{sm:"max-w-[100px] text-xs py-0.5 px-1",md:"max-w-[160px] text-xs p-1 px-2",lg:"max-w-[240px] text-md p-1.5 px-3"}}}),(0,o.j)(["flex items-center justify-center rounded-lg","focus:ring-2 focus:ring-blue-200"],{variants:{size:{sm:"h-6 w-6 p-1",md:"h-8 w-8 p-2",lg:"h-12 w-12 p-4"}},defaultVariants:{size:"md"}});var _=n(16530);let k=(0,o.j)(["duration-150 w-fit rounded flex items-center gap-2 select-none"],{variants:{withBody:{true:"hover:bg-gray-100 p-2",false:""},disabled:{true:"cursor-not-allowed",false:"hover:cursor-pointer"}}}),P=(0,o.j)(["relative h-5 w-8 rounded-full duration-150 shadow-inner","focus:outline-black"],{variants:{checked:{true:"bg-gray-800 disabled:bg-gray-500",false:"bg-gray-200 disabled:bg-gray-50"},wrapperHovered:{true:"",false:""},disabled:{true:"cursor-not-allowed pointer-events-none",false:""}},compoundVariants:[{wrapperHovered:!0,checked:!0,className:"bg-gray-900"},{wrapperHovered:!0,checked:!1,className:"bg-gray-400"}]}),w=(0,o.j)(["block h-3.5 w-3.5 rounded-full bg-white shadow","transition-transform duration-150 will-change-transform"],{variants:{checked:{true:"translate-x-[14px] disabled:bg-gray-200",false:"translate-x-1"}}}),x=(0,o.j)(["text-sm font-medium leading-5"],{variants:{}});ar I=n(38880);}]);
//# sourceMappingURL=6456-ba1bed701a3b9fec.js.map