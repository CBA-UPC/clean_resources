"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9147],{4576:(e,a,o)=>{o.d(a,{T:()=>m});var s=o(50959),t=o(82187),i=o.n(t),n=o(40763),l=o(85648),r=o(41891),d=o(74713);const c="pvGZ831aNzHTQMZ8CA_u";var u=o(11527);const m=(0,s.memo)((function(e){let{onClick:a=(()=>{}),size:o,className:t,uri:m,sharingInfo:h,ctionData:x}),k=(0,s.useCallback)((()=>{y(),a()}),[a,y]);return(0,u.jsx)(r.E,{ariaLabel:g,size:o,onClick:k,className:i()(c,t),icon:n.M,condensedAll:p,condensed:!0})}))},18050:(e,a,o)=>{o.d(a,{X:()=>me});o(80378);var s=o(50959),t=o(82187),i=o.n(t),n=o(36275),l=o(75802),r=o(36353),d=o(69736),c=o(43106),u=o(11317),m=o(85648),h=o(59582);var x=o(42858),g=o(93421),p=o(11401),y=o(51301),k=o(61058),j=o(82857),v=o(42882),b=o(78706),f=o(41657),C=o(38338),P=o(28185),D=o(97013),I=o(6056),N=o(4576),T=o(64329),U=o(27106),E=o(95841),M=o(5542),w=o(69053),S=o(3319),B=o(80626),L=o(74434),A=o(93109),Z=o(11527);const z={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},R=s.memo((function(e){let{episodeUri:a,showUri:o,sharingInfo:t,canDownload:n,requestId:l,onMarkAsPlayed:r,onMoreButtonClick:d,name:c,fullyPlayed:u,index:h}=e;const x=(0,S._)(a),{spec:g,logger:p}=(0,B.fU)(f.createDesktopEpisodeBlockEventFactory,{data:{uri:a,reason:l||"",position:h}}),y=(0,U.r)(a),k=(0,s.useMemo)((()=>(0,Z.jsx)(L.T,{size:"medium",uri:a})),[a]),j=(0,s.useMemo)((()=>(0,Z.jsx)(P.p,{uri:a,size:P.q.sm,className:i()({[A.Z.visibleAction]:(0,w.y)(x)}),onClick:(e,o)=>{o===M.mc.ADD?p.logInteraction(g.downloadButtonFactory().hitDownload({itemToDownload:a})):M.mc.REMOVE&&p.logInteraction(g.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:a}))},canDownload:n})),[a,x,g,p,n]),v=(0,s.useMemo)((()=>(0,Z.jsx)(N.T,{uri:a,sharingInfo:t,interactionData:z,onClick:()=>{p.logInteraction(g.copyLinkFactory().hitShare({entityToBeShared:a,shareId:(null==t?void 0:t.shareId)||""}))}})),[a,t,g,p]),b=(0,s.useMemo)((()=>(0,Z.jsx)(I.w,{uri:a,size:C.q.sm,className:A.Z.visibleAction,onClick:e=>{e?p.logInteraction(g.saveToLibraryButtonFactory().hitLike({itemToBeLiked:a})):p.logInteraction(g.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:a}))}})),[a,g,p]),R=(0,s.useMemo)((()=>(0,Z.jsx)(E.yj,{menu:(0,Z.jsx)(T.k,{uri:a,showUri:o,isPlayed:u,onMarkAsPlayed:r}),children:(0,Z.jsx)(D.z,{size:D.q.sm,label:m.ag.get("more.label.context",c),onClick:d})})),[a,u,c,r,d,o]);return(0,Z.jsxs)(Z.Fragment,{children:[v,j,y?k:b,R]})}));var F=o(96304),G=o(37350);const O="TT1tIewS2iI8Uz8kLuQB",_="Mn93NeoqnZzVnPIP83_9",V="bG5fSAAS6rRL8xxU5iyG",W="g5gZaZVzR0tGT4pK6iEU",H="DbMYFmOEEz9PH1h1zK9n",q="HLixBI5DbVZNC6lrUbAB",Y="q80ZFqNlDZCC7OTfUPj8",Q="y9kEPjDek0J80YRf8JJw",J="YhOAZFuFU1oI_YQSof4z",$="DKIjGP8CcZyjr2O2HNST",K="A7qeQBIk3sqr7bYadWA8",X="_IJaGA3ZdVU0NiTxbGsI",ee="ij5_Bi2LfqgWwHzQBXJS",ae="o_TP9z7A8LQvMXujJC7N",oe="LbePDApGej12_NyRphHu",se="hFCGY5gjCjN10WzV2VQ4",te="gk0rZwqBxJjSeiWV5lgV",ie="te8hrsPnSvx9SUkzV0ME",ne="V0pEigrddg3VxP_sTdAJ",le="acjrpluRnLumVxPt2QG9",re="upo8sAflD1byxWObSkgn",de="DyuLxip2Kl8P7H8fW62u",ce="vak8N953oXaq9F7jZDsD",ue="WBxE9PQe96PpkE9RuTo5",me=s.memo(s.forwardRef((function(e,a){var o;let{uri:t,name:f,showName:C,showUri:P,size:D,description:I,durationMs:N,images:T,badges:U,fullyPlayed:E,releaseDate:M,resumePositionMs:w,isCurrentlyPlaying:S,isPlaying:B,onContextMenu:L,onTouchStart:A,onTouchEnd:z,handlePlaybackClick:me,handleDragStart:he,handleClick:xe,position:ge,index:pe,isPlayable:ye,isPaywalled:ke,isUserSubscribed:je,episodeSharingInfo:ve,playButtonWrapper:be=null,highlightText:fe=(e=>e),onMarkAsPlayed:Ce,contentInformation:Pe,requestId:De,onMoreButtonClick:Ie,status:Ne,variant:Te="default",mediaTypes:Ue}=e;const Ee=(0,l.s0)(),Me=S&&B,we=(0,u.EC)(t).toURLPath(!0),Se=null===(o=(0,u.EC)(P))||void 0===o?void 0:o.toURLPath(!0),Be=function(e){let{episodeUri:a}=e;const[o,t]=(0,s.useState)([]),i=(0,h.G)();return(0,s.useEffect)((()=>{let e=!0;return async function(){const o=await i.getArtists(a);e&&t(o)}(),()=>{e=!1}}),[a,i]),o}({episodeUri:t}),Le=(0,y.G3)(t,M,w,E),Ae=(null==Ue?void 0:Ue.includes(v.$.Video))??!1,Ze=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Ee(we),xe&&xe(e)}),[Ee,we,xe]),ze=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Se&&Ee(Se)}),[Se,Ee]),Re=ke&&!je,Fe=(0,s.useCallback)((e=>{e.stopPropagation(),Re||me(e)}),[me,Re]),Ge=Re||ye,Oe=m.ag.get("tracklist.a11y.play",f,C),_e=m.ag.get("tracklist.a11y.pause",f,C),Ve=(0,Z.jsx)(x.f,{size:"small",version:"next-best-episode"===Te?x.u.primary:x.u.secondary,onClick:Fe,isPlaying:Me,disabled:!Ge,locked:Re,ariaPlayLabel:Oe,ariaPauseLabel:_e}),We=be?be(Ve):Ve;return(0,Z.jsxs)("div",{ref:a,className:i()(O,{[_]:S,[te]:D===k.Uo.MEDIUM,[ie]:D===k.Uo.LARGE,[X]:D===k.Uo.XSMALL,[ue]:"next-best-episode"===Te}),"data-testid":`episode-${pe}`,draggable:!!he,onDragStart:he,onClick:Ze,onContextMenu:L,onTouchStart:A,onTouchEnd:z,children:[Ne&&(0,Z.jsx)(d.x,{className:le,paddingBottom:r.hM,children:Ne}),Pe&&(0,Z.jsx)(F.m,{className:ce,cardHeaderText:Pe.cardHeaderText,buttonText:Pe.buttonText,buttonTarget:Pe.buttonTarget}),"default"===Te&&(0,Z.jsx)("div",{className:ee,children:(0,Z.jsx)(g.O,{className:ae,type:j.p.EPISODE,size:(e=>{switch(e){case k.Uo.LARGE:return p.m$.SIZE_112;case k.Uo.MEDIUM:return p.m$.SIZE_64;default:return p.m$.SIZE_48}})(D),title:f,shape:g.K.ROUNDED_CORNERS,images:T})}),(0,Z.jsxs)("div",{className:ne,children:[(0,Z.jsxs)("div",{className:q,children:[(0,Z.jsx)(n.rU,{className:W,to:we,onClick:Ze,children:(0,Z.jsxs)(d.x,{as:"div",variant:"bodyMediumBold",className:V,"data-testid":"episodeTitle",children:[Le&&(0,Z.jsx)(y.Rd,{}),fe(f)]})}),Be.length>0&&(0,Z.jsxs)("div",{className:J,children:[(0,Z.jsx)(c.U,{size:"small",className:K}),(0,Z.jsx)(d.x,{as:"p",variant:"bodySmall",className:$,children:fe(Be.join(m.ag.getSeparator()))})]})]}),(0,Z.jsxs)("div",{className:Y,children:[Ae&&(0,Z.jsx)(d.x,{variant:"bodySmall",semanticColor:"textSubdued",children:(0,Z.jsx)(G.t,{})}),C&&Se&&(0,Z.jsx)(n.rU,{className:W,to:Se,onClick:ze,children:(0,Z.jsx)(d.x,{variant:"bodySmall",semanticColor:"textSubdued",children:fe(C)})})]})]}),(0,Z.jsx)("div",{className:re,children:(0,Z.jsx)(d.x,{as:"p",variant:"bodySmall",className:oe,children:fe(I??"")})}),(0,Z.jsxs)("div",{className:Q,children:[(0,Z.jsx)("div",{className:se,children:U}),(0,Z.jsx)(b.E,{isPlaying:Me,fullyPlayed:E,durationMs:N,releaseDate:M,resumePositionMs:w,position:S?ge:void 0})]}),(0,Z.jsx)("div",{onClick:e=>{e.stopPropagation()},className:H,children:(0,Z.jsx)(R,{episodeUri:t,showUri:P??"",sharingInfo:ve,canDownload:!ke||ke&&je,requestId:De,index:pe,name:f,fullyPlayed:E,onMarkAsPlayed:Ce,onMoreButtonClick:Ie})}),(0,Z.jsx)("div",{className:de,children:We})]})})))},96304:(e,a,o)=>{o.d(a,{m:()=>y});var s=o(50959),t=o(82187),i=o.n(t),n=o(21165),l=o(69736),r=o(43286),d=o(18517),c=o(11317),u=o(17676),m=o(33592);const h="rFwxt8s8DYY8p1O7tYZW",x="sA2HogGQNi8R_zpCWei5",g="H92pPTuqDR5DcoTtjcb3";var p=o(11527);const y=e=>{let{cardHeaderText:a,buttonText:o,buttonTarget:t,className:y}=e;const k=(0,d.W6)(u.XdP),j=(0,s.useCallback)((e=>{e.stopPropagation()}),[]),v=(0,c.EC)(t).toURLPath(!0);return k?(0,p.jsxs)("div",{className:i()(h,y),onClick:j,children:[(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)(n.W,{className:g,size:"small",semanticColor:"textBase"}),(0,p.jsx)(l.x,{as:"span",variant:"bodyMediumBold",semanticColor:"textBase",children:a})]}),(0,p.jsx)(r.D,{size:"small",colorSet:"invertedLight",component:m.Z,href:v,children:o})]}):null}},12553:(e,a,o)=>{o.d(a,{k:()=>_});o(80378),o(46758),o(53321);var s=o(50959),t=o(82187),i=o.n(t),n=o(75802),l=o(69736),r=o(36353),d=o(97345),c=o(32394),u=o(77366),m=o(25331),h=o(11317),x=o(85648),g=o(42858),p=o(93421),y=o(11401),k=o(51301),j=o(61058),v=o(82857),b=o(42882),f=o(78706),C=o(96304),P=o(41657),D=o(28185),I=o(97013),N=o(6056),T=o(4576),U=o(64329),E=o(27106),M=o(95841),w=o(5542),S=o(69053),B=o(3319),L=o(80626),A=o(74434),Z=o(93109),z=o(11527);const R={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},F=s.memo((function(e){let{episodeUri:a,showUri:o,sharingInfo:t,size:n,canDownload:l,requestId:r,onMarkAsPlayed:d,onMoreButtonClick:c,name:u,fullyPlayed:m,index:h}=e;const g=(0,B._)(a),{spec:p,logger:y}=(0,L.fU)(P.createDesktopEpisodeBlockEventFactory,{data:{uri:a,reason:r||"",position:h}}),k=n===j.Uo.LARGE?"medium":"small",v=(0,s.useMemo)((()=>(0,z.jsx)(D.p,{uri:a,size:k,className:i()({[Z.Z.visibleAction]:(0,S.y)(g)}),onClick:(e,o)=>{o===w.mc.ADD?y.logInteraction(p.downloadButtonFactory().hitDownload({itemToDownload:a})):w.mc.REMOVE&&y.logInteraction(p.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:a}))},canDownload:l})),[a,g,p,y,k,l]),b=(0,s.useMemo)((()=>(0,z.jsx)(T.T,{uri:a,sharingInfo:t,interactionData:R,size:k,onClick:()=>{y.logInteraction(p.copyLinkFactory().hitShare({entityToBeShared:a,shareId:(null==t?void 0:t.shareId)||""}))}})),[a,t,p,y,k]),f=(0,s.useMemo)((()=>(0,z.jsx)(N.w,{uri:a,size:k,className:Z.Z.visibleAction,onClick:e=>{e?y.logInteraction(p.saveToLibraryButtonFactory().hitLike({itemToBeLiked:a})):y.logInteraction(p.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:a}))}})),[a,p,y,k]),C=(0,E.r)(a),F=(0,s.useMemo)((()=>(0,z.jsx)(A.T,{size:k,uri:a,className:Z.Z.visibleAction})),[a,k]),G=(0,s.useMemo)((()=>(0,z.jsx)(M.yj,{menu:(0,z.jsx)(U.k,{uri:a,showUri:o,isPlayed:m,onMarkAsPlayed:d}),children:(0,z.jsx)(I.z,{size:k,label:x.ag.get("more.label.context",u),onClick:c})})),[a,m,u,d,c,o,k]);return(0,z.jsxs)(z.Fragment,{children:[C?F:f,v,b,G]})}));var G=o(60046),O=o(37350);const _=s.memo(s.forwardRef((function(e,a){var o;let{uri:t,name:P,showName:D,showUri:I,size:N,description:T,durationMs:U,images:E,badges:M,fullyPlayed:w,releaseDate:S,resumePositionMs:B,isCurrentlyPlaying:L,isPlaying:A,onContextMenu:R,onTouchStart:_,onTouchEnd:V,handlePlaybackClick:W,handleDragStart:H,handleClick:q,position:Y,index:Q,isPlayable:J,isPaywalled:$,isUserSubscribed:K,episodeSharingInfo:X,playButtonWrapper:ee=null,highlightText:ae=(e=>e),onMarkAsPlayed:oe,contentInformation:se,requestId:te,mediaTypes:ie,onMoreButtonClick:ne,status:le,variant:re="default"}=e;const de=(0,n.s0)(),ce=L&&A,ue=N===j.Uo.LARGE,me=(0,h.EC)(t).toURLPath(!0),he=null===(o=(0,h.EC)(I))||void 0===o?void 0:o.toURLPath(!0),xe=(0,k.G3)(t,S,B,w),ge=$&&!K,pe=(null==ie?void 0:ie.includes(b.$.Video))??!1,ye=(null==M?void 0:M.props.children.filter((e=>!1!==e)))||[],ke=ge||J,je=x.ag.get("tracklist.a11y.play",P,D),ve=x.ag.get("tracklist.a11y.pause",P,D),be=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),de(me),q&&q(e)}),[de,me,q]),fe=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),he&&de(he)}),[he,de]),Ce=(0,s.useCallback)((e=>{e.stopPropagation(),ge||W(e)}),[W,ge]),Pe=(0,z.jsx)(g.f,{size:"small",version:"next-best-episode"===re?g.u.primary:g.u.secondary,onClick:Ce,isPlaying:ce,disabled:!ke,locked:ge,ariaPlayLabel:je,ariaPauseLabel:ve}),De=ee?ee(Pe):Pe,Ie=(0,z.jsx)(z.Fragment,{children:le&&(0,z.jsx)(l.x,{variant:"bodySmall",semanticColor:"textSubdued",paddingBottom:r.hM,children:le})}),Ne=(0,z.jsxs)(d.g,{className:Z.Z.title,href:me,onClick:be,lineClamp:2,children:[xe&&(0,z.jsx)(k.Rd,{}),ae(P)]}),Te=(0,z.jsxs)(c.l,{lineClamp:2,paddingBottom:ue?r.dl:void 0,children:[pe&&(0,z.jsx)(O.t,{}),D&&he&&(0,z.jsx)(G.Link,{className:Z.Z.showLink,to:he,onClick:fe,children:(0,z.jsx)(l.x,{variant:"bodySmall",semanticColor:"textSubdued",children:ae(D)})})]}),Ue=(0,z.jsxs)("div",{className:Z.Z.showDetailsWithProgress,children:[(0,z.jsx)(u.o,{lineClamp:2,paddingBottom:ue?r.hM:void 0,children:ae(T??"")}),(0,z.jsxs)("div",{className:Z.Z.metadata,children:[ye.length>0&&(0,z.jsx)("div",{className:Z.Z.badges,children:M}),(0,z.jsx)(f.E,{isPlaying:ce,fullyPlayed:w,durationMs:U,releaseDate:S,resumePositionMs:B,position:L?Y:void 0})]})]}),Ee=(0,z.jsxs)("div",{className:Z.Z.footer,children:[(0,z.jsx)("div",{onClick:e=>{e.stopPropagation()},className:Z.Z.actions,children:(0,z.jsx)(F,{episodeUri:t,showUri:I??"",sharingInfo:X,size:N,canDownload:!$||$&&K,requestId:te,index:Q,name:P,fullyPlayed:w,onMarkAsPlayed:oe,onMoreButtonClick:ne})}),(0,z.jsx)("div",{children:De})]}),Me="default"===re&&(0,z.jsx)("div",{className:Z.Z.imageContainer,children:(0,z.jsx)(p.O,{className:i()(Z.Z.showImage,{[Z.Z.largeImage]:ue}),type:v.p.EPISODE,size:(e=>{switch(e){case j.Uo.LARGE:return y.m$.SIZE_112;case j.Uo.MEDIUM:return y.m$.SIZE_64;default:return y.m$.SIZE_48}})(N),title:P,shape:p.K.ROUNDED_CORNERS,images:E})});return(0,z.jsxs)("div",{className:i()(Z.Z.episodeBlock,{[Z.Z.isActive]:L,[Z.Z.nextBestEpisode]:"next-best-episode"===re}),"data-testid":`episode-${Q}`,draggable:!!H,onDragStart:H,onClick:be,onContextMenu:R,onTouchStart:_,onTouchEnd:V,children:[se&&(0,z.jsx)(C.m,{className:Z.Z.contentInformationBanner,cardHeaderText:se.cardHeaderText,buttonText:se.buttonText,buttonTarget:se.buttonTarget}),(0,z.jsx)(m.w,{size:"xxl",ref:a,media:Me,title:Ne,id:`episode-${Q}`,subtitle:D&&he?Te:Ue,pretitle:Ie,body:D&&he?Ue:void 0,variant:"naked",footer:Ee,hoverBackgroundColor:"backgroundHighlight",layout:ue?"wide":"regular",horizontalGap:ue?r.g4:r.nu,verticalGap:r.dl,paddingBlockStart:r.o7,paddingBlockEnd:r.o7})]})})))},42882:(e,a,o)=>{o.d(a,{$:()=>s});let s=function(e){return e.Audio="AUDIO",e.Unknown="UNKNOWN",e.Video="VIDEO",e}({})},93109:(e,a,o)=>{o.d(a,{Z:()=>s});const s={episodeBlock:"T9iBYqbERZHdwDl0U2tC",isActive:"DS4BYgmEO7Wy5RutUt60",title:"N2Fkohxhgu1_QAWUDc4O",selected:"DaxWgzoBoBnOEj43bZAA",actions:"hGbRiYkIjjy4sJvor0A2",visibleAction:"OgaF7O4ER8AvZfFd6JdJ",metadata:"bdGDIiYj50H66Hx5uevz",imageContainer:"kiT5NMttSzIDbtqBKc1J",showImage:"TG1hsDPHeO5QUf4EQasO",largeImage:"_NdByrVnM0OS7aK_GfRn",showLink:"CHUTnjCBTLRfQb048zjZ",badges:"UpgTvLnGW6GFjAUfaPXH",footer:"kxVuYXZ4sVWn6XuJgFhX",showDetailsWithProgress:"UvdRnanMNuY384mjTf2l",contentInformationBanner:"fmu47VumZ84IoKgMK1yU",nextBestEpisode:"dUScIGoP9fWn5IVsztB7"}}}]);
//# sourceMappingURL=9147.24429f6b.js.mapba(86,86,86,0.5);}
::-ms-input-placeholder {color: rgba(86,86,86,0.5);}
::placeholder {color: rgba(86,86,86,0.5);}

.Resolved .EndTranscriptLabel {color:#565656; background:none;}
.ButtonLikeLink .buttonText {color: inherit;text-decoration: none}
.ButtonLikeLink .buttonText:hover {color: inherit; text-decoration: underline}
.FileNameBox .FileSize {color: inherit}

.circle, .dots > span {background: #565656} 
.circle:after {border-right-color: #565656}
.subcircle {background: #F7F7F7}
.subcircle:after {border-top-color:#F7F7F7}
.PopupContentWrapper {background:#E0E0E0;color:#565656}
.InitOnline .StatusMessage .ImLeButton {background: #565656; color:#F7F7F7}
.InitOnline .StatusMessage .ImLeButton .buttonText {color:#565656}
.InitOnline .StatusWidget .ImLeButton .buttonText {color:#F7F7F7}
.AgentRanking .RewardButton .buttonIcon {background:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M17.6%2C22.2L17.6%2C22.2c-2.2%2C0-4-1.8-4-4v0c0-2.2%2C1.8-4%2C4-4h0c2.2%2C0%2C4%2C1.8%2C4%2C4v0C21.6%2C20.4%2C19.8%2C22.2%2C17.6%2C22.2z%0A%09%09%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M25%2C0C11.2%2C0%2C0%2C11.2%2C0%2C25s11.2%2C25%2C25%2C25s25-11.2%2C25-25S38.8%2C0%2C25%2C0z%20M25%2C45.7C13.6%2C45.7%2C4.3%2C36.4%2C4.3%2C25%0A%09%09S13.6%2C4.3%2C25%2C4.3S45.7%2C13.6%2C45.7%2C25S36.4%2C45.7%2C25%2C45.7z%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.3%2C27.9l0%2C0.9c0%2C4.6-3.7%2C8.3-8.3%2C8.3c-4.6%2C0-8.3-3.7-8.3-8.3l0-0.9H13l0%2C0.9c0%2C6.6%2C5.4%2C12%2C12%2C12%0A%09%09s12-5.4%2C12-12l0-0.9H33.3z%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.7%2C22.1L33.7%2C22.1c-2.2%2C0-3.9-1.8-3.9-3.9v0c0-2.2%2C1.8-3.9%2C3.9-3.9h0c2.2%2C0%2C3.9%2C1.8%2C3.9%2C3.9v0%0A%09%09C37.7%2C20.3%2C35.9%2C22.1%2C33.7%2C22.1z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E');}
.AgentRanking .PunishButton .buttonIcon {background:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M17.6%2C22.2L17.6%2C22.2c-2.2%2C0-4-1.8-4-4v0c0-2.2%2C1.8-4%2C4-4h0c2.2%2C0%2C4%2C1.8%2C4%2C4v0C21.6%2C20.4%2C19.8%2C22.2%2C17.6%2C22.2z%0A%09%09%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M25%2C0C11.2%2C0%2C0%2C11.2%2C0%2C25s11.2%2C25%2C25%2C25s25-11.2%2C25-25S38.8%2C0%2C25%2C0z%20M25%2C45.7C13.6%2C45.7%2C4.3%2C36.4%2C4.3%2C25%0A%09%09S13.6%2C4.3%2C25%2C4.3S45.7%2C13.6%2C45.7%2C25S36.4%2C45.7%2C25%2C45.7z%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M16.7%2C38.6l0-0.9c0-4.6%2C3.7-8.3%2C8.3-8.3c4.6%2C0%2C8.3%2C3.7%2C8.3%2C8.3l0%2C0.9H37l0-0.9c0-6.6-5.4-12-12-12%0A%09%09s-12%2C5.4-12%2C12l0%2C0.9H16.7z%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.7%2C22.1L33.7%2C22.1c-2.2%2C0-3.9-1.8-3.9-3.9v0c0-2.2%2C1.8-3.9%2C3.9-3.9h0c2.2%2C0%2C3.9%2C1.8%2C3.9%2C3.9v0%0A%09%09C37.7%2C20.3%2C35.9%2C22.1%2C33.7%2C22.1z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E');}
.AgentRanking .OkButton .buttonIcon {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%3Crect%20x%3D%2223.2%22%20y%3D%2220.9%22%20transform%3D%22matrix(-2.576333e-11%20-1%201%20-2.576333e-11%20-7.82%2057.82)%22%20class%3D%22st0%22%20width%3D%223.6%22%20height%3D%2223.9%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M17.6%2C22.2L17.6%2C22.2c-2.2%2C0-4-1.8-4-4v0c0-2.2%2C1.8-4%2C4-4h0c2.2%2C0%2C4%2C1.8%2C4%2C4v0C21.6%2C20.4%2C19.8%2C22.2%2C17.6%2C22.2z%0A%09%09%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M25%2C0C11.2%2C0%2C0%2C11.2%2C0%2C25s11.2%2C25%2C25%2C25s25-11.2%2C25-25S38.8%2C0%2C25%2C0z%20M25%2C45.7C13.6%2C45.7%2C4.3%2C36.4%2C4.3%2C25%0A%09%09S13.6%2C4.3%2C25%2C4.3S45.7%2C13.6%2C45.7%2C25S36.4%2C45.7%2C25%2C45.7z%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.7%2C22.1L33.7%2C22.1c-2.2%2C0-3.9-1.8-3.9-3.9v0c0-2.2%2C1.8-3.9%2C3.9-3.9h0c2.2%2C0%2C3.9%2C1.8%2C3.9%2C3.9v0%0A%09%09C37.7%2C20.3%2C35.9%2C22.1%2C33.7%2C22.1z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E');}
.AgentRanking .RewardButton .buttonText, 
.AgentRanking .PunishButton .buttonText, 
.AgentRanking .OkButton .buttonText {background: #565656; color:#F7F7F7}
.AgentRanking .RewardButton .buttonText:before, 
.AgentRanking .PunishButton .buttonText:before, 
.AgentRanking .OkButton .buttonText:before {border-bottom-color:#565656}
.RatingPanel, .CommentPanel {color:#565656}
.CommentPanel ::-webkit-input-placeholder {color: rgba(86,86,86,0.5);}
.CommentPanel ::-ms-input-placeholder {color: rgba(86,86,86,0.5);}
.CommentPanel ::placeholder {color: rgba(86,86,86,0.5);}

.AgentRanking .RankingBox .Avatar .gwt-Image {border: 2px solid #565656}
.Avatar .gwt-Image {background:#fff;}
.Avatar {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23E0E0E0%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.7%2C30.8c4.8-2.9%2C7.9-8.1%2C7.9-14.2C41.7%2C7.5%2C34.2%2C0%2C25%2C0S8.3%2C7.5%2C8.3%2C16.7c0%2C6%2C3.1%2C11.3%2C7.9%2C14.2%0A%09%09C7.9%2C34%2C1.7%2C41.3%2C0%2C50h4.2C6.2%2C40.4%2C14.8%2C33.3%2C25%2C33.3S43.8%2C40.4%2C45.8%2C50H50C48.3%2C41%2C42.1%2C33.7%2C33.7%2C30.8L33.7%2C30.8z%20M12.5%2C16.7%0A%09%09c0-6.9%2C5.6-12.5%2C12.5-12.5s12.5%2C5.6%2C12.5%2C12.5S31.9%2C29.2%2C25%2C29.2S12.5%2C23.5%2C12.5%2C16.7L12.5%2C16.7z%20M12.5%2C16.7%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E') no-repeat center center #565656 !important;background-size:20px 20px !important;}
.InitOnline .ChatsQueue {background:#E0E0E0}
.CommentPanel .CommentButtons::before {border-color:#565656}

.chatMessagesGroupAgent .Avatar {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.7%2C30.8c4.8-2.9%2C7.9-8.1%2C7.9-14.2C41.7%2C7.5%2C34.2%2C0%2C25%2C0S8.3%2C7.5%2C8.3%2C16.7c0%2C6%2C3.1%2C11.3%2C7.9%2C14.2%0A%09%09C7.9%2C34%2C1.7%2C41.3%2C0%2C50h4.2C6.2%2C40.4%2C14.8%2C33.3%2C25%2C33.3S43.8%2C40.4%2C45.8%2C50H50C48.3%2C41%2C42.1%2C33.7%2C33.7%2C30.8L33.7%2C30.8z%20M12.5%2C16.7%0A%09%09c0-6.9%2C5.6-12.5%2C12.5-12.5s12.5%2C5.6%2C12.5%2C12.5S31.9%2C29.2%2C25%2C29.2S12.5%2C23.5%2C12.5%2C16.7L12.5%2C16.7z%20M12.5%2C16.7%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E') no-repeat center center #565656 !important; background-size:20px 20px !important;}
.chatMessagesGroupMe .Avatar, .chatMessagesGroupCustomer .Avatar {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.7%2C30.8c4.8-2.9%2C7.9-8.1%2C7.9-14.2C41.7%2C7.5%2C34.2%2C0%2C25%2C0S8.3%2C7.5%2C8.3%2C16.7c0%2C6%2C3.1%2C11.3%2C7.9%2C14.2%0A%09%09C7.9%2C34%2C1.7%2C41.3%2C0%2C50h4.2C6.2%2C40.4%2C14.8%2C33.3%2C25%2C33.3S43.8%2C40.4%2C45.8%2C50H50C48.3%2C41%2C42.1%2C33.7%2C33.7%2C30.8L33.7%2C30.8z%20M12.5%2C16.7%0A%09%09c0-6.9%2C5.6-12.5%2C12.5-12.5s12.5%2C5.6%2C12.5%2C12.5S31.9%2C29.2%2C25%2C29.2S12.5%2C23.5%2C12.5%2C16.7L12.5%2C16.7z%20M12.5%2C16.7%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E') no-repeat center center #999999 !important; background-size:20px 20px !important;}
.chatMessagesGroupMe .FileDownloadButton .buttonIcon:before,
.chatMessagesGroupCustomer .FileDownloadButton .buttonIcon:before {background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpolygon%20class%3D%22st0%22%20points%3D%2237.2%2C21.9%2033.5%2C18.2%2027.6%2C24.2%2027.6%2C23.1%2027.6%2C6%2022.4%2C6%2022.4%2C23.1%2022.4%2C24.2%2016.5%2C18.2%2012.8%2C21.9%20%0A%09%0925%2C34.1%20%09%22%2F%3E%0A%09%3Cpolygon%20class%3D%22st0%22%20points%3D%2245.6%2C28.1%2045.6%2C40.2%204.2%2C40.2%204.2%2C28.1%200%2C28.1%200%2C40.2%200%2C44%204.2%2C44%2045.6%2C44%2049.9%2C44%2050%2C44%2050%2C28.1%20%09%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E');}
.chatMessagesGroupAgent .FileDownloadButton .buttonIcon:before {background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpolygon%20class%3D%22st0%22%20points%3D%2237.2%2C21.9%2033.5%2C18.2%2027.6%2C24.2%2027.6%2C23.1%2027.6%2C6%2022.4%2C6%2022.4%2C23.1%2022.4%2C24.2%2016.5%2C18.2%2012.8%2C21.9%20%0A%09%0925%2C34.1%20%09%22%2F%3E%0A%09%3Cpolygon%20class%3D%22st0%22%20points%3D%2245.6%2C28.1%2045.6%2C40.2%204.2%2C40.2%204.2%2C28.1%200%2C28.1%200%2C40.2%200%2C44%204.2%2C44%2045.6%2C44%2049.9%2C44%2050%2C44%2050%2C28.1%20%09%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E');}
.CaptionTextBoxEmpty {color:#565656}

.PopOutButton .cb, .PopOutButton .cb:before {background:#565656}
.CheckBoxContainer .CheckBox, .CheckBoxContainer .CheckBox:before {background:#565656}
.PopOutButton .cbl {color:#565656}
.TicketInfoPanel .ChatWithLabel, #subheader .ChatWithLabel::after,
.InitOnline .TextMain, .InitOffline .InfoPanel {border-bottom-color:#565656;}
.MessageFormFiles-icon:before {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M47.2%2C24.7L26.3%2C45.6c-2.9%2C2.9-6.7%2C4.4-10.9%2C4.4c-4.2%2C0-7.9-1.5-10.9-4.4c-2.9-2.9-4.4-6.7-4.4-10.9%0A%09%09c0-4.2%2C1.5-7.9%2C4.4-10.9L27.7%2C0.6C28.1%2C0.2%2C28.4%2C0%2C29%2C0c0.6%2C0%2C1%2C0.2%2C1.3%2C0.6L33%2C3.3c0.8%2C0.8%2C0.8%2C1.9%2C0%2C2.7L9.8%2C29.1%0A%09%09c-1.5%2C1.5-2.3%2C3.4-2.3%2C5.4c0%2C1.9%2C0.8%2C4%2C2.3%2C5.4c2.9%2C2.9%2C7.9%2C2.9%2C10.9%2C0L41.7%2C19c0.4-0.4%2C0.6-0.8%2C0.6-1.3c0-1.1-0.8-1.9-1.9-1.9%0A%09%09c-0.8%2C0-1.2%2C0.4-1.3%2C0.6L21.3%2C33.9c-0.4%2C0.4-1%2C0.6-1.3%2C0.6c-0.4%2C0-1-0.2-1.3-0.6L16%2C31.2c-0.8-0.8-0.8-1.9%2C0-2.7l17.6-17.6%0A%09%09C35.3%2C9.2%2C37.8%2C8%2C40.3%2C8c5.4%2C0%2C9.6%2C4.2%2C9.6%2C9.6C50.1%2C20.5%2C49.1%2C22.8%2C47.2%2C24.7L47.2%2C24.7z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E') no-repeat center center;}
.chatMessagesGroupMe .PreviewBox:empty,
.chatMessagesGroupCustomer .PreviewBox:empty {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M47.2%2C24.7L26.3%2C45.6c-2.9%2C2.9-6.7%2C4.4-10.9%2C4.4c-4.2%2C0-7.9-1.5-10.9-4.4c-2.9-2.9-4.4-6.7-4.4-10.9%0A%09%09c0-4.2%2C1.5-7.9%2C4.4-10.9L27.7%2C0.6C28.1%2C0.2%2C28.4%2C0%2C29%2C0c0.6%2C0%2C1%2C0.2%2C1.3%2C0.6L33%2C3.3c0.8%2C0.8%2C0.8%2C1.9%2C0%2C2.7L9.8%2C29.1%0A%09%09c-1.5%2C1.5-2.3%2C3.4-2.3%2C5.4c0%2C1.9%2C0.8%2C4%2C2.3%2C5.4c2.9%2C2.9%2C7.9%2C2.9%2C10.9%2C0L41.7%2C19c0.4-0.4%2C0.6-0.8%2C0.6-1.3c0-1.1-0.8-1.9-1.9-1.9%0A%09%09c-0.8%2C0-1.2%2C0.4-1.3%2C0.6L21.3%2C33.9c-0.4%2C0.4-1%2C0.6-1.3%2C0.6c-0.4%2C0-1-0.2-1.3-0.6L16%2C31.2c-0.8-0.8-0.8-1.9%2C0-2.7l17.6-17.6%0A%09%09C35.3%2C9.2%2C37.8%2C8%2C40.3%2C8c5.4%2C0%2C9.6%2C4.2%2C9.6%2C9.6C50.1%2C20.5%2C49.1%2C22.8%2C47.2%2C24.7L47.2%2C24.7z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E') no-repeat center center;}
.chatMessagesGroupAgent .PreviewBox:empty {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M47.2%2C24.7L26.3%2C45.6c-2.9%2C2.9-6.7%2C4.4-10.9%2C4.4c-4.2%2C0-7.9-1.5-10.9-4.4c-2.9-2.9-4.4-6.7-4.4-10.9%0A%09%09c0-4.2%2C1.5-7.9%2C4.4-10.9L27.7%2C0.6C28.1%2C0.2%2C28.4%2C0%2C29%2C0c0.6%2C0%2C1%2C0.2%2C1.3%2C0.6L33%2C3.3c0.8%2C0.8%2C0.8%2C1.9%2C0%2C2.7L9.8%2C29.1%0A%09%09c-1.5%2C1.5-2.3%2C3.4-2.3%2C5.4c0%2C1.9%2C0.8%2C4%2C2.3%2C5.4c2.9%2C2.9%2C7.9%2C2.9%2C10.9%2C0L41.7%2C19c0.4-0.4%2C0.6-0.8%2C0.6-1.3c0-1.1-0.8-1.9-1.9-1.9%0A%09%09c-0.8%2C0-1.2%2C0.4-1.3%2C0.6L21.3%2C33.9c-0.4%2C0.4-1%2C0.6-1.3%2C0.6c-0.4%2C0-1-0.2-1.3-0.6L16%2C31.2c-0.8-0.8-0.8-1.9%2C0-2.7l17.6-17.6%0A%09%09C35.3%2C9.2%2C37.8%2C8%2C40.3%2C8c5.4%2C0%2C9.6%2C4.2%2C9.6%2C9.6C50.1%2C20.5%2C49.1%2C22.8%2C47.2%2C24.7L47.2%2C24.7z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E') no-repeat center center;}
.chatMessagesGroupMe .PreviewBox:hover:not(:empty):before,
.chatMessagesGroupCustomer .PreviewBox:hover:not(:empty):before {background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M49.6%2C23.8c-7.6-9.3-15.7-14-24.3-14c-3.4%2C0-6.8%2C0.8-10.2%2C2.2c-2.7%2C1.2-5.3%2C2.8-7.8%2C4.8%0A%09%09c-4.3%2C3.4-6.8%2C6.9-6.9%2C7c-0.5%2C0.7-0.5%2C1.6%2C0.1%2C2.2c7.5%2C9.3%2C15.7%2C14%2C24.3%2C14c3.4%2C0%2C6.8-0.8%2C10.2-2.2c2.7-1.2%2C5.3-2.8%2C7.8-4.8%0A%09%09c4.3-3.4%2C6.8-6.9%2C6.9-7C50.1%2C25.4%2C50.1%2C24.5%2C49.6%2C23.8z%20M40.3%2C30.3c-3.6%2C2.8-9.1%2C6.2-15.7%2C6.2c-7.1%2C0-13.9-3.9-20.5-11.5%0A%09%09c1-1.2%2C2.9-3.2%2C5.4-5.3c3.6-2.8%2C9.1-6.2%2C15.7-6.2c7.1%2C0%2C13.9%2C3.9%2C20.5%2C11.5C44.8%2C26.2%2C42.9%2C28.3%2C40.3%2C30.3z%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M32.1%2C29.9C32.1%2C29.9%2C32.1%2C29.8%2C32.1%2C29.9c0.2-0.2%2C0.3-0.4%2C0.4-0.6c0-0.1%2C0.1-0.1%2C0.1-0.2%0A%09%09c0.1-0.2%2C0.2-0.3%2C0.2-0.5c0-0.1%2C0.1-0.2%2C0.1-0.3c0.1-0.1%2C0.1-0.2%2C0.1-0.4c0.1-0.1%2C0.1-0.3%2C0.2-0.4c0-0.1%2C0-0.2%2C0.1-0.3%0A%09%09c0-0.2%2C0.1-0.4%2C0.1-0.6c0%2C0%2C0-0.1%2C0-0.1c0.1-0.5%2C0.1-1%2C0.1-1.5c0%2C0%2C0%2C0%2C0-0.1c0-2.2-0.9-4.4-2.5-6c-1.7-1.7-3.8-2.5-6-2.5%0A%09%09c0%2C0%2C0%2C0-0.1%2C0c-0.5%2C0-1%2C0.1-1.5%2C0.1c0%2C0-0.1%2C0-0.1%2C0c-0.2%2C0-0.4%2C0.1-0.6%2C0.1c-0.1%2C0-0.2%2C0-0.3%2C0.1c-0.2%2C0-0.3%2C0.1-0.5%2C0.2%0A%09%09c-0.1%2C0-0.2%2C0.1-0.4%2C0.1c-0.1%2C0-0.2%2C0.1-0.3%2C0.2c-0.1%2C0.1-0.3%2C0.1-0.4%2C0.2c-0.1%2C0-0.1%2C0.1-0.2%2C0.1c-0.2%2C0.1-0.3%2C0.2-0.5%2C0.3%0A%09%09c0%2C0-0.1%2C0.1-0.1%2C0.1c-0.4%2C0.3-0.8%2C0.6-1.2%2C1c-0.4%2C0.4-0.7%2C0.8-1%2C1.2c0%2C0%2C0%2C0-0.1%2C0.1c-0.1%2C0.2-0.2%2C0.4-0.3%2C0.5%0A%09%09c0%2C0.1-0.1%2C0.1-0.1%2C0.2c-0.1%2C0.2-0.2%2C0.3-0.2%2C0.5c0%2C0.1-0.1%2C0.2-0.1%2C0.3c0%2C0.1-0.1%2C0.2-0.1%2C0.4c-0.1%2C0.1-0.1%2C0.3-0.2%2C0.4%0A%09%09c0%2C0.1%2C0%2C0.2-0.1%2C0.3c-0.1%2C0.2-0.1%2C0.4-0.1%2C0.6c0%2C0%2C0%2C0.1%2C0%2C0.1c-0.1%2C0.5-0.1%2C1-0.1%2C1.5c0%2C0.5%2C0.1%2C1.1%2C0.2%2C1.6c0%2C0%2C0%2C0.1%2C0%2C0.1%0A%09%09c0%2C0.2%2C0.1%2C0.4%2C0.1%2C0.6c0%2C0.1%2C0%2C0.2%2C0.1%2C0.2c0%2C0.2%2C0.1%2C0.3%2C0.2%2C0.5c0%2C0.1%2C0.1%2C0.2%2C0.1%2C0.3c0%2C0.1%2C0.1%2C0.2%2C0.2%2C0.3%0A%09%09c0.1%2C0.1%2C0.1%2C0.3%2C0.2%2C0.4c0%2C0.1%2C0.1%2C0.1%2C0.1%2C0.2c0.1%2C0.2%2C0.2%2C0.4%2C0.3%2C0.5c0%2C0%2C0%2C0%2C0.1%2C0.1c0.3%2C0.4%2C0.6%2C0.8%2C1%2C1.2c0%2C0%2C0%2C0%2C0%2C0%0A%09%09c1.6%2C1.5%2C3.7%2C2.5%2C6%2C2.5c2.4%2C0%2C4.5-0.9%2C6-2.5c0%2C0%2C0%2C0%2C0.1%2C0C31.5%2C30.7%2C31.8%2C30.3%2C32.1%2C29.9z%20M21.4%2C28.3c-0.2-0.2-0.3-0.4-0.5-0.6%0A%09%09c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.2-0.2-0.3-0.2-0.5c-0.1-0.1-0.1-0.3-0.1-0.4c-0.1-0.2-0.1-0.3-0.1-0.5c0-0.2%2C0-0.4-0.1-0.6%0A%09%09c0-0.2%2C0-0.5%2C0-0.7c0-0.2%2C0-0.4%2C0.1-0.6c0-0.2%2C0.1-0.3%2C0.1-0.5c0-0.2%2C0.1-0.3%2C0.1-0.5c0.1-0.1%2C0.1-0.3%2C0.2-0.4%0A%09%09c0.1-0.2%2C0.1-0.3%2C0.2-0.4c0.1-0.2%2C0.2-0.3%2C0.4-0.4c0.2-0.2%2C0.4-0.4%2C0.6-0.6c0.1-0.1%2C0.3-0.2%2C0.4-0.4c0.1-0.1%2C0.3-0.2%2C0.5-0.3%0A%09%09c0.1-0.1%2C0.3-0.1%2C0.4-0.2c0.2-0.1%2C0.3-0.1%2C0.5-0.2c0.1%2C0%2C0.3-0.1%2C0.4-0.1c0.2%2C0%2C0.5-0.1%2C0.7-0.1c1.3-0.1%2C2.7%2C0.4%2C3.7%2C1.4%0A%09%09c1%2C1%2C1.5%2C2.4%2C1.4%2C3.8c0%2C0.2%2C0%2C0.5-0.1%2C0.7c0%2C0.2-0.1%2C0.3-0.1%2C0.5c0%2C0.2-0.1%2C0.3-0.1%2C0.5c-0.1%2C0.1-0.1%2C0.3-0.2%2C0.4%0A%09%09c-0.1%2C0.1-0.1%2C0.3-0.2%2C0.4c-0.1%2C0.2-0.3%2C0.4-0.4%2C0.5c-0.9%2C1-2.2%2C1.7-3.7%2C1.7C23.5%2C29.9%2C22.3%2C29.3%2C21.4%2C28.3z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E');}
.chatMessagesGroupAgent .PreviewBox:hover:not(:empty):before {background: url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23FFFFFF%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M49.6%2C23.8c-7.6-9.3-15.7-14-24.3-14c-3.4%2C0-6.8%2C0.8-10.2%2C2.2c-2.7%2C1.2-5.3%2C2.8-7.8%2C4.8%0A%09%09c-4.3%2C3.4-6.8%2C6.9-6.9%2C7c-0.5%2C0.7-0.5%2C1.6%2C0.1%2C2.2c7.5%2C9.3%2C15.7%2C14%2C24.3%2C14c3.4%2C0%2C6.8-0.8%2C10.2-2.2c2.7-1.2%2C5.3-2.8%2C7.8-4.8%0A%09%09c4.3-3.4%2C6.8-6.9%2C6.9-7C50.1%2C25.4%2C50.1%2C24.5%2C49.6%2C23.8z%20M40.3%2C30.3c-3.6%2C2.8-9.1%2C6.2-15.7%2C6.2c-7.1%2C0-13.9-3.9-20.5-11.5%0A%09%09c1-1.2%2C2.9-3.2%2C5.4-5.3c3.6-2.8%2C9.1-6.2%2C15.7-6.2c7.1%2C0%2C13.9%2C3.9%2C20.5%2C11.5C44.8%2C26.2%2C42.9%2C28.3%2C40.3%2C30.3z%22%2F%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M32.1%2C29.9C32.1%2C29.9%2C32.1%2C29.8%2C32.1%2C29.9c0.2-0.2%2C0.3-0.4%2C0.4-0.6c0-0.1%2C0.1-0.1%2C0.1-0.2%0A%09%09c0.1-0.2%2C0.2-0.3%2C0.2-0.5c0-0.1%2C0.1-0.2%2C0.1-0.3c0.1-0.1%2C0.1-0.2%2C0.1-0.4c0.1-0.1%2C0.1-0.3%2C0.2-0.4c0-0.1%2C0-0.2%2C0.1-0.3%0A%09%09c0-0.2%2C0.1-0.4%2C0.1-0.6c0%2C0%2C0-0.1%2C0-0.1c0.1-0.5%2C0.1-1%2C0.1-1.5c0%2C0%2C0%2C0%2C0-0.1c0-2.2-0.9-4.4-2.5-6c-1.7-1.7-3.8-2.5-6-2.5%0A%09%09c0%2C0%2C0%2C0-0.1%2C0c-0.5%2C0-1%2C0.1-1.5%2C0.1c0%2C0-0.1%2C0-0.1%2C0c-0.2%2C0-0.4%2C0.1-0.6%2C0.1c-0.1%2C0-0.2%2C0-0.3%2C0.1c-0.2%2C0-0.3%2C0.1-0.5%2C0.2%0A%09%09c-0.1%2C0-0.2%2C0.1-0.4%2C0.1c-0.1%2C0-0.2%2C0.1-0.3%2C0.2c-0.1%2C0.1-0.3%2C0.1-0.4%2C0.2c-0.1%2C0-0.1%2C0.1-0.2%2C0.1c-0.2%2C0.1-0.3%2C0.2-0.5%2C0.3%0A%09%09c0%2C0-0.1%2C0.1-0.1%2C0.1c-0.4%2C0.3-0.8%2C0.6-1.2%2C1c-0.4%2C0.4-0.7%2C0.8-1%2C1.2c0%2C0%2C0%2C0-0.1%2C0.1c-0.1%2C0.2-0.2%2C0.4-0.3%2C0.5%0A%09%09c0%2C0.1-0.1%2C0.1-0.1%2C0.2c-0.1%2C0.2-0.2%2C0.3-0.2%2C0.5c0%2C0.1-0.1%2C0.2-0.1%2C0.3c0%2C0.1-0.1%2C0.2-0.1%2C0.4c-0.1%2C0.1-0.1%2C0.3-0.2%2C0.4%0A%09%09c0%2C0.1%2C0%2C0.2-0.1%2C0.3c-0.1%2C0.2-0.1%2C0.4-0.1%2C0.6c0%2C0%2C0%2C0.1%2C0%2C0.1c-0.1%2C0.5-0.1%2C1-0.1%2C1.5c0%2C0.5%2C0.1%2C1.1%2C0.2%2C1.6c0%2C0%2C0%2C0.1%2C0%2C0.1%0A%09%09c0%2C0.2%2C0.1%2C0.4%2C0.1%2C0.6c0%2C0.1%2C0%2C0.2%2C0.1%2C0.2c0%2C0.2%2C0.1%2C0.3%2C0.2%2C0.5c0%2C0.1%2C0.1%2C0.2%2C0.1%2C0.3c0%2C0.1%2C0.1%2C0.2%2C0.2%2C0.3%0A%09%09c0.1%2C0.1%2C0.1%2C0.3%2C0.2%2C0.4c0%2C0.1%2C0.1%2C0.1%2C0.1%2C0.2c0.1%2C0.2%2C0.2%2C0.4%2C0.3%2C0.5c0%2C0%2C0%2C0%2C0.1%2C0.1c0.3%2C0.4%2C0.6%2C0.8%2C1%2C1.2c0%2C0%2C0%2C0%2C0%2C0%0A%09%09c1.6%2C1.5%2C3.7%2C2.5%2C6%2C2.5c2.4%2C0%2C4.5-0.9%2C6-2.5c0%2C0%2C0%2C0%2C0.1%2C0C31.5%2C30.7%2C31.8%2C30.3%2C32.1%2C29.9z%20M21.4%2C28.3c-0.2-0.2-0.3-0.4-0.5-0.6%0A%09%09c-0.1-0.1-0.1-0.3-0.2-0.4c-0.1-0.2-0.2-0.3-0.2-0.5c-0.1-0.1-0.1-0.3-0.1-0.4c-0.1-0.2-0.1-0.3-0.1-0.5c0-0.2%2C0-0.4-0.1-0.6%0A%09%09c0-0.2%2C0-0.5%2C0-0.7c0-0.2%2C0-0.4%2C0.1-0.6c0-0.2%2C0.1-0.3%2C0.1-0.5c0-0.2%2C0.1-0.3%2C0.1-0.5c0.1-0.1%2C0.1-0.3%2C0.2-0.4%0A%09%09c0.1-0.2%2C0.1-0.3%2C0.2-0.4c0.1-0.2%2C0.2-0.3%2C0.4-0.4c0.2-0.2%2C0.4-0.4%2C0.6-0.6c0.1-0.1%2C0.3-0.2%2C0.4-0.4c0.1-0.1%2C0.3-0.2%2C0.5-0.3%0A%09%09c0.1-0.1%2C0.3-0.1%2C0.4-0.2c0.2-0.1%2C0.3-0.1%2C0.5-0.2c0.1%2C0%2C0.3-0.1%2C0.4-0.1c0.2%2C0%2C0.5-0.1%2C0.7-0.1c1.3-0.1%2C2.7%2C0.4%2C3.7%2C1.4%0A%09%09c1%2C1%2C1.5%2C2.4%2C1.4%2C3.8c0%2C0.2%2C0%2C0.5-0.1%2C0.7c0%2C0.2-0.1%2C0.3-0.1%2C0.5c0%2C0.2-0.1%2C0.3-0.1%2C0.5c-0.1%2C0.1-0.1%2C0.3-0.2%2C0.4%0A%09%09c-0.1%2C0.1-0.1%2C0.3-0.2%2C0.4c-0.1%2C0.2-0.3%2C0.4-0.4%2C0.5c-0.9%2C1-2.2%2C1.7-3.7%2C1.7C23.5%2C29.9%2C22.3%2C29.3%2C21.4%2C28.3z%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E');}
.ActionsPanel:hover .MessageFormFiles {background-color: #E0E0E0}
/*.EndChatButton .buttonIcon {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M25.8%2C0.4c-0.2%2C0-0.4%2C0-0.6%2C0c-0.2%2C0-0.4%2C0-0.6%2C0H22v25.7H28V0.4H25.8z%22%2F%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.2%2C6.5c-0.1%2C0-0.2-0.1-0.2-0.1v6.1c5.1%2C2.9%2C8.6%2C8.4%2C8.6%2C14.7c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0.1%2C0%2C0.1%0A%09%09%09c0%2C0.1%2C0%2C0.2%2C0%2C0.2c-0.2%2C9-7.5%2C16.3-16.5%2C16.5c-9.2-0.2-16.5-7.7-16.5-17c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0-0.1%2C0-0.1c0-0.1%2C0-0.2%2C0-0.2%0A%09%09%09C8.6%2C20.7%2C12%2C15.3%2C17%2C12.5V6.4c-0.1%2C0-0.2%2C0.1-0.2%2C0.1C8.7%2C9.9%2C3%2C17.9%2C3%2C27.2c0%2C9.3%2C5.7%2C17.3%2C13.9%2C20.7c2.5%2C1.1%2C5.3%2C1.7%2C8.2%2C1.7%0A%09%09%09c2.9-0.1%2C5.7-0.7%2C8.2-1.7C41.3%2C44.6%2C47%2C36.6%2C47%2C27.2C47%2C17.9%2C41.3%2C9.9%2C33.2%2C6.5z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E')}
*/
.Chatting .TicketInfoPanel .EndChatButton .buttonIcon {background:url('data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cpolygon%20class%3D%22st0%22%20points%3D%2249.8%2C6.5%2043.7%2C0.4%2025.2%2C19%206.3%2C0%200.2%2C6%2019.2%2C25%200.2%2C44%206.3%2C50%2025.2%2C31%2043.7%2C49.6%2049.8%2C43.5%2031.2%2C25%20%22%2F%3E%0A%3C%2Fsvg%3E') no-repeat center center; background-size: 12px 12px !important}
.ChatInPopout .TicketInfoPanel .EndChatButton .buttonIcon {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23565656%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M25.8%2C0.4c-0.2%2C0-0.4%2C0-0.6%2C0c-0.2%2C0-0.4%2C0-0.6%2C0H22v25.7H28V0.4H25.8z%22%2F%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20class%3D%22st0%22%20d%3D%22M33.2%2C6.5c-0.1%2C0-0.2-0.1-0.2-0.1v6.1c5.1%2C2.9%2C8.6%2C8.4%2C8.6%2C14.7c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0%2C0.1%2C0%2C0.1%0A%09%09%09c0%2C0.1%2C0%2C0.2%2C0%2C0.2c-0.2%2C9-7.5%2C16.3-16.5%2C16.5c-9.2-0.2-16.5-7.7-16.5-17c0%2C0%2C0%2C0%2C0%2C0c0%2C0%2C0-0.1%2C0-0.1c0-0.1%2C0-0.2%2C0-0.2%0A%09%09%09C8.6%2C20.7%2C12%2C15.3%2C17%2C12.5V6.4c-0.1%2C0-0.2%2C0.1-0.2%2C0.1C8.7%2C9.9%2C3%2C17.9%2C3%2C27.2c0%2C9.3%2C5.7%2C17.3%2C13.9%2C20.7c2.5%2C1.1%2C5.3%2C1.7%2C8.2%2C1.7%0A%09%09%09c2.9-0.1%2C5.7-0.7%2C8.2-1.7C41.3%2C44.6%2C47%2C36.6%2C47%2C27.2C47%2C17.9%2C41.3%2C9.9%2C33.2%2C6.5z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E') no-repeat center center; background-size:14px 14px !important;}

.chatMessagesGroupMe .messagesPanel .MessageNotification.ActionClose,
.chatMessagesGroupMe .messagesPanel .MessageNotification.ActionClose .messageTime {color:#565656}
.g-FormField2-Error .TextBoxContainer, .g-FormField2-Error .MessageArea, .g-FormField2-Error .g-ListBox, .g-FormField2-Error .g-ReadOnlyListBox {background:none;color:inherit}
.g-FormField2-Error .TextBoxContainer input, .g-FormField2-Error .MessageArea input, .g-FormField2-Error .g-ListBox input, .g-FormField2-Error .g-ReadOnlyListBox input {background:none}
.CaptionTextBoxView.TextBoxContainer-focus, .CaptionTextBoxEdit.TextBoxContainer-focus {border:0 none}
.g-FormField2-Error .TextBoxContainer-focus, .g-FormField2-Error .MessageArea-focus, .g-FormField2-Error .g-ListBox-focus, .g-FormField2-Error .g-ReadOnlyListBox-focus {box-shadow: none}
.g-FormField2-ErrorIcon {background: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0A%09%20viewBox%3D%220%200%2050%2050%22%20style%3D%22enable-background%3Anew%200%200%2050%2050%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%23A60000%3B%7D%0A%3C%2Fstyle%3E%0A%3Cpath%20class%3D%22st0%22%20d%3D%22M25%2C0C11.2%2C0%2C0%2C11.2%2C0%2C25s11.2%2C25%2C25%2C25s25-11.2%2C25-25S38.8%2C0%2C25%2C0z%20M27.5%2C37.5h-5v-5h5V37.5z%20M27.5%2C27.5h-5%0A%09v-15h5V27.5z%22%2F%3E%0A%3C%2Fsvg%3E')}
/* scrollbar */
::-webkit-scrollbar-thumb {background:#E0E0E0;border-color:#E0E0E0}
::-webkit-scrollbar-thumb:hover{background:#E0E0E0}
::-webkit-scrollbar-thumb:active{background:#E0E0E0}
::-webkit-scrollbar-track{border-color:#E0E0E0}
/* For Internet Explorer */
  body {
    scrollbar-face-color: #E0E0E0;
    scrollbar-track-color: #fff;
  }

.StartChatButton.ImLeButton {background:#565656;}
.StartChatButton.ImLeButton .buttonText,
.RateLink.ButtonLikeLink .buttonText {color:#F7F7F7;}
.RateLink.ButtonLikeLink {background:#565656 !important;}

.MaintenanceBlocking .Blocking {background-color:#F7F7F7;}
.MaintenanceBlocking .WindowHeader .SmallIcon {background: url('data:image/svg+xml, %3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20236.5%20159.8%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cg%3E%0A%09%3Cg%3E%0A%09%09%3Cpath%20fill%3D%22%23565656%22%20d%3D%22M170%2C121c0.3-1.5%2C1.1-2.9%2C1.6-4.9c0.5-1.7%2C0.6-3.4%2C0.5-5.1l12.3-6.3c1-0.6%2C1.5-1.8%2C1.1-2.9l-6.3-19.6%0A%09%09%09c-0.7-0.9-1.8-1.4-2.9-1.1l-13.5%2C2.3c-2.2-2.5-4.7-4.8-7.4-6.8l0.8-13.4c0.8-1.4-0.5-2.7-1.5-2.9l-20-4.2c-1-0.2-2.7%2C0.5-2.9%2C1.5%0A%09%09%09l-4.8%2C13c-3.2%2C0.4-6.1%2C1.8-9.5%2C3.2l-10.9-7.5c-1.2-0.7-2.7-0.6-3.7%2C0.3L89.2%2C82c-0.6%2C0.4-0.4%2C2%2C0.4%2C3.2l8.8%2C10.2%0A%09%09%09c-0.3%2C1.5-1.1%2C2.9-1.6%2C4.9c-0.5%2C1.7-0.7%2C3.4-0.6%2C5.1L84%2C111.6c-1%2C0.6-1.5%2C1.8-1.1%2C2.9l6.2%2C19.5c0.7%2C0.9%2C1.8%2C1.4%2C2.9%2C1.2l13.5-2.4%0A%09%09%09c2.2%2C2.5%2C4.7%2C4.8%2C7.4%2C6.8l-0.8%2C13.4c-0.1%2C1.3%2C0.8%2C2.4%2C2.1%2C2.5l20%2C4.2c1%2C0.2%2C2.7-0.5%2C2.9-1.5l4.8-12.6c3.3-0.7%2C6.5-1.8%2C9.5-3.2%0A%09%09%09l11.4%2C7.6c1%2C0.7%2C2.4%2C0.6%2C3.2-0.4l13.7-15.3c0.7-0.9%2C1-2.4%2C0.1-3.1L170%2C121z%20M130.5%2C125.6c-9.6-2-15.8-11.5-13.8-21.1%0A%09%09%09s11.5-15.8%2C21.1-13.8c9.6%2C2%2C15.8%2C11.5%2C13.8%2C21.1c0%2C0%2C0%2C0%2C0%2C0C149.5%2C121.4%2C140.1%2C127.5%2C130.5%2C125.6z%22%2F%3E%0A%09%09%3Cpath%20fill%3D%22%23565656%22%20fill-opacity%3D%220.5%22%20d%3D%22M30.3%2C116.5c1.2%2C0.3%2C2.3%2C0.9%2C3.8%2C1.2c1.3%2C0.4%2C2.7%2C0.5%2C4%2C0.4l4.8%2C9.6c0.4%2C0.8%2C1.4%2C1.2%2C2.3%2C0.9l15.3-4.9%0A%09%09%09c0.7-0.5%2C1.1-1.4%2C0.9-2.3l-1.8-10.6c2-1.7%2C3.7-3.7%2C5.3-5.8l10.5%2C0.6c0.8%2C0.4%2C1.8%2C0.1%2C2.1-0.7c0.1-0.1%2C0.1-0.3%2C0.1-0.4L81%2C89%0A%09%09%09c0.2-0.8-0.4-2.1-1.2-2.3l-10.2-3.8c-0.3-2.5-1.4-4.8-2.5-7.5L73%2C67c0.6-0.9%2C0.5-2.1-0.2-2.9l-12-10.7c-0.3-0.5-1.6-0.3-2.5%2C0.3%0A%09%09%09l-8%2C6.9c-1.2-0.3-2.3-0.9-3.8-1.2c-1.3-0.4-2.7-0.5-4-0.5l-4.9-9.6c-0.4-0.8-1.4-1.2-2.3-0.9l-15.2%2C4.8c-0.7%2C0.5-1.1%2C1.4-0.9%2C2.3%0A%09%09%09l1.8%2C10.6c-2%2C1.7-3.7%2C3.7-5.3%2C5.8L5.3%2C71.3c-1-0.1-1.9%2C0.6-2%2C1.6L0%2C88.5c-0.2%2C0.8%2C0.4%2C2.1%2C1.1%2C2.3l9.9%2C3.7%0A%09%09%09c0.6%2C2.6%2C1.4%2C5.1%2C2.5%2C7.4l-6%2C8.9c-0.6%2C0.8-0.4%2C1.9%2C0.3%2C2.5l12%2C10.7c0.7%2C0.6%2C1.9%2C0.8%2C2.4%2C0.1L30.3%2C116.5z%20M26.7%2C85.6%0A%09%09%09c1.6-7.5%2C9-12.4%2C16.5-10.8c7.5%2C1.6%2C12.4%2C9%2C10.8%2C16.5s-9%2C12.4-16.5%2C10.8c0%2C0%2C0%2C0%2C0%2C0C30%2C100.5%2C25.2%2C93.2%2C26.7%2C85.6z%22%2F%3E%0A%09%09%3Cpath%20fill%3D%22%23565656%22%20fill-opacity%3D%220.5%22%20d%3D%22M185.8%2C68.2c1.2%2C0.3%2C2.3%2C0.9%2C3.8%2C1.2c1.3%2C0.4%2C2.7%2C0.5%2C4%2C0.4l4.9%2C9.6c0.4%2C0.8%2C1.4%2C1.2%2C2.3%2C0.9l15.3-4.9%0A%09%09%09c0.7-0.5%2C1.1-1.4%2C0.9-2.3l-1.8-10.6c2-1.7%2C3.7-3.7%2C5.3-5.8l10.5%2C0.6c0.8%2C0.4%2C1.7%2C0.1%2C2.1-0.7c0.1-0.1%2C0.1-0.3%2C0.1-0.4l3.3-15.6%0A%09%09%09c0.2-0.8-0.4-2.1-1.1-2.3l-10.2-3.8c-0.3-2.5-1.4-4.8-2.5-7.5l5.9-8.5c0.6-0.9%2C0.5-2.1-0.2-2.9l-12-10.7c-0.3-0.5-1.6-0.3-2.5%2C0.3%0A%09%09%09l-8%2C6.9c-1.2-0.3-2.3-0.9-3.8-1.2c-1.3-0.4-2.7-0.5-4-0.4L193.1%2C1c-0.4-0.8-1.4-1.2-2.3-0.9L175.6%2C5c-0.7%2C0.5-1.1%2C1.4-0.9%2C2.3%0A%09%09%09l1.8%2C10.6c-2%2C1.7-3.8%2C3.7-5.3%2C5.8L160.8%2C23c-1-0.1-1.9%2C0.6-2%2C1.6c0%2C0%2C0%2C0%2C0%2C0l-3.3%2C15.6c-0.2%2C0.8%2C0.4%2C2.1%2C1.1%2C2.3l9.8%2C3.7%0A%09%09%09c0.6%2C2.6%2C1.5%2C5.1%2C2.6%2C7.5l-6%2C8.9c-0.6%2C0.8-0.4%2C1.9%2C0.3%2C2.5l12%2C10.7c0.7%2C0.6%2C1.9%2C0.8%2C2.4%2C0.1L185.8%2C68.2z%20M182.2%2C37.3%0A%09%09%09c1.6-7.5%2C9-12.4%2C16.5-10.8c7.5%2C1.6%2C12.4%2C9%2C10.8%2C16.5s-9%2C12.4-16.5%2C10.8c0%2C0%2C0%2C0%2C0%2C0C185.5%2C52.2%2C180.7%2C44.9%2C182.2%2C37.3z%22%2F%3E%0A%09%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A') no-repeat;}
.MaintenanceBlocking .BlockingContent {color:#565656;}
.New.ChatFrame-transcriptActive .StatusIcon:before, .New.ChatFrame-transcriptActive .StatusIcon:after {border-color:#565656;}
.chatMessagesGroupAgent .messagesPanel .MessageNotification {
  background: #2C3843;
  color: #BEC8D1;
  border-color: #2C3843;
}

.chatMessagesGroupAgent .messagesPanel .MessageNotification:after {
  border-color: #2C3843;
}

.chatMessagesGroupAgent .messagesPanel .MessageNotification:before {
  border-color: #2C3843;
}

.chatMessagesGroupAgent .Avatar {
  background-color: #2C3843 !important;
}

.ChatBody {
  background: #f7f9fb;
  border-radius: 10px !important;
}

.ChatFrame {
  background-color: #f7f9fb;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
}

.chatMessagesGroupMe .messagesPanel .MessageNotification {
  background: #43e1d7;
  color: #2C3742;
  border-color: #43e1d7;
}

.chatMessagesGroupMe .messagesPanel .MessageNotification:after, 
.chatMessagesGroupCustomer .messagesPanel .MessageNotification:after, 
.chatMessagesGroupMe .messagesPanel .MessageNotification:before, 
.chatMessagesGroupCustomer .messagesPanel .MessageNotification:before {
  border-color: #43e1d7;
}

.chatMessagesGroupMe .Avatar, .chatMessagesGroupCustomer .Avatar {
  background-color: #43e1d7 !important;
}

.MessagesPanel {background-color: #f7f9fb}

.InfoPanel, #subheader {
  background-color: #f2f5f6;
  border-bottom: 2px solid hsl(200deg 8.43% 85.16%);
}

.chatMessagesGroupAgent .messageBody a {
  color: #BEC8D1;
}

.ChatFooter {
  background-color: #f7f9fa;
}

.InfoPanel {
  border-radius: 10px !important;
}

.TicketInfoPanel .ChatWithLabel {
  display: none;
}

.TicketInfoPanel .ChatWithName {
  line-height: 1;
  top: 12px;
  color: #2c3843;
  height: unset;
}

.InfoPanel .AvatarPanel {
  top: 4px;
  left: 30px;
}

.InfoPanel .AvatarPanel .Avatar, .InfoPanel .AvatarPanel .Avatar .gwt-Image {
  width: 20px !important;
  height: 20px !important;
  background-size: 10px 10px !important;
}

.Chatting .InfoPanel {
  height: 40px;
}

.Chatting .MessagesPanel {
  top: 40px;
  bottom: 100px;
}

.SendButton.ImLeButton {
  order: 2;
}

.SendButton .ImLeButtonMainContent {
  width: 56px;
  height: 48px;
  background: #E7F0F8;
  border-radius: 6px;
  transition: box-shadow .15s ease-in-out;
}

.SendButton .ImLeButtonMainContent:hover {box-shadow: 0px 2px 4px rgba(0, 255, 160, 0.25);}

.MessageArea-border {
  width: 60%;
  padding-left: 6px;
  margin-left: 12px;
  margin-right: 6px;
  order: 0;
}

.MessageFormAttach {
  order: 1;
}

.SendFile .Icon {
  background: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.89545 3.36237L8.84546 4.29793L4.63332 8.57509C4.42196 8.79081 4.42196 9.138 4.63332 9.35373C4.83388 9.55843 5.16893 9.5575 5.36736 9.3526L10.0016 4.64486C10.6782 3.95444 10.6782 2.84563 10.0016 2.15521C9.35613 1.49648 8.214 1.51113 7.58139 2.15647L2.52319 7.29124C1.38119 8.45619 1.38119 10.3268 2.52319 11.4918C3.63213 12.623 5.53712 12.6046 6.62874 11.4907L12.5281 5.49924L13.4782 6.43472L7.57992 12.4251C5.97064 14.0671 3.20688 14.0939 1.57105 12.4252C-0.0792112 10.7417 -0.0792112 8.04127 1.57219 6.3567L6.63038 1.22193C7.77933 0.0498808 9.78022 0.02421 10.954 1.22202C12.1385 2.43086 12.1385 4.36921 10.9529 5.57914L6.3214 10.284C5.60496 11.024 4.40639 11.0273 3.68092 10.2868C2.96165 9.55271 2.96165 8.3761 3.68212 7.64075L7.89545 3.36237Z' fill='%232C3843'/%3E%3C/svg%3E%0A")  no-repeat center !important;
}

.TypingIcon {
  background: url("data:image/svg+xml, %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 50' enable-background='new 0 0 100 50' xml:space='preserve' style='fill:%232C3843; width:150px;' %3E%3Ccircle stroke='none' cx='20' cy='25' r='8'%3E%3Canimate attributeName='cy' dur='1s' values='10;35;10' repeatCount='indefinite' begin='0.1'/%3E%3C/circle%3E%3Ccircle stroke='none' cx='50' cy='25' r='8'%3E%3Canimate attributeName='cy' dur='1s' values='10;35;10' repeatCount='indefinite' begin='0.2'/%3E%3C/circle%3E%3Ccircle stroke='none' cx='80' cy='25' r='8'%3E%3Canimate attributeName='cy' dur='1s' values='10;35;10' repeatCount='indefinite' begin='0.3'/%3E%3C/circle%3E%3C/svg%3E") no-repeat center !important;
}

.MessageArea textarea {
  margin-top: 1px;
  color: #2c3843;
}

.MessageArea-border:after {
  display: none;
}

.MessageArea {
  height: 48px;
  display: inline-flex;
}

.ChatBody .ActionViewPanel {
  border-top: 1px solid #BEC8D1;
  padding-top: 12px;
  margin-bottom: 24px;

.ChatBody {bottom: 2px;}

#inputViewSendButtoniconDiv {
  background: url("data:image/svg+xml,%3Csvg width='21' height='20' viewBox='0 0 21 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.740234 0.251953L20.2362 9.99992L0.740234 19.7479L2.10524 10.1929L2.87699 9.99992L2.10524 9.80698L0.740234 0.251953ZM3.25996 3.74788L3.89495 8.19286L11.1232 9.99992L3.89495 11.807L3.25996 16.252L15.764 9.99992L3.25996 3.74788Z' fill='black'/%3E%3C/svg%3E%0A") no-repeat center !important;
}

.OptionsButton {
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.5808 0L14.0296 2.56758L14.8403 2.90748L17.6774 2.12683L19.8961 4.34235L19.1055 7.18067L19.44 7.99173L22 9.44645V12.5818L19.4327 14.0305L19.0925 14.843L19.8733 17.6798L17.6562 19.897L14.8183 19.1065L14.0067 19.4412L12.5498 21.999H9.41527L7.96644 19.4325L7.15567 19.0925L4.31809 19.8733L2.10197 17.6572L2.89252 14.8193L2.55774 14.0076L0 12.5496V9.41514L2.56758 7.96634L2.90748 7.15567L2.1267 4.31809L4.34198 2.10281L7.17985 2.89446L7.99072 2.56004L9.44544 0H12.5808ZM11.4129 2H10.6093L9.38955 4.14655L7.30576 5.00595L4.93001 4.34321L4.36375 4.90947L5.0192 7.29155L4.1471 9.3715L2 10.583V11.3876L4.14482 12.6101L5.00385 14.693L4.34203 17.0688L4.90947 17.6362L7.29155 16.9808L9.37141 17.8529L10.5829 19.999H11.3873L12.609 17.8542L14.692 16.9951L17.0678 17.657L17.6362 17.0886L16.9809 14.7078L17.8527 12.6256L20 11.4139V10.6103L17.8534 9.39056L16.9941 7.30696L17.6558 4.93166L17.087 4.36362L14.7044 5.0192L12.6245 4.1471L11.4129 2ZM11 7C13.2091 7 15 8.79086 15 11C15 13.2091 13.2091 15 11 15C8.79086 15 7 13.2091 7 11C7 8.79086 8.79086 7 11 7ZM11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9Z' fill='%232C3843'/%3E%3C/svg%3E%0A");
}

.chatMessagesGroupAgent .Avatar {
  background: url("data:image/svg+xml,%3Csvg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 18V16H17V8.9C17 7.93333 16.8167 7.025 16.45 6.175C16.0833 5.325 15.5833 4.58333 14.95 3.95C14.3167 3.31667 13.575 2.81667 12.725 2.45C11.875 2.08333 10.9667 1.9 10 1.9C9.03333 1.9 8.125 2.08333 7.275 2.45C6.425 2.81667 5.68333 3.31667 5.05 3.95C4.41667 4.58333 3.91667 5.325 3.55 6.175C3.18333 7.025 3 7.93333 3 8.9V15H2C1.45 15 0.979167 14.8042 0.5875 14.4125C0.195833 14.0208 0 13.55 0 13V11C0 10.6167 0.0916667 10.2792 0.275 9.9875C0.458333 9.69583 0.7 9.45833 1 9.275L1.075 7.95C1.225 6.73333 1.57083 5.63333 2.1125 4.65C2.65417 3.66667 3.32917 2.83333 4.1375 2.15C4.94583 1.46667 5.85417 0.9375 6.8625 0.5625C7.87083 0.1875 8.91667 0 10 0C11.1 0 12.1542 0.1875 13.1625 0.5625C14.1708 0.9375 15.075 1.47083 15.875 2.1625C16.675 2.85417 17.3458 3.6875 17.8875 4.6625C18.4292 5.6375 18.775 6.725 18.925 7.925L19 9.225C19.3 9.375 19.5417 9.59583 19.725 9.8875C19.9083 10.1792 20 10.5 20 10.85V13.15C20 13.5167 19.9083 13.8417 19.725 14.125C19.5417 14.4083 19.3 14.625 19 14.775V16C19 16.55 18.8042 17.0208 18.4125 17.4125C18.0208 17.8042 17.55 18 17 18H9ZM7 11C6.71667 11 6.47917 10.9042 6.2875 10.7125C6.09583 10.5208 6 10.2833 6 10C6 9.71667 6.09583 9.47917 6.2875 9.2875C6.47917 9.09583 6.71667 9 7 9C7.28333 9 7.52083 9.09583 7.7125 9.2875C7.90417 9.47917 8 9.71667 8 10C8 10.2833 7.90417 10.5208 7.7125 10.7125C7.52083 10.9042 7.28333 11 7 11ZM13 11C12.7167 11 12.4792 10.9042 12.2875 10.7125C12.0958 10.5208 12 10.2833 12 10C12 9.71667 12.0958 9.47917 12.2875 9.2875C12.4792 9.09583 12.7167 9 13 9C13.2833 9 13.5208 9.09583 13.7125 9.2875C13.9042 9.47917 14 9.71667 14 10C14 10.2833 13.9042 10.5208 13.7125 10.7125C13.5208 10.9042 13.2833 11 13 11ZM4.025 9.45C3.95833 8.46667 4.09583 7.575 4.4375 6.775C4.77917 5.975 5.2375 5.29583 5.8125 4.7375C6.3875 4.17917 7.05 3.75 7.8 3.45C8.55 3.15 9.3 3 10.05 3C11.5667 3 12.8792 3.47917 13.9875 4.4375C15.0958 5.39583 15.7667 6.59167 16 8.025C14.4333 8.00833 13.0167 7.5875 11.75 6.7625C10.4833 5.9375 9.525 4.86667 8.875 3.55C8.60833 4.9 8.04583 6.09583 7.1875 7.1375C6.32917 8.17917 5.275 8.95 4.025 9.45Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat center center #2C3843 !important;
}

.chatMessagesGroupCustomer .Avatar.Avatar-Empty {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11 16C7.43085 16 5.32828 16.6873 5.03538 17.7396C6.62392 19.1464 8.71228 20 11 20C13.2877 20 15.3761 19.1464 16.964 17.7404C16.6717 16.6873 14.5691 16 11 16ZM11 2C6.02944 2 2 6.02944 2 11C2 12.9044 2.59151 14.6707 3.60083 16.1251C4.72655 14.6379 7.37101 14 11 14C14.629 14 17.2735 14.6379 18.3991 16.1241C19.4085 14.6707 20 12.9044 20 11C20 6.02944 15.9706 2 11 2ZM11 5C13.4142 5 15 6.92158 15 9.2C15 12.4796 13.2181 14 11 14C8.76086 14 7 12.4274 7 9C7 6.75576 8.5791 5 11 5ZM11 7C9.73374 7 9 7.81582 9 9C9 11.2693 9.81821 12 11 12C12.1777 12 13 11.2984 13 9.2C13 7.95042 12.2157 7 11 7Z' fill='%232C3843'/%3E%3C/svg%3E") no-repeat center center !important;
}

.chatMessagesGroupMe .Avatar, .chatMessagesGroupCustomer .Avatar {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 22 22' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 0C17.0751 0 22 4.92487 22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0ZM11 16C7.43085 16 5.32828 16.6873 5.03538 17.7396C6.62392 19.1464 8.71228 20 11 20C13.2877 20 15.3761 19.1464 16.964 17.7404C16.6717 16.6873 14.5691 16 11 16ZM11 2C6.02944 2 2 6.02944 2 11C2 12.9044 2.59151 14.6707 3.60083 16.1251C4.72655 14.6379 7.37101 14 11 14C14.629 14 17.2735 14.6379 18.3991 16.1241C19.4085 14.6707 20 12.9044 20 11C20 6.02944 15.9706 2 11 2ZM11 5C13.4142 5 15 6.92158 15 9.2C15 12.4796 13.2181 14 11 14C8.76086 14 7 12.4274 7 9C7 6.75576 8.5791 5 11 5ZM11 7C9.73374 7 9 7.81582 9 9C9 11.2693 9.81821 12 11 12C12.1777 12 13 11.2984 13 9.2C13 7.95042 12.2157 7 11 7Z' fill='%232C3843'/%3E%3C/svg%3E") no-repeat center #43e1d7 !important;
}

.TypingIcon {
  background: url(data:image/svg+xml, %3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 100 50' enable-background='new 0 0 100 50' xml:space='preserve' style='fill:%232C3843; width:150px;' %3E%3Ccircle stroke='none' cx='20' cy='25' r='8'%3E%3Canimate attributeName='cy' dur='1s' values='10;35;10' repeatCount='indefinite' begin='0.1'/%3E%3C/circle%3E%3Ccircle stroke='none' cx='50' cy='25' r='8'%3E%3Canimate attributeName='cy' dur='1s' values='10;35;10' repeatCount='indefinite' begin='0.2'/%3E%3C/circle%3E%3Ccircle stroke='none' cx='80' cy='25' r='8'%3E%3Canimate attributeName='cy' dur='1s' values='10;35;10' repeatCount='indefinite' begin='0.3'/%3E%3C/circle%3E%3C/svg%3E) no-repeat center;
}

.Chatting .TicketInfoPanel .EndChatButton .buttonIcon {
  background-image: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:currentColor;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='49.8,6.5 43.7,0.4 25.2,19 6.3,0 0.2,6 19.2,25 0.2,44 6.3,50 25.2,31 43.7,49.6 49.8,43.5 31.2,25 '/%3E%3C/svg%3E");
}

.MinimizeButton {
  background: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 50 50' style='enable-background:new 0 0 50 50;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:currentColor;%7D%0A%3C/style%3E%3Cpolygon class='st0' points='16.2,20.7 7.6,20.7 7.6,29.3 16.2,29.3 42.4,29.3 42.4,20.7 '/%3E%3C/svg%3E") no-repeat !important;
}

/* ===== Scrollbar CSS ===== */
/* Firefox */
.MessageArea textarea,
.Chatting .MessagesPanel {
  scrollbar-width: auto;
  scrollbar-color: #2c3843 #e7f0f8;
}

/* Chrome, Edge, and Safari */
.MessageArea textarea::-webkit-scrollbar {
  width: 4px;
}

.Chatting .MessagesPanel::-webkit-scrollbar {
  width: 4px;
}

.MessageArea textarea::-webkit-scrollbar-track,
.Chatting .MessagesPanel::-webkit-scrollbar-track {
  background: #e7f0f8;
}

.MessageArea textarea::-webkit-scrollbar-thumb,
.Chatting .MessagesPanel::-webkit-scrollbar-thumb {
  background-color: #2c3843;
  border-radius: 10px;
  border: 0px;
}

.DragAndDropFileUploadView {
  padding: 1.5em 0 0 2em;
}

.ActionsPanel {
    bottom: 80px;
}

.ActionsPanel .MessageFormFiles {
    bottom: 10px;
}

.ActionsPanel:hover .MessageFormFiles {
    bottom: -10px;
}
                </style>
                                        <script src="static/webpack/liveagent-common-bundle/bundle-eafdd79a1bd0f6d216d9.esm.js" type="text/javascript" ></script>       
                    <script src="static/webpack/liveagent-common-bundle/stringutils-2e5dc2bf3827eb702243.esm.js" type="text/javascript" ></script>       
                        <script type="text/javascript">
            window.LiveAgentTrackerXD=function(){var e,r,t="LA_POSTMESSAGE",n=1,a=this;return{postMessage:function(e,r,s){if(r){"string"==typeof e&&(e=[e]);var o=t+JSON.stringify(e);s=s||parent,a.postMessage?s.postMessage(o,"*"):s.location=r.replace(/#.*$/,"")+"#"+ +new Date+n+++"&"+o}},receiveMessage:function(n){var s=function(e){try{if(e.data.toString().substr(0,14)!==t)return;var r=e.data.slice(14),a=function(e){var r=e.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);return null!=r&&r.length>2&&"string"==typeof r[2]&&r[2].length>0?r[2]:null},s=new Array;void 0!==n.serverUrl&&null!==n.serverUrl&&""!==n.serverUrl&&s.push(a(n.serverUrl)),void 0!==n.tracker&&null!==n.tracker&&void 0!==n.tracker.url&&null!==n.tracker.url&&""!==n.tracker.url&&s.push(a(n.tracker.url));try{var o=JSON.parse(r,(function(e,r){if("string"!=typeof r&&"number"!=typeof r&&!Array.isArray(r))throw new TypeError("Unsupported type");return r}))}catch(e){return}(Array.isArray(o)&&0==s.length||-1!=s.indexOf(a(e.origin)))&&n.action.apply(n,o)}catch(e){console.log(e)}};a.postMessage?a.addEventListener?a[s?"addEventListener":"removeEventListener"]("message",s,!1):a[s?"attachEvent":"detachEvent"]("onmessage",s):(e&&clearInterval(e),e=null,s&&(e=setInterval((function(){var e=document.location.hash;e!==r&&(re=/^#?\d+&/,re.test(e)&&(s({data:e.replace(re,"")}),document.location.hash=""),r=document.location.hash)}),100)))},receiveMessageFun:function(n){var s=function(e){try{if(e.data.toString().substr(0,14)!==t)return;var r=e.data.slice(14);try{var a=JSON.parse(r,(function(e,r){if("string"!=typeof r&&"number"!=typeof r&&!Array.isArray(r))throw new TypeError("Unsupported type");return r}))}catch(e){return}n.apply(n,a)}catch(e){console.log(e)}};a.postMessage?a.addEventListener?a[s?"addEventListener":"removeEventListener"]("message",s,!1):a[s?"attachEvent":"detachEvent"]("onmessage",s):(e&&clearInterval(e),e=null,s&&(e=setInterval((function(){var e=document.location.hash;e!==r&&(re=/^#?\d+&/,re.test(e)&&(s({data:e.replace(re,"")}),document.location.hash=""),r=document.location.hash)}),100)))}}}();
        </script>       
            
        <script type="text/javascript">window["5ad54f98c00d428d55a36dd42ba38441"]="[[\"name\",\"value\"],[\"langCode\",\"cs\"]]";window["c5c4f3a345dd9aab953a9027aac28efd"]="[[\"name\",\"value\"],[\"width\",\"350\"],[\"height\",\"450\"]]";window["72c92d084d0b70dfb6e2b6c27a1059d0"]="[[\"name\",\"value\"],[\"leaveMessStatus\",\"Y\"]]";window["eb7536489ca98b8f4467d940341b79b2"]="[[\"name\",\"value\"],[\"hideStartChatAgain\",\"Y\"]]";window["09068e7b41c13ccfc2c7476cd5820254"]="[[\"code\",\"value\"],[\"theme\",null],[\"isStillSetDefaultBranding\",\"Y\"],[\"date_time_format\",\"MM\\/d\\/yyyy HH:mm:ss\"],[\"programVersion\",\"5.43.5.9\"],[\"thousandsseparator\",\"N\"],[\"decimalseparator\",\"C\"],[\"dateformat\",\"dd\\/MM\\/yyyy\"],[\"timeformat\",\"HH:mm:ss\"],[\"shorttimeformat\",\"HH:mm\"],[\"serverPort\",\"\"],[\"agentPanelUrl\",\"https:\\/\\/active24.ladesk.com\\/agent\\/\"],[\"TRACE_ACTIVE\",\"N\"],[\"post_max_size\",205520896],[\"upload_max_filesize\",134217728],[\"allowed_file_types\",\"\"],[\"chat_routing_time\",\"30\"],[\"chat_inactivity_time\",\"10\"],[\"call_routing_time\",\"30\"],[\"branding-company-name\",\"Quality Unit\"],[\"branding-company-homepage\",\"https:\\/\\/www.qualityunit.com\"],[\"branding-company-support\",\"https:\\/\\/support.liveagent.com\"],[\"branding-company-privacy-policy\",\"https:\\/\\/www.qualityunit.com\\/company\\/privacy-policy-quality-unit\"],[\"branding-company-contact-us\",\"https:\\/\\/www.qualityunit.com\\/company\\/contact-us\\/\"],[\"branding-company-support-email\",\"support@qualityunit.com\"],[\"branding-company-customer-portal\",\"https:\\/\\/members.qualityunit.com\\/customer\\/\"],[\"branding-kb-socket-connect-timeout\",\"https:\\/\\/support.liveagent.com\\/896557-Error-during-socket-connect-Connection-timed-out\"],[\"branding-kb-how-to-rest-calls\",\"https:\\/\\/support.liveagent.com\\/061754-How-to-make-REST-calls-in-PHP\"],[\"branding-kb-files-not-uploaded-correctly\",\"https:\\/\\/support.qualityunit.com\\/805251-Following-files-have-not-been-uploaded-correctly\"],[\"branding-kb-custom-plugin-url\",\"https:\\/\\/support.liveagent.com\\/993318-Custom-plugin-description\"],[\"branding-mail-service-user-agent\",\"Quality Unit Mail Services\"],[\"branding-product-name\",\"LiveAgent\"],[\"branding-product-homepage\",\"https:\\/\\/www.liveagent.com\\/?utm_medium=referral&utm_source=app&utm_campaign=active24.ladesk.com\"],[\"branding-product-features\",\"https:\\/\\/www.liveagent.com\\/features\"],[\"branding-product-pricing-standalone\",\"https:\\/\\/www.liveagent.com\\/pricing\\/standalone\\/\"],[\"branding-product-live-chat-software\",\"https:\\/\\/www.liveagent.com\\/live-chat-software\\/\"],[\"branding-product-live-chat-software-homepage\",\"https:\\/\\/www.liveagent.com\\/?utm_source=chat&utm_medium=referral&utm_campaign=active24.ladesk.com\"],[\"branding-product-help-desk-software\",\"https:\\/\\/www.liveagent.com\\/\"],[\"branding-product-help-desk-software-homepage\",\"https:\\/\\/www.liveagent.com\\/?utm_source=contactform&utm_medium=referral&utm_campaign=active24.ladesk.com\"],[\"branding-product-call-center-software-homepage\",\"https:\\/\\/www.liveagent.com\\/?utm_medium=referral&utm_source=call_center&utm_campaign=active24.ladesk.com\"],[\"branding-product-knowledgebase-software-homepage\",\"https:\\/\\/www.liveagent.com\\/?utm_medium=referral&utm_source=knowledge_base&utm_campaign=active24.ladesk.com\"],[\"branding-product-twitter-page\",\"https:\\/\\/twitter.com\\/#!\\/liveagent\"],[\"branding-product-facebook-page\",\"https:\\/\\/www.facebook.com\\/LiveAgent\"],[\"branding-product-changelog-url\",\"https:\\/\\/dev.ladesk.com\"],[\"branding-kb-setting-up-the-system\",\"https:\\/\\/support.liveagent.com\\/542731-Configuration\"],[\"branding-kb-possible-problems\",\"https:\\/\\/support.liveagent.com\\/466077-Possible-problems\"],[\"branding-kb-product\",\"https:\\/\\/support.liveagent.com\"],[\"branding-kb-setup-email-piping\",\"https:\\/\\/support.liveagent.com\\/157359-How-to-setup-email-piping\"],[\"branding-kb-product-rest-api\",\"https:\\/\\/support.liveagent.com\\/066804-LiveAgent-API\"],[\"branding-product-logo-html\",\"<object style=\\\"display:inline-block; opacity:0.7; line-height:16px; width:16px; height:16px; vertical-align:top;\\\"><svg version=\\\"1.1\\\" id=\\\"Layer_1\\\" xmlns=\\\"http:\\/\\/www.w3.org\\/2000\\/svg\\\" xmlns:xlink=\\\"http:\\/\\/www.w3.org\\/1999\\/xlink\\\" x=\\\"0px\\\" y=\\\"0px\\\" width=\\\"16px\\\" height=\\\"16px\\\" viewBox=\\\"0 -9 16 16\\\" enable-background=\\\"new 0 -9 16 16\\\" xml:space=\\\"preserve\\\"><g><path d=\\\"M2.445-0.419c0-0.487,0.248-1.564,1.167-1.564c0.772,0,1.158,0.506,1.158,1.519c0,1.093-0.386,1.64-1.158,1.64 C2.833,1.174,2.445,0.644,2.445-0.419z M8.414,4.338C7.496,5.432,6.44,6.669,5.083,6.667c0.513-0.71,0.872-1.568,1.141-2.455         c-3.305-0.524-5.765-2.51-5.765-4.881c0-1.152,0.813-3.455,3.462-3.455c2.167,0,3.718,1.729,3.718,3.697 c0,1.506-0.705,2.045-1.106,2.045c-0.467,0-0.7-0.336-0.7-1.008v-3.458H4.831v0.309C4.534-2.82,4.128-2.96,3.612-2.96 c-1.921,0-2.235,1.927-2.235,2.541c0,0.826,0.431,2.571,2.235,2.571c0.587,0,1.066-0.201,1.438-0.602    c0.306,0.688,0.8,1.03,1.483,1.03c0.849,0,2.069-0.714,2.069-3.007c0-3.368-3.049-4.702-4.082-4.702 c5.584-1.76,10.939,1.016,10.939,4.459C15.459,2,12.344,4.181,8.414,4.338z\\\"\\/><\\/g><\\/svg><\\/object>\"],[\"branding-kb-settings-description\",\"https:\\/\\/support.liveagent.com\\/450491-Settings-description\"],[\"branding-kb-twitter-search-rate-exceeded\",\"https:\\/\\/support.liveagent.com\\/835724-Error-while-fetching-twitter-search-Rate-limit-exceeded\"],[\"branding-kb-setup-facebook\",\"https:\\/\\/support.liveagent.com\\/172666-How-to-setup-Facebook-application\"],[\"branding-kb-configure-ldap\",\"https:\\/\\/support.liveagent.com\\/318687-Configuring-LDAP\"],[\"branding-kb-configure-twilio\",\"https:\\/\\/support.liveagent.com\\/578827-How-to-connect-with-Twilio\"],[\"branding-kb-configure-twitter\",\"https:\\/\\/support.liveagent.com\\/869419-Integrating-Twitter-application-with-LiveAgent\"],[\"branding-mail-x-mailer-header\",\"LiveAgent\"],[\"branding-twilio-default-voice-in-queue-sound-file\",\"https:\\/\\/dev.qualityunit.com\\/twilio\\/hold1.mp3\"],[\"branding-kb-advanced-integration-tips\",\"https:\\/\\/support.liveagent.com\\/193841-Advanced-contact--chat-widgets-integration\"],[\"branding-kb-custom-domain\",\"https:\\/\\/support.liveagent.com\\/018505-Domain-parking-guide\"],[\"branding-kb-ivr\",\"https:\\/\\/support.liveagent.com\\/300428-IVR\"],[\"branding-geoip-kb-maps-apikey\",\"https:\\/\\/support.liveagent.com\\/685466-How-to-create-Google-Maps-API-key-for-GeoIP-plugin\"],[\"branding-kb-queue-cron\",\"https:\\/\\/support.liveagent.com\\/899954-Queue-cron-job\"],[\"branding-kb-sso\",\"https:\\/\\/support.liveagent.com\\/347389-Knowledgebase-single-sign-on-generic-example\"],[\"branding-kb-magento2-integration\",\"https:\\/\\/support.liveagent.com\\/886866-Magento-2-plugin-for-LiveAgent\"],[\"branding-kb-configure-microsoft\",\"https:\\/\\/support.liveagent.com\\/809471-How-to-setup-Microsoft-application\"],[\"branding-kb-configure-google\",\"https:\\/\\/support.liveagent.com\\/184086-How-to-setup-Google-application\"],[\"branding-kb-configure-okta\",\"https:\\/\\/support.liveagent.com\\/841361-Integrating-Okta-application-with-LiveAgent\"],[\"branding-kb-department-outgoing-emails\",\"https:\\/\\/support.liveagent.com\\/381336-Outgoing-emails-in-the-department\"],[\"branding-kb-whatsapp-twilio-template-message\",\"https:\\/\\/support.liveagent.com\\/614442-WhatsApp-message-templates\"],[\"branding-kb-whatsapp-360dialog-template-message\",\"https:\\/\\/support.liveagent.com\\/293765-360dialog-WhatsApp-message-templates\"],[\"branding-kb-whatsapp-twilio-integration\",\"https:\\/\\/support.liveagent.com\\/857332-WhatsApp-integration-for-cloud-hosted-accounts-via-Twilio\"],[\"branding-kb-setup-email-la-server\",\"https:\\/\\/support.liveagent.com\\/320413--Using-LiveAgent-servers-to-send-emails\"],[\"branding-kb-freshservice\",\"https:\\/\\/support.liveagent.com\\/476941-Freshservice-migration\"],[\"client_debug_logger\",\"\"],[\"jssip_logger_settings\",\"\"],[\"hostedDomain\",\"ladesk.com\"],[\"geoip\",\"Y\"],[\"faviconChat\",null],[\"faviconChatUnread\",null],[\"faviconOffline\",null],[\"faviconOfflineUnread\",null],[\"chat_window_ringing_message\",\"Vol\\u00e1m online agenta ...<br>Online agent se s v\\u00e1mi hned spoj\\u00ed.\"],[\"chat_window_inqueue_message\",\"Vol\\u00e1m online agenta ...<br>Jste <b>%s<\\/b>. v po\\u0159ad\\u00ed.\"],[\"VARIATION_CODE\",\"Enterprise - Hybrid\"],[\"brandingText\",\"\"],[\"transcript_notification\",\"Y\"],[\"save_visitors\",\"Y\"],[\"design_logo_default\",\"\\/\\/active24.ladesk.com\\/scripts\\/file.php?view=Y&file=4ct8xiy9tr1qfrzn6wnis2evubpsrayp\"],[\"design_logo_small_default\",\"\"],[\"affiliate_id\",\"\"],[\"design_title_default\",\"Active 24\"],[\"chat_title\",\"WebSupport.cz chat\"],[\"url_hyperlinking\",\"Y\"],[\"stateAfterChatEnds\",\"R\"]]";window["1759f6981f50ca505c1108d8d8c97ec4"]="[[\"templateName\",\"templateHtml\"],[\"init_connecting\",\"<!-- init_connecting -->\\n<!-- <div class=\\\"StatusIcon\\\"> -->\\n\\t<div class=\\\"RotaryIcon\\\">\\n        <div class=\\\"circle\\\">\\n            <div class=\\\"subcircle\\\">\\n            <\\/div>\\n        <\\/div>\\n        <div class=\\\"dots\\\">\\n            <span><\\/span>\\n            <span><\\/span>\\n            <span><\\/span>\\n        <\\/div>\\n    <\\/div>\\n<!-- <\\/div> -->\\n<div class=\\\"StatusMessage\\\">\\n    <div id=\\\"welcomeMessage\\\" class=\\\"WelcomeMessage\\\"><\\/div>\\n    <div id=\\\"cancelButton\\\" class=\\\"CancelButton\\\"><\\/div>\\n    <div id=\\\"queueWidget\\\" class=\\\"ChatsQueue\\\"><\\/div>\\n    <div class=\\\"clear\\\"><\\/div>\\n<\\/div>\"]]";window["cc16445562a0b24a9e7269e792102e8f"]="[[\"templateName\",\"templateHtml\"],[\"init_offline\",\"<!-- init_offline -->\\n<div class=\\\"StatusMessage\\\">\\n    <div class=\\\"StatusMessageTitle\\\">\\n    \\t<div class=\\\"StatusIcon\\\"><\\/div> \\n    \\t<div class=\\\"TextMain\\\">Zanechte n\\u00e1m vzkaz a my v\\u00e1m odpov\\u011b\\u010f za\\u0161leme e-mailem<\\/div>\\n    <\\/div>\\n    <div id=\\\"email\\\" class=\\\"\\\"><\\/div>\\n    <div class=\\\"clear\\\"><\\/div>\\n<\\/div>\"]]";window["ea048d9b258537c6993db78ed174a4f6"]="[[\"templateName\",\"templateHtml\"],[\"init_cancel\",\"<!-- cancel -->\\n<div class=\\\"StatusMessage\\\"> \\n    <div class=\\\"StatusMessageTitle\\\">\\n        <div class=\\\"StatusIcon\\\"><\\/div> \\n        <div class=\\\"TextMain\\\">Currently no agent is online. Try again later.<\\/div>\\n    <\\/div>\\n    <div class=\\\"clear\\\"><\\/div>\\n<\\/div>\"]]";window["ad36b1a09532ac9d0d474b115a1bfd35"]="[[\"templateName\",\"templateHtml\"],[\"new\",\"<!-- new -->\\n<div class=\\\"StatusMessage\\\"> \\n    <div class=\\\"StatusMessageTitle\\\">\\n    \\t<div class=\\\"StatusIcon\\\"><\\/div> \\n    \\t<div class=\\\"TextMain\\\">D\\u011bkujeme za va\\u0161i ot\\u00e1zku.<\\/div>\\n    \\t<div class=\\\"TextSub\\\"><div id=\\\"confirm\\\" class=\\\"StatusMessageConfirm\\\"><\\/div><\\/div>\\n    <\\/div>\\n    <div class=\\\"clear\\\"><\\/div>\\n<\\/div>\"]]";window["1b8bd811582cb89efc765938ff688101"]="[[\"templateName\",\"templateHtml\"],[\"notification_window\",\"<!-- notification_window -->\\n<div class=\\\"MessageWindowTopLeft\\\"><div class=\\\"MessageWindowTopRight\\\"><div class=\\\"MessageWindowTop\\\"><\\/div><\\/div><\\/div>\\n<div class=\\\"MessageWindowLeft\\\"><div class=\\\"MessageWindowRight\\\"><div class=\\\"MessageWindowContent\\\">\\n    <div class=\\\"MessageInformation\\\">\\n        <div id=\\\"Icon\\\" class=\\\"\\\"><\\/div>\\n        <div id=\\\"Content\\\" class=\\\"\\\"><\\/div>\\n        <div id=\\\"showMore\\\" class=\\\"\\\"><\\/div>\\n    <\\/div>\\n    <div class=\\\"MessageWindowHeaderButtons\\\">\\n        <div id=\\\"CloseButton\\\" class=\\\"\\\"><\\/div>\\n    <\\/div>\\n    <div class=\\\"clear\\\"><\\/div>\\n<\\/div><\\/div><\\/div>\\n<div class=\\\"MessageWindowBottomLeft\\\"><div class=\\\"MessageWindowBottomRight\\\"><div class=\\\"MessageWindowBottom\\\"><\\/div><\\/div><\\/div>\\n\"]]";window["bf31ffd412e0a45de52ebb4f5c99e1b9"]="[[\"templateName\",\"templateHtml\"],[\"icon_button\",\"<!-- icon_button -->\"]]";window["02b4553649323dd7820c718c2121283e"]="[[\"templateName\",\"templateHtml\"],[\"window_empty_content\",\"<!-- window_empty_content -->\\n<div class=\\\"WindowLoadingBox\\\">\\n\\t<div class=\\\"LoadingInfo\\\">\\n\\t\\tNa\\u010d\\u00edt\\u00e1m obsah okna.<br\\/>\\n\\t\\tPros\\u00edm \\u010dekejte...\\n\\t<\\/div>\\n<\\/div>\"]]";window["f66d315aeb5dd78aaa597ff5ff21a8a3"]="[[\"name\",\"url\"],[\"sound_chatNewMessage\",\"\\/scripts\\/file.php?view=Y&file=3dc1ipzjdg8yi94235u3vl14h1ommfl3\"],[\"sound_chatConnected\",\"\\/scripts\\/file.php?view=Y&file=7x9fg1zi3k595934won4k0vbyz8oy2j8\"]]";</script> 
    </head>
    <body class="PositionBR ">
        <iframe src="javascript:''" id="__gwt_historyFrame" tabIndex="-1" style="width:0;height:0;border:0"></iframe>
        <div id="mainElement"
             class="MainElement LightBg">
            <!-- chat_frame -->
<div class="ChatFrame InitOnline" id="chatFrame">
    
    <script type="text/javascript">
    
        closeWindow = function() {
            window.LiveAgent_chatFrameClosed = true;
            window.LiveAgentTrackerXD.postMessage(["closeOpenedWidget"], parent_url, parent);
        }
        minimizeWindow = function() {
            window.LiveAgentTrackerXD.postMessage(["minimizeOpenedWidget"], parent_url, parent);
        }
        
            </script>
                <script type="text/javascript">
    
    function togglemenu() {
        var mainElement = document.getElementById('mainElement');
        if ( mainElement.className.match(/(?:^|\s)SettingsOpened(?!\S)/) ) {
            mainElement.className = mainElement.className.replace(/(?:^|\s)SettingsOpened(?!\S)/g, '' );
        } else {
        	mainElement.className += " SettingsOpened";
        }
    }
    
    </script>
    <div class="UnreadMessagesTitle">Nová nepřečtená zpráva!</div>
    <div class="ChatBody">
        <div id="body" class="Body InitOnline">
            <div id="infoPanel" class="InfoPanel">
                <div class="StatusWidget init_connecting">
                  <div class="RotaryIcon">
                        <div class="circle">
                            <div class="subcircle">
                            </div>
                        </div>
                        <div class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="StatusMessage"> 
                        <div class="TextMain">Volám online operátora...</div>
                        <div class="TextSub">Online operátor se Vám bude za chvilku věnovat.</div>
                        <div class="clear"></div>
                    </div>
                </div> 
            </div>
            <div id="subheader">
                <div class="ChatWithLabel">Nastavení</div>
                 
                  <div id="windowPopOutButton" class="PopOutButton">
                      <div class="cb"></div>
                      <div class="cbl">Rozbalit v novém okně</div>
                  </div>
                            </div>
            <div id="windowOptionsButton" class="OptionsButton" onclick="togglemenu()" role="button" tabindex="0" title="Nastavení"></div>
             
              <div id="windowMinimizeButton" class="MinimizeButton" onClick="minimizeWindow();" role="button" tabindex="0" title="Minimalizovat okno">
                  <span>_</span>
              </div>
              <button aria-label="Close window" tabindex="0" id="windowCloseButton" class="CloseButton" onClick="closeWindow();" title="Zavřít okno">
                  <span>x</span>
              </button>
                        <div id="messagesPanel" class="MessagesPanel">
            </div>
            <div id="startChatPanel" class="StartChatPanel">
            </div>
            <div class="TypingPanel">
              <div id="typingPanel">
              	<div class="TypingIcon"></div>
                  <div class="gwt-Label">Můžete odeslat zprávy během čekání</div>
              </div>
            </div>
            <div id='actionViewPanel' class="ActionViewPanel">
                <div id="inputView_Container" class="EmbeddedInputView">
                    <div class="MessageArea">
                        <div id="inputView_Attach" class="MessageFormAttach"></div>
                        <div class="MessageArea-border">
                        <textarea id="inputView_Area" class="gwt-TextArea" title="Sem napište svou zprávu" tabindex="1"></textarea>
                        </div>
                        <div id="inputViewSendButtonmainButton" class="ImLeButton ImLeButtonMainOut ButtonUnwrapped SendButton"  role="button"><div id="inputViewSendButtonmain" class="ImLeButtonMain ImLeButtonMainOut buttonBgColor buttonBorderColor inputViewSendButton"><div id="inputViewSendButtoninnerBox" class="ImLeButtonMainInnerBox buttonInnerBorderColor"><div id="inputViewSendButtoninner" class="ImLeButtonMainInner"><div class="ImLeButtonMainContent"><span id="inputViewSendButtontextSpan" class="buttonText">Odeslat</span><div id="inputViewSendButtoniconDiv" role="button" aria-labelledby="inputViewSendButtontextSpan" tabindex="0" class="buttonIcon"></div></div></div></div></div></div>
                     </div>
                     
                     <div class="ActionsPanel">  
                        <div id="inputView_Files" class="MessageFormFiles NoFiles"></div>
                        <div class="MessageFormFiles-icon"></div>
                     </div>                     
                </div>
            </div>
            <div id="extensiblePanel" class="ExtensiblePanel"></div>
        </div>
    </div>
    <div class="ChatFooter">        
        <div id="brandingPanel" class="Branding"></div>
        <div id="statusPanel" class="statusPanel"></div>
    </div>
</div>   
        </div>
        
        <script type="text/javascript">
            

            var scriptParams = new Array();
            var startParams = '';

            var Widget = function() {
                this.scriptStarted = false;
            };
            
            Widget.prototype = {
                start: function(param) {
                    if (this.scriptStarted) {
                        return;
                    }
                    startParams = param;
                    this.scriptStarted = true;
                    
                    var mainElement = document.getElementById('mainElement');
                    mainElement.className += ' Started';
                    
                    var script = window.document.createElement("script");
                    script.type = "text/javascript";
                    script.src = '/chat/js/com.qualityunit.liveagent.EmbeddedChat.nocache.js?v=5.43.5.9';
                    window.document.body.appendChild(script);
                },
                setSize: function(width, height) {
                },
                setParam: function(name, value) {
                    scriptParams[name] = value;
                },
                updateVisitorLocation : function(locationName) {
                    com.qualityunit.liveagent.client.embeddedchat.presenter.EmbeddedConversationPresenter.setVisitorLocation(locationName)
                },
                action: function() {
                    if (arguments.length > 0) {
                        switch (arguments[0]) {
                            case 'start':
                                this.start(arguments[1]);
                                break;
                            case 'setSize':
                                this.setSize(arguments[1], arguments[2]);
                                break;
                            case 'setParam':
                                this.setParam(arguments[1], arguments[2]);
                                break;
                            case 'updateVisitorLocation':
                                this.updateVisitorLocation(arguments[1]);
                                break;
                        }
                    }
                }
            };
            
            var w = new Widget();
            
            if (typeof window.LiveAgentTrackerXD !== 'undefined') {
                window.LiveAgentTrackerXD.receiveMessage(w);
            }
            
            var base_path = '/';
			
			
        </script>
		<script type="text/javascript">
			
			if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
  				var viewportmeta = document.querySelector('meta[name="viewport"]');
  				if (viewportmeta) {
    				viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
    				document.body.addEventListener('gesturestart', function() {
      				viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
    				}, false);
  				}
			}
			
		</script>
    </body>
</html>