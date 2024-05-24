define("alimama-minisite/view",["magix","./chartpark/index","./services/service","moment","accounting","./services/requester"],function(require,exports,module){"use strict";var __assign=this&&this.__assign||exports.__esModule=!0;var magix_1=require("magix"),index_1=require("./chartpark/index"),service_1=require("./services/service"),Moment=require("moment"),Accounting=require("accounting"),requester_1=require("./services/requester");$(document).on("navslidend",function(){index_1.default.resize()}),$(window).on("resize",;var ProductsInfoHash={9:{id:"1",unicode:"xe601",link:"https://ad.alimama.com/index.htm",name:"\u6DD8\u5B9D\u8054\u76DF<br>\u5546\u5BB6\u4E2D\u5FC3",logo:"https://img.alicdn.com/tfs/TB1O.D8PXT7gK0jSZFpXXaTkpXa-100-56.jpg"},27:{id:"2",unicode:"xe610",link:"http://ssp.tanx.com/ssp.html",name:"Tanx SSP",logo:"https://img.alicdn.com/tfs/TB10c0uQWL7gK0jSZFBXXXZZpXa-100-56.jpg"},28:{id:"3",unicode:"xe609",link:"http://mu.tanx.com/myunion/profile.htm",name:"Tanx\u79FB\u52A8<br>\u65E0\u7EBFSSP",logo:"https://img.alicdn.com/tfs/TB10c0uQWL7gK0jSZFBXXXZZpXa-100-56.jpg"},1:{id:"4",unicode:"xe605",link:"https://subway.simba.taobao.com/",name:"\u76F4\u901A\u8F66",logo:"https://img.alicdn.com/tfs/TB1xWMgPoT1gK0jSZFrXXcNCXXa-100-56.jpg"},2:{id:"5",unicode:"xe607",link:"https://zuanshi.taobao.com/indexbp.html",name:"\u8D85\u7EA7\u94BB\u5C55",logo:"https://img.alicdn.com/tfs/TB17jb9PoY1gK0jSZFCXXcwqXXa-100-56.jpg"},26:{id:"6",unicode:"xe60e",link:"https://pub.alimama.com/",name:"\u6DD8\u5B9D\u8054\u76DF<br>\u751F\u6001\u4F19\u4F34",logo:"https://img.alicdn.com/tfs/TB1O.D8PXT7gK0jSZFpXXaTkpXa-100-56.jpg"},7:{id:"8",unicode:"xe611",link:"https://dmp.taobao.com/",name:"\u8FBE\u6469\u76D8",logo:"https://img.alicdn.com/tfs/TB1yc8.cypE_u4jSZKbXXbCUVXa-100-56.jpg"},6:{id:"9",unicode:"xe603",link:"http://adx.tanx.com/dsp.html",name:"Tanx ADX",logo:"https://img.alicdn.com/tfs/TB10c0uQWL7gK0jSZFBXXXZZpXa-100-56.jpg"},10:{id:"12",unicode:"xe612",link:"http://majibao.alimama.com/myunion.htm",name:"\u9EBB\u5409\u5B9D"}};exports.default=magix_1.default.View.extend({getChartOptions:function(e){return $.extend(!0,{},index_1.default.getOptions(e))},isLogin:function(){var e=magix_1.default.config("alimama-minisite.user").biz;return!!e.user},"showLogin<click>":function(e){var i=magix_1.default.config("alimama-minisite.user").biz;this.mxLoginView({bizCode:i.bizCode})},isHybrid:function(){var e=magix_1.default.config("screenWidth")||768,i=$(window).width();return i<=e},getTagInfo:function(e){$.ajax({url:"https://www.alimama.com/getTagInfo.htm",dataType:"jsonp",success:function(i){if(i.result){var t=i.result.tagIDList,n=t.filter(function(a){return a in ProductsInfoHash&&ProductsInfoHash[a].logo}).map(function(a){var o=ProductsInfoHash[a],r=o.unicode,s=o.link,c=o.id,u=o.logo,l=o.name;return{unicode:r,link:s,id:c,name:l,logo:u||""}});magix_1.default.config({"alimama-minisite.bpAccessList":n})}},error:)},getLogInfo:function(opt){var that=this,successCallback=opt.successCallback,failureCallback=opt.failureCallback;successCallback=successCallback||function(){},failureCallback=failureCallback||$.ajax({url:"//www.alimama.com/getLogInfo.htm",dataType:"jsonp",success:function(data){data.result?data.result.nickName?(magix_1.default.config({"alimama-minisite.user":{biz:{bizCode:"alimamaMain",user:eval("'"+data.result.nickName+"'")}}}),that.getTagInfo(),successCallback(__assign(__assign({},data.result),{msg:"ok"}))):failureCallback({msg:"\u6CA1\u6709\u83B7\u53D6\u7528\u6237\u6635\u79F0\u4FE1\u606F"}):failureCallback({msg:"\u6CA1\u6709\u83B7\u53D6\u767B\u9646\u4FE1\u606F"})},error:)},"goLogout<click>":function(e){var i=window.location;i.href="//www.alimama.com/member/logout.htm?forward="+encodeURIComponent(i.href)}}).merge(service_1.default,{ctor:function(){this.updater.set({user:magix_1.default.config("alimama-minisite.user"),all:magix_1.default.config("alimama-minisite.all"),Moment,Accounting});var e=this;e.requester={};var i=function(n){requester_1.default.hasOwnProperty(n)&&(e.requester[n]=function(a,o){return requester_1.default[n](a,__assign(__assign({},o),{$view:e}))})};for(var t in requester_1.default)i(t)}})});

//# sourceMappingURL=https://sourcemap.def.alibaba-inc.com/sourcemap/mm/alimama-minisite/20231207.142919.787/alimama-minisite/view.js.map