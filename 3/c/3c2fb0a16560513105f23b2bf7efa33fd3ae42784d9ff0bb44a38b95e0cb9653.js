"use strict";(this.__LOADABLE_LOADED_CHUNKS__=this.__LOADABLE_LOADED_CHUNKS__||[]).push([[5168],{13939:(t,e,o)=>{o.d(e,{Z:()=>h});var l=o(9969),i=o(30160),n=o(74763),d=o(33876),s=o(61729),r=o(33998),c=o(46699),a=o(34853);const h=function({hasBottomMargin:t,imgWidth:e,itemSelectedLocation:o,podcasts:h,singleRow:Z=!1,tilesInRow:u=3}){if(!h.length)return null;const p=Z?u:1/0;return(0,a.tZ)(r.Z,{tilesInRow:u,children:h.slice(0,p).map((({title:r,description:h,imgUrl:p,url:w,followed:g,seedType:m,seedId:y,newEpisodeCount:_})=>{const S=(0,a.tZ)(c.Z,{lines:2,children:h}),B={id:y,location:o,name:r,type:m};return(0,a.tZ)(s.Z,{dropdown:(0,a.tZ)(i.Z,{followed:g,seedId:y,title:r},`dropdown-${y}`),hasBottomMargin:t,itemSelected:B,singleRow:Z,subTitle:S,tilesInRow:u,title:r,titleSingleLine:!0,url:w,children:(0,a.BX)(n.Z,{itemSelected:B,to:w,children:[(0,a.tZ)(d.Z,{newEpisodeCount:_}),(0,a.tZ)(l.Z,{alt:r,aspectRatio:1,height:e,id:y,src:p,type:m,width:e})]})},y)}))})}},80643:(t,e,o)=>{o.r(e),o.d(e,{default:);var l=o(19981),i=o(43422),n=o(59294),d=o(36012),s=o.n(d),r=o(74763),c=o(87805),a=o(13939),h=o(15061),Z=o(97216),u=o(61993),p=o(90758),w=o(66833),g=o(83738),m=o(54067),y=o(32173),_=o(96832),S=o(34853);const B=function({followed:t,nextPageKey:e,receivedFollowed:o,requestFollowed:d}){const B=(0,p.Z)(),L=(0,_.useCallback)((()=>{o&&!e||d({limit:30,pageKey:e})}),[o,e,d]);(0,u.Z)(();const f=[...(0,i.Z)({noRoundTiles:!0})];return(0,S.BX)(S.HY,{children:[(0,S.tZ)(w.H4,{"data-test":"your-library-podcasts-title",hideHeader:0===t.length,children:(0,S.BX)(h.Z,{children:[B("Podcasts")," (A-Z)"]})}),(0,S.BX)(Z.Z,{shouldShow:t.length>0||!o,children:[(0,S.tZ)(l.Z,{}),(0,S.tZ)(w.Nx,{children:(0,S.tZ)(s(),{hasMore:o&&!!e,loadMore:L,pageStart:0,children:t.length?(0,S.tZ)(a.Z,{imgWidth:m.ul,itemSelectedLocation:"yourlibrary|podcasts|tile",podcasts:t,tilesInRow:y.n}):f})})]}),(0,S.tZ)(Z.Z,{shouldShow:0===t.length,children:(0,S.tZ)(n.Z,{buttons:[(0,S.tZ)(r.Z,{dataTest:"podcast-empty-link",to:"/podcast/",children:(0,S.tZ)(c.Z,{children:B("Browse Podcasts")})},"podcasts-empty-link")],icon:g.uc,subtitle:B("Need a great new podcast to start?"),title:B("Any podcasts you follow will show up here")})})]})}}}]);
//# sourceMappingURL=Podcasts.www.js.map