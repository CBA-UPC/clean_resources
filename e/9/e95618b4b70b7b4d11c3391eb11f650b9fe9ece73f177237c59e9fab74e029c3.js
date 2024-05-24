import{i as y,E as x,J as v,K as f,r as h,n as S,F as k,x as a,m as g,B as b,a as $,s as L,N as B,b as T,V as c,g as w,T as M,l as d,t as E}from"./index-aa05d19d.js";import{c as _}from"./repeat-1a78a8d2.js";import"./auto-complete-app-search-dfdb1cc6.js";var C=y`
  ${x}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,m=class extends k{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=u(t.target);e?.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=u(t.target);e?.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=u(t.target);e?.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=u(t.target);e?.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),s=u(e);s&&(s.classList.add("sl-button-group__button"),s.classList.toggle("sl-button-group__button--first",o===0),s.classList.toggle("sl-button-group__button--inner",o>0&&o<t.length-1),s.classList.toggle("sl-button-group__button--last",o===t.length-1),s.classList.toggle("sl-button-group__button--radio",s.tagName.toLowerCase()==="sl-radio-button"))})}render(){return a`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};m.styles=C;v([f("slot")],m.prototype,"defaultSlot",2);v([h()],m.prototype,"disableRole",2);v([S()],m.prototype,"label",2);function u(t){var e;const o="sl-button, sl-radio-button";return(e=t.closest(o))!=null?e:t.querySelector(o)}m.define("sl-button-group");const O=y`
    :host {
      width: 100%;
      --store-header-primary-color: var(--theme-primary-element-color);
    }

    /* The tab group itself should not be right up against the left edge.*/
    sl-button-group {
      align-self: center;
      --track-color: transparent;
      position: relative;
    }

      .indicator {
        position: absolute;
        height: auto;
        bottom: 8px;
        border-top: solid 2px var(--store-header-primary-color);
        margin-inline-start: var(--sl-spacing-large);
        transition: var(--sl-transition-fast) translate ease, var(--sl-transition-fast) width ease;
      }

      sl-button::part(base):hover:after,
      sl-button::part(base):after {
        border: none !important;
      }

    sl-button-group > sl-button::part(base) {
        padding-top: var(--sl-spacing-2x-small);
        padding-bottom: var(--sl-spacing-2x-small);
        font-weight: 600;
        border-radius: 4px;
    }

      sl-button-group >sl-button::part(label) {
        padding: 0 var(--sl-spacing-large);
      }

      sl-button-group > sl-button:not(.active)::part(base) {
        color: var(--sl-color-neutral-600);
      }

      sl-button-group > sl-button.active::part(base) {
        color: var(--sl-color-primary-800);
      }

      sl-button-group > sl-button::part(base):hover {
        color: var(--sl-color-primary-600);
      }

    /* Selected tab labels should be our brand color.*/
    sl-button-group > sl-button[aria-selected=true]::part(base) {
        color: var(--sl-color-primary-800);
    }

    /** When loading supported locations, we show a loading skeleton.
        Set its height to the approximate height of the real navbar
    */
    sl-skeleton.navbar-loading {
        --border-radius: var(--sl-border-radius-x-large);
        height: 84px;
    }

    .home-logo-link {
        display: flex;
        width: 200px;
        margin-inline-end: var(--sl-spacing-x-large);
        padding-top: var(--sl-spacing-medium);
        padding-bottom: var(--sl-spacing-medium);
    }

    .home-logo-link img {
        align-self: center;
    }

    .navbar-search-container {
        display: flex;
        justify-content: space-between; /** So that the nav buttons will be on the left, then search on the right */
        width: 100%;
    }

    /** Center the nav buttons */
    .nav-buttons-container {
        display: flex;
        justify-content: center;
    }

    /** Don't show the search button on larger devices */
    .mobile-search-btn {
        display: none;
    }

    .skip-to-main {
        position: absolute;
        left: calc(var(--layout-padding)/2);
        z-index: -1;
        opacity: 0;
    }
    .skip-to-main:focus {
        top: 125%;
        transform: translateY(-50%);
        opacity: 1;
        z-index: 2;
    }

    auto-complete-app-search {
        align-self: center;
        width: 100%;
        margin-inline-end: var(--sl-spacing-x-large);
        margin-inline-start: var(--sl-spacing-x-large);
    }

    .open-store-btn {
        align-self: center;
        transition: opacity var(--sl-transition-fast) ease-in-out;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .small-logo {
        position: relative;
        width: var(--sl-spacing-medium);
        height: var(--sl-spacing-medium);
        align-self: center;
        margin-inline-end: var(--sl-spacing-2x-small);
        top: 1px;
    }

    .open-store-text {
        position: relative;
    }

    .person-logo {
        position: relative;
        width: var(--sl-spacing-medium);
        top: 5px;
    }

    .circle {
        align-self: center;
        left: var(--sl-spacing-3x-large);
    }

    .circle::part(base) {
        width: 32px;
        height: 32px;
        background-color: #EEEEEE;
        border: none;
    }

    .right-elements {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    .right-element-group {
        display: flex;
        flex-direction: row;
    }

    .mobile-button-container, .store-button-container, .user-button-container {
        display: flex;
    }

    .open-store-btn::part(base) {
        height: 32px;
        background-color: var(--store-header-primary-color);
    }

    .open-store-btn::part(label) {
        font-size: var(--sl-font-size-small);
        font-family: var(--body-font);
        font-weight: 400;
        position: relative;
    }

    .search {
        width: var(--sl-spacing-large);
        height: var(--sl-spacing-large);
        position: relative;
        top: 3px;
    }

    .tab-label {
        all: unset;
    }

    @media (prefers-color-scheme: dark) {
        .open-store-btn::part(base) {
            height: 32px;
            background-color: var(--theme-secondary-element-color);
        }

        .circle::part(base) {
            background-color: var(--theme-background-color);
        }


        sl-button:hover sl-icon::part(svg) {
            fill: var(--theme-secondary-element-color);
        }

        sl-button[aria-selected="true"]::part(base),
        sl-button-group > sl-button::part(base):hover,
        sl-button-group > sl-button.active::part(base) {
          color: var(--theme-secondary-element-color);
        }

        .indicator {
          border-color: var(--theme-secondary-element-color);
        }
    }

    .small-store-button.open-store-btn::part(base) {
        border-radius: var(--sl-border-radius-circle);
        width: 32px;
    }

    .small-store-button.open-store-btn {
        width: auto;
    }

    .small-store-button .open-store-text {
        display: none;
    }

    .small-store-button .small-logo {
        margin-inline-end: 0 !important;
        top: 7px;
    }

    ${g(b.md+65)} {
        .mobile-search-btn {
            display: flex;
            position: relative;
            align-self: center;
        }

        .mobile-search-btn::part(base) {
            background-color: transparent;
            border: none;
            width: 40px;
            height: 40px;
        }

        .store-button-container {
            padding-inline-start: 14px;
        }

        .right-elements:not(.shown) {
            width: auto !important;
        }

        .right-elements.shown {
            width: 100% !important;
        }

        .circle:not(.shown),
        .open-store-btn:not(.shown),
        .mobile-search-btn:not(.shown),
         sl-button-group:not(.shown),
        .mobile-button-container:not(.shown),
        .store-button-container:not(.shown),
        .user-button-container:not(.shown)  {
            display: flex;
        }

        auto-complete-app-search:not(.shown),
        .circle.shown,
        .open-store-btn.shown,
        .mobile-search-btn.shown,
        sl-button-group.shown,
        .mobile-button-container.shown,
        .store-button-container.shown,
        .user-button-container.shown  {
            display: none;
        }

        auto-complete-app-search {
            margin-inline-start: -8px;
            width: 98% !important;
        }

        auto-complete-app-search.shown {
            margin-inline-end: 0;
            margin-inline-start: 0;
        }

        /** Give our loading skeleton a better approximate size */
        sl-skeleton.navbar-loading {
            height: 113px;
        }
    }

    ${g(b.md)} {
        .right-elements:not(.shown) {
            left: var(--sl-spacing-x-small);
        }

        auto-complete-app-search {
            width: 90% !important;
        }
    }

    ${g(b.sm+70)} {
        .right-elements:not(.shown) {
            left: -1px;
        }

        .navbar-search-container {
            flex-direction: column;
            min-height: 96px;
        }

        sl-button-group {
            right: 0;
            bottom: var(--sl-spacing-2x-small);
        }

        .right-elements {
            justify-content: space-between;
        }

        .home-logo-link:not(.shown) {
            display: flex;
        }

        .home-logo-link.shown {
            display: none;
        }

        :host(:focus-within) sl-button-group {
            display: block !important;
        }

        .right-element-group {
            width: 100%;
            justify-content: flex-end;
            position: relative;
            margin-inline-start: var(--sl-spacing-x-small);
        }

        /* When the search box is activated on mobile, we change the styles up a bit. */
        .right-element-group.shown {
            justify-content: center;
            margin-inline-start: 0
        }

        auto-complete-app-search {
            position: relative;
            bottom: var(--sl-spacing-large) !important;
            left: 0;
            padding-top: var(--sl-spacing-2x-large);
        }
    }

    ${g(b.xs)} {
        auto-complete-app-search {
            width: 100% !important;
        }

        .small-logo {
            top: 8px;
            margin-inline-start: 0.5px;
        }

        .search {
            top: 6px;
        }
    }

    @media (forced-colors: active) {
        sl-button-group {
            --track-color: canvas;
        }
    }
`;class D{constructor(e){this.callback=e,this.matchMediaForDarkTheme=window.matchMedia("(prefers-color-scheme: dark)"),this.handleThemeChange=()=>{this.callback(!!this.matchMediaForDarkTheme.matches)},this.isDarkTheme=!!this.matchMediaForDarkTheme.matches}addListenThemeChange(){this.matchMediaForDarkTheme.addEventListener("change",this.handleThemeChange)}removeListenThemeChange(){this.matchMediaForDarkTheme.removeEventListener("change",this.handleThemeChange)}}var N=Object.defineProperty,R=Object.getOwnPropertyDescriptor,i=(t,e,o,s)=>{for(var r=s>1?void 0:s?R(e,o):e,l=t.length-1,p;l>=0;l--)(p=t[l])&&(r=(s?p(e,o,r):p(r))||r);return s&&r&&N(e,o,r),r};let n=class extends L{constructor(){super(),this.homeLocation="home",this.selectedNav=this.homeLocation,this.showMobileSearchBox=!1,this.isDarkMode=!1,this.windowWidth=0,this.searchShown=this.showMobileSearchBox?"shown":"",this.supportedLocations=[],this.isShowSmallStoreBtn=null,this.routeChangeHandler=({context:{url:t}})=>this.restoreActiveTab(t.pathname),this.localize=new B(this),this.tabIndicatorObserver=new ResizeObserver(()=>this.repositionTabIndicator()),this.handleThemeChange=this.handleThemeChange.bind(this)}async connectedCallback(){super.connectedCallback(),this.prefersThemesObserver=new D(this.handleThemeChange),this.isDarkMode=this.prefersThemesObserver.isDarkTheme,this.prefersThemesObserver.addListenThemeChange(),this.supportedLocations=await T.getChrome().then(e=>this.chromeLoaded(e),e=>this.chromeFailedToLoad(e)),c.addEventListener("route-changed",this.routeChangeHandler);const t=new ResizeObserver(()=>{if(this.windowWidth=window.innerWidth,this.largeStoreBtnWidth){const e=this.shadowRoot?.querySelector(".nav-buttons-container");this.isShowSmallStoreBtn=this.clientWidth-e.clientWidth<this.largeStoreBtnWidth+215}else{const e=this.shadowRoot?.querySelector(".store-button-container");this.largeStoreBtnWidth=e?.offsetWidth}});this.updateComplete.then(()=>{c.route&&this.restoreActiveTab(c.route.url.pathname),t.observe(document.body),this.tabIndicatorObserver.observe(document.body)}),w.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),c.removeEventListener("route-changed",this.routeChangeHandler),this.prefersThemesObserver?.removeListenThemeChange(),this.tabIndicatorObserver.unobserve(document.body),w.removeImpressionTracking(this)}updated(t){t.has("showMobileSearchBox")&&this.showMobileSearchBox&&this.shadowRoot?.querySelector("auto-complete-app-search")?.focus()}handleThemeChange(t){this.isDarkMode=t}renderElements(){const t=this.showMobileSearchBox?"shown":"";return this.windowWidth>b.sm+70?a`
                ${this.renderSkipNav()}
                ${this.renderLeftElements(!0,t)}
                ${this.renderRightElements(!1,t)}
            `:a`
            ${this.renderSkipNav()}
            ${this.renderRightElements(!0,t)}
            ${this.renderLeftElements(!1,t)}
        `}handleSkipNav(t){t.preventDefault();const e=new Event("skipToMain"),o=new Event("skipToSpotlight"),s=c.route?.url.pathname.substring(1).toLowerCase();(s?this.supportedLocations.find(l=>l.location===s):null)?document.dispatchEvent(o):document.dispatchEvent(e)}renderLeftElements(t,e){return a`
            <div class="nav-buttons-container">
                ${t?this.renderHomeLogo(e):""}
                <sl-button-group class="${e}" type="toolbar">
                    ${_(this.supportedLocations,o=>o.location,o=>a`
                        <sl-button variant="text"
                                   href="${c.getLocalizedUrl(`/${o.location}`)}"
                                   @click="${s=>this.preventDoubleRouting(s,o.location)}"
                                   class="${o.location} { ${this.selectedNav===o.location?"active":M}"
                                   telemetry-event-id="TabSelected"
                                   telemetry-data='{ "data": "${o.location}" }'>
                           <span class="tab-label">${o.label}</span>
                        </sl-button>
                    `)}
                    <div class="indicator"></div>
                </sl-button-group>
            </div>
        `}preventDoubleRouting(t,e){new URL(location.href).pathname.startsWith(`/${e}`)&&(t.preventDefault(),t.stopPropagation())}renderRightElements(t,e){return a`
            <div class="right-elements ${e}">
                ${t?this.renderHomeLogo(e):""}
                ${this.renderRightElementGrouping(t,e)}
            </div>
        `}renderSkipNav(){return a`
            <sl-button
                class="skip-to-main"
                @click="${this.handleSkipNav}"
            >
                ${d.get("NavigationBar.SkipToMain")}
            </sl-button>
        `}renderRightElementGrouping(t,e){const o=a`
            <div class="mobile-button-container ${e}">
                ${this.renderMobileSearchButton(e)}
            </div>
            <auto-complete-app-search class="${e}" @blur="${()=>this.showMobileSearchBox=!1}" .isDarkMode="${this.isDarkMode}"></auto-complete-app-search>
            ${this.renderOpenStoreButton(e)}
        `;return t?a`
                <div class="right-element-group ${e}"> ${o} </div>
            `:o}render(){return this.supportedLocations.length===0?this.renderLoading():a`
            <div
                class="navbar-search-container"
                telemetry-area-id="Header"
                telemetry-data='{ "headerItems": "${this.supportedLocations.map(({location:t})=>t)}", "storeButton": "${this.isShowSmallStoreBtn?"small":"large"}" }'
            >
                ${this.renderElements()}
            </div>
        `}renderLoading(){return a`
            <sl-skeleton class="navbar-loading" effect="pulse"></sl-skeleton>
        `}renderHomeLogo(t){const e=c.getLocalizedUrl(`/${this.homeLocation}`);return a`
            <a href="${e}" class="home-logo-link ${t}" aria-label="Logo Return to Home Screen"
                    @click="${o=>this.preventDoubleRouting(o,this.homeLocation)}"
                    telemetry-event-id="NavbarSelected"
                    telemetry-data='{ "data": "logo" }'>
                <img class="logo" width="174" height="36" src="${this.isDarkMode?"/assets/icons/microsoft-header-logo-light.png":"/assets/icons/microsoft-header-logo-dark.png"}" loading="lazy" alt="Logo for the Microsoft Store"  tabindex = "-1" crossorigin="anonymous"/>
            </a>
        `}renderOpenStoreButton(t){if(navigator.userAgent.includes("Windows")){const e=this.isShowSmallStoreBtn?"small-store-button":"",o=this.isShowSmallStoreBtn===null?"opacity-0":"opacity-1";return a`
                <div class="store-button-container ${t}">
                    <sl-button class="open-store-btn ${t} ${e} ${o}" href="ms-windows-store://?referrer=storeforweb" variant="primary" size="small" aria-label="Open Store Desktop Button" telemetry-event-id="OpenStoreClicked" rel="nofollow">
                        <div class="row">
                            <img class="small-logo" width="20" height="20" src=${this.isDarkMode?"/assets/icons/dark-logo-32x32.png":"/assets/icons/light-logo-32x32.svg"} loading="lazy" alt="Button Logo for the Microsoft Store" />
                            <span class="open-store-text">${d.get("NavigationBar.OpenInStore")}</span>
                        </div>
                    </sl-button>
                </div>
            `}return a``}renderMobileSearchButton(t){return a`
            <sl-button @click="${this.mobileSearchBtnClicked}" class="mobile-search-btn ${t}" variant="default" size="medium" aria-label="Mobile Search Button"
                    telemetry-event-id="NavbarSelected"
                    telemetry-data='{ "data": "search" }'>
                <sl-icon class="search" name="search"></sl-icon>
            </sl-button>
        `}restoreActiveTab(t){const e=t.substring(1).toLowerCase(),o=this.supportedLocations.find(s=>s.location===e);(o||!this.selectedNav)&&(this.selectedNav=o?.location||this.homeLocation,this.updateComplete.then(()=>this.repositionTabIndicator()))}mobileSearchBtnClicked(){this.showMobileSearchBox=!this.showMobileSearchBox}chromeLoaded(t){const e=[{location:this.homeLocation,label:d.get("NavigationBar.Home")}];return t.includes("Productivity")&&e.push({location:"apps",label:d.get("NavigationBar.Apps")}),t.includes("Gaming")&&e.push({location:"games",label:d.get("NavigationBar.Games")}),t.includes("Entertainment")&&e.push({location:"movies",label:d.get("NavigationBar.MoviesAndTV")}),e}chromeFailedToLoad(t){return console.warn("Failed to load /pages/chrome. Navbar will show all nav elements.",t),this.chromeLoaded(["home","Productivity","Gaming","Entertainment"])}repositionTabIndicator(){setTimeout(()=>{if(!this.tabIndicator)return;const t=this.localize.dir()==="rtl"?-1:1,e=this.tabGroup?.shadowRoot?.querySelector("slot")?.assignedElements()||[],o=e.find(l=>l.classList.contains(this.selectedNav)),s=o?.shadowRoot?.querySelector("slot[part='label']")?.assignedElements()[0],r=e.slice(0,e.indexOf(o)).reduce((l,p)=>l+p.clientWidth,0);this.tabIndicator.style.width=`${s?.offsetWidth||0}px`,this.tabIndicator.style.translate=`${t*r}px`},0)}};n.styles=[$,O];i([h()],n.prototype,"selectedNav",2);i([h()],n.prototype,"showMobileSearchBox",2);i([h()],n.prototype,"isDarkMode",2);i([h()],n.prototype,"windowWidth",2);i([h()],n.prototype,"searchShown",2);i([h()],n.prototype,"supportedLocations",2);i([h()],n.prototype,"isShowSmallStoreBtn",2);i([f("sl-button-group")],n.prototype,"tabGroup",2);i([f(".indicator")],n.prototype,"tabIndicator",2);n=i([E("nav-bar")],n);export{D as P,m as S};
