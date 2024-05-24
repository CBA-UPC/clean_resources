/*! v:962261 b:default c:4115 */
try{var cnc=function(e){if(!e||!e.toString)return!1;const n=e.toString();return/\[native code\]/.test(n)||/\/\* source code not available \*\//.test(n)};cnc(Function.prototype.bind)?Function.prototype.__pbind=Function.prototype.bind:Function.prototype.__pbind=function(e,...n){let t=this;return function(...r){return t.apply(e,[...n,...r])}},cnc(Array.prototype.reduce)?Object.defineProperty&&Object.defineProperty(Array.prototype,"__preduce",{enumerable:!1,iterable:!1,value:Array.prototype.reduce}):Object.defineProperty(Array.prototype,"__preduce",{enumerable:!1,iterable:!1,value:function(e){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof e)throw new TypeError(e+" is not a function");var n,t=Object(this),r=t.length>>>0,o=0;if(arguments.length>=2)n=arguments[1];else{for(;o<r&&!(o in t);)o++;if(o>=r)throw new TypeError("Reduce of empty array with no initial value");n=t[o++]}for(;o<r;o++)o in t&&(n=e(n,t[o],o,t));return n}})}catch(e){}(self["pcode_962261_default_87PjKUyDrQ"]=self["pcode_962261_default_87PjKUyDrQ"]||[]).push([[4115],{86010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.r(n),t.d(n,{clsx:function(){return o}}),n["default"]=o},23645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,u){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var _=0;_<e.length;_++){var f=[].concat(e[_]);r&&i[f[0]]||(void 0!==u&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=u),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},8081:function(e){e.exports=function(e){return e[1]}},84718:function(e,n,t){var r={};function o(e){e.forEach((function(e){if(--r[e]<=0){var n=document.getElementById(e);n&&n.parentNode.removeChild(n)}}))}e.exports=function(e,n){for(var u,i=void 0===n?{}:n,c=i.replace,l=void 0!==c&&c,_=i.prepend,f=void 0!==_&&_,a=i.prefix,s=void 0===a?"s":a,p=[],d=0;d<e.length;d++){var h=e[d],v=h[0],m=h[1],y=h[2],b=h[3],g=""+s+v+"-"+d;if(p.push(g),!r[g]||l){r[g]=1;var C=document.getElementById(g),k=!1;C||(k=!0,(C=document.createElement("style")).setAttribute("type","text/css"),C.id=g,y&&C.setAttribute("media",y));var E=m;b&&"function"==typeof btoa&&(E+="\n/*# sourceMappingURL=data:application/json;base64,"+(u=t.lv["json"].stringify(b),btoa(encodeURIComponent(u).replace(/%([0-9A-F]{2})/g,(function(e,n){return String.fromCharCode("0x"+n)})))+"*/"),E+="\n/*# sourceURL="+b.file+"?"+g+"*/"),"textContent"in C?C.textContent=E:C.styleSheet.cssText=E,k&&(f?document.head.insertBefore(C,document.head.childNodes[0]):document.head.appendChild(C))}else r[g]++}return o.__pbind(null,p)}},98661:function(e,n,t){t.r(n),t.d(n,{Children:function(){return s},Component:function(){return o.Component},Fragment:function(){return o.Fragment},PureComponent:function(){return c},Suspense:function(){return h},SuspenseList:function(){return y},cloneElement:function(){return F},createContext:function(){return o.createContext},createElement:function(){return o.createElement},createFactory:function(){return D},createPortal:function(){return k},createRef:function(){return o.createRef},findDOMNode:function(){return T},forwardRef:function(){return f},hydrate:function(){return S},isValidElement:function(){return H},lazy:function(){return m},memo:function(){return l},render:function(){return w},unmountComponentAtNode:function(){return L},unstable_batchedUpdates:function(){return M},useCallback:function(){return r.useCallback},useContext:function(){return r.useContext},useDebugValue:function(){return r.useDebugValue},useEffect:function(){return r.useEffect},useErrorBoundary:function(){return r.useErrorBoundary},useImperativeHandle:function(){return r.useImperativeHandle},useLayoutEffect:function(){return r.useLayoutEffect},useMemo:function(){return r.useMemo},useReducer:function(){return r.useReducer},useRef:function(){return r.useRef},useState:function(){return r.useState},version:function(){return R}});var r=t(30396),o=t(6400);function u(e,n){for(var t in n)e[t]=n[t];return e}function i(e,n){for(var t in e)if("__source"!==t&&!(t in n))return!0;for(var r in n)if("__source"!==r&&e[r]!==n[r])return!0;return!1}var c=function(e){var n,t;function r(n){var t;return(t=e.call(this,n)||this).isPureReactComponent=!0,t}return t=e,(n=r).prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t,r.prototype.shouldComponentUpdate=function(e,n){return i(this.props,e)||i(this.state,n)},r}(o.Component);function l(e,n){function t(e){var t=this.props.ref,r=t==e.ref;return!r&&t&&(t.call?t(null):t.current=null),n?!n(this.props,e)||!r:i(this.props,e)}function r(n){return this.shouldComponentUpdate=t,(0,o.createElement)(e,u({},n))}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(e.displayName||e.name)+")",r.t=!0,r}var _=o.options.vnode;function f(e){function n(n){var t=u({},n);return delete t.ref,e(t,n.ref)}return n.prototype.isReactComponent=!0,n.t=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}o.options.vnode=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),_&&_(e)};var a=function(e,n){return e?(0,o.toChildArray)(e).__preduce((function(e,t,r){return e.concat(n(t,r))}),[]):null},s={map:a,forEach:a,count:function(e){return e?(0,o.toChildArray)(e).length:0},only:function(e){if(1!==(e=(0,o.toChildArray)(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:o.toChildArray},p=o.options.__e;function d(e){return e&&((e=u({},e)).__c=null,e.__k=e.__k&&e.__k.map(d)),e}function h(e){this.__u=0,this.u=null,this.__b=null}function v(e){var n=e.__.__c;return n&&n.o&&n.o(e)}function m(e){var n,t,r;function u(u){if(n||(n=e()).then((function(e){t=e.default||e}),(function(e){r=e})),r)throw r;if(!t)throw n;return(0,o.createElement)(t,u)}return u.displayName="Lazy",u.t=!0,u}function y(){this.i=null,this.l=null}o.options.__e=function(e,n,t){if(e.then)for(var r,o=n;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(e,n.__c);p(e,n,t)},(h.prototype=new o.Component).__c=function(e,n){var t=this;null==t.u&&(t.u=[]),t.u.push(n);var r=v(t.__v),o=!1,u=function(){o||(o=!0,r?r(i):i())};n.__c=n.componentWillUnmount,n.componentWillUnmount=function(){u(),n.__c&&n.__c()};var i=function(){var e;if(!--t.__u)for(t.__v.__k[0]=t.state.o,t.setState({o:t.__b=null});e=t.u.pop();)e.forceUpdate()};t.__u++||t.setState({o:t.__b=t.__v.__k[0]}),e.then(u,u)},h.prototype.render=function(e,n){return this.__b&&(this.__v.__k[0]=d(this.__b),this.__b=null),[(0,o.createElement)(o.Component,null,n.o?null:e.children),n.o&&e.fallback]};var b=function(e,n,t){if(++t[1]===t[0]&&e.l.delete(n),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(t=e.i;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.i=t=t[2]}};(y.prototype=new o.Component).o=function(e){var n=this,t=v(n.__v),r=n.l.get(e);return r[0]++,function(o){var u=function(){n.props.revealOrder?(r.push(o),b(n,e,r)):o()};t?t(u):u()}},y.prototype.render=function(e){this.i=null,this.l=new Map;var n=(0,o.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&n.reverse();for(var t=n.length;t--;)this.l.set(n[t],this.i=[1,0,this.i]);return e.children},y.prototype.componentDidUpdate=y.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(n,t){b(e,t,n)}))};var g=function(){function e(){}var n=e.prototype;return n.getChildContext=function(){return this.props.context},n.render=function(e){return e.children},e}();function C(e){var n=this,t=e.container,r=(0,o.createElement)(g,{context:n.context},e.vnode);return n.s&&n.s!==t&&(n.h.parentNode&&n.s.removeChild(n.h),(0,o._unmount)(n.v),n.p=!1),e.vnode?n.p?(t.__k=n.__k,(0,o.render)(r,t),n.__k=t.__k):(n.h=document.createTextNode(""),(0,o.hydrate)("",t),t.appendChild(n.h),n.p=!0,n.s=t,(0,o.render)(r,t,n.h),n.__k=this.h.__k):n.p&&(n.h.parentNode&&n.s.removeChild(n.h),(0,o._unmount)(n.v)),n.v=r,n.componentWillUnmount=function(){n.h.parentNode&&n.s.removeChild(n.h),(0,o._unmount)(n.v)},null}function k(e,n){return(0,o.createElement)(C,{vnode:e,container:n})}var E=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;o.Component.prototype.isReactComponent={};var x="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function w(e,n,t){if(null==n.__k)for(;n.firstChild;)n.removeChild(n.firstChild);return(0,o.render)(e,n),"function"==typeof t&&t(),e?e.__c:null}function S(e,n,t){return(0,o.hydrate)(e,n),"function"==typeof t&&t(),e?e.__c:null}var A=o.options.event;function N(e,n){e["UNSAFE_"+n]&&!e[n]&&Object.defineProperty(e,n,{configurable:!1,get:function(){return this["UNSAFE_"+n]},set:function(e){this["UNSAFE_"+n]=e}})}o.options.event=function(e){A&&(e=A(e)),e.persist=function(){},e.isDefaultPrevented=function(){return e.defaultPrevented};var n=e.stopPropagation,t=!1;return e.stopPropagation=function(){t=!0,n.call(this)},e.isPropagationStopped=function(){return t},e.nativeEvent=e};var P={configurable:!0,get:function(){return this.class}},U=o.options.vnode;o.options.vnode=function(e){e.$$typeof=x;var n=e.type,t=e.props;if(t.class!=t.className&&(P.enumerable="className"in t,null!=t.className&&(t.class=t.className),Object.defineProperty(t,"className",P)),"function"!=typeof n){var r,u,i;for(i in t.defaultValue&&(t.value||0===t.value||(t.value=t.defaultValue),delete t.defaultValue),Array.isArray(t.value)&&t.multiple&&"select"===n&&((0,o.toChildArray)(t.children).forEach((function(e){-1!=t.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete t.value),t)if(r=E.test(i))break;if(r)for(i in u=e.props={},t)u[E.test(i)?i.replace(/([A-Z0-9])/,"-$1").toLowerCase():i]=t[i]}!function(n){var t=e.type,r=e.props;if(r&&"string"==typeof t){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===t||"input"===t.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof n&&!n.m&&n.prototype&&(N(n.prototype,"componentWillMount"),N(n.prototype,"componentWillReceiveProps"),N(n.prototype,"componentWillUpdate"),n.m=!0),U&&U(e)};var R="16.8.0";function D(e){return o.createElement.__pbind(null,e)}function H(e){return!!e&&e.$$typeof===x}function F(e){return H(e)?o.cloneElement.apply(null,arguments):e}function L(e){return!!e.__k&&((0,o.render)(null,e),!0)}function T(e){return e&&(e.base||1===e.nodeType&&e)||null}var M=function(e,n){return e(n)};n["default"]={useState:r.useState,useReducer:r.useReducer,useEffect:r.useEffect,useLayoutEffect:r.useLayoutEffect,useRef:r.useRef,useImperativeHandle:r.useImperativeHandle,useMemo:r.useMemo,useCallback:r.useCallback,useContext:r.useContext,useDebugValue:r.useDebugValue,version:"16.8.0",Children:s,render:w,hydrate:w,unmountComponentAtNode:L,createPortal:k,createElement:o.createElement,createContext:o.createContext,createFactory:D,cloneElement:F,createRef:o.createRef,Fragment:o.Fragment,isValidElement:H,findDOMNode:T,Component:o.Component,PureComponent:c,memo:l,forwardRef:f,unstable_batchedUpdates:M,Suspense:h,SuspenseList:y,lazy:m}},6400:function(e,n,t){t.r(n),t.d(n,{Component:function(){return b},Fragment:function(){return y},_unmount:function(){return H},cloneElement:function(){return M},createContext:function(){return O},createElement:function(){return h},createRef:function(){return m},h:function(){return h},hydrate:function(){return T},isValidElement:function(){return o},options:function(){return r},render:function(){return L},toChildArray:function(){return w}});var r,o,u,i,c,l,_,f={},a=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function p(e,n){for(var t in n)e[t]=n[t];return e}function d(e){var n=e.parentNode;n&&n.removeChild(e)}function h(e,n,t){var r,o=arguments,u={};for(r in n)"key"!==r&&"ref"!==r&&(u[r]=n[r]);if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(o[r]);if(null!=t&&(u.children=t),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return v(e,u,n&&n.key,n&&n.ref)}function v(e,n,t,o){var u={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return r.vnode&&r.vnode(u),u}function m(){return{}}function y(e){return e.children}function b(e,n){this.props=e,this.context=n}function g(e,n){if(null==n)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?g(e):null}function C(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return C(e)}}function k(e){(!e.__d&&(e.__d=!0)&&1===u.push(e)||c!==r.debounceRendering)&&((c=r.debounceRendering)||i)(E)}function E(){var e,n,t,r,o,i,c;for(u.sort((function(e,n){return n.__v.__b-e.__v.__b}));e=u.pop();)e.__d&&(t=void 0,r=void 0,i=(o=(n=e).__v).__e,(c=n.__P)&&(t=[],r=P(c,o,p({},o),n.__n,void 0!==c.ownerSVGElement,null,t,null==i?g(o):i),U(t,o),r!=i&&C(o)))}function x(e,n,t,r,o,u,i,c,l){var _,s,p,h,v,m,y,b=t&&t.__k||a,C=b.length;if(c==f&&(c=null!=u?u[0]:C?g(t,0):null),_=0,n.__k=w(n.__k,(function(t){if(null!=t){if(t.__=n,t.__b=n.__b+1,null===(p=b[_])||p&&t.key==p.key&&t.type===p.type)b[_]=void 0;else for(s=0;s<C;s++){if((p=b[s])&&t.key==p.key&&t.type===p.type){b[s]=void 0;break}p=null}if(h=P(e,t,p=p||f,r,o,u,i,c,l),(s=t.ref)&&p.ref!=s&&(y||(y=[]),p.ref&&y.push(p.ref,null,t),y.push(s,t.__c||h,t)),null!=h){var a;if(null==m&&(m=h),void 0!==t.__d)a=t.__d,t.__d=void 0;else if(u==p||h!=c||null==h.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(h),a=null;else{for(v=c,s=0;(v=v.nextSibling)&&s<C;s+=2)if(v==h)break e;e.insertBefore(h,c),a=c}"option"==n.type&&(e.value="")}c=void 0!==a?a:h.nextSibling,"function"==typeof n.type&&(n.__d=c)}else c&&p.__e==c&&c.parentNode!=e&&(c=g(p))}return _++,t})),n.__e=m,null!=u&&"function"!=typeof n.type)for(_=u.length;_--;)null!=u[_]&&d(u[_]);for(_=C;_--;)null!=b[_]&&H(b[_],b[_]);if(y)for(_=0;_<y.length;_++)D(y[_],y[++_],y[++_])}function w(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)w(e[r],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?v(null,e,null,null):null!=e.__e||null!=e.__c?v(e.type,e.props,e.key,null):e):e);return t}function S(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===s.test(n)?t+"px":null==t?"":t}function A(e,n,t,r,o){var u,i,c,l,_;if(o?"className"===n&&(n="class"):"class"===n&&(n="className"),"key"===n||"children"===n);else if("style"===n)if(u=e.style,"string"==typeof t)u.cssText=t;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(i in r)t&&i in t||S(u,i,"");if(t)for(c in t)r&&t[c]===r[c]||S(u,c,t[c])}else"o"===n[0]&&"n"===n[1]?(l=n!==(n=n.replace(/Capture$/,"")),_=n.toLowerCase(),n=(_ in e?_:n).slice(2),t?(r||e.addEventListener(n,N,l),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,N,l)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!o&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function N(e){this.l[e.type](r.event?r.event(e):e)}function P(e,n,t,o,u,i,c,l,_){var f,a,s,d,h,v,m,g,C,k,E=n.type;if(void 0!==n.constructor)return null;(f=r.__b)&&f(n);try{e:if("function"==typeof E){if(g=n.props,C=(f=E.contextType)&&o[f.__c],k=f?C?C.props.value:f.__:o,t.__c?m=(a=n.__c=t.__c).__=a.__E:("prototype"in E&&E.prototype.render?n.__c=a=new E(g,k):(n.__c=a=new b(g,k),a.constructor=E,a.render=F),C&&C.sub(a),a.props=g,a.state||(a.state={}),a.context=k,a.__n=o,s=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=E.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=p({},a.__s)),p(a.__s,E.getDerivedStateFromProps(g,a.__s))),d=a.props,h=a.state,s)null==E.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==E.getDerivedStateFromProps&&g!==d&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(g,k),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(g,a.__s,k)){for(a.props=g,a.state=a.__s,a.__d=!1,a.__v=n,n.__e=t.__e,n.__k=t.__k,a.__h.length&&c.push(a),f=0;f<n.__k.length;f++)n.__k[f]&&(n.__k[f].__=n);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(g,a.__s,k),null!=a.componentDidUpdate&&a.__h.push((function(){a.componentDidUpdate(d,h,v)}))}a.context=k,a.props=g,a.state=a.__s,(f=r.__r)&&f(n),a.__d=!1,a.__v=n,a.__P=e,f=a.render(a.props,a.state,a.context),n.__k=null!=f&&f.type==y&&null==f.key?f.props.children:Array.isArray(f)?f:[f],null!=a.getChildContext&&(o=p(p({},o),a.getChildContext())),s||null==a.getSnapshotBeforeUpdate||(v=a.getSnapshotBeforeUpdate(d,h)),x(e,n,t,o,u,i,c,l,_),a.base=n.__e,a.__h.length&&c.push(a),m&&(a.__E=a.__=null),a.__e=!1}else n.__e=R(t.__e,n,t,o,u,i,c,_);(f=r.diffed)&&f(n)}catch(e){r.__e(e,n,t)}return n.__e}function U(e,n){r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function R(e,n,t,r,o,u,i,c){var l,_,s,p,d,h=t.props,v=n.props;if(o="svg"===n.type||o,null!=u)for(l=0;l<u.length;l++)if(null!=(_=u[l])&&((null===n.type?3===_.nodeType:_.localName===n.type)||e==_)){e=_,u[l]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),u=null}if(null===n.type)h!==v&&e.data!=v&&(e.data=v);else if(n!==t){if(null!=u&&(u=a.slice.call(e.childNodes)),s=(h=t.props||f).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(h===f)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,r,o){var u;for(u in t)u in n||A(e,u,null,t[u],r);for(u in n)o&&"function"!=typeof n[u]||"value"===u||"checked"===u||t[u]===n[u]||A(e,u,n[u],t[u],r)})(e,v,h,o,c),n.__k=n.props.children,p||x(e,n,t,r,"foreignObject"!==n.type&&o,u,i,f,c),c||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function D(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function H(e,n,t){var o,u,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||D(o,null,n)),t||"function"==typeof e.type||(t=null!=(u=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&H(o[i],n,t);null!=u&&d(u)}function F(e,n,t){return this.constructor(e,t)}function L(e,n,t){var o,u,i;r.__&&r.__(e,n),u=(o=t===l)?null:t&&t.__k||n.__k,e=h(y,null,[e]),i=[],P(n,(o?n:t||n).__k=e,u||f,f,void 0!==n.ownerSVGElement,t&&!o?[t]:u?null:a.slice.call(n.childNodes),i,t||f,o),U(i,e)}function T(e,n){L(e,n,l)}function M(e,n){return n=p(p({},e.props),n),arguments.length>2&&(n.children=a.slice.call(arguments,2)),v(e.type,n,n.key||e.key,n.ref||e.ref)}function O(e){var n={},t={__c:"__cC"+_++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return n[t.__c]=o,n},this.shouldComponentUpdate=function(n){e.value!==n.value&&r.some((function(e){e.context=n.value,k(e)}))},this.sub=function(e){r.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Consumer.contextType=t,t}r={__e:function(e,n){for(var t,r;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(r=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(r=!0,t.componentDidCatch(e)),r)return k(t.__E=t)}catch(n){e=n}throw e}},o=function(e){return null!=e&&void 0===e.constructor},b.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&p(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),k(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},b.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.__pbind(Promise.resolve()):setTimeout,l=f,_=0},30396:function(e,n,t){t.r(n),t.d(n,{useCallback:function(){return g},useContext:function(){return C},useDebugValue:function(){return k},useEffect:function(){return h},useErrorBoundary:function(){return E},useImperativeHandle:function(){return y},useLayoutEffect:function(){return v},useMemo:function(){return b},useReducer:function(){return d},useRef:function(){return m},useState:function(){return p}});var r,o,u,i=t(6400),c=[],l=i.options.__r,_=i.options.diffed,f=i.options.__c,a=i.options.unmount;function s(e){i.options.__h&&i.options.__h(o);var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function p(e){return d(N,e)}function d(e,n,t){var u=s(r++);return u.__c||(u.__c=o,u.__=[t?t(n):N(void 0,n),function(n){var t=e(u.__[0],n);u.__[0]!==t&&(u.__[0]=t,u.__c.setState({}))}]),u.__}function h(e,n){var t=s(r++);A(t.__H,n)&&(t.__=e,t.__H=n,o.__H.__h.push(t))}function v(e,n){var t=s(r++);A(t.__H,n)&&(t.__=e,t.__H=n,o.__h.push(t))}function m(e){return b((function(){return{current:e}}),[])}function y(e,n,t){v((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))}function b(e,n){var t=s(r++);return A(t.__H,n)?(t.__H=n,t.__h=e,t.__=e()):t.__}function g(e,n){return b((function(){return e}),n)}function C(e){var n=o.context[e.__c];if(!n)return e.__;var t=s(r++);return null==t.__&&(t.__=!0,n.sub(o)),n.props.value}function k(e,n){i.options.useDebugValue&&i.options.useDebugValue(n?n(e):e)}function E(e){var n=s(r++),t=p();return n.__=e,o.componentDidCatch||(o.componentDidCatch=function(e){n.__&&n.__(e),t[1](e)}),[t[0],function(){t[1](void 0)}]}function x(){c.some((function(e){if(e.__P)try{e.__H.__h.forEach(w),e.__H.__h.forEach(S),e.__H.__h=[]}catch(n){return i.options.__e(n,e.__v),!0}})),c=[]}function w(e){e.t&&e.t()}function S(e){var n=e.__();"function"==typeof n&&(e.t=n)}function A(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}function N(e,n){return"function"==typeof n?n(e):n}i.options.__r=function(e){l&&l(e),r=0,(o=e.__c).__H&&(o.__H.__h.forEach(w),o.__H.__h.forEach(S),o.__H.__h=[])},i.options.diffed=function(e){_&&_(e);var n=e.__c;if(n){var t=n.__H;t&&t.__h.length&&(1!==c.push(n)&&u===i.options.requestAnimationFrame||((u=i.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(x))}},i.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(w),e.__h=e.__h.filter((function(e){return!e.__||S(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],i.options.__e(t,e.__v)}})),f&&f(e,n)},i.options.unmount=function(e){a&&a(e);var n=e.__c;if(n){var t=n.__H;if(t)try{t.__.forEach((function(e){return e.t&&e.t()}))}catch(e){i.options.__e(e,n.__v)}}}}}]);menu-item-9" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-9"><a href="https://liteapks.com/">Home</a></li>
<li id="menu-item-10" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor menu-item-10"><a href="https://liteapks.com/apps">Apps</a></li>
<li id="menu-item-11" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-11"><a href="https://liteapks.com/games">Games</a></li>
<li id="menu-item-12" class="menu-item menu-item-type-taxonomy menu-item-object-tip_cat menu-item-12"><a href="https://liteapks.com/news">News</a></li>
</ul>
</nav>
<div class="ml-auto ml-lg-0 mw-100" style="width: 300px;"><form class="form-search" method="GET" action="https://liteapks.com">
<div class="input-group">
<input class="form-control border-white" type="text" name="s" placeholder="Search">
<div class="input-group-append">
<button class="btn bg-white" type="submit">
<svg class="svg-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" /></svg>
</button>
</div>
</div>
</form></div>
</div>
</header>
<div id="content" class="site-content">
<div class="py-2">
<div class="container">
<ul id="breadcrumb" class="breadcrumb" itemscope itemtype="http://schema.org/BreadcrumbList" itemid="https://liteapks.com/balance.html#breadcrumb">
<li class="breadcrumb-item home" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
<a href="https://liteapks.com" title="Home" itemprop="item" itemscope itemtype="https://schema.org/WebPage" itemid="https://liteapks.com">
<span itemprop="name">Home</span>
</a>
<meta itemprop="position" content="1" />
</li>
<li class="breadcrumb-item item-cat" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemprop="item" itemscope itemtype="https://schema.org/WebPage" itemid="https://liteapks.com/apps" href="https://liteapks.com/apps"><span itemprop="name">Apps</span></a><meta itemprop="position" content="2" /></li><li class="breadcrumb-item item-cat" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"><a itemprop="item" itemscope itemtype="https://schema.org/WebPage" itemid="https://liteapks.com/apps/health-fitness" href="https://liteapks.com/apps/health-fitness"><span itemprop="name">Health &amp; Fitness</span></a><meta itemprop="position" content="3" /></li> <li class="breadcrumb-item active" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
<span itemprop="name">
Balance </span>
<meta itemprop="position" content="4" />
</li>
</ul>
</div>
</div>
<div class="container py-4">
<div class="row">
<main id="primary" class="col-12 col-lg-8 col-xl-9 content-area">
<article class="bg-white border rounded shadow-sm p-3 mb-4">
<div class="rounded-lg mb-3 mb-md-4 position-relative">
<img class="rounded-lg d-block object-cover" style="min-height: 200px;" loading="lazy" src="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-1.jpg" alt="Balance">
<div class="text-center text-white rounded-lg p-4 p-md-5 d-flex align-items-center justify-content-center position-absolute" style="background-color: rgba(0, 0, 0, 0.6); z-index: 10; top: 0; bottom: 0; left: 0; right: 0;">
<div>
<h1 class="h2 font-weight-bold">
Balance v1.111.0 MOD APK (Subscribed Unlocked)
</h1>
<time class="d-block">
<svg class="svg-5 svg-white mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C201.7 512 151.2 495 109.7 466.1C95.2 455.1 91.64 436 101.8 421.5C111.9 407 131.8 403.5 146.3 413.6C177.4 435.3 215.2 448 256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C202.1 64 155 85.46 120.2 120.2L151 151C166.1 166.1 155.4 192 134.1 192H24C10.75 192 0 181.3 0 168V57.94C0 36.56 25.85 25.85 40.97 40.97L74.98 74.98C121.3 28.69 185.3 0 255.1 0L256 0zM256 128C269.3 128 280 138.7 280 152V246.1L344.1 311C354.3 320.4 354.3 335.6 344.1 344.1C335.6 354.3 320.4 354.3 311 344.1L239 272.1C234.5 268.5 232 262.4 232 256V152C232 138.7 242.7 128 256 128V128z" /></svg>
<em class="align-middle">
February 8, 2024 (4 hours ago)
</em>
</time>
</div>
</div>
</div>
<div class="small bg-light rounded pt-3 px-3 mb-3 mb-md-4 entry-content" style="padding-bottom: 1px;"><p><em>Balance Mod APK &#8211; Receive free treatment for anxiety for an entire year. Practice deep breathing, concentration, and meditation to bring mental tranquility.</em></p>
</div>
<div class="ads-banner mb-3" style="margin-left: -24px;">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5330584085449425" crossorigin="anonymous"></script>

<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5330584085449425" data-ad-slot="4501423579" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> </div>
<table class="table table-striped table-borderless">
<tr>
<th style="width: 45%;">
<svg class="svg-5 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55" /></svg>
App Name
</th>
<td style="width: 55%;">Balance</td>
</tr>
<tr>
<th style="width: 45%;">
<svg class="svg-5 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z" /></svg>
Publisher </th>
<td style="width: 55%;"><a href="https://liteapks.com/developer/elevate-labs" rel="tag">Elevate Labs</a></td>
</tr>
<tr>
<th style="width: 45%;">
<svg class="svg-5 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 48a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0 160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 16H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z" /></svg>
Genre
</th>
<td style="width: 55%;"><a href="https://liteapks.com/apps/health-fitness" rel="tag">Health &amp; Fitness</a></td>
</tr>
<tr>
<th style="width: 45%;">
<svg class="svg-5 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z" /></svg>
Size </th>
<td style="width: 55%;">91M</td>
</tr>
<tr>
<th style="width: 45%;">
<svg class="svg-5 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" /></svg>
Latest Version </th>
<td style="width: 55%;">1.111.0</td>
</tr>
<tr>
<th style="width: 45%;">
<svg class="svg-5 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z" /></svg>
MOD Info
</th>
<td style="width: 55%;">Subscribed Unlocked</td>
</tr>
<tr>
<th style="width: 45%;">
<svg class="svg-5 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
Get it On </th>
<td style="width: 55%;">
<a href="https://play.google.com/store/apps/details?id=com.elevatelabs.geonosis" target="_blank" rel="nofollow">
<img style="max-height: 1.5rem;" src="https://liteapks.com/wp-content/themes/new-theme-k/images/google-play.png" alt="Google Play">
</a>
</td>
</tr>
</table>
<div class="d-flex align-items-center mb-3">
<div class="rating" data-post_id="78037" data-rateyo-rating="4.4"></div>
<span class="ml-2">
4.4/5 (5 votes)
</span>
</div>
<ul class="nav mb-2 list-shares">
<li class="mr-2 mb-2">
<a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://liteapks.com/balance.html" rel="nofollow" target="_blank">
<svg fill="#fff" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>
<span class="small d-none d-sm-inline ml-1">Share On Facebook</span>
</a>
</li>
<li class="mr-2 mb-2">
<a class="twitter" href="https://twitter.com/home?status=https://liteapks.com/balance.html" rel="nofollow" target="_blank">
<svg fill="#fff" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
<span class="small d-none d-sm-inline ml-1">Twitter</span>
</a>
</li>
<li class="mr-2 mb-2">
<a class="pinterest" href="https://pinterest.com/pin/create/button/?url=https://liteapks.com/balance.html" rel="nofollow" target="_blank">
<svg fill="#fff" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg>
<span class="small d-none d-sm-inline ml-1">Pinterest</span>
</a>
</li>
<li class="mr-2 mb-2">
<a class="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=https://liteapks.com/balance.html&title=Balance&summary=&source=" rel="nofollow" target="_blank">
<svg fill="#fff" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
<span class="small d-none d-sm-inline ml-1">Linkedin</span>
</a>
</li>
<li class="mr-2 mb-2">
<a class="email" href="/cdn-cgi/l/email-protection#dbe4a8aeb9b1beb8afe699bab7bab5b8befdb9b4bfa2e6b3afafaba8e1f4f4b7b2afbebaabb0a8f5b8b4b6f4b9bab7bab5b8bef5b3afb6b7" rel="nofollow" target="_blank">
<svg fill="#fff" height="14px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" /></svg>
<span class="small d-none d-sm-inline ml-1">Email</span>
</a>
</li>
</ul>
</article>
<a class="btn btn-primary btn-block mb-4" href="https://liteapks.com/download/balance-78037" rel="nofollow">
<svg class="svg-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z" /></svg>
<span class="align-middle">Download (91M)</span>
</a>
<div class="ads-banner mb-3" style="margin-left: -24px;">
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5330584085449425" crossorigin="anonymous"></script>

<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5330584085449425" data-ad-slot="4501423579" data-ad-format="auto" data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> </div>
<div class="bg-white border rounded shadow-sm p-3 mb-4">
<div id="accordion-more-info" class="mb-3 accordion accordion-more-info">
<div class="rounded border" style="margin-top: -1px;">
<a class="rounded d-flex align-items-center py-2 px-3  toggler" data-toggle="collapse" href="#more-info-1">
MOD Extra Info? </a>
<div id="more-info-1" class="collapse show" data-parent="#accordion-more-info">
<div class="pt-3 px-3">
<ul>
<li><em>Subscription / Paid features unlocked;</em></li>
<li><em>Disabled / Removed unwanted Permissions + Receivers + Providers + Services;</em></li>
<li><em>Optimized and zipaligned graphics and cleaned resources for fast load;</em></li>
<li><em>Ads links removed and invokes methods nullified;</em></li>
<li><em>Google Play Store install package check disabled;</em></li>
<li><em>Debug code removed;</em></li>
<li><em>Remove default .source tags name of the corresponding java files;</em></li>
<li><em>Analytics / Crashlytics / Firebase disabled;</em></li>
<li><em>Native crashlytics removed completely;</em></li>
<li><em>AOSP compatible mode;</em></li>
<li><em>Languages: Full Multi Languages;</em></li>
<li><em>CPUs: armeabi-v7a, arm64-v8a, x86, x86_64e;</em></li>
<li><em>Screen DPIs: 120dpi, 160dpi, 240dpi, 320dpi, 480dpi, 640dpi;</em></li>
<li><em>Original package signature changed.</em></li>
</ul>
</div>
</div>
</div>
</div>
<div class="mb-3">
<a class="btn btn-light collapsed" data-toggle="collapse" href="#table-of-contents">Explore this article</a>
<div id="table-of-contents" class="collapse">
<div class="bg-light rounded d-inline-block p-3 table-of-contents" style="margin-top: -1px;">
<div class="links"></div>
<a class="d-block" href="#download">Download</a>
</div>
</div>
</div>
<div class="mb-3 entry-content">
<p>It would be best to ignore Balance: Meditation &amp; Sleep because this is a specific meditation application with the best sequence. If you have a busy schedule and need to adhere to strict time limits throughout the day, then this app is made for you.</p>
<table style="border-collapse: collapse; width: 100%;">
<tbody>
<tr>
<td style="width: 50%;"><img fetchpriority="high" decoding="async" class="aligncenter size-medium wp-image-78040" src="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-2-500x889.jpg" alt="Balance: Meditation &amp; Sleep" width="500" height="889" srcset="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-2-500x889.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-2.jpg 1000w" sizes="(max-width: 500px) 100vw, 500px" /></td>
<td style="width: 50%;"><img decoding="async" class="aligncenter size-medium wp-image-78041" src="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-3-500x889.jpg" alt="Balance: Meditation &amp; Sleep" width="500" height="889" srcset="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-3-500x889.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-3.jpg 1000w" sizes="(max-width: 500px) 100vw, 500px" /></td>
</tr>
</tbody>
</table>
<h2>EASY TO USE FROM THE FIRST TIME</h2>
<p>Balance: Meditation &amp; Sleep interface is entirely white and light blue. The interface is meant to be airy and straightforward, as with the message itself. Users will be asked some basic questions when they first launch the app. The app can learn more about the user&#8217;s meditation goals and background by answering these questions. The app will then recommend the most suitable meditation courses for the user. You will then be provided with detailed schedules and times that are still highly understandable and streamlined. Anyone can pick up and use the app regardless of their familiarity with smartphones or technology.</p>
<h2>MAINTAINING A STABLE EQUILIBRIUM IS VERY IMPORTANT</h2>
<p>When you finish a meditation session, you will be notified that you have progressed one level in a skill that corresponds to your meditation duration. These are all essential skills, and the degree to which they have been honed over time indicates how far a person has come practicing meditation. Among the many practices, you engage in will be the cultivation of breathing and introspection skills. In addition, the app will give you data on the &#8220;status&#8221; of each skill, making it easy to see your progress and increase the intensity of your practice. It can also help you figure out where you need to focus your efforts in the future. You should reconsider your time on a particular skill if you discover it has low stats.</p>
<table style="border-collapse: collapse; width: 100%;">
<tbody>
<tr>
<td style="width: 50%;"><img decoding="async" class="aligncenter size-medium wp-image-78042" src="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-4-500x889.jpg" alt="Balance: Meditation &amp; Sleep" width="500" height="889" srcset="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-4-500x889.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-4.jpg 1000w" sizes="(max-width: 500px) 100vw, 500px" /></td>
<td style="width: 50%;"><img loading="lazy" decoding="async" class="aligncenter size-medium wp-image-78043" src="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-5-500x889.jpg" alt="Balance: Meditation &amp; Sleep" width="500" height="889" srcset="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-5-500x889.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-5.jpg 1000w" sizes="(max-width: 500px) 100vw, 500px" /></td>
</tr>
</tbody>
</table>
<h2>THE EXERCISES WERE METICULOUSLY PLANNED, BUT THERE WAS NO PRESSURE</h2>
<p>Balance: Meditation &amp; Sleep&#8217;s guided meditations follow a 10-day program designed to gradually introduce a range of skills throughout the program, each of which can be tailored to goals and needs user-specific. If you put in the time and effort to practice regularly, you can level up and increase your stats over time. You also don&#8217;t need to worry about forgetting your workout time because there&#8217;s too much busy work. The app can send notifications to remind you of your scheduled workout times. These alerts are gentle and unobtrusive, so you can relax even as they keep you from missing your workouts.</p>
<h2>MOTIVATIONAL MUSIC</h2>
<p>As you progress through Balance: Meditation &amp; Sleep, you&#8217;ll hear from male coach Ofosu and female coach Leah. The coach&#8217;s voice is gentle, inspiring, slow, and quickly enters the listener&#8217;s mind. You&#8217;ll find sounds that will help you fall asleep faster and stay asleep longer here, as music is an essential part of any meditation app. No matter how advanced your meditation practice is, it would be best always to put on calming music.</p>
<table style="border-collapse: collapse; width: 100%;">
<tbody>
<tr>
<td style="width: 50%;"><img loading="lazy" decoding="async" class="aligncenter size-medium wp-image-78044" src="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-6-500x889.jpg" alt="Balance: Meditation &amp; Sleep" width="500" height="889" srcset="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-6-500x889.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-6.jpg 1000w" sizes="(max-width: 500px) 100vw, 500px" /></td>
<td style="width: 50%;"><img loading="lazy" decoding="async" class="aligncenter size-medium wp-image-78045" src="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-7-500x889.jpg" alt="Balance: Meditation &amp; Sleep" width="500" height="889" srcset="https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-7-500x889.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/balance-meditation-sleep-7.jpg 1000w" sizes="(max-width: 500px) 100vw, 500px" /></td>
</tr>
</tbody>
</table>
<p>You can listen to one of the thousands of audio files to help you relax, fall asleep, and feel refreshed and rejuvenated. Choose from various environments and effects that simulate your surroundings, such as bustling bars, thrills of adventure, the beauty of nature, and gentle rain. The more you use the app and meditate; the more relevant the app&#8217;s music recommendations will be to your meditation sessions. Because the app has learned more about your musical tastes and preferences, it can provide a better experience.</p>
</div>
<h2 id="download" class="h5 font-weight-semibold mb-3">Download Balance v1.111.0 MOD APK (Subscribed Unlocked)</h2>
<a class="btn btn-primary btn-block mb-3" href="https://liteapks.com/download/balance-78037" rel="nofollow">
<svg class="svg-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M528 288h-92.1l46.1-46.1c30.1-30.1 8.8-81.9-33.9-81.9h-64V48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v112h-64c-42.6 0-64.2 51.7-33.9 81.9l46.1 46.1H48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V336c0-26.5-21.5-48-48-48zm-400-80h112V48h96v160h112L288 368 128 208zm400 256H48V336h140.1l65.9 65.9c18.8 18.8 49.1 18.7 67.9 0l65.9-65.9H528v128zm-88-64c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24z" /></svg>
<span class="align-middle">Download (91M)</span>
</a>
<div class="small mb-3"><p><em>You are now ready to download <strong>Balance </strong>for free. Here are some notes:</em></p>
<ul>
<li><em>To prevent users from installing apk files from outside, Google Play has now added a warning when installing apks &amp; mods. PlayProtect will tell you the file is harmful. Simply, just click &#8220;Install anyway (unsafe)&#8221;.</em></li>
</ul>
</div>
<div class="text-center mb-3">
<a class="btn btn-info rounded-pill" href="https://telegram.me/liteapks" target rel="nofollow">
<svg class="svg-5 mr-1" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" /></svg>
Join @LITEAPKS.COM on Telegram channel </a>
</div>
</div>
<section class="related-posts">
<h2 class="font-weight-bold mb-4">
More from Developer </h2>
<div class="row">
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/elevate-brain-training-games.html" title="Elevate – Brain Training Games">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/04/elevate-brain-training-games-150x150.png" class="rounded-lg wp-post-image" alt="Elevate &#8211; Brain Training Games" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/04/elevate-brain-training-games-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/04/elevate-brain-training-games.png 360w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Elevate
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">5.128.0 </span>
<span class="align-middle"> + </span>
<span class="align-middle">70M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a>
</div>
 </div>
</section>
<section class="related-posts">
<h2 class="font-weight-bold mb-4">
Recommended for You </h2>
<div class="row">
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/lose-weight-app-for-women.html" title="Lose Weight App for Women">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/08/lose-weight-app-for-women-mod-apk-150x150.png" class="rounded-lg wp-post-image" alt decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/08/lose-weight-app-for-women-mod-apk-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/08/lose-weight-app-for-women-mod-apk.png 300w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Lose Weight App for Women
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">2.0.15</span>
<span class="align-middle"> + </span>
<span class="align-middle">21M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a>
</div>
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/meditation-lojong-2.html" title="Meditation: Lojong">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/12/meditation-lojong-150x150.jpg" class="rounded-lg wp-post-image" alt="Meditation: Lojong" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/12/meditation-lojong-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2022/12/meditation-lojong-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/meditation-lojong.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Meditation: Lojong
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">2.9.5</span>
<span class="align-middle"> + </span>
<span class="align-middle">45M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a>
</div>
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/sattva-meditation-app.html" title="Sattva –  Meditation App">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2023/01/sattva-meditation-app-150x150.jpg" class="rounded-lg wp-post-image" alt="Sattva &#8211;  Meditation App" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2023/01/sattva-meditation-app-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2023/01/sattva-meditation-app-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2023/01/sattva-meditation-app.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Sattva
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">9.1</span>
<span class="align-middle"> + </span>
<span class="align-middle">40M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a>
</div>
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/food-diary-see-how-you-eat-app-2.html" title="Food Diary See How You Eat App">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2023/01/food-diary-see-how-you-eat-app-150x150.jpg" class="rounded-lg wp-post-image" alt="Food Diary See How You Eat App" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2023/01/food-diary-see-how-you-eat-app-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2023/01/food-diary-see-how-you-eat-app-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2023/01/food-diary-see-how-you-eat-app.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Food Diary
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">3.2.29</span>
<span class="align-middle"> + </span>
<span class="align-middle">20M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a>
</div>
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/medisafe-pill-med-reminder.html" title="Medisafe Pill &#038; Med Reminder">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/06/medisafe-pill-med-reminder-150x150.png" class="rounded-lg wp-post-image" alt="Medisafe Pill &#038; Med Reminder" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/06/medisafe-pill-med-reminder-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/06/medisafe-pill-med-reminder.png 360w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Medisafe
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">9.37.13995</span>
<span class="align-middle"> + </span>
<span class="align-middle">101M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a>
</div>
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/jefit.html" title="JEFIT">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/12/gym-workout-plan-log-tracker-150x150.jpg" class="rounded-lg wp-post-image" alt="Gym Workout Plan &#038; Log Tracker" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/12/gym-workout-plan-log-tracker-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2022/12/gym-workout-plan-log-tracker-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/gym-workout-plan-log-tracker.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
JEFIT
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">11.37.7</span>
<span class="align-middle"> + </span>
<span class="align-middle">75M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a>
</div>
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/urban-health.html" title="Urban Health">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2023/01/sleep-meditate-urban-health-150x150.jpg" class="rounded-lg wp-post-image" alt="Sleep &#038; Meditate: Urban Health" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2023/01/sleep-meditate-urban-health-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2023/01/sleep-meditate-urban-health-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2023/01/sleep-meditate-urban-health.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Urban Health
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">4.6.708</span>
<span class="align-middle"> + </span>
<span class="align-middle">40M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a>
</div>
<div class="col-12 col-md-6 col-xl-4 mb-3">
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 position-relative archive-post" href="https://liteapks.com/strava-running-and-cycling-gps-2.html" title="Strava">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/06/strava-running-and-cycling-gps-150x150.png" class="rounded-lg wp-post-image" alt="Strava Running and Cycling GPS" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/06/strava-running-and-cycling-gps-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/06/strava-running-and-cycling-gps.png 360w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Strava
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">346.6 </span>
<span class="align-middle"> + </span>
<span class="align-middle">62M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Subscription Unlocked</span>
</div>
</div>
</div>
</a>
</div>
 </div>
</section>
<section class="bg-white border rounded shadow-sm pt-3 px-2 px-md-3 mb-3 mx-auto" style="max-width: 880px;">
<form class="form-comment" method="POST" action>
<h2 class="font-weight-bold mb-3">Leave a Comment</h2>
<input type="hidden" name="action" value="k_comment">
<input type="hidden" name="post_id" value="78037">
<div class="form-group">
<textarea class="form-control" rows="3" name="comment" placeholder="Comment"></textarea>
</div>
<div class="row">
<div class="col-12 col-sm-6 form-group">
<input class="form-control" type="text" name="name" placeholder="Name">
</div>
<div class="col-12 col-sm-6 form-group">
<input class="form-control" type="text" name="email" placeholder="Email">
</div>
</div>
<div class="form-group text-right">
<button class="btn btn-primary" type="submit">Send Comment</button>
</div>
</form>
</section> </main>
<aside id="secondary" class="col-12 col-lg-4 col-xl-3 widget-area">
<section class="mb-4">
<h4 class="h4 font-weight-bold mb-3">Health &amp; Fitness - Latest</h4>
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/lose-weight-app-for-women.html" title="Lose Weight App for Women">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/08/lose-weight-app-for-women-mod-apk-150x150.png" class="rounded-lg wp-post-image" alt decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/08/lose-weight-app-for-women-mod-apk-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/08/lose-weight-app-for-women-mod-apk.png 300w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Lose Weight App for Women
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">2.0.15</span>
<span class="align-middle"> + </span>
<span class="align-middle">21M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a><a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/meditation-lojong-2.html" title="Meditation: Lojong">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/12/meditation-lojong-150x150.jpg" class="rounded-lg wp-post-image" alt="Meditation: Lojong" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/12/meditation-lojong-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2022/12/meditation-lojong-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2022/12/meditation-lojong.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Meditation: Lojong
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">2.9.5</span>
<span class="align-middle"> + </span>
<span class="align-middle">45M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a><a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/sattva-meditation-app.html" title="Sattva –  Meditation App">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2023/01/sattva-meditation-app-150x150.jpg" class="rounded-lg wp-post-image" alt="Sattva &#8211;  Meditation App" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2023/01/sattva-meditation-app-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2023/01/sattva-meditation-app-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2023/01/sattva-meditation-app.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Sattva
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">9.1</span>
<span class="align-middle"> + </span>
<span class="align-middle">40M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a><a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/food-diary-see-how-you-eat-app-2.html" title="Food Diary See How You Eat App">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2023/01/food-diary-see-how-you-eat-app-150x150.jpg" class="rounded-lg wp-post-image" alt="Food Diary See How You Eat App" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2023/01/food-diary-see-how-you-eat-app-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2023/01/food-diary-see-how-you-eat-app-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2023/01/food-diary-see-how-you-eat-app.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Food Diary
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">3.2.29</span>
<span class="align-middle"> + </span>
<span class="align-middle">20M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a><a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/medisafe-pill-med-reminder.html" title="Medisafe Pill &#038; Med Reminder">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/06/medisafe-pill-med-reminder-150x150.png" class="rounded-lg wp-post-image" alt="Medisafe Pill &#038; Med Reminder" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/06/medisafe-pill-med-reminder-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/06/medisafe-pill-med-reminder.png 360w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Medisafe
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">9.37.13995</span>
<span class="align-middle"> + </span>
<span class="align-middle">101M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a> </section>
<section class="mb-4">
<h4 class="h4 font-weight-bold mb-3">Health &amp; Fitness - Popular</h4>
<a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/komoot.html" title="Komoot">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/05/komoot-cycling-hiking-maps-150x150.png" class="rounded-lg wp-post-image" alt="Komoot: Cycling &#038; Hiking Maps" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/05/komoot-cycling-hiking-maps-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/05/komoot-cycling-hiking-maps.png 360w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Komoot
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">2024.05.1</span>
<span class="align-middle"> + </span>
<span class="align-middle">108M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a><a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/sleep-monitor-sleep-tracker.html" title="Sleep Monitor: Sleep Tracker">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/08/sleep-monitor-sleep-tracker-150x150.jpg" class="rounded-lg wp-post-image" alt="Sleep Monitor: Sleep Tracker" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/08/sleep-monitor-sleep-tracker-150x150.jpg 150w, https://liteapks.com/wp-content/uploads/2022/08/sleep-monitor-sleep-tracker-500x500.jpg 500w, https://liteapks.com/wp-content/uploads/2022/08/sleep-monitor-sleep-tracker.jpg 512w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Sleep Monitor
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">2.6.6.1 </span>
<span class="align-middle"> + </span>
<span class="align-middle">50M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a><a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/strava-running-and-cycling-gps-2.html" title="Strava">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/06/strava-running-and-cycling-gps-150x150.png" class="rounded-lg wp-post-image" alt="Strava Running and Cycling GPS" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/06/strava-running-and-cycling-gps-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/06/strava-running-and-cycling-gps.png 360w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Strava
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">346.6 </span>
<span class="align-middle"> + </span>
<span class="align-middle">62M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Subscription Unlocked</span>
</div>
</div>
</div>
</a><a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/myfitnesspal-calorie-counter.html" title="MyFitnessPal: Calorie Counter">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/06/myfitnesspal-calorie-counter-150x150.png" class="rounded-lg wp-post-image" alt="MyFitnessPal: Calorie Counter" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/06/myfitnesspal-calorie-counter-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/06/myfitnesspal-calorie-counter.png 360w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
MyFitnessPal
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">24.4.0</span>
<span class="align-middle"> + </span>
<span class="align-middle">85 MB</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a><a class="text-body bg-white border rounded shadow-sm overflow-hidden d-block h-100 mb-3 position-relative archive-post" href="https://liteapks.com/calm-2.html" title="Calm">
<div class="d-flex" style="padding: 0.75rem;">
<div class="flex-shrink-0" style="width: 4rem; margin-right: 0.75rem;">
<img width="96" height="96" src="https://liteapks.com/wp-content/uploads/2022/05/calm-meditate-sleep-relax-150x150.png" class="rounded-lg wp-post-image" alt="Calm &#8211; Meditate, Sleep, Relax" decoding="async" loading="lazy" srcset="https://liteapks.com/wp-content/uploads/2022/05/calm-meditate-sleep-relax-150x150.png 150w, https://liteapks.com/wp-content/uploads/2022/05/calm-meditate-sleep-relax.png 360w" sizes="(max-width: 96px) 100vw, 96px" /> </div>
<div style="min-width: 0;">
<h3 class="h6 font-weight-semibold text-truncate w-100 mb-1">
Calm
</h3>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M567.938 243.908L462.25 85.374A48.003 48.003 0 0 0 422.311 64H153.689a48 48 0 0 0-39.938 21.374L8.062 243.908A47.994 47.994 0 0 0 0 270.533V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V270.533a47.994 47.994 0 0 0-8.062-26.625zM162.252 128h251.497l85.333 128H376l-32 64H232l-32-64H76.918l85.334-128z"></path></svg>
<span class="align-middle">6.39.1</span>
<span class="align-middle"> + </span>
<span class="align-middle">46M</span>
</div>
<div class="small text-truncate text-muted">
<svg class="svg-6 svg-secondary mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"></path></svg>
<span class="align-middle"> Premium Unlocked</span>
</div>
</div>
</div>
</a> </section>
</aside>
</div>
</div>
</div>
<footer id="colophon" class="text-white bg-primary border-top pt-4 site-footer">
<div class="container">
<div class="row">
<div class="col-12 col-md-6">
<section class="mb-4">
<h4 class="h5 font-weight-semibold mb-3">
<svg class="mr-1 svg-5 svg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M67.508 468.467c-58.005-58.013-58.016-151.92 0-209.943l225.011-225.04c44.643-44.645 117.279-44.645 161.92 0 44.743 44.749 44.753 117.186 0 161.944l-189.465 189.49c-31.41 31.413-82.518 31.412-113.926.001-31.479-31.482-31.49-82.453 0-113.944L311.51 110.491c4.687-4.687 12.286-4.687 16.972 0l16.967 16.971c4.685 4.686 4.685 12.283 0 16.969L184.983 304.917c-12.724 12.724-12.73 33.328 0 46.058 12.696 12.697 33.356 12.699 46.054-.001l189.465-189.489c25.987-25.989 25.994-68.06.001-94.056-25.931-25.934-68.119-25.932-94.049 0l-225.01 225.039c-39.249 39.252-39.258 102.795-.001 142.057 39.285 39.29 102.885 39.287 142.162-.028A739446.174 739446.174 0 0 1 439.497 238.49c4.686-4.687 12.282-4.684 16.969.004l16.967 16.971c4.685 4.686 4.689 12.279.004 16.965a755654.128 755654.128 0 0 0-195.881 195.996c-58.034 58.092-152.004 58.093-210.048.041z" /></svg>
<span class="align-middle">
Useful Sections </span>
</h4>
<ul id="menu-useful-sections" class="nav menu"><li id="menu-item-17" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-17"><a href="https://liteapks.com/">Home</a></li>
<li id="menu-item-18" class="menu-item menu-item-type-taxonomy menu-item-object-category current-post-ancestor menu-item-18"><a href="https://liteapks.com/apps">Apps</a></li>
<li id="menu-item-19" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-19"><a href="https://liteapks.com/games">Games</a></li>
</ul> </section>
</div>
<div class="col-12 col-md-6">
<section class="mb-4">
<h4 class="h5 font-weight-semibold mb-3">
<svg class="mr-1 svg-5 svg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" /></svg>
<span class="align-middle">
About Us </span>
</h4>
<ul id="menu-about-us" class="nav menu"><li id="menu-item-20" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-20"><a href="https://liteapks.com/about-liteapks-team">About LITEAPKS Team?</a></li>
<li id="menu-item-21" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-21"><a href="https://liteapks.com/contact">Contact</a></li>
</ul> </section>
</div>
</div>
<div class="d-flex align-items-center justify-content-center mb-4 socials">
<span class="border-top d-block flex-grow-1 mr-3"></span>
<a class="mx-2" href="https://t.me/liteapks" target="_blank" rel="nofollow">
<svg class="svg-5 svg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" /></svg> </a>
<a class="mx-2" href target="_blank" rel="nofollow">
<svg class="svg-5 svg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg> </a>
<a class="mx-2" href target="_blank" rel="nofollow">
<svg class="svg-5 svg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" /></svg> </a>
<a class="mx-2" href target="_blank" rel="nofollow">
<svg class="svg-5 svg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg> </a>
<a class="mx-2" href target="_blank" rel="nofollow">
<svg class="svg-5 svg-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg> </a>
<span class="border-top d-block flex-grow-1 ml-3"></span>
</div>
</div>
<div class="small text-center d-flex pt-3" style="background-color: #63aa1f;">
<div class="container">
<p><em><strong>© Copyright 2023 LITEAPKS.COM</strong></em></p>
</div>
</div>
</footer>
</div>
<script type="text/javascript" src="https://liteapks.com/wp-content/themes/new-theme-k/js/bootstrap.min.js?ver=2" id="k-bootstrap-js"></script>
<script type="text/javascript" id="k-site-js-extra">
/* <![CDATA[ */
var ajax = {"ajax_url":"https:\/\/liteapks.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type="text/javascript" src="https://liteapks.com/wp-content/themes/new-theme-k/js/site.js?ver=2" id="k-site-js"></script>
<script type="text/javascript" src="https://liteapks.com/wp-includes/js/comment-reply.min.js?ver=b526d999fd5b2e6cc0839ec6c0c94a8f" id="comment-reply-js" async="async" data-wp-strategy="async"></script>
<script>(function(){var js = "window['__CF$cv$params']={r:'85238dc62b1f2f9f',t:'MTcwNzM5MTk2NS4yNTcwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"85238dc62b1f2f9f","version":"2024.2.0","token":"2593a8e69aef4063a91e2d18a482f482"}' crossorigin="anonymous"></script>
</body>
</html>
s"></script>
<script type="text/javascript" id="k-site-js-extra">
/* <![CDATA[ */
var ajax = {"ajax_url":"https:\/\/liteapks.com\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>
<script type="text/javascript" src="https://liteapks.com/wp-content/themes/new-theme-k/js/site.js?ver=2" id="k-site-js"></script>
<script type="text/javascript" src="https://liteapks.com/wp-includes/js/comment-reply.min.js?ver=b526d999fd5b2e6cc0839ec6c0c94a8f" id="comment-reply-js" async="async" data-wp-strategy="async"></script>
<script>(function(){var js = "window['__CF$cv$params']={r:'85238dc52cdc5e23',t:'MTcwNzM5MTk2NS4yMDEwMDA='};_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js',document.getElementsByTagName('head')[0].appendChild(_cpo);";var _0xh = document.createElement('iframe');_0xh.height = 1;_0xh.width = 1;_0xh.style.position = 'absolute';_0xh.style.top = 0;_0xh.style.left = 0;_0xh.style.border = 'none';_0xh.style.visibility = 'hidden';document.body.appendChild(_0xh);function handler() {var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;if (_0xi) {var _0xj = _0xi.createElement('script');_0xj.innerHTML = js;_0xi.getElementsByTagName('head')[0].appendChild(_0xj);}}if (document.readyState !== 'loading') {handler();} else if (window.addEventListener) {document.addEventListener('DOMContentLoaded', handler);} else {var prev = document.onreadystatechange || function () {};document.onreadystatechange = function (e) {prev(e);if (document.readyState !== 'loading') {document.onreadystatechange = prev;handler();}};}})();</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"85238dc52cdc5e23","version":"2024.2.0","token":"2593a8e69aef4063a91e2d18a482f482"}' crossorigin="anonymous"></script>
</body>
</html>
