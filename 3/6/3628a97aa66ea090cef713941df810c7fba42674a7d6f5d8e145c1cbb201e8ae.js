"use strict";(globalThis.__LOADABLE_LOADED_CHUNKS__=globalThis.__LOADABLE_LOADED_CHUNKS__||[]).push([[3168],{3168:(o,e,r)=>{r.r(e),r.d(e,{triggerResourceGatingFlowByDirectLink:()=>l});var t=r(97357),i=r(57779),s=r(62257),n=r(11261),a=r(16072);const{sessionStorageItemName:{FORM_REFERRER:c}}=i.consts,l=async()=>{const o=(0,t.Cx)(location.search),e=(0,t.lM)(o.loginFormUrl).query.gated_resource_path;if(!e)return;sessionStorage.setItem(c,window.SAP?.sapdx?.gating?.analytics?.getReferrer?.(!1));const r=window.location.protocol,i=window.location.origin,l=(0,s.b)(r,i,e),g={redirectTo:l},_=l&&(0,t.lM)(l).query.source;_&&(g.source=_),n.RW.isAuthenticated()?window.location.assign(e):(0,a.f1)(e,o.loginFormUrl,g)}}}]);