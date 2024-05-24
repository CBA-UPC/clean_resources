import{i as x,E as y,J as v,K as f,r as d,n as k,F as $,x as s,m as g,B as p,a as L,s as S,N as T,b as M,Y as h,g as w,T as B,l as i,t as E}from"./index-f0821274.js";import{c as _}from"./repeat-aaef31c8.js";import"./auto-complete-app-search-76feaa83.js";var N=x`
  ${y}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,b=class extends ${constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(e){const t=m(e.target);t?.classList.add("sl-button-group__button--focus")}handleBlur(e){const t=m(e.target);t?.classList.remove("sl-button-group__button--focus")}handleMouseOver(e){const t=m(e.target);t?.classList.add("sl-button-group__button--hover")}handleMouseOut(e){const t=m(e.target);t?.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{const o=e.indexOf(t),a=m(t);a&&(a.classList.add("sl-button-group__button"),a.classList.toggle("sl-button-group__button--first",o===0),a.classList.toggle("sl-button-group__button--inner",o>0&&o<e.length-1),a.classList.toggle("sl-button-group__button--last",o===e.length-1),a.classList.toggle("sl-button-group__button--radio",a.tagName.toLowerCase()==="sl-radio-button"))})}render(){return s`
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
    `}};b.styles=N;v([f("slot")],b.prototype,"defaultSlot",2);v([d()],b.prototype,"disableRole",2);v([k()],b.prototype,"label",2);function m(e){var t;const o="sl-button, sl-radio-button";return(t=e.closest(o))!=null?t:e.querySelector(o)}b.define("sl-button-group");const C=x`
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

        &::part(base) {
            height: 32px;
            background-color: var(--store-header-primary-color);
        }

        &::part(label) {
            font-size: var(--sl-font-size-small);
            font-family: var(--body-font);
            font-weight: 400;
            position: relative;
        }

        ${g(p.lg+80)} {
            & {
                width: auto;
            }

            &::part(base) {
                border-radius: var(--sl-border-radius-circle);
                width: 32px;
            }

            & .open-store-text {
                display: none;
            }

            & .small-logo {
                margin-inline-end: 0 !important;
                top: 7px;
            }
        }
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .msft-logo, .store-logo {
        display: block;
        margin: 0 auto;
    }

    .msft-logo {
        width: 120px;
        height: 36px;
    }

    .store-logo {
        width: 54px;
        height: 36px;
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

    ${g(p.md+65)} {
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

    ${g(p.md)} {
        .right-elements:not(.shown) {
            left: var(--sl-spacing-x-small);
        }

        auto-complete-app-search {
            width: 90% !important;
        }
    }

    ${g(p.sm+70)} {
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

    ${g(p.xs)} {
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
`;class O{constructor(t){this.callback=t,this.matchMediaForDarkTheme=window.matchMedia("(prefers-color-scheme: dark)"),this.handleThemeChange=()=>{this.callback(!!this.matchMediaForDarkTheme.matches)},this.isDarkTheme=!!this.matchMediaForDarkTheme.matches}addListenThemeChange(){this.matchMediaForDarkTheme.addEventListener("change",this.handleThemeChange)}removeListenThemeChange(){this.matchMediaForDarkTheme.removeEventListener("change",this.handleThemeChange)}}var D=Object.defineProperty,z=Object.getOwnPropertyDescriptor,c=(e,t,o,a)=>{for(var n=a>1?void 0:a?z(t,o):t,l=e.length-1,u;l>=0;l--)(u=e[l])&&(n=(a?u(t,o,n):u(n))||n);return a&&n&&D(t,o,n),n};let r=class extends S{constructor(){super(),this.homeLocation="home",this.msftUrl="https://microsoft.com",this.selectedNav=this.homeLocation,this.showMobileSearchBox=!1,this.isDarkMode=!1,this.windowWidth=0,this.searchShown=this.showMobileSearchBox?"shown":"",this.supportedLocations=[],this.routeChangeHandler=({context:{url:e}})=>this.restoreActiveTab(e.pathname),this.localize=new T(this),this.tabIndicatorObserver=new ResizeObserver(()=>this.repositionTabIndicator()),this.handleThemeChange=this.handleThemeChange.bind(this)}async connectedCallback(){super.connectedCallback(),this.prefersThemesObserver=new O(this.handleThemeChange),this.isDarkMode=this.prefersThemesObserver.isDarkTheme,this.prefersThemesObserver.addListenThemeChange(),this.supportedLocations=await M.getChrome().then(t=>this.chromeLoaded(t),t=>this.chromeFailedToLoad(t)),h.addEventListener("route-changed",this.routeChangeHandler);const e=new ResizeObserver(()=>{this.windowWidth=window.innerWidth});this.updateComplete.then(()=>{h.route&&this.restoreActiveTab(h.route.url.pathname),e.observe(document.body),this.tabIndicatorObserver.observe(document.body)}),w.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),h.removeEventListener("route-changed",this.routeChangeHandler),this.prefersThemesObserver?.removeListenThemeChange(),this.tabIndicatorObserver.unobserve(document.body),w.removeImpressionTracking(this)}updated(e){e.has("showMobileSearchBox")&&this.showMobileSearchBox&&this.shadowRoot?.querySelector("auto-complete-app-search")?.focus()}handleThemeChange(e){this.isDarkMode=e}renderElements(){const e=this.showMobileSearchBox?"shown":"";return this.windowWidth>p.sm+70?s`
                ${this.renderSkipNav()}
                ${this.renderLeftElements(!0,e)}
                ${this.renderRightElements(!1,e)}
            `:s`
            ${this.renderSkipNav()}
            ${this.renderRightElements(!0,e)}
            ${this.renderLeftElements(!1,e)}
        `}handleSkipNav(e){e.preventDefault();const t=new Event("skipToMain"),o=new Event("skipToSpotlight"),a=h.route?.url.pathname.substring(1).toLowerCase();(a?this.supportedLocations.find(l=>l.location===a):null)?document.dispatchEvent(o):document.dispatchEvent(t)}renderLeftElements(e,t){return s`
            <div class="nav-buttons-container">
                ${e?this.renderHomeLogo(t):""}
                <sl-button-group class="${t}" type="toolbar">
                    ${_(this.supportedLocations,o=>o.location,o=>s`
                        <sl-button variant="text"
                                   href="${h.getLocalizedUrl(`/${o.location}`)}"
                                   @click="${a=>this.preventDoubleRouting(a,o.location)}"
                                   class="${o.location} { ${this.selectedNav===o.location?"active":B}"
                                   telemetry-event-id="TabSelected"
                                   telemetry-data='{ "data": "${o.location}" }'>
                           <span class="tab-label">${o.label}</span>
                        </sl-button>
                    `)}
                    <div class="indicator"></div>
                </sl-button-group>
            </div>
        `}preventDoubleRouting(e,t){new URL(location.href).pathname.startsWith(`/${t}`)&&(e.preventDefault(),e.stopPropagation())}renderRightElements(e,t){return s`
            <div class="right-elements ${t}">
                ${e?this.renderHomeLogo(t):""}
                ${this.renderRightElementGrouping(e,t)}
            </div>
        `}renderSkipNav(){return s`
            <sl-button
                class="skip-to-main"
                @click="${this.handleSkipNav}"
            >
                ${i.get("NavigationBar.SkipToMain")}
            </sl-button>
        `}renderRightElementGrouping(e,t){const o=s`
            <div class="mobile-button-container ${t}">
                ${this.renderMobileSearchButton(t)}
            </div>
            <auto-complete-app-search class="${t}" @blur="${()=>this.showMobileSearchBox=!1}" .isDarkMode="${this.isDarkMode}"></auto-complete-app-search>
            ${this.renderOpenStoreButton(t)}
        `;return e?s`
                <div class="right-element-group ${t}"> ${o} </div>
            `:o}render(){return this.supportedLocations.length===0?this.renderLoading():s`
            <div
                class="navbar-search-container"
                telemetry-area-id="Header"
                telemetry-data='{ "headerItems": "${this.supportedLocations.map(({location:e})=>e)}" }'
            >
                ${this.renderElements()}
            </div>
        `}renderLoading(){return s`
            <sl-skeleton class="navbar-loading" effect="pulse"></sl-skeleton>
        `}renderHomeLogo(e){const t=h.getLocalizedUrl(`/${this.homeLocation}`);return s`
            <div class="home-logo-link ${e}">
                <a href="${this.msftUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    tabindex="0" 
                    aria-label="${i.get("NavigationBar.UniversalMicrosoftAriaLabel")}"
                    telemetry-event-id="NavbarSelected"
                    telemetry-data='{"data": "universal msft logo"}'>
                    <img class="msft-logo" src="${this.isDarkMode?"/assets/icons/microsoft-logo-light-1.png":"/assets/icons/microsoft-logo-dark-1.png"}" loading="lazy" alt="${i.get("NavigationBar.UniversalMicrosoftAriaLabel")}" crossorigin="anonymous"/>
                </a>
                <a href="${t}" 
                    @click="${o=>this.preventDoubleRouting(o,this.homeLocation)}" 
                    tabindex="0" 
                    aria-label="${i.get("NavigationBar.MicrosoftStoreHomeAriaLabel")}"
                    telemetry-event-id="NavbarSelected"
                    telemetry-data='{"data": "store logo"}'>
                    <img class="store-logo" src="${this.isDarkMode?"/assets/icons/microsoft-logo-light-2.png":"/assets/icons/microsoft-logo-dark-2.png"}" loading="lazy" alt="${i.get("NavigationBar.MicrosoftStoreHomeAriaLabel")}" crossorigin="anonymous"/>
                </a>
            </div>
        `}renderOpenStoreButton(e){return navigator.userAgent.includes("Windows")?s`
                <div class="store-button-container ${e}">
                    <sl-button class="open-store-btn ${e}" href="ms-windows-store://?referrer=storeforweb" variant="primary" size="small" aria-label="Open Store Desktop Button" telemetry-event-id="OpenStoreClicked" rel="nofollow">
                        <div class="row">
                            <img class="small-logo" width="20" height="20" src=${this.isDarkMode?"/assets/icons/dark-logo-32x32.png":"/assets/icons/light-logo-32x32.svg"} loading="lazy" alt="Button Logo for the Microsoft Store" />
                            <span class="open-store-text">${i.get("NavigationBar.OpenInStore")}</span>
                        </div>
                    </sl-button>
                </div>
            `:s``}renderMobileSearchButton(e){return s`
            <sl-button @click="${this.mobileSearchBtnClicked}" class="mobile-search-btn ${e}" variant="default" size="medium" aria-label="Mobile Search Button"
                    telemetry-event-id="NavbarSelected"
                    telemetry-data='{ "data": "search" }'>
                <sl-icon class="search" name="search"></sl-icon>
            </sl-button>
        `}restoreActiveTab(e){const t=e.substring(1).toLowerCase(),o=this.supportedLocations.find(a=>a.location===t);(o||!this.selectedNav)&&(this.selectedNav=o?.location||this.homeLocation,this.updateComplete.then(()=>this.repositionTabIndicator()))}mobileSearchBtnClicked(){this.showMobileSearchBox=!this.showMobileSearchBox}chromeLoaded(e){const t=[{location:this.homeLocation,label:i.get("NavigationBar.Home")}];return e.includes("Productivity")&&t.push({location:"apps",label:i.get("NavigationBar.Apps")}),e.includes("Gaming")&&t.push({location:"games",label:i.get("NavigationBar.Games")}),e.includes("Entertainment")&&t.push({location:"movies",label:i.get("NavigationBar.Entertainment")}),t}chromeFailedToLoad(e){return console.warn("Failed to load /pages/chrome. Navbar will show all nav elements.",e),this.chromeLoaded(["home","Productivity","Gaming","Entertainment"])}repositionTabIndicator(){setTimeout(()=>{if(!this.tabIndicator)return;const e=this.localize.dir()==="rtl"?-1:1,t=this.tabGroup?.shadowRoot?.querySelector("slot")?.assignedElements()||[],o=t.find(l=>l.classList.contains(this.selectedNav)),a=o?.shadowRoot?.querySelector("slot[part='label']")?.assignedElements()[0],n=t.slice(0,t.indexOf(o)).reduce((l,u)=>l+u.clientWidth,0);this.tabIndicator.style.width=`${a?.offsetWidth||0}px`,this.tabIndicator.style.translate=`${e*n}px`},0)}};r.styles=[L,C];c([d()],r.prototype,"selectedNav",2);c([d()],r.prototype,"showMobileSearchBox",2);c([d()],r.prototype,"isDarkMode",2);c([d()],r.prototype,"windowWidth",2);c([d()],r.prototype,"searchShown",2);c([d()],r.prototype,"supportedLocations",2);c([f("sl-button-group")],r.prototype,"tabGroup",2);c([f(".indicator")],r.prototype,"tabIndicator",2);r=c([E("nav-bar")],r);export{O as P,b as S};
