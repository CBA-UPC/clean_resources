import{mediaQuery as o}from"../base/config.js";import{resolve}from"../base/croco.js";const t=window.Lacoste?.siteprefs?.LAZYLOAD?.OFFSET_MOBILE;const l=window.Lacoste?.siteprefs?.LAZYLOAD?.OFFSET_DESKTOP;const i="lazyloading";const L="lazyloaded";const m=".js-lazyload-wrapper";const _={elements_selector:".js-lazyload",class_loading:i,class_loaded:L,thresholds:resolve("mobileOnly.matches",o)?t:l,use_native:false,data_src:"src",data_srcset:"srcset",callback_loading:o=>{const t=o.closest(m);t&&t.classList.add(i)},callback_loaded:o=>{const t=o.closest(m);if(t){const l=t.querySelector(".loading-skeleton");t.classList.remove("loading-skeleton");t.classList.remove(i);t.classList.add(L);if(l){l.classList.remove("loading-skeleton")}}}};export const lazyloader=typeof window.LazyLoad!=="undefined"&&new window.LazyLoad(_);export const initAlternate=()=>{if(!document.querySelector(".js-alternate-sources-enabled")){[...document.querySelectorAll(".js-alternate-lazyload")].forEach(o=>{o.classList.remove("js-alternate-lazyload");o.classList.add("js-lazyload")});lazyloader.update()}else{typeof window.LazyLoad!=="undefined"&&new window.LazyLoad({..._,elements_selector:".js-alternate-lazyload",data_src:"alternate-src",data_srcset:"alternate-srcset"})}};