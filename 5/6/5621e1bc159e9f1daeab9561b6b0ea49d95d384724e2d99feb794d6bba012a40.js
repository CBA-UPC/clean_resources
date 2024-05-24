import{html as p}from"../../vendors/lit-html/lit-html.js";import{resolve}from"../../base/croco.js";import{tplIcon as l}from"../components/icon.tpl.js";const u=(link,icon)=>{const[url,label]=resolve(["url","label"],link);return url&&label?p`<a href="${url}" class="header-account-link flex flex--align-center padding-mt-1 l-padding--small">
        ${l({...icon,size:"large",className:"l-hmargin--small "+icon.className})}
        <span class="flex--basis-full">${label}</span>
        ${l({name:"chevron-down",className:"header-chevron-icon no-desk"})}
    </a>`:null};export const tplLinksBurger=({wishlist:l,storeLocator:o,faq:t,consultOrder:i,myAccountPanel:m})=>{return p`<div class="font-small ${resolve("isLogged",m)?"l-padding--small":""}">
        ${u(o,{name:"store-locator",source:"critical"})}
        ${u(i,{name:"express-delivery"})}
        ${u(l,{name:"love",className:"icon-love"})}
        ${u(t,{name:"question"})}
    </div>`};