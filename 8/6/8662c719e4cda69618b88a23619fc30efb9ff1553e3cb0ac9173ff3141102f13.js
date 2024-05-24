"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5342],{15366:function(o,t,e){e.d(t,{LIGHT_THEME:function(){return a},e:function(){return r}});var n=e(60696);let r='-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif',i={primaryColor:"#1890ff",modalWidth:600,tooltipPointerSize:10,beaconDiameterSmall:14,beaconDiameterMedium:18,beaconDiameterLarge:24,tooltipWidthSmall:200,tooltipWidth:300,tooltipWidthLarge:400,dialogTextColor:"#222",dialogLinkColor:"#1890ff",dialogLinkHoverColor:"#1890ff",dialogLineHeight:24,dialogFontFamily:r,dialogFontUrl:"",dialogFontSize:16,dialogBgColor:"#ffffff",dialogFilter:"drop-shadow(0 3px 10.5px rgba(0,0,0,0.15)) drop-shadow(0 1px 1.5px rgba(0,0,0,0.1))",dialogBorderRadius:10,dialogBorderWidth:1,dialogBorderColor:"#fefefe",dialogPaddingVertical:40,dialogPaddingHorizontal:40,closeColor:"rgb(173, 173, 173)",buttonBorderRadius:6,buttonFontWeight:500,buttonBgColor:"#1890ff",buttonBgColorHover:"#1890ff",buttonBgColorActive:"#1890ff",buttonTextColor:"#ffffff",buttonBorderColor:"#1890ff",buttonBorderColorHover:"#1890ff",buttonBorderColorActive:"#1890ff",buttonSecondaryBgColor:"#ffffff",buttonSecondaryBgColorHover:"#ffffff",buttonSecondaryBgColorActive:"#ffffff",buttonSecondaryFontWeight:500,buttonSecondaryTextColor:"#1890ff",buttonSecondaryBorderColor:"#1890ff",buttonSecondaryBorderColorHover:"#1890ff",buttonSecondaryBorderColorActive:"#1890ff",checklistLauncherPosition:n.ChecklistPosition.BOTTOM_RIGHT,checklistLauncherHPadding:20,checklistLauncherVPadding:20,checklistLauncherBorderRadius:30,checklistLauncherTextColor:"#ffffff",checklistLauncherBgColor:"#1890ff",checklistLauncherFontWeight:500,checklistCheckmarkBgColor:"#09AA14",checklistHorizontalPadding:20,checklistVerticalPadding:20,checklistWidth:360,checklistFilter:"drop-shadow(0 3px 10.5px rgba(0,0,0,0.15)) drop-shadow(0 1px 1.5px rgba(0,0,0,0.1))",checklistTaskCompletionDecoration:n.ChecklistDecoration.STRIKE,progressBarTextColor:"#A9A9A9",progressBarHeight:8,progressBarColor:"#1890ff",checklistProgressBarVisible:!0,dialogProgressBarVisible:!1,beaconColor:"#1890ff",backdropColor:"#000000",backdropLightOpacity:20,backdropMediumOpacity:60,backdropHeavyOpacity:100,backdropHighlightShadow:"0 0 4px 0px rgba(255,255,255,0.1), 0 0 0 1000vw rgba(0,0,0,0.7)",backdropHighlightBorderColor:"#1890ff",anchorHighlightOpacity:80,defaultStepAppearance:n.FlowStepAppearance.MODAL,defaultNavigationButtons:!1,defaultNavigationButtonsStepCount:!0,defaultEscapeView:!1,defaultBackdrop:null,watermarkImageSrc:null,watermarkPosition:null,watermarkHref:null,watermarkOpacity:80,bannerEnabled:!1,bannerColor:"#1890ff",bannerText:"Example CTA Banner",bannerTextColor:"#ffffff",bannerButtonEnabled:!0,bannerButtonColor:"#ffffff",bannerButtonText:"Get Started",bannerButtonTextColor:"#000000",bannerButtonLink:"https://docs.navattic.com/"},a={id:0,title:"Light theme",config:i};({...i})},22112:function(o,t,e){e.d(t,{nF:function(){return ProjectMetadataContextProvider},D:function(){return useProjectMetadata}});var n=e(2784),r=e(47330);let i=(0,n.createContext)({id:"",showNavatticBranding:!1,workspaceSlug:"",initialFlowId:"",scaleStrategy:r.V1.Responsive,mobileStrategy:r.Sy.Optimized,hasChecklist:!1,offline:!1,projectShareLink:void 0});var a=e(52322);let ProjectMetadataContextProvider=o=>{var t;let{project:e={},checklist:c,offline:l=!1,projectShareLink:d,children:s}=o,{id:p="",showNavatticBranding:f=!1,workspaceSlug:g="",initialFlowId:h="",scaleStrategy:u=r.V1.Responsive,mobileStrategy:b=r.Sy.Optimized}=e,x=!!(null==c?void 0:null===(t=c.published)||void 0===t?void 0:t.tasks),m=(0,n.useMemo)([p,f,g,h,u,b,x,l,d]);return(0,a.jsx)(i.Provider,{value:m,children:s})},useProjectMetadata=()=>(0,n.useContext)(i)},28625:49548:55763:95841:88702:71942:function(o,t,e){e.d(t,{Is:function(){return getThemeConfig},dQ:function(){return applyThemeDefaults}});var n=e(15366),r=e(98751),i=e(27426),a=e(20851);let{config:c}=n.LIGHT_THEME,getThemeConfig=function(){var o,t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{primary:a="#1890ff",modalWidth:l=600,tooltipWidth:d=300,tooltipPointerSize:s=10,tooltipWidthSmall:p=200,tooltipWidthLarge:f=400,beaconDiameterSmall:g=14,beaconDiameterMedium:h=18,beaconDiameterLarge:u=24,dialogTextColor:b="#222222",dialogLinkColor:x="#1890ff",dialogLineHeight:m=24,dialogFontFamily:v=n.e,dialogFontUrl:C="",dialogFontSize:k=16,dialogBgColor:y="#FFFFFF",dialogFilter:w="drop-shadow(0 3px 10.5px rgba(0,0,0,0.15)) drop-shadow(0 1px 1.5px rgba(0,0,0,0.1))",dialogBorderRadius:S=10,dialogBorderWidth:F=1,dialogBorderColor:B="#fefefe",dialogPaddingVertical:T=40,dialogPaddingHorizontal:R=40,closeColor:L="rgb(173, 173, 173)",buttonBorderRadius:H=6,buttonFontWeight:P=500,buttonBgColor:z="#1890ff",buttonBgColorHover:I="#1890ff",buttonBgColorActive:M="#1890ff",buttonTextColor:W="#FFFFFF",buttonBorderColor:E="#1890ff",buttonBorderColorHover:D="#1890ff",buttonBorderColorActive:A="#1890ff",buttonSecondaryBgColor:j="#FFFFFF",buttonSecondaryBgColorHover:V="#FFFFFF",buttonSecondaryBgColorActive:N="#FFFFFF",buttonSecondaryFontWeight:O=500,buttonSecondaryTextColor:G="#1890ff",buttonSecondaryBorderColor:_="#1890ff",buttonSecondaryBorderColorHover:U="#1890ff",buttonSecondaryBorderColorActive:Z="#1890ff",checklistLauncherPosition:K="BOTTOM_RIGHT",checklistLauncherHPadding:X=20,checklistLauncherVPadding:$=20,checklistLauncherBorderRadius:Q=30,checklistLauncherBgColor:Y="#1890ff",checklistLauncherTextColor:q="#FFFFFF",checklistLauncherFontWeight:J=500,checklistCheckmarkBgColor:oo="#09AA14",checklistHorizontalPadding:ot=20,checklistVerticalPadding:oe=20,checklistWidth:on=360,checklistFilter:or="drop-shadow(0 3px 10.5px rgba(0,0,0,0.15)) drop-shadow(0 1px 1.5px rgba(0,0,0,0.1))",checklistTaskCompletionDecoration:oi="STRIKE",progressBarTextColor:oa="#A9A9A9",progressBarHeight:oc=8,progressBarColor:ol="#1890ff",checklistProgressBarVisible:od=!0,dialogProgressBarVisible:os=!0,beaconColor:op="#1890ff",backdropColor:of="#000000",backdropLightOpacity:og=20,backdropMediumOpacity:oh=60,backdropHeavyOpacity:ou=100,backdropHighlightBorderColor:ob="#1890ff",backdropHighlightShadow:ox="0 0 4px 0px rgba(255,255,255,0.1), 0 0 0 1000vw rgba(0,0,0,0.7)",navigationBtnsTopBorderColor:om="rgba(209, 213, 219,.2)"}=e,ov=null!==(t=null!==(o=e.dialogLinkHoverColor)&&void 0!==o?o:x)&&void 0!==t?t:"#1890ff",oC=(0,r.kd)(s,c.tooltipPointerSize),ok=(0,r.kd)(F,c.dialogBorderWidth),oy=(0,i._)(y)?"#fff":"rgb(0,0,0,.4)";return{config:{useRootStyles:!1},space:[0,4,8,16,32,64,128,256,512],fonts:{body:v,heading:v,monospace:'"Roboto Mono", monospace'},fontSizes:[12,14,16,20,24,32,48,64,96],fontWeights:{body:400,heading:600,bold:600},lineHeights:{body:1.5,heading:1.125},colors:{text:"#141414",background:"#fff",secondary:"#722ed1",muted:"#f0f0f0",gray:"rgba(0, 0, 0, 0.45)",input:"rgba(0, 0, 0, 0.65)",offset:"rgba(255, 255, 255, 0.8)"},text:{default:{color:"text",fontSize:1.1},heading:{fontFamily:"heading",fontWeight:"heading",lineHeight:"heading"},subtitle:{color:b.substring(0,7)+"cc"}},forms:{select:{border:"1px solid #bfbfbf"},label:{marginBottom:"8px","&.mobile":{fontSize:"calc(30px + 2vh)",marginBottom:"calc(2vh)"}},input:{fontSize:"1.1rem",padding:"19px 12px",border:"1px solid #bfbfbf","&::placeholder":{color:b,opacity:".7"},"&.mobile":{fontSize:"calc(2rem + 1vh)",padding:"calc(.2rem + 1.75vh)"}},checkbox:{marginLeft:"-2px"},textarea:{border:"1px solid #bfbfbf",resize:"none"},inputTransparent:{border:"none",marginBottom:0}},buttons:{full:{width:"100%",padding:"15px",justifyContent:"center","&:disabled":{background:"#E5E5E5",color:"rgba(0,0,0,.4)",cursor:"not-allowed !important"},borderColor:E,borderRadius:"".concat(H,"px"),background:z,color:W,fontWeight:P,"&:hover":{background:I,borderColor:D},"&:active":{background:M,borderColor:A},"&.mobile":{marginTop:"20px"}},fullDisabled:{width:"100%",padding:"15px",justifyContent:"center",background:"rgba(0,0,0,.4)"},primary:{cursor:"pointer",outline:0,transitionDuration:"0.2s",transitionProperty:"background, borderColor",paddingLeft:"10px",paddingRight:"10px",paddingTop:"5px",paddingBottom:"5px",marginTop:"5px",display:"inline-block !important",alignItems:"center",svg:{marginRight:"8px"},borderWidth:"1px",borderStyle:"solid",borderColor:E,borderRadius:"".concat(H,"px"),background:z,color:W,fontFamily:v,fontWeight:P,"&.mobile":{margin:".75vh",padding:"3vh",borderRadius:"calc(".concat(H,"px + .5vh)")},"&.btn-loading":{color:"#fff"},"&:hover":{background:I,borderColor:D},"&:active":{background:M,borderColor:A},"&:focus":{outline:"5px auto -webkit-focus-ring-color",boxShadow:"0 0 0 2px rgba(0,0,0,.2)"},"&.navattic-btn-secondary":{background:j,color:G,fontWeight:O,borderColor:_,"&:hover":{background:V,borderColor:U},"&:active":{background:N,borderColor:Z}},"&.escape-btn":{all:"initial",visibility:"inherit",svg:{marginRight:0},color:L,"&:hover":{color:"rgb(196,196,196)",cursor:"pointer"}},"&.checklist":{all:"initial",svg:{marginRight:0},color:L},"&.back":{svg:{marginTop:"7.5px",marginLeft:"10px",height:"1.3rem",width:"1.3rem"},"&.mobile-icon":{svg:{height:"calc(50px + 1vh)",width:"auto",marginTop:"15px",marginLeft:"10px"}}},"&.close":{svg:{marginTop:"5px",marginLeft:"5px",marginRight:"5px",height:"1.5rem",width:"1.5rem"},"&.mobile-icon":{svg:{height:"calc(60px + 2vh)",width:"auto",marginTop:"0px",marginLeft:"0px"}},"&:hover":{color:"rgb(196,196,196)",cursor:"pointer"}},"&.menu-btn":{all:"initial",svg:{height:"calc(56px + 2vh)",width:"auto"},color:L,"&:hover":{color:"rgb(196,196,196)",cursor:"pointer"}}},inverse:{marginTop:"5px",border:"1px solid ".concat(_),background:j,color:G,"&:hover":{border:"1px solid #222",background:"transparent"}},transparent:{background:"transparent",display:"flex",alignItems:"center",svg:{marginRight:"8px"},"&:hover":{background:"transparent"}},multi:{cursor:"pointer",outline:0,width:"100%",maxWidth:"300px",padding:"10px",margin:"0 auto 10px auto",justifyContent:"center",transition:"0.2s",display:"inline-block !important",alignItems:"center",svg:{marginRight:"8px"}}},styles:{root:{fontFamily:"body",lineHeight:"body",fontWeight:"body",fontSize:1},h1:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:5},h2:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:4},h3:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:3},h4:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:2},h5:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:1},h6:{color:"text",fontFamily:"heading",lineHeight:"heading",fontWeight:"heading",fontSize:0},p:{color:"text",fontFamily:"body",fontWeight:"body",lineHeight:"body"},img:{maxWidth:"100%"},iframe:{minWidth:0,minHeight:0,maxWidth:"none",maxHeight:"none",border:"none",zIndex:9999999},PreviewMessage:{position:"absolute",fontWeight:500,letterSpacing:".02rem",fontSize:".6rem",color:oy},Dialog:{pointerEvents:"none",display:"flex",top:0,left:0,flexDirection:"column",width:340,filter:w,fontFamily:v,"&.navattic-modal":{width:"".concat(l,"px")},"&.navattic-tooltip":{width:"".concat(d,"px")}},DialogContainer:{pointerEvents:"all",position:"relative",width:"100%",height:"100%"},DialogFrame:{position:"relative",width:"100% !important",display:"block",border:0,overflow:"hidden",borderRadius:10,zIndex:2147483645},DialogFrameRoot:{overflow:"hidden",position:"relative",display:"flex",flexDirection:"column",borderRadius:"".concat(S,"px"),fontSize:"".concat(k,"px"),lineHeight:"".concat(m,"px"),border:"".concat(F,"px solid ").concat(B),backgroundColor:y,color:b,"&.mobile":{height:"100%",justifyContent:"space-between",borderRadius:"calc(".concat(S,"px + .5vh)"),borderBottomLeftRadius:0,borderBottomRightRadius:0,border:"calc(".concat(F,"px + .25vh) solid ").concat(B),fontSize:"calc(".concat(k,"px + 3vh)"),lineHeight:"calc(".concat(m,"px + 4vh)")},"&.form":{justifyContent:"center"},"&::-webkit-scrollbar":{display:"none"},scrollbarWidth:"none",a:{color:x,borderBottomColor:x,"&:hover":{color:ov,borderBottomColor:ov}}},modalTextContainer:{zIndex:2147483647,paddingTop:"".concat(T,"px"),paddingLeft:"".concat(R,"px"),paddingRight:"".concat(R,"px"),"&.buttonless":{paddingBottom:"".concat(T,"px")},"&.nav-buttons":{paddingBottom:"".concat(T,"px")},"&.mobile":{paddingTop:0,paddingLeft:"calc(".concat(R,"px + 1vh)"),paddingRight:"calc(".concat(R,"px + 1vh)"),overflow:"scroll","::-webkit-scrollbar":{width:"0px"}},"&.escape-btn":{paddingTop:"".concat(T/4,"px")}},tooltipTextContainer:{zIndex:2147483647,paddingTop:"".concat(T/2,"px"),paddingLeft:"".concat(R/2,"px"),paddingRight:"".concat(R/2,"px"),"&.buttonless":{paddingBottom:"".concat(T/2,"px")},"&.nav-buttons":{paddingBottom:"".concat(T/2,"px")},"&.mobile":{paddingTop:0,paddingLeft:"calc(".concat(R/2,"px + 1vh)"),paddingRight:"calc(".concat(R/2,"px + 1vh)"),overflow:"scroll","::-webkit-scrollbar":{width:"0px"}},"&.escape-btn":{paddingTop:"".concat(T/8,"px")}},ButtonsRow:{button:{zIndex:2147483647,marginRight:"1rem","&:last-child":{marginRight:0}},marginBottom:"".concat(T+8,"px"),"&.tooltipButtons":{marginBottom:"".concat(T/2+8,"px")}},CloseContainer:{color:L,zIndex:9999,cursor:"pointer",width:"calc(64px + 5vh)",paddingTop:".75vh"},Close:{color:L,zIndex:9999,cursor:"pointer",flex:"none"},DialogHeaderContainer:{justifyContent:"flex-end","&.full-header":{justifyContent:"space-between"},"&.back-header":{justifyContent:"flex-start"},"&.escape-btn":{color:L,paddingTop:"".concat(T/4,"px"),paddingLeft:"".concat(R/4,"px"),paddingRight:"".concat(R/4,"px")}},DialogModal:{width:"640px",opacity:1,position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},ChecklistLauncherContainer:{zIndex:999999999999,bottom:"20px",right:"20px"},ChecklistLauncher:{outline:"none !important",border:"none !important",userSelect:"none !important",cursor:"pointer",width:"auto",display:"flex",justifyContent:"center",alignItems:"center",fontWeight:J,padding:"".concat($,"px ").concat(X,"px"),borderRadius:"".concat(Q,"px"),background:Y,color:q},ChecklistLauncherRemainderWidget:{minWidth:24,width:24,height:24,borderRadius:"100%",justifyContent:"center",alignItems:"center",fontWeight:600,fontSize:"0.8rem",backgroundColor:"#fff",color:Y},ChecklistBox:{background:y,color:b,flexDirection:"column",height:"100%",width:"100%",borderRadius:"10px",overflow:"hidden"},ChecklistWrapper:{width:"360px !important",display:"flex",flexDirection:"column",filter:or},ChecklistContainer:{pointerEvents:"all",position:"relative",overflow:"hidden",width:"100%",height:"100%"},ChecklistTaskCheck:{width:"2rem",height:"2rem",border:"1px solid #cfdce6",borderRadius:"100%",marginRight:"1rem",padding:"0.375rem",color:"#fff","&.completed":{backgroundColor:oo},"&.mobile":{width:"5rem",height:"5rem",padding:"0.5rem",marginLeft:"4rem",marginRight:"4rem",marginTop:"3.5rem",marginBottom:"3.5rem"}},DialogProgressBarContainer:{zIndex:2147483647,width:"100%",display:"".concat(os?"block":"none")},ChecklistProgressBarContainer:{alignItems:"center",width:"55%",color:oa},ChecklistProgressBar:{background:"#EDEDED",borderRadius:8,overflow:"hidden",width:"100%"},ChecklistProgressBarCompletion:{backgroundColor:ol,height:"".concat(oc,"px"),borderRadius:8},ChecklistTaskText:{flex:1,"&.navattic-task-completed":{textDecoration:"".concat("STRIKE"==oi?"line-through":"none"),opacity:"".concat("OPACITY"==oi?".3":".4")}},BackDrop:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:999999999,backgroundColor:of,"&.backdrop-light":{opacity:"".concat(og,"%")},"&.backdrop-medium":{opacity:"".concat(oh,"%")},"&.backdrop-heavy":{opacity:"".concat(ou,"%")}},BackDropHighlight:{boxShadow:ox,position:"fixed",pointerEvents:"none",zIndex:99999999},ArrowTip:{zIndex:2147483646,position:"absolute",width:"".concat(s,"px"),height:"".concat(s,"px"),"&.navattic-arrow-placement-left":{right:"".concat(-1*(oC/2-2*ok),"px"),top:"calc(50% + ".concat(-1*(oC/2+ok),"px)"),"&::before":{borderBottom:"".concat(F,"px solid ").concat(y),borderRight:"".concat(F,"px solid ").concat(B),borderLeft:"".concat(F,"px solid ").concat(y),borderTop:"".concat(F,"px solid ").concat(B),backfaceVisibility:"hidden",clipPath:"polygon(0% 5%, 95% 100%, 100% 0%)"}},"&.navattic-arrow-placement-right":{left:"".concat(-1*oC/2,"px"),top:"calc(50% + ".concat(-1*(oC/2+ok),"px)"),"&::before":{borderBottom:"".concat(F,"px solid ").concat(B),borderRight:"".concat(F,"px solid ").concat(y),borderLeft:"".concat(F,"px solid ").concat(B),borderTop:"".concat(F,"px solid ").concat(y),backfaceVisibility:"hidden",clipPath:"polygon(5% 0%, 100% 95%, 0% 100%)"}},"&.navattic-arrow-placement-top":{bottom:"".concat(-1*(oC/2-2*ok),"px"),right:"calc(50% + ".concat(-1*(oC/2-ok),"px)"),"&::before":{borderBottom:"".concat(F,"px solid ").concat(B),borderRight:"".concat(F,"px solid ").concat(B),borderLeft:"".concat(F,"px solid ").concat(y),borderTop:"".concat(F,"px solid ").concat(y),backfaceVisibility:"hidden",clipPath:"polygon(100% 100%, 0% 95%, 95% 0%)"}},"&.navattic-arrow-placement-bottom":{top:"".concat(-1*oC/2,"px"),right:"calc(50% + ".concat(-1*(oC/2-ok),"px)"),"&::before":{borderBottom:"".concat(F,"px solid ").concat(y),borderRight:"".concat(F,"px solid ").concat(y),borderLeft:"".concat(F,"px solid ").concat(B),borderTop:"".concat(F,"px solid ").concat(B),backfaceVisibility:"hidden",clipPath:"polygon(0% 0%, 100% 0%, 0% 100%)"}},"&::before":{display:"table",position:"absolute",content:'""',transform:"rotate(45deg)",background:y,width:"".concat(s,"px"),height:"".concat(s,"px"),boxSizing:"content-box"}},NavigationBtnsContainer:{justifyContent:"space-between",alignItems:"center",borderTop:"1px solid ".concat(om),padding:"8px 10px",minHeight:55,"&.mobile":{borderTop:"calc(3px + .1vh) solid ".concat(om),padding:"2vh"}},NavigationBtnsStepCount:{position:"absolute",margin:"0 auto",right:0,left:0,textAlign:"center",color:null!=b?b:"rgba(209, 213, 219)",opacity:".4",zIndex:5},Beacon:{background:op,"&:before":{boxShadow:"0px 0px 2px 2px ".concat(op)}},HorizontalBar:{background:"#fff",zIndex:9999999999999,position:"fixed",width:"100%",height:"60px",border:0,marginBottom:0},HorizontalBarRow:{padding:"0 2rem",alignItems:"center",justifyContent:"space-between",color:"#fff",flex:1,height:"100%"},ElementSelectionRow:{margin:"auto",display:"flex",alignItems:"center",padding:"1rem"},SelectionBox:{zIndex:1e6,position:"fixed",top:"50vh",right:"50vw",bottom:"50vh",left:"50vw",borderRadius:"2px",boxShadow:"0 0 4px 0 rgba(69,121,228,0.5), 0 0 0 1000vw rgba(228,235,240,0.6)",pointerEvents:"none"},CaptureWidget:{zIndex:9999999999999,position:"fixed",bottom:"20px",right:"20px",background:"#fff",boxShadow:"rgba(0, 0, 0, 0.16) 0px 5px 40px",border:"1px solid #eaeaea",borderRadius:"4px",width:"250px"},PoweredBy:{color:"".concat(b," !important"),transition:"0.2s",fontSize:"12px",opacity:".4",margin:"0 auto 12px auto","&:hover":{opacity:".8"}}}}},l=n.LIGHT_THEME.config;function applyThemeDefaults(o){let t={...o};if(!t.dialogLinkHoverColor){var e;t.dialogLinkHoverColor=null!==(e=t.dialogLinkColor)&&void 0!==e?e:void 0}for(let o in l)Object.prototype.hasOwnProperty.call(l,o)&&(0,a.Rw)(t[o])&&(t[o]=l[o]);return t}t.ZP=getThemeConfig},2669:52484:27426:]);
//# sourceMappingURL=5342-15da570478c5cd5b.js.map