import{i as y,s as C,C as t,M as h,l as s,x as e,c as u,_ as a,S as w,a as g,r as $,e as A,t as M}from"./index-f0821274.js";import{m as N,s as S}from"./market-collection-service-85ae9eb8.js";import{P as i}from"./paged-list-89caa6b1.js";const P=y`
    :host {
        scrollbar-width: none;
    }
`;var f=Object.defineProperty,T=Object.getOwnPropertyDescriptor,v=(o,l,r,c)=>{for(var n=c>1?void 0:c?T(l,r):l,m=o.length-1,p;m>=0;m--)(p=o[m])&&(n=(c?p(l,r,n):p(n))||n);return c&&n&&f(l,r,n),n};let d=class extends C{constructor(){super(),this.homeCollections=null,this.trendingApps=i.fromMerchandiserProducts(t.EssentialApps),this.trendingGames=i.fromComputedProducts(t.TopGrossing,h.Games),this.trendingMovies=i.fromMovieProducts(t.NewMovies),this.topFreeApps=i.fromComputedProducts(t.TopFree,h.Apps),this.productivityApps=i.fromMerchandiserProducts(t.BestProductivityApps),this.musicStreamingApps=i.fromMerchandiserProducts(t.ExploreAWorldOfMusic),this.contentCreationApps=i.fromMerchandiserProducts(t.BestCreativityApps),this.newAndNoteworthyGames=i.fromMerchandiserProducts(t.NewAndNotableGames),this.weeklyGameDeals=i.fromMerchandiserProducts(t.WeeklyGameDeals),this.newMovies=i.fromMovieProducts(t.NewMovies),this.topMovies=i.fromMovieProducts(t.TopSellingMovies),this.topTvShows=i.fromMovieProducts(t.TopSellingTvShows),this.actionAdventure=i.fromMovieProducts(t.TopSellingMovies,"Action/Adventure"),this.familyMovies=i.fromMovieProducts(t.TopSellingMovies,"Family"),this.dramaMovies=i.fromMovieProducts(t.TopSellingMovies,"Drama"),this.comedyMovies=i.fromMovieProducts(t.TopSellingMovies,"Comedy"),this.collectionReelCollections=[this.actionAdventure,this.familyMovies,this.dramaMovies,this.comedyMovies],this.homeCollectionGroup=i.fromListOfCollections(t.HomeCollectionGroup),this.marketCollectionsFetch=N.fetch("home").then(o=>this.homeCollections=o),this.familyMovies.take=3,this.actionAdventure.take=3,this.dramaMovies.take=3,this.comedyMovies.take=3,this.dramaMovies.titleOverride=s.get("Search.Filter.Drama"),this.dramaMovies.subtitle=s.get("MoviesPage.DramaMovies"),this.familyMovies.titleOverride=s.get("Search.Filter.Family"),this.familyMovies.subtitle=s.get("MoviesPage.FamilyMovies"),this.actionAdventure.titleOverride=s.get("Search.Filter.ActionAdventure"),this.actionAdventure.subtitle=s.get("MoviesPage.ActionAdventureMovies"),this.comedyMovies.titleOverride=s.get("Search.Filter.Comedy"),this.comedyMovies.subtitle=s.get("MoviesPage.ComedyMovies")}render(){const o=A();return e`
            <lazy-load 
                class="spotlight-shimmer" 
                when="immediate" 
                .renderer="${()=>this.renderSpotlight()}" 
                .importer="${()=>this.loadSpotlight()}" ${u(o)}>
            </lazy-load>
            <div class="product-collections-wrap">
                <lazy-load 
                    class="trending-collection-shimmer ${this.homeCollections?.getHiddenClass(this.trendingApps.collectionName)}"
                    .renderer="${()=>this.renderTrendingApps()}" 
                    .importer="${()=>this.loadTrendingCollection()}"
                    .when="${u(o)}">
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
                    class="collection-reel-shimmer ${this.homeCollections?.getHiddenClass(this.collectionReelCollections.map(l=>l.collectionName))}" 
                    .renderer="${()=>this.renderCollectionReelGroup()}" 
                    .importer="${()=>this.loadCollectionReelGroup()}"
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
        `}loadTrendingCollection(){const o=a(()=>import("./trending-collection-2d95c510.js"),["assets/js/trending-collection-2d95c510.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/auto-complete-app-search-76feaa83.js","assets/js/repeat-aaef31c8.js","assets/js/style-map-663a1d19.js","assets/js/nav-bar-ca104fe4.js","assets/js/product-collection-2e973b65.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js"]);return Promise.allSettled([this.marketCollectionsFetch,o])}loadSpotlight(){const o=a(()=>import("./spotlight-control-f509ec66.js"),["assets/js/spotlight-control-f509ec66.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-aaef31c8.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/style-map-663a1d19.js"]);return Promise.allSettled([this.marketCollectionsFetch,o])}loadProductCollection(){const o=a(()=>import("./product-collection-2e973b65.js").then(l=>l.p),["assets/js/product-collection-2e973b65.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-aaef31c8.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js"]);return Promise.allSettled([this.marketCollectionsFetch,o])}loadCollectionReelGroup(){const o=a(()=>import("./collection-reel-group-c9225192.js"),["assets/js/collection-reel-group-c9225192.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-aaef31c8.js","assets/js/product-collection-2e973b65.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js","assets/js/chunk.SKOOBYPV-db0b4048.js","assets/js/chunk.KRRLOROJ-a9c3431f.js"]);return Promise.all([this.marketCollectionsFetch,o])}renderSpotlight(){return this.homeCollections?.permits(t.HomeSpotlight)?e`
            <product-spotlight-control
                collection-name="${w.Home}" >
            </product-spotlight-control>
        `:e``}renderTrendingApps(){const o=this.homeCollections?.permits(this.trendingApps.collectionName),l=this.homeCollections?.permits(this.trendingGames.collectionName),r=this.homeCollections?.permits(this.trendingMovies.collectionName);if(!o&&!l&&!r)return e``;const c=[this.trendingApps.collectionName,this.trendingGames.collectionName,this.trendingMovies.collectionName];return e`
            <trending-collection
                .apps="${o?this.trendingApps:null}" 
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
        `}renderCollectionReelGroup(){const o=this.collectionReelCollections.filter(r=>this.homeCollections?.permits(r.collectionName)),l=JSON.stringify(this.collectionReelCollections.map(r=>r.collectionName));return o.length===0?e``:e`
            <collection-reel-group media-type="movies" .collections="${o}"
                             telemetry-area-id="CollectionReelGroup"
                             telemetry-data='{ "collectionIds": ${l}, "areaSlot": 9 }'
                             >
            </collection-reel-group>
        `}renderHomeCollectionGroup(){return this.homeCollections?.permits(t.HomeCollectionGroup)?e`
            <collection-group class="square-row-collection"
                              .products=${this.homeCollectionGroup} 
                              ?show-title=${!0} wrap="nowrap" direction="row" 
                              see-all-url="collections/browse/${encodeURIComponent(t.HomeCollectionGroup)}" 
                              telemetry-area-id="HomeCollectionGroup"
                              telemetry-data='{ "collectionId": "${t.HomeCollectionGroup}", "areaSlot": 11, "type": "collection-group" }'
                              >
            </collection-group>
        `:e``}importCollectionGroup(){const o=a(()=>import("./collection-group-77d800d0.js"),["assets/js/collection-group-77d800d0.js","assets/js/index-f0821274.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-2e973b65.js","assets/js/repeat-aaef31c8.js","assets/js/style-map-663a1d19.js","assets/js/chunk.HF7GESMZ-7c1083f0.js","assets/js/css-function-74a8ae57.js","assets/js/image-helper-5b969ca1.js","assets/js/nav-bar-ca104fe4.js","assets/js/auto-complete-app-search-76feaa83.js"]);return Promise.allSettled([o,this.marketCollectionsFetch])}};d.styles=[g,S,P];v([$()],d.prototype,"homeCollections",2);d=v([M("home-page")],d);export{d as HomePage};
