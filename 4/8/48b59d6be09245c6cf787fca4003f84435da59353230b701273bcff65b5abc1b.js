import{i as r,o as i,u as s}from"./dateRules_139f881d_r24-02-0_b0_t240129-161140.js";import{ao as e,r as c,q as d}from"./vendor_6ed58054_r24-02-0_b0_t240129-161140.js";const h=()=>{const t=e(c({birthday:""})),o=d(,a=s(o,t,{$lazy:!0});return{birthdayData:t,birthdayValidator:a,checkFromToValidation:async()=>(a.value.$touch(),!!await a.value.$validate())}};export{h as u};