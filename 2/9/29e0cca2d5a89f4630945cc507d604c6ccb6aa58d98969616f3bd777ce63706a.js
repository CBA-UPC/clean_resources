import{resolve,fetchJson as m}from"../base/croco.js";const o=async t=>{const{openPopin:o}=await import("../base/popin-refit.js");const title=resolve("dataset.countriesLabel",t);const u=resolve("dataset.countriesUrl",t);o({instanceId:"popin-footer-countries",loadContents:async(t,o)=>{const{tplFooterCountries:i}=await import("../templates/footer-countries.tpl.js");const l=(event,key)=>{[...o.$viewContent.querySelectorAll(".js-continent-filter")].forEach(;event.target.closest("button").classList.toggle("text-white");[...o.$viewContent.querySelectorAll(".js-continent-container")].forEach(t=>{t.classList.toggle("is-hidden",!(resolve("dataset.continent",t)===key||key==="all"))})};const p=u?resolve("countries",await m(u)):null;return{title:title,contents:i(p,l)}}})};function t(){const t=document.querySelector(".js-popin-countries");t&&t.addEventListener("click",}export 