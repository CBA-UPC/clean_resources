(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{"/MKj":function(e,n,o){"use strict";o.d(n,"a",(function(){return _})),o.d(n,"b",(function(){return T})),o.d(n,"c",(function(){return M})),o.d(n,"d",(function(){return y}));var s=o("at8e"),c=o("ejks"),i=o("i8i4");let u=var l=o("q1tI"),f=o.n(l);const d=Object(l.createContext)(null);onst notInitialized=let m=notInitialized;const refEquality=function createSelectorHook(e=d){const n=e===d?useReduxContext_useReduxContext:()=>Object(l.useContext)(e);return function useSelector(e,o=refEquality){const{store:s,subscription:c,getServerState:i}=n(),u=m(c.addNestedSub,s.getState,i||s.getState,e,o);return Object(l.useDebugValue)(u),u}}const y=createSelectorHook();var b=o("wx14");ar S=o("2mql"),g=o.n(S),P=o("0vxD");const O=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function pureFinalPropsSelectorFactory(e,n,o,s,{areStatesEqual:c,areOwnPropsEqual:i,areStatePropsEqual:u}){let l,f,d,m,y,b=!1;function handleSubsequentCalls(b,S){const g=!i(S,f),P=!c(b,l,S,f);return l=b,f=S,g&&P?):g?):P?):y}return ion createListenerCollection(){const e=u;let n=null,o=null;return{clearnotifygetsubscribe}const w={notify(){},get:;function createSubscription(e,n){let o,s=w;nst c={addNestedSub:notifyNestedSubs:handleChangeWrapper:handleChangeWrapper,isSubscribed:trySubscribe:trySubscribe,tryUnsubscribe:getListeners:()=>s};return c}const C=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement)?l.useLayoutEffect:l.useEffect;nst E=["reactReduxForwardedRef"];let x=notInitialized;const j=[null,null];r T=function connect(e,n,o,{pure:s,areStatesEqual:c=strictEqual,areOwnPropsEqual:i=shallowEqual,areStatePropsEqual:u=shallowEqual,areMergedPropsEqual:m=shallowEqual,forwardRef:y=!1,context:S=d}={}){const w=S,T=e),_=n),N=o),M=Boolean(e);return e=>{const n=e.displayName||e.name||"Component",o=`Connect(${n})`,s={shouldHandleStateChanges:M,displayName:o,wrappedComponentName:n,WrappedComponent:e,initMapStateToProps:T,initMapDispatchToProps:_,initMergeProps:N,areStatesEqual:c,areStatePropsEqual:u,areOwnPropsEqual:i,areMergedPropsEqual:m};function ConnectFunction(n){const[o,c,i]=Object(l.useMemo)([n]),u=Object(l.useMemo)([o,w]),d=Object(l.useContext)(u),m=Boolean(n.store)&&Boolean(n.store.getState)&&Boolean(n.store.dispatch),y=Boolean(d)&&Boolean(d.store);const S=m?n.store:d.store,g=y?d.getServerState:S.getState,T=Object(l.useMemo)([S]),[_,N]=Object(l.useMemo)([S,m,d]),k=Object(l.useMemo)([m,d,_]),R=Object(l.useRef)(),L=Object(l.useRef)(i),$=Object(l.useRef)(),I=Object(l.useRef)(!1),F=(Object(l.useRef)(!1),Object(l.useRef)(!1)),D=Object(l.useRef)();C([]);const B=Object(l.useMemo)([S,i]),W=Object(l.useMemo)([_]);let G;!captureWrapperProps,[L,R,I,i,$,N]);try{G=x(W,B,g?B)}catch(e){throw D.current&&(e.message+=`\nThe error may be correlated with this previous error:\n${D.current.stack}\n\n`),e}C(;const U=Object(l.useMemo)([c,e,G]);return Object(l.useMemo)([u,U,k])}const d=f.a.memo(ConnectFunction);if(d.WrappedComponent=e,d.displayName=ConnectFunction.displayName=o,y){const n=f.a.forwardRef(();return n.displayName=o,n.WrappedComponent=e,g()(n,e)}return g()(d,e)}};var _=function Provider({store:e,context:n,children:o,serverState:s}){const c=Object(l.useMemo)([e,s]),i=Object(l.useMemo)([e]);C([c,i]);const u=n||d;return f.a.createElement(u.Provider,{value:c},o)};function createStoreHook(e=d){const n=e===d?useReduxContext_useReduxContext:return const N=createStoreHook();onst M=createDispatchHook();var k,R;k=c.useSyncExternalStoreWithSelector,m=k,((s.useSyncExternalStore),R=i.unstable_batchedUpdates,u=R},"0vxD":function(e,n,o){"use strict";e.exports=o("DUzY")},"2mql":"2uyP":function(e,n,o){"use strict";var s=o("q1tI"),c=o.n(s),i=(o("f+Tx"),c.a.createElement);n.a=function Error500(){return i(c.a.Fragment,null,i("p",{className:"error-page__background"},i("span",{className:"error-page__background-status-code"},"500"),"nie można wyświetlić strony"),i("div",{className:"error-page__foreground error-page__foreground--error500"},i("p",{className:"error-page__foreground-header error-page__foreground-header--error500"},i("span",{className:"error-page__foreground-status-code"},"błąd 500"),"Witryna sieci Web nie może wyświetlić strony www")))(S),S}},ByNb:function(e,n,o){"use strict";o.r(n),o.d(n,"setIfResponseWasFromServiceWorker",(function(){return setIfResponseWasFromServiceWorker})),o.d(n,"resetResponseWasFromServiceWorker",(function(){return resetResponseWasFromServiceWorker})),o.d(n,"markResponseAsFromServiceWorker",(function(){return markResponseAsFromServiceWorker}));const s=o("SdLv"),markResponseAsFromServicwr",1)},setIfResponseWasFromServiceWorker=()=>{s.isBrowser&&localStorage.getItem("_is_swr")&&(window._is_swr=1,localStorage.removeItem("_is_swr"))},resetResponseWasFromServiceWorker=()=>{s.isBrowser&&(delete window._is_swr,localStorage.removeItem("_is_swr"))}},"DM+Z":function(e,n,o){"use strict";var s=o("TSYQ"),c=o.n(s),i=o("q1tI"),u=o.n(i),l=o("KENo"),f=(o("bZBt"),u.a.createElement),d=function Link(e){var n=e.href,o=e.children,s=e.full,i=e.modificator;return f("span",{className:c()(["link",s&&"link--full",i&&"link--".concat(i)])},f("span",{className:c()(["link__content",s&&"link__content--full"])},function renderChildren(){return u.a.Childrenef:n})}))}()))};d.defaultProps={href:void 0,children:[],full:!1,modificator:""},n.a=Object(l.a)(dpeOf=v},FGRN:function(e,n,o){const{CONTEXT_TYPE_ARTICLE:s,CONTEXT_TYPE_SECTION:c,CONTEXT_TYPE_SECTION_FULL_NAME:i}=o("sfWW"),formatAbTests=e=>e(e=>!!e).map(e=>{const[[n,o]=[]]=Object.entries(e);return`${n}_${o}`pare(n)).join("_"),getContentId=e=>{switch(e.resolution&&e.resolution.context?e.resolution.context:null){case s:return e.context.id;case c:return e.resolution.section.id;default:return null}};e.exports={getGtmContext:(e,n,o={})=>{if(!(e.resolution&&e.resolution.publication&&e.resolution.section&&e.context&&e.context.contextType))return{};const{resolution:s}=e;return{...o,site:s.publication.name,sectionId:s.section.id,contentType:(c=e.context.contextType,c&&c.toLowerCase()===i?"Section":c),contentId:getContentId(e),abTests:formatAbTests(n),login:"undefined"!=typeof window&&window.tvnLogin?window.tvnLogin:"no",userHash:"undefined"!=typeof window&&window.tvnUserHash?window.tvnUserHash:""};var c}}},KENo:function(e,n,o){"use strict";var s=o("1OyB"),c=o("vuIU"),i=o("Ji7U"),u=o("md7G"),l=o("foSv"),f=o("q1tI"),d=o.n(f),m=o("5/KZ"),y=o.n(m),b=d.a.createElement;function _createSuper(eurn!1}}();return function _createSuperInternal(){var o,s=Object(l.a)(e);if(n){var c=Object(l.a)(this).constructor;o=Reflect.construct(s,arguments,c)}else o=s.apply(this,arguments);return Object(u.a)(this,o)}}n.a=function WithErrorBoundary(e){return function(n){Object(i.a)(_class,n);var o=_createSuper(:!1},n}return Object(c.a)(_class,[{key:"componentDidCatch",value:function componentDidCatch(e,n){y()().captureException(e,n)}},{key:"render",value:function render(){return this.state.hasError?null:b(e,this.props)}}],[{key:"getDerivedStateFromErroror:!0}}}]),_class}(f.Component)}},Mj6V:function(e,n,o){var s,c;void 0===(c="function"==typeof(s=function(){var e,n,o={version:"0.2.0"},s=o.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div><-1+e)}o.con this},o.status=null,o.set=function(e){var n=o.isStarted();e=clamp(e,s.minimum,1),o.status=1===e?null:e;var u=o.render(!n),l=u.querySelector(s.barSelector),f=s.speed,d=s.easing;return u.offsetWidth,c((function(n){""===s.positionUsing&&(s.positionUsing=o.getPositioningCSS()),i(l,function barPositionCSS(e,n,o){var c;return(c="translate3d"===s.positionUsing?{transform:"translate3d("+toBarPerc(e)+"%,0,0)"}:"translate"===s.positionUsing?{transform:"translate("+toBarPerc(e)+"%,0)"}:{"margin-left":toBarPerc(e)+"%"}).transition="all "+n+"ms "+o,c}(e,f,d)),1===e?(i(u,{transition:"none",opacity:1}),u.offsetWidth,setT)}),f)}),f)):setTimeout(n,f)})),this},o.isstatus},),this}):thistart()},o.eRate)},e=0,n=0,o.):this},od(n),n},oent(e)},o.isRress")},o.getPositioargin"ext()}}(),i=function(){var e=["Webkit","O","Moz","ms"],n={};function getStyleProp(o){return o=function camelCase(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-Case()}))}(o),n[o]||(n[o]=function getVendorProp(n){var o=document.body.style;if(n in o)return n;for(var s,c=e.length,i=n.charAt(0).toUpperCase()+n.slice(1);c--;)if((s=e[c]+i)in o)return s;returne[n]=o,c[e)}return o})?s.call(n,o,n,e):s)||(e.exports=c)},"Sx/T":function(e,n,o){"use strict";o.d(n,"a",(function(){return S}));var s=o("KQm4"),c=o("1OyB"),i=o("vuIU"),u=o("rePB"),l=o(urn e}var f=function mergeBitParams(e){return function(n,o){return n|(null==e?void 0:e[o])}},d={ot:1,ga:2,gtm:3,pix:4,gemius:8,heatmap:16,ipresso:32,adocean:64,"tvn-tools":128,"new-relic":256},m={debug:512},y={all:Object.keys(d).reduce(f(d),0),stats:d.ga|d.gtm|d.pix|d.gemius|d.heatmap|d.ipresso|d["new-relic"],ads:d.adocean|d["tvn-tools"],tools:d.ot|d["tvn-tools"]},b=_objectSpread(_objectSpread(_objectSpread({},d),m),y),S=new(function(){function ScriptsManager(){Object(c.a)(this,ScriptsManager),Object(u.a)(this,"paramsToDisable",0),Object(u.a)(this,"invalidate",!0),Object(u.a)(this,"nextAnalyticsScripts",[])}return Object(i.a)(ScriptsManager,[{key:"clean",value:function clean(){this.invalidate=!0,this.paramsToDisable=0,this.nextAnalyticsScripts=[]}},{key:"initialize",value:function initialize(e){"string"==typeof e?(this.paramsToDisable=e.split(",").reduce(f(b),0),this.invalidate=!0,this.shouldPrintConsoleStats&&this.printConsoleStats()):this.clean()}},{key:"printConsoleStats",value:function printConsoleStats(){var e=this;console.group("[31m%s[0m","Disabled scripts"),Object.keys(d).forEach((function(n){var o=e.testParam(d[n]);console.log("[".concat(o?"31":"32","m%s[0m"),"".concat(n).padStart(9),o)})),console.groupEnd()}},{key:"testParam",value:function testParam(e){return Boolean(this.paramsToDisable&e)}},{key:"shouldLoadParamram(e)}},{key:"shouldPrintConsoleStats",get:function get(){return this.testParam(m.debug)}},{key:"shouldLoadOneTrust",get:function get(){return this.shouldLoadParam(d.ot)}},{key:"shouldLoadGoogleAnalytics",get:function get(){return this.shouldLoadParam(d.ga)}},{key:"shouldLoadGoogleTagManager",get:function get(){return this.shouldLoadParam(d.gtm)}},{key:"shouldLoadPix",get:function get(){return this.shouldLoadParam(d.pix)}},{key:"shouldLoadGemius",get:function get(){return this.shouldLoadParam(d.gemius)}},{key:"shouldLoadHeatmap",get:function get(){return this.shouldLoadParam(d.heatmap)}},{key:"shouldLoadIpresso",get:function get(){return this.shouldLoadParam(d.ipresso)}},{key:"shouldLoadAdOceocean)}},{key:"shouldLoadTvnTools",get:function get(){return this.shouldLoadParam(d["tvn-tools"])}},{key:"shouldLoadNewRelic",get:function get(){return this.shouldLoadParam(d["new-relic"])}},{key:"getNextAnalyticsScripts",value:function getNextAnalyticsScripts(){return this.invalidate&&(this.nextAnalyticsScripts=[].concat(Object(s.a)(this.shouldLoadGemius?[l.SCRIPT_TYPE_HEATMAP,l.SCRIPT_TYPE_GSTREAM,l.SCRIPT_TYPE_GAUDIENCE]:[]),Object(s.a)(this.shouldLoadTvnTools?[l.SCRIPT_TYPE_TOOLS]:[]),Object(s.a)(this.shouldLoadPix?[l.SCRIPT_TYPE_PIX]:[]),Object(s.a)(this.shouldLoadGoogleAnalytics?[l.SCRIPT_TYPE_GOOGLE_ANALYTICS]:[]),Object(s.a)(this.shouldLoadGoogleTagManager?[l.SCRIPT_TYPE_GOOGLE_TAG_MANAGER]:[]),Object(s.a)(this.shouldLoadHeatmap?[l.SCRIPT_TYPE_HEATMAP]:[]),Object(s.a)(this.shouldLoadIpresso?[l.SCRIPT_TYPE_IPRESSO]:[])),this.invalidate=!1),this.nextAnalyticsScripts}}]),ScriptsManager}())},TOwV:function(e,n,o){"use strict";e.exports=o("qT12"=s)}()},at8e:function(e,n,o){"use strict";e.exports=o("lKJe")},bZBt:function(e,n,o)AB4A")},n,o){},iVvi:function(e,n,o){"use strict";var s=o("q1tI"),c=o.n(s),i=o("9+fb"),u=o("nOHt"),l=o.n(u),f=o("DE8m"),d=o("mcEp"),m=o("j8cX"),y=o("G3k1"),b=c.a.createElement;n.a=function withGtmContext(e){var n=function wrapped(n){var o=Object(s.useState)(!1),c=o[0],u=o[1],S=n.pageProps,g=n.abTests,P=function routeChangeComplete(){var e=function getGtmContextData(){return Object(d.getGtmContext)(S||{},Object(f.getTestsResults)(g),{application:Object(y.a)(m.APP_RELEASE_ENV_NAME),environment:Object(y.a)(m.WAITER_ENVIRONMENT_TYPE_ENV_NAME)})}(),n=document.title,o=window.location.pathname;Object(i.updateGtmContext)(e,o,n)};return Object(s.useEffect)((function(){return l.a.events.on("routeChangeComplete",P),c||(P()te",P)}}),[c,S,g]),b(e,n)};return n.displayName="WithGtmContext("onent"}(e),")"),ntore:d},mcEp:function(e,n,o){e.exports={...o("ByNb"),...o("FGRN")peOf=nds}))}}]);