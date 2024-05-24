/*! For license information please see 5781.12351eb5.chunk.js.LICENSE.txt */
(self.webpackChunktimesnowhindi_fe=self.webpackChunktimesnowhindi_fe||[]).push([[5781],{29387:70178:39503:(t,e,r)=>{"use strict";var n=r(69038));Number.isInteger=Number.isInteger||e.Z=n.default},69038:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&defineProperties(t.prototype,e),r&&defineProperties(t,r),t}}(),o=_interopRequireDefault(r(66855)),i=_interopRequireDefault(r(45697)),s=_interopRequireDefault(r(27727));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}ar l=function(t){function StarRatings(){var t,e,r;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,StarRatings);for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return e=r=_possibleConstructorReturn(this,(t=StarRatings.__proto__||Object.getPrototypeOf(StarRatings)).call.apply(t,[this].concat(o))),r.state={highestStarHovered:-1/0},r.fillId="starGrad"+Math.random().toFixed(15).slice(2),r.hoverOverStar=r.unHoverOverStar=_possibleConstructorReturn(r,e)}return function _inherits(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(StarRatings,t),n(StarRatings,[{key:"stopColorStyle",value:function stopColorStyle(t){var stopColorStyle={stopColor:t,stopOpacity:"1"};return this.props.ignoreInlineStyles?{}:stopColorStyle}},{key:"render",value:function render(){var t=this.props,e=t.starRatedColor,r=t.starEmptyColor;return o.default.createElement("div",{className:"star-ratings",title:this.titleText,style:this.starRatingsStyle},o.default.createElement("svg",{className:"star-grad",style:this.starGradientStyle},o.default.createElement("defs",null,o.default.createElement("linearGradient",{id:this.fillId,x1:"0%",y1:"0%",x2:"100%",y2:"0%"},o.default.createElement("stop",{offset:"0%",className:"stop-color-first",style:this.stopColorStyle(e)}),o.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-first",style:this.stopColorStyle(e)}),o.default.createElement("stop",{offset:this.offsetValue,className:"stop-color-final",style:this.stopColorStyle(r)}),o.default.createElement("stop",{offset:"100%",className:"stop-color-final",style:this.stopColorStyle(r)})))),this.renderStars)}},{key:"starRatingsStyle",get:function get(){return this.props.ignoreInlineStyles?{}:{position:"relative",boxSizing:"border-box",display:"inline-block"}}},{key:"starGradientStyle",get:function get(){return this.props.ignoreInlineStyles?{}:{position:"absolute",zIndex:"0",width:"0",height:"0",visibility:"hidden"}}},{key:"titleText",get:function get(){var t=this.props,e=t.typeOfWidget,r=t.rating,n=this.state.highestStarHovered,o=n>0?n:r,i=parseFloat(o.toFixed(2)).toString();Number.isInteger(o)&&(i=String(o));var s=e+"s";return"1"===i&&(s=e),i+" "+s}},{key:"offsetValue",get:function get(){var t=this.props.rating,e="0%";Number.isInteger(t)||(e=t.toFixed(2).split(".")[1].slice(0,2)+"%");return e}},{key:"renderStars",get:function get(){var t=this,e=this.props,r=e.changeRating,n=e.rating,i=e.numberOfStars,l=e.starDimension,f=e.starSpacing,c=e.starRatedColor,p=e.starEmptyColor,d=e.starHoverColor,h=e.gradientPathName,y=e.ignoreInlineStyles,v=e.svgIconPath,g=e.svgIconViewBox,m=e.name,b=this.state.highestStarHovered;return Array.apply(null,Array(i)).map(()}}]),StarRatings}(o.default.Component);l.propTypes={rating:i.default.number.isRequired,numberOfStars:i.default.number.isRequired,changeRating:i.default.func,starHoverColor:i.default.string.isRequired,starRatedColor:i.default.string.isRequired,starEmptyColor:i.default.string.isRequired,starDimension:i.default.string.isRequired,starSpacing:i.default.string.isRequired,gradientPathName:i.default.string.isRequired,ignoreInlineStyles:i.default.bool.isRequired,svgIconPath:i.default.string.isRequired,svgIconViewBox:i.default.string.isRequired,name:i.default.string},l.defaultProps={rating:0,typeOfWidget:"Star",numberOfStars:5,changeRating:null,starHoverColor:"rgb(230, 67, 47)",starRatedColor:"rgb(109, 122, 130)",starEmptyColor:"rgb(203, 211, 227)",starDimension:"50px",starSpacing:"7px",gradientPathName:"",ignoreInlineStyles:!1,svgIconPath:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",svgIconViewBox:"0 0 51 48"},e.default=l},27727:(t,e,r)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=),o=_interopRequireDefault(r(66855)),i=_interopRequireDefault(r(93967)),s=_interopRequireDefault(r(45697));ar l=function(t){function Star(){return this,Star),this,(Star.__proto__||Object.getPrototypeOf(Star)).apply(this,arguments))}return Star,t),n(Star,[{key:"render",value:function render(){var t=this.props,e=t.changeRating,r=t.hoverOverStar,n=t.unHoverOverStar,i=t.svgIconViewBox,s=t.svgIconPath;return o.default.createElement("div",{className:"star-container",style:this.starContainerStyle,onMouseEnter:r,onMouseLeave:n,onClick:e},o.default.createElement("svg",{viewBox:i,className:this.starClasses,style:this.starSvgStyle},o.default.createElement("path",{className:"star",style:this.pathStyle,d:s})))}},{key:"starContainerStyle",get:function get(){var t=this.props,e=t.changeRating,r=t.starSpacing,n=t.isFirstStar,o=t.isLastStar;return t.ignoreInlineStyles?{}:{position:"relative",display:"inline-block",verticalAlign:"middle",paddingLeft:n?void 0:r,paddingRight:o?void 0:r,cursor:e?"pointer":void 0}}},{key:"starSvgStyle",get:function get(){var t=this.props,e=t.ignoreInlineStyles,r=t.isCurrentHoveredStar,n=t.starDimension;return e?{}:{width:n,height:n,transition:"transform .2s ease-in-out",transform:r?"scale(1.1)":void 0}}},{key:"pathStyle",get:function get(){var t=this.props,e=t.isStarred,r=t.isPartiallyFullStar,n=t.isHovered,o=t.hoverMode,i=t.starEmptyColor,s=t.starRatedColor,l=t.starHoverColor,f=t.gradientPathName,c=t.fillId,p=void 0;return p=o?n?l:i:r?"url('"+f+"#"+c+"')":e?s:i,t.ignoreInlineStyles?{}:{fill:p,transition:"fill .2s ease-in-out"}}},{key:"starClasses",get:function get(){var t=this.props,e=t.isSelected,r=t.isPartiallyFullStar,n=t.isHovered,o=t.isCurrentHoveredStar,s=t.ignoreInlineStyles,l=(0,i.default)({"widget-svg":!0,"widget-selected":e,"multi-widget-selected":r,hovered:n,"current-hovered":o});return s?{}:l}}]),Star}(o.default.Component);l.propTypes={fillId:s.default.string.isRequired,changeRating:s.default.func,hoverOverStar:s.default.func,unHoverOverStar:s.default.func,isStarred:s.default.bool.isRequired,isPartiallyFullStar:s.default.bool.isRequired,isHovered:s.default.bool.isRequired,hoverMode:s.default.bool.isRequired,isCurrentHoveredStar:s.default.bool.isRequired,isFirstStar:s.default.bool.isRequired,isLastStar:s.default.bool.isRequired,starDimension:s.default.string.isRequired,starSpacing:s.default.string.isRequired,starHoverColor:s.default.string.isRequired,starRatedColor:s.default.string.isRequired,starEmptyColor:s.default.string.isRequired,gradientPathName:s.default.string.isRequired,ignoreInlineStyles:s.default.bool.isRequired,svgIconPath:s.default.string.isRequired,svgIconViewBox:s.default.string.isRequired},e.default=l},68846:(t,e,r)=>{"use strict";var n=r(27418),o="function"===typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,s=o?Symbol.for("react.portal"):60106,l=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,d=o?Symbol.for("react.context"):60110,h=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,g=o?Symbol.for("react.lazy"):60116,m="function"===typeof Symbol&&Symbol.iterator;ar b={isMounted:enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$={};function F(t,e,r){this.props=t,this.context=e,this.refs=$,this.updater=r||b}prototype.isReactComponent={},F.prototype.setState=F.prototype.forceUpdate=G.prototype=F.prototype;var _=H.prototype=new G;_.constructor=H,n(_,F.prototype),_.isPureReactComponent=!0;var w={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};r P=/\/+/g,I=[];tion U(t,e){return"object"===typeof t&&null!==t&&null!=t.key?t.key):e.toString(36)} E={current:null};ar q={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};e.Children={map:forEach:count:toArray:only:,e.Component=F,e.Fragment=l,e.Profiler=c,e.PureComponent=H,e.StrictMode=f,e.Suspense=y,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,e.cloneElement=e.createContext=e.createElement=M,e.createFactory=e.createRef=e.forwardRef=e.isValidElement=O,e.lazy=e.memo=e.useCallback=function(t,e){return Z().useCallback(t,e)},e.useContext=function(t,e){return Z().useContext(t,e)},e.useDebugValue=e.useEffect=function(t,e){return Z().useEffect(t,e)},e.useImperativeHandle=function(t,e,r){return Z().useImperativeHandle(t,e,r)},e.useLayoutEffect=function(t,e){return Z().useLayoutEffect(t,e)},e.useMemo=e.useReducer=e.useRef=function(t){return Z().useRef(t)},e.useState=e.version="16.14.0"},66855:35627:93967:75755:(t,e,r)=>{"use strict";r(88791);var n=r(29068),o=r(10145);n.JSON||(n.JSON={stringify:JSON.stringify}),t.exports=,69933:71568:74580:37960:(t,e,r)=>{"use strict";var n=r(79989),o=r(71568);n({target:"String",proto:!0,forced:r(74580)("link")},{link:)}}]);