import{isRTLEnabled as t}from"../base/config.js";import{centerElement as g,delegate as h,domRemoveChildren as j,getTypedDataset as S,objDataset as q}from"../base/croco.js";import{lazyloader as T}from"../modules/lazyload.js";import{SnapSlider as k,DATASET_KEY as A}from"../modules/snap-slider.js";const C=t();const I=document.documentElement.classList.contains("touchevents");export function sliderInit(t=document.querySelectorAll(".js-snap-slider-wrapper")){[...t].forEach(async t=>{let i=q(t,A);let v=null;function o(e){e.preventDefault();const o=e.delegateTarget;const t=i.$slides;if(t&&o){i.slideTo(t.indexOf(t.find())}}function l(t,o){if(v){const i=t[o];const group=i&&i.dataset.group;group&&[...v.querySelectorAll(".js-slideshow-tab")].forEach(t=>t.classList.toggle("is-active",t.id===group));g(v,".is-active",true)}for(let l=0,u=t.length;l<u;l++){const p=t[l].querySelector(".js-static-video-wrapper");const m=p&&p.querySelector(".js-video-player");if(m){const h=q(p,"youtubevideo")||q(p,"staticvideo");h&&h[l===o&&m.autoplay?"play":"pause"]()}}}if(!i){const options=S(t);if(options&&options.sliderTabs){v=document.querySelector(options.sliderTabs);if(v){h(v,".js-slideshow-tab","click",o.bind(this));if(C&&I){const p=[...v.children];j(v);p.reverse().forEach(}}}const u=[...t.querySelectorAll(".js-static-video-wrapper")];if(u.length){const{videosInit:m}=await import("../modules/abstract-video.js");m(u)}if(!q(t,"changeSlideCallback")){q(t,"changeSlideCallback",l)}i=new k(t,options);T&&T.update()}})}