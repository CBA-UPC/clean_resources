import{aC as a,aD as e,h as l,aE as n,aF as o,aG as t,aH as c,y as s,aI as i,aJ as r,aK as d,aL as A,aM as u,aN as C}from"./index.module.js";const g=e((()=>dynamicImportPolyfill("./index-2ec4fa43.js",import.meta.url))),p=e((()=>dynamicImportPolyfill("./index-f9df0d91.js",import.meta.url))),m=e((()=>dynamicImportPolyfill("./index-519c0693.js",import.meta.url)));var y=a((({acceptAllDefault:a,acceptAllTCF:e,denyAllDefault:y,denyAllTCF:F,showSecondLayer:f,onClose:I,onLanguageChange:L,UC:T})=>{const[E,S]=l(!1),{ui:D}=n(),{abTestVariant:h,isAmpEnabled:w,setIsInFullScreen:N,setTabView:O,setView:R,uiVariant:k,view:x}=o(),[V,{loading:_}]=t(T.enterFullscreenAmp,T),[,{loading:b}]=t(T.acceptAllServices,T),[,{loading:P}]=t(T.acceptAllForTCF,T),[,{loading:M}]=t(T.acceptAllAmp,T),[,{loading:U}]=t(T.denyAllServices,T),[,{loading:j}]=t(T.denyAllForTCF,T),[,{loading:v}]=t(T.denyAllAmp,T),z=()=>{_||V().then((async()=>{await R(r.SECOND_LAYER),N(!0)}))},K=async()=>{_||(d(x,A.MORE_INFORMATION_LINK,h,T.setTrackingPixel),w&&(await V(),N(!0)),O(u(D,k)),f())},H=async()=>{_||(w&&(await V(),N(!0)),d(x,A.MORE_INFORMATION_LINK,h,T.setTrackingPixel),O(C.SERVICES_VENDORS),await R(r.SECOND_LAYER))};switch(k){case c.CCPA:return s(i,{fallback:null},s(p,{onClose:I,onCustomize:K,onLanguageChange:L,setToggleCcpaChecked:S,toggleCcpaChecked:E,UC:T}));case c.DEFAULT:return s(i,{fallback:null},s(m,{onClose:I,onCustomize:K,onFullScreenAmp:z,onLanguageChange:L,onAcceptAll:a,onDenyAll:y,isAcceptDenyAllLoading:b||U||v,UC:T}));case c.TCF:return s(i,{fallback:null},s(g,{onCustomize:K,onFullScreenAmp:z,onLanguageChange:L,onShowVendorsHandler:H,onAcceptAll:e,onDenyAll:F,isAcceptDenyAllLoading:U||j||b||P||M,UC:T}));default:return null}}));export{y as default};