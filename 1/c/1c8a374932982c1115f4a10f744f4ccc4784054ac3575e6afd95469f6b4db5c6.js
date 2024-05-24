import{objDataset as v,fetchJson as S,createEvent,isFunction as l,isElement as u,debug,resolve}from"./croco.js";import{LOGGERS as t,INVALID_PARAMETER as h,noElement as j}from"./config.js";import{loader as L}from"./loader.js";import{sendEvent as C}from"./event-tracker.js";import{initPasswordReveal as k}from"../components/field-password.js";const q=t.FORM;let A=null;export function updateFieldValidity(t,i){if(!u(t)){debug("error",q,h,t);return}const o=t.validity;for(const key in o){if(!o.hasOwnProperty(key)&&key!=="valid"){t.classList.toggle(`invalid--${key.toLowerCase()}`,o[key])}}if(i){t.classList.remove("invalid--customerror");t.classList.add("invalid--specificerror")}}export function setGlobalError(t,message=""){const i=t.querySelector(".js-global-error");if(i){i.innerHTML=message}}export function setSpecificError(t,message=""){const i=t.parentNode.querySelector(".js-specific-error");t.classList.add("js-field-specific-constraint");if(i){i.innerHTML=message}}export function setCustomConstraint(t,i){if(!u(t)||!l(i)){debug("error",q,h,t,i);return}t.classList.add("js-field-custom-constraint");t.addEventListener(t.nodeName==="INPUT"?"input":"change",function(){const t=i.call(this);this.setCustomValidity(t?"":" ")})}function I(o,key,...l){const u=v(o,key);if(u){for(let t=0,i=u.length;t<i;t++){u[t].call(o,...l)}}}function o(t,key,i){const o=v(t,key)||[];if(l(i)){o.push(i)}else{debug("error",q,h,i)}v(t,key,o)}export function addBeforeSubmitCallback(t,i){o(t,"beforeSubmitCallbacks",i)}export function addSubmitCallback(t,i){o(t,"submitCallbacks",i)}export xport function setCustomLoader(t,i){if(l(i)){v(t,"customLoader",i)}else{debug("error",q,h,i)}}function V(t,isEnabled){const i=t.querySelectorAll(".js-submit");[...i].forEach(t=>{t.disabled=isEnabled;t.classList.toggle("non-critical-skeleton",isEnabled)})}function T(e){I(this,"resetCallbacks",e);this.classList.remove("interacted");[...this.querySelectorAll(".interacted")].forEach(;const t=[...this.elements].find(;t&&t.focus()}async function N(e){I(this,"beforeSubmitCallbacks",e);this.classList.add("interacted");let i=false;const t=this.dataset.async||false;this.querySelector('input[type="submit"]').setCustomValidity("");setGlobalError(this,"");const o=this.querySelectorAll(".js-field-specific-constraint");[...o].forEach(;const l=this.querySelectorAll(".js-field-custom-constraint");[...l].forEach(t=>{t.setCustomValidity("");t.dispatchEvent(t.nodeName==="INPUT"?createEvent("input"):createEvent("change"))});i=this.checkValidity();[...this.elements].forEach(;if(i&&t){e.preventDefault();const{getParentPopin:u}=await import("./popin.js");const formData=new FormData(this);let t=null;const h=u(this);if(h){t=h.$loader}const m=v(this,"customLoader");if(m){m.call(this,true)}else{L.begin(t)}V(this,true);const response=await S(this.action,{method:"POST",body:formData});V(this,false);if(response&&!response.valid){i=false;if(response.fields){response.fields.filter(.forEach(u=>{const t=this.elements[u.id]instanceof RadioNodeList?this.elements[u.id][0]:this.elements[u.id];const i=u.errors.map(error=>{let t=null;const i=error.split(".");if(i.length>0){const o=u.options[i[0]];if(o&&o.length>1&&i.length>1){const l=o.filter(t=>{return t.id===i[1]});t=l.length?l[0].error:null}else if(o){t=o.error}else{t=error}}return t});if(t){setSpecificError(t,i.join("<br />"));t.setCustomValidity(" ");updateFieldValidity(t,true)}else{debug("error",q,j(`#${u.id}`),"to apply error")}})}if(response.errors&&response.errors.length){setGlobalError(this,response.errors.join("<br />"));this.querySelector('input[type="submit"]').setCustomValidity(" ")}}const p=resolve("submitEvent",response);if(p){await C(resolve("event",p),resolve("data",p))}I(this,"submitCallbacks",response,e);if(response&&response.valid&&response.redirectUrl){window.location.href=response.redirectUrl}else{L.done(t)}if(m){m.call(this,false)}}if(!i){debug("warn",q,"invalid form");e.preventDefault();const g=[...this.elements].find(;g&&g.focus()}}function P(){A=setTimeout(()=>{this.parentNode.classList.add("interacted");updateFieldValidity(this)},100)}nction H(){if(this.scrollHeight>this.offsetHeight){this.style.height="inherit";this.style.height=this.scrollHeight+1+"px"}const t=this.parentNode.querySelector(".js-textarea-counter");if(t){t.innerHTML=this.textLength}}function M(t){const i=document.querySelector(`#${t.dataset.targetId}`);if(i){setCustomConstraint(t,function(){return t.value===""||t.value===i.value});i.addEventListener("input",function(){t.value="";t.dispatchEvent(createEvent("input"))})}else{debug("error",q,"no confirmation field setted",j(`#${t.dataset.targetId}`))}}function m(t,mask){const i=/[\/\-]/;const o=t.split(i);const l=mask.split(i);const u={};l.forEach((value,index)=>{u[value.toLowerCase()]=o[index]});return parseInt(`${u.yyyy}${u.mm}${u.dd}`,10)}function O(){let t=true;const mask=this.dataset.mask;if(this.value!==""&&mask&&(this.min||this.max)&&!this.validity.typeMismatch&&!this.validity.patternMismatch){const i=m(this.value,mask);const o=this.min?parseInt(this.min.replace(/-/g,""),10):-1;const l=this.max?parseInt(this.max.replace(/-/g,""),10):i+1;if(i<o||i>l){t=false}}return t}export function formsInit(t){const i=t?[t]:document.querySelectorAll(".js-form");[...i].forEach(l=>{if(!l.dataset.formInit){l.dataset["formInit"]=true;l.addEventListener("reset",T);l.addEventListener("submit",N);const t=l.querySelectorAll(".js-field:not([type=hidden])");[...t].forEach(t=>{t.addEventListener("blur",P)});const i=l.querySelectorAll(".js-field-select");[...i].forEach(t=>{$(t);t.addEventListener("change",F)});const o=l.querySelectorAll(".js-field-date");[...o].forEach(t=>{if(t.dataset.mask&&(t.min||t.max)){setCustomConstraint(t,O.bind(t))}});const u=l.querySelectorAll(".js-field-textarea");[...u].forEach(;k(l,A);const h=l.querySelectorAll(".js-constraint-confirm");[...h].forEach(;const m=l.querySelectorAll(".js-blocked-rules");[...m].forEach(i=>{const o=JSON.parse(i.dataset.blockedRules).map(i=>{let t=l.elements[i.id];if(i.value){t=(t.length?[...t]:[t]).find(}return t});o.forEach(t=>{t&&t.addEventListener("change",()=>{const t=[...o].map(.reduce(;if(t){i.removeAttribute("disabled")}else{i.setAttribute("disabled","disabled")}})})});const p=l.querySelectorAll(".js-input-redirect");[...p].forEach(t=>{t.addEventListener("click",e=>{const t=e.currentTarget;const method=t.dataset.method.toUpperCase();if(method==="POST"){S(t.dataset.url,{method:method}).then(response=>{if(response&&response.redirection){window.location.href=response.redirection}})}else{window.location.href=t.dataset.url}})});const g=l.querySelectorAll(".js-service-callback");[...g].forEach(async t=>{if(t.dataset.serviceId==="address-suggest"){const{initAddressSuggest:i}=await import("../components/address-suggest.js");i(t)}else if(t.dataset.serviceId==="daum"){const{initAddressSuggestDaum:o}=await import("../components/address-suggest-daum.js");o(t)}else if(t.dataset.serviceId==="phone-suggest"){const{initPhoneSuggest:l}=await import("../components/phone-suggest.js");l(t)}else if(t.dataset.serviceId==="zipcode-suggest"){const{initZipcodeSuggest:u}=await import("../components/zipcode-suggest.js");u(t)}else if(t.dataset.serviceTarget){const{initCorrelativeList:h}=await import("../components/correlative-list.js");h(t)}});V(l,false)}})}