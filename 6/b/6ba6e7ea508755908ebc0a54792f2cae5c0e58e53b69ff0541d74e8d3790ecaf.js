/*! For license information please see 4057.4f4f9275.chunk.js.LICENSE.txt */
(self.webpackChunkphotobucket_web=self.webpackChunkphotobucket_web||[]).push([[4057],{30202:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _e}});var n=i(29439),r=i(61113),o=i(16031),a=i(2135),l=i(17455),s=i(31805),d=i(90297),u=i(17592),c=i(24813),h=i(57829),f=i(20201),v=i(47313),m=i(2655),g=(i(62599),i(58467)),p=i(91345),x=i(25258),b=i(60250),Z=i(62606),j=i(38099),w=i(66713),k=i(47131),y=i(46417),M=(0,u.ZP)(k.Z)((function(){return{position:"absolute",top:"50%",marginTop:-28,width:56,height:56,backgroundColor:"rgba(238,238,238, 0.5)",zIndex:1,"&:hover":{backgroundColor:"#eeeeee"}}}));function T(e,t,i){return t?(0,y.jsx)(M,{onClick:e,"aria-label":i,style:{left:12},"data-test":"prev-img",children:(0,y.jsx)(j.Z,{})}):null}function S(e,t,i){return t?(0,y.jsx)(M,{onClick:e,"aria-label":i,style:{right:12},"data-test":"next-img",children:(0,y.jsx)(w.Z,{})}):null}var I=i(1413),C=i(99091),E=i(59824),P=i(57350),z=i(96628),F=i(36241),L=F.isMobile?-.15:.15,B=(0,P.createUseGesture)([z.e,z.f,z.w]),R={x:0,y:0,scale:1,rotateZ:0};var U=i(15861),O=i(64687),A=i.n(O),W=i(72668),N=i(6965),H=i(28422),D=i(71675),q=(0,u.ZP)("img",{shouldForwardProp:)((function(e){var t=e.isLoading;return{display:t?"none":void 0,userSelect:t?"none":void 0,WebkitTouchCallout:t?"none":void 0,objectFit:"contain",width:"100%",height:"100%"}})),V=(0,u.ZP)("video")((),_=(0,u.ZP)("div")((),G=(0,u.ZP)(k.Z)((function(){return{zIndex:11,position:"absolute",cursor:"pointer",top:0,bottom:0,left:0,right:0,margin:"auto",padding:"5px 10px",backgroundColor:"rgba(0,0,0,0.6)",width:"56px",height:"56px",borderRadius:"5px","& svg":{color:"white",width:"45px",height:"45px"}}})),Q=(0,u.ZP)(r.Z)({zIndex:11,position:"absolute",top:0,bottom:0,left:0,right:0,margin:"auto",padding:"5px 10px",backgroundColor:"black",color:"white",width:"200px",height:"56px",borderRadius:"5px"});function Y(e){var t=e.media,i=(0,D.Z)(),r=i.restrictions,o=i.tooltipTitle,a=(0,v.useRef)(null),l=(0,v.useRef)(null),s=(0,v.useState)(!1),d=(0,n.Z)(s,2),u=d[0],c=d[1],h=(0,v.useState)(!0),f=(0,n.Z)(h,2),m=f[0],g=f[1],p=(0,v.useState)(null),b=(0,n.Z)(p,2),j=b[0],w=b[1],k=(0,W.a)(H.NJ7,{variables:{bucketId:t.bucketId,mediaId:t.id}}),M=k.loading,T=k.data,S=r.videoPlayer,I=o("videoPlayer");(0,v.useEffect)((function(){var e;null!==T&&void 0!==T&&null!==(e=T.bucketMedia)&&void 0!==e&&e.signedUrl&&w(T.bucketMedia.signedUrl)}),[T]);var C=(0,Z.Z)(t),P=null===t||void 0===t?void 0:t.imageUrl;(0,v.useEffect)((function(){return g(!0)}),[t]),(0,v.useEffect)((function(){return c(!1)}),[t]);var z=(0,v.useCallback)((0,U.Z)(A().mark((function e(){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l.current||!j){e.next=10;break}return l.current.src=j,e.prev=2,e.next=5,l.current.play();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),x.Z.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])}))),[j,l]),F=(0,v.useCallback)((function(){if(l.current)try{l.current.pause()}catch(e){x.Z.error(e)}}),[]),L=(0,v.useCallback)((,[F]);(0,v.useEffect)((,[u,L,z]);var B=function(e){e.stopPropagation(),e.currentTarget.src=E.h,x.Z.warn("There was an error while trying to play video")},R=function(){return g(!1)};return(0,v.useEffect)((,[t]),u?(0,y.jsx)(_,{children:(0,y.jsxs)(V,{ref:l,onEnded:L,controls:!0,children:[(0,y.jsx)("track",{kind:"captions"}),j&&(0,y.jsx)("source",{src:j}),(0,y.jsx)("p",{children:"Your browser does not support HTML5 video."})]})}):(0,y.jsxs)(_,{children:[S&&(0,y.jsx)(Q,{children:I}),!S&&(0,y.jsx)(G,{onClick:function(){return c(!0)},size:"large",disabled:M,children:(0,y.jsx)(N.Z,{})}),m&&(0,y.jsx)(q,{id:"thumbnail-image",isLoading:m,src:C,srcSet:C,alt:t.originalFilename||"",onError:B}),P&&(0,y.jsx)(q,{ref:a,id:"full-image",isLoading:m,src:P,alt:t.originalFilename||"",onError:B,onLoad:R})]})}var J=(0,u.ZP)("img",{shouldForwardProp:function(e){return"isLoading"!==e&&"isBlurred"!==e}})((function(e){var t=e.isBlurred;return{userSelect:"none",WebkitTouchCallout:e.isLoading?"none":void 0,objectFit:"contain",filter:t?"blur(5px) brightness(95%)":"none",width:"100%",height:"100%"}}));function K(e){var t,i,r=e.media,a=e.isSelected,l=(0,v.useState)(!0),s=(0,n.Z)(l,2),d=s[0],u=s[1],c=(0,g.TH)(),h=new URLSearchParams(c.search).get("action"),f=null!==(t=null===r||void 0===r?void 0:r.width)&&void 0!==t?t:0,m=null!==(i=null===r||void 0===r?void 0:r.height)&&void 0!==i?i:0,p=function(e){var t=(0,g.s0)(),i=(0,g.TH)(),r=new URLSearchParams(i.search),a=Number(r.get("zoom")||1),l=(0,C.useSpring)((),s=(0,n.Z)(l,2),d=s[0],u=s[1],c=(0,v.useRef)(d.scale),h=(0,v.useRef)(null),f={min:.5,max:3};return(0,v.useEffect)((function(){a>0&&a<=10&&c.current.set(a)}),[a]),B({onDrag:function(e){var t=e.elapsedTime,i=e.pinching,r=(0,n.Z)(e.offset,2),o=r[0],a=r[1];if(!i&&!(t<250))return u.start({x:o,y:a})},onDragEnd:function(e){var n=e.pinching,r=e.elapsedTime;n||!F.isMobile&&r<250&&t("".concat(i.pathname,"?action=focus"))},onPinch:function(e){var t=(0,n.Z)(e.offset,1)[0];h.current?d.scale.set(t):x.Z.error("Invalid imgRef")},onWheel:function(e){var t=(0,n.Z)(e.delta,2)[1];e.event.preventDefault();var i=Math.max(.5,d.scale.get()-.01*t);i=Math.min(3,i),u.start({scale:i})}},{target:h,eventOptions:{passive:!1},drag:{from:function(){return[d.x.get(),d.y.get()]},bounds:e,rubberband:L},pinch:{scaleBounds:f,bounds:e,rubberband:!0},wheel:{from:function(){return[d.x.get(),d.y.get()]},bounds:e,scaleBounds:f}}),{ref:h,style:d}}({left:-f/2,right:f/2,top:-m/2,bottom:m/2}),b=p.ref,Z=p.style,j=null===r||void 0===r?void 0:r.imageUrl;r.isBanned||!j||"zoom"!==h&&"focus"!==h||(j+="?height=".concat(m,"&width=").concat(f,"&quality=100"));return!r.isBanned&&r.isVideo&&a?(0,y.jsx)(Y,{media:r}):j?(0,y.jsx)(C.animated.div,{style:(0,I.Z)({touchAction:"none"},Z),ref:b,children:(0,y.jsx)(J,{draggable:!1,id:"full-image",isLoading:d,src:j,srcSet:j,alt:r.id,onLoad:ref:b,onError:)}):null}function X(e,t){return(null!==t&&void 0!==t&&t.isPrevious||null!==t&&void 0!==t&&t.isSelected)&&(0,v.isValidElement)(e)?(0,y.jsx)("div",{style:{display:"flex",position:"relative",height:"100%",width:"100%",justifyContent:"center",alignContent:"center",overflow:"hidden"},children:(0,y.jsx)(K,{media:e.props.media,isSelected:!(null===t||void 0===t||!t.isSelected)})}):null}function $(e){return e.map((function(e){return(0,v.isValidElement)(e)?(0,y.jsx)("div",{style:{position:"relative",height:70},children:e},e.key):e}))}var ee=i(28297),te=(0,u.ZP)("img",{shouldForwardProp:)((function(e){var t=e.isBlurred;return{objectFit:e.crop?"cover":"contain",filter:t?"blur(5px) brightness(95%)":"none",width:"100%",height:"100%"}}));function ie(e){var t=e.media,i=e.crop,n=(0,g.TH)(),r=(0,g.s0)(),o=t.mediaType.includes("video")?E.h:E.N,a=null!==t&&void 0!==t&&t.filename?(0,Z.Z)(t,180):o;t.isBanned&&(a="".concat(ee.ZP.assets.placeholderThumbnail));return(0,y.jsx)(te,{"data-test":"carousel-thumbnail-".concat(t.id),crop:i,isBlurred:!1,id:"thumbnail-image",src:a,srcSet:a,alt:null===t||void 0===t?void 0:t.id,onError:function(e){e.currentTarget.src=t.mediaType.includes("video")?E.h:E.N,e.currentTarget.srcset=t.mediaType.includes("video")?E.h:E.N},onClick:function(){var e=n.pathname.split("/");e.pop(),r("".concat(e.join("/"),"/").concat(t.id))}})}ie.defaultProps={crop:!1};var ne=i(8566),re=i(17189),oe=i(72657);function ae(e){var t,i=e.index,n=e.style,r=e.data,o=r.items,a=r.current,l=(null===(t=o[i])||void 0===t?void 0:t.id)===(null===a||void 0===a?void 0:a.id);return o[i]?(0,y.jsx)("div",{style:(0,I.Z)((0,I.Z)({},n),{},{border:l?"2px solid #000":"2px solid transparent"}),children:(0,y.jsx)(ie,{media:o[i],crop:!l})}):null}var le=(0,v.forwardRef)((function(e,t){var i=e.children,n=e.style,r=e.onScroll;return(0,y.jsx)("div",{"data-test":"thumbnail-list",style:(0,I.Z)((0,I.Z)({},n),{},{overflowY:"hidden"}),onScroll:r,ref:t,children:i})}));function se(e){var t=e.showThumbs,i=e.items,n=e.current,r=e.fetchMore,o=e.hasMore,a=(0,v.useRef)(null),l=i.findIndex((),s=(0,v.useEffect)((function(){var e,t=-1===l?0:l;null===(e=a.current)||void 0===e||e.scrollToItem(t)}),[l]);var d=function(){var e=(0,U.Z)(A().mark((function e(t,n){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i[n]||r();case 1:case"end":return e.stop()}}),e)})));return ();return t?(0,y.jsx)("div",{style:{position:"relative",height:100},children:(0,y.jsx)(ne.Z,{children:function(e){var t=e.width;return t?(0,y.jsx)(oe.Z,{isItemLoaded:s,itemCount:i.length+Number(o),loadMoreItems:d,children:function(e){var r=e.onItemsRendered,o=e.ref;return(0,y.jsx)(re.t7,{ref:itemData:{items:i,current:n},height:100,itemCount:i.length,itemSize:100,layout:"horizontal",width:t,onItemsRendered:r,outerElementType:le,initialScrollOffset:100*l,children:ae})}}):(0,y.jsx)("div",{})}})}):null}var de=i(14647),ue=i(11198),ce=i(75908),he=i(9289),fe=i(85582),ve=i(43997),me=i(60173),ge=i(96406),pe=i(48918),xe=i(38905),be=i(51405),Ze=i(61689);function je(e){var t=e.media,i=e.isWithinOverflowMenu,n=(0,D.Z)(),r=n.restrictions,o=n.tooltipTitle,a=(0,g.s0)(),l=(0,g.TH)(),s=r.imageEditor,d=s?o("imageEditor"):"Edit Image",u=function(){t&&a("/bucket/".concat(t.bucketId,"/media/").concat(t.id,"/editor"),{state:{from:l}})};return t?(0,y.jsx)(y.Fragment,{children:i?(0,y.jsxs)(be.Z,{color:"inherit",onClick:u,disabled:s,"aria-label":d,id:"edit-image-menu-item","data-test":"edit-image-menu-item",children:[(0,y.jsx)(xe.Z,{style:{marginRight:8}})," ",d]}):(0,y.jsx)(k.Z,{disabled:s,color:"primary",onClick:u,id:"persistent-edit-image-button","data-test":"persistent-edit-image-button",children:(0,y.jsx)(Ze.Z,{title:d,arrow:!0,children:(0,y.jsx)(xe.Z,{})})})}):null}je.defaultProps={isWithinOverflowMenu:!1};var we=i(76482),ke=i(12990),ye=i(80082);function Me(e){var t,i=e.media,n=(0,b.Z)().selectMedia,r=(0,ye.Z)().createAlert,o=(0,ke.Z)().bucketUser,a=null===o||void 0===o||null===(t=o.permissions)||void 0===t?void 0:t.mediaDelete;return(0,y.jsx)(k.Z,{disabled:!i||!a,color:"inherit","aria-label":"Move To Trash",onClick:function(){i?(n(i.id),(0,p._$)("bucketMediaDelete")):r("The media you are trying to delete may have already been deleted or does not exist.")},id:"move-to-trash-button","data-test":"move-to-trash-button",children:(0,y.jsx)(Ze.Z,{title:"Move To Trash",arrow:!0,children:(0,y.jsx)(we.Z,{})})})}var Te=i(47196);function Se(e){var t=e.media,i=(0,b.Z)().selectMedia;return t?(0,y.jsx)(k.Z,{color:"primary",onClick:function(){t&&(i(t.id),(0,p.nt)("bucketMediaDetails"))},id:"persistent-details-button","data-test":"persistent-details-button",children:(0,y.jsx)(Ze.Z,{title:"Details",arrow:!0,children:(0,y.jsx)(Te.Z,{})})}):null}var Ie=i(61511),Ce=i(83070),Ee=i(36749),Pe=i(90253);function ze(e){var t=e.media,i=e.isDisabled,n=e.color,r=e.onCompleted,o=(0,D.Z)(),a=o.restrictions,l=o.tooltipTitle,s=(0,Pe.Z)().mutation,d=(0,Ie.x)().readFragment({id:"BucketMedia:".concat(t.id),fragment:H.ACw}),u=!(null===d||void 0===d||!d.isFavorite),c=a.favorites,h=u?"Remove from Favorites":"Add to Favorites",f=c?l("favorites"):h;return(0,y.jsx)(k.Z,{color:n,"aria-label":u?"Remove from Favorites":"Add to Favorites",disabled:c||i,"data-test":u?"remove-favorite":"add-favorite",id:u?"remove-favorite-button":"add-favorite-button",onClick:function(){t&&(s({variables:{bucketId:t.bucketId,mediaId:t.id,data:{isFavorite:!u}}}),r&&r())},children:(0,y.jsx)(Ze.Z,{title:f,arrow:!0,children:u?(0,y.jsx)(Ce.Z,{}):(0,y.jsx)(Ee.Z,{})})})}ze.defaultProps={color:"inherit",onCompleted:void 0,isDisabled:!1};var Fe=i(34518);function Le(e){var t=e.media,i=e.isWithinOverflowMenu,n=(0,b.Z)().selectMedia,r=function(){t&&(n(t.id),(0,p.nt)("bucketMediaMove"))};return t?(0,y.jsx)(y.Fragment,{children:i?(0,y.jsxs)(be.Z,{color:"inherit",onClick:r,"aria-label":"Move Media",id:"move-media-menu-item","data-test":"move-media-menu-item",children:[(0,y.jsx)(Fe.Z,{style:{marginRight:8}})," Move to Album"]}):(0,y.jsx)(k.Z,{color:"primary",onClick:r,id:"persistent-move-button","data-test":"persistent-move-button",children:(0,y.jsx)(Ze.Z,{title:"Move Media",arrow:!0,children:(0,y.jsx)(Fe.Z,{})})})}):null}Le.defaultProps={isWithinOverflowMenu:!1};var Be=i(70306);function Re(e){var t=e.isWithinOverflowMenu,i=(0,g.s0)(),n=(0,g.TH)(),r=new URLSearchParams(n.search),o=r.get("action"),a=Number(r.get("zoom")||1),l=function(){var e=a>=1&&a<5?a+.5:1;i("".concat(n.pathname,"?action=zoom&zoom=").concat(e))};return(0,y.jsx)(y.Fragment,{children:t?(0,y.jsxs)(be.Z,{color:"inherit",onClick:l,"aria-label":"Zoom",id:"zoom-media-menu-item","data-test":"zoom-media-menu-item",children:[(0,y.jsx)(Be.Z,{style:{marginRight:8}})," Zoom"]}):(0,y.jsx)(k.Z,{color:"primary",onClick:l,"data-test":"zoom",id:"zoom-button",children:(0,y.jsx)(Ze.Z,{title:"zoom"===o?"Zoom out":"Zoom in",arrow:!0,children:(0,y.jsx)(Be.Z,{})})})})}function Ue(e){var t=e.anchorEl,i=e.handleClose,n=e.media;return(0,y.jsxs)(fe.Z,{anchorEl:t,open:Boolean(t),onClose:i,keepMounted:!0,children:[(0,y.jsx)(Le,{media:n,isWithinOverflowMenu:!0}),(0,y.jsx)(Re,{isWithinOverflowMenu:!0}),(0,y.jsx)(pe.Z,{isWithinOverflowMenu:!0}),(0,y.jsx)(je,{media:n,isWithinOverflowMenu:!0}),(0,y.jsx)(ge.Z,{media:n,isWithinOverflowMenu:!0})]})}function Oe(e){var t=e.media,i=(0,v.useState)(null),r=(0,n.Z)(i,2),o=r[0],a=r[1];if(!t)return null;return(0,y.jsx)(y.Fragment,{children:F.isMobile?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Se,{media:t}),(0,y.jsx)(me.Z,{media:t}),(0,y.jsx)(ze,{media:t}),(0,y.jsx)(Me,{media:t}),(0,y.jsx)(k.Z,{color:"inherit",onClick:"data-test":"appbar-dropdown-toggle",id:"appbar-dropdown-toggle",size:"large",children:(0,y.jsx)(ve.Z,{})}),(0,y.jsx)(Ue,{handleClose:anchorEl:o,media:t})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(Se,{media:t}),(0,y.jsx)(me.Z,{media:t}),(0,y.jsx)(ze,{media:t}),(0,y.jsx)(Me,{media:t}),(0,y.jsx)(Le,{media:t}),(0,y.jsx)(Re,{}),(0,y.jsx)(pe.Z,{}),(0,y.jsx)(je,{media:t}),(0,y.jsx)(ge.Z,{media:t})]})})}function Ae(e){var t=e.media,i=(0,g.TH)(),r=(0,a.lr)(),l=(0,n.Z)(r,1)[0],s=l.get("action"),d=(0,g.s0)(),u=((0,o.has)(i.state,"returnUri")?i.state:{returnUri:""}).returnUri,c=void 0===u?"":u,h=(0,g.UO)(),f=h.bucketId,v=h.albumId,m=h.mode;return"slideshow"===m||"focus"===s?(0,y.jsx)(he.Z,{disableGutters:!0,style:{color:"white"},children:(0,y.jsx)(k.Z,{color:"inherit",onClick:function(){var e=i.pathname;"slideshow"===m&&(e=e.substring(0,i.pathname.indexOf("slideshow"))),d(e)},"data-test":"close-slideshow",size:"large",children:(0,y.jsx)(ue.Z,{fontSize:"small"})})}):(0,y.jsx)(ce.Z,{position:"static",elevation:0,color:"inherit",sx:{color:"primary.main"},children:(0,y.jsxs)(he.Z,{children:[(0,y.jsx)(k.Z,{onClick:function(){var e,i="";i=c||(v?"/bucket/".concat(f,"/album/").concat(v):"/bucket/".concat(f));var n={};t&&(n.scrollTo=t.id),l.get("q")&&(n.q=l.get("q")||void 0),(0,o.isEmpty)(n)||(e="?".concat((0,a.fW)(n))),d({pathname:i,search:e})},children:(0,y.jsx)(de.Z,{fontSize:"small"})}),(0,y.jsx)("div",{style:{display:"flex",marginLeft:"auto",overflowX:"auto"},children:(0,y.jsx)(Oe,{media:t})})]})})}Re.defaultProps={isWithinOverflowMenu:!1};var We=(0,u.ZP)("div",{shouldForwardProp:)((function(e){var t=e.fullScreen,i=e.focus;return{position:"relative",height:"100vh",backgroundColor:i?"#000":"transparent",width:t||i?"100%":"calc(100% - 400px)",display:"flex",flex:1,flexDirection:"column",transition:"width 225ms",".carousel-root, .carousel, .slider-wrapper, .slider, .slide":{height:"100%",position:"relative",display:"flex",alignItems:"center",maxHeight:i?"90vh":"80vh",width:"100%"}}}));function Ne(e){var t=e.items,i=e.fetchMore,r=e.hasMore,o=(0,g.TH)(),a=(0,f.Z)(),l=(0,c.Z)(a.breakpoints.down("sm")),s=(0,d.l)(p.nt),u=(0,b.Z)().selectMedia,j=(0,v.useState)(null),w=(0,n.Z)(j,2),k=w[0],M=w[1],I=new URLSearchParams(o.search).get("action"),C=(0,g.UO)(),E=C.bucketId,P=C.albumId,z=C.mediaId,F=C.mode,L=t.findIndex((function(e){return e.id===z})),B=t.find((),R=-1===L?0:L;(0,v.useEffect)((function(){M((function(e){return!B||e&&e.id===B.id?e:B}))}),[B]);return(0,y.jsxs)(We,{focus:"slideshow"===F||"focus"===I,fullScreen:l||!s,children:[(0,y.jsx)(Ae,{media:k}),(0,y.jsx)(h.Z,{style:{flex:1,position:"relative",display:"flex",alignItems:"center"},children:(0,y.jsx)(m.lr,{axis:"horizontal",onChange:function(e,n){if((0,v.isValidElement)(n)){r&&e>t.length-5&&i();var o=n.props.media;u(o.id,{replace:!0}),M(o);var a=t[e+1];if(a&&null!==a&&void 0!==a&&a.filename){var l=new Image,s=(0,Z.Z)(a);l.src=s}var d=P?"/bucket/".concat(E,"/album/").concat(P,"/media/").concat(o.id):"/bucket/".concat(E,"/media/").concat(o.id);x.Z.debug(d)}},renderItem:X,renderThumbs:$,selectedItem:R,showIndicators:!1,showStatus:!1,autoPlay:"slideshow"===F,renderArrowPrev:T,renderArrowNext:S,infiniteLoop:"slideshow"===F,showThumbs:!1,useKeyboardArrows:!0,autoFocus:!0,children:t.map(()})}),(0,y.jsx)(se,{showThumbs:"focus"!==I&&"slideshow"!==F,current:k,items:t,fetchMore:i,hasMore:r})]})}var He=i(76256),De=i(63065);function qe(){var e=(0,He.Z)(),t=e.media,i=e.fetchMore,n=e.nextToken;return e.loading?(0,y.jsx)(l.Z,{}):(0,o.isEmpty)(t)?(0,y.jsx)(r.Z,{align:"center",variant:"h5",sx:{marginTop:12},children:"This album is empty"}):(0,y.jsx)(Ne,{items:t,fetchMore:i,hasMore:!!n})}function Ve(){var e=(0,De.Z)(),t=e.images,i=e.fetchMore,n=e.nextToken;return e.loading?(0,y.jsx)(l.Z,{}):(0,o.isEmpty)(t)?(0,y.jsx)(r.Z,{align:"center",variant:"h5",sx:{marginTop:12},children:"No search results found"}):(0,y.jsx)(Ne,{items:t,fetchMore:i,hasMore:!!n})}function _e(){var e=(0,a.lr)(),t="true"===(0,n.Z)(e,1)[0].get("search");return(0,y.jsx)(s.nF,{children:t?(0,y.jsx)(Ve,{}):(0,y.jsx)(qe,{})})}},76256:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(1413),r=i(72668),o=i(16031),a=i(58467),l=i(28422),s=i(25258),d=i(80082),u=i(46663);function c(){var e,t,i,c,h=(0,d.Z)().createAlert,f=(0,u.Z)().settings,v=(0,a.bS)("/bucket/:bucketId/:slug"),m=(0,a.UO)(),g=m.bucketId,p=m.albumId,x=f.sortBy?(0,n.Z)({},f.sortBy):null,b=f.filterBy?(0,n.Z)({},f.filterBy):null;(0,o.isEmpty)(x)&&(x=null),(0,o.isEmpty)(b)&&(b=null),"trash"===(null===v||void 0===v?void 0:v.params.slug)&&(b={status:l.E66.Trash},x=null);var Z=(0,r.a)(l.Bzm,{skip:!g,variables:{bucketId:g,albumId:p,filterBy:b,sortBy:x},onError:function(e){e.graphQLErrors.length?e.graphQLErrors.forEach(():(h("There was a problem dretrieving your bucket details. Please try again later."),s.Z.error(e))}}),j=(null===(e=Z.data)||void 0===e||null===(t=e.bucketMediaByAlbumId)||void 0===t?void 0:t.items)||[],w=null===(i=Z.data)||void 0===i||null===(c=i.bucketMediaByAlbumId)||void 0===c?void 0:c.nextToken,k=!Z.called||Z.loading,y=(0,o.debounce)((function(){w&&Z.fetchMore({variables:{nextToken:w}})}),500,{leading:!0});return{media:j,nextToken:w,loading:k,fetchMore:y}}},63065:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var n=i(72668),r=i(16031),o=i(58467),a=i(28422),l=i(25258),s=i(80082);function d(){var e,t,i,d,u,c,h,f,v,m=(0,o.UO)().bucketId,g=void 0===m?"":m,p=(0,s.Z)().createAlert,x=(0,o.TH)(),b=new URLSearchParams(x.search).get("q")||"",Z={bucketId:g,query:b,nextToken:null!==""?"":null},j=(0,n.a)(a.Nsg,{variables:Z,onError:function(e){g||l.Z.error("Invalid bucketId in search",{bucketId:g}),l.Z.error("Error occured while searching images: ",e),p("Error while searching for images.")}}),w=(null===(e=j.data)||void 0===e||null===(t=e.bucketMediaSearch)||void 0===t?void 0:t.items)||[],k=Boolean(null===(i=j.data)||void 0===i||null===(d=i.bucketMediaSearch)||void 0===d?void 0:d.nextToken),y=(null===(u=j.data)||void 0===u||null===(c=u.bucketMediaSearch)||void 0===c?void 0:c.items.length)||0,M=null!==(h=null===(f=j.data)||void 0===f||null===(v=f.bucketMediaSearch)||void 0===v?void 0:v.nextToken)&&void 0!==h?h:null,T=(0,r.debounce)((function(){M&&j.fetchMore({variables:{nextToken:M}})}),500,{leading:!0});return{bucketId:g,query:b,nextToken:M,images:w,loading:j.loading,total:y,hasMore:k,fetchMore:T}}},62606:function(e,t,i){"use strict";i.d(t,{Z:function(){return r}});var n=i(36241);function r(e){var t,i,r,o,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;if(null!==e&&void 0!==e&&e.imageUrl){var s=null!==(t=e.width)&&void 0!==t?t:1/0,d={width:null!==(i=null===(r=e.width)||void 0===r?void 0:r.toString())&&void 0!==i?i:"590",height:null!==(o=null===(a=e.height)||void 0===a?void 0:a.toString())&&void 0!==o?o:"590",fit:"bounds"};if(l<=590&&s>=590&&(d.width="590",d.height="590"),l<=320&&s>=320&&(d.width="320",d.height="320"),!n.isMobile&&l>320&&s>=320){var u={width:"320",height:"320",fit:"bounds"},c=new URLSearchParams(u).toString(),h=new Image;h.src="".concat(e.imageUrl,"?").concat(c)}var f=new URLSearchParams(d).toString();return"".concat(e.imageUrl,"?").concat(f)}}},38099:70306:46123:]);