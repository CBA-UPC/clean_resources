(self.webpackChunkweb=self.webpackChunkweb||[]).push([[94366,34581],{78554:(e,t,i)=>{"use strict";i.d(t,{d$:()=>s});,25737:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>b});var s,o,n,a=i(67294),r=i(37974),c=i(94829),l=i(81419),d=i(54620),p=i(29208),u=i.n(p),h=i(61248),g=i(78554),m=i(4423),S=i(33487),f=i(72216);ss T extends a.Component{constructor(e){super(e),this.loginEventRefresh=()=>{this.TopBandResetSessionStorage=!0,this.removeStorage(S.KQi.TopBand.SESSIONNAME,!0)},this.checkMounting=()=>{const e=this.getPrcValue(),{componentName:t}=this.props;let i;if("TopBand"===t){const e=this.getStorage(S.KQi[t].SESSIONNAME,!0),s=this.checkComponentExpiryTime(S.KQi[t].DISMISS),o=this.checkComponentExpiryTime(S.KQi[t].CTACLICK);i=!e&&o&&s}else i=this.checkComponentExpiryTime(S.KQi[t]);i&&(e!==S.OT?this.end_date_timestamp||e===S.OT||this.getEndDate((e=>{this.setState({mounted:{[t]:!0},end_date:e})})):this.setState({mounted:{[t]:!0}}))},this.getEndDate=e=>{(0,h.fx)(this.props.userPrcData).then((t=>{const i=t.data.endDate||!1;this.end_date_timestamp=t.data.timestamp||!1,e(i)}))},this.updateCommonTranslationState=this.getStorage=(e,t)=>(t?sessionStorage:localStorage).getItem(e),this.removeStorage=(e,t)=>(t?sessionStorage:localStorage).removeItem(e),this.checkComponentExpiryTime=e=>{if(!e)return!0;try{const t=(new Date).getTime(),i=this.getStorage(e);return!i||i&&t>i}catch(e){console.log(e)}return!0},this.showBlockerToFTU=e=>{const t=this.getActiveDaysLeft();return e===S.BGv&&t>0&&t<=this._const.SHOW_BLOCKER_TO_FTAU_DAYS_BEFORE},this.getActiveDaysLeft=()=>(this.end_date_timestamp-(new Date).getTime())/(this._const.HRS_IN_DAY*this._const.MINS_IN_HR*this._const.SEC_IN_MIN*this._const.MILLISEC_IN_SEC),this.replaceTokens=e=>{const t={date:this.state.end_date,timesPoints:this.timesPoints};return"function"==typeof e?e({},t)):e},this.fireGA=(e,t,i)=>{const s={};e&&(s.gaAction=e,s.gaLabel=t||"",s.noSpaceReplace=!0,s.nonInteraction=i,(0,m.z)({data:s}))},this.learnmoreClickHandler=(e,t)=>{(0,g.d$)({formType:"learnMoreScreen",utmsFinal:t.utms}),this.fireGA(t.ga_action,t.ga_label)},this.setInLocalStorage=(e,t,i)=>{try{return(i?sessionStorage:localStorage).setItem(e,t),!0}catch(e){return!1}},this.toiPlusSubscriptionHandler=(e,t)=>{if(e.preventDefault(),"planScreen"===t){const e=this.getPrcValue();var i,s;if(this.props.userData.isLoggedIn||d.ZP.get("ssoid")||d.ZP.get("ssoId"))(0,h.YY)(this.props.isWapView).then((t=>{var i;window.location.href=(0,f.Zo)((0,f.vQ)(null===(i=this.props.translationData)||void 0===i?void 0:i.unifiedNodes[`prc${e}`],t))}));else window.location.href=(0,f.Zo)((0,f.vQ)(null===(i=this.props.translationData)||void 0===i||null===(s=i.unifiedNodes)||void 0===s?void 0:s.notLoggedIn))}},this.ctaClickHandler=(e,t)=>{switch(this.getPrcValue()){case S.OT:(0,g.d$)({formType:"paymentScreen",stop_redirection_for_subscribed:!0,utmsFinal:t.utms}),this.fireGA(t.ga_action,t.ga_label);break;case S.BGv:case S.dRz:case S.wAI:case S.uV$:(0,g.d$)({formType:"paymentScreen",utmsFinal:t.utms}),this.fireGA(t.ga_action,t.ga_label)}},this.getExpiryHoursAndCloseWidget=(e,t,i)=>{const s=this._const.MINS_IN_HR*this._const.SEC_IN_MIN*this._const.MILLISEC_IN_SEC,o=(new Date).getTime()+t*s,{componentName:n}=this.props;this.setInLocalStorage(e,o,i),this.unmountWidget(n)},this.unmountWidget=e=>{this.setState({mounted:{[e]:!1}})},this.clickHandler=(e,t,i=!1)=>{null!=t&&t.ga_action&&(0,h.Pi)(t.ga_action,"NON_STORY"),i&&(0,c.WU)(this.state.commonNudgesTranslations.currencyCode,"dimension38"),t&&t.nudgeType&&(0,c.WU)(t.nudgeType);const{componentName:s}=this.props;switch(t.type){case"TopBandBtnInView":this.TopBandResetSessionStorage||this.setInLocalStorage(S.KQi[s].SESSIONNAME,!0,!0);break;case"TopBandBtnClose":this.getExpiryHoursAndCloseWidget(S.KQi[s].DISMISS,this._const.TOPBAND_DISMISS_EXPIRY_HOURS),this.fireGA(t.ga_action,t.ga_label);break;case"ToastBtnClose":this.getExpiryHoursAndCloseWidget(S.KQi[s],this._const.TOAST_TIP_EXPIRY_HOURS);break;case"SubscribeNudgeClose":this.unmountWidget(s),this.fireGA(t.ga_action,t.ga_label);break;case"AddFreeSessionLoyalUserClose":this.unmountWidget(s),this.fireGA(t.ga_action,t.ga_label),window.location.reload(!0);break;case"learnmore":this.learnmoreClickHandler(e,t);break;case"firega":this.fireGA(t.ga_action,t.ga_label,t.nonInteraction);break;case"cta_topband":this.getExpiryHoursAndCloseWidget(S.KQi[s].CTACLICK,this._const.TOPBAND_CTA_EXPIRY_HOURS),this.ctaClickHandler(e,t);break;case"SubscribeNudge":(0,g.d$)({formType:"paymentScreen",utmsFinal:t.utms}),this.fireGA(t.ga_action,t.ga_label);break;case"AddFreeSessionLoyalUsers":(0,g.d$)({formType:"paymentScreen",stop_redirection_for_subscribed:!0,utmsFinal:t.utms}),this.fireGA(t.ga_action,t.ga_label);break;case"planPage":this.fireGA(t.ga_action,t.ga_label),this.toiPlusSubscriptionHandler(e,"planScreen");break;case"toiplusSubscriptionPayment":this.toiPlusSubscriptionHandler(e,"paymentScreen"),this.fireGA(t.ga_action,t.ga_label);break;case"toiplusSubscriptionPlan_topBand":this.getExpiryHoursAndCloseWidget(S.KQi[s].CTACLICK,this._const.TOPBAND_CTA_EXPIRY_HOURS),this.fireGA(t.ga_action,t.ga_label);break;default:this.ctaClickHandler(e,t)}},this.getPrcValue=e=>{const{userData:t}=e||this.props;let i=0;return"undefined"!=typeof window&&window.location.href.indexOf("frmapp")>0&&(window.location.href.indexOf("pc=yes")>0||window.location.href.indexOf("pc2=yes")>0)&&(i=(0,h.Qw)(),0===i&&(i=S.nxK)),t&&t.prcValue?t.prcValue:i},this._const={HRS_IN_DAY:24,MINS_IN_HR:60,SEC_IN_MIN:60,MILLISEC_IN_SEC:1e3,SHOW_BLOCKER_TO_FTAU_DAYS_BEFORE:7,TOPBAND_CTA_EXPIRY_HOURS:72,TOPBAND_DISMISS_EXPIRY_HOURS:72,TOAST_TIP_EXPIRY_HOURS:24,prcStates:[S.dRz,S.BGv,S.wAI,S.uV$]},this.timesPoints=!1,this.state={LoadedComponent:!1,hasMounted:!1,mounted:{[e.componentName]:!1},commonNudgesTranslations:{}}}componentDidMount(){const{componentName:e}=this.props;var t;this.setState({hasMounted:!0}),this.state.LoadedComponent||this.setState({LoadedComponent:(t=e,a.lazy(())}),window.addEventListener("login_page_refresh",this.loginEventRefresh.bind(this)),this.checkMounting(),this.geoCountry=(0,h.Th)()}componentDidUpdate(e){(e.userData&&(e.userData.prcValue!==this.props.userData.prcValue||e.userPrcData!==this.props.userPrcData)||e.msid!==this.props.msid)&&this.checkMounting(),(void 0===this.state.commonNudgesTranslations||0===Object.keys(this.state.commonNudgesTranslations).length)&&this.props.translationData&&this.props.translationData.currencyCode&&this.updateCommonTranslationState()}renderSwitch(){const{LoadedComponent:e,commonNudgesTranslations:t}=this.state;if(!t||!t.currencyCode)return null;const i=this.getPrcValue(),{allActivity:s,theme:o,type:n,isWapView:r,componentName:c,msid:l,disableBlocker:d,force:p}=this.props,{defaultTimesPoints:u}=this.state.commonNudgesTranslations;let g;switch(this.timesPoints=(0,h.zs)(r,s,u),c){case"InlineWidget":(i===S.BGv&&this.showBlockerToFTU(i)||i!==S.BGv)&&(g={prc:i,replaceTokens:this.replaceTokens,clickHandler:this.clickHandler,points:this.timesPoints,theme:o,type:n,isWapView:r,fcap:this.props.fcap||!1,shortInlineWidgetTranslation:t&&t.inlineWidgetShort,longInlineWidgetTranslation:t&&t.inlineWidgetLong,useContentVisibilty:this.props.useContentVisibilty,isRHSWidgetAS:this.props.isRHSWidgetAS,userPrcData:this.props.userPrcData});break;case"Toast":g={prc:i,clickHandler:this.clickHandler,isWapView:r};break;case"TopBand":(i===S.BGv||p)&&(g={prc:i,clickHandler:this.clickHandler,replaceTokens:this.replaceTokens,isWapView:r,points:this.timesPoints,daysLeft:this.getActiveDaysLeft(),theme:o,force:p,topBandTranslation:t&&t.topBand});break;case"SubscribeNudge":g={prc:i,clickHandler:this.clickHandler,isWapView:r,points:this.timesPoints,isLogin:this.props.userData&&this.props.userData.isLoggedIn,getStorage:this.getStorage,setInLocalStorage:this.setInLocalStorage,msid:l,force:p,theme:o,disableBlocker:d,subscribeNudgeTranslation:t&&t.subscribeNudge};break;case"AddFreeSessionLoyalUsers":g={prc:this.props.userData&&this.props.userData.isLoggedIn?i:-1,clickHandler:this.clickHandler,isWapView:r,points:this.timesPoints,isLogin:this.props.userData&&this.props.userData.isLoggedIn,getStorage:this.getStorage,removeStorage:this.removeStorage,setInLocalStorage:this.setInLocalStorage,disableBlocker:d,theme:o,force:p};break;case"HPPrimeInlineWidget":g={prc:this.props.userData&&this.props.userData.isLoggedIn?i:-1,clickHandler:this.clickHandler,isWapView:r,hpPrimeInlineWidgetTranslation:t&&t.inlineWidgetNewHP,toiHpWidget:t&&t.TOIHPWidget,userPrcData:this.props.userPrcData};break;case"BottomToast":if(!this.props.showToiPlusCongratspopup)break;g={prc:this.props.userData&&this.props.userData.isLoggedIn?i:-1,getStorage:this.getStorage,removeStorage:this.removeStorage,setInLocalStorage:this.setInLocalStorage,userData:this.props.userData};break;case"ToiplusSubscribeInlineWidget":g={prcValue:this.props.userData&&this.props.userData.isLoggedIn?i:-1,clickHandler:this.clickHandler,isWapView:r,indiaHPTopNudge:t&&t.indiaHPTopNudge,currencyCode:t.currencyCode};break;default:return null}return g?a.createElement(e,g):null}render(){const{componentName:e,killSwitchStatus:t}=this.props,{data:{ps:i=null}={}}=t||{};return this.state.hasMounted?this.state.mounted[e]&&this.state.LoadedComponent||"InlineWidget"!==e?this.state.mounted[e]&&this.state.LoadedComponent&&(this.props.showToiPlusNudges||"BottomToast"===e||"TopBand"===e&&this.getPrcValue()===S.BGv||"HPPrimeInlineWidget"===e&&(this.getPrcValue()===S.BGv||this.getPrcValue()===S.nxK))&&(i||"HPPrimeInlineWidget"===e)?w(l.Z,{},void 0,w(a.Suspense,{fallback:o||(o=w("div",{}))},void 0,this.renderSwitch())):null:s||(s=w("div",{className:"primeScreenWidgetWrapper CLSPlaceholder"})):null}}T.defaultProps={allActivity:[],isWapView:!1,theme:void 0,componentName:"InlineWidget",type:void 0,userData:{},msid:void 0,force:!1,disableBlocker:void 0,killSwitchStatus:null,isPrime:!1,translationData:{},showToiPlusCongratspopup:!1,useContentVisibilty:!1,showToiPlusNudges:!1,isRHSWidgetAS:!1};const b=(0,r.$j)((e=>{var t,i;return{isPrime:e.isPrime,translationData:u()(e,"translationConfig.data",{}),userData:e.login&&e.login.userData?e.login.userData:{},allActivity:e.timespointmodal&&e.timespointmodal.allActivity,killSwitchStatus:e.toipluskillswitch&&e.toipluskillswitch.killSwitchStatus,showToiPlusCongratspopup:void 0!==e.toiplusconfig&&(null===(t=e.toiplusconfig)||void 0===t?void 0:t.showToiPlusCongratspopup),showToiPlusNudges:void 0!==e.toiplusconfig&&(null===(i=e.toiplusconfig)||void 0===i?void 0:i.showToiPlusNudges),userPrcData:e.login.userPrcData}}),null)(T)},48013:(e,t,i)=>{"use strict";i.d(t,{JR:()=>u,O6:()=>l,OD:()=>d,bp:()=>g,ep:()=>S,oM:()=>r,qc:()=>p,xz:);var s=i(42947),o=i(33487),n=i(63658),a=i(54620);const r="VIDEO_SUCCESS_EVENT";function c(e,t){s.Z.post(`${n.AJ}/timespoint/submit/activity/toi`,JSON.stringify(e),{headers:{"Content-Type":"application/json"}}).then((i=>{i.data.status,i&&i.data&&i.data.success&&(!function(e,t){if(void 0!==window.localStorage)try{let i=localStorage.getItem(o.Ls8);i=i?JSON.parse(i):{},i[e]?i[e].push(t):i[e]=[t],window.localStorage.setItem(o.Ls8,JSON.stringify(i))}catch(e){}}(e.aname,e.txnId),t(i))})).catch(()}function l(e){const t=(0,n.dK)(e);if(void 0!==window.localStorage){let e={};try{e=localStorage.getItem(o.Ls8);const i=t&&t.dailycheckin?t.dailycheckin:"";if(!e||!i)return;e=JSON.parse(e),e&&e[i]&&e[i].length>0&&(e[i]=[],window.localStorage.setItem(o.Ls8,JSON.stringify(e)))}catch(e){}}}function d(){return a.ZP.get("MSCSAuthDetails")?a.ZP.get("MSCSAuthDetails").split("=")[1]:""}function p(){return a.ZP.get("ssoid")}unction h(e,t,i,s,a=!1){const r="TOI",l="TOI",d=(p(),a?"msite":"web"),u=(0,n.dK)(a),h={pcode:`${r}`,scode:`${l}`,aname:`${u[e]||""}`,txnId:`${t}`,apiVersion:"23",clientId:"TOI",platform:`${d}`};if(!h.aname)return;const g=n=>{switch(i){case"deviceid":h.deviceId=n;break;case"ssoid":h.uid=n}(function(e,t){if(void 0===window.localStorage)return!0;let i={},s={},n=!1;try{if(i=window.localStorage.getItem(o.ls),s=localStorage.getItem(o.Ls8),!i)return!0;if(i=JSON.parse(i),s=JSON.parse(s),i&&i[t]){let a=s&&s.date?s.date:"";const r=new Date,c=[r.getDate(),r.getMonth(),r.getFullYear()].join("-");c!==a?(a=c,n=!0,s={},s.date=a,window.localStorage.setItem(o.Ls8,JSON.stringify(s))):(!s||!s[t]||s[t].length<i[t]&&-1===s[t].indexOf(e))&&(n=!0)}else n=!0}catch(e){n=!0}return n})(t,u[e])&&c(h,s)};"deviceid"===i?(void 0===window.tpsdk&&(window.tpsdk=window.tpsdk.l=1*new Date,window.tpsdk=window.tpsdk||{}),window.tpsdk("init",{platform:d,channelCode:"TOI"}),window.tpsdk("getDeviceId",g)):g(`${p()}`)}function g(e=!1,t,i,s){"string"!=typeof p()?h(t,i,"deviceid",s,e):h(t,i,"ssoid",s,e)}function m(e,t,i){"string"==typeof e&&e.indexOf("facebook")>=0&&g(i,"sh_fb",`fb_${t}`),"string"==typeof e&&e.indexOf("twitter")>=0&&g(i,"sh_tw",`tw_${t}`)}function S(){const e={pcode:"TOI",scode:"TOI",uid:p(),email:d()},t=e=>{if(!e)return;const t={uid:p(),pcode:"TOI",platform:"web",clientId:"TOI",deviceId:e};s.Z.post(`${n.AJ}/timespoint/init/toi`,JSON.stringify(t),{headers:{"Content-Type":"application/json"}})};return"function"==typeof window.tpsdk&&window.tpsdk("getDeviceId",t),window.TPWidget&&window.TPWidget.PostLoginActions({host:e.pcode,channel:e.scode,URL:escape(document.location.href),userId:e.uid,oid:"",email:e.email})}},89422:(e,t,i)=>{var s={"./AddFreeSessionLoyalUsers/index":[59510,59510],"./BottomToast/index":[27058,27058],"./HPPrimeInlineWidget/index":[79612,79612],"./InlineWidget/index":[89383,89383],"./SubscribeNudge/index":[17106,17106],"./Toast/index":[29677,29677],"./ToiplusSubscribeInlineWidget/index":[39226,96486,39226],"./TopBand/index":[77785,77785]};.keys=o.id=89422,e.exports=o}}]);
//# sourceMappingURL=articleshowv2_desktop_nonprime_es6_module.2f9b60d7.chunk.js.map