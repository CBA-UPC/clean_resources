import{resolve,fetchHtml as p,isElement as g,setCookie as m,getCookie as l,throttled as S,debounced as k}from"../base/croco.js";import{EVENTS as v}from"../base/event-tracker.js";import{sendPromotionEvent as O,addSelectPromotionEvent as I}from"../../non-critical/modular-non-critical.js";import{Mediator as j}from"../base/mediator.js";const L=t=>{let o=null;if(t){const i="cookie"+resolve("dataset.id",t);o=l(i);if(o){o=JSON.parse(decodeURIComponent(o))}}return o};const h=(o,action)=>{if(o){const i="cookie"+resolve("dataset.id",o);let t=L(o);const l=(new Date).getTime();if(!t){const u=action==="readMore";t={isClosed:u}}else{t.isClosed=true}t.actionDate=l;m(i,JSON.stringify(t),365)}};const C=t=>{const o=L(t);if(o){const i=new Date(o.actionDate).setHours(24,0,0,0);const now=(new Date).getTime();if(now>=i){const l="cookie"+resolve("dataset.id",t);m(l,JSON.stringify(o),-365)}}};const N=t=>{const o=L(t);return!o||!o.isClosed};const T=(rules,t)=>{let i=false;const[l,u=[]]=resolve(["pageInfo.type","pageInfo.contentIds"],window);u.unshift("*");const o=resolve("inclusions",rules)||[];for(let{pageType:m,contentIds:p}of o){const g=p&&p.split(",")||[];if(m==="all"||l&&m===l&&g.some(id=>u.includes(id))){i=N(t);break}}if(i){const v=resolve("exclusions",rules)||[];for(let{pageType:t,contentIds:o}of v){const O=o&&o.split(",")||[];if(t==="all"||l&&t===l&&O.some(){i=false;break}}}return i};const D=o=>{const t=o.querySelector(".js-bottom-message-close");const i=o.querySelector(".js-accordion-handle");let l;let u;let m;let p;const g=t=>{o.classList.add("is-hidden");t&&h(o,"close");m&&window.removeEventListener("scroll",m);p&&window.removeEventListener("scroll",p);u&&u.unobserve(l)};t&&t.addEventListener("click",;i&&i.addEventListener("click",{once:true});const v=resolve("dataset.autohide",o);if(v&&v!=="off"){const O=()=>{let t=document.documentElement.getBoundingClientRect();if(v==="oneScroll"||v==="on"&&window.scrollY>t.height/4){g(false)}};m=S(200,O);p=k(100,O);window.addEventListener("scroll",m,false);window.addEventListener("scroll",p,false)}j.subscribe("sticky-add-to-cart-visible",visible=>{if(visible){g(false)}});l=document.querySelector(".js-footer");if(l){u=new IntersectionObserver(entries=>{for(let t of entries){if(t.intersectionRatio>0){g(false)}}});u.observe(l)}};const R=t=>{const o=resolve("dataset.trackingData",t);return o?JSON.parse(o):null};export const initBottomMessage=async()=>{const o=document.querySelector(".js-bottom-message-container");const t=resolve("dataset.url",o);if(t){const i=await p(t);const{accordionInit:l}=await import("./accordion.js");if(i&&g(i)){for(let t of[...i.querySelectorAll(".js-bottom-message")]){const u=resolve("dataset.displayRules",t);const rules=u&&JSON.parse(u);C(t);if(rules&&T(rules,t)){o.appendChild(t);l(o);D(t);const m=R(t);O(t,null,v.VIEW_PROMOTION,m);I(t,null,v.SELECT_PROMOTION,m);break}}}}};