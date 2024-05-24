(self.mvWrapperJsonp=self.mvWrapperJsonp||[]).push([[7078],{8975:(e,t,r)=>{"use strict";r.r(t);var n=r(6400),i=r(8661),a=r(2996),o=r(396),s=r(2788),l=r(4385),c=r(5076),d=r(8245),p=r(7048);const u=s.ZP.div`
  display: flex;
  justify-content: center;
`,g=s.ZP.div`
  margin-top: 10px;
  margin-right: auto;
  margin-bottom: 10px;
  margin-left: auto;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: inherit;
  background: none;
  border: none;
  &:active,
  &:focus,
  &:focus-within,
  &:hover {
    color: inherit;
    background: none;
    cursor: pointer;
  }
`,m=()=>{const e=(0,o.qp)(l._y),{state:t,dispatch:r}=e,[i,a]=(0,o.eJ)(!1),[s,m]=(0,o.eJ)({});return(0,o.d4)((()=>{i||(()=>{return e=void 0,r=null,n=function*(){const e=yield(0,p._)({language:t.language,view:d.k.privacySettingsLink});m(e),a(!0)},new Promise(((t,i)=>{var a=e=>{try{s(n.next(e))}catch(e){i(e)}},o=e=>{try{s(n.throw(e))}catch(e){i(e)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,o);s((n=n.apply(e,r)).next())}));var e,r,n})()}),[i]),i?(0,n.h)(u,null,(0,n.h)(g,{id:"mv_privacy_settings",onClick:,s)):null},f=window.$adManagementConfig.web.model.footer_selector,b=document.createElement("div"),v=document.createElement("div"),y=f&&document.querySelector(f)||document.body;b.setAttribute("data-name","mediavine-gdpr-cmp"),b.setAttribute("data-nosnippet","1"),v.setAttribute("data-name","mediavine-gdpr-button"),v.setAttribute("data-nosnippet","1"),document.body.insertAdjacentElement("beforeend",b),y.insertAdjacentElement("beforeend",v),(0,n.sY)((0,n.h)(l.X9,null,(0,n.h)(a.ZP,null),(0,i.jz)((0,n.h)(m,null),v)),b)},7477:(e,t,r)=>{"use strict";r.d(t,{Gq:()=>c,IQ:()=>a,iQ:()=>m,vA:()=>o});var n=r(6400),i=r(396);const a="amc-modal-container",o="amc-focus-first";let s=!1;const l=e=>{s=!0;try{e.focus()}catch(e){}return s=!1,document.activeElement===e},c=()=>{const e=document.querySelector(`.${a}`)||document.createElement("div"),t=e.querySelector(`.${o}`);t?t.focus():d(e)},d=e=>{for(let t=0;t<e.childNodes.length;t++){const r=e.childNodes[t];if(l(r)||d(r))return!0}return!1},p=e=>{for(let t=e.childNodes.length-1;t>=0;t--){const r=e.childNodes[t];if(l(r)||p(r))return!0}return!1};let u;const g=e=>{if(s)return;const t=e.target,r=document.querySelector(`.${a}`)||document.createElement("div");r.contains(t)?u=t:(d(r),u==document.activeElement&&p(r),u=document.activeElement)},m=({children:e})=>((0,i.d4)((,[]),(0,n.h)(n.HY,null,(0,n.h)("div",{class:"amc-modal-pre-capture",tabIndex:0}),e,(0,n.h)("div",{class:"amc-modal-post-capture",tabIndex:0})))},2996:(e,t,r)=>{"use strict";r.d(t,{E7:()=>m,E:()=>g,ZP:()=>y});var n=r(6400),i=r(396),a=r(8661),o=r(2788),s=r(8245);const l=o.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 12px;
  padding: 12px;
  flex-direction: column;
  margin: 36px;

  ${({color:e,view:t})=>t===s.k.default&&`\n    width: 100%;\n    min-width: auto;\n    max-width: 768px;\n    height: 100%;\n    min-height: auto;\n    max-height: 450px;\n    overflow-x: auto;\n    border-top: 10px solid ${e};\n    @media(max-width: 767px) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n      height: 75vh;\n      min-height: auto;\n      max-height: initial;\n      min-width: initial;\n    }\n    &::-webkit-scrollbar {\n      -webkit-appearance: none;\n      width: 7px;\n    }\n    &::-webkit-scrollbar-thumb {\n      border-radius: 5px;\n      border-right: 1px solid #fff;\n      border-left: 1px solid #fff;\n      background-color: #7f7f7f;\n      -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n    }\n  `}

  ${({view:e})=>e!==s.k.default&&"\n    width: 100%;\n    min-width: auto;\n    max-width: 830px;\n    max-height: 90%;\n    height: 784px;\n    min-height: auto;\n    border-top: none;\n    @media(max-width: 767px) {\n      margin-top: 10px;\n      margin-bottom: 10px;\n      min-width: initial;\n    } \n  "}

  position: relative;
  background: #fff;
  border-radius: 5px;
  color: #1e1e1e;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif;
  animation: fadeUp 0.3s ease 1;
  letter-spacing: initial;
  text-align: initial;
  text-transform: initial;
  line-height: 1.25;
`,c=o.ZP.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom:0;
  left: 0;
  z-index: 2147483647;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  background:rgba(0,0,0,.8);
  animation: opacity .2s ease 1;
`,d=o.ZP.div`
  margin: auto;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border-style: solid solid solid;
  border-width: 0.175em;
  border-color: ${;
  border-left-color: transparent;
  border-bottom-color: transparent;
  animation: spin 1.2s ease-out infinite;
  box-sizing: border-box;
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;var p=r(4385),u=r(7477);const g="amc-aria-labelledby",m="amc-aria-describedby",f=(0,a.Vo)((()=>r.e(9197).then(r.bind(r,302)))),b=(0,a.Vo)((()=>r.e(1820).then(r.bind(r,1726)))),v=(0,a.Vo)((),y=()=>{const e=(0,i.qp)(p._y),{state:{color:t,view:r}}=e;return r?(0,n.h)(c,null,(0,n.h)(u.iQ,null,(0,n.h)(l,{color:t,view:r,className:u.IQ,role:"dialog","aria-modal":"true","aria-labelledby":g,"aria-describedby":m},(0,n.h)(a.n4,{fallback:(0,n.h)(d,{color:t})},(e=>{switch(e){case s.k.default:return(0,n.h)(f,null);case s.k.manageSettings:return(0,n.h)(b,null);case s.k.partnerSettings:return(0,n.h)(v,null);default:return(0,n.h)(f,null)}})(r))))):null}},4385:(e,t,r)=>{"use strict";r.d(t,{_y:()=>ce,L1:()=>ae,X9:()=>pe});var n=r(6400),i=r(396),a=r(9265);const o=e=>{e?(document.body.style.overflow="auto",document.body.style.height="auto"):(document.body.style.overflow="hidden",document.body.style.height="100%")};var s=r(7623),l=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f=[1,3,4,5,6];var b;(b||(b={})).reducer=e=>{const{customPurposes:t}=window.$adManagementConfig.web.model;return s.AC.setAll(),a.TCF.tcModel.setAll(),a.TCF.tcModel.purposeConsents.forEach(((e,t)=>{e&&a.TCF.tcModel.publisherConsents.set(t)})),a.TCF.tcModel.purposeLegitimateInterests.forEach(((e,t)=>{e&&!f.includes(t)&&a.TCF.tcModel.publisherLegitimateInterests.set(t)})),t&&t.forEach((e=>{a.TCF.tcModel.publisherCustomConsents.set(e.id)})),a.TCF.consentDoesApply({displayUi:!1}),a.TCF.setCookie(),o(!0),r=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))g.call(t,r)&&m(e,r,t[r]);return e})({},e),c(r,d({view:null}));var r};var v,y=Object.defineProperty,h=Object.defineProperties,w=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;(v||(v={})).reducer=e=>{const{customPurposes:t}=window.$adManagementConfig.web.model;return s.AC.unsetAll(),a.TCF.tcModel.purposeConsents.forEach(((e,t)=>{e&&a.TCF.tcModel.publisherConsents.unset(t)})),a.TCF.tcModel.purposeLegitimateInterests.forEach(((e,t)=>{a.TCF.tcModel.publisherLegitimateInterests.unset(t)})),t&&t.forEach((e=>{a.TCF.tcModel.publisherCustomConsents.unset(e.id)})),a.TCF.tcModel.unsetAll(),a.TCF.consentDoesApply({displayUi:!1}),a.TCF.setCookie(),o(!0),r=((e,t)=>{for(var r in t||(t={}))k.call(t,r)&&O(e,r,t[r]);if(S)for(var r of S(t))x.call(t,r)&&O(e,r,t[r]);return e})({},e),h(r,w({view:null}));var r};var C,P=Object.defineProperty,j=Object.defineProperties,E=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,T=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;(C||(C={})).reducer=e=>{return s.AC.setSome(e.acceptedAcPartners),a.TCF.consentDoesApply({displayUi:!1}),a.TCF.setCookie(),o(!0),t=((e,t)=>{for(var r in t||(t={}))F.call(t,r)&&T(e,r,t[r]);if(A)for(var r of A(t))L.call(t,r)&&T(e,r,t[r]);return e})({},e),j(t,E({view:null}));var t};var M,_=r(8245),I=Object.defineProperty,$=Object.defineProperties,D=Object.getOwnPropertyDescriptors,U=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;(M||(M={})).reducer=e=>{return a.TCF.consentDoesApply({displayUi:!0}),t=((e,t)=>{for(var r in t||(t={}))q.call(t,r)&&Z(e,r,t[r]);if(U)for(var r of U(t))N.call(t,r)&&Z(e,r,t[r]);return e})({},e),r={view:_.k.default},$(t,D(r));var t,r};var z,J=r(744),Q=Object.defineProperty,Y=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,H=(e,t,r)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;(z||(z={})).reducer=(e,{settings:t})=>{const r=((e,t)=>{for(var r in t||(t={}))V.call(t,r)&&H(e,r,t[r]);if(Y)for(var r of Y(t))G.call(t,r)&&H(e,r,t[r]);return e})({},e);return t&&t.framework===J.g.iab&&(t.status&&a.TCF.tcModel[t.property].set(t.id),!t.status&&a.TCF.tcModel[t.property].unset(t.id)),t&&t.framework===J.g.ac&&(r.acceptedAcPartners[t.id]=t.status),r};var R,W=Object.defineProperty,X=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,ee=(R||(R={})).reducer=(e,{view:t})=>{const r=(({},e);switch(t){case _.k.manageSettings:r.view=_.k.manageSettings;break;case _.k.partnerSettings:r.view=_.k.partnerSettings;break;default:r.view=_.k.default}return r};var te=r(5076),re=r(7048),ne=r(5595),ie=r(7560);const ae="#41a4a9";let oe=null;(()=>{const e=a.TCF.cookie.value,t=s.AC.value,r=(0,ne.DY)("test","gdpr");return(0,ie._d)(window.$adManagementConfig.web.model)||r||!e||!t})()?(oe=_.k.default,o(!1),a.TCF.consentDoesApply({displayUi:!0})):a.TCF.consentDoesApply({displayUi:!1});const{model:se}=window.$adManagementConfig.web,le={acceptedAcPartners:s.AC.parseString()||{},color:se.custom_cmp_color||se.brand_color||ae,header:se.custom_cmp_header,language:(0,re.y)(),privacyPolicy:se.privacy_policy_link,title:se.title,view:oe},ce=(0,n.kr)({state:le,dispatch:),de=(e,t)=>{switch(t.type){case te.e.accept:return b.reducer(e);case te.e.reject:return v.reducer(e);case te.e.save:return C.reducer(e);case te.e.settings:return M.reducer(e);case te.e.toggle:return z.reducer(e,t);case te.e.view:return R.reducer(e,t);default:return e}},pe=({children:e})=>{(0,i.cO)((e=>{window.$adManagementConfig.metricsTracker.record("gdprError",{error:e,errorMessage:"GDPR: modal rendering error"},.1)}));const[t,r]=(0,i._Y)(de,le);return(0,n.h)(ce.Provider,{value:{state:t,dispatch:r}},e)}},7048:(e,t,r)=>{"use strict";r.d(t,{_:()=>s,y:()=>o});var n=r(429),i=r(8245),a=const o=()=>n.l[(window.navigator&&window.navigator.language).toLowerCase().slice(0,2)]||n.l.en;function s(e){return a(this,arguments,(function*({language:e,view:t}){return(yield r(7322)(`./${i.k[t]}/${e}`)).default}))}},5076:(e,t,r)=>{"use strict";r.d(t,{e:()=>n});var n=(e=>(e.accept="accept",e.reject="reject",e.locale="locale",e.save="save",e.settings="settings",e.toggle="toggle",e.view="view",e))(n||{})},744:429:8245:7322:(e,t,r)=>{var n={"./default/de":[2901,9,4829],"./default/de.ts":[2901,9,4829],"./default/en":[5670,9,6523],"./default/en.ts":[5670,9,6523],"./default/es":[9880,9,9694],"./default/es.ts":[9880,9,9694],"./default/fr":[5925,9,3777],"./default/fr.ts":[5925,9,3777],"./default/it":[120,9,9096],"./default/it.ts":[120,9,9096],"./default/nl":[8207,9,4766],"./default/nl.ts":[8207,9,4766],"./default/sv":[6241,9,5526],"./default/sv.ts":[6241,9,5526],"./manageSettings/de":[101,9,9232],"./manageSettings/de.ts":[101,9,9232],"./manageSettings/en":[3348,9,4761],"./manageSettings/en.ts":[3348,9,4761],"./manageSettings/es":[122,9,1267],"./manageSettings/es.ts":[122,9,1267],"./manageSettings/fr":[9528,9,1512],"./manageSettings/fr.ts":[9528,9,1512],"./manageSettings/it":[4610,9,4270],"./manageSettings/it.ts":[4610,9,4270],"./manageSettings/nl":[8204,9,4138],"./manageSettings/nl.ts":[8204,9,4138],"./manageSettings/sv":[2914,9,5408],"./manageSettings/sv.ts":[2914,9,5408],"./partnerSettings/de":[2291,9,3532],"./partnerSettings/de.ts":[2291,9,3532],"./partnerSettings/en":[7306,9,9990],"./partnerSettings/en.ts":[7306,9,9990],"./partnerSettings/es":[2868,9,6691],"./partnerSettings/es.ts":[2868,9,6691],"./partnerSettings/fr":[6355,9,7558],"./partnerSettings/fr.ts":[6355,9,7558],"./partnerSettings/it":[9474,9,945],"./partnerSettings/it.ts":[9474,9,945],"./partnerSettings/nl":[4962,9,5159],"./partnerSettings/nl.ts":[4962,9,5159],"./partnerSettings/sv":[3954,9,5583],"./partnerSettings/sv.ts":[3954,9,5583],"./privacySettingsLink/de":[7507,9,9190],"./privacySettingsLink/de.ts":[7507,9,9190],"./privacySettingsLink/en":[696,9,4784],"./privacySettingsLink/en.ts":[696,9,4784],"./privacySettingsLink/es":[8300,9,7304],"./privacySettingsLink/es.ts":[8300,9,7304],"./privacySettingsLink/fr":[5246,9,2895],"./privacySettingsLink/fr.ts":[5246,9,2895],"./privacySettingsLink/it":[7433,9,2640],"./privacySettingsLink/it.ts":[7433,9,2640],"./privacySettingsLink/nl":[2805,9,6109],"./privacySettingsLink/nl.ts":[2805,9,6109],"./privacySettingsLink/sv":[4007,9,9104],"./privacySettingsLink/sv.ts":[4007,9,9104],"./type/":[1675,9,8186],"./type/defaultCopy":[8454,7,8863],"./type/defaultCopy.ts":[8454,7,8863],"./type/index":[1675,9,8186],"./type/index.ts":[1675,9,8186],"./type/manageSettings":[1130,7,1778],"./type/manageSettings.ts":[1130,7,1778],"./type/partnerSettings":[3032,7,9956],"./type/partnerSettings.ts":[3032,7,9956]};.keys=i.id=7322,e.exports=i}}]);