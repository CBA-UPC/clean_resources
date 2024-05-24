import{f as a,a3 as D,az as L,bs as G,bt as N,g as U}from"./index-172e3f67.js";const s={backgroundColor:"--form-common-box-background-color",boxShadowColor:"--form-common-box-shadow-color",boxShadowColorHover:"--form-common-box-shadow-color-hover",boxShadowColorError:"--form-common-box-shadow-color-error",textColor:"--form-common-text-color"},nr=`
  ${s.backgroundColor}: ${a.DARK_BLUE_GREY_01};
  ${s.boxShadowColor}: ${a.BLUE_GREY_02};
  ${s.boxShadowColorHover}: ${a.BLUE_GREY_01};
  ${s.boxShadowColorError}: ${a.ACCENT_RED};
`,ar=D`
  background-color: var(${s.backgroundColor}, ${a.WHITE});
  border: none;
  box-shadow: inset 0 0 0 1px var(${s.boxShadowColor}, ${a.BLUE_GREY_04});
  &.error {
    box-shadow: inset 0 0 0 2px var(${s.boxShadowColorError}, ${a.BREAKING_RED});
  }
  &:hover, &:active, &:focus {
    box-shadow: inset 0 0 0 2px  var(${s.boxShadowColorHover}, ${a.DW_DARK_BLUE});
  };
  &:focus {
    outline: none;
  }
`,sr=N.DARK_BLUE_GREY_02_AND_BLUE_GREY_01.darkStyles,cr=D`
  font-family: var(${L.fontFamily}, Pangea), ${G};
  ${N.DARK_BLUE_GREY_02_AND_BLUE_GREY_01.lightStyles}
  font-style: normal;
  font-stretch: normal;
  line-height: 1.1;
  letter-spacing: normal;

  font-size: 1.6rem;

  width: 100%;
  padding: 14px 18px;
`;var I={exports:{}},o={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e=typeof Symbol=="function"&&Symbol.for,E=e?Symbol.for("react.element"):60103,h=e?Symbol.for("react.portal"):60106,l=e?Symbol.for("react.fragment"):60107,u=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,p=e?Symbol.for("react.provider"):60109,y=e?Symbol.for("react.context"):60110,w=e?Symbol.for("react.async_mode"):60111,m=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,b=e?Symbol.for("react.suspense"):60113,Y=e?Symbol.for("react.suspense_list"):60120,S=e?Symbol.for("react.memo"):60115,$=e?Symbol.for("react.lazy"):60116,z=e?Symbol.for("react.block"):60121,K=e?Symbol.for("react.fundamental"):60117,H=e?Symbol.for("react.responder"):60118,W=e?Symbol.for("react.scope"):60119;function t(r){if(typeof r=="object"&&r!==null){var n=r.$$typeof;switch(n){case E:switch(r=r.type,r){case w:case m:case l:case i:case u:case b:return r;default:switch(r=r&&r.$$typeof,r){case y:case d:case $:case S:case p:return r;default:return n}}case h:return n}}}function j(r){return t(r)===m}o.AsyncMode=w;o.ConcurrentMode=m;o.ContextConsumer=y;o.ContextProvider=p;o.Element=E;o.ForwardRef=d;o.Fragment=l;o.Lazy=$;o.Memo=S;o.Portal=h;o.Profiler=i;o.StrictMode=u;o.Suspense=b;o.isAsyncMode=function(r){return j(r)||t(r)===w};o.isConcurrentMode=j;o.isContextConsumer=function(r){return t(r)===y};o.isContextProvider=function(r){return t(r)===p};o.isElement=function(r){return typeof r=="object"&&r!==null&&r.$$typeof===E};o.isForwardRef=function(r){return t(r)===d};o.isFragment=function(r){return t(r)===l};o.isLazy=function(r){return t(r)===$};o.isMemo=function(r){return t(r)===S};o.isPortal=function(r){return t(r)===h};o.isProfiler=function(r){return t(r)===i};o.isStrictMode=function(r){return t(r)===u};o.isSuspense=function(r){return t(r)===b};o.isValidElementType=function(r){return typeof r=="string"||typeof r=="function"||r===l||r===m||r===i||r===u||r===b||r===Y||typeof r=="object"&&r!==null&&(r.$$typeof===$||r.$$typeof===S||r.$$typeof===p||r.$$typeof===y||r.$$typeof===d||r.$$typeof===K||r.$$typeof===H||r.$$typeof===W||r.$$typeof===z)};o.typeOf=t;I.exports=o;var V=I.exports,g=V,k={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},q={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},J={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},B={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R={};R[g.ForwardRef]=J;R[g.Memo]=B;function T(r){return g.isMemo(r)?B:R[r.$$typeof]||k}var Q=Object.defineProperty,X=Object.getOwnPropertyNames,A=Object.getOwnPropertySymbols,Z=Object.getOwnPropertyDescriptor,rr=Object.getPrototypeOf,O=Object.prototype;function F(r,n,v){if(typeof n!="string"){if(O){var _=rr(n);_&&_!==O&&F(r,_,v)}var f=X(n);A&&(f=f.concat(A(n)));for(var P=T(r),C=T(n),x=0;x<f.length;++x){var c=f[x];if(!q[c]&&!(v&&v[c])&&!(C&&C[c])&&!(P&&P[c])){var M=Z(n,c);try{Q(r,c,M)}catch{}}}}return r}var or=F;const fr=U(or);export{cr as a,sr as b,nr as d,fr as h,ar as i};
//# sourceMappingURL=hoist-non-react-statics.cjs-ac049ed2.js.map
