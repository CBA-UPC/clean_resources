"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{34055:function(e,s,r){var t=r(60042),l=r.n(t),d=r(27378),n=r(31139),i=r(98878),c=r(78392),a=r(24246),o=(0,d.forwardRef)((function(e,s){var r=e.children,t=e.className,o=e.stickyElement,m=e.offset,u=void 0===m?0:m,x=e.direction,h=void 0===x?"top":x,f=e.zIndex,p=void 0===f?849:f,j=e.threshold,v=void 0===j?.3:j,N=(0,d.useRef)(null),b=(0,d.useState)(1e3),g=b[0],w=b[1],y=(0,d.useRef)(null);return(0,c.Z)((),(0,i.Z)((function(){y.current&&new n.Z({threshold:v},!1).observe(y.current,(function(e){N.current&&(N.current.style.transform=e?"translateY(-".concat(g+u,"px)"):"translateY(-1px)")}))}),[]),"bottom"===h?(0,a.jsx)("div",{ref:s,children:"Bottom sticky anchor is not currently supported."}):(0,a.jsxs)("div",{ref:s,className:l()(t),children:[(0,a.jsx)("div",{ref:N,className:"ds-w-full ds-fixed ds-transition-all ds-duration-300",style:{zIndex:p,transform:"translateY(-".concat(g+u,"px)")},children:o}),(0,a.jsx)("div",{ref:y,children:r})]})}));o.displayName="DSStickyAnchor",s.Z=o},91591:function(e,s,r){r.r(s);var t=r(1717),l=r(60042),d=r.n(l),n=r(27378),i=r(71244),c=r(26375),a=r(28496),o=r(10817),m=r(92150),u=r(36077),x=r(81593),h=r(2251),f=r(34055),p=r(10897),j=r(81817),v=r(24246);r g=(0,n.forwardRef)((function(e,s){var r,t,l=e.title,N=e.onBack,g=e.icons,w=e.tabs,y=e.promotionNode,O=e.rightNodes,Z=e.className,E=e.sticky,R=void 0===E||E,D=(0,i.Z)(s),S=O&&O.length>0;switch(l.type){case p.iD.TEXT:var k=l;return(0,v.jsx)(x.Z,{mode:"top",disabled:!R,children:(0,v.jsxs)("div",{ref:D,className:d()("ds-bg-fill-navbar ds-w-full",Z),children:[(0,v.jsxs)("div",{className:"ds-flex ds-items-center ds-px-4",style:{height:48},children:[N?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(u.ZP,{name:h.v.ARROW_BACK_SOLID,className:"ds-p-2 ds--ml-2 ds-text-raw-white ds-cursor-pointer",color:j.BG.INVERSE,size:j.XR.MD,onClick:N})}):null,(0,v.jsx)("div",{className:"ds-grow ds-flex ds-items-center",children:(0,v.jsx)(o.Z,{anchorType:k.anchorType,children:(0,v.jsx)(a.Z,{title:k.title,titleClassName:"ds-px-2 ds-text-raw-white ds-line-clamp-1",size:k.size===p.oo.SM?a.t.MD:a.t.LG,imageUrl:k.imageUrl,iconName:k.iconName,titleElement:k.titleElement})})}),y&&(0,v.jsx)(n.Fragment,{children:y}),g&&g.map((function(e,s){return(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(m.Z,{children:(0,v.jsx)(u.ZP,b(b({},e),{},{className:d()("ds-p-2 ds-text-raw-white ds-cursor-pointer",{"ds--mr-2":!S&&s===g.length-1}),color:j.BG.INVERSE,size:j.XR.MD}))})},s)})),S?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:O}):null]}),w?(0,v.jsx)(c.ZP,b({className:"ds-border-b ds-border-line"},w)):null]})});case p.iD.ANCHOR:var P=l;return(0,v.jsx)(x.Z,{mode:"top",disabled:!R,children:(0,v.jsxs)("div",{ref:D,className:d()("ds-bg-fill-navbar ds-w-full",Z),children:[(0,v.jsxs)("div",{className:"ds-flex ds-items-center ds-px-4",style:{height:48},children:[N?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(u.ZP,{name:h.v.ARROW_BACK_SOLID,className:"ds-p-2 ds-mr-2 ds--ml-2 ds-text-raw-white ds-cursor-pointer",color:j.BG.INVERSE,size:j.XR.MD,onClick:N})}):null,(0,v.jsx)("div",{className:"ds-grow ds-flex ds-items-center",children:P.titleNode}),y&&(0,v.jsx)(n.Fragment,{children:y}),g&&g.map((function(e,s){return(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(m.Z,{children:(0,v.jsx)(u.ZP,b(b({},e),{},{className:d()("ds-px-2 ds-text-raw-white ds-cursor-pointer",{"ds--mr-2":!S&&s===g.length-1}),color:j.BG.INVERSE,size:j.XR.MD}))})},s)})),S?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:O}):null]}),w?(0,v.jsx)(c.ZP,b(b({},w),{},{className:"ds-border-b ds-border-line"})):null]})});case p.iD.IMAGE:var z=l,I=null!==(r=z.bgBlur)&&void 0!==r&&r,B=null===(t=z.bgGradient)||void 0===t||t,C=N?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(u.ZP,{name:h.v.ARROW_BACK_SOLID,className:"ds-p-2 ds--ml-2 ds-text-raw-white ds-cursor-pointer",color:j.BG.INVERSE,size:j.XR.MD,onClick:N})}):null,M=(0,v.jsx)("div",{className:"ds-grow ds-flex ds-items-center",children:(0,v.jsx)(o.Z,{anchorType:z.anchorType,children:(0,v.jsx)(a.Z,{title:z.title,titleClassName:"ds-px-2 ds-text-raw-white ds-line-clamp-1",size:z.titleSize===p.oo.SM?a.t.MD:a.t.LG,imageUrl:z.imageUrl,iconName:z.iconName,titleElement:z.titleElement})})}),A=g?(0,v.jsx)("div",{className:"ds-flex ds-items-center ds-ml-auto",children:g.map((function(e,s){return(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:(0,v.jsx)(m.Z,{children:(0,v.jsx)(u.ZP,b(b({},e),{},{className:d()("ds-p-2 ds-text-raw-white ds-cursor-pointer",{"ds--mr-2":!S&&s===g.length-1}),color:j.BG.INVERSE,size:j.XR.MD}))})},s)}))}):null,G=S?(0,v.jsx)("div",{className:"ds-flex ds-items-center",children:O}):null,_=(0,v.jsx)("div",{className:d()("ds-relative ds-z-0"),children:z.contentNode}),T=w?(0,v.jsx)(c.ZP,b(b({},w),{},{className:"ds-relative ds-z-0 ds-border-b ds-border-line"})):null,X=function(e,s){return(0,v.jsxs)("div",{ref:D,className:d()("ds-bg-no-repeat ds-relative ds-bg-center ds-bg-cover ds-w-full",Z),style:{backgroundImage:"url(".concat(z.bgImageUrl,")")},children:[(0,v.jsx)("div",{className:d()("ds-absolute ds-w-full ds-h-full ds-top-0 ds-left-0",{"ds-backdrop-blur-sm":I,"ds-bg-fill-fade-to-contrast":B})}),(0,v.jsxs)("div",{className:"ds-app-bar-header ds-relative ds-z-0 ds-flex ds-items-center ds-px-4",style:{height:48},children:[C,s?M:null,A,G]}),e?_:null,T]},"app-bar-image")},V=X(!0,!z.showTitleOnSticky);if(R){var L=X(!1,!0);return(0,v.jsx)(f.Z,{stickyElement:L,children:V})}return V;default:return null}}));g.displayName="DSWDAppBar",s.default=g}}]);