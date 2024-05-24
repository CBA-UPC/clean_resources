"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4902],{20618:function(e,n,r){r.d(n,{y:function(){return t}});var t,s=r(60042),a=r.n(s),i=r(27378),c=r(51826),l=r(36077),o=r(99011),u=r(5273),d=r(2251),f=r(81817),m=r(24246);!t||(t={}));var h=(0,i.forwardRef)((function(e,n){var r=e.className,s=e.variant,i=void 0===s?t.DEFAULT:s,h=e.options;return(0,m.jsx)("div",{ref:n,className:a()("ds-flex ds-items-center",r),children:h.map((function(e){return(0,c.Kn)(e.anchorType)?(0,m.jsxs)("div",{className:"ds-inline-flex",children:[(0,m.jsx)(o.Z,{containerClassName:"ds-mr-1",anchorType:e.anchorType,label:e.label,labelVariant:f.Fu.COMPACT_XS}),i===t.ARROW?(0,m.jsx)(l.ZP,{className:"ds-mr-1 ds-inline-flex ds-items-center",name:d.v.KEYBOARD_RIGHT_OUTLINE,size:f.XR.XS}):(0,m.jsx)(u.Z,{className:"ds-mr-1",variant:f.Fu.COMPACT_XS,children:"/"})]},e.key):(0,m.jsx)(u.Z,{variant:f.Fu.COMPACT_XS_BOLD,children:e.label},e.key)}))})}));h.displayName="DSBreadcrumb",n.Z=h},66876:function(e,n,r){var t=r(60042),s=r.n(t),a=r(27378),i=r(4188),c=r(51826),l=r(61931),o=r(39156),u=r(65031),d=r(23346),f=r(36077),m=r(2251),h=r(81817),x=r(32425),v=r(24246),Z=(0,a.forwardRef)((function(e,n){var r=e.className,t=e.options,Z=e.initialOptionsCount,p=void 0===Z?15:Z,T=e.showAllOptions,j=void 0!==T&&T,g=e.size,L=e.searchConfig,N=null!==L&&void 0!==L?L:{},E=N.placeholder,b=void 0===E?"Search":E,C=N.showIcon,R=N.optionDataSearchKey,S=j?t:t.slice(0,p),y=(0,a.useState)((function(){return S})),I=y[0],P=y[1],M=(0,i.Z)((function(){var e=_.value;if(e.trim().length>2){var n=t.filter((function(n){var r=R&&n.data&&n.data[R]?n.data[R]:(0,c.HD)(n.label)?n.label:"";return!!r&&(0,d.tI)(r.toLowerCase(),e.toLowerCase())}));P(n)}else P((function(){return S}))}),200),_=(0,l.Z)({search:""}).getLink("search",();return(0,a.useImperativeHandle)(n,(),(0,v.jsxs)("div",{ref:n,className:s()("ds-w-full",r),children:[(0,v.jsx)("div",{className:"ds-sticky ds-top-0 ds-bg-fill-content-prime ds-z-[1] ds-p-4",children:(0,v.jsx)(u.ZP,{valueLink:_,placeholder:b,size:g,startNode:C?(0,v.jsx)(f.ZP,{name:m.v.SEARCH_OUTLINE,color:h.BG.MID}):null})}),(0,v.jsx)(o.Z,{size:x.tC.MD,children:I.map((function(e){return(0,v.jsx)(o.Z.Item,{anchorType:e.anchorType,children:e.selected?(0,v.jsx)("strong",{children:e.label}):e.label},e.key)}))})]})}));Z.displayName="DSWDSearchList",n.Z=Z},11936:function(e,n,r){var t=r(27378),s=r(93307),a=r(43083),i=r(80307),c=r(2251),l=r(1319),o=r(15657),u=r(58582),d=r(39156),f=r(32425),m=r(36077),h=r(5273),x=r(81817),v=r(24246);n.Z=function(e){var n=(0,t.useContext)(l.Z),r=n.device.isMobile,Z=n.lang,p=(0,o.Z)(),T=e.groupType,j=e.groupEntities,g=e.categoryRecordItem,L=e.format,N=e.expandAllCategory,E=void 0===N||N;return r?(0,v.jsx)(s.ZP,{className:"ds-mb-2 ds-border-none ds-bg-fill-content-prime",variant:s.nq.FLAT,contentSize:s.kp.FULL,header:{title:(0,v.jsx)(h.Z,{variant:x.Fu.TITLE_SUBTLE_M,children:g.category.longName})},arrowPosition:i.Sn.RIGHT,expanded:E,children:(0,v.jsx)(d.Z,{size:f.tC.MD,className:"ds-pb-2",children:g.items.map((function(e){return(0,v.jsx)(d.Z.Item,{className:"ds-pl-8",anchorType:{href:(0,u.eT)(Z,T,e.slug,j,L,p)},rightNode:(0,v.jsx)(m.ZP,{name:c.v.KEYBOARD_RIGHT_OUTLINE,color:x.BG.PRIMARY}),children:e.title},e.title)}))})}):(0,v.jsxs)(a.ZP,{className:"ds-mb-2",children:[(0,v.jsx)(a.ZP.Header,{className:"ds-bg-fill-content-alternate",title:(0,v.jsxs)(h.Z,{variant:x.Fu.TITLE_SUBTLE_M,children:[" ",g.category.longName]})}),(0,v.jsx)(a.ZP.Content,{size:a.kC.FULL,children:(0,v.jsx)(d.Z,{size:f.tC.SM,children:g.items.map((function(e){return(0,v.jsx)(d.Z.Item,{anchorType:{href:(0,u.eT)(Z,T,e.slug,j,L,p)},children:(0,v.jsxs)("div",{className:"ds-flex ds-items-center ds-justify-between",children:[e.title,(0,v.jsx)(m.ZP,{name:c.v.KEYBOARD_RIGHT_SOLID,color:x.BG.PRIMARY,size:x.XR.XS})]})},e.title)}))})})]})}},67957:function(e,n,r){var t=r(27378),s=r(93307),a=r(43083),i=r(80307),c=r(73627),l=r(1319),o=r(55573),u=r(58582),d=r(39156),f=r(32425),m=r(5273),h=r(81817),x=r(24246),v=function(e,n){switch(e){case c.n6v.TEAM:return"Records for ".concat(n.name);case c.n6v.HOST:return"Records in ".concat(n.name);case c.n6v.OPPOSITION:return"Records against ".concat(n.name);default:return""}};n.Z=function(e){var n=(0,t.useContext)(l.Z),r=n.lang,Z=n.device.isMobile,p=e.groupType,T=e.groupEntities,j=e.moreRecords,g=e.format;return[c.n6v.TEAM,c.n6v.HOST,c.n6v.OPPOSITION].includes(p)?(0,x.jsxs)(a.ZP,{className:"ds-mb-2",rounded:!Z,children:[(0,x.jsx)(a.ZP.Header,{className:"ds-bg-fill-content-alternate",title:(0,x.jsx)(m.Z,{variant:h.Fu.TITLE_SUBTLE_M,children:"More Records"})}),(0,x.jsx)(a.ZP.Content,{size:a.kC.FULL,children:(0,x.jsx)(d.Z,{size:f.tC.SM,children:Object.keys(j).map((function(e){if(0===j[e].length)return null;var n=o.YQ[e];return(0,x.jsx)("div",{children:j[e].map((function(t){return(0,x.jsx)(d.Z.Item,{anchorType:{href:g?(0,u.WS)(r,n,T,g):(0,u.Eu)(r,n,T)},children:v(o.YQ[e],t)},t.id)}))},e)}))})})]}):(0,x.jsxs)(a.ZP,{className:"ds-mb-2",children:[(0,x.jsx)(a.ZP.Header,{className:"ds-bg-fill-content-alternate",title:(0,x.jsx)(m.Z,{variant:h.Fu.TITLE_SUBTLE_M,children:"More Records"})}),(0,x.jsx)(a.ZP.Content,{size:a.kC.FULL,children:Object.keys(j).map((function(e){return 0===j[e].length?null:(0,x.jsx)(s.ZP,{className:"ds-border-none",header:{title:"Records by ".concat(e),titleClassName:"ds-normal-case"},size:s.ex.SM,contentSize:s.kp.FULL,arrowPosition:i.Sn.RIGHT,variant:s.nq.FLAT,children:(0,x.jsx)(d.Z,{children:j[e].map((function(n){var t=[{key:e,value:n.id}];return(0,x.jsx)(d.Z.Item,{anchorType:{href:g?(0,u.WS)(r,p,T,g,t):(0,u.Eu)(r,p,T,t)},children:n.name},n.id)}))})},e)}))})]})}},14845:function(e,n,r){var t=r(27378),s=r(93307),a=r(43083),i=r(80307),c=r(1319),l=r(15657),o=r(58582),u=r(39156),d=r(32425),f=r(5273),m=r(81817),h=r(24246);n.Z=function(e){var n=(0,t.useContext)(c.Z),r=n.lang,x=n.device.isMobile,v=(0,l.Z)(),Z=e.groupType,p=e.groupEntities,T=e.playerAverages,j=e.format,g=T.category,L=T.items,N=L.some((function(e){return e.recordClasses.length>1})),E=L.some(();return N||E?(0,h.jsxs)(a.ZP,{className:"ds-mb-2",children:[(0,h.jsx)(a.ZP.Header,{className:"ds-bg-fill-content-alternate",title:(0,h.jsx)(f.Z,{variant:m.Fu.TITLE_SUBTLE_M,children:g.longName})}),(0,h.jsx)(a.ZP.Content,{size:a.kC.FULL,children:L.map((function(e){return(0,h.jsx)(s.ZP,{className:"ds-border-none",header:{title:e.title,titleClassName:"ds-normal-case"},size:s.ex.SM,contentSize:s.kp.FULL,arrowPosition:i.Sn.RIGHT,variant:s.nq.FLAT,children:(0,h.jsxs)(u.Z,{children:[e.recordClasses.map((function(n){return(0,h.jsx)(u.Z.Item,{anchorType:{href:(0,o.eT)(r,Z,e.slug,p,n,e.param?[e.param]:v)},children:n.longName},n.id)})),e.teamEntities.map((function(n){var t=void 0;return Number(n.id)>0&&(t=[{key:"team",value:n.id}]),(0,h.jsx)(u.Z.Item,{anchorType:{href:(0,o.eT)(r,Z,e.slug,p,null,t)},children:n.name},n.id)}))]})},e.title)}))})]}):(0,h.jsxs)(a.ZP,{className:"ds-mb-2",rounded:!x,children:[(0,h.jsx)(a.ZP.Header,{className:"ds-bg-fill-content-alternate",title:(0,h.jsx)(f.Z,{variant:m.Fu.TITLE_SUBTLE_M,children:g.longName})}),(0,h.jsx)(a.ZP.Content,{size:a.kC.FULL,children:(0,h.jsx)(u.Z,{size:d.tC.SM,children:L.map((function(e){return(0,h.jsx)(u.Z.Item,{anchorType:{href:(0,o.eT)(r,Z,e.slug,p,j||null,e.param?[e.param]:v)},children:e.title},e.slug)}))})})]})}},66738:function(e,n,r){var t=r(27378),s=r(39156),a=r(66876),i=r(99971),c=r(17218),l=r(24246);n.Z=function(e){var n=(0,t.useRef)(null),r=e.title,o=e.items,u=e.searchable,d=void 0!==u&&u,f=e.onClose;return(0,l.jsxs)(c.Z,{ref:n,onClose:f,variant:i.bT.BOTTOM_SHEET,children:[(0,l.jsx)(c.Z.Header,{title:r}),(0,l.jsx)(c.Z.Content,{size:i.ez.FULL,children:d?(0,l.jsx)(a.Z,{options:o}):(0,l.jsx)(s.Z,{children:o.map((function(e){return(0,l.jsx)(s.Z.Item,{anchorType:e.anchorType,children:e.selected?(0,l.jsx)("strong",{children:e.label}):e.label},e.key)}))})})]})}},59914:function(e,n,r){var t=r(60042),s=r.n(t),a=(r(27378),r(2251)),i=r(36077),c=r(81817),l=r(24246);n.Z=function(e){var n=e.expanded,r=e.setExpanded;return(0,l.jsx)("div",{className:s()("ds-flex ds-items-center ds-cursor-pointer ds-fixed ds-w-10 ds-h-10 ds-rounded-full ds-bg-ui-fill-standout ds-z-10 ds-shadow-down ds-right-2 ds-bottom-20 lg:ds-right-[30%] lg:ds-bottom-4"),children:(0,l.jsx)("div",{className:"ds-w-full ds-flex  ds-items-center ds-justify-center",onClick:children:n?(0,l.jsx)(i.ZP,{name:a.v.FULLSCREEN_SOLID,color:c.BG.INVERSE}):(0,l.jsx)(i.ZP,{name:a.v.FULLSCREEN_EXIT_SOLID,color:c.BG.INVERSE})})})}},15657:function(e,n,r){var t=r(86677),s=r(4550),a=r(93813),i=r(99603);n.Z=function(){var e=(0,t.useRouter)().asPath,n=(0,a.XL)("".concat(s.Z.global.baseUrl).concat(e));return(0,i.mG)(n)}},20620:function(e,n,r){var t=r(27378),s=r(43083),a=r(1319),i=r(58582),c=r(39156),l=r(32425),o=r(5273),u=r(81817),d=r(24246);n.Z=function(e){var n=(0,t.useContext)(a.Z).lang,r=e.formats;return(0,d.jsxs)(s.ZP,{className:"ds-mb-2",children:[(0,d.jsx)(s.ZP.Header,{className:"ds-bg-fill-content-alternate",title:(0,d.jsx)(o.Z,{variant:u.Fu.TITLE_SUBTLE_M,children:"Overall Records"})}),(0,d.jsx)(s.ZP.Content,{size:s.kC.FULL,children:(0,d.jsx)(c.Z,{size:l.tC.SM,children:r.map((function(e,r){return(0,d.jsx)(c.Z.Item,{anchorType:{href:(0,i.EM)(n,e)},children:e.longName},"".concat(e.id,"-").concat(r))}))})})]})}},4188:function(e,n,r){r.d(n,{Z:);var t=r(27378);function s(e,n,r){var s=this,a=(0,t.useRef)(null),i=(0,t.useRef)(0),c=(0,t.useRef)(null),l=(0,t.useRef)([]),o=(0,t.useRef)(),u=(0,t.useRef)(),d=(0,t.useRef)(e),f=(0,t.useRef)(!0);d.current=e;var m=!n&&0!==n&&"undefined"!==typeof window;if("function"!==typeof e)throw new TypeError("Expected a function");n=+n||0;var h=!!(r=r||{}).leading,x=!("trailing"in r)||!!r.trailing,v="maxWait"in r,Z=v?Math.max(+r.maxWait||0,n):null;return(0,t.useEffect)((,[]),(0,t.useMemo)((,[h,v,n,Z,x,m])}}}]);