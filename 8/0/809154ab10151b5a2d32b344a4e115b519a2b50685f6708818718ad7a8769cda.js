"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[58378],{48013:(t,e,i)=>{i.d(e,{JR:()=>u,O6:()=>p,OD:()=>c,bp:()=>g,ep:()=>y,oM:()=>a,qc:()=>l,xz:()=>f});var o=i(42947),n=i(33487),s=i(63658),r=i(54620);const a="VIDEO_SUCCESS_EVENT";function d(t,e){o.Z.post(`${s.AJ}/timespoint/submit/activity/toi`,JSON.stringify(t),{headers:{"Content-Type":"application/json"}}).then((i=>{i.data.status,i&&i.data&&i.data.success&&(!function(t,e){if(void 0!==window.localStorage)try{let i=localStorage.getItem(n.Ls8);i=i?JSON.parse(i):{},i[t]?i[t].push(e):i[t]=[e],window.localStorage.setItem(n.Ls8,JSON.stringify(i))}catch(t){}}(t.aname,t.txnId),e(i))})).catch(()}function p(t){const e=(0,s.dK)(t);if(void 0!==window.localStorage){let t={};try{t=localStorage.getItem(n.Ls8);const i=e&&e.dailycheckin?e.dailycheckin:"";if(!t||!i)return;t=JSON.parse(t),t&&t[i]&&t[i].length>0&&(t[i]=[],window.localStorage.setItem(n.Ls8,JSON.stringify(t)))}catch(t){}}}function c(){return r.ZP.get("MSCSAuthDetails")?r.ZP.get("MSCSAuthDetails").split("=")[1]:""}function l(){return r.ZP.get("ssoid")}unction w(t,e,i,o,r=!1){const a="TOI",p="TOI",c=(l(),r?"msite":"web"),u=(0,s.dK)(r),w={pcode:`${a}`,scode:`${p}`,aname:`${u[t]||""}`,txnId:`${e}`,apiVersion:"23",clientId:"TOI",platform:`${c}`};if(!w.aname)return;const g=s=>{switch(i){case"deviceid":w.deviceId=s;break;case"ssoid":w.uid=s}(function(t,e){if(void 0===window.localStorage)return!0;let i={},o={},s=!1;try{if(i=window.localStorage.getItem(n.ls),o=localStorage.getItem(n.Ls8),!i)return!0;if(i=JSON.parse(i),o=JSON.parse(o),i&&i[e]){let r=o&&o.date?o.date:"";const a=new Date,d=[a.getDate(),a.getMonth(),a.getFullYear()].join("-");d!==r?(r=d,s=!0,o={},o.date=r,window.localStorage.setItem(n.Ls8,JSON.stringify(o))):(!o||!o[e]||o[e].length<i[e]&&-1===o[e].indexOf(t))&&(s=!0)}else s=!0}catch(t){s=!0}return s})(e,u[t])&&d(w,o)};"deviceid"===i?(void 0===window.tpsdk&&(window.tpsdk=window.tpsdk.l=1*new Date,window.tpsdk=window.tpsdk||{}),window.tpsdk("init",{platform:c,channelCode:"TOI"}),window.tpsdk("getDeviceId",g)):g(`${l()}`)}function g(t=!1,e,i,o){"string"!=typeof l()?w(e,i,"deviceid",o,t):w(e,i,"ssoid",o,t)}function f(t,e,i){"string"==typeof t&&t.indexOf("facebook")>=0&&g(i,"sh_fb",`fb_${e}`),"string"==typeof t&&t.indexOf("twitter")>=0&&g(i,"sh_tw",`tw_${e}`)}function y(){const t={pcode:"TOI",scode:"TOI",uid:l(),email:c()},e=t=>{if(!t)return;const e={uid:l(),pcode:"TOI",platform:"web",clientId:"TOI",deviceId:t};o.Z.post(`${s.AJ}/timespoint/init/toi`,JSON.stringify(e),{headers:{"Content-Type":"application/json"}})};return"function"==typeof window.tpsdk&&window.tpsdk("getDeviceId",e),window.TPWidget&&window.TPWidget.PostLoginActions({host:t.pcode,channel:t.scode,URL:escape(document.location.href),userId:t.uid,oid:"",email:t.email})}},84126:(t,e,i)=>{i.r(e),i.d(e,{default:()=>I,reinitializeTPWidgets:()=>h});var o,n,s=i(67294),r=i(37974),a=i(29208),d=i.n(a),p=i(54620),c=i(96079),l=i(6762),u=i(33487),w=i(5905),g=i(48013);onst y="reinit_tp_widget";function h(t){const e=new Event(y);"object"==typeof t&&t.divId&&t.widgetType&&(e.customObj=t),window.dispatchEvent(e)}class m extends s.Component{constructor(t){super(t),this.getUserengagementMetrics=t=>{if("object"==typeof window&&window.tpsdk){const e=p.ZP.get("TicketId")||"",i={platform:this.props.isWapView?"msite":"web",channelCode:"TOI"};t&&(i.ticketId=e),window.tpsdk("init",i),window.tpsdk("fetch","nextEngagement","",this.props.getLoginTimesPointData)}},this.state={},this.sdkLoaded=!1,this.isLoggedIn=!1}componentDidMount(){window.TimesGDPR&&window.TimesGDPR.common.consentModule.gdprCallback&&window.TimesGDPR.common.consentModule.gdprCallback((t=>{t.isEUuser||(this.props.isWapView&&this.props.userData&&"boolean"==typeof this.props.userData.isLoggedIn&&this.getUserengagementMetrics(this.props.userData.isLoggedIn),!this.props.isWapView||this.props.loadTimePointSdk?this.loadSDK():this.setState({sdkLoaded:!0}),this.setConfigObj(),document.body.addEventListener("tpwidget-ready",(()=>{window.loaded="tploaded",this.props.disableTimesPointWidget||(this.initialiseTimesPoint(),window.addEventListener(y,this.reinitTPWidget.bind(this)))})),this.props.getAllActivities(this.props.isMobile),(0,g.bp)(this.props.isMobile,"dailycheckin",Math.round((new Date).getTime())))}))}componentDidUpdate(t){this.state.sdkLoaded&&((!t.userData||!t.userData.isLoggedIn)&&this.props.userData&&this.props.userData.isLoggedIn||this.props.userData.isLoggedIn&&!this.isLoggedIn)&&((0,g.ep)(),this.isLoggedIn=!0,(0,g.bp)(this.props.isMobile,"visit",Math.round((new Date).getTime())),(0,g.bp)(this.props.isMobile,"register",Math.round((new Date).getTime()))),this.state.sdkLoaded&&t.userData&&t.userData.isLoggedIn&&!1===this.props.userData.isLoggedIn&&(window.TPWidget&&window.TPWidget.logoutAction(),this.isLoggedIn=!1),this.state.sdkLoaded&&t.userData&&!1===t.userData.isLoggedIn&&this.props.userData&&!0===this.props.userData.isLoggedIn&&((0,g.O6)(this.props.isMobile),"undefined"!=typeof window&&window.TimesGDPR&&window.TimesGDPR.common.consentModule.gdprCallback&&window.TimesGDPR.common.consentModule.gdprCallback((t=>{t.isEUuser||(0,g.bp)(this.props.isMobile,"dailycheckin",Math.round((new Date).getTime()))}))),this.props.isWapView&&this.props.userData&&"boolean"==typeof this.props.userData.isLoggedIn&&t.userData&&t.userData.isLoggedIn!==this.props.userData.isLoggedIn&&this.getUserengagementMetrics(this.props.userData.isLoggedIn)}reinitTPWidgetetConfigObj(){this.TPconfig={widgettypes:[{divId:"widget-head",widgetType:"tpwidget-one"},{divId:"widget-tp-sticky",widgetType:"tpwidget-two"},{divId:"widget-two-ATF",widgetType:"tpwidget-two"},{divId:"widget-two-BTF",widgetType:"tpwidget-two"},{divId:"widget-two",widgetType:"tpwidget-two"},{divId:"widget-two-vs",widgetType:"tpwidget-two"},{divId:"widget-banner",widgetType:"tpwidget-banner",viewportId:"TOI",carousel:!0,platform:this.props.isWapView?"msite":"web"},{divId:"tpwidget-offer-full",widgetType:"tpwidget-offer-full",platform:this.props.isWapView?"msite":"web"}],widgetsArray:[],isUserLoggedIn:!1,isInitialised:!1,userInfo:[],email:(0,g.OD)(),url:escape(document.location.href),pcode:"TOI",scode:"News",oid:"",uid:(0,g.qc)(),aname:"",txnId:"",firsttime:!0}}loadSDK(){this.sdkLoaded=!0;const t=this;window.tp_js=function(e,i,o){const n=e.getElementsByTagName(i)[0],s=window.tp_js||{};if(e.getElementById(o))return s;const r=e.createElement(i);return r.id=o,r.src=`https://${u.PqG,"image.timespoints.iimg.in"}/static/tpwidgetV2/static/dist/js/main.js`,r.onload=n.parentNode.insertBefore(r,n),s._e=[],s.ready=s}(document,"script","tp-wjs")}initialiseTimesPoint(t){this.a="";const e=("object"==typeof t?[t]:this.TPconfig.widgettypes).map((t=>"widget-banner"===t.divId?{ele:t.divId,widgetType:t.widgetType,viewportId:t.viewportId,platform:t.platform,carousel:t.carousel,channel:"TOI"}:{ele:t.divId,widgetType:t.widgetType,channel:"TOI",platform:this.props.isWapView?"msite":"web",callback));void 0!==window.TPWidget&&"function"==typeof window.TPWidget.init&&((0,g.JR)()?(this.TPconfig.email=(0,g.OD)(),this.TPconfig.uid=(0,g.qc)(),this.ticketId=(0,g.JR)(),window.TPWidget.init({widgets:e,userLoginInfo:{ticketId:this.ticketId}})):window.TPWidget.init({widgets:e}),this.props.setInititializeTPFlag())}render(){const{userPointsData:t,isMobile:e}=this.props;return t&&e?o||(o=f("div",{})):null}}m.defaultProps={userData:void 0,userPointsData:void 0,loadTimePointSdk:!1,isMobile:!1};const I=(0,r.$j)((t=>({userPointsData:t.timesPoint.userData,userData:d()(t,"login.userData",{}),isMobile:t.isMobile})),(t=>({getLoginTimesPointData:e=>{t((0,w.Oq)(e))},setInititializeTPFlag:getAllActivities:)))(m)},5905:(t,e,i)=>{i.d(e,{EJ:()=>g,Oq:()=>y,gj:()=>f,jo:()=>w});var o=i(48013),n=i(49669);function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const d="timesPoint",p=c=p("LOGIN_POINTS_RECEIVED"),l=(p("NON_LOGIN_POINTS_RECEIVED"),p("POINTS_RECEIVED_ERROR"),p("INITIALIZE_TP_FLAG")),u=p("HEADER_CROWN_REWARD_POINTS");function w(t="",e=!1){(0,o.bp)(e,"watch_video",t,"","News")}function g(t){return{type:u,payload:t}}unction y(t){let e={response:{}};try{e=JSON.parse(t)}catch(t){}return{type:c,payload:e}}n.Z.register(d,(function(t={},e){switch(e.type){case c:return r(r({},t),{},{points:e.payload.response&&e.payload.response.points?e.payload.response.points:0,userData:e.payload.response});case l:return r(r({},t),{},{tpinitialized:!0});case u:return r(r({},t),{},{headerCrownPoints:e.payload});default:return t}}))},96079:(t,e,i)=>{i.d(e,{X:()=>o});function o(t){try{const e=new CustomEvent("show_tp_modal",{detail:{elementId:t}});window.dispatchEvent(e)}catch(t){}}},1261:(t,e,i)=>{i.d(e,{U:()=>n,m:()=>o});const o=5,n={top:{offerCount:2},away:{offerCount:2},exclusive:{offerCount:2}}},6762:(t,e,i)=>{i.d(e,{G1:()=>L,JQ:()=>C,Z6:()=>S,et:()=>R,mb:()=>_,nh:()=>m,w4:);var o=i(94829),n=i(33487),s=i(42947),r=i(63658),a=i(1261),d=i(49669);st u="timespointmodal",w=g=w("RECEIVE_USER_REWARDS"),f=w("RECEIVE_FAQ"),y=w("RECEIVE_USER_PROFILE"),h=w("SET_TIMESPOINT_VISIBLE");onst I=w("RECEIVE_DAILY_CHECKIN_DETAILS"),b=(w("RECEIVE_DAILY_CHECKIN_ERROR"),w("RECEIVE_ALL_ACTIVITIES")),O=w("RECEIVE_DAILY_ACTIVITY");unction v(t){let e=[],i={};return t.activitiesList&&t.activitiesList.data&&t.activitiesList.data.activities&&(e=function(t,e){let i=0;const o=[];let n=-1;if(t&&t.length>0&&e&&e.length>0){for(;i<t.length;i+=1)n=e.indexOf(t[i].code),-1!==n&&(o[n]=t[i]);return o}return t}(t.activitiesList.data.activities,t.activityOrder),i=t.activitiesMap),function(t){let e=0;const i={};if(t&&t.length>0&&void 0!==window.localStorage){for(;e<t.length;e+=1)i[t[e].code]=t[e].maxcap;try{window.localStorage.setItem(n.ls,JSON.stringify(i))}catch(t){}}}(e),{type:b,payload:{allActivity:e,activitiesMapList:i}}}function P(t){"function"==typeof window.tpsdk&&window.tpsdk("fetch","userPoints","",(e=>t(function(t){const e=T(t);let i={};return e&&e.response&&"TP_100"===e.responseCode&&(i=e.response),{type:y,payload:i}}(e))),(e=>t({type:y,payload:""})))}function D(t){"function"==typeof window.tpsdk&&window.tpsdk("fetch","offerDetails","",(e=>t(function(t){const e=T(t),i=[];return e&&"TP_100"===e.responseCode&&e.response&&e.response.offers&&Object.keys(a.U).forEach((t=>{if(a.U[t]){let o=0;const n=a.U[t].offerCount||0,s=e.response.offers[t];if(s){const t=s.length;if(n>0&&t>0){const e=Math.min(t,n);for(;o<e;o+=1){const t=s[o];i.push(t)}}}}})),{type:g,payload:i}}(e))),(e=>t({type:g,payload:[]})))}function E(t,e){const i=(new Date).getTime(),o=6048e5,n=i-o,s=i+o,a=e().isMobile||!1;"function"==typeof window.tpsdk&&window.tpsdk("fetch","campaignHistory",{sdate:n,edate:s,cname:a?r.K:r.o1},(e=>t(function(t){const e=T(t);let i=[];return e&&e.response&&"TP_100"===e.responseCode&&e.response.items&&e.response.items.length>0&&(i=e.response.items),{type:I,payload:i}}(e))),(e=>t({type:I,payload:[]})))}function k(t){"function"==typeof window.tpsdk&&window.tpsdk("fetch","dailyReport","",(e=>t(function(t){const e=T(t);let i={};return e&&e.response&&"TP_100"===e.responseCode&&e.response.activities&&(i=e.response.activities),{type:O,payload:i}}(e))),(e=>t({type:O,payload:{}})))}function L(){returnfunction S(){return t=>D(t)}function _(){return t=>k(t)}function C(){return t=>function(){const t=`${(0,o.zu)()}/tp_faq.cms?msid=76036519`;return s.Z.get(t,{},"skipfeedengine")}().then((e=>t(function(t){return{type:f,payload:t||""}}(e.data)))).catch(()}function j(t){return e=>function(t){const e="pfm="+(t?"msite":"web"),i=`${(0,o.zu)()}/tpallactivities_v2.cms?${e}`;return s.Z.get(i,{},"skipfeedengine")}(t).then(().catch((t=>e({type:b,payload:{}})))}function R(){return d.Z.register(u,(function(t={},e){switch(e.type){case h:return c(c({},t),{},{isTimesPointNudgeVisible:e.paylaod});case g:return c(c({},t),{},{userRewards:e.payload});case f:return c(c({},t),{},{faq:e.payload});case y:return c(c({},t),{},{userProfile:e.payload});case I:return c(c({},t),{},{dailyCheckInDetails:e.payload});case b:return c(c({},t),{},{allActivity:e.payload.allActivity,activitiesMapList:e.payload.activitiesMapList});case O:return c(c({},t),{},{dailyActivity:e.payload});default:return t}}))}}]);
//# sourceMappingURL=WithTimesPoint_es6_module.2d549244.chunk.js.map