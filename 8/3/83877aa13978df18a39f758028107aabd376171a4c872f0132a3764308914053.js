(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{241:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return c})),n.d(t,"b",();const o=r=(e,t,n)=>{new IntersectionObserver(((e,n)=>{e.forEach((e=>{e.isIntersecting&&(n.unobserve(e.target),t(e.target))}))}),n).observe(e)},d=(e,t,n)=>(e.addEventListener(t,n),;let i=0;function c(e){i+=e?1:-1,1===i&&document.body.classList.add("overflow--hidden"),0===i&&document.body.classList.remove("overflow--hidden")}function s(e,t){const n=document.createElement(t);for(const t of e.attributes)n.setAttributeNS(null,t.name,t.value);for(;e.firstChild;)n.appendChild(e.firstChild);return e.replaceWith(n),n}}}]);