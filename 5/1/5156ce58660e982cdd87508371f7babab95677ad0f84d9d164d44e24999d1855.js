"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9202],{39202:function(e,t,r){r.r(t),r.d(t,{default:);var n=r(6952),a=r(96772),u=r(87988),s=r(1717),i=r(88742),p=r.n(i),c=function(){eturn(0,u.Z)(e,[{key:"getPageHomePage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/page/home",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPageIndexPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/page",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPageInfo",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/page/info",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchPage",value:function(){var e=(0,n.Z)(p().mark((function e(t){var r,n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={mode:t.searchMode,page:t.page||1,records:t.records||20,filterTypeId:null===(r=t.filter)||void 0===r?void 0:r.typeId,sort:t.sort},e.next=3,this.httpApiClient.get("/v1/pages/page/search",n);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return ()}]),e}()}}]);