import{i as C,s as $,C as o,M as a,l as n,x as t,c as g,_ as s,S as u,a as w,r as y,e as P,t as T}from"./index-aa05d19d.js";import{P as i}from"./paged-list-5dbf62ed.js";import{m as f,s as N}from"./market-collection-service-a80a5752.js";const z=C`
`;var _=Object.defineProperty,S=Object.getOwnPropertyDescriptor,G=(e,l,d,c)=>{for(var r=c>1?void 0:c?S(l,d):l,p=e.length-1,h;p>=0;p--)(h=e[p])&&(r=(c?h(l,d,r):h(r))||r);return c&&r&&_(l,d,r),r};let m=class extends ${constructor(){super(),this.gamingCollections=null,this.topGrossingGames=i.fromComputedProducts(o.TopGrossing,a.Games),this.newAndNotableGames=i.fromMerchandiserProducts(o.NewAndNotableGames),this.trendingGames=i.fromComputedProducts(o.NewAndRising,a.Games),this.topPaidGames=i.fromComputedProducts(o.TopPaid,a.Games),this.puzzleGames=i.fromMerchandiserProducts(o.PuzzleGames),this.racingGames=i.fromMerchandiserProducts(o.RacingGames),this.classicPcGames=i.fromMerchandiserProducts(o.ClassicGames),this.gamingDeals=i.fromComputedProducts(o.TopDeals,a.Games),this.appsForGamers=i.fromMerchandiserProducts(o.AppsForGamers),this.worldBuildingGames=i.fromMerchandiserProducts(o.WorldBuildingPCGames),this.topFreeGames=i.fromComputedProducts(o.TopFree,a.Games),this.gamesForKids=i.fromMerchandiserProducts(o.GamesForKids),this.corePCGames=i.fromMerchandiserProducts(o.CorePCGames),this.tallTileCollections=[this.classicPcGames,this.corePCGames,this.appsForGamers,this.gamesForKids],this.marketCollectionsFetch=f.fetch("gamingHome").then(e=>this.gamingCollections=e),this.gamingCollectionGroup=i.fromListOfCollections(o.GamingCollectionGroup),this.classicPcGames.subtitle=n.get("GamesPage.ClassicGames"),this.corePCGames.subtitle=n.get("GamesPage.PCGames"),this.appsForGamers.subtitle=n.get("GamesPage.GamerApps"),this.gamesForKids.subtitle=n.get("GamesPage.GamesForKids")}render(){const e=P();return t`
            <lazy-load 
                class="spotlight-shimmer" 
                .renderer="${()=>this.renderSpotlight()}" 
                .importer="${()=>this.importSpotlight()}" 
                when="immediate" ${g(e)}>
            </lazy-load>
            <div class="product-collections-wrap">
                <lazy-load 
                    class="wide-collection-shimmer ${this.gamingCollections?.getHiddenClass(this.newAndNotableGames.collectionName)}" 
                    .renderer="${()=>this.renderNewAndNotableGames()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    .when="${g(e)}">
                </lazy-load>
                <lazy-load class="tall-collection-shimmer ${this.gamingCollections?.getHiddenClass(this.topGrossingGames.collectionName)}" 
                    .renderer="${()=>this.renderTopGrossingGames()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="offer-card-collection-shimmer ${this.gamingCollections?.getHiddenClass(this.gamingDeals.collectionName)}" 
                    .renderer="${()=>this.renderSpecialOffers()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="trending-sxs-collection-shimmer ${this.gamingCollections?.getHiddenClass([this.trendingGames.collectionName,this.topFreeGames.collectionName])}" 
                    .renderer="${()=>this.renderTopFreeAndTrending()}" 
                    .importer="${()=>this.importTrendingCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="tall-tile-collection-shimmer ${this.gamingCollections?.getHiddenClass(this.tallTileCollections.map(l=>l.collectionName))})}" 
                    .renderer="${()=>this.renderTallTileGroup()}" 
                    .importer="${()=>this.importTallTileGroup()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="tall-collection-shimmer ${this.gamingCollections?.getHiddenClass(this.puzzleGames.collectionName)}" 
                    .renderer="${()=>this.renderPuzzleGames()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load class="wide-collection-shimmer ${this.gamingCollections?.getHiddenClass(this.worldBuildingGames.collectionName)}" 
                    .renderer="${()=>this.renderWorldBuildingGames()}" 
                    .importer="${()=>this.importProductCollection()}"
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="tall-collection-shimmer ${this.gamingCollections?.getHiddenClass(this.topPaidGames.collectionName)}" 
                    .renderer="${()=>this.renderTopPaidGames()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="ranked-collection-shimmer ${this.gamingCollections?.getHiddenClass(this.racingGames.collectionName)}" 
                    .renderer="${()=>this.renderRacingGames()}" 
                    .importer="${()=>this.importProductCollection()}" 
                    when="visible">
                </lazy-load>
                <lazy-load 
                    class="collection-group-shimmer ${this.gamingCollections?.getHiddenClass(this.puzzleGames.collectionName)}" 
                    .renderer="${()=>this.renderCollectionGroup()}" 
                    .importer="${()=>this.importCollectionGroup()}" 
                    when="visible">
                </lazy-load>
            </div>
        `}importTrendingGames(){const e=s(()=>import("./trending-collection-f01c1eb2.js"),["assets/js/trending-collection-f01c1eb2.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/nav-bar-cd5e889c.js","assets/js/product-collection-91cc6b51.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js"]);return Promise.allSettled([e,this.marketCollectionsFetch])}importProductCollection(){const e=s(()=>import("./product-collection-91cc6b51.js").then(l=>l.p),["assets/js/product-collection-91cc6b51.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js"]);return Promise.allSettled([e,this.marketCollectionsFetch])}importTrendingCollection(){const e=s(()=>import("./trending-collection-f01c1eb2.js"),["assets/js/trending-collection-f01c1eb2.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/nav-bar-cd5e889c.js","assets/js/product-collection-91cc6b51.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js"]);return Promise.allSettled([e,this.marketCollectionsFetch])}importTallTileGroup(){const e=s(()=>import("./tall-tile-group-5cb5b1eb.js"),["assets/js/tall-tile-group-5cb5b1eb.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/css-function-2ba732a7.js","assets/js/product-collection-91cc6b51.js","assets/js/style-map-a428b004.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js","assets/js/chunk.SKOOBYPV-dc2f449b.js","assets/js/chunk.KRRLOROJ-faa56958.js"]);return Promise.allSettled([e,this.marketCollectionsFetch])}importCollectionGroup(){const e=s(()=>import("./collection-group-f391d218.js"),["assets/js/collection-group-f391d218.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/product-collection-91cc6b51.js","assets/js/repeat-1a78a8d2.js","assets/js/style-map-a428b004.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/nav-bar-cd5e889c.js","assets/js/auto-complete-app-search-dfdb1cc6.js"]);return Promise.allSettled([e,this.marketCollectionsFetch])}importSpotlight(){const e=s(()=>import("./spotlight-control-f9d33d25.js"),["assets/js/spotlight-control-f9d33d25.js","assets/js/index-aa05d19d.js","assets/js/index-b5fbfb8f.css","assets/js/repeat-1a78a8d2.js","assets/js/css-function-2ba732a7.js","assets/js/image-helper-99359f42.js","assets/js/style-map-a428b004.js"]);return Promise.allSettled([e,this.marketCollectionsFetch])}renderSpotlight(){return this.gamingCollections?.permits(u.Gaming)?t`
            <product-spotlight-control collection-name="${u.Gaming}" 
                                       telemetry-area-id="SpotlightGaming"
                                       telemetry-data='{ "areaSlot": 0, "type": "spotlight" }'>
            </product-spotlight-control>
        `:t``}renderTopGrossingGames(){return this.gamingCollections?.permits(this.topGrossingGames.collectionName)?t`
            <product-collection .products=${this.topGrossingGames} card-appearance="tall" 
                                ?show-title=${!0} wrap="nowrap" direction="row" 
                                see-all-url=${this.topGrossingGames.collectionLink||""} 
                                telemetry-area-id="TopGrossingGames"
                                telemetry-data='{ "collectionId": "${this.topGrossingGames.collectionName}", "areaSlot": 2, "type": "collection" }'>
            </product-collection>
        `:t``}renderSpecialOffers(){return this.gamingCollections?.permits(this.gamingDeals.collectionName)?t`
            <product-collection
                .products=${this.gamingDeals}
                card-appearance="offer"
                direction="row"
                ?show-title=${!0}
                wrap="nowrap"
                telemetry-area-id="SpecialOffersGames"
                telemetry-data='{ "collectionId": "${this.gamingDeals.collectionName}", "areaSlot": 3, "type": "collection" }'
                title-override="${n.get("Common.SpecialOffers")}"
                see-all-url="${this.gamingDeals.collectionLink||""}"
                infinite-scroll="horizontal">
            </product-collection>
        `:t``}renderNewAndNotableGames(){return this.gamingCollections?.permits(this.newAndNotableGames.collectionName)?t`
            <product-collection .products=${this.newAndNotableGames} 
                                card-appearance="tall" 
                                ?show-title=${!0} 
                                wrap="nowrap" 
                                direction="row" 
                                see-all-url="${this.newAndNotableGames.collectionLink||""}" 
                                telemetry-area-id="NewAndNotableGames"
                                telemetry-data='{ "collectionId": "${this.newAndNotableGames.collectionName}", "areaSlot": 1, "type": "collection" }'>
            </product-collection>
        `:t``}renderTopFreeAndTrending(){const e=this.gamingCollections?.permits(this.topFreeGames.collectionName),l=this.gamingCollections?.permits(this.trendingGames.collectionName);return!e||!l?t``:t`
            <div class="double-small-hero-row">
                <trending-collection .games="${this.trendingGames}" 
                                     class="double-row-hero" 
                                     category="games" 
                                     component-size="small"
                                     telemetry-area-id="TrendingCollectionTrendingGames"
                                     telemetry-data='{ "collectionId": "${this.trendingGames.collectionName}", "areaSlot": 4, "type": "collection" }'>
                </trending-collection>
                <trending-collection .games="${this.topFreeGames}" 
                                     class="double-row-hero" 
                                     category="games" 
                                     component-size="small"
                                     telemetry-area-id="TrendingCollectionTopFreeGames"
                                     telemetry-data='{ "collectionId": "${this.topFreeGames.collectionName}", "areaSlot": 4, "type": "collection" }'>
                </trending-collection>
            </div>
        `}renderPuzzleGames(){return this.gamingCollections?.permits(this.puzzleGames.collectionName)?t`
            <product-collection .products=${this.puzzleGames} 
                                card-appearance="tall" 
                                ?show-title=${!0} 
                                wrap="nowrap" 
                                direction="row" 
                                see-all-url="/collections/MerchandiserContent/Games/GamesCollectionBG/GamesCollectionBG01"
                                telemetry-area-id="PuzzleGames"
                                telemetry-data='{ "collectionId": "${this.puzzleGames.collectionName}", "areaSlot": 6, "type": "collection" }'>
            </product-collection>
        `:t``}renderTallTileGroup(){if(!this.tallTileCollections.every(l=>this.gamingCollections?.permits(l.collectionName)))return t``;if(this.tallTileCollections.length===1)return t`
                <product-collection .products=${this.tallTileCollections[0]} 
                                    card-appearance="tall" 
                                    ?has-bg=${!0} ?show-title=${!0} wrap="nowrap" 
                                    direction="row" 
                                    see-all-url=${this.tallTileCollections[0].collectionLink||""} 
                                    telemetry-area-id="TallGaming"
                                    telemetry-data='{ "collectionId": "${this.tallTileCollections[0].collectionName}", "areaSlot": 5, "type": "collection" }'>
                </product-collection>
            `;const e=JSON.stringify(this.tallTileCollections.map(l=>l.collectionName));return t`
            <tall-tile-group .collections="${this.tallTileCollections}" 
                             ?show-title="${!1}" 
                             wrap="nowrap"
                             direction="row"
                             telemetry-area-id="TallGaming"
                             telemetry-data='{ "collectionId": ${e}, "areaSlot": 5, "type": "collection" }'>
            </tall-tile-group>
        `}renderWorldBuildingGames(){return this.gamingCollections?.permits(this.worldBuildingGames.collectionName)?t`
            <product-collection class="wide-column-collection" 
                                .products=${this.worldBuildingGames} 
                                card-appearance="wide" 
                                ?show-title=${!0} 
                                see-all-url=${this.worldBuildingGames.collectionLink||""} 
                                direction="column" 
                                telemetry-area-id="WorldBuildingGames"
                                telemetry-data='{ "collectionId": "${this.worldBuildingGames.collectionName}", "areaSlot": 7, "type": "collection" }'>
            </product-collection>
        `:t``}renderTopPaidGames(){return this.gamingCollections?.permits(this.topPaidGames.collectionName)?t`
            <product-collection .products=${this.topPaidGames} 
                                card-appearance="tall" 
                                ?show-title=${!0} 
                                wrap="nowrap" 
                                direction="row" 
                                see-all-url="/collections/computed/games/${o.TopPaid}" 
                                telemetry-area-id="TopPaidGames"
                                telemetry-data='{ "collectionId": "${this.topPaidGames.collectionName}", "areaSlot": 8, "type": "collection" }'>
            </product-collection>
        `:t``}renderRacingGames(){return this.gamingCollections?.permits(this.racingGames.collectionName)?t`
            <product-collection .products=${this.racingGames} 
                                card-appearance="ranked" 
                                ?show-title=${!0}
                                wrap="nowrap" 
                                direction="row" 
                                see-all-url="/collections/MerchandiserContent/Games/Primary/RacingGames/_RacingGames" 
                                telemetry-area-id="RacingGames"
                                telemetry-data='{ "collectionId": "${this.racingGames.collectionName}", "areaSlot": 9, "type": "collection" }'>
            </product-collection>
        `:t``}renderCollectionGroup(){return t`
            <collection-group class="square-row-collection" 
                              .products=${this.gamingCollectionGroup} 
                              ?show-title=${!0}
                              wrap="nowrap" 
                              direction="row" 
                              see-all-url="collections/browse/${o.GamingCollectionGroup}" 
                              telemetry-area-id="GamingCollectionGroup"
                              telemetry-data='{ "collectionId": "${o.GamingCollectionGroup}", "type": "collection-group"}'>
            </collection-group>
        `}};m.styles=[w,N,z];G([y()],m.prototype,"gamingCollections",2);m=G([T("gaming-page")],m);export{m as GamingPage};
