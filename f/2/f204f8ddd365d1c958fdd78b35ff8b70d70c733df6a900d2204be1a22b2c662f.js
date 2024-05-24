"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8915],{58915:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}});var n=r(6952),a=r(96772),s=r(87988),u=r(1717),c=r(88742),i=r.n(c),o=r(28935),p=r(67378),h=r(20155),f=r(54548),E=function(){eturn(0,s.Z)(e,[{key:"getGameDailyStreakPage",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/game/daily-streak",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGameDailyStreak",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/game/daily-streak/details",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGameTrumpPlayers",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={date:t.date,code:t.code,filterSeriesId:t.filter.seriesId,filterClassId:t.filter.classId},e.next=3,this.httpApiClient.get("/v1/pages/game/trump-players/details",r);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGameTrumpPlayersPage",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/game/trump-players",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGamePWHomePage",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/game/playwatch/home",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"generateGamePWOTP",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.post("/v1/game/auth/signinup/code",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"resendGamePWOTP",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.post("/v1/game/auth/signinup/code/resend",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"consumeGamePWOTP",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.postResponse("/v1/game/auth/signinup/code/consume",t);case 2:return r=e.sent,(n=r.json).status===o.w6.OK&&(a={accessToken:r.headers["st-access-token"],refreshToken:r.headers["st-refresh-token"]},this.gameAuthTokenManager.setToken(a,!1)),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshGamePWUserSession",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,s,u,c,o,E;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},n=this.gameAuthTokenManager.getToken(),a=this.gameAuthTokenManager.isGuestUser(),!n){e.next=28;break}return r.Authorization="Bearer ".concat(n.refreshToken),e.prev=5,e.next=8,this.httpApiClient.postResponse("/v1/game/auth/session/refresh",t,r);case 8:if(s=e.sent,u=s.json,c=s.headers["st-access-token"],o=s.headers["st-refresh-token"],!c||!o){e.next=17;break}E={accessToken:c,refreshToken:o},this.gameAuthTokenManager.setToken(E,a),e.next=19;break;case 17:throw this.gameAuthTokenManager.deleteToken(),new h.w_(p.P.UNAUTHORIZED,"user unauthorized",f.Gt.UI_USER_UNAUTHORIZED);case 19:return e.abrupt("return",u);case 22:throw e.prev=22,e.t0=e.catch(5),this.gameAuthTokenManager.deleteToken(),new h.w_(p.P.UNAUTHORIZED,"user unauthorized",f.Gt.UI_USER_UNAUTHORIZED);case 26:e.next=30;break;case 28:throw this.gameAuthTokenManager.deleteToken(),new h.w_(p.P.UNAUTHORIZED,"user unauthorized",f.Gt.UI_USER_UNAUTHORIZED);case 30:case"end":return e.stop()}}),e,this,[[5,22]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getGameOTP",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.get("/v1/pages/game/playwatch/otp",t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGameGuestUser",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.httpApiClient.getResponse("/v1/game/auth/guest",t);case 2:return r=e.sent,(n=r.json).success&&(a={accessToken:r.headers["st-access-token"],refreshToken:r.headers["st-refresh-token"]},this.gameAuthTokenManager.setToken(a,!0)),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"executeWithAccessToken",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,s,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!(n=this.gameAuthTokenManager.getToken())){e.next=38;break}return r.Authorization="Bearer ".concat(n.accessToken),e.prev=4,e.next=7,t(r);case 7:return a=e.sent,e.abrupt("return",a);case 11:if(e.prev=11,e.t0=e.catch(4),!h.w_.isSWCoreAppError(e.t0)){e.next=35;break}if(e.t0.category!==p.P.UNAUTHORIZED){e.next=32;break}return e.prev=16,e.next=19,this.refreshGamePWUserSession({});case 19:return s=this.gameAuthTokenManager.getToken(),r.Authorization="Bearer ".concat(null===s||void 0===s?void 0:s.accessToken),e.next=23,t(r);case 23:return u=e.sent,e.abrupt("return",u);case 27:throw e.prev=27,e.t1=e.catch(16),e.t1;case 30:e.next=33;break;case 32:throw e.t0;case 33:e.next=36;break;case 35:throw e.t0;case 36:e.next=39;break;case 38:throw new h.w_(p.P.UNAUTHORIZED,"user unauthorized",f.Gt.UI_USER_UNAUTHORIZED);case 39:case"end":return e.stop()}}),e,this,[[4,11],[16,27]])})));return function(t){return e.apply(this,arguments)}}()},{key:"signoutGamePWUser",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.post("/v1/game/auth/signout",t,n);case 2:return(a=e.sent).status===o.w6.OK&&r.gameAuthTokenManager.deleteToken(),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isGamePWUserExist",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.get("/v1/pages/game/playwatch/user/exist",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"isGamePWUserNameExist",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.get("/v1/pages/game/playwatch/username/exist",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"registerGamePWUser",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.post("/v1/pages/game/playwatch/user/register",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"transferGamePWGuestSession",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.gameAuthTokenManager.deleteGuestUser(),e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.post("/v1/pages/game/playwatch/session/transfer",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGamePWUser",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.get("/v1/pages/game/playwatch/user",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGamePWUserDetails",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.get("/v1/pages/game/playwatch/user/details",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"startGamePWUserSession",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.post("/v1/pages/game/playwatch/session/start",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"submitGamePWUserSessionResponse",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.post("/v1/pages/game/playwatch/session/response",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGamePWUserSessionDetails",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.get("/v1/pages/game/playwatch/session/details",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"endGamePWUserSession",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.post("/v1/pages/game/playwatch/session/end",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"terminateGamePWUserSession",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.post("/v1/pages/game/playwatch/session/terminate",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGamePWDailyLeaderboardDates",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.get("/v1/pages/game/playwatch/leaderboard/daily-dates",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getGamePWUserSeriesScorecard",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(n){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.httpApiClient.get("/v1/pages/game/playwatch/scorecard/series",t,n);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchGamePWLeaderboardUserScorecard",value:function(){var e=(0,n.Z)(i().mark((function e(t){var r,a,s,u,c=this;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u={page:t.page||1,records:t.records||20,selectFormatTopScorers:t.select?t.select.formatTopScorers:null,filterSeriesId:null===(r=t.filter)||void 0===r?void 0:r.seriesId,filterType:null===(a=t.filter)||void 0===a?void 0:a.type,filterDailyDate:null===(s=t.filter)||void 0===s?void 0:s.dailyDate,sort:t.sort},e.abrupt("return",this.executeWithAccessToken(function(){var e=(0,n.Z)(i().mark((function e(t){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.httpApiClient.get("/v1/pages/game/playwatch/leaderboard/scorecard",u,t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:case"end":return e.stop()}}),e,this)})));return ()}]),e}()},28935:function(e,t,r){var n,a,s,u,c,i,o,p,h,f,E,T,A,_,l,I,v,R,S,O;r.d(t,{aJ:function(){return a},w6:function(){return u},Xg:function(){return i},Gf:function(){return o},u7:function(){return p},$X:function(){return h},Tg:function(){return f},CO:function(){return E},DD:function(){return T},bO:function(){return A},xI:function(){return _},Q5:function(){return l},dZ:function(){return I}}),function(e){e.SMALL="SMALL",e.LARGE="LARGE"}(n||(n={})),function(e){e.LIVE="LIVE",e.STATIC="STATIC"}(a||(a={})),function(e){e.FORECASTED_SCORE="FORECASTED_SCORE",e.WIN_PROBABILITY="WIN_PROBABILITY"}(s||(s={})),function(e){e.OK="OK",e.GENERAL_ERROR="GENERAL_ERROR",e.RESTART_FLOW_ERROR="RESTART_FLOW_ERROR",e.INCORRECT_USER_INPUT_CODE_ERROR="INCORRECT_USER_INPUT_CODE_ERROR",e.EXPIRED_USER_INPUT_CODE_ERROR="EXPIRED_USER_INPUT_CODE_ERROR"}(u||(u={})),function(e){e.MAGIC_LINK="MAGIC_LINK",e.USER_INPUT_CODE_AND_MAGIC_LINK="USER_INPUT_CODE_AND_MAGIC_LINK",e.USER_INPUT_CODE="USER_INPUT_CODE"}(c||(c={})),function(e){e.DAILY="DAILY",e.TOURNAMENT="TOURNAMENT"}(i||(i={})),o||(o={})),function(e){e.TWELVE_BALL="TWELVE_BALL",e.TWENTY_FOUR_BALL="TWENTY_FOUR_BALL"}(p||(p={})),function(e){e.EASY="EASY",e.MEDIUM="MEDIUM",e.DIFFICULT="DIFFICULT"}(h||(h={})),function(e){e.BALL_WAGON="BALL_WAGON",e.QUESTION_GK="QUESTION_GK"}(f||(f={})),function(e){e.NO_WICKET="NO_WICKET",e.STREAK_3="STREAK_3",e.STREAK_5="STREAK_5",e.TOTAL_30="TOTAL_30",e.TOTAL_5O="TOTAL_50",e.TOTAL_75="TOTAL_75",e.TOTAL_100="TOTAL_100",e.TOTAL_150="TOTAL_150"}(E||(E={})),function(e){e.ACTIVE="ACTIVE",e.COMPLETED="COMPLETED",e.PROCESSED="PROCESSED",e.TERMINATED="TERMINATED"}(T||(T={})),function(e){e.MULTIPLE_ACTIVE_SESSIONS="MULTIPLE_ACTIVE_SESSIONS",e.DEVICE_MISMATCH="DEVICE_MISMATCH"}(A||(A={})),function(e){e.SUBMITTED="SUBMITTED",e.ERROR="ERROR",e.SCORED="SCORED"}(_||(_={})),function(e){e.ANSWERED="ANSWERED",e.TECH_ISSUE="TECH_ISSUE"}(l||(l={})),function(e){e.OTP_NOT_SENT="GAMEPW_OTP_NOT_SENT",e.USER_ALREADY_REGISTERED="GAMEPW_USER_ALREADY_REGISTERED",e.BALL_ALREADY_ANSWERED="GAMEPW_BALL_ALREADY_ANSWERED",e.INVALID_COMMAND="GAMEPW_INVALID_COMMAND",e.UNEXPECTED_END="GAMEPW_UNEXPECTED_END",e.UNEXPECTED_TERMINATION="GAMEPW_UNEXPECTED_TERMINATION",e.INVALID_SESSION="GAMEPW_INVALID_SESSION",e.INVALID_API_KEY="GAMEPW_INVALID_API_KEY"}(I||(I={})),function(e){e.NONE="NONE",e.CATEGORIES_GROUP="CATEGORIES_GROUP"}(v||(v={})),function(e){e.PLAY_AREA="PLAY_AREA",e.SCORE_CELL="SCORE_CELL",e.LIVE_SCORECARD="LIVE_SCORECARD",e.COMMENTARY="COMMENTARY"}(R||(R={})),function(e){e.ROW="ROW",e.FLUID="FLUID"}(S||(S={})),O||(O={}))},54548:function(e,t,r){r.d(t,{L:function(){return T},TH:function(){return A},$n:function(){return i},SH:function(){return o},mM:function(){return p},JX:function(){return h},q9:function(){return R},qd:function(){return S},QG:function(){return O},aD:function(){return N},MQ:function(){return _},M:function(){return l},Gt:function(){return I},pk:function(){return v},t7:function(){return m},fm:);var n,a,s,u,c,i,o,p,h,f=r(1717),E=r(28935),T=2,A=3;!i||(i={})),function(e){e.LAUNCH="LAUNCH",e.PLAY="PLAY",e.RESULT="RESULT"}(o||(o={})),function(e){e.PHONE="PHONE",e.OTP="OTP",e.REGISTER="REGISTER"}(p||(p={})),h||(h={}));var _,l,I,v,R=(n={},(0,f.Z)(n,E.$X.EASY,[1,2]),(0,f.Z)(n,E.$X.MEDIUM,[1,2,3,4]),(0,f.Z)(n,E.$X.DIFFICULT,[1,2,3,4,5,6]),n),S=(a={},(0,f.Z)(a,E.u7.TWELVE_BALL,{balls:12,name:"12-ball",longName:"twelve ball",gameOver:"12 balls done"}),(0,f.Z)(a,E.u7.TWENTY_FOUR_BALL,{balls:24,name:"24-ball",longName:"twenty four ball",gameOver:"24 balls done"}),a),O=(s={},(0,f.Z)(s,E.Xg.DAILY,{name:"day",shortName:"daily",longName:"daily"}),(0,f.Z)(s,E.Xg.TOURNAMENT,{name:"tournament",shortName:"tour.",longName:"tournament"}),s),N=(u={},(0,f.Z)(u,E.CO.NO_WICKET,{title:"No wickets lost!"}),(0,f.Z)(u,E.CO.STREAK_3,{title:"3-ball streak"}),(0,f.Z)(u,E.CO.STREAK_5,{title:"5-ball streak"}),(0,f.Z)(u,E.CO.TOTAL_150,{title:"Score over 150!"}),(0,f.Z)(u,E.CO.TOTAL_100,{title:"Score over 100!"}),(0,f.Z)(u,E.CO.TOTAL_75,{title:"Score over 75!"}),(0,f.Z)(u,E.CO.TOTAL_5O,{title:"Score over 50!"}),(0,f.Z)(u,E.CO.TOTAL_30,{title:"Score over 30!"}),u);!_||(_={})),l||(l={})),I||(I={})),v||(v={}));var m=(c={},(0,f.Z)(c,v.NEW_BALL_COUNTDOWN_START,"/static/sounds/play-watch/when.mp3"),(0,f.Z)(c,v.MISSSED_BALL,"/static/sounds/play-watch/quiet-twitch.mp3"),(0,f.Z)(c,v.RIGHT_PREDICTION,"/static/sounds/play-watch/arpeggio.mp3"),(0,f.Z)(c,v.WRONG_PREDICTION,"/static/sounds/play-watch/unexpectedly-message-tone.mp3"),(0,f.Z)(c,v.EXTRA_BALL,"/static/sounds/play-watch/quiet-knock.mp3"),(0,f.Z)(c,v.TECH_GLITCH,"/static/sounds/play-watch/unexpected.mp3"),(0,f.Z)(c,v.WICKET,"/static/sounds/play-watch/fast-action.mp3"),(0,f.Z)(c,v.GAME_OVER,"/static/sounds/play-watch/here-i-am.mp3"),(0,f.Z)(c,v.RIGHT_MCQ,"/static/sounds/play-watch/graceful.mp3"),(0,f.Z)(c,v.WRONG_MCQ,"/static/sounds/play-watch/glitch-in-the-matrix.mp3"),(0,f.Z)(c,v.TOTAL_SCORE,"/static/sounds/play-watch/cause-and-effect.mp3"),(0,f.Z)(c,v.GAME_NOTIFICATIONS,"/static/sounds/play-watch/gentle-alarm.mp3"),c),L={CASH_LAKH_PINK:"/static/images/play-watch/cash-lakh.png",CASH_LAKH_YELLOW:"/static/images/play-watch/cash-lakh-yellow.png",ASIA_CUP:"/static/images/play-watch/asia-cup.png",ASIA_TICKET:"/static/images/play-watch/asia-ticket.png",CASH_DAILY:"/static/images/play-watch/cash-1000.png"}}}]);