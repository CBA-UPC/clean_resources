import{getAutomationClass as i,mediaQuery as l,POPIN_REFIT_TYPES as p}from"../base/config.js";import{isFunction as t}from"../base/croco.js";import{repeat}from"../vendors/lit-html/directives/repeat.js";import{html as m}from"../vendors/lit-html/lit-html.js";import{tplCta as v}from"./components/cta.tpl.js";import{tplIcon as $}from"./components/icon.tpl.js";const g=(l,o)=>{return m`<button class="${i("panel","buttonClosePanel")} js-popin-close popin-close-button ${l}">
        ${$({name:"close",className:"icon-close"})}
        <span class="visually-hidden">${o}</span>
    </button>`};export const tplHeader=({title,subtitle:l,closeClassName:o="",closeLabel:i,back,icon,type}={})=>{let result="";const t=back?m`<button class="js-subpanel-back popin-back-button" @click="${back}">
        ${$({name:"arrow-left",className:"icon-back pointer-auto"})}
    </button>`:"";if(!title&&!l&&!icon){result=m`<div class="l-popin-close ${back?"l-popin-close-banner":""} l-popin-close flex flex--align-center flex--row-reverse flex--space-between pointer-none">
            ${g(`${o} pointer-auto`,i)}
            ${t}
        </div>`}else{result=m`<div class="popin-header-container${type===p.alert?" l-vmargin--large l-mt-vmargin--small":" bg-white"}">
            <div class="flex flex--align-center flex--space-between">
                ${t}
                ${title||icon?m`<h2 role="heading" class="flex flex--align-center font-large">${icon?$({name:icon.name,size:icon.size||"large",className:icon.className||"l-hmargin--small"}):""}<span>${title}</span></h2>`:""}
                ${g(o,i)}
            </div>
            ${l?m`<h3 class="font-medium flex flex--basis-full">${l}</h3>`:""}
        </div>`}return result};export const tplPopin=()=>m`
    <div class="js-popin-wrapper popin-wrapper popin-refit is-hidden ${l.mobileAndTablet.matches?"hides-page":""}">
        <span class="js-ada-loop-start" tabindex="0"></span>
        <div class="js-popin popin" role="dialog" aria-modal="true">
            <div class="js-popin-loader"></div>
            <div class="popin-content l-fill-height flex flex--col">
                <div class="js-popin-header popin-header">
                    ${tplHeader()}
                </div>
                <div class="js-popin-content flex--grow l-overflow-hidden"></div>
                <div class="js-popin-footer"></div>
            </div>
        </div>
        <span class="js-ada-loop-stop" tabindex="0"></span>
    </div>
`;export const tplAlert=export const tplAlertFooter=(buttons,o)=>{return repeat(buttons,l=>v({...l,className:`l-mt-fill-width l-hmargin--small l-mt-no-margin l-mt-vmargin--medium ${l.className||""}`,onClick:e=>{o.close();t(l.onClick)&&l.onClick(e)}}))};