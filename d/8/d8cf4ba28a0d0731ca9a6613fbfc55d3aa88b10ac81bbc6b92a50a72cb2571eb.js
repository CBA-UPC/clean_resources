(self.webpackChunktama_web=self.webpackChunktama_web||[]).push([[5832],{67999:76081:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=a(n(76955)),i=a(n(91925));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=r.default.Component);e.default=(0,i.default)(l)},74490:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=s(n(76955)),a=s(n(3191)),u=s(n(91938));function s(t){return t&&t.__esModule?t:{default:t}}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=i.default.Component);f.propTypes={name:u.default.string,id:u.default.string},e.default=(0,a.default)(f)},45896:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(76955)),r=i(n(91925));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var s=o.default.Component);e.default=(0,r.default)(s)},5832:(t,e,n)=>{"use strict";e.NY=void 0;var o=p(n(45896)),r=p(n(76081)),i=p(n(74490)),a=p(n(48322)),u=p(n(67284)),s=p(n(48526)),l=p(n(1483)),c=p(n(91925)),f=p(n(3191)),d=p(n(6651));function p(t){return t&&t.__esModule?t:{default:t}}o.default,r.default,i.default,a.default,u.default,s.default,e.NY=l.default,c.default,f.default,d.default,o.default,r.default,i.default,a.default,u.default,s.default,l.default,c.default,f.default,d.default},6651:(t,e,n)=>{"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(); s=n(76955),l=(n(52377),n(51563),n(48526)),c=n(48322),f=n(91938),d=n(38658),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool},h={Scroll:Element:;t.exports=h},1483:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=(u(n(51563)),u(n(60492))),i=u(n(61449)),a=u(n(67284));function u(t){return t&&t.__esModule?t:{default:t}}var s=l=)||c=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollLeft;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},f=d=p=h=function(t,e,n,o){if(e.data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(e.data.delayTimeout),i.default.subscribe((),p(e),e.data.start=null,e.data.cancel=!1,e.data.startPosition=e.horizontal?c(e):f(e),e.data.targetPosition=e.absolute?t:t+e.data.startPosition,e.data.startPosition!==e.data.targetPosition){e.data.delta=Math.round(e.data.targetPosition-e.data.startPosition),e.data.duration=e.duration)(e.data.delta),e.data.duration=isNaN(parseFloat(e.data.duration))?1e3:parseFloat(e.data.duration),e.data.to=n,e.data.target=o;var r=s(e),u=d.bind(null,r,e);e&&e.delay>0?e.data.delayTimeout=window.setTimeout((,e.delay):(a.default.registered.begin&&a.default.registered.begin(e.data.to,e.data.target),l.call(window,u))}else a.default.registered.end&&a.default.registered.end(e.data.to,e.data.target,e.data.currentPosition)},v=e.default={animateTopScroll:h,getAnimationType:s,scrollToTop:scrollToBottom:scrollTo:scrollMore:},61449:67014:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.addPassiveEventListener=e.removePassiveEventListener=,3191:67284:38658:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(67014);var o=function(t){return t&&t.__esModule?t:{default:t}}(n(51563));var r={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:mapContainer:isMounted:function(){return this.mountFlag},isInitialized:initStateFromHash:scrollTo:getHash:changeHash:handleHashChange:unmount:;e.default=r},91925:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=),i=c(n(76955)),a=c(n(48526)),u=c(n(48322)),s=c(n(91938)),l=c(n(38658));function c(t){return t&&t.__esModule?t:{default:t}}var f={to:s.default.string.isRequired,containerId:s.default.string,container:s.default.object,activeClass:s.default.string,spy:s.default.bool,horizontal:s.default.bool,smooth:s.default.oneOfType([s.default.bool,s.default.string]),offset:s.default.number,delay:s.default.number,isDynamic:s.default.bool,onClick:s.default.func,duration:s.default.oneOfType([s.default.number,s.default.func]),absolute:s.default.bool,onSetActive:s.default.func,onSetInactive:s.default.func,ignoreCancelEvents:s.default.bool,hashSpy:s.default.bool,saveHashHistory:s.default.bool};e.default=function(t,e){var n=e||u.default,s=i.default.PureComponent),c=return s.propTypes=f,s.defaultProps={offset:0},s}},48526:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(67999)),r=n(67014);var i={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:isMounted:currentPositionX:function(t){if(t===document){var e=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return t.scrollLeft},currentPositionY:scrollHandler:addStateHandler:addSpyHandler:updateStates:unmount:update:;e.default=i},48322:60492:51563:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={updateHash:getHash:filterElementInContainer:scrollOffset:}}]);