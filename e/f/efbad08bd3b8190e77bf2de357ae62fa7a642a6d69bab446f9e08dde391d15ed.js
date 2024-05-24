import{addImageFormatParams as P,tplPicture as T,IMPOLICY_PRODUCT_PORTRAIT as U,tplImage as S}from"./picture.tpl.js";import{html as L}from"../vendors/lit-html/lit-html.js";import{repeat}from"../vendors/lit-html/directives/repeat.js";import{tplFlag as q}from"../templates/components/flag.tpl.js";import{tplIcon as A}from"./components/icon.tpl.js";import{tplSwatch as B}from"./product-tile.tpl.js";import{tplPricing as I}from"./components/pricing.tpl.js";import{unsafeHTML as v}from"../vendors/lit-html/directives/unsafe-html.js";import{resolve}from"../base/croco.js";import{ctaTypes as u}from"../base/config.js";export const tplLoader=l=>{return l?L`
    <div class="loader-wrapper l-absolute">
        <svg class="loader-icon">
            <circle class="loader-circle" cx="6.5" cy="6.5" r="5" fill="none" strokeWidth="2" strokeMiterlimit="10"></circle>
        </svg>
    </div>
    `:""};export const tplMinicartProductLine=({color={},size={},image:l={},customThumbBase64:t,urls:i={},flags=[],name,quantity:o,pricing:m={},actions={},monogram:p,promoColor:v,isCustomized:g,customization:u},h={},$,j,N)=>{const k={alt:color.label,className:"l-overlay img-cover",preventLazyload:true};if(g&&u&&u[0]&&u[0].color){const M=u[0].color;if(M.hexa){color.hexa=M.hexa}if(M.label){color.label=M.label}}let C=[];if(actions?.updateQuantity?.maxAllowedQuantity){for(let l=0;l<=actions.updateQuantity.maxAllowedQuantity;l++){C.push(l)}}return L`
    <div class="flex flex--space-between l-vmargin--large">
        <div class="l-relative cell-2 l-hmargin--large">
            <div class="l-hmargin--large">
                <div class="l-relative cell-2 cell-mt-8 l-hmargin--large bg-grey-ultralight curved--medium l-overflow-hidden">
                    <a href="${i.productUrl}">
                        ${g?S({src:t||l.desktopUrl,...k}):T({src:[P(l.desktopUrl,"MINICART")],cells:[8,8,2],policy:U,...k})}
                    </a>
                    <div class="l-ratio--5-7"></div>
                </div>
            </div>
        </div>
        <div class="flex flex--col flex--basis-full font-small ">
            <div class="flex flex--grow">
                <div class="flex--grow l-relative l-hmargin--large">
                    ${flags.length>0?L`<div>
                        ${flags.map(l=>q(l))}
                    </div>`:""}

                    <a href="${i.productUrl}" class="text-primary">${name}</a>

                    <div class="text-primary">
                        <div class="flex flex--align-center l-hmargin--small">
                            ${B({hexaCode:color.hexa,imgSwatch:color.swatchUrl,alt:color.label,imageClassName:"l-hmargin--xsmall rounded",hexaClassName:"l-hmargin--xsmall rounded",size:7,preventLazyload:true})}
                            <span class="text-grey-ultra-dark">
                                ${color.label}
                            </span>
                        </div>

                        <div class="l-hmargin--small text-grey-ultra-dark">
                            ${!size.isUniqueSize?L`<span class="capitalize">${h.size}</span> `:""}${size.label}
                        </div>

                    </div>
                    <div class="flex l-absolute l-no-bottom flex--col">
                    ${I({...m,className:"nowrap",salesPriceClassName:"fw-bold text-primary l-hmargin--small",standardPriceClassName:"text-grey-ultra-dark",lowestPriceClassName:"text-grey-dark"})}
                    </div>

                </div>

                <div class="nowrap text-right flex--grow l-relative minicart-prices">
                    <div class="flex l-absolute l-no-top l-fill minicart-icons flex--col">
                        <div class="flex flex-row l-vmargin--large">
                            ${actions?.moveToWishlist?.url?L`<button @click="${()=>j(actions?.moveToWishlist?.url)}" class="l-hmargin--small ">
                                ${A({name:"go-wishlist",className:"flex"})}
                            </button>`:""}
                            <button @click="${()=>$(actions?.removeProduct?.url)}">
                                ${A({name:"trash",className:"flex"})}
                            </button>
                        </div>
                        <div class="flex l-absolute l-no-bottom minicart-icons">
                            ${actions?.updateQuantity?.maxAllowedQuantity?L`<select class="select-cta select-cta--small" @change="${e=>N(actions?.updateQuantity.url,e.target.value)}">
                                ${repeat(C,(value,index)=>L`<option value="${index}" ?selected=${value===o}>${value}</option>`)}
                            </select>`:L`${o}`}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>`};function g(number){return number.toString().padStart(2,"0")}export const tplExpressDeadline=({deadline:l,currentTime,text})=>{let t="";if(l){const i=Math.round((l-currentTime)/1e3);const o=Math.floor(i/3600);const m=Math.floor(i%3600/60);const p=Math.floor(i%60);t=L`<div class="inline-markdown-wrapper font-medium">
            <strong class="text-primary">${g(o)}:${g(m)}:${g(p)}</strong>
            ${v(text)}
        </div>`}return t};export const tplMinicartPanel=({cart:l={}},dataset,t,i,o,m)=>{const[p,v]=resolve(["freeShipping","shippingFrom"],l.wording);const items=resolve("products",l)||[];const g=resolve("shippingFees.adjustedPrice.format",l);return L`${l.quantity>0?L`<div class="overlay no-mob no-tab"></div>`:""}

    <div class="minicart-panel flex flex--col bg-white no-mob no-tab${l.quantity===0?" is-hidden":""} text-primary">
        <div class="minicart-content l-overflow-auto">
            <div class="font-large l-vmargin--large">${resolve("wording.title",l)}</div>
            <div class="l-vmargin--large l-padding-around">
                ${items.map(product=>tplMinicartProductLine(product,l.wording,i,o,m))}
            </div>
            ${t?L`<div class="js-cart-slot font-medium l-vmargin--large"></div>`:""}
        </div>
        <div class="minicart-footer l-padding-around l-fill-width l-margin-top-auto">
            ${v&&g?L`<div class="flex flex--align-start flex--space-between l-vmargin--small font-medium">
                    <span>${v}</span>
                    <span class="fw-bold">${g}</span>
                </div>`:""}
            ${p?L`<div class="cart-shipping-advice nav-ico-after l-vmargin--large font-medium uppercase-first-letter">${p}</div>`:""}
            <hr class="l-vmargin--small"></hr>

            <div class="flex flex--align-start flex--space-between fw-bold font-medium">
                <span>${resolve("wording.total",l)}</span>
                <span>${resolve("wording.totalPrice",l)}</span>
            </div>
            <div class="flex flex--space-around l-padding--xsmall l-vmargin--small">
                <a href="${dataset.cartUrl}" class="${u.BUTTON_CONVERSION}" rel="nofollow">
                    ${resolve("wording.goToBasket",l)}
                </a>
            </div>
            ${l.expressDeadline?L`<div class="js-express-deadline"></div>`:""}
        </div>
    </div>`};