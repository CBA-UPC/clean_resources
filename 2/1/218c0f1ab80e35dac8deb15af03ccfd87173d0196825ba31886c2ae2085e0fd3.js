(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"20Jh":function(t,r,o){"use strict";var a=o("rePB"),i=o("q1tI"),u=o.n(i),l=o("/MKj"),c=o("7Zo4"),d=o("nDFm"),p=o.n(d),b=o("j8cX"),y=o("gGy4"),h=o("8rN0"),_=(o("bPPq"),u.a.createElement);function ownKeys(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.push.apply(o,a)}return o}ar m=function AdoPlaceholder(t){var r=t.name,o=t.children,a=t.section.parameters,u=t.isNoStylesAd,l=t.isWithoutMarginsPaddings,d=t.isBranding,m=t.isMobileNarrowColumn,O=t.className,v=(Object(y.k)()||{}).config,g=Object(i.useState)(null),j=g[0],w=g[1],S=Object(y.d)(),P=S.isNotMobileOnly,L=S.deviceType,A=r.toLowerCase(),D="".concat(A,"_").concat(L,"_height"),E=parseInt(Object(c.GetSectionParameterValue)(a,D),10)||0,C=null==v?void 0:v.bgPlugSrc;Object(i.useEffect)((function(){return function handleSetPostMountAdoConfig(){var t,r=null==v||null===(t=v.placeholders)||void 0===t?void 0:t.find((function(t){return t.id===A&&t.deviceType.includes(null==L?void 0:L.toLowerCase())}));r&&w(m&&P?_objectSpread(_objectSpread({},r),{},{enabled:!1}):r)}(),),[v]);return _("span",{className:"placeholder-wrapper"},function getPlaceholdersToRender(){var t,r;return j?j.enabled?[j]:[]:null!==(t=null==v||null===(r=v.placeholders)||void 0===r?void 0:r.filter(())&&void 0!==t?t:[]}().map((function(t,r){var a=p()(t);return _("div",{key:"".concat(t.id,"_").concat(r),className:Object(h.h)(["".concat(b.ADO_PLACEHOLDER_CLASSNAME),"".concat(b.ADO_PLACEHOLDER_CLASSNAME,"--").concat(a),d&&"".concat(b.ADO_PLACEHOLDER_CLASSNAME,"--branding"),u&&"".concat(b.ADO_PLACEHOLDER_CLASSNAME,"--without-styles"),l&&"".concat(b.ADO_PLACEHOLDER_CLASSNAME,"--without-margins-paddings"),"".concat(b.ADO_PLACEHOLDER_CLASSNAME,"--").concat(A),O]),style:{backgroundImage:"url(".concat((null==t?void 0:t.bgPlugSrc)||C,")")}},_("div",{id:A,style:{width:null==t?void 0:t.width,height:E||(null==t?void 0:t.height)},className:"ado-placeholder__content ado-placeholder__content--".concat(A)},o))})))};m.defaultProps={section:{},name:"",children:null,hasLogo:!0,className:null};r.a=Object(l.b)(()(m)},"2qu3":function(t,r,o){"use strict";var a=o("oI91"),i=o("/GRZ"),u=o("i2R6");function ownKeys(t,r){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.push.apply(o,a)}return o}function _objectSpread(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(o),!0).forEach((function(r){a(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}__esModule=!0,r.default=void 0;var l=function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}(o("q1tI")),c=o("8L3h"),d=o("jwwS");var p=[],b=[],y=!1;nction render(t,r){return l.default.createElement(t),r)}function createLoadableComponent(t,r){var o=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:render,webpack:null,modules:null},r),a=null;f(!y&&"function"==typeof o.webpack){var i=o.webpack();b.push(()}var u=function LoadableComponent(t,r){init();var i=l.default.useContext(d.LoadableContext),u=(0,c.useSubscription)(a);return l.default.useImperativeHandle(r,(,[]),i&&Array.isArray(o.modules)&&o.modules.forEach((),l.default.useMemo((,[t,u])};return u.preload=u.displayName="LoadableComponent",l.default.forwardRef(u)}var h=function(){eturn u(LoadableSubscription,[{key:"promise",value:,{key:"retry",value:function retry(){var t=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var r=this._res,o=this._opts;r.loading&&("number"==typeof o.delay&&(0===o.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){t._update({pastDelay:!0})}),o.delay)),"number"==typeof o.timeout&&(this._timeout=setTimeout((,o.timeout))),this._res.promise.then(().catch((),this._update({})}},{key:"_update",value:function _update(t){this._state=_objectSpread(_objectSpread({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},t),this._callbacks.forEach(()}},{key:"_clearTimeouts",value:,{key:"getCurrentValue",value:,{key:"subscribe",value:function subscribe(t){var r=this;return this._callbacks.add(t),}]),LoadableSubscription}();adable.Map=function LoadableMap(t){if("function"!=typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return createLoadableComponent(loadMap,t)},Loadable.preloadAll=Loadable.preloadReady=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(r){var o=function res(){return y=!0,r()};flushInitializers(b,t).then(o,o)}))},window.__NEXT_PRELOADREADY=Loadable.preloadReady;var _=Loadable;r.default=_},a6RD:function(t,r,o){"use strict";var a=o("oI91");__esModule=!0,r.noSSR=noSSR,r.default=function dynamic(t,r){var o=i.default,a={loading:function loading(t){t.error,t.isLoading;return t.pastDelay,null}};t instanceof Promise?a.loader="function"==typeof t?a.loader=t:"object"==typeof t&&(a=_objectSpread(_objectSpread({},a),t));if(a=_objectSpread(_objectSpread({},a),r),"object"==typeof t&&!(t instanceof Promise)&&(t.render&&(a.render=,t.modules)){o=i.default.Map;var u={},l=t.modules();Object.keys(l).forEach((function(t){var r=l[t];"function"!=typeof r.then?u[t]=r:u[t]=)),a.loader=u}a.loadableGenerated&&delete(a=_objectSpread(_objectSpread({},a),a.loadableGenerated)).loadableGenerated;if("boolean"==typeof a.ssr){if(!a.ssr)return delete a.ssr,noSSR(o,a);delete a.ssr}return o(a)};_interopRequireDefault(o("q1tI"));var i=_interopRequireDefault(o("2qu3"));bPPq:jwwS:function(t,r,o){"use strict";r.__esModule=!0,r.LoadableContext=void 0;var a=o("q1tI")).default.createContext(null);r.LoadableContext=a},nDFm:function(t,r){t.exports=t=>{const{deviceType:r}=t;return 1===r.length?r:r.includes("desktop")&&r.includes("tablet")?r.includes("smartphone")?"all-devices":"min-tablet":r.includes("smartphone")&&r.includes("tablet")?"max-tablet":void 0}}}]);