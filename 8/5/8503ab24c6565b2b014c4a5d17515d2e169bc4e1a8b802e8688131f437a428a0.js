!function(){function n(d){var g=[],a=[],f=function(c){for(var b={},e=0;e<z.length;e++){var h=z[e];if(h.Tag===c){b=h;break}var k=(r=h.Tag,t=x=l=void 0,l=-1!==(t=r).indexOf("http:")?t.replace("http:",""):t.replace("https:",""),-1!==(x=l.indexOf("?"))?l.replace(l.substring(x),""):l);if(c&&(-1!==c.indexOf(k)||-1!==h.Tag.indexOf(c))){b=h;break}}var r,l,x,t;return b}(d);return f.CategoryId&&(g=f.CategoryId),f.Vendor&&(a=f.Vendor.split(":")),!f.Tag&&D&&(a=g=function(c){var b=[],e=function(h){var k=document.createElement("a");
k.href=h;h=k.hostname.split(".");return-1!==h.indexOf("www")||2<h.length?h.slice(1).join("."):k.hostname}(c);y.some(function(h){return h===e})&&(b=["C0004"]);return b}(d)),{categoryIds:g,vsCatIds:a}}function A(d){return!d||!d.length||(d&&window.OptanonActiveGroups?d.every(function(g){return-1!==window.OptanonActiveGroups.indexOf(","+g+",")}):void 0)}function m(d,g){void 0===g&&(g=null);var a=window,f=a.OneTrust&&a.OneTrust.IsVendorServiceEnabled;a=f&&a.OneTrust.IsVendorServiceEnabled();return"Categories"===
u||"All"===u&&f&&!a?A(d):("Vendors"===u||"All"===u&&f&&a)&&A(g)}function p(d){d=d.getAttribute("class")||"";return-1!==d.indexOf("optanon-category")||-1!==d.indexOf("ot-vscat")}function q(d){return d.hasAttribute("data-ot-ignore")}function v(d,g,a){void 0===a&&(a=null);var f=d.join("-"),c=a&&a.join("-"),b=g.getAttribute("class")||"",e="",h=!1;d&&d.length&&-1===b.indexOf("optanon-category-"+f)&&(e=("optanon-category-"+f).trim(),h=!0);a&&a.length&&-1===b.indexOf("ot-vscat-"+c)&&(e+=" "+("ot-vscat-"+
c).trim(),h=!0);h&&g.setAttribute("class",e+" "+b)}function B(d,g,a){void 0===a&&(a=null);var f;d=d.join("-");a=a&&a.join("-");return-1===g.indexOf("optanon-category-"+d)&&(f=("optanon-category-"+d).trim()),-1===g.indexOf("ot-vscat-"+a)&&(f+=" "+("ot-vscat-"+a).trim()),f+" "+g}var z=JSON.parse('[{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1670447700000/8181055.js","CategoryId":["C0002","C0003"],"Vendor":null},{"Tag":"https://track.hubspot.com/__ptq.gif","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://cdn.embedly.com/widgets/media.html","CategoryId":["C0003"],"Vendor":null},{"Tag":"https://www.google-analytics.com/plugins/ua/linkid.js","CategoryId":["C0004"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1670447400000/8181055.js","CategoryId":["C0002","C0003"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.hs-analytics.net/analytics/1670448000000/8181055.js","CategoryId":["C0002","C0003"],"Vendor":null}]'),
D=JSON.parse("true"),u=JSON.parse('"Categories"'),y=[""];y=y.filter(function(d){if("null"!==d&&d.trim().length)return d});var w=["embed","iframe","img","script"];(new MutationObserver(function(d){Array.prototype.forEach.call(d,function(g){Array.prototype.forEach.call(g.addedNodes,function(e){var h,k;if(1===e.nodeType&&-1!==w.indexOf(e.tagName.toLowerCase())&&!p(e)&&!q(e))if("script"===e.tagName.toLowerCase()){if((k=n(h=e.src||"")).categoryIds.length||k.vsCatIds.length){v(k.categoryIds,e,k.vsCatIds);
m(k.categoryIds,k.vsCatIds)||(e.type="text/plain");var r=function(l){"text/plain"===e.getAttribute("type")&&l.preventDefault();e.removeEventListener("beforescriptexecute",r)};e.addEventListener("beforescriptexecute",r)}}else((k=n(h=e.src||"")).categoryIds.length||k.vsCatIds.length)&&(v(k.categoryIds,e,k.vsCatIds),m(k.categoryIds,k.vsCatIds)||(e.removeAttribute("src"),e.setAttribute("data-src",h)))});var a=g.target;if(g.attributeName&&(!p(a)||!q(a)))if("script"===a.nodeName.toLowerCase()){if((b=n(c=
a.src||"")).categoryIds.length||b.vsCatIds.length){v(b.categoryIds,a,b.vsCatIds);m(b.categoryIds,b.vsCatIds)||(a.type="text/plain");var f=function(e){"text/plain"===a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",f)};a.addEventListener("beforescriptexecute",f)}}else if(-1!==w.indexOf(g.target.nodeName.toLowerCase())){var c,b;((b=n(c=a.src||"")).categoryIds.length||b.vsCatIds.length)&&(v(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.removeAttribute("src"),
a.setAttribute("data-src",c)))}})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]});var C=document.createElement;document.createElement=function(){for(var d=[],g=0;g<arguments.length;g++)d[g]=arguments[g];if("script"!==d[0].toLowerCase()&&-1===w.indexOf(d[0].toLowerCase()))return C.bind(document).apply(void 0,d);var a=C.bind(document).apply(void 0,d),f=a.setAttribute.bind(a);return Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||
""},set:function(c){var b="";"string"==typeof c?b=c:c instanceof Object&&(b=c.toString());b=n(b);!b.categoryIds.length&&!b.vsCatIds.length||"script"!==d[0].toLowerCase()||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?!b.categoryIds.length||-1===w.indexOf(d[0].toLowerCase())||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?f("src",c):(a.removeAttribute("src"),f("data-src",c),c=a.getAttribute("class"),c||(c=B(b.categoryIds,c||"",b.vsCatIds),f("class",c))):(f("type","text/plain"),f("src",c));return!0}},type:{set:function(c){var b=
n(a.src||"");c=!b.categoryIds.length&&!b.vsCatIds.length||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?c:"text/plain";return f("type",c),!0}},class:{set:function(c){var b=n(a.src);!b.categoryIds.length&&!b.vsCatIds.length||p(a)||m(b.categoryIds,b.vsCatIds)||q(a)?f("class",c):(c=B(b.categoryIds,c,b.vsCatIds),f("class",c));return!0}}}),a.setAttribute=function(c,b,e){"type"!==c&&"src"!==c||e?f(c,b):a[c]=b},a}}();ight:inherit;margin-bottom:.5rem;max-width:100%;padding:0;white-space:normal;width:100%}progress[data-v-7841839e]{vertical-align:baseline}[type=number][data-v-7841839e]::-webkit-inner-spin-button,[type=number][data-v-7841839e]::-webkit-outer-spin-button{height:auto}[type=search][data-v-7841839e]{-webkit-appearance:none;outline-offset:-2px}[type=search][data-v-7841839e]::-webkit-search-decoration{-webkit-appearance:none}[data-v-7841839e]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}output[data-v-7841839e]{display:inline-block}summary[data-v-7841839e]{cursor:pointer;display:list-item}template[data-v-7841839e]{display:none}[hidden][data-v-7841839e]{display:none!important}.h1[data-v-7841839e],.h2[data-v-7841839e],.h3[data-v-7841839e],.h4[data-v-7841839e],.h5[data-v-7841839e],.h6[data-v-7841839e],h1[data-v-7841839e],h2[data-v-7841839e],h3[data-v-7841839e],h4[data-v-7841839e],h5[data-v-7841839e],h6[data-v-7841839e]{color:#242335;font-family:"Maven Pro","Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-weight:500;line-height:3.25rem;margin-bottom:.5rem}.h1[data-v-7841839e],h1[data-v-7841839e]{font-size:2.25rem}.h2[data-v-7841839e],h2[data-v-7841839e]{font-size:2.125rem}.h3[data-v-7841839e],h3[data-v-7841839e]{font-size:1.75rem}.h4[data-v-7841839e],h4[data-v-7841839e]{font-size:1.5rem}.h5[data-v-7841839e],h5[data-v-7841839e]{font-size:1.25rem}.h6[data-v-7841839e],h6[data-v-7841839e]{font-size:1rem}.lead[data-v-7841839e]{font-size:1.25rem;font-weight:300}.display-1[data-v-7841839e]{font-size:6rem}.display-1[data-v-7841839e],.display-2[data-v-7841839e]{font-weight:300;line-height:3.25rem}.display-2[data-v-7841839e]{font-size:5.5rem}.display-3[data-v-7841839e]{font-size:4.5rem}.display-3[data-v-7841839e],.display-4[data-v-7841839e]{font-weight:300;line-height:3.25rem}.display-4[data-v-7841839e]{font-size:3.5rem}hr[data-v-7841839e]{border:0;border-top:1px solid rgba(0,0,0,.1);margin-bottom:1rem;margin-top:1rem}.small[data-v-7841839e],small[data-v-7841839e]{font-size:80%;font-weight:300}.mark[data-v-7841839e],mark[data-v-7841839e]{background-color:#fcf8e3;padding:.2em}.list-inline[data-v-7841839e],.list-unstyled[data-v-7841839e]{list-style:none;padding-left:0}.list-inline-item[data-v-7841839e]{display:inline-block}.list-inline-item[data-v-7841839e]:not(:last-child){margin-right:.5rem}.initialism[data-v-7841839e]{font-size:90%;text-transform:uppercase}.blockquote[data-v-7841839e]{font-size:1.25rem;margin-bottom:1rem}.blockquote-footer[data-v-7841839e]{color:#7f8ea8;display:block;font-size:80%}.blockquote-footer[data-v-7841839e]:before{content:"— "}.table[data-v-7841839e]{color:#7f8ea8;margin-bottom:1rem;width:100%}.table td[data-v-7841839e],.table th[data-v-7841839e]{border-top:1px solid #dee2e6;padding:.75rem;vertical-align:top}.table thead th[data-v-7841839e]{border-bottom:2px solid #dee2e6;vertical-align:bottom}.table tbody+tbody[data-v-7841839e]{border-top:2px solid #dee2e6}.table-sm td[data-v-7841839e],.table-sm th[data-v-7841839e]{padding:.3rem}.table-bordered[data-v-7841839e],.table-bordered td[data-v-7841839e],.table-bordered th[data-v-7841839e]{border:1px solid #dee2e6}.table-bordered thead td[data-v-7841839e],.table-bordered thead th[data-v-7841839e]{border-bottom-width:2px}.table-borderless tbody+tbody[data-v-7841839e],.table-borderless td[data-v-7841839e],.table-borderless th[data-v-7841839e],.table-borderless thead th[data-v-7841839e]{border:0}.table-striped tbody tr[data-v-7841839e]:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr[data-v-7841839e]:hover{background-color:rgba(0,0,0,.075);color:#7f8ea8}.table-primary[data-v-7841839e],.table-primary>td[data-v-7841839e],.table-primary>th[data-v-7841839e]{background-color:#fcd1d1}.table-primary tbody+tbody[data-v-7841839e],.table-primary td[data-v-7841839e],.table-primary th[data-v-7841839e],.table-primary thead th[data-v-7841839e]{border-color:#faaaaa}.table-hover .table-primary[data-v-7841839e]:hover,.table-hover .table-primary:hover>td[data-v-7841839e],.table-hover .table-primary:hover>th[data-v-7841839e]{background-color:#fab9b9}.table-secondary[data-v-7841839e],.table-secondary>td[data-v-7841839e],.table-secondary>th[data-v-7841839e]{background-color:#dbdfe7}.table-secondary tbody+tbody[data-v-7841839e],.table-secondary td[data-v-7841839e],.table-secondary th[data-v-7841839e],.table-secondary thead th[data-v-7841839e]{border-color:#bcc4d2}.table-hover .table-secondary[data-v-7841839e]:hover,.table-hover .table-secondary:hover>td[data-v-7841839e],.table-hover .table-secondary:hover>th[data-v-7841839e]{background-color:#ccd1dd}.table-success[data-v-7841839e],.table-success>td[data-v-7841839e],.table-success>th[data-v-7841839e]{background-color:#c3e6cb}.table-success tbody+tbody[data-v-7841839e],.table-success td[data-v-7841839e],.table-success th[data-v-7841839e],.table-success thead th[data-v-7841839e]{border-color:#8fd19e}.table-hover .table-success[data-v-7841839e]:hover,.table-hover .table-success:hover>td[data-v-7841839e],.table-hover .table-success:hover>th[data-v-7841839e]{background-color:#b1dfbb}.table-info[data-v-7841839e],.table-info>td[data-v-7841839e],.table-info>th[data-v-7841839e]{background-color:#bee5eb}.table-info tbody+tbody[data-v-7841839e],.table-info td[data-v-7841839e],.table-info th[data-v-7841839e],.table-info thead th[data-v-7841839e]{border-color:#86cfda}.table-hover .table-info[data-v-7841839e]:hover,.table-hover .table-info:hover>td[data-v-7841839e],.table-hover .table-info:hover>th[data-v-7841839e]{background-color:#abdde5}.table-warning[data-v-7841839e],.table-warning>td[data-v-7841839e],.table-warning>th[data-v-7841839e]{background-color:#ffeeba}.table-warning tbody+tbody[data-v-7841839e],.table-warning td[data-v-7841839e],.table-warning th[data-v-7841839e],.table-warning thead th[data-v-7841839e]{border-color:#ffdf7e}.table-hover .table-warning[data-v-7841839e]:hover,.table-hover .table-warning:hover>td[data-v-7841839e],.table-hover .table-warning:hover>th[data-v-7841839e]{background-color:#ffe8a1}.table-danger[data-v-7841839e],.table-danger>td[data-v-7841839e],.table-danger>th[data-v-7841839e]{background-color:#f5c6cb}.table-danger tbody+tbody[data-v-7841839e],.table-danger td[data-v-7841839e],.table-danger th[data-v-7841839e],.table-danger thead th[data-v-7841839e]{border-color:#ed969e}.table-hover .table-danger[data-v-7841839e]:hover,.table-hover .table-danger:hover>td[data-v-7841839e],.table-hover .table-danger:hover>th[data-v-7841839e]{background-color:#f1b0b7}.table-light[data-v-7841839e],.table-light>td[data-v-7841839e],.table-light>th[data-v-7841839e]{background-color:#fdfdfe}.table-light tbody+tbody[data-v-7841839e],.table-light td[data-v-7841839e],.table-light th[data-v-7841839e],.table-light thead th[data-v-7841839e]{border-color:#fbfcfc}.table-hover .table-light[data-v-7841839e]:hover,.table-hover .table-light:hover>td[data-v-7841839e],.table-hover .table-light:hover>th[data-v-7841839e]{background-color:#ececf6}.table-dark[data-v-7841839e],.table-dark>td[data-v-7841839e],.table-dark>th[data-v-7841839e]{background-color:#c2c1c6}.table-dark tbody+tbody[data-v-7841839e],.table-dark td[data-v-7841839e],.table-dark th[data-v-7841839e],.table-dark thead th[data-v-7841839e]{border-color:#8d8d96}.table-hover .table-dark[data-v-7841839e]:hover,.table-hover .table-dark:hover>td[data-v-7841839e],.table-hover .table-dark:hover>th[data-v-7841839e]{background-color:#b5b4ba}.table-active[data-v-7841839e],.table-active>td[data-v-7841839e],.table-active>th[data-v-7841839e],.table-hover .table-active[data-v-7841839e]:hover,.table-hover .table-active:hover>td[data-v-7841839e],.table-hover .table-active:hover>th[data-v-7841839e]{background-color:rgba(0,0,0,.075)}.table .thead-dark th[data-v-7841839e]{background-color:#343a40;border-color:#454d55;color:#fff}.table .thead-light th[data-v-7841839e]{background-color:#e9ecef;border-color:#dee2e6;color:#495057}.table-dark[data-v-7841839e]{background-color:#343a40;color:#fff}.table-dark td[data-v-7841839e],.table-dark th[data-v-7841839e],.table-dark thead th[data-v-7841839e]{border-color:#454d55}.table-dark.table-bordered[data-v-7841839e]{border:0}.table-dark.table-striped tbody tr[data-v-7841839e]:nth-of-type(odd){background-color:hsla(0,0%,100%,.05)}.table-dark.table-hover tbody tr[data-v-7841839e]:hover{background-color:hsla(0,0%,100%,.075);color:#fff}@media(max-width:575.98px){.table-responsive-sm[data-v-7841839e]{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-sm>.table-bordered[data-v-7841839e]{border:0}}@media(max-width:767.98px){.table-responsive-md[data-v-7841839e]{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-md>.table-bordered[data-v-7841839e]{border:0}}@media(max-width:991.98px){.table-responsive-lg[data-v-7841839e]{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-lg>.table-bordered[data-v-7841839e]{border:0}}@media(max-width:1199.98px){.table-responsive-xl[data-v-7841839e]{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive-xl>.table-bordered[data-v-7841839e]{border:0}}.table-responsive[data-v-7841839e]{display:block;overflow-x:auto;width:100%;-webkit-overflow-scrolling:touch}.table-responsive>.table-bordered[data-v-7841839e]{border:0}.position-container-disable[data-v-7841839e]{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);background:hsla(0,0%,100%,.85);border-radius:5px;color:#000;margin:0 0 40px;min-height:calc(100vh - 268px);padding:50px}@media(max-width:991.98px){.position-container-disable[data-v-7841839e]{padding:20px}}.position-container-disable__detail h1[data-v-7841839e]{font-size:40px;margin:0 0 50px;padding:0}.position-container-disable__detail h2[data-v-7841839e]{font-size:30px;margin:40px 0 20px;padding:0}.position-container-disable__detail a[data-v-7841839e]{color:#f03233;-webkit-text-decoration:underline;text-decoration:underline}.position-container-disable__list[data-v-7841839e]{align-items:center;border:1px solid #ddd;border-bottom:2px solid #44236c;display:grid;grid-template-columns:auto 200px;grid-gap:40px;background:#fff;background:linear-gradient(0,#e7e7e7,#fff);border-radius:4px;color:#3d3d3d;font-weight:300;margin:10px 0;padding:10px;-webkit-text-decoration:none;text-decoration:none}.position-container-disable__list[data-v-7841839e]:first-child{margin-top:40px}.container[data-v-7841839e]{margin-left:auto;margin-right:auto;max-width:1200px;padding-left:15px;padding-right:15px;width:100%}@media(min-width:768px){.container[data-v-7841839e]{padding-left:30px;padding-right:30px}}.job-header[data-v-7841839e]{align-items:center;display:flex;margin:15px auto}@media(max-width:991.98px){.job-header[data-v-7841839e]{background:hsla(0,0%,100%,.85);display:block;margin:0 0 20px;padding:20px}}.job-header__logo[data-v-7841839e]{width:224px}@media(max-width:991.98px){.job-header__logo[data-v-7841839e]{text-align:center;width:100%}}.job-header__menu[data-v-7841839e]{padding-left:130px}@media(max-width:991.98px){.job-header__menu[data-v-7841839e]{padding-left:0}}.job-header__list[data-v-7841839e]{display:flex;margin:0;padding:0}.job-header__list a[data-v-7841839e]{border-bottom:3px solid transparent;display:block;font-size:.9375rem;font-weight:500;padding:10px 0;position:relative;text-align:center;-webkit-text-decoration:none;text-decoration:none;width:100%}.job-header__list a[data-v-7841839e]:hover{border-bottom:3px solid #f55b5c}.job-header__list li[data-v-7841839e]{display:flex;list-style:none;padding:0 1rem}@media(max-width:991.98px){.job-header__list li[data-v-7841839e]{padding:0 .5rem;width:50%}}html[data-v-7841839e]{width:100%}body[data-v-7841839e],html[data-v-7841839e]{overflow-x:hidden}body[data-v-7841839e]{background:url('+c+") 100% 0 no-repeat;background-size:auto 410px}@media(min-width:992px){body[data-v-7841839e]{background:url("+h+') 56vw 0 no-repeat;background-size:auto 694px}}body .main[data-v-7841839e]{overflow:hidden}img[data-v-7841839e]{height:auto;max-width:100%}.leaflet-pane.leaflet-tile-pane[data-v-7841839e]{filter:grayscale(100%) brightness(85%) contrast(200%)}.header[data-v-7841839e]{background-color:hsla(0,0%,100%,0);display:flex;height:80px;position:fixed;transition:background-color .3s ease;width:100%;z-index:1030}.header--scrolled[data-v-7841839e]{background-color:hsla(0,0%,100%,.98)}@media(max-width:991.98px){.header--transparent[data-v-7841839e]{background-color:hsla(0,0%,100%,0)}}.header__menu[data-v-7841839e]{align-items:center;display:flex;flex-direction:row;margin-left:auto;margin-right:auto;max-width:1200px;padding-left:15px;padding-right:15px;width:100%}@media(min-width:768px){.header__menu[data-v-7841839e]{padding-left:30px;padding-right:30px}}.header__menu__brand[data-v-7841839e]{flex:0 1 auto}@media(max-width:991.98px){.header__menu__brand[data-v-7841839e]{flex:1 1 auto}}.header__menu__toggle[data-v-7841839e]{flex:0 1 auto}@media(min-width:992px){.header__menu__toggle[data-v-7841839e]{display:none}}.header__menu__navigation[data-v-7841839e]{display:flex;flex:1 1 auto;flex-direction:row;margin-left:130px}@media(max-width:991.98px){.header__menu__navigation[data-v-7841839e]{display:none}}.header__menu__navigation .navbar[data-v-7841839e]{flex-grow:1;margin-top:.4rem}.mobile-navigation .navbar[data-v-7841839e]{align-items:center;display:flex;flex-grow:1;justify-content:center}.navbar__list[data-v-7841839e]{display:flex;flex-direction:row;list-style:none;margin:0;padding:0}@media(max-width:991.98px){.navbar__list[data-v-7841839e]{flex-direction:column}}.navbar__list__item[data-v-7841839e]{padding:0 1rem}@media(max-width:991.98px){.navbar__list__item[data-v-7841839e]{text-align:center}.navbar__list__item+.navbar__list__item[data-v-7841839e]{margin-top:1rem}.mobile-nav-enter-active .navbar__list__item[data-v-7841839e]{opacity:0;transform:scale(1.1) translateY(-15px);transition:all .3s ease .3s;visibility:hidden}.mobile-nav-enter-to .navbar__list__item[data-v-7841839e]{opacity:1;transform:scale(1) translateY(0);visibility:visible}.mobile-nav-enter-to .navbar__list__item[data-v-7841839e]:first-child{transition-delay:.3s}.mobile-nav-enter-to .navbar__list__item[data-v-7841839e]:nth-child(2){transition-delay:.4s}.mobile-nav-enter-to .navbar__list__item[data-v-7841839e]:nth-child(3){transition-delay:.5s}.mobile-nav-enter-to .navbar__list__item[data-v-7841839e]:nth-child(4){transition-delay:.6s}.mobile-nav-enter-to .navbar__list__item[data-v-7841839e]:nth-child(5){transition-delay:.7s}.mobile-nav-enter-to .navbar__list__item[data-v-7841839e]:nth-child(6){transition-delay:.6s}}.navbar__list__item>a[data-v-7841839e]{font-size:.9375rem;font-weight:500;padding:10px 0;position:relative;-webkit-text-decoration:none;text-decoration:none}@media(max-width:991.98px){.navbar__list__item>a[data-v-7841839e]{color:#fff;font-size:1.188rem}}.navbar__list__item>a[data-v-7841839e]:after{background-color:transparent;border-radius:1.5px;content:"";display:block;height:2.5px;left:50%;position:absolute;top:100%;transform:translateX(-50%);transition:width .3s linear,background-color .4s linear;width:0}@media(min-width:992px){.navbar__list__item>a.active[data-v-7841839e]:after,.navbar__list__item>a[data-v-7841839e]:hover:after{background-color:#f55b5c;transition:width .2s linear,background-color .1s linear;width:100%}}.navbar__list__item>a[data-v-7841839e]:hover:after{background-color:#f55b5c;transition:width .2s linear,background-color .1s linear;width:100%}.fade-enter-active[data-v-7841839e],.fade-leave-active[data-v-7841839e]{transition:opacity .5s}.fade-enter[data-v-7841839e],.fade-leave-to[data-v-7841839e]{opacity:0}.logo[data-v-7841839e]{height:48px;width:209px}@media(min-width:768px){.logo[data-v-7841839e]{height:52px;width:225px}}.logo-fade-enter-active[data-v-7841839e],.logo-fade-leave-active[data-v-7841839e]{transition:opacity .4s}.logo-fade-enter[data-v-7841839e],.logo-fade-leave-active[data-v-7841839e]{opacity:0}.hero-computer[data-v-7841839e]{position:relative}@media(max-width:991.98px){.hero-computer[data-v-7841839e]{display:flex;justify-content:center}}.hero-computer--screen[data-v-7841839e]{position:relative}.hero-computer--element[data-v-7841839e]{left:0;position:absolute;top:0}@media(max-width:991.98px){.hero-computer--element[data-v-7841839e]{left:auto;top:auto}.hero-computer img[data-v-7841839e]{max-height:300px}}',""]),v.locals={},e.exports=v},404:function(e,t,o){"use strict";var r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"hero-computer"},[t("picture",{staticClass:"hero-computer--screen"},[t("img",{attrs:{src:o(394),alt:"layer"}})]),e._v(" "),t("picture",{staticClass:"hero-computer--element reveal"},[t("img",{attrs:{src:o(395),alt:"layer"}})]),e._v(" "),t("picture",{staticClass:"hero-computer--element reveal"},[t("img",{attrs:{src:o(396),alt:"layer"}})]),e._v(" "),t("picture",{staticClass:"hero-computer--element reveal"},[t("img",{attrs:{src:o(397),alt:"layer"}})]),e._v(" "),t("picture",{staticClass:"hero-computer--element reveal"},[t("img",{attrs:{src:o(398),alt:"layer"}})]),e._v(" "),t("picture",{staticClass:"hero-computer--element reveal"},[t("img",{attrs:{src:o(399),alt:"layer"}})]),e._v(" "),t("picture",{staticClass:"hero-computer--element reveal"},[t("img",{attrs:{src:o(400),alt:"layer"}})]),e._v(" "),t("picture",{staticClass:"hero-computer--element reveal"},[t("img",{attrs:{src:o(401),alt:"layer"}})])])}],n=o(405),d={name:"HeroComputer",mounted:function(){Object(n.a)({targets:[".reveal"],scaleX:[0,1],scaleY:[0,1],duration:600,delay:n.a.stagger(100,{start:500}),easing:"spring(0.8, 80, 10, 0)"})}},l=(o(402),o(4)),component=Object(l.a)(d,(function(){this._self._c;return this._m(0)}),r,!1,null,"7841839e",null);t.a=component.exports},530:function(e,t,o){"use strict";o.r(t);var r=o(404),n=o(161),d={name:"partners",layout:"pure",head:function(){return{title:"Privacy policy"}},components:{HeroComputer:r.a,Legal:n.a}},l=o(4),component=Object(l.a)(d,(function(){var e=this,t=e._self._c;return t("legal",{attrs:{lang:"en"},scopedSlots:e._u([{key:"content",fn:function(){return[t("h2",[e._v("Privacy policy")]),e._v(" "),t("p",[e._v("Performax is a technological platform providing online advertising services and helping publishers optimise and\n      monetise their advertising space. For this it leverages its own advertising technology with automatic\n      optimisation, the largest programmatic advertising systems in the world and above all, priceless know-how gained\n      through its many years of experience in the industry.\n    ")]),e._v(" "),t("p",[e._v("\n      Because we are transparent in our business, we’d like to explain our technologies below in plain language, to\n      help users understand how our services process personal data. This Privacy aptcha').val();
    if (value != '' && value != undefined) {
        return true;
    }
    else {
        var html = '<div class="recaptcha-error-message">* 실제 사용자임을 인증해 주세요.</div>';
        $('.join-form-group-captcha').append(html);

        return false;
    }
}

function join_form_add(fid, type, name, description, options, displayed, required) {
    if (!displayed) return;

    var html = '<div data-type="' + type + '" data-id="' + fid + '">';

    if (required) {
        html += '<h4 class="required">' + name + '</h4>';
    }
    else {
        html += '<h4>' + name + '</h4>';
    }
    html += '<p>' + description + '</p>';
    html += '<div class="join-form-group-custom">';
    html += '<div class="join-form-' + fid + '">';

    switch(type) {
        case "1": // 짧은 텍스트
            html += '<input type="text" id="' + fid + '">';
            break;
        case "2": // 긴 텍스트
            html += '<textarea id="' + fid + '"></textarea>';
            break;
        case "3": // 체크 박스
            var option = options.split('|').filter(function (v) { return v !== '' });
            $.each(option, function() {
                html += '<label class="checkbox-inline join-form-checkbox">';
                html += '<input type="checkbox" class="form-contents-checkbox-item" value="' + this + '" name="check' + fid + '">';
                html += this + '</label>';
            });
            break;
        case "4": // 옵션 버튼
            var option = options.split('|').filter(function (v) { return v !== '' });
            $.each(option, function() {
                html += '<label class="radio-inline join-form-checkbox">';
                html += '<input type="radio" class="form-contents-checkbox-item" value="' + this + '" name="radio' + fid + '">';
                html += this + '</label>';
            });
            break;
        case "5": // 드롭 다운
            var option = options.split('|').filter(function (v) { return v !== '' });
            html += '<select class="join-form-dropdown">';
            $.each(option, function() {
                html += '<option value="' + this + '">' + this + '</option>';
            });
            html += '</select>';
            break;
        case "6": // 주소
            break;
        case "7": // 연락처
            break;
        case "8": // 이메일
            break;
    }

    html += '</div></div></div>';


    $('.join-form-group4').append(html);
}

function join_form_submit() {
    $('.join-container .join-required-warning').remove();
    $('.join-container .join-validation-warning').remove();

    var basic_result = [];
    var custom_result = [];
    var obj = new Object();
    var valid = true;
    var sc_type = $('.join-form').data('type');

    if (sc_type == 0) {
        // 기본 정보 시작
        var id = $('.join-form-id > input').val();
        var pw1 = $('.join-form-pw1 > input').val().replace(/'/g, '\\\'');
        var pw2 = $('.join-form-pw2 > input').val().replace(/'/g, '\\\'');
        obj.sid = 0;
        // ID
        if (id == '' || id == undefined)
            valid = !join_required_warning($('.join-form-id'));
        else
            obj.account = id.replace(/'/g, '\\\'');

        // NAME
        if ($('.join-form-name').length > 0) {
            var name = $('.join-form-name > input').val();

            if ((name == '' || name == undefined) && $('.join-form-name').data('required'))
                valid = !join_required_warning($('.join-form-name'));
            else
                obj.name = name.replace(/'/g, '\\\'');
        }

        // PHONE
        if ($('.join-form-phone').length > 0) {
            var phone = $('.join-form-phone > input').val();

            if ((phone == '' || phone == undefined) && $('.join-form-phone').data('required'))
                valid = !join_required_warning($('.join-form-phone'));
            else
                obj.phone = phone.replace(/'/g, '\\\'').replace(/-/gi, '');
        }

        // ZIPCODE & ADDRESS
        if ($('.join-form-zipcode').length > 0 && $('.join-form-address1').length > 0 && $('.join-form-address2').length > 0) {
            var zipcode = $('.join-form-zipcode > input').val().replace(/'/g, '\\\'');
            var address1 = $('.join-form-address1 > input').val().replace(/'/g, '\\\'');
            var address2 = $('.join-form-address2 > input').val().replace(/'/g, '\\\'');

            if ((zipcode == '' || address1 == '' || address2 == '') && $('.join-form-address1').data('required'))
                valid = !join_required_warning($('.join-form-address2'));
            else {
                obj.zip = zipcode;
                obj.addr1 = address1;
                obj.addr2 = address2;
            }
        }

        // BIRTH
        if ($('.join-form-birth-y').length > 0 && $('.join-form-birth-m').length > 0 && $('.join-form-birth-d').length > 0) {
            var birth_y = $('.join-form-birth-y > input').val();
            var birth_m = $('.join-form-birth-m > input').val();
            var birth_d = $('.join-form-birth-d > input').val();

            if ((birth_y == '' || birth_m == '' || birth_d == '') && $('.join-form-birth').data('required')) {
                valid = !join_required_warning($('.join-form-birth'));
            }
            else {
                obj.birth = birth_y + birth_m + birth_d;
            }
        }

        // EMAIL
        if ($('.join-form-email').length > 0) {
            var email = $('.join-form-email > input').val().replace(/'/g, '\\\'');

            if (email == '')
                valid = !join_required_warning($('.join-form-email'));
            else
                obj.email = email;
        }

        // PASSWORD
        if (pw1 == pw2) {
            if (pw1 == '')
                valid = !join_required_warning($('.join-form-pw1'));
            else
                obj.password = pw1;
        }
        else {
            alert(lang.different_password);
        }
    }
    else { // SNS로 회원가입
        // 기본 정보 시작
        var id = post_account;
        var name = post_name == "undefined" ? $('#name').val() : post_name;
        var email = post_email == "undefined" ? $('#email').val() : post_email;
        var sid = post_sid;
        var phone = $('.join-form-phone > input').val();

        obj.account = id;
        obj.sid = sid;

        // NAME
        if ($('.join-form-name').length > 0) {
            var name = $('.join-form-name > input').val();

            if ((name == '' || name == undefined) && $('.join-form-name').data('required'))
                valid = !join_required_warning($('.join-form-name'));
            else
                obj.name = name.replace(/'/g, '\\\'');
        }

        // EMAIL
        if ($('.join-form-email').length > 0) {
            var email = $('.join-form-email > input').val().replace(/'/g, '\\\'');

            if (email == '')
                valid = !join_required_warning($('.join-form-email'));
            else
                obj.email = email;
        }

        if ($('.join-form-phone').length > 0) {
            if (phone == '' && $('.join-form-phone').data('required'))
                valid = !join_required_warning($('.join-form-phone'));
            else
                obj.phone = phone.replace(/'/g, '\\\'').replace(/-/gi, '');
        }

        if ($('.join-form-zipcode').length > 0 && $('.join-form-address1').length > 0 && $('.join-form-address2').length > 0) {
            var zipcode = $('.join-form-zipcode > input').val().replace(/'/g, '\\\'');
            var address1 = $('.join-form-address1 > input').val().replace(/'/g, '\\\'');
            var address2 = $('.join-form-address2 > input').val().replace(/'/g, '\\\'');

            if ((zipcode == '' || address1 == '' || address2 == '') && $('.join-form-address1').data('required'))
                valid = !join_required_warning($('.join-form-address2'));
            else {
                obj.zip = zipcode;
                obj.addr1 = address1;
                obj.addr2 = address2;
            }
        }

        if ($('.join-form-birth-y').length > 0 && $('.join-form-birth-m').length > 0 && $('.join-form-birth-d').length > 0) {
            var birth_y = $('.join-form-birth-y > input').val();
            var birth_m = $('.join-form-birth-m > input').val();
            var birth_d = $('.join-form-birth-d > input').val();

            if ((birth_y == '' || birth_m == '' || birth_d == '') && $('.join-form-birth').data('required')) {
                valid = !join_required_warning($('.join-form-birth'));
            }
            else {
                obj.birth = birth_y + birth_m + birth_d;
            }
        }
    }

    obj.alarm = post_terms_alarm == "true" ? 1 : 0;
    obj.sc_type = sc_type;

    basic_result.push(obj);
    // 기본 정보 끝

    // 사용자 지정 정보 시작
    var custom = $('.join-form-group4 > div');
    $.each(custom, function() {
        var custom_obj = new Object();
        var id = $(this).data('id');
        var type = $(this).data('type');

        switch (type) {
            case 1: // 짧은 텍스트
                var val = $(this).find('input').val().replace(/'/g, '\\\'');
                var required = $(this).children('h4').hasClass('required');
                if (val == '' && required) {
                    valid = !join_required_warning($(this));
                }
                else {
                    custom_obj.key = id;
                    custom_obj.value = val;
                    custom_result.push(custom_obj);
                    //join_form_push_array(result, id, val, required);
                }
                break;
            case 2: // 긴 텍스트
                var val = $(this).find('textarea').val().replace(/'/g, '\\\'');
                var required = $(this).children('h4').hasClass('required');
                if (val == '' && required) {
                    valid = !join_required_warning($(this));
                }
                else {
                    custom_obj.key = id;
                    custom_obj.value = val;
                    custom_result.push(custom_obj);
                    //join_form_push_array(result, id, val, required);
                }
                break;
            case 3: // 체크 박스
            case 4: // 옵션 버튼
                var val = '|';
                var required = $(this).children('h4').hasClass('required');
                $(this).find('input:checked').each(function() {
                    val += $(this).val() + '|';
                });
                if (val == '|' && required) {
                    valid = !join_required_warning($(this));
                }
                else {
                    custom_obj.key = id;
                    custom_obj.value = val;
                    custom_result.push(custom_obj);
                    //join_form_push_array(result, id, val, required);
                }
                break;
            case 5: // 드롭 다운
                var val = $(this).find('.join-form-dropdown').val();
                var required = $(this).children('h4').hasClass('required');
                if (val == '' && required) {
                    valid = !join_required_warning($(this));
                }
                else {
                    custom_obj.key = id;
                    custom_obj.value = val;
                    custom_result.push(custom_obj);
                    //join_form_push_array(result, id, val, required);
                }
                break;
            case 6: // 주소
                break;
            case 7: // 연락처
                break;
            case 8: // 이메일
                break;
        }
    });
    // 사용자 지정 정보 끝

    // var recaptcha = join_recaptcha_valid();
    // if (valid && recaptcha) {
    if (valid) {
        var result = {"basic" : basic_result, "custom" : custom_result};

        qvjax_direct(
            "insert_member_userside",
            "/module/member/member.php",
            'stid=' + QV_BASE_OBJ.stid + '&json_result=' + encodeURIComponent(JSON.stringify(result)),
            function (data) {
                // setCookie('terms-service', true, 0);
                // setCookie('terms-privacy', true, 0);
                // setCookie('terms-alarm', true, 0);
                qv_func.conversion('join', function () {
                    var result = confirm(lang.complete_join);
                    // 페이지 이동
                    if (result) { location.href = window.location.origin; }
                    else { location.href = window.location.origin; }
                });
            },
            function (xhr) {
                switch(xhr.responseText.trim()) {
                    case 'password':
                        join_validation_warning($('.join-form-pw2'));
                        break;
                    case 'account':
                        join_validation_warning($('.join-form-id'));
                        break;
                    case 'email':
                        join_validation_warning($('.join-form-email'));
                        break;
                    case 'phone':
                        join_validation_warning($('.join-form-phone'));
                        break;
                    case 'withdraw':
                        alert('이미 탈퇴한 계정입니다.\n회원가입을 원하시면 새로운 계정으로 등록바랍니다.');
                        break;
                    case 'exist':
                        alert(lang.already_signed_up_account);
                        break;
                }

                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        );
    }
    else {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}

function join_required_warning(obj) {
    obj.children().last().after('<div class="join-required-warning">* ' + lang.required_input_element + '</div>');
    return true;
}
function join_validation_warning(obj) {
    obj.children().last().after('<div class="join-validation-warning">* ' + lang.invalid_format + '</div>');
    return true;
}

function join_term_disagree() {
    // 페이지 이동
    location.href = window.location.origin;
}
function join_term_agree() {
    var service = $('#terms-check-service').prop('checked');
    var privacy = $('#terms-check-privacy').prop('checked');
    var alarm = $('#terms-check-alarm').prop('checked');
    if (service && privacy) {
        // setCookie('terms-service', service, 1);
        // setCookie('terms-privacy', privacy, 1);
        // setCookie('terms-alarm', alarm, 1);

        // var m = qv_func.getUrlParams().m;
        // if (m == '' || m == undefined) {
        //     location.href = location.href + '?m=join';
        // }
        // else {
        //     location.href = location.href.replace("m=" + m, "m=join");
        // }

        // 가입약관동의 -> 가입정보입력 이동
        // 필요 데이터는 POST로 넘겨준다
        //var url = "/module/member/join.html";
        var url = "/join";
        var html = '<form action="' + url + '" method="post" style="display:none;">';
        if (post_account != '' && post_account != undefined) {
            html += '<input type="text" name="account" value="' + post_account + '" />';
        }
        if (post_email != '' && post_email != undefined) {
            html += '<input type="text" name="email" value="' + post_email + '" />';
        }
        if (post_name != '' && post_name != undefined) {
            html += '<input type="text" name="name" value="' + post_name + '" />';
        }
        if (post_sid != '' && post_sid != undefined) {
            html += '<input type="text" name="sid" value="' + post_sid + '" />';
        }
        if (post_sc_type != '' && post_sc_type != undefined) {
            html += '<input type="text" name="sc_type" value="' + post_sc_type + '" />';
        }
        html += '<input type="text" name="m" value="join" />';
        html += '<input type="text" name="service" value="' + service + '" />';
        html += '<input type="text" name="privacy" value="' + privacy + '" />';
        html += '<input type="text" name="alarm" value="' + alarm + '" />';
        html += '</form>';
        var form = $(html);
        $('body').append(form);
        form.submit();
    }
    else {
        alert(lang.agree_term_privacy_info);
    }
}

$('.join-terms').delegate("#terms-check-all", "click", function(e) {
    var checked = $(this).prop("checked");
    $('.join-terms-check').prop("checked", checked);
});

$('.join-form-birth-y > input').focusout(function () {
    var currentYear = (new Date).getFullYear();
    var birth_y = $(this).val();
    if(/^\d*(\.\d{0, 4})?$/.test(birth_y)) {
        if (parseInt(birth_y.trim()) > currentYear || parseInt(birth_y.trim()) <= 999) {
            $(this).val(currentYear);
        }
    }
    else {
        $(this).val(currentYear);
    }
});

$('.join-form-birth-m > input').focusout(function () {
    var birth_m = $(this).val();
    if(/^\d*(\.\d{0, 2})?$/.test(birth_m)) {
        if (parseInt(birth_m.trim()) < 10 && birth_m.trim().length < 2) {
            $(this).val("0" + birth_m);
        }
        else if (parseInt(birth_m.trim()) > 12 || birth_m.trim().length > 2) {
            $(this).val('12');
        }
        if (parseInt(birth_m.trim()) == 0) {
            $(this).val('01');
        }
    }
    else {
        $(this).val('01');
    }
});

$('.join-form-birth-d > input').focusout(function () {
    var birth_d = $(this).val();
    if(/^\d*(\.\d{0, 2})?$/.test(birth_d)) {
        if (parseInt(birth_d.trim()) < 10 && birth_d.trim().length < 2) {
            $(this).val("0" + birth_d);
        }
        else if (parseInt(birth_d.trim()) > 31 || birth_d.trim().length > 2) {
            $(this).val('31');
        }
        if (parseInt(birth_d.trim()) == 0) {
            $(this).val('01');
        }
    }
    else {
        $(this).val('01');
    }
});

function join_execDaumPostcode() {
    daum.postcode.load(function() {
        new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 도로명 조합형 주소 변수
                var juso = '';
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if (extraRoadAddr !== '') {
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }
                // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
                if (fullRoadAddr !== '') {
                    fullRoadAddr += extraRoadAddr;
                }
                if (data.userSelectedType == "R") {
                    juso = fullRoadAddr;
                } else {
                    juso = data.jibunAddress;
                }

                // var id = $(obj).prev()[0].id.replace('post', '');
                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zipcode').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('address1').value = juso;
            }
        }).open();
    });
}


/* MYPAGE */
function mypage_form_setData() {
    // 기본 정보
    qvjax_direct(
        "select_login_user",
        "/module/member/member.php",
        '',
        function (data) {
            if (data.length > 0) {
                $.each(data, function() {
                    // 기본 정보 세팅
                    $('#id').val(this.m_account);
                    $('#email').val(this.m_email);
                    $('#name').val(this.m_name);
                    $('#phone').val(this.m_phone);
                    $('#zipcode').val(this.m_zip);
                    $('#address1').val(this.m_addr1);
                    $('#address2').val(this.m_addr2);
                    if (this.m_birth != null && this.m_birth != '') {
                        $('#birth-y').val(this.m_birth.slice(0, 4));
                        $('#birth-m').val(this.m_birth.slice(4, 6));
                        $('#birth-d').val(this.m_birth.slice(6, 8));
                    }
                    $('#terms-check-alarm').prop('checked', this.m_event_alarm == "0" ? false : true);

                    if (this.m_sc_type != 0) {
                        $('.mypage-form-group1').hide();
                        $('.mypage-form-pw1').remove();
                        $('.mypage-form-pw2').remove();
                        $('.password-notice').remove();
                        $('.mypage-form-email').remove();
                    }

                    $('.mypage-form').data('uid', this.m_uid);
                    $('.mypage-form').data('account', this.m_account);
                    $('.mypage-form').data('sc_type', this.m_sc_type);


                    $('.mypage-content').show();

                    // 사용자 지정 정보 세팅
                    $('.modify-member-info-custom-list').children().remove();
                    qvjax_direct(
                        "select_member_custom",
                        "/module/member/member.php",
                        'uid=' + this.m_uid,
                        function (data) {
                            if (data.length > 0) {
                                var mappingData = data;
                                qvjax_direct(
                                    "select_member_table_info",
                                    "/module/member/member.php",
                                    'stid=' + QV_BASE_OBJ.stid,
                                    function (data) {
                                        var default_field = ['name', 'phone', 'birth', 'address'];
                                        var custom_count = 0;
                                        $.each(data, function () {
                                            if ($.inArray(this.fid, default_field) <= -1) {
                                                mypage_form_setData_customItem(this.fid, this.type, mappingData);
                                                custom_count++;
                                            }
                                        });

                                        if (custom_count == 0) {
                                            $('.modify-member-info-custom').hide();
                                        }
                                        else {
                                            $('.modify-member-info-custom').show();
                                        }
                                    },
                                    function (xhr) {
                                    }
                                );
                            }
                        },
                        function (xhr) { }
                    );
                });
            }
            else {
                alert(lang.no_member_info);
                parent.history.back();
            }
        },
        function (xhr) {
            alert(lang.no_member_info);
            parent.history.back();
            return false;
        }
    );
}

function mypage_form_setData_customItem(fid, type, mappingData) {
    var value = mappingData[0][fid];
    if (mappingData.length > 0 && value != null) {
        switch (type) {
            case "1":
            default:
                $('.mypage-form-' + fid + ' input').val(value);
                break;
            case "2":
                $('.mypage-form-' + fid + ' textarea').val(value);
                break;
            case "5":
                $('.mypage-form-' + fid + ' select').val(value);
                break;
            case "3":
            case "4":
                var option = value.split('|').filter(function (v) { return v !== '' });
                $.each(option, function() {
                    $('.mypage-form-' + fid +' input[value="' + this + '"]').prop('checked', true);
                });
                break;
        }
    }
}


function mypage_form_init(callback) {
    qvjax_direct(
        "select_site_info",
        "/module/member/member.php",
        'stid=' + QV_BASE_OBJ.stid,
        function (data) {
            if (data.length > 0) {
                $.each(data, function() {
                    var account_type = this.ssi_member_account_type;
                    if (account_type == 0) {
                        //$('.mypage-form-email').show();
                    }
                    else if (account_type == 1) {
                        $('#id').prop('placeholder', lang.account);
                    }

                    qvjax_direct(
                        "select_member_table_info",
                        "/module/member/member.php",
                        'stid=' + QV_BASE_OBJ.stid,
                        function (data) {
                            var default_field = ['name', 'phone', 'birth', 'address'];
                            $.each(data, function() {
                                if ($.inArray(this.fid, default_field) > -1) {
                                    var description = this.description;
                                    if (this.fid == 'name') {
                                        if (description != '') {
                                            $('#name').prop('placeholder', description);
                                        }
                                        if (this.displayed==0) {
                                            $('.mypage-form-name').remove();
                                        }
                                        $('.mypage-form-name').data('required', this.required == 0 ? false : true);
                                    }

                                    if (this.fid == 'phone') {
                                        if (description != '') {
                                            $('#phone').prop('placeholder', description);
                                        }
                                        if (this.displayed==0) {
                                            $('.mypage-form-phone').remove();
                                        }
                                        $('.mypage-form-phone').data('required', this.required == 0 ? false : true);
                                    }

                                    if (this.fid == 'address') {
                                        if (this.displayed==0) {
                                            $('.mypage-form-group3').remove();
                                        }
                                        $('.mypage-form-address1').data('required', this.required == 0 ? false : true);
                                    }

                                    if (this.fid == 'birth') {
                                        if (this.displayed==0) {
                                            $('.mypage-form-birth').remove();
                                        }
                                        $('.mypage-form-birth').data('required', this.required == 0 ? false : true);
                                    }

                                    if ($('.mypage-form-group2').children().length == 0) {
                                        $('.mypage-form-group2').remove();
                                    }
                                }
                                else {
                                    mypage_form_add(this.fid, this.type, this.name, this.description, this.options, this.displayed==1 ? true : false, this.required==1 ? true : false);
                                }
                            });

                            callback();

                            // 사용자 지정 항목이 없으면 해당 그룹을 삭제한다
                            if ($('.mypage-form-group4').children().length == 0) { $('.mypage-form-group4').remove(); }
                        },
                        function (xhr) { alert(xhr.responseText); }
                    );
                });
            }
            else {
            }
        },
        function (xhr) { alert(xhr.responseText); }
    );
}


function mypage_form_add(fid, type, name, description, options, displayed, required) {
    if (!displayed) return;

    var html = '<div data-type="' + type + '" data-id="' + fid + '">';

    if (required) {
        html += '<h4 class="required">' + name + '</h4>';
    }
    else {
        html += '<h4>' + name + '</h4>';
    }
    html += '<p>' + description + '</p>';
    html += '<div class="mypage-form-group-custom">';
    html += '<div class="mypage-form-' + fid + '">';

    switch(type) {
        case "1": // 짧은 텍스트
            html += '<input type="text" id="' + fid + '">';
            break;
        case "2": // 긴 텍스트
            html += '<textarea id="' + fid + '"></textarea>';
            break;
        case "3": // 체크 박스
            var option = options.split('|').filter(function (v) { return v !== '' });
            $.each(option, function() {
                html += '<label class="checkbox-inline mypage-form-checkbox">';
                html += '<input type="checkbox" class="form-contents-checkbox-item" value="' + this + '" name="check' + fid + '">';
                html += this + '</label>';
            });
            break;
        case "4": // 옵션 버튼
            var option = options.split('|').filter(function (v) { return v !== '' });
            $.each(option, function() {
                html += '<label class="radio-inline mypage-form-checkbox">';
                html += '<input type="radio" class="form-contents-checkbox-item" value="' + this + '" name="radio' + fid + '">';
                html += this + '</label>';
            });
            break;
        case "5": // 드롭 다운
            var option = options.split('|').filter(function (v) { return v !== '' });
            html += '<select class="mypage-form-dropdown">';
            $.each(option, function() {
                html += '<option value="' + this + '">' + this + '</option>';
            });
            html += '</select>';
            break;
        case "6": // 주소
            break;
        case "7": // 연락처
            break;
        case "8": // 이메일
            break;
    }

    html += '</div></div></div>';


    $('.mypage-form-group4').append(html);
}

function mypage_form_withdraw() {
    var res = confirm(lang.withdrawal);
    if (res) {
        qvjax_direct(
            "delete_member",
            "/module/member/member.php",
            'stid=' + QV_BASE_OBJ.stid,
            function (data) {
                if (data) {
                    alert(lang.complete_withdrawal);
                    location.href = '/';
                }
                else {
                    alert(lang.invalid_access);
                }
            },
            function (xhr) { }
        );
    }
}

function mypage_form_submit() {
    $('.mypage-container .mypage-required-warning').remove();
    $('.mypage-container .mypage-validation-warning').remove();

    var basic_result = [];
    var custom_result = [];
    var obj = new Object();
    var valid = true;

    // 기본 정보 시작
    var uid = $('.mypage-form').data('uid');
    var account = $('.mypage-form').data('account');
    var sc_type = $('.mypage-form').data('sc_type');

    // 일반 사용자
    if (sc_type == 0) {
        var id = $('.mypage-form-id > input').val();
        var pw1 = $('.mypage-form-pw1 > input').val().replace(/'/g, '\\\'');
        var pw2 = $('.mypage-form-pw2 > input').val().replace(/'/g, '\\\'');
        var event_alarm = $('#terms-check-alarm').prop('checked') == true ? 1 : 0;

        // ID
        if (id == '' || id == undefined)
            valid = !mypage_required_warning($('.mypage-form-id'));
        else
            obj.account = id.replace(/'/g, '\\\'');

        // NAME
        if ($('.mypage-form-name').length > 0) {
            var name = $('.mypage-form-name > input').val();

            if ((name == '' || name == undefined) && $('.mypage-form-name').data('required'))
                valid = !mypage_required_warning($('.mypage-form-name'));
            else
                obj.name = name.replace(/'/g, '\\\'');
        }

        // PHONE
        if ($('.mypage-form-phone').length > 0) {
            var phone = $('.mypage-form-phone > input').val();

            if ((phone == '' || phone == undefined) && $('.mypage-form-phone').data('required'))
                valid = !mypage_required_warning($('.mypage-form-phone'));
            else
                obj.phone = phone.replace(/'/g, '\\\'').replace(/-/gi, '');
        }

        // ZIPCODE & ADDRESS
        if ($('.mypage-form-zipcode').length > 0 && $('.mypage-form-address1').length > 0 && $('.mypage-form-address2').length > 0) {
            var zipcode = $('.mypage-form-zipcode > input').val().replace(/'/g, '\\\'');
            var address1 = $('.mypage-form-address1 > input').val().replace(/'/g, '\\\'');
            var address2 = $('.mypage-form-address2 > input').val().replace(/'/g, '\\\'');

            if ((zipcode == '' || address1 == '' || address2 == '') && $('.mypage-form-address1').data('required'))
                valid = !mypage_required_warning($('.mypage-form-address2'));
            else {
                obj.zip = zipcode;
                obj.addr1 = address1;
                obj.addr2 = address2;
            }
        }

        // BIRTH
        if ($('.mypage-form-birth-y').length > 0 && $('.mypage-form-birth-m').length > 0 && $('.mypage-form-birth-d').length > 0) {
            var birth_y = $('.mypage-form-birth-y > input').val();
            var birth_m = $('.mypage-form-birth-m > input').val();
            var birth_d = $('.mypage-form-birth-d > input').val();

            if ((birth_y == '' || birth_m == '' || birth_d == '') && $('.mypage-form-birth').data('required')) {
                valid = !mypage_required_warning($('.mypage-form-birth'));
            }
            else {
                obj.birth = birth_y + birth_m + birth_d;
            }
        }

        // EMAIL
        if ($('.mypage-form-email').length > 0) {
            var email = $('.mypage-form-email > input').val().replace(/'/g, '\\\'');

            if (email == '')
                valid = !mypage_required_warning($('.mypage-form-email'));
            else
                obj.email = email;
        }

        if (pw1 == pw2) {
            obj.password = pw1;
        }
        else {
            alert(lang.different_password);
            return;
        }
    }
    // SNS 가입 사용자
    else {
        var event_alarm = $('#terms-check-alarm').prop('checked') == true ? 1 : 0;

        if ($('.mypage-form-name').length > 0) {
            var name = $('.mypage-form-name > input').val();

            if (name == '' && $('.mypage-form-name').data('required'))
                valid = !mypage_required_warning($('.mypage-form-name'));
            else
                obj.name = name.replace(/'/g, '\\\'');
        }

        if ($('.mypage-form-phone').length > 0) {
            var phone = $('.mypage-form-phone > input').val();

            if (phone == '' && $('.mypage-form-phone').data('required'))
                valid = !mypage_required_warning($('.mypage-form-phone'));
            else
                obj.phone = phone.replace(/'/g, '\\\'').replace(/-/gi, '');
        }

        if ($('.mypage-form-zipcode').length > 0 && $('.mypage-form-address1').length > 0 && $('.mypage-form-address2').length > 0) {
            var zipcode = $('.mypage-form-zipcode > input').val().replace(/'/g, '\\\'');
            var address1 = $('.mypage-form-address1 > input').val().replace(/'/g, '\\\'');
            var address2 = $('.mypage-form-address2 > input').val().replace(/'/g, '\\\'');

            if ((zipcode == '' || address1 == '' || address2 == '') && $('.mypage-form-address1').data('required'))
                valid = !mypage_required_warning($('.mypage-form-address2'));
            else {
                obj.zip = zipcode;
                obj.addr1 = address1;
                obj.addr2 = address2;
            }
        }

        if ($('.mypage-form-birth-y').length > 0 && $('.mypage-form-birth-m').length > 0 && $('.mypage-form-birth-d').length > 0) {
            var birth_y = $('.mypage-form-birth-y > input').val();
            var birth_m = $('.mypage-form-birth-m > input').val();
            var birth_d = $('.mypage-form-birth-d > input').val();

            if ((birth_y == '' || birth_m == '' || birth_d == '') && $('.mypage-form-birth').data('required')) {
                valid = !mypage_required_warning($('.mypage-form-birth'));
            }
            else {
                obj.birth = birth_y + birth_m + birth_d;
            }
        }
    }

    obj.uid = uid;
    obj.sc_type = sc_type;
    obj.alarm = event_alarm;

    basic_result.push(obj);
    // 기본 정보 끝

    // 사용자 지정 정보 시작
    var custom = $('.mypage-form-group4 > div');
    $.each(custom, function() {
        var custom_obj = new Object();
        var id = $(this).data('id');
        var type = $(this).data('type');

        switch (type) {
            case 1: // 짧은 텍스트
                var val = $(this).find('input').val().replace(/'/g, '\\\'');
                var required = $(this).children('h4').hasClass('required');
                if (val == '' && required) {
                    valid = !mypage_required_warning($(this));
                }
                else {
                    custom_obj.key = id;
                    custom_obj.value = val;
                    custom_result.push(custom_obj);
                }
                break;
            case 2: // 긴 텍스트
                var val = $(this).find('textarea').val().replace(/'/g, '\\\'');
                var required = $(this).children('h4').hasClass('required');
                if (val == '' && required) {
                    valid = !mypage_required_warning($(this));
                }
                else {
                    custom_obj.key = id;
                    custom_obj.value = val;
                    custom_result.push(custom_obj);
                }
                break;
            case 3: // 체크 박스
            case 4: // 옵션 버튼
                var val = '|';
                var required = $(this).children('h4').hasClass('required');
                $(this).find('input:checked').each(function() {
                    val += $(this).val() + '|';
                });
                if (val == '|' && required) {
                    valid = !mypage_required_warning($(this));
                }
                else {
                    custom_obj.key = id;
                    custom_obj.value = val;
                    custom_result.push(custom_obj);
                }
                break;
            case 5: // 드롭 다운
                var val = $(this).find('.mypage-form-dropdown').val();
                var required = $(this).children('h4').hasClass('required');
                if (val == '' && required) {
                    valid = !mypage_required_warning($(this));
                }
                else {
                    custom_obj.key = id;
                    custom_obj.value = val;
                    custom_result.push(custom_obj);
                }
                break;
            case 6: // 주소
                break;
            case 7: // 연락처
                break;
            case 8: // 이메일
                break;
        }
    });
    // 사용자 지정 정보 끝

    if (valid) {
        var result = {"basic" : basic_result, "custom" : custom_result};

        qvjax_direct(
            "update_member_userside",
            "/module/member/member.php",
            'stid=' + QV_BASE_OBJ.stid + '&json_result=' + encodeURIComponent(JSON.stringify(result)),
            function (data) {
                if (data) {
                    alert(lang.complete_modify);
                    // 페이지 이동
                    location.href = "/";
                }
                else {
                    alert(lang.invalid_access);
                }
            },
            function (xhr) {
                switch(xhr.responseText.trim()) {
                    case 'password':
                        mypage_validation_warning($('.mypage-form-pw2'));
                        break;
                    case 'account':
                        mypage_validation_warning($('.mypage-form-id'));
                        break;
                    case 'email':
                        mypage_validation_warning($('.mypage-form-email'));
                        break;
                    case 'phone':
                        mypage_validation_warning($('.mypage-form-phone'));
                        break;
                }

                $("html, body").animate({ scrollTop: 0 }, "slow");
            }
        );
    }
    else {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }
}

function mypage_required_warning(obj) {
    obj.children().last().after('<div class="mypage-required-warning">* ' + lang.required_input_element + '</div>');
    return true;
}
function mypage_validation_warning(obj) {
    obj.children().last().after('<div class="mypage-validation-warning">* ' + lang.invalid_format + '</div>');
    return true;
}

$('.mypage-form-birth-y > input').focusout(function () {
    var birth_y = $(this).val();
    var currentYear = (new Date).getFullYear();
    if(/^\d*(\.\d{0, 4})?$/.test(birth_y)) {
        if (parseInt(birth_y.trim()) > currentYear || parseInt(birth_y.trim()) <= 999) {
            $(this).val(currentYear);
        }
    }
    else {
        $(this).val(currentYear);
    }
});

$('.mypage-form-birth-m > input').focusout(function () {
    var birth_m = $(this).val();
    if(/^\d*(\.\d{0, 2})?$/.test(birth_m)) {
        if (parseInt(birth_m.trim()) < 10 && birth_m.trim().length < 2) {
            $(this).val("0" + birth_m);
        }
        else if (parseInt(birth_m.trim()) > 12 || birth_m.trim().length > 2) {
            $(this).val('12');
        }
        if (parseInt(birth_m.trim()) == 0) {
            $(this).val('01');
        }
    }
    else {
        $(this).val('01');
    }
});

$('.mypage-form-birth-d > input').focusout(function () {
    var birth_d = $(this).val();
    if(/^\d*(\.\d{0, 2})?$/.test(birth_d)) {
        if (parseInt(birth_d.trim()) < 10 && birth_d.trim().length < 2) {
            $(this).val("0" + birth_d);
        }
        else if (parseInt(birth_d.trim()) > 31 || birth_d.trim().length > 2) {
            $(this).val('31');
        }
        if (parseInt(birth_d.trim()) == 0) {
            $(this).val('01');
        }
    }
    else {
        $(this).val('01');
    }
});

function mypage_execDaumPostcode() {
    daum.postcode.load(function() {
        new daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 도로명 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var fullRoadAddr = data.roadAddress; // 도로명 주소 변수
                var extraRoadAddr = ''; // 도로명 조합형 주소 변수
                var juso = '';
                // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                    extraRoadAddr += data.bname;
                }
                // 건물명이 있고, 공동주택일 경우 추가한다.
                if (data.buildingName !== '' && data.apartment === 'Y') {
                    extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                }
                // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                if (extraRoadAddr !== '') {
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                }
                // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
                if (fullRoadAddr !== '') {
                    fullRoadAddr += extraRoadAddr;
                }
                if (data.userSelectedType == "R") {
                    juso = fullRoadAddr;
                } else {
                    juso = data.jibunAddress;
                }

                // var id = $(obj).prev()[0].id.replace('post', '');
                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('zipcode').value = data.zonecode; //5자리 새우편번호 사용
                document.getElementById('address1').value = juso;
            }
        }).open();
    });
}