import{i as f,s as S,M as d,A as r,P as u,d as g,f as p,g as b,l,x as a,a as T,n as A,r as c,t as C}from"./index-f0821274.js";import{c as F}from"./repeat-aaef31c8.js";import"./auto-complete-app-search-76feaa83.js";import"./chunk.MHCKU7CX-552ac5c8.js";import"./product-collection-2e973b65.js";import"./not-found-c917cd1e.js";import{P as w}from"./paged-list-89caa6b1.js";import{f as L}from"./filter-menu.styles-da605465.js";import"./style-map-663a1d19.js";import"./chunk.YCHBWCKL-ccebaa75.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-a9c3431f.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-74a8ae57.js";import"./image-helper-5b969ca1.js";import"./nav-bar-ca104fe4.js";import"./spacing.styles-57b961dc.js";const v=f`
    product-collection {
        width: 100%;
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    h2 {
        font-weight: var(--sl-font-weight-semibold);
    }

    .component {
        display: flex;
        padding: var(--sl-spacing-2x-large);
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: var(--sl-border-radius-large);
        background-color: rgba(255, 255, 255, 0.7);
        flex-direction: column;
        position: relative;
        gap: 20px;
    }

    @media (prefers-color-scheme: dark) {
        .component {
            background-color: var(--sl-color-neutral-100);
        }
    }

    .search-results-container {
        margin-top: var(--sl-spacing-3x-large);
    }
`;var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,o=(e,t,s,i)=>{for(var h=i>1?void 0:i?k(t,s):t,m=e.length-1,y;m>=0;m--)(y=e[m])&&(h=(i?y(t,s,h):y(h))||h);return i&&h&&$(t,s,h),h};let n=class extends S{constructor(){super(),this.query="",this.selectedDepartmentFilter=d.All,this.selectedAgeFilter=r.All,this.selectedPriceFilter=u.All,this.selectedCategoryFilter=g.All,this.selectedSubscriptionFilter=p.All,this.searchResultsList=null,this.searchFiltersList=null,this.filterButtonClicked=!1,this.departmentMap=new Map,this.priceMap=new Map,this.categoryMap=new Map,this.subscriptionMap=new Map,this.resetState=!0,this.productsUpdatedListener=e=>this.updateFilters(e.detail)}connectedCallback(){if(super.connectedCallback(),!this.query){document.body.dispatchEvent(new CustomEvent("focus-search-box"));return}this.setFiltersFromParams(),this.updateResetState(),this.refreshQuery(),this.searchResultsList?.addEventListener("updated",this.productsUpdatedListener),this.searchResultsList?.fetch(),b.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),this.searchResultsList&&this.searchResultsList.removeEventListener("updated",this.productsUpdatedListener),b.removeImpressionTracking(this)}updated(e){if(e.has("query")&&this.query&&(this.resetFilters(),this.getSelectedFilterFromParam(),this.refreshQuery()),e.has("searchResultsList")){const i=this.searchResultsList,h=e.get("searchResultsList");h&&h.removeEventListener("updated",this.productsUpdatedListener),i&&(i.fetch(),i.addEventListener("updated",this.productsUpdatedListener)),this.setToggleBtnRoles()}e.has("selectedCategoryFilter")&&this.setComboboxRoles(),e.has("filterButtonClicked")&&this.setToggleBtnRoles()}setComboboxRoles(){const e=this.shadowRoot?.querySelectorAll(".dropdown-button");requestAnimationFrame(()=>{e.forEach(t=>{t.shadowRoot?.querySelector('[part~="base"]')?.setAttribute("role","combobox")})})}setToggleBtnRoles(){(this.shadowRoot?.querySelector(".filter-button")).shadowRoot?.querySelector('[part~="base"]')?.setAttribute("aria-pressed",`${this.filterButtonClicked}`)}updateFilters(e){e.filterOptions&&(this.searchFiltersList=e.filterOptions,this.populateMaps())}populateMaps(){if(this.searchFiltersList){let e=null;if(this.searchFiltersList.mediaType){e=Object.keys(d);for(let t=0;t<e.length;t++)this.departmentMap.set(e[t],this.searchFiltersList.mediaType[t])}if(this.searchFiltersList.PriceType){e=Object.keys(u);for(let t=0;t<e.length;t++)this.priceMap.set(e[t],this.searchFiltersList.PriceType[t])}if(this.searchFiltersList.Category){const t=this.searchFiltersList.Category;for(let s=0;s<t.length;s++)this.categoryMap.set(t[s][0],t[s])}if(this.searchFiltersList.SubscriptionType){e=Object.keys(p);for(let t=0;t<e.length;t++)this.subscriptionMap.set(e[t],this.searchFiltersList.SubscriptionType[t])}}}updateFilterStateHistory(){const e=new URL(window.location.href),t=e.searchParams;this.updateStateHistory(t,this.selectedDepartmentFilter,d.All,"department"),this.updateStateHistory(t,this.selectedAgeFilter,r.All,"age"),this.updateStateHistory(t,this.selectedPriceFilter,u.All,"price"),this.updateStateHistory(t,this.selectedCategoryFilter,g.All,"category"),this.updateStateHistory(t,this.selectedSubscriptionFilter,p.All,"subscription"),window.history.replaceState({},"",e.toString())}updateStateHistory(e,t,s,i){t!==s?(this.deleteState(e,i),this.appendState(e,i,t)):this.deleteState(e,i)}appendState(e,t,s){e.append(t,s)}deleteState(e,t){e.get(t)&&e.delete(t)}getselectedFilterTitle(e){switch(e){case"department":return this.selectedDepartmentFilter===d.All?l.get("Search.Filter.All"):this.departmentMap.get(this.selectedDepartmentFilter)[1];case"age":return this.selectedAgeFilter===r.All?l.get("Search.Filter.AllAges"):this.getAgeTitle();case"price":return this.selectedPriceFilter===u.All?l.get("Search.Filter.AllPrices"):this.priceMap.get(this.selectedPriceFilter)[1];case"category":return this.selectedCategoryFilter===g.All?l.get("Search.Filter.AllCategories"):this.categoryMap.get(this.selectedCategoryFilter)[1];case"subscription":return this.selectedSubscriptionFilter===p.All?l.get("Search.Filter.AllSubscriptions"):this.subscriptionMap.get(this.selectedSubscriptionFilter)[1];default:return""}}getAgeTitle(){switch(this.selectedAgeFilter){case r.Three:return this.searchFiltersList?.UserAge?.at(1)?.at(1)||"";case r.Four:return this.numberToString(4);case r.Five:return this.numberToString(5);case r.Six:return this.numberToString(6);case r.Seven:return this.numberToString(7);case r.Eight:return this.numberToString(8);case r.Nine:return this.numberToString(9);case r.Ten:return this.numberToString(10);case r.Eleven:return this.numberToString(11);case r.Twelve:return this.numberToString(12);case r.Thirteen:return this.numberToString(13);case r.Fourteen:return this.numberToString(14);case r.Fifteen:return this.numberToString(15);case r.Sixteen:return this.numberToString(16);case r.Seventeen:return this.numberToString(17);default:return l.get("Search.Filter.AllAges")}}numberToString(e){return e.toLocaleString(l.getLocaleName())}setNewFilterType(e,t){return t==="department"?e===l.get("Search.Filter.All")?d.All:this.retrieveFilterType(this.departmentMap,e):t==="age"?this.retrieveAgeType(e):t==="price"?e===l.get("Search.Filter.AllPrices")?u.All:this.retrieveFilterType(this.priceMap,e):t==="category"?e===l.get("Search.Filter.AllCategories")?g.All:this.retrieveFilterType(this.categoryMap,e):e===l.get("Search.Filter.AllSubscriptions")?p.All:this.retrieveFilterType(this.subscriptionMap,e)}retrieveAgeType(e){switch(e){case this.searchFiltersList?.UserAge?.at(1)?.at(1):return r.Three;case this.numberToString(4):return r.Four;case this.numberToString(5):return r.Five;case this.numberToString(6):return r.Six;case this.numberToString(7):return r.Seven;case this.numberToString(8):return r.Eight;case this.numberToString(9):return r.Nine;case this.numberToString(10):return r.Ten;case this.numberToString(11):return r.Eleven;case this.numberToString(12):return r.Twelve;case this.numberToString(13):return r.Thirteen;case this.numberToString(14):return r.Fourteen;case this.numberToString(15):return r.Fifteen;case this.numberToString(16):return r.Sixteen;case this.numberToString(17):return r.Seventeen;default:return r.All}}retrieveFilterType(e,t){let s="";return e.forEach((i,h)=>{i!==void 0&&t===i[1]&&(s=h)}),s}setFiltersFromParams(){const e=new URLSearchParams(window.location.search);e.has("department")&&(this.selectedDepartmentFilter=e.get("department")),e.has("age")&&(this.selectedAgeFilter=e.get("age")),e.has("price")&&(this.selectedPriceFilter=e.get("price")),e.has("category")&&(this.selectedCategoryFilter=e.get("category")),e.has("subscription")&&(this.selectedSubscriptionFilter=e.get("subscription"))}refreshQuery(){this.searchResultsList=w.fromSearchResults(decodeURIComponent(this.query),this.selectedDepartmentFilter,this.selectedAgeFilter,this.selectedPriceFilter,this.selectedCategoryFilter,this.selectedSubscriptionFilter)}filterChanged(e,t){t==="department"?(this.selectedDepartmentFilter=this.setNewFilterType(e,"department"),this.resetFilters(!0)):t==="age"?this.selectedAgeFilter=this.setNewFilterType(e,"age"):t==="price"?this.selectedPriceFilter=this.setNewFilterType(e,"price"):t==="category"?this.selectedCategoryFilter=this.setNewFilterType(e,"category"):this.selectedSubscriptionFilter=this.setNewFilterType(e,"subscription"),this.updateResetState(),this.updateFilterStateHistory(),this.refreshQuery()}updateResetState(){if(this.selectedDepartmentFilter===d.All&&this.selectedAgeFilter===r.All&&this.selectedPriceFilter===u.All){this.resetState=!0;return}this.resetState=!1}getSelectedFilterFromParam(){const t=new URL(window.location.href).searchParams;for(const[s,i]of t)switch(s){case"department":this.selectedDepartmentFilter=i||d.All;break;case"age":this.selectedAgeFilter=i||r.All;break;case"price":this.selectedPriceFilter=i||u.All;break;case"category":this.selectedCategoryFilter=i||g.All;break;case"subscription":this.selectedSubscriptionFilter=i||p.All;break}}resetFilters(e){e||(this.selectedDepartmentFilter=d.All,this.selectedAgeFilter=r.All,this.selectedPriceFilter=u.All),this.selectedCategoryFilter=g.All,this.selectedSubscriptionFilter=p.All,this.updateResetState()}filterButtonClickedFunc(){this.filterButtonClicked=!this.filterButtonClicked}resetButtonClicked(){this.selectedDepartmentFilter=d.All,this.selectedAgeFilter=r.All,this.selectedPriceFilter=u.All,this.selectedCategoryFilter=g.All,this.selectedSubscriptionFilter=p.All,this.updateResetState(),this.updateFilterStateHistory(),this.refreshQuery()}render(){const e=this.query?"":"d-none";return a`
            <div telemetry-area-id="SearchFilters" 
                 telemetry-data='{ "filters": ${JSON.stringify(this.getFilterData())} }'>
                ${this.renderSearchHeader()}
                ${this.renderFilterModule()}
                ${this.renderInitialFilters()}
            </div>
            <div class="search-results-container ${e}">
                ${this.renderCollectionOrEmpty()}
            </div>
           
        `}renderCollectionOrEmpty(){return this.searchResultsList?.items.length!==0?a`
                <product-collection
                    .products=${this.searchResultsList}
                    direction="row" 
                    card-appearance="square-details"
                    infinite-scroll="vertical"
                    telemetry-area-id="SearchResults"
                    telemetry-data='{ "query": "${this.query}", "filters": ${JSON.stringify(this.getFilterData())} }'>
                </product-collection>
            `:this.searchResultsList.hasMoreResults?a``:a`<not-found-page item-type="search" item-name="${this.query}"></not-found-page>`}renderFilterModule(){const e=this.filterButtonClicked?"":"d-none";return a`
            <div class="component ${e}">
                <div class="filter-module-row">
                    <div class="filter-dropdowns">
                        ${this.renderSearchFilter()}
                    </div>
                    <sl-button class="reset-button" @click=${()=>this.resetButtonClicked()} ?disabled=${this.resetState} 
                           telemetry-event-id="FilterResetClicked">
                        <span>${l.get("Search.Filter.Reset")}</span>
                    </sl-button>
                </div>
            </div>
        `}renderSearchFilter(){return a`
            <sl-dropdown>
                <sl-button class="dropdown-button" slot="trigger" aria-label="${l.getFormatted("Collection.Filter.SortByAriaLabel","media type")}" caret>${this.getselectedFilterTitle("department")}</sl-button>
                <sl-menu class="filter-menu">
                    ${this.searchFiltersList?.mediaType?F(this.searchFiltersList?.mediaType.slice(0,this.searchFiltersList?.mediaType.length-4),e=>this.renderMenuItems(e[1],"department")):""}
                </sl-menu>
            </sl-dropdown>
            <sl-dropdown>
                <sl-button class="dropdown-button" slot="trigger" aria-label="${l.getFormatted("Collection.Filter.SortByAriaLabel","age")}" caret>${this.getselectedFilterTitle("age")}</sl-button>
                <sl-menu class="filter-menu">
                    ${this.searchFiltersList?.UserAge?F(this.searchFiltersList?.UserAge,e=>this.renderMenuItems(e[1],"age")):""}
                </sl-menu>
            </sl-dropdown>
            <sl-dropdown>
                <sl-button class="dropdown-button" slot="trigger" aria-label="${l.getFormatted("Collection.Filter.SortByAriaLabel","price")}" caret>${this.getselectedFilterTitle("price")}</sl-button>
                <sl-menu class="filter-menu">
                    ${this.searchFiltersList?.PriceType?F(this.searchFiltersList?.PriceType,e=>this.renderMenuItems(e[1],"price")):""}
                </sl-menu>
            </sl-dropdown>
            ${this.renderOptionalDropdown("category")}
            ${this.renderOptionalDropdown("subscription")}
        `}renderOptionalDropdown(e){return e==="category"&&this.searchFiltersList?.Category?a`
                <sl-dropdown>
                    <sl-button class="dropdown-button" slot="trigger" aria-label="${l.getFormatted("Collection.Filter.SortByAriaLabel","category")}" caret>${this.getselectedFilterTitle("category")}</sl-button>
                    <sl-menu class="filter-menu">
                        ${this.searchFiltersList?.Category?F(this.searchFiltersList?.Category,t=>this.renderMenuItems(t[1],"category")):""}
                    </sl-menu>
                </sl-dropdown>
            `:e==="subscription"&&this.searchFiltersList?.SubscriptionType?a`
                <sl-dropdown>
                    <sl-button class="dropdown-button" slot="trigger" aria-label="${l.getFormatted("Collection.Filter.SortByAriaLabel","subscription")}" caret>${this.getselectedFilterTitle("subscription")}</sl-button>
                    <sl-menu class="filter-menu">
                        ${this.searchFiltersList?.SubscriptionType?F(this.searchFiltersList?.SubscriptionType,t=>this.renderMenuItems(t[1],"subscription")):""}
                    </sl-menu>
                </sl-dropdown>
            `:a``}renderMenuItems(e,t){if(t==="department"){const s=this.selectedDepartmentFilter===this.setNewFilterType(e,"department");return a`
                <sl-menu-item class="${s?"checked-style":""}" 
                              @click="${()=>this.filterChanged(e,"department")}" 
                              telemetry-event-id="FilterMenuChanged"
                              telemetry-data='{ "filterType": "department", "filterValue": "${e}" }'>${e}</sl-menu-item>
            `}else if(t==="age"){const s=this.selectedAgeFilter===this.setNewFilterType(e,"age");return a`
                <sl-menu-item class="${s?"checked-style":""}" 
                              @click="${()=>this.filterChanged(e,"age")}"
                              telemetry-event-id="FilterMenuChanged"
                              telemetry-data='{ "filterType": "age", "filterValue": "${e}" }'>${e}</sl-menu-item>
            `}else if(t==="price"){const s=this.selectedPriceFilter===this.setNewFilterType(e,"price");return a`
                <sl-menu-item class="${s?"checked-style":""}" 
                              @click="${()=>this.filterChanged(e,"price")}"
                              telemetry-event-id="FilterMenuChanged"
                              telemetry-data='{ "filterType": "price", "filterValue": "${e}" }'>${e}</sl-menu-item>
            `}else if(t==="category"){const s=this.selectedCategoryFilter===this.setNewFilterType(e,"category");return a`
                <sl-menu-item class="${s?"checked-style":""}" 
                              @click="${()=>this.filterChanged(e,"category")}"
                              telemetry-event-id="FilterMenuChanged"
                              telemetry-data='{ "filterType": "category", "filterValue": "${e}" }'>${e}</sl-menu-item>
            `}else{const s=this.selectedSubscriptionFilter===this.setNewFilterType(e,"subscription");return a`
                <sl-menu-item class="${s?"checked-style":""}" 
                              @click="${()=>this.filterChanged(e,"subscription")}"
                              telemetry-event-id="FilterMenuChanged"
                              telemetry-data='{ "filterType": "subscription", "filterValue": "${e}" }'>${e}</sl-menu-item>
            `}}renderSearchHeader(){if(!this.query)return a``;const e=this.filterButtonClicked?"filter-opened":"";return a`
            <div class="row">
                <h2>${l.getFormatted("Search.Header",this.query)}</h2>
                <sl-button class="filter-button" 
                           @click=${()=>this.filterButtonClickedFunc()} 
                           telemetry-event-id="FilterDisplayChanged"
                           telemetry-data='{ "opened": ${this.filterButtonClicked} }'>
                    <sl-icon class="filter-icon" name="filter"></sl-icon>
                    <span class="filter-text">${l.get("Search.Filter.Button")}</span>
                    <sl-icon class="chevron-icon ${e}" name="chevron-down"></sl-icon>
                </sl-button>
            </div>
        `}renderInitialFilters(){this.setInitialFilterRoles();const e=this.filterButtonClicked?"d-none":"",t=this.searchFiltersList?.mediaType;return a`
            <div class="initial-filter-row ${e}" role="tablist">
                ${t?F(t.slice(0,t.length-4),s=>this.renderFilterMenuItem(s[1])):""}
            </div>
        `}renderFilterMenuItem(e){const t=this.selectedDepartmentFilter===this.setNewFilterType(e,"department");return a`
            <sl-button class="${t?"initial-checked-style":""} initial-filter-button" slot="trigger"
                       @click="${()=>this.filterChanged(e,"department")}"
                       telemetry-event-id="FilterButtonChanged"
                       telemetry-data='{ "filterType": "department", "filterValue": "${e}" }'
                       pill>${e}</sl-button>
        `}setInitialFilterRoles(){const e=this.shadowRoot?.querySelectorAll(".initial-filter-row sl-button");for(const t of e||[]){const s=t.shadowRoot?.querySelector('[part~="base"]');s&&(s.role="tab",s.ariaSelected=t.textContent?.toLowerCase().includes(this.selectedDepartmentFilter.toLowerCase())?"true":"false")}}getFilterData(){return{department:{selected:this.selectedDepartmentFilter,options:this.searchFiltersList?.mediaType?.slice(0,this.searchFiltersList?.mediaType?.length-4)},age:{selected:this.selectedAgeFilter,options:this.searchFiltersList?.UserAge},category:{selected:this.selectedCategoryFilter,options:this.searchFiltersList?.Category},price:{selected:this.selectedPriceFilter,options:this.searchFiltersList?.PriceType},subscription:{selected:this.selectedSubscriptionFilter,options:this.searchFiltersList?.SubscriptionType}}}};n.styles=[T,L,v];o([A()],n.prototype,"query",2);o([c()],n.prototype,"selectedDepartmentFilter",2);o([c()],n.prototype,"selectedAgeFilter",2);o([c()],n.prototype,"selectedPriceFilter",2);o([c()],n.prototype,"selectedCategoryFilter",2);o([c()],n.prototype,"selectedSubscriptionFilter",2);o([c()],n.prototype,"searchResultsList",2);o([c()],n.prototype,"searchFiltersList",2);o([c()],n.prototype,"filterButtonClicked",2);o([c()],n.prototype,"departmentMap",2);o([c()],n.prototype,"priceMap",2);o([c()],n.prototype,"categoryMap",2);o([c()],n.prototype,"subscriptionMap",2);o([c()],n.prototype,"resetState",2);n=o([C("search-results-page")],n);export{n as SearchResultsPage};
