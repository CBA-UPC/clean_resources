pageview_candidate_N_E=self.webpackChunk_N_E||[]).push([[8016],{4431:function(e,t){"use strict";/*! get-video-id v3.6.5 | @license MIT © Michael Wuergler | https://github.com/radiovisual/get-video-id */function r(e){return e.includes("?")&&(e=e.split("?")[0]),e.includes("/")&&(e=e.split("/")[0]),e.includes("&")&&(e=e.split("&")[0]),e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r,i,n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l=[],o=!0,a=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){a=!0,i=e}finally{try{o||null==n.return||n.return()}finally{if(a)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=Array(t);r<t;r++)i[r]=e[r];return i}t.Z=function(e){if("string"!=typeof e)throw TypeError("get-video-id expects a string");var t=e;/<iframe/gi.test(t)&&(t=function(e){if("string"!=typeof e)throw TypeError("getSrc expected a string");var t=/src="(.*?)"/gm.exec(e);if(t&&t.length>=2)return t[1]}(t)||""),t=(t=(t=t.trim()).replace("-nocookie","")).replace("/www.","/");var n={id:null,service:null};if(/\/\/google/.test(t)){var l=t.match(/url=([^&]+)&/);l&&(t=decodeURIComponent(l[1]))}return/youtube|youtu\.be|y2u\.be|i.ytimg\./.test(t)?n={id:function(e){var t=e;t=(t=t.replace(/#t=.*$/,"")).replace(/^https?:\/\//,"");var i=/youtube:\/\/|youtu\.be\/|y2u\.be\//g;if(i.test(t))return r(t.split(i)[1]);var n=/\/shorts\//g;if(n.test(t))return r(t.split(n)[1]);var l=/v=|vi=/g;if(l.test(t))return r(t.split(l)[1].split("&")[0]);var o=/\/v\/|\/vi\/|\/watch\//g;if(o.test(t))return r(t.split(o)[1]);var a=/\/an_webp\//g;if(a.test(t))return r(t.split(a)[1]);var u=/\/e\//g;if(u.test(t))return r(t.split(u)[1]);var s=/\/embed\//g;if(s.test(t))return r(t.split(s)[1]);if(!/\/user\/([a-zA-Z\d]*)$/g.test(t)){if(/\/user\/(?!.*videos)/g.test(t))return r(t.split("/").pop());var d=/\/attribution_link\?.*v%3D([^%&]*)(%26|&|$)/;if(d.test(t))return r(t.match(d)[1])}}(t),service:"youtube"}:/vimeo/.test(t)?n={id:function(e){var t,r,n=e;n.includes("#")&&(n=i(n.split("#"),1)[0]),n.includes("?")&&!n.includes("clip_id=")&&(n=i(n.split("?"),1)[0]);var l=/https?:\/\/vimeo\.com\/event\/(\d+)$/.exec(n);if(l&&l[1])return l[1];var o=/https?:\/\/vimeo\.com\/(\d+)/.exec(n);return o&&o[1]?o[1]:(RegExp("https?://player.vimeo.com/video/[0-9]+$|https?://vimeo.com/channels|groups|album","gim").test(n)?(r=n.split("/"))&&r.length>0&&(t=r.pop()):/clip_id=/gim.test(n)&&(r=n.split("clip_id="))&&r.length>0&&(t=i(r[1].split("&"),1)[0]),t)}(t),service:"vimeo"}:/vine/.test(t)?n={id:function(e){var t=/https:\/\/vine\.co\/v\/([a-zA-Z\d]*)\/?/.exec(e);if(t&&t.length>1)return t[1]}(t),service:"vine"}:/videopress/.test(t)?n={id:function(e){if(e.includes("embed"))return t=/embed\/(\w{8})/,e.match(t)[1];t=/\/v\/(\w{8})/;var t,r=e.match(t);if(r&&r.length>0)return r[1]}(t),service:"videopress"}:/microsoftstream/.test(t)?n={id:function(e){var t=(e.includes("embed")?/https:\/\/web\.microsoftstream\.com\/embed\/video\/([a-zA-Z\d-]*)\/?/:/https:\/\/web\.microsoftstream\.com\/video\/([a-zA-Z\d-]*)\/?/).exec(e);if(t&&t.length>1)return t[1]}(t),service:"microsoftstream"}:/tiktok\.com/.test(t)?n={id:function(e){var t=/tiktok\.com(.*)\/video\/(\d+)/gm.exec(e);if(t&&t.length>2)return t[2]}(t),service:"tiktok"}:/(dailymotion\.com|dai\.ly)/.test(t)&&(n={id:function(e){var t=/dailymotion\.com(.*)(video)\/([a-zA-Z\d]+)/gm.exec(e);if(t)return t[3];var r=/dai\.ly\/([a-zA-Z\d]+)/gm.exec(e);if(r&&r.length>1)return r[1];var i=/dailymotion\.com(.*)video=([a-zA-Z\d]+)/gm.exec(e);if(i&&i.length>2)return i[2]}(t),service:"dailymotion"}),n}},6164:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let r=l.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:i}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n=i({},n,e)),n=i({},n,t);let u=n.loader,s=()=>null!=u?u().then(o):Promise.resolve(o(()=>null));return(n.loadableGenerated&&delete(n=i({},n,n.loadableGenerated)).loadableGenerated,"boolean"!=typeof n.ssr||n.ssr)?r(i({},n,{loader:s})):(delete n.webpack,delete n.modules,a(r,n))},t.noSSR=a;var i=r(9419).Z,n=r(3903).Z,l=(n(r(2784)),n(r(6890)));function o(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=(0,r(3903).Z)(r(2784));let n=i.default.createContext(null);t.LoadableContext=n},6890:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(9419).Z,n=(0,r(3903).Z)(r(2784)),l=r(3254);let o=[],a=[],u=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function o(){if(!i){let t=new d(e,r);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!u){let e=r.webpack?r.webpack():r.modules;e&&a.push(t=>{for(let r of e)if(-1!==t.indexOf(r))return o()})}function s(e,t){!function(){o();let e=n.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let a=n.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return n.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),n.default.useMemo(()=>{var t;return a.loading||a.error?n.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:i.retry}):a.loaded?n.default.createElement((t=a.loaded)&&t.default?t.default:t,e):null},[e,a])}return s.preload=()=>o(),s.displayName="LoadableComponent",n.default.forwardRef(s)}(s,e)}function f(e,t){let r=[];for(;e.length;){let i=e.pop();r.push(i(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{f(o).then(e,t)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(u=!0,t());f(a,e).then(r,r)})},window.__NEXT_PRELOADREADY=c.preloadReady,t.default=c},5237:function(e,t,r){e.exports=r(6164)}}]);