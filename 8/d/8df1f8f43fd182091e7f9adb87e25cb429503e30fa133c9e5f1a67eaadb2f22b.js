"use strict";(self.webpackChunkphotobucket_web=self.webpackChunkphotobucket_web||[]).push([[3594],{2970:function(e,t,r){var n;r.d(t,{D:function(){return n}}),n||(n={}))},4587:function(e,t,r){r.d(t,{Z:function(){return v}});var n=r(29439),i=r(91554),o=r(17592),a=r(61113),l=r(16031),s=r(47313),u=r(58467),d=r(91345),c=r(48509),p=r(46417),f=(0,o.ZP)(i.Z)((function(e){return{position:"absolute",width:"100%",color:"#fff",zIndex:e.theme.zIndex.drawer-1,alignItems:"baseline"}}));function v(e){var t,r=e.albumId,i=(0,d.at)(),o=(0,u.UO)().albumId,v=r||o||(null===i||void 0===i||null===(t=i.profile)||void 0===t?void 0:t.defaultAlbum),m=(0,c.Z)(),g=(0,s.useRef)(m),h=(0,s.useRef)(null),b=(0,s.useState)(!1),x=(0,n.Z)(b,2),Z=x[0],y=x[1];return(0,s.useEffect)((function(){var e,t=null===(e=h.current)||void 0===e?void 0:e.parentElement;if(!t)return var r=function(e){var t;e.preventDefault(),e.stopPropagation(),null!==(t=e.dataTransfer)&&void 0!==t&&t.types&&e.dataTransfer.types.includes("Files")&&y(!0)},n=i=function(e){var t;e.preventDefault(),e.stopPropagation(),y(!1);var r=null===(t=e.dataTransfer)||void 0===t?void 0:t.files;r&&!(0,l.isEmpty)(r)&&v&&g.current.uploadMultiple(r,v)};return t.addEventListener("dragover",r),t.addEventListener("drop",i),t.addEventListener("dragleave",n),),[v]),(0,p.jsx)(f,{ref:h,open:Z,children:(0,p.jsx)(a.Z,{variant:"h4",align:"center",sx:{position:"sticky",top:100,fontWeight:600},children:"Drop your media here"})})}v.defaultProps={albumId:void 0}},33594:function(e,t,r){r.d(t,{Z:function(){return O}});var n=r(93433),i=r(15861),o=r(1413),a=r(64687),l=r.n(a),s=r(90297),u=r(36241),d=r(47313),c=r(58467),p=r(8566),f=r(17189),v=r(72657),m=r(28422),g=r(91345),h=r(63694),b=r(11149),x=r(20716),Z=r(4942),y=r(29439),w=r(77406),I=r(68728),k=r(11069),S=r(19989),T=r(24813),E=r(7003),D=r(20201),F=r(16031),j=r(2135),z=r(71651),M=r(944),C=r(35982),P=r(19332),R=r(47053),A=r(65582),L=r(96849),B=r(62982),_=r(46417);function U(e){var t,r=e.data,n=e.rowIndex,i=e.columnIndex,a=e.style,l=(0,D.Z)(),u=(0,c.TH)(),p=(0,j.lr)(),f=(0,y.Z)(p,1)[0],v=(0,c.s0)(),m=(0,s.l)(g.YR),h=(0,d.useRef)(null),b=(0,T.Z)(l.breakpoints.down("sm")),x=(0,z.Z)(h),U=(0,P.Z)().mutation,N=r.cropMode,V=r.isPublic,q=r.items,W=r.selectedMedia,H=r.selectModeEnabled,O=r.settings,X=r.toggleBulkSelect,G=r.toggleSelect,Y=r.zoom,K=r.isFavoriteDisabled,Q=q[n*Y+i],$=!m&&(null===Q||void 0===Q?void 0:Q.isBlurred),J=(null===Q||void 0===Q?void 0:Q.status.length)>0,ee=(0,R.Z)(Q,Number(a.width)),te=W.get(null===Q||void 0===Q?void 0:Q.id),re=(0,C.Z)(),ne=re.getDragImage,ie=re.removeDragImage,oe=!(null===Q||void 0===Q||null===(t=Q.attributes)||void 0===t||!t.find((function(e){return"favorite"===(null===e||void 0===e?void 0:e.toLocaleLowerCase())}))),ae="small";Y<4&&(ae="medium");return Q?(0,_.jsxs)("div",{style:(0,o.Z)((0,o.Z)({},a),{},{top:Number(a.top)+84}),ref:h,children:[(0,_.jsxs)(L.Z,{isActive:H||te||x,onClick:function(e){e.shiftKey?X(Q.id,q):G(Q.id)},sx:{top:8,left:8,zIndex:1,backgroundColor:te?l.palette.primary.main:"rgba(71,85,105,0.5)","&:hover":{backgroundColor:te?"white":"rgba(71,85,105,0.9)"}},"data-test":te?"deselect":"select",children:[te&&(0,_.jsx)(I.Z,{color:"inherit",fontSize:ae,sx:{background:l.palette.primary.main,borderRadius:"50%",padding:"2px"}}),!te&&(0,_.jsx)(I.Z,{color:"inherit",fontSize:ae,sx:{background:"transparent",color:"white",borderRadius:"50%",padding:"2px"}})]}),Q.isVideoType&&!Q.livePhoto&&(0,_.jsx)(S.Z,{sx:(0,Z.Z)({color:"white",opacity:"0.8",position:"absolute",top:8,right:36},l.breakpoints.down("sm"),{fontSize:"large"})}),!K&&!m&&!V&&!$&&(0,_.jsxs)(L.Z,{"aria-label":oe?"Remove favorite":"Add Favorite",isActive:oe||x,sx:{top:8,right:8,"&:hover":{backgroundColor:"rgba(71,85,105,0.9)"}},onClick:function(){var e={imageIds:[Q.id],add:["favorite"]};oe&&(delete e.add,e.delete=["favorite"]),U({variables:e})},children:[oe&&(0,_.jsx)(k.Z,{fontSize:ae,sx:{stroke:"white",color:"white",strokeWidth:2,padding:"2px"}}),!oe&&(0,_.jsx)(k.Z,{fontSize:ae,sx:{stroke:l.palette.primary.contrastText,fillOpacity:0,strokeWidth:2,zIndex:1,padding:"2px"}})]}),m&&J&&(0,_.jsx)(w.Z,{sx:(0,Z.Z)({color:"red",opacity:"0.8",position:"absolute",top:8,right:20},l.breakpoints.down("sm"),{fontSize:"large"})}),(0,_.jsx)("img",{alt:Q.title,"data-test":"media-link",onClick:function(e){if((0,F.isEmpty)(W)&&!H){var t,r="".concat(u.pathname,"/p/").concat(Q.id);V&&(t={returnUri:"".concat(u.pathname),password:(u.state||{}).password}),f.get("q")&&(r+="?q=".concat(f.get("q"))),v(r,{state:t})}else e.shiftKey?X(Q.id,q):G(Q.id)},onError:function(e){e.currentTarget.src=Q.isVideoType?M.h:M.N,e.currentTarget.srcset=Q.isVideoType?M.h:M.N},role:"presentation",src:ee,srcSet:ee,onDragStart:function(e){e.stopPropagation();var t=ne(Q,!!te),r=te?"all":Q.id;return e.dataTransfer.setData("id",r),e.dataTransfer.setDragImage(t,0,0),!1},onDragEnd:style:{borderStyle:"solid",borderWidth:3,borderColor:"transparent",filter:$?"blur(5px) brightness(95%)":"none",width:a.width,height:a.height,objectFit:N?"contain":"cover",display:"flex"}}),(null===Q||void 0===Q?void 0:Q.isBlurred)&&(0,_.jsx)(A.Z,{}),(0,_.jsx)(B.Z,{media:Q,isActive:!V&&(te||x),settings:O,displayFab:b||Y>6||(null===O||void 0===O?void 0:O.showImageTitle),hide:b&&Y>3}),(null===O||void 0===O?void 0:O.showImageTitle)&&!b&&(0,_.jsx)(E.Z,{title:Q.title,position:"bottom"})]}):null}var N=r(4587),V=r(45197);function q(e){var t,r=e.data,n=e.rowIndex,i=e.columnIndex,a=e.style,l=(0,c.TH)(),u=(0,c.s0)(),d=(0,j.lr)(),p=(0,y.Z)(d,1)[0],f=(0,s.l)(g.YR),v=(0,P.Z)().mutation,m=r.items,h=r.zoom,b=r.cropMode,x=r.selectedMedia,w=r.isPublic,T=r.selectModeEnabled,E=r.toggleSelect,D=r.settings,z=r.isFavoriteDisabled,C=m[n*h+i],U=!f&&(null===C||void 0===C?void 0:C.isBlurred),N=(0,R.Z)(C,Number(a.width)),q=x.get(null===C||void 0===C?void 0:C.id),W=!(null===C||void 0===C||null===(t=C.attributes)||void 0===t||!t.find(());return C?(0,_.jsxs)("div",{style:(0,o.Z)((0,o.Z)({},a),{},{top:Number(a.top)+84}),children:[(0,_.jsxs)(L.Z,{isActive:T||!!q,sx:{top:"6px",left:"6px",padding:0,zIndex:1,backgroundColor:q?V.Z.palette.primary.main:"rgba(71,85,105,0.5)"},onClick:"data-test":q?"deselect":"select",children:[q&&(0,_.jsx)(I.Z,{color:"inherit",fontSize:1===h?"medium":"small",sx:{background:V.Z.palette.primary.main,borderRadius:"50%",padding:"1px"}}),!q&&(0,_.jsx)(I.Z,{color:"inherit",fontSize:1===h?"medium":"small",sx:{background:"transparent",borderRadius:"50%",padding:"1px"}})]}),C.isVideoType&&!C.livePhoto&&(0,_.jsx)(S.Z,{sx:(0,Z.Z)({color:"white",opacity:"0.8",position:"absolute",top:8,right:36},V.Z.breakpoints.down("sm"),{fontSize:"large"})}),!z&&!w&&!U&&(0,_.jsx)(L.Z,{isActive:W,sx:{top:"4px",right:"4px"},onClick:function(){var e={imageIds:[C.id],add:["favorite"]};W&&(delete e.add,e.delete=["favorite"]),v({variables:e})},children:W&&(0,_.jsx)(k.Z,{fontSize:1===h?"medium":"small",sx:{stroke:"white",strokeWidth:2,padding:"2px"}})}),(0,_.jsx)("img",{alt:C.title,"data-test":"image",onClick:function(){if((0,F.isEmpty)(x)&&!T){var e,t="".concat(l.pathname,"/p/").concat(C.id);w&&(e={returnUri:"".concat(l.pathname),password:(l.state||{}).password}),p.get("q")&&(t+="?q=".concat(p.get("q"))),u(t,{state:e})}else E(C.id)},onError:function(e){e.currentTarget.src=C.isVideoType?M.h:M.N,e.currentTarget.srcset=C.isVideoType?M.h:M.N},role:"presentation",src:N,srcSet:N,style:{borderStyle:"solid",borderWidth:3,borderColor:"transparent",filter:U?"blur(5px) brightness(95%)":"none",width:a.width,height:a.height,objectFit:b?"contain":"cover",display:"flex"}}),(null===C||void 0===C?void 0:C.isBlurred)&&(0,_.jsx)(A.Z,{}),(0,_.jsx)(B.Z,{media:C,isActive:!w&&!!q,settings:D,displayFab:h>4,hide:h>3})]}):null}var W=(0,d.forwardRef)((function(e,t){var r=e.children,n=e.style,i=e.onScroll,a=(0,d.useRef)(0);return(0,_.jsx)("div",{id:"gallery",style:(0,o.Z)((0,o.Z)({},n),{},{overflowX:"hidden"}),onScroll:function(e){var t=e.currentTarget.scrollTop;t>100&&t>a.current?(0,g.MD)("down"):(0,g.MD)("up"),a.current=e.currentTarget.scrollTop,i(e)},ref:t,children:r})})),H=(0,d.forwardRef)((function(e,t){var r=e.style,n=e.children;return(0,_.jsx)("div",{"data-test":"grid",ref:t,style:(0,o.Z)((0,o.Z)({},r),{},{height:Number(r.height)+84}),children:n})}));function O(e){var t,r,a,Z,y,w,I,k,S,T,E,D,F,j,z=e.items,M=e.fetchMore,C=e.isPublic,P=e.hasMore,R=(0,s.l)(b.v),A=R.zoom,L=R.cropMode,B=R.sortBy,V=(0,s.l)(g._N).media,O=u.isMobile?0:14,X=G=(0,d.useRef)(null),Y=(0,h.Z)().isFavoriteDisabled,K=(0,c.UO)().albumId,Q=(0,c.TH)(),$=new URLSearchParams(Q.search).get("scrollTo"),J=z.findIndex((),ee=(0,d.useRef)(A),te=(0,g.at)(),re=!(null===te||void 0===te||null===(t=te.profile)||void 0===t||null===(r=t.subscription)||void 0===r||null===(a=r.plan)||void 0===a||!a.hostingThreshold)&&!(null!==te&&void 0!==te&&null!==(Z=te.profile.subscription)&&void 0!==Z&&null!==(y=Z.plan)&&void 0!==y&&null!==(w=y.hostingThreshold)&&void 0!==w&&w.maxHostingThreshold),ne=(0,o.Z)({easyLinkingMode:!(null===te||void 0===te||null===(I=te.profile)||void 0===I||null===(k=I.albumsSettings)||void 0===k||!k.easyLinkingMode),linkBackOption:!(null===te||void 0===te||null===(S=te.profile)||void 0===S||null===(T=S.albumsSettings)||void 0===T||!T.linkBackOption),showImageTitle:!(null===te||void 0===te||null===(E=te.profile)||void 0===E||null===(D=E.albumsSettings)||void 0===D||!D.showImageTitle)},null===te||void 0===te||null===(F=te.profile)||void 0===F||null===(j=F.albumsSettings)||void 0===j?void 0:j.links),ie=(0,x.Z)(),oe=ie.selectedMedia,ae=ie.toggleBulkSelect,le=new Map;oe.forEach((function(e){return le.set(e,!0)})),(0,d.useEffect)((function(){return(0,g.WV)([]),(0,g._N)({}),(0,g.MD)(null),(0,g.eG)({}),function(){(0,g.WV)([]),(0,g._N)({}),(0,g.MD)(null),(0,g.eG)({})}}),[K]),(0,d.useEffect)((function(){if($&&-1!==J){var e,t=Math.floor((J||0)/ee.current);null===(e=G.current)||void 0===e||e.scrollToItem({align:"smart",columnIndex:0,rowIndex:t})}}),[$,J]);var se=function(){var e=(0,i.Z)(l().mark((function e(t,r){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:z[r]||M();case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),ue={cropMode:L,isPublic:C,items:z,selectedMedia:le,selectModeEnabled:V,toggleSelect:function(e){le.get(e)?(0,g.WV)(oe.filter(()):(0,g.WV)([].concat((0,n.Z)(oe),[e]))},toggleBulkSelect:ae,zoom:A,settings:ne,isLimitedHostingAccount:re,isFavoriteDisabled:Y};return(0,_.jsxs)("div",{"data-test":"drag-and-drop",style:{flex:1,position:"relative"},children:[!C&&(0,_.jsx)(N.Z,{}),(0,_.jsx)(p.Z,{children:function(e){var t=e.height,r=e.width;return r&&t?(0,_.jsx)(v.Z,{isItemLoaded:X,itemCount:z.length+Number(P),loadMoreItems:se,children:function(e){var n=e.onItemsRendered,i=e.ref;return(0,_.jsx)(f.Ym,{columnCount:A,columnWidth:Math.floor(r/A)-Math.floor(O/A),height:t,innerElementType:H,itemData:ue,ref:outerElementType:W,rowCount:Math.ceil(z.length/A),rowHeight:Math.floor(r/A)-Math.floor(O/A),width:r,onItemsRendered:function(e){var t=e.overscanRowStartIndex*A,r=e.overscanRowStopIndex*A,i=e.visibleRowStartIndex*A,o=e.visibleRowStopIndex*A,a=B.field===m.hqH.DateTaken?z[i].dateTaken:z[i].uploadDate,l=B.field===m.hqH.DateTaken?z[o].dateTaken:z[o].uploadDate;n({overscanStartIndex:t,overscanStopIndex:r,visibleStartIndex:i,visibleStopIndex:o}),a&&l&&(0,g.eG)({startDate:a,endDate:l})},children:u.isMobileOnly?q:U})}}):(0,_.jsx)("div",{})}})]})}O.defaultProps={isPublic:!1}},48509:function(e,t,r){r.d(t,{Z:function(){return j}});var n,i=r(15861),o=r(93433),a=r(1413),l=r(64687),s=r.n(l),u=r(61511),d=r(90297),c=r(72668),p=r(44766),f=r(31881),v=r.n(f),m=r(19655),g=r(16031),h=r(18248),b=r(28297),x=r(28422),Z=r(91345),y=r(2970),w=r(11149),I=r(25258),k=r(39437),S=r(63694),T=r(98976),E=r(4942),D=(n={},(0,E.Z)(n,x.hqH.DateTaken,"dateTaken"),(0,E.Z)(n,x.hqH.Date,"uploadDate"),(0,E.Z)(n,x.hqH.Title,"title"),n),F=r(31500);function j(){var e,t,r,n,l,f,E,j,z,M,C=(0,u.x)(),P=(0,Z.at)(),R=(0,w.Z)().settings,A=(0,S.Z)(),L=(0,F.Z)(),B=(0,k.Z)().createAlert,_=(0,d.l)(Z.Xs),U=(0,c.a)(x.d5z,{onError:function(e){I.Z.error("[GET_SUPPORTED_FILE_TYPES]: ".concat(e.message)),B("Unable to retrieve acceptable file types. Please try again later")}}).data,N=new Map,V=new Map,q=(null===U||void 0===U?void 0:U.getSupportedFileTypes.maxImageFileSizeInBytes)||1/0,W=(null===U||void 0===U?void 0:U.getSupportedFileTypes.maxVideoFileSizeInBytes)||1/0;null===U||void 0===U||U.getSupportedFileTypes.imageTypes.forEach((function(e){return N.set(e,!0)})),null===U||void 0===U||U.getSupportedFileTypes.videoTypes.forEach(();var H=(null===P||void 0===P||null===(e=P.profile)||void 0===e||null===(t=e.subscription)||void 0===t?void 0:t.totalImagesCount)||0,O=(null===P||void 0===P||null===(r=P.profile)||void 0===r||null===(n=r.subscription)||void 0===n?void 0:n.totalUserUsedSpace)||0,X=(null===P||void 0===P||null===(l=P.profile)||void 0===l||null===(f=l.subscription)||void 0===f||null===(E=f.plan)||void 0===E?void 0:E.maxImagesCount)||Number.MAX_SAFE_INTEGER,G=(null===P||void 0===P||null===(j=P.profile)||void 0===j||null===(z=j.subscription)||void 0===z||null===(M=z.plan)||void 0===M?void 0:M.maxSpace)||Number.MAX_SAFE_INTEGER,Y=function(e){var t=e.data;return(0,a.Z)((0,a.Z)({},t),{},{__typename:"Image",image:(0,a.Z)((0,a.Z)({},t.image),{},{isLandscape:null,__typename:"ImageFile"}),originalImage:(0,a.Z)((0,a.Z)({},t.originalImage),{},{isLandscape:null,__typename:"ImageFile"}),thumbnailImage:(0,a.Z)((0,a.Z)({},t.originalImage),{},{isLandscape:null,__typename:"ImageFile"})})},K=function(e){var t=D[R.sortBy.field];C.cache.updateQuery({query:x.b6e,variables:{albumId:e.albumId,sortBy:R.sortBy,pageSize:T.IV}},(function(r){if(!r)return null;var n=r.getAlbumImagesV2,i=n.items,a=n.scrollPointer;return{getAlbumImagesV2:{items:(0,g.orderBy)([].concat((0,o.Z)(i),[e]),t,R.sortBy.desc?"desc":"asc"),scrollPointer:a}}})),C.cache.updateQuery({query:x.x4R,variables:{albumId:A.defaultAlbum,sortBy:R.sortBy,pageSize:T.IV}},(function(r){if(!r)return null;var n=r.getImagesFromAlbumAndSubAlbums,i=n.items,a=n.scrollPointer;return{getImagesFromAlbumAndSubAlbums:{items:(0,g.orderBy)([].concat((0,o.Z)(i),[e]),t,R.sortBy.desc?"desc":"asc"),scrollPointer:a}}})),C.cache.modify({id:"AlbumV2:".concat(e.albumId),fields:{counters:function(e){return{imageCount:e.imageCount+1,imageCountIncludeSubAlbums:e.imageCountIncludeSubAlbums}}}})},Q=function(e){var t=0;return Array.from(e).forEach((),!(H+1>X||O+t>G)||(B("You have reached your storage limit. Upgrade your account to upload more images."),!1)},$=function(){var e=(0,i.Z)(s().mark((function e(t,r,n){var o,l,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(o=(0,m.v0)().currentUser)||void 0===o?void 0:o.getIdToken();case 2:if(l=e.sent){e.next=6;break}return(0,Z.sh)([{id:(0,p.k$)(),message:"Send Request Failed: Unauthorized.",severity:"error"}]),e.abrupt("return");case 6:return u=t.map(function(){var e=(0,i.Z)(s().mark((function e(t){var r,n,i,o,u,d,c,p,f,m,g,x;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.file,n=t.id,i=t.albumId,o={"Content-Type":"multipart/form-data",authorization:l,"x-correlation-id":(0,h.Z)()},u={albumId:i},d=new FormData,c=r.name.split("."),p=c[c.length-1],f=null===p||void 0===p?void 0:p.toLowerCase(),e.prev=7,f&&(N.get(f)||V.get(f))){e.next=10;break}throw new Error("File name ".concat(r.name," has an incompatible file type"));case 10:if(!(N.get(f)&&r.size>q)){e.next=12;break}throw new Error("File name ".concat(r.name," has a file size greater than ").concat(q," bytes"));case 12:if(!(V.get(f)&&r.size>W)){e.next=14;break}throw new Error("File name ".concat(r.name," has a file size greater than ").concat(W," bytes"));case 14:return d.append("file",r),e.next=17,v().post(b.ZP.api.upload,d,{headers:o,params:u});case 17:m=e.sent,g=Y(m),K(g),_[n]=(0,a.Z)((0,a.Z)({},_[n]),{},{status:y.D.Completed}),(0,Z.Xs)((0,a.Z)({},_)),e.next=31;break;case 24:e.prev=24,e.t0=e.catch(7),x=e.t0,I.Z.error("Something is wrong",e.t0),_[n]=(0,a.Z)((0,a.Z)({},_[n]),{},{status:y.D.Failed}),(0,Z.Xs)((0,a.Z)({},_)),B(x.message);case 31:case"end":return e.stop()}}),e,null,[[7,24]])})));return ()),e.next=9,Promise.all(u);case 9:I.Z.debug("Batch ".concat(r," of ").concat(n),(new Date).toISOString());case 10:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),J=function(){var e=(0,i.Z)(s().mark((function e(t,r,n){var i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.pop()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,$(i,r,n);case 5:return e.next=7,J(t,r+1,n);case 7:case"end":return e.stop()}}),e)})));return (),ee=function(){var e=(0,i.Z)(s().mark((function e(t,r){var n,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Q(t)){e.next=3;break}return e.abrupt("return");case 3:return n=Array.from(t).map((function(e){var t=(0,h.Z)();return _[t]={url:URL.createObjectURL(e),albumId:r,status:y.D.InProgress,type:e.type},(0,Z.Xs)((0,a.Z)({},_)),{file:e,id:t,albumId:r}})),i=(0,g.chunk)(n,5),e.next=7,J(i,1,i.length);case 7:return e.next=9,L.execute();case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),te=function(){var e=(0,i.Z)(s().mark((function e(t,r){var n,i,o,l,u,d,c,f,g,x,w,k;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=(0,m.v0)().currentUser)||void 0===n?void 0:n.getIdToken();case 2:if(i=e.sent){e.next=6;break}return(0,Z.sh)([{id:(0,p.k$)(),message:"Send Request Failed: Unauthorized.",severity:"error"}]),e.abrupt("return",null);case 6:if(Q([t])){e.next=9;break}return e.abrupt("return",null);case 9:if(o=(0,h.Z)(),_[o]={url:URL.createObjectURL(t),albumId:r,status:y.D.InProgress,type:t.type},(0,Z.Xs)((0,a.Z)({},_)),l={"Content-Type":"multipart/form-data",authorization:i,"x-correlation-id":(0,h.Z)()},u={albumId:r},d=new FormData,c=t.name.split("."),f=c[c.length-1],g=null===f||void 0===f?void 0:f.toLowerCase(),e.prev=18,g&&(N.get(g)||V.get(g))){e.next=21;break}throw new Error("File name ".concat(t.name," has an incompatible file type"));case 21:if(!(N.get(g)&&t.size>q)){e.next=23;break}throw new Error("File name ".concat(t.name," has a file size greater than ").concat(q," bytes"));case 23:if(!(V.get(g)&&t.size>W)){e.next=25;break}throw new Error("File name ".concat(t.name," has a file size greater than ").concat(W," bytes"));case 25:return d.append("file",t),e.next=28,v().post(b.ZP.api.upload,d,{headers:l,params:u});case 28:return x=e.sent,w=Y(x),K(w),_[o]=(0,a.Z)((0,a.Z)({},_[o]),{},{status:y.D.Completed}),(0,Z.Xs)((0,a.Z)({},_)),e.next=35,L.execute();case 35:return e.abrupt("return",w.id);case 38:e.prev=38,e.t0=e.catch(18),k=e.t0,I.Z.error("Something is wrong",e.t0),_[o]=(0,a.Z)((0,a.Z)({},_[o]),{},{status:y.D.Failed}),(0,Z.Xs)((0,a.Z)({},_)),B(k.message);case 45:return e.abrupt("return",null);case 46:case"end":return e.stop()}}),e,null,[[18,38]])})));return ();return{uploadMultiple:ee,uploadSingle:te,stopPropagation:}},31500:function(e,t,r){r.d(t,{Z:);var n=r(1413),i=r(29439),o=r(96420),a=r(18248),l=r(28422),s=r(91345),u=r(25258);function d(){var e=(0,o.t)(l.D9W,{onCompleted:function(e){var t=e.getProfile;t&&(0,s.at)({profile:(0,n.Z)({},t)})},onError:function(e){u.Z.error("Something went wrong while updating user usage statistics",e);var t={id:(0,a.Z)(),message:"Something went wrong while updating user image count. Please refresh the page to show new image count.",severity:"none"};(0,s.sh)([t])}});return{execute:(0,i.Z)(e,1)[0]}}}}]);