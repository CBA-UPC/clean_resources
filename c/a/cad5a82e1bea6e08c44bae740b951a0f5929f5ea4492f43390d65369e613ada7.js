"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9569],{39569:function(e,t,r){r.r(t),r.d(t,{default:);var n=r(6952),a=r(96772),u=r(87988),s=r(1717),i=r(88742),p=r.n(i),c=function(){eturn(0,u.Z)(e,[{key:"getPlayerCompareIndexPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/compare/index",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerComparePage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/compare",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerInfo",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/info",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getBulkPlayerInfo",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/info/bulk",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchPlayer",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r,n,a,u,s,i,c,l,o,f,v,h;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v={mode:t.searchMode,page:t.page||1,records:t.records||20,filterDebut:null===(r=t.filter)||void 0===r?void 0:r.debut,filterActive:null===(n=t.filter)||void 0===n?void 0:n.active,filterTeamId:null===(a=t.filter)||void 0===a?void 0:a.teamId,filterAlpha:null===(u=t.filter)||void 0===u?void 0:u.alpha,filterClassId:null===(s=t.filter)||void 0===s?void 0:s.classId,filterPlayerRole:null===(i=t.filter)||void 0===i?void 0:i.playerRole,filterDeadYear:null===(c=t.filter)||void 0===c?void 0:c.deadYear,filterContracted:null===(l=t.filter)||void 0===l?void 0:l.contracted,filterFormatLevel:null===(o=t.filter)||void 0===o?void 0:o.formatLevel,selectDebut:null===(f=t.select)||void 0===f?void 0:f.debut,filterSearchText:t.filter.searchText,sort:t.sort},e.next=3,this.httpApiClient.get("/v1/pages/player/search",v);case 3:return h=e.sent,e.abrupt("return",h);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerCareerSummaryDetails",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/stats/summary",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerIndexPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerIndexDebutPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/debut",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerIndexDeadPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/dead",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerIndexEliteOfficialsPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/elite-officials",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerHomePage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/home",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerStatsPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/stats",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerRecordsPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/records",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerMatchesPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/matches",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerNewsPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/news",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerVideosPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/videos",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerImagesPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/images",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerCareerStats",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r,n,a,u;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.select,n=t.filter,a={lang:t.lang,playerId:t.playerId,selectRecentInfo:r.recentInfo,filterFormatType:n.formatType,filterTrophyId:n.trophyId,filterSeriesIds:n.seriesIds,filterSpanType:n.spanType},e.next=4,this.httpApiClient.get("/v1/pages/player/stats/career",a);case 4:return u=e.sent,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPlayerCompareStats",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r,n,a,u;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.select,n=t.filter,a={lang:t.lang,playerIds:t.playerIds,selectRecentInfo:r.recentInfo,filterFormatType:n.formatType,filterTrophyId:n.trophyId,filterSeriesIds:n.seriesIds,filterSeriesStageType:n.seriesStageType,filterSpanType:n.spanType},e.next=4,this.httpApiClient.get("/v1/pages/player/stats/compare",a);case 4:return u=e.sent,e.abrupt("return",u);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTeamRecentPlayers",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/player/recent",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return ()}]),e}()}}]);