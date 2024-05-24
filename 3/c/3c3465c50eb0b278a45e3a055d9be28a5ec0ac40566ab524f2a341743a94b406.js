"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8080],{83244:82563:56853:47819:85982:80394:function(e,t,n){n.d(t,{Z:function(){return MediaCapture},p:function(){return o}});var i,o,l=n(52322),r=n(2784),a=n(83244),s=n(47330),d=n(83122),c=n(23712),u=n(97015),p=n(14882),h=n(89370),m=n(20851),v=n(22112),f=n(70064),x=n(81332),g=n(77033);(i=o||(o={})).Edit="edit",i.Select="select",i.CardPreview="cardPreview",i.Present="present";let b={edit:"h-[65vh]",select:"h-[65vh]",cardPreview:"h-[150px]",present:"h-[85vh]"};function MediaCapture(e){var t,n;let{capture:i,renderEmpty:o,renderInsideTemplate:C,mode:T,onScroll:y,onLoad:w,...E}=e,{initialSelector:j}=(0,a.hi)(),{setScale:S}=(0,g.mU)(),P="object"==typeof(null==i?void 0:i.deviceTemplate)&&i.deviceTemplate?i.deviceTemplate:x.Ak.find(||x.Ak[0],k=null==P?void 0:P.template,I=(0,r.useRef)(null),O=(0,r.useRef)(null),_=(0,r.useRef)(null),{offline:A}=(0,v.D)(),L=(null==i?void 0:i.deviceTemplate)||s.DS.None,R=b[T],B=(0,r.useMemo)([i]),{scale:N}=(0,f.qE)(),M=(0,r.useCallback)([i,S,N]);(0,r.useLayoutEffect)([M,S]);let F=(0,r.useCallback)([M,w,i,T,j]),z=E.screenshot||B||(null==i?void 0:i.deviceScreenshot);(0,r.useEffect)([i,w,z,P]);let D=(0,r.useCallback)([z,null==P?void 0:P.image,F]),H=(0,r.useCallback)([F,P]),G=(null==i?void 0:i.lockHorizontalScroll)&&"select"!==T,W=(null==i?void 0:i.lockVerticalScroll)&&"select"!==T,V=null==i?void 0:null===(t=i.deviceScreenshot)||void 0===t?void 0:t.includes("/nv_static/v/"),U=(null==i?void 0:i.deviceScreenshot)||"",Z=(null==i?void 0:i.customTemplateHeight)&&(null==i?void 0:i.customTemplateWidth)?{height:i.customTemplateHeight,width:i.customTemplateWidth}:void 0;return(0,l.jsx)("div",{className:"absolute left-0 top-0 h-full w-full",style:{backgroundColor:(null==i?void 0:i.deviceBgColor)||void 0},children:(0,l.jsx)("div",{className:"flex h-full translate-x-0 translate-y-0 items-center justify-center",children:(0,l.jsxs)("div",{className:(0,d.AK)("pointer-events-none relative",L===s.DS.None&&"h-full w-full"),children:[(0,l.jsxs)("div",{className:(0,d.AK)("absolute bg-white","cardPreview"===T?"no-scrollbar pointer-events-none overflow-hidden":"pointer-events-auto overflow-auto",G&&"overflow-x-hidden",W&&"overflow-y-hidden"),style:null==P?void 0:P.dimensions,ref:I,id:"nv_viewport",onScroll:y,children:[!z&&(null==o?void 0:o()),z&&(0,l.jsxs)(l.Fragment,{children:[V?(0,l.jsx)("video",{src:U,onLoadedData:D,className:"h-auto w-full",autoPlay:!0,playsInline:!0,loop:!0,muted:!0}):(0,l.jsx)("img",{src:z,onLoad:D,className:"h-auto w-full"}),null==C?void 0:C()]})]}),(null==P?void 0:P.image)?(0,l.jsx)("img",{onLoad:H,src:A?null===(n=null==i?void 0:i.deviceTemplate)||void 0===n?void 0:n.image:(0,x.Gc)(P),className:(0,d.AK)("pointer-events-none relative max-h-[1400px] ".concat(R)),style:{zIndex:h.dw-2}}):L!==s.DS.None&&k?(0,l.jsx)(k,{className:"w-auto rounded-[.25rem] ".concat(R),style:Z}):(0,l.jsx)("div",{className:"w-auto ".concat(R)})]})})})}},58080:function(e,t,n){n.r(t),n.d(t,{default:function(){return components_EmbeddableWidget}});var i,o,l,r,a,s,d,c,u,p,h,m,v,f,x,g,b,C,T,y,w,E,j,S,P,k,I,O,_,A,L,R,B,N,M,F,z,D,H,G,W=n(52322),V=n(2784),U=n(46995),Z=n(47330),X=n(29119),K=n(50337),q=n(47147),Y=n(47277),Q=n(89747),$=n(3583),J=n(20851),ee=n(83408),et=n(15628),en=n(15366),ei=n(97015);let eo={lg:{maxWidth:1024,maxHeight:640,scale:.8}},el={md:{maxWidth:768,maxHeight:480,scale:.7},sm:{maxWidth:640,maxHeight:400,scale:.65}},er=(()=>{let e=(0,ei.yL)(),t=Object.values(eo);return e?[...t,...Object.values(el)]:[...t]})(),scaleTransform=(e,t)=>{if(!e)return"none";let n=new DOMMatrix(e);return n.scaleSelf(t),n.toString()},ResponsiveScaleStyle=e=>{let{transformValue:t,targetClass:n}=e,i=er.map(e=>{let{maxWidth:i,maxHeight:o,scale:l}=e;return"\n        @media (max-width: ".concat(i,"px), (max-height: ").concat(o,"px) {\n          .").concat(n," {\n            transform: ").concat(scaleTransform(t,l),";\n            transform-origin: left top;\n          }\n        }")}).join("");return(0,W.jsx)("style",{children:"\n        .".concat(n," {\n          transform: ").concat(t||"none","\n        }\n        ").concat(i,"\n      ")})},ResponsiveCenteredStyle=e=>{let{targetClass:t}=e,n="translate(-50%, -50%)",i=er.map(e=>{let{maxWidth:i,maxHeight:o,scale:l}=e;return"\n        @media (max-width: ".concat(i,"px), (max-height: ").concat(o,"px) {\n            .").concat(t," {\n            transform: ").concat(n," scale(").concat(l,");\n          }\n        }")}).join("");return(0,W.jsx)("style",{children:"\n      .".concat(t," {\n        transform: ").concat(n,"\n      }\n      ").concat(i,"\n    ")})},ea={TOP_LEFT:"nv-positioned-modal-top-left",TOP_RIGHT:"nv-positioned-modal-top-right",CENTER:"nv-positioned-modal-center",CUSTOM:"nv-positioned-modal-custom",BOTTOM_LEFT:"nv-positioned-modal-bottom-left",BOTTOM_RIGHT:"nv-positioned-modal-bottom-right"},ResponsivePositionedStyle=()=>{let e=er.map(e=>{let{maxWidth:t,maxHeight:n,scale:i}=e;return"\n        @media (max-width: ".concat(t,"px), (max-height: ").concat(n,"px) {\n          .").concat(ea.TOP_LEFT,",\n          .").concat(ea.TOP_RIGHT,",\n          .").concat(ea.CUSTOM,",\n          .").concat(ea.BOTTOM_LEFT,",\n          .").concat(ea.BOTTOM_RIGHT," {\n            transform: scale(").concat(i,");\n          }\n          .").concat(ea.TOP_LEFT," {\n            transform-origin: top left;\n          }\n          .").concat(ea.TOP_RIGHT," {\n            transform-origin: top right;\n          }\n          .").concat(ea.CENTER," {\n            transform: translate(-50%, -50%) scale(").concat(i,");\n            transform-origin: top left;\n          }\n          .").concat(ea.CUSTOM," {\n            /* because user specifies top and left */\n            transform-origin: top left;\n          }\n          .").concat(ea.BOTTOM_LEFT," {\n            transform-origin: bottom left;\n          }\n          .").concat(ea.BOTTOM_RIGHT," {\n            transform-origin: bottom right;\n          }\n        }")}).join("");return(0,W.jsx)("style",{children:e})},es={TOP_LEFT:"nv-checklist-top-left",TOP_RIGHT:"nv-checklist-top-right",BOTTOM_LEFT:"nv-checklist-bottom-left",BOTTOM_RIGHT:"nv-checklist-bottom-right"},ResponsiveChecklistStyle=()=>{let e=er.map(e=>{let{maxWidth:t,maxHeight:n,scale:i}=e;return"\n      @media (max-width: ".concat(t,"px), (max-height: ").concat(n,"px) {\n        .").concat(es.TOP_LEFT,",\n        .").concat(es.TOP_RIGHT,",\n        .").concat(es.BOTTOM_LEFT,",\n        .").concat(es.BOTTOM_RIGHT," {\n          transform: scale(").concat(i,");\n        }\n        .").concat(es.TOP_LEFT," {\n          top: ").concat(20*i,"px;\n          left: ").concat(50*i,"px;\n          transform-origin: top left;\n        }\n        .").concat(es.TOP_RIGHT," {\n          top: ").concat(20*i,"px;\n          right: ").concat(50*i,"px;\n          transform-origin: top right;\n        }\n        .").concat(es.BOTTOM_LEFT," {\n          bottom: ").concat(20*i,"px;\n          left: ").concat(50*i,"px;\n          transform-origin: bottom left;\n        }\n        .").concat(es.BOTTOM_RIGHT," {\n          bottom: ").concat(20*i,"px;\n          right: ").concat(50*i,"px;\n          transform-origin: bottom right;\n        }\n      }")}).join("");return(0,W.jsx)("style",{children:"\n      .".concat(es.TOP_LEFT,",\n      .").concat(es.TOP_RIGHT,",\n      .").concat(es.BOTTOM_LEFT,",\n      .").concat(es.BOTTOM_RIGHT," {\n        position: fixed;\n      }\n      .").concat(es.TOP_LEFT," {\n        top: ").concat(20,"px;\n        left: ").concat(50,"px;\n      }\n      .").concat(es.TOP_RIGHT," {\n        top: ").concat(20,"px;\n        right: ").concat(50,"px;\n      }\n      .").concat(es.BOTTOM_LEFT," {\n        bottom: ").concat(20,"px;\n        left: ").concat(50,"px;\n      }\n      .").concat(es.BOTTOM_RIGHT," {\n        bottom: ").concat(20,"px;\n        right: ").concat(50,"px;\n      }\n      ").concat(e,"\n      ")})};var ed=n(52484),ec=n(60696),eu=n(64147),ep=n(70064),eh=n(99219),em=n(83122);let makeKeyHandler=makeKeyHandlerProp=var ev=n(18838),ef=n(71942),ex=n(31475),eg=n(89370),eb=n(91957),eC=n(70443),eT=n(22112),ey=n(46085);r ew=n(55763),eE=n(53260);let nextStep=previousStep=ej={guideId:"",projectId:""};(i=w||(w={}))[i.GO_TO_STEP=0]="GO_TO_STEP",i[i.GO_TO_GUIDE=1]="GO_TO_GUIDE";let eS=(0,ee.hu)("debug:navattic:react"),eP={NAVIGATE:0,CONVERTED:0,GO_TO_STEP:1,NEXT_STEP:1,COMPLETE_FLOW:3,START_FLOW:4,OPEN_CHECKLIST:4,PREV_STEP:5,CLOSE_FLOW:9,START_CHECKLIST:9},dedupeActions=ek=(0,V.createContext)({handleActions:()=>{}}),HandleActionsContextProvider=useHandleActions=()=>(0,V.useContext)(ek);nction ChecklistBox(e){let{themeConfig:t={},checklist:n,completions:i=[],remainingCount:o,position:l,className:r}=e,{checklistTitle:a,checklistBody:s}=n,{checklistProgressBarVisible:d=!0}=t,{toggleChecklist:c}=(0,eu.oC)(),u=(0,V.useCallback)(()=>c(!1),[c]),{isMobile:p}=(0,ep.qE)(),h=(0,ex.Es)(),m=(0,V.useMemo)(()=>n.tasks||[],[n.tasks]);return p?(0,W.jsx)("div",{style:{width:"360px !important",opacity:1,filter:"drop-shadow(0 3px 10.5px rgba(0,0,0,0.15)) drop-shadow(0 1px 1.5px rgba(0,0,0,0.1))",pointerEvents:"none",display:"flex",flexDirection:"column",top:l.includes("TOP")?0:"auto",bottom:l.includes("BOTTOM")?0:"auto",right:l.includes("RIGHT")?0:"auto",left:l.includes("LEFT")?0:"auto",position:"fixed",zIndex:eg.dw},children:(0,W.jsx)("div",{style:{pointerEvents:"all",position:"relative",overflow:"hidden",width:"100%",height:"100%"},children:(0,W.jsx)("div",{role:"dialog","aria-label":"Checklist","aria-live":"assertive",style:{position:"fixed",height:h,width:"1200px",right:l.includes("RIGHT")?0:"auto",left:l.includes("LEFT")?0:"auto"},children:(0,W.jsx)(eb.f,{theme:(0,ef.ZP)(t),children:(0,W.jsxs)(eC.kC,{variant:"styles.ChecklistBox",children:[(0,W.jsx)(eC.xu,{py:3,px:3,children:(0,W.jsxs)(eC.kC,{sx:{justifyContent:"space-between"},children:[(0,W.jsxs)("div",{children:[(0,W.jsx)(eC.X6,{as:"h4",pt:4,pl:4,pb:3,pr:2,sx:{flex:"1 1 auto",fontSize:"calc(20px + 4vh)"},children:a}),(0,W.jsx)(eC.X6,{as:"h5",pt:2,pl:4,pb:3,pr:2,sx:{flex:"1 1 auto",fontSize:"calc(14px + 2.5vh)",opacity:".7",fontWeight:400,borderRadius:4},children:s})]}),(0,W.jsx)(eC.kC,{sx:{alignItems:"flex-start"},children:(0,W.jsx)(eC.zx,{className:(0,em.AK)("checklist close",p?"mobile-icon":""),"aria-label":"Close",onClick:u,children:(0,W.jsx)(eh.Two,{height:"1em",width:"1em"})})})]})}),(0,W.jsx)(eC.xu,{px:3,sx:{flex:1,overflowY:"auto"},children:m.map(e=>(0,W.jsx)(ChecklistItem,{task:e,completions:i},"task-".concat(e.id)))})]})})})})}):(0,W.jsx)("div",{style:{width:"360px !important",opacity:1,filter:"drop-shadow(0 3px 10.5px rgba(0,0,0,0.15)) drop-shadow(0 1px 1.5px rgba(0,0,0,0.1))",pointerEvents:"none",display:"flex",flexDirection:"column",top:l.includes("TOP")?0:"auto",bottom:l.includes("BOTTOM")?0:"auto",right:l.includes("RIGHT")?0:"auto",left:l.includes("LEFT")?0:"auto",position:"fixed",zIndex:eg.dw},children:(0,W.jsx)("div",{style:{pointerEvents:"all",position:"relative",overflow:"hidden",width:"100%",height:"100%"},children:(0,W.jsx)("div",{role:"dialog","aria-label":"Checklist","aria-live":"assertive",className:r,style:{height:520,width:360},children:(0,W.jsx)(eb.f,{theme:(0,ef.ZP)(t),children:(0,W.jsxs)(eC.kC,{variant:"styles.ChecklistBox",children:[(0,W.jsxs)(eC.xu,{py:3,px:3,children:[(0,W.jsxs)(eC.kC,{sx:{justifyContent:"space-between"},children:[(0,W.jsxs)("div",{children:[(0,W.jsx)(eC.X6,{as:"h4",pl:1,sx:{flex:"1 1 auto"},children:a}),(0,W.jsx)(eC.X6,{as:"h5",px:"5px",py:1,sx:{opacity:".7",fontWeight:400,fontSize:"14px",borderRadius:4},children:s})]}),(0,W.jsx)(eC.x8,{variant:"styles.Close",onClick:u,...makeKeyHandlerProp({Enter:{handler:u},Escape:{handler:e=>{var t;return null===(t=e.currentTarget)||void 0===t?void 0:t.blur()}}}),mt:"-2px"})]}),(0,W.jsx)(U.h,{enabled:d,children:(0,W.jsx)(ChecklistProgress,{remainingCount:o,taskCount:m.length})})]}),(0,W.jsx)(eC.xu,{px:3,sx:{flex:1,overflowY:"auto"},children:m.map(}),(0,W.jsx)(ev.Z,{themeConfig:t})]})})})})})}let RemainderWidget=function ChecklistToggle(e){let{themeConfig:t,remainingCount:n,checklistLauncherText:i="Get Started",checklistLauncherShowRemainder:o,className:l}=e,{toggleChecklist:r}=(0,eu.oC)(),a=(null==t?void 0:t.checklistLauncherBorderRadius)||30,s=(0,V.useCallback)(()=>r(!0),[r]),{dialogFontFamily:d,dialogFontUrl:c}=t||{},{loaded:u}=(0,ed.j)({fontFamily:d,url:c,safeFontMode:!1}),p=d||en.e;return(0,W.jsx)("div",{"aria-label":"Checklist toggle","aria-live":"assertive",style:{height:85,borderRadius:a,width:170,zIndex:eg.dw-2,fontFamily:p,margin:0,fontSize:15},className:l,children:(0,W.jsx)(eb.f,{theme:(0,ef.ZP)(t),children:(0,W.jsx)(eC.xu,{variant:"styles.ChecklistLauncherContainer",children:(0,W.jsx)(eC.kC,{sx:{justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},onClick:s,children:(0,W.jsxs)(eC.kC,{variant:"styles.ChecklistLauncher",children:[(0,W.jsx)(eC.xu,{tabIndex:0,...makeKeyHandlerProp({Enter:{handler:s},Escape:{handler:}),mr:o?".5rem":"0",children:i}),(0,W.jsx)(U.h,{enabled:o,children:(0,W.jsx)(RemainderWidget,{remainingCount:n})})]})})})})})}let positionToClassName=function Checklist(e){var t;let{open:n,checklist:i,completions:o=[]}=e,{tasks:l,showBackdrop:r,backdropStyle:a,checklistLauncherText:s,checklistLauncherShowRemainder:d}=i||{},{toggleChecklist:c}=(0,eu.oC)(),{isMobile:u}=(0,ep.qE)(),p=(0,V.useMemo)([c]),h=(null==i?void 0:null===(t=i.theme)||void 0===t?void 0:t.published)||void 0,{dialogFontFamily:m,dialogFontUrl:v}=h||{},{loaded:f}=(0,ed.j)({fontFamily:m,url:v,safeFontMode:!1}),x=m||en.e;if(!l)return null;let g=l.length;if(l.length&&o.length){let e=l.filter(;g=l.length-e.length}let{backdropLightOpacity:b,backdropMediumOpacity:C,backdropHeavyOpacity:T}=en.LIGHT_THEME.config,y=(null==h?void 0:h.checklistLauncherPosition)||ec.ChecklistPosition.BOTTOM_RIGHT,w="";switch(a){case Z.GT.Light:w="".concat(b||20,"%");break;case Z.GT.Medium:w="".concat(C||60,"%");break;case Z.GT.Heavy:w="".concat(T||100,"%")}let E=positionToClassName(y);return n&&i?(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(ResponsiveChecklistStyle,{}),(0,W.jsxs)("div",{style:{margin:0,fontSize:15,fontFamily:x},children:[(0,W.jsx)(ChecklistBox,{themeConfig:h,checklist:i,completions:o,remainingCount:g,position:y,className:E}),(0,W.jsx)("div",{className:"fixed bottom-0 left-0 right-0 top-0",style:{backgroundColor:"rgba(0,0,0,.5)",opacity:w,zIndex:999999999,visibility:r?"visible":"hidden"},onClick:p})]})]}):u?null:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(ResponsiveChecklistStyle,{}),(0,W.jsx)(ChecklistToggle,{className:E,themeConfig:h,remainingCount:g,checklistLauncherText:s||void 0,checklistLauncherShowRemainder:!1!==d})]})}let eI=(0,V.createContext)({hasNavigationBtns:!1,hasNavigationCompleteBtn:!1,completeBtn:null,hasStepCount:!1,id:"",stepCount:0,escapeView:null,showEscapeView:!1}),FlowMetadataContextProvider=useFlowMetadata=()=>(0,V.useContext)(eI);var eO=n(23712);let e_=(0,V.createContext)({capture:{id:void 0,name:void 0,type:void 0,published:void 0}}),eA=(0,V.createContext)({captureVersion:{id:void 0,node:void 0}}),CaptureContextProvider=CaptureVersionContextProvider=useCapture=()=>(0,V.useContext)(e_);var eL=n(80394),eR=n(77033);n(6781);var eB=n(87353),eN=n(21254),eM=n(30555);n(81695),n(47892);var eF=n(39688);let ez=(0,V.createContext)({attributes:(0,Q.n)(),storeAttributes:),useWidgetAttributes=()=>(0,V.useContext)(ez);et useCaptureVersion=()=>(0,V.useContext)(eA);var eD=n(70274),eH=n(87688),eG=n(71664);let eW=(0,ee.hu)("debug:navattic:personalization"),eV="[".concat(eg.lz,"][").concat(eg.rX,"]"),parsePersonalizedElement=setPersonalizedSrc=setPersonalizedBackgroundImage=setPersonalizedText=setPersonalizedInputValue=applyPersonalizationFallback=var eU=n(2530),eZ=n(80638);ar eX=n(73235),eK=n(28165),eq=n(84061);(o=E||(E={})).AppleIpadSilver="APPLE_IPAD_SILVER",o.AppleIpadSilverLandscape="APPLE_IPAD_SILVER_LANDSCAPE",o.AppleIphone_11ProMaxSpaceGrey="APPLE_IPHONE_11_PRO_MAX_SPACE_GREY",o.AppleIphone_11ProMaxSpaceGreyLandscape="APPLE_IPHONE_11_PRO_MAX_SPACE_GREY_LANDSCAPE",o.DesktopAppleImacPro="DESKTOP_APPLE_IMAC_PRO",o.DesktopAppleImacRetina="DESKTOP_APPLE_IMAC_RETINA",o.DesktopAppleMacbookPro="DESKTOP_APPLE_MACBOOK_PRO",o.DesktopDellXps_13="DESKTOP_DELL_XPS_13",o.DesktopShadow="DESKTOP_SHADOW",o.GooglePixel_3="GOOGLE_PIXEL_3",o.GooglePixel_3Landscape="GOOGLE_PIXEL_3_LANDSCAPE",o.IpadPro_13SpaceGray="IPAD_PRO_13_SPACE_GRAY",o.IpadPro_13SpaceGrayLandscape="IPAD_PRO_13_SPACE_GRAY_LANDSCAPE",o.MobileShadow="MOBILE_SHADOW",o.MobileShadowLandscape="MOBILE_SHADOW_LANDSCAPE",o.Nexus_6P="NEXUS_6P",o.Nexus_6PLandscape="NEXUS_6P_LANDSCAPE",o.None="NONE",o.TabletShadow="TABLET_SHADOW",o.TabletShadowLandscape="TABLET_SHADOW_LANDSCAPE",(l=j||(j={})).None="NONE",l.Desktop="DESKTOP",l.Mobile="MOBILE",l.Tablet="TABLET",(r=S||(S={})).Screenshot="SCREENSHOT",r.Web="WEB",(a=P||(P={})).Embed="EMBED",a.Form="FORM",a.Invisible="INVISIBLE",a.Modal="MODAL",a.Tooltip="TOOLTIP",(s=k||(k={})).Element="ELEMENT",s.Input="INPUT",s.Timer="TIMER",s.Url="URL",(d=I||(I={})).AnyValue="ANY_VALUE",d.Clicked="CLICKED",d.Contains="CONTAINS",d.Empty="EMPTY",d.Equal="EQUAL",d.Matches="MATCHES",d.NotContains="NOT_CONTAINS",d.NotEqual="NOT_EQUAL",d.NotMatches="NOT_MATCHES",(c=O||(O={})).CloseFlow="CLOSE_FLOW",c.CompleteFlow="COMPLETE_FLOW",c.Converted="CONVERTED",c.GoToStep="GO_TO_STEP",c.Navigate="NAVIGATE",c.NextStep="NEXT_STEP",c.OpenChecklist="OPEN_CHECKLIST",c.PrevStep="PREV_STEP",c.StartChecklist="START_CHECKLIST",c.StartFlow="START_FLOW",(u=_||(_={})).Bottom="BOTTOM",u.BottomEnd="BOTTOM_END",u.BottomStart="BOTTOM_START",u.Center="CENTER",u.Left="LEFT",u.Right="RIGHT",u.RightStart="RIGHT_START",u.Top="TOP",u.TopStart="TOP_START",(p=A||(A={})).Primary="PRIMARY",p.Secondary="SECONDARY",(h=L||(L={})).Checkbox="CHECKBOX",h.Input="INPUT",h.LegalConsent="LEGAL_CONSENT",(m=R||(R={})).Boolean="BOOLEAN",m.CompanyLogo="COMPANY_LOGO",m.Image="IMAGE",m.Number="NUMBER",m.String="STRING",(v=B||(B={})).Heavy="HEAVY",v.Light="LIGHT",v.Medium="MEDIUM",(f=N||(N={})).BottomLeft="BOTTOM_LEFT",f.BottomRight="BOTTOM_RIGHT",f.Center="CENTER",f.Custom="CUSTOM",f.TopLeft="TOP_LEFT",f.TopRight="TOP_RIGHT",(x=M||(M={})).Large="LARGE",x.Medium="MEDIUM",x.Small="SMALL",(g=F||(F={})).Large="LARGE",g.Medium="MEDIUM",g.Small="SMALL",(b=z||(z={})).Center="CENTER",b.Left="LEFT",b.Right="RIGHT",(C=D||(D={})).Checklist="CHECKLIST",C.Flow="FLOW",(T=H||(H={})).NotSupported="NOT_SUPPORTED",T.Optimized="OPTIMIZED",(y=G||(G={})).FitWidth="FIT_WIDTH",y.Fixed="FIXED",y.Responsive="RESPONSIVE",y.ScaleToFill="SCALE_TO_FILL";var eY=n(28625),eQ=n(68930),e$=n(98751),eJ=n(97472),e0=n(55283);let e1=new AbortController;r e2=n(27426),e5=n(16270),e4=n(99809),e8=n(11055);et e3=(0,eK.F4)({from:{opacity:0},to:{opacity:1}}),e6=(0,eK.F4)({"0%":{transform:"scale(.1)",opacity:1},"70%":{transform:"scale(2.5)",opacity:0},"100%":{opacity:0}});=(0,V.createContext)({buttons:[],backBtn:void 0,nextBtn:void 0}),StepButtonsContextProvider=e7=(0,V.createContext)({content:void 0}),StepContentContextProvider=e=>{let{step:t,children:n}=e,{content:i}=t,o=(0,V.useMemo)(()=>({content:i}),[i]);return(0,W.jsx)(e7.Provider,{value:o,children:n})},te=(0,V.createContext)({form:void 0}),StepFormContextProvider=e=>{let{step:t,children:n}=e,{form:i}=t,o=(0,V.useMemo)(()=>({form:i}),[i]);return(0,W.jsx)(te.Provider,{value:o,children:n})},tt=(0,V.createContext)({selector:void 0}),StepSelectorContextProvider=useStepButtons=()=>(0,V.useContext)(e9),useStepContent=()=>(0,V.useContext)(e7),useStepForm=()=>(0,V.useContext)(te),useStepSelector=()=>(0,V.useContext)(tt),ComposedStepContexts=var tn=n(90252),ti=n(59266),to=n(8493),tl=n(2701);function Bubble_templateObject(){let e=(0,eX._)(["\n  pointer-events: none;\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  flex-direction: column;\n  z-index: 99999999999999;\n  visibility: ",";\n"]);return Bubble_templateObject=function(){return e},e}function _templateObject1(){let e=(0,eX._)(["\n  pointer-events: all;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  &.navattic-modal-placement-inner {\n    position: absolute;\n    width: 400px;\n    height: auto;\n    padding: 1%;\n  }\n  &.top-left {\n    top: 0;\n    left: 0;\n  }\n  &.top-right {\n    top: 0;\n    right: 0;\n  }\n  &.bottom-left {\n    bottom: 0;\n    left: 0;\n  }\n  &.bottom-right {\n    bottom: 0;\n    right: 0;\n  }\n  border-radius: 10;\n  iframe {\n    ::-webkit-scrollbar {\n      display: none;\n    }\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n  }\n"]);return _templateObject1=function(){return e},e}let tr=ti.Z.div(Bubble_templateObject(),,ta=ti.Z.div(_templateObject1()),ts=V.forwardRef(,BubbleInner=td=en.LIGHT_THEME.config.tooltipPointerSize,tc=en.LIGHT_THEME.config.dialogBorderWidth,useCalcPadding=formatMarginStyle=fmtTooltipPlacement=calculateBackdropStyles=var tu=n(48090);let tp="rgba(0, 0, 0, 0.35)";et th=(0,ee.hu)("debug:navattic:react");tm="nv-scale-dialog-center",tv="nv-scale-tooltip",tf=(0,eK.F4)({to:{opacity:1,transform:"translate(0)"}}),fmtModalCornerPlacement=tx=ti.Z.div(Appearance_templateObject(),tf),tg=(0,tl.g)();ar tb=n(56853),tC=n(47819),tT=n(85982),ty=n(1991); FormField=isCheckbox=ar tw=n(82563);let tE={id:"prev-default",text:"Back",multilingualText:[{language:Z.sp.En,content:"Back"}],appearance:Z.lu.Secondary,actions:[{id:"go-to-prev",type:Z.yo.PrevStep}]},tj={id:"next-default",text:"Next",multilingualText:[{language:Z.sp.En,content:"Next"}],appearance:Z.lu.Primary,actions:[{id:"go-to-next",type:Z.yo.NextStep}]},tS=V.memo(,tP=V.memo(,tk=V.memo(;ar tI=n(68349),tO=n(95797),t_=n(93453),tA=n(23212),tL=n(56503),tR=n(368);let tB="".concat(100/(16/9),"%");et Audio=Image=tN=[{strategy:findEntities("LINK"),component:,{strategy:findEntities("PERSONALIZATION"),component:],tM=(0,tA.Z)({horizontal:"absolute",vertical:"absolute",initialWidth:"auto",initialHeight:"auto"}),tF=(0,tI.Z)(),tz=(0,t_.Z)({decorator:(0,tO.lM)(tM.decorator,tF.decorator)}),tD=[tF,tM,tz];H=n(26527),tG=n(49208);et isSelectElement=t FlowElements= tW=n(14882);let ric=("function"!=typeof globalThis.requestIdleCallback||"function"!=typeof globalThis.cancelIdleCallback)&&(ric=;let tV=ric;ar tU=n(49548);function PreviewNotch_templateObject(){let e=(0,eX._)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n  border-radius: 0 4px;\n  pointer-events: none;\n  z-index: 2147483645;\n"]);return PreviewNotch_templateObject=function(){return e},e}function PreviewNotch_templateObject1(){let e=(0,eX._)(["\n  width: 100%;\n  justify-content: center;\n  border-top: 2px solid #181e54;\n"]);return PreviewNotch_templateObject1=function(){return e},e}et tZ=ti.Z.div(PreviewNotch_templateObject()),tX=(0,ti.Z)(eC.kC)(PreviewNotch_templateObject1()),tK=(0,ti.Z)(eC.xu)(_templateObject2());t tq=(0,ee.hu)("debug:navattic:react");var components_EmbeddableWidget=function(e){var t,n;let{initialProjectId:i="",initialProject:o,initialProjectVersionId:l,initialProjectLanguage:r,initialGuideId:a="",initialStepIndex:s=0,initialFlow:d,initialChecklist:c,projectShareLink:u,breakingWidth:p,hideMobileAlert:h,isPreview:m,offline:v=!1}=e;o&&(0,q.E3)(o);let[f,x]=(0,V.useState)(!1),[g,b]=(0,V.useReducer)(eE.ht,{projectId:i,projectVersionId:l,projectLanguage:r,guideId:a,stepIndex:s,idmptKey:[],projectShareLinkId:null==u?void 0:u.id,project:o,checklist:void 0,flow:void 0,completedTaskIds:[],isPreview:null!=m?m:!i&&!o,sessionId:void 0,customerId:void 0,checklistOpen:!1,showEscapeView:!1,loading:!1,transitioning:!0,captureBuilt:!1,isInitialLoad:!0,initialFlowId:void 0,offline:v,attributes:(0,Q.n)(),_queuedEventOverrides:new $.ci,_hasMarkedUserAsEngaged:!1},;(0,V.useEffect)([g]);let{projectId:C,guideId:T,stepIndex:y,captureBuilt:w,checklist:E,checklistOpen:j,showEscapeView:S,completedTaskIds:P,flow:k,isPreview:I,loading:O,transitioning:_,project:A,isInitialLoad:L}=g,R=(0,V.useMemo)([]);(0,V.useEffect)([R]),(0,V.useEffect)([R,null==k?void 0:k.id,T,I,v]);let B=(0,V.useCallback)([R,T,C,null==u?void 0:u.prefilledVariables]),[N,M]=(0,V.useState)(et.rV.getItem("passcode")),F=(0,V.useCallback)([]),[z,D]=(0,V.useState)(!1),H=(0,V.useCallback)([B,A,C,null==u?void 0:u.passcode,F]);(0,V.useEffect)([B,R,T,v,N,A,C,null==u?void 0:u.passcode]),(0,V.useEffect)([w,R,null==k?void 0:null===(t=k.published)||void 0===t?void 0:t.steps,L]);let G=(0,V.useRef)(!1);return(0,V.useEffect)([w,null==k?void 0:null===(n=k.published)||void 0===n?void 0:n.steps,g]),tq.log("Active flow:",k),(0,W.jsx)(eu.dH,{dispatch:R,children:(0,W.jsx)(WidgetAttributeContextProvider,{dispatch:R,attributes:g.attributes,children:(0,W.jsx)(IdentificationWrapper,{projectShareLink:u,projectId:C,children:(0,W.jsx)(eT.nF,{project:A,checklist:E,offline:v,projectShareLink:u,children:(0,W.jsx)(eu.Zp,{captureBuilt:w,isInitialLoad:L,loading:O,transitioning:_,children:(0,W.jsx)(ep.W2,{mobileStrategy:null==A?void 0:A.mobileStrategy,breakingWidth:p,hideMobileAlert:h,children:(0,W.jsx)(tU.ZP,{projectId:C||ej.projectId,guideId:T||ej.guideId,stepIndex:y,children:(0,W.jsxs)(PasscodeRequired,{isOpen:f,passcodeIncorrect:z,onSubmit:H,children:[(0,W.jsx)(U.h,{enabled:!L,children:(0,W.jsx)(Checklist,{open:j,checklist:null==E?void 0:E.published,completions:P})}),(0,W.jsx)(Flow,{flow:(null==k?void 0:k.published)||{},checklistOpen:j,showEscapeView:S}),(0,W.jsx)(U.h,{enabled:I,children:(0,W.jsx)(PreviewNotch,{})})]})})})})})})})})}}}]);
//# sourceMappingURL=8080-d51f0f4a91c21563.js.map