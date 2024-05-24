window.hjSiteSettings = window.hjSiteSettings || {"site_id":2633550,"r":0.14317746552757796,"rec_value":0.0,"state_change_listen_mode":"automatic","record":true,"continuous_capture_enabled":true,"recording_capture_keystrokes":true,"session_capture_console_consent":false,"anonymize_digits":false,"anonymize_emails":true,"suppress_all":false,"suppress_all_on_specific_pages":[],"suppress_text":false,"suppress_location":false,"user_attributes_enabled":false,"legal_name":null,"privacy_policy_url":null,"deferred_page_contents":[],"record_targeting_rules":[],"feedback_widgets":[],"heatmaps":[],"polls":[],"integrations":{"optimizely":{"tag_recordings":false},"abtasty":{"tag_recordings":false},"mixpanel":{"send_events":false},"unbounce":{"tag_recordings":false},"google_optimize":{"tag_recordings":false},"hubspot":{"enabled":false,"send_recordings":false,"send_surveys":false}},"features":["settings.billing_v2","survey.embeddable_widget","feedback.widgetV2","feedback.widget_telemetry","ask.popover_redesign","survey.type_button","survey.image_question","survey.screenshots","feedback.embeddable_widget","client_script.compression.pc","error_reporting"],"tracking_code_verified":true};

!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r(i.key),i)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==t(r)?r:String(r)}var n,i=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.send=e,this.batchSize=r,this.flushInterval=n,this.buffer=[],this.flushTimer=null}var r,n;return r=t,(n=[{key:"getBuffer",value:function(){return this.buffer}},{key:"add",value:function(t){var e=this;this.buffer.push(t),this.buffer.length>=this.batchSize?this.flush():this.flushTimer||(this.flushTimer=setTimeout((function(){e.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}var o,s=function(){try{return"performance"in window&&"now"in window.performance}catch(t){return!1}},c={version:6,metricsUrl:(null===(n=window._hjSettings)||void 0===n?void 0:n.metricsUrl)||"https://metrics.hotjar.io",sampling:{metrics:.1,fieldMetrics:.01,debug:.5,universalDebug:.05*.1},browser:{hasPerformance:!1,shouldLogMetrics:!1,inLab:!1},buffer:{bufferSize:40,flushInterval:3e3}},u={isDebugEnabled:!1,isMetricsEnabled:!1,isFieldMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},l=function(t,e,r){var n;u.loggedMetrics[t]=a(a({},u.loggedMetrics[t]),{},((n={})[e]=r||{},n))},d=function(t){if(!t)return"value";var e=Object.keys(t)[0];return e&&t[e]||"value"},f=function(t){var e,r=null!==(e=t.tag)&&void 0!==e?e:void 0;return u.isDebugEnabled?a(a(a({},r),t.extraTags),u.genericTags):r},h=function(t,e){if(!o)return!1;var r=u.isMetricsEnabled||u.isDebugEnabled;return"lab"===t&&(r=c.browser.inLab),"field"===t&&(r=u.isFieldMetricsEnabled),e?r&&e.flush:r},g=function(t){var e=!1,r="v=".concat(c.version),n=u.isDebugEnabled?"".concat(c.metricsUrl,"?").concat(r,"&debug=true"):"".concat(c.metricsUrl,"?").concat(r),i=JSON.stringify(t);if("sendBeacon"in navigator)try{e=navigator.sendBeacon.bind(navigator)(n,i)}catch(t){}if(!1===e)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(t){}c.browser.shouldLogMetrics&&console.debug("New Metrics: ",t)},b={getConfig:function(t){return c[t]},getState:function(t){return u[t]},start:function(){try{c.browser={hasPerformance:s(),shouldLogMetrics:/hjMetrics=1/.test(location.search),inLab:/hjLab=true/.test(location.search)};var t=b.time(),e=window.hjSiteSettings||{},r=e.features,n=e.site_id,a=new Set(r),l=c.sampling;return u.genericTags={site_id:n},u.isDebugEnabled=Math.random()<=l.universalDebug||a.has("client_script.metrics.debug")&&Math.random()<=l.debug,u.isMetricsEnabled=Math.random()<=l.metrics,u.isFieldMetricsEnabled=u.isMetricsEnabled&&Math.random()<=l.fieldMetrics,o=new i(g,c.buffer.bufferSize,c.buffer.flushInterval),t}catch(t){console.debug("Error in metrics.start",{error:t})}},reset:function(){u.loggedMetrics={}},stop:function(){u.isDebugEnabled=!1,u.isMetricsEnabled=!1,u.genericTags={}},count:function(t,e){var r=e.incr,n=e.tag,i=e.extraTags,s=e.type;try{var c,l=d(n),g=u.loggedMetrics[t],b=0;if(r?(b=(g&&g[l]||0)+(r.value||1),u.loggedMetrics[t]=a(a({},g),{},((c={})[l]=null!=r&&r.flush?0:b,c))):b=1,h(s,r)){var v={name:t,type:"count",value:b,tags:f({tag:n,extraTags:i})};o.add(v)}}catch(t){}},distr:function(t,e){var r=e.task,n=e.value,i=e.extraTags;h()&&o.add({name:t,type:"distribution",value:n,tags:f({tag:{task:r},extraTags:i})})},time:function(){try{if(!c.browser.hasPerformance)return;return performance.now()}catch(t){}},timeEnd:function(t,e){var r=e.tag,n=e.start,i=e.total,a=e.extraTags,s=e.type;try{var c=b.time();if(!i&&!c)return;var u=d(r),g=i||(n&&c?c-n:void 0);if(l(t,u,{}),g&&g>0&&h(s)){var v={name:t,type:"distribution",value:Math.round(g),tags:f({tag:r,extraTags:a})};o.add(v)}return c}catch(e){console.debug("Failed to send timer metric: ",{name:t,tag:r,error:e})}},timeIncr:function(t,e){var r,n,i,a,o=e.tag,s=e.start,c=e.flush,f=e.extraTags,h=e.type,g=hj.metrics.time(),v=s&&g?g-s:void 0,m=(r=t,{tagName:n=d(o),start:(a=(i=u.loggedMetrics[r])&&i[n]||{}).start,total:a.total}),w=v?v+(m.total||0):m.total;return l(t,m.tagName,{total:w}),c&&b.timeEnd(t,{tag:o,total:w,extraTags:f,type:h}),w},timeWatcher:function(){var t,e=0,r=!1,n=function(){var r,n=b.time();return e+=null!==(r=t&&n&&n-t)&&void 0!==r?r:0,t=b.time(),e};return{start:function(){if(!r)return r=!0,t=b.time()},incr:n,end:function(){var r=n();return e=0,t=void 0,r}}},getErrorMessage:function(t){return t instanceof Error?t.message:"string"==typeof t?t:""}};window.hj=window.hj||function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(e)},window.hj.metrics=b;var v=hj.metrics.start();window.hjBootstrap=window.hjBootstrap||function(t,e,r){var n,i=new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot","i"),a=(null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||"unknown";if(i.test(a))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",a);var o="http:"===window.location.protocol,s=Boolean(window._hjSettings.preview);if(o&&!s)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(t,e,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var u=window.document,l=u.head||u.getElementsByTagName("head")[0];hj.scriptDomain=t;var d=u.createElement("script");d.async=1,d.src=hj.scriptDomain+e,d.charset="utf-8",l.appendChild(d),c.revision="8a00b58",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.fd7a1c20a85f7a95e5ff.js","2633550"),hj.metrics.timeEnd("resource-blocking-time",{tag:{resource:"hotjar-js"},start:v,type:"lab"}),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.c1436322dbcdb6f235d0.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.e068d4da5877f107712a.js"},SURVEY_ISOLATED:{js:"survey-isolated.40fe79479a0f13258431.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.f79c0c7bb13d8a14bddc.js"},SURVEY_INVITATION:{js:"survey-invitation.49d46c378d21727c73cd.js"},NOTIFICATION:{js:"notification.dcf8412c061e7fe8234d.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.7b5a9e5c07a2f5e4fc0c.js"},SENTRY:{js:"sentry.58c81e3e25532810f6fd.js"},BROWSER_PERF:{js:"browser-perf.8417c6bba72228fa2e29.js"}}}();ion(){b.conditions[this.options.condition](this,this.container.elemRect())}}]),t}();function O(){if(!p.a.badScrollPerformance()){const t=c()(".".concat(v));t.toArray().forEach((t=>new w(c()(t)))),t.removeClass(v),setTimeout((()=>{y.forEach((t=>{t.scrollUpdate()}))}),0)}}w.defaults={$container:l.a.$win,target:"$self",condition:"inView",args:{},eventParams:{}},l.a.$win.on("debouncedDomChanged",O),e.a={initAll:O,ScrollTrigger:w,DIRECTIVE_NAME:m}},242:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"b",(function(){return k}));var o=n(5),a=n(4),r=n(64),s=n(207),i=n.n(s),c=n(21),l=n(0),u=n.n(l),d=n(2),f=n(181),p=n(65);const h=(()=>{let t=0,e=null;function n(){t>0||(e=setTimeout((()=>{window.prerenderReady=!0}),1e3))}return{add(){t+=1,clearTimeout(e)},remove(){t-=1,n()},checkReady:n}})();document.addEventListener("DOMContentLoaded",h.checkReady);var m=n(28),v=n(87);const g="vue2",y=r.a.get(),b=(()=>{let t={};const e=new p.a;return{add:n=>{Object.keys(n).forEach((o=>{o in t||(t[o]=n[o],e.fire(o))}))},get:function(n){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8e4;return n in t?(a=t[n],"function"!=typeof a||a.extend?Promise.resolve(a):a().then((t=>t.default))).then((t=>Object(m.c)().then((()=>t)))):new Promise(((t,a)=>{setTimeout(a,o),e.one(n,(()=>t(b.get(n))))}));var a},reset:()=>t={}}})(),w=t=>t.data("vue-instance"),O=t=>{if(w(t))return;const{id:e,name:n,attrs:r,props:s,domProps:l,mapState:f,class:p,useStoreProps:m,vModel:O}=d.a.params(g,t),j=e||n;m&&!(j in a.a.state.component.state)&&a.a.dispatch("component/update",{id:j,props:s});const k=t=>f?Object.entries(f).reduce(((t,e)=>{let[n,o]=e;const a=i()(y,o);return void 0!==a&&(t[n]=a),t}),t||{}):t,_=b.get(n);_.catch((()=>{throw Error("Missing embed: ".concat(n))})),_.finally(h.remove);const x=_.then((e=>new o.default({el:t[0],name:"Wrapper:".concat(n),mixins:[m?{data:()=>({storeProps:Object.keys(s).reduce(((t,e)=>{const n="string"==typeof s[e]&&s[e]?s[e]:e;return Object.defineProperty(t,e,{get:()=>Object(v.c)(a.a.state.component.state[j].props)(n),set(t){a.a.commit("component/MERGE_FIELD",{path:"state.".concat(j,".props.").concat(n),value:t})},configurable:!0,enumerable:!0}),t}),{})})}:{}],store:a.a,router:c.l,async mounted(){u()(this.$el).trigger("domChanged")},render(t){const n=this;return t(e,{props:m?n.storeProps:k(s),attrs:r,domProps:l,class:p,on:m&&O?{update(t){n.storeProps[O]=t}}:{}})}})));t.data("vue-instance",x)},j=async t=>{if(t.data("vue-initialised"))return;const{lazy:e}=d.a.params(g,t);e?((t=>{d.a.updateParams(f.a.DIRECTIVE_NAME,t,{oneOff:!0,onEvent:"vueCreate"}),new f.a.ScrollTrigger(t).scrollUpdate()})(t),await Object(m.b)(),O(t)):O(t),h.add(),t.data("vue-initialised",!0)},k=()=>{u()(".js-vue2").toArray().map((t=>u()(t))).forEach(j)};document.addEventListener("DOMContentLoaded",k),d.a.add(g,"init",j),d.a.add(g,"vueCreate",O),d.a.add(g,"destroy",(async t=>{const e=await w(t);e&&e.$destroy()}))},307:function(t,e,n){var o=n(309),a=n(88),r=n(182),s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(a(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var n=i.test(t);return n||c.test(t)?l(t.slice(2),n?2:8):s.test(t)?NaN:+t}},308:function(t,e,n){var o=n(80);t.exports=function(){return o.Date.now()}},309:function(t,e,n){var o=n(310),a=/^\s+/;t.exports=function(t){return t?t.slice(0,o(t)+1).replace(a,""):t}},310:function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},538:function(t,e,n){"use strict";var o=n(5),a=n(522),r=n(550);const s={center:r.e,bottomSheet:r.b,bottomCenter:r.c,bottomRight:r.d,fullscreen:r.f,absolute:r.a},i=Object(o.defineComponent)({name:"BaseModal"});var c=Object(o.defineComponent)(Object.assign({},i,{props:{layout:{type:[String,Object],default:"center",validator:t=>"string"!=typeof t||t in s},backdrop:{type:Boolean,default:!0},mobileSheet:{type:Boolean,default:!0},contentRepos:{type:Boolean,default:!1},scrollRepos:{type:Boolean,default:!1}},setup(t,e){let{expose:n}=e;const r=t,i=Object(o.computed)((()=>{const t="string"==typeof r.layout?s[r.layout]:r.layout;return[Object.assign({},t,{backdrop:r.backdrop})]})),c=Object(o.ref)(),l=()=>c.value.close();return Object(o.onMounted)((()=>c.value.activate(i))),Object(o.watch)(i,(()=>c.value.updateLayouts(i))),n({close:l}),{__sfc:!0,layoutPresets:s,props:r,popoverLayouts:i,popover:c,close:l,BasePopover:a.a}}})),l=n(44),u=Object(l.a)(c,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e(n.BasePopover,t._g(t._b({ref:"popover",attrs:{"scroll-repos":t.scrollRepos,"content-repos":t.contentRepos,"mobile-sheet":t.mobileSheet&&"fullscreen"!==t.layout},scopedSlots:t._u([{key:"default",fn:function({}){return[t._t("default",null,{close:n.close})]}}],null,!0)},"BasePopover",t.$attrs,!1),t.$listeners))}),[],!1,null,null,null);e.a=u.exports},574:function(t,e,n){"use strict";var o=n(538);n.d(e,"a",(function(){return o.a}));var a=n(519);n.d(e,"e",(function(){return a.a}));var r=n(517);n.d(e,"b",(function(){return r.a}));var s=n(524);n.d(e,"d",(function(){return s.a}));var i=n(512);n.d(e,"c",(function(){return i.a}));n(520)},586:function(t,e){t.exports=function(t){if(null==t)throw new TypeError("Cannot destructure "+t)},t.exports.__esModule=!0,t.exports.default=t.exports},755:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var o=n(5),a=n(574),r=n(507),s=Object(o.defineComponent)({__name:"confirm-modal",props:{title:null,confirmText:null,cancelText:{default:"Cancelar"},content:null,contentHtml:null,icon:null,mode:{default:"danger"},ceptOk:null,loading:{type:Boolean},width:{default:"300"}},emits:["confirm","cancel"],setup(t,e){let{emit:n}=e;const s=Object(o.ref)(null);return{__sfc:!0,modal:s,emit:n,cancel:async function(){n("cancel"),s.value.close()},confirm:function(){n("confirm"),s.value.close()},BaseModal:a.a,ModalHead:a.e,ModalBody:a.b,ModalFooter:a.d,BaseButton:r.a}}}),i=n(44),c=Object(i.a)(s,(function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e(n.BaseModal,t._b({ref:"modal",attrs:{"content-class":"",width:t.width},on:{close:n.cancel}},"BaseModal",t.$attrs,!1),[e(n.ModalHead,{attrs:{icon:t.icon}},[t._v(t._s(t.title))]),e(n.ModalBody,[t._t("default",(function(){return[t.contentHtml?e("div",{staticClass:"size--all-m mute--text2 space--b-3",domProps:{innerHTML:t._s(t.contentHtml)}}):t._e(),t.content?e("div",{staticClass:"size--all-m mute--text2 text--b space--b-3"},[t._v(t._s(t.content))]):t._e()]}))],2),e(n.ModalFooter,[e(n.BaseButton,{staticClass:"width--all-6 space--mr-2",attrs:{variant:"tertiary",mode:"default",ellipsis:""},on:{click:n.cancel}},[t._v(" "+t._s(t.cancelText)+" ")]),e(n.BaseButton,{staticClass:"width--all-6",class:t.ceptOk,attrs:{variant:"primary",mode:t.mode,loading:t.loading,ellipsis:""},on:{click:n.confirm}},[t._v(" "+t._s(t.confirmText)+" ")])],1)],1)}),[],!1,null,null,null).exports;const l=(t,e)=>new Promise(((n,a)=>{const r=new(o.default.extend(c))({propsData:t});e&&(r.$slots.default=e),r.$once("confirm",n).$once("cancel",a),r.$mount(),document.body.appendChild(r.$el)}))},86:function(t,e,n){var o=n(88),a=n(308),r=n(307),s=Math.max,i=Math.min;t.exports=function(t,e,n){var c,l,u,d,f,p,h=0,m=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=c,o=l;return c=l=void 0,h=e,d=t.apply(o,n)}function b(t){var n=t-p;return void 0===p||n>=e||n<0||v&&t-h>=u}function w(){var t=a();if(b(t))return O(t);f=setTimeout(w,function(t){var n=e-(t-p);return v?i(n,u-(t-h)):n}(t))}function O(t){return f=void 0,g&&c?y(t):(c=l=void 0,d)}function j(){var t=a(),n=b(t);if(c=arguments,l=this,p=t,n){if(void 0===f)return function(t){return h=t,f=setTimeout(w,e),m?y(t):d}(p);if(v)return clearTimeout(f),f=setTimeout(w,e),y(p)}return void 0===f&&(f=setTimeout(w,e)),d}return e=r(e)||0,o(n)&&(m=!!n.leading,u=(v="maxWait"in n)?s(r(n.maxWait)||0,e):u,g="trailing"in n?!!n.trailing:g),j.cancel=function(){void 0!==f&&clearTimeout(f),h=0,c=p=l=f=void 0},j.flush=function(){return void 0===f?d:O(a())},j}},89:function(t,e,n){"use strict";function o(t){const e=Object.prototype.toString;let n=t.length;const r=new Array(n);for(;n;)switch(n-=1,e.call(t[n])){case"[object Object]":r[n]=a({},t[n]);break;case"[object Array]":r[n]=o(t[n]);break;default:r[n]=t[n]}return r}function a(t,e){const n=Object.prototype.toString;let r;for(r in e)if(e.hasOwnProperty(r))switch(n.call(e[r])){case"[object Object]":t[r]=a("[object Object]"===n.call(t[r])?t[r]:{},e[r]);break;case"[object Array]":t[r]=o(e[r]);break;default:t[r]=e[r]}return t}e.a={boundMethod:function(t,e){return t[""+e]||(t[""+e]=t[e].bind(t))},deepCloneArray:o,deepMerge:a,uniqueArray:function(t){return t.filter(((e,n)=>t.indexOf(e)===n))}}}}]);