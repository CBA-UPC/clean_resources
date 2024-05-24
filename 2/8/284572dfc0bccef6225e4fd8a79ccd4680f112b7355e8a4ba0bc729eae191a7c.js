(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{109:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(1),a=n(2),u=n(162),c=n(11);function l(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    position: initial;\n    top: initial;\n  "]);return s=function(){return e},e}var M=o.b.div.withConfig({componentId:"sc-1p3dak9-0"})(["position:sticky;top:105px;",""],a.a.MOBILE(s())),g=Object(c.withRouter)(function(e){var t=e.router.asPath,n=e.links,o=e.defaultOpenSubMenuId,a=e.gaConfig,c=f(function(e,t){var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var u=o.value;if(u.subNavConfig){var c=!0,l=!1,f=void 0;try{for(var s,M=u.subNavConfig[Symbol.iterator]();!(c=(s=M.next()).done);c=!0){var g=s.value,d=!0,p=!1,I=void 0;try{for(var j,b=g.routes[Symbol.iterator]();!(d=(j=b.next()).done);d=!0){var y=j.value;if(e.includes(y.url))return[u.id,g.id]}}catch(e){p=!0,I=e}finally{try{d||null==b.return||b.return()}finally{if(p)throw I}}}}catch(e){l=!0,f=e}finally{try{c||null==M.return||M.return()}finally{if(l)throw f}}}else{var A=!0,m=!1,N=void 0;try{for(var C,L=u.routes[Symbol.iterator]();!(A=(C=L.next()).done);A=!0){var h=C.value;if(e.includes(h.url))return[u.id,null]}}catch(e){m=!0,N=e}finally{try{A||null==L.return||L.return()}finally{if(m)throw N}}}}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return[null,null]}(t.split("?")[0],n),2),s=c[0],g=c[1],d=o?[o]:[],p=f(Object(r.useState)(g?[s]:d),2),I=p[0],j=p[1];return i.a.createElement(M,null,i.a.createElement(u.d,{links:n,selectedTabId:s,selectedSubTabId:g,toggleSubmenuAction:function(e){I.includes(e)?I.splice(I.indexOf(e),1):I.push(e),j(l(I))},openSubMenuIds:I,gaConfig:a}))}),d=n(4),p=n(43);function I(){var e=C(["\n    display: none;\n  "]);return I=function(){return e},e}function j(){var e=C(["\n    display: ",";\n  "]);return j=function(){return e},e}function b(){var e=C(["\n    padding: 10px 15px;\n  "]);return b=function(){return e},e}function y(){var e=C(["\n    padding: 0;\n  "]);return y=function(){return e},e}function A(){var e=C(["\n    width: 100%;\n    margin: 15px 10px;\n  "]);return A=function(){return e},e}function m(){var e=C(["\n    display: ",";\n    margin: 20px auto;\n  "]);return m=function(){return e},e}function N(){var e=C(["\n    padding: 0;\n  "]);return N=function(){return e},e}function C(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",function(){return w});var L=o.b.div.withConfig({componentId:"kn7k2y-0"})(["display:flex;justify-content:center;max-width:1140px;padding:25px 0px 20px;margin:auto;width:100%;box-sizing:border-box;",";"],a.a.MEDIUM_MAX(N())),h=o.b.div.withConfig({componentId:"kn7k2y-1"})(["margin-right:auto;",";",""],a.a.MEDIUM_MAX(m(),function(e){return e.hideInMobile?"none":""}),a.a.MOBILE(A())),v=o.b.div.withConfig({componentId:"kn7k2y-2"})(["width:100%;height:100%;padding-left:25px;",";"],a.a.MEDIUM_MAX(y())),w=o.b.div.withConfig({componentId:"kn7k2y-3"})(["font-size:18px;font-weight:600;padding-bottom:15px;",";",";"],a.a.MEDIUM_MAX(b()),a.a.MOBILE(j(),function(e){return!e.showTitleOnMobile&&"none"})),x=o.b.div.withConfig({componentId:"kn7k2y-4"})([""," width:100%;"],a.a.MEDIUM_MAX(I()));t.b=Object(c.withRouter)(function(e){var t=e.children,n=e.panelConfig,o=e.title,a=e.showTitleOnMobile,u=e.router,c=e.defaultOpenSubMenuId,l=void 0===c?null:c,f=u.asPath===n.baseRoute.url;return Object(r.useEffect)(function(){if(f&&window.innerWidth>d.c.MEDIUM){var e=n.links[0].subNavConfig?n.links[0].subNavConfig[0].defaultRoute:n.links[0].defaultRoute;u.replace({pathname:e.pathname},e.url)}window.scrollTo({top:0,left:0,behavior:"smooth"})},[]),i.a.createElement(L,null,i.a.createElement(h,{hideInMobile:!f},i.a.createElement(g,{links:n.links,defaultOpenSubMenuId:l,gaConfig:n.gaConfig})),!f&&i.a.createElement(v,null,o&&i.a.createElement(w,{showTitleOnMobile:a},o),t),f&&i.a.createElement(x,null,i.a.createElement(v,null,i.a.createElement(p.a,null))))})},144:function(e,t,n){"use strict";var r=n(10),i=n.n(r),o=n(0),a=n.n(o),u=n(6),c=n(32);function l(e,t,n,r,i,o,a){try{var u=e[o](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,i)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.a=function(e){var t=function(t){var n=t.pageProps,r=f(Object(o.useState)(!1),2),i=r[0],l=r[1],s=Object(o.useContext)(c.a).state.loggedIn;if(!Object(u.hb)()){if(!s&&!i)return l(!0),null;s&&i&&l(!1)}return a.a.createElement(e,n)};return t.getInitialProps=(n=i.a.mark(function t(n){var r,o,a,u;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.req,o=n.res,a=n.loggedIn,r){t.next=3;break}return t.abrupt("return",{});case 3:if(u={},!e.getInitialProps){t.next=8;break}return t.next=7,e.getInitialProps({req:r,res:o});case 7:u=t.sent;case 8:if(a){t.next=11;break}if(!o){t.next=11;break}return t.abrupt("return",o.redirect("/login"));case 11:return t.abrupt("return",{pageProps:u});case 12:case"end":return t.stop()}},t,this)}),r=function(){var e=this,t=arguments;return new Promise(function(r,i){var o=n.apply(e,t);function a(e){l(o,r,i,a,u,"next",e)}function u(e){l(o,r,i,a,u,"throw",e)}a(void 0)})},function(e){return r.apply(this,arguments)}),t;var n,r}},1564:function(e,t,n){__NEXT_REGISTER_PAGE("/user-dashboard",function(){return e.exports=n(1612),{page:e.exports.default}})},1565:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMSIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDExIDE0Ij4KICAgIDxnIGZpbGw9IiNFRTlDMTYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPHBhdGggZD0iTTkuNzA3IDEzLjQzSDEuMDExYS4zNzIuMzcyIDAgMCAxLS4zNzQtLjM3NFY3LjA2MmMwLS4yMDguMTY2LS4zNzQuMzc0LS4zNzRoOC43MDFjLjIwOCAwIC4zNzQuMTY2LjM3NC4zNzR2NS45OTRhLjM4LjM4IDAgMCAxLS4zNzkuMzc0ek01LjQ5OSA4LjY5OGEuOC44IDAgMCAwLS44NjcuNDYyLjc3Ny43NzcgMCAwIDAgLjI2Ljk2MWMuMDYyLjA0Ny4wNzcuMDk0LjA3Ny4xNjF2MS4wMjljMCAuMjg2LjI5Ni40OTkuNTk4LjM0M2EuMzcxLjM3MSAwIDAgMCAuMTkyLS4zNDh2LTEuMDI5YzAtLjA3My4wMTYtLjEyNC4wODMtLjE3MWEuNzU4Ljc1OCAwIDAgMCAuMzIyLS42NC44MDcuODA3IDAgMCAwLS42NjUtLjc2OHoiLz4KICAgICAgICA8cGF0aCBkPSJNNS4zNTkuNTA2YTMuODEzIDMuODEzIDAgMCAwLTMuODA4IDMuODA4djEuOWgtLjE2NmMtLjY3NSAwLTEuMjI2LjU1Mi0xLjIyNiAxLjIyN3Y1LjIzNmMwIC42NzYuNTUgMS4yMjYgMS4yMjYgMS4yMjZoNy45NDNjLjY3NSAwIDEuMjI2LS41NSAxLjIyNi0xLjIyNlY3LjQ0MWMwLS42NzUtLjU1LTEuMjI2LTEuMjI2LTEuMjI2aC0uMTY2VjQuMzA4QTMuODAxIDMuODAxIDAgMCAwIDUuMzU5LjUwNnpNMi40OTcgNC4zMDhhMi44NjQgMi44NjQgMCAwIDEgMi44NjItMi44NjIgMi44NjQgMi44NjQgMCAwIDEgMi44NjIgMi44NjJ2MS45MDdIMi40OTdWNC4zMDh6bTcuMTE3IDMuMTMzdjUuMjM2YS4yOC4yOCAwIDAgMS0uMjgxLjI4SDEuMzlhLjI4LjI4IDAgMCAxLS4yOC0uMjhWNy40NDFhLjI4LjI4IDAgMCAxIC4yOC0uMjhoNy45NDNjLjE1IDAgLjI4LjEyNC4yOC4yOHoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},1566:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE4IDE2Ij4KICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxLjEyNSkiPgogICAgICAgIDxwYXRoIGQ9Ik0xNy4zOTMgMi4yNGExLjkzNCAxLjkzNCAwIDAgMC0xLjQyLS41OThoLTIuODM5di0uMDM0YzAtLjQyOC0uMTctLjgzOC0uNDYxLTEuMTEyQTEuNTY1IDEuNTY1IDAgMCAwIDExLjU2LjAzNGgtNS4xM0ExLjU3NSAxLjU3NSAwIDAgMCA0Ljg0IDEuNjA4di4wMzRIMi4wMThjLS41NjQgMC0xLjA2LjIyMi0xLjQyLjU5OEMuMjQgMi42IDAgMy4xMTMgMCAzLjY2djguNTE3YzAgLjU2NC4yMjIgMS4wNi41OTkgMS40Mi4zNTkuMzU4Ljg3Mi41OTggMS40Mi41OThoMTMuOTU0Yy41NjUgMCAxLjA2LS4yMjMgMS40Mi0uNTk5LjM1OS0uMzU5LjU5OC0uODcyLjU5OC0xLjQyVjMuNjZjMC0uNTY1LS4yMjItMS4wNi0uNTk4LTEuNDJ6bS0uMjkgOS45MzdoLS4wMThjMCAuMzA4LS4xMi41ODEtLjMyNS43ODZhMS4wOTggMS4wOTggMCAwIDEtLjc4Ny4zMjVIMi4wMThjLS4zMDggMC0uNTgxLS4xMi0uNzg3LS4zMjVhMS4wOTggMS4wOTggMCAwIDEtLjMyNS0uNzg2VjMuNjZjMC0uMzA4LjEyLS41ODIuMzI1LS43ODcuMjA2LS4yMDUuNDgtLjMyNS43ODctLjMyNWgzLjNhLjQ2LjQ2IDAgMCAwIC40NjMtLjQ2MlYxLjU5YzAtLjE4OC4wNjgtLjM1OS4xODgtLjQ3OC4xMi0uMTIuMjktLjE4OC40NzktLjE4OGg1LjExM2MuMTg4IDAgLjM2LjA2OC40NzkuMTg4LjEyLjEyLjE4OC4yOS4xODguNDc4di40OTZhLjQ2LjQ2IDAgMCAwIC40NjIuNDYyaDMuM2MuMzA4IDAgLjU4Mi4xMi43ODcuMzI1LjIwNS4yMDUuMzI1LjQ3OS4zMjUuNzg3djguNTE3eiIvPgogICAgICAgIDxwYXRoIGQ9Ik04Ljk5NiAzLjcxMUE0LjIxNSA0LjIxNSAwIDAgMCA2LjAyIDQuOTQzYTQuMjE1IDQuMjE1IDAgMCAwIDAgNS45NTIgNC4yMTUgNC4yMTUgMCAwIDAgNS45NTIgMCA0LjIxNSA0LjIxNSAwIDAgMCAwLTUuOTUyQTQuMjE1IDQuMjE1IDAgMCAwIDguOTk1IDMuNzF6bTIuMzI2IDYuNTVhMy4zNDIgMy4zNDIgMCAwIDEtMi4zMjYuOTU4IDMuMzQyIDMuMzQyIDAgMCAxLTIuMzI2LS45NTggMy4yNyAzLjI3IDAgMCAxLS45NTgtMi4zMjZjMC0uOTA2LjM3Ni0xLjcyNy45NTgtMi4zMjVhMy4yNyAzLjI3IDAgMCAxIDIuMzI2LS45NThjLjkwNiAwIDEuNzI3LjM3NiAyLjMyNi45NThhMy4yNyAzLjI3IDAgMCAxIC45NTcgMi4zMjUgMy4yIDMuMiAwIDAgMS0uOTU3IDIuMzI2eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjE1LjA4NCIgY3k9IjQuNTMyIiByPSIxIi8+CiAgICA8L2c+Cjwvc3ZnPgo="},1612:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(1),a=n(69),u=n(109),c=n(4),l=n(2),f=n(22);function s(){var e=g(["\n    padding-top: 8px;\n  "]);return s=function(){return e},e}function M(){var e=g(["\n    width: 100%;\n    padding-top: 10px;\n  "]);return M=function(){return e},e}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d=o.b.div.withConfig({componentId:"hp0bia-0"})(["display:flex;flex-direction:column;justify-content:space-between;min-height:60px;"]),p=o.b.div.withConfig({componentId:"hp0bia-1"})(["font-size:14px;color:",";"],c.a.BATTLESHIP_GREY),I=o.b.div.withConfig({componentId:"hp0bia-2"})(["position:relative;"]),j=o.b.input.withConfig({componentId:"hp0bia-3"})(["font-size:16px;font-weight:600;outline:none;border:none;color:",";border-bottom:1px solid #d0d4dd;width:320px;height:30px;opacity:",";&:disabled{background:none;}",""],c.a.DARK_TEXT,function(e){return e.isLocked?.6:1},l.a.MOBILE(M())),b=o.b.img.withConfig({componentId:"hp0bia-4"})(["position:absolute;right:5px;bottom:5px;"]),y=o.b.div.withConfig({componentId:"hp0bia-5"})(["font-size:10px;color:",";padding-bottom:2px;",""],c.a.BATTLESHIP_GREY,l.a.MOBILE(s())),A=function(e){var t=e.title,r=e.subtitle,o=e.value,a=e.onInputChange,u=e.isLocked;return i.a.createElement(d,null,i.a.createElement(p,null,t),i.a.createElement(I,null,i.a.createElement(j,{isLocked:u,value:o,onChange:a,disabled:u}),u&&i.a.createElement(b,{src:n(1565)})),i.a.createElement(y,null,r))},m=n(259),N=n(32),C=n(88),L=n(631);function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(){var e=S(["\n    width: calc(100% - 30px);\n  "]);return x=function(){return e},e}function O(){var e=S(["\n    flex-direction: column;\n  "]);return O=function(){return e},e}function E(){var e=S(["\n    padding-right: 0px;\n    margin-bottom: 30px;\n  "]);return E=function(){return e},e}function D(){var e=S(["\n    margin: auto;\n  "]);return D=function(){return e},e}function T(){var e=S(["\n    flex-direction: column;\n  "]);return T=function(){return e},e}function z(){var e=S(["\n    margin: 15px 10px;\n    padding: 20px 15px;\n  "]);return z=function(){return e},e}function S(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var k=o.b.div.withConfig({componentId:"t53dfv-0"})(["padding:20px;background-color:#fff;min-height:480px;position:relative;",""],l.a.MOBILE(z())),P=o.b.div.withConfig({componentId:"t53dfv-1"})(["display:flex;margin-bottom:30px;",""],l.a.MOBILE(T())),U=o.b.input.withConfig({componentId:"t53dfv-2"})(["display:none;"]),R=o.b.img.withConfig({componentId:"t53dfv-3"})(["border-radius:2px;height:80px;background:#fff;cursor:pointer;opacity:0.67;",""],l.a.MOBILE(D())),Y=o.b.div.withConfig({componentId:"t53dfv-4"})(["padding-right:20px;position:relative;> div{display:flex;justify-content:center;overflow:hidden;width:70px;background:black;border-radius:4px;height:80px;}",""],l.a.MOBILE(E())),_=o.b.img.withConfig({componentId:"t53dfv-5"})(["pointer-events:none;position:absolute;top:calc(50% - 9px);"]),Q=o.b.div.withConfig({componentId:"t53dfv-6"})(["display:flex;",""],l.a.MOBILE(O())),B=Object(o.b)(f.e).withConfig({componentId:"t53dfv-7"})(["position:absolute;font-size:14px;font-weight:600;bottom:20px;width:170px;padding:10px;&[disabled]{background-color:",";opacity:1;border:1px solid ",";}",""],c.a.BROWN_GREY,c.a.BROWN_GREY,l.a.MOBILE(x())),G=Object(o.b)(f.a).withConfig({componentId:"t53dfv-8"})(["height:13px;width:13px;border-color:#fff;border-bottom-color:transparent;background:transparent;"]),Z="displayName",H="displayPic",K=function(){var e=Object(r.useRef)(null),t=Object(r.useContext)(N.a),o=t.state,a=o.kycName,u=o.userName,c=o.profileUrl,l=t.actions.updateProfileDetails,f=w(Object(r.useState)(u),2),s=f[0],M=f[1],g=w(Object(r.useState)({url:c,file:null}),2),d=g[0],p=g[1],I=w(Object(r.useState)(!1),2),j=I[0],b=I[1],y=w(Object(C.a)({msgParam:"Profile details updated successfully",defaultInProgress:!1,throwError:!1,cancelRequestOnUnmount:!0}),2),v=y[0],x=y[1];Object(r.useEffect)(function(){if(s===u&&d&&!d.file||!s.length)return b(!1);b(!0)},[s,d]);return i.a.createElement(k,null,i.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;u!==s&&t.append(Z,s),d.file&&t.append(H,d.file),v(Object(m.b)(t)).then(function(e){var t=e.data,n=t.displayName,r=t.displayPicLocation,i={};n&&(i.userName=n),r&&(i.profileUrl=Object(L.b)(r)),l(h({},i)),p(h({},d,{file:null}))})}},i.a.createElement(P,null,i.a.createElement(Y,null,i.a.createElement("div",null,i.a.createElement(R,{onClick:function(){e.current.click()},alt:"profile-pic",src:d?d.url:null}),i.a.createElement(_,{src:n(1566)}))),i.a.createElement(U,{type:"file",ref:e,accept:"image/*",onChange:function(){p({file:e.current.files[0],url:URL.createObjectURL(e.current.files[0])})}}),i.a.createElement(A,{title:"Display Name",subtitle:"This name will display only Paytm Money",onInputChange:function(e){var t=e.target.value;(" "!==t||s.length)&&M(t)},value:s,isLocked:!1})),i.a.createElement(Q,null,i.a.createElement(A,{title:"Name as per your KYC",isLocked:!0,value:a})),i.a.createElement(B,{disabled:!j,type:"submit"},x?i.a.createElement(G,null):"Save")))},V=n(389),W=n(144),q=o.b.div.withConfig({componentId:"sc-1cfflk7-0"})(["display:flex;justify-content:center;font-size:10px;background:#f5f7f9;"]);t.default=Object(W.a)(function(){return i.a.createElement(a.a,null,i.a.createElement(q,null,i.a.createElement(u.b,{title:"My Profile",panelConfig:V.a},i.a.createElement(K,null))))})},203:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEzIDEyIj4KICAgIDxwYXRoIGZpbGw9IiNEMjNENTAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEyLjkwNCAxMC4zMDZMNy4yMzQuNzczYS44MzMuODMzIDAgMCAwLS43Mi0uMzg4aC0uMDAxYS44MzQuODM0IDAgMCAwLS43Mi4zODdMLjA5NyAxMC4zMDVhLjY3LjY3IDAgMCAwIC4wMTkuNzIzYy4xNDguMjIuNDE0LjM1Ny43LjM1N2gxMS4zNjZhLjg0Ljg0IDAgMCAwIC43MDEtLjM1Ny42NjguNjY4IDAgMCAwIC4wMi0uNzIyem0tNi4zOTEtLjM4OGMtLjQ1MiAwLS44MTgtLjMyOS0uODE4LS43MzMgMC0uNDA1LjM2Ny0uNzM0LjgxOC0uNzM0LjQ1IDAgLjgxNy4zMjkuODE3LjczNCAwIC40MDQtLjM2Ni43MzMtLjgxNy43MzN6bS44MTgtMi45MjJjMCAuNDA2LS4zNjcuNzM0LS44MTguNzM0LS40NSAwLS44MTctLjMyOC0uODE3LS43MzRWNC4wNjNjMC0uNDA1LjM2Ni0uNzMzLjgxNy0uNzMzLjQ1IDAgLjgxOC4zMjguODE4LjczM3YyLjkzM3oiLz4KPC9zdmc+Cg=="},259:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return a});var r=n(17),i=n(12);function o(e){var t=new r.c(i.c.USER_ACCOUNT.UPDATE_PROFILE),n=t.makeRequest(e);return{reqInstance:t,reqPromise:n}}function a(e){var t=new r.c(i.c.USER_ACCOUNT.GET_PROFILE),n=t.makeRequest(null,"",e);return{reqInstance:t,reqPromise:n}}},389:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r,i,o=n(3),a=n.n(o),u=n(7);!function(e){e[e.DASHBOARD=1]="DASHBOARD",e[e.BANK_ACCOUNT=2]="BANK_ACCOUNT",e[e.AUTO_PAY=3]="AUTO_PAY"}(r||(r={})),function(e){e[e.DASHBOARD=1]="DASHBOARD",e[e.BANK_ACCOUNT=2]="BANK_ACCOUNT",e[e.AUTO_PAY=3]="AUTO_PAY"}(i||(i={}));var c={PROFILE:{id:r.DASHBOARD,label:"Profile",defaultRoute:a.a.USER_DETAILS,routes:[a.a.USER_DETAILS],gaLabel:"dashboard"},BANK_ACCOUNT:{id:r.BANK_ACCOUNT,label:"Bank Account",defaultRoute:a.a.BANK_ACCOUNT,routes:[a.a.BANK_ACCOUNT],gaLabel:"bank_account"},AUTO_PAY:{id:r.AUTO_PAY,label:"Auto Pay",defaultRoute:a.a.AUTO_PAY,routes:[a.a.AUTO_PAY],gaLabel:"auto_pay"}},l={baseRoute:a.a.USER_PANEL,links:[c.PROFILE,c.BANK_ACCOUNT,c.AUTO_PAY],gaConfig:{event_category:u.v.EVENT_CATEGORY,event_action:u.v.EVENT_ACTION.SECTION_CLICK}}},70:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(8),a=n.n(o),u=n(1),c=n(4),l=n(2),f=u.b.div.withConfig({componentId:"sc-16bnrpa-0"})(["width:100%;height:100%;box-shadow:0 0 15px 0 rgba(0,0,0,0.22);border-radius:4px;background-color:#141b2f;display:flex;align-items:center;}"]),s=u.b.div.withConfig({componentId:"sc-16bnrpa-1"})(["width:20px;height:20px;object-fit:contain;padding:10px;img{width:100%;height:100%;}"]),M=u.b.p.withConfig({componentId:"sc-16bnrpa-2"})(["font-size:12px;color:",";width:77%;text-align:left;"],c.a.WHITE),g=function(e){var t=e.message;return i.a.createElement(f,null,i.a.createElement(s,null,i.a.createElement("img",{alt:"tick",src:n(287)})),i.a.createElement(M,null,t))},d=u.b.div.withConfig({componentId:"sc-10i0ae2-0"})(["width:100%;height:100%;box-shadow:0 0 15px 0 rgba(0,0,0,0.22);border-radius:4px;background-color:#141b2f;display:flex;align-items:center;}"]),p=u.b.div.withConfig({componentId:"sc-10i0ae2-1"})(["width:20px;height:20px;object-fit:contain;padding:10px;img{width:100%;height:100%;}"]),I=u.b.p.withConfig({componentId:"sc-10i0ae2-2"})(["font-size:12px;color:",";width:77%;text-align:left;"],c.a.WHITE),j=function(e){var t=e.message;return i.a.createElement(d,null,i.a.createElement(p,null,i.a.createElement("img",{alt:"tick",src:n(203)})),i.a.createElement(I,null,t))};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function y(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    width: 300px;\n    bottom: 20%;\n    right: 8%;\n  "]);return y=function(){return e},e}var A,m=u.b.div.withConfig({componentId:"sc-60hs9h-0"})(["width:330px;height:auto;background-color:#141b2f;display:flex;margin:0 10px 10px 0;opacity:0;border-radius:4px;position:fixed;right:0px;bottom:0px;"," &.onEnter{opacity:0.9;transition:",";}&.onLeave{opacity:0;transition:",";;}}"],l.a.MOBILE(y()),function(e){return"opacity ".concat(e.transitionDuration,"ms ease")},function(e){return"opacity ".concat(e.transitionDuration,"ms ease")});!function(e){e.SUCCESS="success",e.ERROR="error",e.WARNING="warning"}(A||(A={}));var N=function(e){var t,n=e.message,o=e.id,a=e.appearance,u=e.transitionDuration,c=e.removeToast,l=2*u,f=u+100,s=b(i.a.useState(""),2),M=s[0],d=s[1],p=i.a.useRef();switch(Object(r.useEffect)(function(){var e=setTimeout(function(){d("onEnter")},100);return p.current=setTimeout(function(){!function(e){d("onLeave"),setTimeout(function(){c(e)},f),clearTimeout(p.current)}(o)},l),function(){clearTimeout(e),clearTimeout(p.current)}},[]),a){case A.SUCCESS:t=i.a.createElement(g,{message:n});break;case A.ERROR:t=i.a.createElement(j,{message:n});break;default:t=i.a.createElement(g,{message:n})}return i.a.createElement(m,{className:M,transitionDuration:u},t)};function C(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n    margin: 0 10px 0 0;\n  "]);return C=function(){return e},e}var L=u.b.div.withConfig({componentId:"sc-1t1za3b-0"})(["position:relative;position:fixed;z-index:999999;right:",";bottom:0px;display:flex;flex-direction:column;",""],function(e){return"".concat(e.rightPositioningInPx,"px")},l.a.MOBILE(C())),h=function(){var e=i.a.useContext(O),t=e.toastComponents,n=e.removeToast,r=0;return"undefined"!=typeof window&&window&&(r=(r=window.innerWidth-c.b.CONTENT_MAX_WIDTH)<=0?0:Math.floor(r/2)),!a()(t)&&i.a.createElement(L,{rightPositioningInPx:r},t.map(function(e){var t=e.message,r=e.id,o=e.appearance,a=e.transitionDuration;return i.a.createElement(N,{key:r,message:t,id:r,appearance:o,transitionDuration:a,removeToast:n})}))};function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){w(e,t,n[t])})}return e}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return O}),n.d(t,"b",function(){return E});var O=Object(r.createContext)({toastComponents:[],pushToast:function(){},removeToast:function(){}}),E=function(e){var t=e.children,n=x(i.a.useState({toastComponents:[]}),2),r=n[0],o=n[1],a=i.a.useRef(r.toastComponents),u=i.a.useCallback(function(e){var t=e.message,n=e.appearance,i=e.transitionDuration,u=Math.random().toString();a.current.push({message:t,appearance:n,id:u,transitionDuration:i}),o(v({},r,{toastComponents:a.current}))},[r]),c=i.a.useCallback(function(e){a.current=a.current.filter(function(t){return e!==t.id}),o(v({},r,{toastComponents:a.current}))},[r]);return i.a.createElement(O.Provider,{value:v({},{toastComponents:r.toastComponents},{pushToast:u,removeToast:c})},t,i.a.createElement(h,null))}},88:function(e,t,n){"use strict";n.d(t,"b",function(){return f});var r=n(0),i=n.n(r),o=n(17),a=n(45),u=n(70),c=n(8),l=n.n(c);function f(e,t){if(t!==o.a){var n=t.meta,r=n.displayMessage,i=n.message;e({message:r||i||"Something went wrong, please try after sometime",appearance:"error",transitionDuration:2e3})}}t.a=function(e){var t=e.msgParam,n=void 0===t?"Request Successful":t,r=e.defaultInProgress,o=void 0!==r&&r,c=e.throwError,s=void 0!==c&&c,M=e.cancelRequestOnUnmount,g=void 0===M||M,d=e.successMessageFilter,p=void 0===d?null:d,I=i.a.useContext(u.a).pushToast,j=Object(a.a)(o,!0,g),b=j.reqInProgress,y=j.reqFailed,A=j.makeRequest;return[function(e){var t=e.reqPromise,r=e.reqInstance;return new Promise(function(e,i){A({reqPromise:t,reqInstance:r}).then(function(t){if(n){var r=n;p&&!l()(p(t))&&(r=p(t)),I({message:r,appearance:"success",transitionDuration:2e3})}e(t)}).catch(function(e){f(I,e),s&&i(e)})})},b,y]}}},[[1564,1,0,2]]]);7/" title="SME IPO Articles">SME IPO Articles</a>
<a class="ch-bar-item ch-button" href="/ipo/ipo_discussions.asp" title="IPO Message Board">IPO Message Board</a>
<a class="ch-bar-item ch-button" href="/report/ipo_basis_of_allotment_list/7/sme/" title="Basis of Allotment">IPO Basis of Allotment</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="mt-3 h5">Listed SME Shares</div>
<a class="ch-bar-item ch-button" href="/report/nse_sme_share_prices_live/9/" title="NSE SME Share Prices Live">NSE SME Share Prices</a>
<a class="ch-bar-item ch-button" href="/report/bse_sme_share_prices_live/6/" title="BSE SME Share Prices Live">BSE SME Share Prices</a>
</div>
</div>
</div>
</nav>

<nav id="nav_broker" class="nav_item ">
<div class="mx-auto sectionxs font-18 container-fluid px-5">
<span onclick="ch_close_nav('broker')" class="ch-button font-48 ch-display-topright ch-hover-white sectionxsclosenavspan">&times;</span><br>
<div class="row ch-bar-block">
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Best of</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/report/top_20_share_brokers_in_india_by_clients_at_nse/1/" title="Top 20 Share Brokers">Top Stock Brokers in India</a>
<a class="ch-bar-item ch-button" href="/report/top_10_discount_brokers_in_india_by_clients_at_nse/3/" title="Top 10 Discount Brokers">Top 10 Discount Brokers</a>
<a class="ch-bar-item ch-button" href="/report/top_10_full_service_brokers_by_clients_at_nse/5/" title="Top 10 Full-Service Brokers">Top 10 Full-Service Brokers</a>
<a class="ch-bar-item ch-button" href="/report/lifetime-fee-demat-account-zero-amc-no-charges/34/" title="Lifetime Free Demat Account (AMC Free)">Lifetime Free Demat Acct</a>
<a class="ch-bar-item ch-button" href="/report/best-online-stock-brokers-for-beginner-investor/35/" title="Best Stock Broker for Beginners in India">Best Broker for Beginners</a>
<a class="ch-bar-item ch-button" href="/report/report-list/116/48/" title="Stock Broker Reports in India">More Reports...</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Discount Broker Review</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/stockbroker/zerodha/18/" title="Zerodha, The Discount Broker Reviews">Zerodha <small>(&#8377;20/trade)</small></a>
<a class="ch-bar-item ch-button" href="/stockbroker/prostocks/38/" title="ProStocks Reviews" style="color:#33ff00"><i class="fa fa-trophy"></i> ProStocks <small>(<span style="text-decoration:underline;">&#8377;899 Unlimited</span>)</small></a>
<a class="ch-bar-item ch-button" href="/stockbroker/upstox/33/" title="RKSV, The Discount Broker Reviews">Upstox <small>(&#8377;20/trade)</small></a>

<a class="ch-bar-item ch-button text-lightyellow" href="/stockbroker/paytm-money/175/" title="Paytm Money Review">Paytm Money <small>(&#8377;20/trade)</small></a>
<a class="ch-bar-item ch-button" href="/newportal/online_stock_broker_comparison.asp?a=service_type&amp;b=discount_brokers" title="Comparison of Discount Brokers">More Discount Brokers...</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Full-service Review</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/stockbroker/angel-broking/14/" title="Angel Broking Review" style="color:#33ff00;">Angel One <small>(&#8377;20/trade)</small></a>
<a class="ch-bar-item ch-button text-lightyellow" href="/stockbroker/motilal-oswal/5/" title="Motilal Oswal Brokerage Review">Motilal Oswal</a>
<a class="ch-bar-item ch-button" href="/stockbroker/icicidirect/1/" title="ICICIDirect Broker Review">ICICI Direct <small>(&#8377;20/trade)</small></a>
<a class="ch-bar-item ch-button text-lightyellow" href="/stockbroker/edelweiss_broking/34/" title="Nuvama Wealth Review">Nuvama Wealth <small>(&#8377;10/trade)</small></a>

<a class="ch-bar-item ch-button" href="/newportal/online_stock_broker_comparison.asp?a=service_type&amp;b=full_service_brokers">More Brokers...</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Compare Brokers</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/comparebroker/zerodha-vs-prostocks/18/38/" title="ProStocks Vs Zerodha - Side by Side Share Broker Comparison">Side-by-Side Comparison</a>
<a class="ch-bar-item ch-button" href="/newportal/online_stock_broker_comparison.asp" title="Broker Comparison">Compare Share Brokers</a>
<a class="ch-bar-item ch-button" href="/report/article-list/101/1/" title="Stock Broker Articles and Tutorials">Broker Articles / Tutorials</a>
<a class="ch-bar-item ch-button" href="/report/complaints-against-stock-broker-at-nse-bse-mcx/41/" title="Broker Complaints">Broker Complaints Monitor</a>
<a class="ch-bar-item ch-button" href="/report/glossary/117/42/" title="Stock Broker Glossary">Broker Glossary</a>
</div>
</div>
</div>
</nav>
<nav id="nav_stockmarket" class="nav_item ">
<div class="mx-auto sectionxs font-18 container-fluid px-5">
<span onclick="ch_close_nav('stockmarket')" class="ch-button font-48 ch-display-topright ch-hover-white sectionxsclosenavspan">&times;</span><br>
<div class="row ch-bar-block">
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Stock Market</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/newportal/stock-market-home.asp" title="Stock Market Home">Stock Market Home <img src="/images/home.png" alt="Home" title="Home" style="height: 15px;width: 15px;margin-top: -3px;"></a>
<a class="ch-bar-item ch-button" href="/newportal/stock_list.asp" title="Stock List">Stock List</a>

<a class="ch-bar-item ch-button text-lightyellow" href="/report/india-stock-market-holidays-list-bse-nse/91/" title="Stock Trading Holidays">Stock Trading Holidays</a>
<a class="ch-bar-item ch-button" href="/report/mcx-commodity-trading-holiday-list/92/" title="Commodity Trading Holidays">Commodity Trading Holidays</a>
<a class="ch-bar-item ch-button text-lightyellow" href="/newportal/stock_market_discussion_forum.asp" title="Stock India Message Board">Stock Message Board</a>
<a class="ch-bar-item ch-button" href="/report/sme-ipo-gainer-loser/129/" title="Top Gainer/Loser">Top Gainer/Loser</a>
<a class="ch-bar-item ch-button" href="/report/stock-nse-bulk-deals/119/">NSE Bulk Deals</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Live Data <img src="/images/new.gif" title="New" alt="New" style="width: 28px;height: 11px;"></div>
<a class="ch-bar-item ch-button" href="/report/bonus-issue-of-share/138/" title="Bonus Share">Bonus Share</a>
<a class="ch-bar-item ch-button" href="/report/stock-dividend/135/" title="Dividend Share">Dividend Share</a>
<a class="ch-bar-item ch-button" href="/report/stock-split/136/" title="Stock Split">Stock Split</a>
<a class="ch-bar-item ch-button" href="/report/stock-result/137/" title="Results Calendar">Results Calendar</a>
<a class="ch-bar-item ch-button" href="/report/52-weeks-high-low-data/124/" title="52 Weeks High/Low">52 Weeks High/Low</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Calculator <img src="/images/new.gif" title="New" alt="New" style="width: 28px;height: 11px;"></div>
<a class="ch-bar-item ch-button" href="/newportal/calculator-business-valuation-Issue-size.asp" title="Issue Size Calculator">Issue Size Calculator</a>
<a class="ch-bar-item ch-button" href="/newportal/calculator-business-valuation-discounted-cash-flow.asp" title="DCF Valuation Calculator">DCF Valuation Calculator</a>
<a class="ch-bar-item ch-button" href="/newportal/calculator-business-valuation-price-earning.asp" title="PE Valuation Calculator">PE Valuation Calculator</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Options Trading Basics</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/newportal/options-trading-guide-homepage.asp" title="Options Trading Guide">Options Trading Home <img src="/images/home.png" alt="Home" title="Home" style="height: 15px;width: 15px;"></a>
<a class="ch-bar-item ch-button" href="/article/options-trading-basics/275/" title="Options Overview">Options Overview</a>
<a class="ch-bar-item ch-button" href="/article/benefits-risks-of-options-trading-india/277/" title="Benefits & Risks of Options Trading">Benefits & Risks of Options</a>
<a class="ch-bar-item ch-button" href="/article/understand-options-pricing-formula-model/278/" title="how options are priced?">Options Pricing</a>
<a class="ch-bar-item ch-button" href="/report/faq-list/100/76/" title="Options Trading FAQs">Options Trading FAQs</a>
<a class="ch-bar-item ch-button" href="/report/glossary/117/81/" title="Options Trading Glossary">Options Trading Glossary</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Options Strategies</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/newportal/options-trading-startegies.asp" title="Options Trading Strategy List">Trading Strategies</a>
<a class="ch-bar-item ch-button" href="/compare-options-trading-strategies/bear-call-spread-vs-bear-put-spread/11/12/" title="bear call spread vs bear put spread - Side by Side Strategy Comparison">Side-by-Side Comparison</a>
<a class="ch-bar-item ch-button" href="/report/faq-list/100/77/" title="Options Strategy FAQs">Options Strategy FAQs</a>
</div>
</div>
</div>
</nav>
<nav id="nav_nri" class="nav_item ">
<div class="mx-auto sectionxs font-18 container-fluid px-5">
<span onclick="ch_close_nav('nri')" class="ch-button font-48 ch-display-topright ch-hover-white sectionxsclosenavspan">&times;</span><br>
<div class="row ch-bar-block">
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Best of</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/newportal/nri-trading-account-home.asp" title="NRI Trading in India Guide">NRI Homepage <img src="/images/home.png" alt="Home" title="Home" style="height: 15px;width: 15px;"></a>
<a class="ch-bar-item ch-button" href="/report/best-nri-trading-account-in-india-brokerage-charge/68/" title="Best NRI Trading Account in India">Best NRI Trading Account</a>
<a class="ch-bar-item ch-button" href="/report/best-nri-3-in-1-account-compare-charges-reviews/69/" title="Best NRI 3-in-1 Account">Best NRI 3-in-1 Account</a>
<a class="ch-bar-item ch-button" href="/report/top-10-discount-broker-for-nri-trading-account/67/" title="Top 10 NRI Discount Stock Brokers in India">Top 10 Discount Brokers</a>
<a class="ch-bar-item ch-button" href="/report/top-10-full-service-broker-for-nri-trading-account/66/" title="Top 10 NRI Full-Service Brokers in India">Top 10 Full-Service Brokers</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">NRI Trading Guide</div>
<a class="ch-bar-item ch-button" href="/article/nri_trading_account_charges_question_guide_india/113/" title="NRI Trading Account Charges, Questions, Guide - India Stock Market">Trading Account Basics</a>
<a class="ch-bar-item ch-button" href="/article/nri-trading-requirements-accounts-for-trading/475/" title="NRI Trading Requirements (Accounts for trading in India)">Trading Requirements</a>
<a class="ch-bar-item ch-button" href="/article/nri-demat-account-online-opening-procedure-charges/432/" title="NRI Demat Account - Online Opening Procedure, Charges, Rules">Demat Account Explained</a>
<a class="ch-bar-item ch-button" href="/article/usa-nri-trading-account-in-india/446/" title="USA NRI Trading Account in India">USA NRI Trading Account</a>
<a class="ch-bar-item ch-button" href="/article/nri-trading-in-derivatives-futures-options-india/429/" title="NRI Trading in Derivatives">Trading in Derivatives</a>
<a class="ch-bar-item ch-button" href="/report/article-list/101/82/" title="NRI Trading Articles">More Articles...</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">NRI Broker Reviews</div>
<a class="ch-bar-item ch-button" href="/broker/icicidirect/nri-account-review/1/" title="ICICI Direct NRI Account Review">ICICI Direct</a>
<a class="ch-bar-item ch-button text-lightyellow" href="/broker/zerodha/nri-account-review/18/" title="Zerodha NRI Account Review">Zerodha</a>
<a class="ch-bar-item ch-button" href="/broker/tradeplus/nri-account-review/170/" title="Tradeplus NRI Account Review">Tradeplus</a>
<a class="ch-bar-item ch-button text-lightyellow" href="/broker/prostocks/nri-account-review/38/" title="Prostocks NRI Account Review">Prostocks</a>
<a class="ch-bar-item ch-button" href="/broker/axisdirect/nri-account-review/35/" title="Axis Bank NRI Account Review">Axis Bank</a>
<a class="ch-bar-item ch-button" href="/broker/angel-broking/nri-account-review/14/" title="Angel Broking NRI Account Review">Angel One</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">NRI Brokerage Comparison</div>
<a class="ch-bar-item ch-button text-lightyellow" href="/compare-nri-accounts/icicidirect-vs-zerodha/1/18/" title="ICICI Direct Vs Zerodha NRI Account Comparison">ICICI Driect Vs Zerodha</a>
<a class="ch-bar-item ch-button" href="/compare-nri-accounts/hdfc-securities-vs-zerodha/6/18/" title="HDFC Securities Vs Zerodha NRI Account Comparison">HDFC Securities Vs Zerodha</a>
<a class="ch-bar-item ch-button" href="/compare-nri-accounts/zerodha-vs-axisdirect/18/35/" title="Axis Direct Vs Zerodha NRI Account Comparison">Axis Direct Vs Zerodha</a>
<a class="ch-bar-item ch-button" href="/compare-nri-accounts/angel-broking-vs-zerodha/14/18/" title="Angel Broking Vs Zerodha NRI Account Comparison">Angel One Vs Zerodha</a>
<a class="ch-bar-item ch-button" href="/compare-nri-accounts/icicidirect-vs-hdfc-securities/1/6/" title="ICICI Direct Vs HDFC Securities NRI Account Comparison">ICICI Direct Vs HDFC Securities</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">NRI Trading Terms</div>
<a class="ch-bar-item ch-button" href="/glossary/nri-bank-account/132/" title="NRI Account">NRI Account</a>
<a class="ch-bar-item ch-button" href="/glossary/nri-3-in-1-account/129/" title="NRI 3-in-1 Account">NRI 3-in-1 Account</a>
<a class="ch-bar-item ch-button" href="/glossary/nri-demat-account/133/" title="NRI Demat Account">NRI Demat Account</a>
<a class="ch-bar-item ch-button" href="/glossary/nri-trading-account/131/" title="NRI Trading Account">NRI Trading Account</a>
<a class="ch-bar-item ch-button" href="/glossary/nri-repatriation/156/" title="NRI Repatriation">Repatriation</a>
<a class="ch-bar-item ch-button" href="/report/glossary/117/43/" title="NRI Trading Glossary">More Glossary Items...</a>
</div>
</div>
</div>
</nav>
<nav id="nav_tourism" class="nav_item ">
<div class="mx-auto sectionxs font-18 container-fluid px-5">
<span onclick="ch_close_nav('tourism')" class="ch-button font-48 ch-display-topright ch-hover-white sectionxsclosenavspan">&times;</span><br>
<div class="row ch-bar-block">
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">History of Chittorgarh</div>
<a class="ch-bar-item ch-button" href="/article/chittorgarh-history/231/" title="Chittorgarh City History">History of Chittorgarh</a>
<a class="ch-bar-item ch-button" href="/article/maharana-pratap/243/" title="Maharana Pratap">Maharana Pratap</a>
<a class="ch-bar-item ch-button" href="/article/meera-bai/244/" title="Meera Bai">Meera Bai</a>
<a class="ch-bar-item ch-button" href="/article/panna-dhai/247/" title="Panna Dhai">Panna Dhai</a>
<a class="ch-bar-item ch-button" href="/article/rani-padmini/249/" title="Rani Padmini">Rani Padmini</a>
<a class="ch-bar-item ch-button" href="/article/chittorgarh_and_jainism/213/" title="Jainism & Chittorgarh in Hindi">Jainism & Chittor (Hindi)</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Tourism at Chittorgarh</div>
<a class="ch-bar-item ch-button" href="/article/tourism-at-chittorgarh/255/" title="Chittorgarh Fort">Fort of Chittorgarh</a>
<a class="ch-bar-item ch-button" href="/report/photo-gallery/87/" title="Photo Gallery - Chittorgarh, Rajasthan">Photo Gallery</a>
<a class="ch-bar-item ch-button" href="/article/tourism-around-chittorgarh/254/" title="Places to visit around Chittorgarh, Rajasthan">Around Chittorgarh</a>
<a class="ch-bar-item ch-button" href="/article/how-to-reach-chittorgarh/241/" title="How to Reach Chittorgarh, Rajasthan">How to Reach</a>
</div>
<div class="col-12 col-md-2 col-sm-3">
<div class="h5 mt-3">Chittorgarh City Info</div>
<a class="ch-bar-item ch-button" href="/article/chittorgarh-city-map/229/" title="City Map">Chittorgarh City Map</a>
<a class="ch-bar-item ch-button" href="/article/chittorgarh-hotel/232/" title="City Hotels">Hotels / Resorts</a>
<a class="ch-bar-item ch-button" href="/article/sainik-school-chittorgarh/251/" title="Sainik School Chittorgarh">Sainik School Chittorgarh</a>
<a class="ch-bar-item ch-button" href="/article/cement-industry-in-chittorgarh/228/" title="Cement Industry of Chittorgarh">Cement Industry</a>
<a class="ch-bar-item ch-button" href="/article/hindustan-zinc-home/240/" title="Hindustan Zinc Limited at Chittorgarh">Hindustan Zinc</a>
</div>
</div>
</div>
</nav>
<div class="offcanvas offcanvas-end" tabindex="-1" id="sidenavRight" aria-labelledby="sidenavRightLabel">
<div class="offcanvas-body px-0 py-0 d-flex flex-column">
<button type="button" id="sidenavRightCloseBtn" class="btn-close d-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
<a href="#" class="ch-bar-item ch-button flex-fill" onClick="popup_win(gAlphaPath+'profile.asp'); return false;" title="User Profile"><i class="fa fa-user align-middle"></i></a>
<a href="#" class="ch-bar-item ch-button share-button flex-fill" title="Share Page Link"><i class="fa fa-share-alt align-middle"></i></a>
<a href="#" class="ch-bar-item ch-button flex-fill" onClick="return popup_win('https://alpha.chittorgarh.com/contactus.asp'); return false;" title="Contact Us"><i class="fa fa-envelope align-middle"></i></a>
<a href="#" class="darkmode ch-bar-item ch-button flex-fill" onClick="toggleDarkMode(); return false;" title="Darkmode switch"><i class="fa fa-adjust align-middle"></i></a>
</div>
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="sidenav" data-bs-keyboard="false" data-bs-backdrop="false" style="width:300px;padding-left:5px">
<div class="offcanvas-body px-0 py-0">
<div style="height: 36px;width: 36px;position: absolute;left: 300px;margin-top: 0px;background: #ccc;" id="offcanvas-closebtn">
<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" style="font-size: 24px;" id="offcanvasCloseBtn"></button>
</div>
<div id="leftmenuinnerinner" class="accordion" style="background-color:#E7E9EB;">
<div class="d-flex align-items-center justify-content-center" style="height: 100%;"><img src="/images/loading.gif" height="50" width="50" alt="Loading..."></div>
</div>
</div>
</div>
<div class="container-fluid px-2">
<div class="row ch-main ch-light-grey">
<div class="col-12">

<div class="row mb-2 ch-hide-small ch-hide-medium" id="div-ad-header-linkunit-desktop">
<div class="col-12 col-lg-4 col-md-4 col-sm-4 mt-2">
&nbsp;&nbsp;<a href="https://tinyurl.com/broker-zerodha-homepage" title="Zerodha - Open Account in 15 Minutes" target="_blank" class="text-decoration-none">&#9658; <b>Zerodha</b> (&#8377;20/Trade) <span class="btn btn-xs btn-danger text-white">Open Instant Account</span></a>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 mt-2">
&nbsp;&nbsp;<a href="https://tinyurl.com/broker-angel-one" title="Angel Broking - Open Online Account" target="_blank" class="text-decoration-none">&#9658; <b>Angel One</b> (&#8377;20/trade) <span class="btn btn-xs btn-warning">Open Account Now!</span></a>
</div>
<div class="col-12 col-lg-4 col-md-4 col-sm-4 mt-2">
&nbsp;&nbsp;<a href="https://tinyurl.com/broker-motilaloswal" title="Motilal Oswal - Open Account in 5 Minutes" target="_blank" class="text-decoration-none">&#9658; <b>Motilal Oswal</b> (Free Intraday) <span class="btn btn-xs btn-primary">Open Instant Account</span></a>
</div>


</div>


<div class="row mb-2 ch-hide-large" id="div-ad-header-linkunit-mobile">
<div class="col-12 col-lg-4 col-md-4 col-sm-4 mt-2 text-truncate">
&nbsp;&nbsp;<a href="https://tinyurl.com/broker-zerodha-homepage" title="Zerodha - Open Account in 15 Minutes" target="_blank" class="text-decoration-none"><b>&#9658;</b> <b>Zerodha</b> (&#8377;20/trade) <span class="btn btn-xs btn-danger text-white">Open Instant Account</span></a>
</div>
<div class="col-lg-4 col-md-4 col-sm-4 mt-2">
&nbsp;&nbsp;<a href="https://tinyurl.com/broker-angel-one" title="Angel Broking - Open Online Account" target="_blank" class="text-decoration-none">&#9658; <b>Angel One</b> (&#8377;20/trade) <span class="btn btn-xs btn-warning">Open Account Now!</span></a>
</div>
</div>

</div>
</div>
<div class="row ch-main ch-light-grey">
<div class="col-12">
<table class="table table-borderless w-100 mainLeaderboard">
<tr>
<td class="mb-2 align-middle text-center">

<div id="div-gpt-ad-1643200713480-0" class="align-middle">
<script>
										googletag.cmd.push(function() { 
											googletag.display('div-gpt-ad-1643200713480-0'); 
											googletag.pubads().refresh([gptAdSlots[2]]);
										});
										// googletag.cmd.push(function() { googletag.display('div-gpt-ad-1643200713480-0'); setInterval(function(){googletag.pubads().refresh([_Mrec1]);}, 60000); });
									</script>
</div>
</td>
</tr>
</table>
</div>
</div>
<div class="row ch-main ch-light-grey" id="belowmain-nav">
<div class="col-12 col-md-12 col-lg-12 col-xl-10 main" id="main">
<nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/newportal/stock_list.asp" title="Stock Lists"><u>Stock Lists</u></a>
</li>
<li class="breadcrumb-item active" aria-current="page">Castrol India Ltd. Stock</li>
</ol>
</nav>
<div class="row mb-2">
<div class="col-12">
<H1>Castrol India Ltd. Stock Quotes & Charts</H1>
</div>
</div>
<div class="row align-items-center mt-3 mb-3 border p-2 bg-highlight">
<div class="col-md-2">
<label class="form-label"><b>Search Stock Quotes:</b></label>
</div>
<div class="col-md-4">
<input id="SearchQuoteString" placeholder="Enter Security Name / Code / ID / ISIN" class="form-control" list="SearchQuotelist" onchange="GetQuoteId();" autocomplete="off" />
<datalist id="SearchQuotelist"></datalist>
</div>
</div>
<div class="row">
<div class="col-12" itemscope itemtype="http://schema.org/Table">
<H2 itemprop="about">Castrol India Ltd. Stock details</H2>
<div class="table-responsive">
<table class="table table-bordered table-striped table-hover w-auto">
<tbody>
<tr><td>BSE Script Code</td><td>500870</td></tr>
<tr><td>Face Value</td><td>5</td></tr>
<tr><td>Symbol</td><td>CASTROLIND</td></tr>
<tr><td>BSE Script ID</td><td>CASTROLIND</td></tr>
<tr><td>ISIN Number</td><td>INE172A01027</td></tr>
<tr><td>Industry</td><td>Lubricants</td></tr>
<tr>
<td>Series</td>
<td>EQ</td>
</tr>
<tr>
<td>52 Week High</td>
<td>₹208.10 (Feb 02, 2024)</td>
</tr>
<tr>
<td>52 Week Low</td>
<td>₹107.40 (Mar 27, 2023)</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="row">
<div class="col-md-6">
<h2>CASTROL INDIA LTD. BSE Stock Quotes</h2>
<div class="table-responsive">
<table class="table table-bordered table-striped table-hover w-auto">
<tbody>
<tr>
<td colspan="2" class="text-center"><b>BSE</b></td>
</tr>
<tr>
<td colspan="2">
<div style="float:left; margin:10px;"><img src="https://www.chittorgarh.com/images/stock_index_down_48.png" alt="Arrow" title="Arrow" style="height: 48px;width: 48px;"></DIV>
<span style="FONT-SIZE:2em;">₹193.55</span>
<br><span style="color:#FF0000">-8.25</span> (<span style="color:#FF0000">-4.09%</span>)
</td>
</tr>
<tr>
<td><b>Day Open</b></td>
<td>₹203.55</td>
</tr>
<tr>
<td><b>Day High - Low</b></td>
<td>₹205.10 - ₹192.00</td>
</tr>
<tr>
<td><b>Previous Day Close</b></td>
<td>₹201.80</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>
<tr>
<td>Total Traded Shares</td>
<td>7,08,603</td>
</tr>
<tr>
<td>Total Number of Trades</td>
<td>8,310</td>
</tr>
<tr>
<td>Net Turnover</td>
<td>₹14,02,40,899.00</td>
</tr>
</tbody>
</table>
</div>
<h3>CASTROL INDIA LTD. Stock Charts</h3>
<div id="chart_bse" class="text-center my-3">
<div class="row">
<div class="col-md-12 text-center">
<img class="img-fluid lazy" id="stockChart500870" src="/images/placeholder/300x171.png" data-original="https://main.icharts.in/ShowChart.php?symbol=500870&period=Daily&chart_type=LINE&period_type=C&start_date=2024-02-06&end_date=2024-02-13&chart_size=300" alt="500870 Chart" title="500870 Chart" style="height: 171px;width: 300px;">
</div>
<div class="col-md-12 text-center">
<div id="7D500870" class="period periodSelected"><a title="Last 7 Days" href="javascript:funModifyStockChart(&quot;500870&quot;,&quot;7&quot;,&quot;7D&quot;);">7D</a></div>
<div id="15D500870" class="period"><a title="Last 15 Days" href="javascript:funModifyStockChart(&quot;500870&quot;,&quot;15&quot;,&quot;15D&quot;);">15D</a></div>
<div id="1M500870" class="period"><a title="Last 1 Month" href="javascript:funModifyStockChart(&quot;500870&quot;,&quot;1M&quot;,&quot;1M&quot;);">1M</a></div>
<div id="3M500870" class="period"><a title="Last 3 Months" href="javascript:funModifyStockChart(&quot;500870&quot;,&quot;3M&quot;,&quot;3M&quot;);">3M</a></div>
<div id="6M500870" class="period"><a title="Last 6 Months" href="javascript:funModifyStockChart(&quot;500870&quot;,&quot;6M&quot;,&quot;6M&quot;);">6M</a></div>
<div id="1Y500870" class="period"><a title="Last 1 Year" href="javascript:funModifyStockChart(&quot;500870&quot;,&quot;1Y&quot;,&quot;1Y&quot;);">1Y</a></div>
<div id="18M500870" class="period"><a title="Last 18 Months" href="javascript:funModifyStockChart(&quot;500870&quot;,&quot;18M&quot;,&quot;18M&quot;);">18M</a></div>
<div id="2Y500870" class="period"><a title="Last 2 Years" href="javascript:funModifyStockChart(&quot;500870&quot;,&quot;2Y&quot;,&quot;2Y&quot;);">2Y</a></div>
</div>
</div>
</div>
</div>
<div class="col-md-6">
<h2>Castrol India Limited NSE Stock Quotes</h2>
<div class="table-responsive">
<table class="table table-bordered table-striped table-hover w-auto">
<tbody>
<tr>
<td colspan="2" class="text-center"><b>NSE</b></td>
</tr>
<tr>
<td colspan="2">
<div style="float:left; margin:10px;"><img src="https://www.chittorgarh.com/images/stock_index_down_48.png" alt="Arrow" title="Arrow" style="height: 48px;width: 48px;"></DIV>
<span style="FONT-SIZE:2em;">₹193.70</span>
<br><span style="color:#FF0000">-7.90</span> (<span style="color:#FF0000">-3.92%</span>)
</td>
</tr>
<tr>
<td><b>Day Open</b></td>
<td>₹203.00</td>
</tr>
<tr>
<td><b>Day High - Low</b></td>
<td>₹205.30 - ₹192.15</td>
</tr>
<tr>
<td><b>Previous Day Close</b></td>
<td>₹201.60</td>
</tr>
<tr>
<td colspan="2"></td>
</tr>
<tr>
<td>Total Traded Shares</td>
<td>54,78,947</td>
</tr>
<tr>
<td>Total Number of Trades</td>
<td>56,311</td>
</tr>
<tr>
<td>Net Turnover (Rs)</td>
<td>₹1,08,84,29,591.10</td>
</tr>
</tbody>
</table>
</div>
<h3>Castrol India Limited Stock Charts</h3>
<div id="chart_nse" class="text-center my-3">
<div class="row">
<div class="col-md-12 text-center">
<img class="img-fluid lazy" id="stockChartCASTROLIND" src="/images/placeholder/300x171.png" data-original="https://main.icharts.in/ShowChart.php?symbol=CASTROLIND&period=Daily&chart_type=LINE&period_type=C&start_date=2024-02-06&end_date=2024-02-13&chart_size=300" alt="CASTROLIND Chart" title="CASTROLIND Chart">
</div>
<div class="col-md-12 text-center">
<div id="7DCASTROLIND" class="period periodSelected"><a title="Last 7 Days" href="javascript:funModifyStockChart(&quot;CASTROLIND&quot;,&quot;7&quot;,&quot;7D&quot;);">7D</a></div>
<div id="15DCASTROLIND" class="period"><a title="Last 15 Days" href="javascript:funModifyStockChart(&quot;CASTROLIND&quot;,&quot;15&quot;,&quot;15D&quot;);">15D</a></div>
<div id="1MCASTROLIND" class="period"><a title="Last 1 Month" href="javascript:funModifyStockChart(&quot;CASTROLIND&quot;,&quot;1M&quot;,&quot;1M&quot;);">1M</a></div>
<div id="3MCASTROLIND" class="period"><a title="Last 3 Months" href="javascript:funModifyStockChart(&quot;CASTROLIND&quot;,&quot;3M&quot;,&quot;3M&quot;);">3M</a></div>
<div id="6MCASTROLIND" class="period"><a title="Last 6 Months" href="javascript:funModifyStockChart(&quot;CASTROLIND&quot;,&quot;6M&quot;,&quot;6M&quot;);">6M</a></div>
<div id="1YCASTROLIND" class="period"><a title="Last 1 Year" href="javascript:funModifyStockChart(&quot;CASTROLIND&quot;,&quot;1Y&quot;,&quot;1Y&quot;);">1Y</a></div>
<div id="18MCASTROLIND" class="period"><a title="Last 18 Months" href="javascript:funModifyStockChart(&quot;CASTROLIND&quot;,&quot;18M&quot;,&quot;18M&quot;);">18M</a></div>
<div id="2YCASTROLIND" class="period"><a title="Last 2 Years" href="javascript:funModifyStockChart(&quot;CASTROLIND&quot;,&quot;2Y&quot;,&quot;2Y&quot;);">2Y</a></div>
</div>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-lg-6 col-md-6 col-sm-12" itemscope itemtype="http://schema.org/Table">
<h2 itemprop="about">Castrol India Ltd. dividend</h2>
<table class="table table-bordered table-striped table-hover w-auto">
<thead>
<tr>
<th>Action</th>
<th>Date Recorded</th>
<th>Dividend Ratio</th>
</tr>
</thead>
<tbody>
<tr>
<td>
Dividend
</td>
<td>
March 21, 2024
</td>
<td>
₹4.50
</td>
</tr>
<tr>
<td>
Interim Dividend
</td>
<td>
August 8, 2023
</td>
<td>
Interim.Dividend
</td>
</tr>
<tr>
<td>
Dividend
</td>
<td>
May 4, 2023
</td>
<td>
₹3.50
</td>
</tr>
<tr>
<td>
Dividend
</td>
<td>
May 4, 2023
</td>
<td>
₹3.50
</td>
</tr>
<tr>
<td>
Interim Dividend
</td>
<td>
August 10, 2022
</td>
<td>
₹3.00
</td>
</tr>
</tbody>
</table>
</div>
<div class="col-lg-6 col-md-6 col-sm-12" itemscope itemtype="http://schema.org/Table">
<h2 itemprop="about">Castrol India Ltd. results</h2>
<table class="table table-bordered table-striped table-hover w-auto">
<thead>
<tr>
<th>Company Name</th>
<th>Security Name</th>
<th>Date Recorded</th>
</tr>
</thead>
<tbody>
<tr>
<td>
CASTROL INDIA LTD
</td>
<td>
CASTROLIND
</td>
<td>
February 1, 2024
</td>
</tr>
<tr>
<td>
CASTROL INDIA LTD
</td>
<td>
CASTROLIND
</td>
<td>
October 30, 2023
</td>
</tr>
<tr>
<td>
CASTROL INDIA LTD
</td>
<td>
CASTROLIND
</td>
<td>
July 31, 2023
</td>
</tr>
<tr>
<td>
CASTROL INDIA LTD
</td>
<td>
CASTROLIND
</td>
<td>
May 9, 2023
</td>
</tr>
<tr>
<td>
CASTROL INDIA LTD
</td>
<td>
CASTROLIND
</td>
<td>
May 9, 2023
</td>
</tr>
</tbody>
</table>
</div>
</div>
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
<h2> Comments</h2>
<button type="button" class="btn float-end btn-primary btn-xs" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?t=18&a=278&b=0')" title="Post New Message">Post New Message</button>
</div>
</div>
<div class="row">
<div class="col-12">
<p>Add a public comment...</p>
</div>
</div>
<div class="row text-center mb-3">
<div class="col-12">
<button type="button" class="btn btn-xs float-end btn-primary" onClick="return popup_win('https://alpha.chittorgarh.com/post_comment_chr.asp?t=18&a=278&b=0')" title="Post New Message">Post New Message</button>
</div>
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
		function funModifyStockChart(symbol, period, divName) {
			chartObj = document.getElementById('stockChart' + symbol);
			if (period == "1M" || period == "3M" || period == "6M" || period == "1Y" || period == "18M" || period == "2Y") {
				chartObj.src = "https://main.icharts.in/ShowChart.php?symbol=" + symbol + "&period=Daily&chart_type=LINE&period_type=P&pr_period=" + period + "&chart_size=300";
			}
			else if (period == "7" || period == "15") {
				var today = getTodayDate();
				chartObj.src = "https://main.icharts.in/ShowChart.php?symbol=" + symbol + "&period=Daily&chart_type=LINE&period_type=C&start_date=" + subtractDays(today, period) + "&end_date=" + today + "&chart_size=300";
			}

			resetDivBackgroundColor(symbol);
			document.getElementById(divName + symbol).style.background = '#FFFF66';
		}

		function resetDivBackgroundColor(symbol) {
			document.getElementById("7D" + symbol).style.background = 'none';
			document.getElementById("15D" + symbol).style.background = 'none';
			document.getElementById("1M" + symbol).style.background = 'none';
			document.getElementById("3M" + symbol).style.background = 'none';
			document.getElementById("6M" + symbol).style.background = 'none';
			document.getElementById("1Y" + symbol).style.background = 'none';
			document.getElementById("18M" + symbol).style.background = 'none';
			document.getElementById("2Y" + symbol).style.background = 'none';
		}

		function y2k(number) { return (number < 1000) ? number + 1900 : number; }
		function getTodayDate() {
			cur = new Date();
			return y2k(cur.getYear()) + '-' + (cur.getMonth() + 1) + '-' + cur.getDate();
		}

		function subtractDays(givenDate, daysToSub) {
			// parse s for YYYY-MM-dd	
			var dateArray = givenDate.split('-');
			sdate = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
			var odate = new Date(sdate.getTime() - (daysToSub * 86400000));
			return y2k(odate.getYear()) + '-' + (odate.getMonth() + 1) + '-' + odate.getDate();
		}
		document.addEventListener("DOMContentLoaded", function() {
			var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

			if ("IntersectionObserver" in window) {
				let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
				entries.forEach(function(entry) {
					if (entry.isIntersecting) {
					let lazyImage = entry.target;
					lazyImage.src = lazyImage.dataset.original;
					// lazyImage.srcset = lazyImage.dataset.srcset;
					lazyImage.classList.remove("lazy");
					lazyImageObserver.unobserve(lazyImage);
					}
				});
				});

				lazyImages.forEach(function(lazyImage) {
				lazyImageObserver.observe(lazyImage);
				});
			} else {
				// Possibly fall back to event handlers here
			}
		});
	</script>
<script>
		var g_leftnav = "Broker";
	</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"854b02fd5dba215f","version":"2024.2.0","token":"8d4061b05f4b4776849e94df693928a6"}' crossorigin="anonymous"></script>
</body>
</html>