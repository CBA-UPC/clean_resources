import{i as v,s as u,C as t,l as s,x as o,c as M,_ as n,a as w,r as y,e as g,t as C}from"./index-ea800fad.js";import{P as r}from"./paged-list-3560a4f8.js";import{m as $,s as f}from"./market-collection-service-4978f710.js";const S=v`
    :host {
        display: block;
    }
`;var P=Object.defineProperty,T=Object.getOwnPropertyDescriptor,h=(e,i,l,a)=>{for(var c=a>1?void 0:a?T(i,l):i,m=e.length-1,p;m>=0;m--)(p=e[m])&&(c=(a?p(i,l,c):p(c))||c);return a&&c&&P(i,l,c),c};let d=class extends u{constructor(){super(),this.movieCollections=null,this.newMovies=r.fromMovieProducts(t.NewMovies),this.specialOffers=r.fromMovieProducts(t.Sale499Movies),this.topRentedMovies=r.fromMovieProducts(t.TopRentedMovies),this.featuredMovies=r.fromMovieProducts(t.FeaturedMovies),this.topTvShows=r.fromMovieProducts(t.TopSellingTvShows),this.topMovies=r.fromMovieProducts(t.TopSellingMovies),this.newTvShows=r.fromMovieProducts(t.NewTvShows),this.disneyMovies=r.fromMovieProducts(t.DisneyMovies),this.marvelMovies=r.fromMovieProducts(t.EverythingMarvel),this.familyMovies=r.fromMovieProducts(t.TopSellingMovies,"Family"),this.actionAdventureMovies=r.fromMovieProducts(t.TopSellingMovies,"Action/Adventure"),this.horrorMovies=r.fromMovieProducts(t.TopSellingMovies,"Horror"),this.collectionReelCollections=[this.disneyMovies,this.familyMovies,this.actionAdventureMovies,this.horrorMovies],this.bestVideoStreamingApps=r.fromMerchandiserProducts(t.BestVideoStreamingApps),this.spotlightCollection=null,this.marketCollectionsFetch=$.fetch("entertainmentHome").then(e=>this.movieCollections=e).then(e=>this.spotlightCollection=e.getSpotlightCollection()),this.moviesCollectionGroup=r.fromListOfCollections(t.MoviesCollectionGroup),this.topRentedMovies.take=5,this.disneyMovies.take=3,this.disneyMovies.subtitle=s.get("MoviesPage.DisneyMembership"),this.familyMovies.take=3,this.familyMovies.subtitle=s.get("MoviesPage.FamilyMovies"),this.familyMovies.titleOverride=s.get("Search.Filter.Family"),this.actionAdventureMovies.take=3,this.actionAdventureMovies.subtitle=s.get("MoviesPage.ActionAdventureMovies"),this.actionAdventureMovies.titleOverride=s.get("Search.Filter.ActionAdventure"),this.horrorMovies.take=3,this.horrorMovies.subtitle=s.get("MoviesPage.HorrorMovies"),this.horrorMovies.titleOverride=s.get("Search.Filter.Horror")}render(){const e=g();return o`
            <lazy-load 
                class="spotlight-shimmer" 
                .renderer="${()=>this.renderSpotlight()}" 
                .importer="${()=>this.importSpotlight()}" 
                when="immediate" 
                ${M(e)}>
            </lazy-load>
            <div class="product-collections-wrap">
                <lazy-load 
                    class="tall-collection-shimmer ${this.movieCollections?.getHiddenClass(this.newMovies.collectionName)}" 
                    .renderer="${()=>this.renderNewMovies()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    .when="${e}">
                </lazy-load>
                <lazy-load 
                    class="collection-reel-shimmer ${this.movieCollections?.getHiddenClass(this.collectionReelCollections.map(i=>i.collectionName))}" 
                    .renderer="${()=>this.renderCollectionReelGroup()}" 
                    .importer="${()=>this.importCollectionReelGroup()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="trending-sxs-collection-shimmer ${this.movieCollections?.getHiddenClass([this.topMovies.collectionName,this.topTvShows.collectionName])}" 
                    .renderer="${()=>this.renderTopMoviesAndTV()}" 
                    .importer="${()=>this.loadTrendingCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="square-collection-shimmer ${this.movieCollections?.getHiddenClass(this.bestVideoStreamingApps.collectionName)}" 
                    .renderer="${()=>this.renderBestVideoStreamingApps()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="tall-collection-shimmer ${this.movieCollections?.getHiddenClass(this.featuredMovies.collectionName)}" 
                    .renderer="${()=>this.renderFeaturedMovies()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="wide-collection-shimmer ${this.movieCollections?.getHiddenClass(this.newTvShows.collectionName)}" 
                    .renderer="${()=>this.renderBingeTvShows()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="ranked-collection-shimmer ${this.movieCollections?.getHiddenClass(this.topRentedMovies.collectionName)}" 
                    .renderer="${()=>this.renderTopRentedMovies()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="offer-collection-shimmer ${this.movieCollections?.getHiddenClass(this.specialOffers.collectionName)}"
                    .renderer="${()=>this.renderSpecialOffers()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="tall-tile-bg-collection-shimmer ${this.movieCollections?.getHiddenClass(this.marvelMovies.collectionName)}" 
                    .renderer="${()=>this.renderEverythingMarvel()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="collection-group-shimmer ${this.movieCollections?.getHiddenClass(this.moviesCollectionGroup.collectionName)}" 
                    .renderer="${()=>this.renderCollectionGroup()}" 
                    .importer="${()=>this.loadCollectionGroup()}" 
                    when="visible">
                </lazy-load>
            </div>
        `}importSpotlight(){const e=n(()=>import("./spotlight-control-2fe737d1.js"),["assets/js/spotlight-control-2fe737d1.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-0dadc8c6.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js","assets/js/style-map-14544ca7.js"]);return Promise.all([this.marketCollectionsFetch,e])}importProductCollection(){const e=n(()=>import("./product-collection-ec619889.js").then(i=>i.p),["assets/js/product-collection-ec619889.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-0dadc8c6.js","assets/js/style-map-14544ca7.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-eecd89ff.js","assets/js/auto-complete-app-search-88360129.js"]);return Promise.all([this.marketCollectionsFetch,e])}importCollectionReelGroup(){const e=n(()=>import("./collection-reel-group-17cf7762.js"),["assets/js/collection-reel-group-17cf7762.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-0dadc8c6.js","assets/js/product-collection-ec619889.js","assets/js/style-map-14544ca7.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-eecd89ff.js","assets/js/auto-complete-app-search-88360129.js","assets/js/chunk.SKOOBYPV-793496d5.js","assets/js/chunk.KRRLOROJ-71726c0b.js"]),i=n(()=>import("./product-collection-ec619889.js").then(l=>l.p),["assets/js/product-collection-ec619889.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-0dadc8c6.js","assets/js/style-map-14544ca7.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-eecd89ff.js","assets/js/auto-complete-app-search-88360129.js"]);return Promise.all([this.marketCollectionsFetch,e,i])}loadTrendingCollection(){const e=n(()=>import("./trending-collection-b9f2dc18.js"),["assets/js/trending-collection-b9f2dc18.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/auto-complete-app-search-88360129.js","assets/js/repeat-0dadc8c6.js","assets/js/style-map-14544ca7.js","assets/js/nav-bar-eecd89ff.js","assets/js/product-collection-ec619889.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js"]);return Promise.allSettled([this.marketCollectionsFetch,e])}loadCollectionGroup(){const e=n(()=>import("./collection-group-28268adb.js"),["assets/js/collection-group-28268adb.js","assets/js/index-ea800fad.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-ec619889.js","assets/js/repeat-0dadc8c6.js","assets/js/style-map-14544ca7.js","assets/js/css-function-af4ff51c.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-eecd89ff.js","assets/js/auto-complete-app-search-88360129.js"]);return Promise.all([this.marketCollectionsFetch,e])}renderSpotlight(){return!this.spotlightCollection||!this.movieCollections?.permits(this.spotlightCollection)?o``:o`
            <product-spotlight-control collection-name="${this.spotlightCollection}" 
                                       telemetry-area-id="SpotlightMovies"
                                       telemetry-data='{ "areaSlot": 0, "type": "spotlight" }'>
            </product-spotlight-control>
        `}renderNewMovies(){return this.movieCollections?.permits(this.newMovies.collectionName)?o`
            <product-collection
                .products=${this.newMovies}
                card-appearance="tall"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                telemetry-area-id="NewReleasesMovies"
                telemetry-data='{ "collectionId": "${this.newMovies.collectionName}", "areaSlot": 1, "type": "collection" }'
                see-all-url="${this.newMovies.collectionLink||""}">
            </product-collection>
        `:o``}renderBestVideoStreamingApps(){return this.movieCollections?.permits(this.bestVideoStreamingApps.collectionName)?o`
            <product-collection
                .products=${this.bestVideoStreamingApps}
                card-appearance="square"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                see-all-url="${this.bestVideoStreamingApps.collectionLink||""}"
                telemetry-area-id="BestVideoStreamingApps"
                telemetry-data='{ "collectionId": "${this.bestVideoStreamingApps.collectionName}", "areaSlot": 4, "type": "collection" }'
                >
            </product-collection>
        `:o``}renderTopMoviesAndTV(){const e=this.movieCollections?.permits(this.topMovies.collectionName),i=this.movieCollections?.permits(this.topTvShows.collectionName);return!e||!i?o``:o`
            <div class="double-small-hero-row">
                <trending-collection .movies="${this.topMovies}" 
                                     class="double-row-hero" 
                                     category="movies" 
                                     component-size="small"
                                     telemetry-area-id="TrendingCollectionTopMovies"
                                     telemetry-data='{ "collectionId": "${this.topMovies.collectionName}", "areaSlot": 3, "type": "collection" }'
                                     >
                </trending-collection>
                <trending-collection .movies="${this.topTvShows}" 
                                     class="double-row-hero" 
                                     category="movies" 
                                     component-size="small"
                                     telemetry-area-id="TrendingCollectionTopTvShows"
                                     telemetry-data='{ "collectionId": "${this.topTvShows.collectionName}", "areaSlot": 3, "type": "collection" }'
                                     >
                </trending-collection>
            </div>
        `}renderFeaturedMovies(){return this.movieCollections?.permits(this.featuredMovies.collectionName)?o`
            <product-collection
                .products=${this.featuredMovies}
                card-appearance="tall"
                ?show-title="${!0}"
                wrap="nowrap"
                direction="row"
                telemetry-area-id="FeaturedMovies"
                telemetry-data='{ "collectionId": "${this.featuredMovies.collectionName}", "areaSlot": 5, "type": "collection" }'
                see-all-url="${this.featuredMovies.collectionLink||""}">
            </product-collection>
        `:o``}renderTopRentedMovies(){return this.movieCollections?.permits(this.topRentedMovies.collectionName)?o`
            <product-collection 
                .products=${this.topRentedMovies} 
                card-appearance="ranked" 
                ?show-title="${!0}" 
                wrap="nowrap" 
                direction="row" 
                see-all-url="${this.topRentedMovies.collectionLink||""}" 
                telemetry-area-id="TopRentedMovies"
                telemetry-data='{ "collectionId": "${this.topRentedMovies.collectionName}", "areaSlot": 7, "type": "collection" }'
                >
            </product-collection>
        `:o``}renderSpecialOffers(){return this.movieCollections?.permits(this.specialOffers.collectionName)?o`
            <product-collection
                .products=${this.specialOffers}
                card-appearance="offer"
                direction="row"
                ?show-title="${!0}"
                wrap="nowrap"
                telemetry-area-id="SpecialOffersMovies"
                telemetry-data='{ "collectionId": "${this.specialOffers.collectionName}", "areaSlot": 8, "type": "collection" }'
                title-override="${s.get("Common.SpecialOffers")}"
                see-all-url="${this.specialOffers.collectionLink||""}"
                infinite-scroll="horizontal">
            </product-collection>
        `:o``}renderBingeTvShows(){return this.movieCollections?.permits(this.newTvShows.collectionName)?o`
            <product-collection 
                class="wide-column-collection" 
                .products=${this.newTvShows} 
                card-appearance="wide" 
                ?show-title="${!0}" 
                see-all-url="${this.newTvShows.collectionLink||""}" 
                direction="column" 
                telemetry-area-id="NewTvShows"
                telemetry-data='{ "collectionId": "${this.newTvShows.collectionName}", "areaSlot": 6, "type": "collection" }'
                >
            </product-collection>
        `:o``}renderEverythingMarvel(){return this.movieCollections?.permits(this.marvelMovies.collectionName)?o`
            <product-collection 
                .products=${this.marvelMovies} 
                card-appearance="tall" 
                wrap="nowrap" 
                ?show-title="${!0}" 
                ?has-bg="${!0}" 
                direction="row" 
                see-all-url="${this.marvelMovies.collectionLink||""}" 
                telemetry-area-id="MarvelMovies"
                telemetry-data='{ "collectionId": "${this.marvelMovies.collectionName}", "areaSlot": 9, "type": "collection" }'
                >
            </product-collection>
        `:o``}renderCollectionReelGroup(){const e=this.collectionReelCollections.filter(l=>!!l&&this.movieCollections?.permits(l.collectionName)).map(l=>l);if(!e||e.length===0)return o``;if(e.length===1&&e[0])return this.disneyMovies.take=5,o`
                <product-collection .products=${e[0]} 
                                    card-appearance="tall" 
                                    ?has-bg="${!0}" 
                                    ?show-title="${!0}"
                                    wrap="nowrap" 
                                    direction="row" 
                                    see-all-url=${e[0].collectionLink||""}
                                    telemetry-area-id="CollectionReelGroup"
                                    telemetry-data='{ "collectionIds": ${JSON.stringify(e.map(l=>l.collectionName))}, "areaSlot": 2, "type": "collection" }'
                                    >
                </product-collection>
            `;const i=JSON.stringify(e.map(l=>l.collectionName));return o`
            <collection-reel-group page="movies" 
                             media-type="movies" 
                             .collections="${e}"
                             telemetry-area-id="CollectionReelGroup"
                             telemetry-data='{ "collectionIds": ${i}, "areaSlot": 2, "type": "collection" }'
                             >
            </collection-reel-group>
        `}renderCollectionGroup(){return this.movieCollections?.permits(this.moviesCollectionGroup.collectionName)?o`
            <collection-group class="square-row-collection" 
                              .products=${this.moviesCollectionGroup} 
                              ?show-title="${!0}" 
                              wrap="nowrap" 
                              direction="row" 
                              see-all-url="collections/browse/${t.MoviesCollectionGroup}" 
                              telemetry-area-id="MoviesCollectionGroup"
                              telemetry-data='{ "collectionId": "${this.moviesCollectionGroup.collectionName}", "areaSlot": 10, "type": "collection-group" }'
                              >
            </collection-group>
        `:o``}};d.styles=[w,f,S];h([y()],d.prototype,"movieCollections",2);d=h([C("movies-page")],d);export{d as MoviesPage};
