!function(e){var n,i="#iframe-wom",o=!1,t=function(){e(window).on("message.wom",(function(i){var t=i.originalEvent.data;if(-1!==t.indexOf("RESIZE-WOM-")){height=t.substring(11);var a=document.getElementById("iframe-wom");a&&(a.height=height,Math.abs(n-height)>500&&(o||a.scrollIntoView()),n=height),o?o=!1:e(document).trigger("common.pixel.pageview")}}))};e(i).each((function(){var i=e(this);n=3e3,o=!0,t.call(i)})),e(document).on("pjax:end",(function(a,c,h){e(window).off("message.wom"),e(h.container).find(i).each((function(){var i=e(this);n=3e3,o=!0,t.call(i)}))}))}(window.jQuery);
//# sourceMappingURL=common-wom2021.min.js.map