))):new Promise((function(e,o){Ft(n,r,{title:!1,cdn:!0}).then((function(n){if(!n||!n.to_words)throw n;t&&t(n.to_words),e(n.to_words)})).catch((function(e){o(e),t&&t(null,e)}))}))},getBestAvailableLanguage:jo,getAvailableLanguages:vt};return Ae(ua(),"polyfillReady",(function(){Oo(document);for(var e=0,t=[document.currentScript].concat(Array.from(document.scripts));e<t.length;e+=1){var n=t[e],r=n&&(n.src||n.getAttribute&&n.getAttribute("data-src"));if(r){var o=ha(r);if(o)return void ma.initialize(o)}}})),ma}();