(window.webpackJsonp_name_chunkhash_=window.webpackJsonp_name_chunkhash_||[]).push([[12],{"./components/common/TableCardUpdated.js":function(e,n,a){"use strict";a.r(n);var t=a("../node_modules/react/index.js"),r=a.n(t),c=(a("./components/common/css/ArticleShow.scss"),a("./components/common/AnchorLink.js"));a("./components/common/ImageCard/ImageCard.js");n.default=function(e){var n=e.data,a=e.type;return n&&n.length>0?r.a.createElement("div",{className:"tableContainer"},r.a.createElement("table",{className:""!=a?a:null},r.a.createElement("tbody",null,n&&n[0]&&n[0].children&&n[0].children.map((function(e,n){var a=e&&e.children;return r.a.createElement("tr",{key:"tr"+n},a&&a.map((function(e,n){var a=e&&e.children&&e.children[0]&&e.children[0].children&&e.children[0].children[0],t=e&&e.children&&e.children[0],l=a&&e.children[0].children[0].data,d=t&&e.children[0].children&&e.children[0].children[0],i=a&&d.children&&d.children[0]&&d.children[0].data,h=t&&e.children[0].data||l||i;return r.a.createElement("td",{key:"td"+n},t&&"a"==e.children[0].name&&"tag"==e.children[0].type?r.a.createElement(c.a,{href:e.children[0].attribs.href,target:"_blank"},d.data):t&&d&&d.name&&"a"==d.name&&"tag"==d.type?r.a.createElement(c.a,{href:d.attribs.href,target:"_blank"},d&&d.children[0].data):t&&d&&d.name&&"img"==d.name&&"tag"==d.type?r.a.createElement("img",{src:d.attribs.src,target:"_blank"}):h)})))}))))):null}}}]);