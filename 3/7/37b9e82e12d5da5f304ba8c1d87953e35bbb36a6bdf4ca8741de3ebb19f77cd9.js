import{html as v}from"../../vendors/lit-html/lit-html.js";import{repeat}from"../../vendors/lit-html/directives/repeat.js";import{ifDefined as h}from"../../vendors/lit-html/directives/if-defined.js";import{tplIcon as $}from"../components/icon.tpl.js";import{IMPOLICY_CUSTOM as p,tplPicture as k}from"../picture.tpl.js";import{resolve}from"../../base/croco.js";const getTags=category=>{let tags;if(category){tags=[];const[link,id,l=[]]=resolve(["link","id","tags"],category);if(link){tags.push({...link,id:id})}tags=[...tags,...l]}return tags};const g=(tags,t)=>{let i=0;let l=false;const o=tags&&tags.length;if(t&&t.length){l=t.length===5;if(l){let l=100;for(var m=0,u=4;m<u;m++){const category=t[m];if(category.children&&category.children.length<l){l=category.children.length;i=m}}}}return{stackedCategoryIndex:i,hasStackedCategory:l,hasTags:o}};const j=(l,t)=>{const i=t.hasTags?1:0;let column=l+i+1;let o=1;let m=3;if(t.hasStackedCategory){if(l===4){column=t.stackedCategoryIndex+i+1;o=2}else if(l===t.stackedCategoryIndex){m=2}}return`${o}/${column}/${m}/${column+1}`};const N=l=>{return v`
        <a href="${l.url}" class="js-menu-track js-check-online d-bottom-separator header-padding--large padding-mt-1 flex font-large l-mt-vmargin--large"
            data-tracking="${JSON.stringify({area:"header_thematics",value:l.id})}"
            data-online-from="${h(l.onlineFrom)}"
            data-online-to="${h(l.onlineTo)}"
        >
            ${l.label}
        </a>`};const m=l=>{return v`<a href="${l.url}" class="js-menu-track js-check-online flex font-medium l-mt-vmargin--large l-vmargin--small padding-mt-1"
        data-tracking="${JSON.stringify({area:"header_level_3",value:l.id})}"
        data-online-from="${h(l.onlineFrom)}"
        data-online-to="${h(l.onlineTo)}"
    >
        ${l.label}
    </a>`};const S=(l,t,i)=>{const o=i.link;return v`<div class="flex flex--align-center l-padding--xsmall l-vmargin--small no-desk padding-mt-1 font-small no-text-transform">
        <button class="js-menu-close btn-cta btn--icon l-absolute"
            data-submenu-level="2"
        >
            ${$({name:"chevron-left",size:"large",className:"l-hmargin--small"})}
        </button>
        <span class="header-breadcrumb l-padding--xxsmall">
            <a class="js-menu-close opacity--medium" href="${l.url}" data-submenu-level="1">${l.label}/</a>
            <a class="js-menu-close opacity--medium" href="${t.url}" data-submenu-level="2">${t.label}/</a>
            <span>${i.label}</span>
        </span>
    </div>

    ${o?v`
        <div class="padding-mt-1 no-desk">
            <a href="${o.url}" class="js-menu-track js-check-online flex font-large l-vmargin--large"
                data-tracking="${JSON.stringify({area:"header_level_2",value:i.id})}"
                data-online-from="${h(i.onlineFrom)}"
                data-online-to="${h(i.onlineTo)}"
            >
                ${o.label}
            </a>
        </div>`:""}

    ${repeat(i.children,link=>link.label,m)}`};const _=(l,t,i,index,o,m)=>{const u=j(index,m);const g=u.split("/").pop()==="6";const h=`${o}-${index}`;const p=JSON.stringify({area:"header_level_2",value:i.id});return v`<li class="js-check-online ${!g?"d-right-separator ":""}d-bottom-separator header-padding--large padding-mt-1" style="grid-area:${u}">
        ${i.children&&i.children.length?v`
            <a href="${i.url}"
                class="js-menu-track js-menu-item header-menu-item--level2 font-large flex flex--space-between flex--align-center l-mt-fill-width l-vmargin--large"
                data-submenu-target="${h}"
                data-submenu-level="2"
                data-tracking="${p}"
            >
                <span class="l-hmargin--small">
                   ${i.label}
                </span>
                ${$({name:"chevron-down",className:"header-chevron-icon no-desk"})}
            </a>
            <div class="js-submenu-item flex flex--col header-submenu-level2 header-submenu-collapsed is-m-scrollable"
                data-submenu="${h}"
                data-submenu-level="2"
            >
                <div class="header-submenu-level2-inner">
                    ${S(l,t,i)}
                </div>
            </div>
        `:v`
            <a href="${i.url}" class="js-menu-track font-large l-vmargin--large"
                data-tracking="${p}"
            >
                ${i.label}
            </a>`}
    </li>`};const T=push=>{const[l,t,i]=resolve(["link","image","tracking"],push);if(t&&l){const[o,m]=resolve(["url","label"],l);const u=resolve("desktopUrl",t);const g=resolve("mobileUrl",t)||u;return v`<a href="${o}" class="js-push-tracking js-check-online flex flex--col l-vmargin--small"
                        data-tracking-data="${i?JSON.stringify(i):""}"
                        data-id="${push.id}"
                        data-online-from="${h(push.onlineFrom)}"
                        data-online-to="${h(push.onlineTo)}">
            <div class="l-relative l-fill-width">
                ${k({src:[g,u],cells:[23,23,7],policy:p,alt:resolve("alt",t),className:"l-overlay img-cover img-cover--center",preventLazyload:true})}
                <div class="l-ratio--16-9"></div>
            </div>
            <span class="header-push-label l-padding--small font-large">${m}</span>
        </a>`}};export const tplSubmenuLevel1=(t,category,i)=>{const l=getTags(category);const o=resolve("children",category);const m=g(l,o);const u=category.push||category.pushImages;return v`
    <button class="js-menu-close header-submenu-close no-mob no-tab">
        ${$({name:"close",className:"icon-close"})}
    </button>

    <div class="header-submenu-item-inner l-relative l-m-padding--small flex flex-mt--col flex--basis-full flex--align-start">
        <div class="flex flex--align-center font-small no-text-transform l-padding--xsmall l-vmargin--small no-desk padding-mt-1">
            <button class="js-menu-close btn-cta btn--icon l-absolute"
                data-submenu-level="1"
            >
                ${$({name:"chevron-left",size:"large",className:"l-hmargin--small"})}
            </button>
            <span class="header-breadcrumb l-padding--xxsmall">
                <a class="js-menu-close opacity--medium" href="${t.url}" data-submenu-level="1">${t.label}/</a>
                <span>${category.label}</span>
            </span>
        </div>

        <div class="header-submenu-wrapper l-fill-width l-hmargin--small">
            ${l&&l.length||o&&o.length?v`
                <ul class="header-submenu-content flex flex--col l-fill-width l-mt-vmargin--xxlarge">
                    ${l&&l.length?v`
                        <li class="d-right-separator" style="grid-area: 1 / 1 / 3 / 2;">
                            ${repeat(l,N)}
                        </li>`:""}
                    ${o&&o.length?v`
                        ${repeat(o,(l,index)=>`category-${index}`,}
                    `:""}
                </ul>`:""}

            ${u&&u.length?v`
                <div class="js-push-tracking-wrapper header-push-list top-separator l-display-grid grid-template-${category.pushImages||category.push.length>4?"4":"3"} grid-template-mt-2 grid-template-m-1 l-row-gap--medium padding-mt-1 l-mt-padding--small">
                    ${repeat(u,}
                </div>`:""}
        </div>
    </div>`};