import{i as v,s as k,b as w,l as t,T as x,x as l,a as y,n as L,r as h,t as b}from"./index-f0821274.js";import{r as F}from"./css-function-74a8ae57.js";import{c as g}from"./repeat-aaef31c8.js";import{i as C,a as S,e as M}from"./platform-2180e403.js";const P=v`

.footer-container {
    background-color: var(--sl-color-neutral-0);
    display: flex;
    justify-content: center;
    margin-top: 48px;
}

.footer-container > div {
    width: var(--layout-width);
    max-width: var(--max-width);
}

.footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 38px;
}

.footer-primary-menu {
    --card-spacing: var(--sl-spacing-small);
    justify-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: var(--card-spacing);
}

.footer-secondary-menu {
    margin: 48px 0 24px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.menu-group {
    display: flex;
    flex-direction: column;
    width: ${F("100%","var(--card-spacing)","var(--footer-column-num)")};
    gap: 8px;
    padding-top: 32px;    

}

.menu-group-title {
    font-weight: 600;
    margin-bottom: 8px;
}

.privacy-container {
    display: flex;
}

.privacy-icon {
    display: flex;
    width: auto;
    height: auto;
    align-self: center;
    width: 32px;
    height: 32px;
    padding-inline-end: 4px;
}

.sec-container {
    display:flex;
    flex-wrap:wrap;
    gap: 24px;
}

.sec-links::part(label) {
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2) !important;

}

.privacy-link {
    display: flex;
    flex-direction: row;
}

.copyright-text {
    color: var(--sl-color-neutral-600);
    font-family: var(--body-font);
    font-size: 12px;
    display: flex;
    align-items: center;
    position: relative;
    bottom: 1px;
}

sl-button::part(label) {
    color: var(--sl-color-neutral-600);
    font-weight: normal;
    padding: 0px;
    min-height: 0px !important;
    overflow-wrap: break-word;
    max-width: 300px;
}

sl-button::part(base) {
    min-height: 0px;
    text-wrap: wrap;
    font-family: var(--body-font);
}

sl-button:hover::part(label) {
    text-decoration: underline;
}

.privacy-container:hover sl-button::part(label) {
    text-decoration: underline;
}
`;var $=Object.defineProperty,E=Object.getOwnPropertyDescriptor,m=let p=class extends k{erColumnGroupAndLinks(e,i,n){return l`
            <div class="menu-group" id="menu-group-${i.toString()}" aria-label="${e}">
                <sl-menu-label class="menu-group-title">${e}</sl-menu-label>
                ${g(n,}
            </div>
        `}p.styles=[y,P];m([L({attribute:"optionX",type:Boolean})],p.prototype,"optionX",2);m([h()],p.prototype,"market",2);m([h()],p.prototype,"allowedTopLevelPages",2);p=m([b("footer-menu")],p);export{p as FooterMenu};
