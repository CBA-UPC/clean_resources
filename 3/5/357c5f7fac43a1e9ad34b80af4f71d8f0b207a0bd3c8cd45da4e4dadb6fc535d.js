"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3263],{73263:function(e,t,n){n.r(t),n.d(t,{default:);var r,i=n(89688),o=n(32735),a=n(24438),s=n.n(a),u=n(33108),c=n.n(u),l=n(64826),h=n(47946),p=n(59639),f=n(36953),d=n(77509),w=n(19851),y=n(26124),g=n(31737),m=n(60106),Z=function(e){(0,d.Z)(r,e);var t,n=(t=),;function r(){var e;(0,h.Z)(this,r);for(var t=arguments.length,i=Array(t),o=0;o<t;o++)i[o]=arguments[o];return e=n.call.apply(n,[this].concat(i)),(0,g.Z)((0,f.Z)(e),"initGA",function(e,t,n,r){m.ZP.initialize(r,{gaOptions:{userType:"anonymous"===t?"Non-registered":"registered"===t?"Registered":"Paying",allowLinker:!0,cookieDomain:e}}),m.ZP.ga("require","linker"),m.ZP.ga("linker:autoLink",["haaretz.co.il","themarker.com","haaretz.com"]),n&&m.ZP.ga("require","ec")}),e}return(0,p.Z)(r,[{key:"componentDidMount",value:function(){if(window&&!window.GA_INITIALIZED)this.initGA(this.props.host,this.props.userType,this.props.withEC,this.props.GaHost),window.GA_INITIALIZED=!0;else if(window&&window.GA_INITIALIZED){var e,t,n=this.props.userType;m.ZP.set({userType:"anonymous"===n?"Non-registered":"registered"===n?"Registered":"Paying"})}e=window.location.pathname+window.location.search,t=this.props.withPageView,m.ZP.set({page:e}),t&&m.ZP.pageview(e)}},{key:"render",value:]),r}(o.Component);(0,g.Z)(Z,"defaultProps",{GaHost:null,host:null,userType:null,withEC:!1,withPageView:!1});var P=n(74512),v=s()(r||(r=(0,i.Z)(["\n  query GetHostAndUserForGoogleAnalytics {\n    hostname @client\n    user: htzUser @client {\n      type\n    }\n    googleAnalyticsId @client {\n      htzUa\n      tmUa\n      hdcUa\n    }\n  }\n"])));function k(e){var t=e.withEC,n=e.withPageView;return(0,P.jsx)(l.Z,{query:v,children:function(e){var r=e.data,i=e.loading,o=e.error;if(o)return c().error(o),null;if(i)return null;var a=r.hostname,s=r.user,u=r.googleAnalyticsId,l=a.includes("themarker.com")?"themarker.com":a.includes("haaretz.com")?"haaretz.com":"haaretz.co.il",h=u[a.includes("themarker.com")?"tmUa":a.includes("haaretz.com")?"hdcUa":"htzUa"];return l&&(null!=s&&s.type||a.includes("login"))?(0,P.jsx)(Z,{GaHost:h,host:l,userType:s.type,withEC:t,withPageView:n}):null}})}k.defaultProps={withEC:!1,withPageView:!1};var I=k}}]);
//# sourceMappingURL=3263.1af65837b95b9195.js.map:this.flushTimer||(this.flushTimer=setTimeout((function(){e.flush()}),this.flushInterval))}},{key:"flush",value:function(){this.buffer.length>0&&(this.send(this.buffer),this.buffer=[]),this.flushTimer&&(clearTimeout(this.flushTimer),this.flushTimer=null)}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a.apply(this,arguments)}var o,s=function(){try{return"performance"in window&&"now"in window.performance}catch(t){return!1}},c={version:6,metricsUrl:(null===(n=window._hjSettings)||void 0===n?void 0:n.metricsUrl)||"https://metrics.hotjar.io",sampling:{metrics:.1,fieldMetrics:.01,debug:.5,universalDebug:.05*.1},browser:{hasPerformance:!1,shouldLogMetrics:!1,inLab:!1},buffer:{bufferSize:40,flushInterval:3e3}},u={isDebugEnabled:!1,isMetricsEnabled:!1,isFieldMetricsEnabled:!1,loggedMetrics:{},genericTags:{}},l=function(t,e,r){var n;u.loggedMetrics[t]=a(a({},u.loggedMetrics[t]),{},((n={})[e]=r||{},n))},f=function(t){if(!t)return"value";var e=Object.keys(t)[0];return e&&t[e]||"value"},d=function(t){var e,r=null!==(e=t.tag)&&void 0!==e?e:void 0;return u.isDebugEnabled?a(a(a({},r),t.extraTags),u.genericTags):r},h=function(t,e){if(!o)return!1;var r=u.isMetricsEnabled||u.isDebugEnabled;return"lab"===t&&(r=c.browser.inLab),"field"===t&&(r=u.isFieldMetricsEnabled),e?r&&e.flush:r},g=function(t){var e=!1,r="v=".concat(c.version),n=u.isDebugEnabled?"".concat(c.metricsUrl,"?").concat(r,"&debug=true"):"".concat(c.metricsUrl,"?").concat(r),i=JSON.stringify(t);if("sendBeacon"in navigator)try{e=navigator.sendBeacon.bind(navigator)(n,i)}catch(t){}if(!1===e)try{var a=new XMLHttpRequest;a.open("POST",n),a.timeout=1e4,a.send(i)}catch(t){}c.browser.shouldLogMetrics&&console.debug("New Metrics: ",t)},b={getConfig:function(t){return c[t]},getState:function(t){return u[t]},start:function(){try{c.browser={hasPerformance:s(),shouldLogMetrics:/hjMetrics=1/.test(location.search),inLab:/hjLab=true/.test(location.search)};var t=b.time(),e=window.hjSiteSettings||{},r=e.features,n=e.site_id,a=new Set(r),l=c.sampling;return u.genericTags={site_id:n},u.isDebugEnabled=Math.random()<=l.universalDebug||a.has("client_script.metrics.debug")&&Math.random()<=l.debug,u.isMetricsEnabled=Math.random()<=l.metrics,u.isFieldMetricsEnabled=u.isMetricsEnabled&&Math.random()<=l.fieldMetrics,o=new i(g,c.buffer.bufferSize,c.buffer.flushInterval),t}catch(t){console.debug("Error in metrics.start",{error:t})}},reset:function(){u.loggedMetrics={}},stop:function(){u.isDebugEnabled=!1,u.isMetricsEnabled=!1,u.genericTags={}},count:function(t,e){var r=e.incr,n=e.tag,i=e.extraTags,s=e.type;try{var c,l=f(n),g=u.loggedMetrics[t],b=0;if(r?(b=(g&&g[l]||0)+(r.value||1),u.loggedMetrics[t]=a(a({},g),{},((c={})[l]=null!=r&&r.flush?0:b,c))):b=1,h(s,r)){var v={name:t,type:"count",value:b,tags:d({tag:n,extraTags:i})};o.add(v)}}catch(t){}},distr:function(t,e){var r=e.task,n=e.value,i=e.extraTags;h()&&o.add({name:t,type:"distribution",value:n,tags:d({tag:{task:r},extraTags:i})})},time:function(){try{if(!c.browser.hasPerformance)return;return performance.now()}catch(t){}},timeEnd:function(t,e){var r=e.tag,n=e.start,i=e.total,a=e.extraTags,s=e.type;try{var c=b.time();if(!i&&!c)return;var u=f(r),g=i||(n&&c?c-n:void 0);if(l(t,u,{}),g&&g>0&&h(s)){var v={name:t,type:"distribution",value:Math.round(g),tags:d({tag:r,extraTags:a})};o.add(v)}return c}catch(e){console.debug("Failed to send timer metric: ",{name:t,tag:r,error:e})}},timeIncr:function(t,e){var r,n,i,a,o=e.tag,s=e.start,c=e.flush,d=e.extraTags,h=e.type,g=hj.metrics.time(),v=s&&g?g-s:void 0,m=(r=t,{tagName:n=f(o),start:(a=(i=u.loggedMetrics[r])&&i[n]||{}).start,total:a.total}),w=v?v+(m.total||0):m.total;return l(t,m.tagName,{total:w}),c&&b.timeEnd(t,{tag:o,total:w,extraTags:d,type:h}),w},timeWatcher:function(){var t,e=0,r=!1,n=function(){var r,n=b.time();return e+=null!==(r=t&&n&&n-t)&&void 0!==r?r:0,t=b.time(),e};return{start:function(){if(!r)return r=!0,t=b.time()},incr:n,end:function(){var r=n();return e=0,t=void 0,r}}},getErrorMessage:function(t){return t instanceof Error?t.message:"string"==typeof t?t:""}};window.hj=window.hj||function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];(window.hj.q=window.hj.q||[]).push(e)},window.hj.metrics=b;var v=hj.metrics.start();window.hjBootstrap=window.hjBootstrap||function(t,e,r){var n,i=new RegExp("bot|google|headless|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|phantomjs|pingdom|ahrefsbot","i"),a=(null===(n=window.navigator)||void 0===n?void 0:n.userAgent)||"unknown";if(i.test(a))return hj.metrics.count("session-rejection",{tag:{reason:"bot"}}),void console.warn("Hotjar not launching due to suspicious userAgent:",a);var o="http:"===window.location.protocol,s=Boolean(window._hjSettings.preview);if(o&&!s)return hj.metrics.count("session-rejection",{tag:{reason:"https"}}),void console.warn("For security reasons, Hotjar only works over HTTPS. Learn more: https://help.hotjar.com/hc/en-us/articles/115011624047");var c=function(t,e,r){window.hjBootstrapCalled=(window.hjBootstrapCalled||[]).concat(r),window.hj&&window.hj._init&&window.hj._init._verifyInstallation&&hj._init._verifyInstallation()};c(0,0,r);var u=window.document,l=u.head||u.getElementsByTagName("head")[0];hj.scriptDomain=t;var f=u.createElement("script");f.async=1,f.src=hj.scriptDomain+e,f.charset="utf-8",l.appendChild(f),c.revision="4cce220",window.hjBootstrap=c},window.hjBootstrap("https://script.hotjar.com/","modules.bab19612e24942353c1e.js","232867"),hj.metrics.timeEnd("resource-blocking-time",{tag:{resource:"hotjar-js"},start:v,type:"lab"}),window.hjLazyModules=window.hjLazyModules||{SURVEY_V2:{js:"survey-v2.c3b62eb2c8979375c4d6.js"},SURVEY_BOOTSTRAPPER:{js:"survey-bootstrapper.0656b4af4d0e458171c1.js"},SURVEY_ISOLATED:{js:"survey-isolated.ec0131e1400a11867d18.js"},HEATMAP_RETAKER:{js:"heatmap-retaker.f79c0c7bb13d8a14bddc.js"},SURVEY_INVITATION:{js:"survey-invitation.0c3413ba323a3b80de21.js"},NOTIFICATION:{js:"notification.dcf8412c061e7fe8234d.js"},PREACT_INCOMING_FEEDBACK:{js:"preact-incoming-feedback.7b5a9e5c07a2f5e4fc0c.js"},SENTRY:{js:"sentry.58c81e3e25532810f6fd.js"},BROWSER_PERF:{js:"browser-perf.8417c6bba72228fa2e29.js"}}}();