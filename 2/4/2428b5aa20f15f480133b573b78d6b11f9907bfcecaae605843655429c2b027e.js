import{d as s,ab as J,m as N,O as B,h8 as k,h9 as G,bI as te,N as v,j as a,a1 as H,ha as se,hb as oe,hc as ne,hd as ae,he as re,hf as _,hg as ie,gW as ce,bq as Q,e9 as le,bc as de,gA as ue,K as pe,bt as Z,fX as he,hh as fe,E as me,hi as M,X as ge,eh as Se,hj as Te,f as Ce}from"./index-IMvvqvG5.js";import{T as L,a as be,b as xe,c as ye,d as Ie,e as Oe,B as Ee,O as U,f as V}from"./BrushSettingsPopperGroup-c88k9oFm.js";import{u as W,T as we}from"./index-d6JflJd7.js";import{aL as Ae,aM as Re}from"./useImageMeasurer-i_xvXh1-.js";import{t as je,T as Le}from"./analytics-lN6VtChl.js";import{I as Be}from"./index-NM_3i4B5.js";import{S as ke,I as ve}from"./index-D0Btniii.js";import"./useShowProBadge-SvyYmtTG.js";import"./constants-MW3jN-Zr.js";import"./index-aj9-CEIf.js";import"./getPressedImageData-74KNu2MQ.js";import"./createWatermark-QrXRKdAb.js";import"./index-VFlrft02.js";import"./index-6SJllaRd.js";import"./testIds-poACUZMz.js";import"./styles-qFhAELWS-2HAPAoNU.js";import"./ko-KR-c9d47ca5-RhbZl9Fm.js";import"./sl-SI-d25d9b37-Xy7n_Hf5.js";import"./sv-SE-beb0c166-GHoCsftI.js";import"./styles-RYoy3Ekq.js";import"./index-fN5Qmitt.js";import"./index-rZ5Vnaif.js";import"./index-HzXAUIoh.js";import"./index-uDFt3Wxr.js";import"./SettingsComponents-qPNdYaGD.js";import"./enum-settingsUI-hWDQphUL.js";import"./ru-RU-49b182e5-8dWbNXwP.js";import"./index-ss2QbMh7.js";const Fe=e=>({isBended:se(e),textFontSizeAffectedAttrs:oe(e),settings:ne(e),currentSettings:ae(e).filter(re).map(t=>({..._[t],type:t}))}),He=s.forwardRef(({hideToolsTexts:e,returnToolsCount:t,hideItemCount:n,showHiddenItems:u,onToolClickCallback:i},d)=>{const f=W(),m=J(),{settings:c,currentSettings:w,textFontSizeAffectedAttrs:y}=N(Fe),R=s.useMemo(()=>!!w.find(r=>[B.FONT,B.NEW_FONT_CHOOSER].includes(r.type)),[w]),A=s.useCallback(r=>{var g,x;const l=(g=c==null?void 0:c.textSpace.find(p=>p.type===k.letter))==null?void 0:g.value,b=G(k.letter,l??ie,r),o=(x=c==null?void 0:c.textSpace.find(p=>p.type===k.line))==null?void 0:x.value,h=G(k.line,o||0,r),C=y.map(({id:p,shadowOffsetX:O,shadowOffsetY:S,fontSize:E})=>{const z=E/r,P=O?O/z:null,D=S?S/z:null;return{id:p,...P&&{shadowOffsetX:P},...D&&{shadowOffsetY:D},fontSize:r,letterSpacing:b,lineHeight:h}});m(te.actions.patchLayersWithProvidedPayloads(C))},[m,y,c==null?void 0:c.textSpace]),j=s.useCallback(r=>{const l=r;l&&A(l)},[A]),T=s.useCallback(r=>{const{type:l,value:b}=r;m(v.actions.setCanvasLoading(!0)),r.changedSettingType===L.textStyle&&Ae(l),r.changedSettingType===L.textBend&&be(b,y.map(({id:o})=>o)),r.changedSettingType===L.textCaps&&xe(l),r.changedSettingType===L.textAlign&&ye(l),r.changedSettingType===L.textSpace&&Ie({name:l,value:b,selectedLayers:y}),m(v.actions.setCanvasLoading(!1)),je.ToolAction(Le[l])},[m,y]),I=s.useCallback((r,l)=>{t==null||t("text",l)},[t]);return R?a.jsx("li",{className:f.textSettingsContainer,ref:d,"data-testid":"text-settings-container",children:c&&a.jsx(Oe,{hideToolsTexts:e,onFontSizeChange:j,onSettingsChange:T,features:H.fontTools,hideItemCount:n,returnToolsCount:I,showHiddenItems:u,onToolClickCallback:i})}):null}),X=s.memo(He);function _e({onClick:e,isSelected:t}){return a.jsx(ke,{buttonType:ve.Secondary,onClick:e,isSelected:t,"data-testid":"toolbar-more-button",children:a.jsx(Be,{})})}const $=(e,t)=>e-t,Y=(e,t,n)=>e-t-n,Me=e=>e>0,Ne=(e,t)=>e>t,We=(e,t,n)=>e>t+n,ee=(e,t)=>e===0||e<t,ze=(e,t,n)=>ee(e,t)||e<t+n,Pe=e=>e&&e.children[0]&&e.children[1]&&e.children[1].children[0]?[...e.children[0].children,...e.children[1].children[0].children]:[],De=e=>e?[...e.children[0].children]:[],Ge=e=>e?[...e.children[0].children]:[],Ue=(e,t)=>{const{right:n}=e.getBoundingClientRect();t.push(n)},F=(e,t)=>e.forEach(n=>Ue(n,t)),Ve=(e,t,n)=>{const{right:u,bottom:i}=e.getBoundingClientRect();t.push(u),n(i)},Xe=(e,t,n,u)=>{const i=[];let d=0;return F(Ge(n),i),F(De(e),i),F(Pe(t),i),u&&Ve(u,i,f=>d=f),[i.sort((f,m)=>m-f),d]},$e=16,Ye=e=>{var t;return window.innerWidth-$e-(e&&((t=document.getElementById(Re))==null?void 0:t.clientWidth)||0)},q=(e,t)=>e>t,qe=e=>window.innerWidth-e,Ke=e=>({isLayersOpen:ce(e),isSidebarOpen:Q(e),selectedLayersIds:le(e),currentBaseGroupId:de(e),layers:ue(e)}),Je=(e,t,n,u)=>{const[i,d]=s.useState(0),f=s.useRef(window.innerWidth),{isLayersOpen:m,isSidebarOpen:c,selectedLayersIds:w,currentBaseGroupId:y,layers:R}=N(Ke),[A,j]=s.useState(()=>({right:0,top:0})),T=s.useCallback(o=>{f.current=o},[]),I=s.useCallback((o,h)=>{o>0&&(d(C=>C<0?0+o:C+o),T(h))},[T]),r=s.useCallback(()=>{d(0),f.current=window.innerWidth},[]),l=s.useCallback((o,h,C)=>{if(!(C<=0)){if(C===2&&q(h,f.current))return r();o===0&&q(h,f.current)&&(d(g=>g-1),T(h))}},[T,r]),b=s.useCallback(()=>{document.fullscreenElement&&d(0)},[]);return s.useEffect(()=>(window.addEventListener("fullscreenchange",b),()=>{window.removeEventListener("fullscreenchange",b)}),[b]),s.useEffect(()=>{d(o=>o===0?o-1:0)},[w,y,c,R.length]),s.useEffect(()=>{if(!u&&!e&&!t&&!n)return;const o=()=>{const[h,C]=Xe(e,t,n,u),g=Ye(m),x=h.findIndex(p=>g>=p);j({right:qe(h[0]),top:C}),I(x,g),l(x,g,i)};return o(),window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[e,t,n,u,I,m,i,l]),{hideItemCount:i,toolbarStyle:A}},Qe=e=>({activeSettingType:Se(e),isToolbarDisabled:Te(e),isSidebarOpen:Q(e)}),Ze=()=>{const e=W(),t=J(),{tab:n}=s.useContext(pe),{activeSettingType:u,isToolbarDisabled:i,isSidebarOpen:d}=N(Qe),f=s.useCallback((m,c)=>{i||Z.unstable_batchedUpdates(()=>{t(v.actions.setColorPickerType(he.DRAWING)),t(v.actions.setActiveSettings(c.type===u?"":c.type)),fe.includes(c.type)&&!d&&t(me.actions.setIsSidebarOpen(!0))})},[i,t,u,d]);return a.jsx("li",{className:e.settingsContainer,"data-testid":M.drawingToolbar,children:a.jsxs("div",{className:e.settingsButtons,children:[n===ge.BRUSH&&a.jsx(we,{onClick:f,item:{..._[B.COLOR],type:B.COLOR,ComponentIcon:_[B.COLOR].ComponentIcon}}),a.jsx(Ee,{})]})})},et=s.memo(Ze),K=s.forwardRef(({children:e,...t},n)=>a.jsx("ul",{...t,ref:n,children:e})),tt=({isInDrawMode:e=!1,remoteSettingsTools:t})=>{const n=s.useMemo(()=>{var S;return H.editorOnly&&t?{...t,items:(S=t.items)==null?void 0:S.filter(E=>H.tools.includes(E.type))}:t},[t]),u=s.useRef({tools:0,adjust:0,text:0}),i=s.useRef(0),d=s.useRef(null),[f,m]=s.useState(null),[c,w]=s.useState(null),[y,R]=s.useState(null),[A,j]=s.useState(null),[T,I]=s.useState(!1),[r,l]=s.useState(!1),{toolbarStyle:b,hideItemCount:o}=Je(A,c,f,y),h=W({toolbarStyle:b});s.useEffect(()=>{var S;T&&(o<i.current?l(!1):((S=d.current)==null?void 0:S.offsetLeft)<=8&&l(!0)),i.current=o},[o,i,d,T]);const C=s.useCallback(S=>{S.stopPropagation(),I(E=>!E)},[]),g=s.useCallback((S,E)=>{u.current[S]=E},[]),x=s.useCallback(()=>I(!1),[]),{tools:p,adjust:O}=u.current;return a.jsxs(a.Fragment,{children:[a.jsx(K,{"data-testid":M.editorToolbar,id:M.editorToolbar,className:h.toolbarSettingsContainer,onClick:x,children:e?a.jsx(et,{}):a.jsxs(a.Fragment,{children:[a.jsx(X,{ref:m,hideItemCount:Y(o,p,O),returnToolsCount:g}),ze(o,p,O)&&a.jsx(U,{remoteSettingsTools:n,ref:w,hideItemCount:$(o,p),returnToolsCount:g}),ee(o,p)&&a.jsx(V,{remoteSettingsTools:n,ref:j,group:"general",hideItemCount:o,returnToolsCount:g}),o>0&&a.jsx("li",{className:h.settingsMoreButton,ref:R,children:a.jsx(_e,{onClick:C,isSelected:T})})]})}),T&&Z.createPortal(a.jsxs(K,{className:Ce(h.toolbarSettingsContainer,h.secondaryToolbarSettingsContainer),ref:d,"data-testid":"secondaryMenu",children:[We(o,p,O)&&a.jsx(X,{hideItemCount:Y(o,p,O),returnToolsCount:g,showHiddenItems:!0,onToolClickCallback:x,hideToolsTexts:r}),Ne(o,p)&&a.jsx(U,{remoteSettingsTools:n,hideItemCount:$(o,p),showHiddenItems:!0,onToolClickCallback:x,hideToolsTexts:r}),Me(o)&&a.jsx(V,{remoteSettingsTools:n,group:"general",hideItemCount:o,showHiddenItems:!0,onToolClickCallback:x,hideToolsTexts:r})]}),document.body)]})},Lt=s.memo(tt);export{K as ToolbarWrapper,Lt as default};
 {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbl6WQkEz-Eec.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbl6WQk8z-A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbrKRQkEz-Eec.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbrKRQk8z-A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbouRQkEz-Eec.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbouRQk8z-A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbuyRQkEz-Eec.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbuyRQk8z-A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbsWRQkEz-Eec.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 900;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatdisplay/v19/8vIf7wUr0m80wwYf0QCXZzYzUoTK8RZQvRd-D1NYbsWRQk8z-A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLTfL3tEYUmKI.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLTfL3ukYU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLE_L3tEYUmKI.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLE_L3ukYU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLIfL3tEYUmKI.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLIfL3ukYU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLzfX3tEYUmKI.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWLzfX3ukYU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWL9PX3tEYUmKI.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVye7nDnA2uf2zVvFAhhzEsUXfZc_vk45Kb3VJWL9PX3ukYU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQQPIy7jHuF4Q.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQQPIy7bHuA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQV3Iy7jHuF4Q.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQV3Iy7bHuA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQW_Iy7jHuF4Q.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQW_Iy7bHuA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQYPPy7jHuF4Q.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQYPPy7bHuA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQbrPy7jHuF4Q.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Mono';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhatmono/v11/jVyY7nDnA2uf2zVvFAhhzEs-VMSjJpBTfgjwQbrPy7bHuA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAz4PXgfK1BlIY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAz4PXgcq1B.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzvvXgfK1BlIY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzvvXgcq1B.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzjPXgfK1BlIY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzjPXgcq1B.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzYPLgfK1BlIY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzYPLgcq1B.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzWfLgfK1BlIY.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQEbohi_ic6B3yVSzGBrMxQbb0jEzlRoOOLOnAzWfLgcq1B.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML-ZwZr_QcLVF.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML-ZwZrHQcA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML7hwZr_QcLVF.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML7hwZrHQcA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML4pwZr_QcLVF.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML4pwZrHQcA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML2Z3Zr_QcLVF.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML2Z3ZrHQcA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML193Zr_QcLVF.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Red Hat Text';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/redhattext/v14/RrQCbohi_ic6B3yVSzGBrMx6ZI_cy1A6Ok2ML193ZrHQcA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
