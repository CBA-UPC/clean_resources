!function(t,n){t.inView=[function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.inViewport=function(t,n){var e=t.getBoundingClientRect(),i=e.top,r=e.right,o=e.bottom,u=e.left,f=o,s=window.inViewWindow.innerWidth-u,c=window.inViewWindow.innerHeight-i,a=r;return f>n.top&&s>n.right&&c>n.bottom&&a>n.left}},function(t,n,e){"use strict";bject.defineProperty(n,"__esModule",{value:!0});var r=i(e(9)),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?u=i(e(4)),f=e(1);n.default=function(){var e={history:[]},i={},n=(0,r.default)(100);["scroll","resize","load"].forEach(,window.inViewWindow.MutationObserver&&new MutationObserver(n).observe(window.inViewWindow.document.body,{attributes:!0,childList:!0,subtree:!0});var t=function(t){return n=t,("object"===("undefined"==typeof Node?"undefined":o(Node))?n instanceof Node:n&&"object"===(void 0===n?"undefined":o(n))&&"number"==typeof n.nodeType&&"string"==typeof n.nodeName)&&(t=[t]),t=[].slice.call(t),-1<e.history.indexOf("singelton")?e.singelton.elements=t:(e.singelton=(0,u.default)(t,i),e.history.push("singelton")),e.singelton;var n};return t.offset=function(n){if(void 0===n)return i;var e=return["top","right","bottom","left"].forEach(e(n)?function(t){return e(n[t])?i[t]=n[t]:null}),i},t.is=t.offset(0),t}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=),u=e(1),r=function(){function e(t,n){((this,e),this.offset=n,this.current=[],this.elements=t,this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return i(e,[{key:"check",value:function(){var o=this;return this.elements.forEach(function(t){var n=(0,u.inViewport)(t,o.offset),e=o.current.indexOf(t),i=-1<e,r=!n&&i;n&&!i&&(o.current.push(t),o.emit("enter",t)),r&&(o.current.splice(e,1),o.emit("exit",t))}),this}},{key:"on",value:function(t,n){return console.log(this.handlers),this.handlers[t].push(n),this}},{key:"off",value:function(t,n){return this.singles[t].splice(this.singles[t].indexOf(n),1),this.handlers[t].splice(this.handlers[t].indexOf(n),1),this}},{key:"once",value:,{key:"emit",value:function(t,n){for(;this.singles[t].length;)this.singles[t].pop()(n);for(var e=this.handlers[t].length;-1<--e;)this.handlers[t][e](n);return this}}]),e}();n.default=,function(t,n,e){var w=e(2),g=e(8),m=e(10),x=Math.max,O=Math.min;t.exports=function(i,r,t){nction f(){var t,n,e=g();return u(e)?s(e):void(h=setTimeout(f,(n=r-((t=e)-p),b?O(n,l-(t-v)):n)))}r c,a,l,d,h,p,v=0,y=!1,b=!1,e=!0;if("function"!=typeof i)throw new TypeError("Expected a function");return r=m(r)||0,w(t)&&(y=!!t.leading,l=(b="maxWait"in t)?x(m(t.maxWait)||0,r):l,e="trailing"in t?!!t.trailing:e),n.cancel=n.flush=n}},)}(this);