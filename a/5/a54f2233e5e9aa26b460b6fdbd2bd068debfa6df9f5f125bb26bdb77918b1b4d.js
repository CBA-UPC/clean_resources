(self.webpackChunk=self.webpackChunk||[]).push([[4938],{"5A3i":function(e){e.exports=[function(e,t,n){(function(t){n(2),f=n(5),l=n(7),p=f.version.split(".")[0],d=function(e){!o,e);var n,r=(n=o,function(){var e,t=c(n);if()){var r=c(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return u(this,e)});function o(){var e;return this,o),(e=r.call(this)).faastCleanup=function(){},e.widgetCleanup=function(){},e.widget=null,e}return i(o,null,[{key:"propTypes",get:function(){return{env:s.string.isRequired,query:s.object.isRequired,config:s.object,widgetParams:s.shape({selector:s.string.isRequired,apiUrl:s.string.isRequired,itemUrl:s.string.isRequired,userId:s.oneOfType([s.string,s.number]).isRequired,pulse:s.shape({providerId:s.string.isRequired,userRealm:s.string.isRequired,pulseUserId:s.string.isRequired,collectorBaseURl:s.string,cisBaseUrl:s.string,productType:s.oneOf(["Web","ResponsiveWeb","M-Site","Other"])})}),crossorigin:s.string,ff:s.string,onError:s.func}}}]),i(o,[{key:"componentDidMount",value:function(){var e=this,n=this.props,r=n.env,o=n.query,i=n.config,u=void 0===i?{}:i,c=n.widgetParams,a=n.onError,s=window||t;t.Messaging=null,"string"==typeof this.props.crossorigin&&(l.crossorigin=this.props.crossorigin),"string"==typeof this.props.ff&&(l.force=this.props.ff),l("messaging-widget",r,o,u).then((function(t){e.faastCleanup=t;var n=s.Messaging.Widget;delete s.Messaging;var r=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach((),e}({},{selector:e._wrapper},c);e.widget=new n(r),e.widgetCleanup=)).catch(()}},{key:"componentWillUnmount",value:,{key:"componentDidUpdate",value:function(e){var t=this;this.widget&&this.props.updates&&e.updates!==this.props.updates&&Object.keys(this.props.updates).forEach((function(e){var n="update".concat(e.charAt(0).toUpperCase()+e.slice(1),"Configuration");n in t.widget&&"function"==typeof t.widget[n]&&t.widget[n](t.props.updates[e])}))}},{key:"render",value:function(){var e=this;return p>=16?f.createElement("div",{ref:function(t){e._wrapper=t}}):f.createElement("div",null,f.createElement("div",{ref:))}}]),o}(f.Component);e.exports=d}).call(this,n(0))},function(e,t,n){"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),s=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.iterator,h={isMounted:enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}function _(){}.prototype.isReactComponent={},g.prototype.setState=g.prototype.forceUpdate=_.prototype=g.prototype;var w=b.prototype=new _;w.constructor=b,m(w,g.prototype),w.isPureReactComponent=!0;var T=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};r k=/\/+/g;$={current:null},q={transition:null},F={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:q,ReactCurrentOwner:E};t.Children={map:I,forEach:count:toArray:only:,t.Component=g,t.Fragment=i,t.Profiler=c,t.PureComponent=b,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=t.createContext=t.createElement=R,t.createFactory=t.createRef=t.forwardRef=t.isValidElement=j,t.lazy=t.memo=t.startTransition=t.unstable_act=t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=t.useSyncExternalStore=t.useTransition=t.version="18.1.0"},function(e,t,n){(function(n){var r,o,i;!function(t){tTimeout;o.prototype.catch=o.prototype.then=o.all=o.resolve=o.reject=o.race=o._immediateFn="function"==typeof n&&|o._unhandledRejectionFn=o._setImmediateFn=function(e){o._immediateFn=e},o._setUnhandledRejectionFn=function(e){o._unhandledRejectionFn=e},e.exports?e.exports=o:t.Promise||(t.Promise=o)}(this),function(n,u){"use strict";o=[],void 0===(i="function"==typeof(r=function(){var e;e="https://faast.advgo.net/deliver";var t=function(n,r,o,i){var u=document,c=0;return new Promise((function(a,s){i=i||{},e=t.force||e;var f,l=function(){if(4===f.readyState){if(200!==f.status)return 0===c?(++c,p()):s("Failed "+e);var n=function(e){var t,n,r;if(t=n=null,r=e?i.cssBefore:i.jsBefore){if(!(t=u.querySelector(r)))return s("Not found:"+r);n=t.parentNode}else n=e?u.querySelector("head"):u.querySelector("body");return ,r=function(e){return function(t){var n=u.querySelector(e?'link[href="'+t+'"]':'script[src="'+t+'"]');n&&(n.remove&&n.remove()||n.parentNode&&n.parentNode.removeChild(n))}},o=JSON.parse(f.responseText),l=function(){o.styles.forEach(r(!0)),o.scripts.forEach(r(!1))};!1!==i.css&&o.styles.map(().map(n(!0));var d=n(!1);!function e(n){if(0===n.length)return a(l);var r=n.shift(),o=u.createElement("script");o.src=r,o.setAttribute("charset","utf-8"),t.crossorigin&&o.setAttribute("crossorigin",t.crossorigin),o.onload=function(){e(n)},o.onerror=s,d(o)}(o.scripts.map((function(e){return e})))}},p=function(){(f=new XMLHttpRequest).onreadystatechange=l,f.open("POST",e,!0),f.setRequestHeader("Content-type","application/json"),"undefined"!=typeof window&&window.performance.mark("start_download_assets"),f.send(JSON.stringify({resourceName:n,environment:r,query:o}))};p()}))};return t.VERSION="1.1.5",t})?r.apply(t,o):r)||(e.exports=i)}()}).call(this,n(8).setImmediate)},)}}]);