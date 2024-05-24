html,body,div,span,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,img,strong,b,ol,ul,li,caption,article,canvas,figure,figcaption,footer,header,menu,nav,section,input {
	margin: 0;
	padding: 0;
}

article,aside,details,figcaption,figure,footer,header,menu,nav,
section {
	display: block;
}

ol,ul {
	list-style: none;
}

a {
	text-decoration: none;
	color: #000;
}

.ally {
	position: absolute;
	clip: rect(0 0 0 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
}

.hidden {
	opacity: 0;
}

img {
	width: 100%;
	vertical-align: top;
}turn e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){e.TRC=e.TRC||{};var t={PENDING:{},FULFILLED:{},REJECTED:{}};function n(e){var r=[],s=[],l=m(t.FULFILLED),c=m(t.REJECTED),u=t.PENDING,f,d;function m(e){return function(n){u===t.PENDING&&(f=n,o(d=a((u=e)===t.FULFILLED?r:s,f)))}}try{e(l,c)}catch(e){c(e)}var p={then:function e(a,l){var c=new n(function(e,n){var f=function t(o,a,r){"function"==typeof o?a.push(function(t){var a;try{a=o(t),i(c,a,e,n)}catch(e){n(e)}}):a.push(r)};f(a,r,e),f(l,s,n),u!==t.PENDING&&o(d)});return c},catch:function(e){return this.then(null,e)}};return p}function o(e){setTimeout(e,0)}function a(e,t){return function(){for(var n;n=e.shift();)n(t)}}function i(e,t,o,a){var r;if(t===e)throw new TypeError("A promise's fulfillment handler cannot return the same promise");if(t instanceof n)t.then(o,a);else if(!t||"object"!==_typeof(t)&&"function"!=typeof t)o(t);else{try{r=t.then}catch(e){return void a(e)}if("function"==typeof r){var s=function t(n){l||(l=!0,i(e,n,o,a))},l,c=function e(t){l||(l=!0,a(t))};try{r.call(t,s,c)}catch(e){l||(a(e),l=!0)}}else o(t)}}n.all=function(e){return new n(function(t,n){var o=[],a,i;if(e.length)for(a=i=e.length;i--;)r(i);else t(o);function r(i){e[i].then(function(e){o[i]=e,--a||t(o)},n)}})},n.race=function(e){return new n(function(t,n){e.forEach(function(e){e.then(t,n)})})},n.resolve=function(e){return new n(function(t){t(e)})},n.reject=function(e){return new n(function(t,n){n(e)})},e.TRC.PromisePolyFill=n}(window),TRC.loaderUtils={isNativeFunction:function e(t){return/\{\s*\[native code\]\s*\}/.test("".concat(t))},addOriginTrialMetaTag:function e(t){var n=document.createElement("meta");n.httpEquiv="origin-trial",n.content=t,document.head.appendChild(n)},Promise:"undefined"!=typeof Promise?Promise:TRC.PromisePolyFill},function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){var n=document.createEvent("CustomEvent");return t=t||{bubbles:!1,cancelable:!1,detail:void 0},n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),function(e){e.TRC=e.TRC||{};var t="none",n="tbt",o="inp",a={USER_BLOCKING:"user-blocking",USER_VISIBLE:"user-visible",BACKGROUND:"background"},i,r,s;function l(){return TRC.loaderUtils.isNativeFunction(window.Scheduler)&&window.scheduler&&window.scheduler.postTask}function c(){return!!s&&(!!window.scheduler&&!!window.scheduler.yield&&TRC.loaderUtils.isNativeFunction(window.Scheduler));var e}function u(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(c())return window.scheduler.yield().then(e);if(l()){var n=t?a.USER_BLOCKING:a.BACKGROUND;return window.scheduler.postTask(e,{priority:n})}return r?new TRC.loaderUtils.Promise(function(t){window.setTimeout(function(){t(e())},0)}):f(e)}function f(e){return new TRC.loaderUtils.Promise(function(t){t(e())})}addEventListener("configReady",function(e){var t=e.detail;i=TRC.__optFad||t.global.perf_opt_fader,r=void 0===TRC.__optFadPo?t.global.enable_opt_fader_poly:TRC.__optFadPo,s=t.global["use-scheduler-yield"]}),TRC.sendTaskToFader=function(t,a){var s,l;return i=i||n,r=r||!1,i===n?u(t,a):i===o&&TRC.loaderUtils.isNativeFunction(e.Scheduling)&&navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending()?u(t,a):f(t)}}(window),function(e,t){if(t.TRC=t.TRC||{},"object"==typeof e&&"function"==typeof e.now){var n=function(){};e.mark&&"function"==typeof e.mark||(e.mark=n),TRC.PerfEvenType={START:"start",STOP:"stop",MARK:"mark",REQ_LEVEL_START:"startReq",REQ_LEVEL_STOP:"stopReq"},TRC.Performance=function(n){var o=n||{},a="tbl_"+Date.now()+"_",i=[],r=TRC.EVENT_LOOP_INTERVAL,s=1,l=20,c=TRC.EVENT_LOOP_REPORT_INTERVAL;this.perfString="",this.timeout=null,this.modeEvents={},this.measurementIds=[],this.modeDictionery={},this.measurements=[],this.vitalsCls=0,this.vitalsClsMax=0,this.fpsMeasurements=[],this.eventLoopMeasurements=[],this.measurementsCollection=[],this.firstIterationFlag=!0,o.measures=o.measures||{},o.measures["generalMeasure_loaderLoaded"]=[a+"2.0",a+"measuring"],o.measures["generalMeasure_implLoaded"]=[a+"4.0",a+"measuring"],o.measures["generalMeasure_integration"]=["tbl_ic",a+"measuring"],o.measures["generalMeasure_inflate"]=["tbl_inflate_start","tbl_inflate_end"];var u=function(e,t,n){this.measurements.push({name:"generalMeasure_"+e,entryType:"measure",startTime:n||performance.now(),duration:t})};this.addPageConnectionMetrics=function(){if(this.firstIterationFlag&&navigator.connection){var e=navigator.connection;if(e.downlink&&u.call(this,"connectionDownlink",e.downlink),e.rtt&&u.call(this,"connectionRtt",e.rtt),e.effectiveType){var t;switch(e.effectiveType){case"slow-2g":t=1;break;case"2g":case"3g":case"4g":t=e.effectiveType[0];break;default:t=-1}u.call(this,"connectionEffectiveType",Number(t))}}},this.addVitalsMetricObserver=function(){try{if(t.PerformanceObserver){var e=this,n;new t.PerformanceObserver(function(t){for(var n=t.getEntries(),o=0;o<n.length;o++){var a=n[o],i=a.processingStart-a.startTime;u.call(e,"firstInputDelay",i,a.startTime)}}).observe({type:"first-input",buffered:!0});var o=0,a=0,i=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;new PerformanceObserver(function(t){for(var n=t.getEntries(),s=0;s<n.length;s++){var l=n[s];l.hadRecentInput||((l.startTime-i>5e3||l.startTime-r>1e3)&&(i=l.startTime,a=0),r=l.startTime,a+=l.value,o=Math.max(o,a),e.vitalsCls+=l.value,e.vitalsClsMax=o,TRC&&TRC.dispatch&&TRC.dispatch("onCls",l))}}).observe({type:"layout-shift",buffered:!0})}}catch(e){t.__trcWarn&&__trcWarn("faile to add taboola web vitals to perf",e)}},this.addVitalsMetricObserver(),this.logMeasurements=function n(i,r){if("function"==typeof d&&(!(performance.now()/1e3/60>30)||i)){var s=[];if(this.measurementIds=[],e.getEntriesByName&&e.measure){var l,c;if(e.mark(a+"measuring"),0==e.getEntriesByName(a+"measuring").length){if(!e.setResourceTimingBufferSize)return;e.setResourceTimingBufferSize(e.getEntries().length+100),e.mark(a+"measuring")}if(this.firstIterationFlag)for(var u in o.measures)if(o.measures.hasOwnProperty(u)){var p=o.measures[u][0],g=o.measures[u][1];e.getEntriesByName(p).length>0&&e.getEntriesByName(g).length>0&&(e.measure(u,p,g),this.measurementIds.push(u))}for(var T in this.modeEvents)if(this.modeEvents.hasOwnProperty(T))for(var h in this.modeEvents[T])if(this.modeEvents[T].hasOwnProperty(h)){var C=this.modeEvents[T][h];if(C){var v=C["prefix"]+h+"_"+T;C["start"]&&C["stop"]?(e.measure(v,C["start"],C["stop"]),this.measurementIds.push(v)):C["mark"]&&(e.measure(v,C["mark"],a+"measuring"),this.measurementIds.push(v))}this.modeEvents[T][h]=null}for(var b=0;b<this.measurementIds.length;b++){c=this.measurementIds[b];var R,u=e.getEntriesByName(c)[0];this.measurements.push(u)}(s=e.getEntriesByType("navigation")).length>0&&this.firstIterationFlag&&(s=s[0],this.measurements.push({name:"generalMeasure_domInteractive",entryType:"measure",startTime:s.domInteractive,duration:0}),this.measurements.push({name:"generalMeasure_domContentLoadedEventEnd",entryType:"measure",startTime:s.domContentLoadedEventEnd,duration:0}),this.measurements.push({name:"generalMeasure_loadEventEnd",entryType:"measure",startTime:s.loadEventEnd,duration:0}),this.measurements.push({name:"generalMeasure_domComplete",entryType:"measure",startTime:s.domComplete,duration:0}),this.addPageConnectionMetrics()),0!==this.vitalsCls&&(this.measurements.push({name:"generalMeasure_clsAggAdjusted",entryType:"measure",startTime:performance.now(),duration:100*this.vitalsCls}),this.measurements.push({name:"generalMeasure_clsMaxAggAdjusted",entryType:"measure",startTime:performance.now(),duration:100*this.vitalsClsMax})),this.firstIterationFlag=!1,this.returnMeasueObj={};var y={};if(0!==this.measurements.length){for(;this.fpsMeasurements.length>0;)this.measurements.push(this.fpsMeasurements.pop());for(;this.eventLoopMeasurements.length>0;)this.measurements.push(this.eventLoopMeasurements.pop());y.measurements=JSON.stringify(this.measurements),y.dict=JSON.stringify(this.modeDictionery),this.returnMeasueObj.cv=TRC.version||"",TRC.networkId&&(this.returnMeasueObj.networkId=TRC.networkId),t.TRCImpl&&t.TRCImpl.systemFlags&&t.TRCImpl.systemFlags.loaderType&&(this.returnMeasueObj.lt=t.TRCImpl.systemFlags.loaderType),this.returnMeasueObj.sd=d(),this.returnMeasueObj.ri=f(),this.returnMeasueObj.vi=m(),this.returnMeasueObj.data=JSON.stringify(y),t.TRCImpl.sendEvent("perf",this.returnMeasueObj,null,!1,null,null,r),this.measurementsCollection=this.measurementsCollection.concat(this.measurements),this.measurements=[]}}}},this.addIntervention=function(){var e;"function"==typeof window.ReportingObserver&&(e=new window.ReportingObserver(g.bind(this,this.logMeasurements.bind(this,!0)),{types:["intervention"],buffered:!1})).observe()},this.mark=function(t,n,o,i,r,s){var l=function(e){var t=0;if(0==e.length)return t;for(var n=0;n<e.length;n++){var o;t=(t<<5)-t+e.charCodeAt(n),t&=t}return t},c=n||e.now(),u=l(o+i),f=a+t+(o||i?"_"+u:"");if(e.mark(f),r){switch(this.modeDictionery[u]=o+"~~@~~"+i,this.modeEvents[u]=this.modeEvents[u]||{},this.modeEvents[u][r]=this.modeEvents[u][r]||{},s){case TRC.PerfEvenType.START:case TRC.PerfEvenType.REQ_LEVEL_START:this.modeEvents[u][r]["start"]=f;break;case TRC.PerfEvenType.STOP:case TRC.PerfEvenType.REQ_LEVEL_STOP:this.modeEvents[u][r]["stop"]=f;break;case TRC.PerfEvenType.MARK:this.modeEvents[u][r]["mark"]=f}s===TRC.PerfEvenType.REQ_LEVEL_STOP||s===TRC.PerfEvenType.REQ_LEVEL_START?this.modeEvents[u][r]["prefix"]="reqMeasure_":this.modeEvents[u][r]["prefix"]="generalMeasure_"}return this.perfString=this.perfString+";"+t+"="+c,f},window.addEventListener("beforeunload",this.logMeasurements.bind(this));var f=function(){var e;return(t.TRCImpl&&t.TRCImpl.getGlobalRequestId.trcBind(t.TRCImpl))()},d=function(){var e;return(t.TRCImpl&&t.TRCImpl.getGlobalSessionData.trcBind(t.TRCImpl))()},m=function(){return t.taboola_view_id||(t.taboola_view_id=(new Date).getTime()),t.taboola_view_id},p=function(){this.elapsed=0,this.last=null},g=function(e){this.mark("intervention-event",null,"heavyAdIntervention","","heavyAdIntervention",TRC.PerfEvenType.MARK),e()};p.prototype={tick:function(e){this.elapsed=(e-(this.last||e))/1e3,this.last=e},fps:function(){return Math.round(1/this.elapsed)}};var T=new p;function h(e){t.requestAnimationFrame(h),T.tick(e)}this.cancelFpsMeasure=function(){h=function(){}},this.getTimer=function(){return T},this.getrender=function(){return h};var C=0,v=function(){var e,t,n={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(e in n)if(n.hasOwnProperty(e)&&e in document){t=n[e];break}return function(n){return n&&document.addEventListener(t,n),!document[e]}}();if(v(function(){v()?(TRC.performance&&TRC.performance.mark("windowActiveSTART"+C,null,"active",C,"activeTab",TRC.PerfEvenType.START),TRC.performance&&TRC.performance.mark("windowActiveSTOP"+C,null,"active",C,"activeTab",TRC.PerfEvenType.STOP)):(TRC.performance&&TRC.performance.mark("windowInactiveSTART"+C,null,"inactive",C,"inactiveTab",TRC.PerfEvenType.START),TRC.performance&&TRC.performance.mark("windowInactiveSTOP"+C,null,"inactive",C,"inactiveTab",TRC.PerfEvenType.STOP)),C++}),this.addIntervention(),o.measureEnable){TRC.__takeMeasureQueue=TRC.__takeMeasureQueue||[];var b=o.measureTimeToSend||0,R=this.logMeasurements.bind(this);if(TRC.__takeMeasureQueue.push(R),0==b)window.addEventListener("beforeunload",TRC.__takeMeasureQueue.pop());else if(1==TRC.__takeMeasureQueue.length){var y=TRC.__takeMeasureQueue.pop();this.measureTimeout=setTimeout(function(){R(),o.measureInterval&&(this.measureInterval=setInterval(R,Math.max(Number(o.measureInterval),1e4)))},b)}setInterval(function(){var t=e.now();setTimeout(function(){i.push(e.now()-t)},0)},r),setInterval(function(){var e,t=0,n=0,o=0;if(i.length>0){e=i.length;for(var a=0;a<i.length;a++)n=Math.max(n,i[a]),o+=i[a];t=o/e,i=[];var r=Number(performance.now());TRC.performance.eventLoopMeasurements.length<=l&&(TRC.performance.eventLoopMeasurements.push({name:"generalMeasure_ELAVG_"+s,entryType:"measure",startTime:r,duration:t}),TRC.performance.eventLoopMeasurements.push({name:"generalMeasure_ELMAX_"+s,entryType:"measure",startTime:r,duration:n}),s++)}},c),"complete"!==document.readyState&&document.addEventListener("readystatechange",function(t){"complete"===t.target.readyState&&TRC.performance.measurements.push({name:"generalMeasure_documentReady",entryType:"measure",startTime:e.now(),duration:0})})}}}}(window.performance,window),function(e){e.TRC=e.TRC||{},e.TRC.inflate={STYLE:"__style__",COMMON:"__common__",KEYS:"__keys__",getModeCustom:function e(t,n){var o="\\/\\*\\ss-split-".concat(t,"\\s\\*\\/[^]*\\*\\se-split-").concat(t,"\\s\\*\\/"),a=new RegExp(o,"g"),i=n.match(a);return i?i[0]:null},inflateObject:function e(t,n){var o=this,a={},i;return this.inflateValue(this.KEYS,t,n).forEach(function(e){a[e]=o.inflateValue(e,t,n)}),a},inflateValue:function e(t,n,o){var a=o[t];return void 0===a&&(a=n[t]),a},inflateStyle:function e(t,n){var o="";return Object.keys(n).forEach(function(e){var a=n[e],i="";e.split(",").forEach(function(e){""!==i&&(i+=","),i+=".".concat(t," ").concat(e)}),o+="".concat(i,"{").concat(a,"}")}),o},getConfig:function t(n){var o=this,a=n.global["enable-mode-injection"]&&!(e.navigator&&"string"==typeof e.navigator.userAgent&&/(iPhone|iPad)(?=.*AppleWebKit)(?!.*CriOS)/i.test(e.navigator.userAgent)),i;if(!(n&&n.modes))return n;var r=n.modes,s=n.global,l=s.style,c=r[this.COMMON];if(c){var u=window.performance&&"function"==typeof window.performance.mark;u&&window.performance.mark("tbl_inflate_start");var f={},d=l.rtl,m=[],p,g=TRC.sendTaskToFader,T=10,h;return Object.keys(r).forEach(function(e){e!==o.COMMON&&m.push(function(){var t=r[e];f[e]=o.inflateObject(c,t),a?(f[e][o.STYLE]=t[o.STYLE]||c[o.STYLE],n.global["enable-custom-injection"]&&(f[e].mode_custom=o.getModeCustom(e,l.mode_custom)||"")):d+=o.inflateStyle(e,o.inflateObject(c[o.STYLE],t[o.STYLE]))})}),function e(){if(0===m.length)return TRC.loaderUtils.Promise.resolve();var t=m.splice(0,T);return g(function(){t.forEach(function(e){return e()})}).then(e)}().then(function(){return a?f[o.COMMON]=c:(d+=l.custom,d+=l.mode_custom,s.style=d),n.modes=f,u&&window.performance.mark("tbl_inflate_end"),n})}}}}(window),function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),function(win,doc){if(!win.TRC||!win.TRC.utm){win.TRC?TRC.utm=[]:TRC={utm:[]};var queueName="_taboola";win[queueName]=win[queueName]||[];var bakerConfig={"modes":{"thumbnails-rr-abp":{"widget-creator-revision":"13389072","responsive-rules":[{"minWidth":0,"margin":{"v":2,"h":2},"rows":1,"cells":1,"virtualThumbWidth":3,"virtualThumbHeight":2}],"read-more-mode-devices":"smart_phone","recommendationReel-num-title-lines":0,"__style__":{".video-title":"font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:66.0px;*height:66.0px;color:#343434;text-decoration:none;",".videoCube .video-duration":"left:36px;display:block;",".trc_rbox_header":"font-family:AppleSDGothicNeo-Light, Helvetica;font-size:20.0px;font-weight:bold;text-decoration:none;color:#0a0a0a;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0px 0px 6px 0px;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",".video-label-box":"text-align:left;height:66px;margin:5px 0px 0px 0px;","":"width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:5px 0px 5px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",".syndicatedItem .video-title":"max-height:44.0px;*height:44.0px;color:#343434;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",".syndicatedItem .branding":"color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;background-image:null;text-align:left;line-height:22.0px;",".video-label-box.trc-pre-label":"height:0px;",".syndicatedItem .video-label-box.trc-pre-label":"height:0px;",".videoCube .video-label-box.trc-pre-label":"margin:0px 0px 0px 0px;",".branding":"color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;background-image:null;text-align:left;line-height:22.0px;",".syndicatedItem .video-label-box":"height:66px;margin:5px 0px 0px 0px;",".logoDiv a span":"font-size:11.0px;color:#000000;display:inline;font-weight:normal;",".videoCube:hover .video-label-box .video-title":"text-decoration:underline;",".videoCube .video-label-box .video-title":"margin:0 0 0 0;",".video-label-box .branding":"display:block;",".trc_header_left_column":"width:48%;_width:48%;display:inline-block;height:auto;background-color:transparent;",".trc_rbox_header .trc_header_ext":"position:relative;top:auto;right:auto;",".logoDiv a":"font-size:100%;",".videoCube a":"padding:0 0 0 0;",".trc_rbox_header .logoDiv":"line-height:normal;",".trc_rbox_header_span .trc_header_right_column":"height:auto;",".trc_header_right_part":"margin:0px 0 0 0;","__keys__":['.video-title','.video-description','.trc_rbox_div','.videoCube .video-duration','.videoCube .video-label-box','.video-label,.sponsored,.sponsored-url','.trc_rbox_header','.sponsored-url','.sponsored','.video-category','.video-duration-detail','.video-rating','.video-uploader','.video-views','.video-published-date','.sponsored-default .video-title','.sponsored-default .video-description','.videoCube','div.videoCube:hover, div.videoCube_hover','.sponsored-default','div.sponsored-default:hover, div.sponsored-default.videoCube_hover','.videoCube .thumbnail-overlay','.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay','.trc_rbox_border_elm','.videoCube .thumbBlock','div.videoCube:hover .thumbBlock','.pager_enabled','.trc_pager_counter','.pager_disabled','.trc_pager_prev:hover, .trc_pager_next:hover','.trc_pager_selected','.trc_pager_unselected','div.trc_pager_pages div:hover','.trc_lightbox_overlay','.video-label-box','.trc_sponsored_overlay','.thumbnail-emblem','.videoCube .sponsored','','.videoCube.vertical','.videoCube.horizontal','.trc_pager_prev,.trc_pager_next','.trc_pager_pages div','.video-external-data','.trc_pager div','.playerCube .thumbnail-overlay','.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay','.playerCube .videoCube','.playerCube .videoCube.horizontal','.playerCube .videoCube .video-label-box','.playerCube .video-duration-detail','.playerCube .video-external-data','.playerCube .video-label-box','.playerCube .video-published-date','.playerCube .video-category','.playerCube .video-description','.playerCube .videoCube .video-duration','.playerCube .videoCube .thumbBlock','.playerCube .video-rating','.playerCube .video-uploader','.playerCube .video-views','.playerCube .video-title','.playerCube div.videoCube:hover, div.videoCube_hover','.whatsThisSyndicated','div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover','div.syndicatedItem:hover .thumbBlock','.videoCube.syndicatedItem','.videoCube.syndicatedItem.horizontal','.videoCube.syndicatedItem .thumbBlock','.videoCube.syndicatedItem .thumbnail-overlay','.videoCube.syndicatedItem.vertical','.videoCube.syndicatedItem .video-duration','.syndicatedItem','.syndicatedItem .video-description','.syndicatedItem .video-title','.syndicatedItem .sponsored','.syndicatedItem .sponsored-url','.syndicatedItem .video-category','.syndicatedItem .video-duration-detail','.syndicatedItem .video-external-data','.syndicatedItem .video-published-date','.syndicatedItem .video-rating','.syndicatedItem .video-uploader','.syndicatedItem .video-views','.syndicatedItem .branding','.videoCube.syndicatedItem .thumbBlock .branding','.videoCube.syndicatedItem .thumbBlock .static-text','.videoCube.thumbnail_start .thumbBlock_holder','.trc_rbox_header_icon_img','.video-icon-img','.video-label-box.trc-pre-label','.syndicatedItem .video-label-box.trc-pre-label','.videoCube.thumbnail_start .trc-pre-label','.videoCube.thumbnail_start.trc-split-label .trc-main-label','.videoCube.thumbnail_start.trc-split-label .trc-pre-label','.videoCube .video-label-box.trc-pre-label','.branding','.branding .logoDiv a span','.branding div.logoDiv','.videoCube .thumbBlock .static-text','.syndicatedItem .video-label-box','.logoDiv a span','.tbl-cta-style .cta-button','.tbl-cta-style .cta-button:hover','.videoCube:hover .video-label-box .video-title','.videoCube .video-label-box .video-title','.video-label-box .branding','.trc_header_left_column','.trc_rbox_header .trc_header_ext','.logoDiv a','.videoCube a','.trc_rbox_header .logoDiv','.trc_rbox_header_span .trc_header_right_column','.trc_header_right_part','.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background','.videoCube .story-widget.story-widget-text-under .tbl-ui-line','.tbl-recommendation-reel .tbl-text-under-branding-background','.tbl-recommendation-reel .tbl-text-under-title-background','.tbl-recommendation-reel .tbl-ui-line','.tbl-reco-reel-slider','.tbl-vignette-background-screen','.tbl-vignette-attribution','vignette','.tbl-vignette-close-btn-wrp','recommendationReel']}},"thumbnails-rr":{"widget-creator-revision":"13349259","responsive-rules":[{"minWidth":0,"margin":{"v":2,"h":2},"rows":4,"cells":1,"virtualThumbWidth":3,"virtualThumbHeight":2}],"__style__":{".video-title":"font-family:Arial, Helvetica, sans-serif;font-size:12.0px;line-height:16.0px;font-weight:bold;max-height:48.0px;*height:48.0px;color:#343434;text-decoration:none;","":"width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:5px 0px 5px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",".videoCube.syndicatedItem .video-label-box":"margin-left:0px;",".syndicatedItem .video-title":"max-height:32.0px;*height:32.0px;color:#343434;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;font-size:12.0px;line-height:16.0px;font-weight:bold;text-decoration:none;padding:0;",".syndicatedItem .branding":"color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;background-image:null;text-align:left;line-height:16.0px;",".logoDiv a span":"font-size:11.0px;color:#000000;display:inline;font-weight:normal;",".videoCube:hover .video-label-box .video-title":"text-decoration:underline;",".videoCube .video-label-box .video-title":"margin:0 0 0 0;",".video-label-box .branding":"display:block;",".trc_header_left_column":"width:48%;_width:48%;display:inline-block;height:auto;",".trc_rbox_header .trc_header_ext":"position:relative;top:auto;right:auto;",".logoDiv a":"font-size:100%;",".videoCube a":"padding:0 0 0 0;",".trc_rbox_header .logoDiv":"line-height:normal;",".trc_rbox_header_span .trc_header_right_column":"height:auto;",".trc_header_right_part":"margin:0px 0 0 0;"}},"thumbnails-b":{"header":"당신이 좋아할만한 콘텐츠","widget-creator-revision":"13432529","__style__":{".trc_rbox_header":"font-family:Arial, Helvetica, sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",".videoCube":"width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",".videoCube.syndicatedItem .video-label-box":"margin-left:0px;",".logoDiv a span":"font-size:11.0px;color:#000000;display:inline;font-weight:normal;",".videoCube:hover .video-label-box .video-title":"text-decoration:underline;",".videoCube .video-label-box .video-title":"margin:0 0 0 0;",".video-label-box .branding":"display:block;",".trc_header_left_column":"width:48%;_width:48%;display:inline-block;height:auto;",".trc_rbox_header .trc_header_ext":"position:relative;top:auto;right:auto;",".logoDiv a":"font-size:100%;",".videoCube a":"padding:0 0 0 0;",".trc_rbox_header .logoDiv":"line-height:normal;",".trc_rbox_header_span .trc_header_right_column":"height:auto;",".trc_header_right_part":"margin:0px 0 0 0;"}},"rbox-blended":{"header":"Videos","orientation":"vertical","navigation-type":"scrolling","thumbnail-width":"75","thumbnail-height":"55","detail-order":"title,description","thumbnail-position":"start","attribution-position":"bottom","attribution-text":"<span>by<span style=\"font-size:12px;\">Taboola</span></span>","detail-order-syndicated":"branding,title","syndicated-static-text":"Sponsored","auto-size-rules":[{"minWc":120,"maxWc":249,"minWsRange":8,"maxWsRange":8,"n":1},{"minWc":250,"maxWc":379,"minWsRange":8,"maxWsRange":9,"n":2},{"minWc":380,"maxWc":609,"minWsRange":8,"maxWsRange":10,"n":3},{"minWc":610,"maxWc":749,"minWsRange":8,"maxWsRange":11,"n":4},{"minWc":750,"maxWc":1029,"minWsRange":7,"maxWsRange":11,"n":5},{"minWc":1030,"maxWc":1419,"minWsRange":6,"maxWsRange":11,"n":6},{"minWc":1420,"maxWc":1729,"minWsRange":6,"maxWsRange":12,"n":7},{"minWc":1730,"maxWc":1920,"minWsRange":6,"maxWsRange":13,"n":8}],"rows":1,"widget-creator-layout":"autowidget-template","widget-creator-revision":"-1","mode-is-responsive":false,"responsive-rules":null,"use-css-important":false,"disclosure-position":"top","__style__":{".video-title":"font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;text-decoration:none;",".trc_rbox_div":"width:auto;_width:99%;height:410px;border-width:1px;padding:0;",".videoCube .video-duration":"left:36px;display:block;",".videoCube .video-label-box":"margin-left:81px;margin-right:0px;",".video-label,.sponsored,.sponsored-url":"font-family:Arial, Helvetica, sans-serif;",".trc_rbox_header":"font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:bold;text-decoration:none;color:black;border-width:0;background:transparent;border-style:none none solid none;border-color:#D6D5D3;padding:0;",".videoCube":"width:auto;_width:auto;background-color:transparent;border-width:1px;border-color:#D6D5D3;padding:3px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:none;","":"width:300px;_width:300px;border-width:0px;border-style:solid solid solid solid;border-color:#000000;padding:0;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",".videoCube.horizontal":"border-style:none none none solid;",".videoCube.syndicatedItem":"background-color:transparent;border-color:#D6D5D3;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:1px;border-style:none;",".videoCube.syndicatedItem.horizontal":"border-style:none none none solid;",".videoCube.syndicatedItem .video-duration":"display:block;left:36px;",".videoCube.syndicatedItem .video-label-box":"margin-left:0px;",".syndicatedItem .video-title":"max-height:2.58em;*height:2.58em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:14px;line-height:17.5px;font-weight:bold;text-decoration:none;padding:0;",".syndicatedItem .branding":"color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",".videoCube.syndicatedItem .thumbBlock .branding":"text-align:left;background-color:transparent;display:block;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;",".videoCube.syndicatedItem .thumbBlock .static-text":"text-align:left;background-color:black;display:block;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;","__keys__":['.video-title','.video-description','.trc_rbox_div','.videoCube .video-duration','.videoCube .video-label-box','.video-label,.sponsored,.sponsored-url','.trc_rbox_header','.sponsored-url','.sponsored','.video-category','.video-duration-detail','.video-rating','.video-uploader','.video-views','.video-published-date','.sponsored-default .video-title','.sponsored-default .video-description','.videoCube','div.videoCube:hover, div.videoCube_hover','.sponsored-default','div.sponsored-default:hover, div.sponsored-default.videoCube_hover','.videoCube .thumbnail-overlay','.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay','.trc_rbox_border_elm','.videoCube .thumbBlock','div.videoCube:hover .thumbBlock','.pager_enabled','.trc_pager_counter','.pager_disabled','.trc_pager_prev:hover, .trc_pager_next:hover','.trc_pager_selected','.trc_pager_unselected','div.trc_pager_pages div:hover','.trc_lightbox_overlay','.video-label-box','.trc_sponsored_overlay','.thumbnail-emblem','.videoCube .sponsored','','.videoCube.vertical','.videoCube.horizontal','.trc_pager_prev,.trc_pager_next','.trc_pager_pages div','.video-external-data','.trc_pager div','.playerCube .thumbnail-overlay','.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay','.playerCube .videoCube','.playerCube .videoCube.horizontal','.playerCube .videoCube .video-label-box','.playerCube .video-duration-detail','.playerCube .video-external-data','.playerCube .video-label-box','.playerCube .video-published-date','.playerCube .video-category','.playerCube .video-description','.playerCube .videoCube .video-duration','.playerCube .videoCube .thumbBlock','.playerCube .video-rating','.playerCube .video-uploader','.playerCube .video-views','.playerCube .video-title','.playerCube div.videoCube:hover, div.videoCube_hover','.whatsThisSyndicated','div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover','div.syndicatedItem:hover .thumbBlock','.videoCube.syndicatedItem','.videoCube.syndicatedItem.horizontal','.videoCube.syndicatedItem .thumbBlock','.videoCube.syndicatedItem .thumbnail-overlay','.videoCube.syndicatedItem.vertical','.videoCube.syndicatedItem .video-duration','.videoCube.syndicatedItem .video-label-box','.syndicatedItem','.syndicatedItem .video-description','.syndicatedItem .video-title','.syndicatedItem .sponsored','.syndicatedItem .sponsored-url','.syndicatedItem .video-category','.syndicatedItem .video-duration-detail','.syndicatedItem .video-external-data','.syndicatedItem .video-published-date','.syndicatedItem .video-rating','.syndicatedItem .video-uploader','.syndicatedItem .video-views','.syndicatedItem .branding','.videoCube.syndicatedItem .thumbBlock .branding','.videoCube.syndicatedItem .thumbBlock .static-text','.videoCube.thumbnail_start .thumbBlock_holder','.trc_rbox_header_icon_img','.video-icon-img','.video-label-box.trc-pre-label','.syndicatedItem .video-label-box.trc-pre-label','.videoCube.thumbnail_start .trc-pre-label','.videoCube.thumbnail_start.trc-split-label .trc-main-label','.videoCube.thumbnail_start.trc-split-label .trc-pre-label','.videoCube .video-label-box.trc-pre-label','.branding','.branding .logoDiv a span','.branding div.logoDiv','.videoCube .thumbBlock .static-text','.tbl-cta-style .cta-button','.tbl-cta-style .cta-button:hover','.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background','.videoCube .story-widget.story-widget-text-under .tbl-ui-line','.tbl-recommendation-reel .tbl-text-under-branding-background','.tbl-recommendation-reel .tbl-text-under-title-background','.tbl-recommendation-reel .tbl-ui-line','.tbl-reco-reel-slider','.tbl-vignette-background-screen','.tbl-vignette-attribution','vignette','.tbl-vignette-close-btn-wrp','recommendationReel']}},"organic-thumbnails-b":{"header":"No Header","attribution-position":"none","widget-creator-revision":"13846062","__style__":{".video-title":"font-family:Arial, Helvetica, sans-serif;font-size:14.0px;line-height:19.0px;font-weight:bold;max-height:38.0px;*height:38.0px;color:#343434;text-decoration:none;",".trc_rbox_header":"font-family:AppleSDGothicNeo-Light, Helvetica;font-size:100%;font-weight:bold;text-decoration:none;color:#0a0a0a;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;line-height:1.2em;display:none;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",".videoCube":"width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",".videoCube.syndicatedItem .video-label-box":"margin-left:0px;",".syndicatedItem .video-title":"max-height:19.0px;*height:19.0px;color:#343434;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;font-size:14.0px;line-height:19.0px;font-weight:bold;text-decoration:none;padding:0;",".syndicatedItem .branding":"color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;background-image:null;text-align:left;line-height:19.0px;",".logoDiv a span":"font-size:11.0px;color:#000000;display:inline;font-weight:normal;",".videoCube:hover .video-label-box .video-title":"text-decoration:underline;",".videoCube .video-label-box .video-title":"margin:0 0 0 0;",".video-label-box .branding":"display:block;",".trc_header_left_column":"width:48%;_width:48%;display:inline-block;height:auto;",".trc_rbox_header .trc_header_ext":"position:relative;top:auto;right:auto;",".logoDiv a":"font-size:100%;",".videoCube a":"padding:0 0 0 0;",".trc_rbox_header .logoDiv":"line-height:normal;",".trc_rbox_header_span .trc_header_right_column":"height:auto;",".trc_header_right_part":"margin:0px 0 0 0;"}},"alternating-thumbnails-rr":{"widget-creator-revision":"13118130","responsive-rules":[{"minWidth":0,"margin":{"v":2,"h":2},"rows":4,"cells":1,"virtualThumbWidth":2,"virtualThumbHeight":1}],"__style__":{".video-title":"font-family:Arial, Helvetica, sans-serif;font-size:12.0px;line-height:16.0px;font-weight:bold;max-height:32.0px;*height:32.0px;color:#343434;text-decoration:none;","":"width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:5px 0px 5px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",".videoCube.syndicatedItem .video-label-box":"margin-left:0px;",".syndicatedItem .video-title":"max-height:16.0px;*height:16.0px;color:#343434;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;font-size:12.0px;line-height:16.0px;font-weight:bold;text-decoration:none;padding:0;",".syndicatedItem .branding":"color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;background-image:null;text-align:left;line-height:16.0px;",".logoDiv a span":"font-size:11.0px;color:#000000;display:inline;font-weight:normal;",".videoCube:hover .video-label-box .video-title":"text-decoration:underline;",".videoCube .video-label-box .video-title":"margin:0 0 0 0;",".video-label-box .branding":"display:block;",".trc_header_left_column":"width:48%;_width:48%;display:inline-block;height:auto;",".trc_rbox_header .trc_header_ext":"position:relative;top:auto;right:auto;",".logoDiv a":"font-size:100%;",".videoCube a":"padding:0 0 0 0;",".trc_rbox_header .logoDiv":"line-height:normal;",".trc_rbox_header_span .trc_header_right_column":"height:auto;",".trc_header_right_part":"margin:0px 0 0 0;"}},"alternating-thumbnails-b":{"responsive-rules":[{"minWidth":0,"margin":{"v":2,"h":2},"rows":2,"cells":2,"virtualThumbWidth":3,"virtualThumbHeight":2}],"__style__":{".video-title":"font-family:Arial, Helvetica, sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;max-height:88.0px;*height:88.0px;color:#444;text-decoration:none;",".video-label,.sponsored,.sponsored-url":"font-family:sans-serif;",".trc_rbox_header":"font-family:sans-serif;font-size:16.0px;font-weight:bold;text-decoration:none;color:#000;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",".videoCube":"width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 0px 0px 0px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",".videoCube.syndicatedItem .video-label-box":"margin-left:0px;",".syndicatedItem .video-title":"max-height:66.0px;*height:66.0px;color:#444;font-family:sans-serif;font-size:16.0px;line-height:22.0px;font-weight:bold;text-decoration:none;padding:0;",".syndicatedItem .branding":"color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:sans-serif;background-image:null;text-align:left;line-height:22.0px;",".logoDiv a span":"font-size:11.0px;color:#000000;display:inline;font-weight:normal;",".videoCube:hover .video-label-box .video-title":"text-decoration:underline;",".videoCube .video-label-box .video-title":"margin:0 0 0 0;",".video-label-box .branding":"display:block;",".trc_header_left_column":"width:48%;_width:48%;display:inline-block;height:auto;",".trc_rbox_header .trc_header_ext":"position:relative;top:auto;right:auto;",".logoDiv a":"font-size:100%;",".videoCube a":"padding:0 0 0 0;",".trc_rbox_header .logoDiv":"line-height:normal;",".trc_rbox_header_span .trc_header_right_column":"height:auto;",".trc_header_right_part":"margin:0px 0 0 0;"}},"alternating-thumbnails-a":{"header":"당신이 좋아할만한 콘텐츠","attribution-text":"by Taboola","widget-creator-revision":"12409028","disclosure-position":"top","__style__":{".trc_rbox_header":"font-family:AppleSDGothicNeo-Light, Helvetica;font-size:14.0px;font-weight:bold;text-decoration:none;color:#0a0a0a;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;line-height:1.2em;display:inline-block;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:100%;_width:100%;",".videoCube":"width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",".videoCube.syndicatedItem .video-label-box":"margin-left:0px;",".logoDiv a span":"font-size:11.0px;color:#000000;display:inline;font-weight:normal;",".videoCube:hover .video-label-box .video-title":"text-decoration:underline;",".videoCube .video-label-box .video-title":"margin:0 0 0 0;",".video-label-box .branding":"display:block;",".trc_header_left_column":"width:48%;_width:48%;display:inline-block;height:auto;",".trc_rbox_header .trc_header_ext":"position:relative;top:auto;right:auto;",".logoDiv a":"font-size:100%;",".videoCube a":"padding:0 0 0 0;",".trc_rbox_header .logoDiv":"line-height:normal;",".trc_rbox_header_span .trc_header_right_column":"height:auto;",".trc_header_right_part":"margin:0px 0 0 0;"}},"alternating-mobile-thumbnails-c":{"widget-creator-revision":"13899764","responsive-rules":[{"minWidth":0,"margin":{"v":2,"h":2},"rows":2,"cells":2,"virtualThumbWidth":3,"virtualThumbHeight":2}],"__style__":{"":"width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:5px 5px 5px 5px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;",".videoCube.syndicatedItem .video-label-box":"margin-left:0px;",".logoDiv a span":"font-size:11.0px;color:#000000;display:inline;font-weight:normal;",".videoCube:hover .video-label-box .video-title":"text-decoration:underline;",".videoCube .video-label-box .video-title":"margin:0 0 0 0;",".video-label-box .branding":"display:block;",".trc_header_left_column":"width:48%;_width:48%;display:inline-block;height:auto;",".trc_rbox_header .trc_header_ext":"position:relative;top:auto;right:auto;",".logoDiv a":"font-size:100%;",".videoCube a":"padding:0 0 0 0;",".trc_rbox_header .logoDiv":"line-height:normal;",".trc_rbox_header_span .trc_header_right_column":"height:auto;",".trc_header_right_part":"margin:0px 0 0 0;"}},"__common__":{"syndicated-attribution-tooltip":"","expand-animation-duration":1000,"loading-animation-url":"hide","pager-style-active-image":"","recommendationReel-is-min-adx":false,"vignette-openButtonFontFamily":"","player-detail-order":"title,description","slider-scroll-ref-element":function () { return window; },"slider-close-btn-color":"#FFF","slider-slide-from":"bottom","shade-scroll":false,"pager-button-inactive-image":"","has-thumbs-image-lazy-load":false,"visibility-constraints":{},"responsive-rules":[{"minWidth":0,"maxWidth":479,"margin":{"v":2,"h":2},"rows":4,"cells":1,"virtualThumbWidth":3,"virtualThumbHeight":2},{"minWidth":480,"margin":{"v":2,"h":2},"rows":1,"cells":4,"virtualThumbWidth":6,"virtualThumbHeight":5}],"format-description":'%s',"vignette-xButtonSize":"","format-x-days-ago":false,"gam-allow-trc-ads":false,"player-container-id":"trc_Embed_Container_Id","image-min-width":100,"organic-static-text-position":"bottom-left","before-detail-order":"","slider-close-btn-font-size":"30px","read-more-box-selector":"","widget-creator-layout":"autowidget-template-static","format-external-data":'%s',"recommendationReel-min-adx-line-color":"#2abfd5","player-thumbnail-height":"200","emblem-position":"top-left","header-right":"No Header","gif-url-prefix":null,"slider-close-btn-size":"24px","ctaWidget":true,"vignette-xButtonBackgroundColor":"","recommendationReel-interval":7,"vignette-openButtonText":"","storyWidget-storyWidget-story-num-title-lines":3,"branding-separator":"|","format-duration":'%s',"after-visible":function(data) {},"vignette-closeButtonBackgroundColor":"","enable-prioritized-layout":false,"rtb-image-url-prefix":null,"header-icon":"NONE","image-dpr-factor":2,"vignette-closeButtonFontColor":"","item-renderer":function(box,data) { if (typeof window.trc_itemRenderer == 'function') window.trc_itemRenderer(document.createElement('div'),data, false);},"read-more-minimized-size":800,"use-browser-line-clamp":true,"slider":false,"item-data-filter":function(data) {},"vignette-openButtonBackgroundColor":"","recommendationReel-splash-screen":false,"vignette-backgroundOpacity":0.8,"auto-advance":"-1","recommendationReel-wait-for-video-demand":false,"image-min-dimension":100,"auto-scroll":"none","recommendationReel-num-title-lines":3,"format-category":'%s',"auto-advance-animation":"down","format-syndicator":function(s){ return s; },"vignette-xButtonPosition":"","slider-transition-delay":200,"popup-custom-url":"","mode-start":function(data) {},"storyWidget":false,"recommendationReel-slider-below-only":false,"adchoice-position":"none","disclosure-link-text-sponsored":"Sponsored Links","mode-has-userx":true,"slider-background-color":"#666","image-size-round":20,"detail-order-ad":"title","style-template":"Light","thumbnail-width":"6","min-width-for-disclosure":225,"detail-order":"title","image-max-dimension":1500,"format-published-date":function(d){return this.dateFormatISO(d, false);},"mode-is-responsive":true,"expandable":false,"remove-url-playvideo-behavior":false,"expand-animation-max-height":1000,"responsive-extra-columns":1,"title":"Related Videos","published-date-position":"standalone","header-icon-url":"","thumbnail-position-ad":"inherit","format-title":'%s',"vignette-closeButtonFontSize":"","widget-creator-revision":"13824104","hide-attribution-when-no-place":false,"pager-type-style":"numbers","impl-class":"TRCRBox","vignette-closeButtonText":"","has-expand-animation":false,"disclosure-link-text-organic":"","recommendationReel-slider-start-from-slider":false,"syndicated-attribution":"","image-lazy-load-space":200,"sponsored-location":"top","recommendationReel-min-adx-cta-text":"","__keys__":['component-id','tabbed','header','expandable','list-size','orientation','navigation-type','auto-scroll','loading-animation-url','thumbnail-width','thumbnail-height','format','detail-order','icons','format-number','change-url','list-suffix','item-renderer','title','format-title','format-duration','format-description','format-category','format-uploader','format-views','format-rating','format-published-date','sponsored-location','thumbnail-position','color-scheme','pager-button-style','pager-position','pager-type-style','template','pager-button-location','pager-button-active-image','pager-button-inactive-image','pager-button-hover-image','pager-style-active-image','pager-style-inactive-image','pager-style-hover-image','lightbox-display-title','detail-order-ad','layout-template','style-template','attribution-position','shade-scroll','attribution-text','required-attributes','auto-advance-animation','auto-advance','format-external-data','item-data-filter','gam-allow-trc-ads','thumbnail-position-ad','impl-class','player-embed-code','player-container-id','render-player-info','player-thumbnail-width','player-thumbnail-height','player-detail-order','use-cdn-recommendations','syndicated-attribution','syndicated-attribution-tooltip','syndicated-attribution-position','detail-order-syndicated','format-syndicator','syndicated-static-text','syndicated-static-text-position','quantcast-label','cyclical-paging','after-visible','link-target','auto-syndicated-attribution','remove-url-playvideo-behavior','auto-size','auto-size-rules','rows','widget-creator-layout','widget-creator-revision','details-inline-with-title','mode-is-responsive','responsive-extra-columns','responsive-rules','image-lazy-load-space','has-image-lazy-load','use-css-important','image-url-prefix','image-size-factor','image-min-width','image-size-round','image-max-dimension','image-min-dimension','mode-has-userx','min-width-for-disclosure','min-width-for-attribution','hide-disclosure-when-no-place','hide-attribution-when-no-place','disclosure-link-text-sponsored','disclosure-link-text-hybrid','disclosure-link-text-organic','disclosure-position','header-right','use-browser-line-clamp','use-dpr-images','slider','slider-slide-from','slider-min-effective-scroll-size','slider-transition-duration','slider-transition-delay','slider-background-color','slider-close-btn-font-size','slider-close-btn-size','slider-close-btn-color','slider-scroll-ref-element','slider-z-index','mode-adc-config','images-radius','visibility-constraints','ios-sc-link-target-mode','has-expand-animation','expand-animation-duration','expand-animation-max-height','read-more-config','enable-read-more','mode-has-adchoice','adchoice-large','adchoice-position','adchoice-target-url','read-more-box-selector','read-more-threshold','read-more-minimized-size','read-more-caption','mode-start','smart-ellipsis','tokenize-strategy','rtb-image-url-prefix','image-dpr-factor','image-allowed-ratio-diff','popup-custom-url','carousel-min-items','header-icon-url','before-detail-order','title-icon-url','before-detail-order-syndicated','header-icon','title-icon','has-thumbs-image-lazy-load','thumbs-image-lazy-load-margins','read-more-cutoff-from-type','read-more-anchor-selector','read-more-cutoff-length-type','read-more-cutoff-length-from-anchor-element','read-more-mode-devices','branding-separator','disclosure-alignment','p-video-overlay','gif-url-prefix','storyWidget','storyWidget-story-interval','organic-static-text-position','organic-show-static-text','organic-static-text','widget-theme-type','storyWidget-story-num-title-lines','format-x-days-ago','storyWidget-storyWidget-story-interval','storyWidget-storyWidget-story-num-title-lines','published-date-position','enable-category-card','emblem-position','organic-tracking-params','ctaWidget','mode-enable-feed-view','storyWidget-recommendation-reel-enable-text-under-slide-in','recommendationReel-enable-text-under-slide-in','recommendationReel-num-title-lines','recommendationReel-interval','recommendationReel','enable-title-icon-on-sc','recommendationReel-slider-navigation-text','recommendationReel-slider-text-under-slide-in-only','recommendationReel-slider-below-only','recommendationReel-slider-position','recommendationReel-enable-slider','recommendationReel-slide-below-first-item-only','recommendationReel-slider-start-from-slider','enable-prioritized-layout','nextUpWidget-static-ui','vignette-xButtonPosition','vignette-xButtonShow','vignette-xButtonSize','vignette-backgroundColor','vignette-backgroundOpacity','vignette-xButtonBGColor','vignette-xButtonColor','vignette-screenBackgroundColor','vignette-screenBackgroundOpacity','vignette-xButtonBackgroundColor','vignette-closeButtonFontFamily','vignette-closeButtonText','vignette-closeButtonFontSize','vignette-openButtonText','vignette-openButtonBackgroundColor','vignette-closeButtonPadding','vignette-closeButtonFontColor','vignette-openButtonFontColor','vignette-buttonsTopSpacing','vignette-openButtonHoverColor','vignette-openButtonPadding','vignette-closeButtonHoverColor','vignette-openButtonFontSize','vignette-openButtonFontFamily','vignette-closeButtonBackgroundColor','recommendationReel-is-videoreel','recommendationReel-auto-pause','recommendationReel-is-min-adx','recommendationReel-min-adx-cta-text','recommendationReel-wait-for-video-demand','recommendationReel-splash-screen','recommendationReel-min-adx-progress-color','recommendationReel-min-adx-line-color','recommendationReel-slider-always-on'],"organic-static-text":"MOST POPULAR","icons":false,"thumbnail-position":"top","format-views":function(n){ return 'Views: '+this.formatNumber(n, false);},"read-more-mode-devices":"","storyWidget-story-num-title-lines":3,"vignette-buttonsTopSpacing":"","recommendationReel-slider-text-under-slide-in-only":true,"image-url-prefix":null,"read-more-cutoff-length-from-anchor-element":30,"syndicated-static-text":"","required-attributes":"none","change-url":function(url){return url;},"syndicated-static-text-position":"top-right","pager-button-location":"pager","nextUpWidget-static-ui":false,"recommendationReel-enable-text-under-slide-in":false,"recommendationReel-slide-below-first-item-only":false,"mode-adc-config":null,"details-inline-with-title":"","thumbnail-height":"5","vignette-xButtonColor":"","auto-size":false,"vignette-screenBackgroundColor":"","disclosure-alignment":"left","adchoice-large":false,"layout-template":"Horizontal 4","vignette-xButtonShow":true,"mode-enable-feed-view":false,"storyWidget-story-interval":7,"ios-sc-link-target-mode":null,"read-more-config":null,"thumbs-image-lazy-load-margins":"600px 1500px","recommendationReel-slider-navigation-text":"Read more","read-more-caption":"","template":"Default","pager-position":"start","format-uploader":'User: %s',"vignette-closeButtonFontFamily":"","disclosure-position":"none","image-size-factor":1.2,"title-icon":"NONE","lightbox-display-title":true,"has-image-lazy-load":false,"recommendationReel-slider-always-on":"false","navigation-type":"none","vignette-openButtonHoverColor":"","cyclical-paging":false,"tokenize-strategy":"word","adchoice-target-url":"","vignette-backgroundColor":"#fff","disclosure-link-text-hybrid":"Promoted Links","vignette-closeButtonPadding":"","recommendationReel-slider-position":"bottom","pager-button-active-image":"","player-thumbnail-width":"75","enable-category-card":false,"color-scheme":"White","slider-z-index":2500000,"slider-transition-duration":600,"use-css-important":true,"smart-ellipsis":false,"storyWidget-storyWidget-story-interval":7,"pager-button-hover-image":"","vignette-openButtonPadding":"","render-player-info":false,"recommendationReel-enable-slider":false,"mode-has-adchoice":true,"player-embed-code":function(){return '';},"image-allowed-ratio-diff":0.029,"use-cdn-recommendations":false,"list-size":10,"enable-read-more":false,"auto-size-rules":[{"minWc":120,"maxWc":349,"minWsRange":8,"maxWsRange":8,"n":1},{"minWc":350,"maxWc":499,"minWsRange":8,"maxWsRange":9,"n":2},{"minWc":500,"maxWc":749,"minWsRange":8,"maxWsRange":10,"n":3},{"minWc":750,"maxWc":999,"minWsRange":8,"maxWsRange":11,"n":4},{"minWc":1000,"maxWc":1249,"minWsRange":7,"maxWsRange":11,"n":5},{"minWc":1250,"maxWc":1499,"minWsRange":6,"maxWsRange":11,"n":6},{"minWc":1500,"maxWc":1749,"minWsRange":6,"maxWsRange":12,"n":7},{"minWc":1750,"maxWc":1920,"minWsRange":6,"maxWsRange":13,"n":8}],"carousel-min-items":1.33,"p-video-overlay":false,"attribution-text":"Taboola 후원링크","storyWidget-recommendation-reel-enable-text-under-slide-in":false,"format":{ 'views': 'Views: %s', 'uploader': 'By: %s','duration': 'Duration: %s','rating': 'Rating: %s'},"auto-syndicated-attribution":true,"pager-style-hover-image":"","syndicated-attribution-position":"bottom-right","attribution-position":"top","pager-style-inactive-image":"","min-width-for-attribution":325,"header":"MLB파크의 추천","read-more-cutoff-length-type":"BELOW","tabbed":false,"read-more-threshold":1100,"recommendationReel":false,"format-number":function(num){var out="",m;while(num.length>3&&(m=num.match(/\d{3}\s*$/))){out=m.toString().replace(/\s+/,"")+","+out;num=num.replace(/\d{3}\s*$/,"", false);}out=num+","+out;return out.replace(/,$/,"");},"vignette-openButtonFontSize":"","vignette-screenBackgroundOpacity":0.8,"images-radius":"0","recommendationReel-is-videoreel":false,"vignette-openButtonFontColor":"","organic-show-static-text":false,"hide-disclosure-when-no-place":false,"pager-button-style":"<span class=\"pager-cont\">&laquo;</span>|<span class=\"pager-cont\">&raquo;</span>","link-target":"normal","organic-tracking-params":null,"component-id":"rbox-blended","list-suffix":function(internalc, myorigin) {},"detail-order-syndicated":"title,branding","title-icon-url":"","read-more-cutoff-from-type":"ARTICLE","orientation":"horizontal","quantcast-label":"","recommendationReel-min-adx-progress-color":"#2abfd5","vignette-closeButtonHoverColor":"","vignette-xButtonBGColor":"#000","enable-title-icon-on-sc":false,"rows":2,"format-rating":'Rating: %s',"read-more-anchor-selector":"","before-detail-order-syndicated":"","slider-min-effective-scroll-size":20,"recommendationReel-auto-pause":false,"use-dpr-images":true,"widget-theme-type":"DEFAULT","__style__":{"":"width:300px;_width:300px;border-width:0px 0px 0px 0px;border-style:solid solid solid solid;border-color:#DFDFDF;padding:0px 0px 0px 0px;border-radius:0;-moz-border-radius:0;-webkit-border-radius:0;box-shadow:none;","vignette":"xButtonColor:#fff;backgroundColor:#fff;backgroundOpacity:0.8;xButtonBGColor:#000;",".playerCube .video-external-data":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".tbl-reco-reel-slider":"z-index:99999;margin:initial;top:50%;",".trc_lightbox_overlay":"background-color:#000000;opacity:0.70;filter:alpha(opacity=70);",".tbl-recommendation-reel .tbl-text-under-branding-background":"background-color:#EBEBEB;","div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover":"background-color:transparent;",".playerCube div.videoCube:hover, div.videoCube_hover":"background-color:transparent;",".trc_pager_prev:hover, .trc_pager_next:hover":"color:#6497ED;",".trc_rbox_border_elm":"border-color:darkgray;",".syndicatedItem .video-views":"color:black;font-size:10px;font-weight:normal;text-decoration:none;",".syndicatedItem .video-category":"color:black;font-size:10px;font-weight:normal;text-decoration:none;",".tbl-vignette-close-btn-wrp":"height:15;background:#000;",".videoCube .video-label-box":"margin-left:0;margin-right:0px;",".syndicatedItem .sponsored":"color:#9C9A9C;font-size:9px;font-weight:normal;text-decoration:none;",".pager_disabled":"color:#7d898f;",".playerCube .video-category":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".syndicatedItem .video-uploader":"color:black;font-size:10px;font-weight:normal;text-decoration:none;",".videoCube.thumbnail_start .thumbBlock_holder":"width:40%;_width:40%;",".playerCube .video-uploader":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".video-uploader":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".trc_sponsored_overlay":"background-color:black;",".syndicatedItem .video-external-data":"color:black;font-size:10px;font-weight:normal;text-decoration:none;",".trc_rbox_header":"font-family:AppleSDGothicNeo-Light, Helvetica;font-size:14.0px;font-weight:bold;text-decoration:none;color:#0a0a0a;border-width:0;background:transparent;border-style:none;border-color:#D6D5D3;padding:0 0 6px 0;line-height:1.2em;display:block;margin:0px 0px 0px 0px;position:relative;background-color:transparent;box-sizing:initial;height:auto;width:auto;_width:auto;",".syndicatedItem .video-rating":"color:black;font-size:10px;font-weight:normal;text-decoration:none;",".videoCube.vertical":"border-style:solid none none none;",".trc_pager_unselected":"color:#7d898f;",".video-rating":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".video-published-date":"font-size:10px;font-weight:normal;text-decoration:none;color:black;display:inherit;",".syndicatedItem":"background-color:transparent;",".syndicatedItem .video-duration-detail":"color:black;font-size:10px;font-weight:normal;text-decoration:none;",".playerCube .videoCube.horizontal":"border-style:none none none none;",".videoCube.syndicatedItem .thumbnail-overlay":"background-image:null;background-position:5% 5%;",".videoCube.syndicatedItem.vertical":"border-style:solid none none none;",".sponsored":"font-size:9px;font-weight:normal;text-decoration:none;color:#9C9A9C;",".videoCube.syndicatedItem .thumbBlock":"border-color:darkgray;border-width:0px;",".videoCube.syndicatedItem .thumbBlock .static-text":"text-align:left;background-color:black;display:none;color:white;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;",".videoCube.thumbnail_start.trc-split-label .trc-pre-label":"width:30%;_width:30%;",".video-category":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".thumbnail-emblem":"background-position:5% 5%;width:35;_width:35;height:35;",".tbl-vignette-background-screen":"background-color:#fff;opacity:0.8;filter:alpha(opacity=80);",".syndicatedItem .video-description":"max-height:2.2em;*height:2.2em;color:black;font-family:Arial, Helvetica, sans-serif;font-size:10px;font-weight:normal;line-height:11px;text-decoration:none;",".tbl-cta-style .cta-button:hover":"color:inherit;border-color:#999990;",".playerCube .video-published-date":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay":"background-image:null;",".video-label-box.trc-pre-label":"height:auto;",".video-label,.sponsored,.sponsored-url":"font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;",".videoCube.thumbnail_start .trc-pre-label":"width:60%;_width:60%;",".syndicatedItem .video-title":"max-height:48.0px;*height:48.0px;color:#343434;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;font-size:18.0px;line-height:24.0px;font-weight:bold;text-decoration:none;padding:0;",".playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay":"background-image:null;",".videoCube.thumbnail_start.trc-split-label .trc-main-label":"width:30%;_width:30%;",".videoCube":"width:auto;_width:auto;background-color:transparent;border-width:0px 0px 0px 0px;border-color:#E4E4E4;padding:0px 5px 0px 5px;height:auto;margin-left:0px;margin-top:0px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-style:SOLID;",".sponsored-default .video-description":"max-height:2.2em;*height:2.2em;",".tbl-vignette-attribution":"color:#6B6666;font-size:15px;",".playerCube .video-description":"font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;text-decoration:none;max-height:2.2em;*height:2.2em;color:black;",".playerCube .videoCube .video-label-box":"margin-left:81px;margin-right:0px;",".videoCube.syndicatedItem .thumbBlock .branding":"text-align:left;background-color:transparent;display:none;left:0px;color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;","div.videoCube:hover, div.videoCube_hover":"background-color:transparent;",".videoCube .story-widget.story-widget-text-under .tbl-ui-line":"background-color:#333333;",".videoCube .sponsored":"margin-top:-7px;",".trc_pager_pages div":"font-size:12px;font-weight:normal;text-decoration:none;",".sponsored-url":"font-size:9px;font-weight:bold;text-decoration:underline;color:green;",".playerCube .video-title":"font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:14px;line-height:17.5px;font-weight:bold;max-height:2.58em;*height:2.58em;color:black;",".trc_rbox_header_icon_img":"margin:0px;height:18px;",".tbl-recommendation-reel .tbl-text-under-title-background":"background-color:#EBEBEB;",".tbl-recommendation-reel .tbl-ui-line":"background-color:#333333;",".videoCube.syndicatedItem.horizontal":"border-style:none;",".videoCube .thumbBlock .static-text":"font-weight:normal;font-family:Arial, Helvetica, sans-serif;text-decoration:none;font-size:11px;background-color:#a30202;display:block;color:#ffffff;text-align:left;",".video-title":"font-family:Arial, Helvetica, sans-serif;font-size:18.0px;line-height:24.0px;font-weight:bold;max-height:72.0px;*height:72.0px;color:#343434;text-decoration:none;",".playerCube .video-rating":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".syndicatedItem .branding":"color:#999999;font-size:11.0px;font-weight:bold;text-decoration:none;font-family:'\\b3cb \\c6c0 ',Dotum,sans-serif,Arial;background-image:null;text-align:left;line-height:24.0px;",".trc_pager_selected":"color:#0056b3;",".videoCube.syndicatedItem":"background-color:transparent;border-color:#E4E4E4;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;border-width:0px 0px 0px 0px;border-style:SOLID;",".videoCube .video-label-box.trc-pre-label":"margin:0;",".branding div.logoDiv":"font-family:inherit;",".trc_rbox_div":"width:auto;_width:99%;height:410px;border-width:0;padding:0;",".playerCube .video-views":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".trc_pager div":"font-family:serif;",".syndicatedItem .video-label-box.trc-pre-label":"height:auto;","recommendationReel":"min-adx-line-color:#2abfd5;min-adx-progress-color:#FFF;",".videoCube.horizontal":"border-style:none;","div.trc_pager_pages div:hover":"color:#6497ED;",".pager_enabled":"color:#0056b3;",".playerCube .thumbnail-overlay":"background-image:null;background-position:5% 5%;",".videoCube .thumbnail-overlay":"background-image:null;background-position:5% 5%;",".playerCube .videoCube .video-duration":"display:block;left:36px;",".syndicatedItem .video-published-date":"color:black;font-size:10px;font-weight:normal;text-decoration:none;display:inherit;",".syndicatedItem .sponsored-url":"color:green;font-size:9px;font-weight:bold;text-decoration:underline;",".playerCube .videoCube .thumbBlock":"border-width:0px;border-color:darkgray;",".playerCube .video-label-box":"text-align:left;","div.sponsored-default:hover, div.sponsored-default.videoCube_hover":"background-color:inherit;",".videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background":"background-color:#EBEBEB;",".video-external-data":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".trc_pager_prev,.trc_pager_next":"font-size:12px;font-weight:normal;text-decoration:none;",".videoCube .thumbBlock":"border-width:0px;border-color:darkgray;",".videoCube.syndicatedItem .video-duration":"display:none;left:36px;",".sponsored-default .video-title":"max-height:2.58em;*height:2.58em;",".branding":"color:black;font-size:10px;font-weight:normal;text-decoration:none;font-family:Arial, Helvetica, sans-serif;background-image:null;text-align:left;",".sponsored-default":"background-color:#F7F6C6;","__keys__":['.video-title','.video-description','.trc_rbox_div','.videoCube .video-duration','.videoCube .video-label-box','.video-label,.sponsored,.sponsored-url','.trc_rbox_header','.sponsored-url','.sponsored','.video-category','.video-duration-detail','.video-rating','.video-uploader','.video-views','.video-published-date','.sponsored-default .video-title','.sponsored-default .video-description','.videoCube','div.videoCube:hover, div.videoCube_hover','.sponsored-default','div.sponsored-default:hover, div.sponsored-default.videoCube_hover','.videoCube .thumbnail-overlay','.videoCube:hover .thumbnail-overlay, .videoCube_hover .thumbnail-overlay','.trc_rbox_border_elm','.videoCube .thumbBlock','div.videoCube:hover .thumbBlock','.pager_enabled','.trc_pager_counter','.pager_disabled','.trc_pager_prev:hover, .trc_pager_next:hover','.trc_pager_selected','.trc_pager_unselected','div.trc_pager_pages div:hover','.trc_lightbox_overlay','.video-label-box','.trc_sponsored_overlay','.thumbnail-emblem','.videoCube .sponsored','','.videoCube.vertical','.videoCube.horizontal','.trc_pager_prev,.trc_pager_next','.trc_pager_pages div','.video-external-data','.trc_pager div','.playerCube .thumbnail-overlay','.playerCube:hover .thumbnail-overlay, .playerCube_hover .thumbnail-overlay','.playerCube .videoCube','.playerCube .videoCube.horizontal','.playerCube .videoCube .video-label-box','.playerCube .video-duration-detail','.playerCube .video-external-data','.playerCube .video-label-box','.playerCube .video-published-date','.playerCube .video-category','.playerCube .video-description','.playerCube .videoCube .video-duration','.playerCube .videoCube .thumbBlock','.playerCube .video-rating','.playerCube .video-uploader','.playerCube .video-views','.playerCube .video-title','.playerCube div.videoCube:hover, div.videoCube_hover','.whatsThisSyndicated','div.syndicatedItem:hover, div.syndicatedItem.videoCube_hover','div.syndicatedItem:hover .thumbBlock','.videoCube.syndicatedItem','.videoCube.syndicatedItem.horizontal','.videoCube.syndicatedItem .thumbBlock','.videoCube.syndicatedItem .thumbnail-overlay','.videoCube.syndicatedItem.vertical','.videoCube.syndicatedItem .video-duration','.videoCube.syndicatedItem .video-label-box','.syndicatedItem','.syndicatedItem .video-description','.syndicatedItem .video-title','.syndicatedItem .sponsored','.syndicatedItem .sponsored-url','.syndicatedItem .video-category','.syndicatedItem .video-duration-detail','.syndicatedItem .video-external-data','.syndicatedItem .video-published-date','.syndicatedItem .video-rating','.syndicatedItem .video-uploader','.syndicatedItem .video-views','.syndicatedItem .branding','.videoCube.syndicatedItem .thumbBlock .branding','.videoCube.syndicatedItem .thumbBlock .static-text','.videoCube.thumbnail_start .thumbBlock_holder','.trc_rbox_header_icon_img','.video-icon-img','.video-label-box.trc-pre-label','.syndicatedItem .video-label-box.trc-pre-label','.videoCube.thumbnail_start .trc-pre-label','.videoCube.thumbnail_start.trc-split-label .trc-main-label','.videoCube.thumbnail_start.trc-split-label .trc-pre-label','.videoCube .video-label-box.trc-pre-label','.branding','.branding .logoDiv a span','.branding div.logoDiv','.videoCube .thumbBlock .static-text','.logoDiv a span','.tbl-cta-style .cta-button','.tbl-cta-style .cta-button:hover','.videoCube:hover .video-label-box .video-title','.videoCube .video-label-box .video-title','.video-label-box .branding','.trc_header_left_column','.trc_rbox_header .trc_header_ext','.logoDiv a','.videoCube a','.trc_rbox_header .logoDiv','.trc_rbox_header_span .trc_header_right_column','.trc_header_right_part','.videoCube .story-widget.story-widget-text-under .tbl-text-under-title-background','.videoCube .story-widget.story-widget-text-under .tbl-ui-line','.tbl-recommendation-reel .tbl-text-under-branding-background','.tbl-recommendation-reel .tbl-text-under-title-background','.tbl-recommendation-reel .tbl-ui-line','.tbl-reco-reel-slider','.tbl-vignette-background-screen','.tbl-vignette-attribution','vignette','.tbl-vignette-close-btn-wrp','recommendationReel'],".playerCube .videoCube":"background-color:transparent;border-color:#D6D5D3;border-width:1px;border-radius:0px;-moz-border-radius:0px;-webkit-border-radius:0px;margin-left:0px;margin-top:0px;padding:3px;",".branding .logoDiv a span":"color:inherit;font-size:inherit;",".video-label-box":"text-align:left;",".video-description":"font-family:Arial, Helvetica, sans-serif;font-size:10px;line-height:11px;font-weight:normal;max-height:2.2em;*height:2.2em;color:black;text-decoration:none;",".videoCube .video-duration":"left:36px;display:none;","div.syndicatedItem:hover .thumbBlock":"border-color:inherit;",".trc_pager_counter":"color:#000000;",".whatsThisSyndicated":"font-family:Arial, Verdana, sans-serif;font-size:9px;font-weight:normal;color:black;text-decoration:none;padding:0;",".playerCube .video-duration-detail":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".video-duration-detail":"font-size:10px;font-weight:normal;text-decoration:none;color:black;","div.videoCube:hover .thumbBlock":"border-color:inherit;",".video-icon-img":"margin:0px;height:18px;",".video-views":"font-size:10px;font-weight:normal;text-decoration:none;color:black;",".tbl-cta-style .cta-button":"font-family:Helvetica, Arial, sans-serif;background-color:transparent;border-color:#999990;color:#333333;"}}},"language":"ko","testmode":false,"direction":"ltr","default-thumbnail":"http://cdn.taboola.com/libtrc/static/thumbnails/759bc49732394dde468c8d65a464e1a4.png","domains":"","sponsored-link-text":"Sponsored Link","sponsored-video-text":"Sponsored Video","branding-url":{},"configuration-version":"0","external-credentials":"","brightcove-list-id":"","publisher-start":function(){ },"get-user":function(){return null;},"get-creator":function(){var m=document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);for(var i=0;i<m.length;i++){if(m[i].name=='uploader'||m[i].name=='item-uploader')return m[i].content;}},"get-views":function() {var m=document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);for(var i=0;i<m.length;i++){if(m[i].name=='views'||m[i].name=='item-views')return m[i].content;}},"get-rating":function() {var m=document.getElementsByTagName('head')[0].getElementsByTagName('meta', false);for(var i=0;i<m.length;i++){if(m[i].name=='rating'||m[i].name=='item-rating'){ if(!isNaN(parseFloat(m[i].content))) return m[i].content;}}},"get-tags":function() {return [];},"logo-image":"http://cdn.taboolasyndication.com/taboola/powered-by.png","has_valid_rss":false,"actionscript_version":"3","brightcove-uses-reference":false,"publisher-end":function(id){ },"ie-logo-image":"http://cdn.taboolasyndication.com/taboola/powered-by-small.gif","attribution":true,"notify-loaded":true,"metafields":"","normalize-item-id":function(itemid,type,canon){if(!canon&&type=='text'&&typeof itemid=='string'&&itemid.search(new RegExp('^https?://'))==0)itemid=itemid.replace(/\?.*/,'', false);return itemid.toLowerCase();},"normalize-item-url":function(itemurl,type,canon){return itemurl;},"read-paused-bcplayer":false,"normalize-request-param":function(req, mode) {
    if(req.hasOwnProperty('u')){
        var parts=req.u.split('?'),
            spliter = parts[1] && parts[1].split('&');
        if(spliter) {     
            for(prop in spliter){
                if(spliter[prop].indexOf('id=')==0){
                    req.u=req.u.split('?')[0]+'?'+spliter[prop];
                }
            }
        }
    }
    if(req.hasOwnProperty('ii')){
	if(req.ii.indexOf('p=') > 0){
		var prefix = req.ii.split('p=')[0];
		var suffix = req.ii.split('p=')[1];
		if (suffix.indexOf('&') > -1){
		   suffix = suffix.split('&')[1]	
		}
		req.ii = prefix + suffix;
	}
    }   
    return req;
},"normalize-log-param":function(name,value,mode) {return value;},"timeout":8000,"prenormalize-item-id":{"host":true,"fragment":"^(/video/|!)","query":["p","id"],"truncate-at":["search.searchcompletion.com","org.mozilla.javascript.undefined"],"trailing-dirsep":true},"prenormalize-item-url":false,"loader-impl":"","trc-network-mapping":{},"trc-skip-failover":false,"backstage-domain-url":"","adc-config":null,"link-target-conf":{'NAV': '_blank', 'NT': '_blank', 'SP': '_blank'},"ios-sc-link-target":{'NAV': '_self', 'NT': '_self', 'SP': '_self'},"small-ios-device":"iPhone|iPod","read-more-debug":false,"read-more-devices":"smart_phone","attribution-disclosure-direction":"ltr","mode-pub-start":function(){ },"before-video-load":function(rbox) {
  /***** START - before-video-load *****/
  /* nick.i SF 00067046 */
  try {
    if (window.cmTag) {
      return false;
    }
    return true;
  } catch (e) {
    __trcError('Error in before-video-load ' + e.message);
  };
  /***** END - before-video-load *****/
},"publisher-logo":{},"detect-item-from-same-host":function(host, itemHost){},"mode-before-video-load":function(rbox){ return true; },"after-card-created":function(placementData, publisherCardNum, feed){ },"publisher-branding":{},"feed-view-devices":"smart_phone","feed-view-enable":false,"global":{"requests-domain":"trc0.taboola.com","enable-analytics":"true","config-analytics":{'logTimer': 50000, 'logLength' : 5, 'traffic' : 2, 'measureEnable' : true, 'measureTimeToSend' : 10000,'disableRawDataSend': true},"test_for_fraud_manual":false,"test_for_fraud":false,"enable-comscore-brazil-distributed-content":false,"enable-distance-from-article":"1","guarantee-card-clash-detection":"0","distance-violation-threshold":"3500","unintentional-clicks-fraud-enable":true,"purge:bake-configuration-type":"ALL","stop-channels-threshold":"0.8","syndication-embed-code":function (box, recommendation, affiliate) {},"syndicator-affiliate-id":"","explore-delay":500,"visible-delay":500,"css-isolation":false,"inject-comscore":false,"has-userx":true,"disclosure-enabled":true,"trc-request-delay":500,"publisher-onclick-nt-enabled":false,"touchstart-enabled":true,"use-storage-detection":true,"thumb-lazy-load-switch":false,"thumb-lazy-load-method":"PAGE_LOAD,PAGE_INTERACTIVE,RBOX_VISIBLE","inject-mdotlabs":false,"use-calibration-uim":false,"inject-taboolax":false,"use-delay-image-load":true,"abp-detection-enabled":true,"switch-abp-class":false,"use-abp-uim":true,"send-event-as-post":true,"image-url-prefix":"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_{h}%2Cw_{w}%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/","enable-social-events":true,"tmp-use-pb-params":true,"send-avail-as-post":true,"send-full-list":true,"enable-organic-redirect":true,"send-avail-as-get":false,"send-visible-as-get":false,"ios-sc-link-target":{"NAV": "_top", "NT": "_top", "SP": "_top"},"has-adchoice":true,"send-variant-warning":true,"enable-read-more":true,"enable-rbox-map":false,"enable-trc-cache":true,"trc-cache-it":{"text":"c","home":"d","video":"d","search":"d","category":"d","photo":"d","other":"d"},"enable-deferred-visible":true,"enable-manual-visible":true,"enable-events-api":true,"events-api-click-enabled":true,"enable-deferred-available":true,"send-pb-in-click":true,"force-reset-on-ready":true,"show-rtb-ad-choices-icon":true,"send-item-query-string-in-req":true,"send-user-id-tag":true,"user-id-tag-macros":["tags.bluekai.com/site/35702?id={taboolaID}"],"disable-yield":true,"smart-ellipsis":true,"rtb-image-url-prefix":"https://images.taboola.com/taboola/image/fetch/$pw_{w}%2C$ph_{h}/t_tbl-cnd/","enable-ie-split-click-event":true,"enable-multi-pv3":true,"cloudinary-aspect-ratios-list":[[1,4],[1,3],[1,2.5],[1,2],[1,1.9],[1,1.8],[9,16],[1,1.7],[1,1.6],[1,1.5],[1,1.4],[3,4],[1,1.3],[1,1.2],[1,1.1],[1,1],[1,0.9],[6,5],[1,0.8],[4,3],[1,0.7],[3,2],[1,0.6],[16,9],[2,1]],"store-userid-first-party-cookie":true,"enable-detect-bots":true,"allow-nofollow-for-exchange":true,"visibility-intersection-api-delay":1000,"rbox-ajax-post-events-full-rollout":true,"rbox-post-events-as-ajax":true,"prefer-response-session-data":true,"enable-visibility-intersection-api":true,"visibility-intersection-api-full-rollout":true,"has-mode-geometry":true,"feed-observer-load-next-batch":true,"rbox-enable-fix-user-id-event":"true","use-native-json-stringify":true,"max-wait-for-cmp":5000,"disable-unified-iframe-pixel-reporter":true,"consent-presets":{taboola_default:null},"p-video-overlay-send-events":true,"monitor-dup-items-traffic-pct":5,"rbox-old-chrome-es6-fix":(function(){})(),"exclude-subd-shift":["15.taboola.com", "trc.taboola.com", "authentication.taboola.com"],"send-next-up-click-abtest-event":false,"enable-organic-redirect-on-amp":true,"enable-trc-route":true,"amp_target":"_top","disable-rbox-usage-logging":false,"cdn-taboola-path":"cdn.taboola.com","ui-innovation-modules-path":"ui-ab-tests","disable-scope-feed-css":false,"enable-experiments-variant-id-event":true,"enable-loader-type-event":true,"user-stop-retarget-campaign-after-click":"false","rbox-trc-protocol":"https:","enable-explore-more":true,"enable-item-override":true,"cloudinary-encoding-and-100-round-factor":{},"event-logger:publisher-enable-spatial-events":true,"spatial-slots-throttle-th":1000,"feed-max-num-of-consecutive-failed-requests":"5","enable-bulk-events":"true","bulk-available-events-strategy":"delay","enable-spatial-data-per-page":1,"enable-consent":true,"read-more-events-enabled":"0.1","GPT-refresh-control":true,"has-page-geometry":true,"has-page-geometry-extended":true,"has-slots-geometry":true,"has-slots-saliency":true,"bulk-available-events-delay":1000,"disable-iframe-for-tracking-pixel":true,"use-dpr-images":true,"disable-explore-more-video-reset":true,"enable-explore-more-video":true,"enable-exm-inside-iframe":false,"enable-explore-more-state-check":true,"default-event-route":"trc-events.taboola.com","trc-event-route-template":"<dc>-trc-events.taboola.com","enable-real-time-user-sync":true,"disable-sponsored-for-links":false,"enable-mode-injection":true,"mw-display-none-on-no-items-to-render":true,"enable-text-over":"true","cloudinary-encode":true,"rbox-error-stack-reporting-pct":0.01,"thumbnail-transformation-per-item-is-enabled":"1","image-optimization-url-per-item-is-enabled":"1","keep-referrer-in-session":true,"amp-support-consent-string":"true","video-gdpr-applies-use-requires-consent":"true","event-types-to-route":["debug","perf","metrics","bulk-metrics","abtests","supply-feature"],"enable-loader-cache-buster":true,"bulk-body-debug-sample-rate":1.0E-4,"enable-custom-injection":true,"block-video-prob":0.1,"enable-video-ajax":true,"cds:send-uad":true,"cds:send-dnid":true,"enable-real-time-user-sync-with-consent":true,"enable-bid-detection":0,"defer-cookie-sync":2000,"defer-userx-render":1000,"defer-scripts-render":500,"advanced-feed-view-telemetry-enabled":"0.01","lazy-render-enbale":true,"enable-new-ellipsis-module":1,"lazy-render":{enable: true, raKill: true},"lazy-render-enable":true,"flc-enabled":true,"tm-dynamic-load":"true","explore-more-google-timer":10,"new-logging-mechanism-on":0.1,"thumbs-image-lazy-load-margins":"2500px 1500px 2500px 1500px","enable-call-to-action-creative-component":false,"rbox:collect-eid-from-page":false,"default-stories-height":135,"read-more-scroll-fast-enabled":true,"pass-browser-url":true,"user-mapping-enabled":true,"video-split-start-unit":true,"enable-cta-component":true,"trcinfo-sample-rate":0.05,"view-tag-delay":10000,"bulk-metrics-events-strategy":"delay","rbox-metrics-enabled":0.1,"view-tags-domains-url":{'adsafeprotected.com': 1, 'cdn.doubleverify.com': 1},"read-more-click-delay":true,"cta-abtest-report-percent":-1,"cta-usage-report-percent":0.02,"cta-render-report-percent":0.05,"explore-more-enable-position-correction":true,"view-lazy-load-tags":{'z.moatads.com':1, 'cdn.doubleverify.com':1, 'adsafeprotected.com':1, 'googlesyndication.com':1},"view-lazy-load-tags-margin":20,"header-bidding-enabled":0.01,"enable-ios-back-fix":true,"item-override-encode-fields":true,"cta-metric-report-percent":0.1,"motion-ads-track-events":0.001,"html-card-max-width":"800px","motion-ads-load-old-version":0,"use-unit-fetcher-response-instead-of-tb":true,"send-rv-avail-as-post":true,"send-rv-avail-as-get":false,"enable-rv-available":true,"encode-irregular-og:url":true,"explore-more-enable-hide-all-but-header":true,"html-track-events":0.1,"high-entropy-values-arguments":["platformVersion","mobile","model","platform","uaFullVersion"],"vignette-lazy-load":true,"enable-hai-report":true,"load-user-agent-data":true,"get-vignette-config-from-products":true,"display-ad-to-native":true,"rbox-error-fullUrl":0.01,"remove-old-vignette-disclosure":true,"spa-detection-enabled":0.01,"send-id-providers-data":true,"send-alternate-container-width":true,"enable-slice-url":"0","unintentional-clicks-default-send-init-event":true,"enable-ampsplitfeedfix":true,"app-install-sanity-report-fraction":0.1,"vignette-capture-page-click":true,"vignette-new-scanning-logic":true,"unintentional-clicks-ignore-demand-enablement":false,"enable-rbox-es-events":0.003,"display-rv-visible-timeout":0,"enable-item-measurements":true,"enable-only-full-visible-event":"1","eid:rbox:common-eid-keywords":"help,support,contact,readme,test,info,reply,careers,spam,login,subscribe,feedback,reachus,customers,cookie,members","enable-real-time-user-sync-for-all-browsers":true,"cloudinary-isi-ratios":true,"enable-isi-card":true,"test_for_fraud_from_tag_loader":true,"isi-metric-report":1,"app-install-report":0.1,"shift-redir-onclick":true,"motion-ads-retry-play-timeout":2000,"external-visibility-by-items":true,"trc:blockers:WebComponentRBlockerQuery:blocker-web-component-passed-logger-for-creative-type:APP_INSTALL":"true","trc:blockers:WebComponentRBlockerQuery:blocker-web-component-passed-logger-for-creative-type:ISI_CARD":"true","adjust-banner-height":true,"explore-more-supply-feature-percent":true,"unintentional-clicks-default-enable":true,"unintentional-clicks-default-uicm":0,"uninc6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [26] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.26.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.26.woff) format('woff');
	unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [27] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.27.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.27.woff) format('woff');
	unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [28] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.28.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.28.woff) format('woff');
	unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [29] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.29.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.29.woff) format('woff');
	unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [30] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.30.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.30.woff) format('woff');
	unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [31] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.31.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.31.woff) format('woff');
	unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [32] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.32.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.32.woff) format('woff');
	unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [33] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.33.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.33.woff) format('woff');
	unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [34] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.34.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.34.woff) format('woff');
	unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [35] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.35.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.35.woff) format('woff');
	unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [36] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.36.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.36.woff) format('woff');
	unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [37] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.37.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.37.woff) format('woff');
	unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [38] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.38.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.38.woff) format('woff');
	unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [39] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.39.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.39.woff) format('woff');
	unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [40] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-ExtraLight.subset.40.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-ExtraLight.subset.40.woff) format('woff');
	unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [41] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 200;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynami{var e=parseInt(window.navigator.userAgent.replace(/(?:.*chrome\/)(\d+)\.*(?:.*)/gim,"$1",10));e&&!isNaN(e)&&e<49&&(eS6SupportCheckResult=!1)}function checkES6SupportByFeatures(){eS6SupportCheckResult=!0;try{eval("var foo = (x)=>x+1")}catch(e){eS6SupportCheckResult=!1}}},TRC.styleInjected=!1;var protocol=TRC.PROTOCOL,trc=null,globalMessages=[],originalErrorHandler=win.onerror,implElm=null,requests=[],notificationsFirst=[],requestDispatchTimeout=null,notifications=[],socials=[],p13ns=[],abtests=[],debugs=[],apiListeners=[],manualVisibles=[],globalParams={publisher:TRC.publisherId='dongacom-mlbpark'},flush=!1,queue=null,PAGE_TYPES={video:"video",article:"article",category:"category",home:"home",search:"search",photo:"photo",video_source:"video",other:"other",content_hub:"content_hub"},TBX_PAGE_TYPE_VAR="pm_pgtp",taboolaXHosts={prod:"//pm-widget.taboola.com",sb:"//pm-widget-sandbox.taboola.com"},taboolaXHost=taboolaXHosts["prod"],isTBXInit=!1,loaderHostName=null,loaderDomain,eS6SupportCheckResult;function setConfig(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}function initDynamicModules(){try{/*! 20240122-4-RELEASE */

!function(){var e=[],r=function e(){if(!TRC.dupCheckerApi.config)return null;var r="hp4u-configuration-".concat(TRC.publisherId);return TRC.dupCheckerApi.config[r]},n=function e(r){var n,t,i={data:{type:"ERROR",reason:"dupRate",itemId:r.map(function(e){return e.id}).join()},type:"fallback"};TRCImpl.sendEvent("pubs-generic",{d:JSON.stringify(i)},{})},t=function e(){return window.__tb_UrlsFromRes.reduce(function(e,r){return window.__tb_publisherItemSelectors.indexOf(r.url)>-1&&e.push(r),e},[])},i=function e(){var r=t();r.length>0&&n(r)};function c(e){return e.map(function(e){var r;return{url:TRCImpl.urlPreNormalizer("item-id",e.url),id:e.id}})}var o=function e(r){if(r&&r.length&&r.length>0){var n=c(r);n&&(window.__tb_UrlsFromRes||(window.__tb_UrlsFromRes=[]),n.forEach(function(e){var r;window.__tb_UrlsFromRes.some(function(r){return r.url===e.url})||window.__tb_UrlsFromRes.push(e)}))}},u=function e(r,n){var t=[];return r.trc&&r.trc.vl&&r.trc.vl.forEach(function(e){var r=-1!==n.indexOf(e.uip)||-1!==n.indexOf(e.hpl);e.v&&r&&e.v.forEach(function(e){e.url&&e["item-id"]&&t.push({url:e.url,id:e["item-id"]})})}),t},l=function e(r){var n={},t=[],i=TRC.dupCheckerApi.dupCheckerConfig.articleParam;return r.forEach(function(e){var r=TRC.DynamicModulesManager.parseArticleUrl(e.href,i),c;if(!Object.prototype.hasOwnProperty.call(n,r)){var o=r||e.href||e;n[o]="",t.push(e)}}),t},a=function e(r){var n=r.filter(function(e){return!(!e||!e.href)}).map(function(e){return TRCImpl.urlPreNormalizer("item-id",e.href)});window.__tb_publisherItemSelectors=l(n)},p=function e(r,n){var t=l(r);return n&&n.length&&(t=t.filter(function(e,r){return-1!==n.indexOf(r)})),t},s=function e(r,n){var t=r&&r.template&&n[r.template],i,c;return{region:f(r,t,"r"),link:f(r,t,"l")}},d=function e(r){return r.split(",")[0]},f=function e(r,n,t){var i={r:"[data-tb-region-item]",l:"[data-tb-link]"};return r&&r[t]?d(r[t]):n&&n[t]?d(n[t]):i[t]},h=function e(r){var n=[],t=r.regions,i=r.templates;return t&&t.filter(function(e){return e.ex}).forEach(function(e){var r=e.r,t=e.ex,c=e.i&&e.i[0],o=s(c,i),u="".concat(r," ").concat(o.region," ").concat(o.link,", ").concat(r," ").concat(o.region).concat(o.link),l=document.querySelectorAll(u),a=Array.prototype.slice.call(l),d=p(a,t);n=n.concat(d)}),n},C=function e(){var r=["h"];return!(r&&r.length&&-1===r.indexOf(TRC.listOrigin.getSource()))},m=function e(r){if(!C())return!1;var n=r.allowed_urls||[],t=window.location.hostname+window.location.pathname;return!(n.length&&-1===n.indexOf(t))};function R(r){r.regions&&r.regions.forEach(function(r){e.push(r.p)})}function k(){if(!C())return!1;TRC.dupCheckerApi.initEventSent||(TRCImpl.sendAbTestEvent&&TRCImpl.sendAbTestEvent("hp4u-dupChecker","module initialized",null,!0),TRC.dupCheckerApi.initEventSent=!0)}var v=function r(n){try{if(!TRC.dupCheckerApi.dupCheckerConfig||!n)return;var t;if(k(),m(TRC.dupCheckerApi.dupCheckerConfig)){var c=u(n.res,e);if(0===c.length)return;o(c);var l=h(TRC.dupCheckerApi.dupCheckerConfig);l.length>0&&(a(l),window.__tb_UrlsFromRes&&window.__tb_UrlsFromRes.length>0&&window.__tb_publisherItemSelectors&&window.__tb_publisherItemSelectors.length>0&&i())}}catch(e){__trcError("Error in dup checker handleDupChecker: ".concat(e.message))}};function _(){if(!TRC.dupCheckerApi.dupCheckerConfig){var e=r();e&&(TRC.dupCheckerApi.dupCheckerConfig=e,R(e))}}var g=function e(){TRC.dupCheckerApi.moduleInitialized||(_(),TRC.listen("trcResponseHandled",v),TRC.dupCheckerApi.moduleInitialized=!0)},T=function e(r){try{TRC.dupCheckerApi.config=r,window.TRCImpl?g():TRC.EventsAPI.listen("trcImplAvailable",function(){return g()})}catch(e){__trcError("Error in dup checker module initialization: ".concat(e.message))}};TRC.dupCheckerApi={initDupChecker:T},window._trcIsUTactive&&(TRC.dupCheckerApi.unitTestHelper={getPublisherSelectors:h,getResponseUrls:u,setResponseUrls:o,checkDupRates:t,setUrlsToCheckDups:a,canDupCheckerRun:m})}(),TRC.DynamicModulesHooks=TRC.DynamicModulesHooks||[],TRC.DynamicModulesHooks.push({type:"publisher-start",callback:TRC.dupCheckerApi.initDupChecker});}catch(e){}
try{/*! 20240122-4-RELEASE */

function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(r,e):void 0}}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}!function(){var r=function r(n,t){var o=n&&n.template&&t[n.template],a,l;return{region:e(n,o,"r"),link:e(n,o,"l")}},e=function r(e,t,o){var a={r:"[data-tb-region-item]",l:"[data-tb-link]"};return e&&e[o]?n(e[o]):t&&t[o]?n(t[o]):a[o]},n=function r(e){return e.split(",")[0]},t=function e(){var n="hp-dynamic-modules-exclude-urls-config-".concat(TRC.publisherId);if(n&&TRCImpl.global&&TRCImpl.global[n])return TRC.util.merge({},TRCImpl.global[n],{version:1});if((n="hp4u-configuration-".concat(TRC.publisherId))&&TRCImpl.global&&TRCImpl.global[n]){var t=TRCImpl.global[n],o=t.allowedUrls,a=t.ex_preload_key,l=t.regions,i=t.templates,c=t.articleParam,u=[];return l&&(u=l.filter(function(r){return r.ex}).reduce(function(e,n){var t=n.r,o=n.ex,a=n.i&&n.i[0],l=r(a,i),c="".concat(t," ").concat(l.region," ").concat(l.link,",").concat(t," ").concat(l.region).concat(l.link);return[].concat(_toConsumableArray(e),[{includedIndexes:o,container:c}])},[])),{allowedUrls:o,preLoadKey:a,selectors:u,articleParam:c}}},o=function r(e){e.runOnce&&(TRC.hasExcludeRanOnce=!0)},a=function r(e){var n=TRCImpl.global["rbox-item-exclusion-cap-HP"]||30;e&&e.splice(n)},l=function r(e,n){var t;return e.map(function(r){return TRC.DynamicModulesManager.parseArticleUrl(r,n)}).filter(function(r,e,n){return n.indexOf(r)===e})},i=function r(e,n){var t=[];return n.filter(function(r){return r[e]}).map(function(r){return r[e]}).forEach(function(r){t=t.concat(r)}),(t=l(t)).length>0&&a(t),t},c=function r(e){var n=[],t=e.selectors,o=e.version,i=e.articleParam;return t.forEach(function(r){var e=r.excludedIndexes,t=r.includedIndexes,a=r.container,c,u=Array.prototype.slice.call(document.querySelectorAll(a)).reduce(function(r,e){return e&&e.href?[].concat(_toConsumableArray(r),[e.href]):r},[]),s=l(u,i);1===o?e&&(s=s.filter(function(r,n){return-1===e.indexOf(n)})):s=t?s.filter(function(r,e){return t.indexOf(e)>-1}):[],n=[].concat(_toConsumableArray(n),_toConsumableArray(s))}),n=l(n,i),a(n),n},u=function r(){var e=["h"];return!(e&&e.length&&-1===e.indexOf(TRC.listOrigin.getSource()))},s=function r(e){if(!e)return!0;if(0===e.length)return!0;var n=window.location.hostname+window.location.pathname;return-1!==e.indexOf(n)},d=function r(){if(!u())return!1;TRC.excludeUrlsApi.initEventSent||(TRCImpl.sendAbTestEvent&&TRCImpl.sendAbTestEvent("hp4u-excludeUrl","module initialized",null,!0),TRC.excludeUrlsApi.initEventSent=!0)},f=function r(e){var n=t(),a,l;(TRC.listen("trcResponseHandled",d),n)&&(s(n.allowedUrls)&&((l=n.preLoadKey?i(n.preLoadKey,TRC._taboolaClone):c(n)).length>0&&(e.ex=l),o(n)));return e},p=function r(e){try{return TRC.hasExcludeRanOnce?e:f(e)}catch(r){return __trcError("Error in exclude URLs dynamic module ".concat(r.message)),null}};TRC.excludeUrlsApi={initExcludeUrls:p,handleExcludeUrls:f}}(),TRC.DynamicModulesHooks=TRC.DynamicModulesHooks||[],TRC.DynamicModulesHooks.push({type:"normalize-request-param",callback:TRC.excludeUrlsApi.initExcludeUrls});}catch(e){}
try{/*! 20240122-4-RELEASE */

function _typeof(e){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _iterableToArrayLimit(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){i=!0,s=e}finally{try{r||null==n["return"]||n["return"]()}finally{if(i)throw s}}return a}}function _arrayWithHoles(e){if(Array.isArray(e))return e}!function(){function e(e){e?setTimeout(function(e){var t=e[TRC.HPSwap.Config.Fields.region],n=document.querySelector(t),a;n&&Array.prototype.slice.call(n.querySelectorAll(".tbl_blur")).forEach(function(e){e.classList.remove("tbl_blur")})},0,e):TRC.HPSwap.Blur.blurActive&&(TRC.HPSwap.Blur.timeoutID&&clearTimeout(TRC.HPSwap.Blur.timeoutID),TRC.HPSwap.Blur.blurActive=!1,setTimeout(function(){var e;Array.prototype.slice.call(document.querySelectorAll(".tbl_blur")).forEach(function(e){e.classList.remove("tbl_blur")})},0))}function t(){var e=this;this.isBlurredAllowed()&&(this.settings=TRC.HPSwap.swapConfig.blur,setTimeout(function(){e.createBlurStyle(),e.applyBlur(),e.setTimer()},0))}function n(){var e=TRC.HPSwap.swapConfig.blur;return!!e&&(!(e.debug&&!TRC.HPSwap.Utils.isBlurDebugMode())&&0===TRC.blocker.getBlockedState())}function a(){var e=document.createElement("style");e.id="tblBlur";var t=this.settings.size||"10px",n=this.settings.opacity||"0.2";e.textContent=".tbl_blur {filter: blur(".concat(t,");-webkit-filter:blur(").concat(t,");opacity:").concat(n,";}"),document.getElementsByTagName("head")[0].appendChild(e)}function r(){var e=[],t=TRC.HPSwap.swapConfig.regions,n=TRC.HPSwap.Config,a=n.Fields,r=n.DefaultMapping;t.forEach(function(t){var n=t[a.region],i=t[a.blur];if(i){var o=[],s;if((t[a.item]||[r]).forEach(function(e){var t="".concat(n," ").concat(e[a.region]?e[a.region]:r[a.region]);o=o.concat(Array.prototype.slice.call(document.querySelectorAll(t)))}),i&&t[a.partial]){var l=t[a.partial],c=o.filter(function(e,t){return l.indexOf(t)>-1});e=e.concat(c)}else e=e.concat(o)}}),e.forEach(function(e){e.classList.add("tbl_blur")}),TRC.HPSwap.Blur.blurActive=!0}function i(){var t=parseInt(this.settings.timeout,10)||4;TRC.HPSwap.Blur.timeoutID=setTimeout(function(){var t;if(TRC.HPSwap.Blur.timedOut=!0,document.querySelectorAll(".tbl_blur").length>0){e();var n="timed out before items were swapped";TRC.HPSwap.Events.sendError(null,TRC.HPSwap.Config.ErrorType.blurTimeoutBeforeSwap,n),TRC.HPSwap.Events.writeConsole(n)}},1e3*t)}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.Blur=TRC.HPSwap.Blur||{removeBlur:e,initBlur:t,isBlurredAllowed:n,createBlurStyle:a,applyBlur:r,setTimer:i,blurActive:!1,timeoutID:void 0}}(),function(){var e=function e(t){var n=TRC.HPSwap.Utils,a="img",r=TRC.HPSwap.swapConfig.ex_image_selector;r&&(a+="".concat(r));var i=n.queryItems(t,a),o=n.queryItems(t,"picture"),s=i.filter(function(e){return"svg"!==e.src.split(".")[1]&&!e.closest("picture")});return 0===s.length?0:s.length+o.length},t=function e(t,n,a){var r=TRC.HPSwap,i=r.Events,o,s=r.Config.ErrorType;return n.isDomValid=!1,n.message=t,a===s.missingImageMapping?i.sendWarning(n.recommendation.placement,a,t):i.sendError(n.recommendation.placement,a,t),n},n=function n(a){var r=a.recommendation,i=TRC.HPSwap,o=i.Utils,s=i.Config,l=s.Fields,c=s.ElementType,p=s.ErrorType,u,d=h(l.image,a).itemElements,m=r.thumbnail,g=e(a.elem);if(0===d.length)return 0===g?a:t("Found images but no mapping was set on slot: ".concat(a.index),a,p.missingImageMapping);if(g>1)return t("Found two images for swapping which is not supported",a,p.multipleImages);if(!m)return t("Missing image in recommendation",a,p.cardFailure);var f=d[0],w;return o.validateDomElement(c.Image,f)?(a.imgElem=f,a.thumbnail=m,a):t("Found image mapping but it was mapped to incorrect image element",a,p.incorrectImageMapping)},a=function e(t){var n=TRC.HPSwap.Config.Fields;return i(t,{fieldType:n.title,trcField:"title",isMandatory:!0})},r=function e(t){var n=TRC.HPSwap.Config.Fields;return i(t,{fieldType:n.description,trcField:"description",isMandatory:!1})},i=function e(t,n){var a=t.message,r=t.isDomValid,i=t.recommendation,o=t.arrActions,s=n.fieldType,l=n.trcField,c=n.isMandatory,p=TRC.HPSwap.Utils,u,d=T(s,t).itemElement;return d&&i[l]?o.push(function(e,t){R(e,t),p.markAsSwapped(e)}.bind(null,d,i[l])):c&&(a+="Missing ".concat(l,d?" in recommendation,":" element,"),r=!1),TRC.util.merge({},t,{message:a,isDomValid:r,arrActions:o})},o=function e(t){var n=t.message,a=t.isDomValid,r=t.recommendation,i=t.rboxObj,o=t.regionMap,s=t.arrActions,l=TRC.HPSwap.Config,c=l.Fields,p=l.ElementType,u=TRC.HPSwap.Utils,d,m=h(c.link,t).itemElements;return m&&m.length>0?m.forEach(function(e){var t;e&&u.validateDomElement(p.Anchor,e)&&s.push(function(e,t,n,a){TRC.HPSwap.Events.addClickEvent(e,t,n,a),u.setAttributeIfExists(e,"title",t.title),u.markAsSwapped(e)}.bind(null,e,r,i,o))}):(n+="Missing link elements,",a=!1),TRC.util.merge({},t,{message:n,isDomValid:a,arrActions:s})},s=function e(t){var n=TRC.HPSwap.Config.Fields;return i(t,{fieldType:n.author,trcField:"author",isMandatory:!1})},l=function e(t){var n=t.recommendation,a=t.slotsTemplateOverrideTags,r=t.arrActions,i=TRC.HPSwap.Config.Fields,o=TRC.HPSwap.Utils,s=o.getRegionItemMapping(a,i.category),l,c=T(i.category,t).itemElement;if(c)if(n.category){var p=n.category.split("//");if(p.length>0&&r.push(function(e,t){R(e,t[t.length-1]),o.markAsSwapped(e)}.bind(null,c,p)),1===c.nodeType&&"A"===c.nodeName){var u="".concat(window.location.origin,"/").concat(n.category,"#tbla-swap");r.push(function(e,t){e.setAttribute("href",t),o.markAsSwapped(e)}.bind(null,c,u))}}else{var d=i.category,m=i.defaultValue,g=TRC.HPSwap.swapConfig[d];if(g&&g[m]||s[m]){var f;f=s[m]?a[d][m]:g[m];var w=o.getDefaultValue(n,f);w&&r.push(function(e,t){R(e,t),o.markAsSwapped(e)}.bind(null,c,w))}else r.push(function(e){e.setAttribute("style","display: none !important;")}.bind(null,c))}return TRC.util.merge({},t,{arrActions:r})},c=function e(t){var n=t.message,a=t.isDomValid,r=t.recommendation,i=t.arrOptional,o=t.arrActions,s=TRC.HPSwap.Config,l=s.Fields,c=s.Hooks,p=s.ErrorType,u=TRC.HPSwap,d=u.Utils,m=u.Events,g=u.DateFormat,f=T(l.date,t),w=f.useDefaultMapping,S=f.itemElement;return S&&(r["published-date"]||r["last-modified"])?o.push(function(e,t){var a;m.executeSwapHook(c.dateScript,!0,e,t)||setTimeout(function(){if(TRC.HPSwap.swapConfig.date_config)try{var a=g.formatDate(t["published-date"],TRC.HPSwap.swapConfig.date_config,t["last-modified"]);R(e,a)}catch(e){m.sendError(t.placement,p.cardFailure,"failed to display date format: ".concat(n))}else{var r=d.dateFormatISO(t,e);R(e,r)}},0),d.markAsSwapped(e)}.bind(null,S,r)):(n+=S?"Missing date in recommendation,":"Missing date elements,",a=i&&i.indexOf(l.date)>-1||w),TRC.util.merge({},t,{message:n,isDomValid:a,arrActions:o})},p=function e(t){var n=t.slotsTemplateOverrideTags,a=t.elem,r=t.arrActions,i=n[TRC.HPSwap.Config.Fields.hideElement],o;i&&TRC.HPSwap.Utils.queryItems(a,i).forEach(function(e){r.push(function(e){e.setAttribute("style","display: none !important;")}.bind(null,e))});return TRC.util.merge({},t,{arrActions:r})},u=function e(t){var n=t.arrActions,a=t.nonDefaultAttrSelectors,r=t.recommendation;return Object.keys(a).forEach(function(e){var t=e.replace(/^data-tb-/,""),i=a[e],o=r[t];o&&n.push(function(e){R(e,o),TRC.HPSwap.Utils.markAsSwapped(e)}.bind(null,i,o))}),TRC.util.merge({},t,{arrActions:n})},d=function e(t){var n=t.elem,a=t.recommendation,r=t.arrActions,i=TRC.HPSwap.Config.ErrorType,o=TRC.HPSwap,s=o.Events,l=o.IconsFormat,c=TRC.HPSwap.swapConfig.icons_config;return c&&r.push(function(e,t){setTimeout(function(){try{l.formatIcons(n,t,c)}catch(e){s.sendError(t.placement,i.cardFailure,"failed to manipulate icons in this card: ".concat(e.message))}},0)}.bind(null,n,a)),TRC.util.merge({},t,{arrActions:r})},m=function e(t){var n=t.elem,a=t.recommendation,r=t.arrActions,i=TRC.HPSwap.Events,o=TRC.HPSwap.Config.Hooks;return r.push(function(e,t){i.executeSwapHook(o.postCardScript,!0,e,t)}.bind(null,n,a)),TRC.util.merge({},t,{arrActions:r})};function g(e){var t=TRC.HPSwap,n=t.Events,a=t.Utils,r=t.Config,i=r.Counters,o=e.arrActions;return o.push(function(e){var t=e.elem,o=e.recommendation,s=e.rboxObj,l=e.index,c=e.regionMap,p=e.expectedSwappedCards,u;a.setSwappedCardData(t,o),a.markSwappedCardAndRegion(t,o,{regionMap:c,expectedSwappedCards:p}),f(c),n.pushHppImpressionData(s,o,l),s.boxes.push(t),1===s.boxes.length&&(s.setTargetItemsList(s.fullEventItemsHash,s.response.trc["video-list"].video,"a"),n.sendAvailable(s)),r.Counters.swappedCards++,i.swappedCards===i.totalRecs-i.snoozedCards&&i.allRegionSwapped&&(n.addPerformanceMark("allItemsSwapped"),n.sendSuccess(),n.writeConsole("All ".concat(i.totalRecs," recommendations have been rendered"))),a.injectSEOTag(t)}.bind(null,e)),TRC.util.merge({},e,{arrActions:o})}function f(e){if(e[TRC.HPSwap.Config.Fields.blur]){var t=e[TRC.HPSwap.Config.Fields.region],n=document.querySelector(t);if(!n)return!1;n.dataset.regionSwapped&&TRC.HPSwap.Blur.removeBlur(e)}}var w=function e(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(e){return n.reduce(function(e,t){return e.isDomValid?t(e):e},e)}},S=function e(t){var n={};return TRC.HPSwap.swapConfig.additional_tags&&TRC.HPSwap.swapConfig.additional_tags.forEach(function(e){var a=Array.prototype.slice.call(t.querySelectorAll("[".concat(e,"]")));if(1===a.length){var r=_slicedToArray(a,1);n[e]=r[0]}else a.length>1&&(n[e]=a)}),n},C;function T(e,t){var n=TRC.HPSwap.Utils,a=t.elem,r=t.slotsTemplateOverrideTags,i=n.getRegionItemSelector(r,e),o=i.replace(/\[|\]/g,""),s,l=!r[e];return!(s=a.querySelector(i))&&a.hasAttribute(o)&&(s=a),{useDefaultMapping:l,itemElement:s}}function h(e,t){var n=TRC.HPSwap.Utils,a=t.elem,r=t.slotsTemplateOverrideTags,i=n.getRegionItemSelector(r,e),o=i.replace(/\[|\]/g,""),s=!r[e],l=n.queryItems(a,i);return 0===l.length&&a.hasAttribute(o)&&(l=[a]),{useDefaultMapping:s,itemElements:l}}function R(e,t){if(e.childNodes.length<=1)TRC.dom.setContentToElement(e,t);else{for(var n=!1,a=0;a<e.childNodes.length;a++){var r=e.childNodes[a],i;if(r.nodeType===Node.TEXT_NODE&&r.textContent)if(""!==r.textContent.trim()){var o,s;if(TRC.dom.isHtmlContent(t))C||(C=TRC.dom.createHTMLElement("textarea")),C.innerHTML=t,t=C.value;r.textContent=t,n=!0;break}}n||TRC.dom.setContentToElement(e,t)}}function v(e){var t=e.rboxObj,i=e.regionItem,f=e.regionItemMap,C=e.recommendation,T=e.i,h=e.regionMap,R=e.expectedSwappedCards,v=e.regionElem,P=TRC.HPSwap,y=P.Events,E=P.Utils,b=P.Config,H=P.Card,I=P.ImageUtils,M=P.Region;try{var _=b.Fields,A={arrActions:[],isDomValid:!0,message:"Failed swap content:",arrOptional:f[_.optional],nonDefaultAttrSelectors:S(i),inBlurRegion:!!h[_.blur],slotsTemplateOverrideTags:f,recommendation:C,elem:i,rboxObj:t,regionMap:h,index:T,expectedSwappedCards:R,regionElem:v},D=A=w(n,a,o,c,l,s,r,u,p,d,m,g)(A),O=D.isDomValid,k=D.thumbnail,N=D.arrActions,F=D.message,x=D.inBlurRegion;E.isCardSwappable(O,x)?(k?I.executeImageSource(A,e):H.executeSwap(N),y.addPerformanceMark("firstCardSwapped"),M.swappableCards[h.p].isTimedOut&&y.addPerformanceMark("firstTimeOutCardSwapped")):O?y.writeConsole("blur timed out"):y.sendError(t.originalPlacement,b.ErrorType.cardFailure,"failed to render card number ".concat(T,": ").concat(F))}catch(e){y.sendError(t.originalPlacement,b.ErrorType.cardFailure,"failed to render card number ".concat(T,": ").concat(e.message))}}function P(e){e.forEach(function(e){e()})}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.Card=TRC.HPSwap.Card||{swapCard:v,executeSwap:P,findNonDefaultAdditionalTagElements:S}}(),function(){function e(){return!!TRC.HPSwap.swapConfig&&"h"===TRC.listOrigin.getSource()}function t(e){if(e){var t=e[TRC.HPSwap.Config.Fields.item];return t&&t.length>0?t.map(function(e){return e.template?TRC.HPSwap.swapConfig.templates[e.template]:e}):[{}]}}function n(e,t){try{var n=e;return n.regions.forEach(function(e,a){"b"in e&&delete e.b,n.regions[a]=TRC.util.merge({},t[e.n],n.regions[a])}),n}catch(e){var a="could not combine configurations";TRC.HPSwap.Events.sendError(null,TRC.HPSwap.Config.ErrorType.combinedConfigFailure,a)}}function a(){var e=TRC.HPSwap.Config.getConfig.bind(this),t="hp4u-configuration-".concat(TRC.publisherId);TRC.HPSwap.swapConfig=e(t),TRC.HPSwap.swapConfig&&(TRC.HPSwap.swapConfig.alternative_domain=!0)}function r(){var e;TRC.HPSwap.swapConfig.regions.forEach(function(e,n){TRC.HPSwap.swapConfig.regions[n][TRC.HPSwap.Config.Fields.item]=t(e)})}function i(){if(a(),!TRC.HPSwap.swapConfig||!TRC.HPSwap.swapConfig.regions)return null;r()}function o(e){return TRC.HPSwap.globalConfig&&TRC.HPSwap.globalConfig[e]?TRC.HPSwap.globalConfig[e]:null}function s(e){return o(e)}function l(e){if(!document.getElementById(e)){if(!document.body)return!1;var t=document.createElement("div");t.id=e,t.style.display="none",document.body.appendChild(t)}return!0}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.Config={isSwapEnabled:e,initSwapConfig:i,getConfig:o,createContainer:l,handleSwapConfig:a,handleCombinedConfig:n,getScript:s},TRC.HPSwap.Config.ElementType={Image:"image",Picture:"picture",Anchor:"anchor"},TRC.HPSwap.Config.Fields={mode:"m",placement:"p",name:"n",newsroomName:"nn",region:"r",item:"i",batch:"batch",title:"t",image:"img",link:"l",category:"c",author:"a",date:"d",selector:"s",year:"y",videos:"v",hoursDifference:"hd",header:"h",partial:"partial",css:"css",deleteValue:"d",deleteAttributes:"attr",defaultValue:"d",dimensions:"size",hideElement:"he",description:"desc",optional:"o",blur:"b",level:"l"},TRC.HPSwap.Config.Hooks={postCardScript:"pc",preRegionScript:"pr",preSwapScript:"ps",dateScript:"date",normalizeImage:"image"},TRC.HPSwap.Config.ErrorType={regionFailure:"failedToRenderRegion",cardFailure:"failedToRenderCard",inValidPublisherRegion:"inValidPublisherRegion",noItemsToRender:"noItemsToRender",postScriptFailure:"postScriptFailure",preRegionFailure:"preRegionFailure",preSwapScriptFailure:"preSwapFailure",moreCardsThanRecs:"moreCardsThanRecs",blurTimeoutBeforeSwap:"blurTimeoutBeforeSwap",combinedConfigFailure:"combinedConfigFailure",dupSkippedSwap:"dupSkippedSwap",cloudinaryTimeout:"cloudinaryTimeout",imageLoadingFailure:"imageLoadingFailure",multipleImages:"multipleImages",incorrectImageMapping:"incorrectImageMapping",missingImageMapping:"missingImageMapping"},TRC.HPSwap.Config.SuccessType={allRecsSwapped:"allRecsSwapped"},TRC.HPSwap.Config.SocialQueryParams={facebook:[{key:"u",value:"url"}],twitter:[{key:"url",value:"url"},{key:"text",value:"title"}]},TRC.HPSwap.Config.DefaultMapping={r:"[data-tb-region-item]",t:"[data-tb-title]",l:"[data-tb-link]",img:"[data-tb-thumbnail]",c:{s:"[data-tb-category]"},d:"[data-tb-date]",a:"[data-tb-author]",desc:"[data-tb-description]"},Object.freeze(TRC.HPSwap.Config.Fields),Object.freeze(TRC.HPSwap.Config.ErrorType),Object.freeze(TRC.HPSwap.Config.SuccessType),Object.freeze(TRC.HPSwap.Config.SocialQueryParams),Object.freeze(TRC.HPSwap.Config.DefaultMapping),Object.freeze(TRC.HPSwap.Config.Hooks),Object.freeze(TRC.HPSwap.Config.ElementType),TRC.HPSwap.Config.Counters="object"===_typeof(TRC.HPSwap.Counters)?TRC.HPSwap.Counters:{swappedRegions:{},totalRecs:0,swappedCards:0,allRegionSwapped:!1,snoozedRegions:{},snoozedCards:0,numOfCardsInContainer:{}}}(),function(){var e=function e(){var t=new Date;try{var n=t.toLocaleString(o,{month:"numeric",timeZone:"America/New_York"}),a=t.toLocaleString(o,{day:"numeric",timeZone:"America/New_York"}),r=t.toLocaleString(o,{year:"numeric",timeZone:s}),i="".concat(a,"/").concat(n,"/").concat(r),l;return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear())===i}catch(e){return!1}},t={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},a=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,r=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,i=/[^-+\dA-Z]/g,o="en-US",s,l=e();function c(e){o=e.locale||"en-US",s=e.timezone||void 0}function p(e){return parseInt(e.toLocaleString(o,{month:"numeric",timeZone:s}),10)}function u(e,t){return T(e.toLocaleString(o,{month:t,timeZone:s}))}function d(e){return parseInt(e.toLocaleString(o,{day:"numeric",timeZone:s}),10)}function m(e,t){return T(e.toLocaleString(o,{weekday:t,timeZone:s}))}function g(e){return parseInt(e.toLocaleString(o,{hour:"numeric",hour12:!1,timeZone:s}),10)}function f(e){return parseInt(e.toLocaleString(o,{minute:"numeric",timeZone:s}),10)}function w(e){return parseInt(e.toLocaleString(o,{second:"numeric",timeZone:s}),10)}function S(e){return parseInt(e.toLocaleString(o,{year:"numeric",timeZone:s}),10)}function C(e,t){for(e=String(e),t=t||2;e.length<t;)e="0".concat(e);return e}function T(e){return e.charAt(0).toUpperCase()+e.slice(1)}function h(e){if(e&&0!==parseInt(e,10)&&!isNaN(e))return new Date(1e3*parseInt(e,10))}function R(e,t,n){return!!t.useModified&&(!(t.minutesDiff&&!isNaN(t.minutesDiff))||v(n,e)>t.minutesDiff)}function v(e,t){var n=Math.abs(t-e);return Math.floor(n/(1e3*60))}function P(e,o,s){c(o);var T=h(e),v=s?h(s):void 0,P=v&&R(T,o,v),y=P?v:T,E,b=o.format?String(t[o.format]||o.format):String(t.default);"UTC:"===b.slice(0,4)&&(b=b.slice(4),E=!0);var H=E?"getUTC":"get",I=l?d(y):y["".concat(H,"Date")](),M=y["".concat(H,"Day")](),_=l?p(y):y["".concat(H,"Month")](),A=l?S(y):y["".concat(H,"FullYear")](),D=l?g(y):y["".concat(H,"Hours")](),O=l?f(y):y["".concat(H,"Minutes")](),k=l?w(y):y["".concat(H,"Seconds")](),N=y["".concat(H,"Milliseconds")](),F=E?0:y.getTimezoneOffset(),x={d:I,dd:C(I),ddd:l?m(y,"short"):n.dayNames[M],dddd:l?m(y,"long"):n.dayNames[M+7],m:l?_:_+1,mm:C(l?_:_+1),mmm:l?u(y,"short"):n.monthNames[_],mmmm:l?u(y,"long"):n.monthNames[_+12],yy:String(A).slice(2),yyyy:A,h:D%12||12,hh:C(D%12||12),H:D,HH:C(D),M:O,MM:C(O),s:k,ss:C(k),l:C(N,3),L:C(N>99?Math.round(N/10):N),t:D<12?"a":"p",tt:D<12?"am":"pm",T:D<12?"A":"P",TT:D<12?"AM":"PM",Z:E?"UTC":(String(y).match(r)||[""]).pop().replace(i,""),o:(F>0?"-":"+")+C(100*Math.floor(Math.abs(F)/60)+Math.abs(F)%60,4),S:["th","st","nd","rd"][I%10>3?0:(I%100-I%10!=10)*I%10]},U=b.replace(a,function(e){return e in x?x[e]:e.slice(1,e.length-1)});return P&&o.updatedLabel&&(U="".concat(o.updatedLabel," ").concat(U)),U}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.DateFormat={formatDate:P,localeOptionsSupported:e}}(),function(){var e=function e(t,n){return{trcRecommendation:n,elemToHide:t["selector-to-hide"],elemToInsertInto:t["element-to-insert-into"],iconElem:t["icon-elem"],insertionPosition:t["insertion-position"],insertionConditions:t.conditions,placementOptions:t.placement,platformOptions:t.platform}},t=function e(t,n){var a=n.insertionPosition,r=n.iconElem;t&&t.insertAdjacentHTML(a,r)},n=function e(t){t&&t.setAttribute("style","display: none !important;")},a=function e(t,n,a){var r=n["response-field"],i=n["response-value"],o=a[r].indexOf(i)>-1,s=a[r]===i;switch(t){case"contains":return o;case"does not contain":return!o;case"equals":return s;case"not equals":return!s;default:return!1}},r=function e(a,r,i){var o=i.elemToHide,s=i.elemToInsertInto,l=a.querySelector(o),c=a.querySelector(s);if(c)if(r){if(l)return;t(c,i)}else l&&n(l)},i=function e(t){var n=t.trcRecommendation,a=t.placementOptions,r=a["placement-names"],i=a.operator;if(0===r.length)return!0;var o=r.indexOf(n.placement)>-1;return"equals"===i?o:!o},o=function e(t){var n=t.platformOptions,a=TRC.dom.isSmartPhone()?"PHON":"DESK";return"ALL"===n||n===a},s=function e(t,n){var s=n.insertionConditions,l=n.trcRecommendation;if(i(n)&&o(n)){var c=s.reduce(function(e,t){return e&&l[t["response-field"]]&&a(t["match-operator"],t,l)},!0);r(t,c,n)}},l=function t(n,a,r){r.rules&&r.rules.forEach(function(t){if(t.conditions&&t.conditions.length>0){var r=e(t,a);s(n,r)}})};TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.IconsFormat={formatIcons:l}}(),function(){var e=["srcset","data-srcset","loading","sizes"],t=500,n=1.2,a=110,r=1500;function i(e){var t,n;if(e.clientWidth&&e.clientHeight)n=parseInt(e.clientWidth,10),t=parseInt(e.clientHeight,10);else{var a=e.getBoundingClientRect();n=parseInt(a.width,10),t=parseInt(a.height,10)}return{height:t,width:n}}function o(e,t){var n="f_jpg,q_auto,c_fill,g_faces:auto,e_sharpen";e.width>0&&(n+=",w_".concat(e.width)),e.height>0&&(n+=",h_".concat(e.height));var a=TRC.imageUtils.getImageUrlBasedOnCloudinaryApi(t,n);return"".concat(a,"?hp4u=1")}function s(t){e.forEach(function(e){return t.removeAttribute(e)});var n=TRC.HPSwap.swapConfig.remove_image_attributes;n&&n.forEach(function(e){return t.removeAttribute(e)})}function l(e){var t=e.trcRBoxUI,i=e.imgContDim,o={};try{var s=t.trc;o.allowedRatiosSorted=s.getSortedCloudinaryRatios(),o.imageMinRatio=o.allowedRatiosSorted[0],o.imageSizeFactor=n,o.imageMinWidth=a,o.imageMaxWidth=r,o.imageSizeRound=parseInt(t.customImageSizeRound,10)||20;var l=o.allowedRatiosSorted.length;o.imageMaxRatio=o.allowedRatiosSorted[l-1],o.computedWidth=Math.min(Math.ceil(Math.max(i.width*o.imageSizeFactor,o.imageMinWidth)/o.imageSizeRound)*o.imageSizeRound,o.imageMaxWidth),o.computedRatio=Math.max(Math.min(t.getAllowedRatio(i),o.imageMaxRatio),o.imageMinRatio),o.computedHeight=Math.ceil(o.computedWidth*o.computedRatio)}catch(e){return TRC.HPSwap.Events.writeConsole("image ratio calculations failed: ",e),i}return{width:o.computedWidth,height:o.computedHeight}}function c(e,t){var n=e.width,a=e.height;return l({trcRBoxUI:t.rboxObj,imgContDim:{width:n,height:a}})}function p(e){for(var t=!1,n=e;!t;){var a=n.parentElement;if(!a)break;var r=i(a),o=r.height,s=r.width;if(o>0&&s>0)return t=!0,{height:o,width:s};n=a}return!1}function u(e,t){var n,a,r,o,s=TRC.HPSwap.swapConfig.image_dim_elem;s&&(o=e.closest(s));var l=o||e,u=i(l),d=u.width,m;if(n=u.height,0===(a=d)||0===n){if(!(r=p(l)))return{height:0,width:0};var g=r,f,w;a=g.width,n=g.height}return c({width:a,height:n},t)}function d(e,n){var a=TRC.HPSwap.Config.Hooks,r=TRC.HPSwap,i=r.Events,l=r.Config,c=r.Utils,p=e.imgElem,d=e.arrActions,m=e.rboxObj,f=e.inBlurRegion,w=e.recommendation,S=e.thumbnail,T=TRC.HPSwap.swapConfig.disable_cloudinary,h=u(p,n),R=i.executeSwapHook(a.normalizeImage,!1,S,h,p,w);R&&c.isValidURL(R)&&(S=R);var v=T?S:o(h,S),P=!1,y,E,b=!("IMG"===p.tagName||!p.style.backgroundImage&&!p.dataset.bg);0===p.children.length||b?E=document.createElement("img"):s(E=p.cloneNode(!0));var H=function e(t,n,a,r,i){if(!n.dataset.tblSwap){var o=TRC.HPSwap.Utils,s=o.isTimedOutBlurItem,l=o.markAsSwapped;r&&(clearTimeout(r),r=null),s(a)?TRC.HPSwap.Events.writeConsole("blur timed out: image request",t):(i.isBackgroundImage?C(t,n):g(t,n,i.dimensions),l(n),TRC.HPSwap.Card.executeSwap(d),TRC.HPSwap.Events.handleIntersection(m))}},I=function e(t,n,a){i.sendWarning(l.ErrorType.imageLoadingFailure,"",n),i.addMessageToStack(m.placement,"executeImageSource","imageFailed",n),a&&(clearTimeout(a),a=null),M(t)&&(t.src=n,t.dataset.src=n,t.dataset.source="original",P=!0,t.onerror=null)},M=function e(t){return!t.dataset.tblSwap&&(!P&&!T)};if(!T){var _=TRC.HPSwap.swapConfig.cloudinaryTimeout,A=parseInt(_,10)||t;y=setTimeout(function(){i.sendWarning(l.ErrorType.cloudinaryTimeout,"",v),i.addMessageToStack(m.placement,"executeImageSource","cloudinary timout",v),k()},A)}var D,O=H.bind(null,p,E,f,y,{isBackgroundImage:b,dimensions:h}),k=I.bind(null,E,S,y);E.addEventListener("load",O,!0),E.addEventListener("error",k,!0),E.src=v,p.alt&&(E.alt=w.title),p.title&&(E.title=w.title),E.dataset.src=v,E.dataset.source=T?"original":"cloudinary",E.dataset.cloned="true"}function m(t){var n=t.nodeName;if(n.match(/^(src|data-src|alt|title)$/))return!1;if(-1!==e.indexOf(n))return!1;var a=TRC.HPSwap.swapConfig.remove_image_attributes;return!a||-1===a.indexOf(n)}function g(e,t,n){var a;Array.prototype.slice.call(e.attributes).forEach(function(e){m(e)&&t.setAttribute("id"===e.nodeName?"data-id":e.nodeName,e.nodeValue)}),"original"===t.dataset.source&&S(n,t),f(t),e.parentNode.replaceChild(t,e),w(t)}function f(e){var t=TRC.HPSwap.swapConfig.lazy_images,n;t&&t.attr.forEach(function(t){e.hasAttribute(t)&&e.setAttribute(t,e.src)})}function w(e){var t=TRC.HPSwap,n=t.Utils,a=t.Config,r=e.parentNode,i;n.validateDomElement(a.ElementType.Picture,r)&&Array.prototype.slice.call(r.querySelectorAll("source")).forEach(function(e){r.removeChild(e)})}function S(e,t){var n,a;TRC.HPSwap.swapConfig.fix_ratio&&(e.width/e.height>t.width/t.height?t.style.width="".concat(e.width,"px"):t.style.height="".concat(e.height,"px"),t.style.objectFit="cover")}function C(e,t){e.style.backgroundImage='url("'.concat(t.src,'")'),e.dataset.bg=e.dataset.bg&&t.src,e.alt=e.alt&&t.alt,e.title=e.title&&t.title;var n=TRC.HPSwap.swapConfig.image_data_attributes;n&&n.split(",").forEach(function(n){e.setAttribute(n,t.src)})}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.ImageUtils={executeImageSource:d},window._trcIsUTactive&&(TRC.HPSwap.ImageUtils.unitestsHelpers={replaceImageForRepaint:g,getCloudinaryUrl:o})}(),function(){var e={};function t(e){return a(e,"mapping")}function n(e){return a(e,"name")}function a(e,t){var n=TRC.HPSwap.Utils.getOriginalPlacement(e),a=TRC.HPSwap.swapRegionsConfig.find(function(e){return n===e.p});if(a){if("mapping"===t)return a;if("name"===t)return a.p;if("newsroom"===t)return a.r&&0===a.r.indexOf("[data-tb-region='")&&a.r.split("'")[1]}}function r(t){var a=TRC.HPSwap,r=a.Events,s=a.Utils,c=a.SwapDataEventApi,p=c.SWAP_EVENT_FIELDS,d=n(t.placement),m,g=TRC.HPSwap.Config,f=g.Fields,w=g.ErrorType,S=g.Counters,C=g.Hooks,T=TRC.HPSwap.Blur.removeBlur;t.originalPlacement=s.getOriginalPlacement(t.placement);try{r.addMessageToStack(t.placement,"findRegion","placement",t.placement);var h=t.response.trc["video-list"].video;if(!(m=l(h,t))||!m.regionMap)return;if(e[d]||(e[d]={cards:[]},i(d,t),S.totalRecs+=e[d].recCount),m.regionElem)r.executeSwapHook(C.preRegionScript,!1,m.regionElem,m.regionMap),r.sendAPIEvent("swapVariant",{is_swap:!0},!0),1===Object.keys(e).length?(r.addPerformanceMark("firstCardStartSwap"),u(m.regionMap,m.regionElem,h,t)):(2===Object.keys(e).length&&(e[d].isTimedOut=!0),setTimeout(function(e,t,n,a){u(e,t,n,a)},0,m.regionMap,m.regionElem,h,t));else if(r.writeConsole("Region was not found: ".concat(t.placement,",starting MutationObserver")),T(m.regionMap),MutationObserver)c.updatePlacementEventData(d,p.NUM_ITEMS_NOT_ON_DOM,0),o(m.regionMap[f.region],m.regionMap,h,t);else{var R="Cannot find region ".concat(d," with the following selector: ").concat(m.regionMap[f.region]);r.sendError(t.originalPlacement,w.inValidPublisherRegion,R)}}catch(e){r.sendError(t.originalPlacement,w.regionFailure,"failed to render region: ".concat(e.message)),__trcError("failed to render region ".concat(t.placement,": ").concat(e.message)),m&&m.regionMap&&T(m.regionMap)}}function i(t,n){e[t].recCount=n.globalTrcResponseJSON.vl.reduce(function(e,t){return t.uuip===n.unifiedPlacement?e+t.v.length:e},0),e[t].totalPublisherCards=0}function o(e,t,n,a){var r,i;new MutationObserver(function r(i,o){var s=document.querySelector(e);s&&(setTimeout(function(e,t,n,a){TRC.HPSwap.Events.writeConsole("Region loaded: ".concat(a.placement)),TRC.HPSwap.Region.swapRegion(e,t,n,a)},0,t,s,n,a),o.disconnect())}).observe(document.body,{childList:!0,subtree:!0})}function s(e,t){var n=TRC.HPSwap.Config.Fields,a=e[n.header];if(!t.dataset.headerSwapped&&a){var r=a[n.selector],i=t.querySelector(r);i&&a[n.name]&&(TRC.dom.setContentToElement(i,a[n.name]),t.dataset.headerSwapped="true")}}function l(e,n){var a=TRC.HPSwap.Config,r=a.Fields,i=a.ErrorType,o=a.Counters,s=TRC.HPSwap.Utils.getOriginalPlacement,l=TRC.HPSwap,c=l.SnoozeUtils,p=l.SwapDataEventApi,u=p.SWAP_EVENT_STATUS,d=t(n.placement);if(d){var m=d[r.region],f=document.querySelector(m),w=s(n.placement),S=c.getSnoozedItems(n,d[r.partial]),C=c.isAllItemSnoozed(S);return 0===e.length||C?(d[r.blur]&&TRC.HPSwap.Blur.removeBlur(d),0===e.length&&(p.updatePlacementEventStatus(n.placement,u.EVENT_READY),TRC.HPSwap.Events.sendError(n.placement,i.noItemsToRender,"")),C&&(p.updatePlacementEventStatus(n.placement,u.EVENT_READY),o.snoozedRegions[w]||(o.snoozedRegions[w]=1)),void(f&&g(n.placement))):{regionMap:d,regionElem:f}}}function c(e,t){var n=TRC.HPSwap.Config.Fields;try{if(e.trcResponse.hps){var a=e.trcResponse.hps.split(","),r;a.every(function(e){return!isNaN(e)})&&a.length&&(t[n.partial]=a.map(Number))}}catch(e){TRC.HPSwap.Events.writeConsole("failed to parse TRC slots: ".concat(e.message))}return t[n.partial]}function p(t,n,a){var r=TRC.HPSwap,i=r.Events,o=r.SnoozeUtils,s=r.Utils,l=TRC.HPSwap.Config.Counters,c=n.snoozedItems,p=n.rboxObj,u=n.regionName,d=n.partial,m=n.regionItem,g=n.regionItemMap,f=o.isItemShouldBeSnoozed(t,c);if(d){var w=d.filter(function(e){return e===a});if(a++,0===w.length)return m.dataset.tblSwapIgnore="true",a}return f?(l.snoozedCards++,i.writeConsole("item ".concat(t," for placement ").concat(p.placement," was snoozed")),m.dataset.tblSwapIgnore="true",s.markupDebugElement(m,"#FF1493"),a):(e[u].cards.push({regionItem:m,i:t,regionItemMap:g}),a)}function u(t,a,r,i){var o=TRC.HPSwap,l=o.Events,u=o.SnoozeUtils,f=o.SwapDataEventApi,w=TRC.HPSwap.Config,S=w.Fields,C,T=w.Counters.numOfCardsInContainer,h=f.SWAP_EVENT_FIELDS;try{var R=n(i.placement),v=TRC.HPSwap.Utils,P=v.queryItems,y=v.getRegionItemMapping,E=c(i,t),b=0,H=u.getSnoozedItems(i,E),I=S.region;T[R]=0;var M=m(t,e[R].recCount,H),_=r.map(function(e){return e}),A={snoozedItems:H,rboxObj:i,regionName:R,partial:E},D,O;if(l.addMessageToStack(i.placement,"swapRegion","videoList",_.length),l.addMessageToStack(i.placement,"swapRegion","snoozedItems",H.length),l.addMessageToStack(i.placement,"swapRegion","expectedSwappedCards",M),g(i.placement),s(t,a),0===e[R].cards.length&&t[S.item].forEach(function(n){var r=y(n,I),o=P(a,r);e[R].totalPublisherCards+=E?E.length-H.length:o.length-H.length,M=u.removePotentialDup(_,t,o,H,M),l.addMessageToStack(i.placement,"swapRegion","expectedSwappedCards filter",M),l.addMessageToStack(i.placement,"swapRegion","regionItems",o.length),o.forEach(function(e,t){A.regionItemMap=n,A.regionItem=e,b=p(t,A,b)}),T[R]+=o.length}),f.updatePlacementEventData(R,h.NUM_ITEMS_NOT_ON_DOM,T[R]),d(R,_,i,t,M),e[R].cards.length<_.length-H.length)if(l.writeConsole("Start region item mutation observer"),MutationObserver)new MutationObserver(function e(n,r){t[S.item].forEach(function(e){var t=y(e,I),n=P(a,"".concat(t,":not([data-tbl-swap-started]):not([data-tbl-swap-ignore])"));T[R]+=n.length;for(var r=0;r<n.length;r++)if(_.length>0){var i=n[r];A.regionItemMap=e,A.regionItem=i,b=p(r,A,b)}}),0!==_.length&&"true"!==a.dataset.regionSwapped||r.disconnect(),f.updatePlacementEventData(R,h.NUM_ITEMS_NOT_ON_DOM,T[R]),d(R,_,i,t,M),l.handleIntersection(i)}).observe(a,{childList:!0,subtree:!0});a.dataset.tblSwapRegion=R,l.writeConsole("swapped region ".concat(i.placement))}catch(e){l.sendError(i.originalPlacement,TRC.HPSwap.Config.ErrorType.regionFailure,"failed to render region: ".concat(e.message)),__trcError("failed to render region ".concat(i.placement,": ").concat(e.message))}TRC.HPSwap.Events.handleIntersection(i)}function d(t,n,a,r,i){for(;n.length>0&&e[t].cards.length>0;){var o=n.shift();e[t].totalPublisherCards-=1;var s=TRC.HPSwap.Request.parseRecommendation(o,a),l=e[t].cards.shift(),c=l.regionItem,p=l.i,u=l.regionItemMap;c.dataset.tblSwapStarted||(c.dataset.tblSwapStarted="true",TRC.HPSwap.Card.swapCard({rboxObj:a,regionItem:c,regionItemMap:u,recommendation:s,i:p,regionMap:r,expectedSwappedCards:i}))}}function m(e,t,n){var a=e[TRC.HPSwap.Config.Fields.partial];return a?Math.min(a.length-n.length,t):t-n.length}function g(e){var t=TRC.HPSwap.Config.Counters,n=TRC.HPSwap.Utils.getOriginalPlacement(e),a=TRC.HPSwap.Region.getRegionMappingByPlacement(n),r,i;Object.prototype.hasOwnProperty.call(a,"en")&&!a.en||(t.swappedRegions[n]||(t.swappedRegions[n]=1),TRC.HPSwap.swapRegionsConfig.filter(function(e){return!Object.prototype.hasOwnProperty.call(e,"en")}).filter(function(e){return!t.snoozedRegions[e.p]}).every(function(e){return t.swappedRegions[e.p]})&&(t.allRegionSwapped=!0))}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.Region=TRC.HPSwap.Region||{getRegionMappingByPlacement:t,getRegionValueByPlacement:a,swapRegion:u,findRegion:r,swappableCards:e}}(),function(){var e=2,t=!1;function n(){var e=TRC.HPSwap,t=e.Events,n=e.Blur,a=e.Config,r=e.Utils,i=e.SwapDataEventApi;a.createContainer(r.getContainer())&&(i.initSwapDatEvent(),t.addPerformanceMark("swapStarted"),n.initBlur(),t.initImpressionTimer(),TRC.listen("preBoxRender",this.handleRboxRender),this.sendFlush(),this.handleBatches(),t.addMessageToStack("general","initSwap","impl version",TRC.version),t.addMessageToStack("general","initSwap","loader version",new Date(a.getConfig("bakeTime"))))}function a(){var t=TRC.HPSwap.swapConfig.batchSize||e,n=this.getBatchRegions();n?this.sendBatchReqAndFlush(n,t):TRC.HPSwap.Events.writeConsole("no regions were found")}function r(e,t){for(var n=TRC.HPSwap,a=n.Events,r=n.Config,i=0;i<e.length;){var o=e[i];this.sendBatchRequest(o),a.writeConsole("request sent for placement ".concat(o[r.Fields.placement])),this.setGetRegionsFlag(i),i++,this.sendFlushIfNeeded(i,t)}this.sendFlush()}function i(e){0===e&&window._taboola.push({ad_first_request:{hp4uGetRegions:!0}})}function o(e,t){e%t==0&&this.sendFlush()}function s(e,t){return e.isSyndicated=e["is-syndicated"]||e["is-in-network"]||e["is-native"],e.isPhoto="photo"===e.type,e.isText="text"===e.type,e.imageIframe=Object.prototype.hasOwnProperty.call(e,"image-iframe")&&e["image-iframe"],e.tags="string"==typeof e.tags?TRC.text.parseCSV(e.tags):[],e.placement=t.placement,e.mode=t.mode_name,e.itemType=e.publisher?"sponsored":"organic",TRC.dom.isHtmlContent(e.title)&&(e.title=TRC.text.htmlUnescape(e.title)),e}function l(n){var a=TRC.HPSwap,r=a.Region,i=a.swapRegionsConfig,o=[],s=n["organic-personalization"];if(!t&&s&&s.reg){if(s.reg.forEach(function(e){var t="HP ".concat(e.n),n=r.getRegionMappingByPlacement(t);if(n)Object.prototype.hasOwnProperty.call(n,"en")&&!n.en&&(c(n.p),o.push(n));else{var a={p:t,r:e.s};i.push(a),o.push(a)}}),o.length){var l=TRC.HPSwap.swapConfig.batchSize||e;this.sendBatchReqAndFlush(o,l)}t=!0}}function c(e){for(var t=0;t<TRC.HPSwap.swapRegionsConfig;t++)if(TRC.HPSwap.swapRegionsConfig[t].p===e){TRC.HPSwap.swapRegionsConfig[t].en=!0;break}}function p(e){if(e&&e.mybox){var t=TRC.HPSwap,n=t.Utils,a=t.swapConfig,r=t.Region,i=t.Blur,o=t.swapHookStart,s=t.Events,l=t.Request,c=t.SwapDataEventApi,p=c.SWAP_EVENT_FIELDS;if(o){var d=n.getVariantFromResponse(e.mybox.trc);if(a.ga&&d&&setTimeout(function(){s.sendAnalyticsEvent(d)},0),e.mybox.response&&n.isPlacementHasSwap(e.mybox.response.trc.placement)&&!u(e.mybox)){if(c.initializePlacement(e.mybox),s.isFirstPlacementRendered||(s.sendFallbackReport(),s.isFirstPlacementRendered=!0),n.isKillSwitchEnabled(e.mybox.response.trc))return i.removeBlur(),void c.updatePlacementEventData(e.mybox.response.trc.placement,p.KILL_SWITCH_ENABLED,!0);setTimeout(function(){s.sendAnalyticsEvent(d)},0),setTimeout(function(){l.handleUpdatedRegions(e.mybox.response.trc)},0),s.addPerformanceMark("afterFirstResponse"),r.findRegion(e.mybox)}}}}function u(e){var t=TRC.HPSwap,n=t.Region,a=t.Blur,r=t.Config;if(!e.isFeedCard&&!e.isHp4u){var i=n.getRegionMappingByPlacement(e.response.trc.placement);return i&&i[r.Fields.blur]&&a.removeBlur(i),!0}return!1}function d(){window._taboola&&window._taboola.push({flush:!0})}function m(){var e=TRC.HPSwap.swapRegionsConfig;return e?1===e.length&&0===Object.keys(e[0]).length?null:g(e):null}function g(e){var t=e.filter(function(e){return!("en"in e)}),n=TRC.HPSwap.Config.getConfig("hp4u_swap_order");return n?(f(t,n),t.sort(function(e,t){return t.order?e.order?e.order>t.order?1:e.order<t.order?-1:0:1:-1})):t}function f(e,t){e.forEach(function(e){Object.prototype.hasOwnProperty.call(e,t)&&(e.order=e[t])})}function w(e){if(window._taboola){var t=TRC.HPSwap.Config.Fields;window._taboola.push({mode:e[t.mode]||TRC.HPSwap.Utils.getMode(),container:TRC.HPSwap.Utils.getContainer(),placement:e[t.placement],target_type:"mix",should_render:function e(){return!1},skip_dom_render:!0,alternative_domain:!!TRC.HPSwap.swapConfig.alternative_domain})}}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.Request={initSwap:n,parseRecommendation:s,handleRboxRender:p,handleUpdatedRegions:l,sendFlush:d,getBatchRegions:m,sendBatchRequest:w,handleBatches:a,sendBatchReqAndFlush:r,sendFlushIfNeeded:o,setGetRegionsFlag:i}}(),function(){function e(e,t){var n=TRC.HPSwap.Utils.getOriginalPlacement(e.placement),a=e.response.trc["organic-personalization"];if(a&&a.snz){var r=a.snz.filter(function(e){return e.pl===n||-1!==e.pl.indexOf(n)});if(r.length>0){var i=r[0].s;if(i.length&&"-1"===i[0])return[-1];if(!t)return i.map(Number);var o=[];return i.map(Number).forEach(function(e){-1!==t.indexOf(e)&&o.push(e)}),o}}return[]}function t(e,t){return t.length&&(t.indexOf(e)>-1||t.indexOf("-1")>-1)}function n(e){return e.length&&-1===e[0]}function a(e,t){var n=TRC.HPSwap,a=n.Config,r=n.Utils,i=n.swapConfig,o=a.Fields,s=i.articleParam,l=[];return e.forEach(function(e){var n=r.getRegionItemSelector({item:e,regionMap:t},o.link),a=r.queryItems(e,n);a.length&&a[0].href?l.push(TRC.DynamicModulesManager.parseArticleUrl(a[0].href,s)):l.push(null)}),l}function r(e,t,n){for(var a=TRC.HPSwap,r=a.Events,i=a.Config,o,s=a.swapConfig.articleParam,l=e.length-1;l>=0;--l){var c;if(TRC.DynamicModulesManager.parseArticleUrl(e[l].url,s)===t){e.splice(l,1);var p="Duplicated url [".concat(t,"] was found in region [").concat(n,"]");return r.writeConsole(p),r.sendWarning(i.ErrorType.dupSkippedSwap,p),!0}}return!1}function i(e,n,a){var r=t(a,n),i;return e&&0===e.filter(function(e){return e===a}).length||r}function o(e,t,n,o,s){var l=TRC.HPSwap,c=l.Config,p=l.SwapDataEventApi,u=c.Fields,d=p.SWAP_EVENT_FIELDS,m=t[u.partial];if(!t[u.partial]&&n.length===e.length&&0===o.length)return s;for(var g=a(n),f;1;){f=!1;for(var w=0,S=0;S<g.length;S++){var C=g[S];if(C)if(i(m,o,S)){if(r(e,C,t.p)){f=!0,s--;break}}else if(w++,e.length<w&&r(e,C,t.p)){f=!0,s--;break}}if(!f)break;p.updatePlacementEventData(t.p,d.NUM_ITEMS_SKIPPED_DUE_TO_DUP,1)}return s}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.SnoozeUtils={removePotentialDup:o,getSnoozedItems:e,isItemShouldBeSnoozed:t,isAllItemSnoozed:n}}(),function(){var e={},t={},n,a=!1,r=1e4,i=3,o={EVENT_PLACEMENT_INITIALIZED:"initialized",EVENT_READY:"ready",EVENT_PENDING_DOM:"pending",EVENT_SENT:"sent"},s={NUM_ITEMS_NOT_ON_DOM:"numOfItemsNotOnPage",NUM_ITEMS_SKIPPED_DUE_TO_DUP:"numOfDupSkippedItems",NUM_ITEMS_SWAPPED:"numOfSwappedItems",KILL_SWITCH_ENABLED:"killSwitchEnabled"},l=function e(t){if(!t)return 0;var n=t.split(",");return n.length>0?n.length:0},c=function e(t){return t&&t.split(",").map(Number)},p=function e(t,n,a){return t?Math.max(0,n-t):a.length},u=function t(n){var a=e[n].eventObj,r,i={ri:e[n].additionalData.ri};TRCImpl.generateEvent&&TRCImpl.generateEvent("swap-data",{data:JSON.stringify(a)},null,!0,i)},d=function e(t){return t.replace(/^HP\s*/,"")},m=function e(t){var n=t.trcResponse,a=TRC.HPSwap.SnoozeUtils.getSnoozedItems;return{killSwitchEnabled:!1,region:d(n.hpl||n.uip),template:"HP",numOfExpectedItems:n.hps&&l(n.hps)||0,numOfReturnedItems:n.v.length||0,numOfSwappedItems:0,snoozedIndex:a(t,n.hps)||[],numOfDupSkippedItems:0,numOfItemsNotOnPage:0,debugInfo:""}},g=function t(n){Object.keys(e).forEach(function(e){n(e)})},f=function t(n){u(n),e[n].status=o.EVENT_SENT},w=function t(){var r;Object.keys(e).every(function(t){var n=e[t],a=n.status,r=n.eventObj;return a===o.EVENT_SENT&&0===r.numOfItemsNotOnPage})&&(window.clearInterval(n),a=!0)},S=function t(){0!==Object.keys(e).length&&(g(function(t){e[t].status===o.EVENT_READY&&f(t)}),w())},C=function t(){g(function(t){e[t].status!==o.EVENT_SENT&&f(t)})},T=function n(){a&&S(),Object.keys(t).length>=i&&Object.keys(t).forEach(function(n){e[n].status!==o.EVENT_SENT&&f(n),e[n].status=o.EVENT_SENT,delete t[n]})},h=function t(n,a){if(e[n])switch(a){case o.EVENT_READY:R(n);break;case o.EVENT_PENDING_DOM:v(n);break;default:return null}},R=function n(r){e[r].status=o.EVENT_READY,t[r]||(t[r]="ready"),a?f(r):T()},v=function t(n){e[n]&&e[n].status!==o.EVENT_PENDING_DOM&&(e[n].status=o.EVENT_PENDING_DOM)},P=function t(n,a){var r=e[n].eventObj,i=c(e[n].additionalData.hps);if(i&&(!i||0!==i.length)){r.snoozedIndex.length>0&&r.snoozedIndex.forEach(function(e){i=i.filter(function(t){return t!==parseInt(e,10)})});var s=i[i.length-1]+1;if("sent"!==e[n].status||0!==r.numOfItemsNotOnPage){var l=p(a,s,i);r.numOfItemsNotOnPage=l,l>0&&h(n,o.EVENT_PENDING_DOM)}}},y=function t(n,a){var r=e[n].eventObj;a>0&&(r[s.NUM_ITEMS_SKIPPED_DUE_TO_DUP]+=1)},E=function t(n,a,r){var i,o=(0,TRC.HPSwap.Utils.getOriginalPlacement)(n);e[o]&&(a===s.NUM_ITEMS_NOT_ON_DOM?P(o,r):a===s.NUM_ITEMS_SKIPPED_DUE_TO_DUP?y(o,r):e[o].eventObj[a]=r)},b=function t(n){var a=n.trcResponse,r,i=(0,TRC.HPSwap.Utils.getOriginalPlacement)(n.placement);if(!e[i]){var s=m(n);e[i]={status:o.EVENT_PLACEMENT_INITIALIZED,eventObj:s,additionalData:{hps:a&&a.hps,ri:a&&a.ri}}}},H=function e(){var t,i=TRC.HPSwap.swapConfig.swap_data_event_interval||r;n=window.setInterval(function(){S()},i),window.setTimeout(function(){window.clearInterval(n),a=!0,C()},3e4),window.addEventListener("beforeunload",S)};TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.SwapDataEventApi={SWAP_EVENT_FIELDS:s,SWAP_EVENT_STATUS:o,initializePlacement:b,updatePlacementEventData:E,initSwapDatEvent:H,updatePlacementEventStatus:h}}(),function(){var e=[];function t(t,n,a,r){e.push({key:t,method:n,action:a,value:r})}function n(){var t=function e(t,n){return t.key<n.key?-1:t.key>n.key?1:0};if(TRC.HPSwap.Utils.isDebugMode()&&e.length&&console.table){var n=e.sort(t);console.table(n)}}function a(e){var t,n=_slicedToArray(e.split("#"),2),a=n[0],r=n[1],i=-1!==e.indexOf("?")?"&":"?";return"".concat(a).concat(i,"tbref=hp").concat(r?"#".concat(r):"")}function r(e,t,n){var r=e.listContainer;e.listContainer={id:"rbox-h2m"};var i,o=a(n&&n.hasAttribute("href")?n.href:TRC.HPSwap.Utils.getRecommendationUrl(t)),s=e.createVideoBoxClickUrl(t,o),l=TRC.HPSwap.Config.getConfig("requests-domain-alternative");if(TRC.HPSwap.swapConfig.alternative_domain&&l){var c=new TRC.URL(s);c.host!==l&&(s=s.replace(c.host,l))}return e.listContainer=r,s}function i(e){var t=e.createUtmParam(),n=new TRC.PlacementEventPostData;n.setFullItemList(e.getJsonTargetItemsList(e.fullEventItemsHash)),e.sendAvailableEvent(t,n,!0),TRC.HPSwap.Events.writeConsole("available sent for region ".concat(e.placement))}function o(e,t,n,a){var r=TRC.HPSwap.Events.getClickUrl(n,t,e);a.currentTarget.dataset.tblClicked||(a.currentTarget.href=r,a.currentTarget.dataset.tblClicked="true")}function s(e,t,n,a){e.href=TRC.HPSwap.Utils.getRecommendationUrl(t,a),e.onmousedown=TRC.HPSwap.Events.itemClicked.bind(null,e,t,n),TRC.HPSwap.Config.getConfig("events-api-click-enabled")&&e.addEventListener("click",function(e){var a;"_blank"===e.target.target?setTimeout(function(){TRC.EventsAPI.dispatchClick(t,n.response.trc)},0):TRC.EventsAPI.dispatchClick(t,n.response.trc)})}function l(e){TRC.HPSwap.Events.writeConsole("start intersection for ".concat(e.placement)),e.visibilityReporter=new TRC.WidgetVisibilityReporter(e)}function c(e,a,r){var i={placementName:e,type:"ERROR",reason:a,message:r,date:Date.now()};TRC.HPSwap.Events.sendSwapEvent(i),t(e,"sendError",a,r),n()}function p(){var e=TRC.HPSwap.Config,t={type:"SUCCESS",reason:e.SuccessType.allRecsSwapped,date:Date.now()},a=TRC.HPSwap.Events;a.sendSwapEvent(t),y(e.SuccessType.allRecsSwapped),a.sendHppImpressions(),a.addMessageToStack("general","sendSuccess","success",new Date),n()}function u(e,t,a){var r={type:"WARNING",reason:e,message:t,extraData:a,date:Date.now()};TRC.HPSwap.Events.sendSwapEvent(r),n()}function d(e){TRC.HPSwap.Utils.isDebugMode()&&console.log("%c HP Swap - ".concat(e),"background: #222; color: #bada55")}function m(){var e={type:"placementData",reason:"SUCCESS"},t={type:"SUCCESS",reason:"swapInitialized"};TRC.HPSwap.Events.sendSwapEvent(e),TRC.HPSwap.Events.sendSwapEvent(t)}function g(e){var t={data:JSON.stringify(e),type:"fallback"};setTimeout(function(){TRCImpl.sendEvent("pubs-generic",{d:JSON.stringify(t)},{})},0)}function f(){var e,t,n,a,r,i=(((TRC.HPSwap||{}).swapConfig||{}).events||4).timeout,o=parseInt(i,10)||4,s=TRC.HPSwap.Events;s.timeoutID=setTimeout(function(){s.writeConsole("Impression timeout"),s.sendHppImpressions()},1e3*o)}function w(e,t,n){var a=TRC.HPSwap,r=a.Events,i=a.Utils,o=r.getNewsroomRegionNameByPlacement(e.placement),s={iid:t["item-id"],is:!!t.isSyndicated,it:t.type,rid:o,rin:n,url:t.url,t:t.title,tn:t.thumbnail};r.variant=r.variant||i.getVariantFromResponse(e.trc),r.platform=r.platform||e.trc.getPlatformCode(),r.sourceItemType=r.sourceItemType||TRCImpl.getItemType(),r.hppImpressionsData.push(s)}function S(){var e=TRC.HPSwap.Events;e.hppImpressionsData.length>0&&(window._newsroom=window._newsroom||[],window._newsroom.push({sendHppImpression:{sourceItemType:e.sourceItemType,platform:e.platform,variant:e.variant,hppItems:e.hppImpressionsData}}),e.hppImpressionsData=[],clearTimeout(e.timeoutID))}function C(e){return TRC.HPSwap.Region.getRegionValueByPlacement(e,"newsroom")}function T(e){try{if(this.analyticsSent)return;var t=TRC.HPSwap.swapConfig.ga;if(t&&window.gtag){var n={};n[t.gtagNameId]=e,n.non_interaction=!0,window.gtag("event",t.gtagName,n),this.analyticsSent=!0}if(t&&window.ga&&window.ga.create){var a={};a[t.dimension_id]=e,a.nonInteraction=!0,window.ga("send","event",t.name,e,a),this.analyticsSent=!0}}catch(e){console.error("Error when sending google analytics event:".concat(e))}}function h(e){switch(e){case"swapStarted":return{name:"firstSwapLoad",placement:"firstSwap",eventType:"swapBeforeRecsRequestsTime"};case"firstCardStartSwap":return{name:"firstCardSwapStart",placement:"firsCardSwapStart",eventType:"firstCardStartSwap"};case"firstCardSwapped":return{name:"firstCardSwapLoad",placement:"firsCardSwap",eventType:"firstCardSwapEndTime"};case"firstTimeOutCardSwapped":return{name:"firstTimeOutCardSwapLoad",placement:"firsTimeOutCardSwap",eventType:"firstTimeOutCardSwapEndTime"};case"allItemsSwapped":return{name:"lastSwapLoad",placement:"lastSwap",eventType:"swapEndTime"};case"afterFirstResponse":return{name:"firstResponseLoad",placement:"firstResponse",eventType:"swapAfterFirstResponseTime"};default:return null}}function R(e){if(TRC.performance){var t=h(e),n=TRC.HPSwap.Events.PerformanceMark;t&&!n[t.name]&&(TRC.performance.mark(t.name,null,"",t.placement,t.eventType,TRC.PerfEvenType.MARK),n[t.name]=!0)}}var v={};function P(e,t,n){n&&v[e]||setTimeout(function(){TRC.EventsAPI.dispatchHp4uEvent&&TRC.EventsAPI.dispatchHp4uEvent(t),v[e]=!0},0)}function y(e){var t="object"===_typeof(e)?JSON.stringify(e):e;TRCImpl.sendAbTestEvent&&setTimeout(function(){TRCImpl.sendAbTestEvent("hp4uEvent",t,null,!0)},0)}function E(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i,o,s=(0,TRC.HPSwap.Config.getScript)("hp4u-script-config-".concat(e,"-").concat(TRC.publisherId));return!(!s||"function"!=typeof s)&&(t?(setTimeout(function(){b.apply(void 0,[s,e].concat(a))},0),!0):b.apply(void 0,[s,e].concat(a)))}function b(e,t){var n=TRC.HPSwap.Events;try{for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return e.apply(void 0,r)}catch(e){n.sendError(null,H(t),"failed to run script ".concat(e.message))}}function H(e){var t=TRC.HPSwap.Config,n=t.Hooks,a=t.ErrorType;switch(e){case n.preSwapScript:return a.preSwapScriptFailure;case n.postCardScript:return a.postScriptFailure;case n.preRegionScript:return a.preRegionFailure;default:return null}}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.Events={getClickUrl:r,sendAvailable:i,itemClicked:o,addClickEvent:s,handleIntersection:l,sendError:c,sendWarning:u,sendSuccess:p,writeConsole:d,sendFallbackReport:m,sendSwapEvent:g,sendAbEvent:y,initImpressionTimer:f,pushHppImpressionData:w,sendHppImpressions:S,getNewsroomRegionNameByPlacement:C,sendAnalyticsEvent:T,addPerformanceMark:R,hppImpressionsData:[],analyticsSent:!1,isFirstPlacementRendered:!1,PerformanceMark:{},sendAPIEvent:P,addMessageToStack:t,executeSwapHook:E}}(),function(){var e="taboola_main_section_swap",t="organic-hp-swap-mode",n="swap_debug",a="tbl_force_taboola",r="blur_debug",i="swap_disabled",o;function s(e){return e["last-modified"]?TRC.DateUtils.dateFormatISO(e["last-modified"]):TRC.DateUtils.dateFormatISO(e["published-date"])}function l(e,t){return Array.prototype.slice.call(e.querySelectorAll(t))}function c(){return TRC.HPSwap.swapConfig.container||e}function p(e,t){return e[t]||TRC.HPSwap.Config.DefaultMapping[t]}function u(e,t){var n=TRC.HPSwap.Config.Fields,a=p(e,t);return"object"===_typeof(a)?a[n.selector]:a}function d(){return TRC.HPSwap.swapConfig.mode||t}function m(e){return e.replace(/\| Card \d+$/,"").trim()}function g(e){var t=m(e),n=TRC.HPSwap.swapRegionsConfig,a=Object.keys(n).map(function(e){return n[e]});return n&&a.some(function(e){return t===e.p})}function f(e){return!h(a)&&(!!TRC.opDisabled||e["organic-personalization"]&&e["organic-personalization"].ks)}function w(e,t){if(b()){var n=t||"#2065b8",a=document.createElement("style"),r=".tbl-swap-debug { outline: rgb(0, 114, 185) solid 4px !important; box-shadow: inset 0 0 20px ".concat(n,"; }");a.appendChild(document.createTextNode(r)),document.head.appendChild(a),e.classList.add("tbl-swap-debug")}}function S(e,t,n){e.dataset.itemSwapped="true",e.dataset.tblPlacement=t.placement,e.dataset.tblCategory=t.category,e.dataset.tblItemId=t["item-id"],e.dataset.tblMode=t.mode,e.dataset.tblPublishDate=t["published-date"],e.dataset.tblType=t.itemType,w(e),C(n)}function C(e){var t=TRC.HPSwap,n=t.Events,a=t.SwapDataEventApi,r=a.SWAP_EVENT_FIELDS,i=a.SWAP_EVENT_STATUS;try{if(!e)return;var o=e.regionMap[TRC.HPSwap.Config.Fields.region],s=document.querySelector(o);if(!s)return;var l="".concat(o,' [data-item-swapped="true"]'),c=document.querySelectorAll(l);n.addMessageToStack(e.regionMap.p,"markRegionAsSwapped","regionSwapped swappedItems",c.length),n.addMessageToStack(e.regionMap.p,"markRegionAsSwapped","regionSwapped expectedSwappedCards",e.expectedSwappedCards),a.updatePlacementEventData(e.regionMap.p,r.NUM_ITEMS_SWAPPED,c.length),c.length===e.expectedSwappedCards&&(a.updatePlacementEventStatus(e.regionMap.p,i.EVENT_READY),s.dataset.regionSwapped="true")}catch(e){__trcError("Error when trying to mark region as swapped: ".concat(e.message))}}function T(e){for(var t,n=window.location.search.substring(1).split("&"),a=0;a<n.length;a++){var r=n[a].split("=");if(r[0]===e)return r[1]}}function h(e){var t=T(e);return!(!t||!parseInt(t,10)&&"true"!==t&&"yes"!==t)}function R(e,t){var n=t||TRC.HPSwap.swapConfig,a=e.url;if(!n||!n.url_params)return a;var r=n.url_params;return r.isHash?(a+="#".concat(r.name),r.value&&(a+="=".concat(r.value)),a):a}function v(e,t){var n;if("url"===t.type){var a=document.createElement("a");a.href=e.url;var r=a.pathname.match(/.*\/(.*)\/(.*)$/);r&&(n=r[1])}else"field"===t.type&&t.name&&e[t.name]&&(n=e[t.name]);return n}function P(e,t,n){e.getAttribute(t)&&e.setAttribute(t,n)}function y(e,t){e["item-id"]=t["item-id"],e.video_data=t}function E(e){e&&(e.dataset.tblSwap="true")}function b(){return"DebugMode"in TRC.HPSwap||(TRC.HPSwap.DebugMode=h(n)),TRC.HPSwap.DebugMode}function H(){return h(i)}function I(){return h(r)}function M(e,t){return e&&!_(t)}function _(e){return e&&TRC.HPSwap.Blur.timedOut}function A(e){return e.experimentsVariantIdParamsMap&&e.experimentsVariantIdParamsMap.tvi2}function D(e){!TRC.HPSwap.isSEOTagInjected&&e&&TRC.HPSwap.swapConfig.seo_tag_id&&setTimeout(function(){var t=document.createElement("span");t.style.display="none",t.innerText=TRC.HPSwap.swapConfig.seo_tag_id,e.appendChild(t),TRC.HPSwap.isSEOTagInjected=!0},0)}function O(){var e=TRC.HPSwap,t=e.swapConfig,n=e.Events;if(!t)return!1;if(H())return n.writeConsole("swapped was disabled due to force param"),!1;if(TRC.isAMP||TRC.util.isAmp(TRC))return!1;var a=t.allowed_urls||[],r=window.location.hostname+window.location.pathname;return!(a.length&&-1===a.indexOf(r))}function k(e,t){var n=TRC.HPSwap.Config.ElementType,a=TRC.HPSwap.Events;if(!t)return!1;try{switch(e){case n.Image:var r=!!t.style.backgroundImage||t.dataset.bg;return"IMG"===t.tagName||r;case n.Anchor:return"A"===t.tagName;case n.Picture:return"PICTURE"===t.tagName;default:return!1}}catch(n){a.writeConsole("cannot validate element type [".concat(e,"], element [").concat(t,"]"))}return!1}function N(e){o||(o=document.createElement("a")),o.href=e;var t={};if(""!==o.search)for(var n,a=/\??&?([^=]+)=([^&]+)/gi;n=a.exec(o.search);)t[n[1]]=n[2];return{hash:o.hash,host:o.host,hostname:o.hostname,href:o.href,origin:o.origin,pathname:F(o.pathname),search:t}}function F(e){var t,n;return e.length<=1?"/":"/"!==e[0]?"/".concat(e):e}function x(e){var t;return/^(https?:\/\/)?([a-z0-9.-]+)\.([a-z]{2,})(:[0-9]{1,5})?(\/.*)?$/i.test(e)}TRC.HPSwap=TRC.HPSwap||{},TRC.HPSwap.Utils={dateFormatISO:s,queryItems:l,getContainer:c,getRegionItemMapping:p,getRegionItemSelector:u,getMode:d,getOriginalPlacement:m,isPlacementHasSwap:g,isKillSwitchEnabled:f,markSwappedCardAndRegion:S,getQueryStringParam:T,getRecommendationUrl:R,getDefaultValue:v,setAttributeIfExists:P,setSwappedCardData:y,markAsSwapped:E,isDebugMode:b,isBlurDebugMode:I,isCardSwappable:M,isTimedOutBlurItem:_,getVariantFromResponse:A,injectSEOTag:D,isSwapAllowed:O,validateDomElement:k,markupDebugElement:w,parseUrlParts:N,isValidURL:x}}(),function(){function e(){var e=TRC.HPSwap.Events,t=TRC.HPSwap.Config.Hooks;e.executeSwapHook(t.preSwapScript,!1)}TRC.HPSwap.init=function(e){TRC.HPSwap.globalConfig=e,e?TRC.HPSwap.start():TRC.EventsAPI.listen("trcImplAvailable",function(){return TRC.HPSwap.start()})},TRC.HPSwap.start=function(){try{var t=TRC.HPSwap,n=t.Utils,a=t.Config,r=t.Request;if(!TRC.HPSwap.swapHookStart){var i;if(a.initSwapConfig.call(this),!n.isSwapAllowed())return;if(TRC.HPSwap.swapConfig&&a.isSwapEnabled()){TRC.HPSwap.swapHookStart=!0,TRC.HPSwap.swapRegionsConfig=TRC.HPSwap.swapConfig.regions;var o=n.getQueryStringParam("disableSwap");o&&"false"!==o&&"0"!==o||(e(),r.initSwap())}}}catch(e){__trcError("Error in HPSwap : ".concat(e.message))}}}(),TRC.DynamicModulesHooks=TRC.DynamicModulesHooks||[],TRC.DynamicModulesHooks.push({type:"publisher-start",callback:TRC.HPSwap.init});}catch(e){}
try{/*! 20240122-4-RELEASE */

!function(){var e=function e(t,r){try{var n={};n.container=t.r,n.region=t.p.substring(t.p.indexOf(" ")+1),n.isTaboola=!1;var i=[{listen:"[data-tb-region-item] [data-tb-link]"},{listen:"[data-tb-region-item][data-tb-link]"}];return r&&i.push({listen:r}),n.selectors=i,n.partial=t.partial,n}catch(e){return __trcError("Error in clickTracker handleRegion:".concat(e.message)),{}}},t=function t(r){try{var n,i=(r.platform||["ALL"])[0],c={};c[i]=[];var a=r.regions;if(!a)return;var l=r.ct_selector;return a.forEach(function(t){var r=e(t,l);c[i].push(r)}),c.pageType=r.pageType||["h"],c.allowed_urls=r.allowed_urls,c.ct_selector=r.ct_selector,c.articleParam=r.articleParam,c}catch(e){__trcError("Error in clickTracker handleGlobalConfig:".concat(e.message))}},r=function e(){if(!TRC.clickTrackerApi.config)return null;var r="hp-dynamic-modules-click-tracker-config-".concat(TRC.publisherId),n="hp4u-configuration-".concat(TRC.publisherId),i=TRC.clickTrackerApi.config[n],c;return TRC.clickTrackerApi.config[r]||i&&t(i)},n=function e(t){if(!MutationObserver)return!1;var r=t.pageType;if(r&&r.length&&-1===r.indexOf(TRC.listOrigin.getSource()))return!1;var n=t.allowed_urls||[],i=window.location.hostname+window.location.pathname;return!(n.length&&-1===n.indexOf(i))},i=function e(t,r,n,i){var c={region:t.region,index:n.dataset.tblListenIndex,isTaboola:i};TRCImpl.sendAbTestEvent&&TRCImpl.sendAbTestEvent("fallbackClick",__trcJSONify(c),null,!0)},c=function e(t,r,n,c){t.addEventListener("click",function(e){var t=n.isTaboola,a=!1,l=TRC.clickTrackerConfig.ct_selector||"[data-tb-link]",o=e.target.closest(l);(e.target.hasAttribute("data-tbl-swap")||o&&o.hasAttribute("data-tbl-swap"))&&(t=!0),r&&r.length&&(a=r.some(function(t){return!!TRC.dom.closest(e.target,t)}));var s=TRC.dom.closest(e.target,"[data-tbl-listen-index]");!a&&s&&i(n,c,s,t)},!0)},a=function e(t,r,n,i){for(var a=TRC.clickTrackerConfig.articleParam,l=0;l<t.length;l++){var o=t[l];if(i.last_index>0&&l>0){var s=t[l-1],u,T;TRC.DynamicModulesManager.parseArticleUrl(s.href,a)===TRC.DynamicModulesManager.parseArticleUrl(o.href,a)&&i.last_index--}o.tblListen||(c(o,n,i,r),o.tblListen=!0,o.dataset.tblListenIndex=i.last_index),i.last_index++}},l=function e(t,r){t.selectors&&r&&t.selectors.forEach(function(e){var n=e.listen,i=e.exclude,c="".concat(n,":not([data-tbl-listen-index])"),l=r.querySelectorAll(c);l&&a(l,n,i,t)})},o=function e(t,r){var n,i=function e(t,r){l(t,r)}.bind(null,t,r),c;new MutationObserver(i).observe(r,{childList:!0,subtree:!0})},s=function e(){if(TRC.clickTrackerConfig){var t=TRC.dom.isSmartPhone()?"PHON":"DESK",r=TRC.clickTrackerConfig.ALL?"ALL":t;TRC.clickTrackerConfig[r]&&TRC.clickTrackerConfig[r].forEach(function(e){if(void 0===e.last_index&&(e.last_index=0),e.container){var t=document.querySelector(e.container);t&&(t.dataset.tblClickMutation||(o(e,t),t.dataset.tblClickMutation="true"),l(e,t))}})}},u=function e(){s(),TRC.clickTrackerApi.initEventSent||(TRCImpl.sendAbTestEvent&&TRCImpl.sendAbTestEvent("hp4u-ct","module initialized",null,!0),TRC.clickTrackerApi.initEventSent=!0)},T=function e(){try{if(!TRC.clickTrackerRanOnce){TRC.clickTrackerRanOnce=!0;var t=r();t&&n(t)&&(TRC.clickTrackerConfig=t,TRC.listen("trcResponseHandled",u),s())}}catch(e){__trcError("Error in clickTracker handleClickTracker:".concat(e.message))}},d=function e(t){try{TRC.clickTrackerApi.config=t,window.TRCImpl?T():TRC.EventsAPI.listen("trcImplAvailable",function(){return T()})}catch(e){__trcError("Error in click tracker module initialization: ".concat(e.message))}};TRC.clickTrackerApi={initClickTracker:d},window._trcIsUTactive&&(TRC.clickTrackerApi.unitestsHelpers={handleRegion:e,handleGlobalConfig:t})}(),TRC.DynamicModulesHooks=TRC.DynamicModulesHooks||[],TRC.DynamicModulesHooks.push({type:"publisher-start",callback:TRC.clickTrackerApi.initClickTracker});}catch(e){}}function doNotifications(){}function doNotificationsFirst(){for(;msg=notificationsFirst.shift();)switch(msg.notify){case"newPageLoad":TRC.reset()}}function findScriptBaseDomain(e){for(var t,n=/^(.*\/libtrc\/.+\/)loader\.js(?:\?(.*))?$/,o=0;o<e.length;o++)e[o].src&&(t=e[o].src.match(n))&&(TRC.baseDomain=t[1],TRC.pConsole("page","info","base domain set to : "+TRC.baseDomain))}function realDoNotifications(){for(var e;e=notifications.shift();)switch(e.notify){case"videoPlay":TRC.RBoxUsage.logUsage("realDoNotifications",{position:"videoPlay"}),this.preloadRequestLoader?function(e){TRC.aspect.after(trc,"handleLoadResponse",function(){trc.playVideo(e)},!0)}(e):trc.playVideo(e);break;case"videoDone":TRC.RBoxUsage.logUsage("realDoNotifications",{position:"videoDone"});try{TRC.dispatch("videoDone",e)}catch(e){trc.error("Problem in videoDone",e)}}}function lsplit(e,t,n){var o=e.split(t);return o.slice(0,n-1).concat(o.length>=n?o.slice(n-1).join(t):[])}function getHostName(e){for(var t=[{key:"?",index:0},{key:"://",index:1},{key:"//",index:1},{key:"/",index:0},{key:":",index:0}],n=0,o=t.length,a=e,i;n<o;n++)a=(i=lsplit(a,t[n].key,2)).length>1?i[t[n].index]:i[0];return a}function fetchUserAgentData(e){if(!TRC.isGetHighEntropyValuesCalled)try{TRC.isGetHighEntropyValuesCalled=!0,navigator&&navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(TRC.userAgentDataObject={},navigator.userAgentData.getHighEntropyValues(e||["platformVersion"]).then(function(e){e&&(TRC.userAgentDataObject={mobile:e.mobile,model:e.model,platform:e.platform,platformVersion:e.platformVersion,uaFullVersion:e.uaFullVersion})}))}catch(e){__trcWarn("error on user agent data, ",e)}}function sendLoadRBox(){requestDispatchTimeout=null,trc.loadRBox.apply(trc,requests),requests=[],(doNotifications=realDoNotifications)()}function detectBots(){var e;config.global["enable-detect-bots"]&&(e=new RegExp(config.global["detect-bots-regex"]||"bot|google|baidu|bing|msn|duckduckgo|teoma|slurp|yandex","i"),TRC.botDetected=e.test(navigator.userAgent))}function doRequests(){}function realDoRequests(){return requests.length?flush?(flush=!1,void sendLoadRBox()):(null!=requestDispatchTimeout&&TRC.Timeout.clear(requestDispatchTimeout),void(requestDispatchTimeout=TRC.Timeout.set(sendLoadRBox,trc.trcRequestDelay))):flush=!1}function registerAPIEvents(){var e;for(apiListeners.push=function(e){TRC.EventsAPI.listen(e.listenTo,e.handler)};apiListeners.length;)e=apiListeners.shift(),TRC.EventsAPI.listen(e.listenTo,e.handler)}function doSocials(){}function realDoSocials(){TRC.eventDelegator.subscribe("user_id_ready",handleSocials)}function handleSocials(){try{sendSocials.call(null,socials)}catch(e){TRC.pConsole("errors","error","error in handleSocials",e.message)}}function sendSocials(e){for(var t;t=e.shift();)trc.sendEvent("social",{st:t.name,"unescape-d":encodeURIComponent(__trcJSONify({data:t.val}))},null,!1,null,null)}function checkModeVisibilityConstraints(e,t){var n=!0,o,a;try{e.modes[t]&&(a=e.modes[t]["visibility-constraints"])&&"object"==typeof a&&(o=window.innerWidth||document.body.clientWidth,(a.minWidth&&o<a.minWidth||a.maxWidth&&o>a.maxWidth)&&(n=!1,TRC.pConsole("page","info","Mode '"+t+"' will not be displayed due to visibility constraints",a,"object")))}catch(e){TRC.pConsole("page","error","Error while evaluating visibility constraints of mode '"+t+"': "+e.message)}return n}function setLoaderDomains(){loaderHostName=config.global["use-loader-host"]||config.global["enable-shift-cdn-domains"]?getHostName(TRC.baseDomain):null,loaderDomain=loaderHostName?lsplit(loaderHostName,".",2).pop():null}function chainEventCallbacks(e){if(e)return Array.isArray(e)?function(t){e.forEach(function(e){e(t)})}:"function"==typeof e?e:void 0}function vvReady(){TRC.adManager=new TRC.AdServerManager(config.global["vv-config"],TRC.version),TRC.adManager.startVV().then(function(){TRC.adManager.run()})}function loadImplementation(e){TRC.implInlined?TRC.trcReady&&TRC.trcReady():TRC.implLoaded?TRC.trcReady():implElm||(implElm=TRC.loadTaboolaScript(e),TRC.performance&&TRC.performance.mark("3.0"),TRC.utm.push((new Date).getTime()-TRC.utm.start),TRC.pConsole("page","debug","loading impl file : '"+e+"'"))}function loadVV(){TRC.AdServerManager||(TRC.VVReady=vvReady,TRC.loadTaboolaScript("vv."+TRC.version+".js"))}function loadAssetFile(e,t){if(!TRC.botDetected){var n=doc.getElementsByTagName("script"),o=doc.getElementsByTagName("head"),a=doc.createElement("script");t&&t.async?a.setAttribute("async",""):a.setAttribute("defer",""),t&&t.crossorigin&&a.setAttribute("crossorigin",t.crossorigin),t&&t.id&&(a.id=t.id),a.src=TRC.shiftDomain(e),t&&t.forceInHead&&"head"!==n[0].parentNode.nodeName.toLocaleLowerCase()?o[0].appendChild(a):n[0].parentNode.insertBefore(a,n[0]),TRC.pConsole("page","debug","loading : "+a.src)}}function doGlobals(){if(globalMessages.length){for(var e,t,n,o=TRC.hasES6Support()?".js":".es5.js";e=globalMessages.shift();)for(var a in e)"onclick"==a?queue.onclick=e[a]:globalParams[a]=e[a];loadImplementation(n=TRC.implCustomFile?TRC.implCustomFile+o:(t=getParameterOfWhitelist("taboola_impl_file",["impl","impl.thin"]))?t+"."+TRC.version+o:'impl.'+TRC.version+o)}}function executeMessages(){doNotificationsFirst(),doGlobals(),doRequests(),doNotifications(),doSocials()}function registerToAMP_API(){var e=window.AMP_MODE&&window.AMP_MODE.version?window.AMP_MODE.version:"1";TRC.isAMP=!0,window._taboola.push({additional_data:{sdkd:{os:"AMP",osv:e,sdkt:"Taboola AMP Driver",sdkv:"1"}}}),window._taboola.push({listenTo:"nocontent",handler:function(e){var t=document.querySelector(".trc_rbox_container .trc_rbox_div");t&&t.offsetHeight>10||e.detail.isFeedCard||window.context.noContentAvailable()}}),window.context.observeIntersection(function(e){e.forEach(function(e){window._taboola.push({intersection:!0,rects:e,placement:window.context.data.placement}),TRC.lastVisibleRects?e.time>TRC.lastVisibleRects.time&&(TRC.lastVisibleRects=e):TRC.lastVisibleRects=e})})}function dispatchMessage(e){if("object"==typeof e.overrideConfig&&null!=e.overrideConfig)return TRC.overrideGlobalConfig=e.overrideConfig.global,void mergeObject(config,e.overrideConfig,0);var t,n;extractSubscription(e),updateAmpMessageURL(e),e.cex&&!1!==config.global["cex-enable"]&&(TRC.cexConsentData=e.cex),e.cdns&&!1!==config.global["ccpa-cdns-enable"]&&(TRC.ccpaCdns=e.cdns),e.ccpaPs&&!1!==config.global["ccpa-ps-enable"]&&(TRC.ccpaPs=e.ccpaPs),e.exp&&(TRC.exp=e.exp),e.geo&&(TRC.geo=e.geo),e.opDisabled&&(TRC.opDisabled=!0),e.cseg&&(TRC.cseg=e.cseg),e.pubExperiment&&(TRC.pubExperiment=e.pubExperiment),e.mode?(TRC.pConsole("page","info","push to '_taboola' - mode : "+e.mode,e,"object"),e.framework?(globalMessages.push({framework:e.framework}),"amp"===e.framework&&registerToAMP_API()):config.global["enable-cls-plc-optim"]&&containerExpand(e.placement,e.container),checkModeVisibilityConstraints(config,e.mode)&&requests.push(e)):e.listenTo?e.handler&&"function"==typeof e.handler?apiListeners.push(e):TRC.pConsole("page","warn","events API listening to event without a handler."):e.notify?"newPageLoad"==e.notify?(TRC.pConsole("page","info","push to '_taboola' - notification : newPageLoad"),resetAllMessages(),notificationsFirst.push(e)):notifications.push(e):e.topics_sdk?TRC.topics_sdk=e.topics_sdk:e.name&&-1!==e.name.indexOf("p13n-")?p13ns.push(e):e.name&&-1!==e.name.indexOf("abtests")?abtests.push(e):e.clsfilter?(TRC.CLSEvents=TRC.CLSEvents||[],Array.isArray(e.clsfilter)?e.clsfilter.forEach(function(e){TRC.CLSEvents.push(e)}):TRC.CLSEvents.push(e.clsfilter)):(t=getSocialEvent(e))?socials.push({name:t,val:e[t]}):e.debug?debugs.push(e.debug):(e.intersection||e.visible)&&e.placement?manualVisibles.push({event:"visible::"+e.placement,rects:e.rects}):(n=getParameter("taboolax-load",win.location),(config.global["inject-taboolax"]||n)&&!isTBXInit&&setTBXPageType(e)&&(taboolaXHost=n?taboolaXHosts[n]:taboolaXHost,isTBXInit=!0,injectTaboolaX(taboolaXHost)),e.template&&void 0===TRC.pageTemplate&&(TRC.pageTemplate=e.template),globalMessages.push(e)),e.flush&&(flush=!0)}function doVisibles(e){TRC.dispatch(e.event,e.rects)}function setPush(e,t){var n;for(e.push=t;n=e.shift();)t(n)}function getSocialEvent(e){try{for(var t in e)if(0==t.indexOf("social-")&&e.hasOwnProperty(t))return t}catch(e){}return null}function extractSubscription(e){var t;try{if(!e.onrender)return;TRC.eventDelegator?t=TRC.eventDelegator.subscribe:(TRC.subscriptionRegister=[],t=function(e,t,n,o){TRC.subscriptionRegister.push({event:e,handler:t,container:o})}),t("onrender",e.onrender,e.container?getContainerId(e.container):null)}catch(e){__trcError&&__trcError("extractSubscription",e)}}function updateAmpMessageURL(e){var t=TRC.isAMP&&e.hasOwnProperty("url")&&!!window.context;!config.global["disable-amp-url-override"]&&t&&(e.url=window.context.canonicalUrl+window.context.location.search)}function getParameter(e,t){var n,o,a=t.search.substr(1).split(/&/);for(o=0;o<a.length;o++)if((n=a[o].split(new RegExp("="),2))[0]==e)return n[1];return null}function getParameterOfWhitelist(e,t){for(var n=getParameter(e,win.location),o=0;o<t.length;o++)if(t[o]===n)return n;return null}function getContainerId(e){return"string"==typeof e?e:msg.container.id||"trc_cont_ "+parseInt(1e4*Math.random())}function setTBXPageType(e){var t;for(t in e)if(PAGE_TYPES.hasOwnProperty(t))return win[TBX_PAGE_TYPE_VAR]=PAGE_TYPES[t],PAGE_TYPES[t];return null}function resetAllMessages(){requests=[],globalMessages=[],notifications=[],notificationsFirst=[],socials=[]}function pushMessage(e){if(e){e.placement&&(TRC.performance&&TRC.performance.mark("tbl_push_start",null,e.placement.replace(/ /g,"_"),0,"tblPush",TRC.PerfEvenType.START),TRC.performance&&TRC.performance.mark("tbl_push_stop",null,e.placement.replace(/ /g,"_"),0,"tblPush",TRC.PerfEvenType.STOP)),TRC._taboolaClone.length>50&&(TRC._taboolaClone=[]),TRC._taboolaClone.push(e);for(var t=0;t<arguments.length;t++)if(e=arguments[t],TRC.pConsole("page","debug","push to '_taboola'",e,"object"),e instanceof Array)for(var n=0;n<e.length;n++)dispatchMessage(e[n]);else dispatchMessage(e);return executeMessages(),arguments.length}}function injectDeviceId(){if(!1!==config.global["rbox-detect-device-id"]){var e=(t=document.createElement("a"),function(e){if(!e)return{};var n;t.href=e;for(var o=t.search,a=/\??&?([^=]+)=([^&]+)/gi,i={};n=a.exec(o);)i[n[1]]=n[2];return i}),t,n=function(e){return e instanceof Array?e.filter(n).length>0:!!e.mode&&"amp"===e.framework},o,a=_taboola.filter(n).length>0&&window.context&&i(window.context.referrer)||i(window.__tbMockReferrer||document.referrer);a&&(_taboola.unshift({device:a.deviceId}),TRC.taboolaNews=TRC.taboolaNews||{},TRC.taboolaNews.timeOn=a)}function i(t){var n=e(t),o=n.redir?e(decodeURIComponent(n.redir)):{},a=n["dc_data"]||o["dc_data"];return a&&n["ui"]?{deviceId:n["ui"],dc_data:a}:null}}function setGloablFlags(){TRC.useStorageDetection=!(!config.global||!0!==config.global["use-storage-detection"])}function injectTaboolaX(e){loadAssetFile(e+"/"+TRC.publisherId+"/load.js",{async:!0}),TRC.pConsole("page","info","injected taboola-x with publisher id : "+TRC.publisherId)}function activatePerf(e,t,n){TRC.perfConfOverride&&(t=TRC.perfConfOverride),(n||e&&t&&t.traffic)&&(n||t.traffic>100*Math.random())&&(TRC.performance=new TRC.Performance(t))}function preconnectTo(e){var t=document.createElement("link");t.rel="preconnect",t.href=e,document.head&&document.head.appendChild(t)}function setResourceHints(){if(config.global["enable-resource-hints"])for(var e=0;e<PRECONNECT_DOMAINS.length;e++)preconnectTo(TRC.PROTOCOL+"//"+PRECONNECT_DOMAINS[e])}function getConsentData(){var e=0,t=1,n=2,o=3;if(TRC.consentData={},"function"==typeof __cmp){TRC.consentData.cmpStatus=t;try{__cmp("getConsentData",null,function(t){TRC.consentData.cmpStatus=e,TRC.consentData.gdprApplies=t.gdprApplies,TRC.consentData.consentDaisyBit=t.consentData})}catch(e){TRC.consentData.cmpStatus=n,TRC.pConsole("page","error","getConsentData: Error calling __cmp api for user consent",e.message)}}else TRC.consentData.cmpStatus=o}TRC.pConsole("page","info","from global params : publisher-id was set to - "+globalParams.publisher),win.onerror=function(e,t,n){try{/^https?:\/\/(?:\w+\.)?taboola(syndication)?\.com/.test(t)&&__trcError&&__trcError(e,n+"@"+t)}catch(e){}return originalErrorHandler&&originalErrorHandler.apply(win,Array.prototype.slice.call(arguments))},TRC.reset=function(){TRC.pConsole("page","debug","reset RBox"),requests=[],requestDispatchTimeout=null,isTBXInit=!1,win.taboola_view_id=null,TRC._taboolaClone=[],TRC.pushedRboxTracking=!1,notifications=[],globalParams={publisher:TRC.publisherId='dongacom-mlbpark'},flush=!1,doNotifications=function(){},doRequests=function(){};try{TRC.pageTemplate=void 0,TRC.Timeout.reset(),TRC.Interval.reset(),trc&&win.TRCImpl&&(trc.reset(),win.TRCImpl=trc=null),TRC.eventDelegator&&TRC.eventDelegator.resetEvents()}catch(e){TRC.pConsole("errors","error","error in TRC.reset",e.message)}},TRC.ready=function(e){return config.defaults=e,config.version=TRC.version,config.global["enable-events-api"]&&registerAPIEvents(),setPush(manualVisibles,doVisibles),TRC.pConsole("page","info","configuration version +  : "+config.version),TRC.publisherId=globalParams.publisher,config.global["force-reset-on-ready"]?win.TRCImpl=trc=new TRC.Manager(config,globalParams):win.TRCImpl=trc=trc||new TRC.Manager(config,globalParams),TRC.trcImplAvailableDispatched||(TRC.EventsAPI.dispatchTrcImplAvailable(),TRC.trcImplAvailableDispatched=!0),__trcInfo(window.location.href),TRC.Rtus&&shouldInjectRtus()&&new TRC.Rtus(TRC).applyRtus(),(doRequests=realDoRequests)(),config.global["enable-social-events"]&&(doSocials=realDoSocials)(),trc},TRC.shiftDomain=function(e){if(!config.global["enable-shift-cdn-domains"])return e;var t=e,n,o=config.global["exclude-subd-shift"]||[],a=getHostName(e);return loaderDomain&&e&&(n=lsplit(a,".",2)[1],o.indexOf(a)<0&&n.indexOf("taboola.com")>-1&&(t=e.replace(n,loaderDomain))),t},TRC.loadTaboolaScript=function(e,t,n,o){var a=loaderHostName||"cdn.taboola.com",i=doc.getElementsByTagName("script"),r;r=doc.createElement("script"),TRC.addAnonymousCrossOrigin(r),i.length&&i[0].parentNode.insertBefore(r,i[0]),r.charset="UTF-8",r.type="text/javascript",t&&r.setAttribute("async","async");var s=chainEventCallbacks(n);s&&r.addEventListener("load",s,!1);var l=chainEventCallbacks(o);return o&&r.addEventListener("error",l,!1),r.src=TRC.shiftDomain(protocol+"//"+a+"/libtrc/"+e),r},TRC.addAnonymousCrossOrigin=function(e){var t=config.global["enable-crossorigin-anonymous-attribute"],n;(!0===t||"true"===t||1===t||"1"===t)&&e.setAttribute("crossorigin","anonymous")},detectBots(),config.global["enable-shift-cdn-domains"]&&(findScriptBaseDomain(doc.getElementsByTagName("script")),setLoaderDomains()),TRC.Performance&&(activatePerf(config.global["enable-analytics"],config.global["config-analytics"],getParameter("taboola-force-perf",win.location)),TRC.performance&&TRC.performance.mark("2.0"));var smartEllipsisUrlParam=getParameter("taboola-smart-ellipsis",win.location);smartEllipsisUrlParam&&(config.global["smart-ellipsis"]="yes"===smartEllipsisUrlParam);var ellipsisPerfUrlParam=getParameter("taboola-ellipsis-perf",win.location);function containerExpand(e,t){var n,o,a=config.global["cls-plc-optim-config"];a&&a[e]&&(n=a[e]["vhMulti"]||1,(o=document.getElementById(t))&&(o.style.minHeight=100*n+"vh"))}function mergeObject(e,t,n){if(!(n>10))for(var o in t)if(t.hasOwnProperty(o)){var a=t[o];"object"!=typeof a||Array.isArray(a)&&!config.global["disable-push-array-convert"]?"experimentID"===o&&e[o]?e[o]=e[o]+","+a:e[o]=a:(void 0===e[o]&&(e[o]={}),"object"==typeof e[o]&&mergeObject(e[o],a,++n))}}function doInitialization(){if(setGloablFlags(),injectDeviceId(),TRC.loaderUtils.addOriginTrialMetaTag(config.global["yield-token"]),config.global["enable-shift-cdn-domains"]||(findScriptBaseDomain(doc.getElementsByTagName("script")),setLoaderDomains()),!(queue=win[queueName]).registered){for(queue.push=pushMessage,queue.registered=!0;queue.length;)pushMessage(queue.shift());config.global["load-user-agent-data"]&&fetchUserAgentData(config.global["high-entropy-values-arguments"]),config.global["enable-consent"]||getConsentData(),config.global["enable-visit-value"]&&!config.global["load-vv-early"]&&loadVV()}}function shouldInjectRtus(){try{return config.global["enable-real-time-user-sync-for-all-browsers"]?config.global["enable-real-time-user-sync"]:config.global["enable-real-time-user-sync"]&&(/^((?!chrome|android).)*safari/i.test(navigator.userAgent.toLowerCase())||navigator.userAgent.toLowerCase().indexOf("firefox")>-1||navigator.userAgent.indexOf("Edg")>-1)}catch(e){return!1}}ellipsisPerfUrlParam&&(TRC.ellipsisPerf="yes"===ellipsisPerfUrlParam),TRC.hasTrk&&(TRC.trk.hasRequestEnded&&!TRC.trk.hasRequestEnded(TRC.publisherId)||void 0===TRC.trkRequestStatus)?win.setTimeout(doInitialization,waitForTrkTimeout):(setResourceHints(),doInitialization())}}(window,document);
U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [68] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.68.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.68.woff) format('woff');
	unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [69] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.69.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.69.woff) format('woff');
	unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [70] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.70.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.70.woff) format('woff');
	unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [71] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.71.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.71.woff) format('woff');
	unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [72] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.72.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.72.woff) format('woff');
	unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [73] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.73.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.73.woff) format('woff');
	unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [74] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.74.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.74.woff) format('woff');
	unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [75] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.75.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.75.woff) format('woff');
	unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [76] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.76.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.76.woff) format('woff');
	unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [77] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.77.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.77.woff) format('woff');
	unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [78] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.78.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.78.woff) format('woff');
	unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [79] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.79.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.79.woff) format('woff');
	unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [80] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.80.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.80.woff) format('woff');
	unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [81] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.81.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.81.woff) format('woff');
	unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [82] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.82.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.82.woff) format('woff');
	unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [83] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.83.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.83.woff) format('woff');
	unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [84] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.84.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.84.woff) format('woff');
	unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [85] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.85.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.85.woff) format('woff');
	unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [86] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.86.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.86.woff) format('woff');
	unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [87] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.87.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.87.woff) format('woff');
	unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [88] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.88.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.88.woff) format('woff');
	unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [89] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.89.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.89.woff) format('woff');
	unicode-range: U+d, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [90] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.90.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.90.woff) format('woff');
	unicode-range: U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [91] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 300;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Light.subset.91.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Light.subset.91.woff) format('woff');
	unicode-range: U+20-22, U+27-2a, U+2c-39, U+3a-3b, U+3f, U+41-4e, U+4f-5d, U+61-7b, U+7d, U+a0-a1, U+ab, U+ad-ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* [0] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.0.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.0.woff) format('woff');
	unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
}
/* [1] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.1.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.1.woff) format('woff');
	unicode-range: U+d723-d728, U+d72a-d733, U+d735-d748, U+d74a-d74f, U+d752-d753, U+d755-d757, U+d75a-d75f, U+d762-d764, U+d766-d768, U+d76a-d76b, U+d76d-d76f, U+d771-d787, U+d789-d78b, U+d78d-d78f, U+d791-d797, U+d79a, U+d79c, U+d79e-d7a3, U+f900-f909, U+f90b-f92e;
}
/* [2] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.2.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.2.woff) format('woff');
	unicode-range: U+d679-d68b, U+d68e-d69e, U+d6a0, U+d6a2-d6a7, U+d6a9-d6c3, U+d6c6-d6c7, U+d6c9-d6cb, U+d6cd-d6d3, U+d6d5-d6d6, U+d6d8-d6e3, U+d6e5-d6e7, U+d6e9-d6fb, U+d6fd-d717, U+d719-d71f, U+d721-d722;
}
/* [3] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.3.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.3.woff) format('woff');
	unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
}
/* [4] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.4.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.4.woff) format('woff');
	unicode-range: U+d507, U+d509-d50b, U+d50d-d513, U+d515-d53b, U+d53e-d53f, U+d541-d543, U+d545-d54c, U+d54e, U+d550, U+d552-d557, U+d55a-d55b, U+d55d-d55f, U+d561-d564, U+d566-d567, U+d56a, U+d56c, U+d56e-d573, U+d576-d577, U+d579-d583, U+d585-d586, U+d58a-d5a4, U+d5a6-d5bb;
}
/* [5] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.5.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.5.woff) format('woff');
	unicode-range: U+d464-d477, U+d47a-d47b, U+d47d-d47f, U+d481-d487, U+d489-d48a, U+d48c, U+d48e-d4e7, U+d4e9-d503, U+d505-d506;
}
/* [6] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.6.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.6.woff) format('woff');
	unicode-range: U+d3bf-d3c7, U+d3ca-d3cf, U+d3d1-d3eb, U+d3ee-d3ef, U+d3f1-d3f3, U+d3f5-d3fb, U+d3fd-d400, U+d402-d45b, U+d45d-d463;
}
/* [7] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.7.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.7.woff) format('woff');
	unicode-range: U+d2ff, U+d302-d304, U+d306-d30b, U+d30f, U+d311-d313, U+d315-d31b, U+d31e, U+d322-d324, U+d326-d327, U+d32a-d32b, U+d32d-d32f, U+d331-d337, U+d339-d33c, U+d33e-d37b, U+d37e-d37f, U+d381-d383, U+d385-d38b, U+d38e-d390, U+d392-d397, U+d39a-d39b, U+d39d-d39f, U+d3a1-d3a7, U+d3a9-d3aa, U+d3ac, U+d3ae-d3b3, U+d3b5-d3b7, U+d3b9-d3bb, U+d3bd-d3be;
}
/* [8] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.8.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.8.woff) format('woff');
	unicode-range: U+d257-d27f, U+d281-d29b, U+d29d-d29f, U+d2a1-d2ab, U+d2ad-d2b7, U+d2ba-d2bb, U+d2bd-d2bf, U+d2c1-d2c7, U+d2c9-d2ef, U+d2f2-d2f3, U+d2f5-d2f7, U+d2f9-d2fe;
}
/* [9] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.9.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.9.woff) format('woff');
	unicode-range: U+d1b4, U+d1b6-d1f3, U+d1f5-d22b, U+d22e-d22f, U+d231-d233, U+d235-d23b, U+d23d-d240, U+d242-d256;
}
/* [10] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.10.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.10.woff) format('woff');
	unicode-range: U+d105-d12f, U+d132-d133, U+d135-d137, U+d139-d13f, U+d141-d142, U+d144, U+d146-d14b, U+d14e-d14f, U+d151-d153, U+d155-d15b, U+d15e-d187, U+d189-d19f, U+d1a2-d1a3, U+d1a5-d1a7, U+d1a9-d1af, U+d1b2-d1b3;
}
/* [11] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.11.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.11.woff) format('woff');
	unicode-range: U+d04b-d04f, U+d051-d057, U+d059-d06b, U+d06d-d06f, U+d071-d073, U+d075-d07b, U+d07e-d0a3, U+d0a6-d0a7, U+d0a9-d0ab, U+d0ad-d0b3, U+d0b6, U+d0b8, U+d0ba-d0bf, U+d0c2-d0c3, U+d0c5-d0c7, U+d0c9-d0cf, U+d0d2, U+d0d6-d0db, U+d0de-d0df, U+d0e1-d0e3, U+d0e5-d0eb, U+d0ee-d0f0, U+d0f2-d104;
}
/* [12] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.12.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.12.woff) format('woff');
	unicode-range: U+cfa2-cfc3, U+cfc5-cfdf, U+cfe2-cfe3, U+cfe5-cfe7, U+cfe9-cff4, U+cff6-cffb, U+cffd-cfff, U+d001-d003, U+d005-d017, U+d019-d033, U+d036-d037, U+d039-d03b, U+d03d-d04a;
}
/* [13] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.13.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.13.woff) format('woff');
	unicode-range: U+cef0-cef3, U+cef6, U+cef9-ceff, U+cf01-cf03, U+cf05-cf07, U+cf09-cf0f, U+cf11-cf12, U+cf14-cf1b, U+cf1d-cf1f, U+cf21-cf2f, U+cf31-cf53, U+cf56-cf57, U+cf59-cf5b, U+cf5d-cf63, U+cf66, U+cf68, U+cf6a-cf6f, U+cf71-cf84, U+cf86-cf8b, U+cf8d-cfa1;
}
/* [14] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.14.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.14.woff) format('woff');
	unicode-range: U+ce3c-ce57, U+ce5a-ce5b, U+ce5d-ce5f, U+ce61-ce67, U+ce6a, U+ce6c, U+ce6e-ce73, U+ce76-ce77, U+ce79-ce7b, U+ce7d-ce83, U+ce85-ce88, U+ce8a-ce8f, U+ce91-ce93, U+ce95-ce97, U+ce99-ce9f, U+cea2, U+cea4-ceab, U+cead-cee3, U+cee6-cee7, U+cee9-ceeb, U+ceed-ceef;
}
/* [15] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.15.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.15.woff) format('woff');
	unicode-range: U+cd92-cd93, U+cd96-cd97, U+cd99-cd9b, U+cd9d-cda3, U+cda6-cda8, U+cdaa-cdaf, U+cdb1-cdc3, U+cdc5-cdcb, U+cdcd-cde7, U+cde9-ce03, U+ce05-ce1f, U+ce22-ce34, U+ce36-ce3b;
}
/* [16] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.16.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.16.woff) format('woff');
	unicode-range: U+ccef-cd07, U+cd0a-cd0b, U+cd0d-cd1a, U+cd1c, U+cd1e-cd2b, U+cd2d-cd5b, U+cd5d-cd77, U+cd79-cd91;
}
/* [17] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.17.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.17.woff) format('woff');
	unicode-range: U+cc3f-cc43, U+cc46-cc47, U+cc49-cc4b, U+cc4d-cc53, U+cc55-cc58, U+cc5a-cc5f, U+cc61-cc97, U+cc9a-cc9b, U+cc9d-cc9f, U+cca1-cca7, U+ccaa, U+ccac, U+ccae-ccb3, U+ccb6-ccb7, U+ccb9-ccbb, U+ccbd-cccf, U+ccd1-cce3, U+cce5-ccee;
}
/* [18] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.18.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.18.woff) format('woff');
	unicode-range: U+cb91-cbd3, U+cbd5-cbe3, U+cbe5-cc0b, U+cc0e-cc0f, U+cc11-cc13, U+cc15-cc1b, U+cc1d-cc20, U+cc23-cc27, U+cc2a-cc2b, U+cc2d, U+cc2f, U+cc31-cc37, U+cc3a, U+cc3c;
}
/* [19] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.19.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.19.woff) format('woff');
	unicode-range: U+caf4-cb47, U+cb4a-cb90;
}
/* [20] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.20.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.20.woff) format('woff');
	unicode-range: U+ca4a-ca4b, U+ca4e-ca4f, U+ca51-ca53, U+ca55-ca5b, U+ca5d-ca60, U+ca62-ca83, U+ca85-cabb, U+cabe-cabf, U+cac1-cac3, U+cac5-cacb, U+cacd-cad0, U+cad2, U+cad4-cad8, U+cada-caf3;
}
/* [21] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.21.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.21.woff) format('woff');
	unicode-range: U+c996-c997, U+c99a-c99c, U+c99e-c9bf, U+c9c2-c9c3, U+c9c5-c9c7, U+c9c9-c9cf, U+c9d2, U+c9d4, U+c9d7-c9d8, U+c9db, U+c9de-c9df, U+c9e1-c9e3, U+c9e5-c9e6, U+c9e8-c9eb, U+c9ee-c9f0, U+c9f2-c9f7, U+c9f9-ca0b, U+ca0d-ca28, U+ca2a-ca49;
}
/* [22] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.22.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.22.woff) format('woff');
	unicode-range: U+c8e9-c8f4, U+c8f6-c8fb, U+c8fe-c8ff, U+c901-c903, U+c905-c90b, U+c90e-c910, U+c912-c917, U+c919-c92b, U+c92d-c94f, U+c951-c953, U+c955-c96b, U+c96d-c973, U+c975-c987, U+c98a-c98b, U+c98d-c98f, U+c991-c995;
}
/* [23] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.23.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.23.woff) format('woff');
	unicode-range: U+c841-c84b, U+c84d-c86f, U+c872-c873, U+c875-c877, U+c879-c87f, U+c882-c884, U+c887-c88a, U+c88d-c8c3, U+c8c5-c8df, U+c8e1-c8e8;
}
/* [24] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.24.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.24.woff) format('woff');
	unicode-range: U+c779-c77b, U+c77e-c782, U+c786, U+c78b, U+c78d, U+c78f, U+c792-c793, U+c795, U+c797, U+c799-c79f, U+c7a2, U+c7a7-c7ab, U+c7ae-c7bb, U+c7bd-c7c0, U+c7c2-c7c7, U+c7c9-c7dc, U+c7de-c7ff, U+c802-c803, U+c805-c807, U+c809, U+c80b-c80f, U+c812, U+c814, U+c817-c81b, U+c81e-c81f, U+c821-c823, U+c825-c82e, U+c830-c837, U+c839-c83b, U+c83d-c840;
}
/* [25] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.25.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.25.woff) format('woff');
	unicode-range: U+c6bb-c6bf, U+c6c2, U+c6c4, U+c6c6-c6cb, U+c6ce-c6cf, U+c6d1-c6d3, U+c6d5-c6db, U+c6dd-c6df, U+c6e1-c6e7, U+c6e9-c6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [26] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.26.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.26.woff) format('woff');
	unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [27] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.27.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.27.woff) format('woff');
	unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [28] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.28.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.28.woff) format('woff');
	unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [29] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.29.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.29.woff) format('woff');
	unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [30] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.30.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.30.woff) format('woff');
	unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [31] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.31.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.31.woff) format('woff');
	unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [32] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.32.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.32.woff) format('woff');
	unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [33] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.33.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.33.woff) format('woff');
	unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [34] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.34.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.34.woff) format('woff');
	unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [35] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.35.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.35.woff) format('woff');
	unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [36] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.36.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.36.woff) format('woff');
	unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [37] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.37.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.37.woff) format('woff');
	unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [38] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.38.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.38.woff) format('woff');
	unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [39] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.39.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.39.woff) format('woff');
	unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [40] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.40.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.40.woff) format('woff');
	unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [41] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.41.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.41.woff) format('woff');
	unicode-range: U+bb90-bba3, U+bba5-bbab, U+bbad-bbbf, U+bbc1-bbf7, U+bbfa-bbfb, U+bbfd-bbfe, U+bc01-bc07, U+bc09-bc0a, U+bc0e, U+bc10, U+bc12-bc13, U+bc17, U+bc19-bc1a, U+bc1e, U+bc20-bc23, U+bc26, U+bc28, U+bc2a-bc2c, U+bc2e-bc2f, U+bc32-bc33, U+bc35-bc37, U+bc39-bc3f, U+bc41-bc42, U+bc44, U+bc46-bc48, U+bc4a-bc4d;
}
/* [42] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.42.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.42.woff) format('woff');
	unicode-range: U+bae6-bafb, U+bafd-bb17, U+bb19-bb33, U+bb37, U+bb39-bb3a, U+bb3d-bb43, U+bb45-bb46, U+bb48, U+bb4a-bb4f, U+bb51-bb53, U+bb55-bb57, U+bb59-bb62, U+bb64-bb8f;
}
/* [43] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.43.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.43.woff) format('woff');
	unicode-range: U+ba30-ba37, U+ba3a-ba3b, U+ba3d-ba3f, U+ba41-ba47, U+ba49-ba4a, U+ba4c, U+ba4e-ba53, U+ba56-ba57, U+ba59-ba5b, U+ba5d-ba63, U+ba65-ba66, U+ba68-ba6f, U+ba71-ba73, U+ba75-ba77, U+ba79-ba84, U+ba86, U+ba88-baa7, U+baaa, U+baad-baaf, U+bab1-bab7, U+baba, U+babc, U+babe-bae5;
}
/* [44] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.44.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.44.woff) format('woff');
	unicode-range: U+b96e-b973, U+b976-b977, U+b979-b97b, U+b97d-b983, U+b986, U+b988, U+b98a-b98d, U+b98f-b9ab, U+b9ae-b9af, U+b9b1-b9b3, U+b9b5-b9bb, U+b9be, U+b9c0, U+b9c2-b9c7, U+b9ca-b9cb, U+b9cd, U+b9d2-b9d7, U+b9da, U+b9dc, U+b9df-b9e0, U+b9e2, U+b9e6-b9e7, U+b9e9-b9f3, U+b9f6, U+b9f8, U+b9fb-ba2f;
}
/* [45] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.45.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.45.woff) format('woff');
	unicode-range: U+b8bf-b8cb, U+b8cd-b8e0, U+b8e2-b8e7, U+b8ea-b8eb, U+b8ed-b8ef, U+b8f1-b8f7, U+b8fa, U+b8fc, U+b8fe-b903, U+b905-b917, U+b919-b91f, U+b921-b93b, U+b93d-b957, U+b95a-b95b, U+b95d-b95f, U+b961-b967, U+b969-b96c;
}
/* [46] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.46.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.46.woff) format('woff');
	unicode-range: U+b80d-b80f, U+b811-b817, U+b81a, U+b81c-b823, U+b826-b827, U+b829-b82b, U+b82d-b833, U+b836, U+b83a-b83f, U+b841-b85b, U+b85e-b85f, U+b861-b863, U+b865-b86b, U+b86e, U+b870, U+b872-b8af, U+b8b1-b8be;
}
/* [47] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.47.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.47.woff) format('woff');
	unicode-range: U+b74d-b75f, U+b761-b763, U+b765-b774, U+b776-b77b, U+b77e-b77f, U+b781-b783, U+b785-b78b, U+b78e, U+b792-b796, U+b79a-b79b, U+b79d-b7a7, U+b7aa, U+b7ae-b7b3, U+b7b6-b7c8, U+b7ca-b7eb, U+b7ee-b7ef, U+b7f1-b7f3, U+b7f5-b7fb, U+b7fe, U+b802-b806, U+b80a-b80b;
}
/* [48] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.48.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.48.woff) format('woff');
	unicode-range: U+b6a7-b6aa, U+b6ac-b6b0, U+b6b2-b6ef, U+b6f1-b727, U+b72a-b72b, U+b72d-b72e, U+b731-b737, U+b739-b73a, U+b73c-b743, U+b745-b74c;
}
/* [49] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.49.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.49.woff) format('woff');
	unicode-range: U+b605-b60f, U+b612-b617, U+b619-b624, U+b626-b69b, U+b69e-b6a3, U+b6a5-b6a6;
}
/* [50] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.50.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.50.woff) format('woff');
	unicode-range: U+b55f, U+b562-b583, U+b585-b59f, U+b5a2-b5a3, U+b5a5-b5a7, U+b5a9-b5b2, U+b5b5-b5ba, U+b5bd-b604;
}
/* [51] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.51.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.51.woff) format('woff');
	unicode-range: U+b4a5-b4b6, U+b4b8-b4bf, U+b4c1-b4c7, U+b4c9-b4db, U+b4de-b4df, U+b4e1-b4e2, U+b4e5-b4eb, U+b4ee, U+b4f0, U+b4f2-b513, U+b516-b517, U+b519-b51a, U+b51d-b523, U+b526, U+b528, U+b52b-b52f, U+b532-b533, U+b535-b537, U+b539-b53f, U+b541-b544, U+b546-b54b, U+b54d-b54f, U+b551-b55b, U+b55d-b55e;
}
/* [52] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.52.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.52.woff) format('woff');
	unicode-range: U+b3f8-b3fb, U+b3fd-b40f, U+b411-b417, U+b419-b41b, U+b41d-b41f, U+b421-b427, U+b42a-b42b, U+b42d-b44f, U+b452-b453, U+b455-b457, U+b459-b45f, U+b462-b464, U+b466-b46b, U+b46d-b47f, U+b481-b4a3;
}
/* [53] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.53.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.53.woff) format('woff');
	unicode-range: U+b342-b353, U+b356-b357, U+b359-b35b, U+b35d-b35e, U+b360-b363, U+b366, U+b368, U+b36a-b36d, U+b36f, U+b372-b373, U+b375-b377, U+b379-b37f, U+b381-b382, U+b384, U+b386-b38b, U+b38d-b3c3, U+b3c6-b3c7, U+b3c9-b3ca, U+b3cd-b3d3, U+b3d6, U+b3d8, U+b3da-b3f7;
}
/* [54] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.54.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.54.woff) format('woff');
	unicode-range: U+b27c-b283, U+b285-b28f, U+b292-b293, U+b295-b297, U+b29a-b29f, U+b2a1-b2a4, U+b2a7-b2a9, U+b2ab, U+b2ad-b2c7, U+b2ca-b2cb, U+b2cd-b2cf, U+b2d1-b2d7, U+b2da, U+b2dc, U+b2de-b2e3, U+b2e7, U+b2e9-b2ea, U+b2ef-b2f3, U+b2f6, U+b2f8, U+b2fa-b2fb, U+b2fd-b2fe, U+b302-b303, U+b305-b307, U+b309-b30f, U+b312, U+b316-b31b, U+b31d-b341;
}
/* [55] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.55.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.55.woff) format('woff');
	unicode-range: U+b1d6-b1e7, U+b1e9-b1fc, U+b1fe-b203, U+b206-b207, U+b209-b20b, U+b20d-b213, U+b216-b21f, U+b221-b257, U+b259-b273, U+b275-b27b;
}
/* [56] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.56.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.56.woff) format('woff');
	unicode-range: U+b120-b122, U+b126-b127, U+b129-b12b, U+b12d-b133, U+b136, U+b138, U+b13a-b13f, U+b142-b143, U+b145-b14f, U+b151-b153, U+b156-b157, U+b159-b177, U+b17a-b17b, U+b17d-b17f, U+b181-b187, U+b189-b18c, U+b18e-b191, U+b195-b1a7, U+b1a9-b1cb, U+b1cd-b1d5;
}
/* [57] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.57.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.57.woff) format('woff');
	unicode-range: U+b05f-b07b, U+b07e-b07f, U+b081-b083, U+b085-b08b, U+b08d-b097, U+b09b, U+b09d-b09f, U+b0a2-b0a7, U+b0aa, U+b0b0, U+b0b2, U+b0b6-b0b7, U+b0b9-b0bb, U+b0bd-b0c3, U+b0c6-b0c7, U+b0ca-b0cf, U+b0d1-b0df, U+b0e1-b0e4, U+b0e6-b107, U+b10a-b10b, U+b10d-b10f, U+b111-b112, U+b114-b117, U+b119-b11a, U+b11c-b11f;
}
/* [58] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.58.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.58.woff) format('woff');
	unicode-range: U+afac-afb7, U+afba-afbb, U+afbd-afbf, U+afc1-afc6, U+afca-afcc, U+afce-afd3, U+afd5-afe7, U+afe9-afef, U+aff1-b00b, U+b00d-b00f, U+b011-b013, U+b015-b01b, U+b01d-b027, U+b029-b043, U+b045-b047, U+b049, U+b04b, U+b04d-b052, U+b055-b056, U+b058-b05c, U+b05e;
}
/* [59] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.59.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.59.woff) format('woff');
	unicode-range: U+af03-af07, U+af09-af2b, U+af2e-af33, U+af35-af3b, U+af3e-af40, U+af44-af47, U+af4a-af5c, U+af5e-af63, U+af65-af7f, U+af81-afab;
}
/* [60] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.60.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.60.woff) format('woff');
	unicode-range: U+ae56-ae5b, U+ae5e-ae60, U+ae62-ae64, U+ae66-ae67, U+ae69-ae6b, U+ae6d-ae83, U+ae85-aebb, U+aebf, U+aec1-aec3, U+aec5-aecb, U+aece, U+aed0, U+aed2-aed7, U+aed9-aef3, U+aef5-af02;
}
/* [61] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.61.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.61.woff) format('woff');
	unicode-range: U+ad9c-ada3, U+ada5-adbf, U+adc1-adc3, U+adc5-adc7, U+adc9-add2, U+add4-addb, U+addd-addf, U+ade1-ade3, U+ade5-adf7, U+adfa-adfb, U+adfd-adff, U+ae02-ae07, U+ae0a, U+ae0c, U+ae0e-ae13, U+ae15-ae2f, U+ae31-ae33, U+ae35-ae37, U+ae39-ae3f, U+ae42, U+ae44, U+ae46-ae49, U+ae4b, U+ae4f, U+ae51-ae53, U+ae55;
}
/* [62] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.62.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.62.woff) format('woff');
	unicode-range: U+ace2-ace3, U+ace5-ace6, U+ace9-acef, U+acf2, U+acf4, U+acf7-acfb, U+acfe-acff, U+ad01-ad03, U+ad05-ad0b, U+ad0d-ad10, U+ad12-ad1b, U+ad1d-ad33, U+ad35-ad48, U+ad4a-ad4f, U+ad51-ad6b, U+ad6e-ad6f, U+ad71-ad72, U+ad77-ad7c, U+ad7e, U+ad80, U+ad82-ad87, U+ad89-ad8b, U+ad8d-ad8f, U+ad91-ad9b;
}
/* [63] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.63.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.63.woff) format('woff');
	unicode-range: U+ac25-ac2c, U+ac2e, U+ac30, U+ac32-ac37, U+ac39-ac3f, U+ac41-ac4c, U+ac4e-ac6f, U+ac72-ac73, U+ac75-ac76, U+ac79-ac7f, U+ac82, U+ac84-ac88, U+ac8a-ac8b, U+ac8d-ac8f, U+ac91-ac93, U+ac95-ac9b, U+ac9d-ac9e, U+aca1-aca7, U+acab, U+acad-acaf, U+acb1-acb7, U+acba-acbb, U+acbe-acc0, U+acc2-acc3, U+acc5-acdf;
}
/* [64] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.64.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.64.woff) format('woff');
	unicode-range: U+99df, U+99ed, U+99f1, U+99ff, U+9a01, U+9a08, U+9a0e-9a0f, U+9a19, U+9a2b, U+9a30, U+9a36-9a37, U+9a40, U+9a43, U+9a45, U+9a4d, U+9a55, U+9a57, U+9a5a-9a5b, U+9a5f, U+9a62, U+9a65, U+9a69-9a6a, U+9aa8, U+9ab8, U+9ad3, U+9ae5, U+9aee, U+9b1a, U+9b27, U+9b2a, U+9b31, U+9b3c, U+9b41-9b45, U+9b4f, U+9b54, U+9b5a, U+9b6f, U+9b8e, U+9b91, U+9b9f, U+9bab, U+9bae, U+9bc9, U+9bd6, U+9be4, U+9be8, U+9c0d, U+9c10, U+9c12, U+9c15, U+9c25, U+9c32, U+9c3b, U+9c47, U+9c49, U+9c57, U+9ce5, U+9ce7, U+9ce9, U+9cf3-9cf4, U+9cf6, U+9d09, U+9d1b, U+9d26, U+9d28, U+9d3b, U+9d51, U+9d5d, U+9d60-9d61, U+9d6c, U+9d72, U+9da9, U+9daf, U+9db4, U+9dc4, U+9dd7, U+9df2, U+9df8-9dfa, U+9e1a, U+9e1e, U+9e75, U+9e79, U+9e7d, U+9e7f, U+9e92-9e93, U+9e97, U+9e9d, U+9e9f, U+9ea5, U+9eb4-9eb5, U+9ebb, U+9ebe, U+9ec3, U+9ecd-9ece, U+9ed4, U+9ed8, U+9edb-9edc, U+9ede, U+9ee8, U+9ef4, U+9f07-9f08, U+9f0e, U+9f13, U+9f20, U+9f3b, U+9f4a-9f4b, U+9f4e, U+9f52, U+9f5f, U+9f61, U+9f67, U+9f6a, U+9f6c, U+9f77, U+9f8d, U+9f90, U+9f95, U+9f9c, U+ac02-ac03, U+ac05-ac06, U+ac09-ac0f, U+ac17-ac18, U+ac1b, U+ac1e-ac1f, U+ac21-ac23;
}
/* [65] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.65.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.65.woff) format('woff');
	unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [66] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.66.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.66.woff) format('woff');
	unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [67] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.67.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.67.woff) format('woff');
	unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [68] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.68.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.68.woff) format('woff');
	unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [69] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.69.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.69.woff) format('woff');
	unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [70] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.70.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.70.woff) format('woff');
	unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [71] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.71.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.71.woff) format('woff');
	unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [72] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.72.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.72.woff) format('woff');
	unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [73] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.73.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.73.woff) format('woff');
	unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [74] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.74.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.74.woff) format('woff');
	unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [75] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.75.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.75.woff) format('woff');
	unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [76] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.76.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.76.woff) format('woff');
	unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [77] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.77.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.77.woff) format('woff');
	unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [78] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.78.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.78.woff) format('woff');
	unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [79] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.79.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.79.woff) format('woff');
	unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [80] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.80.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.80.woff) format('woff');
	unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [81] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.81.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.81.woff) format('woff');
	unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [82] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.82.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.82.woff) format('woff');
	unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [83] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.83.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.83.woff) format('woff');
	unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [84] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.84.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.84.woff) format('woff');
	unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [85] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.85.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.85.woff) format('woff');
	unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [86] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.86.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.86.woff) format('woff');
	unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [87] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.87.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.87.woff) format('woff');
	unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [88] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.88.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.88.woff) format('woff');
	unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [89] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.89.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.89.woff) format('woff');
	unicode-range: U+d, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [90] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.90.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.90.woff) format('woff');
	unicode-range: U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [91] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Regular.subset.91.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Regular.subset.91.woff) format('woff');
	unicode-range: U+20-22, U+27-2a, U+2c-39, U+3a-3b, U+3f, U+41-4e, U+4f-5d, U+61-7b, U+7d, U+a0-a1, U+ab, U+ad-ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* [0] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.0.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.0.woff) format('woff');
	unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
}
/* [1] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.1.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.1.woff) format('woff');
	unicode-range: U+d723-d728, U+d72a-d733, U+d735-d748, U+d74a-d74f, U+d752-d753, U+d755-d757, U+d75a-d75f, U+d762-d764, U+d766-d768, U+d76a-d76b, U+d76d-d76f, U+d771-d787, U+d789-d78b, U+d78d-d78f, U+d791-d797, U+d79a, U+d79c, U+d79e-d7a3, U+f900-f909, U+f90b-f92e;
}
/* [2] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.2.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.2.woff) format('woff');
	unicode-range: U+d679-d68b, U+d68e-d69e, U+d6a0, U+d6a2-d6a7, U+d6a9-d6c3, U+d6c6-d6c7, U+d6c9-d6cb, U+d6cd-d6d3, U+d6d5-d6d6, U+d6d8-d6e3, U+d6e5-d6e7, U+d6e9-d6fb, U+d6fd-d717, U+d719-d71f, U+d721-d722;
}
/* [3] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.3.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.3.woff) format('woff');
	unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
}
/* [4] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.4.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.4.woff) format('woff');
	unicode-range: U+d507, U+d509-d50b, U+d50d-d513, U+d515-d53b, U+d53e-d53f, U+d541-d543, U+d545-d54c, U+d54e, U+d550, U+d552-d557, U+d55a-d55b, U+d55d-d55f, U+d561-d564, U+d566-d567, U+d56a, U+d56c, U+d56e-d573, U+d576-d577, U+d579-d583, U+d585-d586, U+d58a-d5a4, U+d5a6-d5bb;
}
/* [5] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.5.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.5.woff) format('woff');
	unicode-range: U+d464-d477, U+d47a-d47b, U+d47d-d47f, U+d481-d487, U+d489-d48a, U+d48c, U+d48e-d4e7, U+d4e9-d503, U+d505-d506;
}
/* [6] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.6.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.6.woff) format('woff');
	unicode-range: U+d3bf-d3c7, U+d3ca-d3cf, U+d3d1-d3eb, U+d3ee-d3ef, U+d3f1-d3f3, U+d3f5-d3fb, U+d3fd-d400, U+d402-d45b, U+d45d-d463;
}
/* [7] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.7.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.7.woff) format('woff');
	unicode-range: U+d2ff, U+d302-d304, U+d306-d30b, U+d30f, U+d311-d313, U+d315-d31b, U+d31e, U+d322-d324, U+d326-d327, U+d32a-d32b, U+d32d-d32f, U+d331-d337, U+d339-d33c, U+d33e-d37b, U+d37e-d37f, U+d381-d383, U+d385-d38b, U+d38e-d390, U+d392-d397, U+d39a-d39b, U+d39d-d39f, U+d3a1-d3a7, U+d3a9-d3aa, U+d3ac, U+d3ae-d3b3, U+d3b5-d3b7, U+d3b9-d3bb, U+d3bd-d3be;
}
/* [8] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.8.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.8.woff) format('woff');
	unicode-range: U+d257-d27f, U+d281-d29b, U+d29d-d29f, U+d2a1-d2ab, U+d2ad-d2b7, U+d2ba-d2bb, U+d2bd-d2bf, U+d2c1-d2c7, U+d2c9-d2ef, U+d2f2-d2f3, U+d2f5-d2f7, U+d2f9-d2fe;
}
/* [9] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.9.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.9.woff) format('woff');
	unicode-range: U+d1b4, U+d1b6-d1f3, U+d1f5-d22b, U+d22e-d22f, U+d231-d233, U+d235-d23b, U+d23d-d240, U+d242-d256;
}
/* [10] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.10.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.10.woff) format('woff');
	unicode-range: U+d105-d12f, U+d132-d133, U+d135-d137, U+d139-d13f, U+d141-d142, U+d144, U+d146-d14b, U+d14e-d14f, U+d151-d153, U+d155-d15b, U+d15e-d187, U+d189-d19f, U+d1a2-d1a3, U+d1a5-d1a7, U+d1a9-d1af, U+d1b2-d1b3;
}
/* [11] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.11.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.11.woff) format('woff');
	unicode-range: U+d04b-d04f, U+d051-d057, U+d059-d06b, U+d06d-d06f, U+d071-d073, U+d075-d07b, U+d07e-d0a3, U+d0a6-d0a7, U+d0a9-d0ab, U+d0ad-d0b3, U+d0b6, U+d0b8, U+d0ba-d0bf, U+d0c2-d0c3, U+d0c5-d0c7, U+d0c9-d0cf, U+d0d2, U+d0d6-d0db, U+d0de-d0df, U+d0e1-d0e3, U+d0e5-d0eb, U+d0ee-d0f0, U+d0f2-d104;
}
/* [12] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.12.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.12.woff) format('woff');
	unicode-range: U+cfa2-cfc3, U+cfc5-cfdf, U+cfe2-cfe3, U+cfe5-cfe7, U+cfe9-cff4, U+cff6-cffb, U+cffd-cfff, U+d001-d003, U+d005-d017, U+d019-d033, U+d036-d037, U+d039-d03b, U+d03d-d04a;
}
/* [13] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.13.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.13.woff) format('woff');
	unicode-range: U+cef0-cef3, U+cef6, U+cef9-ceff, U+cf01-cf03, U+cf05-cf07, U+cf09-cf0f, U+cf11-cf12, U+cf14-cf1b, U+cf1d-cf1f, U+cf21-cf2f, U+cf31-cf53, U+cf56-cf57, U+cf59-cf5b, U+cf5d-cf63, U+cf66, U+cf68, U+cf6a-cf6f, U+cf71-cf84, U+cf86-cf8b, U+cf8d-cfa1;
}
/* [14] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.14.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.14.woff) format('woff');
	unicode-range: U+ce3c-ce57, U+ce5a-ce5b, U+ce5d-ce5f, U+ce61-ce67, U+ce6a, U+ce6c, U+ce6e-ce73, U+ce76-ce77, U+ce79-ce7b, U+ce7d-ce83, U+ce85-ce88, U+ce8a-ce8f, U+ce91-ce93, U+ce95-ce97, U+ce99-ce9f, U+cea2, U+cea4-ceab, U+cead-cee3, U+cee6-cee7, U+cee9-ceeb, U+ceed-ceef;
}
/* [15] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.15.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.15.woff) format('woff');
	unicode-range: U+cd92-cd93, U+cd96-cd97, U+cd99-cd9b, U+cd9d-cda3, U+cda6-cda8, U+cdaa-cdaf, U+cdb1-cdc3, U+cdc5-cdcb, U+cdcd-cde7, U+cde9-ce03, U+ce05-ce1f, U+ce22-ce34, U+ce36-ce3b;
}
/* [16] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.16.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.16.woff) format('woff');
	unicode-range: U+ccef-cd07, U+cd0a-cd0b, U+cd0d-cd1a, U+cd1c, U+cd1e-cd2b, U+cd2d-cd5b, U+cd5d-cd77, U+cd79-cd91;
}
/* [17] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.17.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.17.woff) format('woff');
	unicode-range: U+cc3f-cc43, U+cc46-cc47, U+cc49-cc4b, U+cc4d-cc53, U+cc55-cc58, U+cc5a-cc5f, U+cc61-cc97, U+cc9a-cc9b, U+cc9d-cc9f, U+cca1-cca7, U+ccaa, U+ccac, U+ccae-ccb3, U+ccb6-ccb7, U+ccb9-ccbb, U+ccbd-cccf, U+ccd1-cce3, U+cce5-ccee;
}
/* [18] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.18.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.18.woff) format('woff');
	unicode-range: U+cb91-cbd3, U+cbd5-cbe3, U+cbe5-cc0b, U+cc0e-cc0f, U+cc11-cc13, U+cc15-cc1b, U+cc1d-cc20, U+cc23-cc27, U+cc2a-cc2b, U+cc2d, U+cc2f, U+cc31-cc37, U+cc3a, U+cc3c;
}
/* [19] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.19.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.19.woff) format('woff');
	unicode-range: U+caf4-cb47, U+cb4a-cb90;
}
/* [20] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.20.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.20.woff) format('woff');
	unicode-range: U+ca4a-ca4b, U+ca4e-ca4f, U+ca51-ca53, U+ca55-ca5b, U+ca5d-ca60, U+ca62-ca83, U+ca85-cabb, U+cabe-cabf, U+cac1-cac3, U+cac5-cacb, U+cacd-cad0, U+cad2, U+cad4-cad8, U+cada-caf3;
}
/* [21] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.21.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.21.woff) format('woff');
	unicode-range: U+c996-c997, U+c99a-c99c, U+c99e-c9bf, U+c9c2-c9c3, U+c9c5-c9c7, U+c9c9-c9cf, U+c9d2, U+c9d4, U+c9d7-c9d8, U+c9db, U+c9de-c9df, U+c9e1-c9e3, U+c9e5-c9e6, U+c9e8-c9eb, U+c9ee-c9f0, U+c9f2-c9f7, U+c9f9-ca0b, U+ca0d-ca28, U+ca2a-ca49;
}
/* [22] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.22.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.22.woff) format('woff');
	unicode-range: U+c8e9-c8f4, U+c8f6-c8fb, U+c8fe-c8ff, U+c901-c903, U+c905-c90b, U+c90e-c910, U+c912-c917, U+c919-c92b, U+c92d-c94f, U+c951-c953, U+c955-c96b, U+c96d-c973, U+c975-c987, U+c98a-c98b, U+c98d-c98f, U+c991-c995;
}
/* [23] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.23.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.23.woff) format('woff');
	unicode-range: U+c841-c84b, U+c84d-c86f, U+c872-c873, U+c875-c877, U+c879-c87f, U+c882-c884, U+c887-c88a, U+c88d-c8c3, U+c8c5-c8df, U+c8e1-c8e8;
}
/* [24] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.24.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.24.woff) format('woff');
	unicode-range: U+c779-c77b, U+c77e-c782, U+c786, U+c78b, U+c78d, U+c78f, U+c792-c793, U+c795, U+c797, U+c799-c79f, U+c7a2, U+c7a7-c7ab, U+c7ae-c7bb, U+c7bd-c7c0, U+c7c2-c7c7, U+c7c9-c7dc, U+c7de-c7ff, U+c802-c803, U+c805-c807, U+c809, U+c80b-c80f, U+c812, U+c814, U+c817-c81b, U+c81e-c81f, U+c821-c823, U+c825-c82e, U+c830-c837, U+c839-c83b, U+c83d-c840;
}
/* [25] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.25.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.25.woff) format('woff');
	unicode-range: U+c6bb-c6bf, U+c6c2, U+c6c4, U+c6c6-c6cb, U+c6ce-c6cf, U+c6d1-c6d3, U+c6d5-c6db, U+c6dd-c6df, U+c6e1-c6e7, U+c6e9-c6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [26] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.26.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.26.woff) format('woff');
	unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [27] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.27.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.27.woff) format('woff');
	unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [28] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.28.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.28.woff) format('woff');
	unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [29] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.29.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.29.woff) format('woff');
	unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [30] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.30.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.30.woff) format('woff');
	unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [31] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.31.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.31.woff) format('woff');
	unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [32] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.32.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.32.woff) format('woff');
	unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [33] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.33.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.33.woff) format('woff');
	unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [34] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.34.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.34.woff) format('woff');
	unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [35] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.35.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.35.woff) format('woff');
	unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [36] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.36.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.36.woff) format('woff');
	unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [37] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.37.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.37.woff) format('woff');
	unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [38] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.38.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.38.woff) format('woff');
	unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [39] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.39.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.39.woff) format('woff');
	unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [40] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.40.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.40.woff) format('woff');
	unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [41] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.41.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.41.woff) format('woff');
	unicode-range: U+bb90-bba3, U+bba5-bbab, U+bbad-bbbf, U+bbc1-bbf7, U+bbfa-bbfb, U+bbfd-bbfe, U+bc01-bc07, U+bc09-bc0a, U+bc0e, U+bc10, U+bc12-bc13, U+bc17, U+bc19-bc1a, U+bc1e, U+bc20-bc23, U+bc26, U+bc28, U+bc2a-bc2c, U+bc2e-bc2f, U+bc32-bc33, U+bc35-bc37, U+bc39-bc3f, U+bc41-bc42, U+bc44, U+bc46-bc48, U+bc4a-bc4d;
}
/* [42] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.42.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.42.woff) format('woff');
	unicode-range: U+bae6-bafb, U+bafd-bb17, U+bb19-bb33, U+bb37, U+bb39-bb3a, U+bb3d-bb43, U+bb45-bb46, U+bb48, U+bb4a-bb4f, U+bb51-bb53, U+bb55-bb57, U+bb59-bb62, U+bb64-bb8f;
}
/* [43] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.43.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.43.woff) format('woff');
	unicode-range: U+ba30-ba37, U+ba3a-ba3b, U+ba3d-ba3f, U+ba41-ba47, U+ba49-ba4a, U+ba4c, U+ba4e-ba53, U+ba56-ba57, U+ba59-ba5b, U+ba5d-ba63, U+ba65-ba66, U+ba68-ba6f, U+ba71-ba73, U+ba75-ba77, U+ba79-ba84, U+ba86, U+ba88-baa7, U+baaa, U+baad-baaf, U+bab1-bab7, U+baba, U+babc, U+babe-bae5;
}
/* [44] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.44.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.44.woff) format('woff');
	unicode-range: U+b96e-b973, U+b976-b977, U+b979-b97b, U+b97d-b983, U+b986, U+b988, U+b98a-b98d, U+b98f-b9ab, U+b9ae-b9af, U+b9b1-b9b3, U+b9b5-b9bb, U+b9be, U+b9c0, U+b9c2-b9c7, U+b9ca-b9cb, U+b9cd, U+b9d2-b9d7, U+b9da, U+b9dc, U+b9df-b9e0, U+b9e2, U+b9e6-b9e7, U+b9e9-b9f3, U+b9f6, U+b9f8, U+b9fb-ba2f;
}
/* [45] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.45.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.45.woff) format('woff');
	unicode-range: U+b8bf-b8cb, U+b8cd-b8e0, U+b8e2-b8e7, U+b8ea-b8eb, U+b8ed-b8ef, U+b8f1-b8f7, U+b8fa, U+b8fc, U+b8fe-b903, U+b905-b917, U+b919-b91f, U+b921-b93b, U+b93d-b957, U+b95a-b95b, U+b95d-b95f, U+b961-b967, U+b969-b96c;
}
/* [46] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.46.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.46.woff) format('woff');
	unicode-range: U+b80d-b80f, U+b811-b817, U+b81a, U+b81c-b823, U+b826-b827, U+b829-b82b, U+b82d-b833, U+b836, U+b83a-b83f, U+b841-b85b, U+b85e-b85f, U+b861-b863, U+b865-b86b, U+b86e, U+b870, U+b872-b8af, U+b8b1-b8be;
}
/* [47] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.47.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.47.woff) format('woff');
	unicode-range: U+b74d-b75f, U+b761-b763, U+b765-b774, U+b776-b77b, U+b77e-b77f, U+b781-b783, U+b785-b78b, U+b78e, U+b792-b796, U+b79a-b79b, U+b79d-b7a7, U+b7aa, U+b7ae-b7b3, U+b7b6-b7c8, U+b7ca-b7eb, U+b7ee-b7ef, U+b7f1-b7f3, U+b7f5-b7fb, U+b7fe, U+b802-b806, U+b80a-b80b;
}
/* [48] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.48.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.48.woff) format('woff');
	unicode-range: U+b6a7-b6aa, U+b6ac-b6b0, U+b6b2-b6ef, U+b6f1-b727, U+b72a-b72b, U+b72d-b72e, U+b731-b737, U+b739-b73a, U+b73c-b743, U+b745-b74c;
}
/* [49] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.49.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.49.woff) format('woff');
	unicode-range: U+b605-b60f, U+b612-b617, U+b619-b624, U+b626-b69b, U+b69e-b6a3, U+b6a5-b6a6;
}
/* [50] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.50.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.50.woff) format('woff');
	unicode-range: U+b55f, U+b562-b583, U+b585-b59f, U+b5a2-b5a3, U+b5a5-b5a7, U+b5a9-b5b2, U+b5b5-b5ba, U+b5bd-b604;
}
/* [51] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.51.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.51.woff) format('woff');
	unicode-range: U+b4a5-b4b6, U+b4b8-b4bf, U+b4c1-b4c7, U+b4c9-b4db, U+b4de-b4df, U+b4e1-b4e2, U+b4e5-b4eb, U+b4ee, U+b4f0, U+b4f2-b513, U+b516-b517, U+b519-b51a, U+b51d-b523, U+b526, U+b528, U+b52b-b52f, U+b532-b533, U+b535-b537, U+b539-b53f, U+b541-b544, U+b546-b54b, U+b54d-b54f, U+b551-b55b, U+b55d-b55e;
}
/* [52] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.52.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.52.woff) format('woff');
	unicode-range: U+b3f8-b3fb, U+b3fd-b40f, U+b411-b417, U+b419-b41b, U+b41d-b41f, U+b421-b427, U+b42a-b42b, U+b42d-b44f, U+b452-b453, U+b455-b457, U+b459-b45f, U+b462-b464, U+b466-b46b, U+b46d-b47f, U+b481-b4a3;
}
/* [53] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.53.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.53.woff) format('woff');
	unicode-range: U+b342-b353, U+b356-b357, U+b359-b35b, U+b35d-b35e, U+b360-b363, U+b366, U+b368, U+b36a-b36d, U+b36f, U+b372-b373, U+b375-b377, U+b379-b37f, U+b381-b382, U+b384, U+b386-b38b, U+b38d-b3c3, U+b3c6-b3c7, U+b3c9-b3ca, U+b3cd-b3d3, U+b3d6, U+b3d8, U+b3da-b3f7;
}
/* [54] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.54.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.54.woff) format('woff');
	unicode-range: U+b27c-b283, U+b285-b28f, U+b292-b293, U+b295-b297, U+b29a-b29f, U+b2a1-b2a4, U+b2a7-b2a9, U+b2ab, U+b2ad-b2c7, U+b2ca-b2cb, U+b2cd-b2cf, U+b2d1-b2d7, U+b2da, U+b2dc, U+b2de-b2e3, U+b2e7, U+b2e9-b2ea, U+b2ef-b2f3, U+b2f6, U+b2f8, U+b2fa-b2fb, U+b2fd-b2fe, U+b302-b303, U+b305-b307, U+b309-b30f, U+b312, U+b316-b31b, U+b31d-b341;
}
/* [55] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.55.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.55.woff) format('woff');
	unicode-range: U+b1d6-b1e7, U+b1e9-b1fc, U+b1fe-b203, U+b206-b207, U+b209-b20b, U+b20d-b213, U+b216-b21f, U+b221-b257, U+b259-b273, U+b275-b27b;
}
/* [56] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.56.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.56.woff) format('woff');
	unicode-range: U+b120-b122, U+b126-b127, U+b129-b12b, U+b12d-b133, U+b136, U+b138, U+b13a-b13f, U+b142-b143, U+b145-b14f, U+b151-b153, U+b156-b157, U+b159-b177, U+b17a-b17b, U+b17d-b17f, U+b181-b187, U+b189-b18c, U+b18e-b191, U+b195-b1a7, U+b1a9-b1cb, U+b1cd-b1d5;
}
/* [57] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.57.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.57.woff) format('woff');
	unicode-range: U+b05f-b07b, U+b07e-b07f, U+b081-b083, U+b085-b08b, U+b08d-b097, U+b09b, U+b09d-b09f, U+b0a2-b0a7, U+b0aa, U+b0b0, U+b0b2, U+b0b6-b0b7, U+b0b9-b0bb, U+b0bd-b0c3, U+b0c6-b0c7, U+b0ca-b0cf, U+b0d1-b0df, U+b0e1-b0e4, U+b0e6-b107, U+b10a-b10b, U+b10d-b10f, U+b111-b112, U+b114-b117, U+b119-b11a, U+b11c-b11f;
}
/* [58] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.58.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.58.woff) format('woff');
	unicode-range: U+afac-afb7, U+afba-afbb, U+afbd-afbf, U+afc1-afc6, U+afca-afcc, U+afce-afd3, U+afd5-afe7, U+afe9-afef, U+aff1-b00b, U+b00d-b00f, U+b011-b013, U+b015-b01b, U+b01d-b027, U+b029-b043, U+b045-b047, U+b049, U+b04b, U+b04d-b052, U+b055-b056, U+b058-b05c, U+b05e;
}
/* [59] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.59.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.59.woff) format('woff');
	unicode-range: U+af03-af07, U+af09-af2b, U+af2e-af33, U+af35-af3b, U+af3e-af40, U+af44-af47, U+af4a-af5c, U+af5e-af63, U+af65-af7f, U+af81-afab;
}
/* [60] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.60.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.60.woff) format('woff');
	unicode-range: U+ae56-ae5b, U+ae5e-ae60, U+ae62-ae64, U+ae66-ae67, U+ae69-ae6b, U+ae6d-ae83, U+ae85-aebb, U+aebf, U+aec1-aec3, U+aec5-aecb, U+aece, U+aed0, U+aed2-aed7, U+aed9-aef3, U+aef5-af02;
}
/* [61] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.61.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.61.woff) format('woff');
	unicode-range: U+ad9c-ada3, U+ada5-adbf, U+adc1-adc3, U+adc5-adc7, U+adc9-add2, U+add4-addb, U+addd-addf, U+ade1-ade3, U+ade5-adf7, U+adfa-adfb, U+adfd-adff, U+ae02-ae07, U+ae0a, U+ae0c, U+ae0e-ae13, U+ae15-ae2f, U+ae31-ae33, U+ae35-ae37, U+ae39-ae3f, U+ae42, U+ae44, U+ae46-ae49, U+ae4b, U+ae4f, U+ae51-ae53, U+ae55;
}
/* [62] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.62.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.62.woff) format('woff');
	unicode-range: U+ace2-ace3, U+ace5-ace6, U+ace9-acef, U+acf2, U+acf4, U+acf7-acfb, U+acfe-acff, U+ad01-ad03, U+ad05-ad0b, U+ad0d-ad10, U+ad12-ad1b, U+ad1d-ad33, U+ad35-ad48, U+ad4a-ad4f, U+ad51-ad6b, U+ad6e-ad6f, U+ad71-ad72, U+ad77-ad7c, U+ad7e, U+ad80, U+ad82-ad87, U+ad89-ad8b, U+ad8d-ad8f, U+ad91-ad9b;
}
/* [63] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.63.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.63.woff) format('woff');
	unicode-range: U+ac25-ac2c, U+ac2e, U+ac30, U+ac32-ac37, U+ac39-ac3f, U+ac41-ac4c, U+ac4e-ac6f, U+ac72-ac73, U+ac75-ac76, U+ac79-ac7f, U+ac82, U+ac84-ac88, U+ac8a-ac8b, U+ac8d-ac8f, U+ac91-ac93, U+ac95-ac9b, U+ac9d-ac9e, U+aca1-aca7, U+acab, U+acad-acaf, U+acb1-acb7, U+acba-acbb, U+acbe-acc0, U+acc2-acc3, U+acc5-acdf;
}
/* [64] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.64.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.64.woff) format('woff');
	unicode-range: U+99df, U+99ed, U+99f1, U+99ff, U+9a01, U+9a08, U+9a0e-9a0f, U+9a19, U+9a2b, U+9a30, U+9a36-9a37, U+9a40, U+9a43, U+9a45, U+9a4d, U+9a55, U+9a57, U+9a5a-9a5b, U+9a5f, U+9a62, U+9a65, U+9a69-9a6a, U+9aa8, U+9ab8, U+9ad3, U+9ae5, U+9aee, U+9b1a, U+9b27, U+9b2a, U+9b31, U+9b3c, U+9b41-9b45, U+9b4f, U+9b54, U+9b5a, U+9b6f, U+9b8e, U+9b91, U+9b9f, U+9bab, U+9bae, U+9bc9, U+9bd6, U+9be4, U+9be8, U+9c0d, U+9c10, U+9c12, U+9c15, U+9c25, U+9c32, U+9c3b, U+9c47, U+9c49, U+9c57, U+9ce5, U+9ce7, U+9ce9, U+9cf3-9cf4, U+9cf6, U+9d09, U+9d1b, U+9d26, U+9d28, U+9d3b, U+9d51, U+9d5d, U+9d60-9d61, U+9d6c, U+9d72, U+9da9, U+9daf, U+9db4, U+9dc4, U+9dd7, U+9df2, U+9df8-9dfa, U+9e1a, U+9e1e, U+9e75, U+9e79, U+9e7d, U+9e7f, U+9e92-9e93, U+9e97, U+9e9d, U+9e9f, U+9ea5, U+9eb4-9eb5, U+9ebb, U+9ebe, U+9ec3, U+9ecd-9ece, U+9ed4, U+9ed8, U+9edb-9edc, U+9ede, U+9ee8, U+9ef4, U+9f07-9f08, U+9f0e, U+9f13, U+9f20, U+9f3b, U+9f4a-9f4b, U+9f4e, U+9f52, U+9f5f, U+9f61, U+9f67, U+9f6a, U+9f6c, U+9f77, U+9f8d, U+9f90, U+9f95, U+9f9c, U+ac02-ac03, U+ac05-ac06, U+ac09-ac0f, U+ac17-ac18, U+ac1b, U+ac1e-ac1f, U+ac21-ac23;
}
/* [65] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.65.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.65.woff) format('woff');
	unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [66] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.66.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.66.woff) format('woff');
	unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [67] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.67.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.67.woff) format('woff');
	unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [68] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.68.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.68.woff) format('woff');
	unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [69] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.69.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.69.woff) format('woff');
	unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [70] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.70.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.70.woff) format('woff');
	unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [71] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.71.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.71.woff) format('woff');
	unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [72] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.72.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.72.woff) format('woff');
	unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [73] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.73.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.73.woff) format('woff');
	unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [74] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.74.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.74.woff) format('woff');
	unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [75] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.75.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.75.woff) format('woff');
	unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [76] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.76.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.76.woff) format('woff');
	unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [77] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.77.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.77.woff) format('woff');
	unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [78] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.78.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.78.woff) format('woff');
	unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [79] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.79.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.79.woff) format('woff');
	unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [80] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.80.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.80.woff) format('woff');
	unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [81] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.81.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.81.woff) format('woff');
	unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [82] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.82.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.82.woff) format('woff');
	unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [83] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.83.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.83.woff) format('woff');
	unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [84] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.84.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.84.woff) format('woff');
	unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [85] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.85.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.85.woff) format('woff');
	unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [86] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.86.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.86.woff) format('woff');
	unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [87] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.87.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.87.woff) format('woff');
	unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [88] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.88.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.88.woff) format('woff');
	unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [89] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.89.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.89.woff) format('woff');
	unicode-range: U+d, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [90] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.90.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.90.woff) format('woff');
	unicode-range: U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c740, U+c744, U+c74c, U+c758, U+c77c, U+c785, U+c788, U+c790-c791, U+c7a5, U+c804, U+c815, U+c81c, U+c870, U+c8fc, U+c911, U+c9c4, U+ccb4, U+ce58, U+ce74, U+d06c, U+d0c0, U+d130, U+d2b8, U+d3ec, U+d504, U+d55c, U+d569, U+d574, U+d638, U+d654, U+d68c;
}
/* [91] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 500;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-Medium.subset.91.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-Medium.subset.91.woff) format('woff');
	unicode-range: U+20-22, U+27-2a, U+2c-39, U+3a-3b, U+3f, U+41-4e, U+4f-5d, U+61-7b, U+7d, U+a0-a1, U+ab, U+ad-ae, U+b7, U+bb, U+bf, U+2013-2014, U+201c-201d, U+2122, U+ac00, U+ace0, U+ae30, U+b2e4, U+b85c, U+b9ac, U+c0ac, U+c2a4, U+c2dc, U+c774, U+c778, U+c9c0, U+d558;
}
/* [0] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.0.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.0.woff) format('woff');
	unicode-range: U+f9ca-fa0b, U+ff03-ff05, U+ff07, U+ff0a-ff0b, U+ff0d-ff19, U+ff1b, U+ff1d, U+ff20-ff5b, U+ff5d, U+ffe0-ffe3, U+ffe5-ffe6;
}
/* [1] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.1.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.1.woff) format('woff');
	unicode-range: U+d723-d728, U+d72a-d733, U+d735-d748, U+d74a-d74f, U+d752-d753, U+d755-d757, U+d75a-d75f, U+d762-d764, U+d766-d768, U+d76a-d76b, U+d76d-d76f, U+d771-d787, U+d789-d78b, U+d78d-d78f, U+d791-d797, U+d79a, U+d79c, U+d79e-d7a3, U+f900-f909, U+f90b-f92e;
}
/* [2] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.2.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.2.woff) format('woff');
	unicode-range: U+d679-d68b, U+d68e-d69e, U+d6a0, U+d6a2-d6a7, U+d6a9-d6c3, U+d6c6-d6c7, U+d6c9-d6cb, U+d6cd-d6d3, U+d6d5-d6d6, U+d6d8-d6e3, U+d6e5-d6e7, U+d6e9-d6fb, U+d6fd-d717, U+d719-d71f, U+d721-d722;
}
/* [3] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.3.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.3.woff) format('woff');
	unicode-range: U+d5bc-d5c7, U+d5ca-d5cb, U+d5cd-d5cf, U+d5d1-d5d7, U+d5d9-d5da, U+d5dc, U+d5de-d5e3, U+d5e6-d5e7, U+d5e9-d5eb, U+d5ed-d5f6, U+d5f8, U+d5fa-d5ff, U+d602-d603, U+d605-d607, U+d609-d60f, U+d612-d613, U+d616-d61b, U+d61d-d637, U+d63a-d63b, U+d63d-d63f, U+d641-d647, U+d64a-d64c, U+d64e-d653, U+d656-d657, U+d659-d65b, U+d65d-d666, U+d668, U+d66a-d678;
}
/* [4] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.4.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.4.woff) format('woff');
	unicode-range: U+d507, U+d509-d50b, U+d50d-d513, U+d515-d53b, U+d53e-d53f, U+d541-d543, U+d545-d54c, U+d54e, U+d550, U+d552-d557, U+d55a-d55b, U+d55d-d55f, U+d561-d564, U+d566-d567, U+d56a, U+d56c, U+d56e-d573, U+d576-d577, U+d579-d583, U+d585-d586, U+d58a-d5a4, U+d5a6-d5bb;
}
/* [5] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.5.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.5.woff) format('woff');
	unicode-range: U+d464-d477, U+d47a-d47b, U+d47d-d47f, U+d481-d487, U+d489-d48a, U+d48c, U+d48e-d4e7, U+d4e9-d503, U+d505-d506;
}
/* [6] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.6.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.6.woff) format('woff');
	unicode-range: U+d3bf-d3c7, U+d3ca-d3cf, U+d3d1-d3eb, U+d3ee-d3ef, U+d3f1-d3f3, U+d3f5-d3fb, U+d3fd-d400, U+d402-d45b, U+d45d-d463;
}
/* [7] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.7.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.7.woff) format('woff');
	unicode-range: U+d2ff, U+d302-d304, U+d306-d30b, U+d30f, U+d311-d313, U+d315-d31b, U+d31e, U+d322-d324, U+d326-d327, U+d32a-d32b, U+d32d-d32f, U+d331-d337, U+d339-d33c, U+d33e-d37b, U+d37e-d37f, U+d381-d383, U+d385-d38b, U+d38e-d390, U+d392-d397, U+d39a-d39b, U+d39d-d39f, U+d3a1-d3a7, U+d3a9-d3aa, U+d3ac, U+d3ae-d3b3, U+d3b5-d3b7, U+d3b9-d3bb, U+d3bd-d3be;
}
/* [8] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.8.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.8.woff) format('woff');
	unicode-range: U+d257-d27f, U+d281-d29b, U+d29d-d29f, U+d2a1-d2ab, U+d2ad-d2b7, U+d2ba-d2bb, U+d2bd-d2bf, U+d2c1-d2c7, U+d2c9-d2ef, U+d2f2-d2f3, U+d2f5-d2f7, U+d2f9-d2fe;
}
/* [9] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.9.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.9.woff) format('woff');
	unicode-range: U+d1b4, U+d1b6-d1f3, U+d1f5-d22b, U+d22e-d22f, U+d231-d233, U+d235-d23b, U+d23d-d240, U+d242-d256;
}
/* [10] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.10.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.10.woff) format('woff');
	unicode-range: U+d105-d12f, U+d132-d133, U+d135-d137, U+d139-d13f, U+d141-d142, U+d144, U+d146-d14b, U+d14e-d14f, U+d151-d153, U+d155-d15b, U+d15e-d187, U+d189-d19f, U+d1a2-d1a3, U+d1a5-d1a7, U+d1a9-d1af, U+d1b2-d1b3;
}
/* [11] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.11.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.11.woff) format('woff');
	unicode-range: U+d04b-d04f, U+d051-d057, U+d059-d06b, U+d06d-d06f, U+d071-d073, U+d075-d07b, U+d07e-d0a3, U+d0a6-d0a7, U+d0a9-d0ab, U+d0ad-d0b3, U+d0b6, U+d0b8, U+d0ba-d0bf, U+d0c2-d0c3, U+d0c5-d0c7, U+d0c9-d0cf, U+d0d2, U+d0d6-d0db, U+d0de-d0df, U+d0e1-d0e3, U+d0e5-d0eb, U+d0ee-d0f0, U+d0f2-d104;
}
/* [12] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.12.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.12.woff) format('woff');
	unicode-range: U+cfa2-cfc3, U+cfc5-cfdf, U+cfe2-cfe3, U+cfe5-cfe7, U+cfe9-cff4, U+cff6-cffb, U+cffd-cfff, U+d001-d003, U+d005-d017, U+d019-d033, U+d036-d037, U+d039-d03b, U+d03d-d04a;
}
/* [13] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.13.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.13.woff) format('woff');
	unicode-range: U+cef0-cef3, U+cef6, U+cef9-ceff, U+cf01-cf03, U+cf05-cf07, U+cf09-cf0f, U+cf11-cf12, U+cf14-cf1b, U+cf1d-cf1f, U+cf21-cf2f, U+cf31-cf53, U+cf56-cf57, U+cf59-cf5b, U+cf5d-cf63, U+cf66, U+cf68, U+cf6a-cf6f, U+cf71-cf84, U+cf86-cf8b, U+cf8d-cfa1;
}
/* [14] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.14.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.14.woff) format('woff');
	unicode-range: U+ce3c-ce57, U+ce5a-ce5b, U+ce5d-ce5f, U+ce61-ce67, U+ce6a, U+ce6c, U+ce6e-ce73, U+ce76-ce77, U+ce79-ce7b, U+ce7d-ce83, U+ce85-ce88, U+ce8a-ce8f, U+ce91-ce93, U+ce95-ce97, U+ce99-ce9f, U+cea2, U+cea4-ceab, U+cead-cee3, U+cee6-cee7, U+cee9-ceeb, U+ceed-ceef;
}
/* [15] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.15.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.15.woff) format('woff');
	unicode-range: U+cd92-cd93, U+cd96-cd97, U+cd99-cd9b, U+cd9d-cda3, U+cda6-cda8, U+cdaa-cdaf, U+cdb1-cdc3, U+cdc5-cdcb, U+cdcd-cde7, U+cde9-ce03, U+ce05-ce1f, U+ce22-ce34, U+ce36-ce3b;
}
/* [16] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.16.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.16.woff) format('woff');
	unicode-range: U+ccef-cd07, U+cd0a-cd0b, U+cd0d-cd1a, U+cd1c, U+cd1e-cd2b, U+cd2d-cd5b, U+cd5d-cd77, U+cd79-cd91;
}
/* [17] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.17.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.17.woff) format('woff');
	unicode-range: U+cc3f-cc43, U+cc46-cc47, U+cc49-cc4b, U+cc4d-cc53, U+cc55-cc58, U+cc5a-cc5f, U+cc61-cc97, U+cc9a-cc9b, U+cc9d-cc9f, U+cca1-cca7, U+ccaa, U+ccac, U+ccae-ccb3, U+ccb6-ccb7, U+ccb9-ccbb, U+ccbd-cccf, U+ccd1-cce3, U+cce5-ccee;
}
/* [18] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.18.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.18.woff) format('woff');
	unicode-range: U+cb91-cbd3, U+cbd5-cbe3, U+cbe5-cc0b, U+cc0e-cc0f, U+cc11-cc13, U+cc15-cc1b, U+cc1d-cc20, U+cc23-cc27, U+cc2a-cc2b, U+cc2d, U+cc2f, U+cc31-cc37, U+cc3a, U+cc3c;
}
/* [19] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.19.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.19.woff) format('woff');
	unicode-range: U+caf4-cb47, U+cb4a-cb90;
}
/* [20] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.20.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.20.woff) format('woff');
	unicode-range: U+ca4a-ca4b, U+ca4e-ca4f, U+ca51-ca53, U+ca55-ca5b, U+ca5d-ca60, U+ca62-ca83, U+ca85-cabb, U+cabe-cabf, U+cac1-cac3, U+cac5-cacb, U+cacd-cad0, U+cad2, U+cad4-cad8, U+cada-caf3;
}
/* [21] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.21.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.21.woff) format('woff');
	unicode-range: U+c996-c997, U+c99a-c99c, U+c99e-c9bf, U+c9c2-c9c3, U+c9c5-c9c7, U+c9c9-c9cf, U+c9d2, U+c9d4, U+c9d7-c9d8, U+c9db, U+c9de-c9df, U+c9e1-c9e3, U+c9e5-c9e6, U+c9e8-c9eb, U+c9ee-c9f0, U+c9f2-c9f7, U+c9f9-ca0b, U+ca0d-ca28, U+ca2a-ca49;
}
/* [22] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.22.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.22.woff) format('woff');
	unicode-range: U+c8e9-c8f4, U+c8f6-c8fb, U+c8fe-c8ff, U+c901-c903, U+c905-c90b, U+c90e-c910, U+c912-c917, U+c919-c92b, U+c92d-c94f, U+c951-c953, U+c955-c96b, U+c96d-c973, U+c975-c987, U+c98a-c98b, U+c98d-c98f, U+c991-c995;
}
/* [23] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.23.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.23.woff) format('woff');
	unicode-range: U+c841-c84b, U+c84d-c86f, U+c872-c873, U+c875-c877, U+c879-c87f, U+c882-c884, U+c887-c88a, U+c88d-c8c3, U+c8c5-c8df, U+c8e1-c8e8;
}
/* [24] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.24.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.24.woff) format('woff');
	unicode-range: U+c779-c77b, U+c77e-c782, U+c786, U+c78b, U+c78d, U+c78f, U+c792-c793, U+c795, U+c797, U+c799-c79f, U+c7a2, U+c7a7-c7ab, U+c7ae-c7bb, U+c7bd-c7c0, U+c7c2-c7c7, U+c7c9-c7dc, U+c7de-c7ff, U+c802-c803, U+c805-c807, U+c809, U+c80b-c80f, U+c812, U+c814, U+c817-c81b, U+c81e-c81f, U+c821-c823, U+c825-c82e, U+c830-c837, U+c839-c83b, U+c83d-c840;
}
/* [25] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.25.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.25.woff) format('woff');
	unicode-range: U+c6bb-c6bf, U+c6c2, U+c6c4, U+c6c6-c6cb, U+c6ce-c6cf, U+c6d1-c6d3, U+c6d5-c6db, U+c6dd-c6df, U+c6e1-c6e7, U+c6e9-c6eb, U+c6ed-c6ef, U+c6f1-c6f8, U+c6fa-c703, U+c705-c707, U+c709-c70b, U+c70d-c716, U+c718, U+c71a-c71f, U+c722-c723, U+c725-c727, U+c729-c734, U+c736-c73b, U+c73e-c73f, U+c741-c743, U+c745-c74b, U+c74e-c750, U+c752-c757, U+c759-c773, U+c776-c777;
}
/* [26] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.26.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.26.woff) format('woff');
	unicode-range: U+c5f5-c5fb, U+c5fe, U+c602-c605, U+c607, U+c609-c60f, U+c611-c61a, U+c61c-c623, U+c626-c627, U+c629-c62b, U+c62d, U+c62f-c632, U+c636, U+c638, U+c63a-c63f, U+c642-c643, U+c645-c647, U+c649-c652, U+c656-c65b, U+c65d-c65f, U+c661-c663, U+c665-c677, U+c679-c67b, U+c67d-c693, U+c696-c697, U+c699-c69b, U+c69d-c6a3, U+c6a6, U+c6a8, U+c6aa-c6af, U+c6b2-c6b3, U+c6b5-c6b7, U+c6b9-c6ba;
}
/* [27] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.27.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.27.woff) format('woff');
	unicode-range: U+c517-c527, U+c52a-c52b, U+c52d-c52f, U+c531-c538, U+c53a, U+c53c, U+c53e-c543, U+c546-c547, U+c54b, U+c54d-c552, U+c556, U+c55a-c55b, U+c55d, U+c55f, U+c562-c563, U+c565-c567, U+c569-c56f, U+c572, U+c574, U+c576-c57b, U+c57e-c57f, U+c581-c583, U+c585-c586, U+c588-c58b, U+c58e, U+c590, U+c592-c596, U+c599-c5b3, U+c5b6-c5b7, U+c5ba, U+c5be-c5c3, U+c5ca-c5cb, U+c5cd, U+c5cf, U+c5d2-c5d3, U+c5d5-c5d7, U+c5d9-c5df, U+c5e1-c5e2, U+c5e4, U+c5e6-c5eb, U+c5ef, U+c5f1-c5f3;
}
/* [28] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.28.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.28.woff) format('woff');
	unicode-range: U+c475-c4ef, U+c4f2-c4f3, U+c4f5-c4f7, U+c4f9-c4ff, U+c502-c50b, U+c50d-c516;
}
/* [29] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.29.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.29.woff) format('woff');
	unicode-range: U+c3d0-c3d7, U+c3da-c3db, U+c3dd-c3de, U+c3e1-c3ec, U+c3ee-c3f3, U+c3f5-c42b, U+c42d-c463, U+c466-c474;
}
/* [30] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.30.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.30.woff) format('woff');
	unicode-range: U+c32b-c367, U+c36a-c36b, U+c36d-c36f, U+c371-c377, U+c37a-c37b, U+c37e-c383, U+c385-c387, U+c389-c3cf;
}
/* [31] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.31.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.31.woff) format('woff');
	unicode-range: U+c26a-c26b, U+c26d-c26f, U+c271-c273, U+c275-c27b, U+c27e-c287, U+c289-c28f, U+c291-c297, U+c299-c29a, U+c29c-c2a3, U+c2a5-c2a7, U+c2a9-c2ab, U+c2ad-c2b3, U+c2b6, U+c2b8, U+c2ba-c2bb, U+c2bd-c2db, U+c2de-c2df, U+c2e1-c2e2, U+c2e5-c2ea, U+c2ee, U+c2f0, U+c2f2-c2f5, U+c2f7, U+c2fa-c2fb, U+c2fd-c2ff, U+c301-c307, U+c309-c30c, U+c30e-c312, U+c315-c323, U+c325-c328, U+c32a;
}
/* [32] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.32.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.32.woff) format('woff');
	unicode-range: U+c1bc-c1c3, U+c1c5-c1df, U+c1e1-c1fb, U+c1fd-c203, U+c205-c20c, U+c20e, U+c210-c217, U+c21a-c21b, U+c21d-c21e, U+c221-c227, U+c229-c22a, U+c22c, U+c22e, U+c230, U+c233-c24f, U+c251-c257, U+c259-c269;
}
/* [33] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.33.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.33.woff) format('woff');
	unicode-range: U+c101-c11b, U+c11f, U+c121-c123, U+c125-c12b, U+c12e, U+c132-c137, U+c13a-c13b, U+c13d-c13f, U+c141-c147, U+c14a, U+c14c-c153, U+c155-c157, U+c159-c15b, U+c15d-c166, U+c169-c16f, U+c171-c177, U+c179-c18b, U+c18e-c18f, U+c191-c193, U+c195-c19b, U+c19d-c19e, U+c1a0, U+c1a2-c1a4, U+c1a6-c1bb;
}
/* [34] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.34.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.34.woff) format('woff');
	unicode-range: U+c049-c057, U+c059-c05b, U+c05d-c05f, U+c061-c067, U+c069-c08f, U+c091-c0ab, U+c0ae-c0af, U+c0b1-c0b3, U+c0b5, U+c0b7-c0bb, U+c0be, U+c0c2-c0c7, U+c0ca-c0cb, U+c0cd-c0cf, U+c0d1-c0d7, U+c0d9-c0da, U+c0dc, U+c0de-c0e3, U+c0e5-c0eb, U+c0ed-c0f3, U+c0f6, U+c0f8, U+c0fa-c0ff;
}
/* [35] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.35.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.35.woff) format('woff');
	unicode-range: U+bfa7-bfaf, U+bfb1-bfc4, U+bfc6-bfcb, U+bfce-bfcf, U+bfd1-bfd3, U+bfd5-bfdb, U+bfdd-c048;
}
/* [36] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.36.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.36.woff) format('woff');
	unicode-range: U+bf07, U+bf09-bf3f, U+bf41-bf4f, U+bf52-bf54, U+bf56-bfa6;
}
/* [37] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.37.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.37.woff) format('woff');
	unicode-range: U+be56, U+be58, U+be5c-be5f, U+be62-be63, U+be65-be67, U+be69-be74, U+be76-be7b, U+be7e-be7f, U+be81-be8e, U+be90, U+be92-bea7, U+bea9-becf, U+bed2-bed3, U+bed5-bed6, U+bed9-bee3, U+bee6-bf06;
}
/* [38] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.38.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.38.woff) format('woff');
	unicode-range: U+bdb0-bdd3, U+bdd5-bdef, U+bdf1-be0b, U+be0d-be0f, U+be11-be13, U+be15-be43, U+be46-be47, U+be49-be4b, U+be4d-be53;
}
/* [39] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.39.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.39.woff) format('woff');
	unicode-range: U+bd03, U+bd06, U+bd08, U+bd0a-bd0f, U+bd11-bd22, U+bd25-bd47, U+bd49-bd58, U+bd5a-bd7f, U+bd82-bd83, U+bd85-bd87, U+bd8a-bd8f, U+bd91-bd92, U+bd94, U+bd96-bd98, U+bd9a-bdaf;
}
/* [40] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.40.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.40.woff) format('woff');
	unicode-range: U+bc4e-bc83, U+bc86-bc87, U+bc89-bc8b, U+bc8d-bc93, U+bc96, U+bc98, U+bc9b-bc9f, U+bca2-bca3, U+bca5-bca7, U+bca9-bcb2, U+bcb4-bcbb, U+bcbe-bcbf, U+bcc1-bcc3, U+bcc5-bccc, U+bcce-bcd0, U+bcd2-bcd4, U+bcd6-bcf3, U+bcf7, U+bcf9-bcfb, U+bcfd-bd02;
}
/* [41] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.41.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.41.woff) format('woff');
	unicode-range: U+bb90-bba3, U+bba5-bbab, U+bbad-bbbf, U+bbc1-bbf7, U+bbfa-bbfb, U+bbfd-bbfe, U+bc01-bc07, U+bc09-bc0a, U+bc0e, U+bc10, U+bc12-bc13, U+bc17, U+bc19-bc1a, U+bc1e, U+bc20-bc23, U+bc26, U+bc28, U+bc2a-bc2c, U+bc2e-bc2f, U+bc32-bc33, U+bc35-bc37, U+bc39-bc3f, U+bc41-bc42, U+bc44, U+bc46-bc48, U+bc4a-bc4d;
}
/* [42] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.42.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.42.woff) format('woff');
	unicode-range: U+bae6-bafb, U+bafd-bb17, U+bb19-bb33, U+bb37, U+bb39-bb3a, U+bb3d-bb43, U+bb45-bb46, U+bb48, U+bb4a-bb4f, U+bb51-bb53, U+bb55-bb57, U+bb59-bb62, U+bb64-bb8f;
}
/* [43] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.43.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.43.woff) format('woff');
	unicode-range: U+ba30-ba37, U+ba3a-ba3b, U+ba3d-ba3f, U+ba41-ba47, U+ba49-ba4a, U+ba4c, U+ba4e-ba53, U+ba56-ba57, U+ba59-ba5b, U+ba5d-ba63, U+ba65-ba66, U+ba68-ba6f, U+ba71-ba73, U+ba75-ba77, U+ba79-ba84, U+ba86, U+ba88-baa7, U+baaa, U+baad-baaf, U+bab1-bab7, U+baba, U+babc, U+babe-bae5;
}
/* [44] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.44.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.44.woff) format('woff');
	unicode-range: U+b96e-b973, U+b976-b977, U+b979-b97b, U+b97d-b983, U+b986, U+b988, U+b98a-b98d, U+b98f-b9ab, U+b9ae-b9af, U+b9b1-b9b3, U+b9b5-b9bb, U+b9be, U+b9c0, U+b9c2-b9c7, U+b9ca-b9cb, U+b9cd, U+b9d2-b9d7, U+b9da, U+b9dc, U+b9df-b9e0, U+b9e2, U+b9e6-b9e7, U+b9e9-b9f3, U+b9f6, U+b9f8, U+b9fb-ba2f;
}
/* [45] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.45.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.45.woff) format('woff');
	unicode-range: U+b8bf-b8cb, U+b8cd-b8e0, U+b8e2-b8e7, U+b8ea-b8eb, U+b8ed-b8ef, U+b8f1-b8f7, U+b8fa, U+b8fc, U+b8fe-b903, U+b905-b917, U+b919-b91f, U+b921-b93b, U+b93d-b957, U+b95a-b95b, U+b95d-b95f, U+b961-b967, U+b969-b96c;
}
/* [46] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.46.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.46.woff) format('woff');
	unicode-range: U+b80d-b80f, U+b811-b817, U+b81a, U+b81c-b823, U+b826-b827, U+b829-b82b, U+b82d-b833, U+b836, U+b83a-b83f, U+b841-b85b, U+b85e-b85f, U+b861-b863, U+b865-b86b, U+b86e, U+b870, U+b872-b8af, U+b8b1-b8be;
}
/* [47] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.47.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.47.woff) format('woff');
	unicode-range: U+b74d-b75f, U+b761-b763, U+b765-b774, U+b776-b77b, U+b77e-b77f, U+b781-b783, U+b785-b78b, U+b78e, U+b792-b796, U+b79a-b79b, U+b79d-b7a7, U+b7aa, U+b7ae-b7b3, U+b7b6-b7c8, U+b7ca-b7eb, U+b7ee-b7ef, U+b7f1-b7f3, U+b7f5-b7fb, U+b7fe, U+b802-b806, U+b80a-b80b;
}
/* [48] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.48.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.48.woff) format('woff');
	unicode-range: U+b6a7-b6aa, U+b6ac-b6b0, U+b6b2-b6ef, U+b6f1-b727, U+b72a-b72b, U+b72d-b72e, U+b731-b737, U+b739-b73a, U+b73c-b743, U+b745-b74c;
}
/* [49] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.49.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.49.woff) format('woff');
	unicode-range: U+b605-b60f, U+b612-b617, U+b619-b624, U+b626-b69b, U+b69e-b6a3, U+b6a5-b6a6;
}
/* [50] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.50.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.50.woff) format('woff');
	unicode-range: U+b55f, U+b562-b583, U+b585-b59f, U+b5a2-b5a3, U+b5a5-b5a7, U+b5a9-b5b2, U+b5b5-b5ba, U+b5bd-b604;
}
/* [51] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.51.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.51.woff) format('woff');
	unicode-range: U+b4a5-b4b6, U+b4b8-b4bf, U+b4c1-b4c7, U+b4c9-b4db, U+b4de-b4df, U+b4e1-b4e2, U+b4e5-b4eb, U+b4ee, U+b4f0, U+b4f2-b513, U+b516-b517, U+b519-b51a, U+b51d-b523, U+b526, U+b528, U+b52b-b52f, U+b532-b533, U+b535-b537, U+b539-b53f, U+b541-b544, U+b546-b54b, U+b54d-b54f, U+b551-b55b, U+b55d-b55e;
}
/* [52] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.52.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.52.woff) format('woff');
	unicode-range: U+b3f8-b3fb, U+b3fd-b40f, U+b411-b417, U+b419-b41b, U+b41d-b41f, U+b421-b427, U+b42a-b42b, U+b42d-b44f, U+b452-b453, U+b455-b457, U+b459-b45f, U+b462-b464, U+b466-b46b, U+b46d-b47f, U+b481-b4a3;
}
/* [53] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.53.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.53.woff) format('woff');
	unicode-range: U+b342-b353, U+b356-b357, U+b359-b35b, U+b35d-b35e, U+b360-b363, U+b366, U+b368, U+b36a-b36d, U+b36f, U+b372-b373, U+b375-b377, U+b379-b37f, U+b381-b382, U+b384, U+b386-b38b, U+b38d-b3c3, U+b3c6-b3c7, U+b3c9-b3ca, U+b3cd-b3d3, U+b3d6, U+b3d8, U+b3da-b3f7;
}
/* [54] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.54.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.54.woff) format('woff');
	unicode-range: U+b27c-b283, U+b285-b28f, U+b292-b293, U+b295-b297, U+b29a-b29f, U+b2a1-b2a4, U+b2a7-b2a9, U+b2ab, U+b2ad-b2c7, U+b2ca-b2cb, U+b2cd-b2cf, U+b2d1-b2d7, U+b2da, U+b2dc, U+b2de-b2e3, U+b2e7, U+b2e9-b2ea, U+b2ef-b2f3, U+b2f6, U+b2f8, U+b2fa-b2fb, U+b2fd-b2fe, U+b302-b303, U+b305-b307, U+b309-b30f, U+b312, U+b316-b31b, U+b31d-b341;
}
/* [55] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.55.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.55.woff) format('woff');
	unicode-range: U+b1d6-b1e7, U+b1e9-b1fc, U+b1fe-b203, U+b206-b207, U+b209-b20b, U+b20d-b213, U+b216-b21f, U+b221-b257, U+b259-b273, U+b275-b27b;
}
/* [56] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.56.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.56.woff) format('woff');
	unicode-range: U+b120-b122, U+b126-b127, U+b129-b12b, U+b12d-b133, U+b136, U+b138, U+b13a-b13f, U+b142-b143, U+b145-b14f, U+b151-b153, U+b156-b157, U+b159-b177, U+b17a-b17b, U+b17d-b17f, U+b181-b187, U+b189-b18c, U+b18e-b191, U+b195-b1a7, U+b1a9-b1cb, U+b1cd-b1d5;
}
/* [57] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.57.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.57.woff) format('woff');
	unicode-range: U+b05f-b07b, U+b07e-b07f, U+b081-b083, U+b085-b08b, U+b08d-b097, U+b09b, U+b09d-b09f, U+b0a2-b0a7, U+b0aa, U+b0b0, U+b0b2, U+b0b6-b0b7, U+b0b9-b0bb, U+b0bd-b0c3, U+b0c6-b0c7, U+b0ca-b0cf, U+b0d1-b0df, U+b0e1-b0e4, U+b0e6-b107, U+b10a-b10b, U+b10d-b10f, U+b111-b112, U+b114-b117, U+b119-b11a, U+b11c-b11f;
}
/* [58] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.58.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.58.woff) format('woff');
	unicode-range: U+afac-afb7, U+afba-afbb, U+afbd-afbf, U+afc1-afc6, U+afca-afcc, U+afce-afd3, U+afd5-afe7, U+afe9-afef, U+aff1-b00b, U+b00d-b00f, U+b011-b013, U+b015-b01b, U+b01d-b027, U+b029-b043, U+b045-b047, U+b049, U+b04b, U+b04d-b052, U+b055-b056, U+b058-b05c, U+b05e;
}
/* [59] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.59.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.59.woff) format('woff');
	unicode-range: U+af03-af07, U+af09-af2b, U+af2e-af33, U+af35-af3b, U+af3e-af40, U+af44-af47, U+af4a-af5c, U+af5e-af63, U+af65-af7f, U+af81-afab;
}
/* [60] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.60.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.60.woff) format('woff');
	unicode-range: U+ae56-ae5b, U+ae5e-ae60, U+ae62-ae64, U+ae66-ae67, U+ae69-ae6b, U+ae6d-ae83, U+ae85-aebb, U+aebf, U+aec1-aec3, U+aec5-aecb, U+aece, U+aed0, U+aed2-aed7, U+aed9-aef3, U+aef5-af02;
}
/* [61] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.61.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.61.woff) format('woff');
	unicode-range: U+ad9c-ada3, U+ada5-adbf, U+adc1-adc3, U+adc5-adc7, U+adc9-add2, U+add4-addb, U+addd-addf, U+ade1-ade3, U+ade5-adf7, U+adfa-adfb, U+adfd-adff, U+ae02-ae07, U+ae0a, U+ae0c, U+ae0e-ae13, U+ae15-ae2f, U+ae31-ae33, U+ae35-ae37, U+ae39-ae3f, U+ae42, U+ae44, U+ae46-ae49, U+ae4b, U+ae4f, U+ae51-ae53, U+ae55;
}
/* [62] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.62.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.62.woff) format('woff');
	unicode-range: U+ace2-ace3, U+ace5-ace6, U+ace9-acef, U+acf2, U+acf4, U+acf7-acfb, U+acfe-acff, U+ad01-ad03, U+ad05-ad0b, U+ad0d-ad10, U+ad12-ad1b, U+ad1d-ad33, U+ad35-ad48, U+ad4a-ad4f, U+ad51-ad6b, U+ad6e-ad6f, U+ad71-ad72, U+ad77-ad7c, U+ad7e, U+ad80, U+ad82-ad87, U+ad89-ad8b, U+ad8d-ad8f, U+ad91-ad9b;
}
/* [63] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.63.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.63.woff) format('woff');
	unicode-range: U+ac25-ac2c, U+ac2e, U+ac30, U+ac32-ac37, U+ac39-ac3f, U+ac41-ac4c, U+ac4e-ac6f, U+ac72-ac73, U+ac75-ac76, U+ac79-ac7f, U+ac82, U+ac84-ac88, U+ac8a-ac8b, U+ac8d-ac8f, U+ac91-ac93, U+ac95-ac9b, U+ac9d-ac9e, U+aca1-aca7, U+acab, U+acad-acaf, U+acb1-acb7, U+acba-acbb, U+acbe-acc0, U+acc2-acc3, U+acc5-acdf;
}
/* [64] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.64.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.64.woff) format('woff');
	unicode-range: U+99df, U+99ed, U+99f1, U+99ff, U+9a01, U+9a08, U+9a0e-9a0f, U+9a19, U+9a2b, U+9a30, U+9a36-9a37, U+9a40, U+9a43, U+9a45, U+9a4d, U+9a55, U+9a57, U+9a5a-9a5b, U+9a5f, U+9a62, U+9a65, U+9a69-9a6a, U+9aa8, U+9ab8, U+9ad3, U+9ae5, U+9aee, U+9b1a, U+9b27, U+9b2a, U+9b31, U+9b3c, U+9b41-9b45, U+9b4f, U+9b54, U+9b5a, U+9b6f, U+9b8e, U+9b91, U+9b9f, U+9bab, U+9bae, U+9bc9, U+9bd6, U+9be4, U+9be8, U+9c0d, U+9c10, U+9c12, U+9c15, U+9c25, U+9c32, U+9c3b, U+9c47, U+9c49, U+9c57, U+9ce5, U+9ce7, U+9ce9, U+9cf3-9cf4, U+9cf6, U+9d09, U+9d1b, U+9d26, U+9d28, U+9d3b, U+9d51, U+9d5d, U+9d60-9d61, U+9d6c, U+9d72, U+9da9, U+9daf, U+9db4, U+9dc4, U+9dd7, U+9df2, U+9df8-9dfa, U+9e1a, U+9e1e, U+9e75, U+9e79, U+9e7d, U+9e7f, U+9e92-9e93, U+9e97, U+9e9d, U+9e9f, U+9ea5, U+9eb4-9eb5, U+9ebb, U+9ebe, U+9ec3, U+9ecd-9ece, U+9ed4, U+9ed8, U+9edb-9edc, U+9ede, U+9ee8, U+9ef4, U+9f07-9f08, U+9f0e, U+9f13, U+9f20, U+9f3b, U+9f4a-9f4b, U+9f4e, U+9f52, U+9f5f, U+9f61, U+9f67, U+9f6a, U+9f6c, U+9f77, U+9f8d, U+9f90, U+9f95, U+9f9c, U+ac02-ac03, U+ac05-ac06, U+ac09-ac0f, U+ac17-ac18, U+ac1b, U+ac1e-ac1f, U+ac21-ac23;
}
/* [65] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.65.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.65.woff) format('woff');
	unicode-range: U+338c-339c, U+339f-33a0, U+33a2-33cb, U+33cf-33d0, U+33d3, U+33d6, U+33d8, U+33db-33dd, U+4e01, U+4e03, U+4e07-4e08, U+4e11, U+4e14-4e15, U+4e18-4e19, U+4e1e, U+4e32, U+4e38-4e39, U+4e42-4e43, U+4e45, U+4e4d-4e4f, U+4e56, U+4e58-4e59, U+4e5d-4e5e, U+4e6b, U+4e6d, U+4e73, U+4e76-4e77, U+4e7e, U+4e82, U+4e86, U+4e88, U+4e8e, U+4e90-4e92, U+4e94-4e95, U+4e98, U+4e9b, U+4e9e, U+4ea1-4ea2, U+4ea4-4ea6, U+4ea8, U+4eab, U+4ead-4eae, U+4eb6, U+4ec0-4ec1, U+4ec4, U+4ec7, U+4ecb, U+4ecd, U+4ed4-4ed5, U+4ed7-4ed9, U+4edd, U+4edf, U+4ee4, U+4ef0, U+4ef2, U+4ef6-4ef7, U+4efb, U+4f01, U+4f09, U+4f0b, U+4f0d-4f11, U+4f2f, U+4f34, U+4f36, U+4f38, U+4f3a, U+4f3c-4f3d;
}
/* [66] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.66.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.66.woff) format('woff');
	unicode-range: U+3136, U+3138, U+313a-3140, U+3143-3144, U+3150, U+3152, U+3154-3156, U+3158-315b, U+315d-315f, U+3162, U+3164-318c, U+318e, U+3200-321b, U+3231, U+3239, U+3251-325a, U+3260-327b, U+327e-327f, U+328a-3290, U+3294, U+329e, U+32a5, U+3380-3384, U+3388-338b;
}
/* [67] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.67.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.67.woff) format('woff');
	unicode-range: U+2f7d, U+2f7f-2f8b, U+2f8e-2f90, U+2f92-2f97, U+2f99-2fa0, U+2fa2-2fa3, U+2fa5-2fa9, U+2fac-2fb1, U+2fb3-2fbc, U+2fc1-2fca, U+2fcd-2fd4, U+3003, U+3012-3019, U+301c, U+301e-3020, U+3036, U+3041, U+3043, U+3045, U+3047, U+3049, U+304e, U+3050, U+3052, U+3056, U+305a, U+305c, U+305e, U+3062, U+3065, U+306c, U+3070-307d, U+3080, U+3085, U+3087, U+308e, U+3090-3091, U+30a1, U+30a5, U+30a9, U+30ae, U+30b1-30b2, U+30b4, U+30b6, U+30bc-30be, U+30c2, U+30c5, U+30cc, U+30d2, U+30d4, U+30d8-30dd, U+30e4, U+30e6, U+30e8, U+30ee, U+30f0-30f2, U+30f4-30f6, U+3133, U+3135;
}
/* [68] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.68.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.68.woff) format('woff');
	unicode-range: U+2541-254b, U+25a4-25a9, U+25b1, U+25b5, U+25b9, U+25bf, U+25c1, U+25c3, U+25c9-25ca, U+25cc, U+25ce, U+25d0-25d1, U+25e6, U+25ef, U+260f, U+261d, U+261f, U+262f, U+2660, U+2664, U+2667-2669, U+266d, U+266f, U+2716, U+271a, U+273d, U+2756, U+2776-277f, U+278a-2793, U+2963, U+2965, U+2ac5-2ac6, U+2acb-2acc, U+2f00, U+2f04, U+2f06, U+2f08, U+2f0a-2f0b, U+2f11-2f12, U+2f14, U+2f17-2f18, U+2f1c-2f1d, U+2f1f-2f20, U+2f23-2f26, U+2f28-2f29, U+2f2b, U+2f2d, U+2f2f-2f32, U+2f38, U+2f3c-2f40, U+2f42-2f4c, U+2f4f-2f52, U+2f54-2f58, U+2f5a-2f66, U+2f69-2f70, U+2f72-2f76, U+2f78, U+2f7a-2f7c;
}
/* [69] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.69.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.69.woff) format('woff');
	unicode-range: U+2479-2487, U+249c-24d1, U+24d3-24d7, U+24d9-24e9, U+24eb-24f4, U+2500-2501, U+2503, U+250c-2513, U+2515-2516, U+2518-2540;
}
/* [70] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.70.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.70.woff) format('woff');
	unicode-range: U+215b-215e, U+2162-2169, U+2170-2179, U+2195-2199, U+21b0-21b4, U+21bc, U+21c0, U+21c4-21c5, U+21cd, U+21cf-21d4, U+21e0-21e3, U+21e6-21e9, U+2200, U+2202-2203, U+2206-2209, U+220b-220c, U+220f, U+2211, U+2213, U+221a, U+221d-2220, U+2222, U+2225-2227, U+2229-222c, U+222e, U+2234-2237, U+223d, U+2243, U+2245, U+2248, U+2250-2253, U+225a, U+2260-2262, U+2264-2267, U+226a-226b, U+226e-2273, U+2276-2277, U+2279-227b, U+2280-2287, U+228a-228b, U+2295-2297, U+22a3-22a5, U+22bb-22bc, U+22ce-22cf, U+22da-22db, U+22ee-22ef, U+2306, U+2312, U+2314, U+2467-2478;
}
/* [71] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.71.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.71.woff) format('woff');
	unicode-range: U+81-82, U+84, U+a2-a5, U+a7-a8, U+aa, U+ac, U+b1-b3, U+b6, U+b8-ba, U+bc-be, U+c0, U+c2, U+c6-cb, U+ce-d0, U+d4, U+d8-d9, U+db-dc, U+de-df, U+e6, U+eb, U+ee-f0, U+f4, U+f7-f9, U+fb, U+fe-ff, U+111, U+126-127, U+132-133, U+138, U+13f-142, U+149-14b, U+152-153, U+166-167, U+2bc, U+2c7, U+2d0, U+2d8-2d9, U+2db-2dd, U+391-394, U+396-3a1, U+3a3-3a9, U+3b2-3b6, U+3b8, U+3bc, U+3be-3c1, U+3c3-3c9, U+2010, U+2015-2016, U+2018-2019, U+201b, U+201f-2021, U+2025, U+2030, U+2033-2036, U+203c, U+203e, U+2042, U+2074, U+207a-207f, U+2081-2084, U+2109, U+2113, U+2116, U+2121, U+2126, U+212b, U+2153-2154;
}
/* [72] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.72.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.72.woff) format('woff');
	unicode-range: U+e8, U+2da, U+2160, U+2194, U+3054, U+3058, U+306d, U+3086, U+308d, U+30ac, U+30bb, U+30c4, U+30cd-30ce, U+30e2, U+3132, U+3146, U+3149, U+339d, U+4e3b, U+4f0a, U+4fdd, U+4fe1, U+5409, U+540c, U+5834, U+592a-592b, U+5b9a, U+5dde, U+5e0c, U+5e73, U+5f0f, U+60f3, U+653f, U+661f, U+662f, U+667a, U+683c, U+6b4c, U+6c11, U+767c, U+76ee, U+76f4, U+77f3, U+79d1, U+7a7a, U+7b2c, U+7d22, U+8207, U+8a00, U+8a71, U+9280, U+9580, U+958b, U+96c6, U+9762, U+98df, U+9ed1, U+ac2d, U+adc8, U+add3, U+af48, U+b014, U+b134-b135, U+b158, U+b2aa, U+b35f, U+b6a4, U+b9cf, U+bb63, U+bd23, U+be91, U+c29b, U+c3f4, U+c42c, U+c55c, U+c573, U+c58f, U+c78c, U+c7dd, U+c8f5, U+cad1, U+cc48, U+cf10, U+cf20, U+d03c, U+d07d, U+d2a0, U+d30e, U+d38d, U+d3a8, U+d3c8, U+d5e5, U+d5f9, U+d6e4, U+f90a, U+ff02, U+ff1c;
}
/* [73] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.73.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.73.woff) format('woff');
	unicode-range: U+3b1, U+2466, U+25a1, U+25a3, U+261c, U+3008-3009, U+305b, U+305d, U+3069, U+30a7, U+30ba, U+30cf, U+30ef, U+3151, U+3157, U+4e4b, U+4e5f, U+4e8c, U+4eca, U+4ed6, U+4f5b, U+50cf, U+5149, U+5165, U+5171, U+5229, U+529b, U+5316, U+539f, U+53f2, U+571f, U+5728, U+58eb, U+591c, U+5b78, U+5c11, U+5c55, U+5ddd, U+5e02, U+5fb7, U+60c5, U+610f, U+611f, U+6625, U+66f8, U+6797, U+679c, U+682a, U+6d2a, U+706b, U+7406, U+767b, U+76f8, U+77e5, U+7acb, U+898b, U+8a69, U+8def, U+8fd1, U+901a, U+90e8, U+91cd, U+975e, U+ae14, U+ae6c, U+aec0, U+afc7, U+afc9, U+b01c, U+b028, U+b308, U+b311, U+b314, U+b31c, U+b524, U+b560, U+b764, U+b920, U+b9e3, U+bd48, U+be7d, U+c0db, U+c231, U+c270, U+c2e3, U+c37d, U+c3ed, U+c530, U+c6a5, U+c6dc, U+c7a4, U+c954, U+c974, U+d000, U+d565, U+d667, U+d6c5, U+d79d, U+ff1e;
}
/* [74] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.74.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.74.woff) format('woff');
	unicode-range: U+131, U+2032, U+2465, U+2642, U+3048, U+3051, U+3083-3084, U+308f, U+30c0, U+30d1, U+30d3, U+30d6, U+30df, U+30e7, U+3153, U+4e16, U+4e8b, U+4ee5, U+5206, U+52a0, U+52d5, U+53e4, U+53ef, U+54c1, U+57ce, U+597d, U+5b8c, U+5ea6, U+5f8c, U+5f97, U+6210, U+6240, U+624b, U+6728, U+6bd4, U+7236, U+7269, U+7279, U+738b, U+7528, U+7530, U+767e, U+798f, U+8005, U+8a18, U+90fd, U+91cc, U+9577, U+9593, U+98a8, U+ac20, U+acf6, U+ad90, U+af5d, U+af80, U+afcd, U+aff0, U+b0a1, U+b0b5, U+b1fd, U+b2fc, U+b380, U+b51b, U+b584, U+b5b3, U+b8fd, U+b93c, U+b9f4, U+bb44, U+bc08, U+bc27, U+bc49, U+be55, U+be64, U+bfb0, U+bfc5, U+c178, U+c21f, U+c314, U+c4f1, U+c58d, U+c664, U+c698, U+c6a7, U+c6c1, U+c9ed, U+cac0, U+cacc, U+cad9, U+ccb5, U+cdcc, U+d0e4, U+d143, U+d320, U+d330, U+d54d, U+ff06, U+ff1f, U+ff5e;
}
/* [75] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.75.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.75.woff) format('woff');
	unicode-range: U+b4, U+20a9, U+20ac, U+2190, U+24d8, U+2502, U+2514, U+2592, U+25c7-25c8, U+2663, U+3060, U+3064, U+3081, U+3088, U+30a3, U+30a6, U+30aa, U+30b5, U+30c7, U+30ca-30cb, U+30d0, U+30e3, U+30e5, U+339e, U+4e09, U+4eac, U+4f5c, U+5167-5168, U+516c, U+51fa, U+5408, U+540d, U+591a, U+5b57, U+6211, U+65b9, U+660e, U+6642, U+6700, U+6b63, U+6e2f, U+7063, U+7532, U+793e, U+81ea, U+8272, U+82b1, U+897f, U+8eca, U+91ce, U+ac38, U+ad76, U+ae84, U+aecc, U+b07d, U+b0b1, U+b215, U+b2a0, U+b310, U+b3d7, U+b52a, U+b618, U+b775, U+b797, U+bcd5, U+bd59, U+be80, U+bea8, U+bed1, U+bee4-bee5, U+c060, U+c2ef, U+c329, U+c3dc, U+c597, U+c5bd, U+c5e5, U+c69c, U+c9d6, U+ca29, U+ca5c, U+ca84, U+cc39, U+cc3b, U+ce89, U+cee5, U+cf65, U+cf85, U+d058, U+d145, U+d22d, U+d325, U+d37d, U+d3ad, U+d769, U+ff0c;
}
/* [76] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.76.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.76.woff) format('woff');
	unicode-range: U+2161, U+2228, U+2299, U+2464, U+2517, U+2640, U+3042, U+304a, U+3053, U+3061, U+307f, U+3082, U+308c, U+3092, U+30a8, U+30ab, U+30ad, U+30b0, U+30b3, U+30b7, U+30c1, U+30c6, U+30c9, U+30d5, U+30d7, U+30de, U+30e0-30e1, U+30ec-30ed, U+4e0b, U+4e0d, U+4ee3, U+53f0, U+548c, U+5b89, U+5bb6, U+5c0f, U+611b, U+6771, U+6aa2, U+6bcd, U+6c34, U+6cd5, U+6d77, U+767d, U+795e, U+8ecd, U+9999, U+9ad8, U+ac07, U+ac1a, U+ac40, U+ad0c, U+ad88, U+ada4, U+ae01, U+ae65, U+aebd, U+aec4, U+afe8, U+b139, U+b205, U+b383, U+b38c, U+b42c, U+b461, U+b55c, U+b78f, U+b8fb, U+b9f7, U+bafc, U+bc99, U+bed8, U+bfcd, U+c0bf, U+c0f9, U+c167, U+c204, U+c20f, U+c22f, U+c258, U+c298, U+c2bc, U+c388, U+c501, U+c50c, U+c5b9, U+c5ce, U+c641, U+c648, U+c73d, U+ca50, U+ca61, U+cc4c, U+ceac, U+d0d4, U+d5f7, U+d6d7, U+ff1a;
}
/* [77] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.77.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.77.woff) format('woff');
	unicode-range: U+2103, U+2463, U+25c6, U+25cb, U+266c, U+3001, U+300a, U+3046, U+304c-304d, U+304f, U+3055, U+3059, U+3063, U+3066-3068, U+306f, U+3089, U+30b8, U+30bf, U+314f, U+4e0a, U+570b, U+5730, U+5916, U+5929, U+5c71, U+5e74, U+5fc3, U+601d, U+6027, U+63d0, U+6709, U+6734, U+751f, U+7684, U+82f1, U+9053, U+91d1, U+97f3, U+ac2f, U+ac4d, U+adc4, U+ade4, U+ae41, U+ae4d-ae4e, U+aed1, U+afb9, U+b0e0, U+b299, U+b365, U+b46c, U+b480, U+b4c8, U+b7b4, U+b819, U+b918, U+baab, U+bab9, U+be8f, U+bed7, U+c0ec, U+c19f, U+c1a5, U+c3d9, U+c464, U+c53d, U+c553, U+c570, U+c5cc, U+c633, U+c6a4, U+c7a3, U+c7a6, U+c886, U+c9d9-c9da, U+c9ec, U+ca0c, U+cc21, U+cd1b, U+cd78, U+cdc4, U+cef8, U+cfe4, U+d0a5, U+d0b5, U+d0ec, U+d15d, U+d188, U+d23c, U+d2ac, U+d729, U+d79b, U+ff01, U+ff08-ff09, U+ff5c;
}
/* [78] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.78.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.78.woff) format('woff');
	unicode-range: U+2039-203a, U+223c, U+25b3, U+25b7, U+25bd, U+25cf, U+266a, U+3002, U+300b, U+304b, U+3057, U+305f, U+306a-306b, U+307e, U+308a-308b, U+3093, U+30a2, U+30af, U+30b9, U+30c3, U+30c8, U+30e9-30eb, U+33a1, U+4e00, U+524d, U+5357, U+5b50, U+7121, U+884c, U+9751, U+ac94, U+aebe, U+aecd, U+af08, U+af41, U+af49, U+b010, U+b053, U+b109, U+b11b, U+b128, U+b154, U+b291, U+b2e6, U+b301, U+b385, U+b525, U+b5b4, U+b729, U+b72f, U+b738, U+b7ff, U+b837, U+b975, U+ba67, U+bb47, U+bc1f, U+bd90, U+bfd4, U+c27c, U+c324, U+c379, U+c3e0, U+c465, U+c53b, U+c58c, U+c610, U+c653, U+c6cd, U+c813, U+c82f, U+c999, U+c9e0, U+cac4, U+cad3, U+cbd4, U+cc10, U+cc22, U+ccb8, U+ccbc, U+cda5, U+ce84, U+cea3, U+cf67, U+cfe1, U+d241, U+d30d, U+d31c, U+d391, U+d401, U+d479, U+d5c9, U+d5db, U+d649, U+d6d4;
}
/* [79] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.79.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.79.woff) format('woff');
	unicode-range: U+b0, U+e9, U+2193, U+2462, U+260e, U+261e, U+300e-300f, U+3044, U+30a4, U+30fb-30fc, U+314d, U+5973, U+6545, U+6708, U+7537, U+ac89, U+ac9c, U+acc1, U+ad04, U+ad75, U+ad7d, U+ae45, U+ae61, U+af42, U+b0ab, U+b0af, U+b0b3, U+b12c, U+b194, U+b1a8, U+b220, U+b258, U+b284, U+b2ff, U+b315, U+b371, U+b3d4-b3d5, U+b460, U+b527, U+b534, U+b810, U+b818, U+b98e, U+ba55, U+bbac, U+bc0b, U+bc40, U+bca1, U+bccd, U+bd93, U+be54, U+be5a, U+bf08, U+bf50, U+bf55, U+bfdc, U+c0c0, U+c0d0, U+c0f4, U+c100, U+c11e, U+c170, U+c20d, U+c274, U+c290, U+c308, U+c369, U+c539, U+c587, U+c5ff, U+c6ec, U+c70c, U+c7ad, U+c7c8, U+c83c, U+c881, U+cb48, U+cc60, U+ce69, U+ce6b, U+ce75, U+cf04, U+cf08, U+cf55, U+cf70, U+cffc, U+d0b7, U+d1a8, U+d2c8, U+d384, U+d47c, U+d48b, U+d5dd, U+d5e8, U+d720, U+d759, U+f981;
}
/* [80] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.80.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.80.woff) format('woff');
	unicode-range: U+e0, U+e2, U+395, U+3b7, U+3ba, U+2460-2461, U+25a0, U+3010-3011, U+306e, U+30f3, U+314a, U+314c, U+5927, U+65b0, U+7e41, U+97d3, U+9ad4, U+ad49, U+ae0b, U+ae0d, U+ae43, U+ae5d, U+aecf, U+af3c, U+af64, U+afd4, U+b080, U+b084, U+b0c5, U+b10c, U+b1e8, U+b2ac, U+b36e, U+b451, U+b515, U+b540, U+b561, U+b6ab, U+b6b1, U+b72c, U+b730, U+b744, U+b800, U+b8ec, U+b8f0, U+b904, U+b968, U+b96d, U+b987, U+b9d9, U+bb36, U+bb49, U+bc2d, U+bc43, U+bcf6, U+bd89, U+be57, U+be61, U+bed4, U+c090, U+c130, U+c148, U+c19c, U+c2f9, U+c36c, U+c37c, U+c384, U+c3df, U+c575, U+c584, U+c660, U+c719, U+c816, U+ca4d, U+ca54, U+cabc, U+cb49, U+cc14, U+cff5, U+d004, U+d038, U+d0b4, U+d0d3, U+d0e0, U+d0ed, U+d131, U+d1b0, U+d31f, U+d33d, U+d3a0, U+d3ab, U+d514, U+d584, U+d6a1, U+d6cc, U+d749, U+d760, U+d799;
}
/* [81] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.81.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.81.woff) format('woff');
	unicode-range: U+24, U+60, U+3b9, U+3bb, U+3bd, U+2191, U+2606, U+300c-300d, U+3131, U+3134, U+3139, U+3141-3142, U+3148, U+3161, U+3163, U+321c, U+4eba, U+5317, U+ac31, U+ac77, U+ac9f, U+acb9, U+acf0-acf1, U+acfd, U+ad73, U+af3d, U+b00c, U+b04a, U+b057, U+b0c4, U+b188, U+b1cc, U+b214, U+b2db, U+b2ee, U+b304, U+b4ed, U+b518, U+b5bc, U+b625, U+b69c-b69d, U+b7ac, U+b801, U+b86c, U+b959, U+b95c, U+b985, U+ba48, U+bb58, U+bc0c, U+bc38, U+bc85, U+bc9a, U+bf40, U+c068, U+c0bd, U+c0cc, U+c12f, U+c149, U+c1e0, U+c22b, U+c22d, U+c250, U+c2fc, U+c300, U+c313, U+c370, U+c3d8, U+c557, U+c580, U+c5e3, U+c62e, U+c634, U+c6f0, U+c74d, U+c783, U+c78e, U+c796, U+c7bc, U+c92c, U+ca4c, U+cc1c, U+cc54, U+cc59, U+ce04, U+cf30, U+cfc4, U+d140, U+d321, U+d38c, U+d399, U+d54f, U+d587, U+d5d0, U+d6e8, U+d770;
}
/* [82] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.82.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.82.woff) format('woff');
	unicode-range: U+d7, U+ea, U+fc, U+2192, U+25bc, U+3000, U+3137, U+3145, U+315c, U+7f8e, U+ac13, U+ac71, U+ac90, U+acb8, U+ace7, U+ad7f, U+ae50, U+aef4, U+af34, U+afbc, U+b048, U+b09a, U+b0ad, U+b0bc, U+b113, U+b125, U+b141, U+b20c, U+b2d9, U+b2ed, U+b367, U+b369, U+b374, U+b3cb, U+b4ec, U+b611, U+b760, U+b81b, U+b834, U+b8b0, U+b8e1, U+b989, U+b9d1, U+b9e1, U+b9fa, U+ba4d, U+ba78, U+bb35, U+bb54, U+bbf9, U+bc11, U+bcb3, U+bd05, U+bd95, U+bdd4, U+be10, U+bed0, U+bf51, U+c0d8, U+c232, U+c2b7, U+c2eb, U+c378, U+c500, U+c52c, U+c549, U+c568, U+c598, U+c5c9, U+c61b, U+c639, U+c67c, U+c717, U+c78a, U+c80a, U+c90c-c90d, U+c950, U+c9e7, U+cbe4, U+cca9, U+cce4, U+cdb0, U+ce78, U+ce94, U+ce98, U+cf8c, U+d018, U+d034, U+d0f1, U+d1b1, U+d280, U+d2f8, U+d338, U+d380, U+d3b4, U+d610, U+d69f, U+d6fc, U+d758;
}
/* [83] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.83.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.83.woff) format('woff');
	unicode-range: U+e7, U+2022, U+203b, U+25c0, U+2605, U+2661, U+3147, U+318d, U+672c, U+8a9e, U+acaa, U+acbc, U+ad1c, U+ae4a, U+ae5c, U+b044, U+b054, U+b0c8-b0c9, U+b2a6, U+b2d0, U+b35c, U+b364, U+b428, U+b454, U+b465, U+b4b7, U+b4e3, U+b51c, U+b5a1, U+b784, U+b790, U+b7ab, U+b7f4, U+b82c, U+b835, U+b8e9, U+b8f8, U+b9d8, U+b9f9, U+ba5c, U+ba64, U+babd, U+bb18, U+bb3b, U+bbff, U+bc0d, U+bc45, U+bc97, U+bcbc, U+be45, U+be75, U+be7c, U+bfcc, U+c0b6, U+c0f7, U+c14b, U+c2b4, U+c30d, U+c4f8, U+c5bb, U+c5d1, U+c5e0, U+c5ee, U+c5fd, U+c606, U+c6c5, U+c6e0, U+c708, U+c81d, U+c820, U+c824, U+c878, U+c918, U+c96c, U+c9e4, U+c9f1, U+cc2e, U+cd09, U+cea1, U+cef5, U+cef7, U+cf64, U+cf69, U+cfe8, U+d035, U+d0ac, U+d230, U+d234, U+d2f4, U+d31d, U+d575, U+d578, U+d608, U+d614, U+d718, U+d751, U+d761, U+d78c, U+d790;
}
/* [84] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.84.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.84.woff) format('woff');
	unicode-range: U+2665, U+3160, U+4e2d, U+6587, U+65e5, U+ac12, U+ac14, U+ac16, U+ac81, U+ad34, U+ade0, U+ae54, U+aebc, U+af2c, U+afc0, U+afc8, U+b04c, U+b08c, U+b099, U+b0a9, U+b0ac, U+b0ae, U+b0b8, U+b123, U+b179, U+b2e5, U+b2f7, U+b4c0, U+b531, U+b538, U+b545, U+b550, U+b5a8, U+b6f0, U+b728, U+b73b, U+b7ad, U+b7ed, U+b809, U+b864, U+b86d, U+b871, U+b9bf, U+b9f5, U+ba40, U+ba4b, U+ba58, U+ba87, U+baac, U+bbc0, U+bc16, U+bc34, U+bd07, U+bd99, U+be59, U+bfd0, U+c058, U+c0e4, U+c0f5, U+c12d, U+c139, U+c228, U+c529, U+c5c7, U+c635, U+c637, U+c735, U+c77d, U+c787, U+c789, U+c8c4, U+c989, U+c98c, U+c9d0, U+c9d3, U+cc0c, U+cc99, U+cd0c, U+cd2c, U+cd98, U+cda4, U+ce59, U+ce60, U+ce6d, U+cea0, U+d0d0-d0d1, U+d0d5, U+d14d, U+d1a4, U+d29c, U+d2f1, U+d301, U+d39c, U+d3bc, U+d4e8, U+d540, U+d5ec, U+d640, U+d750;
}
/* [85] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.85.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.85.woff) format('woff');
	unicode-range: U+5e, U+25b2, U+25b6, U+314e, U+ac24, U+ace1, U+ace4, U+ae68, U+af2d, U+b0d0, U+b0e5, U+b150, U+b155, U+b193, U+b2c9, U+b2dd, U+b3c8, U+b3fc, U+b410, U+b458, U+b4dd, U+b5a0, U+b5a4, U+b5bb, U+b7b5, U+b838, U+b840, U+b86f, U+b8f9, U+b960, U+b9e5, U+bab8, U+bb50, U+bc1d, U+bc24-bc25, U+bca8, U+bcbd, U+bd04, U+bd10, U+bd24, U+be48, U+be5b, U+be68, U+c05c, U+c12c, U+c140, U+c15c, U+c168, U+c194, U+c219, U+c27d, U+c2a8, U+c2f1, U+c2f8, U+c368, U+c554-c555, U+c559, U+c564, U+c5d8, U+c5fc, U+c625, U+c65c, U+c6b1, U+c728, U+c794, U+c84c, U+c88c, U+c8e0, U+c8fd, U+c998, U+c9dd, U+cc0d, U+cc30, U+ceec, U+cf13, U+cf1c, U+cf5c, U+d050, U+d07c, U+d0a8, U+d134, U+d138, U+d154, U+d1f4, U+d2bc, U+d329, U+d32c, U+d3d0, U+d3f4, U+d3fc, U+d56b, U+d5cc, U+d600-d601, U+d639, U+d6c8, U+d754, U+d765;
}
/* [86] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.86.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.86.woff) format('woff');
	unicode-range: U+3c-3d, U+2026, U+24d2, U+314b, U+ac11, U+acf3, U+ad74, U+ad81, U+adf9, U+ae34, U+af43, U+afb8, U+b05d, U+b07c, U+b110, U+b118, U+b17c, U+b180, U+b18d, U+b192, U+b2cc, U+b355, U+b378, U+b4a4, U+b4ef, U+b78d, U+b799, U+b7a9, U+b7fd, U+b807, U+b80c, U+b839, U+b9b4, U+b9db, U+ba3c, U+bab0, U+bba4, U+bc94, U+be4c, U+c154, U+c1c4, U+c26c, U+c2ac, U+c2ed, U+c4f4, U+c55e, U+c561, U+c571, U+c5b5, U+c5c4, U+c654-c655, U+c695, U+c6e8, U+c6f9, U+c724, U+c751, U+c775, U+c7a0, U+c7c1, U+c874, U+c880, U+c9d5, U+c9f8, U+cabd, U+cc29, U+cc2c, U+cca8, U+ccab, U+ccd0, U+ce21, U+ce35, U+ce7c, U+ce90, U+cee8, U+cef4, U+cfe0, U+d070, U+d0b9, U+d0c1, U+d0c4, U+d0c8, U+d15c, U+d1a1, U+d2c0, U+d300, U+d314, U+d3ed, U+d478, U+d480, U+d48d, U+d508, U+d53d, U+d5e4, U+d611, U+d61c, U+d68d, U+d6a8, U+d798;
}
/* [87] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.87.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.87.woff) format('woff');
	unicode-range: U+23, U+25, U+5f, U+a9, U+ac08, U+ac78, U+aca8, U+acac, U+ace8, U+ad70, U+adc0, U+addc, U+b137, U+b140, U+b208, U+b290, U+b2f5, U+b3c5, U+b3cc, U+b420, U+b429, U+b529, U+b530, U+b77d, U+b79c, U+b7a8, U+b7c9, U+b7f0, U+b7fc, U+b828, U+b860, U+b9ad, U+b9c1, U+b9c9, U+b9dd-b9de, U+b9e8, U+ba38-ba39, U+babb, U+bc00, U+bc8c, U+bca0, U+bca4, U+bcd1, U+bcfc, U+bd09, U+bdf0, U+be60, U+c0ad, U+c0b4, U+c0bc, U+c190, U+c1fc, U+c220, U+c288, U+c2b9, U+c2f6, U+c528, U+c545, U+c558, U+c5bc, U+c5d4, U+c600, U+c644, U+c6c0, U+c6c3, U+c721, U+c798, U+c7a1, U+c811, U+c838, U+c871, U+c904, U+c990, U+c9dc, U+cc38, U+cc44, U+cca0, U+cd1d, U+cd95, U+cda9, U+ce5c, U+cf00, U+cf58, U+d150, U+d22c, U+d305, U+d328, U+d37c, U+d3f0, U+d551, U+d5a5, U+d5c8, U+d5d8, U+d63c, U+d64d, U+d669, U+d734, U+d76c;
}
/* [88] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.88.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.88.woff) format('woff');
	unicode-range: U+26, U+2b, U+3e, U+40, U+7e, U+ac01, U+ac19, U+ac1d, U+aca0, U+aca9, U+acb0, U+ad8c, U+ae09, U+ae38, U+ae40, U+aed8, U+b09c, U+b0a0, U+b108, U+b204, U+b298, U+b2d8, U+b2eb-b2ec, U+b2f4, U+b313, U+b358, U+b450, U+b4e0, U+b54c, U+b610, U+b780, U+b78c, U+b791, U+b8e8, U+b958, U+b974, U+b984, U+b9b0, U+b9bc-b9bd, U+b9ce, U+ba70, U+bbfc, U+bc0f, U+bc15, U+bc1b, U+bc31, U+bc95, U+bcc0, U+bcc4, U+bd81, U+bd88, U+c0c8, U+c11d, U+c13c, U+c158, U+c18d, U+c1a1, U+c21c, U+c4f0, U+c54a, U+c560, U+c5b8, U+c5c8, U+c5f4, U+c628, U+c62c, U+c678, U+c6cc, U+c808, U+c810, U+c885, U+c88b, U+c900, U+c988, U+c99d, U+c9c8, U+cc3d-cc3e, U+cc45, U+cd08, U+ce20, U+cee4, U+d074, U+d0a4, U+d0dd, U+d2b9, U+d3b8, U+d3c9, U+d488, U+d544, U+d559, U+d56d, U+d588, U+d615, U+d648, U+d655, U+d658, U+d65c;
}
/* [89] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.89.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.89.woff) format('woff');
	unicode-range: U+d, U+7c, U+ac10, U+ac15, U+ac74, U+ac80, U+ac83, U+acc4, U+ad11, U+ad50, U+ad6d, U+adfc, U+ae00, U+ae08, U+ae4c, U+b0a8, U+b124, U+b144, U+b178, U+b274, U+b2a5, U+b2e8, U+b2f9, U+b354, U+b370, U+b418, U+b41c, U+b4f1, U+b514, U+b798, U+b808, U+b824-b825, U+b8cc, U+b978, U+b9d0, U+b9e4, U+baa9, U+bb3c, U+bc18, U+bc1c, U+bc30, U+bc84, U+bcf5, U+bcf8, U+bd84, U+be0c, U+be14, U+c0b0, U+c0c9, U+c0dd, U+c124, U+c2dd, U+c2e4, U+c2ec, U+c54c, U+c57c-c57d, U+c591, U+c5c5-c5c6, U+c5ed, U+c608, U+c640, U+c6b8, U+c6d4, U+c784, U+c7ac, U+c800-c801, U+c9c1, U+c9d1, U+cc28, U+cc98, U+cc9c, U+ccad, U+cd5c, U+cd94, U+cd9c, U+cde8, U+ce68, U+cf54, U+d0dc, U+d14c, U+d1a0, U+d1b5, U+d2f0, U+d30c, U+d310, U+d398, U+d45c, U+d50c, U+d53c, U+d560, U+d568, U+d589, U+d604, U+d6c4, U+d788;
}
/* [90] */
@font-face {
	font-family: 'Pretendard';
	font-style: normal;
	font-display: swap;
	font-weight: 600;
	src: url(../../../packages/pretendard/dist/web/static/woff2-dynamic-subset/Pretendard-SemiBold.subset.90.woff2) format('woff2'), url(../../../packages/pretendard/dist/web/static/woff-dynamic-subset/Pretendard-SemiBold.subset.90.woff) format('woff');
	unicode-range: U+ac04, U+ac1c, U+ac70, U+ac8c, U+acbd, U+acf5, U+acfc, U+ad00, U+ad6c, U+adf8, U+b098, U+b0b4, U+b294, U+b2c8, U+b300, U+b3c4, U+b3d9, U+b4dc, U+b4e4, U+b77c, U+b7ec, U+b85d, U+b97c, U+b9c8, U+b9cc, U+ba54, U+ba74, U+ba85, U+baa8, U+bb34, U+bb38, U+bbf8, U+bc14, U+bc29, U+bc88, U+bcf4, U+bd80, U+be44, U+c0c1, U+c11c, U+c120, U+c131, U+c138, U+c18c, U+c218, U+c2b5, U+c2e0, U+c544, U+c548, U+c5b4, U+c5d0, U+c5ec, U+c5f0, U+c601, U+c624, U+c694, U+c6a9, U+c6b0, U+c6b4, U+c6d0, U+c704, U+c720, U+c73c, U+c74