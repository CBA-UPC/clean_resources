"use strict";(globalThis.webpackChunkweb=globalThis.webpackChunkweb||[]).push([[3754],{2830:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(7294);const n=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e},s.createElement("path",{d:"M27.5 30v-1.8l4.3-7.1.4-.6.4-.6h-5v-2.1h7.9v1.9L30.8 27c-.1.2-.2.3-.2.5l-.3.4h5.2V30ZM24 26a2 2 0 1 1 2-2 2 2 0 0 1-2 2ZM18.3 30.1l-.8-2.5h-4.6l-.9 2.5H9.7L13.9 18h2.7l4.3 12.1Zm-2.6-7.5-.3-1a3 3 0 0 1-.2-1h-.1a16 16 0 0 1-.5 2.1l-1.1 3.1h3.4Z"}))},8065:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(7294);const n=e=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",...e},s.createElement("path",{d:"M28 19.4a3.4 3.4 0 0 1-.4 1.8l-1 1.5-1.2 1.2a6.9 6.9 0 0 0-1.1 1.3 4.9 4.9 0 0 0-.6 1.7 4.6 4.6 0 0 0 .3 2.2h-2.4a4.5 4.5 0 0 1-.4-2.4 3.5 3.5 0 0 1 .5-1.8 4 4 0 0 1 1-1.5l1.2-1.2 1-1.2a2.2 2.2 0 0 0 .4-1.3 2 2 0 0 0-.4-1.3 2.9 2.9 0 0 0-1.1-1.1l-1.7-.7-2.1-.4.3-2.2a10.2 10.2 0 0 1 3.2.5l2.5 1.2a8 8 0 0 1 1.5 1.7 4.6 4.6 0 0 1 .5 2Zm-3.4 12.9a1.7 1.7 0 0 1-3.4 0 1.6 1.6 0 0 1 .5-1.1 1.3 1.3 0 0 1 1.2-.5 1.3 1.3 0 0 1 1.2.5 1.6 1.6 0 0 1 .5 1.1Z"}))},4622:(e,t,a)=>{a.d(t,{Z:()=>j});var s=a(7294);const n={base:"b1e0pemc",hasLogo:"h1bb6l0a",logoPosition:{left:"lxe27lt",right:"rkpscu7",center:null}},i="bzynspi",l={base:"bxzi0e6",hasNavigation:"hfb5in0",logoPosition:{left:"lt2zqt2",right:"r1dqhq7r",center:null}},r={base:"brvzu8x",titlePosition:{left:"l1jyke2u",right:"rxohhor",center:null},hasNavigation:"hyl1bh2"},c="buj6vz3",o="bfw7v0e",b="b1cm5nwt",m="bt1ztrx";a(4848);var h=a(400),d=a(1842),g=a(7902),u=a(8477),x=a(4398),p=a(1082),v=a(3315),f=a(1543);function E({image:e={},logo:t,logoPosition:a="center",title:E,titleAs:j="h1",subline:w,subtitle:y,titlePosition:N="center",items:S=[],navigationPosition:Z="left",scrollEffect:k="none",buttonItems:L=[],ratio:_="16x7",isLoading:P,maturityRating:q,hasSubtitles:z,hasAudioDescription:A,hasSignLanguage:I,hasOriginalVersion:O,progress:M}){const T=(0,s.useRef)(null);function D(){T.current&&(T.current.style.transform=`translate3d(0, ${window.scrollY/2}px, 0)`)}const C=j;return(0,s.useEffect)((()=>("parallax"===k&&window.addEventListener("scroll",D),function(){"parallax"===k&&window.removeEventListener("scroll",D)})),[k]),s.createElement("header",{className:(0,p.cx)(n.base,!!t&&n.hasLogo,n.logoPosition[a])},s.createElement("div",{className:(0,p.cx)(i),ref:T},P&&s.createElement(d.Ee,{ratio:_,isLoading:!0}),!P&&e&&s.createElement(d.Ee,{ratio:_,...e})),t&&s.createElement("img",{className:(0,p.cx)(l.base,S.length>0&&l.hasNavigation,l.logoPosition[a]),src:t,alt:"Logo"}),(E||w||y||L.length>0||P)&&s.createElement("div",{className:(0,p.cx)(r.base,r.titlePosition[N],S&&S.length>0&&r.hasNavigation)},s.createElement(x.X2,{outerSpace:"wide"},s.createElement(x.sg,{all:12},P&&s.createElement(s.Fragment,null,s.createElement(C,{className:(0,p.cx)(v.H2.base,c)},s.createElement("span",{className:(0,p.cx)(f.V.base),style:{width:"40%",height:"3rem"}}))),!P&&s.createElement(s.Fragment,null,E&&s.createElement(C,{className:(0,p.cx)(v.H2.base,c)},E),w&&s.createElement("span",{className:(0,p.cx)(b)},w),s.createElement(g.Z,{maturityRating:q,hasSubtitles:z,hasSignLanguage:I,hasAudioDescription:A,hasOriginalVersion:O}),M&&s.createElement("div",{className:(0,p.cx)(m)},"number"==typeof M&&s.createElement(u.Z,{progress:M})),y&&s.createElement("p",{className:(0,p.cx)(o)},y),L.length>0&&s.createElement(h.w,{items:L,hasControlledItems:!0}))))),S&&S.length>0&&s.createElement(h.w,{items:S,isSwipeable:!0,accessibility:"menu",alignment:Z}))}const j=s.memo(E)},1543:(e,t,a)=>{a.d(t,{V:()=>s});const s={base:"b1mh5ykp",alignment:{left:null,center:"c1dteg65",right:"r36lmsu"}};a(534)},7902:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(7294),n=a(4726),i=a(1082);const l=function({maturityRating:e,hasSubtitles:t,hasSignLanguage:a,hasAudioDescription:l,hasOriginalVersion:r}){const c=e&&"NONE"!==e;return c||t||a||l||r?s.createElement("div",{className:(0,i.cx)(n.ub.base)},c&&s.createElement("span",{className:(0,i.cx)(n.__.base),"aria-label":`Freigegeben ${e} Jahren`,title:`Freigegeben ${e} Jahren`},e),t&&s.createElement("span",{className:(0,i.cx)(n.__.base),"aria-label":"Untertitel vorhanden",title:"Untertitel vorhanden"},"UT"),a&&s.createElement("span",{className:(0,i.cx)(n.__.base),"aria-label":"Gebärdensprache vorhanden",title:"Gebärdensprache vorhanden"},"DGS"),l&&s.createElement("span",{className:(0,i.cx)(n.__.base),"aria-label":"Audiodeskription vorhanden",title:"Audiodeskription vorhanden"},"AD"),r&&s.createElement("span",{className:(0,i.cx)(n.__.base),"aria-label":"Originalversion vorhanden",title:"Originalversion vorhanden"},"OV")):null}},8477:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(7294);const n="b5fgbq",i="bl5e8it",l="b1kneo69";a(2367);var r=a(1082);const c=function({progress:e,alwaysVisible:t=!0}){const a=t||e>0;return s.createElement("div",{className:(0,r.cx)(n)},a&&s.createElement("div",{className:(0,r.cx)(i)},s.createElement("progress",{className:(0,r.cx)(l),value:e,max:"100",suppressHydrationWarning:!0},`${e} %`)))}},4726:(e,t,a)=>{a.d(t,{D9:()=>x,I2:()=>o,LI:()=>h,Lh:()=>g,OD:()=>b,PU:()=>r,__:()=>i,_b:()=>f,dk:()=>p,kI:()=>u,mo:()=>s,qN:()=>m,qO:()=>v,qc:()=>d,ub:()=>l,x1:()=>n,zM:()=>c});const s={base:"bxyitdw",isExpired:"i248b2d"},n={base:"b1fwsfcs"},i={base:"b5kqi1k"},l={base:"bhg6y70"},r={base:"bmtg244",isFocus:"i1dmv396",isPlaying:"i1j6rvt8"},c={base:"bdc8byc"},o={base:"be37e8q"},b={base:"bjzmhda"},m={base:"b2vyqfk"},h={base:"b64ih1q"},d={base:"b1ijebql"},g={base:"b1lcn3nr"},u={base:"b1xjn03l",hasContextMenuIcon:"h9s02cr",is1x1Ratio:"iyp5dt0"},x={base:"bv2tcg4"},p={base:"bq970li",lines:{1:"_jp686o",2:"_icmnlc",3:"_1o9u77t",4:"_1q7dzye",5:"_suw2zx"}},v={base:"b1ac9k2a"},f={base:"b1omlbxa",isPlaying:"idgt4yd"};a(2664)},7816:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var s=a(7294);const n="bex69tj",i="b7bz6dk",l="i1qmiil4";a(6460);var r=a(4398),c=a(4020),o=a(2824),b=a(9463),m=a(2991),h=a(3534),d=a(2996),g=a(2440),u=a(2355),x=a(5893);const p=function({data:e,httpStatus:t}){const a=(0,s.useMemo)((()=>e?(0,g.Ag)((0,u.h7)(e?.widgets[0]?.id,e?.widgets[0]?.mediumTitle,e?.widgets[0]?.isChildContent,e?.widgets[0]?.publicationService?.name,e?.widgets[0]?.show?.title)):(0,g.Ag)(o.sL.START)),[e]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{width:"56",height:"56"}),(0,x.jsx)("span",{children:423===t?"Dieses Video ist nur in der ARD Mediathek verfügbar.":"Dieser Inhalt ist leider nicht mehr verfügbar."}),(0,x.jsx)(m.Z,{type:"primary",text:`Zur ${h.sG}`,href:a,target:"_blank"})]})};var v=a(3872),f=a(2830),E=a(8065),j=a(4622),w=a(3315),y=a(7963),N=a(5257),S=a(9655);const Z=a.p+"164da1b393284bd34725.jpg";var k=a(4895),L=a(1082);const _={image:{srcset:(0,k.n5)(Z),alt:"Das Sandmännchen fährt mit seinem Schneemobil zu Kindern an den nördlichen Polarkreis und streut Traumsand. ∙ Bild: rbb",title:"Unser Sandmann ∙ Bild: rbb",isLoadingEagerly:!0},title:"Oje!",subtitle:"Es ist ein Fehler aufgetreten. Nutzen Sie die Suche oder die Links, um Inhalte zu finden."};const P=function(){const{buildChannelContextLink:e}=(0,c.wg)(),t=(0,s.useMemo)((()=>(0,x.jsx)(v.Z,{})),[]),a=(0,s.useMemo)((()=>(0,x.jsx)(f.Z,{})),[]),i=(0,s.useMemo)((()=>(0,x.jsx)(E.Z,{})),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:(0,L.cx)(r.zv.base),children:(0,x.jsx)(j.Z,{..._})}),(0,x.jsxs)(r.X2,{justifyContent:"center",children:[(0,x.jsx)(r.sg,{className:(0,L.cx)(n),all:10,m:7,margin:10,children:(0,x.jsx)(N.Z,{})}),(0,x.jsx)(r.sg,{all:12,m:8,children:(0,x.jsxs)("nav",{children:[(0,x.jsx)("h2",{className:(0,L.cx)(w.H2.base),children:"Hilfreiche Links"}),(0,x.jsx)("div",{role:"menu",children:(0,x.jsxs)(r.X2,{justifyContent:"center",children:[(0,x.jsxs)(r.sg,{all:6,xs:3,children:[(0,x.jsx)(m.Z,{text:"Start",type:"primary",isIconOnly:!0,href:e(o.sL.START),as:S.rU,iconLeft:t,accessibility:"menuitem"}),(0,x.jsx)("p",{className:(0,L.cx)(y.P.base),children:"Start"})]}),(0,x.jsxs)(r.sg,{all:6,xs:3,children:[(0,x.jsx)(m.Z,{text:"Sendungen A-Z",type:"primary",isIconOnly:!0,href:e(o.sL.SHOWS),as:S.rU,iconLeft:a,accessibility:"menuitem"}),(0,x.jsx)("p",{className:(0,L.cx)(y.P.base),children:"Sendungen A-Z"})]}),(0,x.jsxs)(r.sg,{all:6,xs:3,children:[(0,x.jsx)(m.Z,{text:"Hilfe",type:"primary",isIconOnly:!0,href:"https://hilfe.ard.de/mediathek/",target:"_blank",iconLeft:i,accessibility:"menuitem"}),(0,x.jsx)("p",{className:(0,L.cx)(y.P.base),children:"Hilfe"})]})]})})]})})]})]})};var q=a(8013),z=a(8265),A=a(220);const I=function({httpStatus:e=404,data:t}){(0,q.T)();const{appState:a}=(0,c.wg)(),s=a.navigation.currentRoute.pageType===o.sL.EMBED;return(0,b.oM)(void 0,void 0,e),(0,z.Z)({robotsNoIndex:!0,canonical:null}),(0,x.jsx)("main",{className:(0,L.cx)(r._I.base,A.T.base,i,s&&l),id:h.IT,children:s?(0,x.jsx)(p,{data:t,httpStatus:e}):(0,x.jsx)(P,{})})}},4848:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"},534:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"},2367:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"},2664:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"},6460:(e,t,a)=>{e.exports=a.p+"78492f0a1915464b90c8.css"}}]);