import{delegate as t,debounced as o,scrollToElement as i}from"../framework/base/croco.js";import{mediaQuery as m,EVENTS as l,getHeaderHeight as p}from"../framework/base/config.js";import{popinInit as u}from"../framework/base/popin.js";import{headerBurgerInit as h}from"../framework/components/header-burger.js";import{headerTransparentInit as k}from"../framework/components/header-transparent.js";import{lazyloader as g}from"../framework/modules/lazyload.js";const j=["desktopOnly","mobileOnly","tabletOnly"];let v="";function O(){for(let t=0,o=j.length;t<o;t++){if(m[j[t]].matches){if(v!==j[t]){v=j[t];window.dispatchEvent(new CustomEvent(l.BREAKPOINT_CHANGE,{detail:v}))}}}}const A=o(200,O);function C(e){e.preventDefault();const t=e.delegateTarget.hash;if(t.trim().length){const o=document.querySelector(t);o&&i({$target:o,delta:-p()})}}function N(){t(document.documentElement,'a[href^="#"]',"click",C);window.addEventListener("resize",A)}function init(){performance.mark("critical_init");N();g.update();u();k();h()}window.criticalReady(init);