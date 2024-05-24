"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[8917,772],{35525:(e,t,a)=>{a.d(t,{y:()=>d});var n=a(67294),s=a(45697),r=a.n(s),l=a(77384);let i;const d=e=>{let{children:t,cqPath:a,isRootComponent:s,disablePaddings:r}=e;const d=(0,l.wC)(a),o=d&&!s;return(0,n.useEffect)((()=>{o&&(i&&clearTimeout(i),i=setTimeout((()=>{document.dispatchEvent(new Event("LoadEditables"))}),300))}),[]),o?n.createElement("div",{className:"cq-Editable-dom",style:r?{padding:0}:{}},t,n.createElement("cq",{"data-path":a,"data-config":JSON.stringify(d)})):t};d.propTypes={children:r().any.isRequired,cqPath:r().string,isRootComponent:r().bool,disablePaddings:r().bool}},71936:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const s={root:"EmptyRenderer__root--k_2U9"};function r(e){return n.createElement("div",{className:s.root},n.createElement("p",null,e.children))}},44073:(e,t,a)=>{a.d(t,{Y:()=>i});var n=a(19675),s=a.n(n),r=a(13459),l=a(90687);const i=e=>{if(r.Z)return null;const t=window?.SAP?.component?.includeHandlebars?.getDataFields(),a=sessionStorage.getItem("dataFields"),n=s().compile(e),i=t||a&&JSON.parse(a)||{},d=(0,l.C4)();return n(Object.assign(i,d))}},27629:(e,t,a)=>{a.d(t,{$:()=>r});var n=a(63060),s=a(44073);const r=(e,t)=>(0,n.wL)(t?(0,s.Y)(e):e).children},80772:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var n=a(67294),s=a(95998),r=a(86010),l=a(45697),i=a.n(l),d=a(90955),o=a(47529),c=a(27629),m=a(25466),u=a(35525),p=a(71936),g=a(83488),h=a(59018);const y="tag",f="h3",S="h4",_={small:{offset:2,size:8},medium:{offset:1,size:10},large:12};var b=a(25935),x=a(4866),E=a(77384),T=a(75986);const v=e=>{let{nodes:t,attribs:a,iseditmode:s}=e;return n.createElement("div",{style:(0,T.Z)(a.style||"")},n.createElement("span",{className:(0,r.default)("HeadlineContent__headlineContent--WaIf8",{"HeadlineContent__headlineContentAlignment--dDsS7":"true"===s})},(0,b.du)(t,{replace:I})))};v.propTypes={nodes:i().array,attribs:i().shape({style:i().string}),iseditmode:i().string};const C=v,N="TextStandard__large--urflN",L="TextStandard__medium--MLhPw",P="TextStandard__small--tGfD6",H="TextStandard__headline--vRrut",w="TextStandard__headlineSpacings--ZmdCy",A="TextStandard__headlineRedesign--hRJXU",O=e=>{let{search:t,isHomePageFlexLayout:a,isXXLHeadlineStyleApplied:s,isExtraLargeHeadline:l,isLargeParagraph:i,iseditmode:d}=e;const c=s||l,m=(e,l)=>{const{type:m,name:u,children:p,attribs:g}=e;if(m!==y)return(0,E.ZT)();const h=(0,r.default)("TextStandard__extraLarge--AcR9y",{[w]:i}),_=(e,t)=>n.createElement(o.s0,{key:l,type:e,className:t},n.createElement(C,{nodes:p,attribs:g,iseditmode:d}));return j(a)&&c?_(Z(s),(0,r.default)(H,A,{[h]:!s})):"h1"===u?_("xxl",(0,r.default)(H,h,A)):u===f||t?_("l",(0,r.default)(N,w,A)):"h2"===u?n.createElement("div",{key:l,className:(0,r.default)("TextStandard__callout--qI8L9",A)},n.createElement(C,{nodes:p,attribs:g,iseditmode:d})):u===S?_("m",(0,r.default)(H,L,A)):"p"===u?_("s",(0,r.default)("TextStandard__headlineSmall--dezhc",P,A)):(0,E.ZT)()};return m.displayName="transformHeadline",m},k=[f,S,"h5"],D={[f]:"l",[S]:"m"},I=(e,t)=>{const{name:a,type:s}=e;if(s!==y)return(0,E.ZT)();const l="ol"===a;if(l||"ul"===a){const a=(0,r.default)("TextStandard__listSpacings--C7jM6"),s=R(e),{listContent:i,listContentStyles:d}=s,c=e.attribs.isNested;return l?n.createElement(o.aS,{key:t,data:i,isNested:c,className:a,styleData:d}):n.createElement(o.DY,{key:t,data:i,isNested:c,className:a,styleData:d})}if("a"===a)return e.attribs.class="TextStandard__textLink--pHsfu",(0,E.fg)(e,I);if(k.includes(a)){e.name="div";const s=D[a]||"s";return n.createElement(o.s0,{key:t,type:s,className:(0,r.default)("TextStandard__sizedParagraph--gMAxK",{[N]:"l"===s,[L]:"m"===s,[P]:"s"===s})},(0,E.fg)(e,I))}return"span"===a&&"textStandard-largeParagraph"===e.attribs.class?(e.attribs.class="TextStandard__largeParagraph--YBPob",(0,E.fg)(e,I)):(0,E.ZT)()},R=e=>{let{children:t}=e;return t.filter((e=>{let{type:t,name:a}=e;return t===y&&"li"===a})).reduce(((e,t)=>{let{attribs:a,children:n}=t;return e.listContentStyles.push(a.style),e.listContent.push(n.map(((e,t)=>"ol"===e.name||"ul"===e.name?(e.attribs.isNested=!0,I(e,t)):"text"===e.type?e.data:(0,E.fg)(e,I)))),e}),{listContentStyles:[],listContent:[]})},Z=e=>e?"xxl":"xl";var X=a(13459);const j=e=>e||!X.Z&&document.body.dataset.hasOwnProperty("isHomePageFlexLayout");function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},J.apply(this,arguments)}const M=e=>{const{headline:t,paragraph:a,links:l,iseditmode:i,textWidth:y,shouldDisablePadding:f,headlineHadlebarsCheck:S,paragraphHadlebarsCheck:E,isHomePageFlexLayout:T,isXXLHeadlineStyleApplied:v,isExtraLargeHeadline:C,isLargeParagraph:N,search:L,shouldSendImpressionAnalytics:P,structureRow:H}=e,w=(0,n.useRef)(),{isEveningMode:A}=(0,s.v9)(m.Pu),k="true"===i,D=!t&&!a&&!l?.length,R=(e=>_[e]||12)(y),Z=S?.isHandlebarsText,X=E?.isHandlebarsText,j={search:L,isHomePageFlexLayout:T,isXXLHeadlineStyleApplied:v,isExtraLargeHeadline:C,isLargeParagraph:N,iseditmode:i};(0,n.useEffect)((()=>{(0,h.cK)(w);const e=new CustomEvent("textStandardReady",{bubbles:!0,cancelable:!0});return document.dispatchEvent(e),(e=>{let{current:t}=e;const a=window.location.hash;try{return!(!a||!t?.querySelector(a)||(window.location.hash="",window.location.hash=a,0))}catch(e){return!1}})(w),()=>(0,h.Ub)(w)}),[]);const{ref:M,handleClickAnalytics:W}=(0,g.j)({shouldSendImpressionAnalytics:P,structureRow:H});return n.createElement(u.y,e,n.createElement(o.W2,{className:(0,r.default)("TextStandard__textStandardWrapper--Yzjla",{"TextStandard__disableWrapperPaddings--atwfD":f,"TextStandard__evening--f8LiC":A})},n.createElement(o.X2,{noGutters:!0},n.createElement(o.sg,{xl:R,lg:R,md:12,sm:12,xs:12},n.createElement("div",{ref:M},(z=j,(q=(0,c.$)(t,Z))&&(0,b.ZP)((0,x.Z)(q),{replace:O(z)})),n.createElement("div",{className:(0,r.default)(d.wT,{"TextStandard__paragraph--Tbblv":a}),ref:w},(e=>e&&(0,b.ZP)((0,x.Z)(e),{replace:I}))((0,c.$)(a,X))),!!l?.length&&n.createElement("div",{className:"TextStandard__buttons--ypWso"},l.map((e=>n.createElement("div",{key:e.nodeName,className:"TextStandard__buttonWrapper--Mlufz"},"button"===e.displayAs?n.createElement(o.zx,J({},e,{type:"primary",href:e.path,target:e.target,title:e.tooltip,className:(0,r.default)("TextStandard__button--SoC47",d.Nh),clickHandler:W}),e.title):n.createElement(o.rU,J({},e,{type:"arrow",href:e.path,target:e.target,title:e.tooltip,className:"TextStandard__linkRedesign--PCryX",onClick:W}),e.title)))))),k&&D&&n.createElement(p.Z,null,"Edit Text - Standard Component")))));var q,z};M.propTypes={headline:i().string,paragraph:i().string,links:i().arrayOf(i().object),iseditmode:i().string,search:i().bool,shouldDisablePadding:i().bool,isHomePageFlexLayout:i().bool,isXXLHeadlineStyleApplied:i().bool,isExtraLargeHeadline:i().bool,isLargeParagraph:i().bool,emptyplaceholder:i().string,textWidth:i().string,row:i().string,shouldSendImpressionAnalytics:i().bool};const W=M},83488:(e,t,a)=>{a.d(t,{j:()=>u});var n=a(67294),s=a(42708),r=a(95998),l=a(2110);var i=a(52483);var d=a(13459);const o=e=>`Homepage banner row${e}`;var c=a(56254),m=a(25466);const u=e=>{let{shouldSendImpressionAnalytics:t,structureRow:a}=e;const u=(0,r.I0)(),p=(0,r.v9)(m.CU);(0,n.useEffect)((()=>{const e=setTimeout((()=>u((0,c.P)())),500);return()=>{clearTimeout(e)}}),[]);const{ref:g,inView:h}=(0,s.YD)({triggerOnce:!1,threshold:.1});return(0,n.useEffect)((()=>{h&&t&&(e=>{if(d.y)return;const t=o(e),a=JSON.parse(sessionStorage.getItem(i.M))||[],n=JSON.parse(sessionStorage.getItem(i.B))||[];a.includes(t)||n.includes(t)||sessionStorage.setItem(i.M,JSON.stringify([...a,t]))})(a)}),[h]),(0,n.useEffect)((()=>{const e=setTimeout((()=>{h&&p&&(()=>{const e=JSON.parse(sessionStorage.getItem(i.M))||[],t=JSON.parse(sessionStorage.getItem(i.B))||[];e.length>0&&(((e,t)=>{const a={event:"pageComponentImpression",pageComponents:t.map((e=>({name:e})))};(0,l.n)(a)})(0,e),sessionStorage.removeItem(i.M),sessionStorage.setItem(i.B,JSON.stringify([...t,...e])))})()}),500);return()=>{clearTimeout(e)}}),[h,p]),{ref:g,handleClickAnalytics:()=>{t&&(e=>{const t={event:"pageComponentClick",pageComponents:[{name:o(e)}]};(0,l.n)(t)})(a)}}}}}]);