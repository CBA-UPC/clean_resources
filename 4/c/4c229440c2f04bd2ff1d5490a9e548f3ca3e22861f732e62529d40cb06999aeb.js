"use strict";import{resolve}from"../../base/croco.js";import{repeat}from"../../vendors/lit-html/directives/repeat.js";import{html as h}from"../../vendors/lit-html/lit-html.js";import{unsafeHTML as t}from"../../vendors/lit-html/directives/unsafe-html.js";import{tplIframe as i}from"./helpers.tpl.js";import{tplIcon as k}from"./icon.tpl.js";import{tplLoyaltyPoints as l}from"./loyalty.tpl.js";const o=5;const m=["icon-star","icon-star icon-star--half","icon-star icon-star--full"];export const getRating=function(data){const t=[];if(data){const rate=Math.floor(data*2)/2;for(var i=1;i<=o;i++){t.push(m[(i<=rate?1:0)+(i-rate<1?1:0)])}}return t};const p=(t,total)=>{return Math.round(t*100/total)+"%"};const R=(t,i,l="")=>{return h`
        <span class="l-hmargin--small" aria-hidden="true">
            ${repeat(getRating(t),}
        </span>
        <span class="text-primary ${l}">${i}</span>
    `};const g=className=>{const style="width: 1.6rem; height: 1.6rem; stroke-width: 0.3rem";return k({name:"check",className:`no-fill icon-spacing rounded ${className}`,style:style})};const $=({rate,count},total)=>{const percent=p(count,total);return h`
        <div class="flex flex--align-center l-vmargin--small">
            <div class="pdp-rating--note">${rate.toFixed()}</div>
            <div class="flex--basis-full">
                <div class="curved bg-grey-ultralight l-hmargin--small">
                    <div class="pdp-rating--gauge curved bg-primary" style="width: ${percent}"></div>
                </div>
            </div>
            <div class="pdp-rating--percent text-end">${percent}</div>
        </div>
    `};export const tplCheckedReviews=text=>{return h`<p class="font-medium">${t(text)}</p>`};const u=({average:t,nbComments:i,nbRatings:l,ratings:o,score:m,title},actions,p,g)=>{const[label,url]=resolve(["write.label","write.url"],actions);const[v,u]=resolve(["title","subtitle"],g);return h`
        <div class="flex flex-m--col l-vmargin--large flex--align-start">
            <div class="flex--basis-full">
                <div class="font-medium fw-bold text-primary flex flex--space-between">
                    <div>${title}</div>

                    ${url?h`
                        <button
                            type="button"
                            class="font-medium text-primary reverse-link flex--align-baseline text-right"
                            @click="${e=>p.onWriteReviewLinkClick(e,{title:label,reviewUrl:url})}"
                        >
                            ${label}
                        </button>`:""}
                </div>
                <div class="font-medium l-vmargin--medium">
                    ${R(t,m)}
                    <p class="font-small text-grey-dark">
                        ${i}, ${g?h`<button class="js-pdp-reviews-checked reverse-link" @click="${">
                            ${u?u:v}
                        </button>`:""}
                    </p>
                </div>
                <div class="l-vmargin--large font-small text-primary">
                    ${o&&repeat(o,({rate})=>rate,}
                </div>
            </div>
        </div>
    `};const v=({rate,label,nbRatings:t,ratings:i=[],index})=>{const l=index===0&&i[1]&&i[1].rate!==rate;const percent=p(rate,t);return h`
        <div class="flex flex--space-between l-vmargin--xsmall text-primary ${l?"fw-bold":""}">
            <div class="flex">
                <p class="l-hmargin--xsmall">
                    ${g(`${l?" text-white bg-primary":" bordered is-success"}`)}
                </p>
                <p>${label}</p>
            </div>
            <p>${percent}</p>
        </div>
    `};const C=({title,ratings:i,nbRatings:l})=>{return h`
        <div class="font-small l-vmargin--large">
            <p class="font-medium fw-bold l-vmargin--large text-primary">
                ${title}
            </p>
            ${repeat(i,(t,index)=>v({...t,nbRatings:l,ratings:i,index:index}))}
        </div>
    `};const j=(t,i)=>{return h`
        <select class="select-cta offset-1 offset-m-0 l-vmargin--large select-cta--multilines"
            @change="${"
>
            ${repeat(t,({label,url,selected})=>h`<option value="${url}" .selected="${selected}">${label}</option>`)}
        </select>
    `};const P=({wording:t,...a},key)=>{return h`
        <div class="flex flex--align-center">
            <span class="l-hmargin--small">
                ${g(`text-white ${a[key]?"bg-primary":"bg-grey-ultralight"}`)}
            </span>
            <p>${t}</p>
        </div>
    `};const N=({user:t,date:i,description,material:l,rating:o={},isSatisfied:m,text,verified:p,orderPurchaseDate:g})=>{const v=resolve("wording",t);const[u,$]=resolve(["wording.rating","wording.satisfied"],o);return h`
        <div class="font-medium bg-grey-ultralight l-vmargin--medium l-padding-around--medium curved--large">
            <h3 class="grid flex--space-between">
                <div class="${description||l?"l-vmargin--xsmall":""}">
                    <span class="visually-hidden">${u}</span>
                    ${R(o.global,m?$:"")}
                </div>
                ${i?h`<span class="text-right font-xsmall">${i}</span>`:""}
            </h3>
            <p class="text-primary l-vmargin--large l-overflow-hidden">
                ${text}
            </p>
            <div class="text-primary l-vmargin--large font-small">
                ${description&&P(description,"matches")}
                ${l&&P(l,"isComfortable")}
            </div>
            ${v?h`<div class="font-small text-primary l-vmargin--large'">${v}</div>`:""}
            ${p?h`<p class="text-grey-dark font-small">
                ${k({name:"check",className:"no-fill icon-spacing rounded text-primary"})}
                ${p}
            </p>`:""}
        </div>
    `};const W=(t,i)=>{const[label,url]=resolve(["next.label","next.url"],t);return h`
        <div class="text-center l-vmargin--large">
            <button
                class="btn-cta font-label"
                aria-label="${label}"
                @click="${"
            >${label}</button>
        </div>
    `};const L=({actions,global,size,comments:t={},reviewsPanel:i,onChangeRule:l,onNextPage:o,pdpReviewPopin:m})=>{const{comments:p=[],pagination:g,sortingRules:v}=t;return h`
        ${global?u(global,actions,m,i):""}
        ${size?C(size):""}
        ${v?j(v,l):""}
        ${p?repeat(p,N):""}
        ${g?W(g,o):""}
    `};const M=({actions,pdpReviewPopin:t,wording:i})=>{const[title,l]=resolve(["write.label","write.url"],actions);const text=resolve("text",i);return h`
        ${text?h`<p class="font-medium">${text}</p>`:""}
        ${l?h`
            <div class="popin-vpadding text-center">
                <button
                    type="button"
                    class="btn-cta text-white l-hmargin--small l-vmargin--medium font-medium"
                    @click="${"
                >
                    ${title}
                </button>
            </div>`:""}`};export const tplReviews=t=>{return t.hasReviews!==undefined?h`
        <article>
            ${l({pointsEstimation:resolve("wording.loyaltyPointChallenge",t),wrapperClassName:"flex--align-center font-medium bg-grey-ultralight l-vmargin--medium l-padding-around--medium curved--large",iconClassName:"icon-options",separator:false})}
            ${t.global?L(t):M(t)}
        </article>
    `:""};export const tplWriteReview=src=>{return i({src:src,className:"l-fill"})};