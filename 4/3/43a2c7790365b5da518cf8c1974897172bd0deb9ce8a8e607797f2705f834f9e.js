"use strict";(self.webpackChunkphotobucket_web=self.webpackChunkphotobucket_web||[]).push([[6337],{50693:function(t,e,n){n.d(e,{Ez:function(){return i},IV:function(){return r},OX:function(){return o},XH:function(){return l},cB:function(){return a}});var r=6,o=6,a=6,i=[2,2,2,6,6,6],l=[1,1,2,2,2,2]},50378:function(t,e,n){n.d(e,{Z:function(){return B}});var r=n(29439),o=n(14e3),a=n(28165),i=n(57829),l=n(42832),s=n(61113),c=n(24813),d=n(73984),u=n(56854),m=n(20201),p=n(70816),g=n.n(p),h=n(47313),v=n(2135),f=n(76391),Z=n(98976),x=n(11149),y=n(50693),w=n(1413),j=n(15861),I=n(64687),M=n.n(I),C=n(9019),k=n(58467),D=n(91345),b=n(25258),Y=n(944),S=n(46417);function L(t){var e=t.date,n=t.imageUrl,r=t.mediaCount,o=t.imageId,a=t.previewTitleFormat,l=(0,m.Z)(),c=(0,k.s0)(),d=(0,D.at)(),u=g()(e,"YYYY-MM-DD"),p=u.format(a),h="Invalid date"===p,v=h?"":p,Z=g()(e,"YYYY-MM-DD",!0).isValid(),y=(0,x.Z)(),I=y.settings,L=y.saveGallerySettings,F=function(){var t=(0,j.Z)(M().mark((function t(e){var n,r,a;return M().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.stopPropagation(),h?(L((0,w.Z)((0,w.Z)({},I),{},{groupedBy:f.yI.Day})),c({pathname:"/u/".concat(null===d||void 0===d||null===(n=d.profile)||void 0===n?void 0:n.username)})):Z?(L((0,w.Z)((0,w.Z)({},I),{},{groupedBy:f.yI.Day})),c({pathname:"/u/".concat(null===d||void 0===d||null===(r=d.profile)||void 0===r?void 0:r.username,"/d/").concat(u.year(),"/").concat(u.format("MM"),"/").concat(u.format("DD"))})):(L((0,w.Z)((0,w.Z)({},I),{},{groupedBy:f.yI.Month})),c({pathname:"/u/".concat(null===d||void 0===d||null===(a=d.profile)||void 0===a?void 0:a.username,"/v/month"),search:"selected=".concat(o)}));case 2:case"end":return t.stop()}}),t)})));return ();return(0,S.jsxs)(i.Z,{sx:{position:"relative",display:"flex",height:"100%",width:"100%",cursor:"pointer",borderRadius:"8px",overflow:"hidden"},onClick:F,children:[(0,S.jsx)("div",{style:{width:"100%",position:"absolute",background:"linear-gradient( hsla(0, 0%, 0%, 0.838) 0%, hsla(0, 0%, 0%, 0.738) 19%, hsla(0, 0%, 0%, 0.541) 34%, hsla(0, 0%, 0%, 0.382) 47%, hsla(0, 0%, 0%, 0.278) 56.5%, hsla(0, 0%, 0%, 0.194) 65%, hsla(0, 0%, 0%, 0.126) 73%, hsla(0, 0%, 0%, 0.075) 80.2%, hsla(0, 0%, 0%, 0.042) 86.1%, hsla(0, 0%, 0%, 0.021) 91%, hsla(0, 0%, 0%, 0.008) 95.2%, hsla(0, 0%, 0%, 0.002) 98.2%, hsla(0, 0%, 0%, 0) 100%)",paddingBottom:"60px"},children:(0,S.jsx)(C.ZP,{container:!0,direction:"column",sx:{padding:"10px"},children:(0,S.jsxs)(C.ZP,{item:!0,children:[(0,S.jsx)(s.Z,{paragraph:!0,sx:{fontSize:"1.25rem",color:"white",fontWeight:l.typography.fontWeightBold},marginBottom:"0",children:v}),(0,S.jsxs)(s.Z,{paragraph:!0,sx:{fontSize:"1rem",lineHeight:1,color:"white",fontWeight:l.typography.fontWeightMedium},marginBottom:"0",children:[r," images"]})]})})}),(0,S.jsx)("img",{alt:v,style:{width:"100%",display:"flex",objectFit:"cover"},src:n,srcSet:n,onError:function(t){t.stopPropagation(),b.Z.error("Error loading image: ",t.currentTarget.src),t.currentTarget.src=Y.N,t.currentTarget.srcset=Y.N},loading:"lazy"})]})}L.defaultProps={date:void 0,previewTitleFormat:"DD MMM YYYY"};var F=(0,h.memo)(L),H={1:{0:[1,2]},2:{0:[1,2],1:[1,2]},3:{0:[1,1],1:[1,2],2:[1,1]},4:{0:[2,2],1:[2,1],2:[2,2],3:[2,1]},5:{0:[2,2],1:[1,1],2:[1,1],3:[2,2],4:[2,1]},6:{0:[2,2],1:[1,1],2:[2,1],3:[1,1],4:[2,1],5:[2,1]}};function R(t){var e=t.link,n=t.remainingCount,r=t.totalRemainingImageCount,o=(0,m.Z)();return(0,S.jsx)(i.Z,{sx:{width:"100%",backgroundColor:o.palette.primary.highlight,cursor:"pointer",borderRadius:"8px"},children:(0,S.jsx)(v.rU,{style:{height:"100%",display:"flex",textDecoration:"none",padding:"10px 0",textAlign:"center",alignItems:"center"},to:e||"",children:(0,S.jsxs)(i.Z,{display:"flex",sx:{height:"100%",width:"100%"},justifyContent:"center",alignItems:"center",flexDirection:"column",children:[(0,S.jsxs)(l.Z,{direction:"row",alignItems:"center",spacing:1,children:[(0,S.jsx)(a.Z,{sx:{color:o.palette.primary.dark}}),(0,S.jsxs)(s.Z,{sx:{color:o.palette.primary.dark},variant:"h6",children:["+",n," days"]})]}),(0,S.jsxs)(s.Z,{sx:{color:o.palette.primary.dark},children:[r," Images"]})]})})})}function B(t){var e=t.date,n=t.groupLink,a=t.fallbackGroupLink,l=t.items,p=t.displayMoreStats,w=void 0===p?{itemsCount:0,mediaCount:0}:p,j=t.config,I=void 0===j?{gap:.5,dateFormat:"YYYY",previewTitleFormat:"DD MMM"}:j,M=g()(e),C=(0,m.Z)(),k=(0,c.Z)(C.breakpoints.down("md")),D=(0,x.Z)().settings.layout===f.sH.Grid?"quilted":"masonry",b=M.format(I.dateFormat.replaceAll("-"," ")),Y="Invalid date"===b,L=Y?a||"":n||"",B=k?y.XH:y.Ez,N=(0,h.useState)(w.itemsCount>0||w.mediaCount>0),T=(0,r.Z)(N,1)[0],E=l.filter((function(t){return!(!t||!t.imageUrl||!t.imageId)}));return l.length<=0?null:(0,S.jsxs)("div",{style:{display:"block",paddingBottom:"25px"},children:[(0,S.jsx)(v.rU,{id:M.format(I.dateFormat).toLowerCase(),style:{textDecoration:"none"},to:L,children:(0,S.jsxs)(i.Z,{display:"flex",alignItems:"center",sx:{color:C.palette.secondary.main,textDecoration:"none",width:"100%"},children:[(0,S.jsx)(s.Z,{variant:"h6",children:Y?Z.k5:b}),(0,S.jsx)(o.Z,{})]})}),(0,S.jsxs)(i.Z,{sx:{maxWidth:"1200px"},children:[(0,S.jsx)(d.Z,{variant:D,cols:B[E.length-1],rowHeight:200,sx:{width:"100%"},children:E.map((function(t,e){if(!t||!t.imageUrl||!t.imageId)return null;var n=e,r=H[E.length][n][0],o=H[E.length][n][1];return(0,S.jsx)(u.Z,{cols:r,rows:o,children:(0,S.jsx)(F,{date:t.localDate,imageUrl:t.imageUrl,mediaCount:(null===t||void 0===t?void 0:t.mediaCount)||0,previewTitleFormat:I.previewTitleFormat,imageId:t.imageId},t.localDate)},null===t||void 0===t?void 0:t.localDate)}))}),T&&(0,S.jsx)(R,{link:n,remainingCount:w.itemsCount,totalRemainingImageCount:w.mediaCount},"display-more-id")]})]})}B.defaultProps={displayMoreStats:{itemsCount:0,mediaCount:0},config:{gap:.5,dateFormat:"YYYY",previewTitleFormat:"DD MMM"}}},14e3:function(t,e,n){var r=n(64836);e.Z=void 0;var o=r(n(45045)),a=n(46417),i=(0,o.default)((0,a.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");e.Z=i},58873:function(t,e,n){var r=n(54750),o=n(46417);e.Z=(0,r.Z)((0,o.jsx)("path",{d:"M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}),"KeyboardArrowDown")},73984:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(63366),o=n(87462),a=n(21921),i=n(83061),l=n(47313),s=n(17592),c=n(77342),d=n(77430),u=n(32298);function m(t){return(0,u.Z)("MuiImageList",t)}(0,d.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var p=n(61808),g=n(46417),h=["children","className","cols","component","rowHeight","gap","style","variant"],v=(0,s.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:)((function(t){var e=t.ownerState;return(0,o.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===e.variant&&{display:"block"})})),f=l.forwardRef((function(t,e){var n=(0,c.Z)({props:t,name:"MuiImageList"}),s=n.children,d=n.className,u=n.cols,f=void 0===u?2:u,Z=n.component,x=void 0===Z?"ul":Z,y=n.rowHeight,w=void 0===y?"auto":y,j=n.gap,I=void 0===j?4:j,M=n.style,C=n.variant,k=void 0===C?"standard":C,D=(0,r.Z)(n,h),b=l.useMemo((,[w,I,k]);l.useEffect((,[]);var Y="masonry"===k?(0,o.Z)({columnCount:f,columnGap:I},M):(0,o.Z)({gridTemplateColumns:"repeat(".concat(f,", 1fr)"),gap:I},M),S=(0,o.Z)({},n,{component:x,gap:I,rowHeight:w,variant:k}),L=function(t){var e=t.classes,n={root:["root",t.variant]};return(0,a.Z)(n,m,e)}(S);return(0,g.jsx)(v,(0,o.Z)({as:x,className:(0,i.Z)(L.root,L[k],d),ref:e,style:Y,ownerState:S},D,{children:(0,g.jsx)(p.Z.Provider,{value:b,children:s})}))}))},61808:56854:function(t,e,n){n.d(e,{Z:);var r=n(4942),o=n(63366),a=n(87462),i=n(21921),l=n(83061),s=n(47313),c=(n(20478),n(61808)),d=n(17592),u=n(77342),m=n(27816),p=n(77430),g=n(32298);ar v=(0,p.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]),f=n(46417),Z=["children","className","cols","component","rows","style"],x=(0,d.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:function(t,e){var n=t.ownerState;return[(0,r.Z)({},"& .".concat(v.img),e.img),e.root,e[n.variant]]}})((function(t){var e=t.ownerState;return(0,a.Z)({display:"block",position:"relative"},"standard"===e.variant&&{display:"flex",flexDirection:"column"},"woven"===e.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},(0,r.Z)({},"& .".concat(v.img),(0,a.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===e.variant&&{height:"auto",flexGrow:1})))})),y=s.forwardRef((function(t,e){var n=(0,u.Z)({props:t,name:"MuiImageListItem"}),r=n.children,d=n.className,p=n.cols,g=void 0===p?1:p,v=n.component,y=void 0===v?"li":v,w=n.rows,j=void 0===w?1:w,I=n.style,M=(0,o.Z)(n,Z),C=s.useContext(c.Z),k=C.rowHeight,D=void 0===k?"auto":k,b=C.gap,Y=C.variant,S="auto";"woven"===Y?S=void 0:"auto"!==D&&(S=D*j+b*(j-1));var L=(0,a.Z)({},n,{cols:g,component:y,gap:b,rowHeight:D,rows:j,variant:Y}),F=function(t){var e=t.classes,n={root:["root",t.variant],img:["img"]};return(0,i.Z)(n,h,e)}(L);return(0,f.jsx)(x,(0,a.Z)({as:y,className:(0,l.Z)(F.root,F[Y],d),ref:e,style:(0,a.Z)({height:S,gridColumnEnd:"masonry"!==Y?"span ".concat(g):void 0,gridRowEnd:"masonry"!==Y?"span ".concat(j):void 0,marginBottom:"masonry"===Y?b:void 0},I),ownerState:L},M,{children:s.Children.map(r,(function(t){return s.isValidElement(t)?"img"===t.type||(0,m.Z)(t,["Image"])?s.cloneElement(t,{className:(0,l.Z)(F.img,t.props.className)}):t:null}))}))}))}}]);