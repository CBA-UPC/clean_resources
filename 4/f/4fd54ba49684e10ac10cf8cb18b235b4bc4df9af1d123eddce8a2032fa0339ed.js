"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[9147],{4576:(e,a,o)=>{o.d(a,{T:()=>m});var s=o(50959),t=o(82187),i=o.n(t),n=o(40763),l=o(85648),r=o(41891),d=o(74713);const c="pvGZ831aNzHTQMZ8CA_u";var u=o(11527);const m=(0,s.memo)((function(e){let{onClick:a=(()=>{}),size:o,className:t,uri:m,sharingInfo:h,interactionData:x,ariaLabel:g=l.ag.get("mwp.list.item.share"),condensedAll:p}=e;const{onCopyLink:y}=(0,d.y)({sharingInfo:h,uri:m,interactionData:x}),k=(0,s.useCallback)((()=>{y(),a()}),[a,y]);return(0,u.jsx)(r.E,{ariaLabel:g,size:o,onClick:k,className:i()(c,t),icon:n.M,condensedAll:p,condensed:!0})}))},18050:(e,a,o)=>{o.d(a,{X:()=>me});o(80378);var s=o(50959),t=o(82187),i=o.n(t),n=o(36275),l=o(75802),r=o(36353),d=o(69736),c=o(43106),u=o(11317),m=o(85648),h=o(59582);var x=o(42858),g=o(93421),p=o(11401),y=o(51301),k=o(61058),j=o(82857),v=o(42882),b=o(78706),f=o(41657),C=o(38338),P=o(28185),D=o(97013),I=o(6056),N=o(4576),T=o(64329),U=o(27106),E=o(95841),M=o(5542),w=o(69053),B=o(3319),S=o(80626),L=o(74434),A=o(93109),Z=o(11527);const z={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},R=s.memo((function(e){let{episodeUri:a,showUri:o,sharingInfo:t,canDownload:n,requestId:l,onMarkAsPlayed:r,onMoreButtonClick:d,name:c,fullyPlayed:u,index:h}=e;const x=(0,B._)(a),{spec:g,logger:p}=(0,S.fU)(f.createDesktopEpisodeBlockEventFactory,{data:{uri:a,reason:l||"",position:h}}),y=(0,U.r)(a),k=(0,s.useMemo)((()=>(0,Z.jsx)(L.T,{size:"medium",uri:a})),[a]),j=(0,s.useMemo)((()=>(0,Z.jsx)(P.p,{uri:a,size:P.q.sm,className:i()({[A.Z.visibleAction]:(0,w.y)(x)}),onClick:(e,o)=>{o===M.mc.ADD?p.logInteraction(g.downloadButtonFactory().hitDownload({itemToDownload:a})):M.mc.REMOVE&&p.logInteraction(g.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:a}))},canDownload:n})),[a,x,g,p,n]),v=(0,s.useMemo)((()=>(0,Z.jsx)(N.T,{uri:a,sharingInfo:t,interactionData:z,onClick:()=>{p.logInteraction(g.copyLinkFactory().hitShare({entityToBeShared:a,shareId:(null==t?void 0:t.shareId)||""}))}})),[a,t,g,p]),b=(0,s.useMemo)((()=>(0,Z.jsx)(I.w,{uri:a,size:C.q.sm,className:A.Z.visibleAction,onClick:e=>{e?p.logInteraction(g.saveToLibraryButtonFactory().hitLike({itemToBeLiked:a})):p.logInteraction(g.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:a}))}})),[a,g,p]),R=(0,s.useMemo)((()=>(0,Z.jsx)(E.yj,{menu:(0,Z.jsx)(T.k,{uri:a,showUri:o,isPlayed:u,onMarkAsPlayed:r}),children:(0,Z.jsx)(D.z,{size:D.q.sm,label:m.ag.get("more.label.context",c),onClick:d})})),[a,u,c,r,d,o]);return(0,Z.jsxs)(Z.Fragment,{children:[v,j,y?k:b,R]})}));var F=o(96304),G=o(37350);const O="TT1tIewS2iI8Uz8kLuQB",_="Mn93NeoqnZzVnPIP83_9",V="bG5fSAAS6rRL8xxU5iyG",W="g5gZaZVzR0tGT4pK6iEU",H="DbMYFmOEEz9PH1h1zK9n",q="HLixBI5DbVZNC6lrUbAB",Y="q80ZFqNlDZCC7OTfUPj8",Q="y9kEPjDek0J80YRf8JJw",J="YhOAZFuFU1oI_YQSof4z",$="DKIjGP8CcZyjr2O2HNST",K="A7qeQBIk3sqr7bYadWA8",X="_IJaGA3ZdVU0NiTxbGsI",ee="ij5_Bi2LfqgWwHzQBXJS",ae="o_TP9z7A8LQvMXujJC7N",oe="LbePDApGej12_NyRphHu",se="hFCGY5gjCjN10WzV2VQ4",te="gk0rZwqBxJjSeiWV5lgV",ie="te8hrsPnSvx9SUkzV0ME",ne="V0pEigrddg3VxP_sTdAJ",le="acjrpluRnLumVxPt2QG9",re="upo8sAflD1byxWObSkgn",de="DyuLxip2Kl8P7H8fW62u",ce="vak8N953oXaq9F7jZDsD",ue="WBxE9PQe96PpkE9RuTo5",me=s.memo(s.forwardRef((function(e,a){var o;let{uri:t,name:f,showName:C,showUri:P,size:D,description:I,durationMs:N,images:T,badges:U,fullyPlayed:E,releaseDate:M,resumePositionMs:w,isCurrentlyPlaying:B,isPlaying:S,onContextMenu:L,onTouchStart:A,onTouchEnd:z,handlePlaybackClick:me,handleDragStart:he,handleClick:xe,position:ge,index:pe,isPlayable:ye,isPaywalled:ke,isUserSubscribed:je,episodeSharingInfo:ve,playButtonWrapper:be=null,highlightText:fe=(e=>e),onMarkAsPlayed:Ce,contentInformation:Pe,requestId:De,onMoreButtonClick:Ie,status:Ne,variant:Te="default",mediaTypes:Ue}=e;const Ee=(0,l.s0)(),Me=B&&S,we=(0,u.EC)(t).toURLPath(!0),Be=null===(o=(0,u.EC)(P))||void 0===o?void 0:o.toURLPath(!0),Se=function(e){let{episodeUri:a}=e;const[o,t]=(0,s.useState)([]),i=(0,h.G)();return(0,s.useEffect)((()=>{let e=!0;return async function(){const o=await i.getArtists(a);e&&t(o)}(),()=>{e=!1}}),[a,i]),o}({episodeUri:t}),Le=(0,y.G3)(t,M,w,E),Ae=(null==Ue?void 0:Ue.includes(v.$.Video))??!1,Ze=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Ee(we),xe&&xe(e)}),[Ee,we,xe]),ze=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),Be&&Ee(Be)}),[Be,Ee]),Re=ke&&!je,Fe=(0,s.useCallback)((e=>{e.stopPropagation(),Re||me(e)}),[me,Re]),Ge=Re||ye,Oe=m.ag.get("tracklist.a11y.play",f,C),_e=m.ag.get("tracklist.a11y.pause",f,C),Ve=(0,Z.jsx)(x.f,{size:"small",version:"next-best-episode"===Te?x.u.primary:x.u.secondary,onClick:Fe,isPlaying:Me,disabled:!Ge,locked:Re,ariaPlayLabel:Oe,ariaPauseLabel:_e}),We=be?be(Ve):Ve;return(0,Z.jsxs)("div",{ref:a,className:i()(O,{[_]:B,[te]:D===k.Uo.MEDIUM,[ie]:D===k.Uo.LARGE,[X]:D===k.Uo.XSMALL,[ue]:"next-best-episode"===Te}),"data-testid":`episode-${pe}`,draggable:!!he,onDragStart:he,onClick:Ze,onContextMenu:L,onTouchStart:A,onTouchEnd:z,children:[Ne&&(0,Z.jsx)(d.x,{className:le,paddingBottom:r.hM,children:Ne}),Pe&&(0,Z.jsx)(F.m,{className:ce,cardHeaderText:Pe.cardHeaderText,buttonText:Pe.buttonText,buttonTarget:Pe.buttonTarget}),"default"===Te&&(0,Z.jsx)("div",{className:ee,children:(0,Z.jsx)(g.O,{className:ae,type:j.p.EPISODE,size:(e=>{switch(e){case k.Uo.LARGE:return p.m$.SIZE_112;case k.Uo.MEDIUM:return p.m$.SIZE_64;default:return p.m$.SIZE_48}})(D),title:f,shape:g.K.ROUNDED_CORNERS,images:T})}),(0,Z.jsxs)("div",{className:ne,children:[(0,Z.jsxs)("div",{className:q,children:[(0,Z.jsx)(n.rU,{className:W,to:we,onClick:Ze,children:(0,Z.jsxs)(d.x,{as:"div",variant:"bodyMediumBold",className:V,"data-testid":"episodeTitle",children:[Le&&(0,Z.jsx)(y.Rd,{}),fe(f)]})}),Se.length>0&&(0,Z.jsxs)("div",{className:J,children:[(0,Z.jsx)(c.U,{size:"small",className:K}),(0,Z.jsx)(d.x,{as:"p",variant:"bodySmall",className:$,children:fe(Se.join(m.ag.getSeparator()))})]})]}),(0,Z.jsxs)("div",{className:Y,children:[Ae&&(0,Z.jsx)(d.x,{variant:"bodySmall",semanticColor:"textSubdued",children:(0,Z.jsx)(G.t,{})}),C&&Be&&(0,Z.jsx)(n.rU,{className:W,to:Be,onClick:ze,children:(0,Z.jsx)(d.x,{variant:"bodySmall",semanticColor:"textSubdued",children:fe(C)})})]})]}),(0,Z.jsx)("div",{className:re,children:(0,Z.jsx)(d.x,{as:"p",variant:"bodySmall",className:oe,children:fe(I??"")})}),(0,Z.jsxs)("div",{className:Q,children:[(0,Z.jsx)("div",{className:se,children:U}),(0,Z.jsx)(b.E,{isPlaying:Me,fullyPlayed:E,durationMs:N,releaseDate:M,resumePositionMs:w,position:B?ge:void 0})]}),(0,Z.jsx)("div",{onClick:e=>{e.stopPropagation()},className:H,children:(0,Z.jsx)(R,{episodeUri:t,showUri:P??"",sharingInfo:ve,canDownload:!ke||ke&&je,requestId:De,index:pe,name:f,fullyPlayed:E,onMarkAsPlayed:Ce,onMoreButtonClick:Ie})}),(0,Z.jsx)("div",{className:de,children:We})]})})))},96304:(e,a,o)=>{o.d(a,{m:()=>y});var s=o(50959),t=o(82187),i=o.n(t),n=o(21165),l=o(69736),r=o(43286),d=o(18517),c=o(11317),u=o(17676),m=o(33592);const h="rFwxt8s8DYY8p1O7tYZW",x="sA2HogGQNi8R_zpCWei5",g="H92pPTuqDR5DcoTtjcb3";var p=o(11527);const y=e=>{let{cardHeaderText:a,buttonText:o,buttonTarget:t,className:y}=e;const k=(0,d.W6)(u.XdP),j=(0,s.useCallback)((e=>{e.stopPropagation()}),[]),v=(0,c.EC)(t).toURLPath(!0);return k?(0,p.jsxs)("div",{className:i()(h,y),onClick:j,children:[(0,p.jsxs)("div",{className:x,children:[(0,p.jsx)(n.W,{className:g,size:"small",semanticColor:"textBase"}),(0,p.jsx)(l.x,{as:"span",variant:"bodyMediumBold",semanticColor:"textBase",children:a})]}),(0,p.jsx)(r.D,{size:"small",colorSet:"invertedLight",component:m.Z,href:v,children:o})]}):null}},12553:(e,a,o)=>{o.d(a,{k:()=>_});o(80378),o(46758),o(53321);var s=o(50959),t=o(82187),i=o.n(t),n=o(75802),l=o(69736),r=o(36353),d=o(97345),c=o(32394),u=o(77366),m=o(25331),h=o(11317),x=o(85648),g=o(42858),p=o(93421),y=o(11401),k=o(51301),j=o(61058),v=o(82857),b=o(42882),f=o(78706),C=o(96304),P=o(41657),D=o(28185),I=o(97013),N=o(6056),T=o(4576),U=o(64329),E=o(27106),M=o(95841),w=o(5542),B=o(69053),S=o(3319),L=o(80626),A=o(74434),Z=o(93109),z=o(11527);const R={intent:"share",type:"click",itemIdSuffix:"contextmenu/episode/share"},F=s.memo((function(e){let{episodeUri:a,showUri:o,sharingInfo:t,size:n,canDownload:l,requestId:r,onMarkAsPlayed:d,onMoreButtonClick:c,name:u,fullyPlayed:m,index:h}=e;const g=(0,S._)(a),{spec:p,logger:y}=(0,L.fU)(P.createDesktopEpisodeBlockEventFactory,{data:{uri:a,reason:r||"",position:h}}),k=n===j.Uo.LARGE?"medium":"small",v=(0,s.useMemo)((()=>(0,z.jsx)(D.p,{uri:a,size:k,className:i()({[Z.Z.visibleAction]:(0,B.y)(g)}),onClick:(e,o)=>{o===w.mc.ADD?y.logInteraction(p.downloadButtonFactory().hitDownload({itemToDownload:a})):w.mc.REMOVE&&y.logInteraction(p.downloadButtonFactory().hitRemoveDownload({itemToRemoveFromDownloads:a}))},canDownload:l})),[a,g,p,y,k,l]),b=(0,s.useMemo)((()=>(0,z.jsx)(T.T,{uri:a,sharingInfo:t,interactionData:R,size:k,onClick:()=>{y.logInteraction(p.copyLinkFactory().hitShare({entityToBeShared:a,shareId:(null==t?void 0:t.shareId)||""}))}})),[a,t,p,y,k]),f=(0,s.useMemo)((()=>(0,z.jsx)(N.w,{uri:a,size:k,className:Z.Z.visibleAction,onClick:e=>{e?y.logInteraction(p.saveToLibraryButtonFactory().hitLike({itemToBeLiked:a})):y.logInteraction(p.saveToLibraryButtonFactory().hitRemoveLike({itemNoLongerLiked:a}))}})),[a,p,y,k]),C=(0,E.r)(a),F=(0,s.useMemo)((()=>(0,z.jsx)(A.T,{size:k,uri:a,className:Z.Z.visibleAction})),[a,k]),G=(0,s.useMemo)((()=>(0,z.jsx)(M.yj,{menu:(0,z.jsx)(U.k,{uri:a,showUri:o,isPlayed:m,onMarkAsPlayed:d}),children:(0,z.jsx)(I.z,{size:k,label:x.ag.get("more.label.context",u),onClick:c})})),[a,m,u,d,c,o,k]);return(0,z.jsxs)(z.Fragment,{children:[C?F:f,v,b,G]})}));var G=o(60046),O=o(37350);const _=s.memo(s.forwardRef((function(e,a){var o;let{uri:t,name:P,showName:D,showUri:I,size:N,description:T,durationMs:U,images:E,badges:M,fullyPlayed:w,releaseDate:B,resumePositionMs:S,isCurrentlyPlaying:L,isPlaying:A,onContextMenu:R,onTouchStart:_,onTouchEnd:V,handlePlaybackClick:W,handleDragStart:H,handleClick:q,position:Y,index:Q,isPlayable:J,isPaywalled:$,isUserSubscribed:K,episodeSharingInfo:X,playButtonWrapper:ee=null,highlightText:ae=(e=>e),onMarkAsPlayed:oe,contentInformation:se,requestId:te,mediaTypes:ie,onMoreButtonClick:ne,status:le,variant:re="default"}=e;const de=(0,n.s0)(),ce=L&&A,ue=N===j.Uo.LARGE,me=(0,h.EC)(t).toURLPath(!0),he=null===(o=(0,h.EC)(I))||void 0===o?void 0:o.toURLPath(!0),xe=(0,k.G3)(t,B,S,w),ge=$&&!K,pe=(null==ie?void 0:ie.includes(b.$.Video))??!1,ye=(null==M?void 0:M.props.children.filter((e=>!1!==e)))||[],ke=ge||J,je=x.ag.get("tracklist.a11y.play",P,D),ve=x.ag.get("tracklist.a11y.pause",P,D),be=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),de(me),q&&q(e)}),[de,me,q]),fe=(0,s.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),he&&de(he)}),[he,de]),Ce=(0,s.useCallback)((e=>{e.stopPropagation(),ge||W(e)}),[W,ge]),Pe=(0,z.jsx)(g.f,{size:"small",version:"next-best-episode"===re?g.u.primary:g.u.secondary,onClick:Ce,isPlaying:ce,disabled:!ke,locked:ge,ariaPlayLabel:je,ariaPauseLabel:ve}),De=ee?ee(Pe):Pe,Ie=(0,z.jsx)(z.Fragment,{children:le&&(0,z.jsx)(l.x,{semanticColor:"textSubdued",paddingBottom:r.hM,children:le})}),Ne=(0,z.jsxs)(d.g,{className:Z.Z.title,href:me,onClick:be,lineClamp:2,children:[xe&&(0,z.jsx)(k.Rd,{}),ae(P)]}),Te=(0,z.jsxs)(c.l,{lineClamp:2,paddingBottom:ue?r.dl:void 0,children:[pe&&(0,z.jsx)(O.t,{}),D&&he&&(0,z.jsx)(G.Link,{className:Z.Z.showLink,to:he,onClick:fe,children:(0,z.jsx)(l.x,{semanticColor:"textSubdued",children:ae(D)})})]}),Ue=(0,z.jsxs)("div",{className:Z.Z.showDetailsWithProgress,children:[(0,z.jsx)(u.o,{lineClamp:2,paddingBottom:ue?r.hM:void 0,children:ae(T??"")}),(0,z.jsxs)("div",{className:Z.Z.metadata,children:[ye.length>0&&(0,z.jsx)("div",{className:Z.Z.badges,children:M}),(0,z.jsx)(f.E,{isPlaying:ce,fullyPlayed:w,durationMs:U,releaseDate:B,resumePositionMs:S,position:L?Y:void 0})]})]}),Ee=(0,z.jsxs)("div",{className:Z.Z.footer,children:[(0,z.jsx)("div",{onClick:e=>{e.stopPropagation()},className:Z.Z.actions,children:(0,z.jsx)(F,{episodeUri:t,showUri:I??"",sharingInfo:X,size:N,canDownload:!$||$&&K,requestId:te,index:Q,name:P,fullyPlayed:w,onMarkAsPlayed:oe,onMoreButtonClick:ne})}),(0,z.jsx)("div",{children:De})]}),Me="default"===re&&(0,z.jsx)("div",{className:Z.Z.imageContainer,children:(0,z.jsx)(p.O,{className:i()(Z.Z.showImage,{[Z.Z.largeImage]:ue}),type:v.p.EPISODE,size:(e=>{switch(e){case j.Uo.LARGE:return y.m$.SIZE_112;case j.Uo.MEDIUM:return y.m$.SIZE_64;default:return y.m$.SIZE_48}})(N),title:P,shape:p.K.ROUNDED_CORNERS,images:E})});return(0,z.jsxs)("div",{className:i()(Z.Z.episodeBlock,{[Z.Z.isActive]:L,[Z.Z.nextBestEpisode]:"next-best-episode"===re}),"data-testid":`episode-${Q}`,draggable:!!H,onDragStart:H,onClick:be,onContextMenu:R,onTouchStart:_,onTouchEnd:V,children:[se&&(0,z.jsx)(C.m,{className:Z.Z.contentInformationBanner,cardHeaderText:se.cardHeaderText,buttonText:se.buttonText,buttonTarget:se.buttonTarget}),(0,z.jsx)(m.w,{size:"xxl",ref:a,media:Me,title:Ne,id:`episode-${Q}`,subtitle:D&&he?Te:Ue,pretitle:Ie,body:D&&he?Ue:void 0,variant:"naked",footer:Ee,hoverBackgroundColor:"backgroundHighlight",layout:ue?"wide":"regular",horizontalGap:ue?r.g4:r.nu,verticalGap:r.dl,paddingBlockStart:r.o7,paddingBlockEnd:r.o7})]})})))},42882:(e,a,o)=>{o.d(a,{$:()=>s});let s=function(e){return e.Audio="AUDIO",e.Unknown="UNKNOWN",e.Video="VIDEO",e}({})},93109:(e,a,o)=>{o.d(a,{Z:()=>s});const s={episodeBlock:"T9iBYqbERZHdwDl0U2tC",isActive:"DS4BYgmEO7Wy5RutUt60",title:"N2Fkohxhgu1_QAWUDc4O",selected:"DaxWgzoBoBnOEj43bZAA",actions:"hGbRiYkIjjy4sJvor0A2",visibleAction:"OgaF7O4ER8AvZfFd6JdJ",metadata:"bdGDIiYj50H66Hx5uevz",imageContainer:"kiT5NMttSzIDbtqBKc1J",showImage:"TG1hsDPHeO5QUf4EQasO",largeImage:"_NdByrVnM0OS7aK_GfRn",showLink:"CHUTnjCBTLRfQb048zjZ",badges:"UpgTvLnGW6GFjAUfaPXH",footer:"kxVuYXZ4sVWn6XuJgFhX",showDetailsWithProgress:"UvdRnanMNuY384mjTf2l",contentInformationBanner:"fmu47VumZ84IoKgMK1yU",nextBestEpisode:"dUScIGoP9fWn5IVsztB7"}}}]);
//# sourceMappingURL=9147.bb9b774f.js.mapcation.href;
name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
var regexS = "[\\?&]"+name+"=([^&#]*)";
var regex = new RegExp(regexS,"i");
var results = regex.exec( url );
return results == null ? null : results[1];
}
function createCookie(name,value,days) { if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}
function eraseCookie(name) {
createCookie(name,"",-1);
}
function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
function deleteCookie(name) {
createCookiewithdomain(name,null,-1);
}
function createCookiewithdomain(name,value,days) {
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; domain="+document.location.host.match(/\.[.\w]*/)+";path=/";
}
function getStorage(name){	if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {	if (localStorage.getItem(name)){	cookieObj = JSON.parse(localStorage.getItem(name));
if (cookieObj !== undefined && (cookieObj.e == null || cookieObj.e > new Date())){return cookieObj.v === undefined ? null : cookieObj.v ; }	else{localStorage.removeItem(name);}	}
return null;	} else {return readCookie(name);}	}
function setStorage(name,value,days){
if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {
var date = new Date();	localStorage.setItem(name,JSON.stringify({"v":value, "e":date.setTime(date.getTime()+(days*24*60*60*1000))}))
} else {createCookie(name,value,days);}	}
function eraseStorage(name){ if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {localStorage.removeItem(name);}
else{eraseCookie(name)}
}
var isNonSubcribed = true;function isNonSubcribedUser(){return isNonSubcribed;}
var myUserStatus = "anon";function UserCurrentStatus(){return myUserStatus;}var imageSizes = [80, 100, 115, 140, 155 ,170, 215, 230, 240, 300, 320, 355,385, 435, 460, 480,560, 615, 660, 730, 810, 960, 1080, 1140, 1200];function imglazyload(selector){
	var lazyImages = [];
   if(typeof selector !== 'undefined' && selector){
	lazyImages = [].slice.call(document.querySelectorAll(selector +" img.lazy"));
   }
   else{
	lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))
   }

 if ("IntersectionObserver" in window) {
   let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
	 entries.forEach(function(entry) {
	   if (entry.isIntersecting) {
		 let lazyImage = entry.target
		 lazyImageloader(lazyImage);
		 lazyImageObserver.unobserve(lazyImage);
	   }
	 });
   });

   lazyImages.forEach(function(lazyImage) {
	 lazyImageObserver.observe(lazyImage);
   });
 } else {
	lazyImages.forEach(function(lazyImage) {
	 lazyImageloader(lazyImage);
	});
 }
	window.__thgimgloaded = true;
 }
function lazyImageloader(lazyImage){
	let variant = lazyImage.dataset.deviceVariant;
	let imagesrc =  lazyImage.dataset.srcTemplate;
	if(typeof imagesrc !="undefined" && imagesrc != ""){
	if(typeof variant !="undefined" && variant != ""){
	let position = 0;
	if(DevIdf.isDesktop){
	  position = 1;
	}
	else if(DevIdf.isTablet){
		 position = 2;
	}
	else if(DevIdf.isMobile){
		 position = 3;
	}
	variant = variant.split("~")[position];
	var selected = Math.max.apply(null, imageSizes);
	for (var i = 0; i < imageSizes.length; i++) {
	  if (lazyImage.offsetWidth <= imageSizes[i]) {
		selected = imageSizes[i];
		break;
	  }
	}
	 var alterRegEx = new RegExp("alternates\/[a-z0-9_]*", "ig");
	 imagesrc = imagesrc.replace(alterRegEx,"alternates/"+variant + "_" + selected);
	
	 lazyImage.src = imagesrc;
	}
	else{
	  lazyImage.src = imagesrc;
	}
	}
	lazyImage.classList.remove("lazy");
}var promiseResolve, promiseReject;userIdentify = new Promise(function(resolve, reject){promiseResolve = resolve;promiseReject = reject;});var thg={required:!0,functional:!1,advertising:!1,requiredCookie:function(){return thg.required},functionalCookie:function(){return thg.functional},advertisingCookie:function(){return thg.advertising}};thgCookieConsent.then(function(){var constentbehavior=readCookie("notice_behavior"),cookieconsent=readCookie("cmapi_cookie_privacy");null==cookieconsent&&null!=constentbehavior&&-1==constentbehavior.indexOf("eu")?(thg.functional=!0,thg.advertising=!0):null!==cookieconsent?(cookieconsent.indexOf("permit")>-1&&cookieconsent.indexOf("2")>-1&&(thg.functional=!0),cookieconsent.indexOf("permit")>-1&&cookieconsent.indexOf("3")>-1&&(thg.advertising=!0)):null==constentbehavior&&(thg.functional=!0,thg.advertising=!0);});
</script><script data-cfasync="false">
var _paq = window._paq || [];
var _thg_config = window["_thg_config"] || {};
window._thg_config.ufenpoint = "https://uf.thehindu.com/";
window._thg_config.ufsiteId= "th"
</script><script data-cfasync="false">
    document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    var setNptTechAdblockerCookie = function(adblocker) {
        var d = new Date();
        d.setTime(d.getTime() + 60 * 5 * 1000);
        document.cookie = "__adblocker=" + (adblocker ? "true" : "false") + "; expires=" + d.toUTCString() + "; path=/";
    };
    var script = document.createElement("script");
    script.setAttribute("async", true);
    script.setAttribute("src", "//www.npttech.com/advertising.js");
    script.setAttribute("onerror", "setNptTechAdblockerCookie(true);");
    document.getElementsByTagName("head")[0].appendChild(script);
</script><script type="text/javascript" data-cfasync="false" src="https://cdn.cxense.com/cx.cce.js" async></script><script data-cfasync="false" type="text/javascript"> 
var cX = window.cX = window.cX || { callQueue: [], options: { dataLayer: { cookie: { domain: '.www.thehindu.com' } }}}; 
cX.CCE = cX.CCE || {}; cX.CCE.callQueue = cX.CCE.callQueue || []; 
cX.callQueue.push(["setSiteId","1129576936026899562"]); 
cX.CCE.callQueue.push(["sendPageViewEvent", "thg", "6ccaf530673bc21409a43a45300ef01e63095338"]); 
</script><script data-cfasync="false">(function(src) { var a = document.createElement("script"); a.type = "text/javascript"; a.async = true; a.src = src; var b = document.getElementsByTagName("script")[0]; b.parentNode.insertBefore(a, b) })("https://experience.tinypass.com/xbuilder/experience/load?aid=DC3REpZYpu"); 
tp = window["tp"] || [];</script><script>
window.adfiller = window.adfiller || [];
window.googletag = window.googletag || {cmd: []};
window.PWT = window.PWT || {};
</script><script>
function loadGptScript(){
	var gads = document.createElement('script');
	var useSSL = 'https:' == document.location.protocol;
	gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
	var node = document.getElementsByTagName('script')[0];
	node.parentNode.insertBefore(gads, node);
}function loadPWTScript(){
	window.PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
		loadGptScript();
	};
	(function() {
		var purl = window.location.href;
		var url = '//ads.pubmatic.com/AdServer/js/pwt/159088/2116';var profileVersionId = '';
		if(purl.indexOf('pwtv=')>0){
		var regexp = /pwtv=(.*?)(&|$)/g;
		var matches = regexp.exec(purl);
		if(matches.length >= 2 && matches[1].length > 0){
		profileVersionId = '/'+matches[1];
		}
		}
		var wtads = document.createElement('script');
		wtads.async = true;
		wtads.type = 'text/javascript';
		wtads.src = url+profileVersionId+'/pwt.js';
		var node = document.getElementsByTagName('script')[0];
		node.parentNode.insertBefore(wtads, node);
	})();
}function getSlotsViewPort(abovefold){
	var googletagslots = googletag.pubads().getSlots();
	var slots = [];
	googletagslots.forEach(function(slot) {
	if(abovefold && slot.getSlotId().toString(2).toLowerCase().match(/(TH_MWeb_AT_Top|TH_MWeb_HP_Top|TH_Desktop_HP_Billboard_Top|TH_Desktop_Topic_Billboard_Top|TH_MWeb_Topic_Top|TH_Desktop_Masthead_970x50|TH_MWeb_Masthead_320x50|TH_Mweb_Brandhub_Visit-Dubai_300x250|TH_Desktop_AT_Billboard_Top|TH_Desktop_Topic_RT)/i) === null){
	slots.push(slot);
	}else if(!abovefold && slot.getSlotId().toString(2).toLowerCase().match(/(TH_MWeb_AT_Top|TH_MWeb_HP_Top|TH_Desktop_HP_Billboard_Top|TH_Desktop_Topic_Billboard_Top|TH_MWeb_Topic_Top|TH_Desktop_Masthead_970x50|TH_MWeb_Masthead_320x50|TH_Mweb_Brandhub_Visit-Dubai_300x250|TH_Desktop_AT_Billboard_Top|TH_Desktop_Topic_RT)/i) != null){
	slots.push(slot);
	}
	});
	return slots;
}Promise.all([userIdentify, thgCookieConsent]).then(function() {
if(isNonSubcribedUser() && thg.advertisingCookie()){loadPWTScript();}
});  
</script><script>
googletag.cmd.push(function () {if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Interstitial', [1, 1], 'div-gpt-ad-1690551415981-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Interstitial', [1, 1], 'div-gpt-ad-1690530073969-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_Mweb_Election_300x250',  [300, 250], 'div-gpt-ad-1677568564430-1').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Election_970x90',  [970, 90], 'div-gpt-ad-1677568564430-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Masthead_970x50', [970, 50], 'div-gpt-ad-1674804175530-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Masthead_320x50', [320, 50], 'div-gpt-ad-1674803841262-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Topic_Sticky', [320, 50], 'sectiondivsticky').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Topic_Mid03', [[300, 250], [336, 280]], 'div-gpt-ad-1661843664158-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Topic_Mid04', [[300, 250], [336, 280]], 'div-gpt-ad-1661843816772-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Topic_Top', [[336, 280], [300, 250]], 'div-gpt-ad-1661843222786-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Topic_Mid01', [[300, 250], [336, 280]], 'secpagetopslotmobile').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('small')) {
	 	 	googletag.defineSlot('/22390678/TH_MWeb_Topic_Mid02', [[336, 280], [300, 250]], 'div-gpt-ad-1661843520685-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Topic_RM',  [300, 250], 'div-gpt-ad-1661842588273-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Topic_LM', [[300, 600], [300, 250]], 'div-gpt-ad-1661842879870-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Topic_RT', [300, 250], 'secpagetopslot').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Topic_Billboard_Top', [[970, 90], [728, 90], [970, 250]], 'div-gpt-ad-1661840335787-0').addService(googletag.pubads());
	 			
		}if (isDeviceEnabled('large')) {
	 	 	googletag.defineSlot('/22390678/TH_Desktop_Topic_Billboard_Middle', [[970, 90], [728, 90], [970, 250]], 'div-gpt-ad-1661840558578-0').addService(googletag.pubads());
	 			
		}googletag.pubads().enableSingleRequest();
googletag.pubads().setTargeting('Section', ['editorial-hindi']);googletag.pubads().enableLazyLoad();googletag.pubads().disableInitialLoad();googletag.enableServices();
});googletag.cmd.push(function() {    
		googletag.pubads().refresh(getSlotsViewPort(false));
	});var isScrolled = false;
	window.addEventListener('scroll', function() {
		if (!isScrolled) {
			googletag.cmd.push(function () {
			googletag.pubads().refresh(getSlotsViewPort(true));
			});
		}
		isScrolled = true;
	},true);</script><script>
var dataLayer = window.dataLayer || [];
</script><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W5VV9N');
</script><script>
thgCookieConsent.then(function() {
if(thg.functionalCookie()){
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-10158580-1', 'auto');}
});
</script><script type="text/javascript">thgCookieConsent.then(function() {if(thg.functionalCookie()){var userconsent = 1 ;var _comscore = _comscore || [];  _comscore.push({ c1: "2", c2: "11398210",cs_ucfr: userconsent});  (function() {    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;s.src=(document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";    el.parentNode.insertBefore(s, el);  })();}});</script><noscript><img src="https://sb.scorecardresearch.com/p?c1=2&c2=123456&cs_ucfr=1&cv=2.0&cj=1" /></noscript><style>.featured .content h3{
    font-weight: 500 !important;
    text-align: left !important;
    margin: 0 !important;
    margin-bottom: 0.5rem !important;
}
.elections a img {
    max-width: 100% !important;
}
.myaccount div#sectiondivicymi {
    display: none;
}

.sportstar-section div>section {
    margin: 0;
}
.article-section .article-picture .picture.lead-img-verticle {
    background: #f1f1f1;
}
.dfp-ad.removeadvt:after {
display:none;
}
section.black-bg.featured .author .content{
display:none;
}
.cue-live-event li:before {
    content: none !important;
}
ol.article-body.article-number-list li:before {
    content: none !important;
}
.timeline li a {
    display: block;
}
#entryList.timeline li a {
    display: inline;
}
 .btns .read-in-app {
 z-index: 9999999999;
  }
.articlebodycontent  #div-gpt-ad-1666088319758-0:after{
display:block;
}
.articlebodycontent #div-gpt-ad-1666088319758-0 {
min-height:250px
}

.art .article-section >.row.justify-content-end {
    justify-content: unset !important;
}
.articlebodycontent {
    max-width: 100%;
}
.artinrstl-ad .dfp-ad:after{
display: none !important;
}

@media screen and (max-width: 570px){
.gsiOverlay{ z-index: 9999 !important;}
#artmeterpvcr {
    bottom: 85px;
}
.subscribed #artmeterpvcr {
    bottom: 0;
}
.myaccountlogincontainer {
    width: 100% !important;
}
#articledivtrendM {
    min-height: auto !important;
}
.small-banner img {
    content: url(https://www.thehindu.com/theme/images/th-online/election-23.png) !important;
}
.article-section p b,
.article-section p strong,
.article-section p i {
  font-family: inherit;
}
.article-section .article-ad {
    clear: both;
}
.articlepaywall div[id^="content-body"] #articlediv4{
display:none !important;
}
.box-line-title h3, .box-line-title h1, .box-line-title h2
{
    max-width: 90%;
}
@media screen and (max-width: 767px) {
  .oTO-Text-points {
    display: none;
  }
}

</style></head><body class=" section-hindi sec"><span itemscope itemtype="https://schema.org/Organization"><meta itemprop="name" content="The Hindu" /><meta itemprop="url" content="https://www.thehindu.com/" /><meta itemprop="logo" content="https://www.thehindu.com/theme/images/th-online/thfooterlogo.png" /><span itemprop="address" itemscope itemtype="https://schema.org/PostalAddress"><meta itemprop="streetAddress" content="Kasturi Building, Anna Salai, 859-860, Mount Road" /><meta itemprop="addressLocality" content="Chennai" /><meta itemprop="addressRegion" content="Tamil Nadu" /><meta itemprop="postalCode" content="600002" /><meta itemprop="Telephone" content="+91-44-2857 6300" /></span><meta itemprop="sameAs" content="https://www.facebook.com/thehindu" /><meta itemprop="sameAs" content="https://twitter.com/The_Hindu" /><meta itemprop="sameAs" content="https://instagram.com/the_hindu/?ref=badge" /><meta itemprop="sameAs" content="https://www.youtube.com/user/The1878Hindu" /></span><span itemscope itemtype="https://schema.org/NewsMediaOrganization"><meta itemprop="name" content="The Hindu" /><meta itemprop="url" content="https://www.thehindu.com/" /><meta itemprop="logo" content="https://www.thehindu.com/theme/images/th-online/thfooterlogo.png" /><span itemtype="https://schema.org/ImageObject" itemscope="itemscope" itemprop="logo" /><meta content="https://www.thehindu.com/theme/images/th-online/thfooterlogo.png" itemprop="url" /><meta content="278" itemprop="width" /><meta content="49" itemprop="height" /></span><meta itemprop="sameAs" content="https://www.facebook.com/thehindu" /><meta itemprop="sameAs" content="https://twitter.com/The_Hindu" /><meta itemprop="sameAs" content="https://instagram.com/the_hindu/?ref=badge" /><meta itemprop="sameAs" content="https://www.youtube.com/user/The1878Hindu" /></span><noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-W5VV9N" height="0" width="0"
			style="display:none;visibility:hidden"></iframe></noscript><script data-cfasync="false">
	if(readCookie("_pc_thgpremiumexp") == "true"){
		var element = document.getElementsByTagName("body")
		element[0].classList.add('subscribed');
	}
</script><header class="header logout "><div class="container desktop"><div class="row header-logo-cont"><div class="col-12 pt-1"><a href="https://www.thehindu.com/"><img src="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg" class="img-fluid mobile-logo" alt="Return to frontpage"></a></div></div></div><div class="header-menu desktop"><div class="navmenu-container main-menu"><nav id="navbar_top " class="navbar navbar-expand-lg navbar-light navbar-inverse"><div class> <ul class="navbar-nav me-auto mb-lg-0" id="navbar_top_innermenu">
<li class="nav-item scroll-logo">
<a class="nav-link" aria-current="page" href="https://www.thehindu.com/">
<img class="lazy" data-src-template="https://www.thehindu.com/theme/images/th-online/h-circle-black-white-new.svg" alt="The Hindu Logo" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png">
</a>
</li>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/news/national/">
India
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/news/international/">
World
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/opinion/">
Opinion
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/sport/">
Sports
</a>
<li class="nav-item ">
<a class="nav-link " href="https://epaper.thehindu.com/?utm_source=Hindu&amp;utm_medium=Menu&amp;utm_campaign=Header" target="_blank">
e-Paper
</a>
</ul>
<div class="scroll-outer">
<ol class="breadcrumb">
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/business/budget/" class="secondary_menu_topic_1">
Budget 2024
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/data/" class="secondary_menu_topic_2">
Data
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/sci-tech/health/" class="secondary_menu_topic_3">
Health
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/opinion/editorial/" class="secondary_menu_topic_4">
Editorial
</a>
</li>
<li class="breadcrumb-item nonsubscriberonly sponsored housing">
<a href="https://housing.com/?utm_source=Hindudirect&amp;utm_medium=Affiliate&amp;utm_campaign=Hindudirect_Traffic" class="secondary_menu_topic_5" target="_blank">
<img src="https://www.thehindu.com/theme/images/th-online/housing.svg" alt="housing.com" class="nonsubscriberonly sponsored housing">
</a>
</li>
<li class="breadcrumb-item search-link">
<a href="https://www.thehindu.com/search/">SEARCH
<img class="treanding" src="https://www.thehindu.com/theme/images/th-online/search-gray-icon.svg" alt="Icon" title="Icon" /></a></li>
</ol>
</div>
<div class="btns menuuserdetect"><a href="/subscription/freetrial/?utm_source=TheHindu&utm_medium=section&utm_campaign=FTbutton"><button type="button" class="btn btn-free-trial">FREE TRIAL<span class="slider"></span></button></a><a href="/subscription/gift/?tpcc=giftasubs" class="btn btn-gift-subscription"><span>GIFT a Subscription</span><img src="https://www.thehindu.com/theme/images/th-online/myaccount-gift-black-icon.svg" alt="Gift" title="Icon" /></a><a href="https://www.thehindu.com/subscription/"><button type="button" class="btn btn-subscribe">
Subscribe
</button></a><button type="button" class="btn btn-signup thgsignin">LOGIN</button><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account">
ACCOUNT
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account with-premium">
PREMIUM
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a></div><div class="menu-btn"><img class="menu-hamber" src="https://www.thehindu.com/theme/images/th-online/menu-hamber-icon.svg" alt="HamberMenu"></div><script>
userIdentify.then(function() {
if(!isNonSubcribedUser()) {
	document.querySelector(".btn-title").innerText ="Make most of your subscription";
}});
</script></div></nav></div></div><div class="container mobile"><div class="top-bar"><button type="button" class="btn read-in-app readinapp-mob"><a rel="nofollow"><span style="display:none">
Open in The Hindu App<img src="https://www.thehindu.com/theme/images/th-online/open-app-arrow.svg" alt="Open Arrow" title /></span></a></button><div class="top-bar-btns"><div class="menuuserdetect"><a href="/subscription/freetrial/?utm_source=TheHindu&utm_medium=&utm_campaign=FTbutton"><button type="button" class="btn btn-free-trial">FREE TRIAL</button></a><button type="button" class="btn btn-signup thgsignin">LOGIN</button><a href="/subscription/gift/?tpcc=giftasubs" class="btn btn-gift-subscription"><span>GIFT a Subscription</span><img src="https://www.thehindu.com/theme/images/th-online/myaccount-gift-black-icon.svg" alt="Gift" title="Icon" /></a><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account">
ACCOUNT
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account with-premium">
PREMIUM
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a></div></div></div><div class="header-logo-cont"><a href="https://www.thehindu.com/"><img src="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg" class="img-fluid mobile-logo" alt="Return to frontpage"></a></div><div class="btns menuuserdetect"><a href="https://www.thehindu.com/subscription/"><button type="button" class="btn btn-subscribe">Subscribe</button></a><button type="button" class="btn share-article"><img alt="Share Article" src="https://www.thehindu.com/theme/images/th-online/share-page-icon.svg" /></button></div><div class="menu-btn"><img class="menu-hamber" src="https://www.thehindu.com/theme/images/th-online/menu-hamber-icon.svg" alt="HamberMenu"></div> <div class="scroll-outer">
<ol class="breadcrumb">
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/business/budget/" class="secondary_menu_topic_1">
Budget 2024
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/data/" class="secondary_menu_topic_2">
Data
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/sci-tech/health/" class="secondary_menu_topic_3">
Health
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/opinion/editorial/" class="secondary_menu_topic_4">
Editorial
</a>
</li>
<li class="breadcrumb-item nonsubscriberonly sponsored housing">
<a href="https://housing.com/?utm_source=Hindudirect&amp;utm_medium=Affiliate&amp;utm_campaign=Hindudirect_Traffic" class="secondary_menu_topic_5" target="_blank">
<img src="https://www.thehindu.com/theme/images/th-online/housing.svg" alt="housing.com" class="nonsubscriberonly sponsored housing">
</a>
</li>
<li class="breadcrumb-item search-link">
<a href="https://www.thehindu.com/search/">SEARCH
<img class="treanding" src="https://www.thehindu.com/theme/images/th-online/search-gray-icon.svg" alt="Icon" title="Icon" /></a></li>
</ol>
</div>
</div><div class="dropdown" role><div class="row navmenu-container xs-reverse-dropdown"><div class="col-xl-8 col-lg-8 col-md-12"><div class="mani-menu"> <ul class="navbar-nav me-auto mb-lg-0" id="navbar_top_innermenu">
<li class="nav-item scroll-logo">
<a class="nav-link" aria-current="page" href="https://www.thehindu.com/">
<img class="lazy" data-src-template="https://www.thehindu.com/theme/images/th-online/h-circle-black-white-new.svg" alt="The Hindu Logo" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png">
</a>
</li>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/news/national/">
India
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/news/international/">
World
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/opinion/">
Opinion
</a>
<li class="nav-item ">
<a class="nav-link " href="https://www.thehindu.com/sport/">
Sports
</a>
<li class="nav-item ">
<a class="nav-link " href="https://epaper.thehindu.com/?utm_source=Hindu&amp;utm_medium=Menu&amp;utm_campaign=Header" target="_blank">
e-Paper
</a>
</ul>
</div> <div class="scroll-outer">
<ol class="breadcrumb">
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/business/budget/" class="secondary_menu_topic_1">
Budget 2024
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/data/" class="secondary_menu_topic_2">
Data
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/sci-tech/health/" class="secondary_menu_topic_3">
Health
</a>
</li>
<li class="breadcrumb-item ">
<a href="https://www.thehindu.com/opinion/editorial/" class="secondary_menu_topic_4">
Editorial
</a>
</li>
<li class="breadcrumb-item nonsubscriberonly sponsored housing">
<a href="https://housing.com/?utm_source=Hindudirect&amp;utm_medium=Affiliate&amp;utm_campaign=Hindudirect_Traffic" class="secondary_menu_topic_5" target="_blank">
<img src="https://www.thehindu.com/theme/images/th-online/housing.svg" alt="housing.com" class="nonsubscriberonly sponsored housing">
</a>
</li>
<li class="breadcrumb-item search-link">
<a href="https://www.thehindu.com/search/">SEARCH
<img class="treanding" src="https://www.thehindu.com/theme/images/th-online/search-gray-icon.svg" alt="Icon" title="Icon" /></a></li>
</ol>
</div>
<div class="fixed-menu">
<ul class="menu-list">
<li class>
<a href="https://www.thehindu.com/news/">
News
</a>
</li>
<li class>
<a href="https://www.thehindu.com/business/">
Business
</a>
</li>
<li class>
<a href="https://www.thehindu.com/entertainment/">
Entertainment
</a>
</li>
<li class>
<a href="https://www.thehindu.com/life-and-style/">
Life &amp; Style
</a>
</li>
<li class>
<a href="https://www.thehindu.com/society/">
Society
</a>
</li>
<li class>
<a href="https://www.thehindu.com/sci-tech/technology/">
Technology
</a>
</li>
<li class>
<a href="https://www.thehindu.com/videos/">
Videos
</a>
</li>
<li class>
<a href="https://www.thehindu.com/podcast/">
Podcast
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/">
Cities
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/states/">
States
</a>
</li>
<li class>
<a href="https://www.thehindu.com/sci-tech/science/">
Science
</a>
</li>
<li>
<a class="see-all">
<span class="text">Show More</span>
<span class="arrow"><img class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/show-more-arrow.svg"></span>
</a>
</li>
</ul>
<ul class="menu-list more">
<li class>
<a href="https://www.thehindu.com/news/cities/chennai/">
Chennai
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/Delhi/">
Delhi
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/bangalore/">
Bengaluru
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/Hyderabad/">
Hyderabad
</a>
</li>
<li class>
<a href="https://www.thehindu.com/entertainment/movies/">
Movies
</a>
</li>
<li class>
<a href="https://www.thehindu.com/food/">
Food
</a>
</li>
<li class>
<a href="https://www.thehindu.com/children/">
Children
</a>
</li>
<li class>
<a href="https://www.thehindu.com/data/">
Data
</a>
</li>
<li class>
<a href="https://www.thehindu.com/news/cities/Kochi/">
Kochi
</a>
</li>
<li class>
<a href="https://www.thehindu.com/books/">
Books
</a>
</li>
<li class="nonsubscriberonly sponsored">
<a href="https://www.thehindu.com/brandhub/">
Brandhub
</a>
</li>
<li class="nonsubscriberonly sponsored">
<a href="https://www.thehindu.com/coupons/" target="_blank">
Coupons
</a>
</li>
<li class="subscriberonly">
<a href="https://www.thehindu.com/education/">
Education
</a>
</li>
</ul>
</div>
</div><div class="col-xl-4 col-lg-4 col-md-12"><div class="dropdown-logo"><a href="https://www.thehindu.com/" class="logo"><img class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="Return to frontpage"></a></div><div class="btns menuuserdetect"><p class="btn-title">To enjoy additional benefits</p><a href="/subscription/freetrial/?utm_source=TheHindu&utm_medium=section&utm_campaign=FTbutton"><button type="button" class="btn btn-free-trial">FREE TRIAL<span class="slider"></span></button></a><a href="/subscription/gift/?tpcc=giftasubs" class="btn btn-gift-subscription"><span>GIFT a Subscription</span><img src="https://www.thehindu.com/theme/images/th-online/myaccount-gift-black-icon.svg" alt="Gift" title="Icon" /></a><a href="https://www.thehindu.com/subscription/"><button type="button" class="btn btn-subscribe">
Subscribe
</button></a><button type="button" class="btn btn-signup thgsignin">LOGIN</button><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account">
ACCOUNT
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a><a href="https://www.thehindu.com/myaccount/"><button type="button" class="btn btn-account with-premium">
PREMIUM
<img src="https://www.thehindu.com/theme/images/th-online/account-btn-icon-black.svg" /></button></a></div><script>
userIdentify.then(function() {
if(!isNonSubcribedUser()) {
	document.querySelector(".btn-title").innerText ="Make most of your subscription";
}});
</script><div class="menu-todays-paper hide-mobile"></div></div></div><div class="row align-items-end navmenu-container pb-2 pt-2"><div class="menu-todays-paper hide-system"></div><div class="col-md-12"><div class="header-link"><a class="showcase" href="https://www.thehindu.com/showcase/">Showcase<span class="slider"></span></a><a class="newsletter" href="https://www.thehindu.com/newsletter-subscription/?utm_source=site_menu&utm_medium=website&utm_campaign=newsletter_signup">Subscribe to Newsletters<span class="slider"></span></a><a class="paper" href="https://crossword.thehindu.com/?utm_source=thehindu&utm_medium=mainmenu">Crossword+<span class="slider"></span></a></div><p class="connect-us">CONNECT WITH US</p><ul class="social-icons"><li><a href="https://whatsapp.com/channel/0029VaAvwQJ90x34WZ6FDg36" target="_blank" rel="nofollow" title="WhatsApp"><img alt="Whatsapp" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/whatsapp-header-icon.svg"></a></li><li><a href="https://twitter.com/The_Hindu" target="_blank" rel="nofollow" title="Twitter"><img alt="Twitter" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/twitter-x.svg"></a></li><li><a href="https://www.facebook.com/thehindu" target="_blank" rel="nofollow" title="Facebook"><img alt="Facebook" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/fb-icon-new.svg"></a></li><li><a href="https://www.instagram.com/the_hindu/?ref=badge" target="_blank" rel="nofollow" title="Instagram"><img alt="Instagram" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/insta-icon-new.svg"></a></li><li><a href="https://www.linkedin.com/school/the-hindu/" target="_blank" rel="nofollow" title="Linkedin"><img alt="Linkedin" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/in-icon-new.svg"></a></li><li><a href="https://www.youtube.com/user/The1878Hindu" target="_blank" rel="nofollow" title="Youtube"><img alt="Youtube" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/youtube-icon-new.svg"></a></li><li><a href="https://open.spotify.com/show/5yESTCj0iikA81EP3uXkQC" target="_blank" rel="nofollow" title="Spotify"><img alt="Spotify" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/spotify-icon.svg"></a></li><li><a href="https://t.me/THnewsupdates" target="_blank" rel="nofollow" title="Telegram"><img alt="Telegram" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/telegram-icon.svg"></a></li></ul></div></div></div></header><div class="header-end"></div><div id="artmeterpvcr"></div><script>
	tp = window["tp"] || [];
	tp.push(['init', function () {
		tp.pianoId.init({
		loggedIn: function (data) {
		thgloggedIn(data)
		},
		loggedOut: function () {
		location.reload();
		}
		});
	}
	]);
	function thgloggedIn(data) {
		if(document.getElementsByTagName("header").length > 0) {
			document.getElementsByTagName("header")[0].classList.remove("logout");
			document.getElementsByTagName("header")[0].classList.add("login");
		}
	}
	function thgLogout() {
	typeof __thg_event != "undefined" ?  __thg_event.triggerLogOut(tp.pianoId.getUser()): null;
	   tp.push(["init", function () {
	        tp = window.tp || [];
	        tp.pianoId.logout()
	        location.reload();
	   }]);
    }
userIdentify.then(function() {
	var list = document.querySelectorAll(".menuuserdetect");
		for (var i = 0; i < list.length; ++i) {
			list[i].style.display = "block" ;
		}
		if(isNonSubcribedUser()){
			var housing = document.querySelectorAll(".housing-img");
			for (var j = 0; j < housing.length; ++j) {
				housing[j].style.display = "inline-block" ;
			}
		}
		
});
</script><div id="subscriber-top-billboard"></div><section class="mb-0 mt-0"><div class="container"><div class="d-none d-sm-block d-lg-block d-xl-block"><div id="div-gpt-ad-1674804175530-0" class="dfp-ad mastheAdTop " style="min-width: 970px; min-height: 50px;margin-bottom:0px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1674804175530-0'); });
    }});
</script></div></div><div class="d-block d-sm-none "><div id="div-gpt-ad-1674803841262-0" class="dfp-ad mastheAdTop " style="min-width: 320px; min-height: 50px; margin-bottom:0px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1674803841262-0'); });
    }});
</script></div></div><div class="d-none d-sm-block d-lg-block d-xl-block"><div id="div-gpt-ad-1661840335787-0" class="dfp-ad flexdfpad " style="min-height:280px; margin-bottom:45px"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1661840335787-0'); });
    }});
</script></div></div><div class="d-block d-sm-none "><div id="div-gpt-ad-1661843222786-0" class="dfp-ad flexdfpad " style="min-height:280px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1661843222786-0'); });
    }});
</script></div></div><div class="d-none d-sm-block d-lg-block d-xl-block"></div><div class="d-block d-sm-none "></div></div></section><div class="flooting-ad"><div id="sectiondivsticky" class="dfp-ad  " style="min-height:50px;margin-bottom:15px;margin-top: 0;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('sectiondivsticky'); });
    }});
</script></div></div><script type="text/javascript" data-cfasync="false">
	require(['jquery'], function($) {fetch(`https://www.thehindu.com/getapplink?ref=${encodeURIComponent("https://www.thehindu.com/hindi/editorial/")}`).then((response) => {
				if(response.ok) {
					return response.json();
				} 
			}).then((res) => {
				if(typeof res.shortLink != 'undefined'){
					$(".read-in-app a").attr("href", res.shortLink)
					$(".read-in-app a > span").show();
					var userAgent = navigator.userAgent || navigator.vendor || window.opera;    
					if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
					$(".read-in-app-floating-btn a > span").hide();
					}else{
					$(".read-in-app-floating-btn a").attr("href", res.shortLink)
					$(".read-in-app-floating-btn a > span").show();
					}
				}			
			});
	});
	function addnewclass(){
		require(['jquery'], function($) {	
			setTimeout(function(){
				$(".read-in-app").addClass("nohover")
				$(".read-in-app-floating-btn").addClass("nohover")
			}, 1000);
			
		});
	}
</script><script>
fetch("https://www.thehindu.com/fragment/todays-paper-img").then(function(response) {
	if(response.ok && (response.status >= 200 &&  response.status < 400)) {          
		return response.text();
	}
}).then(function(respone) {
	var tpimage = document.querySelectorAll(".menu-todays-paper")
	for (var j = 0; j < tpimage.length; ++j) {
		tpimage[j].innerHTML = respone;
	}
}).catch(function(error) {
});
		
</script><link rel="stylesheet" type="text/css" href="https://www.thehindu.com/theme/css/THRX/common-styles.min.css?ver=1706695315" /><link rel="stylesheet" type="text/css" href="https://www.thehindu.com/theme/css/THRX/section.min.css?ver=1706695316" /><section><div class="container"><div class="five-line-title "><h1>
Editorial
</h1><div class="five-line-spliter"><span><i></i></span></div></div> 
<div class="link-list-outer">
<button class="scroll-arrow-btn left"><img src="https://www.thehindu.com/theme/images/th-online/slider-rightarrow.svg" alt /></button>
<button class="scroll-arrow-btn right"><img src="https://www.thehindu.com/theme/images/th-online/slider-rightarrow.svg" alt /></button>
<ul class="link-list">
</ul>
</div>
<div class="row editorial-section equal-height"><div class=" col-xl-9 col-lg-8 col-md-12 col-sm-12 col-12 "><div class="row align-items-center "><div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12"><a href="https://www.thehindu.com/opinion/editorial/"><img class="editorial-logo" data-src-template="https://www.thehindu.com/theme/images/th-online/editorial-logo-New.png" src="https://www.thehindu.com/theme/images/th-online/editorial-logo-New.png" title="English"></a><div class="read-this-in splite-center mt-2"><span class="text">READ OUR EDITORIALS IN</span><ul class="lang-list"><li><a href="https://www.thehindu.com/tamil/editorial/"><img src="https://www.thehindu.com/theme/images/th-online/tamil-lang-icon-v2.svg" alt><span class="tool-tip">Tamil</span></a></li><li><a href="https://www.thehindu.com/hindi/editorial/"><img src="https://www.thehindu.com/theme/images/th-online/hindi-lang-icon-v3.svg" alt><span class="tool-tip">Hindi</span></a></li><li><a href="https://www.thehindu.com/malayalam/editorial/"><img src="https://www.thehindu.com/theme/images/th-online/malayalam-lang-icon-v2.svg" alt><span class="tool-tip">Malayalam</span></a></li><li><a href="https://www.thehindu.com/telugu/editorial/"><img src="https://www.thehindu.com/theme/images/th-online/telugu-lang-icon-v2.svg" alt><span class="tool-tip">Telugu</span></a></li><li><a href="https://www.thehindu.com/kannada/editorial/"><img src="https://www.thehindu.com/theme/images/th-online/kannada-lang-icon-v2.svg" alt><span class="tool-tip">Kannada</span></a></li><li><a href="https://www.thehindu.com/bengali/editorial/"><img src="https://www.thehindu.com/theme/images/th-online/bengali.svg" alt><span class="tool-tip">Bengali</span></a></li></ul></div></div><div class=" col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 "><div class="element wide-row-element"><h3 class="title"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindu-on-imran-khans-jail-sentences-and-pakistans-democracy/article67799274.ece"><strong>
विजेता और पराजित: पाकिस्तान का लोकतंत्र, इमरान खान और नवाज शरीफ
</strong></a></h3><div class="sub-text"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindu-on-imran-khans-jail-sentences-and-pakistans-democracy/article67799274.ece">पाकिस्तान में चुनाव सेना द्वारा लिखी गई पटकथा के मुताबिक होते हैं</a></div></div><div class="element wide-row-element no-border"><h3 class="title"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindu-on-the-australian-open-2024/article67799271.ece"><strong>
तीन पीढ़ियां: ऑस्ट्रेलियन ओपन 2024
</strong></a></h3><div class="sub-text"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindu-on-the-australian-open-2024/article67799271.ece">ऑस्ट्रेलियन ओपन में अलग-अलग जमाने के खिलाड़ियों को मिली जगह</a></div></div></div></div><div class="spliter"></div><div class="row equal-height sections"><div class=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 after-border-right tab-border "><div class="element"><h3 class="title"><a href="https://www.thehindu.com/hindi/editorial/economic-encomium-hindi-editorial-on-the-finance-ministrys-10-year-review-of-the-economy/article67795359.ece"><strong>
आर्थिक गुणगान: वित्त मंत्रालय का अर्थव्यवस्था का 10-वर्षीय लेखा-जोखा
</strong></a></h3><div class="sub-text"><a href="https://www.thehindu.com/hindi/editorial/economic-encomium-hindi-editorial-on-the-finance-ministrys-10-year-review-of-the-economy/article67795359.ece">एक चमकदार 10-वर्षीय रिपोर्ट कार्ड में अधूरे बचे कार्यों को पूरा करने में कोई कोताही नहीं बरती जानी चाहिए</a></div></div><div class="element"><h3 class="title"><a href="https://www.thehindu.com/hindi/editorial/vetting-for-vendetta-hindi-editorial-on-supreme-courts-suggestion/article67795356.ece"><strong>
प्रतिशोध के मामलों का छानबीनः सुप्रीम कोर्ट का सुझाव
</strong></a></h3><div class="sub-text"><a href="https://www.thehindu.com/hindi/editorial/vetting-for-vendetta-hindi-editorial-on-supreme-courts-suggestion/article67795356.ece">राजनीतिक मंशा से दर्ज मामलों की पहचान के लिए प्रणाली से मसले का पूरा हल नहीं </a></div></div></div><div class=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 after-border-right tab-border"><div class="element"><h3 class="title"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-nitish-kumar-and-his-recurrent-political-somersaults/article67791635.ece"><strong>
बदलते साझेदारः बिहार के मुख्यमंत्री नीतीश कुमार और उनकी बार-बार की राजनीतिक कलाबाजियां
</strong></a></h3><div class="sub-text"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-nitish-kumar-and-his-recurrent-political-somersaults/article67791635.ece">नीतीश कुमार का बार-बार पलटी मारना बिहार के मतदाताओं का अपमान</a></div></div><div class="element"><h3 class="title"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-england-win-against-india-in-hyderabad-and-windies-win-in-brisbane/article67791632.ece"><strong>
बेमिसाल टेस्ट मैच: हैदराबाद, ब्रिस्बेन और क्रिकेट के कुछ जादुई पल
</strong></a></h3><div class="sub-text"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-england-win-against-india-in-hyderabad-and-windies-win-in-brisbane/article67791632.ece">टेस्ट क्रिकेट में कौशल का बेहतर नजारा होता है, लेकिन इसमें रोमांच भी कुछ कम नहीं</a></div></div></div><div class=" col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12"><div class="element"><h3 class="title"><a href="https://www.thehindu.com/hindi/editorial/ceremony-and-substance-on-the-macron-visit-india-france-ties-hindi-editorial/article67788012.ece"><strong>
समारोह और सारतत्वः मैक्रों की भारत यात्रा
</strong></a></h3><div class="sub-text"><a href="https://www.thehindu.com/hindi/editorial/ceremony-and-substance-on-the-macron-visit-india-france-ties-hindi-editorial/article67788012.ece">प्रतीकात्मकता के प्रदर्शन में भारत व फ्रांस ने पुराने समझौतों को आधार बनाया</a></div></div><div class="element no-border"><h3 class="title"><a href="https://www.thehindu.com/hindi/editorial/momentous-ruling-on-israel-and-the-international-court-of-justice-order-hindi-editorial/article67788011.ece"><strong>
महत्वपूर्ण फैसलाः इजराइल और अंतर्राष्ट्रीय न्यायालय का आदेश
</strong></a></h3><div class="sub-text"><a href="https://www.thehindu.com/hindi/editorial/momentous-ruling-on-israel-and-the-international-court-of-justice-order-hindi-editorial/article67788011.ece">इजराइल को नरसंहार रोकने और गाजा में सहायता बढ़ाने से संबंधित आईसीजे के आदेश का पालन करना चाहिए</a></div></div></div></div></div><div class=" col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 after-border-left tab-border"><div class="d-none d-sm-block d-lg-block d-xl-block"><div id="secpagetopslot" class="dfp-ad  " style="min-height:250px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('secpagetopslot'); });
    }});
</script></div></div><div class="d-block d-sm-none "><div id="secpagetopslotmobile" class="dfp-ad flexdfpad " style="min-height:280px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('secpagetopslotmobile'); });
    }});
</script></div></div><div id="sectiondivtrend"></div></div></div></div></section><section><div class="container"><div class="spliter"></div><div class="row"><div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 "><div class="d-block d-sm-none "><div id="div-gpt-ad-1661843520685-0" class="dfp-ad flexdfpad " style="min-height:280px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1661843520685-0'); });
    }});
</script></div></div><div class="d-none d-sm-block d-lg-block d-xl-block"><div id="div-gpt-ad-1661842879870-0" class="dfp-ad flexdfpad " style="min-height:600px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1661842879870-0'); });
    }});
</script></div></div></div><div class="col-xl-6 col-lg-4 col-md-12 col-sm-12 col-12 result"><h2 class="featured-title">More stories from Editorial</h2><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-india-bloc-staring-at-a-crisis-after-tmc-aap-jdu-exit/article67782185.ece">
विपक्षी गठबंधनः संकट में ‘इंडिया’ समूह 
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-the-endless-war-between-russia-and-ukraine/article67782181.ece">
अंतहीन युद्ध: रूस-यूक्रेन संघर्ष
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/exchange-of-opportunity-on-science-the-vaibhav-and-vajra-programmes-hindi-editorial/article67779132.ece">
अवसरों का आदान-प्रदानः विज्ञान, वैभव और वज्र कार्यक्रम
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/the-last-mile-on-the-anganwadi-workers-strike-in-andhra-pradesh-hindi-editorial/article67779130.ece">
आखिरी छोर: आंध्र प्रदेश में आंगनवाड़ी कार्यकर्ताओं की हड़ताल
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-status-quo-on-continuing-hostilities-in-manipur/article67775156.ece">
खतरनाक यथास्थितिः मणिपुर में जारी शत्रुता
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-india-maldives-ties/article67775152.ece">
रिश्तों में उथल-पुथल: भारत-मालदीव संबंध
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/narrowing-field-on-2024-us-presidential-elections-republican-primaries-race-hindi-editorial/article67771388.ece">
तीखी प्रतिद्वंद्विता: 2024 के अमेरिकी राष्ट्रपति चुनाव के लिए रिपब्लिकन प्राइमरी की दौड़
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/limits-and-borders-on-the-territorial-jurisdiction-of-the-border-security-force-hindi-editorial/article67771386.ece">
सरहद की हदें: सीमा सुरक्षा बल के क्षेत्राधिकार का सवाल
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/ram-temple-inauguration-from-fear-to-hope-hindi-editorial/article67767755.ece">
डर की जगह उम्मीद कायम होः राम मन्दिर प्राण प्रतिष्ठा
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/north-korea-and-south-korea-spiking-tensions-hindi-editorial/article67767749.ece">
तनाव में इजाफा : कोरियाई प्रायद्वीप में शांति का सवाल
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/hindi-editorial-on-the-state-wielding-the-fcra-as-a-weapon/article67766067.ece">
लोकतंत्र का पुनर्पतनः सरकार द्वारा एफसीआरए का हथियार के रुप में इस्तेमाल
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/hindi-editorial-on-the-new-space-race/article67766046.ece">
एशियाई उन्नति: अंतरिक्ष में नई होड़
</a></h3><div class="by-line"><div class="author-name"></div></div></div><div class="element row-element no-img"><h3 class="title big"><a href="https://www.thehindu.com/hindi/editorial/the-hindu-editorial-in-hindi-on-imd-and-weather-analyses-having-contemporary-relevance/article67758725.ece">
बदलाव की तैयारी: आईएमडी और मौसम विश्लेषण की समकालिक प्रासंगिकता
</a></h3><div class="by-line"><div class="author-name"></div></div></div><a class="small-link show-more" data-show-more="fragment/showmore?page=2&variant=one">SHOW MORE<span class="slider"></span></a><div class="th-loader" style="display:none;"><div class="center-load"></div><div class="center-icon"><img class="lazy" data-src-template="https://www.thehindu.com/theme/images/th-online/h-circle-black-white-new.svg" alt="The Hindu Logo" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" /></div></div></div><div class="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-12 "><div class="d-none d-sm-block d-lg-block d-xl-block"><div id="div-gpt-ad-1661842588273-0" class="dfp-ad  " style="min-height:250px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1661842588273-0'); });
    }});
</script></div></div><div class="d-block d-sm-none "><div id="div-gpt-ad-1661843664158-0" class="dfp-ad flexdfpad " style="min-height:280px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1661843664158-0'); });
    }});
</script></div></div><div id="latest_news_module"><script>
        var latest_news_moduleloaded = false;
            window.addEventListener('scroll', function() {
        if (!latest_news_moduleloaded) {
            latest_news_moduleloaded = true; 
            latest_news_module_Url = "fragment/latestnews";
            fetch("https://www.thehindu.com/"+latest_news_module_Url).then(function(response) {
                if(response.ok && (response.status >= 200 &&  response.status < 400)) {     
                    latest_news_moduleloaded = true;     
                    return response.text();
                }
                else{
                    latest_news_moduleloaded = false;
                }
            }).then(function(respone) {
                document.querySelector("#latest_news_module").innerHTML = respone;
                $('.timePublished[data-published]').each(function() {
                    var time = $(this).data('published');
                    if (time) {
                        $(this).html(timeSince(new Date(time)));
                    } 
                    });
            }).catch(function(error) {
                latest_news_moduleloaded = false;
            });
            
            }
            });
    </script></div><div id="todayspaper_module"><script>
        var todayspaper_moduleloaded = false;
            window.addEventListener('scroll', function() {
        if (!todayspaper_moduleloaded) {
            todayspaper_moduleloaded = true; 
            todayspaper_module_Url = "fragment/todays-paper";fetch("https://www.thehindu.com/"+todayspaper_module_Url+"").then(function(response) {
                if(response.ok && (response.status >= 200 &&  response.status < 400)) {     
                    todayspaper_moduleloaded = true;     
                    return response.text();
                }
                else{
                    todayspaper_moduleloaded = false;
                }
            }).then(function(respone) {
                document.querySelector("#todayspaper_module").innerHTML = respone;
                try{
                    if(document.querySelector(".ad-todays-paper img") != null){
                        document.querySelector(".ad-todays-paper img").src = document.querySelector(".today-paper-img img").src;
                    }
                }
                catch(e){
                }
                $('.timePublished[data-published]').each(function() {
                    var time = $(this).data('published');
                    if (time) {
                        $(this).html(timeSince(new Date(time)));
                    } 
                    });
            }).catch(function(error) {
                todayspaper_moduleloaded = false;
            });
            
            }
            });
    </script></div></div></div></div></section><div class="d-none d-sm-block d-lg-block d-xl-block"><div id="div-gpt-ad-1661840558578-0" class="dfp-ad flexdfpad " style="min-height:250px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("large") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1661840558578-0'); });
    }});
</script></div></div><script>
    userIdentify.then(function () {
if (!isNonSubcribedUser()) {
var todaysBriefUrl = "fragment/todaysbrief"
var hours = new Date().getHours();
var minutes = new Date().getMinutes();
var urlParams = "";
if (hours >= 20 || hours <= 8) {
urlParams = "?brief=evening"
}
else if (hours >= 14) {
urlParams = "?brief=noon"
} 

fetch("https://www.thehindu.com/" + todaysBriefUrl + urlParams).then(function (response) {
if (response.ok && (response.status >= 200 && response.status < 400)) {
return response.text();
}
}).then(function (respone) {
if(DevIdf.isMobile){
    document.querySelector("#secpagetopslotmobile").innerHTML = respone;
}else{
    document.querySelector("#secpagetopslot").innerHTML = respone;
}

}).catch(function (error) {});
}
});
</script><section><div class="container"><div class="d-none d-sm-block d-lg-block d-xl-block"></div><div class="d-block d-sm-none "><div id="div-gpt-ad-1661843816772-0" class="dfp-ad flexdfpad " style="min-height:280px;"><script>
userIdentify.then(function() {
if(isDeviceEnabled("small") &&  isNonSubcribedUser()) {            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1661843816772-0'); });
    }});
</script></div></div><div id="sectiondivicymi"></div></div></section><script type="text/javascript">
require(["jquery"], function ($) {
	$(this).scroll(function() {
		if ($(this).scrollTop() > 300) {
			if($( window ).width() > 1200){
				$("#left-bottom-sticky-container").css("bottom", "30px");
				return 0;
			}
			if($( window ).width() > 1000 && $( window ).width() < 1200){
				$("#left-bottom-sticky-container").css("bottom", "12px");
				return 0;
			}
			if($( window ).width() > 600 && $( window ).width() < 1000){
				$("#left-bottom-sticky-container").css("bottom", "0px");
				return 0;
			}
			if($( window ).width() <= 600){
				if($(".flooting-ad").css("display") == "block"){
					
					$("#left-bottom-sticky-container").css("bottom", "95px");
					return 0;
				}
				$("#left-bottom-sticky-container").css("bottom", "0px");
				return 0;
			}
			$("#left-bottom-sticky-container").css("bottom", "30px");
		}
		else{
			$("#left-bottom-sticky-container").css("bottom", "-100%");
		}

	});
});
</script><div id="left-bottom-sticky-container"></div><footer><div class="container"><div class="row footer-logo"><div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12"><a href="https://www.thehindu.com/"><img class="lazy img-fluid mobile-logo" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/thehindu-logo.svg" alt="Return to frontpage"></a></div><div class="col-xl-6 col-md-6 col-sm-6 col-xs-12 col-12"><div class="app-icon"><a href="https://play.google.com/store/apps/details?id=com.mobstac.thehindu" title="Google Play"><img class="lazy" alt="Google Play" data-src-template="https://www.thehindu.com/theme/images/th-online/google-playstore-icon.svg"></a><a href="https://bit.ly/thiphone" title="Apple Store"><img class="lazy" alt="Apple Store" data-src-template="https://www.thehindu.com/theme/images/th-online//apple-store-icon.svg"></a></div></div></div><div class="row footer-menu"><div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 col-12">
<ul class="footer-list">
<li class="title">
<h5 class>The Hindu</h5>
<ul class="footer-sub-list">
<li>
<a class="about us-menu" href="https://www.thehindu.com/aboutus/">
About Us
</a>
</li>
<li>
<a class="code of editorial values-menu" href="https://www.thehindu.com/values/">
Code of Editorial Values
</a>
</li>
<li>
<a class="news archive-menu" href="https://www.thehindu.com/archive/">
News Archive
</a>
</li>
<li>
<a class="sitemap-menu" href="https://www.thehindu.com/sitemap/">
Sitemap
</a>
</li>
<li>
<a class="print subscription-menu" href="http://www.thehindugroup.in/subscribe/">
Print Subscription
</a>
</li>
<li>
<a class="digital subscription-menu" href="https://www.thehindu.com/subscription/?utm_source=footer&amp;utm_medium=section&amp;utm_caign=website">
Digital Subscription
</a>
</li>
<li>
<a class="subscribe to newsletters-menu" href="https://www.thehindu.com/newsletter-subscription/">
Subscribe to Newsletters
</a>
</li>
<li>
<a class="rss feeds-menu" href="https://www.thehindu.com/rssfeeds/">
Rss Feeds
</a>
</li>
<li>
<a class="readers editor-terms of reference-menu" href="https://www.thehindu.com/readers-editor-terms/">
Readers Editor-Terms of Reference
</a>
</li>
<li>
<a class="authors &amp; contributors-menu" href="https://www.thehindu.com/profile/">
Authors &amp; Contributors
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class>Contact us</h5>
<ul class="footer-sub-list">
<li>
<a class="contact us-menu" href="https://www.thehindu.com/contacts/">
Contact Us
</a>
</li>
<li>
<a class="social media-menu" href="https://www.thehindu.com/social/">
Social Media
</a>
</li>
<li>
<a class="advertise with us-menu" href="https://www.thehindu.com/advertise-with-us/">
Advertise With Us
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class>Group News Sites</h5>
<ul class="footer-sub-list">
<li>
<a class="business line-menu" href="https://www.thehindubusinessline.com/" target="_blank">
Business Line
</a>
</li>
<li>
<a class="bl on campus-menu" href="https://bloncampus.thehindubusinessline.com/" target="_blank">
BL on Campus
</a>
</li>
<li>
<a class="sportstar-menu" href="https://sportstar.thehindu.com/" target="_blank">
Sportstar
</a>
</li>
<li>
<a class="frontline-menu" href="https://frontline.thehindu.com/" target="_blank">
Frontline
</a>
</li>
<li>
<a class="இந்து தமிழ் திசை-menu" href="https://www.hindutamil.in/" target="_blank">
இந்து தமிழ் திசை
</a>
</li>
<li>
<a class="the hindu centre-menu" href="https://www.thehinducentre.com/" target="_blank">
The Hindu Centre
</a>
</li>
<li>
<a class="young world club-menu" href="https://ywc.thehindu.com/" target="_blank">
Young World Club
</a>
</li>
<li>
<a class="the hindu epaper-menu" href="https://epaper.thehindu.com/?utm_source=Hindu&amp;utm_medium=Menu&amp;utm_campaign=Header" target="_blank">
The Hindu ePaper
</a>
</li>
<li>
<a class="business line epaper-menu" href="https://epaper.thehindubusinessline.com/login" target="_blank">
Business Line ePaper
</a>
</li>
<li>
<a class="crossword + free games-menu" href="https://crossword.thehindu.com/?utm_source=thehindu&amp;utm_medium=mainmenu" target="_blank">
Crossword + Free Games
</a>
</li>
</ul>
</li>
</ul>
</div>
<div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 col-12">
<ul class="footer-list">
<li class="title">
<h5 class>Other Products</h5>
<ul class="footer-sub-list">
<li>
<a class="roofandfloor-menu" href="https://roofandfloor.thehindu.com/?utm_source=thehindu&amp;amp;utm_medium=referral&amp;amp;utm_campaign=Internal-Marketing" target="_blank">
RoofandFloor
</a>
</li>
<li>
<a class="step-menu" href="https://step.thehindu.com/" target="_blank">
STEP
</a>
</li>
<li>
<a class="images-menu" href="https://thehinduimages.com/" target="_blank">
Images
</a>
</li>
<li>
<a class="classifieds - print-menu" href="http://www.thehinduclassifieds.in/" target="_blank">
Classifieds - Print
</a>
</li>
<li>
<a class="bookstore &amp; special publications-menu" href="https://publications.thehindugroup.com/bookstore/" target="_blank">
Bookstore &amp; Special Publications
</a>
</li>
</ul>
</li>
<li class="title mt-4">
<h5 class>Popular Sections</h5>
<ul class="footer-sub-list">
<li>
<a class="elections-menu" href="https://www.thehindu.com/elections/">
Elections
</a>
</li>
<li>
<a class="israel hamas war live updates-menu" href="https://www.thehindu.com/news/international/israel-hamas-war-live-updates-truce-ends/article67597057.ece">
Israel Hamas War Live Updates
</a>
</li>
<li>
<a class="israeli–palestinian conflict 2023-menu" href="https://www.thehindu.com/topic/israel-palestine-conflict/">
Israeli–Palestinian conflict 2023
</a>
</li>
<li>
<a class="latest news-menu" href="https://www.thehindu.com/">
Latest News
</a>
</li>
<li>
<a class="national news-menu" href="https://www.thehindu.com/news/national/">
National News
</a>
</li>
<li>
<a class="international news-menu" href="https://www.thehindu.com/news/international/">
International News
</a>
</li>
<li>
<a class="videos-menu" href="https://www.thehindu.com/videos/">
Videos
</a>
</li>
<li>
<a class="life &amp; style-menu" href="https://www.thehindu.com/life-and-style/">
Life &amp; Style
</a>
</li>
<li>
<a class="food-menu" href="https://www.thehindu.com/food/">
Food
</a>
</li>
<li>
<a class="podcast-menu" href="https://www.thehindu.com/podcast/">
Podcast
</a>
</li>
<li>
<a class="showcase-menu" href="https://www.thehindu.com/showcase/">
Showcase
</a>
</li>
</ul>
</li>
<li class="title mt-4">
<h5 class><a href="https://www.thehindu.com/opinion/">
Opinion
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/opinion/editorial/">
Editorial
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/columns/">
Columns
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/op-ed/">
Comment
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/cartoon/">
Cartoon
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/letters/">
Letters
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/interview/">
Interview
</a>
</li>
<li>
<a href="https://www.thehindu.com/opinion/lead/">
Lead
</a>
</li>
</ul>
</ul>
</div>
<div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 col-12">
<ul class="footer-list">
<li class="title">
<h5 class><a href="https://www.thehindu.com/business/">
Business
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/business/agri-business/">
Agri-Business
</a>
</li>
<li>
<a href="https://www.thehindu.com/business/Industry/">
Industry
</a>
</li>
<li>
<a href="https://www.thehindu.com/business/Economy/">
Economy
</a>
</li>
<li>
<a href="https://www.thehindu.com/business/markets/">
Markets
</a>
</li>
<li>
<a href="https://www.thehindu.com/business/budget/">
Budget
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class><a href="https://www.thehindu.com/sport/">
Sport
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/sport/cricket/">
Cricket
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/football/">
Football
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/hockey/">
Hockey
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/tennis/">
Tennis
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/athletics/">
Athletics
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/motorsport/">
Motorsport
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/races/">
Races
</a>
</li>
<li>
<a href="https://www.thehindu.com/sport/other-sports/">
Other Sports
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class><a href="https://www.thehindu.com/sci-tech/">
Sci-Tech
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/sci-tech/science/">
Science
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/technology/">
Technology
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/health/">
Health
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/agriculture/">
Agriculture
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/energy-and-environment/">
Environment
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/technology/gadgets/">
Gadgets
</a>
</li>
<li>
<a href="https://www.thehindu.com/sci-tech/technology/internet/">
Internet
</a>
</li>
</ul>
</li>
</ul>
</div>
<div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 col-12">
<ul class="footer-list">
<li class="title">
<h5 class><a href="https://www.thehindu.com/news/states/">
States
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/news/national/andhra-pradesh/">
Andhra Pradesh
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/karnataka/">
Karnataka
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/kerala/">
Kerala
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/tamil-nadu/">
Tamil Nadu
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/telangana/">
Telangana
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/national/other-states/">
Other States
</a>
</li>
</ul>
</li>
<li class="title">
<h5 class><a href="https://www.thehindu.com/news/cities/">
Cities
</a></h5>
<ul class="footer-sub-list">
<li>
<a href="https://www.thehindu.com/news/cities/bangalore/">
Bengaluru
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/chennai/">
Chennai
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Coimbatore/">
Coimbatore
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Delhi/">
Delhi
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Hyderabad/">
Hyderabad
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Kochi/">
Kochi
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/kolkata/">
Kolkata
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/kozhikode/">
Kozhikode
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Madurai/">
Madurai
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Mangalore/">
Mangaluru
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/mumbai/">
Mumbai
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/puducherry/">
Puducherry
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Thiruvananthapuram/">
Thiruvananthapuram
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Tiruchirapalli/">
Tiruchirapalli
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Vijayawada/">
Vijayawada
</a>
</li>
<li>
<a href="https://www.thehindu.com/news/cities/Visakhapatnam/">
Visakhapatnam
</a>
</li>
</ul>
</li>
</ul>
</div>
<div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 col-12 mobile-footer-pad"><ul class="footer-list"><li class="title"><h5 class="footer-top-border">Trending on The Hindu</h5><ul class="footer-sub-list with-graph-icon"><li><a href="https://www.thehindu.com/business/budget/budget-2024-live-updates-nirmala-sitharaman-presents-interim-budget-february-1/article67796321.ece">
Budget 2024 LIVE
</a></li><li><a href="https://www.thehindu.com/news/">
Live News
</a></li><li><a href="https://www.thehindu.com/business/Industry/rbi-stops-paytm-payments-bank-from-accepting-deposits-after-feb-29/article67796432.ece">
Paytm and FASTag Curbs
</a></li><li><a href="https://www.thehindu.com/news/national/being-tortured-to-accept-association-with-a-political-party-five-parliament-security-breach-case-accused-tell-court/article67796241.ece">
Parliament breach accused torture
</a></li><li><a href="https://www.thehindu.com/news/cities/Delhi/set-to-be-sworn-in-as-rs-mp-swati-maliwal-says-not-scared-to-question-govt-or-go-to-jail-for-it/article67795410.ece">
Swati Maliwal News
</a></li><li><a href="https://www.thehindu.com/news/national/ed-arrests-hemant-soren-after-he-resigns-as-jharkhand-chief-minister-champai-soren-named-new-leader/article67797634.ece">
ED arrestes Hemant Soren
</a></li><li><a href="https://www.thehindu.com/latest-news/">
Latest News
</a></li><li><a href="https://www.thehindu.com/news/national/tamil-nadu/actor-m-ilavarasu-tenders-unconditional-apology-before-madras-high-court-for-false-accusation-against-chennai-police/article67792068.ece">
Actor M Ilavarasu false accusations
</a></li><li><a href="https://www.thehindu.com/news/international/">
International News
</a></li><li><a href="https://www.thehindu.com/news/national/tamil-nadu/senthilbalaji-bail-plea-how-can-he-continue-as-minister-asks-justice-anand-venkatesh-of-madras-high-court/article67792294.ece">
Senthilbalaji bail plea
</a></li></ul></li></ul></div><div class="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-12 col-12 mobile-footer-pad"><ul class="footer-list"><li class="title"><h5 class="footer-top-border">Trending on Group sites</h5><ul class="footer-sub-list with-graph-icon"><li><a href="https://www.thehindubusinessline.com/economy/budget/">
Budget 2024
</a></li><li><a href="https://www.thehindubusinessline.com/stocks/state-bank-of-india/">
SBI Share Price
</a></li><li><a href="https://www.thehindubusinessline.com/stocks/reliance-industries-ltd/">
Reliance Share Price
</a></li><li><a href="https://www.thehindubusinessline.com/markets/stock-markets/">
Stock Market Today
</a></li><li><a href="https://www.thehindubusinessline.com/gold-rate-today/Chennai/">
Gold Rate Today
</a></li><li><a href="https://www.thehindubusinessline.com/silver-rate-today/">
Silver Rate Today
</a></li><li><a href="https://sportstar.thehindu.com/cricket/">
Cricket News
</a></li><li><a href="https://sportstar.thehindu.com/football/">
Football News
</a></li><li><a href="https://frontline.thehindu.com/politics/">
Politics News
</a></li><li><a href="https://frontline.thehindu.com/current-issue/">
Frontline Current Issue
</a></li></ul></li></ul></div></div><div class="row pb-5"><div class="col-xl-12 col-md-12  col-sm-12 col-xs-12 col-12"><ul class="footer-social-icon"><li><a href="https://whatsapp.com/channel/0029VaAvwQJ90x34WZ6FDg36" target="_blank" rel="nofollow" title="WhatsApp"><img alt="Whatsapp" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/whatsapp-header-icon.svg"></a></li><li><a href="https://twitter.com/The_Hindu" target="_blank" rel="nofollow" title="Twitter"><img class="lazy" alt="Twitter" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/twitter-x.svg"></a></li><li><a href="https://www.facebook.com/thehindu" target="_blank" rel="nofollow" title="Facebook"><img class="lazy" alt="Facebook" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-fb.svg"></a></li><li><a href="https://www.instagram.com/the_hindu/?ref=badge" target="_blank" rel="nofollow" title="Instagram"><img alt="Instagram" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-insta.svg"></a></li><li><a href="https://www.linkedin.com/school/the-hindu/" target="_blank" rel="nofollow" title="Linkedin"><img alt="Linkedin" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-linkedin.svg"></a></li><li><a href="https://www.youtube.com/user/The1878Hindu" target="_blank" rel="nofollow" title="Youtube"><img alt="Youtube" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-youtube.svg"></a></li><li><a href="https://open.spotify.com/show/5yESTCj0iikA81EP3uXkQC" target="_blank" rel="nofollow" title="Spotify"><img alt="Spotify" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/footer-icon-drizzle.svg"></a></li><li><a href="https://t.me/THnewsupdates" target="_blank" rel="nofollow" title="Telegram"><img alt="Telegram" class="lazy" src="https://www.thehindu.com/theme/images/th-online/1x1_spacer.png" data-src-template="https://www.thehindu.com/theme/images/th-online/telegram-icon.svg"></a></li></ul><ul class="link-list">
<li>
<a class="terms of use-menu" href="https://www.thehindugroup.com/termsofuse.html" target="_blank">
Terms of Use
</a>
</li>
<li>
<a class="privacy policy-menu" href="https://www.thehindugroup.com/privacy.html" target="_blank">
Privacy Policy
</a>
</li>
<li id="teconsent"> </li>
</ul><div class="copyrights"><a>Copyright© 2024, THG PUBLISHING PVT LTD. or its affiliated companies. All rights reserved.</a></div><div class="back-to-top"><p>BACK TO TOP<img alt="Back to Top" class="lazy" data-src-template="https://www.thehindu.com/theme/images/th-online/back-to-top-arrow.svg"></p></div></div></div></div><div id="consent_blackbar"></div></footer><div class="footer-end"></div><script>
  loadCSS("https://www.thehindu.com/theme/css/font-awesome.min.css?ver=1706695140");
</script><script>
    function fragmentlazyload(selector){
      var fragmentcontent = [];
     if(typeof selector !== 'undefined' && selector){
      fragmentcontent = [].slice.call(document.querySelectorAll(selector +" .fragmentcontent.lazy"));
     }
     else{
      fragmentcontent = [].slice.call(document.querySelectorAll(".fragmentcontent.lazy"))
     }
   if ("IntersectionObserver" in window) {
    let optionsItersect = {
  rootMargin: '-400px',
  threshold: 0
}
     let lazyContentObserver = new IntersectionObserver(function(entries, optionsItersect) {
       entries.forEach(function(entry) {
         if (entry.isIntersecting) {
           let lazycontent = entry.target;

           let fragmentUrl =  lazycontent.dataset.fragmentUrl;
           
           fetch(fragmentUrl).then(function(response) {
            if(response.ok && (response.status >= 200 &&  response.status < 400)) {        
                return response.text();
            }
        }).then(function(resp) {
           if(typeof resp !="undefined"){
            
            try{
              $(lazycontent).html(resp);
            }
            catch(e){
              lazycontent.innerHTML = resp;
            }
            
            delete lazycontent.dataset.fragmentUrl;
            imglazyload("#"+lazycontent.id); 
            lazycontent.classList.remove("lazy");
            lazyContentObserver.unobserve(lazycontent);
           }

           
        }).catch(function(error) {
          console.error(error)
        });
           
         }
       });
     });
 
     fragmentcontent.forEach(function(content) {
      lazyContentObserver.observe(content);
     });
   } else {
     fragmentcontent.forEach(function(lazycontent) {
        let fragmentUrl =  lazycontent.dataset.fragmentUrl;
           
        fetch(fragmentUrl).then(function(response) {
         if(response.ok && (response.status >= 200 &&  response.status < 400)) {        
             return response.text();
         }
          }).then(function(resp) {
              if(typeof resp !="undefined"){
              lazycontent.innerHTML = resp;
              delete lazycontent.dataset.fragmentUrl;
              imglazyload("#"+lazycontent.id); 
              lazycontent.classList.remove("lazy");
              }

              
          }).catch(function(error) {
            console.error(error)
          });
      });
   }
   }document.addEventListener("DOMContentLoaded", function (event) {
    imglazyload();
    fragmentlazyload();});</script><script>
    const _disallow_params = ["gaa_at", "gaa_n", "gaa_ts", "gaa_sig"]
    tp.push(['init', function() {
      const current_url = new URL(window.location.href)
      const matched_params = _disallow_params.filter(el => current_url.searchParams.has(el))

      if (!tp.pianoId.isUserValid() && matched_params.length == 0){
                loadScript("https://accounts.google.com/gsi/client")
              } 
    }])
  </script><div id="g_id_onload" data-client_id="853251516072-1eudfpp9hhjtjp31fpm8g9fus3ig0ec3.apps.googleusercontent.com" data-callback="handleGoogleSignIn" data-skip_prompt_cookie="__utp" data-ux_mode="popup" data-moment_callback="logMomentNotification" data-auto_prompt="false"></div><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Faustina:wght@300;400;500;600;700;800&display=swap" crossorigin="anonymous"><style>
	#gsi_overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
	}
	#oneTapOverlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9998;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.9);
	}
	.oneTapOverlay-inner {
		margin-right: 420px;
		margin-left: auto;
		width: calc(100% - 420px);
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-top: 80px;
	}
	.oTO-Text-Logo img {
		width: 59px;
		height: 59px;
	}
	.oneTapOverlay-text {
		display: flex;
		flex-direction: row;
		margin-top: 57px;
		max-width: 550px;
	}
	.oTO-Text {
		padding: 0 16px;
		color: #FFFFFF;
	}
	.oTO-Text-title {
		font-size: 20px;
		line-height: 28px;
		font-family: "Merriweather", serif;
		font-weight: bold;
		margin: 15px 0;
	}
	.oTO-Text-subtitle {
		font-size: 20px;
		margin: 16px 0 8px;
		font-family: "Merriweather", serif;
		font-weight: bold;
	}
	.oTO-Text-points {
		padding: 0;
		position: absolute;
	}
	.oTO-Text-points li {
		font-size: 16px;
		line-height: 22px;
		margin-bottom: 8px;
		font-family: "Faustina", serif;
		list-style-type: none;
		position: relative;
		display: flex;
		align-items: flex-start;
	}
	.oTO-Text-points li::before {
		content: '';
		display: block;
		padding: 8px 7px;
		background: url('https://www.thehindu.com/theme/images/google-signin/arrow-819.svg') no-repeat center center;
		background-size: contain;
		margin-right: 8px;
		margin-top: 6px;
	}
	.oneTapOverlay-arrow img {
		max-width: 100%;
	}
	@media screen and(max-width: 1250px) {
		.oneTapOverlay-arrow {
			display: none
		}
	}
	@media screen and(max-width: 820px) {
		.oTO-Text-title {
			font-size: 24px;
		}
		.oTO-Text-subtitle {
			font-size: 18px;
		}
		.oTO-Text-points li {
			font-size: 16px;
		}
		.oneTapOverlay-text {
			flex-direction: column;
			align-items: center;
		}
	}

	@media screen and(max-height: 500px) {
		.oneTapOverlay-text {
			margin-top: 0;
		}
		.oTO-Text-title {
			font-size: 24px;
		}
		.oTO-Text-subtitle {
			font-size: 18px;
		}
		.oTO-Text-points li {
			font-size: 16px;
		}
	}

	@media(max-width: 767px) {
		#gsi_overlay {
			z-index: 9999 !important;
		}
		.oTO-Text-points {
			display: none !important;
		}
	}

	body.headersticky iframe#credential_picker_iframe {
		bottom: 85px !important;
	}
	div#credential_picker_container {
		z-index: 99999999999999999999 !important;
	}
</style><div id="gsi_overlay"><div class="oneTapOverlay-inner"><div class="oneTapOverlay-text"><div class="oTO-Text-Logo"><img src="https://www.thehindu.com/theme/images/google-signin/th-online-icon.svg" alt="The Hindu" /></div><div class="oTO-Text"><div class="oTO-Text-title">Sign in to unlock member-only benefits!</div><ul class="oTO-Text-points"><li>Access 10 free stories every month</li><li>Save stories to read later</li><li>Access to comment on every story</li><li>Sign-up/manage your newsletter subscriptions with a single click</li><li>Get notified by email for early access to discounts &amp; offers on our products</li></ul></div></div><div class="oneTapOverlay-arrow"><img src="https://www.thehindu.com/theme/images/google-signin/group-12945.svg" alt="Sign in" /></div></div></div><script>
    const gsi_container = document.getElementById("g_id_onload")
    const auth_ep = "https://madhyama.thehindu.com/api/gni";
    const response_ep = "https://madhyama.thehindu.com/api/sociallogin"
    handleResponseUrl()

    function logMomentNotification(v) {
      const gsi_overlay = document.getElementById("gsi_overlay")
      if(v.g == 'display' && v.h === true) {
        gsi_overlay.style.display = "block";

        dataLayer = window.dataLayer || [];
        dataLayer.push ({
          'event' : 'onetap_signin',
          'data' : {
            'click':'view',
            'click_type' : '',
            'general_placement':'body',
            'detailed_placement':'',
            'goal_type':'onetap_signin_view'
          }
        });
      }
      else gsi_overlay.style.display = "none"
    }

    function loginCallback(res) {
      handleGoogleSignIn()
    }

    function pushLoginEventToDataLayer() {
      dataLayer = window.dataLayer || [];
      dataLayer.push ({
        'event' : 'onetap_signin',
        'data' : {
          'click':'sign_in',
          'click_type' : 'action',
          'general_placement':'body',
          'detailed_placement':'',
          'goal_type':'onetap_signin'
        }
      });
    }

    function handleGoogleSignIn(user) {
      console.log('handleGoogleSignIn');
      const clean_url = cleanArticleUrl();
      const options = {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
          "token": user.credential,
          "article_url": clean_url,
          "pubId": "TH",
        })
      };

      fetch(auth_ep, options)
      .then(function(res) {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(function(res) {
        if (res.redirect_uri) {
          pushLoginEventToDataLayer();
          setTimeout(() => {
            window.location.replace(res.redirect_uri);
          }, 0200);
        }
        else if (!res.token || res.token.trim() === "") return
        else if(res.token && window.tp.pianoId)
          tp.push(['init', function() {
            tp.pianoId.loginByToken(res.token);
            pushLoginEventToDataLayer();
            setTimeout(() => window.location.reload(), 0700);
          }])
        else {
          console.log("Nothing happened...")
        }
      })
      .catch(err => console.error(err));
    }

    function cleanArticleUrl() {
      const params_to_remove = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]

      const url_obj = new URL(`${window.location.href}`)
      url_obj.searchParams.forEach((v, k) =>
        {if (params_to_remove.includes(k)) url_obj.searchParams.delete(k)}
      )

      return url_obj.toString()
    }

    function handleResponseUrl() {
      const url_obj = new URL(window.location.href)
      const response_id = url_obj.searchParams.get("response_id")
      const redirect_uri = url_obj.searchParams.get("internal_redirect_uri")
      if (!response_id || !redirect_uri) {
        gsi_container.setAttribute('data-auto_prompt', "true")
        return
      }
       // If user is already logged in, Do nothing with response_id or redirect_uri
      // else if (window.tp && window.tp.pianoId.isUserValid()) return;

      const options = {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({
            "response_id": response_id,
            "pubId": "TH"
        })
      }

      fetch(response_ep, options)
      .then(function(res) {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(function(res) {
        console.log(res)
        // return if response is not ok OR no access token is present
        if (!res.data.status === "ok" || !res.data.access_token) return
        if(window.tp.pianoId)
          tp.push(['init', function() {
            tp.pianoId.loginByToken(res.data.access_token)
            window.location.replace(res.data.redirect_uri)
          }])
        else window.location.replace(res.data.redirect_uri)
      })
      .catch(err => console.error("Error: ", err));
    }

    function getHeaders() {
      return {
        "Accept": "application/json, text/plain, */*",
        "Authorization": "Basic dGhlaGluZHU6a251cl9DSC1BNVBZVSU4Vw==",
        "Content-Type": "application/json",
      }
    }

  </script><script>
window.tp.push([
  "init",
  function () {
	if (window.tp.pianoId.isUserValid()) loadScript("https://www.thehindu.com/theme/js/vue-petite.min.js?ver=1706695070")
  }
])
</script><style>
	.link a {
		color: white !important;
	}

	.device-info {
		margin-right: 4px;
	}

	.popup-background {
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 99999;
	}

	[v-cloak] {
		display: none;
	}

	.popup {
		width: 100%;
		max-width: 800px;
		height: auto;
		background: #000000;
		padding: 50px 100px 50px 150px;
		color: #ffffff;
		position: relative;
	}

	.popup .popup-close {
		color: white;
		border: none;
		background: none;
		padding: 0;
		margin: 0;
		position: absolute;
		top: 10px;
		right: 10px;
		font-size: 20px;
		font-weight: 200;
		line-height: 20px;
	}

	.popup .title {
		font-family: "Merriweather", serif;
		font-size: 18px;
		line-height: normal;
		text-align: left;
		display: flex;
		align-items: center;
		position: relative;
		min-height: 50px;
	}

	.popup .title::before {
		content: "";
		width: 50px;
		height: 50px;
		/* background: url("../../public/icons/h-circle-white.svg") no-repeat center; */
		background-size: 50px 50px;
		display: block;
		position: absolute;
		left: -65px;
	}

	.popup .sub-text {
		font-family: "Merriweather", serif;
		font-size: 18px;
		line-height: normal;
		margin: 15px 0;
	}

	.popup .popup-btn {
		background-color: #ffffff !important;
		color: #000000 !important;
		font-weight: bold;
		width: max-content;
		min-width: 130px;
		height: 34px;
		text-align: center;
		box-sizing: border-box;
		border-radius: 4px;
		border: none;
		cursor: pointer;
		font-size: 12px;
		padding: 9px 10px 13px 20px;
		text-transform: uppercase;
		margin: 25px auto;
		display: block;
		font-family: "Merriweather Sans", sans-serif;
		transition: all 0.3s;
	}

	.popup .popup-btn:focus {
		box-shadow: none;
		outline: none;
	}

	.popup .popup-btn:after {
		content: "→";
		position: relative;
		opacity: 0;
		top: -1px;
		right: 15%;
		transition: 0.3s;
	}

	.popup .popup-btn:hover {
		padding-right: 20px;
		padding-left: 10px;
		color: #000000;
		text-decoration: none;
		outline: none;
	}

	.popup .popup-btn:hover::after {
		opacity: 1;
		right: -8px;
	}

	.popup .device-list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.popup .device-list li {
		width: 100%;
		padding: 10px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.popup .device-list li > div {
		display: flex;
		justify-content: left;
		align-items: flex-start;
	}

	.popup .device-list li .s-no {
		font-family: "Merriweather Sans", sans-serif;
		font-size: 16px;
		text-align: right;
		width: 10px;
	}

	.popup .device-list li .icon {
		content: "";
		width: 20px;
		height: 20px;
		/* background: url("../../public/icons/profile-white.svg") no-repeat center; */
		background-size: 20px 20px;
		display: block;
		margin: 4px 10px 0;
	}

	.popup .device-list li .device {
		font-family: "Merriweather Sans", sans-serif;
		font-size: 16px;
		text-align: left;
		line-height: normal;
	}

	.popup .device-list li .device span {
		display: block;
		font-family: inherit;
	}

	.popup .device-list li .popup-btn {
		margin: 0;
	}

	.popup p.link {
		font-family: "Merriweather Sans", sans-serif;
		font-weight: 200;
		text-align: center;
		font-size: 14px;
		margin: 20px auto 0;
	}

	.popup p.link a {
		font-weight: inherit;
		font-family: inherit;
		text-decoration: underline;
		text-underline-offset: 3px;
		transition: all 0.3s;
	}

	.popup p.link a:hover {
		text-decoration: none;
	}

	.popup p.link span {
		color: #555555;
		font-size: 18px;
		line-height: 0;
		position: relative;
		top: 3px;
	}

	@media screen and(max-width: 700px) {
		.popup {
			padding: 40px 40px 40px 90px;
		}
	}

	@media screen and(max-width: 570px) {
		.popup {
			width: 100%;
			max-width: 100%;
			padding: 35px 25px;
		}

		.popup .popup-close {
			font-size: 17px;
			line-height: 17px;
		}

		.popup .title {
			font-size: 14px;
			min-height: auto;
			padding-left: 60px;
			margin-bottom: 25px;
			line-height: 24px;
		}

		.popup .title::before {
			left: 0;
		}

		.popup .sub-text {
			font-size: 14px;
			margin: 15px 0;
			line-height: 24px;
		}

		.popup .popup-btn {
			/* width: 80px; */
			height: 30px;
			font-size: 10px;
			padding: 9px 0 13px 10px;
			margin: 15px auto;
		}

		.popup .popup-btn:hover {
			padding-right: 10px;
			padding-left: 0;
		}

		.popup .device-list {
			list-style: none;
			margin: 0;
			padding: 0;
		}

		.popup .device-list li {
			padding: 7px 0;
		}

		.popup .device-list li .s-no {
			font-size: 13px;
			width: 5px;
		}

		.popup .device-list li .icon {
			width: 15px;
			height: 15px;
			background-size: 15px 15px;
			margin: 2px 7px 0;
		}

		.popup .device-list li .device {
			font-size: 12px;
			font-weight: normal;
		}

		.popup p.link {
			font-size: 12px;
			margin: 15px auto 0;
		}

		.popup p.link a {
			text-underline-offset: 2px;
		}

		.popup p.link span {
			color: #555555;
			font-size: 18px;
			line-height: 0;
			position: relative;
			top: 3px;
		}
	}
</style><div class="popup-background" id="user-session-popup" v-show="store.session_limit_exceeded === true" v-scope v-cloak><div class="popup" style="padding: 25px;"><button class="popup-close" onclick="window.tp.pianoId.logout()">&#10005;</button><div class="title">Looks like you are already logged in from more than 3 devices!</div><div class="sub-text">To continue logging in, remove at least one device from the below list</div><ul class="device-list"><li v-for="device_detail, index in store.device_info" :key="index"><div class="device-info" v-scope="DeviceInfoComponent({index, ...device_detail})"></div><button class="btn popup-btn" @click="sendDeleteRequest([device_detail.payload], 'single')">Log out</button></li></ul><button class="btn popup-btn" @click="sendDeleteRequest(store.device_info.map(di => di.payload), 'all')">Log Out from all devices</button><p class="link"><a href="https://www.thehindugroup.com/privacy.html" target="_blank">Terms & conditions</a><span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="https://forms.office.com/r/tz7UETzxUs" target="_blank">Institutional Subscriber</a></p></div></div><template id="device-info"><span class="s-no">${ ind + 1 }</span><span class="icon"></span><span class="device">
${ device }<span class="duration">Last active - ${ la }</span></span></template><script>const us_api_domain = "/";</script><script src="https://www.thehindu.com/theme/js/user_session.min.js?ver=1706695373"></script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"84e7386a98d228ee","b":1,"version":"2024.1.0","token":"eaed15cee0874f9fad025889fee44b63"}' crossorigin="anonymous"></script>
</body></html>