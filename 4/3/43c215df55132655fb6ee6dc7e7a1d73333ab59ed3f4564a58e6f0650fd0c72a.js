import{ctaTypes as $,isRTLEnabled as m}from"../../base/config.js";import{html as p}from"../../vendors/lit-html/lit-html.js";import{ifDefined as g}from"../../vendors/lit-html/directives/if-defined.js";import{tplIcon as h}from"./icon.tpl.js";export const tplCta=({label,title,className="",disabled=false,labelClassName:l="",icon,onClick:t,type=$.BUTTON,url,target,download,inputType})=>{let i=`${type} ${className} ${disabled?"is-disabled":""}`;if(!label&&!icon){icon={name:m?"icon-arrow-left":"icon-arrow-right"}}const o=p`
        ${icon&&!icon.isOnRight?h({size:"large",...icon,className:`${label?"l-hmargin--small ":""}${icon.className||""}`}):""}
        ${label?p`<span class="${icon&&icon.isOnRight?"l-hmargin--small ":""}${l}">${label}</span>`:""}
        ${icon&&icon.isOnRight?h({size:"large",...icon}):""}
    `;return url?p`
        <a href="${url}" class="${i}" @click="${g(t)}"
            target="${g(target)}"
            download="${g(download)}"
            title="${g(title)}">
            ${o}
        </a>`:p`
        <button
            class="${i}" @click="${g(t)}"
            title="${g(title)}" ?disabled="${disabled}"
            type="${g(inputType)}">
            ${o}
        </button>
    `};