import{d as u,j as n,Z as $,Y as j,_ as f,$ as y,a0 as C,a1 as F,k as h,n as p,H as I,a2 as k,W as T,A as L,C as A,D as B,F as D,o as S,p as q,q as P,v as m}from"./index-6f0b08dd.js";const d=F,H=({contents:a,className:t})=>n.jsx($,{className:`${t} container`,id:j.quickNav.mainContent,children:n.jsx(f,{children:a.map((s,g)=>n.jsx(y,{content:s,imageFormatConfig:g>0?C():void 0},s.id))})}),W=u(H)`
  padding-top: 25px;
  padding-bottom: 30px;
`,w=({queryListFieldName:a,queryExtraVariables:t,extraVariables:s})=>{const g=()=>{const r=S({isContent:!1}),o=q({isContent:!1});return P`
    query ${a}Page($amount: Int!, $lang: Language!, $id: Int) {
      ${a}(lang: $lang, amount: $amount ${t?["",...t].join(", "):""} ) {
        ...${d.name}
      }
      topStoriesNavigation(lang: $lang){ ...${m.name} }
      ...${r.name}
      ...${o.name}
    }
    ${d.fragment()}
    ${m.fragment()}
    ${r.fragment()}
    ${o.fragment()}
  `};return()=>{const{langCode:r}=h(),o={query:g(),variables:{id:0,lang:p(r),amount:20,...s}};return n.jsx(I,{queryDef:o,langBaseContentFn:k,children:({topStoriesNavigation:e,[a]:c=[],footer:x})=>{const l=c.filter(;return l.length===0?null:n.jsxs(n.Fragment,{children:[n.jsxs(T,{children:[n.jsx("html",{lang:e==null?void 0:e.iso639Lang}),n.jsx("meta",{property:"og:site_name",content:"dw.com"})]}),n.jsx(L,{content:{topStoriesNavigation:e}}),n.jsx(A,{content:{topStoriesNavigation:e}}),n.jsx(B,{}),n.jsx(W,{contents:l}),n.jsx(D,{content:{footer:x}})]})}})}};export{w as m};
//# sourceMappingURL=TeaserListSamplePageFactory-82270b3e.js.map
