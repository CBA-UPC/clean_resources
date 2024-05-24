import{j as e,bb as r,bc as c,bd as h,J as n,be as g,ax as B,c as j,bf as i,bg as _,av as f,M as L,B as d,k as S,Q as b,f as y,d as T}from"./index-172e3f67.js";import{S as $}from"./ModalLayerLayout.cd23-f9d54980.js";const N=({content:t,tabIndex:s})=>e.jsx(r,{isA:c,to:h(t.betaInfo),tabIndex:s,children:n("component.beta_layer.infoLink")}),I=({className:t,content:s,isCollapsed:l})=>{const[a,{toggleOnClick:k}]=g({initialState:l}),o=a?-1:0,x=n(`component.beta_layer.toggle_button.label.${a?"open":"close"}`),u=B({key:"component.beta_layer.info",parameter:"link",componentFn:),p=n("component.beta_layer.headline");return e.jsxs($,{className:j(t,{collapsed:a,"slide-in":l===null}),children:[e.jsxs("div",{className:"constant-head",children:[e.jsx(r,{className:"headline text",children:p}),e.jsx(i,{className:"toggle-btn","aria-expanded":!a,title:x,onClick:k,children:e.jsx(_,{pointsDown:!a})})]}),e.jsxs("div",{className:"collapsable-body",children:[e.jsx(f,{isA:"p",className:"text",children:u}),e.jsxs(L,{className:"button-wrapper",children:[e.jsx(d,{isA:c,to:`/${S().langCode}/beta-feedback`,role:"link",tabIndex:o,children:n("component.beta_layer.feedback")}),e.jsx(b,{isA:"a",href:s.classicUrl,role:"link",tabIndex:o,children:n("component.beta_layer.back_to_classic")})]})]})]})},m={background:"--beta-layer-background"},v=`
  ${m.background}: ${y.DARK_BLUE_GREY_01};
  ${d.darkStyles}
  ${b.darkStyles}
  ${i.darkStyles}
`,E=T(I)`
  background-color: var(${m.background}, ${y.BLUE_GREY_03});
`;export{I as BetaLayer,E as StyledBetaLayer,m as cssVariables,v as darkBetaLayerStyles};
//# sourceMappingURL=index-bf076b6f.js.map
