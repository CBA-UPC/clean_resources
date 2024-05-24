"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7276],{67276:function(e,t,r){r.r(t),r.d(t,{default:);var n=r(6952),s=r(96772),a=r(87988),i=r(1717),u=r(88742),c=r.n(u),p=function(){eturn(0,a.Z)(e,[{key:"searchSeries",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,s,a,i,u,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={lang:t.lang,mode:t.searchMode,page:t.page,records:t.records,filterMatchClassIds:null===(r=t.filter)||void 0===r?void 0:r.matchClassIds,filterTrophyIds:null===(n=t.filter)||void 0===n?void 0:n.trophyIds,filterPlayerIds:null===(s=t.filter)||void 0===s?void 0:s.playerIds,filterComparePlayers:null===(a=t.filter)||void 0===a?void 0:a.comparePlayers,filterTeamIds:null===(i=t.filter)||void 0===i?void 0:i.teamIds,sort:t.sort},e.next=3,this.httpApiClient.get("/v1/pages/series/search",u);case 3:return p=e.sent,e.abrupt("return",p);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchTrophy",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,s,a,i,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={mode:t.searchMode,page:t.page,records:t.records,selectTrophySerieses:null===(r=t.select)||void 0===r?void 0:r.trophySerieses,filterMatchClassIds:null===(n=t.filter)||void 0===n?void 0:n.matchClassIds,filterPlayerIds:null===(s=t.filter)||void 0===s?void 0:s.playerIds,filterComparePlayers:null===(a=t.filter)||void 0===a?void 0:a.comparePlayers,sort:t.sort},e.next=3,this.httpApiClient.get("/v1/pages/series/trophy",i);case 3:return u=e.sent,e.abrupt("return",u);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getScribeSeriesInfo",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/scribe/info",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesInfo",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/info",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBulkSeriesInfo",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/info/bulk",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesFeed",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/feed",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesFixturesCalendar",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/fixtures-calendar",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesStandings",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/points",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesBoundaryInfo",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/boundary/info",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesHomePage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/home",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesSchedulePage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/schedule",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesSquadsPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/squads",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesSquadPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/squad/details",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesTeamsPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/teams",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesStandingsPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/standings",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesStatsPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/stats",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesVideosPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/videos",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesGalleriesPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/galleries",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesImagesPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/images",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesMostValuablePlayersPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/most-valuable-players",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesMostImpactfulBattersPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/most-impactful-batters",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSeriesMostImpactfulBowlersPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/most-impactful-bowlers",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getFeaturedSeriesPage",value:function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/series/featured",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return ()}]),e}()}}]);