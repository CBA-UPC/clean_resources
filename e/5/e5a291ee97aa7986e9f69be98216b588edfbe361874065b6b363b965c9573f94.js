(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{477:function(t,e,d){"use strict";d.r(e),function(r){d.d(e,"default",;var t=d(20),u=d.n(t),t=d(15),o=d.n(t),t=d(16),c=d.n(t),t=d(346),i=d.n(t),t=d(347),a=d.n(t),t=d(348),s=d.n(t),t=d(349),f=d(351);ar n=function(t){i()(e,t);var n=l(e);eturn c()(e,[{key:"onCreate",value:,{key:"renderStoriesBack",value:function(){var a=this;this.getDataInStorage().then(function(t){var n,e,r,o,c,i;t&&void 0!==t&&(n=(i=u()(t,7))[0],e=i[1],r=i[2],o=i[3],c=i[4],t=i[5],i=i[6],e===window.location.href&&(i={audience:{click:{refs:{titulo:{action:r}}}},storiesBack:{title:n,url:r,image:{src:o,width:c,height:t,alt:i}}},i="".concat(window.Config.servicename,"?loadComponent=stories-back&data=").concat(JSON.stringify(i)),Object(f.a)(i,function(t){t&&void 0!==t&&(a.dom.innerHTML+=t.body,a.when("stories-carousel").then()})))})}},{key:"getDataInStorage",value:function(){return new r(function(n){var e=setInterval(function(){"function"==typeof window.stcrpc&&window.stcrpc("pref",["storiesBack"],function(t){clearInterval(e),n(t),window.stcrpc("pref",["storiesBack",null])})},500)})}}]),e}(t.a)}.call(this,d(32))}}]);