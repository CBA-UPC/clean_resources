(self["webpackChunk_klook_aff_widget"]=self["webpackChunk_klook_aff_widget"]||[]).push([[64],{178:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});n(3238),n(7460),n(4078),n(684),n(8581),n(5735);var r=n(4415),i=(n(740),n(4945)),a=n.n(i),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"portal",n=a()[t];window.onerror||(window.onerror=function(e,t,r,i,a){n.alert.global(a||new Error(e),{source:t,lineno:r,colno:i})}),window.addEventListener("error",(function(e){var t=e.error;if(!t){if(!e.message)return;var r=e.message||"addEventListener.error";e.target&&e.target.outerHTML&&(r+=" => "+e.target.outerHTML),t=new Error(r)}n.alert.global(t,{event:e})}),!0),window.addEventListener("unhandledrejection",(function(e){n.alert.unhandledrejection(new Error(e.reason||"unhandledrejection"),{event:e})})),e.config.errorHandler=function(e,t,r){console.info(e,t),n.alert.vue(e,{info:r})}},s=n(3868),c=n(6590),u=n(9373),l=(n(9136),n(5849),n(2571),null),d=function(){function e(t){var n=this;(0,c.Z)(this,e);var r=new l({data:{state:t.state}});this.state=r.state,this.mutations={};var i=t.mutations||{};Object.keys(i).forEach((function(e){n.mutations[e]=)),this.actions={};var a=t.actions||{};Object.keys(a).forEach((function(e){n.actions[e]=function(){var t=(0,s.Z)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a[e].call(n,n,r);case 2:case"end":return t.stop()}}),t)})));return ()}))}return(0,u.Z)(e,[{key:"dispatch",value:function(){var e=(0,s.Z)(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.actions[t](n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));eturn t}()},{key:"commit",value:]),e}();function h(e){l=e,l.mixin({beforeCreate:function(){this.$options&&this.$options.$renderStore?this.$renderStore=this.$options.$renderStore:this.$parent&&this.$parent.$renderStore&&(this.$renderStore=this.$parent.$renderStore)}})}var v={RenderStore:d,install:h},f=(n(1013),n(5623),n(1514),n(3938),n(2059)),p=n(5609),m=n(1363);function w(){return new v.RenderStore({state:{currentExp:[],keplerId:f.Z.get("kepler_id"),experimentsGroup:{},tintedList:[],size_price:"",widgetExperiment:["AFF_K0007_DW_Recommendation","AFF_K0009_DW_View_More_Copywriting"],inTheExperiment:!1},mutations:{updateSizePrice:function(e,t){e.size_price=t},SET_EXPERIMENTS_HIT_LIST:function(e,t){var n={};t.map((function(e){n[e.experiment_name]={id:e.experiment_id,group:{id:e.group_id,name:e.group_name},sendStatus:!1}})),Object.keys(n).map((function(t){e.widgetExperiment.includes(t)&&(e.inTheExperiment=!0)})),e.experimentsGroup=n},SET_TINTED_LIST:function(e,t){e.tintedList=t},SET_CURRENT_HIT_EXP:SET_KEPLER_ID:,actions:{getExperimentsHitList:function(e){return(0,s.Z)(regeneratorRuntime.mark((function t(){var n,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.state.keplerId||f.Z.get("kepler_id"),!n){t.next=12;break}return t.next=5,(0,m.Vt)(p.A0.kepler_experiments);case 5:r=t.sent,i=r.result.exps||[],r&&r.result&&(a=[],i.forEach((function(e){e.need_dye&&a.push("".concat(e.experiment_id,":").concat(e.group_id))})),a.length&&e.commit("SET_TINTED_LIST",JSON.stringify({kepler:a}))),window.tintedList=JSON.stringify({kepler:i||[]}),e.commit("SET_EXPERIMENTS_HIT_LIST",r.result.exps||[]),t.next=14;break;case 12:console.warn("缺少 kepler_id"),e.commit("SET_EXPERIMENTS_HIT_LIST",[]);case 14:t.next=20;break;case 16:t.prev=16,t.t0=t["catch"](0),console.error({error:t.t0}),e.commit("SET_EXPERIMENTS_HIT_LIST",[]);case 20:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}})}n(2077),n(911);var _=function(){function e(){(0,c.Z)(this,e),this.lang="en",this.locales={"zh-TW":{77371:"熱賣",77372:"特價促銷",78071:"現省",78074:"最低價",78076:"{number} stars",from:"{0} 起",powered_by:"由 KLOOK 技術提供",view_more:"查看更多"},"zh-HK":{77371:"熱賣",77372:"特價優惠",78071:"即慳",78074:"最低價",78076:"{number} stars",from:"{0} 起",powered_by:"由 KLOOK 技術提供",view_more:"查看更多"},"zh-CN":{77371:"热销",77372:"特惠专区",78071:"已省",78074:"最低价",78076:"{number} stars",from:"{0} 起",powered_by:"由 KLOOK 强力驱动",view_more:"查看更多"},vi:{77371:"Bán chạy",77372:"Big Sale",78071:"Giảm",78074:"Từ",78076:"{number} stars",from:"Từ {0}",powered_by:"Được hỗ trợ bởi KLOOK",view_more:"Xem thêm"},th:{77371:"ขายดีที่สุด",77372:"ลดราคาครั้งใหญ่",78071:"ประหยัด",78074:"เริ่มต้นที่",78076:"{number} stars",from:"เริ่มที่ {0}",powered_by:"ขับเคลื่อนโดย KLOOK",view_more:"ดูเพิ่มเติม"},ko:{77371:"BEST 프로모션",77372:"초특가 프로모션",78071:"기존 가격 대비",78074:"시작 가격",78076:"{number} stars",from:"{0} 부터",powered_by:"KLOOK 지원",view_more:"더 보기"},ja:{77371:"BEST SELLER",77372:"大幅値下げ",78071:"割引額",78074:"最低料金：",78076:"{number} stars",from:"{0}〜",powered_by:"Powered by KLOOK",view_more:"もっと見る"},id:{77371:"Terlaris",77372:"Big Sale",78071:"Hemat",78074:"Mulai",78076:"{number} stars",from:"Mulai {0}",powered_by:"Diberdayakan oleh KLOOK",view_more:"Lihat Selengkapnya"},en:{77371:"Bestseller",77372:"Big sale",78071:"Save",78074:"From",78076:"{number} stars",from:"From {0}",powered_by:"Powered by KLOOK",view_more:"View More"},"en-US":{77371:"Bestseller",77372:"Big sale",78071:"Save",78074:"From",78076:"{number} stars",from:"From {0}",powered_by:"Powered by KLOOK",view_more:"View More"},fr:{77371:"Bestseller",77372:"Big sale",78071:"Save",78074:"From",78076:"{number} stars",from:"À partir de {0}",powered_by:"Fourni par KLOOK",view_more:"voir plus"},es:{77371:"Bestseller",77372:"Big sale",78071:"Save",78074:"From",78076:"{number} stars",from:"Desde {0}",powered_by:"Con la tecnología de KLOO8071:"Save",78074:"From",78076:"{number} stars",from:"ab {0}",powered_by:"Powered by KLOOK",view_more:"Mehr sehen"},ru:{77371:"Bestseller",77372:"Big sale",78071:"Save",78074:"From",78076:"{n{0}",powered_by:"Те�ore:"узнать больше"}}}return(0,u.Z)(e,[{key:"transParams",value:function(e,t){function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var r=/(%|)\{([0-9a-zA-Z_]+)\}/g;return e.replace(r,(function(r,i,a,o){var s;return"{"===e[o-1]&&"}"===e[o+r.length]?a:(s=n(t,a)?t[a]:null,null===s||void 0===s?"":s)}))}},{key:"setLang",value:function(e){this.lang=e}},{key:"getLang",value:function(){return this.lang}},{key:"$t",value:function(e,t){return t?this.transParams(this.locales[this.lang||"en"][e],t):this.locales[this.lang||"en"][e]}}]),e}();function g(e){var t=new _;e.prototype.widgetLocal=t,e.prototype.$t=t.$t.bind(t),e.mixin({created:function(){this.widgetLocal.setLang((0,p.eY)("lang")||"en")}})}var y=g,k=n(9670);function b(e,t){r.Z.use(y),r.Z.use(v.install);var n=w();n.dispatch("getExperimentsHitList").then((function(){new r.Z({el:e,$renderStore:n,render:function(e){return e("div",{class:"spm-flag",attrs:{"data-spm-page":"Widget?trg=manual"}},[e(t,{on:{setWidgetInfo:this.setWidgetInfo}})])},beforeCreate:function(){var e=this.$renderStore.state.keplerId;k.Z.init({url:"https://log.klook.com/v2/frontlogsrv/log/web",isDebugMode:!1,timeout:1500,headers:{},autoPageView:!0,props:{pageId:"",siteName:window.location.host,keplerId:e,deviceId:e,platform:(0,p.tq)()?"mobile":"desktop",distinctId:e,siteLanguage:"",siteCurrency:"",experiments:[]}})},methods:{setWidgetInfo:function(e){var t=e.aid,n=e.adType,r=e.adid,i=e.lang,a=e.currency;try{k.Z.setProps({siteLanguage:i,siteCurrency:a});var o=new URL(window.location.href).searchParams;r||(r=o.get("adid"));var s=document.querySelector(".spm-flag");this.$inhouse.updateBinding(s,{ext:JSON.stringify({aid:t,adid:+r,adType:n,partnerHost:window.document.referrer})}),this.$inhouse.track("pageview",s)}catch(c){console.log(c)}}}})}))}o(r.Z,"widget_iframe"),r.Z.prototype.$inhouse=k.Z},3175:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(6590),i=n(9373),a=n(8265),o=n(5329),s=n(4973),c=n(1254),u=(n(3238),n(6252),n(8217),n(5849),n(2571),n(3938),function(){function e(t,n){(0,r.Z)(this,e),(0,c.Z)(this,"flag",""),(0,c.Z)(this,"debug",!1),(0,c.Z)(this,"debugPrefix",""),(0,c.Z)(this,"events",{}),(0,c.Z)(this,"is.flag+"] >>>"}return(0,i.Z)(e,[{key:"on",value:function(e,t){"function"===typeof t&&(this.events[e]||(this.events[e]=[]),this.events[e].push(t))}},{key:"off",value:function(e,t){if(e&&this.events[e]){if(t&&"function"===typeof t){var n=this.events[e].indexOf(t);this.events[e].splice(n,1)}this.events[e]=void 0}}},{key:"offAll",value:function(){var e=this;Object.keys(this.events).forEach((function(t){return e.off(t)}))}},{key:"invoke",value:function(e){for(var t=this,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e&&this.events[e]&&this.events[e].forEach((function(e){e.call.apply(e,[t].concat(r))}))}},{key:"showDebug",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.debug&&(e=console).info.apply(e,[this.debugPrefix].concat(n))}},{key:"showError",value:function(e){this.debug&&console.error(this.debugPrefix,"string"===typeof e?e:e.message)}}]),e}()),l=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(0,r.Z)(this,n),"string"===typeof e&&(e=document.querySelector(e)),i=t.call(this,"parent",n.debug),(0,c.Z)((0,a.Z)(i),"shakehandTimes",0),(0,c.Z)((0,a.Z)(i),"shakehandTimer",null),(0,c.Z)((0,a.Z)(i),"connected",!1),(0,c.Z)((0,a.Z)(i),"timeout",",100),(imeout=o.timeout||i.timeout,i.interval=o.interval||i.interval,i.maxShakeTimes=Math.floor(i.timeout/i.interval),i.targetOrigin=o.targetOrigin||e.src,i.onMessaged((0,a.Z)(i)),window.addEventListener("message",i.onMessage),i}return(0,i.Z)(n,[{key:"connect",value:function(){var e=this;return this.checkLoaded().then((function(){return e.shakehand()})).then((function(){e.connected=!0,e.showDebug("connected")}))}},{key:"checkLoaded",value:function(){var e=this;return new Promise((function(t,n){if(e.showDebug("checkLoaded"),e.iframe){e.iframe.addEventListener("load",(function(){t()}));try{var r=e.iframe.contentDocument||e.iframe.contentWindow.document;r&&"complete"===r.readyState&&t()}catch(i){t()}}else n("no iframe found")}))}},{key:"shakehand",value:function(){var e=this;return new Promise((function(t,n){var r=function(t){if(e.shakehandTimes>=e.maxShakeTimes)return clearInterval(e.shakehandTimer),e.showError("shakehand failed, max times"),void n("shakehand failed, max times");e.shakehandTimes++,e.showDebug("shakehand: ".concat(e.shakehandTimes),t),e.send("shakehand",{ack:t})};r(),e.shakehandTimer=setInterval(r,e.interval),e.on("shakehand-reply",(function(n){var i=n.ack;i&&(clearInterval(e.shakehandTimer),r(!0),e.off("shakehand-reply"),t())}))}))}},{key:"send",value:function(e,t){if(this.iframe&&this.iframe.contentWindow)try{this.iframe.contentWindow.postMessage({event:e,data:t},this.targetOrigin)}catch(n){this.showError(n)}}},{key:"onMessage",value:function(e){if(this.iframe&&this.iframe.contentWindow===e.source){var t=e.data,n=t.event,r=t.data;this.showDebug("onMessage",e),this.invoke(n,r,e)}}},{key:"close",value:function(){this.connected=!1,window.removeEventListener("message",this.onMessage),this.offAll()}}]),n}(u);(0,c.Z)(l,"debug",!1);var d=function(e){(0,o.Z)(n,e);var t=(0,s.Z)(n);function n(e){var i;return(0,r.Z)(this,n),i=t.call(this,"child",n.debug),(0,c.Z)((0,a.Z)(i),"origin",""),(0,c.Z)((0,a.Z)(i),"connected",!1),i.origin=e||document.referrer||"*",i.onMessage=i.onMessage.bind((0,a.Z)(i)),window.addEventListener("message",i.onMessage),i}return(0,i.Z)(n,[{key:"connect",value:function(){var e=this;return new Promise((function(t){e.on("shakehand",(function(n){e.showDebug("on.shakehand",n),e.replyShakehand(n).then(t)}))}))}},{key:"replyShakehand",value:function(e){var t=this,n=e.ack;return new Promise((function(e){if(n)return t.showDebug("connected"),t.conne!0})}))}},{key:"send",value:function(e,t){if(window.parent&&this.ori,data:t},this.origin)}catch(n){this.showError(n)}}},{key:"onMta||{},n=t.event,r=void 0===n?"":n,i=t.data;thvoke(r,i,e)}},{key:"close",value:function(){this.connected=!1,window.removeEventListener("message",this.onMessage),this.offAll()}}]),n}(u);(0,c.Z)(d,"debug",!1);var h={Parent:l,Child:d},v=h,f={data:function(){return{messenger:new v.Child}},created:function(){var e=this;this.messenger.connect().then((function(){e.postMessage("loaded")})).catch((function(){}))},methods:{postMessage:function(e,t){this.messenger.send(e,t)}}}},5599:function(e,t,n){"use strict";n.d(t,{Z:function(){return E}});var r=function(){var e=this,t=e.$createtives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"container"},[r("div",{staticClass:"list"},e._l(e.data,(function(t,i){return r("div",{key:i,staticClass:"item",attrs:{"data-spm-module":"ActivityBanner_TTD?oid=activity_"+t.id,"data-spm-virtual-item":"__virtual"}},[r("a",{staticClass:"item_link",attrs:{href:t.jump_url,target:"_blank"},on:{click:function(n){return e.handleClickActivity(t)}}},[r("div",{staticClass:"img",style:"background-image: url("+e.imageUrl(t.image_url_host)+")"},[r("span",{staticClass:"city_name",attrs:{tabindex:4*i+1}},[e._v(e._s(t.city_name))])]),r("div",{staticClass:"desc_info"},[r("div",{staticClass:"product_info"},[r("span",{class:{title:!0,iskoa:e.showData.iskoa},staticStyle:{"-webkit-box-orient":"vertical"},attrs:{tabindex:4*i+2}},[e._v(e._s(t.title))]),+t.review_total>0?r("div",{staticClass:"score_info",attrs:{tabindex:4*i+3}},[r("div",{staticClass:"score-wrapper"},[r("span",[r("img",{staticClass:"star",attrs:{src:n(6545)}})]),r("span",{staticClass:"score"},[e._v(e._s(t.score))])]),r("span",{staticClass:"review"},[e._v("("+e._s(t.review_total)+" "+e._s(e.showData.activity_reviews)+")")])]):e._e()]),r("div",{staticClass:"price",attrs:{tabindex:4*i+4}},[r("span",{staticClass:"price_value"},[e._v(e._s(t.currency_format)+" "+e._s(e.priceFormat(t)))]),r("span",{staticStyle:{display:"flex"}},[r("img",{staticClass:"light",attrs:{src:n(6394)}})])])])])])})),0)])},i=[],a=n(986),o=n(3868),s=n(6590),c=n(9373),u=n(5329),l=n(4973),d=(n(9136),n(2077),n(2482),n(5623),n(1514),n(3938),n(1013),n(2327),n(3238),n(5781),n(5163),n(2759),n(8237),n(4992),n(895),n(1203),n(9254),n(931)),h=n(9364),v=n(5609),f=n(7040),p=n.n(n,e);var t=(0,l.Z)(n);function n(){var e;return(0,s.Z)(this,n),e=t.apply(this,arguments),e.data=[],e.showData={klook_url:"",affiliate_url:"",lang:"",iskoa:!1,activity_reviews:"Reviews",view_more_text:"View More"},e.iframeInfo={},e.show=!1,e.noRenderSize=["336x280","300x250","250x250"],e.kepler_id=e.$renderStore.state.keplerId,e}return(0,c.Z)(n,[{key:"currentExp",get:function(){return this.$renderStore.state.currentExp}},{key:"imageUrl",value:function(e){var t=e.split("/upload");return t[0]+"/upload/fl_lossy.progressive,q_60,f_auto/c_fill,w_650,h_420"+t[1]}},{key:"priceFormat",value:function(e){var t=e.sell_price,n=e.currency;if(t.includes(".")){var r=v.kg[n],i=t.indexOf(".")+1;return t.substr(0,i+r)}return t}},{key:"handleClickActivity",ver.push({event:"adDisplay",eventCategory:"Experimentation",eventAction:"Affiliate Ad Click",eventLabel:"Activity Banner",KeplerID:this.kepler_id,AffiliateKeplerGroup:"".concat(this.currentExp.id||"","_").concat(this.currentExp.groupId||""),Affction(e){return+e.id===+n}));return r||t[0]}));return n}},{key:"handleClickViewMore",value:function(){window.dataLayer.push({event:"adDisplay",eventCategory:"My Ads",eventAction:"Partner Website",eventLabel:"Dynamic Widget - View More"})}},{key:"handleClickPower",value:function(){window.dataLayer.push({event:"adDisplay",eventCategory:"My Ads",eventAction:"Partner Website",eventLabel:"Dynamic Widget - Power By klook"})}},{key:"formatResponse",value:function(e){var t=w()(e),n=p()(t,"result.redirect_url")||{},r=p()(t,"result.redirect_url.lang")||"en-US";return n.view_more_text=r&&v.Tv[r].view_more||"View More",n.activity_reviews=r&&v.Tv[r].activity_reviews||"Reviews",n.iskoa="ko"===r,["fr","de","es","ru"].indexOf(r)>-1&&(n.affiliate_url="/home"),t}},{key:"fetchData",value:function(){var e=(0,o.Z)(regeneratorRuntime.mark((function e(t){var n,r,i,a,o,s,c,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,_.Vt)(v.A0.activity_banner_render_data(t),null);case 2:n=e.sent,n.success&&(this.show=!0,r=this.formatResponse(n),i=r.result,a=i.ad_detail,o=i.activities,s=i.redirect_url,c=i.aid,u=i.lang,l=i.currency,d=a.size_price,this.$renderStore.commit("updateSizePrice",d||""),this.data=this.filterData(a,o),this.showData=s,this.aid=c||"",this.$emit("setWi:u,currency:l}),window.dataLayer.push({event:"adDisplay",eventCategory:"Experimentation",eventAction:"Affiliate Ad Impression",eventLabel:"Activity Banner",KeplerID:this.kepler_id,AffiliateKeplerGroup:"".concat(this.currentExp.id||"","_").concat(this.currentExp.groupId||""),AffiliateADID:this.adid,PartnerWebsiteAID:this.aid}));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"normalRender",value:function(e){var t,n=(0,a.Z)(this.noRenderSize);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e.includes(r))return!0}}catch(i){n.e(i)}finally{n.f()}return!1}},{key:"created",value:function(){var e=this.getUrlParam("adid");!e||+e<0||!Number.isInteger(+e)||(this.adid=e,this.fetchData(e))}},{key:"getUrlParam",value:function(e){var t=new RegExp("(^|&)".concat(e,"=([^&]*)(&|$)")),n=window.location.search.substr(1).match(t);return null!==n?+n[2]:null}}]),n}(h.w3);g=(0,d.gn)([(0,h.wA)({components:{}})],g);var y=g,k=y,b=n(9917),x=(0,b.Z)(k,r,i,!1,null,"53b673f0",null),E=x.exports},6238:function(e,t,n){var r=n(5526)["default"],i=n(6346)[,n(740),n(3238),n(5849),n(2571),n(9217),n(5613);var a,o=n(859),s="undefined"!==typeof window,c={portal:"PORTAL",portal_node:"PORTAL_NODE",widget_site:"WIDGET_SITE",widget_iframe:"WIDGET_IFRAME"},u={global:"global",runtime:"runtime",unhandledrejection:"unhandledRejection",unhandledRejection:"unhandledRejection",ajax:"ajax",vue:"vue",uncaughtException:"uncaughtException",custom:"custom"};function l(e){a=e}function d(){}var h={};function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;if(a&&(e=f(e,t),e)){var c=+new Date,u=i(i({from:n,errType:r,level:"E",time:new Date,timestamp:c},s?{href:window.location.href,referer:window.document.referrer,agent:window.navigator.userAgent}:{node:process.version}),{},{msg:e.message,stack:e.stack,params:o(t,null,2)})rn}else h[l]=c;var d="";/^PORTAL$/i.test(n)?d="Affiliate.Error":/^PORTAL_NODE$/i.test(n)||(d="Affiliate.Widget.Error"),u.name=d,a(u)}}function f(e,t){if("string"===typeof e)return new Error(e);if("object"===r(e)){if(e instanceof Error)return e;var n=new Error(e.message||"UnformatableErr");return e.stack&&(n.stack=e.stack),t.unformatabl(function(e){v[e]=function(t,n,r){return v(t,n,r,e)}}));var p={};function m(){var e=0;if(0===this.length)return e;for(var t=0;t<this.length;t++){var n=this.charCodeAt(t);e=(+"="+e[r]);return m.call(t.join(""))}Object.keys(c).forEach((function(e){var t={};Object.keys(u).forEach((function(n){t[n]=function(t,r){return v(t,r,e,n)}})),p[e]={alert:t}})),e.exports=i(i({initSendPost:l,log:d,alert:v},p),{},{FROM_TYPES:c,ERR_TYPES:u})},4945:function(e,t,n){n(859);var r=n(6238),i=r.initSendPost,a=n(3705);i((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.handlerError(e)})),e.exports=n(6238)},3705:function(e,t,n){var r=n(6346)["default"],i=n(859),a=n(90859:function(e,t,n){function r(e,t,n,r){return JSON.stringify(e,i(t,r),n)}function i(e,t){var n=[],r=[];return null==t&&(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+r.slice(0,n.indexOf(t)).join(".")+"]"}),function(i,a){if(n.length>0){var o=n.indexOf(this);~o?n.splice(o+1):n.push(this),~o?r.splice(o,1/0,i):r.push(i),~n.indexOf(a)&&(a=t.call(this,i,a))}else n.push(a);return null==e?a:e.call(this,i,a)}}n(5735),n(5613),n(2410),n(8217),t=e.exports=r,t.getSerialize=i},5609:function(e,t,n){"use strict";n.d(t,{A0:function(){return s},Tv:function(){return l},eY:function(){return f},Vl:function(){return w},It:function(){return m},ko:function(){return v},$u:function(){return h},kg:function(){return d},k2:function(){return g},u0:function(){return u},tq:function(){return p}});var r=n(9746),i=(n(2077),n(2482),n(2759),n(8237),n(4992),n(895),n(1203),n(9254),n(4890),n(5735),n(3238),n(911),n(5623),n(1514),n(5420)),a=n.n(i),o=n(1363),s={ads_event:"/v3/affsrv/ads/event",kepler_experiments:"/v2/usrcsrv/hit/experiments",widgetRenderData:function(e){returfunction(e){return"/v1/affadsrv/widget/dynamic?adid=".concat(e)},staticWidgetRenderDataVariant:function(e){return"/v1/affadsrv/widget/static?adid=".concat(e)},search_box_render_data:function(e){return"/v1/affadsrv/search?adid=".concat(e)},static_banner_render_data:function(e){return"/v1/affadsrv/banner/static?adid=".concat(e)},activity_banner_render_data:function(e){return"/v1/affadsrv/banner/activity?adid=".concat(e)},auto_widget:"/v1/affadsrv/widget/dynamic/auto",ads_render_hotel_dynamic_widget:"/v1/affadsrv/hotelwidget/dynamic",ads_render_hotel_static_widget:"/v1/affadsrv/hotelwidget/static",ads_render_hotel_auto_dynamic_widget:"/v1/affadsrv/hotelwidget/auto",deals_widget:"/v1/affadsrv/hotelwidget/deal"},c={event:"adDisplay",eventCategory:"My Ads",eventAction:"Partner Website",eventLabel:"Search Box"},u={11:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"Attractions & Shows"}),12:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"Tours & Sightseeing"}),13:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"Activities & Experiences"}),14:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"Best Food & Must Eats"}),21:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"JR Pass"}),22:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"Europe Train"}),23:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"China Train"}),24:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"Taiwan Train"}),25:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"Vietnam Train"}),31:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"WiFi & SIM Card"}),41:(0,r.Z)((0,r.Z)({},c),{},{verticalName:"Transport & Travel Services"})},l={"en-US":{activity_reviews:"Reviews",view_more:"View More",search:"Search",search_placeholder:"Search by destination or activity",search_title:"Discover and book amazing things to do at exclusive prices",banner_book_now:"BOOK NOW",discount:"%s% OFF"},en:{activity_reviews:"Reviews",view_more:"View More",search:"Search",search_placeholder:"Search by destination or activity",search_title:"Discover and book amazing things to do at exclusive prices",banner_book_now:"BOOK NOW",discount:"%s% OFF"},"zh-CN":{activity_reviews:"评价",view_more:"查看更多",search:"搜索",search_placeholder:"输入目的地/景点/活动",search_title:"发现更好玩的世界，预订独一无二的旅行体验",banner_book_now:"立即预订",discount:"%s折"},"zh-TW":{activity_reviews:"評價",view_more:"查看更多",search:"搜索",search_placeholder:"輸入目的地/景點/活動",search_title:"發現更好玩的世界，預訂獨一無二的旅行體驗",banner_book_now:"立即預訂",discount:"%s折"},"zh-HK":{activity_reviews:"評論",view_more:"查看更多",search:"搜索",search_placeholder:"輸入目的地/景點/活動",search_title:"發現更好玩的世界，預訂獨一無二的旅行體驗",banner_book_now:"立即預訂",discount:"%s折"},ko:{activity_reviews:"리뷰",view_more:"더 보기",search:"검색",search_placeholder:"도시 또는 액티비티 검색",search_title:"더 넓은 세상을 경험하고, 잊지 못할 순간을 예약하세요.",banner_book_now:"지금 예약하기",discount:"%s% 할인"},th:{activity_reviews:"ความคิดเห็น",view_more:"ดูเพิ่มเติม",search:"ค้นหา",search_placeholder:"ค้นหาโดยใช้จุดหมายปลายทางหรือกิจกรรม ค้นหาด้วยจุดหมายปลายทางหรือกิจกรรม",search_title:"สำรวจและจองกิจกรรมที่น่าสนใจมากมายในราคาสุดพิเศษ",banner_book_now:"จองตอนนี้",discount:"ลด %s%"},vi:{activity_reviews:"đánh giá",view_more:"Xem thêm",search:"Tìm kiếm",search_placeholder:"Tìm theo điểm đến hoặc hoạt động",search_title:"Khám phá và đặt trước các hoạt động du lịch đặc sắc với giá độc quyền",banner_book_now:"Đặt ngay",discount:"GIÁM GIÁ %s%"},id:{activity_reviews:"ulasan",view_more:"Lihat Selengkapnya",search:"Cari",search_placeholder:"Cari berdasarkan destinasi atau aktivitas",search_title:"Temukan dan pesanlah aktivitas seru dengan harga yang eksklusif",banner_book_now:"PESAN SEKARANG",discount:"DISKON %s%"},ja:{activity_reviews:"件のクチコミ",view_more:"もっと見る",search:"検索",search_placeholder:"目的地・アクティビティから検索",search_title:"現地のワクワクを見つける手がかりに。旅を思いのままにアレンジしよう。",banner_book_now:"詳細を見る",discount:"%s% OFF"},fr:{activity_reviews:"La revue",view_more:"voir plus",search:"Search",search_placeholder:"Search by destination or activity",search_title:"Réservez des activités inoubliables aux meilleurs prix",banner_book_now:"BOOK NOW",discount:"%s% OFF"},de:{activity_reviews:"Rezension",view_more:"Mehr sehen",search:"Search",search_placeholder:"Search by destination or activity",search_title:"Entdecke und buche einzigartige Aktivitäten zu exklusiven Preisen",banner_book_now:"BOOK NOW",discount:"%s% OFF"},es:{activity_reviews:"Revisión",view_more:"ver más",search:"Search",search_placeholder:"Search by destination or activity",search_title:"Scopri e prenota attività straordinarie a prezzi esclusivi",banner_book_now:"BOOK NOW",discount:"%s% OFF"},ru:{activity_reviews:"отзыв",view_more:"узнать больше",search:"Search",search_placeholder:"Search by destination or activity",search_title:"Находите удивительные варианты досуга и бронируйте их по эксклюзивным ценам",banner_book_now:"BOOK NOW",discount:"%s% OFF"}},d={CHF:2,SGD:2,AUD:2,JOD:2,USD:2,EUR:2,GBP:2,MYR:2,OMR:2,NZD:2,CAD:2};function h(e){var t=e.split(0,f_auto/c_fill,w_650,h_420"+t[1]}function v(e,t){return e.view_more_text=t&&l[t].view_more||"View More",e.activity_reviews=t&&l[t].activity_reviews||"Reviews",["fr","de","es","ru"].indexOf(t)>-1&&(e.affiliate_url="/home"),e}function f(e){var t=new RegExp("(^|&)".concat(e,"=([^&]*)(&|$)")),n=window.location.search.substr(1).match(t);return null!==n?n[2]:null}function p(){var>0&&void 0!==arguments[0])||arguments[0],t="(android|bbd+|meego).+mobile|avantgo|bada/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)/|plucker|pocket|psp|series[46]0|symbian|treo|up.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino",n="".concat(t,"|android|ipad|playbook|silk"),r=e?t:n;return new RegExp(r,"i").test(window.navigator.userAgent)}function m(e,t){(0,o.tB)(s.ads_event,{type:e,data:t||""},{"X-iframe-Data":JSON.stringify({type:e,data:t||""})})}function w(e,t){var n=function(){var e=new RegExp("(^|&)renderId=([^&]*)(&|$)"),t=window.location.nder",content:{renderID:t[2]}},"*")},r=function(n){var r;n.data.type==="".concat(e,"_onload")&&(r=a().sanitize(JSON.stringify(n.data.content)),t&&t(r))},i=function(){window.addEventListener("message",r,!1),n()};i()}function _(e){var t,n=(e||"0").toString();return n.indexOf(".")<0?t=n.replace(/(?=(?!(\b))(\d{3})+$)/g,","):(n=n.split("."),t=n[0].toString().replace(/(?=(?!(\b))(\d{3})+$)/g,",")+"."+n[1]),t}function g(e,t){if(e=_(e),e.includes(".")){var n=d[t],r=e.indexOf(".")+1;return e.substr(0,r+(n||-1))}return e}},1363:function(e,t,n){"use strict";n.d(t,{Vt:function(){return w},tB:function()n(3938),n(3238);var r=n(2059),i=n(9931),a=n(9529),o=n(9746),s=(n(5849),n(2595),n(740),n(6252),{"Content-Type":"application/json; charset=utf-8"}),c={"*":"text/javascript, text/html, application/xml, text/xml, */*",xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript",js:"application/javascript, text/javascript"};function u(e){var t=!1,n=!1,r=e.metho.dataType,d=void 0===l?"json":l,h=e.contentType,v=e.headers,f=void 0===v?{}:v,p=e.data,m=e.success,w=e.error,_=e.timeout,g=new XMLHttpRequest;g.open(r||i,u,!0),h&&(f["Content-Type"]=h),f["Accept"]=c[d],Object.entries((0,o.Z)((0,o.Z)({},s),f)).forEach((function(e){var t=(0,a.Z)(e,2),n=t[0],r=t[1];g.setRequestHeader(n,r)}));var y=m&&"function"===typeof m,k=w&&"function"===typeof w;g.onif(this.status>=200&&this.status<400){var e=this.response;"json"===d&&(e=JSON.parse(e)),y&&m(e,this.statusText,g)}else k&&w(g,this.statusText,new Error("Server Error"))},g.onerror=function(){t=!0,n||k&&w(g,this.status!0,g.abort(),k)){var e=new Error("Request is aborted: timeout");w(g,"",e)}}),_),g.send(p)}var l=990001;function d(e,t,n,a,o){"function"==typeof n?(o=n,a=void 0,n=void 0):"function"==typeof a&&(o=a,a=void 0),a=a||{},o=o||function(){};var s={method:e,url:t,cache:!1,dataType:"json",startTime:Date.now()};return a["X-Klook-Kepler-Id"]=r.Z.get("kepler_id"),a["X-Klook-Request-Id"]=(0,i.Z)(),s.headers=a,s.data=n||void 0,s.timeout=12e4,s.success=function(e,t,n){h(e,t,n,s),o(null,e)},s.error=function(e,t,n){v(e,t,n,s),o({success:!1,error:{code:l,message:"MULTIPLE_client_network_failure"}},null)},u(s)}function h(e,t,n,r){e.error=e.error||{}}function v(e,t,n,r){}function f(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e.apply(null,[].concat(n,r))}}function p(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return new Promise((function(t,r){e.apply(null,[].concat(n,[function(e,n){e?r(e):t(n)}]))}))}}var m=f(d,"GET"),w=p(m),_=(f(d,"PUT"),f(d,"POST"))},6394:function(e,t,n){"use strict";e.exports=n.p+"img/instant.58dd6b02.svg"},6847:function(e,t,n){"use strict";e.exports=n.p+"img/klk-logo.6b200e30.svg"},6545:function(e,t,n){"use strict";e.exports=n.p+"img/yellow.85962613.svg"}}]);