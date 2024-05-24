(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{109:function(M,t,u){"use strict";var L=u(0),j=u.n(L),e=u(1),n=u(2),i=u(162),I=u(11);function N(M){return function(M){if(Array.isArray(M)){for(var t=0,u=new Array(M.length);t<M.length;t++)u[t]=M[t];return u}}(M)||function(M){if(Symbol.iterator in Object(M)||"[object Arguments]"===Object.prototype.toString.call(M))return Array.from(M)}(M)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function A(M,t){return function(M){if(Array.isArray(M))return M}(M)||function(M,t){var u=[],L=!0,j=!1,e=void 0;try{for(var n,i=M[Symbol.iterator]();!(L=(n=i.next()).done)&&(u.push(n.value),!t||u.length!==t);L=!0);}catch(M){j=!0,e=M}finally{try{L||null==i.return||i.return()}finally{if(j)throw e}}return u}(M,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function D(){var M=function(M,t){t||(t=M.slice(0));return Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}(["\n    position: initial;\n    top: initial;\n  "]);return D=function(){return M},M}var g=e.b.div.withConfig({componentId:"sc-1p3dak9-0"})(["position:sticky;top:105px;",""],n.a.MOBILE(D())),r=Object(I.withRouter)(function(M){var t=M.router.asPath,u=M.links,e=M.defaultOpenSubMenuId,n=M.gaConfig,I=A(function(M,t){var u=!0,L=!1,j=void 0;try{for(var e,n=t[Symbol.iterator]();!(u=(e=n.next()).done);u=!0){var i=e.value;if(i.subNavConfig){var I=!0,N=!1,A=void 0;try{for(var D,g=i.subNavConfig[Symbol.iterator]();!(I=(D=g.next()).done);I=!0){var r=D.value,c=!0,S=!1,a=void 0;try{for(var o,y=r.routes[Symbol.iterator]();!(c=(o=y.next()).done);c=!0){var T=o.value;if(M.includes(T.url))return[i.id,r.id]}}catch(M){S=!0,a=M}finally{try{c||null==y.return||y.return()}finally{if(S)throw a}}}}catch(M){N=!0,A=M}finally{try{I||null==g.return||g.return()}finally{if(N)throw A}}}else{var z=!0,w=!1,C=void 0;try{for(var E,x=i.routes[Symbol.iterator]();!(z=(E=x.next()).done);z=!0){var O=E.value;if(M.includes(O.url))return[i.id,null]}}catch(M){w=!0,C=M}finally{try{z||null==x.return||x.return()}finally{if(w)throw C}}}}}catch(M){L=!0,j=M}finally{try{u||null==n.return||n.return()}finally{if(L)throw j}}return[null,null]}(t.split("?")[0],u),2),D=I[0],r=I[1],c=e?[e]:[],S=A(Object(L.useState)(r?[D]:c),2),a=S[0],o=S[1];return j.a.createElement(g,null,j.a.createElement(i.d,{links:u,selectedTabId:D,selectedSubTabId:r,toggleSubmenuAction:function(M){a.includes(M)?a.splice(a.indexOf(M),1):a.push(M),o(N(a))},openSubMenuIds:a,gaConfig:n}))}),c=u(4),S=u(43);function a(){var M=E(["\n    display: none;\n  "]);return a=function(){return M},M}function o(){var M=E(["\n    display: ",";\n  "]);return o=function(){return M},M}function y(){var M=E(["\n    padding: 10px 15px;\n  "]);return y=function(){return M},M}function T(){var M=E(["\n    padding: 0;\n  "]);return T=function(){return M},M}function z(){var M=E(["\n    width: 100%;\n    margin: 15px 10px;\n  "]);return z=function(){return M},M}function w(){var M=E(["\n    display: ",";\n    margin: 20px auto;\n  "]);return w=function(){return M},M}function C(){var M=E(["\n    padding: 0;\n  "]);return C=function(){return M},M}function E(M,t){return t||(t=M.slice(0)),Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}u.d(t,"a",function(){return m});var x=e.b.div.withConfig({componentId:"kn7k2y-0"})(["display:flex;justify-content:center;max-width:1140px;padding:25px 0px 20px;margin:auto;width:100%;box-sizing:border-box;",";"],n.a.MEDIUM_MAX(C())),O=e.b.div.withConfig({componentId:"kn7k2y-1"})(["margin-right:auto;",";",""],n.a.MEDIUM_MAX(w(),function(M){return M.hideInMobile?"none":""}),n.a.MOBILE(z())),l=e.b.div.withConfig({componentId:"kn7k2y-2"})(["width:100%;height:100%;padding-left:25px;",";"],n.a.MEDIUM_MAX(T())),m=e.b.div.withConfig({componentId:"kn7k2y-3"})(["font-size:18px;font-weight:600;padding-bottom:15px;",";",";"],n.a.MEDIUM_MAX(y()),n.a.MOBILE(o(),function(M){return!M.showTitleOnMobile&&"none"})),s=e.b.div.withConfig({componentId:"kn7k2y-4"})([""," width:100%;"],n.a.MEDIUM_MAX(a()));t.b=Object(I.withRouter)(function(M){var t=M.children,u=M.panelConfig,e=M.title,n=M.showTitleOnMobile,i=M.router,I=M.defaultOpenSubMenuId,N=void 0===I?null:I,A=i.asPath===u.baseRoute.url;return Object(L.useEffect)(function(){if(A&&window.innerWidth>c.c.MEDIUM){var M=u.links[0].subNavConfig?u.links[0].subNavConfig[0].defaultRoute:u.links[0].defaultRoute;i.replace({pathname:M.pathname},M.url)}window.scrollTo({top:0,left:0,behavior:"smooth"})},[]),j.a.createElement(x,null,j.a.createElement(O,{hideInMobile:!A},j.a.createElement(r,{links:u.links,defaultOpenSubMenuId:N,gaConfig:u.gaConfig})),!A&&j.a.createElement(l,null,e&&j.a.createElement(m,{showTitleOnMobile:n},e),t),A&&j.a.createElement(s,null,j.a.createElement(l,null,j.a.createElement(S.a,null))))})},140:function(M,t,u){"use strict";u.d(t,"a",function(){return z}),u.d(t,"b",function(){return w});var L=u(10),j=u.n(L),e=u(0),n=u.n(e),i=u(261),I=u(219),N=u(54),A=u(56),D=u(6);function g(M){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{},L=Object.keys(u);"function"==typeof Object.getOwnPropertySymbols&&(L=L.concat(Object.getOwnPropertySymbols(u).filter(function(M){return Object.getOwnPropertyDescriptor(u,M).enumerable}))),L.forEach(function(t){r(M,t,u[t])})}return M}function r(M,t,u){return t in M?Object.defineProperty(M,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):M[t]=u,M}function c(M,t,u,L,j,e,n){try{var i=M[e](n),I=i.value}catch(M){return void u(M)}i.done?t(I):Promise.resolve(I).then(L,j)}function S(M,t){return function(M){if(Array.isArray(M))return M}(M)||function(M,t){var u=[],L=!0,j=!1,e=void 0;try{for(var n,i=M[Symbol.iterator]();!(L=(n=i.next()).done)&&(u.push(n.value),!t||u.length!==t);L=!0);}catch(M){j=!0,e=M}finally{try{L||null==i.return||i.return()}finally{if(j)throw e}}return u}(M,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(M,t){if(null==M)return{};var u,L,j=function(M,t){if(null==M)return{};var u,L,j={},e=Object.keys(M);for(L=0;L<e.length;L++)u=e[L],t.indexOf(u)>=0||(j[u]=M[u]);return j}(M,t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);for(L=0;L<e.length;L++)u=e[L],t.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(M,u)&&(j[u]=M[u])}return j}var o=function(M){return M.map(function(M){return M.name.includes("Equity")&&(M.name="Equity Strategies"),1===M.cats.length&&(M.showBackgroundImg=!0,M.label="PMS"),M})},y={page_no:1,page_size:5,sort_by:"RTN_1Y"},T=Object(e.createContext)({types:[],logout:!1,topPerformers:[]}),z=function(M){var t=M.children,u=a(M,["children"]),L=S(Object(e.useState)([]),2),r=L[0],z=L[1],w=S(Object(e.useState)([]),2),C=w[0],E=w[1],x=Object(D.I)(D.a.USER_AGENT),O=(""!==x?JSON.parse(x):{}).platform,l=Object(D.nb)()&&(O===D.d.ANDROID||O===D.d.IOS)&&Object(D.I)(D.a.SSO_TOKEN),m=!!l&&function(){Object(N.b)(A.a.TOKEN_EXPIRED)};return Object(e.useEffect)(function(){l&&(document.querySelector("[name='viewport']").content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no");function M(){var t;return t=j.a.mark(function M(){var t,u,L,e;return j.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.prev=0,M.next=3,Object(i.b)(m);case 3:return t=M.sent,u=t.data.types,z(o(void 0===u?[]:u)),M.next=9,Object(I.a)(y,m);case 9:L=M.sent,e=L.data.schemes,E(e),M.next=16;break;case 14:M.prev=14,M.t0=M.catch(0);case 16:case"end":return M.stop()}},M,this,[[0,14]])}),(M=function(){var M=this,u=arguments;return new Promise(function(L,j){var e=t.apply(M,u);function n(M){c(e,L,j,n,i,"next",M)}function i(M){c(e,L,j,n,i,"throw",M)}n(void 0)})}).apply(this,arguments)}!function(){M.apply(this,arguments)}()},[]),n.a.createElement(T.Provider,{value:g({types:r,logout:m,topPerformers:C},u)},t)},w=function(){return Object(e.useContext)(T)}},1490:function(M,t,u){__NEXT_REGISTER_PAGE("/pms-portfolio-insights",function(){return M.exports=u(630),{page:M.exports.default}})},200:function(M,t,u){"use strict";u.d(t,"a",function(){return c});var L=u(0),j=u.n(L),e=u(1),n=u(4);function i(M){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(M){return typeof M}:function(M){return M&&"function"==typeof Symbol&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M})(M)}function I(M,t){for(var u=0;u<t.length;u++){var L=t[u];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(M,L.key,L)}}function N(M){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(M){return M.__proto__||Object.getPrototypeOf(M)})(M)}function A(M,t){return(A=Object.setPrototypeOf||function(M,t){return M.__proto__=t,M})(M,t)}function D(M){if(void 0===M)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}var g=e.b.span.withConfig({componentId:"sc-1w6qlgs-0"})(["color:",";font-size:14px;max-width:100%;height:auto;&:hover{cursor:pointer;}"],n.a.PRIMARY),r=e.b.div.withConfig({componentId:"sc-1w6qlgs-1"})(["max-width:100%;height:auto;"]),c=function(M){function t(M){var u,L,j,e,n,I;return function(M,t){if(!(M instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),L=this,j=N(t).call(this,M),u=!j||"object"!==i(j)&&"function"!=typeof j?D(L):j,e=D(D(u)),I=function(){u.setState({isTrimmed:!u.state.isTrimmed}),u.props.onClickCb&&u.props.onClickCb()},(n="toggleTrim")in e?Object.defineProperty(e,n,{value:I,enumerable:!0,configurable:!0,writable:!0}):e[n]=I,u.state={isTrimmed:!0},u}var u,e,n;return function(M,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(t&&t.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),t&&A(M,t)}(t,L["Component"]),u=t,(e=[{key:"render",value:function(){return j.a.createElement(j.a.Fragment,null,this.state.isTrimmed&&this.props.data.length>this.props.charLimit?j.a.createElement(r,null,this.props.data.substring(0,this.props.charLimit),"...",!this.props.hideButton&&j.a.createElement(g,{onClick:this.toggleTrim},"Read More")):this.props.data)}}])&&I(u.prototype,e),n&&I(u,n),t}()},219:function(M,t,u){"use strict";u.d(t,"a",function(){return e});var L=u(30),j=u(12),e=function(M,t){return Object(L.b)(j.c.PMS.GET_PMS_FUND_LIST,[],M,t)}},227:function(M,t,u){"use strict";u.d(t,"a",function(){return L}),u.d(t,"b",function(){return j});var L=[{img:u(308),description:"As per SEBI guidelines, minimum investment of INR <strong>50 Lakhs</strong> towards a portfolio management service is required"},{img:u(309),description:"PMS provides comprehensive communication and performance reporting to the investors with continuous monitoring giving higher returns"},{img:u(310),description:"Invest in portfolio consisting of stocks, fixed income, commodities, real estate, structured products and cash"}],j="pmsTermsAccepted"},235:function(M,t,u){"use strict";u.d(t,"b",function(){return j}),u.d(t,"a",function(){return L});var L="pms",j=function(M,t,u){if(u)return{name:"Help & Support"};var L=M.filter(function(M){return M.id==t});return L.length?L[0]:{}}},244:function(M,t,u){"use strict";var L=u(0),j=u.n(L),e=u(11),n=u.n(e),i=u(1),I=u(2),N=u(4),A=u(140),D=u(42),g=u(27),r=u(3),c=u.n(r),S=u(6),a=u(200),o=u(21),y=u(235),T=u(54),z=u(250),w=u(49),C=u(7),E=u(56),x=u(269);function O(M,t){return function(M){if(Array.isArray(M))return M}(M)||function(M,t){var u=[],L=!0,j=!1,e=void 0;try{for(var n,i=M[Symbol.iterator]();!(L=(n=i.next()).done)&&(u.push(n.value),!t||u.length!==t);L=!0);}catch(M){j=!0,e=M}finally{try{L||null==i.return||i.return()}finally{if(j)throw e}}return u}(M,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function l(){var M=Q(["\n    position: static;\n    margin-bottom: 0.6rem;\n  "]);return l=function(){return M},M}function m(){var M=Q(["\n    position: absolute;\n  "]);return m=function(){return M},M}function s(){var M=Q(["\n    position: relative;\n    display: ",";\n  "]);return s=function(){return M},M}function d(){var M=Q(["\n    display: block;\n    cursor: pointer;\n    position: absolute;\n    left: 1.5rem;\n    width: 3rem;\n    height: 3rem;\n  "]);return d=function(){return M},M}function f(){var M=Q(["\n    width: 12rem;\n    height: 2rem;\n  "]);return f=function(){return M},M}function Y(){var M=Q(["\n    margin-right: 0;\n  "]);return Y=function(){return M},M}function b(){var M=Q(["\n    justify-content: center;\n    display: ","; \n    height: 3.5rem;\n  "]);return b=function(){return M},M}function p(){var M=Q(["\n    padding-top: ","; \n  "]);return p=function(){return M},M}function h(){var M=Q(["\n    flex:none;\n    position: absolute;\n    right:2rem;\n  "]);return h=function(){return M},M}function Q(M,t){return t||(t=M.slice(0)),Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}var U=Object(i.b)(w.c).withConfig({componentId:"sc-16mrp7r-0"})(["",""],I.a.MOBILE(h())),k=i.b.div.withConfig({componentId:"sc-16mrp7r-1"})(["font-size:",";font-weight:",";color:",";padding-left:",";"],function(M){var t=M.fontSize;return t?"".concat(t,"rem"):"1.7rem"},function(M){var t=M.fontWeight;return t?"".concat(t):"normal"},function(M){var t=M.colorWhite;return"".concat(t?N.a.WHITE:N.a.DARK_TEXT)},function(M){var t=M.paddingLeft;return t?"".concat(t,"rem"):0}),v=i.b.div.withConfig({componentId:"sc-16mrp7r-2"})(["position:relative;padding-top:8rem;",""],I.a.MEDIUM_MAX(p(),function(M){var t=M.headerPaddingTop;return"".concat(t,"px")})),P=i.b.header.withConfig({componentId:"sc-16mrp7r-3"})(["padding:",";position:fixed;top:0;width:100%;background:",";z-index:1000;"],function(M){return M.removePadding?"0":"1.5rem 0"},N.a.WHITE),G=Object(i.b)(g.a).withConfig({componentId:"sc-16mrp7r-4"})(["display:flex;align-items:center;justify-content:flex-start;position:relative;height:5rem;",""],I.a.MEDIUM_MAX(b(),function(M){return M.showCommonHeader?"none":"flex"})),Z=i.b.div.withConfig({componentId:"sc-16mrp7r-5"})(["display:flex;margin-right:2rem;",""],I.a.MOBILE(Y())),R=i.b.img.withConfig({componentId:"sc-16mrp7r-6"})(["display:flex;cursor:pointer;width:13.5rem;height:5rem;",""],I.a.MEDIUM_MAX(f())),W=i.b.img.withConfig({componentId:"sc-16mrp7r-7"})(["width:100%;max-height:15rem;"]),B=i.b.div.withConfig({componentId:"sc-16mrp7r-8"})(["display:none;",""],I.a.MEDIUM_MAX(d())),F=i.b.div.withConfig({componentId:"sc-16mrp7r-9"})(["display:none;",""],I.a.MEDIUM_MAX(s(),function(M){return M.showBgHeader?"block":"none"})),H=i.b.div.withConfig({componentId:"sc-16mrp7r-10"})([""," top:7rem;left:1.5rem;display:flex;align-items:center;"],I.a.MEDIUM_MAX(m())),_=i.b.img.withConfig({componentId:"sc-16mrp7r-11"})(["height:7.2rem;width:7.2rem;border-radius:0.5rem;"]),J=i.b.div.withConfig({componentId:"sc-16mrp7r-12"})(["position:absolute;top:2rem;display:flex;align-items:center;justify-content:center;width:100%;"]),X=i.b.div.withConfig({componentId:"sc-16mrp7r-13"})(["font-size:1.2rem;background:",";padding:1.5rem;color:",";"],N.a.WHITE,N.a.BATTLESHIP_GREY),V=Object(i.b)(o.i).withConfig({componentId:"sc-16mrp7r-14"})(["border-color:",";width:1.5rem;top:50%;&:before{border-color:",";bottom:-.4rem;}"],function(M){return M.color},function(M){return M.color}),K=i.b.div.withConfig({componentId:"sc-16mrp7r-15"})(["position:absolute;right:1.5rem;",""],I.a.MOBILE(l())),q=i.b.img.withConfig({componentId:"sc-16mrp7r-16"})(["width:5.6rem;height:3rem;"]),$=function(M){var t=M.color,u=M.router,L=M.isWebView,e=u.pathname.includes(c.a.PMS_HOME.pathname),n=u.asPath.includes(c.a.PMS_INTRO.url);return j.a.createElement(B,{onClick:function(){(e||n)&&L?Object(T.b)(E.a.RETURN_TO_APP):u.back()}},j.a.createElement(V,{color:t}))},MM=Object(e.withRouter)(function(M){var t=M.router,e=Object(A.b)(),n=e.types,i=e.logout,I=e.topPerformers,g=Object(L.useContext)(D.a),r=g.openSideNavigation,o=g.closeSideNavigation,T=O(Object(L.useState)(!1),2),w=T[0],E=T[1],l=Object(L.useRef)(),m=O(Object(L.useState)(65),2),s=m[0],d=m[1],f=O(Object(L.useState)(!1),2),Y=f[0],b=f[1],p=O(Object(L.useState)({}),2),h=p[0],Q=p[1],B=h.showBackgroundImg,V=void 0!==B&&B,MM=h.label,tM=void 0===MM?"":MM,uM=h.logo,LM=void 0===uM?"":uM,jM=h.name,eM=void 0===jM?"":jM,nM=h.desc,iM=void 0===nM?"":nM;Object(L.useEffect)(function(){(V||Y)&&d(l.current.clientHeight)},[V,Y]),Object(L.useEffect)(function(){var M=t.asPath.includes(c.a.PMS_FUND_LISTING.url),u=t.asPath.split(c.a.PMS_FUND_LISTING.url).pop().split("/")[1],L=t.asPath.includes(c.a.PMS_SUPPORT.url),j=Object(S.nb)()&&(M||L)&&Object(y.b)(n,u,L);Q(j)},[t,n]);var IM=t.pathname.includes(c.a.PMS_HOME.pathname),NM=t.pathname.includes(c.a.PMS_INTRO.pathname),AM=[c.a.PMS_INTRO.pathname,c.a.PMS_EXPLAINED.pathname,c.a.PMS_SUPPORT.pathname].includes(t.pathname),DM=t.asPath.includes(c.a.PMS_SUPPORT.url);return j.a.createElement(v,{headerPaddingTop:s},j.a.createElement(P,{removePadding:V,ref:l},j.a.createElement(F,{showBgHeader:V},j.a.createElement(W,{src:u(307),alt:"Background Image"}),j.a.createElement(J,null,j.a.createElement($,{color:N.a.WHITE,router:t,isWebView:i}),j.a.createElement(k,{colorWhite:!0},tM)),j.a.createElement(H,null,LM&&j.a.createElement(_,{src:h.logo,alt:"Header Logo"}),j.a.createElement(k,{fontSize:1.6,paddingLeft:1,colorWhite:!0},eM)),j.a.createElement(X,null,j.a.createElement(a.a,{charLimit:100,data:iM,onClickCb:function(){b(function(M){return!M})}}))),j.a.createElement(G,{showCommonHeader:V},j.a.createElement($,{color:N.a.DARK_TEXT,router:t,isWebView:i}),eM?j.a.createElement(k,{fontWeight:DM?"600":"normal"},eM):j.a.createElement(Z,{onClick:function(){NM||i&&IM||t.push({pathname:IM?c.a.DASHBOARD.pathname:c.a.PMS_HOME.pathname},IM?c.a.DASHBOARD.url:c.a.PMS_HOME.url)}},j.a.createElement(R,{src:u(283),alt:"Paytm Money logo"})),(IM||NM)&&j.a.createElement(K,null,j.a.createElement(q,{src:u(300),alt:"PMS logo"})),AM?null:j.a.createElement(U,null,j.a.createElement(z.d,{expanded:w,onButtonClick:function(){return E(!0)},gaTrackingConfig:C.l,openSideNavigation:r,closeSideNavigation:o,getSearchedData:x.a,fundRoute:c.a.PMS_FUND_DETAILS,placeholder:"Search PMS Schemes",hidefilters:!0,topPerformers:I,formatSuggestions:function(M){return M.map(function(M){var t=M.scheme_id;return{fundName:M.scheme_name,isin:t}})}})))))}),tM=u(57),uM=u(227);function LM(){var M=function(M,t){t||(t=M.slice(0));return Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}(["\n    padding: 1.5rem 0 0;\n  "]);return LM=function(){return M},M}var jM=i.b.div.withConfig({componentId:"gzj56l-0"})(["padding:3rem 0 5rem;width:100%;background-color:",";",""],N.a.BACKGROUND_GREY,I.a.MOBILE(LM()));t.a=function(M){var t=M.children;return Object(L.useEffect)(function(){tM.a.get(uM.b,!1)||n.a.pathname===c.a.PMS_INTRO.pathname||n.a.replace({pathname:c.a.PMS_INTRO.pathname},"".concat(c.a.PMS_INTRO.url,"?returnUrl=").concat(window.location.pathname))},[]),j.a.createElement(j.a.Fragment,null,j.a.createElement(MM,null),j.a.createElement(jM,null,j.a.createElement(g.a,null,t)))}},263:function(M,t,u){"use strict";u.d(t,"g",function(){return e}),u.d(t,"a",function(){return n}),u.d(t,"b",function(){return i}),u.d(t,"d",function(){return I}),u.d(t,"c",function(){return N}),u.d(t,"e",function(){return A}),u.d(t,"f",function(){return D});var L=u(30),j=u(12),e=function(){return Object(L.b)(j.c.PMS.IS_PB_INVESTOR)},n=function(){return Object(L.b)(j.c.PMS.PORTFOLIO)},i=function(){return Object(L.b)(j.c.PMS.PORTFOLIO_ALLOCATIONS)},I=function(){return Object(L.b)(j.c.PMS.PORTFOLIO_INSIGHT)},N=function(){return Object(L.b)(j.c.PMS.PORTFOLIO_CHART)},A=function(M){return Object(L.b)(j.c.PMS.PORTFOLIO_SCHEME_CHART,M,{})},D=function(M){return Object(L.b)(j.c.PMS.PORTFOLIO_SCHEME_DATA,M,{})}},276:function(M,t,u){"use strict";u.d(t,"a",function(){return S}),u.d(t,"b",function(){return y});var L=u(0),j=u.n(L),e=u(1),n=u(4),i=u(15),I=u(3),N=u.n(I),A=u(51),D=u(2),g=u(6),r=u(85);function c(){var M=function(M,t){t||(t=M.slice(0));return Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}(["\n    margin-top: 0;\n    min-height: 480px;\n  "]);return c=function(){return M},M}var S=e.b.div.withConfig({componentId:"sc-1anjwlm-0"})(["position:relative;margin-top:1.5rem;padding:1.5rem 2rem 1rem 0;box-shadow:0 3px 10px 0 rgba(0,0,0,0.05);background-color:#ffffff;font-size:1rem;border-radius:.5rem;",""],D.a.DESKTOP(c())),a=e.b.div.withConfig({componentId:"sc-1anjwlm-1"})(["padding:2.5rem 0 2.5rem 2rem;position:relative;span:nth-child(1){font-size:1.4rem;font-weight:600;color:","}img{position:absolute;top:4rem;right:1rem;}"],n.a.BATTLESHIP_GREY),o=Object(e.a)(["width:4rem;height:4rem;margin-left:1.6rem;"]),y=Object(e.a)(["div:first-child{font-weight:600;font-size:1.6rem;}"]),T=e.b.div.withConfig({componentId:"sc-1anjwlm-2"})(["margin-top:.5rem;display:flex;align-items:center;> div:first-child{font-size:18px;font-weight:normal;color:","}> div:nth-child(2){padding-left:0.4rem;font-size:14px !important;font-weight:normal;}"],n.a.DARK_TEXT);t.c=function(M){var t=M.portfolio.profile.nw,L=t.curr_nw,e=t.rtn;return j.a.createElement(i.a,{href:{pathname:N.a.PMS_PORTFOLIO.pathname},asPath:N.a.PMS_PORTFOLIO.url},j.a.createElement(S,null,j.a.createElement(A.b,{title:"Investments through Paytm Money",img:u(363),imgStyle:o,contentStyle:y}),j.a.createElement(a,null,j.a.createElement("span",null,"PMS"),j.a.createElement(T,null,j.a.createElement(r.b,{isProfit:!0},"₹",Object(g.v)(L,2)),j.a.createElement(r.a,{isProfit:100*e>0,withBrackets:!0},Object(g.pb)(100*e,2))),j.a.createElement("img",{src:"/static/images/common/back.svg",alt:"header-image"}))))}},283:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODYiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxODYgMzIiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNMzkuMzQgOC4zN2gtMi4wMTh2My45MTloMi4wMTdhLjc0NS43NDUgMCAwIDAgLjc0Ni0uNzQ1di0yLjQ1YS43NDUuNzQ1IDAgMCAwLS43NDYtLjcyNXoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDBCREYyIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik0xMDMuODU3IDYuNzY3YTQuNzU1IDQuNzU1IDAgMCAwLTQuNDk1LTMuMTk0aC0uMDQ0Yy0xLjI5OCAwLTIuNTQuNTMtMy40MzUgMS40N2E0Ljc0NCA0Ljc0NCAwIDAgMC0zLjQzNS0xLjQ3aC0uMDQ1YTQuNzQgNC43NCAwIDAgMC0zLjEwMSAxLjE1MXYtLjM2M2EuNzAxLjcwMSAwIDAgMC0uNjk3LS42NTFoLTMuMThhLjcwMi43MDIgMCAwIDAtLjcwMi43MDVWMjEuN2EuNy43IDAgMCAwIC43MDIuNzA2aDMuMThhLjcwMS43MDEgMCAwIDAgLjY5Mi0uNjA4VjkuMzkzdi0uMTIyYTEuMTU3IDEuMTU3IDAgMCAxIDEuMS0xLjA2NGguNjIyYy4yNDYuMDE4LjQ4LjEwOC42NzMuMjYuMjguMjI4LjQzOS41Ny40MzIuOTMxVjIxLjcyYzAgLjM4Ny4zMTMuNzAzLjcwMS43MDVoMy4xOGEuNzAxLjcwMSAwIDAgMCAuNzAyLS42NzFWOS4zNzRhMS4xNiAxLjE2IDAgMCAxIC41Mi0uOThjLjE3Ni0uMTEzLjM3Ni0uMTguNTg0LS4xOTZoLjU3Yy42My4wMzEgMS4xMi41NiAxLjEwNCAxLjE5VjIxLjY5YzAgLjM4Ny4zMTQuNzAxLjcwMi43MDFoMy4xOGEuNzAxLjcwMSAwIDAgMCAuNzAxLS43VjguNDYxYTQuNDMyIDQuNDMyIDAgMCAwLS4yMS0xLjY5NXpNODIuMzI0IDMuNzY5aC0xLjgyMVYuODI5YS42NDEuNjQxIDAgMCAwLS42NDMtLjY0N2gtLjEyM2MtMi4wMTcuNTU0LTEuNjE0IDMuMzQyLTUuMjk1IDMuNTgyaC0uMzU4YS43MDguNzA4IDAgMCAwLS4xNTIgMCAuNy43IDAgMCAwLS41NS42ODZ2My4xNzRhLjcuNyAwIDAgMCAuNzAyLjcwNmgxLjkxOXYxMy40NjhjMCAuMzg0LjMxMi42OTYuNjk3LjY5NmgzLjE0NWEuNjk2LjY5NiAwIDAgMCAuNjk3LS42OTZWOC4zNWgxLjc4MmEuNzAyLjcwMiAwIDAgMCAuNzAxLS43MDZWNC40NjlhLjcuNyAwIDAgMC0uNzAxLS43eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyMDM0NjgiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcwLjg5OSAzLjc2OWgtMy4xOGEuNzAxLjcwMSAwIDAgMC0uNzAyLjd2Ni41N2EuNzQ1Ljc0NSAwIDAgMS0uNzQ2LjczaC0xLjMzNGEuNzQ1Ljc0NSAwIDAgMS0uNzQ2LS43NDRWNC40NjljMC0uMzg3LS4zMTUtLjctLjcwMi0uN2gtMy4xOGEuNzAxLjcwMSAwIDAgMC0uNzAyLjd2Ny4xOTdhNC41MDMgNC41MDMgMCAwIDAgMS4zMTkgMy4zNjggNC41MTkgNC41MTkgMCAwIDAgMy4zNzMgMS4zMTZoMi4xMmEuNzQuNzQgMCAwIDEgMCAxLjQ3aC00LjcwN2EuNzAxLjcwMSAwIDAgMC0uNzAxLjd2My4xNzVjMCAuMzg3LjMxNC43LjcwMS43aDUuMjAyYTQuNTE5IDQuNTE5IDAgMCAwIDMuMzczLTEuMzE2IDQuNTAzIDQuNTAzIDAgMCAwIDEuMzE5LTMuMzY3VjQuNDdhLjcuNyAwIDAgMC0uNzA3LS43ek00MC4zNjUgMy43NjloLTYuOTU0YS42OTEuNjkxIDAgMCAwLS42OTIuNjlWMjEuN2EuNjg2LjY4NiAwIDAgMCAuNjQzLjcwNmgzLjI0YS43MDEuNzAxIDAgMCAwIC43LS43MDF2LTQuODI2aDMuMDQzYTQuMTMgNC4xMyAwIDAgMCAzLjEyLTEuMjAyIDQuMTE3IDQuMTE3IDAgMCAwIDEuMjA0LTMuMTE0VjguMDg1YTQuMTIxIDQuMTIxIDAgMCAwLTEuMi0zLjEwNSA0LjEzNiA0LjEzNiAwIDAgMC0zLjEwNC0xLjIxMXptLS4yOCA1LjgydjEuOTZhLjc0NS43NDUgMCAwIDEtLjc0Ni43NDRoLTIuMDE3VjguMzc0aDIuMDE3Yy40MTIgMCAuNzQ2LjMzMy43NDYuNzQ1di40N3pNNTIuNzc2IDMuNzg4aC00LjQxN2EuNjg3LjY4NyAwIDAgMC0uNzA2LjY1N1Y3LjQwNGEuNzI1LjcyNSAwIDAgMCAuNzUuN2g0LjIwMWEuNzMuNzMgMCAwIDEgLjYzMy42NzJ2LjQxMWEuNzA2LjcwNiAwIDAgMS0uNjEzLjY1MmgtMi4wODFjLTIuNzY4IDAtNC43NCAxLjgzNy00Ljc0IDQuNDF2My42OTNjMCAyLjU2MyAxLjY5MyA0LjQxIDQuNDQ2IDQuNDFoNS43N2MxIC4wMzMgMS44MzgtLjc0NyAxLjg3NS0xLjc0NFY4LjU1NWMwLTIuOTI1LTEuNTExLTQuNzY3LTUuMTE4LTQuNzY3em0uNDkgMTMuMjU4di40OWEuNjU1LjY1NSAwIDAgMSAwIC4xMTcuNzQ2Ljc0NiAwIDAgMS0uNzM2LjU5M2gtMS4zMjRhLjcyNy43MjcgMCAwIDEtLjc1MS0uN1YxNC44NGEuNzI2LjcyNiAwIDAgMSAuNzUtLjY5NmgxLjMyNmEuNzI3LjcyNyAwIDAgMSAuNzUuNzAxbC0uMDE0IDIuMnoiLz4KICAgICAgICA8ZyBmaWxsPSIjMjIzMzY5IiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMTE5LjI4OSAyMi4zNjJsLTYuMjI1LTE2LjI0OGgtLjEwMmMuMTE5IDEuMjg2LjE3OCAyLjgxLjE3OCA0LjU3djExLjY3OGgtMS45NjhWNC4wNDdoMy4yMTRsNS44MTMgMTUuMTE2aC4xMDJsNS44NTQtMTUuMTE2aDMuMTg5djE4LjMyaC0yLjEzNnYtMTEuODFjMC0xLjM1NS4wNTctMi44MjUuMTcyLTQuNDEzaC0uMTAxbC02LjI3NiAxNi4yMThoLTEuNzE0ek0xNDQuMzkzIDE1LjQ4MmMwIDIuMjQtLjU2NSAzLjk4OS0xLjY5NCA1LjI0NS0xLjEyOSAxLjI1NS0yLjY5IDEuODgzLTQuNjg0IDEuODgzYTYuMjEzIDYuMjEzIDAgMCAxLTMuMjc1LS44NjMgNS43MSA1LjcxIDAgMCAxLTIuMjA4LTIuNDgzIDguNjIgOC42MiAwIDAgMS0uNzc4LTMuNzgyYzAtMi4yMzguNTYxLTMuOTgxIDEuNjg0LTUuMjMgMS4xMjItMS4yNSAyLjY3OC0xLjg3NCA0LjY2OS0xLjg3NGE1LjgyMyA1LjgyMyAwIDAgMSA0LjU3NyAxLjkyYzEuMTQgMS4yNzYgMS43MDkgMy4wMDQgMS43MDkgNS4xODR6bS0xMC40ODIgMGMwIDEuNzUzLjM1IDMuMDkgMS4wNTIgNC4wMWE0LjE4OSA0LjE4OSAwIDAgMCA2LjIxIDBjLjcwNi0uOTEzIDEuMDYtMi4yNTIgMS4wNjMtNC4wMTUuMDA0LTEuNzY0LS4zNS0zLjA5MS0xLjA2My0zLjk4MWEzLjczIDMuNzMgMCAwIDAtMy4xMzMtMS4zNjEgMy42NyAzLjY3IDAgMCAwLTMuMDg3IDEuMzRjLS42OTUuOS0xLjA0MiAyLjIzNi0xLjA0MiA0LjAwN3pNMTU1LjkxNyAyMi4zNjJ2LTguODg2YTMuNTggMy41OCAwIDAgMC0uNzY4LTIuNTA4IDMuMTIgMy4xMiAwIDAgMC0yLjM5NS0uODI4Yy0xLjQ0MSAwLTIuNDk2LjM4OC0zLjE2NCAxLjE2My0uNjY3Ljc3NS0xLjAwNyAyLjA1OC0xLjAxNyAzLjg0OXY3LjIwNWgtMi4wODVWOC42MTdoMS42OTRsLjM0IDEuODc5aC4xMDJhNC4yNSA0LjI1IDAgMCAxIDEuNzk1LTEuNTc0IDUuODM3IDUuODM3IDAgMCAxIDIuNTc0LS41NTljMS42NTggMCAyLjkwNi40IDMuNzQzIDEuMTk4LjgzOC44IDEuMjU2IDIuMDc1IDEuMjU2IDMuODI5djguOTYxbC0yLjA3NS4wMXpNMTY2LjU1MiAyMi42MWMtMi4wMzQgMC0zLjYzOC0uNjE3LTQuODExLTEuODUzLTEuMTc0LTEuMjM1LTEuNzYyLTIuOTUyLTEuNzY1LTUuMTQ4IDAtMi4yMTQuNTQ2LTMuOTczIDEuNjM3LTUuMjc2YTUuNDQ2IDUuNDQ2IDAgMCAxIDQuNC0xLjk1NSA1LjE5MiA1LjE5MiAwIDAgMSA0LjA2OCAxLjY5NiA2LjUwMyA2LjUwMyAwIDAgMSAxLjUyNiA0LjQ3OHYxLjMxNWgtOS40NjVjLjA0MSAxLjYxMi40NSAyLjgzNSAxLjIyNiAzLjY3MmE0LjIzNSA0LjIzNSAwIDAgMCAzLjI3IDEuMjU0IDExLjA4OCAxMS4wODggMCAwIDAgNC4zOTUtLjkzdjEuODU0Yy0uNjczLjI5Ni0xLjM3My41MjQtMi4wOS42OC0uNzg4LjE1Mi0xLjU5LjIyNC0yLjM5MS4yMTN6bS0uNTY1LTEyLjQ3YTMuNDA1IDMuNDA1IDAgMCAwLTIuNjQ0IDEuMDc3IDQuOTYxIDQuOTYxIDAgMCAwLTEuMTYgMi45OGg3LjE5MmE0LjU2NCA0LjU2NCAwIDAgMC0uODc1LTMuMDQxIDMuMSAzLjEgMCAwIDAtMi41MTMtMS4wMTZ6Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNzEuNDQgOC42MTdoMi4yMzJsMy4wMSA3LjgzNGMuNSAxLjI2Mi45MSAyLjU1NyAxLjIzMiAzLjg3NWguMTAxYy4xMDktLjQyNy4zMzgtMS4xNTYuNjg3LTIuMTg5LjM1LTEuMDMyIDEuNDg1LTQuMjA2IDMuNDA4LTkuNTJoMi4yMzJsLTUuOTI1IDE1LjY0OWE3LjgwMiA3LjgwMiAwIDAgMS0yLjAzNCAzLjI5IDQuMzY4IDQuMzY4IDAgMCAxLTIuODc5Ljk3IDguMzg1IDguMzg1IDAgMCAxLTEuODgyLS4yMTR2LTEuNjY1YTcuMjg0IDcuMjg0IDAgMCAwIDEuNTI2LjE1MmMxLjQzMSAwIDIuNDQ4LS44MDIgMy4wNTItMi40MDZsLjc2OC0xLjk1NS01LjUyOS0xMy44MjF6Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMwMEJERjIiIGQ9Ik0uNDE4IDE1LjgzM0wxMi41MDUgMi4wMmEuNDQ2LjQ0NiAwIDAgMSAuNjkzIDBMMjUuMzYxIDE1LjkyYy4zMDguMzUzLjA4OC45NTUtLjM0Ni45NTNsLTI0LjI1LS4wODhjLS40MzctLjAwMi0uNjU0LS42MDItLjM0Ny0uOTUzeiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjMjIzMzY5IiBkPSJNLjM2NSAyMS4xNDNMMTIuNTI4IDcuMjQyYS40MTYuNDE2IDAgMCAxIC42NDUgMGwxMi4yNSAxMy45ODljLjI5LjMzLjA4NC44OTMtLjMyMy44OUwuNjk2IDIyLjAzNWMtLjQxNi0uMDAyLS42MTctLjU2My0uMzMtLjg5eiIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRkZGIiBkPSJNMTEuMDY1IDEzLjU0NGEuMzYzLjM2MyAwIDAgMS0uMjkxLS4xMDguMzQ4LjM0OCAwIDAgMSAwLS40NzguMzczLjM3MyAwIDAgMSAuMjkxLS4xMDRoMy42NDdhLjM1LjM1IDAgMCAxIC4yOTIuNTg2LjM3NS4zNzUgMCAwIDEtLjI5Mi4xMDRoLTEuMTE2Yy0uMTU3IDAtLjI1Mi0uMDE0LS4yODctLjAydi4wMzljLjE1NS4wNjkuMjk0LjE2OC40MS4yOTMuMTM3LjE0OC4yMzkuMzI3LjI5NS41MjFoLjY5NGEuMzY2LjM2NiAwIDAgMSAuMjkxLjEwOWMuMDYuMDY4LjA5My4xNTYuMDkzLjI0N2EuMzUuMzUgMCAwIDEtLjA5My4yMy4zNzUuMzc1IDAgMCAxLS4yOTEuMTA0aC0uNjUyYTEuODQ0IDEuODQ0IDAgMCAxLS4yNDcuNzczIDEuODczIDEuODczIDAgMCAxLS40NzkuNTI5IDIuMTQyIDIuMTQyIDAgMCAxLS42MjIuMzE2Yy0uMjE2LjA3LS40MzkuMTE2LS42NjUuMTM4bDIuMjMgMi4xMzdjLjEuMDkyLjE1Ni4yMi4xNTcuMzU2YS40NjEuNDYxIDAgMCAxLS4xMTcuMzE2LjQyNi40MjYgMCAwIDEtLjMyNi4xMjkuNjk0LjY5NCAwIDAgMS0uMjEzLS4wMzUuNTU3LjU1NyAwIDAgMS0uMjEzLS4xNDNsLTIuNjIzLTIuNTU5YS42Ny42NyAwIDAgMS0uMTU3LS4yMDMuNDg2LjQ4NiAwIDAgMS0uMDQ5LS4yMTIuNDMxLjQzMSAwIDAgMSAuMTE4LS4zMS40MDcuNDA3IDAgMCAxIC4zMDUtLjEyMmguMTNjLjIwMyAwIC40MDctLjAxOS42MDgtLjA1NWExLjc4IDEuNzggMCAwIDAgLjU0My0uMTg3Yy4xNTctLjA4Ni4yOTYtLjIuNDA5LS4zNC4xMTctLjE1LjE5Mi0uMzMuMjE3LS41MmgtMi4wMDRhLjM2LjM2IDAgMCAxLS4yOTEtLjExLjM0OC4zNDggMCAwIDEgMC0uNDc4LjM3My4zNzMgMCAwIDEgLjI5MS0uMTAzaDEuOTUzYy0uMTctLjU1LS42NzQtLjgyNi0xLjUxLS44MjZsLS40MzYtLjAxNHoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},284:function(M,t,u){"use strict";var L=u(0),j=u.n(L),e=u(1),n=u(2);function i(){var M=function(M,t){t||(t=M.slice(0));return Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}(["\n   font-size: 1.4em;\n  "]);return i=function(){return M},M}var I=e.b.div.withConfig({componentId:"nu25kp-0"})(["border-bottom:2px solid #dddfe5;margin:1rem -2rem 0;overflow-x:auto;"]),N=e.b.div.withConfig({componentId:"nu25kp-1"})(["margin:0 2.5rem;display:flex;align-items:center;justify-content:space-between;.active{border-bottom:4px solid #00c1f2;color:#213368;}.inactive{color:#727682;}"]),A=e.b.div.withConfig({componentId:"nu25kp-2"})(["padding:1rem;text-align:center;font-size:1.2em;cursor:pointer;",""],n.a.MOBILE(i()));t.a=function(M){var t=M.options,u=M.onClickCb,L=M.activeTabId,e=M.className;return j.a.createElement(I,null,j.a.createElement(N,{className:e},t.map(function(M,t){var e=M.id,n=M.label;return j.a.createElement(A,{key:t,onClick:function(){return u(e)},className:L===e?"active":"inactive"},j.a.createElement("span",null,n))})))}},300:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iMjEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyBjbGlwLXBhdGg9InVybCgjYSkiPgogICAgICAgIDxwYXRoIGQ9Ik0zNS43OTggOC45MkMzNC4xNzYgNC4zODYgMjkuMjI1Ljc0NyAyMy4xMjUuMWExOC4yMzYgMTguMjM2IDAgMCAwLTEuODIzLS4xaC0uMTM2QzE0LjI0NC4wMzIgOC41OTEgNC4xNyA4LjE0MyA5Ljg1M2MtLjAyNy4zNDktLjAzNC42OTktLjAyIDEuMDQ5LjA1LS4xNDMuMTExLS4yODQuMTc0LS40MjVhNy4zNzggNy4zNzggMCAwIDEgMS41Mi0zLjQxM2MyLjk4Ni0zLjgwOCA5LjE0LTQuODkgMTMuNzM1LTIuNDE2IDEuOTUzIDEuMDUxIDMuMzA4IDIuNTc2IDMuOTk1IDQuMjc0aDguMjUxVjguOTJ6IiBmaWxsPSJ1cmwoI2IpIi8+CiAgICAgICAgPHBhdGggZD0iTTIwLjIzNiA2LjczYTYuNjYxIDYuNjYxIDAgMCAxIDIuNDQgMi4xOTNoNC44NjhjLS42ODgtMS42OTgtMi4wNDItMy4yMi0zLjk5NC00LjI3MmExMS40MTMgMTEuNDEzIDAgMCAwLTUuMzk4LTEuMzI5Yy0zLjI0Ny0uMDAxLTYuNDI4IDEuMzE3LTguMzM2IDMuNzQyYTcuMzc4IDcuMzc4IDAgMCAwLTEuNTIgMy40MTMgNy4xMTMgNy4xMTMgMCAwIDEgLjg4OS0xLjQ2MmMyLjUwOC0zLjE5NiA3LjQ1OC00LjIyIDExLjA1MS0yLjI4NXoiIGZpbGw9InVybCgjYykiLz4KICAgICAgICA8cGF0aCBkPSJNMS40OCAxMS44NDF2LjY3MmguMDIxYy4zMS0uNTUuNzQ3LS44MDYgMS4zLS44MjYgMS4wNTEgMCAxLjM2MSAxLjAyMiAxLjM2MSAxLjg4NnYxLjkwNmMwIC45MzQtLjIyOSAyLjAwNS0xLjM5IDIuMDQ0LS4yOC4wMS0uNzktLjE1Ny0xLjE2MS0uNjk4aC0uMDJ2Mi4zNzRIMFYxMS44NGgxLjQ4di4wMDF6bTEuMDkyIDIuMDI0YzAtLjMyNCAwLS45MDQtLjQ2LS45MDQtLjQzIDAtLjUyMy40NDItLjUyMy45NzF2MS4zMDJjMCAuNDcuMSAxLjAyMS40OSAxLjAxMi41MSAwIC40OS0uNTk3LjQ5LS45NTNsLjAwMy0xLjQyOHpNNi4yNDQgMTEuODQxdi42MzloLjAyYTEuNDk0IDEuNDk0IDAgMCAxIDEuMTk1LS43OTYgMS4xOTYgMS4xOTYgMCAwIDEgMS4xOC43MjdoLjAyYy4yOS0uNDkxLjcxMi0uNzI3IDEuMTYyLS43MjcuNzQ3IDAgMS40MTkuNDA0IDEuNDE5IDEuMTV2NC41MDhIOS42NXYtMy45MjljLS4wMi0uMjU1LS4xMi0uNDcxLS40MjItLjQ1Mi0uMjguMDEtLjQzLjE2Ni0uNDMuNDUydjMuOTNINy4yMDZ2LTMuOTNjLS4wNS0uMjM2LS4xMS0uNDUyLS4zOC0uNDUyLS4zMiAwLS40NDkuMTU3LS40NzEuNDUydjMuOTNoLTEuNTlWMTEuODRoMS40OHYuMDAxek0xNC4zMzcgMTMuNDcyYy0uMDQtLjM3My0uMDItLjc1Ni0uNTMtLjc1Ni0uMzEgMC0uNTMuMTM4LS41My40NjEgMCAuMjk1LjI1LjQ0Mi40OS41NiAxLjAzLjQ2MiAyLjE0LjcyOCAyLjE0IDIuMDM0IDAgMS4yMjgtLjk1IDEuNzUtMi4xMiAxLjc1LTEuMjYgMC0yLjE0Mi0uNTMyLTIuMDgyLTEuODU3aDEuNTIxYy0uMDIuMzgzLjA5LjgyMS41Ny44MjEuMzQgMCAuNTctLjE2Ni41Ny0uNTIzYS41MzEuNTMxIDAgMCAwLS4yMS0uNDIyYy0uNjQtLjMzMy0xLjUzLS41Ny0yLjAzMS0xLjEzYTEuNDczIDEuNDczIDAgMCAxLS40LTEuMDMxYzAtMS4xOS45Ni0xLjcgMi4wNzEtMS43IDEuMTYxIDAgMi4wOS41NyAyLjAzMiAxLjc4OGwtMS40OS4wMDV6TTE3LjI1IDE3LjM0M2gtLjcyVjkuOTc0aC43OTR2Mi40NjVoLjAyYy4zMS0uNDkyLjY3My0uNzA4IDEuMTYxLS43MDggMS40MTEgMCAxLjc1MiAxLjQwNiAxLjc1MiAyLjUyNSAwIDEuNTUzLS4yMSAzLjIzMy0xLjcxMiAzLjIzMy0uNDggMC0uOTQtLjE1OC0xLjI3LS43OTdoLS4wMjV2LjY1MXptMS4xMzEtLjUxMWMuODIyIDAgMS4wNS0uODQ2IDEuMDUtMi4zMTkgMC0uNzE3LS4wNS0yLjEyMS0xLjA2LTIuMTIxLTEuMTcgMC0xLjEgMS41NjItMS4xIDIuMzU3IDAgLjc5NS0uMDEyIDIuMDgzIDEuMTEgMi4wODNNMjQuNDU0IDE3LjM0MmExLjIxMyAxLjIxMyAwIDAgMC0uMTguMDRjLS42NzIuMDMtLjkyLS4wMy0xLS43NzZoLS4wMjFjLS4xOS40ODEtLjcuODgzLTEuMjMuODgzLTEuMTEgMC0xLjQzLS42MDgtMS40My0xLjYgMC0uMjA3LjAzLS45OTIuOC0xLjMyNy40NDgtLjE5NiAxLjU2OC0uNjEgMS42NzEtLjY4OC4xNy0uMTI3LjE1LS4zNDUuMTUtLjYyOSAwLS42MTktLjI0MS0uODU1LS44ODItLjg1NS0uNzIgMC0uODIxLjMyNC0uODEuOTYzaC0uNzFjLS4wNC0xLjEzLjUzLTEuNjIyIDEuNjUtMS42MjIgMS42NTIgMCAxLjUxMiAxLjM1NyAxLjUxMiAxLjQ4NHYzLjEzN2MwIC4xMzctLjAyLjMzMi4xNC40MTIuMTEyLjAyMi4yMjcuMDI2LjM0LjAxdi41Njh6bS0xLjMtMi45NDZjLS4zOTEuMjI0LS44My4zOTMtMS4yNTIuNTktLjM3My4xNjctLjQ5LjU2OS0uNDkuOTQzIDAgLjU1LjE0LjkwMy43OC45MDMuMyAwIC45Ni0uMjI0Ljk2LTEuMTF2LTEuMzI2aC4wMDJ6TTI0Ljc2NSAxNy4zNDN2LS42MWwyLjU4MS00LjIxNGgtMi40NzF2LS42MzhoMy4yOTJ2LjYzOGwtMi41ODIgNC4xODVoMi42MDJ2LjY0aC0zLjQyMnpNMzIuMzkgMTcuMzQyYTEuMTc3IDEuMTc3IDAgMCAwLS4xOC4wNGMtLjY3Mi4wMy0uOTIyLS4wMy0xLS43NzZoLS4wMmMtLjE5MS40ODEtLjcwMi44ODMtMS4yMzIuODgzLTEuMTEgMC0xLjQzLS42MDgtMS40My0xLjYgMC0uMjA3LjAyOS0uOTkyLjgtMS4zMjcuNDQ4LS4xOTYgMS41NjgtLjYxIDEuNjctLjY4OC4xNzEtLjEyNy4xNS0uMzQ1LjE1LS42MjkgMC0uNjE5LS4yNC0uODU1LS44ODEtLjg1NS0uNzIgMC0uODIxLjMyNC0uODEuOTYzaC0uNzA3Yy0uMDQtMS4xMy41My0xLjYyMiAxLjY1LTEuNjIyIDEuNjUyIDAgMS41MTIgMS4zNTcgMS41MTIgMS40ODR2My4xMzdjMCAuMTM3LS4wMi4zMzIuMTQuNDEyLjExMi4wMjIuMjI3LjAyNi4zNC4wMXYuNTdsLS4wMDItLjAwMnptLTEuMy0yLjk0NmMtLjM5MS4yMjQtLjgzMS4zOTMtMS4yNTIuNTktLjM3NC4xNjctLjQ5LjU2OS0uNDkuOTQzIDAgLjU1LjE0LjkwMy43OC45MDMuMjk5IDAgLjk2LS4yMjQuOTYtMS4xMXYtMS4zMjZoLjAwMXpNMzYuNjkzIDE3LjM0MmExLjE4IDEuMTggMCAwIDAtLjE4LjA0Yy0uNjcyLjAzLS45MjItLjAzLTEuMDAxLS43NzZoLS4wMmMtLjE5LjQ4MS0uNzAxLjg4My0xLjIzMi44ODMtMS4xMSAwLTEuNDMtLjYwOC0xLjQzLTEuNiAwLS4yMDcuMDMtLjk5Mi44LTEuMzI3LjQ0OC0uMTk2IDEuNTY4LS42MSAxLjY3MS0uNjg4LjE3LS4xMjcuMTUtLjM0NS4xNS0uNjI5IDAtLjYxOS0uMjQtLjg1NS0uODgyLS44NTUtLjcyIDAtLjgyLjMyNC0uODEuOTYzaC0uNzFjLS4wNC0xLjEzLjUzLTEuNjIyIDEuNjUtMS42MjIgMS42NTEgMCAxLjUxMiAxLjM1NyAxLjUxMiAxLjQ4NHYzLjEzN2MwIC4xMzctLjAyLjMzMi4xNC40MTIuMTEyLjAyMi4yMjcuMDI2LjM0LjAxdi41N2wuMDAyLS4wMDJ6bS0xLjI5OC0yLjk0NmMtLjM5LjIyNC0uODMuMzkzLTEuMjUxLjU5LS4zNzMuMTY3LS40OS41NjktLjQ5Ljk0MyAwIC41NS4xNC45MDMuNzguOTAzLjI5OSAwIC45Ni0uMjI0Ljk2LTEuMTF2LTEuMzI2aC4wMDF6TTM3Ljg5NCAxMi43NzRoLjAyYy4zMy0uNzE3LjgtMS4wMjEgMS42My0uOTUzdi43NjZjLTEuMDItLjE3Ni0xLjYyLjQ1Mi0xLjYyIDEuNDQ0djMuMzFoLS43OVYxMS44OGguNzZ2Ljg5NnpNMTAuMTcyIDIwLjE4OHYtLjg0N2MwLS4wNDMuMDA1LS4yMjQuMDA1LS4zNmgtLjAwNWwtLjQxMiAxLjIxaC0uMTk2bC0uNDEzLTEuMjA3aC0uMDA0YzAgLjEzMy4wMDQuMzE0LjAwNC4zNTd2Ljg1aC0uMTl2LTEuNDQ0aC4yODRsLjQxOSAxLjIxN2guMDA0bC40MTctMS4yMTdoLjI4MXYxLjQ0aC0uMTk0ek0xMS4zNDQgMTguNzQ4aC0uMTk4djEuNDRoLjE5OHYtMS40NHpNMTIuMzMgMjAuMDE1aC43NDR2LjE3MmgtLjk0di0xLjQ0aC4xOTZ2MS4yNjh6TTEzLjkxNiAyMC4wMTVoLjc0M3YuMTcyaC0uOTQxdi0xLjQ0aC4xOTh2MS4yNjh6TTE1LjUzMSAxOC43NDhoLS4xOTd2MS40NGguMTk3di0xLjQ0ek0xNi45NTkgMjAuMjI2Yy0uNTQ5IDAtLjcxNi0uNDQ4LS43MTYtLjc1OHMuMTY3LS43NTguNzE2LS43NThjLjU0OCAwIC43MTUuNDQ4LjcxNS43NThzLS4xNjcuNzU4LS43MTUuNzU4em0wLTEuMzQ1Yy0uMzE5IDAtLjUxMS4yNDgtLjUxMS41ODYgMCAuMzM4LjE5Mi41ODUuNTEuNTg1LjMxOSAwIC41MTEtLjI0Ny41MTEtLjU4NSAwLS4zMzgtLjE5Mi0uNTg2LS41MS0uNTg2TTE5LjMzIDE4Ljc0OGguMTkxdjEuNDRIMTkuM2wtLjc0Ni0xLjE2NGgtLjAwNHYxLjE2NGgtLjE5MXYtMS40NGguMjM0bC43MzQgMS4xNjNoLjAwNHYtMS4xNjN6TTIxLjUyOSAxOS4yODV2LjY4M2MwIC4wODIuMDc0LjA4Mi4xMDcuMDgyaC4wNjR2LjEzOGMtLjA2Ni4wMDYtLjExNy4wMTUtLjEzNS4wMTUtLjE3OCAwLS4yMTYtLjA5OC0uMjE2LS4yMjR2LS42OTFoLS4xNDJ2LS4xNWguMTQ1di0uMjkyaC4xOHYuMjkyaC4xNzF2LjE1aC0uMTc0di0uMDAzek0yMi41NTIgMTkuMTFjLjM0IDAgLjQ5NS4yODIuNDk1LjU1MyAwIC4yNy0uMTU1LjU1My0uNDk1LjU1My0uMzQxIDAtLjQ5Ni0uMjg0LS40OTYtLjU1MyAwLS4yNy4xNTQtLjU1NC40OTUtLjU1NHptMCAuOTU0Yy4yNTYgMCAuMzEtLjI2MS4zMS0uNDAxcy0uMDU0LS40MDEtLjMxLS40MDFjLS4yNTcgMC0uMzExLjI2LS4zMTEuNCAwIC4xNDEuMDU0LjQwMi4zMS40MDJ6TTI0LjczNSAxOC43NDhoLjY0NWMuMjc0IDAgLjQxNC4xNjYuNDE0LjM2M2EuMzE3LjMxNyAwIDAgMS0uMTk2LjI5OGMuMDk1LjAzOC4yNjYuMTA0LjI2Ni4zNTEgMCAuMjMxLS4xNzMuNDI1LS40OTguNDI1aC0uNjMxVjE4Ljc1em0uMTk3LjYxaC4zNThjLjE5IDAgLjMwNy0uMDU2LjMwNy0uMjMzIDAtLjEzNS0uMDg0LS4yMS0uMzA1LS4yMWgtLjM2di40NDN6bTAgLjY2NGguNDI0Yy4yMDYgMCAuMzEtLjEwMy4zMS0uMjYzIDAtLjIwMy0uMTgxLS4yNDMtLjM0My0uMjQzaC0uMzl2LjUwNnpNMjYuNzc4IDE4Ljc0OGgtLjE5OHYxLjQ0aC4xOTh2LTEuNDR6TTI3Ljc2NCAyMC4wMTVoLjc0NHYuMTcyaC0uOTQxdi0xLjQ0aC4xOTd2MS4yNjh6TTI5LjM1IDIwLjAxNWguNzQzdi4xNzJoLS45NDF2LTEuNDRoLjE5OHYxLjI2OHpNMzAuOTY0IDE4Ljc0OGgtLjE5OHYxLjQ0aC4xOTh2LTEuNDR6TTMyLjM5MyAyMC4yMjZjLS41NDggMC0uNzE2LS40NDgtLjcxNi0uNzU4cy4xNjgtLjc1OC43MTYtLjc1OGMuNTQ4IDAgLjcxNS40NDguNzE1Ljc1OHMtLjE2OC43NTgtLjcxNS43NTh6bTAtMS4zNDVjLS4zMTggMC0uNTEuMjQ4LS41MS41ODYgMCAuMzM4LjE5Mi41ODUuNTEuNTg1cy41MS0uMjQ3LjUxLS41ODVjMC0uMzM4LS4xOTItLjU4Ni0uNTEtLjU4Nk0zNC43NjQgMTguNzQ4aC4xOTJ2MS40NGgtLjIyM2wtLjc0NS0xLjE2NGgtLjAwNXYxLjE2NGgtLjE5MnYtMS40NGguMjM2bC43MzMgMS4xNjNoLjAwNHYtMS4xNjN6TTQwLjI2IDEwLjQyNWEuODg2Ljg4NiAwIDAgMSAuMTY0LS4wMTUuMjc3LjI3NyAwIDAgMSAuMTk0LjA1NC4xNjUuMTY1IDAgMCAxIC4wNTMuMTI1LjE3NC4xNzQgMCAwIDEtLjEyNy4xNjguMTY0LjE2NCAwIDAgMSAuMDk5LjEzMmMuMDExLjA2MS4wMjguMTIyLjA1LjE4aC0uMDg4YS44NTMuODUzIDAgMCAxLS4wNDUtLjE1N2MtLjAyLS4wOS0uMDU2LS4xMjUtLjEzNC0uMTI3aC0uMDh2LjI4NGgtLjA4N3YtLjY0NXptLjA4Ni4yOThoLjA4OGMuMDkyIDAgLjE1LS4wNS4xNS0uMTI1cy0uMDY0LS4xMi0uMTUtLjEyMmEuMzc0LjM3NCAwIDAgMC0uMDg1LjAwN3YuMjRoLS4wMDN6IiBmaWxsPSIjNUUwNDI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTQwLjQ3NCAxMS4yNTZhLjUxNS41MTUgMCAxIDEgLjUyMi0uNTE2LjUyMy41MjMgMCAwIDEtLjUyMi41MTZ6bTAtLjk2NmEuNDQ4LjQ0OCAwIDEgMCAuNDYuNDQ4LjQ1Ni40NTYgMCAwIDAtLjQ2LS40NDh6IiBmaWxsPSIjNUUwNDI1Ii8+CiAgICA8L2c+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSI3LjgzOCIgeTE9IjAiIHgyPSIzNC41MTEiIHkyPSItNS4zMjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U1NDAzOSIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4xMSIgc3RvcC1jb2xvcj0iI0U5NjkzQiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii4zMyIgc3RvcC1jb2xvcj0iI0VDOEI0MiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii43MiIgc3RvcC1jb2xvcj0iI0Y1QzIxRCIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9Ii45MiIgc3RvcC1jb2xvcj0iI0Y4RDYyNyIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGM0U5NDciLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYyIgeDE9IjcuODM4IiB5MT0iMTAuMjUiIHgyPSIyNC4xOTIiIHkyPSIxLjY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMkRFOTQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuMDEiIHN0b3AtY29sb3I9IiNGMkRFOTQiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIuNTEiIHN0b3AtY29sb3I9IiNFNUM0MjAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRUU4MDIyIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2xpcFBhdGggaWQ9ImEiPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDQxdjIwLjIyNkgweiIvPgogICAgICAgIDwvY2xpcFBhdGg+CiAgICA8L2RlZnM+Cjwvc3ZnPgo="},306:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTUyIiBoZWlnaHQ9IjExNCIgdmlld0JveD0iMCAwIDE1MiAxMTQiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0zNi44ODIgMTAuMDIxYy4xNy0uMjkyLjI2LS42MTkuMjYtLjk1NFY3LjQzYzAtMi4wNTItMS44Ny0zLjcxNi00LjE4LTMuNzE2SDcuODk1Yy0xLjEwOSAwLTIuMTcyLjM5Mi0yLjk1NiAxLjA4OS0uNzg0LjY5Ny0xLjIyNSAxLjY0Mi0xLjIyNSAyLjYyN3YxLjYzN2MwIC4zMzUuMDkxLjY2Mi4yNjIuOTU0aC0uMzcyYTIuNzg1IDIuNzg1IDAgMCAxLTEuOTc1LS44MTcgMi44IDIuOCAwIDAgMS0uODE4LTEuOTc5VjUuMDIyYzAtMS4zMjguNTI2LTIuNiAxLjQ2Mi0zLjUzOUE0Ljk4NSA0Ljk4NSAwIDAgMSA1LjgwMy4wMTdIMzUuNzNhNC45OTggNC45OTggMCAwIDEgNC45OTEgNS4wMDV2Mi4yMDNhMi44IDIuOCAwIDAgMS0uODE4IDEuOTggMi43ODUgMi43ODUgMCAwIDEtMS45NzUuODE2aC0xLjA0NnoiLz4KICAgICAgICA8cGF0aCBpZD0iYyIgZD0iTTM0Ljk2NyAzMi43NDZDMzYuMTY2IDQzLjAxMyA0NC44NyA1MC45OCA1NS40MzMgNTAuOThjMTAuNTYxIDAgMTkuMjY3LTcuOTY2IDIwLjQ2Ni0xOC4yMzNoMjkuNDE3YTkuODQ2IDkuODQ2IDAgMCAwIDQuOTkxLTEuMzg3djM2LjM5OGwtLjAwNS4wMmE0Ljk5OCA0Ljk5OCAwIDAgMS00Ljk4NiA1LjAwNUg1LjU1YTQuOTkgNC45OSAwIDAgMS0zLjUzNy0xLjQ2MiA1LjAxNiA1LjAxNiAwIDAgMS0xLjQ3LTMuNTQyVjMxLjM3OWE5Ljg0NiA5Ljg0NiAwIDAgMCA1LjAwNyAxLjM2N2gyOS40MTh6bTQxLjA3Mi0yLjQyOGMwLTExLjQxLTkuMjI2LTIwLjY2LTIwLjYwNi0yMC42Ni0xMS4zODEgMC0yMC42MDcgOS4yNS0yMC42MDcgMjAuNjZINS41NWE1LjAwMyA1LjAwMyAwIDAgMS00Ljk5MS01VjUuMzEyYTUuMDAzIDUuMDAzIDAgMCAxIDQuOTkxLTVoOTkuNzY3YTQuOTk4IDQuOTk4IDAgMCAxIDQuOTg2IDVWMjUuMzJhNC45OTggNC45OTggMCAwIDEtNC45ODYgNUg3Ni4wNHoiLz4KICAgICAgICA8cGF0aCBpZD0iZSIgZD0iTTM1LjU1IDMuODM1aC0zMGMtMS43NjEgMC0zLjQ5LS40NzItNS4wMDctMS4zNjhWLjQyN2E5Ljg0NiA5Ljg0NiAwIDAgMCA1LjAwNiAxLjM2N0gzNS41NXYyLjA0eiIvPgogICAgICAgIDxwYXRoIGlkPSJnIiBkPSJNMzAuOTMgMS43OTRjMS4zNTctLjAwOCAyLjY4Ny0uNDg4IDMuODU0LTEuMzg3djIuMDRjLTEuMTY3LjktMi40OTcgMS4zOC0zLjg1NCAxLjM4OEguMTE3di0yLjA0SDMwLjkzeiIvPgogICAgICAgIDxwYXRoIGlkPSJpIiBkPSJNMS4xMSA3LjkxMUwyLjUxIDBsNy44OSAxLjQwNEw5IDkuMzE0eiIvPgogICAgICAgIDxwYXRoIGlkPSJrIiBkPSJNLjczIDYuNzlMMS44MS42OTYgNy45IDEuNzggNi44MjMgNy44NzN6Ii8+CiAgICAgICAgPHBhdGggaWQ9Im0iIGQ9Ik0wIDMuNjMyTC42Mi4xMzZsMy40ODYuNjItLjYxOSAzLjQ5NnoiLz4KICAgICAgICA8cGF0aCBpZD0ibyIgZD0iTTAgLjQ3OVYuNDc1QzAgLjI2Ny4xMjkuMDc1LjMzIDBsMTEuNjI2LjAyYS41MS41MSAwIDAgMSAuMzMuNTF2MS4zNjNhLjM3Ny4zNzcgMCAwIDEtLjMxLjM1NyAxLjUyMyAxLjUyMyAwIDAgMS0uMjY1LjAyNUg4LjY5YS41OTIuNTkyIDAgMCAwIC4wNzEuMTMzYy4zNTcuNTA2LjYxIDEuMDc4Ljc0MyAxLjY4My4wMy4xMzguMDk3LjE2OS4yMy4xNjloMi4wMzRjLjM5NyAwIC41NDUuMTQzLjU0NS41MzV2MS4yMWMwIC4zODItLjE0OC41MS0uNTEuNTFIOS43NjljLS4xMjggMC0uMTc4LjAzNS0uMjA0LjE3M0E1LjEzNyA1LjEzNyAwIDAgMSA4LjE5IDkuMzk3YTUuNzMzIDUuNzMzIDAgMCAxLTIuMDM1IDEuMzMxIDcuODM0IDcuODM0IDAgMCAxLTEuODU3LjQ4bC0uMjI0LjAzNmMuMDMuMDQ1LjA0Ni4wNzYuMDcxLjEwNy41OTYuNjYzIDEuMTk2IDEuMzI2IDEuNzg2IDIgLjU5LjY3MyAxLjIyNyAxLjQyMyAxLjgzMiAyLjE0Ny44MjQuOTg1IDEuNjM4IDEuOTc0IDIuNDU4IDIuOTY0LjAxLjAyLjAyNC4wMzYuMDQuMDUxYS40Ny40NyAwIDAgMS0uMTIyLjgxN0g3LjUzNGEuOTA2LjkwNiAwIDAgMS0uNjgyLS4yOTJjLS40ODMtLjU2Ni0uOTU2LTEuMTQyLTEuNDQtMS43MDktLjQ4My0uNTY2LS44NC0uOTg0LTEuMjYyLTEuNDc0LS43MTItLjgyMS0xLjQxNC0xLjY0Mi0yLjEzNy0yLjQ1NGExMzguNjQ1IDEzOC42NDUgMCAwIDAtMS44NDEtMi4wNC41ODcuNTg3IDAgMCAxLS4xNjMtLjQxOFY5LjM1YzAtLjM1Ny4xNzMtLjUxLjUwOS0uNTFoMS40N2E2LjgxNyA2LjgxNyAwIDAgMCAyLjQ1Mi0uMzc4IDMuMDg5IDMuMDg5IDAgMCAwIDEuNTAxLTEuMTAyIDIuMzYgMi4zNiAwIDAgMCAuMzc3LS44MjZILjYxOWEyLjEzNSAyLjEzNSAwIDAgMS0uMjYgMCAuNDA4LjQwOCAwIDAgMS0uMzM1LS4zOTN2LTEuNWEuMzcyLjM3MiAwIDAgMSAuMzc3LS4zNjJjLjA2Ni0uMDA1LjEzMi0uMDA1LjE5OCAwaDUuNDg1YS45My45MyAwIDAgMC0uMDQ2LS4xMjJjLS4yOTgtLjUtLjc2LS44NzktMS4zMDgtMS4wNzJhNS42OCA1LjY4IDAgMCAwLTIuMDg2LS4zNTJILjU0OGMtLjQwMiAwLS41NjUtLjE5OS0uNTQtLjYzMi4wMy0uNTEuMDMtMS4wMiAwLTEuNTNBLjUwMi41MDIgMCAwIDEgMCAuNDc4eiIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1Mi43NjIgMjMuODEpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMyNDYxQUEiIGZpbGwtb3BhY2l0eT0iLjMiIGQ9Ik0tNS4zOC02LjE3M2g1Mi4yOTJ2MjIuMzg1SC01LjM4eiIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOC4wOTUgMzQuOTUyKSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJkIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjMjQ2MUFBIiBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNLTUuNjQ4LTUuODc5aDEyMi4xNDZ2ODQuODUySC01LjY0OHoiIG1hc2s9InVybCgjZCkiLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDk1IDY1LjkwNSkiPgogICAgICAgICAgICA8bWFzayBpZD0iZiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNlIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzI0NjFBQSIgZmlsbC1vcGFjaXR5PSIuMiIgZD0iTS01LjY0OC01Ljc2NGg0Ny4zODl2MTUuNzlILTUuNjQ4eiIgbWFzaz0idXJsKCNmKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5My42MTkgNjUuOTA1KSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJoIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2ciLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjMjQ2MUFBIiBmaWxsLW9wYWNpdHk9Ii4yIiBkPSJNLTYuMDczLTUuNzg0aDQ3LjA0N3YxNS44MUgtNi4wNzN6IiBtYXNrPSJ1cmwoI2gpIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM2LjY2NyA0KSI+CiAgICAgICAgICAgIDxtYXNrIGlkPSJqIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2kiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjMjQ2MUFBIiBmaWxsLW9wYWNpdHk9Ii40NCIgZD0iTS02LjA3IDEyLjkyOGwzLjU2Ni0yMC4xMDVMMTcuNTgtMy42MTMgMTQuMDE0IDE2LjQ5eiIgbWFzaz0idXJsKCNqKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDAuNjY3IDY3LjE0MykiPgogICAgICAgICAgICA8bWFzayBpZD0ibCIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNrIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzI0NjFBQSIgZmlsbC1vcGFjaXR5PSIuNDQiIGQ9Ik0tNi40NSAxMS44MDZMLTMuMjA0LTYuNDggMTUuMDgtMy4yMzYgMTEuODM3IDE1LjA1eiIgbWFzaz0idXJsKCNsKSIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDQ3LjMzMykiPgogICAgICAgICAgICA8bWFzayBpZD0ibiIgZmlsbD0iI2ZmZiI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNtIi8+CiAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iIzI0NjFBQSIgZmlsbC1vcGFjaXR5PSIuNDQiIGQ9Ik0tNy4xNzggOC42NDdsMi43ODMtMTUuNjg4IDE1LjY4IDIuNzgyTDguNSAxMS40Mjl6IiBtYXNrPSJ1cmwoI24pIi8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY3LjYxOSA1Ny4yMzgpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9InAiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjbyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiMyNDYxQUEiIGZpbGwtb3BhY2l0eT0iLjMiIGQ9Ik0tNi4xOS02LjE5aDI0LjY5MnYzMS43MUgtNi4xOXoiIG1hc2s9InVybCgjcCkiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},307:function(M,t){M.exports="/_next/static/images/pms-bg-31b7d69e50b6853af55f19fed8af99cb.png"},308:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjRUFGQkZGIi8+CiAgICA8cGF0aCBmaWxsPSIjMjQ2MUFCIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ljk1NyAxNy42MTdjMC0zLjcwMiAzLTYuNzAyIDYuNzAyLTYuNzAyIDMuNyAwIDYuNyAzIDYuNyA2LjcwMiAwIDMuNy0zIDYuNy02LjcgNi43LTMuNzAxIDAtNi43MDItMy02LjcwMi02Ljd6bTcuNTYzLTEuNDhoLjg0MmMuMTggMCAuMzI2LjE0Ny4zMjYuMzI3IDAgLjE4LS4xNDYuMzI2LS4zMjYuMzI2aC0uOTE3Yy0uMDUyLjE3NC0uMTI5LjMzNS0uMjMxLjQ4LS4zNjMuNTE5LS45NjQuNzM2LTEuNDM2LjgyNmwxLjgxNiAxLjk2MmMuMTIzLjEzMi4xMTUuMzM4LS4wMTcuNDYxLS4wNjMuMDU4LS4xNDMuMDg2LS4yMjIuMDg2LS4wODcgMC0uMTc1LS4wMzUtLjIzOS0uMTAzbC0yLjI2NS0yLjQ0OGMtLjA5LS4wOTctLjExMi0uMjM4LS4wNTctLjM1Ny4wNTUtLjEyLjE4Mi0uMTgzLjMwOC0uMTloLjAwMmMuMDUgMCAxLjEzNy4wMiAxLjU3Ny0uNjEyLjAxMy0uMDE4LjAyLS4wMzkuMDI4LS4wNi4wMDYtLjAxNS4wMTItLjAzLjAyLS4wNDVoLTEuNzczYy0uMTggMC0uMzI2LS4xNDYtLjMyNi0uMzI2IDAtLjE4LjE0Ni0uMzI2LjMyNi0uMzI2aDEuOTE1Yy0uMDEtLjI1LS4wODUtLjU0Mi0uMTk4LS44NThoLTEuNzE3Yy0uMTggMC0uMzI2LS4xNDctLjMyNi0uMzI3IDAtLjE4LjE0Ni0uMzI2LjMyNi0uMzI2SDE3LjM2MmMuMTggMCAuMzI2LjE0Ni4zMjYuMzI2IDAgLjE4LS4xNDYuMzI3LS4zMjYuMzI3aC0uOTk1Yy4wOTQuMzA3LjE0NC41OTMuMTUzLjg1OHptLTQuOTkyIDIuMzM2YzAgLjI0Ni0uMjczLjM5NC0uNDc5LjI2TDkuOTMgMThjLS4xODYtLjEyMi0uMTg2LS4zOTYgMC0uNTE4bDEuMTItLjczMmMuMjA2LS4xMzUuNDguMDE0LjQ4LjI2djEuNDYyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMDBCQUYxIiBkPSJNOS42NiAyMy41MTFjLTEuMzYtMS41MzUtMi4xMjgtMy41MzgtMi4xNTItNS41NTNoLS45NjNjLjEyMyAyLjI2IDEuMDg3IDQuNDMzIDIuNjQ0IDYuMDI1bC40NzItLjQ3MnpNMTYuMzI2IDcuODM3djEuNjQ2YzEuOTIuMTIzIDMuNzUxLjk0MyA1LjEwNCAyLjI2bDEuMzcyLTEuMzczYy0xLjc3NS0xLjYtNC4xMjItMi41MS02LjQ3Ni0yLjUzM3pNNy41MjMgMTcuMzA3Yy4xMjMtMi4wMDQuOTgtMy45MjIgMi4zNTctNS4zMzRsLS45MTItLjkxMWMtMS41NCAxLjcxNS0yLjQxNCAzLjk3Ni0yLjQzOCA2LjI0NWguOTkzek0xMC4zNTIgMTEuNTI0YzEuNDc1LTEuMyAzLjM5Mi0yLjAzMyA1LjMyMy0yLjA1OFY3Ljg1Yy0yLjM0NC4xMjMtNC42MDQgMS4xMjMtNi4yNTUgMi43NGwuOTMyLjkzNHpNMjEuODggMTIuMjE1YzEuMjQgMS40MTUgMS45MzggMy4yNDYgMS45NjMgNS4wOTJoMi4yNjdjLS4xMjMtMi40My0xLjE1OS00Ljc3NS0yLjgzNi02LjQ4NWwtMS4zOTQgMS4zOTN6Ii8+CiAgICA8bWFzayBpZD0ic2gzYXAwOGFnYSIgd2lkdGg9IjYiIGhlaWdodD0iOCIgeD0iMjEiIHk9IjE3IiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMS42NjIgMTcuOTU4aDQuNDYxdjYuNzA3aC00LjQ2di02LjcwN3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgogICAgPC9tYXNrPgogICAgPGcgbWFzaz0idXJsKCNzaDNhcDA4YWdhKSI+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwQkFGMSIgZD0iTTIzLjgyNiAxNy45NThjLS4xMjMgMS44MzUtLjkwNyAzLjU4LTIuMTY0IDQuODczbDEuODMzIDEuODM0YzEuNjYtMS44MzUgMi42MDYtNC4yNyAyLjYyOC02LjcwN2gtMi4yOTd6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo="},309:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjRUFGQkZGIi8+CiAgICA8cGF0aCBmaWxsPSIjMjQ2MUFCIiBkPSJNMjMuODMxIDEyLjg0M2wtNy4xMjggMWMtLjE1My4wMjItLjI3Ny4wOTItLjM3My4xODctLjI3Ny4xNDYtLjMzNS40NC0uMTM2Ljc3Mi4wMTguMDM1LjA0My4wNjguMDY4LjEwMS4wMDcuMDEuMDExLjAxOS4wMi4wMjlsLjAxLjAxMmMuMDEyLjAxMi4wMTguMDI3LjAzLjAzOGwyLjI1MiAyLjI1My0yLjExOCAyLjUxMWMtLjIxNS4yNTQtLjU4OC4zMDMtLjg2LjExMmwtMi42OTItMS44ODJjLS4yNTgtLjE4LS42MDgtLjE0Ny0uODI4LjA3OGwtNC40NCA0LjU0M2MtLjUyNS41MzItLjUxOSAxLjM4OC4wMTMgMS45MTIuMjY0LjI2LjYwNy4zOS45NS4zOS4zNDkgMCAuNjk3LS4xMzUuOTYyLS40MDNsMi41MjctMi42MDJjLjIyLS4yMjYuNTcyLS4yNi44My0uMDc4bDIuNzQ2IDEuOTNjLjI2OC4xODkuNjM2LjE0NS44NTMtLjEwMmwzLjk1NS00LjUxMSAxLjk3OCAxLjk3N2MuMTA3LjEwOC4yMzYuMTY1LjM2Ny4xODYuMTY0LjA1Ni4zMy4wNTIuNDgzLS4wMzcuMTI5LS4wNzQuMTg3LS4xODkuMjE5LS4zMTcuMDMyLS4wNjQuMDU4LS4xMzQuMDctLjIxM2wxLTcuMTI4Yy4wNjItLjQ0Mi0uMzE3LS44Mi0uNzU4LS43NTh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMDBCQUYxIiBkPSJNMTYuNTk3IDcuNTVjLjEyMi4wNS4xNzIuMTQxLjE3LjI3Mi0uMDA3LjIzMi0uMDAzLjQ2NS0uMDEuNjk3LS4wMDMuMDktLjA3LjE2NS0uMTU5LjE4Mi0uMDQ0LjAwOC0uMDg5LjAxMi0uMTM0LjAxMmgtMS41NDdjLjAxNy4wMzMuMDI0LjA1Mi4wMzUuMDY4LjE4Ny4yNi4zMS41NDguMzguODU5LjAxNy4wNzIuMDUuMDg3LjExOS4wODcuMzUtLjAwNC43LS4wMDIgMS4wNDktLjAwMS4yMDMgMCAuMjc4LjA3My4yNzguMjc0di42MTZjMCAuMTk2LS4wNzQuMjcyLS4yNzIuMjczLS4zNDguMDAyLS42OTUuMDAyLTEuMDQyIDAtLjA2Ny0uMDAxLS4wOTIuMDE2LS4xMDUuMDg3LS4wOTguNTMtLjMyNC45OTgtLjcwNCAxLjM4My0uMjk3LjMwMi0uNjQ4LjUyNS0xLjA0Mi42OC0uMzA3LjEyLS42MjQuMjAxLS45NTIuMjQzbC0uMTEzLjAyYy4wMTQuMDIyLjAyMy4wMzkuMDM1LjA1My4zMDUuMzQuNjEzLjY3OC45MTMgMS4wMjIuMzE3LjM2MS4wNTQuMS4zNjIuNDY4LjQyMy41MDMuODQgMS4wMSAxLjI1OSAxLjUxNS4wMDYuMDA5LjAxMy4wMTYuMDIuMDI0LjE2NS4xNzEuMTAzLjMyMS0uMDYyLjQxOGgtMS4zMTdjLS4xMzIgMC0uMjYyLS4wNS0uMzQ5LS4xNDlsLS4wMDEtLjAwMWMtLjI0Ny0uMjktLjQ5LS41ODMtLjczNi0uODc0LS4yMTMtLjI1Mi0uNDMtLjUwMy0uNjQ2LS43NTMtLjM2My0uNDE4LS4xNDktLjIxMi0uNTE3LS42MjYtLjMxLS4zNS0uNjI3LS42OTMtLjk0My0xLjAzNy0uMDU3LS4wNjMtLjA4NC0uMTMtLjA4NC0uMjEzdi0uODEzYy4wMDEtLjE4My4wODktLjI2OC4yNzQtLjI2OWguNzI2Yy40MjggMCAuODUtLjA0IDEuMjU1LS4xOTEuMzA5LS4xMTcuNTc3LS4yOS43NjgtLjU2NC4wODgtLjEyNS4xNTQtLjI2LjE5My0uNDIyaC0yLjkwNGMtLjA0NSAwLS4wOS0uMDA1LS4xMzMtLjAxMS0uMDk3LS4wMTYtLjE2OC0uMTAyLS4xNy0uMi0uMDA3LS4yNTUtLjAwNy0uNTEgMC0uNzY1LjAwMy0uMTEuMDgtLjE3My4xOS0uMTg2LjAzNS0uMDAzLjA3LS4wMDIuMTAzLS4wMDJoMi44MDZjLS4wMS0uMDMtLjAxMy0uMDQ3LS4wMjItLjA2Mi0uMTUzLS4yNjgtLjM5LS40MzctLjY3LS41NDYtLjM0MS0uMTMzLS43LS4xODEtMS4wNjYtLjE4MWwtMS4wNzItLjAwM2MtLjIwNi0uMDAxLS4yOS0uMS0uMjc2LS4zMjMuMDE2LS4yNTYuMDEtLjUxMi0uMDAzLS43NjgtLjAwNi0uMTQuMDM4LS4yNC4xNjctLjI5M2g1Ljk1eiIvPgo8L3N2Zz4K"},310:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjE2IiBmaWxsPSIjRUFGQkZGIi8+CiAgICA8cGF0aCBmaWxsPSIjMjQ2MUFCIiBkPSJNMjAuOTEzIDkuMTQzYy44IDAgMS40NTYuNjU1IDEuNDU2IDEuNDU2djMuMTIybC0uMDYuMDAyYy0uNDkyLjAxOC0uOTYyLjEyMi0xLjM5Ni4yOTh2LTMuNDIySDcuOTg3djguNzM5SDE4LjYyYy4yMTcuNTU0LjU1IDEuMDUuOTY4IDEuNDU3aC0yLjNsMS44NjQgMS4yODZjLjExNy4wOC4xODcuMjE0LjE4Ny4zNTYgMCAuMjM5LS4xOTQuNDMzLS40MzMuNDMzaC0xLjE5MmMtLjEyOCAwLS4yNTMtLjAzOC0uMzYtLjEwOEwxNC40NSAyMC44NWwtMi43NjcgMS44MDhjLS4yMTMuMTM5LS40Ni4yMTMtLjcxNS4yMTNoLS45N2MtLjE0IDAtLjI3LS4wNjktLjM1LS4xODMtLjEzNS0uMTk0LS4wODgtLjQ2LjEwNi0uNTk2bDEuODU2LTEuMjk3SDcuOTg3Yy0uODAxIDAtMS40NTctLjY1NS0xLjQ1Ny0xLjQ1NnYtOC43MzljMC0uOC42NTYtMS40NTYgMS40NTctMS40NTZoMTIuOTI2eiIvPgogICAgPHBhdGggZmlsbD0iIzAwQkFGMSIgZD0iTTIyLjQ2IDE0LjE3OGMtMi4wMjEgMC0zLjY2MSAxLjY0LTMuNjYxIDMuNjYyIDAgMi4wMjIgMS42NCAzLjY2MiAzLjY2MiAzLjY2MiAyLjAyMiAwIDMuNjYyLTEuNjQgMy42NjItMy42NjIgMC0yLjAyMy0xLjY0LTMuNjYyLTMuNjYyLTMuNjYyeiIvPgogICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTIzLjA0IDE3LjE1NGguNTI1Yy4xMTIgMCAuMjAzLjA5LjIwMy4yMDMgMCAuMTEyLS4wOS4yMDMtLjIwMy4yMDNoLS41NzFjLS4wMzIuMTA5LS4wOC4yMDktLjE0NC4zLS4yMjYuMzIyLS42LjQ1Ny0uODk0LjUxNGwxLjEzMSAxLjIyMmMuMDc3LjA4Mi4wNzIuMjExLS4wMS4yODgtLjA0LjAzNS0uMDkuMDUzLS4xMzkuMDUzLS4wNTQgMC0uMTA5LS4wMjItLjE0OS0uMDY1bC0xLjQxMS0xLjUyNGMtLjA1Ni0uMDYxLS4wNy0uMTQ5LS4wMzUtLjIyMy4wMzQtLjA3NS4xMTMtLjExNC4xOTItLjExOC4wMDcgMCAuNzA0LjAyLjk4My0uMzgyLjAxNC0uMDE5LjAxOC0uMDQ0LjAzLS4wNjVoLTEuMTA1Yy0uMTEyIDAtLjIwMy0uMDktLjIwMy0uMjAzIDAtLjExMi4wOTEtLjIwMy4yMDMtLjIwM2gxLjE5NGMtLjAwNy0uMTU2LS4wNTMtLjMzOC0uMTI0LS41MzVoLTEuMDdjLS4xMTIgMC0uMjAzLS4wOTEtLjIwMy0uMjAzIDAtLjExMy4wOTEtLjIwMy4yMDMtLjIwM2gyLjEyMmMuMTEyIDAgLjIwMy4wOS4yMDMuMjAzIDAgLjExMi0uMDkuMjAzLS4yMDMuMjAzaC0uNjJjLjA2LjE5MS4wOS4zNy4wOTYuNTM1eiIvPgogICAgPHBhdGggc3Ryb2tlPSIjMDBCQUYxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJNMTAuMDQ2IDE2LjAxMWwxLjM0OC0xLjcgMS42NjUgMS43MDYgMS41NjEtMS43MDYgMS40MzUgMS43MDIgMi43MS0zLjIwOCIvPgo8L3N2Zz4K"},363:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMwIDMwIj4KICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjE1IiBmaWxsPSIjRUFGQkZGIi8+CiAgICA8cGF0aCBmaWxsPSIjMjQ2MUFCIiBkPSJNOC44MzYgMTkuNThjLS4xMjkuMTI5LS4yODIuMjMzLS40NDYuMzAzdjIuMzU4YzAgLjM1Mi4yODYuNjM0LjYzNC42MzRoMS40MjhjLjM1MiAwIC42MzQtLjI4NS42MzQtLjYzNHYtNC44MTRjMC0uMDMxLS4wMDMtLjA2My0uMDA3LS4wOUw4LjgzNiAxOS41OHoiLz4KICAgIDxwYXRoIGZpbGw9IiMwMEMxRjIiIGQ9Ik0yMy42MjggMTAuMzg3aC0uMDQ2bC0yLjg4OC4xMzZjLS4xNS4wMDYtLjI5Ni4wMTMtLjM4LjE5NC0uMDgzLjE3OC4wMTEuMjguMTE2LjM4NC4yOTYuMjk2LjU4OC41OTUuODg4Ljg4NWwtLjMyOC4zMjctMi42NjUgMi42NjUtLjIzNi4yMzctLjU4Mi41ODItMi4yOTIgMi4yOTItLjEzMy0uMTMzLTIuNzQxLTIuNzQxLS41ODItLjU4Mi0uMTU3LS4xNTdjLS4xMjUtLjEyNS0uMjg2LS4xODQtLjQ1LS4xODQtLjE2MyAwLS4zMjMuMDYyLS40NDkuMTg0bC0uMTU2LjE1N0w3LjIyIDE3Ljk2Yy0uMjQ4LjI0Ny0uMjQ4LjY1MSAwIC44OTlsLjE1Ni4xNTZjLjEyNi4xMjYuMjg2LjE4NS40NS4xODUuMTY0IDAgLjMyNC0uMDYzLjQ1LS4xODRsMi44NzctMi44NzguMTMyLjEzMiAyLjc0MiAyLjc0Mi41ODEuNTgyLjE1Ny4xNTZjLjEyNi4xMjYuMjg2LjE4NS40NS4xODUuMTYzIDAgLjMyNC0uMDYzLjQ0OS0uMTg0bC4xNTctLjE1NyAyLjc0MS0yLjc0Mi41ODItLjU4Mi4yMzctLjIzNiAyLjY2NS0yLjY2NS4zMjQtLjMyNC44Ny44NjRjLjA4LjA4LjE2MS4xNjcuMjc2LjE2Ny4wNDIgMCAuMDktLjAxNC4xNDMtLjA0Mi4xNzQtLjA5NC4yMTItLjI0Ny4yMi0uNDE4LjA0MS0uOTQuMDg2LTEuODc4LjEzMi0yLjgxOC4wMS0uMjgzLS4xMDgtLjQxMS0uMzgzLS40MTF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMjQ2MUFCIiBkPSJNMTQuMDM3IDIwLjE2NWwtLjU4Mi0uNTgyLTEuMjU0LTEuMjU0Yy0uMDU2LjA5NC0uMDg3LjIwNi0uMDg3LjMyVjIyLjI0NWMwIC4zNTMuMjg2LjYzNS42MzQuNjM1aDEuNDI4Yy4zNTIgMCAuNjM0LS4yODYuNjM0LS42MzR2LTEuNTU3Yy0uMjMtLjA2Ny0uNDQyLS4xOTItLjYxNi0uMzY2bC0uMTU3LS4xNTd6TTE2LjM4OSAyMC4xNjVsLS4xNTcuMTU3Yy0uMTE1LjExNS0uMjQ4LjIwOS0uMzk0LjI3OXYxLjY0M2MwIC4zNTMuMjg2LjYzNS42MzQuNjM1SDE3LjljLjM1MiAwIC42MzQtLjI4Ni42MzQtLjYzNFYxOC42NWMwLS4xNzQtLjA3LS4zMzEtLjE4NC0uNDQ2bC0xLjk2MiAxLjk2MXpNMTkuOTQ5IDE2LjYwMWwtLjIzNy4yMzctLjE1My4xNTNWMjIuMjM3YzAgLjM1My4yODUuNjM1LjYzNC42MzVoMS40MjhjLjM1MiAwIC42MzQtLjI4Ni42MzQtLjYzNFYxNC4zODZjMC0uMDI4LS4wMDQtLjA1Ni0uMDA3LS4wODRsLTIuMyAyLjN6Ii8+CiAgICA8Y2lyY2xlIGN4PSIxNS4yNjYiIGN5PSIxMC4xMjMiIHI9IjQuMDM3IiBmaWxsPSIjMDBCQUYxIi8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuMDMyIDguOTRjLS4wMjItLjAyMS0uMDUtLjAzMi0uMDg0LS4wMzJoLS42MjZjLS4wNDEtLjItLjEyLS4zNzQtLjIzNC0uNTIyaC44NTNjLjAzNCAwIC4wNjItLjAxLjA4NC0uMDMyLjAyMi0uMDIyLjAzMy0uMDUuMDMzLS4wODRWNy45YzAtLjAzMy0uMDExLS4wNi0uMDMzLS4wODItLjAyMi0uMDIyLS4wNS0uMDMzLS4wODQtLjAzM2gtMy4wNDZjLS4wMzQgMC0uMDYyLjAxLS4wODQuMDMzLS4wMjIuMDIxLS4wMzMuMDQ5LS4wMzMuMDgzdi40ODJjMCAuMDMxLjAxMi4wNTguMDM1LjA4MS4wMjMuMDIzLjA1LjAzNC4wODIuMDM0aC41MzFjLjUxNSAwIC44NDIuMTM3Ljk4MS40MWgtMS41MTJjLS4wMzQgMC0uMDYyLjAxLS4wODQuMDMyLS4wMjIuMDIyLS4wMzMuMDUtLjAzMy4wODR2LjM3YzAgLjAzMy4wMTEuMDYuMDMzLjA4Mi4wMjIuMDIyLjA1LjAzMy4wODQuMDMzaDEuNTYzYy0uMDUzLjE5OC0uMTc4LjM0OS0uMzc1LjQ1My0uMTk2LjEwNC0uNDU2LjE1Ni0uNzc4LjE1NmgtLjQxYy0uMDMxIDAtLjA1OS4wMTEtLjA4Mi4wMzQtLjAyMy4wMjMtLjAzNS4wNS0uMDM1LjA4MnYuNDZjMCAuMDMxLjAxMS4wNTcuMDMzLjA4LjQ2OS40OTIgMS4wNzYgMS4xODEgMS44MjMgMi4wNjguMDIyLjAyOC4wNTIuMDQzLjA5MS4wNDNoLjcxNGMuMDUyIDAgLjA4Ny0uMDIyLjEwNi0uMDY1LjAyNS0uMDQ0LjAyLS4wODUtLjAxNC0uMTIzLS43MTMtLjg2NS0xLjI3My0xLjUxMi0xLjY4LTEuOTQyLjQxNS0uMDQ4Ljc1MS0uMTgxIDEuMDEtLjM5OC4yNTktLjIxOC40MTYtLjUuNDcyLS44NDhoLjYxNWMuMDM0IDAgLjA2Mi0uMDEuMDg0LS4wMzMuMDIyLS4wMjEuMDMzLS4wNDkuMDMzLS4wODN2LS4zN2MwLS4wMzMtLjAxLS4wNi0uMDMzLS4wODN6Ii8+Cjwvc3ZnPgo="},365:function(M,t,u){"use strict";u.d(t,"a",function(){return i});var L,j=u(3),e=u.n(j);!function(M){M[M.PMS_PORTFOLIO_SUMMARY=1]="PMS_PORTFOLIO_SUMMARY",M[M.PMS_PORTFOLIO_INSIGHTS=2]="PMS_PORTFOLIO_INSIGHTS",M[M.PMS_PORTFOLIO_ALLOCATION=3]="PMS_PORTFOLIO_ALLOCATION"}(L||(L={}));var n={PMS_PORTFOLIO_SUMMARY:{id:L.PMS_PORTFOLIO_SUMMARY,label:"PMS Summary",defaultRoute:e.a.PMS_PORTFOLIO,routes:[e.a.PMS_PORTFOLIO]},PMS_PORTFOLIO_INSIGHT:{id:L.PMS_PORTFOLIO_INSIGHTS,label:"Portfolio Insights",defaultRoute:e.a.PMS_PORTFOLIO_INSIGHTS,routes:[e.a.PMS_PORTFOLIO_INSIGHTS]},PMS_PORTFOLIO_ALLOCATION:{id:L.PMS_PORTFOLIO_ALLOCATION,label:"Portfolio Allocation",defaultRoute:e.a.PMS_PORTFOLIO_ALLOCATION,routes:[e.a.PMS_PORTFOLIO_ALLOCATION]}},i={baseRoute:e.a.PMS_HOME,links:[n.PMS_PORTFOLIO_SUMMARY,n.PMS_PORTFOLIO_INSIGHT,n.PMS_PORTFOLIO_ALLOCATION]}},46:function(M,t,u){"use strict";u.d(t,"a",function(){return N});var L=u(1),j=u(2);function e(){var M=i(["\n    font-size: 1.6em;\n  "]);return e=function(){return M},M}function n(){var M=i(["\n    margin: 0 8px 15px;\n  "]);return n=function(){return M},M}function i(M,t){return t||(t=M.slice(0)),Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}var I=L.b.div.withConfig({componentId:"sc-126kcut-0"})(["display:flex;flex-direction:column;padding:20px;margin-bottom:25px;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);background-color:#fff;",""],j.a.MOBILE(n())),N=L.b.h2.withConfig({componentId:"sc-126kcut-1"})(["font-size:1.8em;color:#000;font-weight:600;line-height:1.17;margin:0;",""],j.a.MOBILE(e()));t.b=I},54:function(M,t,u){"use strict";function L(M,t){if(null==M)return{};var u,L,j=function(M,t){if(null==M)return{};var u,L,j={},e=Object.keys(M);for(L=0;L<e.length;L++)u=e[L],t.indexOf(u)>=0||(j[u]=M[u]);return j}(M,t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(M);for(L=0;L<e.length;L++)u=e[L],t.indexOf(u)>=0||Object.prototype.propertyIsEnumerable.call(M,u)&&(j[u]=M[u])}return j}function j(M,t){for(var u=0;u<t.length;u++){var L=t[u];L.enumerable=L.enumerable||!1,L.configurable=!0,"value"in L&&(L.writable=!0),Object.defineProperty(M,L.key,L)}}function e(M){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(M){return typeof M}:function(M){return M&&"function"==typeof Symbol&&M.constructor===Symbol&&M!==Symbol.prototype?"symbol":typeof M})(M)}var n=function(){function M(t){var u=this;if(function(M,t){if(!(M instanceof t))throw new TypeError("Cannot call a class as a function")}(this,M),this.callbacks={},"undefined"!=typeof window){if(window.actions||(window.actions={}),window.actions[t])throw new Error("Channel ".concat(t," already exists"));"object"!==e(window.Android)&&"object"!==e(window.webkit)||(window.actions[t]=function(M){var t;try{t=JSON.parse(M),u.runCallbacks(t)}catch(t){console.error({error:t,data:M})}}),window.self!==window.top&&window.addEventListener("message",function(M){M.data.type&&u.runCallbacks(M.data)},!1)}}var t,u,n;return t=M,(u=[{key:"runCallbacks",value:function(M){var t=M.type,u=L(M,["type"]);this.callbacks[t]?this.callbacks[t].forEach(function(M){return M(u)}):console.warn("Type handler doesn't exist for ".concat(t))}},{key:"addCallback",value:function(M,t){this.callbacks[M]||(this.callbacks[M]=[]),"function"==typeof t&&this.callbacks[M].push(t)}},{key:"removeCallback",value:function(M,t){this.callbacks[M]&&(this.callbacks[M]=this.callbacks[M].filter(function(M){return M!==t}))}}])&&j(t.prototype,u),n&&j(t,n),M}(),i=u(6);function I(M){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";!function(M){return"object"===e(window.Android)&&window.Android[M]?function(t){t?window.Android[M](t):window.Android[M]()}:"object"===e(window.webkit)&&window.webkit.messageHandlers&&window.webkit.messageHandlers[M]?function(t){window.webkit.messageHandlers[M].postMessage(t)}:function(M){return M}}(M)(t)}u.d(t,"b",function(){return I}),u.d(t,"a",function(){return N});var N=new n("webMessage");function A(){}"undefined"!=typeof window&&Object(i.nb)()&&(window.onload=function(){N.addCallback("config",A)})},56:function(M,t,u){"use strict";u.d(t,"a",function(){return L});var L={TOKEN_EXPIRED:"tokenExpired",RETURN_TO_APP:"returnToApp",OPEN_EXTERNAL_LINK:"openExternalLink",FRONTSTAGE_CALLBACKS:"frontstageCallbacks",FRONTSTAGE_EVENT_DETAILS:"frontstageEventDetails",SHARE_EVENT:"shareEvent",ADD_TO_CALENDER:"addToCalender",GET_CALENDER_STATUS:"getCalenderStatus"}},588:function(M,t,u){"use strict";var L=u(0),j=u.n(L),e=u(1),n=u(51),i=u(276),I=u(159),N=u(28),A=u(85),D=u(2),g=u(15),r=u(6),c=u(3),S=u.n(c),a=u(93);function o(){var M=z(["\n    flex-direction: column;\n    align-items: flex-start;\n    > div:last-child {\n      padding-left: 0.2rem;\n    }\n  "]);return o=function(){return M},M}function y(){var M=z(["\n      font-size: 1rem;\n    "]);return y=function(){return M},M}function T(){var M=z(["\n      font-size: 1.2rem !important;\n    "]);return T=function(){return M},M}function z(M,t){return t||(t=M.slice(0)),Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}var w=e.b.div.withConfig({componentId:"sc-1roiko-0"})(["display:flex;align-items:center;> div:first-child{","}> div:last-child{padding-left:0.5rem;","}",""],D.a.MOBILE(T()),D.a.MOBILE(y()),D.a.MOBILE_SMALL(o())),C=Object(e.a)(["margin-left:0;font-weight:600;"]),E=function(M){var t=M.scheme;return j.a.createElement(g.a,{href:{pathname:S.a.PMS_PORTFOLIO.pathname},asPath:"".concat(S.a.PMS_PORTFOLIO.url,"/").concat(t.scheme_id)},j.a.createElement(a.a,null,j.a.createElement(N.a,null,j.a.createElement(I.b,{cardImgUrl:"",header:t.scheme,hideImage:!0,contentStyle:C}),j.a.createElement(N.b,null,j.a.createElement(N.d,null,j.a.createElement(w,null,j.a.createElement(N.c,{title:"Investment",className:"customStyles"},"₹",Object(r.v)(t.nw.invt))),j.a.createElement(N.c,{title:"Current Value"},"₹",Object(r.v)(t.nw.curr_nw)),j.a.createElement(N.c,{title:"Returns"},j.a.createElement(w,null,j.a.createElement(A.b,{isProfit:100*t.nw.rtn>0},"₹",Object(r.v)(t.nw.gl,2)),j.a.createElement(A.a,{isProfit:100*t.nw.rtn>0,withBrackets:!0},Object(r.pb)(100*t.nw.rtn,2)))))))))};function x(){var M=f(["\n      margin: 2rem 0;\n      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.05);\n      ","\n  "]);return x=function(){return M},M}function O(){var M=f(["\n    background: inherit;\n    margin: 0;\n    min-height: inherit;\n    border-radius: 0;\n    box-shadow: none;\n\n    ","\n  "]);return O=function(){return M},M}function l(){var M=f(["\n      flex-basis: 70%;\n    "]);return l=function(){return M},M}function m(){var M=f(["\n      display: none;\n    "]);return m=function(){return M},M}function s(){var M=f(["\n    justify-content: space-between;\n  "]);return s=function(){return M},M}function d(){var M=f(["\n    display: none;\n  "]);return d=function(){return M},M}function f(M,t){return t||(t=M.slice(0)),Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}u.d(t,"a",function(){return k});var Y=e.b.div.withConfig({componentId:"sc-1cxbsm7-0"})(["position:relative;padding:2.3rem 1.5rem 0;"]),b=e.b.div.withConfig({componentId:"sc-1cxbsm7-1"})(["margin-left:1rem;padding:0.5rem 0.7rem;border-radius:2px;background-color:#c9edfd;",""],D.a.DESKTOP(d())),p=e.b.div.withConfig({componentId:"sc-1cxbsm7-2"})(["display:flex;align-items:center;"," span{padding-bottom:.5rem;padding-left:.5rem;font-size:14px;color:#9b9b9b;","}.schemeWrapper{","}"],D.a.MOBILE(s()),D.a.MOBILE(m()),D.a.MOBILE(l())),h=e.b.div.withConfig({componentId:"sc-1cxbsm7-3"})(["margin:2rem 0;min-height:480px;background:#ffffff;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);"," "," border-radius:0.4rem;"],function(M){return M.isSummaryPage&&Object(e.a)(["background:inherit;border-radius:0;box-shadow:none;"])},D.a.MOBILE(O(),function(M){return M.isSummaryPage&&Object(e.a)(["background:#ffffff;border-radius:4px;box-shadow:-6px 5px 10px 0 rgba(128,152,213,0.06);"])})),Q=e.b.div.withConfig({componentId:"sc-1cxbsm7-4"})(["background:#ffffff;"," ",""],function(M){return M.isSummaryPage&&Object(e.a)(["margin:2rem 0;box-shadow:0 3px 10px 0 rgba(0,0,0,0.05);"])},D.a.MOBILE(x(),function(M){return M.isSummaryPage&&Object(e.a)(["margin:2rem 0;box-shadow:none;"])})),U=Object(e.a)(["width:4rem;height:4rem;"]),k=function(M){var t=M.schemes,L=M.title,e=M.isSummaryPage,I=t.schemes;return j.a.createElement(j.a.Fragment,null,j.a.createElement(p,null,j.a.createElement(n.b,{title:L,img:u(629),imgStyle:U,contentStyle:i.b,className:"schemeWrapper"}),j.a.createElement(b,null,I.length," ",I.length>1?"Schemes":"Scheme"),j.a.createElement("span",null," (",I.length," ",I.length>1?"Schemes":"Scheme",")")),j.a.createElement(h,{isSummaryPage:e},I.map(function(M,t){return j.a.createElement(Q,{isSummaryPage:e},j.a.createElement(E,{scheme:M,key:t}))})))};t.b=function(M){return j.a.createElement(Y,null,j.a.createElement(k,M))}},614:function(M,t,u){"use strict";var L=u(0),j=u.n(L),e=u(1),n=u(4),i=u(51),I=u(284),N=u(28),A=u(85),D=u(6),g=u(276),r=u(2),c=u(15),S=u(630),a=u(26),o=u(81),y=u(3),T=u.n(y);function z(M,t){return function(M){if(Array.isArray(M))return M}(M)||function(M,t){var u=[],L=!0,j=!1,e=void 0;try{for(var n,i=M[Symbol.iterator]();!(L=(n=i.next()).done)&&(u.push(n.value),!t||u.length!==t);L=!0);}catch(M){j=!0,e=M}finally{try{L||null==i.return||i.return()}finally{if(j)throw e}}return u}(M,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(){var M=f(["\n    flex-direction: column;\n    align-items: flex-start;\n    > div:last-child {\n      padding-left: 0.2rem;\n    }\n  "]);return w=function(){return M},M}function C(){var M=f(["\n      font-size: 1rem;\n    "]);return C=function(){return M},M}function E(){var M=f(["\n      font-size: 1.2rem !important;\n    "]);return E=function(){return M},M}function x(){var M=f(["\n    display: none;\n  "]);return x=function(){return M},M}function O(){var M=f(["\n      order: 1;\n      ::after {\n        content: ':';\n      }\n    "]);return O=function(){return M},M}function l(){var M=f(["\n      order: 2;\n      margin-left: 1rem;\n    "]);return l=function(){return M},M}function m(){var M=f(["\n    flex-direction: row;\n    align-items: center;\n  "]);return m=function(){return M},M}function s(){var M=f(["\n      display: none;\n    "]);return s=function(){return M},M}function d(){var M=f(["\n    padding: 1rem 0 0 1.5rem;\n\n    .mobileWrapper {\n      display: none;\n    }\n    .containerStyles {\n      width: 28rem;\n    }\n  "]);return d=function(){return M},M}function f(M,t){return t||(t=M.slice(0)),Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}var Y=e.b.div.withConfig({componentId:"sc-3ex4tm-0"})(["padding:2.5rem 0 0 2rem;.containerStyles{margin-left:1.5rem;}"," .desktopWrapper{","}"],r.a.DESKTOP(d()),r.a.MOBILE(s())),b=e.b.div.withConfig({componentId:"sc-3ex4tm-1"})(["display:flex;flex-direction:column;"," > div:nth-child(1){font-size:2.4rem;color:",";","}> div:nth-child(2){font-size:1.4rem;color:",";","}"],r.a.DESKTOP(m()),n.a.DARK_TEXT,r.a.DESKTOP(l()),n.a.BATTLESHIP_GREY,r.a.DESKTOP(O())),p=e.b.div.withConfig({componentId:"sc-3ex4tm-2"})(["padding:2.5rem 2rem 1.5rem;margin:0 -2rem;overflow-x:auto;border-bottom:solid 2px #eff1f5;:hover{box-shadow:-5px 3px 40px -27px rgb(0 0 0 / 48%);}"]),h=e.b.div.withConfig({componentId:"sc-3ex4tm-3"})(["display:flex;.title{flex:1;font-size:14px;font-weight:600;color:",";white-space:nowrap;overflow:hidden !important;text-overflow:ellipsis;}.tag{margin:0 1rem;padding:0.5rem 0.7rem;border-radius:2px;background-color:#c9edfd;}"],n.a.DARK_TEXT),Q=e.b.div.withConfig({componentId:"sc-3ex4tm-4"})(["display:flex;div{margin:0 1rem;padding:0.5rem 0.7rem;border-radius:2px;background-color:#c9edfd;color:","}"],n.a.DARK_TEXT),U=Object(e.a)(["width:4rem;height:4rem;margin-left:1.6rem;",""],r.a.DESKTOP(x())),k=e.b.div.withConfig({componentId:"sc-3ex4tm-5"})(["display:flex;align-items:center;> div:first-child{","}> div:last-child{padding-left:0.5rem;","}",""],r.a.MOBILE(E()),r.a.MOBILE(C()),r.a.MOBILE_SMALL(w())),v=[{id:"By Scheme Type",label:"By Scheme Type"},{id:"By PMS Provider",label:"By PMS Provider"}],P=function(M){var t=M.scheme;return j.a.createElement(p,null,j.a.createElement(h,null,j.a.createElement("div",{className:"title"},t.type),j.a.createElement(Q,{className:"mobileWrapper"},j.a.createElement("div",null,t.schemes.length," ",t.schemes.length>1?"Schemes":"Scheme"),j.a.createElement("img",{src:"/static/images/common/back.svg",alt:"header-image"}))),j.a.createElement(N.b,null,j.a.createElement(N.d,null,j.a.createElement(N.c,{title:"Allocation"},t.pct,"%"),j.a.createElement(N.c,{title:"Current Value"},"₹ ",Object(D.v)(t.curr_val)),j.a.createElement(N.c,{title:"Returns"},j.a.createElement(k,null,j.a.createElement(A.b,{isProfit:t.rtn_val>0},"₹",Object(D.v)(t.rtn_val,2)),j.a.createElement(A.a,{isProfit:t.rtn_pct>0,withBrackets:!0},Object(D.pb)(t.rtn_pct,2)))),j.a.createElement(N.c,{title:"",className:"desktopWrapper"},j.a.createElement(Q,null,j.a.createElement("div",null,t.schemes.length," ",t.schemes.length>1?"Schemes":"Scheme"),j.a.createElement("img",{src:"/static/images/common/back.svg",alt:"header-image"}))))))};t.a=Object(a.b)({loadingMappers:{mapPropsToLoading:function(M){return M.inProgress},mapPropsToError:function(M){return M.isDataRequestFailed},mapPropsToEmpty:function(M){return!M.insights||!M.insights.find(function(M){return M.key===v[0].id})}}})({LoadedViewComponent:function(M){var t=M.insights,e=z(Object(L.useState)("By Scheme Type"),2),n=e[0],N=e[1],A=t.find(function(M){return M.key===n}),r=A.values.reduce(function(M,t){return M+t.schemes.length},0);return j.a.createElement(g.a,null,j.a.createElement(i.b,{title:"Portfolio Insights",img:u(363),imgStyle:U,contentStyle:g.b}),j.a.createElement(Y,null,j.a.createElement(b,null,j.a.createElement("div",null,"₹",Object(D.v)(A.values.reduce(function(M,t){return M+t.curr_val},0),2)),j.a.createElement("div",null,"Current Investment Value in ",r," ",r>1?"Schemes":"Scheme")),j.a.createElement(I.a,{options:v,onClickCb:N,activeTabId:n,className:"containerStyles"}),A.values.map(function(M,t){return j.a.createElement(c.a,{href:{pathname:T.a.PMS_PORTFOLIO_INSIGHTS.pathname},asPath:"".concat(T.a.PMS_PORTFOLIO_INSIGHTS.url,"/").concat(Object(S.getUrlSlug)(n+"/"+M.type)),key:t},j.a.createElement(P,{scheme:M}))})))},EmptyViewComponent:j.a.createElement(o.e,{imgSrc:u(306),text:"You haven’t invested in PMS yet.",ctaText:"Schedule Call with Expert",subText:"",ctaRoute:T.a.PMS_HOME,urlSlug:"/call-advisor-modal"})})},629:function(M,t){M.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI2IDI2Ij4KICAgIDxwYXRoIGZpbGw9IiMyNzMwNkEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMDk1IDYuMTE0Yy0uNDgzIDAtLjkxNC0uMzEyLTEuMDc0LS43NzUtLjExNC0uMzMtLjc2LTEuMzkyLTEuMTgxLTEuNzQ5LS4zMjYtLjI3Ni0uNDgtLjcwNS0uMzk5LTEuMTE4LjA3OS0uNDA3LjM2My0uNzI3Ljc1OS0uODU4IDEuMTgyLS4zOTIgMi4yMjgtLjI2IDMuMDI5LjM4LjE0My4xMTUuMzM2LjExNS40OCAwIC44LS42NCAxLjg0OC0uNzcyIDMuMDI5LS4zOC4zOTYuMTMuNjguNDUxLjc1OC44NTguMDguNDEzLS4wNzMuODQxLS4zOTkgMS4xMTgtLjM3Mi4zMTUtLjg1MiAxLjMwNi0xLjAwNCAxLjc0OS0uMTYuNDYzLS41OTIuNzc1LTEuMDc1Ljc3NUg5LjA5NXpNNy40NDcgMi4zNjFjLS4xNy4wNTYtLjIyLjE4OC0uMjMzLjI2MS0uMDI3LjEzNi4wMjQuMjc0LjEzNS4zNjguNTIyLjQ0MyAxLjI1MiAxLjYxNyAxLjQxNiAyLjA5My4wNS4xNDYuMTgzLjI0NC4zMy4yNDRoMi45MjRjLjE0NyAwIC4yOC0uMDk4LjMzLS4yNDQuMS0uMjkzLjYzOC0xLjU4NCAxLjI0LTIuMDkzLjExLS4wOTQuMTYtLjIzMS4xMzQtLjM2OC0uMDE0LS4wNzMtLjA2My0uMjA1LS4yMzMtLjI2MS0uOTMtLjMwOC0xLjctLjIyNC0yLjI5LjI0OC0uNDMuMzQ0LTEuMDMyLjM0NS0xLjQ2MyAwLS4zNTctLjI4Ni0uNzgxLS40My0xLjI2Ny0uNDMtLjMxNSAwLS42NTcuMDYtMS4wMjMuMTgyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMDBDMUYyIiBkPSJNMTMuNDA2IDYuOWMwLS4yMTYtLjE3Ni0uMzkzLS4zOTMtLjM5My0uMDc0IDAtLjEzOS4wMjYtLjE5Ny4wNi0uMDU5LS4wMzQtLjEyNC0uMDYtLjE5Ny0uMDZINy44OThjLS4yMTcgMC0uMzk0LjE3Ny0uMzk0LjM5NCAwIC4yMTcuMTc3LjM5My4zOTQuMzkzaDQuNzIxdi4zOTRIOC4yOTFjLS4yMTcgMC0uMzkzLjE3Ni0uMzkzLjM5MyAwIC4yMTcuMTc2LjM5NC4zOTMuMzk0aDQuNjkyYy4zNTMuMjkzLjc4Ny40NjEgMS4yNS40NjEuNTI2IDAgMS4wMi0uMjA1IDEuMzkyLS41NzcuMTU0LS4xNTQuMTU0LS40MDIgMC0uNTU2LS4xNTQtLjE1NC0uNDAyLS4xNTQtLjU1NiAwLS40NDUuNDQ1LTEuMjE1LjQ0Ni0xLjY2My4wMDZWNi45ek05LjQ3MiAxMS42MjJjLTIuNTIzIDAtNS41MDkgMy4yLTUuNTA5IDUuOTAyIDAgLjIxNy4xNzcuMzkzLjM5NC4zOTMuMjE3IDAgLjM5My0uMTc2LjM5My0uMzkzIDAtMi4yNDcgMi42NDgtNS4xMTUgNC43MjItNS4xMTUuMjE3IDAgLjM5My0uMTc2LjM5My0uMzkzIDAtLjIxNy0uMTc2LS4zOTQtLjM5My0uMzk0eiIvPgogICAgPHBhdGggZmlsbD0iIzI3MzA2QSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNDg4IDEzLjk4M2MtLjQwNiAwLS44ODkuMDIzLTEuMzc2LjA3OS0uNTMtLjk3LTEuMjI5LTEuODA1LTIuMTEtMi40OGwtMi44MzQtMS45MjZjLS40NjktLjM2LTEuMjA3LS43ODgtMi4wNjQtLjc4OGgtMy4wNmMtLjc1NyAwLTEuNTAyLjI1OC0yLjA4NS43MTdsLTIuNzg1IDIuMDI5QzEuMjcgMTMuODk2LjM1MyAxNy44OTQgMS45OSAyMS4xMjNjLjU5NiAxLjE3NCAxLjU5IDIuNTkzIDIuOTUxIDIuNjg1LjEwNy4wMDcuMjE0LjAxMS4zMjMuMDExaDcuNjU2Yy41NzguNzE5IDEuNDYyIDEuMTggMi40NTMgMS4xOCAxLjE0IDAgMi4xMzgtLjYxMSAyLjY5LTEuNTIyLjcwNC4yMTkgMS41NjYuMzQyIDIuNDI1LjM0MiAxLjg5MiAwIDMuOTM0LS42MDEgMy45MzQtMS41NzN2LTIuMTY0aC0uMDNjLjAxOC0uMDY0LjAzLS4xMy4wMy0uMTk3VjE1LjM2YzAtMS4wODctMi40NzMtMS4zNzctMy45MzQtMS4zNzd6bTMuMTE4IDEuMzczbC0uMDA3LjAwNy0uMDIuMDE5Yy0uMDE1LjAxMi0uMDM0LjAyNS0uMDU1LjAzOC0uMDI1LjAxNy0uMDU3LjAzNC0uMDkxLjA1MmwtLjA5LjA0M2MtLjA0Mi4wMTgtLjA5LjAzNy0uMTQuMDU2LS4wNC4wMTUtLjA4MS4wMy0uMTI3LjA0NS0uMDU3LjAxOS0uMTIzLjAzOC0uMTkuMDU2bC0uMDMuMDA5Yy0uMDQyLjAxMi0uMDg0LjAyNC0uMTMuMDM1LS4wNzQuMDE4LS4xNTYuMDM1LS4yMzguMDUxbC0uMDA1LjAwMS0uMDUuMDFjLS4wNDYuMDEtLjA5Mi4wMi0uMTQyLjAyOS0uMDkuMDE2LS4xOTIuMDMtLjI5Mi4wNDNsLS4wMTIuMDAyLS4wNy4wMS0uMTQ0LjAyYy0uMTIzLjAxMy0uMjYuMDIzLS4zOTUuMDMzaC0uMDAybC0uMDgzLjAwNy0uMTIxLjAxYy0uMjE1LjAxMS0uNDQyLjAxOC0uNjg1LjAxOC0uMjQzIDAtLjQ3LS4wMDctLjY4NS0uMDE4bC0uMTM0LS4wMS0uMDctLjAwNy0uMDMzLS4wMDJjLS4xMjYtLjAxLS4yNS0uMDItLjM2NC0uMDMyLS4wNTEtLjAwNi0uMDk3LS4wMTItLjE0NC0uMDJsLS4wNy0uMDEtLjAxMi0uMDAxYy0uMS0uMDE0LS4yMDItLjAyNy0uMjkyLS4wNDNsLS4xNDItLjAyOC0uMDUtLjAxLS4wMzMtLjAwOGMtLjA3My0uMDE1LS4xNDUtLjAzLS4yMS0uMDQ1LS4wNTYtLjAxNC0uMTA2LS4wMjgtLjE1Ny0uMDQzaC0uMDA0Yy0uMDY2LS4wMi0uMTMyLS4wMzgtLjE5LS4wNTdsLS4xMTQtLjA0LS4wMTItLjAwNWMtLjA1LS4wMi0uMDk5LS4wMzgtLjE0LS4wNTZsLS4wOS0uMDQzYy0uMDM1LS4wMTgtLjA2Ni0uMDM1LS4wOTItLjA1Mi0uMDItLjAxMy0uMDQtLjAyNS0uMDU1LS4wMzhsLS4wMTgtLjAxNy0uMDA2LS4wMDcuMDA2LS4wMDUuMDA3LS4wMDdjLjAxNS0uMDEyLjAzNi0uMDI2LjA1Ni0uMDQuMDMyLS4wMi4wNzItLjA0Mi4xMTktLjA2Ni4wMjUtLjAxMy4wNS0uMDI1LjA4LS4wMzguMDI2LS4wMTIuMDU1LS4wMjMuMDg0LS4wMzRsLjAxOS0uMDA4Yy4wNDItLjAxNy4wODktLjAzMy4xMzgtLjA1bC4wMjktLjAxYy4wMjUtLjAwOC4wNTEtLjAxNy4wOC0uMDI1LjA4OC0uMDI3LjE4NC0uMDUzLjI5LS4wOGwuMTEzLS4wMjMuMDQ2LS4wMS4yLS4wNC4yNDItLjAzOWMuNDQzLS4wNjYuOTc0LS4xMTMgMS42MDctLjExMyAxLjg2IDAgMi45LjM4MyAzLjEyLjU4NnptLTUuOTA5IDMuMjc0bC0uMDkxLS4wMzdjLS4wNy0uMDMtLjEzNi0uMDYtLjItLjA5MmwtLjAzLS4wMTQtLjAzNS0uMDE2di4zNDVsLS4wMDEuNTguMDA4LjAwNy4wMDUuMDA1Yy4wNDIuMDM1LjA4Mi4wNzEuMTIyLjEwOGwuMDE2LjAxNS4wMzQuMDMuMDUuMDQ1Yy4wNTEuMDUxLjEuMTA1LjE0OS4xNmwuMDIzLjAyNi4wMjguMDNjLjA1NC4wNjUuMTA1LjEzMi4xNTQuMmwuMDExLjAxNS4wMDYuMDA3LjAwNS4wMDcuMDA0LjAwNWMuMDUzLjA3Ny4xMDIuMTU2LjE0OC4yMzdsLjAwOC4wMTJjLjY1NC4yMzMgMS41MS4zNjYgMi4zNzcuMzY2LjEyMSAwIC4yMzMtLjAwNC4zNDUtLjAwOGwuMDkzLS4wMDRjMS42MDQtLjA4IDIuNjIxLS41NzkgMi43MTMtLjgwMmwtLjAwMi0xLjM4Ny0uMDMzLjAxNS0uMDMuMDE0Yy0uMDY1LjAzMi0uMTMzLjA2NC0uMjAzLjA5NC0uMDM2LjAxNS0uMDcyLjAzLS4xMDkuMDQzLS4wNjguMDI3LS4xMzguMDUyLS4yMS4wNzdsLS4wMTUuMDA1LS4xMDEuMDMzYy0uMDgxLjAyNi0uMTY1LjA1LS4yNS4wNzJsLS4wMjguMDA4LS4wMTIuMDAzLS4wNTguMDE2Yy0uMTE4LjAzLS4yNC4wNTYtLjM2NC4wODFsLS4wNS4wMS0uMDM0LjAwNWMtLjEuMDE5LS4yLjAzNi0uMy4wNS0uMDQ2LjAwOC0uMDkxLjAxMy0uMTM3LjAyLS4wODcuMDExLS4xNzUuMDIyLS4yNjQuMDMtLjA0OC4wMDYtLjA5Ni4wMS0uMTQ1LjAxNS0uMDkyLjAwOC0uMTg0LjAxNC0uMjc3LjAybC0uMDUuMDAzLS4wNzcuMDA0Yy0uMTM0LjAwNi0uMjY5LjAxLS40MDIuMDEtLjEzNCAwLS4yNjgtLjAwNC0uNDAzLS4wMWwtLjA3NS0uMDA0LS4wNS0uMDAzYy0uMDk0LS4wMDYtLjE4Ny0uMDEyLS4yOC0uMDJsLS4xNDEtLjAxNGMtLjA5LS4wMS0uMTgtLjAyLS4yNjgtLjAzMmwtLjAzMi0uMDA0LS4xMDEtLjAxNGMtLjEwMy0uMDE1LS4yMDUtLjAzMy0uMzA1LS4wNTJsLS4wMzktLjAwNy0uMDQtLjAwN2MtLjEyNi0uMDI0LS4yNDctLjA1Mi0uMzY3LS4wODJsLS4wNTgtLjAxNS0uMDMzLS4wMWMtLjA4Ny0uMDIzLS4xNzMtLjA0Ny0uMjU2LS4wNzMtLjAzOS0uMDEyLS4wNzYtLjAyNC0uMTE0LS4wMzgtLjA3My0uMDI0LS4xNDMtLjA1LS4yMTEtLjA3NmwtLjAxOC0uMDA3em0tNS4yODkgNC40MDJINS4yNjRjLS4wOSAwLS4xODEtLjAwMy0uMjctLjAxLS43NzQtLjA1MS0xLjU5MS0uODUzLTIuMzAzLTIuMjU1LTEuNDY4LTIuODk1LS42NC02LjQ4NCAxLjk1Ny04LjUyNmwyLjc4NS0yLjAyOWMuNDU3LS4zNiAxLjAzLS41NTcgMS42MS0uNTU3aDMuMDZjLjYzNiAwIDEuMjEzLjM0IDEuNjA0LjYzOWwyLjgzNCAxLjkyNWMuNzAzLjU0IDEuMjkgMS4yIDEuNzQ4IDEuOTY4LS40OTguMTAyLS45OC4yNTktMS4zMS40ODlsLS4wMjcuMDE4Yy0uMDUuMDM3LS4wOTYuMDc1LS4xMzguMTE1bC0uMDQ5LjA1MXYuMDAxYy0uMDMxLjAzNC0uMDYxLjA2OS0uMDg2LjEwNi0uMDE3LjAyNi0uMDMxLjA1NC0uMDQ1LjA4M2wtLjAwNi4wMTItLjAxMi4wMjVjLS4wMS4wMi0uMDIuMDQxLS4wMjguMDYzLS4wMjEuMDY2LS4wMzUuMTM2LS4wMzUuMjF2My41NzZjLS4xMzMtLjA1NC0uMjctLjA5Ny0uNDEtLjEzM2wtLjAyLS4wMDUtLjAzNi0uMDA5Yy0uMTM4LS4wMzItLjI3OC0uMDU3LS40MjItLjA3bC0uMDI3LS4wMDEtLjAyMS0uMDAxYy0uMDgtLjAwNy0uMTYyLS4wMTItLjI0NC0uMDEyLS4wMjYgMC0uMDUxLjAwMS0uMDc3LjAwM2wtLjAyOC4wMDJoLS4wMjNsLS4xLjAwNmMtLjE0LjAxLS4yNzkuMDI2LS40MTMuMDU0aC0uMDAzbC0uMDA1LjAwMS0uMDE2LjAwNS0uMDE1LjAwNGMtLjEyNC4wMjgtLjI0NC4wNjMtLjM2LjEwNS0uMDQzLjAxNS0uMDg2LjAzLS4xMjcuMDQ2LS4xMTcuMDQ3LS4yMzEuMS0uMzQxLjE2LS4wMjguMDE1LS4wNTUuMDMxLS4wODEuMDQ4bC0uMDQuMDI0Yy0uMDc2LjA0Ny0uMTUuMDk2LS4yMjMuMTVsLS4wMjYuMDE4LS4xLjA3NmMtLjA5Mi4wNzUtLjE4LjE1NC0uMjY0LjI0LS4wMjguMDI4LS4wNTUuMDU4LS4wODEuMDg4bC0uMDI0LjAyN2MtLjA1OS4wNjYtLjExNS4xMzUtLjE2OC4yMDZsLS4wMzEuMDRjLS4wMTkuMDI0LS4wMzguMDQ5LS4wNTUuMDc0LS4wNy4xMDEtLjEzMS4yMDgtLjE4OC4zMTctLjAyLjAzOS0uMDQuMDc4LS4wNTguMTE4bC0uMDA1LjAxMWMtLjA0NS4wOTctLjA4NS4xOTUtLjEyLjI5NmwtLjAxMy4wMzYtLjAxOS4wNTJjLS4wNC4xMjktLjA3LjI2Mi0uMDkzLjM5OGwtLjAwNi4wMjQtLjAwNy4wMjctLjAwMy4wMzUtLjAwMi4wM2MtLjAxMy4wOTMtLjAyLjE4Ni0uMDI1LjI4MWwtLjAwMi4wMzdjLS4wMDIuMDIxLS4wMDMuMDQzLS4wMDMuMDY1bC0uMDAyLjAyMXYuMDIyYzAgLjA0NS4wMDIuMDg5LjAwNS4xMzNsLjAwNC4wNTJjLjAxNS4zNC4wNy42ODEuMTczLjk5NXptLjYwNi0xLjE1MmMuMDE1IDEuMjg4IDEuMDY3IDIuMzMyIDIuMzYgMi4zMzIuOTUyIDAgMS43NzMtLjU2OSAyLjE0Ny0xLjM4My4wMzMtLjA3NS4wNjMtLjE1LjA5LS4yMjZsLjAwMy0uMDFjLjAyNC0uMDczLjA0NC0uMTQ3LjA2MS0uMjIybC4wMDMtLjAxMS4wMDMtLjAxMmMuMDE1LS4wNy4wMjYtLjE0LjAzNS0uMjExbC4wMDItLjAxNmMuMDAxLS4wMDcuMDAzLS4wMTMuMDAzLS4wMi4wMDktLjA4My4wMTQtLjE2Ni4wMTQtLjI1IDAtLjA4LS4wMDUtLjE2MS0uMDEzLS4yNDJsLS4wMDItLjAxLS4wMDEtLjAwOWMtLjAwOC0uMDc0LS4wMi0uMTQ3LS4wMzQtLjIybC0uMDAyLS4wMDctLjAwMy0uMDFjLS4wMTUtLjA3Mi0uMDM0LS4xNDQtLjA1Ny0uMjE1di0uMDAzbC0uMDAzLS4wMDUtLjAwMi0uMDA4Yy0uMDIzLS4wNy0uMDUtLjE0LS4wOC0uMjA5LS4wMTctLjA0LS4wMzctLjA4LS4wNTctLjEyLS4wODctLjE3Mi0uMTk1LS4zMzMtLjMyLS40NzlsLS4wMTYtLjAxOGMtLjA1NC0uMDYxLS4xMTEtLjEyLS4xNzItLjE3NWwtLjAxLS4wMS0uMDMzLS4wM2MtLjA2LS4wNTItLjEyMi0uMTAyLS4xODgtLjE0OWwtLjAxOC0uMDEzLS4wMjEtLjAxNi0uMDE2LS4wMTFjLS4wOTctLjA2NS0uMi0uMTIxLS4zMDctLjE3Mi0uMTE1LS4wNTQtLjIzNC0uMS0uMzU0LS4xMzVoLS4wMDZjLS4xMTctLjAzNS0uMjM2LS4wNTktLjM1Ni0uMDczbC0uMDEyLS4wMDNoLS4wMDhjLS4xMTQtLjAxNC0uMjMtLjAxNy0uMzQ2LS4wMTRsLS4wNDkuMDAyLS4wMTYuMDAyYy0uMTE0LjAwNi0uMjI4LjAxOS0uMzQxLjA0MmwtLjAyLjAwNS0uMDA1LjAwMS0uMDEyLjAwM2MtLjA5Mi4wMi0uMTgxLjA0OC0uMjY4LjA3OWwtLjAwOC4wMDItLjA3LjAyNmMtLjA5OC4wNC0uMTk1LjA4My0uMjg3LjEzNmwtLjAwMi4wMDEtLjAwMi4wMDJjLS40MDYuMjMxLS43NC41ODMtLjk1MyAxbC0uMDEzLjAyNmMtLjA0Ni4wOTMtLjA4NS4xOS0uMTE4LjI4OGwtLjAwNS4wMTMtLjAwNy4wMThjLS4wMy4wOTgtLjA1NC4yLS4wNzEuMzAyLS4wMDcuMDM1LS4wMTIuMDcyLS4wMTcuMTA4LS4wMDQuMDM2LS4wMDkuMDcyLS4wMTEuMTA4LS4wMDQuMDQzLS4wMDYuMDg2LS4wMDcuMTI5bC0uMDAyLjA5MnptNy40NzQgMS4xNTJjLS43NDcgMC0xLjQ5LS4xLTIuMS0uMjc4di0uMDAyYy4wMzgtLjEyOC4wNjYtLjI1OS4wODgtLjM5M3YtLjAwNmMuMDA2LS4wMy4wMS0uMDYuMDE0LS4wOS4wMTgtLjEzNS4wMy0uMjcxLjAzLS40MTEgMC0uMTAyLS4wMDUtLjIwMy0uMDE1LS4zMDQtLjAwMi0uMDIzLS4wMDUtLjA0NS0uMDA5LS4wNjhsLS4wMDUtLjAzOS0uMDAzLS4wMmMwLS4wMS0uMDAyLS4wMTgtLjAwMy0uMDI3LS4wMDQtLjAzNS0uMDA4LS4wNy0uMDE1LS4xMDUuNTk3LjExIDEuMjkuMTcgMi4wMTguMTcuOTQgMCAyLjMtLjEyIDMuMTUtLjQ5NmwuMDAxIDEuMjU0Yy0uMS4yNDQtMS4yOTQuODE1LTMuMTUxLjgxNXptLTMuMTQ2LTUuNTA2Yy4xMDQuMjE4IDEuMjk2Ljc4NSAzLjE0Ni43ODUgMS44NTcgMCAzLjA1LS41NzIgMy4xNTItLjgxNmwtLjAwMy0xLjI1NC0uMDE3LjAwNi0uMDE4LjAwN2MtLjA5Mi4wNC0uMTkuMDc3LS4yOTIuMTFsLS4wMS4wMDQtLjAwNi4wMDJjLS4xMDkuMDM2LS4yMjQuMDY3LS4zNDEuMDk3bC0uMDczLjAxNy0uMDQyLjAxYy0uMDg1LjAxOS0uMTcuMDM3LS4yNTcuMDU0bC0uMDQuMDA4LS4wODcuMDE2Yy0uMDk1LjAxNy0uMTkuMDMyLS4yODguMDQ2bC0uMDQ2LjAwNy0uMDQ3LjAwNmMtLjEyNy4wMTgtLjI1NC4wMzItLjM4LjA0NWwtLjA2NS4wMDYtLjAyOS4wMDJjLS4wOTcuMDEtLjE5NC4wMTctLjI4OS4wMjNsLS4xMjMuMDA4LS4yNTguMDEyLS4wNTUuMDAyLS4wNTMuMDAyYy0uMTE1LjAwMy0uMjI4LjAwNS0uMzM0LjAwNS0uMTA2IDAtLjIxOC0uMDAyLS4zMzMtLjAwNWwtLjA1MS0uMDAyLS4wNTYtLjAwMi0uMjU5LS4wMTItLjEyMi0uMDA4Yy0uMDk1LS4wMDYtLjE5MS0uMDE0LS4yODgtLjAyMmwtLjAzLS4wMDMtLjA2NS0uMDA2Yy0uMTI3LS4wMTItLjI1NC0uMDI3LS4zOC0uMDQ0bC0uMDQ2LS4wMDctLjA0Ni0uMDA2Yy0uMDk4LS4wMTUtLjE5NC0uMDMtLjI5LS4wNDdsLS4xMjUtLjAyM2MtLjA4Ny0uMDE3LS4xNzItLjAzNS0uMjU2LS4wNTVsLS4xMTYtLjAyNmMtLjExNS0uMDI5LS4yMjgtLjA2LS4zMzUtLjA5NWwtLjAwOC0uMDAyLS4wMDktLjAwM2MtLjEwNS0uMDM1LS4yMDMtLjA3Mi0uMjk3LS4xMTNsLS4wMTUtLjAwNS0uMDE3LS4wMDd2MS4yODN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="},630:function(M,t,u){"use strict";u.r(t),u.d(t,"getUrlSlug",function(){return y});var L=u(10),j=u.n(L),e=u(0),n=u.n(e),i=u(1),I=u(244),N=u(109),A=u(365),D=u(588),g=u(614),r=u(263),c=u(11);function S(M,t,u,L,j,e,n){try{var i=M[e](n),I=i.value}catch(M){return void u(M)}i.done?t(I):Promise.resolve(I).then(L,j)}function a(M,t){return function(M){if(Array.isArray(M))return M}(M)||function(M,t){var u=[],L=!0,j=!1,e=void 0;try{for(var n,i=M[Symbol.iterator]();!(L=(n=i.next()).done)&&(u.push(n.value),!t||u.length!==t);L=!0);}catch(M){j=!0,e=M}finally{try{L||null==i.return||i.return()}finally{if(j)throw e}}return u}(M,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var o=i.b.div.withConfig({componentId:"sc-1sic87q-0"})(["display:flex;justify-content:center;font-size:10px;background:#f5f7f9;.rightContainer{margin-top:-1.5rem;}"]),y=function(M){return M.toLowerCase().split(" ").join("-")};t.default=Object(c.withRouter)(function(M){var t=M.router,u=a(Object(e.useState)(null),2),L=u[0],i=u[1],c=a(Object(e.useState)(!0),2),T=c[0],z=c[1],w=a(Object(e.useState)(!1),2),C=w[0],E=w[1],x=null,O=null,l=t.asPath.split("/");5===l.length&&(x=l[3],O=l[4]);var m=(s=j.a.mark(function M(){var t,u;return j.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return M.prev=0,M.next=3,Object(r.d)();case 3:(t=M.sent).data&&(u=t.data.insights,i(void 0===u?[]:u)),z(!1),M.next=12;break;case 8:M.prev=8,M.t0=M.catch(0),E(!0),z(!1);case 12:case"end":return M.stop()}},M,this,[[0,8]])}),d=function(){var M=this,t=arguments;return new Promise(function(u,L){var j=s.apply(M,t);function e(M){S(j,u,L,e,n,"next",M)}function n(M){S(j,u,L,e,n,"throw",M)}e(void 0)})},function(){return d.apply(this,arguments)});var s,d;return Object(e.useEffect)(function(){m()},[]),n.a.createElement(I.a,null,n.a.createElement(o,null,n.a.createElement(N.b,{title:"",panelConfig:A.a},n.a.createElement("div",{className:"rightContainer"},x&&O&&L&&n.a.createElement(D.b,{schemes:function(){try{return L.find(function(M){return y(M.key)===x}).values.find(function(M){return y(M.type)===O})}catch(M){}}(),title:O.split("-").join(" ").toUpperCase()}),!x&&!O&&n.a.createElement(g.a,{insights:L,inProgress:T,isDataRequestFailed:C})))))})},81:function(M,t,u){"use strict";u.d(t,"b",function(){return c}),u.d(t,"a",function(){return S}),u.d(t,"d",function(){return a}),u.d(t,"c",function(){return o});var L=u(0),j=u.n(L),e=u(1),n=u(46),i=u(3),I=u.n(i),N=u(4),A=u(22),D=u(15),g=u(2);function r(){var M=function(M,t){t||(t=M.slice(0));return Object.freeze(Object.defineProperties(M,{raw:{value:Object.freeze(t)}}))}(["\n    margin: 15px 10px;\n  "]);return r=function(){return M},M}var c=Object(e.b)(n.b).withConfig({componentId:"sc-177iclk-0"})(["height:100vh;height:calc(100vh - 200px);max-height:400px;align-items:center;justify-content:center;flex-direction:column;box-sizing:border-box;",""],g.a.MOBILE(r())),S=e.b.img.withConfig({componentId:"sc-177iclk-1"})(["height:92px;margin-bottom:20px;"]),a=e.b.div.withConfig({componentId:"sc-177iclk-2"})(["font-size:1.4em;color:",";font-weight:600;margin-bottom:10px;"],N.a.DARK_TEXT),o=e.b.div.withConfig({componentId:"sc-177iclk-3"})(["max-width:400px;font-size:1.2em;color:",";margin-bottom:25px;text-align:center;"],N.a.BATTLESHIP_GREY),y=Object(e.b)(A.e).withConfig({componentId:"sc-177iclk-4"})(["padding:0 5rem;height:40px;font-size:16px;"]);t.e=function(M){var t=M.imgSrc,u=M.text,L=M.subText,e=void 0===L?"The smartest thing to do with your money is to Invest!":L,n=M.ctaText,i=void 0===n?"Invest Now":n,N=M.ctaRoute,A=void 0===N?I.a.SEARCH:N,g=M.urlSlug,r=void 0===g?"":g;return j.a.createElement(c,null,j.a.createElement(S,{src:t,alt:"no-results"}),j.a.createElement(a,null,u),j.a.createElement(o,null,e),j.a.createElement(D.a,{href:{pathname:A.pathname},asPath:"".concat(A.url).concat(r)},j.a.createElement(y,null,i)))}}},[[1490,1,0]]]);ent services in equity, derivatives, commodities, currency and mutual funds etc. Sharekhan provides its services through its online as well as hundreds of outlets spread across India.</p>
<p>To avail of various services offered by the company, you need to open an account with the company. Sharekhan offers 4 types of accounts:</p>
<ol>
<li>Beginner First Step Account</li>
<li>Investor Classic</li>
<li>Active Trader Trade Tiger</li>
<li>HNI Advisory</li>
</ol>
<p>For <a href="/broker/sharekhan/mutual-fund/2/" title="Sharekhan Mutual Fund Review">Mutual Fund investing</a>, you need to open a separate account called 'Insta MF Account'.</p>
<p>In addition to the above-mentioned accounts, you also need to open a demat account and must have a savings account with any bank in India. The demat account will be linked to your trading and InstaMF account and all the securities bought through the accounts will be held in it.</p>
<p>Once you have opened the accounts then you're ready to trade through Sharekhan using various ways:</p>
<ul>
<li><a href="/broker/sharekhan/trading_software_review/2/" title="Sharekhan Trading Platform Review">Sharekhan.com Website</a></li>
<li><a href="/broker/sharekhan/mobile-app/2/" title="Sharekhan Mobile App Review">Sharekhan Mobile Trading App</a> for Android and iOS.</li>
<li><a href="/trading-platform/sharekhan-trade-tiger-tt/review/19/" title="Sharekhan Trade Tiger Review">Sharekhan Trade Tiger</a></li>
<li>Visit Sharekhan local office</li>
<li>Call &amp; Trade</li>
</ul>
<p>Sharekhan charges <a href="/brokerage_charges/sharekhan/2/" title="Sharekhan Brokerage Charges">brokerage</a> based on your trading plans. For every transaction, you will be charged brokerage, demat transaction fees, other fees and taxes.</p>
<div style="float: right;"><a href="/faq_pg/how-sharekhan-works/2072/" title="How Sharekhan works?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_2073" data-bs-toggle="collapse">2. Why to choose Sharekhan?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_2073" class="collapse">
<p>Sharekhan is among the popular full-service stockbrokers. Different type of investors chooses Sharekhan for different reasons.</p>
<ol>
<li><b>Beginners</b>
<p>If you are new to the stock market, Sharekhan could be the best option for you as they offer training, hand-holdings, tips, and local support through personal relationship manager (RM). They also have a do-it-yourself online trading platform which makes investment extremely easy.</p></li>
<li><b>Active Traders</b>
<p>If you are an active trader who is trading in high volume or multiple times a day, Sharekhan prepaid brokerage plans work well for it. They reduce brokerage significantly and offer you a range of add-ons like an excellent trading platform, RM, research, tips, local support and PMS.</p></li>
<li><b>Aged traders</b>
<p>If you are not technology savvy and do not feel comfortable in online trading and investment, Sharekhan is the right choice for you. It offers support from neighborhood branch offices, RM for in-person services and free call &amp; trade services. A simple example is, you can call you RM and ask him to pick up your cheque for adding funds to your trading account.</p></li>
</ol>
<div style="float: right;"><a href="/faq_pg/why-to-choose-sharekhan/2073/" title="Why to choose Sharekhan?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_2074" data-bs-toggle="collapse">3. Is Sharekhan good?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_2074" class="collapse">
<p>Sharekhan is among 100's of stockbrokers who offer trading and investment services to retail investors in India. Each of these brokers has something good about them. There produce and services are suitable for a certain type of investors.</p>
<p><b>Sharekhan is good for customer types</b></p>
<ul>
<li><b>Beginners</b> - As they offer training, hand-holdings, tips, and local support through personal relationship manager (RM).</li>
<li><b>Active Traders</b> - Who trade in high volumes as its prepaid brokerage plans suit them. They also offer an excellent trading platform and RM.</li>
<li><b>Aged traders</b> - Who are not comfortable trading online. It has a free dial n trade service wherein you can place your orders on the phone.</li>
</ul>
<p><b>Sharekhan is good for</b></p>
<ul>
<li>A full-service broker that offers complete trading services including research and depository services.</li>
<li>Offers multiple investment products under one-roof</li>
<li>Offers both prepaid and postpaid brokerage plans</li>
<li>Customers get local support from neighborhood branches.</li>
<li>Relationship Manager (RM) is assigned to every customer.</li>
<li>Industry experience of over 2 decades</li>
<li>Strong brand name.</li>
<li>Excellent training programs for beginners as well as traders</li>
<li>Offers online trading through the website and mobile app.</li>
</ul>
<div style="float: right;"><a href="/faq_pg/is-sharekhan-good/2074/" title="Is Sharekhan good?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_2075" data-bs-toggle="collapse">4. How to open trading account in Sharekhan?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_2075" class="collapse">
<p>Sharekhan Trading Accounts enables you to trade or invest in India Stock Market. You could open a Sharekhan account in 2 ways:</p>
<ol>
<li><b>Request a Call Back</b>
<p><a href title="Open Sharekhan Instant Account Online"><mark>Click here</mark></a> to fill a callback request form. You will receive a call from Sharekhan. The customer representative will answer all your questions and help you with account opening. If needed he will arrange an in-person visit by Sharekhan representative to your home or office.</p></li>
<li><b>Visit Local Branch Office</b>
<p>Sharekhan has a network of 100's of branch offices. You could visit any one of them to get your account opened. Follow the below steps:</p>
<ul>
<li>Go to https://stockbroker-branch.sharekhan.com/</li>
<li>Enter state, city and locality</li>
<li>Click on the Sharekhan icon nearest to your location and get details on branch office/sub-broker</li>
<li>Call them and express interest to open an account</li>
<li>A representative will visit you to complete the formalities.</li>
</ul>
</li>
</ol>
<div style="float: right;"><a href="/faq_pg/how-to-open-trading-account-in-sharekhan/2075/" title="How to open trading account in Sharekhan?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_2076" data-bs-toggle="collapse">5. How much Sharekhan charges?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_2076" class="collapse">
<p>Sharekhan charges include a variety of fees and taxes. Major fees and taxes charged by Sharekhan include-</p>
<ul>
<li>Account Opening Fees (One time): Rs 0 (Free)</li>
<li>Demat Account AMC (Annual ): Rs 400 (free 1st year)</li>
<li>Brokerage Charges: As per plan and transaction value</li>
<li>Taxes charged by State and Central Governments</li>
</ul>
<p>Sharekhan offers 2 brokerage plans; Classic and Prepaid. The brokerage for Classic plans is 0.50% for equity delivery and o.10% for equity intraday. For Prepaid plans, it charges different subscription fees. The brokerage fee varies by the subscription fee you pay.</p>
<p>Visit <a href="/stockbroker/sharekhan/2/" title="Sharekhan Review">Sharekhan Review</a> page for a detailed brokerage structure.</p>
<div style="float: right;"><a href="/faq_pg/how-much-sharekhan-charges/2076/" title="How much Sharekhan charges?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_2077" data-bs-toggle="collapse">6. How is Sharekhan review?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_2077" class="collapse">
<p>Sharekhan is a popular full-service broker. It offers a number of products, trading software and add-ons which are designed for a wide range of customers including beginners, active traders and customers who are not tech-savvy.</p>
<p>Sharekhan is famous for its <b>in-person services</b> through a network of branches in over 700 cities across India. Every customer has a Relationship Manager (RM) allocated to him which works as customer support, trainer and personal advisor.</p>
<p>Sharekhan also has an <b>excellent online trading platform</b> for customers who would like to trade by themselves. Sharekhan Mobile App is a powerful trading tool used by most of its customers.</p>
<p><b>Sharekhan investor training programs</b> are among the best in the industry. They offer multiple online and classroom training programs to bring you up to speed.</p>
<p>Sharekhan has a <b>dedicated research team</b>. They provide trading tips, research, recommendations, technical and fundamental analysis.</p>
<p><b>Sharekhan brokerage charges</b> are very high in comparison to discount brokers like <a href="/stockbroker/zerodha/18/">Zerodha</a>. But Sharekhan prepaid plans for high-frequency trader reduces brokerage changes. In addition, you get free call &amp; trade and support from local offices near you.</p>
<p>Read <a href="/stockbroker/sharekhan/2/" title="Sharekhan Review">Sharekhan Review</a> for more detail.</p>
<div style="float: right;"><a href="/faq_pg/how-is-sharekhan-review/2077/" title="How is Sharekhan review?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_2078" data-bs-toggle="collapse">7. What is Sharekhan DP ID?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_2078" class="collapse">
<p>Sharekhan is a depository participant (DP) with both NSDL and CDSL depositories. You choose one of the depositories at the time of account opening. Your Sharekhan DP ID depends on which depository you have the account with.</p>
<p>Sharekhan DP Ids for NSDL and CDSL are:</p>
<ul>
<li>NSDL DP ID: IN300513</li>
<li>CDSL ID: 12036000</li>
</ul>
<div style="float: right;"><a href="/faq_pg/what-is-sharekhan-dp-id/2078/" title="What is Sharekhan DP ID?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_2079" data-bs-toggle="collapse">8. How to buy IPO in Sharekhan app?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_2079" class="collapse">
<p>Sharekhan customers can buy IPO in the Sharekhan app or using the Sharekhan website at any time when the IPO is open for retail investors.</p>
<p>Sharekhan IPO app uses <a href="/article/upi-payment-option-ipo-application-explained/382/" title="IPO UPI Payment Mechanism">UPI Payment Mechanism</a>. You are required to have a UPI id before applying in an IPO using Sharekhan App. It's easy to get a UPI ID created using the net banking app of any bank you have an account with or by using the BHIM UPI app provided by the government of India.</p>
<p><b>Steps to Buy IPO in Sharekhan App</b></p>
<ol>
<li>Login to Sharekhan App on your phone</li>
<li>Expend menu in top right</li>
<li>Click on the 'IPO' link under the 'Equity' section.</li>
<li>Choose the IPO and click the 'Apply' button.</li>
<li>Fill the order for by entering the quantity, price and UPI ID.</li>
<li>Submit the order form and confirm the order.</li>
<li>Accept the UPI Mandate using Net Banking or BHIM app.</li>
</ol>
<p>Note:</p>
<ul>
<li>The UPI Mandate (an approval for blocking the fund for IPO shares) is not sent instantly. You may have to wait for a few hours before the Mandate is shown up in your Net Banking App or BHIM App.</li>
</ul>
<p>One the UPI Mandate is accepted, the IPO application is submitted to the exchange by Sharekhan. An SMS and Email confirmation is sent to the customer.</p>
<div style="float: right;"><a href="/faq_pg/how-to-buy-ipo-in-sharekhan-app/2079/" title="How to buy IPO in Sharekhan app?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_2080" data-bs-toggle="collapse">9. How to Cancel SIP in Sharekhan?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_2080" class="collapse">
<p>You could cancel your SIP in Sharekhan online at any point time. You could also visit the Sharekhan branch and submit a request for SIP cancellation. The online SIP Cancellation request is an easy option.</p>
<p><b>Steps to Cancel SIP in Sharekhan Online</b></p>
<ol>
<li>Login to Sharekhan.com website or Mobile App</li>
<li>Go to the Mutual Funds section</li>
<li>Click on the View SIP to get a list of all your existing SIPs</li>
<li>Select and cancel the desired one</li>
</ol>
<p>Note: You do not get the funds in your bank account when you cancel SIP. It just means that future investments will stop. Your existing investments remain in the Mutual Funds. To get the funds, you need to redeem the mutual fund units.</p>
<div style="float: right;"><a href="/faq_pg/how-to-cancel-sip-in-sharekhan/2080/" title="How to Cancel SIP in Sharekhan?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_3428" data-bs-toggle="collapse">10. How to close the Sharekhan account?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_3428" class="collapse">
<p>Sharekhan account can be closed by submitting an account closure form to the broker. Note that you have to submit a signed paper form to close the account. Sharekhan's account cannot be close online, by email, or by phone.</p>
<p><strong>Steps for closing Sharekhan account:</strong></p>
<ol>
<li>Download the <a href="https://www.sharekhan.com/DP/Downloads/AccountClosingNSDL.pdf" target="_blank" rel="nofollow" title="Sharekhan account closure form">account closure form</a>.</li>
<li>Fill the account closure form with the required details like name, Trading ID, DP ID, the reason for the closure, and sign it.</li>
<li>Attach the blank and unused Delivery Instruction Slips (DIS), if any.</li>
<li>Courier the duly filled and signed form to the address mentioned in the closure form or submit it to the nearest office.</li>
</ol>
<p>Please make sure to clear all the outstanding dues and sell or transfer securities in your account before submitting an account closure request.</p>
<div style="float: right;"><a href="/faq_pg/how-to-close-the-sharekhan-account/3428/" title="How to close the Sharekhan account?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_4240" data-bs-toggle="collapse">11. Is Sharekhan CDSL or NSDL?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_4240" class="collapse">
<p>Sharekhan is registered with both CDSL and NSDL. Thus, customers can keep their demat accounts with either depository.</p>
<p>The Sharekhan DP IDs are:</p>
<ul>
<li>NSDL DP ID: IN300513</li>
<li>CDSL ID: 12036000</li>
</ul>
<div style="float: right;"><a href="/faq_pg/is-sharekhan-cdsl-or-nsdl/4240/" title="Is Sharekhan CDSL or NSDL?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_4248" data-bs-toggle="collapse">12. Who can use Sharekhan?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_4248" class="collapse">
<p>Anyone who wants to invest and trade in securities can open a Demat account and participate in the stock market. Individual investors, joint investors, companies or NRIs, all are eligible to open a demat account and trade in securities.</p>
<p>Sharekhan offers a variety of accounts for investors to choose from and start their journey. These accounts include Beginner First Step, Investor Classic, Active Trader Trade Tiger and HNI Advisory.</p>
<p>Sharekhan also offers facilities like Minor Demat Accounts and Multiple Demat Accounts that make it easier for its clients to hold securities and participate in the financial market.</p>
<div style="float: right;"><a href="/faq_pg/who-can-use-sharekhan/4248/" title="Who can use Sharekhan?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_4249" data-bs-toggle="collapse">13. How can I get Sharekhan statement?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_4249" class="collapse">
<p>Sharekhan offers its clients the possibility to access and download the profit and loss report online, which contains all the essential information useful for the calculation of taxes on trading income. This profit and loss report contains information such as date, quantity, time, script name, buy price, sell price, segment, etc.</p>
<p>To download this report, do the following:</p>
<ol>
<li>Access the Sharekhan portal and log in with your credentials.</li>
<li>Search for "Scrip Summary" You can search using the search bar. The details can also be sorted by different segments.</li>
<li>On the dashboard, you will now find the scrip summary.&nbsp;</li>
<li>You can download this summary to your system and access it anytime.</li>
</ol>
<div style="float: right;"><a href="/faq_pg/how-can-i-get-sharekhan-statement/4249/" title="How can I get Sharekhan statement?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_4250" data-bs-toggle="collapse">14. How to get a Sharekhan login id?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_4250" class="collapse">
<p>The login ID is a personal identifier used to access accounts and information. The login ID can be specified in the form of letters or numbers or even a combination of letters and numbers.</p>
<p>When opening a new account with Sharekhan, customers receive a welcome package that contains their credentials such as login ID and password, as well as other important and necessary information.</p>
<p>In other cases, the following steps can be used to obtain Login ID for accessing Sharekhan account:</p>
<ol>
<li>Open Sharekhan website on the browser.</li>
<li>Go to the login section from top right option.</li>
<li>Now select "Forget ID" to proceed with the process.</li>
<li>Enter your mobile number or email, as you prefer to get your ID through.</li>
<li>Validate the captcha sent on your number or mail.</li>
<li>Click on "Submit".</li>
</ol>
<div style="float: right;"><a href="/faq_pg/how-to-get-a-sharekhan-login-id/4250/" title="How to get a Sharekhan login id?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_4251" data-bs-toggle="collapse">15. How to reactivate Sharekhan account?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_4251" class="collapse">
<p>In many cases, when trading account holders do not actively use their account and trade with it, their account is converted into a dormant account. This also happens with Sharekhan accounts.</p>
<p>However, this does not mean that you can no longer use the account. You can request reactivation and have your account activated.</p>
<p>The account reactivation process may require you to submit KYC (Know Your Customer) documents.</p>
<p>You will also be required to pay a reactivation fee for reactivation.</p>
<div style="float: right;"><a href="/faq_pg/how-to-reactivate-sharekhan-account/4251/" title="How to reactivate Sharekhan account?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
<li class="list-group-item">
<div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question">
<h3 itemprop="name"><a href="#faq_4252" data-bs-toggle="collapse">16. How to operate Sharekhan account?</a></h3>
<div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<div itemprop="text" id="faq_4252" class="collapse">
<p>Sharekhan account is easy to use. You can use your desktop or even your cell phone to access your account. In other cases, there are also methods to access the account and place trades.</p>
<p>To operate the Sharekhan account through the website, go to the Sharekhan trading portal.</p>
<p>To operate the Sharekhan account via cell phone, download the mobile application from the Google Playstore or App Store.</p>
<p>You can also use the call-and-trade feature to place trades via call.</p>
<p>Sharekhan has numerous franchises across India. You can also visit the nearest branch or office to help you trade.</p>
<div style="float: right;"><a href="/faq_pg/how-to-operate-sharekhan-account/4252/" title="How to operate Sharekhan account?"><small>Discuss this question</small></a></div><p>&nbsp;</p>
</div>
</div>
</div>
</li>
</ol>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<hr>
<h2>Sharekhan Reviews</h2>
<ul>

<li><a href="https://www.chittorgarh.com/brokerage_charges/sharekhan/2/" title="Sharekhan Brokerage Charges, Fees, AMC, Transaction Charges">Sharekhan Charges Review</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/mobile-app/2/" title="Sharekhan Mobile App">Sharekhan Mobile App Review</a></li>

<li><a href="https://www.chittorgarh.com/broker/sharekhan/account-opening/2/" title="Sharekhan Account Opening">Sharekhan Account Opening Process Review</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/demat-account/2/" title="Sharekhan Demat Account Charges / Review / Opening">Sharekhan Demat Account Review</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/ipo/2/" title="Sharekhan IPO">Apply in IPO through Sharekhan</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/branches/2/" title="Sharekhan Branches">Sharekhan Branch Offices / Sub Brokers / Franchise</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/trading_software_review/2/" title="Sharekhan Trading Software Review"> Sharekhan Trading Software Review</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/nri-account-review/2/" title="Sharekhan NRI Trading Account Review">Sharekhan NRI Account Review</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/mutual-fund/2/" title="Sharekhan Mutual Fund Review">Sharekhan Mutual Fund Review</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/is-safe-or-not/2/" title="Is Sharekhan safe for trading and long term investment?">Is Sharekhan safe for trading and long term investment?</a></li>
<li><a href="https://www.chittorgarh.com/broker/sharekhan/api-for-algo-trading-review/2/" title="Sharekhan API Review (Algo Trading)">Sharekhan API Review (Algo Trading)</a></li>
<li><a href="https://www.chittorgarh.com/broker_complaints/sharekhan_ltd/1469/" title="Complaint against Sharekhan">Sharekhan Complaint Monitor</a></li>
<li><a href="https://www.chittorgarh.com/broker_faqs/sharekhan/2/" title="Frequently Asked Questions about Sharekhan">Sharekhan FAQs</a></li>

</ul>
<ul>
<li><a href title="Open an Online Trading Account" style="background-color:#FFFFCC"><b>Contact Sharekhan</b></a> for trading & demat account.</li>
<li><a href="/article/sharekhan-review-options-trading-platform/284/" target="_blank">Sharekhan Options Trading Review</a></li>
</ul>
</div>
</div>
<div class="row">
<div class="col-12" itemscope itemtype="https://schema.org/Table">
<h2 itemprop="about">Compare Sharekhan with Top Brokers in India</h2>
<table class="table table-bordered">
<tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-zerodha/2/18/" title="Sharekhan Vs Zerodha" style="text-decoration:none;">Sharekhan Vs Zerodha</a></td><td><a href="https://www.chittorgarh.com/comparebroker/icicidirect-vs-sharekhan/1/2/" title="Sharekhan Vs ICICIdirect" style="text-decoration:none;">Sharekhan Vs ICICIdirect</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-hdfc-securities/2/6/" title="Sharekhan Vs HDFC Securities" style="text-decoration:none;">Sharekhan Vs HDFC Securities</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-axisdirect/2/35/" title="Sharekhan Vs AxisDirect" style="text-decoration:none;">Sharekhan Vs AxisDirect</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-angel-broking/2/14/" title="Sharekhan Vs Angel One" style="text-decoration:none;">Sharekhan Vs Angel One</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-kotak-securities/2/12/" title="Sharekhan Vs Kotak Securities" style="text-decoration:none;">Sharekhan Vs Kotak Securities</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-motilal-oswal/2/5/" title="Sharekhan Vs Motilal Oswal" style="text-decoration:none;">Sharekhan Vs Motilal Oswal</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-stoxkart/2/171/" title="Sharekhan Vs Stoxkart" style="text-decoration:none;">Sharekhan Vs Stoxkart</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-groww/2/173/" title="Sharekhan Vs Groww" style="text-decoration:none;">Sharekhan Vs Groww</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-india-infoline-iifl/2/15/" title="Sharekhan Vs IIFL Securities" style="text-decoration:none;">Sharekhan Vs IIFL Securities</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-sbi-capital/2/19/" title="Sharekhan Vs SBI Securities" style="text-decoration:none;">Sharekhan Vs SBI Securities</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-geojit/2/10/" title="Sharekhan Vs Geojit" style="text-decoration:none;">Sharekhan Vs Geojit</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-edelweiss_broking/2/34/" title="Sharekhan Vs Nuvama (Edelweiss)" style="text-decoration:none;">Sharekhan Vs Nuvama (Edelweiss)</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-espresso-sharekhan/2/7/" title="Sharekhan Vs Espresso Sharekhan" style="text-decoration:none;">Sharekhan Vs Espresso Sharekhan</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-5paisa/2/4/" title="Sharekhan Vs 5paisa" style="text-decoration:none;">Sharekhan Vs 5paisa</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-upstox/2/33/" title="Sharekhan Vs Upstox" style="text-decoration:none;">Sharekhan Vs Upstox</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-anand_rathi_broker/2/31/" title="Sharekhan Vs Anand Rathi" style="text-decoration:none;">Sharekhan Vs Anand Rathi</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-aditya-birla-money/2/16/" title="Sharekhan Vs Aditya Birla Money" style="text-decoration:none;">Sharekhan Vs Aditya Birla Money</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-samco/2/138/" title="Sharekhan Vs SAMCO" style="text-decoration:none;">Sharekhan Vs SAMCO</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-tradingo/2/169/" title="Sharekhan Vs Tradingo" style="text-decoration:none;">Sharekhan Vs Tradingo</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-idbicapital/2/8/" title="Sharekhan Vs IDBI Capital" style="text-decoration:none;">Sharekhan Vs IDBI Capital</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-smart_trade_online/2/24/" title="Sharekhan Vs TradeSmart" style="text-decoration:none;">Sharekhan Vs TradeSmart</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-sasonline/2/25/" title="Sharekhan Vs SAS Online" style="text-decoration:none;">Sharekhan Vs SAS Online</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-tradeplus/2/170/" title="Sharekhan Vs Tradeplus" style="text-decoration:none;">Sharekhan Vs Tradeplus</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-aliceblue/2/43/" title="Sharekhan Vs Alice Blue" style="text-decoration:none;">Sharekhan Vs Alice Blue</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-fyers_securities/2/32/" title="Sharekhan Vs Fyers" style="text-decoration:none;">Sharekhan Vs Fyers</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-prostocks/2/38/" title="Sharekhan Vs Prostocks" style="text-decoration:none;">Sharekhan Vs Prostocks</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-rmoney/2/41/" title="Sharekhan Vs RMoney" style="text-decoration:none;">Sharekhan Vs RMoney</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-bajaj-finserv/2/17/" title="Sharekhan Vs Bajaj Financial" style="text-decoration:none;">Sharekhan Vs Bajaj Financial</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-yes-securities/2/45/" title="Sharekhan Vs Yes Securities" style="text-decoration:none;">Sharekhan Vs Yes Securities</a></td></tr><tr><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-paytm-money/2/175/" title="Sharekhan Vs Paytm Money" style="text-decoration:none;">Sharekhan Vs Paytm Money</a></td><td><a href="https://www.chittorgarh.com/comparebroker/sharekhan-vs-dhan/2/176/" title="Sharekhan Vs Dhan" style="text-decoration:none;">Sharekhan Vs Dhan</a></td></tr>
</table>
</div>
</div>
<div class="row">
<div class="col-12">
<p></p>

<div itemscope itemtype="https://schema.org/BrokerageAccount">
<meta itemprop="name" content="Sharekhan Brokerage Account">
<meta itemprop="broker" content="Sharekhan">
<meta itemprop="description" content="Trading and Demat Account for investing in everything from stocks and bonds to mutual funds, ETFs, Commodities, Currency and more. Take advantage of all research and tools, expert insight, and investment guidance to support your investing decisions.">
<meta itemprop="feesAndCommissionsSpecification" content>
<meta itemprop="logo" content="https://www.chittorgarh.com/images/ipo/sharekhan-logo.jpg">
<meta itemprop="feesAndCommissionsSpecification" content="Rs 0 (Free) account opening fee. Commissions: 0.30% on market rate or minimum 1 paisa per share equity trade delivery trades.">
</div>
<div itemscope itemtype="https://schema.org/Review">
<meta itemprop="name" content="Sharekhan Stock Trading, Demat, Brokerage and Review 2024" />
<meta itemprop="headline" content="Sharekhan Stock Trading, Demat, Broker Account Review" />
<meta itemprop="url" content="https://www.chittorgarh.com/stockbroker/sharekhan/2/" />
<meta itemprop="datePublished" content="Monday, February 4, 2019" />
<meta itemprop="dateModified" content="Friday, February 9, 2024" />
<meta itemprop="image" content="https://www.chittorgarh.com/images/ipo/sharekhan-logo.jpg" />
<meta itemprop="description" content="The review about Sharekhan Stock Broker Trading Account." />
<div itemprop="author" itemscope itemtype="https://schema.org/Person">
<meta itemprop="name" content="Chittorgarh.com Team" />
</div>
<div itemprop="itemReviewed" itemscope itemtype="https://schema.org/Product">
<meta itemprop="name" content="Sharekhan" />
<meta itemprop="description" content="Sharekhan offers online trading and investment in stock and commodity exchanges in India (BSE, NSE, and MCX). Buy and sell equity shares, trade in future and options of equity, currency, and commodities." />
<meta itemprop="image" content="https://www.chittorgarh.com/images/ipo/sharekhan-logo.jpg" />
<meta itemprop="sku" content="NULL" />
<meta itemprop="mpn" content="NULL" />
<div itemprop="brand" itemtype="http://schema.org/Thing" itemscope>
<meta itemprop="name" content="Sharekhan" />
</div>
<div itemprop="offers" itemtype="http://schema.org/Offer" itemscope>
<link itemprop="url" href="https://www.chittorgarh.com/stockbroker/sharekhan/2/" />
<meta itemprop="availability" content="https://schema.org/InStock" />
<meta itemprop="priceCurrency" content="INR" />
<meta itemprop="description" content="Sharekhan offers 0 account opening fee.">
<meta itemprop="price" content="0" />
<meta itemprop="priceValidUntil" content="2025-12-31" />
</div>
<div itemprop="aggregateRating" itemtype="http://schema.org/AggregateRating" itemscope>
<meta itemprop="reviewCount" content="312" />
<meta itemprop="ratingValue" content="3.29" />
</div>
<div itemprop="review" itemtype="http://schema.org/Review" itemscope>
<div itemprop="author" itemtype="http://schema.org/Person" itemscope>
<meta itemprop="name" content="Chittorgarh.com Team" />
</div>
<div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
<meta itemprop="worstRating" content="0" />
<meta itemprop="bestRating" content="5" />
<meta itemprop="ratingValue" content="3.29" />
</div>
</div>
</div>
</div>

</div>
</div>
<div class="row"><div class="col-12 px-0"><div style="background-color:#ffffec; margin:10px;border:1px solid #cc0000;padding:10px;"><p><b>Zerodha (Trade with the best stock broker)</b></p><p><span style="color:#cc0000"><b><i class="fa fa-gift"></i> Special Offer</b></span> - Invest <b>brokerage-free Equity Delivery and Direct Mutual Funds</b> (truly no brokerage). Pay flat Rs 20 per trade for Intra-day and F&O. <a href="https://tinyurl.com/broker-zerodha-homepage" title="Zerodha - Open Instant Online Account" class="btn btn-danger btn-xs" style="color:#fff;text-decoration:none;" target="_blank">Open Instant Account</a> and start trading today.</p></div></div></div>
<span id="feedback"></span>
<hr>
<div class="row" id="AjaxFeedback" style="display:none;">
<div class="col-md-12">
<div style="text-align: center;"><img src="https://www.chittorgarh.com/images/loading.gif" height="50" width="50" alt="Loading..."></div>
</div>
</div>
<div id="StaticFeedback">
<div class="row mb-2">
<div class="col-md-12">
<h2>600 Comments</h2>
<button type="button" class="btn float-end btn-primary btn-xs" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?t=16&a=2&b=0')" title="Post New Message">Post New Message</button>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>600.&nbsp;Prashant Gupta</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_61332"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','61332');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','61332');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=61332&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>January 11, 2024 6:16:40 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=61332&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Sharekhan is a FRAUD company.. There are many more much better options available in the market except sharekhan.. They change (increase) your brokerage without informing you and there is no solution provide by them even after sending escalation to CEO level..Let me share my case here.<br>I'm trader in stocks and some time I use to do option trading. I did option trading in sharekhan in July 23 when my brokerage was zero in FnO and when I did option trading last week on 5th Jan. They charge me 50/- per lot brokerage. They changed it without informing me and now when I escalate it to CEO level, nobody is bothering to give serious response. Infact they refused to return that brokerage amount.. <br><br>BEWARE of this FRAUD company.
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>599.&nbsp;Chirag</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_61184"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','61184');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','61184');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=61184&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>January 4, 2024 9:14:25 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=61184&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Good experience <br><br> Ratings:<br><br> Brokerage - Excellent<br> Account Maintenance Fees - Excellent<br> Website Usability - Excellent<br> Research Capabilities - Excellent<br> Customer Service - Excellent<br> Overall Experience - Excellent<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>598.&nbsp;arty R</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_60091"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','60091');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','60091');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=60091&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>November 23, 2023 7:55:01 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=60091&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Brokerage is high on unsuspecting customers<br><br> Ratings:<br><br> Brokerage - Below Average<br> Account Maintenance Fees - Below Average<br> Website Usability - Above Average<br> Research Capabilities - Average<br> Customer Service - Below Average<br> Overall Experience - Average<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>597.&nbsp;leonard eric</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_59996"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','59996');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','59996');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=59996&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>November 19, 2023 5:27:22 AM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=59996&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
I have finally recovered all the lost crypto which i made to some fake crypto trading company with the help of Jeff Silbert a financial recovery expert. After months of waiting for this company to accept my withdrawal request which they denied, They locked my account and stopped responding to my mails. he helped me to recover all my money from them. She trusted and honest All thanks to Jeff and you can contact him via em ail on jeffsilbert 39 g mail Com or whatapp + 1 (470 ) 469-9769<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>596.&nbsp;Khan</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_59948"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','59948');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','59948');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=59948&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>November 15, 2023 12:40:28 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=59948&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Wasn’t a good experience for me, it was difficult getting my money out, the customer service did not help, when I tried withdrawing, it didn’t get approved and had to reach the r!ght author!ty and get my m0n£y b@ck from Sharekhan. apexchargeback was able to retrieve the funds back.
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>595.&nbsp;Achal Sharma</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_59725"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','59725');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','59725');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=59725&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>October 25, 2023 8:52:29 AM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=59725&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
I like user friendly website and customer service <br><br> Ratings:<br><br> Brokerage - Average<br> Account Maintenance Fees - Average<br> Website Usability - Excellent<br> Research Capabilities - Average<br> Customer Service - Above Average<br> Overall Experience - Average<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>594.&nbsp;VIKRAM KARNAVAT</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_59445"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','59445');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','59445');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=59445&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>October 9, 2023 12:55:46 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=59445&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
EXCELLENT IN CHARTING PLATFORM<br><br> Ratings:<br><br> Brokerage - Excellent<br> Account Maintenance Fees - Excellent<br> Website Usability - Excellent<br> Research Capabilities - Excellent<br> Customer Service - Excellent<br> Overall Experience - Excellent<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>593.&nbsp;Mudassar</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_59095"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','59095');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','59095');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=59095&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>September 20, 2023 4:43:08 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=59095&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
View today's live Inter Bank rates, Open Market rates and International forex market rates online.
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>592.&nbsp;Sheik</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_58355"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','58355');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','58355');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=58355&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>August 9, 2023 9:14:13 AM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=58355&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
An application for account closure of my DEMAT Account with Sharekhan has been submitted two weeks before.They rejected my application due to signature mismatch and my account's balance Rs.5/- which I am unable to withdraw. This clearly shows Sharekhan's unwillingness to close my account. They have no reason to reject.I tried customer care several times but not received even a single answer. I am going to approach SEBI in this respect.<br>I recommend you do copy trading or buy investment plans on benarmstrong-trades if you want to earn, since I move my investments back to BenArmstrong trades I am getting 10k weekly
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>591.&nbsp;sherkhan ne bahut pasa dubaye</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_58111"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','58111');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','58111');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=58111&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>July 24, 2023 6:56:11 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=58111&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
PAISA DUBANE KI MASIN<br>SHEREKHAN<br><br>Customar ke profite se matlab nhi <br>bas ony uski brokreg se matlab hai
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>590.&nbsp;Bhadresh Patel</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_57638"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','57638');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','57638');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=57638&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>June 30, 2023 12:06:40 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=57638&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
After inviting and calling for the Seminar, they are not allowed to sit in the Seminar,Thus it wastes the time of customers,<br>Yesterday there was a Seminar in Vasana on date 29-06-2023 where i went from 25 kms away. I was told that you are late, so you can't come in the Seminar .
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>589.&nbsp;bruce david</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_55484"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','55484');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','55484');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=55484&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>December 13, 2022 12:38:20 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=55484&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
I WAS AVICTIM TO THESE ONLINE CRYPTO SCAM AND I LOST LOT TO THEM LEAVING ME WITH NOTHING. I WAS SO MAD AT MYSELF BUT I DECIDED TO REPORT TO LFrescue 0rG THIS COMPANY HELPED ME RECOVER MY FUNDS WITH JUST LITTLE EFFORTN
</div>
</div>
</div>
</div>
<div class="row comment">
<div class="col-1"></div>

<div class="col-11">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>589.1.&nbsp;Neha</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_57583"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','57583');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','57583');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=55484&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>June 25, 2023 8:28:13 PM</small></span><span class="float-end ms-2"></span>
</div>
<div class="card-body px-1 py-1">
Do u really get your funds back
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>588.&nbsp;Biswajit Saha</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_42914"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','42914');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','42914');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=42914&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>July 5, 2021 11:24:38 AM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=42914&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
They charge huge.<br>Most third class platform for trading.<br><br> Ratings:<br><br> Brokerage - Very Poor<br> Account Maintenance Fees - Very Poor<br> Website Usability - Very Poor<br> Research Capabilities - Below Average<br> Customer Service - Below Average<br> Overall Experience - Very Poor<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>587.&nbsp;santosh</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_43806"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','43806');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','43806');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=43806&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>July 29, 2021 4:32:10 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=43806&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Hi....<br><br>As per instruction of your representative Mr. Bhawani Charan, I sent an email with attachment of a cancelled signed cheque to your representative on his email -id (bhawani.charan@branch.sharekhan.com) to update my bank account details but till today there is no update from your side....<br><br><br>Adv. Santosh Avhad
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>586.&nbsp;Jahangir Ali sk</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_47633"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','47633');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','47633');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=47633&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>December 17, 2021 7:55:28 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=47633&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Brokerage charge is very high.<br><br> Ratings:<br><br> Brokerage - Very Poor<br> Account Maintenance Fees - Average<br> Website Usability - Average<br> Research Capabilities - Average<br> Customer Service - Above Average<br> Overall Experience - Average<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>585.&nbsp;bruce david</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_55485"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','55485');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','55485');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=55485&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>December 13, 2022 12:43:26 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=55485&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
lfrescue 0rG HELPED ME RECOVER ALL I LOST THEM
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>584.&nbsp;Saurabh</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_55249"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','55249');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','55249');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=55249&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>November 28, 2022 1:13:04 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=55249&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Good overall experience <br><br> Ratings:<br><br> Brokerage - Excellent<br> Account Maintenance Fees - Excellent<br> Website Usability - Excellent<br> Research Capabilities - Excellent<br> Customer Service - Excellent<br> Overall Experience - Excellent<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>583.&nbsp;Md shamim</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_54288"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','54288');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','54288');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=54288&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>October 10, 2022 6:56:55 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=54288&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Average service.<br><br> Ratings:<br><br> Brokerage - Below Average<br> Account Maintenance Fees - Average<br> Website Usability - Average<br> Research Capabilities - Average<br> Customer Service - Below Average<br> Overall Experience - Average<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>582.&nbsp;kamal kishor</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_24892"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','24892');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','24892');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=24892&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>December 21, 2017 9:05:13 PM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=24892&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
Hi sir,<br><br>I want to trade in share market but I don''''''''t have demat account and I want to open my demat account with sher khan Ltd. I don''''''''t have any idea how to open the account so please guide me as soon as possible. but i don''t know how to purchase and sale share.<br>
</div>
</div>
</div>
</div>
<div class="row comment">

<div class="col-12">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>581.&nbsp;Chandrasekar Pendyala</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_50339"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','50339');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','50339');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=50339&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>March 1, 2022 11:02:10 AM</small></span><span class="float-end ms-2"><a class="btn btn-primary btn-xs" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?a=2&b=0&pid=50339&t=16#replyform')" title="Reply to this mesage" style="color:#ffffff;text-decoration:none;">Reply</a></span>
</div>
<div class="card-body px-1 py-1">
About 25 clients have joined based on my recommendation, since 2010. <br><br>Last few months, online trading platform has some issues, Trading in BSE, No update in 52 high low details in "sharemini" which is excellent for desktop as well as mobile trading. On 25th Feb, BSE trading restored only around 12 noon., and on 28-02-2022, Portfolio was not updated. <br><br>One big issue now is their HO customer care number is TOTAL WASTE, perhaps last two years I couldnt speak with a single person, (I doubt this service may have withdrawn, taking advantage of COVID norms). Though you will get IVR reply, "Your queue position is 1", you will not be connected to them, in 15 minutes, the same will get disconnected. This I have written several times, but not responded properly. <br><br>I need to open an account for my younger daughter now, who attained major recently, but decided not in Sharekhan, hence visited this site.
</div>
</div>
</div>
</div>
<div class="row comment">
<div class="col-1"></div>

<div class="col-11">
<div class="card mb-2">
<div class="card-header px-1 py-1">
<strong>581.1.&nbsp;Rakesh V</strong>&nbsp;&nbsp;
<span class="ms-2" id="dv_Feedback_52907"><a href="#" title="I like it" onclick="javascript:funReportMessage('like','Feedback','52907');return false;" style="text-decoration:none;color:#008000;"><img src="https://www.chittorgarh.com/ipo/images/icon-like.png" width="15" Height="15" style="vertical-align:text-bottom;" alt="I Like It." title="I Like It."></a> <span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="#; title=" Report Abuse' onclick="javascript:funReportMessage('spam','Feedback','52907');return false;" style="text-decoration:none;color:#e4e4e4;"><img src="https://www.chittorgarh.com/images/spam_icon.png" width="16" height="16" alt="Report Abuse" title="Report Abuse"></a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><a href="https://www.chittorgarh.com/newportal/feedback_discussions.asp?a=2&b=0&c=50339&r=16" title="Permanent Link" style="text-decoration:none;font-size:14px" target="_blank"><i class="fa fa-link"></i>&nbsp; Link</a><span style="color:#cccccc;padding:0 5px 0 5px;">|</span><small>July 8, 2022 1:27:45 AM</small></span><span class="float-end ms-2"></span>
</div>
<div class="card-body px-1 py-1">
Sharekhan doesnt have customer care support. I have dialed many times but no one answers even after waiting for 20mins. If you need customer support then you have to contact your respective branch or Relationship manager.
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<p></p>
</div>
</div>
<div class="row text-center">
<div class="col-12">
<nav aria-label="Page navigation example">
<ul class="pagination pagination-sm justify-content-center">
<li class="page-item"><a class="page-link" href_="https://www.chittorgarh.com/stockbroker/sharekhan/2/?#feedback" title="First Page">First Page</a></li>
<li class="page-item"><a class="page-link" href_="https://www.chittorgarh.com/stockbroker/sharekhan/2/?p=#feedback" title="Previous Page">Previous Page</a></li>
<li class="page-item active"><a class="page-link">1</a></li>
<li class="page-item"><a class="page-link" href="https://www.chittorgarh.com/stockbroker/sharekhan/2/?p=2#feedback" title="Next Page">Next Page</a></li>
<li class="page-item"><a class="page-link" href="https://www.chittorgarh.com/stockbroker/sharekhan/2/?p=30#feedback" title="Last Page">Last Page</a></li>
</ul>
</nav>
</div>
</div>
<div class="row text-center mb-3">
<div class="col-12">
<button type="button" class="btn btn-xs float-end btn-primary" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?t=16&a=2&b=0')" title="Post New Message">Post New Message</button>
</div>
</div>
</div>
<div class="row">
<div class="col-12">
<p>Are you a Zerodha Customer? <button type="button" class="btn btn-xs btn-success" onClick="return popup_win('https://alpha.chittorgarh.com/broker_rating.asp?a=2&b=stock')" title="Rate Sharekhan Product and Services">Rate Sharekhan Services</button></p>
</div>
</div>

</div>
<div class="col-12 col-md-12 col-lg-12 col-xl-2 mt-5 text-center ps-0" id="right">
<div class="row mx-1 mt-2">
<div class="col-12">
<img src="/images/special_offers.png" alt="special_offers" style="width: 182px;height:59px;"><br>By Popular <b>Stock Brokers</b>
</div>
</div>
<div class="row my-2 mx-1 border" style="background-color:#f0f8ff;">
<div class="col-12 py-2">
<img src="/images/ipo/zerodha_logo_small.gif" width="25" height="25" alt="Zerodha Review">&nbsp;&nbsp;
<a href="/stockbroker/zerodha/18/" title="Zerodha" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Zerodha</a>
<p><b>Free Eq Delivery & MF</b><br>
Flat &#8377;20 Per Trade in F&O</p>
<p><a href="https://tinyurl.com/broker-zerodha-homepage" target="_blank" title="Open an Account with Zerodha" class="btn btn-success btn-sm">Open Instant Account</a></p>
</div>
</div>
<div class="row my-2 mx-1 border" style="background-color:#ffffff;">
<div class="col-12 py-2">
<img src="/images/ipo/angel-broking-logo-small.png" width="35" height="39" alt="Angel Broking Review">&nbsp;&nbsp;
<a href="/stockbroker/angel-broking/14/" title="Angel Review" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent" class="text-decoration-none"><span style="color: #2e51ff;">Angel</span><span style="color: #8F4200;">One</span></a>
</div>
<p><b>Free Equity Delivery</b>
<br>Flat &#8377;20 Per Trade in F&O
<p><a href="https://tinyurl.com/broker-angel-one" target="_blank" title="Enquire to Angel Broking" class="btn btn-success btn-sm">Open FREE Demat Account</a></p>
</div>
<div class="row my-2 mx-1 border" style="background-color:#ffcc66;">
<div class="col-12 py-2"><a href="/stockbroker/motilal-oswal/5/" title="Motilal Oswal Review" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Motilal Oswal</a></div>
<p><b>30 days brokerage free trading</b>
<br>Free - Personal Trading Advisor</p>
<p><a href="https://tinyurl.com/broker-motilaloswal" target="_blank" title="Motilal Oswal Open Account for FREE!" class="btn btn-success btn-sm">Open Account</a></p>
</div>
<div class="row my-2 mx-1 border" style="background-color:#fff0f0;">
<div class="col-12 py-2"><img src="/images/ipo/kotak_securities_logo-small.jpg" width="25" height="25" alt="Kotak Securities Review">&nbsp;&nbsp;<a href="/stockbroker/kotak-securities/12/" title="Kotak Securities Review" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Kotak Securities</a><br>&nbsp;&nbsp;&nbsp;&nbsp;<small>(Trade Free Plan)</small></div>
<p><mark>FREE Intraday Trading (Eq, F&O)</mark><br>Flat &#8377;20 Per Trade in F&O</p>
<p><a href="https://tinyurl.com/broker-kotak" target="_blank" title="Open FREE Demat Account with Kotak Securities" class="btn btn-success btn-sm">Open Online Demat Account</a></p>
</div>
<div class="row my-2 mx-1 border" style="background-color:#f0f8ff;">
<div class="col-12 py-2">
<img src="/images/ipo/upstox-small-logo.png" width="25" height="25" alt="Upstox Review">&nbsp;&nbsp;
<a href="/stockbroker/upstox/33/" title="Upstox" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Upstox</a>
</div>
<p>
<b>FREE Account Opening</b><br>
Flat &#8377;20 Per Trade
</p>
<p><a href="https://tinyurl.com/broker-upstox" target="_blank" title="Enquire to Upstox" class="btn btn-primary btn-sm">Enquire Now</a></p>
</div>

<div class="row my-2 mx-1 border" style="background-color:#ffffcc;">
<div class="col-12 py-2"><img src="/images/ipo/prostocks-logo-small.png" width="50" height="50" alt="ProStocks Review">&nbsp;&nbsp;<a href="/stockbroker/prostocks/38/" title="ProStocks Review" style="color:#0C5539; font-size: 23px; line-height: 20px; font-weight:bold;" target="_parent">ProStocks</a></div>
<p><b>Unlimited @ &#8377;899/month</b>
<br>Rs 0 Demat AMC</p>
<p><a href="https://tinyurl.com/broker-prostocks" target="_blank" title="Open a FREE Online Trading Account with ProStocks Online" class="btn btn-success btn-sm">Open <b>FREE</b> Account</a></p>
</div>

<div class="row my-2 mx-1 border" style="background-color:#f0f8ff;">
<div class="col-12 py-2">
<img src="/images/ipo/fyers-logo-small.png" width="25" height="25" alt="Fyers Review">&nbsp;&nbsp;
<a href="/stockbroker/fyers_securities/32/" title="Fyers" style="font-size: 20px; line-height: 20px; font-weight:bold;" target="_parent">Fyers</a>
</div>
<p><b>Free Eq Delivery Trades</b>
<br>Flat &#8377;20 Per Trade in F&O</p>
<p><a href="https://tinyurl.com/broker-fyers" target="_blank" title="Open an account with Fyers" class="btn btn-success btn-sm">Open Instant Account</a></p>
</div>
<div class="row my-2 mx-1 border" style="background-color:#ffffff;">
<div class="col-12 py-2">
<img src="/images/ipo/paytrm-money-logo-small-25x25.jpg" width="25" height="25" alt="Paytm Money Review">&nbsp;&nbsp;<a href="/stockbroker/paytm-money/175/" title="Paytm Review" style="font-size: 20px; line-height: 20px; font-weight:bold;">Paytm Money</a>
</div>
<div class="col-12 pb-2">
<img src="/images/paytm_money_qr_code.png" width="75" height="75" alt="Paytm Money QR Code">
</div>
<p class="mb-1">Pay &#8377;0 brokerage for first 10 days</p>
<p class="mb-1">Flat &#8377;20 Per Trade</p>
<p><a href="https://tinyurl.com/broker-paytm" target="_blank" title="Paytm Money Online Account Opening" class="btn btn-info btn-sm">Open Instant Account Now!</a></p>
</div>

<div class="sticky-xl-top mt-5 text-center" style="top: 65px !important;z-index: 0;">
<div style="height: 50px;"></div>


<a href="https://tinyurl.com/broker-zerodha-homepage" target="_blank" title="Zerodha Instant Account Opening"><img class="img-fluid" src="/images/broker_campagn/zerodha/zerodha-250x300.png" alt="Open an Instant Account with Zerodha" width="250" height="300"></a>
</div>
</div>
<div id="footer" class="footer col-md-12 col-12 mt-5">
<div class="row ch-main ch-light-grey">
<div class="col-12">
<table class="table table-borderless w-100" style="height: 250px;">
<tr>
<td class="mb-2 align-middle text-center">

<div id="div-gpt-ad-1651808387027-0" style="margin: auto; height: 250px;">
<script>
												googletag.cmd.push(function() { 
													googletag.display('div-gpt-ad-1651808387027-0'); 
													googletag.pubads().refresh([gptAdSlots[3]]);
												});
											</script>
</div>
</td>
</tr>
</table>
</div>
</div>
<div class="row g-3 font-12 text-center">
<div class="col-md-3 col-12">
<a class="ch-button ch-grey d-block rounded-2 text-decoration-none my-1" href="#" onClick="return popup_win('https://alpha.chittorgarh.com/contactus.asp'); return false;" style="white-space:nowrap;" title="Contact Us">CONTACT US</a>
</div>
<div class="col-md-3 col-12">
<a class="ch-button ch-grey d-block rounded-2 text-decoration-none" href="/sitemap" title="Sitemap">SITEMAP</a>
</div>
<div class="col-md-3 col-12">
<a class="ch-button ch-grey d-block rounded-2 text-decoration-none" href="/article/advertise-with-us/258/" title="Guest Book">ADVERTISE WITH US</a>
</div>
<div class="col-md-3 col-12">
<a class="ch-button ch-grey d-block rounded-2 text-decoration-none" href="/article/about-chittorgarh-com/259/" title="About Chittorgarh.com" target="_top">ABOUT US</a>
</div>
</div>
<div class="row text-center font-12 g-3 mt-3">
<div class="col-md-3 col-sm-6 col-12 mt-2">
<div class="h5"><a href="/report/top_10_discount_brokers_in_india_by_clients_at_nse/3/" title="Top 10 Discount Brokers in India"><b>Best Discount Broker in India</b></a></div>
<a href="/stockbroker/zerodha/18/" title="Zerodha Review"><mark>Zerodha</mark> <small>(&#8377;20 per Trade)</small></a><br>
<a href="/stockbroker/upstox/33/" title="Upstox Review">Upstox <small>(&#8377;20 per Trade)</small></a><br>
<a href="/stockbroker/angel-broking/14/" title="Angel Broking Review">Angel One <small>(&#8377;20 per Trade)</small></a><br>
<a href="/stockbroker/edelweiss_broking/34/" title="Nuvama Wealth Review"><mark>Nuvama Wealth</mark> <small>(&#8377;10 per Trade)</small></a><br>
<a href="/stockbroker/5paisa/4/" title="5Paisa Review">5Paisa <small>(&#8377;20 per Trade)</small></a><br>

<a href="/stockbroker/prostocks/38/" title="ProStocks Review">ProStocks <small><mark>(&#8377;899 Unlimited)</mark></small></a><br>
</div>
<div class="col-md-3 col-sm-6 col-12 mt-2">
<div class="h5"><a href="/report/top_10_full_service_brokers_by_clients_at_nse/5/" title="Top 10 Full-Service Brokers in India"><b>Best Full-Service Brokers in India</b></a></div>
<a href="/stockbroker/angel-broking/14/" title="Angel Broking Review"><mark>Angel One</mark></a><br>
<a href="/stockbroker/kotak-securities/12/" title="Kotak Securities Review">Kotak Securities</a><br>
<a href="/stockbroker/edelweiss_broking/34/" title="Nuvama Wealth Review"><mark>Nuvama Wealth</mark></a><br>
<a href="/stockbroker/icicidirect/1/" title="ICICI Direct Review">ICICI Direct</a><br>
<a href="/stockbroker/motilal-oswal/5/" title="Motilal Oswal Review">Motilal Oswal</a><br>
</div>
<div class="col-md-3 col-sm-6 col-12 mt-2">
<div class="h5"><a href="/report/unlimited-trading-plan-zero-brokerage-account/55/" title="Unlimited Trading Plan (Zero Brokerage Unlimited Trading)"><b>Unlimited Monthly Trading Plans</b></a></div>
<a href="/stockbroker/prostocks/38/" title="Prostocks Review"><mark>Prostocks</mark> <small>(&#8377;899 Unlimited)</small></a><br>
<a href="/stockbroker/sasonline/25/" title="SAS Online Review">SAS Online <small>(&#8377;999 Unlimited)</small></a><br>
<a href="/stockbroker/tradeplus/170/" title="Tradeplus Review">Tradeplus</a><br>
</div>
<div class="col-md-3 col-sm-6 col-12 mt-2">
<div class="h5"><b>Compare Share Broker in India</b></div>
<a href="/comparebroker/zerodha-vs-upstox/18/33/" title="Zerodha Vs Upstox"><mark>Zerodha Vs Upstox</mark></a><br>
<a href="/comparebroker/zerodha-vs-edelweiss_broking/18/34/" title="Nuvama Broking Vs Zerodha">Nuvama Vs Zerodha</a><br>

<a href="/comparebroker/icicidirect-vs-hdfc-securities/1/6/" title="ICICIDirect Vs HDFC Securities">ICICI Direct Vs HDFC Sec</a><br>
<a href="/comparebroker/5paisa-vs-zerodha/4/18/" title="5Paisa Vs Zerodha">Zerodha Vs 5Paisa</a><br>
<a href="/comparebroker/zerodha-vs-prostocks/18/38/" title="Zerodha Vs ProStocks">Zerodha Vs ProStocks</a><br>
</div>
</div>
<hr class="my-3">
<div class="row text-center">
<div class="col-lg-12 h5"><b>Download Mobile App</b></div>
</div>
<div class="row justify-content-md-center">
<div class="col-lg-2 col-md-6 col-sm-12 text-center"><a href="https://bit.ly/3tYCoxP" target="_blank"><img src="/images/google-play.png" title="Download Chittorgarh.com Mobile App" alt="Download Chittorgarh.com Mobile App" style="margin-top:5px;;height: 55px;width: 165px;"></a></div>
<div class="col-lg-2 col-md-6 col-sm-12 text-center"><a href="https://apple.co/3ymbN11" target="_blank"><img src="/images/app-store.png" title="Download Chittorgarh.com iOS Mobile App" alt="Download Chittorgarh.com iOS Mobile App" style="margin-top:5px;;height: 55px;width: 165px;"></a></div>
</div>

<div class="text-center font-12 ch-opacity mt-3">
<a href="/article/disclaimer-and-privacy-statement/238/">Disclaimer and Privacy Statement</a>.<br><br>
&copy; 2023 Chittorgarh Infotech Pvt Ltd. All Rights Reserved.<br>
</div>
<br>
</div>
</div>
</div>

<script src="/asset/js/common.js?v=14" defer></script>

<script>
		$(document).ready(function(){
			$('[data-bs-toggle="popover_0"]').popover();
		});
	</script>
<script>
		var g_leftnav = "Broker";
	</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"854b0280ba8d1ba2","version":"2024.2.0","token":"8d4061b05f4b4776849e94df693928a6"}' crossorigin="anonymous"></script>
</body>
</html>