import{i as $,s as w,C as t,M as p,x as e,c as u,_ as h,S as m,l as C,a as g,r as P,e as A,t as f}from"./index-ea800fad.js";import{P as i}from"./paged-list-3560a4f8.js";import{m as N,s as v}from"./market-collection-service-4978f710.js";const S=$`


`;var _=Object.defineProperty,z=Object.getOwnPropertyDescriptor,y=(o,l,a,r)=>{for(var s=r>1?void 0:r?z(l,a):l,n=o.length-1,d;n>=0;n--)(d=o[n])&&(s=(r?d(l,a,s):d(s))||s);return r&&s&&_(l,a,s),s};let c=class extends w{constructor(){super(...arguments),this.appsCollections=null,this.topDeals=i.fromComputedProducts(t.TopDeals,p.Apps),this.topFreeApps=i.fromComputedProducts(t.TopFree,p.Apps),this.essentialApps=i.fromMerchandiserProducts(t.EssentialApps),this.newRisingApps=i.fromComputedProducts(t.NewAndRising,p.Apps),this.socialNetworkingApps=i.fromMerchandiserProducts(t.SocialNetworkingApps),this.creativityApps=i.fromMerchandiserProducts(t.BestCreativityApps),this.videoPhotoEditingApps=i.fromMerchandiserProducts(t.BestPhotoAndVideoEditingApps),this.utilityApps=i.fromMerchandiserProducts(t.UtilityApps),this.topPaidApps=i.fromComputedProducts(t.TopPaid,p.Apps),this.appsCollectionGroup=i.fromListOfCollections(t.AppsCollectionGroup),this.marketCollectionsFetch=N.fetch("productivityHome").then(o=>this.appsCollections=o)}render(){const o=A(),l=A();return e`
            <lazy-load class="spotlight-shimmer" 
                .renderer="${()=>this.renderSpotlight()}" 
                .importer="${()=>this.loadSpotlight()}" 
                when="immediate" 
                ${u(l)}>
            </lazy-load>
            <div class="product-collections-wrap">
                <lazy-load 
                    class="wide-collection-shimmer ${this.appsCollections?.getHiddenClass(this.topFreeApps.collectionName)}" 
                    .renderer="${()=>this.renderTopFreeApps()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    ${u(o)} 
                    .when="${l}">
                </lazy-load>
                <lazy-load 
                    class="square-collection-shimmer ${this.appsCollections?.getHiddenClass(this.essentialApps.collectionName)}" 
                    .renderer="${()=>this.renderEssentialApps()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    .when="${o}">
                </lazy-load>
                <lazy-load 
                    class="square-bg-collection-shimmer ${this.appsCollections?.getHiddenClass(this.videoPhotoEditingApps.collectionName)}" 
                    .renderer="${()=>this.renderPhotoVideoApps()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="square-collection-shimmer ${this.appsCollections?.getHiddenClass(this.socialNetworkingApps.collectionName)}" 
                    .renderer="${()=>this.renderSocialNetworkingApps()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="square-collection-shimmer ${this.appsCollections?.getHiddenClass(this.creativityApps.collectionName)}" 
                    .renderer="${()=>this.renderCreativityApps()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="square-bg-collection-shimmer ${this.appsCollections?.getHiddenClass(this.utilityApps.collectionName)}" 
                    .renderer="${()=>this.renderUtilityApps()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="wide-collection-shimmer ${this.appsCollections?.getHiddenClass(this.newRisingApps.collectionName)}" 
                    .renderer="${()=>this.renderNewRisingApps()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="square-collection-shimmer ${this.appsCollections?.getHiddenClass(this.topPaidApps.collectionName)}" 
                    .renderer="${()=>this.renderTopPaidApps()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="offer-collection-shimmer ${this.appsCollections?.getHiddenClass(this.topDeals.collectionName)}" 
                    .renderer="${()=>this.renderSpecialOffers()}" 
                    .importer="${()=>this.loadProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="collection-group-shimmer ${this.appsCollections?.getHiddenClass(this.appsCollectionGroup.collectionName)}" 
                    .renderer="${()=>this.renderCollectionGroup()}" 
                    .importer="${()=>this.loadCollectionGroup()}" 
                    when="visible">
                </lazy-load>
            </div>
        `}loadSpotlight(){const o=h(()=>import("./spotlight-control-2fe737d1.js"),["assets/js/spotlight-control-2fe737d1.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-0dadc8c6.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js","assets/js/style-map-14544ca7.js"]);return Promise.allSettled([this.marketCollectionsFetch,o])}loadProductCollection(){const o=h(()=>import("./product-collection-ec619889.js").then(l=>l.p),["assets/js/product-collection-ec619889.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-0dadc8c6.js","assets/js/style-map-14544ca7.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-eecd89ff.js","assets/js/auto-complete-app-search-88360129.js"]);return Promise.allSettled([this.marketCollectionsFetch,o])}loadCollectionGroup(){return h(()=>import("./collection-group-28268adb.js"),["assets/js/collection-group-28268adb.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-ec619889.js","assets/js/repeat-0dadc8c6.js","assets/js/style-map-14544ca7.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-eecd89ff.js","assets/js/auto-complete-app-search-88360129.js"])}renderSpotlight(){return this.appsCollections?.permits(m.Apps)?e`
            <product-spotlight-control collection-name="${m.Apps}" 
                 telemetry-area-id="SpotlightApps"
                 telemetry-data='{ "areaSlot": 0, "type": "spotlight" }'>
            </product-spotlight-control>
        `:e``}renderSpecialOffers(){return this.appsCollections?.permits(this.topDeals.collectionName)?e`
            <product-collection
                .products=${this.topDeals}
                card-appearance="offer"
                direction="row"
                ?show-title="${!0}"
                wrap="nowrap"
                telemetry-area-id="SpecialOffersApps"
                telemetry-data='{ "collectionId": "${this.topDeals.collectionName}", "areaSlot": 9, "type": "collection" }'
                title-override="${C.get("Common.SpecialOffers")}"
                see-all-url="${this.topDeals.collectionLink||""}"
                infinite-scroll="horizontal">
            </product-collection>
        `:e``}renderTopFreeApps(){return this.appsCollections?.permits(this.topFreeApps.collectionName)?e`
            <product-collection
                class="wide-column-collection"
                .products=${this.topFreeApps}
                card-appearance="wide"
                ?show-title="${!0}"
                direction="column"
                see-all-url="${this.topFreeApps.collectionLink||""}"
                telemetry-area-id="TopFreeApps"
                telemetry-data='{ "collectionId": "${this.topFreeApps.collectionName}", "areaSlot": 1, "type": "collection" }'>
            </product-collection>
        `:e``}renderEssentialApps(){return this.appsCollections?.permits(this.essentialApps.collectionName)?e`
            <product-collection
                .products=${this.essentialApps}
                card-appearance="square"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.essentialApps.collectionLink||""}"
                telemetry-area-id="EssentialApps"
                telemetry-data='{ "collectionId": "${this.essentialApps.collectionName}", "areaSlot": 2, "type": "collection" }'>
            </product-collection>
        `:e``}renderPhotoVideoApps(){return this.appsCollections?.permits(this.videoPhotoEditingApps.collectionName)?e`
            <product-collection class="photo-video-apps"
                .products=${this.videoPhotoEditingApps}
                card-appearance="square"
                ?show-title="${!0}"
                ?has-bg="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.videoPhotoEditingApps.collectionLink||""}"
                telemetry-area-id="VideoPhotoEditingApps"
                telemetry-data='{ "collectionId": "${this.videoPhotoEditingApps.collectionName}", "areaSlot": 3, "type": "collection" }'>
            </product-collection>
        `:e``}renderSocialNetworkingApps(){return this.appsCollections?.permits(this.socialNetworkingApps.collectionName)?e`
            <product-collection
                .products=${this.socialNetworkingApps}
                card-appearance="square"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.socialNetworkingApps.collectionLink||""}"
                telemetry-area-id="SocialNetworkingApps"
                telemetry-data='{ "collectionId": "${this.socialNetworkingApps.collectionName}", "areaSlot": 4, "type": "collection" }'>
            </product-collection>
        `:e``}renderCreativityApps(){return this.appsCollections?.permits(this.creativityApps.collectionName)?e`
            <product-collection
                .products=${this.creativityApps}
                card-appearance="square"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.creativityApps.collectionLink||""}"
                telemetry-area-id="BestCreativityApps"
                telemetry-data='{ "collectionId": "${this.creativityApps.collectionName}", "areaSlot": 5, "type": "collection" }'>
            </product-collection>
        `:e``}renderUtilityApps(){return this.appsCollections?.permits(this.utilityApps.collectionName)?e`
            <product-collection class="utility-apps"
                .products=${this.utilityApps}
                card-appearance="square"
                ?show-title="${!0}"
                ?has-bg="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.utilityApps.collectionLink||""}"
                telemetry-area-id="UtilityApps"
                telemetry-data='{ "collectionId": "${this.utilityApps.collectionName}", "areaSlot": 6, "type": "collection" }'>
            </product-collection>
        `:e``}renderNewRisingApps(){return this.appsCollections?.permits(this.newRisingApps.collectionName)?e`
            <product-collection class="wide-column-collection"
                .products=${this.newRisingApps}
                card-appearance="wide"
                ?show-title="${!0}"
                wrap="wrap"
                direction="column"
                see-all-url="${this.newRisingApps.collectionLink||""}"
                telemetry-area-id="NewAndRising"
                telemetry-data='{ "collectionId": "${this.newRisingApps.collectionName}", "areaSlot": 7, "type": "collection" }'>
            </product-collection>
        `:e``}renderTopPaidApps(){return this.appsCollections?.permits(this.topPaidApps.collectionName)?e`
            <product-collection
                .products=${this.topPaidApps}
                card-appearance="square"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.topPaidApps.collectionLink||""}"
                telemetry-area-id="TopPaidApps"
                telemetry-data='{ "collectionId": "${this.topPaidApps.collectionName}", "areaSlot": 8, "type": "collection" }'>
            </product-collection>
        `:e``}renderCollectionGroup(){return e`
            <collection-group class="square-row-collection" 
                              .products=${this.appsCollectionGroup} 
                              ?show-title="${!0}" 
                              wrap="nowrap" 
                              direction="row" 
                              see-all-url="collections/browse/${t.AppsCollectionGroup}" 
                              telemetry-area-id="AppsCollectionGroup"
                              telemetry-data='{ "collectionId": "${t.AppsCollectionGroup}", "areaSlot": 10, "type": "collection-group" }'>
            </collection-group>
        `}};c.styles=[g,v,S];y([P()],c.prototype,"appsCollections",2);c=y([f("apps-page")],c);export{c as AppsPage};
