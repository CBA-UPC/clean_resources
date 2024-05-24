import{resolve}from"../../base/croco.js";import{html as v}from"../../vendors/lit-html/lit-html.js";import{tplFlag as N}from"./flag.tpl.js";import{unsafeHTML as P}from"../../vendors/lit-html/directives/unsafe-html.js";export function getPrice(t){const[min,max,l,i,format]=resolve(["min.value","max.value","min.format","max.format","format"],t);const o=t.rangeMode&&min&&max&&min<max;const m=format||l;return o?`${l} - ${i}`:m}function S(t,l){const i=resolve("Lacoste.siteprefs",window)||{};return t?N({type:"discount",textColor:i.SALES_BADGE_COLOR,backgroundColor:i.SALES_BADGE_BACKGROUND_COLOR,label:t.label||l.replace("{0}",t.rate)}):""}export const tplPricingCompact=({salesPrice:t,standardPrice:l,salesPriceClassName:i,standardPriceClassName:o,ignoreStyles:m,pricePrefix:p=""})=>{return v`
        ${t?v`
        <div class="nowrap ${i||""}" style="${(m?null:t.style)||""}">
            ${p?v`${P(p)}`:""}${getPrice(t)}
        </div>
    `:""}
    ${l?v`
        <div class="nowrap strikethrough ${o||""}">
            ${getPrice(l)}
        </div>
    `:""}`};export const tplPricing=({salesPrice:t,standardPrice:l,lowestPrice:i,promo:o,className,salesPriceClassName:m,standardPriceClassName:p,lowestPriceClassName:P,ignoreStyles:$,discountLabel:g,discountFlag:u,lowestDiscountFlag:C})=>{return v`
        <div class="flex ${className||""}">
            ${tplPricingCompact({salesPrice:t,standardPrice:l,salesPriceClassName:m,standardPriceClassName:p,ignoreStyles:$})}

            ${o?S(o,g):""}
            ${u?N(u):""}
        </div>
        ${i&&i.label?v`
            <div class="${P||""}">
                ${i.label}
                <span class="l-inline-flex l-column-gap--xsmall nowrap">
                    ${getPrice(i)}
                    ${C?N(C):""}
                </span>
            </div>
        `:""}`};