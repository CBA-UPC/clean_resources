(self.webpackChunkkoa2_react_redux_dom=self.webpackChunkkoa2_react_redux_dom||[]).push([[433],{40433:18082:function(e,t){"use strict";var i,r,o;r=[],void 0===(o="function"==typeof(i=function(){return function(e){e=e||500;var t={items:[],times:{}};function i(){return parseInt((new Date).getTime()/1e3)}function r(r,o){var s=o+":"+r,a=t.items.lastIndexOf(s);-1!=a&&t.items.splice(a,1),t.items.unshift(s),localStorage.setItem("riaHistoryItems",JSON.stringify(t.items.slice(0,e))),t.times[s]=i(),localStorage.setItem("riaHistoryTimes",JSON.stringify(t.times))}function o(e,r){for(var o in e){var s=r+":"+e[o],a=t.items.lastIndexOf(s);-1!=a&&t.items.splice(a,1),t.items.unshift(s),t.times[s]=i()}localStorage.setItem("riaHistoryItems",JSON.stringify(t.items)),localStorage.setItem("riaHistoryTimes",JSON.stringify(t.times))}function s(i){return i=i||e,t.items.slice(0,i)}function a(e){return t.items.filter(().map(()}if(null!=localStorage.getItem("riaHistoryItems")&&(t.items=JSON.parse(localStorage.getItem("riaHistoryItems"))),null!=localStorage.getItem("riaHistoryTimes")&&(t.times=JSON.parse(localStorage.getItem("riaHistoryTimes"))),null!=localStorage.getItem("viewHistory")){var l=JSON.parse(localStorage.getItem("viewHistory"));localStorage.removeItem("viewHistory"),o(l,1)}null!=localStorage.getItem("viewNaHistory")&&(l=JSON.parse(localStorage.getItem("viewNaHistory")),localStorage.removeItem("viewNaHistory"),o(l,2)),null!=localStorage.getItem("viewedNewss")&&(l=JSON.parse(localStorage.getItem("viewedNewss")),localStorage.removeItem("viewedNewss"),o(l,3)),null!=localStorage.getItem("viewEquipHistory")&&(l=JSON.parse(localStorage.getItem("viewEquipHistory")),localStorage.removeItem("viewEquipHistory"),o(l,4)),window.riaHistoryStorage={version:"1.1",add:r,lelekaList:s,getIdsByType:a}}})?i.apply(t,r):i)||(e.exports=o)}}]);