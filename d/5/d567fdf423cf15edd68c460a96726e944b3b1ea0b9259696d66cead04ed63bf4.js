"use strict";(self.webpackChunkphotobucket_web=self.webpackChunkphotobucket_web||[]).push([[4220],{24220:function(t,e,n){n.r(e),n.d(e,{default:function(){return U}});var r=n(31805),a=n(29439),i=n(61113),c=n(57829),l=n(65280),o=n(28485),s=n(47313),u=n(28422),d=n(72668),v=n(48310),h=n(12990),x=n(54750),f=n(46417),m=(0,x.Z)((0,f.jsx)("path",{d:"m9.17 6 2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"FolderOutlined"),Z=n(60194),j=n(32600),p=n(83213),g=n(15861),b=n(64687),w=n.n(b),k=(0,x.Z)((0,f.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopyOutlined"),M=n(47131),I=n(2135),A=n(80082);function C(t){var e=t.url,n=(0,A.Z)().createAlert,r=function(){var t=(0,g.Z)(w().mark((function t(){var r;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new ClipboardItem({"text/plain":new Blob([e],{type:"text/plain"})}),t.next=3,navigator.clipboard.write([r]);case 3:n("Copied to clipboard!","success");case 4:case"end":return t.stop()}}),t)})));return ();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(I.rU,{to:e,children:e}),(0,f.jsx)(M.Z,{onClick:r,children:(0,f.jsx)(k,{})})]})}function z(t){if(!t)return null;var e=new Date(t),n=e.getDate(),r=e.getMonth()+1,a=e.getFullYear();return"".concat(r,"/").concat(n,"/").concat(a)}function F(t){var e=t>0?Math.floor(Math.log2(t)/10):0,n="".concat(e>0?"KMGT"[e-1]:"","b");return Math.floor(t/Math.pow(1024,e)).toPrecision(2)+n}function S(t){var e,n=t.item;return(0,f.jsxs)(Z.ZP,{children:[(0,f.jsx)(j.Z,{children:(0,f.jsx)(m,{})}),null===(e=n.archives)||void 0===e?void 0:e.map((function(t){return(0,f.jsx)(p.Z,{primary:(0,f.jsx)(C,{url:t.url}),secondary:(0,f.jsx)(i.Z,{children:"".concat(F(t.totalMediaCount)," items | ").concat(t.size," | available until: ").concat(z(n.scheduledDeletionAt))})},t.url)}))]})}var y=n(93567);function D(t){var e=new Date(t),n=e.getDate(),r=e.getMonth()+1,a=e.getFullYear();return"".concat(r,"/").concat(n,"/").concat(a)}function R(t){var e=t.item;return(0,f.jsxs)(Z.ZP,{children:[(0,f.jsx)(j.Z,{children:(0,f.jsx)(y.Z,{})}),(0,f.jsx)(p.Z,{primary:(0,f.jsx)(i.Z,{color:"GrayText",children:"Download Requested"}),secondary:(0,f.jsx)(i.Z,{children:"Requested: ".concat(D(e.createdAt))})})]})}var H=n(61875);function V(t){var e,n,r,a=t.status,c=(0,h.Z)().bucket,l=(null!==c&&void 0!==c?c:{}).id,o=(0,d.a)(u.cTF,{variables:{bucketId:l,limit:40,status:a,nextToken:null},skip:!l}),s=null!==(e=null===(n=o.data)||void 0===n||null===(r=n.bucketBulkDownloads)||void 0===r?void 0:r.items)&&void 0!==e?e:[];return!o.called||o.loading?(0,f.jsx)(H.Z,{}):s.length?(0,f.jsx)(v.Z,{sx:{width:"100%"},children:s.map((function(t){var e;return t.archives&&t.archives.length>=1?(0,f.jsx)(S,{item:t},t.id):null!==(e=t.archives)&&void 0!==e&&e.length?null:(0,f.jsx)(R,{item:t},t.id)}))}):(0,f.jsx)(i.Z,{sx:{mt:2},textAlign:"center",children:"No links available."})}function L(){var t=s.useState(u.zgU.Active),e=(0,a.Z)(t,2),n=e[0],r=e[1],d=return(0,f.jsxs)(c.Z,{sx:{m:1,width:"100%"},children:[(0,f.jsx)(i.Z,{variant:"h6",children:"Downloads"}),(0,f.jsx)(c.Z,{sx:{borderBottom:1,borderColor:"divider"},children:(0,f.jsxs)(o.Z,{value:n,"aria-label":"basic tabs example",children:[(0,f.jsx)(l.Z,{label:"Active",value:u.zgU.Active,onClick:d(u.zgU.Active)}),(0,f.jsx)(l.Z,{label:"Requested",value:u.zgU.Requested,onClick:d(u.zgU.Requested)})]})}),(0,f.jsx)(V,{status:n})]})},93567:function(t,e,n){var r=n(54750),a=n(46417);e.Z=(0,r.Z)((0,a.jsx)("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"}),"Folder")},32600:function(t,e,n){n.d(e,{Z:);var r=n(63366),a=n(87462),i=n(47313),c=n(83061),l=n(21921),o=n(51195),s=n(17592),u=n(77342),d=n(77430),v=n(32298);0,d.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var x=n(46417),f=["className"],m=(0,s.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:)((function(t){var e=t.ownerState;return(0,a.Z)({minWidth:56,flexShrink:0},"flex-start"===e.alignItems&&{marginTop:8})})),Z=i.forwardRef((function(t,e){var n=(0,u.Z)({props:t,name:"MuiListItemAvatar"}),s=n.className,d=(0,r.Z)(n,f),v=i.useContext(o.Z),Z=(0,a.Z)({},n,{alignItems:v.alignItems}),j=function(t){var e=t.alignItems,n=t.classes,r={root:["root","flex-start"===e&&"alignItemsFlexStart"]};return(0,l.Z)(r,h,n)}(Z);return(0,x.jsx)(m,(0,a.Z)({className:(0,c.Z)(j.root,s),ownerState:Z,ref:e},d))}))}}]);