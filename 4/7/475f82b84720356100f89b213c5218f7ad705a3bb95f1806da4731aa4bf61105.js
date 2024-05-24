"use strict";import{getAutomationClass as i}from"../../base/config.js";import{html as m}from"../../vendors/lit-html/lit-html.js";import{tplIcon as p}from"./icon.tpl.js";export const tplLoyaltyPoints=({pointsEstimation:o,wrapperClassName:t="",iconClassName:l="",separator=true})=>{return o?m`
        <div class="l-padding--small l-m-padding--medium ${t}">
            ${p({name:"lecourt",className:`${l} icon-deco l-hmargin--xsmall no-flex--shrink`})}
            <button class="${i("pdp","openLoyalty")} js-pdp-loyalty-popin reverse-link">${o}</button>
        </div>
        ${separator?m`<hr class="no-tab no-desk"/>`:""}`:""};