"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[3915],{1502:(e,t,i)=>{i.d(t,{k:()=>s});var n=i(82187),l=i.n(n),a=i(63068),r=i(11527);const s=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:l()(a.Z.imageContainer,a.Z.imageContainerNew),children:t})}},36637:(e,t,i)=>{i.d(t,{g:()=>r});var n=i(69736),l=i(63068),a=i(11527);const r=e=>{let{children:t}=e;return(0,a.jsx)(n.x,{variant:"bodySmall",className:l.Z.pretitle,children:t})}},59099:(e,t,i)=>{i.d(t,{m:()=>r});var n=i(69736),l=i(61058),a=i(11527);const r=e=>{let{children:t,className:i}=e;const r=(0,l.jh)()===l.Uo.SMALL?"bodyMediumBold":"titleSmall";return(0,a.jsx)(n.x,{variant:r,"data-testid":"entityAuthor",className:i,children:t})}},73461:(e,t,i)=>{i.d(t,{o:()=>_});i(75930),i(92027),i(46758),i(53321),i(86277);var n=i(50959),l=i(69736),a=i(85648),r=i(29390),s=i(11527);const o=n.memo((function(e){let{text:t,onTimeStampClick:i,children:a,className:o,enableTimestamps:c=!1}=e;const d=(0,n.useMemo)((()=>(0,s.jsx)(r.w,{html:t,onTimeStampClick:i,enableTimestamps:c})),[t,c,i]);return(0,s.jsxs)(l.x,{as:"div",variant:"bodyMedium",className:o,children:[d,a]})})),c="OodUnm1iCEZTUeL6X1gj",d=(0,n.memo)((function(e){let{text:t,onTimeStampClick:i,onToggle:n,className:r,enableTimestamps:d}=e;return(0,s.jsx)(o,{className:r,text:t,onTimeStampClick:i,enableTimestamps:d,children:(0,s.jsx)("button",{"aria-expanded":!1,className:c,onClick:n,children:(0,s.jsxs)(l.x,{variant:"bodyMediumBold",children:["… ",a.ag.get("show_more")]})})})})),m=(e,t,i)=>{const n=a.ag.get("show_more").length,l=e.length+n+6;return i<=1&&l<t},u=(0,n.memo)((function(e){let{paragraphs:t,clickHandler:i,maxCharactersPerLine:n,maxLines:l,toggleExpandedState:r,className:c,enableTimestamps:u}=e,h=!1,g=0;const p=t.map(((e,p)=>{const x=Math.round(e.length/n);if(g+=x>0?x:1,h)return null;const v=l-(g-x);if(!(p+1===t.length&&(m(e,n,v)||x<=v))&&g>=l){h=!0;const t=((e,t,i)=>{const n=a.ag.get("show_more").length;if(m(e,t,i))return e;const l=t*i-n-6;return e.slice(0,l)})(e,n,v);return(0,s.jsx)(d,{text:t,onTimeStampClick:i,onToggle:r,className:c,enableTimestamps:u},p)}return(0,s.jsx)(o,{className:c,text:e,onTimeStampClick:i,enableTimestamps:u},p)})).filter((e=>null!==e)).map(((e,t,i)=>t+1===i.length?e:[e," "])).flat();return(0,s.jsx)(s.Fragment,{children:p})}));var h=i(28369);const g="TQXhY8PT8v1vogxO85c_",p="RKzJftL6TOVUXkXOPykT",x="mCKPqUiNNAO6GM3nRBXe",v={isOpen:null,contentWidth:0},f=(e,t)=>({...e,...t}),b=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(/[ \u00a0]{2}/).filter(Boolean)},j=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace("<p>","").split(/(?:<\/p>)/).filter(Boolean)},_=(0,n.memo)((function(e){let{content:t,htmlContent:i,maxLines:c=2,className:d,onTimeStampClick:m=(()=>{}),onExpanded:_,enableTimestamps:C=!1,enableAutomaticLinkification:k=!1}=e;const[y,N]=(0,n.useReducer)(f,v),{isOpen:T,contentWidth:S}=y,w=(0,n.useRef)(null),M=(0,n.useCallback)((()=>{N({isOpen:!T}),_&&_(!T)}),[T,_]);(0,n.useEffect)((()=>{N({isOpen:null})}),[t]),(0,n.useEffect)((()=>{var e;null!==y.isOpen&&(null===(e=w.current)||void 0===e||null===(e=e.querySelector("button[aria-expanded]"))||void 0===e||e.focus())}),[y.isOpen]);const L=S?S/7.8:Number.MAX_VALUE,O=(0,n.useCallback)((e=>{e&&(w.current=e,N({contentWidth:e.clientWidth}))}),[]),B=(0,n.useMemo)((()=>i?j(i).map((e=>(0,s.jsx)(r.w,{html:e,onTimeStampClick:m,enableTimestamps:C,enableAutomaticLinkification:k},e))):((e,t,i)=>b(e).map(((e,n)=>(0,s.jsx)(o,{className:p,text:e,onTimeStampClick:t,enableTimestamps:i},n))))(t,m,C)),[t,C,k,i,m]),A=(0,n.useMemo)((()=>i?j(i):b(t)),[t,i]);return(0,h.a)((()=>{w.current&&N({contentWidth:w.current.clientWidth})})),(0,s.jsx)("div",{className:d,children:(0,s.jsxs)("div",{ref:O,className:g,children:[T&&(0,s.jsxs)(s.Fragment,{children:[B,(0,s.jsx)("button",{"aria-expanded":!0,className:x,onClick:M,children:(0,s.jsx)(l.x,{variant:"bodyMediumBold",children:a.ag.get("show_less")})})]}),!T&&(0,s.jsx)(u,{className:p,paragraphs:A,clickHandler:m,enableTimestamps:C,maxCharactersPerLine:L,maxLines:c,toggleExpandedState:M})]})})}))},29390:(e,t,i)=>{i.d(t,{w:()=>_});var n=i(50959),l=i(82187),a=i.n(l),r=i(43183),s=i.n(r),o=i(69736),c=i(77581);i(75930),i(92027),i(86277);const d=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;var m=i(60046),u=i(11527);const h=/((?:(?:https?:\/\/)|www\.)(?:(?:(?:[a-z\u00a1-\uffff0-9][-_]*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?:[/?#][^\s"]*)?)/gi,g=/^https?:\/\//;function p(e){return"string"==typeof e?(0,u.jsx)(u.Fragment,{children:e.split(h).map(((e,t)=>t%2?(0,u.jsx)(m.Link,{to:`${g.test(e)?"":"https://"}${e}`,children:e},t):e))}):e}const x="QD13ZfPiO5otS0PU89wG",v="xgmjVLxjqfcXK5BV_XyN",f="ZbLneLRe2x_OBOYZMX3M",b="rjdQaIDkSgcGmxkdI2vU",j="umouqjSkMUbvF4I_Xz6r",_=n.memo((function(e){let{html:t,onTimeStampClick:i,enableTimestamps:l=!1,enableAutomaticLinkification:r=!1,semanticColor:o="textSubdued",className:c,asTextContent:m=!1}=e;const h=(0,n.useMemo)((()=>{const e=l?t.split(d).map((e=>e.match(d)?`(<time>${e.replace("(","").replace(")","")}</time>)`:e)).join(""):t;let n;try{n=s()(e,{transform:C(i,o,r,m),dangerouslySetChildren:[]})}catch{n=t}return n}),[l,r,t,i,o,m]);return(0,u.jsx)("div",{className:a()(v,c),children:h})}));function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,l=arguments.length>3?arguments[3]:void 0,a=0;const r={_:(e,t,r)=>{const s=void 0===t?e:r;return(0,u.jsx)(n.Fragment,{children:i&&!l?p(s):s},"fragment"+a++)}};if(l)return r;return{...r,p:e=>(0,u.jsx)(o.x,{as:"p",variant:"bodyMedium",semanticColor:t,className:j,children:i?p(e.children):e.children}),a:t=>{var i;return null!==(i=t.href)&&void 0!==i&&i.startsWith("#t=")?(0,u.jsx)(c.E,{onClick:e,children:t.children}):t.href?(0,u.jsx)(m.Link,{to:t.href,children:t.children}):(0,u.jsx)(u.Fragment,{children:t.children})},ul:e=>(0,u.jsx)("ul",{className:f,children:e.children}),ol:e=>(0,u.jsx)("ol",{className:f,children:e.children}),li:e=>(0,u.jsx)(o.x,{as:"li",variant:"bodyMedium",semanticColor:t,className:b,children:i?p(e.children):e.children}),br:()=>(0,u.jsx)("br",{}),h1:e=>(0,u.jsx)(o.x,{as:"h1",variant:"bodyMediumBold",semanticColor:t,className:x,children:e.children}),h2:e=>(0,u.jsx)(o.x,{as:"h2",variant:"bodyMediumBold",semanticColor:t,className:x,children:e.children}),h3:e=>(0,u.jsx)(o.x,{as:"h3",variant:"bodyMediumBold",semanticColor:t,className:x,children:e.children}),h4:e=>(0,u.jsx)(o.x,{as:"h4",variant:"bodyMediumBold",semanticColor:t,className:x,children:e.children}),h5:e=>(0,u.jsx)(o.x,{as:"h5",variant:"bodyMediumBold",semanticColor:t,className:x,children:e.children}),h6:e=>(0,u.jsx)(o.x,{as:"h6",variant:"bodyMediumBold",semanticColor:t,className:x,children:e.children}),time:t=>(0,u.jsx)(c.E,{onClick:e,children:t.children})}}},71059:(e,t,i)=>{i.d(t,{C:()=>r});var n=i(50959),l=i(84680),a=i(11527);const r=e=>{let{pageId:t,uri:i,children:r}=e;const s=(0,l.b)(),o=(0,l.H)();return(0,n.useEffect)((()=>{null==s||s.reportPageView({pageId:t,navigationalRoot:o??void 0,entityUri:i})}),[t,o,s,i]),(0,a.jsx)(a.Fragment,{children:r})}},53758:(e,t,i)=>{i.d(t,{s:()=>p});var n=i(50959),l=i(10226),a=i(13734);i(80378),i(46758),i(53321);const r=e=>e<=64?"small":e>640?"xlarge":e>300?"large":"standard";function s(e,t){return e.filter((e=>e.label?e.label===t:e.width?r(e.width)===t:!!e.height&&r(e.height)===t))[0]}var o=i(633);var c=i(77861);function d(e){var t,i,n,l,a,r,o,c;const d=s(e,"standard"),m=s(e,"large"),u=s(e,"small"),h=s(e,"xlarge");return{image_url:null==d?void 0:d.url,image_height:null==d||null===(t=d.height)||void 0===t?void 0:t.toString(),image_width:null==d||null===(i=d.width)||void 0===i?void 0:i.toString(),image_url_large:null==m?void 0:m.url,image_height_large:null==m||null===(n=m.height)||void 0===n?void 0:n.toString(),image_width_large:null==m||null===(l=m.width)||void 0===l?void 0:l.toString(),image_url_small:null==u?void 0:u.url,image_height_small:null==u||null===(a=u.height)||void 0===a?void 0:a.toString(),image_width_small:null==u||null===(r=u.width)||void 0===r?void 0:r.toString(),image_url_xlarge:null==h?void 0:h.url,image_height_xlarge:null==h||null===(o=h.height)||void 0===o?void 0:o.toString(),image_width_xlarge:null==h||null===(c=h.width)||void 0===c?void 0:c.toString()}}var m=i(8570),u=i(70959),h=i(82857),g=i(17676);function p(e,t){const i=(0,a.o)(),r=(0,m.g)(),{isPlaying:s,isActive:p}=(0,u.$o)((null==e?void 0:e.uri)||""),{isActive:x}=(0,u.cR)((null==t?void 0:t.uri)||""),v=(0,l.W6)(g.SZt),f=(0,n.useCallback)((n=>{if(!t||!e)return;const l=function(e,t){var i;let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const l=((null===(i=e.coverArt)||void 0===i?void 0:i.sources)||[]).sort(((e,t)=>(t.width||0)-(e.width||0))),a=(0,o.Xb)(e,t),r=(0,o.Ie)(t)||a,s=e.mediaTypes&&e.mediaTypes.includes(c.$_.Video)?"video":"audio";return{uri:e.uri,title:e.name,subtitle:t.name,type:"episode",album_uri:t.uri,album_title:t.name,artist_uri:t.uri,artist_name:t.name,...d(l),media_type:n?s:"audio",isTrailer:a,anonymousPlaybackAllowed:r}}(e,t,v);x&&!s&&p&&!n?r.resume():x&&s&&!n?(i({type:"click",intent:"pause",targetUri:e.uri}),r.pause()):(i({type:"click",intent:"play",targetUri:e.uri}),r.play({uri:t.uri,pages:[{items:[{type:h.p.EPISODE,uri:e.uri,uid:null,metadata:l,provider:null}]}]},{referrerIdentifier:r.getReferrer(),featureIdentifier:"episode"},n))}),[t,e,v,x,s,p,r,i]);return f}}}]);
//# sourceMappingURL=3915.f3671182.js.map