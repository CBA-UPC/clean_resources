(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"6C11":"C/gd":En6d:function(e,t,n){"use strict";var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.embeddedInteractiveToBlogPosts=P,t.getLiveBlogPosting=B,t.reporterUpdateToBlogPosts=F;var o=r(n("J4zp")),i=r(n("RIqP")),l=r(n("lSNA")),a=n("V6Yu"),u=n("49re"),d=n("6hsm"),s=r(n("aYWg")),c=r(n("dc0q")),f=n("hZ4i");function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}ar m=ar O,y=(O=720,;unction F(e,t){var n,r,o,l=t.parentUrl,a=t.isAccessibleForFree,u=e.node;if(!u)return null;var d="".concat(l,"#").concat(null==u?void 0:u.id),s=m(null==u||null===(n=u.body)||void 0===n?void 0:n.content);if(!s)return null;var c=_(s),f=b(null==u?void 0:u.promotionalMedia,{isAccessibleForFree:a}),p=v(null==u?void 0:u.bylines),g=(null==u||null===(r=u.threadedUpdates)||void 0===r||null===(o=r.edges)||void 0===o?void 0:o.flatMap(())||[];return[{headline:c,author:p,url:d,image:f,articleBody:s,mainEntityOfPage:d}].concat((0,i.default)(g))}r h={Article:ReporterUpdate:F,EmbeddedInteractive:P};function B(e){var t,n=e.feed,r=n.live,o=n.firstPublished,i=n.lastModified,l=n.items_beta,a=n.additionalItems,u=n.url,s=n.headline,c=n.summary,p=n.promotionalMedia,v=n.unstructuredData,m=n.isAccessibleForFree;if(!r)return null;var O=null!=v&&v.seededArticleFirstPublished?new Date(null==v?void 0:v.seededArticleFirstPublished).toISOString():o,_=(0,f.sprinkleAdditionalItemsInFeed)(null==l?void 0:l.edges,null==a?void 0:a.edges),F=null==_||null===(t=_.flatMap(())||void 0===t?void 0:t.filter(Boolean);return{"@context":"https://schema.org","@type":"LiveBlogPosting",headline:(null==s?void 0:s.seo)||(null==s?void 0:s.default),description:c||(null==s?void 0:s.seo)||(null==s?void 0:s.default),image:b(p,{isAccessibleForFree:m}),coverageStartTime:O,coverageEndTime:y(i),datePublished:O,dateModified:i,author:d.PUBLISHER_ID_OBJ,publisher:d.PUBLISHER_ID_OBJ,copyrightHolder:d.PUBLISHER_ID_OBJ,sourceOrganization:d.PUBLISHER_ID_OBJ,copyrightYear:(new Date).getFullYear(),liveBlogUpdate:F,url:u,mainEntityOfPage:u,isAccessibleForFree:m}}},H6j7:Ordy:PjNb:]);
//# sourceMappingURL=vendors~explainerRecirculation~liveRecirculation-b16a60fa24debb84ddcc.js.map