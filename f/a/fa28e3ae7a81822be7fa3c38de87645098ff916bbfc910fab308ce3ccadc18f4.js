"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[47132,19436,4494],{45672:function(n,e,t){t.r(e);var o=t(75190),i=t(52322),a=t(2784),r=t(81611),c=t(82740),l=t(19956),u=t(29101),d=t(10444),s=t(87681),f=t(99366),v=t(25084),h=t(67665),C=t(19541),p=t(77808),g=t(13660),x=t(8590),y=t(17721),m=t(70882),Z=t(64999);function E(){var n=(0,o.Z)(["\n  background-color: ",";\n  position: fixed;\n  top: 0;\n  opacity: 0;\n  right: 0;\n  height: 100%;\n  z-index: ",";\n  overflow: scroll;\n  transition: opacity 200ms ease 0s;\n  width: 100%;\n  overscroll-behavior: none;\n\n  &.enter-active {\n    opacity: 0;\n  }\n  &.enter-done {\n    opacity: 1;\n  }\n  &.exit-active {\n    opacity: 1;\n  }\n  &.exit-done {\n    opacity: 0;\n  }\n"]);return E=function(){return n},n}var S=a.lazy((function(){return t.e(21103).then(t.bind(t,21103))})),L=(0,f.D)((function(n){v.ZP.sendEvent({category:"Quick Search",action:"Query Entered",label:n})}),1e3),A=(0,f.D)((function(n){v.ZP.sendEvent({category:"SearchBar",action:"User Searched Empty",label:n})}),1e3),b=function(n){var e=n.url,t=n.flightId,o=n.advertiser,i=n.title;v.ZP.sendEvent({category:"Sponsored search",action:"Native Ad Click",label:"".concat(o," | ").concat(t," | ").concat(i)}),window.open(e)},_=c.ZP.div.withConfig({componentId:"sc-103be33a-0"})(E(),(function(n){return n.theme.colors.background}),s.W5.HEADER_MOBILE_SEARCH_TAKEOVER);e.default=function(n){var e,t,o,c,s,f,v,E,k,w=n.isOpen,P=n.onClose,R=n.t,j=function(){q(""),$(!1),P()},O=(0,a.useContext)(u.Zy).mapData,H=(0,a.useContext)(d.G).setAdState,I=(0,a.useRef)(null),V=O.data,D=(0,p.ZP)(),N=(0,a.useState)(!1),M=N[0],T=N[1],F=(0,a.useState)(""),Q=F[0],q=F[1],B=(0,a.useState)(!1),X=B[0],G=B[1],z=null!==(k=Q.replace(/\s*/g,""))&&void 0!==k?k:"",K=(0,C.qQ)(),U=(0,a.useState)(!1),W=U[0],$=U[1],Y=(0,p.Gp)({enabled:w}),J=Y.data,nn=(0,p.QM)(z,{alldexerFlag:W}),en=(0,p.NP)(Q),tn=(0,g.UX)(Q);(0,a.useEffect)((function(){T(w),K||(0,C.Cp)(C._.AD_SPEC_SEARCH).then((function(n){n&&H(n)}))}),[w]),(0,a.useEffect)((function(){w&&(performance.mark("SearchOpen"),I.current||(I.current=Date.now()),D(),nn.refetch())}),[w]),(0,a.useEffect)((function(){(null===V||void 0===V?void 0:V.length)>0&&(performance.mark("SearchReady"),(0,h.I)({t:"search_perf_load_dex_pairs",loadDexPairs:I.current?Date.now()-I.current:0}))}),[V]);var on=(0,p.It)(Q),an=on.cryptoResultMemo,rn=on.isLoading,cn=(0,p.iQ)(Q,w),ln=(0,p.F_)(Q);(0,a.useEffect)((function(){an.length||ln.length||!Q||A(Q)}),[an,ln,Q]);var un=nn.isLoading||!(null===V||void 0===V?void 0:V.length)||en.isLoading;return(0,i.jsx)(r.Z,{in:M,timeout:0,mountOnEnter:!0,unmountOnExit:!0,children:(0,i.jsx)(_,{children:(0,i.jsxs)(y.Z,{onChange:function(n){var e,t=null!==(e=n.replace(/\s*/g,""))&&void 0!==e?e:"";if(""===t)return q(""),void $(!1);t&&(L(n),q(n))},onClose:j,t:R,searchable:!0,children:[""!==Q&&Q?(0,i.jsx)(x.Z,{ad:K,onAdClick:b,cryptos:an,categories:cn,exchanges:ln,onClose:P,text:Q,nfts:en.isLoading?[]:(null===(e=en.data)||void 0===e?void 0:e.collectionList)||[],nftsLen:en.isLoading?0:(null===(t=en.data)||void 0===t?void 0:t.total)||0,dexpairs:nn.isLoading?[]:(null===(o=nn.data)||void 0===o||null===(c=o.data)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.pairs)||[],dexpairLen:nn.isLoading?0:(null===(f=nn.data)||void 0===f||null===(v=f.data)||void 0===v||null===(E=v.data)||void 0===E?void 0:E.total)||0,setAlldexerFlag:$,isload:un,isLoadingPrice:rn,community:tn,setShowSearchInstruction:G}):(0,i.jsx)(Z.Z,{ad:K,onAdClick:b,data:J||[],t:R,onClose:j,isLoading:Y.isLoading,visible:!0,setShowSearchInstruction:G}),!Q&&(0,i.jsx)(a.Suspense,{fallback:null,children:(0,i.jsx)(S,{type:l.F.SEARCH,position:"SEARCH BOX"})}),X&&(0,i.jsx)(m.Z,{t:R})]})})})}},38629:function(n,e,t){var o=t(52322),i=t(2784),a=t(68434),r=t(29101),c=function(n){var e=n.sx,t=(0,r.qL)().headerOffset;return(0,o.jsx)(a.Z,{__css:{height:"".concat(t,"px"),width:"100%"},sx:e})};e.Z=i.memo(c)},15556:function(n,e,t){t.r(e);var o=t(75190),i=t(52322),a=t(2784),r=t(81611),c=t(82740),l=t(19956),u=t(29101),d=t(10444),s=t(87681),f=t(99366),v=t(25084),h=t(67665),C=t(19541),p=t(77808),g=t(13660),x=t(8590),y=t(17721),m=t(70882),Z=t(64999),E=t(38629);ar L=a.lazy((),A=(0,f.D)((function(n){v.ZP.sendEvent({category:"Quick Search",action:"Query Entered",label:n})}),1e3),b=(0,f.D)((,1e3),_=function(n){var e=n.url,t=n.flightId,o=n.advertiser,i=n.title;v.ZP.sendEvent({category:"Sponsored search",action:"Native Ad Click",label:"".concat(o," | ").concat(t," | ").concat(i)}),window.open(e)},k=c.ZP.div.withConfig({componentId:"sc-614527d3-0"})(S(),(,s.W5.HEADER_MOBILE_SEARCH_TAKEOVER);e.default=function(n){var e,t,o,c,s,f,v,S,w,P=n.isOpen,R=n.onClose,j=n.t,O=H=(0,a.useContext)(u.Zy).mapData,I=(0,a.useContext)(d.G).setAdState,V=(0,a.useRef)(null),D=H.data,N=(0,p.ZP)(),M=(0,a.useState)(!1),T=M[0],F=M[1],Q=(0,a.useState)(!1),q=Q[0],B=Q[1],X=(0,a.useState)(""),G=X[0],z=X[1],K=null!==(w=G.replace(/\s*/g,""))&&void 0!==w?w:"",U=(0,C.qQ)(),W=(0,a.useState)(!1),$=W[0],Y=W[1],J=(0,p.Gp)({enabled:P}),nn=J.data,en=(0,p.QM)(K,{alldexerFlag:$}),tn=(0,p.NP)(G);(0,a.useEffect)((function(){F(P),U||(0,C.Cp)(C._.AD_SPEC_SEARCH).then(()}),[P]),(0,a.useEffect)((function(){P&&(performance.mark("SearchOpen"),V.current||(V.current=Date.now()),N(),en.refetch())}),[P]),(0,a.useEffect)((function(){(null===D||void 0===D?void 0:D.length)>0&&(performance.mark("SearchReady"),(0,h.I)({t:"search_perf_load_dex_pairs",loadDexPairs:V.current?Date.now()-V.current:0}))}),[D]);var on=(0,p.It)(G).cryptoResultMemo,an=(0,p.iQ)(G,P),rn=(0,p.F_)(G),cn=(0,g.UX)(G);(0,a.useEffect)((function(){on.length||rn.length||!G||b(G)}),[on,rn,G]);var ln=en.isLoading||!(null===D||void 0===D?void 0:D.length)||tn.isLoading;return(0,i.jsx)(r.Z,{in:T,timeout:0,mountOnEnter:!0,unmountOnExit:!0,children:(0,i.jsxs)(k,{children:[(0,i.jsx)(E.Z,{}),(0,i.jsxs)(y.Z,{onChange:function(n){var e,t=null!==(e=n.replace(/\s*/g,""))&&void 0!==e?e:"";if(""===t)return z(""),void Y(!1);t&&(A(n),z(n))},onClose:O,t:j,searchable:!0,children:[""!==G&&G?(0,i.jsx)(x.Z,{ad:U,onAdClick:_,cryptos:on,categories:an,exchanges:rn,onClose:R,text:G,nfts:tn.isLoading?[]:(null===(e=tn.data)||void 0===e?void 0:e.collectionList)||[],nftsLen:tn.isLoading?0:(null===(t=tn.data)||void 0===t?void 0:t.total)||0,dexpairs:en.isLoading?[]:(null===(o=en.data)||void 0===o||null===(c=o.data)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.pairs)||[],dexpairLen:en.isLoading?0:(null===(f=en.data)||void 0===f||null===(v=f.data)||void 0===v||null===(S=v.data)||void 0===S?void 0:S.total)||0,setAlldexerFlag:Y,isload:ln,community:cn,setShowSearchInstruction:B}):(0,i.jsx)(Z.Z,{ad:U,onAdClick:_,data:nn||[],t:j,onClose:O,isLoading:J.isLoading,visible:!0,setShowSearchInstruction:B}),!G&&(0,i.jsx)(a.Suspense,{fallback:null,children:(0,i.jsx)(L,{type:l.F.SEARCH,position:"SEARCH BOX"})}),q&&(0,i.jsx)(m.Z,{t:j})]})]})})}},3154:function(n,e,t){t.d(e,{OF:function(){return f},Vb:function(){return s},lC:function(){return d},rW:function(){return u}});var o=t(2784),i=t(5632),a=t(68050),r=t(87612),c=t(29101),l=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=n.replace(/\/\/+/,"/"),o=n.split("?")[1];return o?t:e?"/"!==t.charAt(t.length-1)?t+"/":t:t.replace(/\/$/,"")},u=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en";return e&&"en"!==e?l("/".concat(e,"/").concat(n)):n},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",t=function(n){return n.includes("community")?e&&"en"!==e?"/community/".concat(e,"/").concat(n.replace("/community","")):"/".concat(n):e&&"en"!==e?"/community/".concat(e,"/").concat(n):"/community/".concat(n)};return l(t(n))},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"en",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=function(n){return n.includes("dexscan")?e&&"en"!==e?"/dexscan/".concat(e,"/").concat(n.replace("/dexscan","")):"/".concat(n):e&&"en"!==e?"/dexscan/".concat(e,"/").concat(n):"/dexscan/".concat(n)};return l(o(n),t)},f=function(){var n,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=function(){u?a.push(h.replace("/community","")):location.href=h},a=(0,i.useRouter)(),r=(0,o.useContext)(c.Zy),l=r.language,u=r.isGravityApp,s=Array.isArray(a.query.lang)?null===(n=a.query.lang)||void 0===n?void 0:n[0]:a.query.lang,f=s||l,v=(0,o.useState)(d(e,f)),h=v[0],C=v[1];return(0,o.useEffect)((,[e,f]),{href:h,onClick:t,communityLangPrefix:d("/",f).replace(/\/$/,"")}};e.ZP=function(n){var e,t=n.url,l=void 0===t?"/":t,d=n.needsLogin,s=void 0!==d&&d,f=n.beforeCallback,v=void 0===f?a.Z:f,h=n.formatUrl,C=(0,i.useRouter)(),p=(0,o.useContext)(r.gX),g=p.userInfo,x=p.invokeLogin,y=(0,o.useContext)(c.Zy).language,m=(Array.isArray(C.query.lang)?null===(e=C.query.lang)||void 0===e?void 0:e[0]:C.query.lang)||y,Z=u(l,m);h&&(Z=h(l,m));var E=function(){"function"===typeof v&&v(l),location.href=Z};return{onClick:s&&!(null===g||void 0===g?void 0:g.id)?function(){return"function"===typeof v&&v()},href:Z}}},53551:function(n,e,t){var o=t(81541),i=t(2784);e.Z=function(n){var e=(0,i.useRef)(!1);return(0,i.useCallback)((function(){for(var t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];e.current||(n.apply(void 0,(0,o.Z)(i)),e.current=!0)}),[n])}},86931:function(n,e,t){var o=t(62230),i=t(85244),a=t(52322),r=(t(2784),t(92324));e.Z=function(n){return(0,a.jsx)(r.Z,(0,i.Z)((0,o.Z)({fill:"none"},n),{children:(0,a.jsx)("path",{d:"M19.3907 13.9512C19.0367 14.1717 18.6198 14.199 18.3029 14.0229C17.9004 13.799 17.6791 13.2746 17.6791 12.5454V10.3634C17.6791 9.30976 17.2562 8.56 16.5492 8.35756C15.351 8.01366 14.4499 9.45805 14.1112 10.0005L11.998 13.3761V9.25024C11.9743 8.30098 11.6613 7.73317 11.0672 7.56195C10.6741 7.44878 10.0859 7.49415 9.51449 8.35561L4.78012 15.8454C4.1463 14.6599 3.81589 13.3399 3.81759 12C3.81759 7.48829 7.48745 3.81805 11.998 3.81805C16.5086 3.81805 20.178 7.48829 20.178 12C20.178 12.0078 20.1799 12.0146 20.1804 12.022C20.1804 12.0298 20.179 12.0366 20.1794 12.0444C20.222 12.918 19.9349 13.6127 19.3907 13.9512ZM21.9956 12.0005V11.9776L21.9951 11.9551C21.9698 6.46049 17.4954 2 11.9975 2C6.48532 2 2 6.48585 2 12C2 17.5137 6.48532 22 11.998 22C14.5276 22 16.9418 21.0527 18.7951 19.3332C19.1635 18.9917 19.1852 18.4166 18.8436 18.0488C18.6812 17.8723 18.4535 17.7677 18.2118 17.7585C17.9702 17.7493 17.735 17.8364 17.5593 18C16.0571 19.4015 14.0668 20.1823 11.998 20.182C9.58282 20.182 7.40972 19.1288 5.91098 17.4585L10.1804 10.7044V13.818C10.1804 15.3137 10.7691 15.7971 11.2628 15.9385C11.7569 16.08 12.512 15.9834 13.3047 14.7151L15.653 10.9644C15.7283 10.8434 15.7976 10.739 15.861 10.6488V12.5454C15.861 13.9434 16.4294 15.0615 17.4201 15.6122C18.3133 16.1088 19.4363 16.0639 20.3513 15.4951C21.4603 14.8049 22.0579 13.5332 21.9956 12.0005Z",fill:"currentColor"})}))}},6329:function(n,e,t){var o=t(62230),i=t(85244),a=t(52322),r=(t(2784),t(92324));e.Z=function(n){return(0,a.jsx)(r.Z,(0,i.Z)((0,o.Z)({fill:"none"},n),{iconName:"lib-community-i",children:(0,a.jsx)("path",{d:"M21.99 16.005V12C21.99 10.35 20.64 9 18.99 9H15.99V6C15.99 4.35 14.64 3 12.99 3H4.99501C3.34501 3 1.99501 4.35 1.99501 6V10.005C1.99501 10.98 2.475 11.835 3.195 12.39L2.28002 13.305C1.89002 13.695 1.89002 14.325 2.28002 14.715C2.47502 14.91 2.73002 15.015 2.98502 15.015C3.24002 15.015 3.49502 14.91 3.69002 14.715L5.4 13.005H7.98V16.005C7.98 17.655 9.33 19.005 10.98 19.005H18.57L20.28 20.715C20.475 20.91 20.73 21.015 20.985 21.015C21.24 21.015 21.495 20.91 21.69 20.715C22.08 20.325 22.08 19.695 21.69 19.305L20.775 18.39C21.495 17.835 21.975 16.98 21.975 16.005H21.99ZM8.17501 11.01H4.99501C4.44001 11.01 3.98999 10.56 3.98999 10.005V6C3.98999 5.445 4.44001 4.995 4.99501 4.995H12.99C13.545 4.995 13.995 5.445 13.995 6V9H10.995C9.69001 9 8.58001 9.84 8.17501 10.995V11.01ZM9.98999 16.005V12C9.98999 11.445 10.44 10.995 10.995 10.995H18.99C19.545 10.995 19.995 11.445 19.995 12V16.005C19.995 16.56 19.545 17.01 18.99 17.01H10.995C10.44 17.01 9.98999 16.56 9.98999 16.005Z",fill:"currentColor"})}))}},76409:function(n,e,t){t.d(e,{Z:function(){return l}});var o=t(52322),i=t(2784),a=t(41131),r=i.createContext(a.Z.STACKING_CONTEXT),c=function(n){var e=n.children,t=n.value,c=void 0===t?a.Z.STACKING_CONTEXT:t,l=(0,i.useContext)(r),u=Math.max(c,l),d=u+1;return(0,o.jsx)(r.Provider,{value:d,children:e(u)})};c.displayName="Stack";var l=i.memo(c)},41131:37881:function(n,e,t){t.d(e,{Xl:function(){return v}});var o=t(62230),i=t(85244),a=t(75190),r=t(52322),c=t(2784),l=t(82740),u=t(58358),d=t(53563);ar f=l.ZP.p.attrs({"data-sensors-click":!0}).withConfig({componentId:"sc-4984dd93-0"})(s(),d.Z,u.color,u.typography),v=(0,c.forwardRef)((function(n,e){return(0,r.jsx)(f,(0,i.Z)((0,o.Z)({},n),{as:"span",ref:e}))}));f.defaultProps={color:"text",fontSize:1},e.ZP=f}}]);