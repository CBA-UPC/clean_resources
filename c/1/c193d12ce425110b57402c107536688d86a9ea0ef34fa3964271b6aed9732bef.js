(self.webpackChunkweb=self.webpackChunkweb||[]).push([[77518],{81419:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var o,i=n(67294);lass a extends i.Component{nder(){if(this.state.error){if(this.props.errorComponent){return r(this.props.errorComponent,{})}return null}return this.props.children}}a.defaultProps={errorComponent:null};const s=a},41663:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var o=n(67294),i=n(99408),r=n(80228),a=n.n(r);const s=e=>{const{inViewCallback:t,ga:n,children:r,viewMargin:s,unSupportedCallback:d,doNotUnobserve:l,className:c,wrapperClass:p,placeHolderClass:u}=e,f=(0,o.useRef)();let m;return(0,o.useEffect)((()=>(f&&f.current&&"IntersectionObserver"in window?(m=new IntersectionObserver((e=>{const o=e[0];o&&(o.isIntersecting||o.intersectionRatio>0)&&(t(),n&&n.category&&(0,i.Z)("ga","send","event",n.category,n.action,n.label,n.value),l||m.unobserve(o.target))}),{rootMargin:s||"0px 0px 0px 0px"}),m.observe(f.current)):d(),()=>{f&&f.current&&m&&m.unobserve(f.current)})),[]),o.createElement("div",{"data-type":"in_view",ref:f,className:`${c} ${p?a()[p]:""} ${u}`},r)};s.defaultProps={inViewCallback:()=>{},className:"",unSupportedCallback:ga:void 0,doNotUnobserve:!1,viewMargin:"100px 0px 100px 0px",wrapperClass:void 0,placeHolderClass:""};const d=s},6048:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var o=n(67294),i=n(37974),r=n(33529),a=n(94829),s=n(95557),d=n(4423),l=n(99408),c=n(55518),p=n(10204),u=n(33487);const f=["to","children","ext","skipAffiliateHandling","isNoLink"];var m,g,h;t y=(m=(0,c.GA)({}),h=class extends o.Component{etLiveURL(e){let t=e;const n=this.props.isMobile?u.ndL:u.Ykj;return this.props.isMobile&&(0,a.jP)(e)?(t=e.split("m.timesofindia.com").join("timesofindia.indiatimes.com"),"/"===t[0]&&(t=u.Ykj+t)):"/"!==t[0]||this.props.route||this.props.spa?this.props.isMobile&&e&&e.indexOf("timesofindia.indiatimes.com")>-1&&-1===e.indexOf("/liveblog/")&&-1===e.indexOf("/blogs/")&&-1===e.indexOf("/readersblog/")&&!this.props.doNotChangeDomain&&!this.props.doNotChangeURL&&(t=e.split("timesofindia.indiatimes.com").join("m.timesofindia.com")):t=n+t,t}static getRelativeUrl(e){return"string"==typeof e&&e.indexOf("https://timesofindia.indiatimes.com")>=0?e.replace("https://timesofindia.indiatimes.com",""):"string"==typeof e&&e.startsWith("http")?new URL(e).pathname:e||""}handleClick(e){if(this.props.data&&(0,d.z)({data:this.props.data}),this.props.ga4Data&&Array.isArray(this.props.ga4Data)&&(0,l.Z)("ga4",...this.props.ga4Data),this.props.ext)return;if(this.props&&this.props.onClick&&(this.props.onClick(e),e.preventDefault()),this.props.extraClick&&this.props.extraClick(),this.props.isNoLink)return;const t=e.target.closest("a");if(!t)return;let n=t.href;t.href&&!this.props.isMobile&&(0,p.E6)()?(e.preventDefault(),window.location.href=(0,p.li)(n)):this.props.isMobile&&!this.props.disableClick&&(e.preventDefault(),!this.props.doNotChangeURL&&!this.props.doNotChangeDomain&&t.href&&t.href.indexOf("timesofindia.indiatimes.com")>0&&-1===t.href.indexOf("/liveblog/")&&-1===t.href.indexOf("/blogs/")&&-1===t.href.indexOf("/readersblog/")&&(n=n.replace("timesofindia.indiatimes.com","m.timesofindia.com")),(0,p.E6)()&&(n=(0,p.li)(n)),t.getAttribute("target")?window.open(n,"_blank"):window.location.href=n)}render(){var e,t;const n=this.props,{to:i,children:a,ext:d,skipAffiliateHandling:l,isNoLink:c}=n,p=b(n,f);let u=i||(this.props.href?this.props.href:"");const m=!l&&(0,s.vP)(u);let g=this.props.rel||"noopener nofollow noreferrer";const h=(0,r.fl)(u),y=(0,r.gR)(u);if(("string"==typeof u&&(u.indexOf("timesofindia.indiatimes.com")>=0||u.indexOf("m.timesofindia.com")>=0||u.startsWith("/"))||h||y)&&(g=(0,r.zn)(u)?"noopener nofollow":"_blank"!==this.props.target||y?void 0:"noopener"),m){const e=this.props.isMobile,t=this.props.isMspArticle;g+=" nofollow sponsored",u=(0,s.es)("",u,e,t).replace("<title>","")}this.props.rel&&"sponsored noopener"===this.props.rel&&(g="sponsored noopener"),(e=>e&&e.includes("/spotlight/")&&e.includes("/articleshow/"))(u)&&g&&!g.includes("sponsored")&&(g+=" sponsored");const v=null!==(e=this.props)&&void 0!==e&&e.target?null===(t=this.props)||void 0===t?void 0:t.target:"";return c?o.createElement("div",w({},p,{onClick:this.handleClick}),a):v?o.createElement("a",w({href:this.getLiveURL(u)},p,{onClick:this.props.onClick||this.handleClick,rel:g,frmappuse:"1",data:void 0,ref:this.props.innerRef,target:v}),a):o.createElement("a",w({href:this.getLiveURL(u)},p,{onClick:this.props.onClick||this.handleClick,rel:g,frmappuse:"1",data:void 0,ref:this.props.innerRef}),a)}},h.defaultProps={onClick:null,to:void 0,children:null,href:void 0,extraClick:null},v=(g=h).prototype,O="handleClick",j=[m],C=Object.getOwnPropertyDescriptor(g.prototype,"handleClick"),P=g.prototype,A={},Object.keys(C).forEach((),A.enumerable=!!A.enumerable,A.configurable=!!A.configurable,("value"in A||A.initializer)&&(A.writable=!0),A=j.slice().reverse().reduce((,A),P&&void 0!==A.initializer&&(A.value=A.initializer?A.initializer.call(P):void 0,A.initializer=void 0),void 0===A.initializer&&(Object.defineProperty(v,O,A),A=null),g);var v,O,j,C,P,A;y.defaultProps={isNoLink:!1,route:void 0,doNotChangeURL:!1,doNotChangeDomain:!1,skipAffiliateHandling:!1,rel:void 0,isMobile:!1,isMspArticle:!1,target:""};const k=(0,i.$j)(()(y),S=o.forwardRef(()},33529:(e,t,n)=>{"use strict";n.d(t,{bg:()=>o,fl:()=>r,gR:()=>d,zn:);n(33487);onst i=["zigwheels.com","mediawire.in"];function r(e){if("string"!=typeof e)return!1;let t=!1;return i.forEach((n=>{e.indexOf(n)>=0&&(t=!0)})),t}onst s=["recipes.timesofindia.com","photogallery.indiatimes.com","beautypageants.indiatimes.com"];function d(e){if("string"!=typeof e)return!1;let t=!1;return s.forEach((n=>{e.indexOf(n)>=0&&(t=!0)})),t}},62300:(e,t,n)=>{"use strict";n.d(t,{Z:()=>R});var o=n(67294),i=n(37974),r=n(26229),a=n(54620),s=n(46357),d=n(29208),l=n.n(d);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}class m extends o.Component{constructor(e){super(e),this.adDivElem=(e,t)=>o.createElement("div",f({key:e.id+t},e,{className:e.className,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}));const{adsCounter:t=1}=e,{divId:n,slotId:i,mgid:r}=e.data,a=n||i||parseInt(1e10*Math.random(),10),s=p(p({},e.data),{},{deviceType:e.deviceType,divId:r?n:`${a}-${t}`,callback:e.callback,prebid:e.prebid,dfpParams:e.dfpParams});this.isRandomGenenratedDivPresent="string"!=typeof e.data.divId&&!e.lazyload,this.state={newAdObject:s,shouldAttachDivId:!this.isRandomGenenratedDivPresent},this.props.addToQueue&&this.props.data&&(this.addedInConstructor=!0,this.props.addToQueue(s))}shouldComponentUpdate(){var e,t,n;return(null===(e=this.props.data)||void 0===e||null===(t=e.multiAds)||void 0===t||!t.length)&&(null===(n=this.props)||void 0===n||!n.skipReRender)}componentDidMount(){!this.addedInConstructor&&this.props.addToQueue&&this.props.data&&this.props.addToQueue(this.state.newAdObject),this.state.shouldAttachDivId||this.setState({shouldAttachDivId:!0})}omponentDidUpdate(e){if(e.data&&e.data.adCode&&this.props.data&&this.props.data.adCode&&this.props.data.adCode!==e.data.adCode){const{divId:e=parseInt(1e10*Math.random(),10)}=this.props.data,{adsCounter:t=1}=this.props,n=p(p(p({},this.state.newAdObject),this.props.data),{},{divId:`${e}-${t}`});this.setState({newAdObject:n},(()=>{this.props.addToQueue&&this.props.data&&this.props.addToQueue(p({},this.state.newAdObject))}))}}render(){if(this.state.newAdObject){const{adCode:e,divId:t,name:n,replace:i,articleIndex:r=""}=this.state.newAdObject;return null!=i&&i.length?o.createElement(o.Fragment,null,i.map(((e,o)=>{const i=e.adDivInfo||{};let a="";e.placement&&(a=`${e.placement} ${r+1}`);const s=p(p({},i),{},{id:0===o?e.divId||t:e.divId});return a&&(s["data-placement"]=a),o>0&&s.id&&n&&(s["data-gid"]=n),s.id?this.adDivElem(s,o):null}))):e?this.adDivElem(p(p({},this.props.dataset),{},{id:this.state.shouldAttachDivId?t:void 0,className:this.props.className}),""):null}return null}}m.defaultProps={deviceType:"",className:"",callback:void 0,prebid:!1,adsCounter:void 0,lazyload:!1,dfpParams:void 0,dataset:{}};const g=m;var h;function w(e,t,n,o){h||(h="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=o;else if(r>1){for(var a=new Array(r),s=0;s<r;s++)a[s]=arguments[s+3];t.children=a}if(t&&i)for(var d in i)void 0===t[d]&&(t[d]=i[d]);else t||(t=i||{});return{$$typeof:h,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}class b extends o.Component{constructor(){super();const e=Math.floor(1e7+9e7*Math.random());this.pos=e}shouldComponentUpdate(){var e,t;return null===(e=this.props.data)||void 0===e||null===(t=e.multiAds)||void 0===t||!t.length}render(){const{adsCounter:e=1}=this.props;if(this.props.data&&this.props.data.adCode){const t={id:`div-clmb-ctn-${this.props.data.adCode}-${e}${this.props.data.divId||this.props.data.msid||this.pos}`,slot:this.props.data.adCode,pos:`${e}${this.props.data.msid||this.pos}`,section:this.props.data.breadCrumb,dfpslot:this.props.data.dfpslot},{id:n,slot:o,pos:i,section:r,dfpslot:a}=t;return w("div",{className:"ctn-workaround-div clearfix"},void 0,a&&a.adCode?w("div",{id:n,"data-slot":o,"data-position":i,"data-section":r,className:`colombia ${this.props.className}`,"data-dfpslot":a.adCode,"data-type":"dfp",dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}):w("div",{id:n,"data-slot":o,"data-position":i,"data-section":r,className:`colombia ${this.props.className}`,dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0}))}return""}}b.defaultProps={className:"colombia_spacing"};const y=b;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v.apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class P extends o.Component{constructor(){super(),this.candfpAdhandler=e=>{this.loaded=!1,this.props.addToQueue(e.adObject)},this.loaded=!0}componentDidMount(){window.addEventListener("CAN_DFP",this.candfpAdhandler)}omponentDidUpdate(){if(this.props.adsQueueData&&this.props.adsQueueData.length&&!this.loaded){const{adsQueueData:e}=this.props;for(let t=0;t<e.length;t+=1)if(e[t].targetingInfo&&e[t].targetingInfo.dfpCanAd){const e=this.props.navigation&&this.props.navigation.data&&this.props.navigation.data.path||"";this.props.loadAllAdsFromQueue("",e),this.loaded=!0}}}render(){const{props:e}=this,{lazyload:t,isCTN:n,data:i}=e;return n&&!t?o.createElement(y,v({},e,{data:j({},i)})):null}}const A=P;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const x=(e,t)=>{const{data:n}=t;let o=n.divId||e.divId;return e.replace&&(o=e.divId),t.msid&&(o+=`-${t.msid}`),o},N=(e,t)=>{const{isCTN:n,data:o}=t;return e.multiAds&&(e=((e,t)=>{const{multiAds:n}=e;e.adCounter=e.adCounter?e.adCounter+1:1;const o=n.length>1?n.shift():n[0];return o&&(e=S(S({},e),o)).divId&&(e.divId+=e.adCounter,t&&(e.msid=e.divId)),e})(e,n)),S(S(S({},o),e),{},n?{jarvisad:!0}:{divId:x(e,t),jarvisad:!0})},_=(e,t,n)=>{try{var o,i,r;const{layout:a,content:s,specialAds:d}=e,l=(null==s?void 0:s.ctn)||{},c=(null==s?void 0:s.dfp)||{},p=(null==s?void 0:s.mgid)||{},u=(null==s||null===(o=s.dfp)||void 0===o?void 0:o.mrecs)||{},f=(null==s||null===(i=s.dfp)||void 0===i?void 0:i.midAds)||{};let m;return a[t]?m=a[t]:c[t]?m=c[t]:u[t]?m=u[t]:f[t]?m=f[t]:l[t]?m=l[t]:p[t]?m=S(S({},p[t]),{},{mgid:!0}):d&&(m=((e,t)=>{for(const n of e)if(n.name===t)return n;return null})(d,t)),null!==(r=m)&&void 0!==r&&r.replacewith&&!n&&(m=_(e,m.replacewith,!0)),m}catch(e){return console.log(e),null}};var T,E=n(18109);function D(e,t,n,o){T||(T="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),1===r)t.children=o;else if(r>1){for(var a=new Array(r),s=0;s<r;s++)a[s]=arguments[s+3];t.children=a}if(t&&i)for(var d in i)void 0===t[d]&&(t[d]=i[d]);else t||(t=i||{});return{$$typeof:T,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},L.apply(this,arguments)}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class $ extends o.Component{constructor(e){super(e),this.gutterFallbackEvent=e=>{e&&this.props.setGutterFallback(e.showGutterFallback,e.gutterFallbackAdObject)},this.state={},this.gutterFallbackEvent=this.gutterFallbackEvent.bind(this),this.adData={}}omponentDidMount(){if(this.props.immediateLoad&&!this.props.inlineGptAd){const e=this.props.navigation&&this.props.navigation.data&&this.props.navigation.data.path||"";this.props.loadAllAdsFromQueue("",e)}window.addEventListener("SET_GUTTER_FALLBACK",this.gutterFallbackEvent)}omponentDidUpdate(e){const t=this.props.navigation&&this.props.navigation.data&&this.props.navigation.data.path||"";e.pauseAdCall&&!this.props.pauseAdCall&&setTimeout((()=>{this.props.loadAllAdsFromQueue("",t)}),500)}render(){if(this.props.pauseAdCall)return!1;const{props:e}=this,t=this.props.navigation&&this.props.navigation.data&&this.props.navigation.data.path||"",{lazyload:n,isPrime:i,hyp1:s,refreshAd:d,cookieKey:l,targetingInfo:c,prebidFlag:p,prebidCountryList:u,dfpParams:f,byPassIsPrime:m,revenueAds:h,msid:w}=this.props;let{data:b={},isCTN:v}=this.props;const O=(e=>{try{if(!e||"object"!=typeof e)return null;const{data:t={},revenueAds:n}=e,{name:o}=t;if(n&&o){const t=_(n,o);return t?N(t,e):null}return null}catch(e){return null}})({data:b,isCTN:v,revenueAds:h,msid:w});O&&(b=O),b.jadType&&(v="ctn"===b.jadType);let j=!1,C="",P=!1;return b&&b.prebid&&"false"===b.prebid&&(P=!0),i&&!m||void 0===b?null:("undefined"!=typeof window&&"object"==typeof window.apstag&&(C=a.ZP.get("geo_country"),!p||P||"object"!=typeof u||0!==u.length&&-1===u.indexOf(C)||(j=!0)),j&&"undefined"!=typeof window&&!window.PRBID_INITIALISED&&"object"==typeof window.apstag&&(window.apstag.init({pubID:"5025",adServer:"googletag",bidTimeout:2e3,simplerGPT:!0,params:{us_privacy:"1---"}}),window.PRBID_INITIALISED=!0),!v||n||b.dfpslot?v&&!n&&b.dfpslot?o.createElement(A,L({},e,{data:F({},b)})):n?D(r.Z,{className:e.lazyClassName,debounce:!1,offsetVertical:this.props.offsetVertical||400,onContentVisible:,void 0,o.createElement(g,L({},e,{data:F(F({},b),{},{hyp1:s,cookieKey:l},c),prebid:j,dfpParams:f}))):this.props.inlineGptAd&&b&&b.divId&&!this.props.adsCounter?D(o.Fragment,{},void 0,D("div",{id:b.divId,className:e.className,suppressHydrationWarning:!0}),D("script",{dangerouslySetInnerHTML:{__html:`\n              (function(){\n                var divId = '${b.divId}';\n                var adSlotName = '${b.adCode}'\n                var adSize = ${JSON.stringify(b.size)};\n                window.adQueue = window.adQueue || [];\n                window.adQueue.push(divId);\n                window.googletag = window.googletag || { cmd: [] };\n                window.googletag.cmd.push(function() {\n                  window.TimesGDPR.common.consentModule.gdprCallback(dataObj => {\n                    if (dataObj.isEUuser && dataObj.didUserOptOut === false ) {\n                      //user has has given consent for personalised ads ( i.e did not opt out )\n                      window.googletag && googletag.pubads().setRequestNonPersonalizedAds(0);\n                    }else if(dataObj.isEUuser){\n                      window.googletag.pubads().setRequestNonPersonalizedAds(1);\n                    }\n                  });\n                  var googletag = window.googletag;\n                  var adObject = googletag.defineSlot(adSlotName, adSize, divId);\n                  adObject.addService(googletag.pubads());\n                  //googletag.display(divId);\n                });\n              })();\n              `}})):o.createElement(g,L({},e,{data:F(F({},b),{},{hyp1:s,refreshAd:d,cookieKey:l},c),deviceType:this.props.deviceType,prebid:j})):o.createElement(y,L({},e,{data:F({},b)})))}}$.defaultProps={lazyload:!1,deviceType:"",isCTN:!1,navigation:{},pauseAdCall:!1},$.defaultProps={byPassIsPrime:!1,revenueAds:null,dataset:{}};const R=(0,i.$j)((e=>({isPrime:e.isPrime,navigation:e.navigation,hyp1:e.liveblog?e.liveblog.hyp1:"",adsCounter:l()(e,"adCaller.adsCounter"),currentCountry:e.geo?e.geo.currentCountry:"",prebidFlag:!(!e.adCaller||!e.adCaller.prebidFlag),adsQueueData:e.adCaller.adsQueueData,prebidCountryList:e.adCaller&&e.adCaller.prebidCountryList&&e.adCaller.prebidCountryList.length>0?e.adCaller.prebidCountryList:[],revenueAds:l()(e,"revenue.data.ads",null)})),(e=>({addToQueue:loadAllAdsFromQueue:(t,n)=>{e((0,E.xj)(t,n))},setGutterFallback:)))($)},39446:(e,t,n)=>{"use strict";n.d(t,{$_:()=>c,IY:()=>p,RK:()=>C,Ur:()=>g,kp:()=>h,lD:()=>w,lb:()=>f,lh:()=>j,oe:()=>m,t2:()=>u,tY:()=>l,xZ:()=>b});var o=n(94829),i=n(54620);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d={business:"Channel",platform:"platform",section:"SCN",sectionl2:"SubSCN",sectionl3:"LastSubSCN",templatename:"Tmpl_SCN",customurl:"pathname"};function l(e,t=1){const n=e.includes(".cms"),o=e.split("/"),i={};if(0===o.length)return null;let r=1;const a=[],s=o.length;if(n)for(let e=s-3;e<s;e+=1)a.push(e);return o.forEach(((e,n)=>{if(n>t+1&&!a.includes(n))switch(!0){case n===t+2:i.SCN=e;break;case n===t+3:i.SubSCN=e;break;case n===t+4:i.LastSubSCN=e;break;case n>t+4:i[`LastSubSCN_Child_${r}`]=e,r+=1}})),i}function c(){return{size:"300x250",placementId:"327541940615355_2433755636660631"}}unction u(e){e&&"object"==typeof e&&"object"==typeof window&&(window.Times=window.Times||{},window.Times.adsConfig=window.Times.adsConfig||{},window.Times.adsConfig.SubSCN=e.subSection||"")}function f(e){window.TimesGDPR&&window.TimesGDPR.common.consentModule.gdprCallback&&window.TimesGDPR.common.consentModule.gdprCallback((t=>{if(t){const n=a(a({},t),{},{userCountry:i.ZP.get("geo_country")});"function"==typeof e&&e(n)}}))}function m(e={}){return!("dfp"!==e.adType&&e.isCTN||"string"!=typeof e.adCode||"mrec"!==e.adCode.substring(e.adCode.length-4,e.adCode.length).toLowerCase())}function g(e,t,n){const i={};try{const r=e&&Object.keys(e).length;if(t&&!r)return l(t,n);const a={subsecname1:"SCN",subsecname2:"SubSCN",subsecname3:"LastSubSCN"};Object.keys(e).forEach((t=>{const n=e[t],o=parseInt(t.charAt(t.length-1),10);if(o>0){const e=`subsecname${o}`,t=a[e]||"LastSubSCN_Child_"+(o-3),r=n[e];t&&r&&(i[t]=r.toLowerCase())}})),(0,o.p7)("resobj",i)}catch(e){(0,o.p7)("error",e)}return i}function h(){var e;"undefined"!=typeof window&&"object"==typeof window._dfpObj&&"function"==typeof(null===(e=window._dfpObj)||void 0===e?void 0:e.atfStickyCloseBtnHandler)&&window._dfpObj.atfStickyCloseBtnHandler()}function w(e,t){if("string"==typeof e&&"string"==typeof t){const n=e?e.split(","):[],o=t?t.split(","):[],i=new Set([...n,...o]);return Array.from(i).join(",")}return e||t}function b(e){return"undefined"!=typeof window&&"object"==typeof window.adsconfig&&"function"==typeof window.checkJarvisIsAdActive&&window.adsconfig[e]&&1===window.checkJarvisIsAdActive(window.adsconfig[e])?window.adsconfig[e]:null}const y=e=>{try{return"string"==typeof e?e.replace(/[^a-zA-Z0-9\/]/g,"").toLowerCase():e}catch(t){return(0,o.p7)("removeSplchracterFromStr",t),e}},v=(e,t)=>{try{return e=(e=Array.isArray(e)?e:[e]).map((),t=y(t),e.length>0&&-1===e.indexOf("all")&&-1===e.indexOf(t)?0:1}catch(e){return(0,o.p7)("isValidProperty",e),0}};function O(e,t){try{const{isWapView:n,dl:o,SCN:i}=t;if(e=a({},e),t.platform||(t.platform=n?"mweb":"web"),e.isAdActive=0,e.scn=i,o){const t=function(e){const t=new Date;return t.setDate(t.getDate()-2),t.setHours(0,0,0)<parseInt(e,10)?1:0}(o);if(e.dl=o,!t)return e.failDueTo="not latest article",e}const r=Object.keys(d)||[];for(let n=0;n<r.length;n+=1){const o=r[n],i=d[o],a=e[o];if(a){const n=t[i];if(0===v(a,n))return e.failDueTo=`jarvisKey-${o}|pageKey-${i}|pageProp-${n}|jarvisprop-${a}`,e}}return e.isAdActive=1,e}catch(t){return(0,o.p7)("isCurrentAdActiveSS",t),e}}function j(e){try{return Object.keys(e.jarvisConfig).forEach((t=>{const n=e.jarvisConfig[t];null!=n&&n.checkpageconfig&&(e.jarvisConfig[t]=O(n,e))})),a({},e.jarvisConfig)}catch(e){return(0,o.p7)("isCurrentAdActiveSS",e),{}}}const C=e=>{try{const{navSubsecs:t,pathname:n,isMobile:i}=e,r=g(t,n,-1),s=((e,t)=>{try{const n=w(e.newsKws,e.kws),o=a({Tmpl_SCN:e.Tmpl_SCN,Channel:e.Channel,Meta_Keywords:n,Content_URL:e.contentURL},t);return e.articleId&&(o.Article_ID=e.articleId),e.specialId&&(o.Hyp1=e.specialId),o}catch(e){return(0,o.p7)("isValidProperty",e),{}}})(e,r);let d=null;if("undefined"==typeof window){Object.keys(r).forEach((),e.platform=i?"mweb":"web",d=j(e)}return{keyValueObj:s,newCaimpaignConfig:d}}catch(e){return(0,o.p7)("isValidProperty",e),{}}}},10112:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(99408);function i(...e){(0,o.Z)("gaAndGrx",...e)}},55518:(e,t,n)=>{"use strict";n.d(t,{GA:()=>i,yl:);var o=n(99408);const i=({category:e="default",action:t="action",label:n})=>{let i=e,r=t,a=n;return(e,t,n)=>{const s=n.value;return n.value=function(...e){if("function"==typeof ga){try{"object"==typeof e&&e[0]&&e[0].target&&(e[0].target.getAttribute("data-ga4")||e[0].currentTarget.getAttribute("data-ga4"))&&(0,o.Z)("ga4",...JSON.parse(e[0].target.getAttribute("data-ga4")||e[0].currentTarget.getAttribute("data-ga4")))}catch(e){}if("object"==typeof e&&e[0]&&e[0].target){const t=e[0].target.getAttribute("data-setgacategory")||e[0].currentTarget.getAttribute("data-setgacategory");if(e[0].target.getAttribute("data-ga")||e[0].currentTarget.getAttribute("data-ga")){const n=(e[0].target.getAttribute("data-ga")||e[0].currentTarget.getAttribute("data-ga")).split("|");"string"==typeof t&&t.length>0||3===n.length?(i=n[0]||i,r=n[1]||r,a=n[2]||a):(i="undefined"!=typeof window&&window.categoryForGA?`${window.categoryForGA}`:`WEB-${window.location.href}`,n.length>0&&(r=n[0]||r,a=n[1]||a))}else if("string"==typeof e[0].target.getAttribute("pg")){const t=e[0].target.getAttribute("pg");i=t.split("#")[0],r=t.substring(t.lastIndexOf("#")+1,t.lastIndexOf("~")),a=t.split("~")[1]}else if("string"==typeof e[0].currentTarget.getAttribute("data-newga")){const n=e[0].currentTarget.getAttribute("data-newga");if("string"==typeof t&&t.length>0)i=n.split("#")[0],r=n.split("#")[1],a=n.split("#")[2];else{i="undefined"!=typeof window&&window.categoryForGA?`${window.categoryForGA}`:`WEB-${window.location.href}`;const e=n.split("#");r=e[0],a=e[1],e[2]&&e[2].indexOf("/")>-1&&(i=e[2].split("/")[0])}}}if("string"!=typeof a)a=window.location.href;else if("string"==typeof a&&-1!==a.indexOf("<msid-url>")){const e=window.location.pathname;if(-1!==e.indexOf("/")){const t=e.split("/").reverse().slice(0,1).join("").replace(".cms","");a=t.match(/\d+/)?a.replace("<msid-url>",`msid_${t}`):`-url_${a.replace("<msid-url>",`url_${window.location.href}`)}`}}""!==i&&""!==r&&"action"!==r&&(0,o.Z)("gaAndGrx","send","event",i,r,a)}s.apply(this,e)},n}};var r=n(33487);r.PqG;var a=n(10112);r.PqG},4423:(e,t,n)=>{"use strict";n.d(t,{z:()=>i});var o=n(55518);function i({data:e}){if("object"!=typeof e)return;let{gaAction:t,gaLabel:n,gaCategory:i}=e;const{nonInteraction:r}=e;"string"==typeof t&&"string"==typeof n&&(e.noSpaceReplace||(t=t.split(" ").join("")),t=t.split("&").join(""),e.noSpaceReplace||(n=n.split(" ").join("")),n=n.split("&").join("")),"string"!=typeof i&&(i=window.categoryForGA);let a=!("undefined"==typeof window||!window.isGaNonInteractive)&&window.isGaNonInteractive;!0===r&&(a=!0),"undefined"!=typeof window&&window.categoryForGA&&e&&!a&&(0,o.yl)("send","event",i,t,n),"undefined"!=typeof window&&window.categoryForGA&&e&&a&&(0,o.yl)("send","event",i,t,n,{nonInteraction:1})}},10700:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(54620),i=n(31795),r=n.n(i),a=n(33487),s=n(94829);let d=null;const l={setSignalsInfo(){const{ClickFromPositionIntegerWithinSlot:e=-99,ClickFromSlotName:t="NA",ClickFromPersonalizationAlgorithmName:n="NA",ClickFromPixelsFromTop:o=-99,ClickFromTemplate:i="NA"}=(0,s.qm)()||{};return{ClickFromPositionIntegerWithinSlot:e,ClickFromSlotName:t,ClickFromPersonalizationAlgorithmName:n,ClickFromPixelsFromTop:o,ClickFromTemplate:i}},setUrl(){"undefined"!=typeof window&&"object"==typeof window.grxParams&&(window.grxParams.url=window.location.href)},setssoid(){const e=(0,o.ej)("ssoid")?(0,o.ej)("ssoid"):document.cookie.match(/(?:\\s)?ssoid=(\\w+);?/);"undefined"!=typeof window&&e?(window.grxParams[a.trj.dimension22]=e,window.grxParams[a.trj.dimension21]=1,window.grxParams[a.trj.dimension81]=!0):(window.grxParams[a.trj.dimension22]=a.kNX,window.grxParams[a.trj.dimension21]=0,window.grxParams[a.trj.dimension81]=!1)},setPrimeStatus(){const e=(0,o.ej)("ssoid")?(0,o.ej)("ssoid"):document.cookie.match(/(?:\\s)?ssoid=(\\w+);?/),t=(0,o.ej)("prc")?(0,o.ej)("prc"):document.cookie.match(/(?:\\s)?prc=(\\w+);?/);"undefined"!=typeof window&&e?(window.grxParams[a.trj.dimension10]=t&&t[0]?t[0]:"0",window.sessionStorage&&"true"===sessionStorage.getItem("inGracePeriod")&&(window.grxParams[a.trj.dimension10]="5_grace")):window.grxParams[a.trj.dimension10]="-1"},setplanName(){"undefined"!=typeof window&&window.sessionStorage&&sessionStorage.getItem("planName")&&(window.grxParams[a.trj.dimension33]=sessionStorage.getItem("planName"))},setPlatformInfo(){"undefined"!=typeof window&&(window.grxParams[a.trj.dimension63]=r().manufacturer?r().manufacturer:a.kNX,window.grxParams[a.trj.dimension64]=r().product?r().product:a.kNX,window.grxParams[a.trj.dimension79]=r().os&&r().os.version?r().os.version:a.kNX,window.grxParams[a.trj.dimension80]=r().os&&r().os.family?r().os.family:a.kNX)},setGeoDetails(){const e=(0,o.ej)("geolocation"),t=(0,o.ej)("geo_country"),n=(0,o.ej)("grxgeostate");window.grxParams[a.trj.dimension82]=e||a.kNX,window.grxParams[a.trj.dimension55]=n||a.kNX,window.grxParams[a.trj.dimension56]=t||a.kNX},setGlobalGrxValues(){this.setssoid(),this.setPrimeStatus(),this.setPlatformInfo(),this.setGeoDetails(),this.setUrl(),"undefined"!=typeof window&&"object"==typeof window.grxParams&&"function"==typeof window.grx&&Object.keys(window.grxParams).forEach((e=>{const t=window.grxParams[e];a.OFJ.includes(e)&&window.grx("set",e,t)}))},setNonGlobalGrxValues(){this.setplanName();const e=(0,a.TJY)(),t={},n=window.App?window.App.gaData:{};return"object"==typeof n&&a.zfC.forEach((),"undefined"!=typeof window&&"object"==typeof window.grxParams&&"function"==typeof window.grx&&Object.keys(window.grxParams).forEach((n=>{const o=window.grxParams[n];e.includes(n)&&(t[n]=o)})),t},showSubscription:registerWithPopupManager(){d=window.TimesApps.PopUpManager.registerPopup("notification",this.initNTFCModule),d&&d.onReadyCallback(1)},bindEvents(){window.TimesApps&&window.TimesApps.PopUpManager?this.registerWithPopupManager():(window.removeEventListener("popUpManagerLoaded",this.registerWithPopupManager),window.addEventListener("popUpManagerLoaded",this.registerWithPopupManager))},subscribeUser:function(e){if("serviceWorker"in navigator&&"default"===window.Notification.permission)try{void 0!==window.grx_module&&void 0!==window.ntfc_module&&window.ntfc_module.initBrowserPopup(e)}catch(e){console.info("exceptionn",e)}},checkBlockedStatus:function(){return!("serviceWorker"in navigator)||!window.Notification||"denied"!==window.Notification.permission&&"granted"!==window.Notification.permission},initNTFCModule(){"undefined"!=typeof ntfc_module&&(window.ntfc_module.init(),d&&"function"==typeof d.onShowCallback&&d.onShowCallback(!0))},setGrxValues(){window.grxParams=window.grxParams?window.grxParams:{},this.setGlobalGrxValues();return{nonGlobalGrxObject:this.setNonGlobalGrxValues(),signalsGrxObject:this.setSignalsInfo()}},initializeGrxAndHit(){void 0!==window.grx_module?"undefined"!=typeof window&&window.location.href.indexOf("frmapp=yes")>0||window.geoinfo&&("EU"===window.geoinfo.Continent||"US"===window.geoinfo.CountryCode)||window.location.href.indexOf("/world")>-1||window.location.href.indexOf("/business")>-1||"function"==typeof window.grx_module.triggerGrx&&window.grx_module.triggerGrx():setTimeout((,1e3)},init},46357:(e,t,n)=>{"use strict";n.d(t,{Eh:()=>S,XK:()=>O,ZD:()=>A,e:()=>C,h4:()=>v,ot:()=>k,rW:()=>j,vb:()=>P});var o=n(42947),i=n(49669);st d="common",l=c=l("SET_RUNTIME_VARIABLE"),p=l("TOGGLE_OPEN_IN_APP"),u=l("RECEIVE_VARIANT_DATA"),f=l("UPDATE_CAIMPAIGN_ADS_CONFIG"),m=l("SET_THEME_BY_OPTIMIZELY"),g=l("SET_SITE_CONFIG"),h=l("SET_CPD_CONFIG"),w=l("SET_SOCIAL_SHARE_STATE"),b=l("SET_GUTTER_FALLBACK"),y=l("RECEIVE_SITE_CLIENT_CONFIG");function v(e){return{type:p,payload:{isShown:e}}}function O(e){return{type:m,payload:{newTheme:e}}}nction P(e){return function A(){return e=>o.Z.get("/site_settings/feedtype-json.cms",{params:{}},"skipfeedengine").then((t=>{e(t.data))})).catch((t=>{e({type:g,payload:{data:{}}})}))}function k(){return e=>o.Z.get("https://s3-ap-southeast-1.amazonaws.com/toiassets/js/expresso_json.js",{params:{}},"skipfeedengine").then((t=>{e(function(e){return{type:h,payload:a({},e)}}(t.data))})).catch((t=>{e({type:h,payload:{}})}))}function S(){return e=>o.Z.get("/site_global_config/feedtype-sjson.cms",{},"skipfeedengine").then((t=>{const{data:n={}}=t;e(n))}))}i.Z.register(d,(function(e={},t){switch(t.type){case c:return a(a({},e),{},{[t.payload.name]:t.payload.value});case p:return a(a({},e),{},{openInAppBtnVisible:t.payload.isShown});case m:return a(a({},e),{},{newTheme:t.payload.newTheme});case g:return a(a({},e),{},{siteConfig:t.payload.data});case h:return a(a({},e),{},{cpdConfig:t.payload});case w:return a(a({},e),{},{socialShareTrayStatus:t.payload.status});case b:return a(a({},e),{},{showGutterFallback:t.payload.showGutterFallback,gutterFallbackAdObject:t.payload.gutterFallbackAdObject});case y:return a(a({},e),t.payload);case f:return a(a({},e),{},{siteConfig:a(a({},e.siteConfig),{},{revenue:t.payload})});case u:return a(a({},e),{},{variant:t.payload});default:return e}}))},95557:(e,t,n)=>{"use strict";n.d(t,{_6:()=>d,es:()=>l,vP:()=>s});var o=n(94829);const i="PAYTM",r="AMAZON",a="TATACLIQ";function s(e){return e&&(e.includes("paytmmall.com")||e.includes("paytm.com")||e.includes("amazon.in")||e.includes("amazon.com")||e.includes("amazon.co.uk")||e.includes("amazon.ca")||e.includes("amazon.de")||e.includes("amazon.fr")||e.includes("amazon.es")||e.includes("amazon.it")||e.includes("amazon.ae")||e.includes("tatacliq.com")||e.includes("fnp.com")||e.includes("bajajmall.in")||e.includes("croma.com")||e.includes("anrdoezrs.net")||e.includes("dpbolvw.net")||e.includes("kqzyfj.com")||e.includes("jdoqocy.com")||e.includes("kqzyfj.com")||e.includes("dpbolvw.net"))}function d(e){return"string"!=typeof e?"":e.includes("paytmmall.com")||e.includes("paytm.com")?i:e.includes("amazon.in")||e.includes("amazon.co.uk")||e.includes("amazon.ca")||e.includes("amazon.de")||e.includes("amazon.fr")||e.includes("amazon.es")||e.includes("amazon.it")||e.includes("amazon.ae")||e.includes("amazon.com")?r:e.includes("tatacliq.com")?a:e.includes("fnp.com")?"FNP":e.includes("bajajmall.in")?"BAJAJMALL":e.includes("croma.com")?"CROMA":e.includes("anrdoezrs.net")||e.includes("dpbolvw.net")||e.includes("kqzyfj.com")||e.includes("jdoqocy.com")||e.includes("kqzyfj.com")||e.includes("dpbolvw.net")?"NORTON":""}function l(e,t,n=!1,s=!1){const l=d(t),c=function(e){return e===i?"affiliate_paytm":e===r?"affiliate_amazon":e===a?"affiliate_tatacliq":""}(l);let p="";try{p=t&&new URL(t).searchParams.get("tag")}catch(e){return console.log(`Error:unable to convert URL = ${t}, wrong format of overridelink:`,e),""}if(t&&t.includes(c))return t;const u=encodeURIComponent(t);let f;return p||(f=n?function(e="",t){return t===i?"putm=toiwap_articles&":t===r?"&utm_campaign=times_of_india_wap-21":t===a?e.replace(" ","_"):""}(e,l):function(e="",t){return t===i?"putm=toiweb_articles&":t===r?"&utm_campaign=times_of_india_web-21":t===a?e.replace(" ","_"):""}(e,l)),`${(0,o.zu)(n)}/${c}.cms?url=${u}${e?`&title=${e}`:""}${s?"&ismsp=yes":""}${p?"":`&${f}`}`}},80228:]);
//# sourceMappingURL=77518_es6_module.43e8ba0c.chunk.js.map