"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[6510],{71013:(e,i,t)=>{t.d(i,{k:()=>s});var n=t(82187),l=t.n(n),a=t(48603),r=t(11527);const s=e=>{let{children:i}=e;return(0,r.jsx)("div",{className:l()(a.Z.imageContainer,a.Z.imageContainerNew),children:i})}},78344:(e,i,t)=>{t.d(i,{g:()=>r});var n=t(23280),l=t(48603),a=t(11527);const r=e=>{let{children:i}=e;return(0,a.jsx)(n.x,{variant:"bodySmall",className:l.Z.pretitle,children:i})}},32154:(e,i,t)=>{t.d(i,{m:()=>r});var n=t(23280),l=t(29037),a=t(11527);const r=e=>{let{children:i,className:t}=e;const r=(0,l.jh)()===l.Uo.SMALL?"bodyMediumBold":"titleMedium";return(0,a.jsx)(n.x,{variant:r,"data-testid":"entityAuthor",className:t,children:i})}},62939:(e,i,t)=>{t.d(i,{o:()=>_});t(63961),t(21164),t(36433),t(9064),t(38910);var n=t(50959),l=t(23280),a=t(10992),r=t(51219),s=t(11527);const o=n.memo((function(e){let{text:i,onTimeStampClick:t,children:a,className:o,enableTimestamps:c=!1}=e;const d=(0,n.useMemo)((()=>(0,s.jsx)(r.w,{html:i,onTimeStampClick:t,enableTimestamps:c})),[i,c,t]);return(0,s.jsxs)(l.x,{as:"div",variant:"bodyMedium",className:o,children:[d,a]})})),c="OodUnm1iCEZTUeL6X1gj",d=(0,n.memo)((function(e){let{text:i,onTimeStampClick:t,onToggle:n,className:r,enableTimestamps:d}=e;return(0,s.jsx)(o,{className:r,text:i,onTimeStampClick:t,enableTimestamps:d,children:(0,s.jsx)("button",{"aria-expanded":!1,className:c,onClick:n,children:(0,s.jsxs)(l.x,{variant:"bodyMediumBold",children:["… ",a.ag.get("show_more")]})})})})),m=(e,i,t)=>{const n=a.ag.get("show_more").length,l=e.length+n+6;return t<=1&&l<i},u=(0,n.memo)((function(e){let{paragraphs:i,clickHandler:t,maxCharactersPerLine:n,maxLines:l,toggleExpandedState:r,className:c,enableTimestamps:u}=e,h=!1,g=0;const p=i.map(((e,p)=>{const x=Math.round(e.length/n);if(g+=x>0?x:1,h)return null;const v=l-(g-x);if(!(p+1===i.length&&(m(e,n,v)||x<=v))&&g>=l){h=!0;const i=((e,i,t)=>{const n=a.ag.get("show_more").length;if(m(e,i,t))return e;const l=i*t-n-6;return e.slice(0,l)})(e,n,v);return(0,s.jsx)(d,{text:i,onTimeStampClick:t,onToggle:r,className:c,enableTimestamps:u},p)}return(0,s.jsx)(o,{className:c,text:e,onTimeStampClick:t,enableTimestamps:u},p)})).filter((e=>null!==e)).map(((e,i,t)=>i+1===t.length?e:[e," "])).flat();return(0,s.jsx)(s.Fragment,{children:p})}));var h=t(48140);const g="TQXhY8PT8v1vogxO85c_",p="RKzJftL6TOVUXkXOPykT",x="mCKPqUiNNAO6GM3nRBXe",v={isOpen:null,contentWidth:0},f=(e,i)=>({...e,...i}),b=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(/[ \u00a0]{2}/).filter(Boolean)},j=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace("<p>","").split(/(?:<\/p>)/).filter(Boolean)},_=(0,n.memo)((function(e){let{content:i,htmlContent:t,maxLines:c=2,className:d,onTimeStampClick:m=(()=>{}),onExpanded:_,enableTimestamps:C=!1,enableAutomaticLinkification:k=!1}=e;const[y,N]=(0,n.useReducer)(f,v),{isOpen:T,contentWidth:w}=y,S=(0,n.useRef)(null),M=(0,n.useCallback)((()=>{N({isOpen:!T}),_&&_(!T)}),[T,_]);(0,n.useEffect)((()=>{N({isOpen:null})}),[i]),(0,n.useEffect)((()=>{var e;null!==y.isOpen&&(null===(e=S.current)||void 0===e||null===(e=e.querySelector("button[aria-expanded]"))||void 0===e||e.focus())}),[y.isOpen]);const L=w?w/7.8:Number.MAX_VALUE,O=(0,n.useCallback)((e=>{e&&(S.current=e,N({contentWidth:e.clientWidth}))}),[]),B=(0,n.useMemo)((()=>t?j(t).map((e=>(0,s.jsx)(r.w,{html:e,onTimeStampClick:m,enableTimestamps:C,enableAutomaticLinkification:k},e))):((e,i,t)=>b(e).map(((e,n)=>(0,s.jsx)(o,{className:p,text:e,onTimeStampClick:i,enableTimestamps:t},n))))(i,m,C)),[i,C,k,t,m]),A=(0,n.useMemo)((()=>t?j(t):b(i)),[i,t]);return(0,h.a)((()=>{S.current&&N({contentWidth:S.current.clientWidth})})),(0,s.jsx)("div",{className:d,children:(0,s.jsxs)("div",{ref:O,className:g,children:[T&&(0,s.jsxs)(s.Fragment,{children:[B,(0,s.jsx)("button",{"aria-expanded":!0,className:x,onClick:M,children:(0,s.jsx)(l.x,{variant:"bodyMediumBold",children:a.ag.get("show_less")})})]}),!T&&(0,s.jsx)(u,{className:p,paragraphs:A,clickHandler:m,enableTimestamps:C,maxCharactersPerLine:L,maxLines:c,toggleExpandedState:M})]})})}))},51219:(e,i,t)=>{t.d(i,{w:()=>_});var n=t(50959),l=t(82187),a=t.n(l),r=t(43183),s=t.n(r),o=t(23280),c=t(6855);t(38910),t(36433),t(9064);const d=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;var m=t(44288),u=t(11527);const h=/((?:(?:https?:\/\/)|www\.)(?:(?:(?:[a-z\u00a1-\uffff0-9][-_]*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?:[/?#][^\s"]*)?)/gi,g=/^https?:\/\//;function p(e){return"string"==typeof e?(0,u.jsx)(u.Fragment,{children:e.split(h).map(((e,i)=>i%2?(0,u.jsx)(m.Link,{to:`${g.test(e)?"":"https://"}${e}`,children:e},i):e))}):e}const x="QD13ZfPiO5otS0PU89wG",v="xgmjVLxjqfcXK5BV_XyN",f="ZbLneLRe2x_OBOYZMX3M",b="rjdQaIDkSgcGmxkdI2vU",j="umouqjSkMUbvF4I_Xz6r",_=n.memo((function(e){let{html:i,onTimeStampClick:t,enableTimestamps:l=!1,enableAutomaticLinkification:r=!1,semanticColor:o="textSubdued",className:c,asTextContent:m=!1}=e;const h=(0,n.useMemo)((()=>{const e=l?i.split(d).map((e=>e.match(d)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):i;let n;try{n=s()(e,{transform:C(t,o,r,m),dangerouslySetChildren:[]})}catch{n=i}return n}),[l,r,i,t,o,m]);return(0,u.jsx)("div",{className:a()(v,c),children:h})}));function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},i=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,l=arguments.length>3?arguments[3]:void 0,a=0;const r={_:(e,i,r)=>{const s=void 0===i?e:r;return(0,u.jsx)(n.Fragment,{children:t&&!l?p(s):s},"fragment"+a++)}};if(l)return r;return{...r,p:e=>(0,u.jsx)(o.x,{as:"p",variant:"bodyMedium",semanticColor:i,className:j,children:t?p(e.children):e.children}),a:i=>{var t;return null!==(t=i.href)&&void 0!==t&&t.startsWith("#t=")?(0,u.jsx)(c.E,{onClick:e,children:i.children}):i.href?(0,u.jsx)(m.Link,{to:i.href,children:i.children}):(0,u.jsx)(u.Fragment,{children:i.children})},ul:e=>(0,u.jsx)("ul",{className:f,children:e.children}),ol:e=>(0,u.jsx)("ol",{className:f,children:e.children}),li:e=>(0,u.jsx)(o.x,{as:"li",variant:"bodyMedium",semanticColor:i,className:b,children:t?p(e.children):e.children}),br:()=>(0,u.jsx)("br",{}),h1:e=>(0,u.jsx)(o.x,{as:"h1",variant:"bodyMediumBold",semanticColor:i,className:x,children:e.children}),h2:e=>(0,u.jsx)(o.x,{as:"h2",variant:"bodyMediumBold",semanticColor:i,className:x,children:e.children}),h3:e=>(0,u.jsx)(o.x,{as:"h3",variant:"bodyMediumBold",semanticColor:i,className:x,children:e.children}),h4:e=>(0,u.jsx)(o.x,{as:"h4",variant:"bodyMediumBold",semanticColor:i,className:x,children:e.children}),h5:e=>(0,u.jsx)(o.x,{as:"h5",variant:"bodyMediumBold",semanticColor:i,className:x,children:e.children}),h6:e=>(0,u.jsx)(o.x,{as:"h6",variant:"bodyMediumBold",semanticColor:i,className:x,children:e.children}),time:i=>(0,u.jsx)(c.E,{onClick:e,children:i.children})}}},84168:(e,i,t)=>{t.d(i,{C:()=>r});var n=t(50959),l=t(36783),a=t(11527);const r=e=>{let{pageId:i,uri:t,children:r}=e;const s=(0,l.b)(),o=(0,l.H)();return(0,n.useEffect)((()=>{null==s||s.reportPageView({pageId:i,navigationalRoot:o??void 0,entityUri:t})}),[i,o,s,t]),(0,a.jsx)(a.Fragment,{children:r})}},35142:(e,i,t)=>{t.d(i,{s:()=>p});var n=t(50959),l=t(12737),a=t(48439);t(60678),t(63961),t(21164);const r=e=>e<=64?"small":e>640?"xlarge":e>300?"large":"standard";function s(e,i){return e.filter((e=>e.label?e.label===i:e.width?r(e.width)===i:!!e.height&&r(e.height)===i))[0]}var o=t(88595);var c=t(30721);function d(e){var i,t,n,l,a,r,o,c;const d=s(e,"standard"),m=s(e,"large"),u=s(e,"small"),h=s(e,"xlarge");return{image_url:null==d?void 0:d.url,image_height:null==d||null===(i=d.height)||void 0===i?void 0:i.toString(),image_width:null==d||null===(t=d.width)||void 0===t?void 0:t.toString(),image_url_large:null==m?void 0:m.url,image_height_large:null==m||null===(n=m.height)||void 0===n?void 0:n.toString(),image_width_large:null==m||null===(l=m.width)||void 0===l?void 0:l.toString(),image_url_small:null==u?void 0:u.url,image_height_small:null==u||null===(a=u.height)||void 0===a?void 0:a.toString(),image_width_small:null==u||null===(r=u.width)||void 0===r?void 0:r.toString(),image_url_xlarge:null==h?void 0:h.url,image_height_xlarge:null==h||null===(o=h.height)||void 0===o?void 0:o.toString(),image_width_xlarge:null==h||null===(c=h.width)||void 0===c?void 0:c.toString()}}var m=t(30678),u=t(93696),h=t(92718),g=t(73196);function p(e,i){const t=(0,a.o)(),r=(0,m.g)(),{isPlaying:s,isActive:p}=(0,u.$o)((null==e?void 0:e.uri)||""),{isActive:x}=(0,u.cR)((null==i?void 0:i.uri)||""),v=(0,l.W6)(g.SZt),f=(0,n.useCallback)((n=>{if(!i||!e)return;const l=function(e,i){var t;let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const l=((null===(t=e.coverArt)||void 0===t?void 0:t.sources)||[]).sort(((e,i)=>(i.width||0)-(e.width||0))),a=(0,o.Xb)(e,i),r=(0,o.Ie)(i)||a,s=e.mediaTypes&&e.mediaTypes.includes(c.$_.Video)?"video":"audio";return{uri:e.uri,title:e.name,subtitle:i.name,type:"episode",album_uri:i.uri,album_title:i.name,artist_uri:i.uri,artist_name:i.name,...d(l),media_type:n?s:"audio",isTrailer:a,anonymousPlaybackAllowed:r}}(e,i,v);x&&!s&&p&&!n?r.resume():x&&s&&!n?(t({type:"click",intent:"pause",targetUri:e.uri}),r.pause()):(t({type:"click",intent:"play",targetUri:e.uri}),r.play({uri:i.uri,pages:[{items:[{type:h.p.EPISODE,uri:e.uri,uid:null,metadata:l,provider:null}]}]},{referrerIdentifier:r.getReferrer(),featureIdentifier:"episode"},n))}),[i,e,v,x,s,p,r,t]);return f}}}]);
//# sourceMappingURL=6510.ccf49a38.js.map