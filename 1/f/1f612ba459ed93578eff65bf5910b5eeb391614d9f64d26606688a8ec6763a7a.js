import{I as u,q as l,d as y,J as x,j as e,K as j,L as h,W as c,M as b,Q as f,U as p,o as S,p as v,V as $,X as F,A as B,C as k,D as C,Y as L,F as q,k as A,n as g,H as D}from"./index-6f0b08dd.js";const m=u({name:"Survey",fragment),P=({survey:t,className:a,id:n})=>{const r=x("pages.beta_feedback.close_button.label");return e.jsxs("div",{className:a,id:n,children:[e.jsx(j,{className:a,children:e.jsx(h,{content:{...t,firstRegionArray:[]}})}),t.id&&e.jsx("div",{id:`surveyhero-embed-${t.id}`,className:"iframe-container","data-lang":t.lang,children:e.jsx(c,{children:e.jsx("script",{src:`https://embed-cdn.surveyhero.com/js/user/embed.${t.id}.js`,async:!0})})}),e.jsx(b,{className:"btn-bar",children:e.jsx(f,{title:r,onClick:children:r})})]})},w=y(P)`
  .btn-bar {
    margin: 15px;
  }
  iframe {
    border: none;
  }
  .iframe-container {
    min-height: calc(100vh - 275px);
  }
`,d=u({name:"BetaSurvey",fragment(){const t=S({isContent:!1}),a=v({isContent:!1});return l`fragment ${this.name} on Query {
        betaSurvey(lang: $lang) {
          title
          ...${m.name}
        }
        ...${t.name}
        ...${a.name}
      }
      ${m.fragment()}
      ${t.fragment()}
      ${a.fragment()}
    `}}),Q=({survey:t,topStoriesNavigation:a,topStoriesNavigations:n,footer:r})=>{const s=$().window.location.href,o=F({title:t.title}),i=t.title;return e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[e.jsx("title",{children:o}),e.jsx("meta",{name:"description",content:i}),e.jsx("link",{rel:"canonical",href:s}),e.jsx("meta",{property:"og:site_name",content:"dw.com"}),e.jsx("meta",{property:"og:title",content:o}),e.jsx("meta",{property:"og:url",content:s}),e.jsx("meta",{property:"og:description",content:i})]}),e.jsx(B,{content:{topStoriesNavigation:a}}),e.jsx(k,{content:{topStoriesNavigation:a,topStoriesNavigations:n,...t}}),e.jsx(C,{}),e.jsx(w,{survey:t,id:L.quickNav.mainContent}),e.jsx(q,{content:{footer:r}})]})},H=()=>l`
  query surveyPage($lang: Language!) {
    iso639ByLang(lang: $lang)
    betaSurvey(lang: $lang) {
      isRtl
      isEuropeanLang
      isAsianOrAfricanLang
      isChineseLang
    }
    ...${d.name}
  }
  ${d.fragment()}
`,T=()=>{const{langCode:t}=A(),a={query:H(),variables:{lang:g(t)}};return e.jsx(D,{queryDef:a,langBaseContentFn:n=>({...n.betaSurvey,language:g(n.betaSurvey.lang)}),children:({topStoriesNavigation:n,topStoriesNavigations:r,betaSurvey:s,footer:o,iso639ByLang:i})=>e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx("html",{lang:i})}),e.jsx(Q,{survey:s,footer:o,topStoriesNavigation:n,topStoriesNavigations:r})]})})};export{T as BetaSurveyPage,H as surveyPageQuery};
//# sourceMappingURL=BetaSurveyPage-4d9aec40.js.map
