(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{"+BFh":"/Ckv":function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t._interopNamespace=function(e){return e.__esModule?e:{...e,default:e}}},"/Dkw":"/Go3":"0asN":"0tEx":"12eV":"17oO":"1Xxm":"1wmI":"24Yw":"2WvK":"3MSk":"3xft":4353:"43ss":"4NUX":"4WlG":"4wF6":"5BYC":"5D9G":"5Oz7":"5SDZ":"5oUj":"5uuh":"6ack":"6eiP":"6eww":"6gqT":"7JHD":"7Udj":"7rvK":"82tA":"8XT1":"8bjl":"9Gys":"9biu":"9o9+":Angq:"BQ/r":BTgn:Brad:C3oi:ChJn:DHWi:DX4J:EIXZ:ESgA:EaFq:Ef9H:Ep8Z:FgQf:FmqP:"Ft3/":GNl3:H0lQ:H73Y:H7kG:ILKz:J9mo:JKq4:Jnl9:"Kv+r":KvHb:LGIU:LWCw:LXLg:M4W2:MC1f:MCoQ:MXJy:Mgd5:Msdn:ND3v:O3yx:OloC:Owyf:PEXt:PYtf:PtAC:QZFF:QgjT:"Qw/M":RG0N:function(e,t,n){"use strict";var r=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.cloneScript=g,t.default=void 0,t.replaceChildren=m,t.runScripts=y;var o=r(n("pVnL")),i=r(n("QILm")),s=r(n("lwsE")),l=r(n("W8MJ")),c=r(n("7W2i")),d=r(n("a1gu")),u=r(n("Nsbk")),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),f=(r(n("17x9")),["html","id"]);function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}function m(e,t){for(;e.firstChild;)e.removeChild(e.firstChild);for(;t.length>0;)e.appendChild(t[0])}function g(e){var t=document.createElement("script");return Array.from(e.attributes).forEach((),t.innerHTML=e.innerHTML,t}function y(e){return new Promise((function(t){var n=Array.from(e);!function e(){if(n.length){var r=n.shift(),a=g(r);document.head.appendChild(a).parentNode.removeChild(a),r.async||r.defer||!r.hasAttribute("src")?e():a.onload=e}else t()}()}))}ar b=function(e){(0,c.default)(n,e);var t=v(n);eturn(0,l.default)(n,[{key:"componentDidMount",value:function(){if(_()){var e=this.props.id,t=window.getInteractiveBridge(e);t||(console.info("[interactive] run: ".concat(this.props.id)),y(this.el.querySelectorAll("script")),t=window.getInteractiveBridge(e)),t&&t.stashedDomNodes&&(console.info("[interactive] remount: ".concat(this.props.id)),m(this.el,t.stashedDomNodes),t._subs.remount.forEach(())}}},{key:"componentWillUnmount",value:function(){if(_()){var e=window.getInteractiveBridge(this.props.id);e&&(console.info("[interactive] stash: ".concat(this.props.id)),e.stashedDomNodes=this.el.childNodes)}}},{key:"render",value:function(){var e=this.props,t=e.html,n=e.id,r=(0,i.default)(e,f),a='\n      <script>window.registerInteractive && window.registerInteractive("'.concat(n,'");<\/script>\n    ');return p.default.createElement("div",(0,o.default)({},r,{ref:this.setupRef,"data-sourceid":n,dangerouslySetInnerHTML:{__html:a+t}}))}}]),n}(p.Component);b.displayName="NYTComponent";var x=b;t.default=x},RVdX:RWut:RYtz:Rec4:S3we:Sc5C:SeKL:SjYI:SkWu:SmAY:TT0G:TYeE:"Tk9+":UAfb:UK1I:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n("SjYI"),a=n("1wmI"),o=n("ry4D"),i=n("OloC"),s=n("gWwd"),l=n("ktxj"),c=n("/Ckv"),d=n("uFwy"),u=n("tPvY"),p=n("DHWi"),f=n("YMv5"),h=n("lu13"),v=n("24Yw");t._asyncNullishCoalesce=r._asyncNullishCoalesce,t._asyncOptionalChain=a._asyncOptionalChain,t._asyncOptionalChainDelete=o._asyncOptionalChainDelete,t._createNamedExportFrom=i._createNamedExportFrom,t._createStarExport=s._createStarExport,t._interopDefault=l._interopDefault,t._interopNamespace=c._interopNamespace,t._interopNamespaceDefaultOnly=d._interopNamespaceDefaultOnly,t._interopRequireDefault=u._interopRequireDefault,t._interopRequireWildcard=p._interopRequireWildcard,t._nullishCoalesce=f._nullishCoalesce,t._optionalChain=h._optionalChain,t._optionalChainDelete=v._optionalChainDelete},V7Sl:Vj0M:"W1+w":W7Ne:Wj1nc:X1Oy:XX1T:YIcX:YMv5:YiN1:"Z+Nj":ZFM1:Zvs4:a73r:aN5s:ac5R:adbt:aofl:at15:b2Vy:"bSV+":bakL:bdZZ:byLK:c2F5:c7L1:dOoH:function(e,t,n){(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r=n("Kv+r"),a={};function o(){return r.isNodeEnv()?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:a}t.getGlobalObject=o,t.getGlobalSingleton=).call(this,n("oDJU"))},e99c:eUG7:fMr4:foAE:g2Sc:gG6j:gNVg:gWwd:hFxO:hIZS:hlyd:iGHN:igaZ:"j/T5":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n("8bjl"),a=n("zAtD");t.FunctionToString=r.FunctionToString,t.InboundFilters=a.InboundFilters},jMnU:jYFL:jjME:kTmq:ktxj:l5Jt:lu13:m1MO:m7Na:mMSb:n36L:"nGF/":function(e,t,n){"use strict";var r=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("lwsE")),i=r(n("W8MJ")),s=r(n("7W2i")),l=r(n("a1gu")),c=r(n("Nsbk")),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),u=n("Jqp9"),p=r(n("x9rc")),f=n("vOGy");function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}ar g=function(e){(0,s.default)(n,e);var t=v(n);function n(){var e;(0,o.default)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={useFallback:!1,reducedMotion:!1,hasLoaded:!1},e.videoRef=e.props.videoRef||d.default.createRef(),e.imgRef=d.default.createRef(),e.isVideoPlaying=function(){var t;if(null!==(t=e.videoRef)&&void 0!==t&&t.current){var n=e.videoRef.current;if(n.currentTime>0&&!n.paused&&!n.ended&&n.readyState>2)return!0}return!1},e.handleBadProps=e.handleVideoError=function(){e.setState({useFallback:!0})},e.handleOnLoad=m((function(){var t,n;null===(t=(n=e.props).onLoad)||void 0===t||t.call(n)})),e.handleOnError=e.shouldReducedMotion=e}return(0,i.default)(n,[{key:"componentDidMount",value:function(){var e,t,n,r,a=this;(setTimeout(this.handleBadProps,500),this.shouldReducedMotion())&&(this.props.useVideoReducedMotionFallback?(null!==(n=this.videoRef)&&void 0!==n&&n.current&&(this.videoRef.current.pause(),this.videoRef.current.currentTime=0),this.setState({reducedMotion:!0})):this.setState({useFallback:!0}));(this.isVideoPlaying()&&this.handleOnLoad(),null!==(e=this.imgRef)&&void 0!==e&&null!==(t=e.current)&&void 0!==t&&t.complete)&&((null===(r=this.imgRef)||void 0===r?void 0:r.current.naturalHeight)>0?this.handleOnLoad():this.handleOnError());if(this.props.deferLoading&&!this.state.hasLoaded&&"undefined"!=typeof window){var o="complete"===document.readyState?o():window.addEventListener("load",o)}}},{key:"componentDidUpdate",value:,{key:"render",value:function(){var e=!this.state.useFallback&&this.props.imgLoading,t=!this.state.reducedMotion&&(!1===this.props.deferLoading||!0===this.state.hasLoaded),n=d.default.createElement(d.default.Fragment,null,d.default.createElement("img",{src:this.props.imgFallback||this.props.imgLoading,onLoad:this.handleOnLoad,onError:this.handleOnError,className:f.mediaClass,alt:this.props.imgFallbackAltText,ref:this.imgRef}),!1===this.props.fallback&&!this.state.useFallback&&this.props.src&&d.default.createElement("video",{"data-testid":"cinemagraph","data-play":this.props.playVideo,poster:e?this.props.imgLoading:void 0,src:this.props.src,ref:this.videoRef,className:(0,u.cx)("cinemagraph_video",f.mediaClass),muted:!0,loop:!0,autoPlay:t,controls:this.state.reducedMotion,playsInline:!0,onPlay:this.handleOnLoad,onError:this.handleVideoError,preload:t?void 0:"none"}),this.props.textOverlay);return this.props.renderAspectRatioPlaceholder?d.default.createElement(p.default,{className:(0,u.cx)(this.props.className,this.props.containerClass),ratio:this.props.ratio,style:{overflow:"hidden"}},n):n}}]),n}(d.PureComponent);g.defaultProps={src:void 0,onLoad:function(){},onError:function(){},ratio:"16:9",imgFallback:void 0,imgLoading:void 0,className:void 0,containerClass:"",textOverlay:void 0,playVideo:void 0,pauseVideo:void 0,useVideoReducedMotionFallback:!0,videoRef:void 0,deferLoading:!1,fallback:!1,renderAspectRatioPlaceholder:!0},g.displayName="Cinemagraph";var y=g;t.default=y},nosR:nvW3:oQoL:ohUM:omjs:pCfC:pNhb:q6y8:qc5L:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.isBrowserBundle=,"qf+Q":qmhP:qy8S:qzP8:rsE0:ry4D:"sdP+":t0Nu:t3Vf:t5BF:"tC/k":tGeg:tPvY:tXdy:function(e,t,n){"use strict";var r=n("TqRt"),a=n("cDf5");Object.defineProperty(t,"__esModule",{value:!0}),t.interactiveShape=t.default=void 0;var o=r(n("lwsE")),i=r(n("W8MJ")),s=r(n("7W2i")),l=r(n("a1gu")),c=r(n("Nsbk")),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(r,i,s):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n("q1tI")),u=r(n("17x9")),p=n("Jqp9"),f=r(n("RG0N")),h=n("QgjT");function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}ar g=function(e){(0,s.default)(n,e);var t=m(n);eturn(0,i.default)(n,[{key:"render",value:function(){var e=this.props,t=e.interactive,n=e.maxWidth,r=e.className,a=e.children,o=e.Header,i=e.Footer,s=e.enableInteractiveBridge,l=t.slug,c=t.sourceId,u=this.state.html||t.html,v=n?"scoop":"medium";return d.default.createElement("section",{"data-testid":"inline-interactive",id:l,"data-id":c,"data-source-id":c,className:(0,p.cx)((0,h.sectionClass)({maxWidth:n}),r,"interactive-content interactive-size-".concat(v))},o,s?d.default.createElement(f.default,{className:(0,p.cx)(h.interactiveDivClass,"interactive-body"),html:u,id:c}):d.default.createElement("div",{className:(0,p.cx)(h.interactiveDivClass,"interactive-body"),ref:this.htmlWrapperRef,dangerouslySetInnerHTML:{__html:u}}),i,a)}}]),n}(d.Component);g.displayName="InlineInteractive";var y=u.default.shape({sourceId:u.default.string,leadin:u.default.string,note:u.default.string,kicker:u.default.string,firstPublished:u.default.string,updatedText:u.default.string,bylines:u.default.arrayOf(u.default.object),credit:u.default.string,dataSource:u.default.string,slug:u.default.string,html:u.default.string,displayProperties:u.default.shape({maximumWidth:u.default.number,minimumWidth:u.default.number,displayForPromotionOnly:u.default.bool,displayOverrides:u.default.arrayOf(u.default.string)}),headline:u.default.oneOfType([u.default.shape({default:u.default.string}),u.default.string])});t.interactiveShape=y,g.defaultProps={Header:null,Footer:null,interactive:{html:null,displayProperties:{},headline:{default:""}},className:void 0,children:null,maxWidth:0,manageScripts:!1,enableInteractiveBridge:!1};var _=g;t.default=_},tpQ5:u1ew:uFwy:"uIC/":uUQN:uhJS:ujYK:uo6z:"v/Xg":vFws:vOGy:vccK:veZr:vkHv:vuGk:w0AO:x9rc:xcQg:yEzZ:yb0D:ynsP:zAtD:zFAK:zO9j:]);
//# sourceMappingURL=vendors~burst-20be3aa41b98baa79b1b.js.map