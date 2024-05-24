import{i as y,m as b,B as f,s as I,M as c,g,b as F,l as o,x as n,Y as L,a as w,n as C,r as l,t as S}from"./index-b49b19e7.js";import{alertService as k}from"./alert-service-619e8956.js";import"./product-collection-3fa5ff54.js";import{P as p}from"./paged-list-43c2f330.js";import{c as u}from"./repeat-18af36e2.js";import"./auto-complete-app-search-29ced610.js";import"./chunk.MHCKU7CX-df67fb6b.js";import{I as v}from"./image-helper-99359f42.js";import{f as $}from"./filter-menu.styles-d60fd63e.js";import"./chunk.HDLULROG-a171dd0c.js";import"./chunk.H437TPPF-d2f2afca.js";import"./chunk.KRRLOROJ-42ee1a93.js";import"./style-map-db7a8965.js";import"./chunk.HF7GESMZ-7c1083f0.js";import"./css-function-27cf3c1f.js";import"./nav-bar-27bbdc35.js";import"./chunk.YCHBWCKL-ccebaa75.js";const T=y`
    .collection-results-container {
        width: 92%;
        margin: auto;
        display: flex;
        flex-direction: row;
        margin-top: var(--sl-spacing-3x-large);
    }
    .collection-results-container.no-hero {
        width: 100%;
    }

    h2 {
        font-weight: var(--sl-font-weight-semibold);
    }

    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
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

    product-collection {
        --card-space: var(--sl-spacing-medium);
    }

    .products-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .collection-container {
        position: relative;
        width: 100%;
    }

    .hero {
        margin-top: -120px;
    }

    /** The container for the hero image should have a mask image that fades out at the bottom */
    .hero-img-container {
        position: relative;
        top: 0;
        width: 100%;
    }
    .hero-img-container .details {
        position: absolute;
        bottom: 50%;
        transform: translateY(50%);
        left: 50px;
        width: 30%;
        color: var(--sl-default-white);
    }

    .title {
        font-weight: var(--sl-font-weight-semibold);
    }

    .desc {
        font-size: var(--sl-font-size-small);
        margin-top: var(--sl-spacing-small);
    }

    .hero-img {
        background-size: cover;
        width: 100%;
        aspect-ratio: 16 / 9;
        max-height: max(60vh, 380px);
        border-radius: var(--sl-border-radius-large);
        -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 60%, transparent 100%);
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 60%, transparent 100%);
    }
    .hero-img::after {
        content: "";
        position: absolute;
        inset: 0;
        background: var(--theme-shadow-gradient-color);
    }

    ${b(f.sm)} {
        .hero-img-container .details {
            left: 10%;
            right: 10%;
            bottom: 0;
            width: auto;
            text-align: center;
            color: var(--theme-font-color);
        }
        .desc {
            display: inline-block;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            line-clamp: 3;
            overflow: hidden;
            -webkit-box-orient: vertical;
            white-space: normal;
        }
        .hero {
            bottom: -2rem;
            margin-top: 0;
        }
    }

    .error-container {
        height: 80vh;
        width: 100%;
    }

    .error-container h1 {
        font-weight: 600;
        text-align: center;  
        max-width: 550px;
    }

    .error-container p {
        text-align: center;
        padding: 0 var(--sl-spacing-x-large);
        margin-top: 0;
    }
`;var N=Object.defineProperty,D=Object.getOwnPropertyDescriptor,s=(e,t,r,d)=>{for(var a=d>1?void 0:d?D(t,r):t,h=e.length-1,m;h>=0;h--)(m=e[h])&&(a=(d?m(t,r,a):m(a))||a);return d&&a&&N(t,r,a),a};let i=class extends I{constructor(){super(),this.collectionName="",this.collectionType=null,this.mediaType=c.Apps,this.category=null,this.collectionItems=null,this.curatedCollectionDetails=null,this.cardAppearance="square",this.currentTitle="",this.loadingError=null,this.filters=null,this.collectionFilterList=null,this.discountFilterList=null,this.categoryFilterList=null,this.subscriptionFilterList=null,this.numPlayersFilterList=null,this.studioFilterList=null,this.networkFilterList=null,this.subCategoryFilterList=null,this.selectedCollectionFilter="",this.selectedDiscountFilter="",this.selectedCategoryFilter=this.category,this.selectedSubscriptionFilter="",this.selectedNumPlayersFilter="",this.selectedStudioFilter="",this.selectedNetworkFilter="",this.selectedSubCategoryFilter="",this.selectedCollectionChoiceId="",this.selectedDiscountChoiceId="",this.selectedCategoryChoiceId="",this.selectedSubscriptionChoiceId="",this.selectedNumPlayersChoiceId="",this.selectedStudioChoiceId="",this.selectedNetworkChoiceId="",this.selectedSubCategoryChoiceId="",this.filterButtonClicked=!1,this.resetState=!0,this.collectionUpdatedHandler=e=>this.collectionChunkFetched(e.detail)}get hasHeroImage(){const e=new URLSearchParams(window.location.search).get("hasHeroImage")&&this.curatedCollectionDetails===null,t=this.shadowRoot?.querySelector(".collection-results-container");return!e&&!this.curatedCollectionDetails?.imageUrl?(t?.classList.add("no-hero"),!1):(t?.classList.remove("no-hero"),!0)}connectedCallback(){super.connectedCallback(),this.curatedCollectionDetails=null,this.collectionItems?.curatedCollectionDetails&&(this.curatedCollectionDetails=this.collectionItems.curatedCollectionDetails),g.addImpressionTracking(this)}disconnectedCallback(){super.disconnectedCallback(),this.collectionItems&&this.collectionItems.removeEventListener("updated",this.collectionUpdatedHandler),this.clearFilters(),this.loadingError=null,g.removeImpressionTracking(this)}firstUpdated(){this.collectionName||k.showError("Unable to load collection page","We couldn't load that collection page. Try to refresh.")}async updated(e){const t=e.has("category");(e.has("collectionName")&&this.collectionType||t)&&(this.collectionItems&&this.collectionItems.removeEventListener("updated",this.collectionUpdatedHandler),this.curatedCollectionDetails=null,await this.getFilters(),this.setCollectionItems(),this.collectionItems&&(this.collectionItems.addEventListener("updated",this.collectionUpdatedHandler),this.collectionItems.take=50,this.collectionItems.fetch().then(()=>this.setCardAppearance()).catch(h=>this.loadingError=h))),e.has("selectedCategoryFilter")&&this.setComboboxRoles(),e.has("filterButtonClicked")&&!this.hasHeroImage&&this.setToggleBtnRoles()}setComboboxRoles(){const e=this.shadowRoot?.querySelectorAll(".dropdown-button");requestAnimationFrame(()=>{e.forEach(t=>{t.shadowRoot?.querySelector('[part~="base"]')?.setAttribute("role","combobox")})})}setToggleBtnRoles(){(this.shadowRoot?.querySelector(".filter-button")).shadowRoot?.querySelector('[part~="base"]')?.setAttribute("aria-pressed",`${this.filterButtonClicked}`)}clearFilters(){this.filters=[],this.collectionFilterList=null,this.selectedCollectionFilter="",this.selectedCollectionChoiceId="",this.discountFilterList=null,this.selectedDiscountFilter="",this.selectedDiscountChoiceId="",this.categoryFilterList=null,this.selectedCategoryFilter="",this.selectedCategoryChoiceId="",this.subscriptionFilterList=null,this.selectedSubscriptionFilter="",this.numPlayersFilterList=null,this.selectedNumPlayersFilter="",this.studioFilterList=null,this.selectedStudioFilter="",this.networkFilterList=null,this.selectedNetworkFilter=""}async getFilters(){switch(this.filters=await F.getCollectionFilters(this.collectionName,this.mediaType),this.collectionFilterList=this.filters[0].choices,this.selectedCollectionFilter=this.setCurrentValueFromList(this.collectionFilterList,this.filters[0].initialChoiceId?.toLowerCase()||""),this.selectedCollectionChoiceId=this.setCurrentValueFromList(this.collectionFilterList,this.filters[0].initialChoiceId?.toLowerCase()||"",!0),this.mediaType){case c.Apps:{this.discountFilterList=this.filters[1].choices,this.selectedDiscountFilter=this.setCurrentValueFromList(this.discountFilterList,this.filters[1].initialChoiceId?.toLowerCase()||""),this.selectedDiscountChoiceId=this.setCurrentValueFromList(this.discountFilterList,this.filters[1].initialChoiceId?.toLowerCase()||"",!0),this.categoryFilterList=this.filters[2].choices[0].subFilters?this.filters[2].choices[0].subFilters[0].choices:null,this.selectedCategoryChoiceId=this.category?this.setCurrentValueFromList(this.categoryFilterList||[],this.category.toLowerCase()||"",!0):this.setCurrentValueFromList(this.categoryFilterList||[],this.filters[2].choices[0].subFilters[0].initialChoiceId?.toLowerCase()||"",!0),this.selectedCategoryFilter=this.setCurrentValueFromList(this.categoryFilterList||[],this.selectedCategoryChoiceId||""),this.selectedSubCategoryFilter=this.selectedSubCategoryFilter=o.get("Collection.Filter.AllCategories"),this.getSubCategoryFilters();break}case c.Games:{this.discountFilterList=this.filters[1].choices,this.selectedDiscountFilter=this.setCurrentValueFromList(this.discountFilterList,this.filters[1].initialChoiceId?.toLowerCase()||""),this.subscriptionFilterList=this.filters[2].choices,this.selectedSubscriptionFilter=this.setCurrentValueFromList(this.subscriptionFilterList,this.filters[2].initialChoiceId?.toLowerCase()||""),this.categoryFilterList=this.filters[3].choices[0].subFilters?this.filters[3].choices[0].subFilters[0].choices:null,this.selectedCategoryChoiceId=this.category?this.category:this.setCurrentValueFromList(this.categoryFilterList||[],this.filters[3].choices[0].subFilters[0].initialChoiceId?.toLowerCase()||"",!0),this.selectedCategoryFilter=this.setCurrentValueFromList(this.categoryFilterList||[],this.selectedCategoryChoiceId||""),this.numPlayersFilterList=this.filters[3].choices[0].subFilters?this.filters[3].choices[0].subFilters[1].choices:null,this.selectedNumPlayersFilter=this.setCurrentValueFromList(this.numPlayersFilterList||[],this.filters[3].choices[0].subFilters[1].defaultChoiceId?.toLowerCase()||"");break}case c.Movies:{if(this.category){const e=await F.getMovieGenresForCurrentMarket();this.category=e[this.category]??this.category}this.categoryFilterList=this.filters[1].choices[0].subFilters?this.filters[1].choices[0].subFilters[0].choices:null,this.selectedCategoryChoiceId=this.category?this.category:this.setCurrentValueFromList(this.categoryFilterList||[],this.filters[1].choices[0].subFilters[0].initialChoiceId?.toLowerCase()||"",!0),this.selectedCategoryFilter=this.setCurrentValueFromList(this.categoryFilterList||[],this.selectedCategoryChoiceId||""),this.studioFilterList=this.filters[1].choices[0].subFilters?this.filters[1].choices[0].subFilters[1].choices:null,this.studioFilterList&&this.filters[1].choices[0].subFilters&&(this.selectedStudioFilter=this.setCurrentValueFromList(this.studioFilterList,this.filters[1].choices[0].subFilters[1].defaultChoiceId?.toLowerCase()||""));break}case c.TV:this.categoryFilterList=this.filters[1].choices[0].subFilters?this.filters[1].choices[0].subFilters[0].choices:null,this.selectedCategoryChoiceId=this.category?this.category:this.setCurrentValueFromList(this.categoryFilterList||[],this.filters[1].choices[0].subFilters[0].initialChoiceId?.toLowerCase()||"",!0),this.selectedCategoryFilter=this.setCurrentValueFromList(this.categoryFilterList||[],this.selectedCategoryChoiceId||""),this.networkFilterList=this.filters[1].choices[0].subFilters?this.filters[1].choices[0].subFilters[1].choices:null,this.selectedNetworkFilter=this.setCurrentValueFromList(this.networkFilterList||[],this.filters[1].choices[0].subFilters[1].defaultChoiceId?.toLowerCase()||"")}this.updateResetState()}setCurrentValueFromList(e,t,r){let d="";if(this.filters&&e){const a=t;for(const h of e)if(h.choiceId?.toLowerCase()===a.toLowerCase()||h.title?.toLowerCase()===a.toLowerCase()){d=(r?h.choiceId:h.title||"")||"";break}}return d}setCollectionItems(){const e=this.getCategoryChoiceId(this.categoryFilterList||[],this.category||"");this.collectionName&&(this.collectionType==="computed"?this.collectionItems=p.fromComputedProducts(this.collectionName,this.mediaType,e):this.collectionType==="curated"?this.collectionItems=p.fromMerchandiserProducts(this.collectionName):this.collectionType==="movies"&&(this.collectionItems=p.fromMovieProducts(this.collectionName,e)))}getCategoryChoiceId(e,t){for(const r of e)if(r.title===t)return r.choiceId||"";return""}setCardAppearance(){this.collectionItems?.items?.length&&(this.mediaType=this.collectionItems.items[0].productFamilyName?.toEnum(c)??c.Apps,this.cardAppearance=this.mediaType===c.Apps?"square":"tall"),this.getFilters()}collectionChunkFetched(e){this.updateDocumentTitle(),!this.curatedCollectionDetails&&e.curatedCollectionDetails&&(this.curatedCollectionDetails=e.curatedCollectionDetails,this.currentTitle=this.curatedCollectionDetails.title??"",this.updateDocumentTitle()),e.totalCount===0&&this.collectionItems&&!this.collectionItems.hasMoreResults&&(this.loadingError="No results")}updateDocumentTitle(){this.currentTitle&&(document.title=o.getFormatted("Common.PageTitle",this.currentTitle))}renderHero(){if(!this.hasHeroImage)return null;const e=v.getResizableImageUrl(this.curatedCollectionDetails?.imageUrl||"","height",780);return n`
            <div class="hero-img-container">
                <div class="hero-img" style="background-image: url('${e}')"></div>
                <div class="details">
                    <h2 class="title text-three-line-overflow">${this.curatedCollectionDetails?.title}</h2>
                    <p class="desc text-three-line-overflow">${this.curatedCollectionDetails?.description}</p>
                </div>
            </div>
        `}render(){if(this.loadingError){const e=new URLSearchParams;e.set("id",this.collectionName),L.navigate("/404/collection",e)}return n`
            <div telemetry-area-id="CollectionFilters"
                 telemetry-data='{ 
                     "collectionId": "${this.collectionName}", 
                     "filters": ${JSON.stringify(this.getFilterData())}, 
                     "collectionType": "${this.collectionType}",
                     "mediaType": "${this.mediaType}" 
                 }'>
                ${this.renderHero()}
                ${this.renderCollectionHeader()}
                ${this.renderInitialCollectionFilters()}
                ${this.renderFilterModule()}
            </div>
            <div class="collection-results-container">
                ${this.renderCollectionList()}
            </div>
        `}renderFilterModule(){const e=this.filterButtonClicked?"":"d-none";return n`
            <div class="component ${e}" id="filtermodule">
                <div class="filter-module-row">
                    <div class="filter-dropdowns">
                        ${this.renderCollectionFilter()}
                    </div>
                    <sl-button class="reset-button" @click=${()=>this.resetButtonClicked()} ?disabled=${this.resetState} 
                           telemetry-event-id="FilterResetClicked">
                        <span>${o.get("Search.Filter.Reset")}</span>
                    </sl-button>
                </div>
            </div>
        `}renderCollectionHeader(){if(!this.hasHeroImage){const e=this.filterButtonClicked?"filter-opened":"";return n`
                <div class="row">
                    ${this.renderCollectionTitle()}
                    <sl-button class="filter-button" 
                        @click=${()=>this.filterButtonClickedFunc()}
                        aria-pressed="true"
                        telemetry-event-id="FilterDisplayChanged"
                        telemetry-data='{ "opened": ${this.filterButtonClicked} }'>
                        <sl-icon class="filter-icon" name="filter"></sl-icon>
                        <span class="filter-text" aria-pressed="true">${o.get("Search.Filter.Button")}</span>
                        <sl-icon class="chevron-icon ${e}" name="chevron-down"></sl-icon>
                    </sl-button>
                </div>
            `}return n``}renderCollectionTitle(){const e=this.selectedCollectionFilter!=="";switch(this.mediaType){case c.Apps:{this.currentTitle=this.selectedCollectionFilter!==o.get("Collection.Filter.Specials")?this.selectedCollectionFilter+(e?" apps":""):(e?"Apps ":"")+this.selectedCollectionFilter.toLowerCase();break}case c.Games:{this.currentTitle=this.selectedCollectionFilter!==o.get("Collection.Filter.Specials")?this.selectedCollectionFilter+(e?" games":""):(e?"Games ":"")+this.selectedCollectionFilter.toLowerCase();break}default:this.currentTitle=this.selectedCollectionFilter}return this.updateDocumentTitle(),n`
            <h2>${this.currentTitle}</h2>
        `}renderCollectionFilter(){return n`
            <sl-dropdown>
                <sl-button class="dropdown-button" slot="trigger" aria-label="${o.getFormatted("Collection.Filter.SortByAriaLabel","collection")}" caret>${this.selectedCollectionFilter}</sl-button>
                <sl-menu class="filter-menu">
                    ${this.collectionFilterList?u(this.collectionFilterList,e=>this.renderMenuItems(e,"collection")):""}
                 </sl-menu>
            </sl-dropdown>
            ${this.renderOptionalDiscount()}
            ${this.renderOptionalSubscription()}
            <sl-dropdown>
                <sl-button class="dropdown-button" slot="trigger" aria-label="${o.getFormatted("Collection.Filter.SortByAriaLabel","category")}" caret>${this.selectedCategoryFilter}</sl-button>
                <sl-menu class="filter-menu">
                    ${this.categoryFilterList?u(this.categoryFilterList,e=>this.renderMenuItems(e,"category")):""}
                </sl-menu>
            </sl-dropdown>
            ${this.renderOptionalSubCategory()}
            ${this.renderOptionalNumPlayers()}
            ${this.renderOptionalStudio()}
            ${this.renderOptionalNetwork()}
        `}renderOptionalDiscount(){return this.mediaType===c.Apps||this.mediaType===c.Games?n`
                <sl-dropdown>
                    <sl-button class="dropdown-button" slot="trigger" aria-label="${o.getFormatted("Collection.Filter.SortByAriaLabel","discount")}" caret>${this.selectedDiscountFilter}</sl-button>
                    <sl-menu class="filter-menu">
                        ${this.discountFilterList?u(this.discountFilterList,e=>this.renderMenuItems(e,"discount")):""}
                    </sl-menu>
                </sl-dropdown>
            `:n``}renderOptionalSubscription(){return this.mediaType===c.Games?n`
                <sl-dropdown>
                    <sl-button class="dropdown-button" slot="trigger" aria-label="${o.getFormatted("Collection.Filter.SortByAriaLabel","subscription")}" caret>${this.selectedSubscriptionFilter}</sl-button>
                    <sl-menu class="filter-menu">
                        ${this.subscriptionFilterList?u(this.subscriptionFilterList,e=>this.renderMenuItems(e,"subscription")):""}
                    </sl-menu>
                </sl-dropdown>
            `:n``}renderOptionalSubCategory(){if(this.categoryFilterList){const e=this.selectedCategoryFilter;for(const t of this.categoryFilterList)if(e===t.title&&t.subFilters)return n`
                            <sl-dropdown>
                                <sl-button class="dropdown-button" slot="trigger" aria-label="${o.getFormatted("Collection.Filter.SortByAriaLabel","subcategory")}" caret>${this.selectedSubCategoryFilter}</sl-button>
                                <sl-menu class="filter-menu">
                                    ${this.subCategoryFilterList?u(this.subCategoryFilterList,r=>this.renderMenuItems(r,"subcategory")):""}
                                </sl-menu>
                            </sl-dropdown>
                        `}return n``}renderOptionalNumPlayers(){return this.mediaType===c.Games?n`
                <sl-dropdown>
                    <sl-button class="dropdown-button" slot="trigger" aria-label="${o.getFormatted("Collection.Filter.SortByAriaLabel","number of players")}" caret>${this.selectedNumPlayersFilter}</sl-button>
                    <sl-menu class="filter-menu">
                        ${this.numPlayersFilterList?u(this.numPlayersFilterList,e=>this.renderMenuItems(e,"players")):""}
                    </sl-menu>
                </sl-dropdown>
            `:n``}renderOptionalStudio(){return this.mediaType===c.Movies?n`
                <sl-dropdown>
                    <sl-button class="dropdown-button" slot="trigger" aria-label="${o.getFormatted("Collection.Filter.SortByAriaLabel","studio")}" caret>${this.selectedStudioFilter}</sl-button>
                    <sl-menu class="filter-menu">
                        ${this.studioFilterList?u(this.studioFilterList,e=>this.renderMenuItems(e,"studio")):""}
                    </sl-menu>
                </sl-dropdown>
            `:n``}renderOptionalNetwork(){return this.mediaType===c.TV?n`
                <sl-dropdown>
                    <sl-button class="dropdown-button" slot="trigger" aria-label="${o.getFormatted("Collection.Filter.SortByAriaLabel","network")}" caret>${this.selectedNetworkFilter}</sl-button>
                    <sl-menu class="filter-menu">
                        ${this.networkFilterList?u(this.networkFilterList,e=>this.renderMenuItems(e,"network")):""}
                    </sl-menu>
                </sl-dropdown>
            `:n``}renderMenuItems(e,t){let r=!1;return t==="collection"?r=this.selectedCollectionFilter===e.title:t==="discount"?r=this.selectedDiscountFilter===e.title:t==="category"?r=this.selectedCategoryFilter===e.title:t==="subscription"?r=this.selectedSubscriptionFilter===e.title:t==="studio"?r=this.selectedStudioFilter===e.title:t==="players"?r=this.selectedNumPlayersFilter===e.title:t==="network"?r=this.selectedNetworkFilter===e.title:r=this.selectedSubCategoryFilter===e.title,n`
            <sl-menu-item class="${r?"checked-style":""}"  
                          @click="${()=>this.filterChanged(e,t)}"
                          telemetry-event-id="FilterMenuChanged"
                          telemetry-data='{ "filterType": "${t}", "filterValue": "${e.choiceId}" }'>
                ${e.title}
            </sl-menu-item>
        `}filterChanged(e,t){t==="collection"?(this.selectedCollectionFilter=e.title||"",this.selectedCollectionChoiceId=e.choiceId||"",this.resetButtonClicked()):t==="discount"?(this.selectedDiscountFilter=e.title||"",this.selectedDiscountChoiceId=e.choiceId||""):t==="category"?(this.selectedCategoryFilter=e.title||"",this.selectedCategoryChoiceId=e.choiceId||"",this.selectedSubCategoryFilter=o.get("Collection.Filter.AllCategories"),this.getSubCategoryFilters()):t==="subscription"?(this.selectedSubscriptionFilter=e.title||"",this.selectedSubscriptionChoiceId=e.choiceId||""):t==="studio"?(this.selectedStudioFilter=e.title||"",this.selectedStudioChoiceId=e.choiceId||""):t==="players"?(this.selectedNumPlayersFilter=e.title||"",this.selectedNumPlayersChoiceId=e.choiceId||""):t==="network"?(this.selectedNetworkFilter=e.title||"",this.selectedNetworkChoiceId=e.choiceId||""):(this.selectedSubCategoryFilter=e.title||"",this.selectedSubCategoryChoiceId=e.choiceId||""),this.updateResetState(),this.refreshQuery()}resetButtonClicked(){this.selectedDiscountFilter=o.get("Collection.Filter.AllProducts"),this.selectedDiscountChoiceId="",this.selectedCategoryFilter=this.mediaType===c.Apps||this.mediaType===c.Games?o.get("Collection.Filter.AllCategories"):o.get("Collection.Filter.AllGenres"),this.selectedCategoryChoiceId="",this.selectedSubscriptionFilter=o.get("Collection.Filter.AllSubscriptions"),this.selectedSubscriptionChoiceId="",this.selectedNumPlayersFilter=o.get("Collection.Filter.AnyPlayers"),this.selectedNumPlayersChoiceId="",this.selectedStudioFilter=o.get("Collection.Filter.AllStudios"),this.selectedStudioChoiceId="",this.selectedNetworkFilter=o.get("Collection.Filter.AllNetworks"),this.selectedNetworkChoiceId="",this.selectedSubCategoryFilter=o.get("Collection.Filter.AllCategories"),this.selectedSubCategoryChoiceId="",this.updateResetState(),this.refreshQuery()}getSubCategoryFilters(){if(this.filters&&this.categoryFilterList){for(const e of this.categoryFilterList)if(e.choiceId?.toLowerCase()===this.selectedCategoryChoiceId?.toLowerCase()||e.title?.toLowerCase()===this.selectedCategoryChoiceId?.toLowerCase()){e.subFilters!==null&&(this.subCategoryFilterList=e.subFilters[0].choices,this.selectedSubCategoryFilter=this.setCurrentValueFromList(this.subCategoryFilterList,e.subFilters[0].initialChoiceId||""));break}}}updateResetState(){const e=this.selectedDiscountFilter===o.get("Collection.Filter.AllProducts"),t=this.selectedCategoryFilter===o.get("Collection.Filter.AllCategories")||this.selectedCategoryFilter===o.get("Collection.Filter.AllGenres"),r=this.selectedSubscriptionFilter===o.get("Collection.Filter.AllSubscriptions"),d=this.selectedNumPlayersFilter===o.get("Collection.Filter.AnyPlayers"),a=this.selectedStudioFilter===o.get("Collection.Filter.AllStudios"),h=this.selectedNetworkFilter===o.get("Collection.Filter.AllNetworks");switch(this.mediaType){case c.Apps:{this.resetState=e&&t;break}case c.Games:{this.resetState=e&&r&&t&&d;break}case c.Movies:{this.resetState=t&&a;break}case c.TV:{this.resetState=t&&h;break}}}refreshQuery(){const e=this.selectedCollectionChoiceId.charAt(0).toUpperCase().concat(this.selectedCollectionChoiceId.substring(1)),t=this.selectedCategoryChoiceId==="all"?"":this.selectedCategoryChoiceId;if(this.collectionName!=="")switch(this.mediaType){case c.Apps:{this.collectionItems=p.fromComputedProducts(e,this.mediaType,t,this.selectedDiscountChoiceId,void 0,void 0,this.selectedSubCategoryChoiceId);break}case c.Games:{this.collectionItems=p.fromComputedProducts(e,this.mediaType,t,this.selectedDiscountChoiceId,this.selectedSubscriptionChoiceId,this.selectedNumPlayersChoiceId,this.selectedSubCategoryChoiceId);break}case c.Movies:{this.collectionItems=p.fromMovieProducts(this.selectedCollectionChoiceId,t,this.selectedStudioChoiceId);break}case c.TV:{this.collectionItems=p.fromMovieProducts(this.selectedCollectionChoiceId,t,void 0,this.selectedNetworkChoiceId);break}}}filterButtonClickedFunc(){this.filterButtonClicked=!this.filterButtonClicked}renderCollectionList(){return n`
            <div class="collection-container ${this.hasHeroImage?"hero":""}">
                <product-collection card-appearance=${this.cardAppearance} 
                                    .products=${this.collectionItems}
                                    direction="row" 
                                    infinite-scroll="vertical" 
                                    telemetry-area-id="CollectionProducts"
                                    telemetry-data='{ "collectionId": "${this.collectionName}", "collectionType": "${this.collectionType}", "mediaType": "${this.mediaType}" }'>
                </product-collection>
            </div>
        `}renderInitialCollectionFilters(){if(!this.hasHeroImage){const e=this.filterButtonClicked?"d-none":"",t=this.collectionFilterList;return n`
            <div class="initial-filter-row ${e}">
                ${u(t||[],r=>this.renderCollectionMenuItem(r))}
            </div>
        `}return n``}renderCollectionMenuItem(e){const t=this.selectedCollectionFilter===e.title;return n`
            <sl-button class="${t?"initial-checked-style":""}" 
                       slot="trigger" 
                       @click="${()=>this.filterChanged(e,"collection")}"
                       telemetry-event-id="FilterMenuChanged"
                       telemetry-data='{ "filterType": "collection", "filterValue": "${e.choiceId}" }' pill>${e.title}</sl-button>
        `}getFilterData(){return{collections:{selected:this.selectedCollectionChoiceId||this.selectedCollectionFilter||this.collectionName,options:this.collectionFilterList?.slice(0,5).map(e=>e.title)},discount:{selected:this.selectedDiscountChoiceId||this.selectedDiscountFilter,options:this.discountFilterList?.map(e=>e.choiceId)},subscription:{selected:this.selectedSubscriptionChoiceId||this.selectedSubscriptionFilter,options:this.subscriptionFilterList?.map(e=>e.choiceId)},category:{selected:this.selectedCategoryChoiceId||this.selectedCategoryFilter,options:this.categoryFilterList?.map(e=>e.choiceId)},subCategory:{selected:this.selectedSubCategoryChoiceId||this.selectedSubCategoryFilter,options:this.subCategoryFilterList?.map(e=>e.choiceId)},studio:{selected:this.selectedStudioChoiceId||this.selectedStudioFilter,options:this.studioFilterList?.map(e=>e.choiceId)},players:{selected:this.selectedNumPlayersChoiceId||this.selectedNumPlayersFilter,options:this.numPlayersFilterList?.map(e=>e.choiceId)},network:{selected:this.selectedNetworkChoiceId||this.selectedNetworkFilter,options:this.networkFilterList?.map(e=>e.choiceId)}}}};i.styles=[w,$,T];s([C({attribute:"collection-name"})],i.prototype,"collectionName",2);s([C({attribute:"collection-type"})],i.prototype,"collectionType",2);s([C({attribute:"media-type"})],i.prototype,"mediaType",2);s([C()],i.prototype,"category",2);s([l()],i.prototype,"collectionItems",2);s([l()],i.prototype,"curatedCollectionDetails",2);s([l()],i.prototype,"cardAppearance",2);s([l()],i.prototype,"currentTitle",2);s([l()],i.prototype,"loadingError",2);s([l()],i.prototype,"filters",2);s([l()],i.prototype,"collectionFilterList",2);s([l()],i.prototype,"discountFilterList",2);s([l()],i.prototype,"categoryFilterList",2);s([l()],i.prototype,"subscriptionFilterList",2);s([l()],i.prototype,"numPlayersFilterList",2);s([l()],i.prototype,"studioFilterList",2);s([l()],i.prototype,"networkFilterList",2);s([l()],i.prototype,"subCategoryFilterList",2);s([l()],i.prototype,"selectedCollectionFilter",2);s([l()],i.prototype,"selectedDiscountFilter",2);s([l()],i.prototype,"selectedCategoryFilter",2);s([l()],i.prototype,"selectedSubscriptionFilter",2);s([l()],i.prototype,"selectedNumPlayersFilter",2);s([l()],i.prototype,"selectedStudioFilter",2);s([l()],i.prototype,"selectedNetworkFilter",2);s([l()],i.prototype,"selectedSubCategoryFilter",2);s([l()],i.prototype,"selectedCollectionChoiceId",2);s([l()],i.prototype,"selectedDiscountChoiceId",2);s([l()],i.prototype,"selectedCategoryChoiceId",2);s([l()],i.prototype,"selectedSubscriptionChoiceId",2);s([l()],i.prototype,"selectedNumPlayersChoiceId",2);s([l()],i.prototype,"selectedStudioChoiceId",2);s([l()],i.prototype,"selectedNetworkChoiceId",2);s([l()],i.prototype,"selectedSubCategoryChoiceId",2);s([l()],i.prototype,"filterButtonClicked",2);s([l()],i.prototype,"resetState",2);i=s([S("collections-page")],i);export{i as CollectionsPage};
