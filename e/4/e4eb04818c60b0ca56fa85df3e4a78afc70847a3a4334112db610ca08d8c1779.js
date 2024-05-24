import{be as S,J as a,bh as k,j as e,c as w,bb as f,bf as _,bg as j,av as n,M as v,B as t,Q as r,bc as B,bd as N,f as c,d as W}from"./index-172e3f67.js";import{S as $}from"./ModalLayerLayout.cd23-f9d54980.js";const T=({className:d,content:m,isCollapsed:l})=>{const[o,{toggleOnClick:b}]=S({initialState:l}),s=o?-1:0,y=a("component.welcome_layer.headline"),u=a(`component.welcome_layer.toggle_button.label.${o?"open":"close"}`),h=a("component.welcome_layer.info"),x=a("component.welcome_layer.dont_show"),L=a("component.welcome_layer.more_info"),[g,p]=k("dontShowLiveWelcomeLayerUserPref");return g?null:e.jsxs($,{className:w(d,{collapsed:o,"slide-in":l===null}),children:[e.jsxs("div",{className:"constant-head",children:[e.jsx(f,{className:"headline text",children:y}),e.jsx(_,{className:"toggle-btn","aria-expanded":!o,title:u,onClick:b,children:e.jsx(j,{pointsDown:!o})})]}),e.jsxs("div",{className:"collapsable-body",children:[e.jsx(n,{isA:"p",className:"text",children:h}),e.jsxs(v,{className:"button-wrapper",children:[e.jsx(t,{onClick:tabIndex:s,children:x}),e.jsx(r,{isA:B,to:N(m.welcomeInfo),role:"link",tabIndex:s,children:L})]})]})]})},i={background:"--welcome-layer-background"},C=`
  ${i.background}: ${c.DARK_BLUE_GREY_01};
  ${n.darkStyles}
  ${t.darkStyles}
  ${r.darkStyles}
`,D=W(T)`
  background-color: var(${i.background}, ${c.BLUE_GREY_03});
`;export{T as LiveWelcomeLayer,D as StyledLiveWelcomeLayer,i as cssVariables,C as darkLiveWelcomeLayerStyles};
//# sourceMappingURL=LiveWelcomeLayer.cd23-4843c056.js.map
