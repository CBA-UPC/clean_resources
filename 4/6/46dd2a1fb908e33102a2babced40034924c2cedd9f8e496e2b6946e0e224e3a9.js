/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/@algolia/autocomplete-preset-algolia@1.15.1/dist/umd/index.production.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
/*! @algolia/autocomplete-preset-algolia 1.15.1 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/autocomplete */
(this,(function(e){"use strict"{segment:"autocomplete-core",version:"1.15.1"}];var s="__aa-highlight__",f="__/aa-highlight__"function g(e){var t=e.hit,r=e.attribute,n=Array.isArray(r)?r:[r],i=l(t,["_highlightResult"].concat(u(n),["value"]));return"string"!=typeof i&&(i=l(t,n)||""),p({highlightedValue:i})}var h={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},d=new RegExp(/\w/i),y=/&(amp|quot|lt|gt|#39);/g,v=RegExp(y.source)nction j(e,t)return}var A=["params"];function _(e){var t=e.searchClient,n=e.queries,i=e.userAgents,a=void 0===i?[]:i;"function"==typeof t.addAlgoliaAgent&&[].concat(u(c),u(a)).forEach());var l(t),p=l.appId,g=l.apiKey;return t.search(n.map())).then())}var H=j(_,"algolia");e.createRequester=j,e.fetchAlgoliaResults=_,e.getAlgoliaFacets=function(e){n(e.searchClient);var t=H({transformResponse:function(e){return e.facetHits}}),i=e.queries.map());return t(r(r({},e),{},{queries:i}))},e.getAlgoliaResults=function(e){return n(e.searchClient),H({transformResponse})(e)},e.parseAlgoliaHitHighlight=g,e.parseAlgoliaHitReverseHighlight=function(e){return b(g(e))},e.parseAlgoliaHitReverseSnippet,e.parseAlgoliaHitSnippet=O,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.production.js.map
