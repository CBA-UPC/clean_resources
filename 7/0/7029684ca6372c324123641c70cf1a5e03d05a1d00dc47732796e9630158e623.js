import{l as p,r as h,c,G as r,P as u,Y as i,N as y,bi as k,z as d,a as L,R as n,a6 as V,Q as w,_ as B}from"./graphql.5cf3693b.js";import{as as g}from"./itinerary-entities.5f897bcd.js";const M=["disabled"],C={key:0,class:"label"},S=p({__name:"MrSwitch",props:{modelValue:{type:Boolean},size:{default:"medium"},label:{default:""},activeLabel:{default:""},inactiveLabel:{default:""},disabled:{type:Boolean},readOnly:{type:Boolean},rightLabel:{type:Boolean}},emits:["update:modelValue"],setup(a,{expose:b,emit:f}){const s=h(null),l=c({getset),o=c(()=>a.activeLabel&&a.inactiveLabel?l.value?a.activeLabel:a.inactiveLabel:a.label);function m(){s.value&&(s.value.checked=a.modelValue)}return b({restart:m}),(e,t)=>(r(),u("div",{class:n(["mr-switch-container",{"right-label":e.rightLabel,disabled:e.disabled}]),onClick:t[1]||(t[1]=B(["stop"]))},[i("label",{class:n(["switch",[e.size]])},[y(i("input",{id:"input-checkbox",ref_key:"native",ref:s,"onUpdate:modelValue":t[0]||(t[0]=,class:"input",type:"checkbox",disabled:e.disabled||e.readOnly},null,8,M),[[k,d(l)]]),i("span",{class:n(["slider",{disabled:e.disabled}])},null,2)],2),d(o)?(r(),u("div",C,V(d(o)),1)):w("",!0)],2))}});const _=g(S,[["__scopeId","data-v-1dcf795f"]]);export{_ as M};