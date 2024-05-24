import{j as e,aC as d,aD as l,at as g,d as c,ar as x,f as m,a6 as a}from"./index-172e3f67.js";const k=20,p=({content:t,className:i})=>{const{namedUrl:r,title:n,contentDate:s}=t,o=(Date.now()-new Date(s))/(60*1e3);return!n||o>k?null:e.jsxs("div",{className:i,children:[e.jsx(d,{className:"breaking-badge",translationKey:"component.content_labels.breaking.label",isA:"h2"}),e.jsx(l,{isA:"h3",className:"breaking-text",children:e.jsx(g,{to:r,children:n})})]})},u=c(p)`
  ${x}

  padding: 10px 15px;
  background-color: ${m.RED};

  h2, h3 {
    margin-bottom: 0;
  }

  .breaking-badge {
    padding: 0;
    margin-right: 10px;
  }

  .breaking-text {
    display: inline;
    font-size: 1.4rem;
  }

  ${a.md`
    .breaking-text {
      font-size: 1.6rem;
    }
  `}

  ${a.lg`
    padding: 10px 30px;
  `}
`;export{p as BreakingBannerNoQuery,u as StyledBreakingBannerNoQuery};
//# sourceMappingURL=BreakingBannerNoQuery.cd23-2b0158e5.js.map
