import{html as h}from"../../vendors/lit-html/lit-html.js";import{tplCta as k}from"../components/cta.tpl.js";import{tplIcon as N}from"../components/icon.tpl.js";import{resolve}from"../../base/croco.js";import{getAutomationClass as j,ctaTypes as T}from"../../base/config.js";import{tplLink as m}from"../myaccount/components/link.tpl.js";const i=({links={},subtitle:l,isBurgerContext:i,label,logoutWarning:t})=>{const o=["profile","rewards","contributions","advantages","orders","customerService"];return h`<div class="${i?"l-padding--small l-vmargin--large":"l-padding--large"} padding-1">
        ${!i?h`<div class="flex flex--align-center font-large l-vmargin--large">
            ${N({name:"my-account",className:"font-large l-hmargin--small",source:"critical"})}
            <span>${label}</span>
        </div>`:""}

        <p class="fw-bold l-vmargin--xlarge font-medium">${l}</p>

        <ul class="font-medium l-vmargin--xlarge">
            ${o.map(key=>links[key]?h`<li class="l-vmargin--large">${m({...links[key],theme:i?"dark":"light"})}</li>`:"")}
        </ul>
        ${k({label:links.logout.label,url:links.logout.url,type:T.BUTTON,className:"js-social-logout"+(t?" l-vmargin--large":"")})}
        ${t?h`<p class="font-medium">${t}</p>`:""}
    </div>
`};const t=({label,loyalty:l,login:i={},register={},switchAccount:t={},isBurgerContext:o,order={}})=>{const[m,g]=resolve(["wording.title","wording.text"],l);const[p,u]=resolve(["link.url","link.label"],register);const[$,v]=resolve(["link.url","link.label"],order);return h`<div class="${o?"l-padding--small l-vmargin--large":"l-padding--large"} padding-1">
        ${!o?h`<div class="flex flex--align-center font-large l-vmargin--large">
            ${N({name:"my-account",className:"font-large l-hmargin--small",source:"critical"})}
            <span>${label}</span>
        </div>`:""}

        ${l&&l.wording?h`
            <p class="fw-bold font-medium l-vmargin--small">${m}</p>
            <p class="font-medium l-vmargin--medium">${g}</p>`:""}

        <div class="flex flex--align-center l-vmargin--small">
            ${t.link?k({...t.link,type:l?T.BUTTON:T.BUTTON_PRIMARY,className:`font-medium  l-hmargin--medium ${l?"":"text-white"} ${j("header","authenticationLogin")}`}):""}
            ${i.link?k({...i.link,type:l?T.BUTTON_PRIMARY:T.BUTTON,className:`font-medium ${l?"":"text-white"} ${j("header","authenticationLogin")}`}):""}
        </div>

        ${!l&&register.link?h`<p class="font-medium">
            ${register.label}
            <a href="${p}" class="reverse-link">${u}</a>
        </p>`:""}
    </div>

    <div class="${!o?"js-guest-reinsurance":"js-guest-reinsurance-burger-context"} l-aspect-ratio--16-9 l-aspect-ratio-m--1 l-aspect-ratio loading-skeleton"></div>

    ${!o&&order.link?h`<a href="${$}" class="flex flex--align-center padding-1 l-padding--medium font-medium ${j("header","authenticationConsultOrder")}">
        ${N({name:"express-delivery",className:"font-xlarge l-hmargin--small"})}
        <span>${v}</span>
    </a>`:""}
    `};export const tplMyAccountPanel=(l={})=>{return l.isLogged?i(l):t(l)};export const tplMyAccountBurger=(l={})=>{const i=resolve("login.link.url",l);return!l.loyalty&&!l.isLogged?h`
    <a href="${i}" class="flex flex--space-between flex--align-center padding-1 l-padding--xsmall l-vmargin--medium">
        <span class="font-large flex flex--align-center">
            ${N({name:"my-account",source:"critical",className:"l-hmargin--small no-scale"})}
            <span>${l.label}</span>
        </span>
        ${N({name:"chevron-right",size:"large"})}
    </a>`:h`
    <div class="js-accordion-wrapper">
        <div class="js-accordion accordion is-active">
        <div class="padding-1">
            <span class="font-large flex flex--align-center">
                ${N({name:"my-account",source:"critical",className:"l-hmargin--small no-scale"})}
                <span>${l.label}</span>
            </span>
        </div>
            ${tplMyAccountPanel({...l,isBurgerContext:true})}
    </div>
</div>`};