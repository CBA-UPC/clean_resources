"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[2473],{85258:(e,a,o)=>{o.d(a,{T:()=>m});var s=o(50959),t=o(82187),i=o.n(t),n=o(73798),l=o(10992),r=o(44680),d=o(69260);const c="pvGZ831aNzHTQMZ8CA_u";var u=o(11527);const m=(0,s.memo)((function(e){let{onClick:a=(()=>{}),size:o,className:t,uri:m,sharingInfo:h,interactionData:x,ariaLabel:g=l.ag.get("mwp.list.item.share")}=e;const{onCopyLink:p}=(0,d.y)({sharingInfo:h,uri:m,interactionData:x}),y=(0,s.useCallback)((()=>{p(),a()}),[a,p]);return(0,u.jsx)(r.E,{ariaLabel:g,size:o,onClick:y,className:i()(c,t),icon:n.M,condensed:!0})}))},90830:(e,a,o)=>{o.d(a,{X:()=>me});o(60678);var s=o(50959),t=o(82187),i=o.n(t),n=o(51909),l=o(28150),r=o(39753),d=o(23280),c=o(61550),u=o(55147),m=o(10992),h=o(84300);var x=o(73467),g=o(77401),p=o(18373),y=o(6879),k=o(29037),j=o(92718),v=o(30916),b=o(38010),f=o(85802),C=o(85509),P=o(44071),D=o(66562),I=o(36680),N=o(85258),T=o(33325),U=o(98090),E=o(69918),M=o(13814),w=o(51335),B=o(48545),S=o(81085),L=o(72269),Z=o(71145),A=o(11527);const z={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},R=s.memo((function(e){let{episodeUri:a,showUri:o,sharingInfo:t,canDownload:n,requestId:l,onMarkAsPlayed:r,onMoreButtonClick:d,name:c,fullyPlayed:u,index:h}=e;const x=(0,B._)(a),{spec:g,logger:p}=(0,S.fU)(f.createDesktopEpisodeBlockEventFactory,{data:{uri:a,reason:l||"",position:h}}),y=(0,U.r)(a),k=(0,s.useMemo)((()=>(0,A.jsx)(L.T,{size:"medium",uri:a})),[a]),j=(0,s.useMemo)((()=>(0,A.jsx)(P.p,{uri:a,size:P.q.sm,className:i()({[Z.Z.visibleAction]:(0,w.y)(x)}),onClick:(e,o)=>{o===M.mc.ADD?p.logInteraction(g.downloadButtonFactory().hitDownload({itemToDownload:a})):M.mc.REMOVE&&p.logInteraction(g.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:a}))},canDownload:n})),[a,x,g,p,n]),v=(0,s.useMemo)((()=>(0,A.jsx)(N.T,{uri:a,sharingInfo:t,interactionData:z,onClick:()=>{p.logInteraction(g.copyLinkFactory().hitShare({entityToBeShared:a,shareId:(null==t?void 0:t.shareId)||""}))}})),[a,t,g,p]),b=(0,s.useMemo)((()=>(0,A.jsx)(I.w,{uri:a,size:C.q.sm,className:Z.Z.visibleAction,onClick:e=>{e?p.logInteraction(g.saveToLibraryButtonFactory().hitLike({itemToBeLiked:a})):p.logInteraction(g.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:a}))}})),[a,g,p]),R=(0,s.useMemo)((()=>(0,A.jsx)(E.yj,{menu:(0,A.jsx)(T.k,{uri:a,showUri:o,isPlayed:u,onMarkAsPlayed:r}),children:(0,A.jsx)(D.z,{size:D.q.sm,label:m.ag.get("more.label.context",c),onClick:d})})),[a,u,c,r,d,o]);return(0,A.jsxs)(A.Fragment,{children:[v,j,y?k:b,R]})}));var F=o(39481),G=o(37376);const O="TT1tIewS2iI8Uz8kLuQB",_="Mn93NeoqnZzVnPIP83_9",V="bG5fSAAS6rRL8xxU5iyG",W="g5gZaZVzR0tGT4pK6iEU",H="DbMYFmOEEz9PH1h1zK9n",q="HLixBI5DbVZNC6lrUbAB",Y="q80ZFqNlDZCC7OTfUPj8",Q="y9kEPjDek0J80YRf8JJw",J="YhOAZFuFU1oI_YQSof4z",$="DKIjGP8CcZyjr2O2HNST",K="A7qeQBIk3sqr7bYadWA8",X="_IJaGA3ZdVU0NiTxbGsI",ee="ij5_Bi2LfqgWwHzQBXJS",ae="o_TP9z7A8LQvMXujJC7N",oe="LbePDApGej12_NyRphHu",se="hFCGY5gjCjN10WzV2VQ4",te="gk0rZwqBxJjSeiWV5lgV",ie="te8hrsPnSvx9SUkzV0ME",ne="V0pEigrddg3VxP_sTdAJ",le="acjrpluRnLumVxPt2QG9",re="upo8sAflD1byxWObSkgn",de="DyuLxip2Kl8P7H8fW62u",ce="vak8N953oXaq9F7jZDsD",ue="WBxE9PQe96PpkE9RuTo5",me=s.memo(s.forwardRef((function(e,a){var o;let{uri:t,name:f,showName:C,showUri:P,size:D,description:I,durationMs:N,images:T,badges:U,fullyPlayed:E,releaseDate:M,resumePositionMs:w,isCurrentlyPlaying:B,isPlaying:S,onContextMenu:L,onTouchStart:Z,onTouchEnd:z,handlePlaybackClick:me,handleDragStart:he,handleClick:xe,position:ge,index:pe,isPlayable:ye,isPaywalled:ke,isUserSubscribed:je,episodeSharingInfo:ve,playButtonWrapper:be=null,highlightText:fe=(e=>e),onMarkAsPlayed:Ce,contentInformation:Pe,requestId:De,onMoreButtonClick:Ie,status:Ne,variant:Te="default",mediaTypes:Ue}=e;const Ee=(0,l.s0)(),Me=B&&S,we=(0,u.EC)(t).toURLPath(!0),Be=null===(o=(0,u.EC)(P))||void 0===o?void 0:o.toURLPath(!0),Se=function(e){let{episodeUri:a}=e;const[o,t]=(0,s.useState)([]),i=(0,h.G)();return(0,s.useEffect)((()=>{let e=!0;return async function(){const o=await i.getArtists(a);e&&t(o)}(),()=>{e=!1}}),[a,i]),o}({episodeUri:t}),Le=(0,y.G3)(t,M,w,E),Ze=(null==Ue?void 0:Ue.includes(v.$.Video))??!1,Ae=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Ee(we),xe&&xe(e)}),[Ee,we,xe]),ze=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Be&&Ee(Be)}),[Be,Ee]),Re=ke&&!je,Fe=(0,s.useCallback)((e=>{e.stopPropagation(),Re||me(e)}),[me,Re]),Ge=Re||ye,Oe=m.ag.get("tracklist.a11y.play",f,C),_e=m.ag.get("tracklist.a11y.pause",f,C),Ve=(0,A.jsx)(x.f,{size:"small",version:"next-best-episode"===Te?x.u.primary:x.u.secondary,onClick:Fe,isPlaying:Me,disabled:!Ge,locked:Re,ariaPlayLabel:Oe,ariaPauseLabel:_e}),We=be?be(Ve):Ve;return(0,A.jsxs)("div",{ref:a,className:i()(O,{[_]:B,[te]:D===k.Uo.MEDIUM,[ie]:D===k.Uo.LARGE,[X]:D===k.Uo.XSMALL,[ue]:"next-best-episode"===Te}),"data-testid":`episode-${pe}`,draggable:!!he,onDragStart:he,onClick:Ae,onContextMenu:L,onTouchStart:Z,onTouchEnd:z,children:[Ne&&(0,A.jsx)(d.x,{className:le,paddingBottom:r.hM,children:Ne}),Pe&&(0,A.jsx)(F.m,{className:ce,cardHeaderText:Pe.cardHeaderText,buttonText:Pe.buttonText,buttonTarget:Pe.buttonTarget}),"default"===Te&&(0,A.jsx)("div",{className:ee,children:(0,A.jsx)(g.O,{className:ae,type:j.p.EPISODE,size:(e=>{switch(e){case k.Uo.LARGE:return p.m$.SIZE_112;case k.Uo.MEDIUM:return p.m$.SIZE_64;default:return p.m$.SIZE_48}})(D),title:f,shape:g.K.ROUNDED_CORNERS,images:T})}),(0,A.jsxs)("div",{className:ne,children:[(0,A.jsxs)("div",{className:q,children:[(0,A.jsx)(n.rU,{className:W,to:we,onClick:Ae,children:(0,A.jsxs)(d.x,{as:"div",variant:"bodyMediumBold",className:V,"data-testid":"episodeTitle",children:[Le&&(0,A.jsx)(y.Rd,{}),fe(f)]})}),Se.length>0&&(0,A.jsxs)("div",{className:J,children:[(0,A.jsx)(c.U,{size:"small",className:K}),(0,A.jsx)(d.x,{as:"p",variant:"bodySmall",className:$,children:fe(Se.join(m.ag.getSeparator()))})]})]}),(0,A.jsxs)("div",{className:Y,children:[Ze&&(0,A.jsx)(d.x,{variant:"bodySmall",semanticColor:"textSubdued",children:(0,A.jsx)(G.t,{})}),C&&Be&&(0,A.jsx)(n.rU,{className:W,to:Be,onClick:ze,children:(0,A.jsx)(d.x,{variant:"bodySmall",semanticColor:"textSubdued",children:fe(C)})})]})]}),(0,A.jsx)("div",{className:re,children:(0,A.jsx)(d.x,{as:"p",variant:"bodySmall",className:oe,children:fe(I??"")})}),(0,A.jsxs)("div",{className:Q,children:[(0,A.jsx)("div",{className:se,children:U}),(0,A.jsx)(b.E,{isPlaying:Me,fullyPlayed:E,durationMs:N,releaseDate:M,resumePositionMs:w,position:B?ge:void 0})]}),(0,A.jsx)("div",{onClick:e=>{e.stopPropagation()},className:H,children:(0,A.jsx)(R,{episodeUri:t,showUri:P??"",sharingInfo:ve,canDownload:!ke||ke&&je,requestId:De,index:pe,name:f,fullyPlayed:E,onMarkAsPlayed:Ce,onMoreButtonClick:Ie})}),(0,A.jsx)("div",{className:de,children:We})]})})))},39481:(e,a,o)=>{o.d(a,{m:()=>y});var s=o(50959),t=o(82187),i=o.n(t),n=o(13999),l=o(23280),r=o(74039),d=o(12737),c=o(55147),u=o(73196),m=o(59544);const h="rFwxt8s8DYY8p1O7tYZW",x="sA2HogGQNi8R_zpCWei5",g="H92pPTuqDR5DcoTtjcb3";var p=o(11527);const y=e=>{let{cardHeaderText:a,buttonText:o,buttonTarget:t,className:y}=e;const k=(0,d.W6)(u.XdP),j=(0,s.useCallback)((e=>{e.stopPropagation()}),[]),v=(0,c.EC)(t).toURLPath(!0);return k?(0,p.jsxs)("div",{className:i()(h,y),onClick:j,children:[(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)(n.W,{className:g,size:"small",semanticColor:"textBase"}),(0,p.jsx)(l.x,{as:"span",variant:"bodyMediumBold",semanticColor:"textBase",children:a})]}),(0,p.jsx)(r.D,{size:"small",colorSet:"invertedLight",component:m.Z,href:v,children:o})]}):null}},76210:(e,a,o)=>{o.d(a,{k:()=>_});o(60678),o(63961),o(21164);var s=o(50959),t=o(82187),i=o.n(t),n=o(28150),l=o(23280),r=o(39753),d=o(89963),c=o(94509),u=o(73474),m=o(56179),h=o(55147),x=o(10992),g=o(73467),p=o(77401),y=o(18373),k=o(6879),j=o(29037),v=o(92718),b=o(30916),f=o(38010),C=o(39481),P=o(85802),D=o(44071),I=o(66562),N=o(36680),T=o(85258),U=o(33325),E=o(98090),M=o(69918),w=o(13814),B=o(51335),S=o(48545),L=o(81085),Z=o(72269),A=o(71145),z=o(11527);const R={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},F=s.memo((function(e){let{episodeUri:a,showUri:o,sharingInfo:t,size:n,canDownload:l,requestId:r,onMarkAsPlayed:d,onMoreButtonClick:c,name:u,fullyPlayed:m,index:h}=e;const g=(0,S._)(a),{spec:p,logger:y}=(0,L.fU)(P.createDesktopEpisodeBlockEventFactory,{data:{uri:a,reason:r||"",position:h}}),k=n===j.Uo.LARGE?"medium":"small",v=(0,s.useMemo)((()=>(0,z.jsx)(D.p,{uri:a,size:k,className:i()({[A.Z.visibleAction]:(0,B.y)(g)}),onClick:(e,o)=>{o===w.mc.ADD?y.logInteraction(p.downloadButtonFactory().hitDownload({itemToDownload:a})):w.mc.REMOVE&&y.logInteraction(p.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:a}))},canDownload:l})),[a,g,p,y,k,l]),b=(0,s.useMemo)((()=>(0,z.jsx)(T.T,{uri:a,sharingInfo:t,interactionData:R,size:k,onClick:()=>{y.logInteraction(p.copyLinkFactory().hitShare({entityToBeShared:a,shareId:(null==t?void 0:t.shareId)||""}))}})),[a,t,p,y,k]),f=(0,s.useMemo)((()=>(0,z.jsx)(N.w,{uri:a,size:k,className:A.Z.visibleAction,onClick:e=>{e?y.logInteraction(p.saveToLibraryButtonFactory().hitLike({itemToBeLiked:a})):y.logInteraction(p.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:a}))}})),[a,p,y,k]),C=(0,E.r)(a),F=(0,s.useMemo)((()=>(0,z.jsx)(Z.T,{size:k,uri:a,className:A.Z.visibleAction})),[a,k]),G=(0,s.useMemo)((()=>(0,z.jsx)(M.yj,{menu:(0,z.jsx)(U.k,{uri:a,showUri:o,isPlayed:m,onMarkAsPlayed:d}),children:(0,z.jsx)(I.z,{size:k,label:x.ag.get("more.label.context",u),onClick:c})})),[a,m,u,d,c,o,k]);return(0,z.jsxs)(z.Fragment,{children:[C?F:f,v,b,G]})}));var G=o(44288),O=o(37376);const _=s.memo(s.forwardRef((function(e,a){var o;let{uri:t,name:P,showName:D,showUri:I,size:N,description:T,durationMs:U,images:E,badges:M,fullyPlayed:w,releaseDate:B,resumePositionMs:S,isCurrentlyPlaying:L,isPlaying:Z,onContextMenu:R,onTouchStart:_,onTouchEnd:V,handlePlaybackClick:W,handleDragStart:H,handleClick:q,position:Y,index:Q,isPlayable:J,isPaywalled:$,isUserSubscribed:K,episodeSharingInfo:X,playButtonWrapper:ee=null,highlightText:ae=(e=>e),onMarkAsPlayed:oe,contentInformation:se,requestId:te,mediaTypes:ie,onMoreButtonClick:ne,status:le,variant:re="default"}=e;const de=(0,n.s0)(),ce=L&&Z,ue=N===j.Uo.LARGE,me=(0,h.EC)(t).toURLPath(!0),he=null===(o=(0,h.EC)(I))||void 0===o?void 0:o.toURLPath(!0),xe=(0,k.G3)(t,B,S,w),ge=$&&!K,pe=(null==ie?void 0:ie.includes(b.$.Video))??!1,ye=(null==M?void 0:M.props.children.filter((e=>!1!==e)))||[],ke=ge||J,je=x.ag.get("tracklist.a11y.play",P,D),ve=x.ag.get("tracklist.a11y.pause",P,D),be=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),de(me),q&&q(e)}),[de,me,q]),fe=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),he&&de(he)}),[he,de]),Ce=(0,s.useCallback)((e=>{e.stopPropagation(),ge||W(e)}),[W,ge]),Pe=(0,z.jsx)(g.f,{size:"small",version:"next-best-episode"===re?g.u.primary:g.u.secondary,onClick:Ce,isPlaying:ce,disabled:!ke,locked:ge,ariaPlayLabel:je,ariaPauseLabel:ve}),De=ee?ee(Pe):Pe,Ie=(0,z.jsx)(z.Fragment,{children:le&&(0,z.jsx)(l.x,{semanticColor:"textSubdued",paddingBottom:r.hM,children:le})}),Ne=(0,z.jsxs)(d.g,{className:A.Z.title,href:me,onClick:be,lineClamp:2,children:[xe&&(0,z.jsx)(k.Rd,{}),ae(P)]}),Te=(0,z.jsxs)(c.l,{lineClamp:2,paddingBottom:ue?r.dl:void 0,children:[pe&&(0,z.jsx)(O.t,{}),D&&he&&(0,z.jsx)(G.Link,{className:A.Z.showLink,to:he,onClick:fe,children:(0,z.jsx)(l.x,{semanticColor:"textSubdued",children:ae(D)})})]}),Ue=(0,z.jsxs)("div",{className:A.Z.showDetailsWithProgress,children:[(0,z.jsx)(u.o,{lineClamp:2,paddingBottom:ue?r.hM:void 0,children:ae(T??"")}),(0,z.jsxs)("div",{className:A.Z.metadata,children:[ye.length>0&&(0,z.jsx)("div",{className:A.Z.badges,children:M}),(0,z.jsx)(f.E,{isPlaying:ce,fullyPlayed:w,durationMs:U,releaseDate:B,resumePositionMs:S,position:L?Y:void 0})]})]}),Ee=(0,z.jsxs)("div",{className:A.Z.footer,children:[(0,z.jsx)("div",{onClick:e=>{e.stopPropagation()},className:A.Z.actions,children:(0,z.jsx)(F,{episodeUri:t,showUri:I??"",sharingInfo:X,size:N,canDownload:!$||$&&K,requestId:te,index:Q,name:P,fullyPlayed:w,onMarkAsPlayed:oe,onMoreButtonClick:ne})}),(0,z.jsx)("div",{children:De})]}),Me="default"===re&&(0,z.jsx)("div",{className:A.Z.imageContainer,children:(0,z.jsx)(p.O,{className:i()(A.Z.showImage,{[A.Z.largeImage]:ue}),type:v.p.EPISODE,size:(e=>{switch(e){case j.Uo.LARGE:return y.m$.SIZE_112;case j.Uo.MEDIUM:return y.m$.SIZE_64;default:return y.m$.SIZE_48}})(N),title:P,shape:p.K.ROUNDED_CORNERS,images:E})});return(0,z.jsxs)("div",{className:i()(A.Z.episodeBlock,{[A.Z.isActive]:L,[A.Z.nextBestEpisode]:"next-best-episode"===re}),"data-testid":`episode-${Q}`,draggable:!!H,onDragStart:H,onClick:be,onContextMenu:R,onTouchStart:_,onTouchEnd:V,children:[se&&(0,z.jsx)(C.m,{className:A.Z.contentInformationBanner,cardHeaderText:se.cardHeaderText,buttonText:se.buttonText,buttonTarget:se.buttonTarget}),(0,z.jsx)(m.w,{size:"xxl",ref:a,media:Me,title:Ne,id:`episode-${Q}`,subtitle:D&&he?Te:Ue,pretitle:Ie,body:D&&he?Ue:void 0,variant:"naked",footer:Ee,hoverBackgroundColor:"backgroundHighlight",layout:ue?"wide":"regular",horizontalGap:ue?r.g4:r.nu,verticalGap:r.dl,paddingBlockStart:r.o7,paddingBlockEnd:r.o7})]})})))},30916:(e,a,o)=>{o.d(a,{$:()=>s});let s=function(e){return e.Audio="AUDIO",e.Unknown="UNKNOWN",e.Video="VIDEO",e}({})},71145:(e,a,o)=>{o.d(a,{Z:()=>s});const s={episodeBlock:"T9iBYqbERZHdwDl0U2tC",isActive:"DS4BYgmEO7Wy5RutUt60",title:"N2Fkohxhgu1_QAWUDc4O",selected:"DaxWgzoBoBnOEj43bZAA",actions:"hGbRiYkIjjy4sJvor0A2",visibleAction:"OgaF7O4ER8AvZfFd6JdJ",metadata:"bdGDIiYj50H66Hx5uevz",imageContainer:"kiT5NMttSzIDbtqBKc1J",showImage:"TG1hsDPHeO5QUf4EQasO",largeImage:"_NdByrVnM0OS7aK_GfRn",showLink:"CHUTnjCBTLRfQb048zjZ",badges:"UpgTvLnGW6GFjAUfaPXH",footer:"kxVuYXZ4sVWn6XuJgFhX",showDetailsWithProgress:"UvdRnanMNuY384mjTf2l",contentInformationBanner:"fmu47VumZ84IoKgMK1yU",nextBestEpisode:"dUScIGoP9fWn5IVsztB7"}}}]);
//# sourceMappingURL=2473.9649d125.js.map