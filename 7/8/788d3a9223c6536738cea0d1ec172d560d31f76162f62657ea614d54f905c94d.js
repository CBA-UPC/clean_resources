/*! For license information please see vendors~search-page-bootstrapper~search-results.5fcdd7d88c62c322a9b8.chunk.v7.js.LICENSE.txt */
(window.officehome_webpackJsonp=window.officehome_webpackJsonp||[]).push([[96],{"+I+c":"+Ltg":"2qDQ":function(t,e,n){"use strict";t.exports=function(){}},"5R4H":"7L9N":"9K2m":E02R:Fcif:GeWT:HW8R:function(t,e,n){var r=n("kah5");t.exports=t.exports.parse=i,t.exports.compile=t.exports.tokensToFunction=u,t.exports.tokensToRegExp=h;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,e){for(var n,r=[],i=0,a=0,c="",u=e&&e.delimiter||"/";null!=(n=o.exec(t));){var f=n[0],l=n[1],h=n.index;if(c+=t.slice(a,h),a=h+f.length,l)c+=l[1];else{var d=t[a],y=n[2],m=n[3],v=n[4],g=n[5],b=n[6],x=n[7];c&&(r.push(c),c="");var O=n[2]||u,w=v||g;r.push({name:m||i++,prefix:y||"",delimiter:O,optional:"?"===b||"*"===b,repeat:"+"===b||"*"===b,partial:null!=y&&null!=d&&d!==y,asterisk:!!x,pattern:w?p(w):x?".*":"[^"+s(O)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}nction s(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}Du:"N/Uq":function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return s}));var r=n("Og1j"),o=n.n(r);"+Ltg");var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=s=function(t){var e=t.search,n=t.hash,r=t.pathname||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),n&&"#"!==n&&(r+="#"===n.charAt(0)?n:"#"+n),r},p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=function(t,e,n,r){var o=void 0;"string"==typeof t?(o=t)).state=e:(void 0===(o=p({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==e&&void 0===o.state&&(o.state=e));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o},l=h=d=("undefined"==typeof window||!window.document||window,"function"==typeof Symbol&&Symbol,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?,y=Object.assign||m=v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.getUserConfirmation,n=t.initialEntries,r=void 0===n?["/"]:n,i=t.initialIndex,a=void 0===i?0:i,c=t.keyLength,u=void 0===c?6:c,p=h(),l=v=g=m(a,0,r.length-1),b=r.map((),x=function(t,n){o()(!("object"===(void 0===t?"undefined":d(t))&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");var r="PUSH",i=f(t,n,v(),_.location);p.confirmTransitionTo(i,r,e,()},O=function(t,n){o()(!("object"===(void 0===t?"undefined":d(t))&&void 0!==t.state&&void 0!==n),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");var r="REPLACE",i=f(t,n,v(),_.location);p.confirmTransitionTo(i,r,e,()},w=j=E=S=P=C=_={length:b.length,action:"POP",location:b[g],index:g,entries:b,createHref:s,push:x,replace:O,go:w,goBack:j,goForward:E,canGo:S,block:P,listen:C};return _}},NS33:Og1j:Qwwl:function(t,e,n){"use strict";e.__esModule=!0;var r=n("mXGw"),o=(a(r),a(n("W0B4"))),i=a(n("5R4H"));"2qDQ"));var p=1073741823;.default=function(t,e){var n,a,l="__create-react-context-"+(0,i.default)()+"__",h=function(t){eturn s(n,t),n.prototype.getChildContext=n.prototype.componentWillReceiveProps=n.prototype.render=n}(r.Component);h.childContextTypes=((n={})[l]=o.default.object.isRequired,n);var d=function(e){eturn s(n,e),n.prototype.componentWillReceiveProps=n.prototype.componentDidMount=n.prototype.componentWillUnmount=n.prototype.getValue=n.prototype.render=n}(r.Component);return d.contextTypes=((a={})[l]=o.default.object,a),{Provider:h,Consumer:d}},t.exports=e.default},W0B4:kah5:oNR1:function(t,e,n){"use strict";n.r(e),n.d(e,"MemoryRouter",(function(){return g})),n.d(e,"Prompt",(function(){return x})),n.d(e,"Redirect",(function(){return E})),n.d(e,"Route",(function(){return _})),n.d(e,"Router",(function(){return v})),n.d(e,"StaticRouter",(function(){return A})),n.d(e,"Switch",(function(){return U})),n.d(e,"generatePath",(function(){return j})),n.d(e,"matchPath",(function(){return C})),n.d(e,"withRouter",(function(){return L})),n.d(e,"__RouterContext",(function(){return m}));var r=n("IfDu"),o=n.n(r),i=n("7L9N"),a=n("mXGw"),c=n.n(a),u=(n("W0B4"),n("N/Uq")),s=p=n("HW8R"),f=n.n(p),l=n("Fcif"),h=(n("xVO4"),n("+I+c")),d=n("GeWT"),y=n.n(d),m="Router"),v=c.a.Component),g=c.a.Component),b=c.a.Component);ar O={},w=0;unction E(t){var e=t.computedMatch,n=t.to,r=t.push,o=void 0!==r&&r;return c.a.createElement(m.Consumer,null,(function(t){t||s(!1);var r=t.history,i=t.staticContext,a=o?r.push:r.replace,p=Object(u.a)(e?"string"==typeof n?j(n,e.params):Object(l.a)({},n,{pathname:j(n.pathname,e.params)}):n);return i?(a(p),null):c.a.createElement(b,{onMount:onUpdate:to:n})}))}var S={},P=0;function C(t,e){void 0===e&&(e={}),"string"==typeof e&&(e={path:e});var n=e.exact,r=void 0!==n&&n,o=e.strict,i=void 0!==o&&o,a=e.sensitive,c=void 0!==a&&a;return[].concat(e.path).reduce((function(e,n){if(e)return e;var o=n,{end:r,strict:i,sensitive:c}),a=o.keys,u=o.regexp.exec(t);if(!u)return null;var s=u[0],p=u.slice(1),l=t===s;return r&&!l?null:{path:n,url:"/"===n&&""===s?"/":s,isExact:l,params:a.reduce((,{})}}),null)}var _=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this;return c.a.createElement(m.Consumer,null,(function(e){e||s(!1);var n=t.props.location||e.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?C(n.pathname,t.props):e.match,o=Object(l.a)({},e,{location:n,match:r}),i=t.props,a=i.children,u=i.component,p=i.render;return Array.isArray(a)&&0===a.length&&(a=null),"function"==typeof a&&void 0===(a=a(o))&&(a=null),c.a.createElement(m.Provider,{value:o},a&&!a)?a:o.match?u?c.a.createElement(u,o):p?p(o):null:null)}))},e}(c.a.Component);=function(t){bject(i.a)(e,t);var n=e.prototype;return n.navigateTo=function(t,e){var n=this.props,r=n.basename,o=void 0===r?"":r,i=n.context;i.action=e,i.location=o,Object(u.a)(t)),i.url=$(i.location)},n.render=e}(c.a.Component),U=c.a.Component);,xVO4:]);
//# sourceMappingURL=vendors~search-page-bootstrapper~search-results.5fcdd7d88c62c322a9b8.chunk.v7.js.map