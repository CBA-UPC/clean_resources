import{html as C,directive as l}from"../vendors/lit-html/lit-html.js";import{repeat}from"../vendors/lit-html/directives/repeat.js";import{ifDefined as o}from"../vendors/lit-html/directives/if-defined.js";import{unsafeHTML as t}from"../vendors/lit-html/directives/unsafe-html.js";import{tplPicture as k,tplImage as h,IMPOLICY_PRODUCT as N,IMPOLICY_PRODUCT_PORTRAIT as S}from"./picture.tpl.js";import{tplIcon as I}from"./components/icon.tpl.js";import{getRating as T}from"./components/reviews.tpl.js";export const tplSwatch=({hexaCode:l,hexaClassName:t,imgSwatch:i,alt,imageClassName:o,size,preventLazyload:m})=>{var p=null;var style=size?`width: ${size}px; height: ${size}px;`:null;if(l){p=C`<div class="${t}" style="background-color: ${l}; ${style}"></div>`}else if(i){p=h({src:i,alt:alt,className:o,style:style,preventLazyload:m})}return p};const P=(url,{nbSwatches:t,list,moreColors:l,moreRemainingColors:i})=>{return l?C`
    <div class="js-product-tile-swatch-wrapper flex flex--align-end font-small product-tile-colors-wrapper bg-white above l-relative l-vmargin--small">
        <ul class="swatches-container inline-list ${i?"l-hmargin--small":""}">
            ${list.filter(.map(({color,url,img:l,imgSwatch:t,title,hexaCode:i},index)=>C`
            <li>
                <a
                    href="${url}"
                    title="${title}"
                    class="js-product-tile-swatch swatch-wrapper swatch--small cursor-pointer"
                    data-image="${o(index>0?l:undefined)}">
                    ${tplSwatch({hexaCode:i,imgSwatch:t,alt:color,hexaClassName:"swatch",imageClassName:"swatch img-fill-width tile-swatch pointer-none"})}
                </span>
            </li>`)}
        </ul>
        ${i?C`<span>${i}</span>`:""}
    </div>`:""};const q=(url,{moreColors:l},t)=>{return l?C`
    <a href="${url}" class="js-product-tile-link flex font-small text-primary l-vmargin--xsmall">
        ${l}
    </a>`:""};export const tplHighlightText=l((text,query)=>part=>{const pattern=new RegExp(query.replace(/[-[\]{}()*+?.,\\^$#]/g,"\\$&").replace(/ /g,"|"),"gi");const l=text.replace(pattern,;part.setValue(t(l))});export const tplProductTile=({index,productId,objectID:l,queryId:t,url,defaultImage:i,flatImage:o,tplFlags:m,productTitle:p,tplPrices:h,swatches:g,rating:v,isPortrait:u,isTileSwatchesEnabled:$})=>{const j=u?S:N;return C`<div class="js-search-product-tile js-product-tile l-fill-width l-vmargin--xxlarge l-m-vmargin--medium" data-object-id="${l}" data-query-id="${t}" data-pid="${productId}" data-index="${index}">
        <div class="l-relative l-overflow-hidden l-vmargin--small">
            <a href="${url}" class="js-product-tile-link no-user-select">
                ${k({src:[i],cells:[11,5,5],policy:j,className:"l-block img-fill-width"})}
                <div class="js-product-tile-swatch-img product-tile-image-hover l-overlay"></div>
                ${o?C`<div class="js-product-tile-hover-img product-tile-image-hover l-overlay" data-image="${o}"></div>`:""}
            </a>
        </div>

        <a href="${url}" class="js-product-tile-link simple-link highlightable font-medium font-m-small l-vmargin--xsmall">
            ${p}
        </a>

        ${v?C`
            <span class="l-hmargin--small l-vmargin--xsmall text-primary l-inline-block">
                ${T(v.rate).map(}
            </span>
        `:""}

        ${h}

        ${$?P(url,g):q(url,g)}

        <div class="grid">
            ${repeat(m,}
        </div>
    </div>`};