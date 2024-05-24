import{i as y,s as w,C as o,M as h,l as s,x as e,c as u,_ as a,S as C,a as g,r as $,e as A,t as M}from"./index-aa05d19d.js";import{m as N,s as T}from"./market-collection-service-a80a5752.js";import{P as i}from"./paged-list-5dbf62ed.js";const S=y`
    :host {
        scrollbar-width: none;
    }
`;var P=Object.defineProperty,f=Object.getOwnPropertyDescriptor,v=(t,l,r,c)=>{for(var n=c>1?void 0:c?f(l,r):l,m=t.length-1,p;m>=0;m--)(p=t[m])&&(n=(c?p(l,r,n):p(n))||n);return c&&n&&P(l,r,n),n};let d=class extends w{constructor(){super(),this.homeCollections=null,this.trendingApps=i.fromMerchandiserProducts(o.EssentialApps),this.trendingGames=i.fromComputedProducts(o.TopGrossing,h.Games),this.trendingMovies=i.fromMovieProducts(o.NewMovies),this.topFreeApps=i.fromComputedProducts(o.TopFree,h.Apps),this.productivityApps=i.fromMerchandiserProducts(o.BestProductivityApps),this.musicStreamingApps=i.fromMerchandiserProducts(o.ExploreAWorldOfMusic),this.contentCreationApps=i.fromMerchandiserProducts(o.BestCreativityApps),this.newAndNoteworthyGames=i.fromMerchandiserProducts(o.NewAndNotableGames),this.weeklyGameDeals=i.fromMerchandiserProducts(o.WeeklyGameDeals),this.newMovies=i.fromMovieProducts(o.NewMovies),this.topMovies=i.fromMovieProducts(o.TopSellingMovies),this.topTvShows=i.fromMovieProducts(o.TopSellingTvShows),this.actionAdventure=i.fromMovieProducts(o.TopSellingMovies,"Action/Adventure"),this.familyMovies=i.fromMovieProducts(o.TopSellingMovies,"Family"),this.dramaMovies=i.fromMovieProducts(o.TopSellingMovies,"Drama"),this.comedyMovies=i.fromMovieProducts(o.TopSellingMovies,"Comedy"),this.tallTileCollections=[this.actionAdventure,this.familyMovies,this.dramaMovies,this.comedyMovies],this.homeCollectionGroup=i.fromListOfCollections(o.HomeCollectionGroup),this.marketCollectionsFetch=N.fetch("home").then(t=>this.homeCollections=t),this.familyMovies.take=3,this.actionAdventure.take=3,this.dramaMovies.take=3,this.comedyMovies.take=3,this.dramaMovies.titleOverride=s.get("Search.Filter.Drama"),this.dramaMovies.subtitle=s.get("MoviesPage.DramaMovies"),this.familyMovies.titleOverride=s.get("Search.Filter.Family"),this.familyMovies.subtitle=s.get("MoviesPage.FamilyMovies"),this.actionAdventure.titleOverride=s.get("Search.Filter.ActionAdventure"),this.actionAdventure.subtitle=s.get("MoviesPage.ActionAdventureMovies"),this.comedyMovies.titleOverride=s.get("Search.Filter.Comedy"),this.comedyMovies.subtitle=s.get("MoviesPage.ComedyMovies")}render(){const t=A();return e`
            <lazy-load 
                class="spotlight-shimmer" 
                when="immediate" 
                .renderer="${()=>this.renderSpotlight()}" 
                .importer="${()=>this.loadSpotlight()}" ${u(t)}>
            </lazy-load>
            <div class="product-collections-wrap">
                <lazy-load 
                    class="trending-collection-shimmer ${this.homeCollections?.getHiddenClass(this.trendingApps.collectionName)}"
                    .renderer="${()=>this.renderTrendingApps()}" 
                    .importer="${()=>this.loadTrendingCollection()}"
                    .when="${u(t)}">
                </lazy-load>
                <lazy-load 
                    class="wide-collection-shimmer ${this.homeCollections?.getHiddenClass(this.topFreeApps.collectionName)}" 
                    .renderer="${()=>this.renderTopFreeApps()}" 
                    .importer="${()=>this.loadProductCollection()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="square-collection-shimmer ${this.homeCollections?.getHiddenClass(this.productivityApps.collectionName)}" 
                    .renderer="${()=>this.renderProductivityApps()}" 
                    .importer="${()=>this.loadProductCollection()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="square-collection-shimmer ${this.homeCollections?.getHiddenClass(this.musicStreamingApps.collectionName)}" 
                    .renderer="${()=>this.renderMusicStreamingApps()}" 
                    .importer="${()=>this.loadProductCollection()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="wide-details-collection-shimmer ${this.homeCollections?.getHiddenClass(this.contentCreationApps.collectionName)}" 
                    .renderer="${()=>this.renderTrendingWithCreators()}" 
                    .importer="${()=>this.loadProductCollection()}"
                    when="visible"> 
                </lazy-load>
                <lazy-load 
                    class="tall-collection-shimmer ${this.homeCollections?.getHiddenClass(this.newAndNoteworthyGames.collectionName)}" 
                    .renderer="${()=>this.renderNewAndNoteworthyGames()}" 
                    .importer="${()=>this.loadProductCollection()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="ranked-collection-shimmer ${this.homeCollections?.getHiddenClass(this.weeklyGameDeals.collectionName)}" 
                    .renderer="${()=>this.renderWeeklyGameDeals()}" 
                    .importer="${()=>this.loadProductCollection()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="tall-collection-shimmer ${this.homeCollections?.getHiddenClass(this.newMovies.collectionName)}" 
                    .renderer="${()=>this.renderNewMovies()}" 
                    .importer="${()=>this.loadProductCollection()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="tall-tile-collection-shimmer ${this.homeCollections?.getHiddenClass(this.tallTileCollections.map(l=>l.collectionName))}" 
                    .renderer="${()=>this.renderTallTileGroup()}" 
                    .importer="${()=>this.loadTallTileGroup()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="trending-sxs-collection-shimmer ${this.homeCollections?.getHiddenClass([this.topMovies.collectionName,this.topTvShows.collectionName])}" 
                    .renderer="${()=>this.renderTopMoviesAndTvShows()}" 
                    .importer="${()=>this.loadTrendingCollection()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="collection-group-shimmer ${this.homeCollections?.getHiddenClass(this.homeCollectionGroup.collectionName)}" 
                    .renderer="${()=>this.renderHomeCollectionGroup()}" 
                    .importer="${()=>this.importCollectionGroup()}"
                    when="visible">
                </lazy-load>
            </div>
        `}loadTrendingCollection(){const t=a(()=>import("./trending-collection-f01c1eb2.js"),["assets/js/trending-collection-f01c1eb2.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/nav-bar-cd5e889c.js","assets/js/product-collection-91cc6b51.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js"]);return Promise.allSettled([this.marketCollectionsFetch,t])}loadSpotlight(){const t=a(()=>import("./spotlight-control-f9d33d25.js"),["assets/js/spotlight-control-f9d33d25.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/style-map-a428b004.js"]);return Promise.allSettled([this.marketCollectionsFetch,t])}loadProductCollection(){const t=a(()=>import("./product-collection-91cc6b51.js").then(l=>l.p),["assets/js/product-collection-91cc6b51.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js"]);return Promise.allSettled([this.marketCollectionsFetch,t])}loadTallTileGroup(){const t=a(()=>import("./tall-tile-group-5cb5b1eb.js"),["assets/js/tall-tile-group-5cb5b1eb.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/css-function-2ba732a7.js","assets/js/product-collection-91cc6b51.js","assets/js/style-map-a428b004.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/chunk.SKOOBYPV-dc2f449b.js","assets/js/chunk.KRRLOROJ-faa56958.js"]);return Promise.all([this.marketCollectionsFetch,t])}renderSpotlight(){return this.homeCollections?.permits(o.HomeSpotlight)?e`
            <product-spotlight-control
                collection-name="${C.Home}" >
            </product-spotlight-control>
        `:e``}renderTrendingApps(){const t=this.homeCollections?.permits(this.trendingApps.collectionName),l=this.homeCollections?.permits(this.trendingGames.collectionName),r=this.homeCollections?.permits(this.trendingMovies.collectionName);if(!t&&!l&&!r)return e``;const c=[this.trendingApps.collectionName,this.trendingGames.collectionName,this.trendingMovies.collectionName];return e`
            <trending-collection
                .apps="${t?this.trendingApps:null}" 
                .games="${l?this.trendingGames:null}" 
                .movies="${r?this.trendingMovies:null}"
                telemetry-area-id="TrendingCollectionsHome"
                telemetry-data='{ "collectionIds": ${JSON.stringify(c)}, "areaSlot": 1,  "type": "collection"}'
                >
            </trending-collection>
        `}renderTopFreeApps(){return this.homeCollections?.permits(this.topFreeApps.collectionName)?e`
            <product-collection
                class="wide-column-collection"
                .products=${this.topFreeApps}
                card-appearance="wide"
                ?show-title="${!0}"
                see-all-url="${this.topFreeApps.collectionLink||""}"
                direction="column"
                telemetry-area-id="TopFreeApps"
                telemetry-data='{ "collectionId": "${this.topFreeApps.collectionName}", "areaSlot": 2, "type": "collection" }'
                >
            </product-collection>
        `:e``}renderMusicStreamingApps(){return this.homeCollections?.permits(this.musicStreamingApps.collectionName)?e`
            <product-collection
                .products=${this.musicStreamingApps}
                card-appearance="square"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.musicStreamingApps.collectionLink||""}"
                telemetry-area-id="MusicStreamingApps"
                telemetry-data='{ "collectionId": "${this.productivityApps.collectionName}", "areaSlot": 4, "type": "collection" }'
                >
            </product-collection>
        `:e``}renderProductivityApps(){return this.homeCollections?.permits(this.productivityApps.collectionName)?e`
            <product-collection
                .products=${this.productivityApps}
                card-appearance="square"
                wrap="nowrap"
                ?show-title="${!0}"
                direction="row"
                see-all-url="${this.productivityApps.collectionLink||""}"
                telemetry-area-id="BestProductivityApps"
                telemetry-data='{ "collectionId": "${this.productivityApps.collectionName}", "areaSlot": 3, "type": "collection" }'
                >
            </product-collection>
        `:e``}renderTrendingWithCreators(){return this.homeCollections?.permits(this.contentCreationApps.collectionName)?e`
            <product-collection
                .products=${this.contentCreationApps}
                card-appearance="wide-details"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.contentCreationApps.collectionLink||""}"
                telemetry-area-id="TrendingWithCreators"
                telemetry-data='{ "collectionId": "${this.contentCreationApps.collectionName}", "areaSlot": 5, "type": "collection" }'
                >
            </product-collection>
        `:e``}renderNewAndNoteworthyGames(){return this.homeCollections?.permits(this.newAndNoteworthyGames.collectionName)?e`
            <product-collection
                .products=${this.newAndNoteworthyGames}
                card-appearance="tall"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.newAndNoteworthyGames.collectionLink||""}"
                telemetry-area-id="NewNoteworthyGames"
                telemetry-data='{ "collectionId": "${this.newAndNoteworthyGames.collectionName}", "areaSlot": 6 , "type": "collection"}'
                >
            </product-collection>
        `:e``}renderWeeklyGameDeals(){return this.homeCollections?.permits(this.weeklyGameDeals.collectionName)?e`
            <product-collection
                .products=${this.weeklyGameDeals}
                card-appearance="ranked"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.weeklyGameDeals.collectionLink||""}"
                telemetry-area-id="WeeklyGameDeals"
                telemetry-data='{ "collectionId": "${this.weeklyGameDeals.collectionName}", "areaSlot": 7, "type": "collection" }'
                >
            </product-collection>
        `:e``}renderNewMovies(){return this.homeCollections?.permits(this.newMovies.collectionName)?e`
            <product-collection
                .products=${this.newMovies}
                card-appearance="tall"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.newMovies.collectionLink||""}"
                telemetry-area-id="NewMovies"
                telemetry-data='{ "collectionId": "${this.newMovies.collectionName}", "areaSlot": 8, "type": "collection" }'
                >
            </product-collection>
        `:e``}renderTopMoviesAndTvShows(){return!this.homeCollections?.permits(this.topMovies.collectionName)||!this.homeCollections?.permits(this.topTvShows.collectionName)?e``:e`
            <div class="double-small-hero-row">
                <trending-collection class="double-row-hero" .movies="${this.topMovies}" category="movies" component-size="small"
                                     telemetry-area-id="TrendingCollectionTopMovies"
                                     telemetry-data='{ "collectionId": "${this.topMovies.collectionName}", "areaSlot": 10, "type": "collection"  }'
                                     >
                </trending-collection>
                <trending-collection class="double-row-hero" .movies="${this.topTvShows}" category="movies" component-size="small"
                                     telemetry-area-id="TrendingCollectionTopTvShows"
                                     telemetry-data='{ "collectionId": "${this.topTvShows.collectionName}", "areaSlot": 10, "type": "collection" }'
                                     >
                </trending-collection>
            </div>
        `}renderTallTileGroup(){const t=this.tallTileCollections.filter(r=>this.homeCollections?.permits(r.collectionName)),l=JSON.stringify(this.tallTileCollections.map(r=>r.collectionName));return t.length===0?e``:e`
            <tall-tile-group media-type="movies" .collections="${t}"
                             telemetry-area-id="TallTileGroupCollections"
                             telemetry-data='{ "collectionIds": ${l}, "areaSlot": 9 }'
                             >
            </tall-tile-group>
        `}renderHomeCollectionGroup(){return this.homeCollections?.permits(o.HomeCollectionGroup)?e`
            <collection-group class="square-row-collection"
                              .products=${this.homeCollectionGroup} 
                              ?show-title=${!0} wrap="nowrap" direction="row" 
                              see-all-url="collections/browse/${encodeURIComponent(o.HomeCollectionGroup)}" 
                              telemetry-area-id="HomeCollectionGroup"
                              telemetry-data='{ "collectionId": "${o.HomeCollectionGroup}", "areaSlot": 11, "type": "collection-group" }'
                              >
            </collection-group>
        `:e``}importCollectionGroup(){const t=a(()=>import("./collection-group-f391d218.js"),["assets/js/collection-group-f391d218.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js"]);return Promise.allSettled([t,this.marketCollectionsFetch])}};d.styles=[g,T,S];v([$()],d.prototype,"homeCollections",2);d=v([M("home-page")],d);export{d as HomePage};
