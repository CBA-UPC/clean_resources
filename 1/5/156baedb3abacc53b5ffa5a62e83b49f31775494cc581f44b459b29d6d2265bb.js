// For license information, see `https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/3835a1ac9994/RC39cc9f03ca7143c39801129d81ab2566-source.js`.
_satellite.__registerScript('https://assets.adobedtm.com/5ef092d1efb5/e6b4ca74378c/3835a1ac9994/RC39cc9f03ca7143c39801129d81ab2566-source.min.js', "null!==window.wdgtagging&&null!==window.wdgtagging.oneds&&function(t,n,e,o){e.customAemVideo=function(){try{var t=window.location.href;e.ctPageAction=telemetry.webAnalyticsPlugin,e.OneDSVideoTagging=function(n,i){var a=!1,c=\"\",r=\"\",d=!0,g=!1,u=-1,l=!1,v=!1,T=Math.floor(Date.now()/1e3),m={contentTags:{},behavior:\"\",actionType:\"O\"};m.contentTags.vidnm=i,m.contentTags.vidid=\"\",m.contentTags.area=\"body\",m.contentTags.vidpct=\"\",m.contentTags.viddur=\"\",m.contentTags.type=\"video\",m.contentTags.containerName=\"AEM_Inline_Video\",m.contentTags.parentpage=t,m.contentTags.field1=\"mgt\",o(n).on(\"ended\",(function(){a=!0})),o(n).on(\"playing\",(function(){if(p(),s(),0===Math.floor(n[0].currentTime)&&d&&(l&&v&&a?(m.behavior=\"VIDEOREPLAY\",m.contentTags.vidpct=\"0\",e.ctPageAction.capturePageAction(null,m)):l||(m.behavior=\"VIDEOSTART\",m.contentTags.vidpct=\"0\",e.ctPageAction.capturePageAction(null,m),l=!0)),g&&d){g=!1;var t=10*Math.floor(n[0].currentTime/n[0].duration*10);m.behavior=\"VIDEOCONTINUE\",m.contentTags.vidpct=t.toString(),e.ctPageAction.capturePageAction(null,m)}a=n[0].ended})),o(n).on(\"timeupdate\",(function(){p(),s();var t=n[0].currentTime/n[0].duration*100>=99||n[0].duration-n[0].currentTime<.75;if(d&&l&&!t&&!g&&!a){var o=10*Math.floor(n[0].currentTime/n[0].duration*10);o!==u&&(m.behavior=\"VIDEOCHECKPOINT\",m.contentTags.vidpct=o.toString(),e.ctPageAction.capturePageAction(null,m),u=o),Math.floor(n[0].currentTime/n[0].duration*100)>1&&n[0].currentTime>1&&(a=n[0].ended)}\"O\"===m.actionType&&d&&!v&&t&&(m.behavior=\"VIDEOCOMPLETE\",m.contentTags.vidpct=\"100\",e.ctPageAction.capturePageAction(null,m),v=!0,r&&(d=!1)),t&&\"O\"===m.actionType&&100!==u&&(T=Math.floor(Date.now()/1e3),m.behavior=\"VIDEOCHECKPOINT\",m.contentTags.vidpct=\"100\",e.ctPageAction.capturePageAction(null,m),u=100,r&&(d=!1)),t&&(a=!0)})),o(n).on(\"seeked\",(function(){if(d&&Math.floor(Date.now()/1e3)-T>1&&!a){var t=Math.floor(n[0].currentTime/n[0].duration*100),o=10*Math.floor(t/10);if(100===u&&(0===t||n[0].currentTime<.75))return;m.behavior=\"VIDEOJUMP\",m.contentTags.vidpct=o.toString(),e.ctPageAction.capturePageAction(null,m),\"A\"===m.actionType&&(m.actionType=\"O\"),T=Math.floor(Date.now()/1e3)}})),o(n).on(\"pause\",(function(){if(n[0].readyState>2&&!n[0].ended){g=!0;var t=10*Math.floor(n[0].currentTime/n[0].duration*10);m.behavior=\"VIDEOPAUSE\",m.contentTags.vidpct=t.toString(),e.ctPageAction.capturePageAction(null,m)}else g=!1;n[0].ended||(d=!0,\"A\"===m.actionType&&(m.actionType=\"O\"))})),o(n).on(\"volumechange\",(function(){if(c||!n[0].muted&&0!==n[0].volume||\"A\"!==m.actionType)if(c||!n[0].muted&&0!==n[0].volume||\"O\"!==m.actionType){if(!(c&&!n[0].muted&&n[0].volume>0))return;c=n[0].muted||0===n[0].volume,d=!0,m.behavior=\"VIDEOUNMUTE\",\"A\"===m.actionType&&(m.actionType=\"O\")}else c=n[0].muted||0===n[0].volume,d=!0,m.behavior=\"VIDEOMUTE\";else c=n[0].muted||0===n[0].volume,d=!1,m.behavior=\"VIDEOMUTE\";var t=10*Math.floor(n[0].currentTime/n[0].duration*10);m.contentTags.vidpct=t.toString(),e.ctPageAction.capturePageAction(null,m)}));var p=function(){m.contentTags.viddur||(m.contentTags.viddur=n[0].duration),\"boolean\"!=typeof c&&(c=n[0].muted||0===n[0].volume),\"boolean\"!=typeof r&&(r=n[0].loop)},s=function(){if(!m.contentTags.vidnm||!m.contentTags.vidid||!m.actionType){var t=\"\",e=\"\";if(o(n[0]).closest(\".aem-inline-video-component\").attr(\"data-video\")){var i=o(n[0]).closest(\".aem-inline-video-component\").attr(\"data-video\");(i=JSON.parse(i)).metadata&&i.metadata.title&&(t=i.metadata.title),i&&i.id&&(e=i.id)}m.contentTags.vidnm||(m.contentTags.vidnm=t),m.contentTags.vidid||(m.contentTags.vidid=e)}}},e.OneDSVideoTaggingInit=function(t){try{var n=\"\";(n=(n=t.attr(\"title\")||\"\").trim()).length&&\"true\"!==t.attr(\"wdg-AEM-video\")&&(e.OneDSVideoTagging(t,n),t.attr(\"wdg-AEM-video\",!0))}catch(t){e.debugLog(\"Error on AEM video tagging Error: \"+t)}},o(document).on(\"mousedown\",\".aem-inline-video-component, .inline-video div, .aem-inline-video-component video\",(function(){try{var t=o(\".aem-inline-video-component\").find(\"video\");t.length&&o(t).each((function(){e.OneDSVideoTaggingInit(o(this))}))}catch(t){e.debugLog(\"Error on AEM video tagging Error: \"+t)}}))}catch(t){e.debugLog(\"Telemetry Error: \"+t)}},o(window).on(\"load\",(function(){\"object\"==typeof window.telemetry?e.customAemVideo():o(document).on(\"1DSInitialized\",(function(){e.customAemVideo()}))}))}(window.wdgtagging,window.wdgtagging.oneds,window.wdgtagging.util,window.jQuery);");