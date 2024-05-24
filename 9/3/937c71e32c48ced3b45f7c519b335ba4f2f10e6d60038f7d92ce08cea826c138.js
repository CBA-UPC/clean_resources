/*! List.js v1.5.0 (http://listjs.com) by Jonny Strömberg (http://javve.com) */
var List=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e,r){function n(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var i=r(4),s=/\s+/;Object.prototype.toString;t.exports=function(t){return new n(t)},n.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array(),r=i(e,t);return~r||e.push(t),this.el.className=e.join(" "),this},n.prototype.remove=function(t){if(this.list)return this.list.remove(t),this;var e=this.array(),r=i(e,t);return~r&&e.splice(r,1),this.el.className=e.join(" "),this},n.prototype.toggle=function(t,e){return this.list?("undefined"!=typeof e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):("undefined"!=typeof e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},n.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),r=e.split(s);return""===r[0]&&r.shift(),r},n.prototype.has=n.prototype.contains=function(t){return this.list?this.list.contains(t):!!~i(this.array(),t)}},function(t,e,r){var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",s="addEventListener"!==n?"on":"",a=r(5);e.bind=function(t,e,r,i){t=a(t);for(var o=0;o<t.length;o++)t[o][n](s+e,r,i||!1)},e.unbind=function(t,e,r,n){t=a(t);for(var o=0;o<t.length;o++)t[o][i](s+e,r,n||!1)}},function(t,e){t.exports=function(t){return function(e,r,n){var i=this;this._values={},this.found=!1,this.filtered=!1;var s=function(e,r,n){if(void 0===r)n?i.values(e,n):i.values(e);else{i.elm=r;var s=t.templater.get(i,e);i.values(s)}};this.values=function(e,r){if(void 0===e)return i._values;for(var n in e)i._values[n]=e[n];r!==!0&&t.templater.set(i,i.values())},this.show=function(){t.templater.show(i)},this.hide=function(){t.templater.hide(i)},this.matching=function(){return t.filtered&&t.searched&&i.found&&i.filtered||t.filtered&&!t.searched&&i.filtered||!t.filtered&&t.searched&&i.found||!t.filtered&&!t.searched},this.visible=function(){return!(!i.elm||i.elm.parentNode!=t.list)},s(e,r,n)}}},function(t,e){var r=function(t,e,r){return r?t.getElementsByClassName(e)[0]:t.getElementsByClassName(e)},n=function(t,e,r){return e="."+e,r?t.querySelector(e):t.querySelectorAll(e)},i=function(t,e,r){for(var n=[],i="*",s=t.getElementsByTagName(i),a=s.length,o=new RegExp("(^|\\s)"+e+"(\\s|$)"),l=0,u=0;l<a;l++)if(o.test(s[l].className)){if(r)return s[l];n[u]=s[l],u++}return n};t.exports=function(){return function(t,e,s,a){return a=a||{},a.test&&a.getElementsByClassName||!a.test&&document.getElementsByClassName?r(t,e,s):a.test&&a.querySelector||!a.test&&document.querySelector?n(t,e,s):i(t,e,s)}}()},function(t,e){var r=[].indexOf;t.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},function(t,e){function r(t){return"[object Array]"===Object.prototype.toString.call(t)}t.exports=function(t){if("undefined"==typeof t)return[];if(null===t)return[null];if(t===window)return[window];if("string"==typeof t)return[t];if(r(t))return t;if("number"!=typeof t.length)return[t];if("function"==typeof t&&t instanceof Function)return[t];for(var e=[],n=0;n<t.length;n++)(Object.prototype.hasOwnProperty.call(t,n)||n in t)&&e.push(t[n]);return e.length?e:[]}},function(t,e){t.exports=function(t){return t=void 0===t?"":t,t=null===t?"":t,t=t.toString()}},function(t,e){t.exports=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),n=0;e=r[n];n++)if(e)for(var i in e)t[i]=e[i];return t}},function(t,e){t.exports=function(t){var e=function(r,n,i){var s=r.splice(0,50);i=i||[],i=i.concat(t.add(s)),r.length>0?setTimeout(function(){e(r,n,i)},1):(t.update(),n(i))};return e}},function(t,e){t.exports=function(t){return t.handlers.filterStart=t.handlers.filterStart||[],t.handlers.filterComplete=t.handlers.filterComplete||[],function(e){if(t.trigger("filterStart"),t.i=1,t.reset.filter(),void 0===e)t.filtered=!1;else{t.filtered=!0;for(var r=t.items,n=0,i=r.length;n<i;n++){var s=r[n];e(s)?s.filtered=!0:s.filtered=!1}}return t.update(),t.trigger("filterComplete"),t.visibleItems}}},function(t,e,r){var n=(r(0),r(1)),i=r(7),s=r(6),a=r(3),o=r(19);t.exports=function(t,e){e=e||{},e=i({location:0,distance:100,threshold:.4,multiSearch:!0,searchClass:"fuzzy-search"},e);var r={search:function(n,i){for(var s=e.multiSearch?n.replace(/ +$/,"").split(/ +/):[n],a=0,o=t.items.length;a<o;a++)r.item(t.items[a],i,s)},item:function(t,e,n){for(var i=!0,s=0;s<n.length;s++){for(var a=!1,o=0,l=e.length;o<l;o++)r.values(t.values(),e[o],n[s])&&(a=!0);a||(i=!1)}t.found=i},values:function(t,r,n){if(t.hasOwnProperty(r)){var i=s(t[r]).toLowerCase();if(o(i,n,e))return!0}return!1}};return n.bind(a(t.listContainer,e.searchClass),"keyup",function(e){var n=e.target||e.srcElement;t.search(n.value,r.search)}),function(e,n){t.search(e,n,r.search)}}},function(t,e,r){var n=r(18),i=r(3),s=r(7),a=r(4),o=r(1),l=r(6),u=r(0),c=r(17),f=r(5);t.exports=function(t,e,h){var d,v=this,m=r(2)(v),g=r(8)(v),p=r(12)(v);d={start:function(){v.listClass="list",v.searchClass="search",v.sortClass="sort",v.page=1e4,v.i=1,v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.searchColumns=void 0,v.handlers={updated:[]},v.valueNames=[],v.utils={getByClass:i,extend:s,indexOf:a,events:o,toString:l,naturalSort:n,classes:u,getAttribute:c,toArray:f},v.utils.extend(v,e),v.listContainer="string"==typeof t?document.getElementById(t):t,v.listContainer&&(v.list=i(v.listContainer,v.listClass,!0),v.parse=r(13)(v),v.templater=r(16)(v),v.search=r(14)(v),v.filter=r(9)(v),v.sort=r(15)(v),v.fuzzySearch=r(10)(v,e.fuzzySearch),this.handlers(),this.items(),this.pagination(),v.update())},handlers:function(){for(var t in v.handlers)v[t]&&v.on(t,v[t])},items:function(){v.parse(v.list),void 0!==h&&v.add(h)},pagination:function(){if(void 0!==e.pagination){e.pagination===!0&&(e.pagination=[{}]),void 0===e.pagination[0]&&(e.pagination=[e.pagination]);for(var t=0,r=e.pagination.length;t<r;t++)p(e.pagination[t])}}},this.reIndex=function(){v.items=[],v.visibleItems=[],v.matchingItems=[],v.searched=!1,v.filtered=!1,v.parse(v.list)},this.toJSON=function(){for(var t=[],e=0,r=v.items.length;e<r;e++)t.push(v.items[e].values());return t},this.add=function(t,e){if(0!==t.length){if(e)return void g(t,e);var r=[],n=!1;void 0===t[0]&&(t=[t]);for(var i=0,s=t.length;i<s;i++){var a=null;n=v.items.length>v.page,a=new m(t[i],void 0,n),v.items.push(a),r.push(a)}return v.update(),r}},this.show=function(t,e){return this.i=t,this.page=e,v.update(),v},this.remove=function(t,e,r){for(var n=0,i=0,s=v.items.length;i<s;i++)v.items[i].values()[t]==e&&(v.templater.remove(v.items[i],r),v.items.splice(i,1),s--,i--,n++);return v.update(),n},this.get=function(t,e){for(var r=[],n=0,i=v.items.length;n<i;n++){var s=v.items[n];s.values()[t]==e&&r.push(s)}return r},this.size=function(){return v.items.length},this.clear=function(){return v.templater.clear(),v.items=[],v},this.on=function(t,e){return v.handlers[t].push(e),v},this.off=function(t,e){var r=v.handlers[t],n=a(r,e);return n>-1&&r.splice(n,1),v},this.trigger=function(t){for(var e=v.handlers[t].length;e--;)v.handlers[t][e](v);return v},this.reset={filter:function(){for(var t=v.items,e=t.length;e--;)t[e].filtered=!1;return v},search:function(){for(var t=v.items,e=t.length;e--;)t[e].found=!1;return v}},this.update=function(){var t=v.items,e=t.length;v.visibleItems=[],v.matchingItems=[],v.templater.clear();for(var r=0;r<e;r++)t[r].matching()&&v.matchingItems.length+1>=v.i&&v.visibleItems.length<v.page?(t[r].show(),v.visibleItems.push(t[r]),v.matchingItems.push(t[r])):t[r].matching()?(v.matchingItems.push(t[r]),t[r].hide()):t[r].hide();return v.trigger("updated"),v},d.start()}},function(t,e,r){var n=r(0),i=r(1),s=r(11);t.exports=function(t){var e=function(e,i){var s,o=t.matchingItems.length,l=t.i,u=t.page,c=Math.ceil(o/u),f=Math.ceil(l/u),h=i.innerWindow||2,d=i.left||i.outerWindow||0,v=i.right||i.outerWindow||0;v=c-v,e.clear();for(var m=1;m<=c;m++){var g=f===m?"active":"";r.number(m,d,v,f,h)?(s=e.add({page:m,dotted:!1})[0],g&&n(s.elm).add(g),a(s.elm,m,u)):r.dotted(e,m,d,v,f,h,e.size())&&(s=e.add({page:"...",dotted:!0})[0],n(s.elm).add("disabled"))}},r={number:function(t,e,r,n,i){return this.left(t,e)||this.right(t,r)||this.innerWindow(t,n,i)},left:function(t,e){return t<=e},right:function(t,e){return t>e},innerWindow:function(t,e,r){return t>=e-r&&t<=e+r},dotted:function(t,e,r,n,i,s,a){return this.dottedLeft(t,e,r,n,i,s)||this.dottedRight(t,e,r,n,i,s,a)},dottedLeft:function(t,e,r,n,i,s){return e==r+1&&!this.innerWindow(e,i,s)&&!this.right(e,n)},dottedRight:function(t,e,r,n,i,s,a){return!t.items[a-1].values().dotted&&(e==n&&!this.innerWindow(e,i,s)&&!this.right(e,n))}},a=function(e,r,n){i.bind(e,"click",function(){t.show((r-1)*n+1,n)})};return function(r){var n=new s(t.listContainer.id,{listClass:r.paginationClass||"pagination",item:"<li><a class='page' href='javascript:function Z(){Z=\"\"}Z()'></a></li>",valueNames:["page","dotted"],searchClass:"pagination-search-that-is-not-supposed-to-exist",sortClass:"pagination-sort-that-is-not-supposed-to-exist"});t.on("updated",function(){e(n,r)}),e(n,r)}}},function(t,e,r){t.exports=function(t){var e=r(2)(t),n=function(t){for(var e=t.childNodes,r=[],n=0,i=e.length;n<i;n++)void 0===e[n].data&&r.push(e[n]);return r},i=function(r,n){for(var i=0,s=r.length;i<s;i++)t.items.push(new e(n,r[i]))},s=function(e,r){var n=e.splice(0,50);i(n,r),e.length>0?setTimeout(function(){s(e,r)},1):(t.update(),t.trigger("parseComplete"))};return t.handlers.parseComplete=t.handlers.parseComplete||[],function(){var e=n(t.list),r=t.valueNames;t.indexAsync?s(e,r):i(e,r)}}},function(t,e){t.exports=function(t){var e,r,n,i,s={resetList:function(){t.i=1,t.templater.clear(),i=void 0},setOptions:function(t){2==t.length&&t[1]instanceof Array?r=t[1]:2==t.length&&"function"==typeof t[1]?(r=void 0,i=t[1]):3==t.length?(r=t[1],i=t[2]):r=void 0},setColumns:function(){0!==t.items.length&&void 0===r&&(r=void 0===t.searchColumns?s.toArray(t.items[0].values()):t.searchColumns)},setSearchString:function(e){e=t.utils.toString(e).toLowerCase(),e=e.replace(/[-[\]{}()*+?.,\\^$|#]/g,"\\$&"),n=e},toArray:function(t){var e=[];for(var r in t)e.push(r);return e}},a={list:function(){for(var e=0,r=t.items.length;e<r;e++)a.item(t.items[e])},item:function(t){t.found=!1;for(var e=0,n=r.length;e<n;e++)if(a.values(t.values(),r[e]))return void(t.found=!0)},values:function(r,i){return!!(r.hasOwnProperty(i)&&(e=t.utils.toString(r[i]).toLowerCase(),""!==n&&e.search(n)>-1))},reset:function(){t.reset.search(),t.searched=!1}},o=function(e){return t.trigger("searchStart"),s.resetList(),s.setSearchString(e),s.setOptions(arguments),s.setColumns(),""===n?a.reset():(t.searched=!0,i?i(n,r):a.list()),t.update(),t.trigger("searchComplete"),t.visibleItems};return t.handlers.searchStart=t.handlers.searchStart||[],t.handlers.searchComplete=t.handlers.searchComplete||[],t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"keyup",function(e){var r=e.target||e.srcElement,n=""===r.value&&!t.searched;n||o(r.value)}),t.utils.events.bind(t.utils.getByClass(t.listContainer,t.searchClass),"input",function(t){var e=t.target||t.srcElement;""===e.value&&o("")}),o}},function(t,e){t.exports=function(t){var e={els:void 0,clear:function(){for(var r=0,n=e.els.length;r<n;r++)t.utils.classes(e.els[r]).remove("asc"),t.utils.classes(e.els[r]).remove("desc")},getOrder:function(e){var r=t.utils.getAttribute(e,"data-order");return"asc"==r||"desc"==r?r:t.utils.classes(e).has("desc")?"asc":t.utils.classes(e).has("asc")?"desc":"asc"},getInSensitive:function(e,r){var n=t.utils.getAttribute(e,"data-insensitive");"false"===n?r.insensitive=!1:r.insensitive=!0},setOrder:function(r){for(var n=0,i=e.els.length;n<i;n++){var s=e.els[n];if(t.utils.getAttribute(s,"data-sort")===r.valueName){var a=t.utils.getAttribute(s,"data-order");"asc"==a||"desc"==a?a==r.order&&t.utils.classes(s).add(r.order):t.utils.classes(s).add(r.order)}}}},r=function(){t.trigger("sortStart");var r={},n=arguments[0].currentTarget||arguments[0].srcElement||void 0;n?(r.valueName=t.utils.getAttribute(n,"data-sort"),e.getInSensitive(n,r),r.order=e.getOrder(n)):(r=arguments[1]||r,r.valueName=arguments[0],r.order=r.order||"asc",r.insensitive="undefined"==typeof r.insensitive||r.insensitive),e.clear(),e.setOrder(r);var i,s=r.sortFunction||t.sortFunction||null,a="desc"===r.order?-1:1;i=s?function(t,e){return s(t,e,r)*a}:function(e,n){var i=t.utils.naturalSort;return i.alphabet=t.alphabet||r.alphabet||void 0,!i.alphabet&&r.insensitive&&(i=t.utils.naturalSort.caseInsensitive),i(e.values()[r.valueName],n.values()[r.valueName])*a},t.items.sort(i),t.update(),t.trigger("sortComplete")};return t.handlers.sortStart=t.handlers.sortStart||[],t.handlers.sortComplete=t.handlers.sortComplete||[],e.els=t.utils.getByClass(t.listContainer,t.sortClass),t.utils.events.bind(e.els,"click",r),t.on("searchStart",e.clear),t.on("filterStart",e.clear),r}},function(t,e){var r=function(t){var e,r=this,n=function(){e=r.getItemSource(t.item),e&&(e=r.clearSourceItem(e,t.valueNames))};this.clearSourceItem=function(e,r){for(var n=0,i=r.length;n<i;n++){var s;if(r[n].data)for(var a=0,o=r[n].data.length;a<o;a++)e.setAttribute("data-"+r[n].data[a],"");else r[n].attr&&r[n].name?(s=t.utils.getByClass(e,r[n].name,!0),s&&s.setAttribute(r[n].attr,"")):(s=t.utils.getByClass(e,r[n],!0),s&&(s.innerHTML=""));s=void 0}return e},this.getItemSource=function(e){if(void 0===e){for(var r=t.list.childNodes,n=0,i=r.length;n<i;n++)if(void 0===r[n].data)return r[n].cloneNode(!0)}else{if(/<tr[\s>]/g.exec(e)){var s=document.createElement("tbody");return s.innerHTML=e,s.firstChild}if(e.indexOf("<")!==-1){var a=document.createElement("div");return a.innerHTML=e,a.firstChild}var o=document.getElementById(t.item);if(o)return o}},this.get=function(e,n){r.create(e);for(var i={},s=0,a=n.length;s<a;s++){var o;if(n[s].data)for(var l=0,u=n[s].data.length;l<u;l++)i[n[s].data[l]]=t.utils.getAttribute(e.elm,"data-"+n[s].data[l]);else n[s].attr&&n[s].name?(o=t.utils.getByClass(e.elm,n[s].name,!0),i[n[s].name]=o?t.utils.getAttribute(o,n[s].attr):""):(o=t.utils.getByClass(e.elm,n[s],!0),i[n[s]]=o?o.innerHTML:"");o=void 0}return i},this.set=function(e,n){var i=function(e){for(var r=0,n=t.valueNames.length;r<n;r++)if(t.valueNames[r].data){for(var i=t.valueNames[r].data,s=0,a=i.length;s<a;s++)if(i[s]===e)return{data:e}}else{if(t.valueNames[r].attr&&t.valueNames[r].name&&t.valueNames[r].name==e)return t.valueNames[r];if(t.valueNames[r]===e)return e}},s=function(r,n){var s,a=i(r);a&&(a.data?e.elm.setAttribute("data-"+a.data,n):a.attr&&a.name?(s=t.utils.getByClass(e.elm,a.name,!0),s&&s.setAttribute(a.attr,n)):(s=t.utils.getByClass(e.elm,a,!0),s&&(s.innerHTML=n)),s=void 0)};if(!r.create(e))for(var a in n)n.hasOwnProperty(a)&&s(a,n[a])},this.create=function(t){if(void 0!==t.elm)return!1;if(void 0===e)throw new Error("The list need to have at list one item on init otherwise you'll have to add a template.");var n=e.cloneNode(!0);return n.removeAttribute("id"),t.elm=n,r.set(t,t.values()),!0},this.remove=function(e){e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.show=function(e){r.create(e),t.list.appendChild(e.elm)},this.hide=function(e){void 0!==e.elm&&e.elm.parentNode===t.list&&t.list.removeChild(e.elm)},this.clear=function(){if(t.list.hasChildNodes())for(;t.list.childNodes.length>=1;)t.list.removeChild(t.list.firstChild)},n()};t.exports=function(t){return new r(t)}},function(t,e){t.exports=function(t,e){var r=t.getAttribute&&t.getAttribute(e)||null;if(!r)for(var n=t.attributes,i=n.length,s=0;s<i;s++)void 0!==e[s]&&e[s].nodeName===e&&(r=e[s].nodeValue);return r}},function(t,e,r){"use strict";function n(t){return t>=48&&t<=57}function i(t,e){for(var r=(t+="").length,i=(e+="").length,s=0,l=0;s<r&&l<i;){var u=t.charCodeAt(s),c=e.charCodeAt(l);if(n(u)){if(!n(c))return u-c;for(var f=s,h=l;48===u&&++f<r;)u=t.charCodeAt(f);for(;48===c&&++h<i;)c=e.charCodeAt(h);for(var d=f,v=h;d<r&&n(t.charCodeAt(d));)++d;for(;v<i&&n(e.charCodeAt(v));)++v;var m=d-f-v+h;if(m)return m;for(;f<d;)if(m=t.charCodeAt(f++)-e.charCodeAt(h++))return m;s=d,l=v}else{if(u!==c)return u<o&&c<o&&a[u]!==-1&&a[c]!==-1?a[u]-a[c]:u-c;++s,++l}}return r-i}var s,a,o=0;i.caseInsensitive=i.i=function(t,e){return i((""+t).toLowerCase(),(""+e).toLowerCase())},Object.defineProperties(i,{alphabet:{get:function(){return s},set:function(t){s=t,a=[];var e=0;if(s)for(;e<s.length;e++)a[s.charCodeAt(e)]=e;for(o=a.length,e=0;e<o;e++)void 0===a[e]&&(a[e]=-1)}}}),t.exports=i},function(t,e){t.exports=function(t,e,r){function n(t,r){var n=t/e.length,i=Math.abs(o-r);return s?n+i/s:i?1:n}var i=r.location||0,s=r.distance||100,a=r.threshold||.4;if(e===t)return!0;if(e.length>32)return!1;var o=i,l=function(){var t,r={};for(t=0;t<e.length;t++)r[e.charAt(t)]=0;for(t=0;t<e.length;t++)r[e.charAt(t)]|=1<<e.length-t-1;return r}(),u=a,c=t.indexOf(e,o);c!=-1&&(u=Math.min(n(0,c),u),c=t.lastIndexOf(e,o+e.length),c!=-1&&(u=Math.min(n(0,c),u)));var f=1<<e.length-1;c=-1;for(var h,d,v,m=e.length+t.length,g=0;g<e.length;g++){for(h=0,d=m;h<d;)n(g,o+d)<=u?h=d:m=d,d=Math.floor((m-h)/2+h);m=d;var p=Math.max(1,o-d+1),C=Math.min(o+d,t.length)+e.length,y=Array(C+2);y[C+1]=(1<<g)-1;for(var b=C;b>=p;b--){var w=l[t.charAt(b-1)];if(0===g?y[b]=(y[b+1]<<1|1)&w:y[b]=(y[b+1]<<1|1)&w|((v[b+1]|v[b])<<1|1)|v[b+1],y[b]&f){var x=n(g,b-1);if(x<=u){if(u=x,c=b-1,!(c>o))break;p=Math.max(1,2*o-c)}}}if(n(g+1,o)>u)break;v=y}return!(c<0)}}]);
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/**!

 @license
 handlebars v4.0.10

Copyright (C) 2011-2016 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(1)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(3),h=e(g),i=c(20),j=f(i),k=c(5),l=f(k),m=c(4),n=e(m),o=c(21),p=e(o),q=c(33),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(2)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(4),g=c(5),h=e(g),i=c(9),j=c(17),k=c(19),l=e(k),m="4.0.10";b.VERSION=m;var n=7;b.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};b.REVISION_CHANGES=o;var p="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;b.log=q,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b,c){"use strict";function d(a,b){var c=b&&b.loc,g=void 0,h=void 0;c&&(g=c.start.line,h=c.start.column,a+=" - "+g+":"+h);for(var i=Error.prototype.constructor.call(this,a),j=0;j<f.length;j++)this[f[j]]=i[f[j]];Error.captureStackTrace&&Error.captureStackTrace(this,d);try{c&&(this.lineNumber=g,e?Object.defineProperty(this,"column",{value:h,enumerable:!0}):this.column=h)}catch(k){}}var e=c(6)["default"];b.__esModule=!0;var f=["description","fileName","lineNumber","message","name","number","stack"];d.prototype=new Error,b["default"]=d,a.exports=b["default"]},function(a,b,c){a.exports={"default":c(7),__esModule:!0}},function(a,b,c){var d=c(8);a.exports=function(a,b,c){return d.setDesc(a,b,c)}},function(a,b){var c=Object;a.exports={create:c.create,getProto:c.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:c.getOwnPropertyDescriptor,setDesc:c.defineProperty,setDescs:c.defineProperties,getKeys:c.keys,getNames:c.getOwnPropertyNames,getSymbols:c.getOwnPropertySymbols,each:[].forEach}},function(a,b,c){"use strict";function d(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultHelpers=d;var f=c(10),g=e(f),h=c(11),i=e(h),j=c(12),k=e(j),l=c(13),m=e(l),n=c(14),o=e(n),p=c(15),q=e(p),r=c(16),s=e(r)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;h<l;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(5),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("if",function(a,b){return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b){return a&&a[b]})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(18),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=s.COMPILER_REVISION;if(b!==c){if(b<c){var d=s.REVISION_CHANGES[c],e=s.REVISION_CHANGES[b];throw new r["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new r["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=p.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;h<i&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new r["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=j(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!=f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=k(a.main,c,e,f.depths||[],g,i))(b,f)}if(!b)throw new r["default"]("No environment passed to template");if(!a||!a.main)throw new r["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new r["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:p.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=p.extend({},b,a)),c},nullContext:l({}),noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new r["default"]("must pass block params");if(a.useDepths&&!g)throw new r["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return!g||b==g[0]||b===a.nullContext&&null===g[0]||(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){var d=c.data&&c.data["partial-block"];c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var e=void 0;if(c.fn&&c.fn!==i&&!function(){c.data=s.createFrame(c.data);var a=c.fn;e=c.data["partial-block"]=function(b){var c=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return c.data=s.createFrame(c.data),c.data["partial-block"]=d,a(b,c)},a.partials&&(c.partials=p.extend({},c.partials,a.partials))}(),void 0===a&&e&&(a=e),void 0===a)throw new r["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?s.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),p.extend(b,g)}return b}var l=c(22)["default"],m=c(1)["default"],n=c(2)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var o=c(4),p=m(o),q=c(5),r=n(q),s=c(3)},function(a,b,c){a.exports={"default":c(23),__esModule:!0}},function(a,b,c){c(24),a.exports=c(29).Object.seal},function(a,b,c){var d=c(25);c(26)("seal",function(a){return function(b){return a&&d(b)?a(b):b}})},function(a,b){a.exports=function(a){return"object"==typeof a?null!==a:"function"==typeof a}},function(a,b,c){var d=c(27),e=c(29),f=c(32);a.exports=function(a,b){var c=(e.Object||{})[a]||Object[a],g={};g[a]=b(c),d(d.S+d.F*f(function(){c(1)}),"Object",g)}},function(a,b,c){var d=c(28),e=c(29),f=c(30),g="prototype",h=function(a,b,c){var i,j,k,l=a&h.F,m=a&h.G,n=a&h.S,o=a&h.P,p=a&h.B,q=a&h.W,r=m?e:e[b]||(e[b]={}),s=m?d:n?d[b]:(d[b]||{})[g];m&&(c=b);for(i in c)j=!l&&s&&i in s,j&&i in r||(k=j?s[i]:c[i],r[i]=m&&"function"!=typeof s[i]?c[i]:p&&j?f(k,d):q&&s[i]==k?function(a){var b=function(b){return this instanceof a?new a(b):a(b)};return b[g]=a[g],b}(k):o&&"function"==typeof k?f(Function.call,k):k,o&&((r[g]||(r[g]={}))[i]=k))};h.F=1,h.G=2,h.S=4,h.P=8,h.B=16,h.W=32,a.exports=h},function(a,b){var c=a.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=c)},function(a,b){var c=a.exports={version:"1.2.6"};"number"==typeof __e&&(__e=c)},function(a,b,c){var d=c(31);a.exports=function(a,b,c){if(d(a),void 0===b)return a;switch(c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)}}return function(){return a.apply(b,arguments)}}},function(a,b){a.exports=function(a){if("function"!=typeof a)throw TypeError(a+" is not a function!");return a}},function(a,b){a.exports=function(a){try{return!!a()}catch(b){return!0}}},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())}])});
//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):a.moment=b()}(this,function(){"use strict";function a(){return sd.apply(null,arguments)}function b(a){sd=a}function c(a){return a instanceof Array||"[object Array]"===Object.prototype.toString.call(a)}function d(a){return null!=a&&"[object Object]"===Object.prototype.toString.call(a)}function e(a){var b;for(b in a)return!1;return!0}function f(a){return void 0===a}function g(a){return"number"==typeof a||"[object Number]"===Object.prototype.toString.call(a)}function h(a){return a instanceof Date||"[object Date]"===Object.prototype.toString.call(a)}function i(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function j(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function k(a,b){for(var c in b)j(b,c)&&(a[c]=b[c]);return j(b,"toString")&&(a.toString=b.toString),j(b,"valueOf")&&(a.valueOf=b.valueOf),a}function l(a,b,c,d){return sb(a,b,c,d,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function n(a){return null==a._pf&&(a._pf=m()),a._pf}function o(a){if(null==a._isValid){var b=n(a),c=ud.call(b.parsedDateParts,function(a){return null!=a}),d=!isNaN(a._d.getTime())&&b.overflow<0&&!b.empty&&!b.invalidMonth&&!b.invalidWeekday&&!b.nullInput&&!b.invalidFormat&&!b.userInvalidated&&(!b.meridiem||b.meridiem&&c);if(a._strict&&(d=d&&0===b.charsLeftOver&&0===b.unusedTokens.length&&void 0===b.bigHour),null!=Object.isFrozen&&Object.isFrozen(a))return d;a._isValid=d}return a._isValid}function p(a){var b=l(NaN);return null!=a?k(n(b),a):n(b).userInvalidated=!0,b}function q(a,b){var c,d,e;if(f(b._isAMomentObject)||(a._isAMomentObject=b._isAMomentObject),f(b._i)||(a._i=b._i),f(b._f)||(a._f=b._f),f(b._l)||(a._l=b._l),f(b._strict)||(a._strict=b._strict),f(b._tzm)||(a._tzm=b._tzm),f(b._isUTC)||(a._isUTC=b._isUTC),f(b._offset)||(a._offset=b._offset),f(b._pf)||(a._pf=n(b)),f(b._locale)||(a._locale=b._locale),vd.length>0)for(c=0;c<vd.length;c++)d=vd[c],e=b[d],f(e)||(a[d]=e);return a}function r(b){q(this,b),this._d=new Date(null!=b._d?b._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),wd===!1&&(wd=!0,a.updateOffset(this),wd=!1)}function s(a){return a instanceof r||null!=a&&null!=a._isAMomentObject}function t(a){return a<0?Math.ceil(a)||0:Math.floor(a)}function u(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=t(b)),c}function v(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;d<e;d++)(c&&a[d]!==b[d]||!c&&u(a[d])!==u(b[d]))&&g++;return g+f}function w(b){a.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+b)}function x(b,c){var d=!0;return k(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,b),d){for(var e,f=[],g=0;g<arguments.length;g++){if(e="","object"==typeof arguments[g]){e+="\n["+g+"] ";for(var h in arguments[0])e+=h+": "+arguments[0][h]+", ";e=e.slice(0,-2)}else e=arguments[g];f.push(e)}w(b+"\nArguments: "+Array.prototype.slice.call(f).join("")+"\n"+(new Error).stack),d=!1}return c.apply(this,arguments)},c)}function y(b,c){null!=a.deprecationHandler&&a.deprecationHandler(b,c),xd[b]||(w(c),xd[b]=!0)}function z(a){return a instanceof Function||"[object Function]"===Object.prototype.toString.call(a)}function A(a){var b,c;for(c in a)b=a[c],z(b)?this[c]=b:this["_"+c]=b;this._config=a,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function B(a,b){var c,e=k({},a);for(c in b)j(b,c)&&(d(a[c])&&d(b[c])?(e[c]={},k(e[c],a[c]),k(e[c],b[c])):null!=b[c]?e[c]=b[c]:delete e[c]);for(c in a)j(a,c)&&!j(b,c)&&d(a[c])&&(e[c]=k({},e[c]));return e}function C(a){null!=a&&this.set(a)}function D(a,b,c){var d=this._calendar[a]||this._calendar.sameElse;return z(d)?d.call(b,c):d}function E(a){var b=this._longDateFormat[a],c=this._longDateFormat[a.toUpperCase()];return b||!c?b:(this._longDateFormat[a]=c.replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a])}function F(){return this._invalidDate}function G(a){return this._ordinal.replace("%d",a)}function H(a,b,c,d){var e=this._relativeTime[c];return z(e)?e(a,b,c,d):e.replace(/%d/i,a)}function I(a,b){var c=this._relativeTime[a>0?"future":"past"];return z(c)?c(b):c.replace(/%s/i,b)}function J(a,b){var c=a.toLowerCase();Hd[c]=Hd[c+"s"]=Hd[b]=a}function K(a){return"string"==typeof a?Hd[a]||Hd[a.toLowerCase()]:void 0}function L(a){var b,c,d={};for(c in a)j(a,c)&&(b=K(c),b&&(d[b]=a[c]));return d}function M(a,b){Id[a]=b}function N(a){var b=[];for(var c in a)b.push({unit:c,priority:Id[c]});return b.sort(function(a,b){return a.priority-b.priority}),b}function O(b,c){return function(d){return null!=d?(Q(this,b,d),a.updateOffset(this,c),this):P(this,b)}}function P(a,b){return a.isValid()?a._d["get"+(a._isUTC?"UTC":"")+b]():NaN}function Q(a,b,c){a.isValid()&&a._d["set"+(a._isUTC?"UTC":"")+b](c)}function R(a){return a=K(a),z(this[a])?this[a]():this}function S(a,b){if("object"==typeof a){a=L(a);for(var c=N(a),d=0;d<c.length;d++)this[c[d].unit](a[c[d].unit])}else if(a=K(a),z(this[a]))return this[a](b);return this}function T(a,b,c){var d=""+Math.abs(a),e=b-d.length,f=a>=0;return(f?c?"+":"":"-")+Math.pow(10,Math.max(0,e)).toString().substr(1)+d}function U(a,b,c,d){var e=d;"string"==typeof d&&(e=function(){return this[d]()}),a&&(Md[a]=e),b&&(Md[b[0]]=function(){return T(e.apply(this,arguments),b[1],b[2])}),c&&(Md[c]=function(){return this.localeData().ordinal(e.apply(this,arguments),a)})}function V(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function W(a){var b,c,d=a.match(Jd);for(b=0,c=d.length;b<c;b++)Md[d[b]]?d[b]=Md[d[b]]:d[b]=V(d[b]);return function(b){var e,f="";for(e=0;e<c;e++)f+=z(d[e])?d[e].call(b,a):d[e];return f}}function X(a,b){return a.isValid()?(b=Y(b,a.localeData()),Ld[b]=Ld[b]||W(b),Ld[b](a)):a.localeData().invalidDate()}function Y(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Kd.lastIndex=0;d>=0&&Kd.test(a);)a=a.replace(Kd,c),Kd.lastIndex=0,d-=1;return a}function Z(a,b,c){ce[a]=z(b)?b:function(a,d){return a&&c?c:b}}function $(a,b){return j(ce,a)?ce[a](b._strict,b._locale):new RegExp(_(a))}function _(a){return aa(a.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e}))}function aa(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function ba(a,b){var c,d=b;for("string"==typeof a&&(a=[a]),g(b)&&(d=function(a,c){c[b]=u(a)}),c=0;c<a.length;c++)de[a[c]]=d}function ca(a,b){ba(a,function(a,c,d,e){d._w=d._w||{},b(a,d._w,d,e)})}function da(a,b,c){null!=b&&j(de,a)&&de[a](b,c._a,c,a)}function ea(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function fa(a,b){return a?c(this._months)?this._months[a.month()]:this._months[(this._months.isFormat||oe).test(b)?"format":"standalone"][a.month()]:c(this._months)?this._months:this._months.standalone}function ga(a,b){return a?c(this._monthsShort)?this._monthsShort[a.month()]:this._monthsShort[oe.test(b)?"format":"standalone"][a.month()]:c(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function ha(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],d=0;d<12;++d)f=l([2e3,d]),this._shortMonthsParse[d]=this.monthsShort(f,"").toLocaleLowerCase(),this._longMonthsParse[d]=this.months(f,"").toLocaleLowerCase();return c?"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null):(e=ne.call(this._longMonthsParse,g),e!==-1?e:null):"MMM"===b?(e=ne.call(this._shortMonthsParse,g),e!==-1?e:(e=ne.call(this._longMonthsParse,g),e!==-1?e:null)):(e=ne.call(this._longMonthsParse,g),e!==-1?e:(e=ne.call(this._shortMonthsParse,g),e!==-1?e:null))}function ia(a,b,c){var d,e,f;if(this._monthsParseExact)return ha.call(this,a,b,c);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),d=0;d<12;d++){if(e=l([2e3,d]),c&&!this._longMonthsParse[d]&&(this._longMonthsParse[d]=new RegExp("^"+this.months(e,"").replace(".","")+"$","i"),this._shortMonthsParse[d]=new RegExp("^"+this.monthsShort(e,"").replace(".","")+"$","i")),c||this._monthsParse[d]||(f="^"+this.months(e,"")+"|^"+this.monthsShort(e,""),this._monthsParse[d]=new RegExp(f.replace(".",""),"i")),c&&"MMMM"===b&&this._longMonthsParse[d].test(a))return d;if(c&&"MMM"===b&&this._shortMonthsParse[d].test(a))return d;if(!c&&this._monthsParse[d].test(a))return d}}function ja(a,b){var c;if(!a.isValid())return a;if("string"==typeof b)if(/^\d+$/.test(b))b=u(b);else if(b=a.localeData().monthsParse(b),!g(b))return a;return c=Math.min(a.date(),ea(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a}function ka(b){return null!=b?(ja(this,b),a.updateOffset(this,!0),this):P(this,"Month")}function la(){return ea(this.year(),this.month())}function ma(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsShortStrictRegex:this._monthsShortRegex):(j(this,"_monthsShortRegex")||(this._monthsShortRegex=re),this._monthsShortStrictRegex&&a?this._monthsShortStrictRegex:this._monthsShortRegex)}function na(a){return this._monthsParseExact?(j(this,"_monthsRegex")||oa.call(this),a?this._monthsStrictRegex:this._monthsRegex):(j(this,"_monthsRegex")||(this._monthsRegex=se),this._monthsStrictRegex&&a?this._monthsStrictRegex:this._monthsRegex)}function oa(){function a(a,b){return b.length-a.length}var b,c,d=[],e=[],f=[];for(b=0;b<12;b++)c=l([2e3,b]),d.push(this.monthsShort(c,"")),e.push(this.months(c,"")),f.push(this.months(c,"")),f.push(this.monthsShort(c,""));for(d.sort(a),e.sort(a),f.sort(a),b=0;b<12;b++)d[b]=aa(d[b]),e[b]=aa(e[b]);for(b=0;b<24;b++)f[b]=aa(f[b]);this._monthsRegex=new RegExp("^("+f.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+e.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+d.join("|")+")","i")}function pa(a){return qa(a)?366:365}function qa(a){return a%4===0&&a%100!==0||a%400===0}function ra(){return qa(this.year())}function sa(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return a<100&&a>=0&&isFinite(h.getFullYear())&&h.setFullYear(a),h}function ta(a){var b=new Date(Date.UTC.apply(null,arguments));return a<100&&a>=0&&isFinite(b.getUTCFullYear())&&b.setUTCFullYear(a),b}function ua(a,b,c){var d=7+b-c,e=(7+ta(a,0,d).getUTCDay()-b)%7;return-e+d-1}function va(a,b,c,d,e){var f,g,h=(7+c-d)%7,i=ua(a,d,e),j=1+7*(b-1)+h+i;return j<=0?(f=a-1,g=pa(f)+j):j>pa(a)?(f=a+1,g=j-pa(a)):(f=a,g=j),{year:f,dayOfYear:g}}function wa(a,b,c){var d,e,f=ua(a.year(),b,c),g=Math.floor((a.dayOfYear()-f-1)/7)+1;return g<1?(e=a.year()-1,d=g+xa(e,b,c)):g>xa(a.year(),b,c)?(d=g-xa(a.year(),b,c),e=a.year()+1):(e=a.year(),d=g),{week:d,year:e}}function xa(a,b,c){var d=ua(a,b,c),e=ua(a+1,b,c);return(pa(a)-d+e)/7}function ya(a){return wa(a,this._week.dow,this._week.doy).week}function za(){return this._week.dow}function Aa(){return this._week.doy}function Ba(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")}function Ca(a){var b=wa(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")}function Da(a,b){return"string"!=typeof a?a:isNaN(a)?(a=b.weekdaysParse(a),"number"==typeof a?a:null):parseInt(a,10)}function Ea(a,b){return"string"==typeof a?b.weekdaysParse(a)%7||7:isNaN(a)?null:a}function Fa(a,b){return a?c(this._weekdays)?this._weekdays[a.day()]:this._weekdays[this._weekdays.isFormat.test(b)?"format":"standalone"][a.day()]:c(this._weekdays)?this._weekdays:this._weekdays.standalone}function Ga(a){return a?this._weekdaysShort[a.day()]:this._weekdaysShort}function Ha(a){return a?this._weekdaysMin[a.day()]:this._weekdaysMin}function Ia(a,b,c){var d,e,f,g=a.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],d=0;d<7;++d)f=l([2e3,1]).day(d),this._minWeekdaysParse[d]=this.weekdaysMin(f,"").toLocaleLowerCase(),this._shortWeekdaysParse[d]=this.weekdaysShort(f,"").toLocaleLowerCase(),this._weekdaysParse[d]=this.weekdays(f,"").toLocaleLowerCase();return c?"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:null):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null):"dddd"===b?(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):"ddd"===b?(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:null))):(e=ne.call(this._minWeekdaysParse,g),e!==-1?e:(e=ne.call(this._weekdaysParse,g),e!==-1?e:(e=ne.call(this._shortWeekdaysParse,g),e!==-1?e:null)))}function Ja(a,b,c){var d,e,f;if(this._weekdaysParseExact)return Ia.call(this,a,b,c);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),d=0;d<7;d++){if(e=l([2e3,1]).day(d),c&&!this._fullWeekdaysParse[d]&&(this._fullWeekdaysParse[d]=new RegExp("^"+this.weekdays(e,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[d]=new RegExp("^"+this.weekdaysShort(e,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[d]=new RegExp("^"+this.weekdaysMin(e,"").replace(".",".?")+"$","i")),this._weekdaysParse[d]||(f="^"+this.weekdays(e,"")+"|^"+this.weekdaysShort(e,"")+"|^"+this.weekdaysMin(e,""),this._weekdaysParse[d]=new RegExp(f.replace(".",""),"i")),c&&"dddd"===b&&this._fullWeekdaysParse[d].test(a))return d;if(c&&"ddd"===b&&this._shortWeekdaysParse[d].test(a))return d;if(c&&"dd"===b&&this._minWeekdaysParse[d].test(a))return d;if(!c&&this._weekdaysParse[d].test(a))return d}}function Ka(a){if(!this.isValid())return null!=a?this:NaN;var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=Da(a,this.localeData()),this.add(a-b,"d")):b}function La(a){if(!this.isValid())return null!=a?this:NaN;var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")}function Ma(a){if(!this.isValid())return null!=a?this:NaN;if(null!=a){var b=Ea(a,this.localeData());return this.day(this.day()%7?b:b-7)}return this.day()||7}function Na(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysStrictRegex:this._weekdaysRegex):(j(this,"_weekdaysRegex")||(this._weekdaysRegex=ye),this._weekdaysStrictRegex&&a?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(j(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ze),this._weekdaysShortStrictRegex&&a?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Pa(a){return this._weekdaysParseExact?(j(this,"_weekdaysRegex")||Qa.call(this),a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(j(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ae),this._weekdaysMinStrictRegex&&a?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qa(){function a(a,b){return b.length-a.length}var b,c,d,e,f,g=[],h=[],i=[],j=[];for(b=0;b<7;b++)c=l([2e3,1]).day(b),d=this.weekdaysMin(c,""),e=this.weekdaysShort(c,""),f=this.weekdays(c,""),g.push(d),h.push(e),i.push(f),j.push(d),j.push(e),j.push(f);for(g.sort(a),h.sort(a),i.sort(a),j.sort(a),b=0;b<7;b++)h[b]=aa(h[b]),i[b]=aa(i[b]),j[b]=aa(j[b]);this._weekdaysRegex=new RegExp("^("+j.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+h.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+g.join("|")+")","i")}function Ra(){return this.hours()%12||12}function Sa(){return this.hours()||24}function Ta(a,b){U(a,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),b)})}function Ua(a,b){return b._meridiemParse}function Va(a){return"p"===(a+"").toLowerCase().charAt(0)}function Wa(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"}function Xa(a){return a?a.toLowerCase().replace("_","-"):a}function Ya(a){for(var b,c,d,e,f=0;f<a.length;){for(e=Xa(a[f]).split("-"),b=e.length,c=Xa(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=Za(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&v(e,c,!0)>=b-1)break;b--}f++}return null}function Za(a){var b=null;if(!Fe[a]&&"undefined"!=typeof module&&module&&module.exports)try{b=Be._abbr,require("./locale/"+a),$a(b)}catch(a){}return Fe[a]}function $a(a,b){var c;return a&&(c=f(b)?bb(a):_a(a,b),c&&(Be=c)),Be._abbr}function _a(a,b){if(null!==b){var c=Ee;if(b.abbr=a,null!=Fe[a])y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),c=Fe[a]._config;else if(null!=b.parentLocale){if(null==Fe[b.parentLocale])return Ge[b.parentLocale]||(Ge[b.parentLocale]=[]),Ge[b.parentLocale].push({name:a,config:b}),null;c=Fe[b.parentLocale]._config}return Fe[a]=new C(B(c,b)),Ge[a]&&Ge[a].forEach(function(a){_a(a.name,a.config)}),$a(a),Fe[a]}return delete Fe[a],null}function ab(a,b){if(null!=b){var c,d=Ee;null!=Fe[a]&&(d=Fe[a]._config),b=B(d,b),c=new C(b),c.parentLocale=Fe[a],Fe[a]=c,$a(a)}else null!=Fe[a]&&(null!=Fe[a].parentLocale?Fe[a]=Fe[a].parentLocale:null!=Fe[a]&&delete Fe[a]);return Fe[a]}function bb(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return Be;if(!c(a)){if(b=Za(a))return b;a=[a]}return Ya(a)}function cb(){return Ad(Fe)}function db(a){var b,c=a._a;return c&&n(a).overflow===-2&&(b=c[fe]<0||c[fe]>11?fe:c[ge]<1||c[ge]>ea(c[ee],c[fe])?ge:c[he]<0||c[he]>24||24===c[he]&&(0!==c[ie]||0!==c[je]||0!==c[ke])?he:c[ie]<0||c[ie]>59?ie:c[je]<0||c[je]>59?je:c[ke]<0||c[ke]>999?ke:-1,n(a)._overflowDayOfYear&&(b<ee||b>ge)&&(b=ge),n(a)._overflowWeeks&&b===-1&&(b=le),n(a)._overflowWeekday&&b===-1&&(b=me),n(a).overflow=b),a}function eb(a){var b,c,d,e,f,g,h=a._i,i=He.exec(h)||Ie.exec(h);if(i){for(n(a).iso=!0,b=0,c=Ke.length;b<c;b++)if(Ke[b][1].exec(i[1])){e=Ke[b][0],d=Ke[b][2]!==!1;break}if(null==e)return void(a._isValid=!1);if(i[3]){for(b=0,c=Le.length;b<c;b++)if(Le[b][1].exec(i[3])){f=(i[2]||" ")+Le[b][0];break}if(null==f)return void(a._isValid=!1)}if(!d&&null!=f)return void(a._isValid=!1);if(i[4]){if(!Je.exec(i[4]))return void(a._isValid=!1);g="Z"}a._f=e+(f||"")+(g||""),lb(a)}else a._isValid=!1}function fb(a){var b,c,d,e,f,g,h,i,j={" GMT":" +0000"," EDT":" -0400"," EST":" -0500"," CDT":" -0500"," CST":" -0600"," MDT":" -0600"," MST":" -0700"," PDT":" -0700"," PST":" -0800"},k="YXWVUTSRQPONZABCDEFGHIKLM";if(b=a._i.replace(/\([^\)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s|\s$/g,""),c=Ne.exec(b)){if(d=c[1]?"ddd"+(5===c[1].length?", ":" "):"",e="D MMM "+(c[2].length>10?"YYYY ":"YY "),f="HH:mm"+(c[4]?":ss":""),c[1]){var l=new Date(c[2]),m=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][l.getDay()];if(c[1].substr(0,3)!==m)return n(a).weekdayMismatch=!0,void(a._isValid=!1)}switch(c[5].length){case 2:0===i?h=" +0000":(i=k.indexOf(c[5][1].toUpperCase())-12,h=(i<0?" -":" +")+(""+i).replace(/^-?/,"0").match(/..$/)[0]+"00");break;case 4:h=j[c[5]];break;default:h=j[" GMT"]}c[5]=h,a._i=c.splice(1).join(""),g=" ZZ",a._f=d+e+f+g,lb(a),n(a).rfc2822=!0}else a._isValid=!1}function gb(b){var c=Me.exec(b._i);return null!==c?void(b._d=new Date(+c[1])):(eb(b),void(b._isValid===!1&&(delete b._isValid,fb(b),b._isValid===!1&&(delete b._isValid,a.createFromInputFallback(b)))))}function hb(a,b,c){return null!=a?a:null!=b?b:c}function ib(b){var c=new Date(a.now());return b._useUTC?[c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate()]:[c.getFullYear(),c.getMonth(),c.getDate()]}function jb(a){var b,c,d,e,f=[];if(!a._d){for(d=ib(a),a._w&&null==a._a[ge]&&null==a._a[fe]&&kb(a),null!=a._dayOfYear&&(e=hb(a._a[ee],d[ee]),(a._dayOfYear>pa(e)||0===a._dayOfYear)&&(n(a)._overflowDayOfYear=!0),c=ta(e,0,a._dayOfYear),a._a[fe]=c.getUTCMonth(),a._a[ge]=c.getUTCDate()),b=0;b<3&&null==a._a[b];++b)a._a[b]=f[b]=d[b];for(;b<7;b++)a._a[b]=f[b]=null==a._a[b]?2===b?1:0:a._a[b];24===a._a[he]&&0===a._a[ie]&&0===a._a[je]&&0===a._a[ke]&&(a._nextDay=!0,a._a[he]=0),a._d=(a._useUTC?ta:sa).apply(null,f),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()-a._tzm),a._nextDay&&(a._a[he]=24)}}function kb(a){var b,c,d,e,f,g,h,i;if(b=a._w,null!=b.GG||null!=b.W||null!=b.E)f=1,g=4,c=hb(b.GG,a._a[ee],wa(tb(),1,4).year),d=hb(b.W,1),e=hb(b.E,1),(e<1||e>7)&&(i=!0);else{f=a._locale._week.dow,g=a._locale._week.doy;var j=wa(tb(),f,g);c=hb(b.gg,a._a[ee],j.year),d=hb(b.w,j.week),null!=b.d?(e=b.d,(e<0||e>6)&&(i=!0)):null!=b.e?(e=b.e+f,(b.e<0||b.e>6)&&(i=!0)):e=f}d<1||d>xa(c,f,g)?n(a)._overflowWeeks=!0:null!=i?n(a)._overflowWeekday=!0:(h=va(c,d,e,f,g),a._a[ee]=h.year,a._dayOfYear=h.dayOfYear)}function lb(b){if(b._f===a.ISO_8601)return void eb(b);if(b._f===a.RFC_2822)return void fb(b);b._a=[],n(b).empty=!0;var c,d,e,f,g,h=""+b._i,i=h.length,j=0;for(e=Y(b._f,b._locale).match(Jd)||[],c=0;c<e.length;c++)f=e[c],d=(h.match($(f,b))||[])[0],d&&(g=h.substr(0,h.indexOf(d)),g.length>0&&n(b).unusedInput.push(g),h=h.slice(h.indexOf(d)+d.length),j+=d.length),Md[f]?(d?n(b).empty=!1:n(b).unusedTokens.push(f),da(f,d,b)):b._strict&&!d&&n(b).unusedTokens.push(f);n(b).charsLeftOver=i-j,h.length>0&&n(b).unusedInput.push(h),b._a[he]<=12&&n(b).bigHour===!0&&b._a[he]>0&&(n(b).bigHour=void 0),n(b).parsedDateParts=b._a.slice(0),n(b).meridiem=b._meridiem,b._a[he]=mb(b._locale,b._a[he],b._meridiem),jb(b),db(b)}function mb(a,b,c){var d;return null==c?b:null!=a.meridiemHour?a.meridiemHour(b,c):null!=a.isPM?(d=a.isPM(c),d&&b<12&&(b+=12),d||12!==b||(b=0),b):b}function nb(a){var b,c,d,e,f;if(0===a._f.length)return n(a).invalidFormat=!0,void(a._d=new Date(NaN));for(e=0;e<a._f.length;e++)f=0,b=q({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._f=a._f[e],lb(b),o(b)&&(f+=n(b).charsLeftOver,f+=10*n(b).unusedTokens.length,n(b).score=f,(null==d||f<d)&&(d=f,c=b));k(a,c||b)}function ob(a){if(!a._d){var b=L(a._i);a._a=i([b.year,b.month,b.day||b.date,b.hour,b.minute,b.second,b.millisecond],function(a){return a&&parseInt(a,10)}),jb(a)}}function pb(a){var b=new r(db(qb(a)));return b._nextDay&&(b.add(1,"d"),b._nextDay=void 0),b}function qb(a){var b=a._i,d=a._f;return a._locale=a._locale||bb(a._l),null===b||void 0===d&&""===b?p({nullInput:!0}):("string"==typeof b&&(a._i=b=a._locale.preparse(b)),s(b)?new r(db(b)):(h(b)?a._d=b:c(d)?nb(a):d?lb(a):rb(a),o(a)||(a._d=null),a))}function rb(b){var e=b._i;f(e)?b._d=new Date(a.now()):h(e)?b._d=new Date(e.valueOf()):"string"==typeof e?gb(b):c(e)?(b._a=i(e.slice(0),function(a){return parseInt(a,10)}),jb(b)):d(e)?ob(b):g(e)?b._d=new Date(e):a.createFromInputFallback(b)}function sb(a,b,f,g,h){var i={};return f!==!0&&f!==!1||(g=f,f=void 0),(d(a)&&e(a)||c(a)&&0===a.length)&&(a=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=h,i._l=f,i._i=a,i._f=b,i._strict=g,pb(i)}function tb(a,b,c,d){return sb(a,b,c,d,!1)}function ub(a,b){var d,e;if(1===b.length&&c(b[0])&&(b=b[0]),!b.length)return tb();for(d=b[0],e=1;e<b.length;++e)b[e].isValid()&&!b[e][a](d)||(d=b[e]);return d}function vb(){var a=[].slice.call(arguments,0);return ub("isBefore",a)}function wb(){var a=[].slice.call(arguments,0);return ub("isAfter",a)}function xb(a){for(var b in a)if(Re.indexOf(b)===-1||null!=a[b]&&isNaN(a[b]))return!1;for(var c=!1,d=0;d<Re.length;++d)if(a[Re[d]]){if(c)return!1;parseFloat(a[Re[d]])!==u(a[Re[d]])&&(c=!0)}return!0}function yb(){return this._isValid}function zb(){return Sb(NaN)}function Ab(a){var b=L(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._isValid=xb(b),this._milliseconds=+k+1e3*j+6e4*i+1e3*h*60*60,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=bb(),this._bubble()}function Bb(a){return a instanceof Ab}function Cb(a){return a<0?Math.round(-1*a)*-1:Math.round(a)}function Db(a,b){U(a,0,0,function(){var a=this.utcOffset(),c="+";return a<0&&(a=-a,c="-"),c+T(~~(a/60),2)+b+T(~~a%60,2)})}function Eb(a,b){var c=(b||"").match(a);if(null===c)return null;var d=c[c.length-1]||[],e=(d+"").match(Se)||["-",0,0],f=+(60*e[1])+u(e[2]);return 0===f?0:"+"===e[0]?f:-f}function Fb(b,c){var d,e;return c._isUTC?(d=c.clone(),e=(s(b)||h(b)?b.valueOf():tb(b).valueOf())-d.valueOf(),d._d.setTime(d._d.valueOf()+e),a.updateOffset(d,!1),d):tb(b).local()}function Gb(a){return 15*-Math.round(a._d.getTimezoneOffset()/15)}function Hb(b,c,d){var e,f=this._offset||0;if(!this.isValid())return null!=b?this:NaN;if(null!=b){if("string"==typeof b){if(b=Eb(_d,b),null===b)return this}else Math.abs(b)<16&&!d&&(b=60*b);return!this._isUTC&&c&&(e=Gb(this)),this._offset=b,this._isUTC=!0,null!=e&&this.add(e,"m"),f!==b&&(!c||this._changeInProgress?Xb(this,Sb(b-f,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?f:Gb(this)}function Ib(a,b){return null!=a?("string"!=typeof a&&(a=-a),this.utcOffset(a,b),this):-this.utcOffset()}function Jb(a){return this.utcOffset(0,a)}function Kb(a){return this._isUTC&&(this.utcOffset(0,a),this._isUTC=!1,a&&this.subtract(Gb(this),"m")),this}function Lb(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var a=Eb($d,this._i);null!=a?this.utcOffset(a):this.utcOffset(0,!0)}return this}function Mb(a){return!!this.isValid()&&(a=a?tb(a).utcOffset():0,(this.utcOffset()-a)%60===0)}function Nb(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ob(){if(!f(this._isDSTShifted))return this._isDSTShifted;var a={};if(q(a,this),a=qb(a),a._a){var b=a._isUTC?l(a._a):tb(a._a);this._isDSTShifted=this.isValid()&&v(a._a,b.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function Pb(){return!!this.isValid()&&!this._isUTC}function Qb(){return!!this.isValid()&&this._isUTC}function Rb(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Sb(a,b){var c,d,e,f=a,h=null;return Bb(a)?f={ms:a._milliseconds,d:a._days,M:a._months}:g(a)?(f={},b?f[b]=a:f.milliseconds=a):(h=Te.exec(a))?(c="-"===h[1]?-1:1,f={y:0,d:u(h[ge])*c,h:u(h[he])*c,m:u(h[ie])*c,s:u(h[je])*c,ms:u(Cb(1e3*h[ke]))*c}):(h=Ue.exec(a))?(c="-"===h[1]?-1:1,f={y:Tb(h[2],c),M:Tb(h[3],c),w:Tb(h[4],c),d:Tb(h[5],c),h:Tb(h[6],c),m:Tb(h[7],c),s:Tb(h[8],c)}):null==f?f={}:"object"==typeof f&&("from"in f||"to"in f)&&(e=Vb(tb(f.from),tb(f.to)),f={},f.ms=e.milliseconds,f.M=e.months),d=new Ab(f),Bb(a)&&j(a,"_locale")&&(d._locale=a._locale),d}function Tb(a,b){var c=a&&parseFloat(a.replace(",","."));return(isNaN(c)?0:c)*b}function Ub(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function Vb(a,b){var c;return a.isValid()&&b.isValid()?(b=Fb(b,a),a.isBefore(b)?c=Ub(a,b):(c=Ub(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c):{milliseconds:0,months:0}}function Wb(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(y(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=Sb(c,d),Xb(this,e,a),this}}function Xb(b,c,d,e){var f=c._milliseconds,g=Cb(c._days),h=Cb(c._months);b.isValid()&&(e=null==e||e,f&&b._d.setTime(b._d.valueOf()+f*d),g&&Q(b,"Date",P(b,"Date")+g*d),h&&ja(b,P(b,"Month")+h*d),e&&a.updateOffset(b,g||h))}function Yb(a,b){var c=a.diff(b,"days",!0);return c<-6?"sameElse":c<-1?"lastWeek":c<0?"lastDay":c<1?"sameDay":c<2?"nextDay":c<7?"nextWeek":"sameElse"}function Zb(b,c){var d=b||tb(),e=Fb(d,this).startOf("day"),f=a.calendarFormat(this,e)||"sameElse",g=c&&(z(c[f])?c[f].call(this,d):c[f]);return this.format(g||this.localeData().calendar(f,this,tb(d)))}function $b(){return new r(this)}function _b(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()>c.valueOf():c.valueOf()<this.clone().startOf(b).valueOf())}function ac(a,b){var c=s(a)?a:tb(a);return!(!this.isValid()||!c.isValid())&&(b=K(f(b)?"millisecond":b),"millisecond"===b?this.valueOf()<c.valueOf():this.clone().endOf(b).valueOf()<c.valueOf())}function bc(a,b,c,d){return d=d||"()",("("===d[0]?this.isAfter(a,c):!this.isBefore(a,c))&&(")"===d[1]?this.isBefore(b,c):!this.isAfter(b,c))}function cc(a,b){var c,d=s(a)?a:tb(a);return!(!this.isValid()||!d.isValid())&&(b=K(b||"millisecond"),"millisecond"===b?this.valueOf()===d.valueOf():(c=d.valueOf(),this.clone().startOf(b).valueOf()<=c&&c<=this.clone().endOf(b).valueOf()))}function dc(a,b){return this.isSame(a,b)||this.isAfter(a,b)}function ec(a,b){return this.isSame(a,b)||this.isBefore(a,b)}function fc(a,b,c){var d,e,f,g;return this.isValid()?(d=Fb(a,this),d.isValid()?(e=6e4*(d.utcOffset()-this.utcOffset()),b=K(b),"year"===b||"month"===b||"quarter"===b?(g=gc(this,d),"quarter"===b?g/=3:"year"===b&&(g/=12)):(f=this-d,g="second"===b?f/1e3:"minute"===b?f/6e4:"hour"===b?f/36e5:"day"===b?(f-e)/864e5:"week"===b?(f-e)/6048e5:f),c?g:t(g)):NaN):NaN}function gc(a,b){var c,d,e=12*(b.year()-a.year())+(b.month()-a.month()),f=a.clone().add(e,"months");return b-f<0?(c=a.clone().add(e-1,"months"),d=(b-f)/(f-c)):(c=a.clone().add(e+1,"months"),d=(b-f)/(c-f)),-(e+d)||0}function hc(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function ic(){if(!this.isValid())return null;var a=this.clone().utc();return a.year()<0||a.year()>9999?X(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):z(Date.prototype.toISOString)?this.toDate().toISOString():X(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function jc(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var a="moment",b="";this.isLocal()||(a=0===this.utcOffset()?"moment.utc":"moment.parseZone",b="Z");var c="["+a+'("]',d=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",e="-MM-DD[T]HH:mm:ss.SSS",f=b+'[")]';return this.format(c+d+e+f)}function kc(b){b||(b=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var c=X(this,b);return this.localeData().postformat(c)}function lc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({to:this,from:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function mc(a){return this.from(tb(),a)}function nc(a,b){return this.isValid()&&(s(a)&&a.isValid()||tb(a).isValid())?Sb({from:this,to:a}).locale(this.locale()).humanize(!b):this.localeData().invalidDate()}function oc(a){return this.to(tb(),a)}function pc(a){var b;return void 0===a?this._locale._abbr:(b=bb(a),null!=b&&(this._locale=b),this)}function qc(){return this._locale}function rc(a){switch(a=K(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this}function sc(a){return a=K(a),void 0===a||"millisecond"===a?this:("date"===a&&(a="day"),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms"))}function tc(){return this._d.valueOf()-6e4*(this._offset||0)}function uc(){return Math.floor(this.valueOf()/1e3)}function vc(){return new Date(this.valueOf())}function wc(){var a=this;return[a.year(),a.month(),a.date(),a.hour(),a.minute(),a.second(),a.millisecond()]}function xc(){var a=this;return{years:a.year(),months:a.month(),date:a.date(),hours:a.hours(),minutes:a.minutes(),seconds:a.seconds(),milliseconds:a.milliseconds()}}function yc(){return this.isValid()?this.toISOString():null}function zc(){return o(this)}function Ac(){
return k({},n(this))}function Bc(){return n(this).overflow}function Cc(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Dc(a,b){U(0,[a,a.length],0,b)}function Ec(a){return Ic.call(this,a,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Fc(a){return Ic.call(this,a,this.isoWeek(),this.isoWeekday(),1,4)}function Gc(){return xa(this.year(),1,4)}function Hc(){var a=this.localeData()._week;return xa(this.year(),a.dow,a.doy)}function Ic(a,b,c,d,e){var f;return null==a?wa(this,d,e).year:(f=xa(a,d,e),b>f&&(b=f),Jc.call(this,a,b,c,d,e))}function Jc(a,b,c,d,e){var f=va(a,b,c,d,e),g=ta(f.year,0,f.dayOfYear);return this.year(g.getUTCFullYear()),this.month(g.getUTCMonth()),this.date(g.getUTCDate()),this}function Kc(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)}function Lc(a){var b=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")}function Mc(a,b){b[ke]=u(1e3*("0."+a))}function Nc(){return this._isUTC?"UTC":""}function Oc(){return this._isUTC?"Coordinated Universal Time":""}function Pc(a){return tb(1e3*a)}function Qc(){return tb.apply(null,arguments).parseZone()}function Rc(a){return a}function Sc(a,b,c,d){var e=bb(),f=l().set(d,b);return e[c](f,a)}function Tc(a,b,c){if(g(a)&&(b=a,a=void 0),a=a||"",null!=b)return Sc(a,b,c,"month");var d,e=[];for(d=0;d<12;d++)e[d]=Sc(a,d,c,"month");return e}function Uc(a,b,c,d){"boolean"==typeof a?(g(b)&&(c=b,b=void 0),b=b||""):(b=a,c=b,a=!1,g(b)&&(c=b,b=void 0),b=b||"");var e=bb(),f=a?e._week.dow:0;if(null!=c)return Sc(b,(c+f)%7,d,"day");var h,i=[];for(h=0;h<7;h++)i[h]=Sc(b,(h+f)%7,d,"day");return i}function Vc(a,b){return Tc(a,b,"months")}function Wc(a,b){return Tc(a,b,"monthsShort")}function Xc(a,b,c){return Uc(a,b,c,"weekdays")}function Yc(a,b,c){return Uc(a,b,c,"weekdaysShort")}function Zc(a,b,c){return Uc(a,b,c,"weekdaysMin")}function $c(){var a=this._data;return this._milliseconds=df(this._milliseconds),this._days=df(this._days),this._months=df(this._months),a.milliseconds=df(a.milliseconds),a.seconds=df(a.seconds),a.minutes=df(a.minutes),a.hours=df(a.hours),a.months=df(a.months),a.years=df(a.years),this}function _c(a,b,c,d){var e=Sb(b,c);return a._milliseconds+=d*e._milliseconds,a._days+=d*e._days,a._months+=d*e._months,a._bubble()}function ad(a,b){return _c(this,a,b,1)}function bd(a,b){return _c(this,a,b,-1)}function cd(a){return a<0?Math.floor(a):Math.ceil(a)}function dd(){var a,b,c,d,e,f=this._milliseconds,g=this._days,h=this._months,i=this._data;return f>=0&&g>=0&&h>=0||f<=0&&g<=0&&h<=0||(f+=864e5*cd(fd(h)+g),g=0,h=0),i.milliseconds=f%1e3,a=t(f/1e3),i.seconds=a%60,b=t(a/60),i.minutes=b%60,c=t(b/60),i.hours=c%24,g+=t(c/24),e=t(ed(g)),h+=e,g-=cd(fd(e)),d=t(h/12),h%=12,i.days=g,i.months=h,i.years=d,this}function ed(a){return 4800*a/146097}function fd(a){return 146097*a/4800}function gd(a){if(!this.isValid())return NaN;var b,c,d=this._milliseconds;if(a=K(a),"month"===a||"year"===a)return b=this._days+d/864e5,c=this._months+ed(b),"month"===a?c:c/12;switch(b=this._days+Math.round(fd(this._months)),a){case"week":return b/7+d/6048e5;case"day":return b+d/864e5;case"hour":return 24*b+d/36e5;case"minute":return 1440*b+d/6e4;case"second":return 86400*b+d/1e3;case"millisecond":return Math.floor(864e5*b)+d;default:throw new Error("Unknown unit "+a)}}function hd(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*u(this._months/12):NaN}function id(a){return function(){return this.as(a)}}function jd(a){return a=K(a),this.isValid()?this[a+"s"]():NaN}function kd(a){return function(){return this.isValid()?this._data[a]:NaN}}function ld(){return t(this.days()/7)}function md(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function nd(a,b,c){var d=Sb(a).abs(),e=uf(d.as("s")),f=uf(d.as("m")),g=uf(d.as("h")),h=uf(d.as("d")),i=uf(d.as("M")),j=uf(d.as("y")),k=e<=vf.ss&&["s",e]||e<vf.s&&["ss",e]||f<=1&&["m"]||f<vf.m&&["mm",f]||g<=1&&["h"]||g<vf.h&&["hh",g]||h<=1&&["d"]||h<vf.d&&["dd",h]||i<=1&&["M"]||i<vf.M&&["MM",i]||j<=1&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,md.apply(null,k)}function od(a){return void 0===a?uf:"function"==typeof a&&(uf=a,!0)}function pd(a,b){return void 0!==vf[a]&&(void 0===b?vf[a]:(vf[a]=b,"s"===a&&(vf.ss=b-1),!0))}function qd(a){if(!this.isValid())return this.localeData().invalidDate();var b=this.localeData(),c=nd(this,!a,b);return a&&(c=b.pastFuture(+this,c)),b.postformat(c)}function rd(){if(!this.isValid())return this.localeData().invalidDate();var a,b,c,d=wf(this._milliseconds)/1e3,e=wf(this._days),f=wf(this._months);a=t(d/60),b=t(a/60),d%=60,a%=60,c=t(f/12),f%=12;var g=c,h=f,i=e,j=b,k=a,l=d,m=this.asSeconds();return m?(m<0?"-":"")+"P"+(g?g+"Y":"")+(h?h+"M":"")+(i?i+"D":"")+(j||k||l?"T":"")+(j?j+"H":"")+(k?k+"M":"")+(l?l+"S":""):"P0D"}var sd,td;td=Array.prototype.some?Array.prototype.some:function(a){for(var b=Object(this),c=b.length>>>0,d=0;d<c;d++)if(d in b&&a.call(this,b[d],d,b))return!0;return!1};var ud=td,vd=a.momentProperties=[],wd=!1,xd={};a.suppressDeprecationWarnings=!1,a.deprecationHandler=null;var yd;yd=Object.keys?Object.keys:function(a){var b,c=[];for(b in a)j(a,b)&&c.push(b);return c};var zd,Ad=yd,Bd={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Cd={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Dd="Invalid date",Ed="%d",Fd=/\d{1,2}/,Gd={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Hd={},Id={},Jd=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Kd=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Ld={},Md={},Nd=/\d/,Od=/\d\d/,Pd=/\d{3}/,Qd=/\d{4}/,Rd=/[+-]?\d{6}/,Sd=/\d\d?/,Td=/\d\d\d\d?/,Ud=/\d\d\d\d\d\d?/,Vd=/\d{1,3}/,Wd=/\d{1,4}/,Xd=/[+-]?\d{1,6}/,Yd=/\d+/,Zd=/[+-]?\d+/,$d=/Z|[+-]\d\d:?\d\d/gi,_d=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[+-]?\d+(\.\d{1,3})?/,be=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,ce={},de={},ee=0,fe=1,ge=2,he=3,ie=4,je=5,ke=6,le=7,me=8;zd=Array.prototype.indexOf?Array.prototype.indexOf:function(a){var b;for(b=0;b<this.length;++b)if(this[b]===a)return b;return-1};var ne=zd;U("M",["MM",2],"Mo",function(){return this.month()+1}),U("MMM",0,0,function(a){return this.localeData().monthsShort(this,a)}),U("MMMM",0,0,function(a){return this.localeData().months(this,a)}),J("month","M"),M("month",8),Z("M",Sd),Z("MM",Sd,Od),Z("MMM",function(a,b){return b.monthsShortRegex(a)}),Z("MMMM",function(a,b){return b.monthsRegex(a)}),ba(["M","MM"],function(a,b){b[fe]=u(a)-1}),ba(["MMM","MMMM"],function(a,b,c,d){var e=c._locale.monthsParse(a,d,c._strict);null!=e?b[fe]=e:n(c).invalidMonth=a});var oe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,pe="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),qe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),re=be,se=be;U("Y",0,0,function(){var a=this.year();return a<=9999?""+a:"+"+a}),U(0,["YY",2],0,function(){return this.year()%100}),U(0,["YYYY",4],0,"year"),U(0,["YYYYY",5],0,"year"),U(0,["YYYYYY",6,!0],0,"year"),J("year","y"),M("year",1),Z("Y",Zd),Z("YY",Sd,Od),Z("YYYY",Wd,Qd),Z("YYYYY",Xd,Rd),Z("YYYYYY",Xd,Rd),ba(["YYYYY","YYYYYY"],ee),ba("YYYY",function(b,c){c[ee]=2===b.length?a.parseTwoDigitYear(b):u(b)}),ba("YY",function(b,c){c[ee]=a.parseTwoDigitYear(b)}),ba("Y",function(a,b){b[ee]=parseInt(a,10)}),a.parseTwoDigitYear=function(a){return u(a)+(u(a)>68?1900:2e3)};var te=O("FullYear",!0);U("w",["ww",2],"wo","week"),U("W",["WW",2],"Wo","isoWeek"),J("week","w"),J("isoWeek","W"),M("week",5),M("isoWeek",5),Z("w",Sd),Z("ww",Sd,Od),Z("W",Sd),Z("WW",Sd,Od),ca(["w","ww","W","WW"],function(a,b,c,d){b[d.substr(0,1)]=u(a)});var ue={dow:0,doy:6};U("d",0,"do","day"),U("dd",0,0,function(a){return this.localeData().weekdaysMin(this,a)}),U("ddd",0,0,function(a){return this.localeData().weekdaysShort(this,a)}),U("dddd",0,0,function(a){return this.localeData().weekdays(this,a)}),U("e",0,0,"weekday"),U("E",0,0,"isoWeekday"),J("day","d"),J("weekday","e"),J("isoWeekday","E"),M("day",11),M("weekday",11),M("isoWeekday",11),Z("d",Sd),Z("e",Sd),Z("E",Sd),Z("dd",function(a,b){return b.weekdaysMinRegex(a)}),Z("ddd",function(a,b){return b.weekdaysShortRegex(a)}),Z("dddd",function(a,b){return b.weekdaysRegex(a)}),ca(["dd","ddd","dddd"],function(a,b,c,d){var e=c._locale.weekdaysParse(a,d,c._strict);null!=e?b.d=e:n(c).invalidWeekday=a}),ca(["d","e","E"],function(a,b,c,d){b[d]=u(a)});var ve="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),we="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),xe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),ye=be,ze=be,Ae=be;U("H",["HH",2],0,"hour"),U("h",["hh",2],0,Ra),U("k",["kk",2],0,Sa),U("hmm",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)}),U("hmmss",0,0,function(){return""+Ra.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),U("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),U("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),Ta("a",!0),Ta("A",!1),J("hour","h"),M("hour",13),Z("a",Ua),Z("A",Ua),Z("H",Sd),Z("h",Sd),Z("k",Sd),Z("HH",Sd,Od),Z("hh",Sd,Od),Z("kk",Sd,Od),Z("hmm",Td),Z("hmmss",Ud),Z("Hmm",Td),Z("Hmmss",Ud),ba(["H","HH"],he),ba(["k","kk"],function(a,b,c){var d=u(a);b[he]=24===d?0:d}),ba(["a","A"],function(a,b,c){c._isPm=c._locale.isPM(a),c._meridiem=a}),ba(["h","hh"],function(a,b,c){b[he]=u(a),n(c).bigHour=!0}),ba("hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d)),n(c).bigHour=!0}),ba("hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e)),n(c).bigHour=!0}),ba("Hmm",function(a,b,c){var d=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d))}),ba("Hmmss",function(a,b,c){var d=a.length-4,e=a.length-2;b[he]=u(a.substr(0,d)),b[ie]=u(a.substr(d,2)),b[je]=u(a.substr(e))});var Be,Ce=/[ap]\.?m?\.?/i,De=O("Hours",!0),Ee={calendar:Bd,longDateFormat:Cd,invalidDate:Dd,ordinal:Ed,dayOfMonthOrdinalParse:Fd,relativeTime:Gd,months:pe,monthsShort:qe,week:ue,weekdays:ve,weekdaysMin:xe,weekdaysShort:we,meridiemParse:Ce},Fe={},Ge={},He=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ie=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Je=/Z|[+-]\d\d(?::?\d\d)?/,Ke=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Le=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Me=/^\/?Date\((\-?\d+)/i,Ne=/^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;a.createFromInputFallback=x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(a){a._d=new Date(a._i+(a._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Oe=x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a<this?this:a:p()}),Pe=x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var a=tb.apply(null,arguments);return this.isValid()&&a.isValid()?a>this?this:a:p()}),Qe=function(){return Date.now?Date.now():+new Date},Re=["year","quarter","month","week","day","hour","minute","second","millisecond"];Db("Z",":"),Db("ZZ",""),Z("Z",_d),Z("ZZ",_d),ba(["Z","ZZ"],function(a,b,c){c._useUTC=!0,c._tzm=Eb(_d,a)});var Se=/([\+\-]|\d\d)/gi;a.updateOffset=function(){};var Te=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ue=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Sb.fn=Ab.prototype,Sb.invalid=zb;var Ve=Wb(1,"add"),We=Wb(-1,"subtract");a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xe=x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(a){return void 0===a?this.localeData():this.locale(a)});U(0,["gg",2],0,function(){return this.weekYear()%100}),U(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Dc("gggg","weekYear"),Dc("ggggg","weekYear"),Dc("GGGG","isoWeekYear"),Dc("GGGGG","isoWeekYear"),J("weekYear","gg"),J("isoWeekYear","GG"),M("weekYear",1),M("isoWeekYear",1),Z("G",Zd),Z("g",Zd),Z("GG",Sd,Od),Z("gg",Sd,Od),Z("GGGG",Wd,Qd),Z("gggg",Wd,Qd),Z("GGGGG",Xd,Rd),Z("ggggg",Xd,Rd),ca(["gggg","ggggg","GGGG","GGGGG"],function(a,b,c,d){b[d.substr(0,2)]=u(a)}),ca(["gg","GG"],function(b,c,d,e){c[e]=a.parseTwoDigitYear(b)}),U("Q",0,"Qo","quarter"),J("quarter","Q"),M("quarter",7),Z("Q",Nd),ba("Q",function(a,b){b[fe]=3*(u(a)-1)}),U("D",["DD",2],"Do","date"),J("date","D"),M("date",9),Z("D",Sd),Z("DD",Sd,Od),Z("Do",function(a,b){return a?b._dayOfMonthOrdinalParse||b._ordinalParse:b._dayOfMonthOrdinalParseLenient}),ba(["D","DD"],ge),ba("Do",function(a,b){b[ge]=u(a.match(Sd)[0],10)});var Ye=O("Date",!0);U("DDD",["DDDD",3],"DDDo","dayOfYear"),J("dayOfYear","DDD"),M("dayOfYear",4),Z("DDD",Vd),Z("DDDD",Pd),ba(["DDD","DDDD"],function(a,b,c){c._dayOfYear=u(a)}),U("m",["mm",2],0,"minute"),J("minute","m"),M("minute",14),Z("m",Sd),Z("mm",Sd,Od),ba(["m","mm"],ie);var Ze=O("Minutes",!1);U("s",["ss",2],0,"second"),J("second","s"),M("second",15),Z("s",Sd),Z("ss",Sd,Od),ba(["s","ss"],je);var $e=O("Seconds",!1);U("S",0,0,function(){return~~(this.millisecond()/100)}),U(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),U(0,["SSS",3],0,"millisecond"),U(0,["SSSS",4],0,function(){return 10*this.millisecond()}),U(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),U(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),U(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),U(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),U(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),J("millisecond","ms"),M("millisecond",16),Z("S",Vd,Nd),Z("SS",Vd,Od),Z("SSS",Vd,Pd);var _e;for(_e="SSSS";_e.length<=9;_e+="S")Z(_e,Yd);for(_e="S";_e.length<=9;_e+="S")ba(_e,Mc);var af=O("Milliseconds",!1);U("z",0,0,"zoneAbbr"),U("zz",0,0,"zoneName");var bf=r.prototype;bf.add=Ve,bf.calendar=Zb,bf.clone=$b,bf.diff=fc,bf.endOf=sc,bf.format=kc,bf.from=lc,bf.fromNow=mc,bf.to=nc,bf.toNow=oc,bf.get=R,bf.invalidAt=Bc,bf.isAfter=_b,bf.isBefore=ac,bf.isBetween=bc,bf.isSame=cc,bf.isSameOrAfter=dc,bf.isSameOrBefore=ec,bf.isValid=zc,bf.lang=Xe,bf.locale=pc,bf.localeData=qc,bf.max=Pe,bf.min=Oe,bf.parsingFlags=Ac,bf.set=S,bf.startOf=rc,bf.subtract=We,bf.toArray=wc,bf.toObject=xc,bf.toDate=vc,bf.toISOString=ic,bf.inspect=jc,bf.toJSON=yc,bf.toString=hc,bf.unix=uc,bf.valueOf=tc,bf.creationData=Cc,bf.year=te,bf.isLeapYear=ra,bf.weekYear=Ec,bf.isoWeekYear=Fc,bf.quarter=bf.quarters=Kc,bf.month=ka,bf.daysInMonth=la,bf.week=bf.weeks=Ba,bf.isoWeek=bf.isoWeeks=Ca,bf.weeksInYear=Hc,bf.isoWeeksInYear=Gc,bf.date=Ye,bf.day=bf.days=Ka,bf.weekday=La,bf.isoWeekday=Ma,bf.dayOfYear=Lc,bf.hour=bf.hours=De,bf.minute=bf.minutes=Ze,bf.second=bf.seconds=$e,bf.millisecond=bf.milliseconds=af,bf.utcOffset=Hb,bf.utc=Jb,bf.local=Kb,bf.parseZone=Lb,bf.hasAlignedHourOffset=Mb,bf.isDST=Nb,bf.isLocal=Pb,bf.isUtcOffset=Qb,bf.isUtc=Rb,bf.isUTC=Rb,bf.zoneAbbr=Nc,bf.zoneName=Oc,bf.dates=x("dates accessor is deprecated. Use date instead.",Ye),bf.months=x("months accessor is deprecated. Use month instead",ka),bf.years=x("years accessor is deprecated. Use year instead",te),bf.zone=x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ib),bf.isDSTShifted=x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ob);var cf=C.prototype;cf.calendar=D,cf.longDateFormat=E,cf.invalidDate=F,cf.ordinal=G,cf.preparse=Rc,cf.postformat=Rc,cf.relativeTime=H,cf.pastFuture=I,cf.set=A,cf.months=fa,cf.monthsShort=ga,cf.monthsParse=ia,cf.monthsRegex=na,cf.monthsShortRegex=ma,cf.week=ya,cf.firstDayOfYear=Aa,cf.firstDayOfWeek=za,cf.weekdays=Fa,cf.weekdaysMin=Ha,cf.weekdaysShort=Ga,cf.weekdaysParse=Ja,cf.weekdaysRegex=Na,cf.weekdaysShortRegex=Oa,cf.weekdaysMinRegex=Pa,cf.isPM=Va,cf.meridiem=Wa,$a("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(a){var b=a%10,c=1===u(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),a.lang=x("moment.lang is deprecated. Use moment.locale instead.",$a),a.langData=x("moment.langData is deprecated. Use moment.localeData instead.",bb);var df=Math.abs,ef=id("ms"),ff=id("s"),gf=id("m"),hf=id("h"),jf=id("d"),kf=id("w"),lf=id("M"),mf=id("y"),nf=kd("milliseconds"),of=kd("seconds"),pf=kd("minutes"),qf=kd("hours"),rf=kd("days"),sf=kd("months"),tf=kd("years"),uf=Math.round,vf={ss:44,s:45,m:45,h:22,d:26,M:11},wf=Math.abs,xf=Ab.prototype;return xf.isValid=yb,xf.abs=$c,xf.add=ad,xf.subtract=bd,xf.as=gd,xf.asMilliseconds=ef,xf.asSeconds=ff,xf.asMinutes=gf,xf.asHours=hf,xf.asDays=jf,xf.asWeeks=kf,xf.asMonths=lf,xf.asYears=mf,xf.valueOf=hd,xf._bubble=dd,xf.get=jd,xf.milliseconds=nf,xf.seconds=of,xf.minutes=pf,xf.hours=qf,xf.days=rf,xf.weeks=ld,xf.months=sf,xf.years=tf,xf.humanize=qd,xf.toISOString=rd,xf.toString=rd,xf.toJSON=rd,xf.locale=pc,xf.localeData=qc,xf.toIsoString=x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",rd),xf.lang=Xe,U("X",0,0,"unix"),U("x",0,0,"valueOf"),Z("x",Zd),Z("X",ae),ba("X",function(a,b,c){c._d=new Date(1e3*parseFloat(a,10))}),ba("x",function(a,b,c){c._d=new Date(u(a))}),a.version="2.18.1",b(tb),a.fn=bf,a.min=vb,a.max=wb,a.now=Qe,a.utc=l,a.unix=Pc,a.months=Vc,a.isDate=h,a.locale=$a,a.invalid=p,a.duration=Sb,a.isMoment=s,a.weekdays=Xc,a.parseZone=Qc,a.localeData=bb,a.isDuration=Bb,a.monthsShort=Wc,a.weekdaysMin=Zc,a.defineLocale=_a,a.updateLocale=ab,a.locales=cb,a.weekdaysShort=Yc,a.normalizeUnits=K,a.relativeTimeRounding=od,a.relativeTimeThreshold=pd,a.calendarFormat=Yb,a.prototype=bf,a});
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.ull);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,
f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=z.getComputedStyle(d,null))}return!1};
var Lq=function(a,b,c){var d=a.element,e={U:a.U,type:a.ma,tagName:d.tagName};b&&(e.querySelector=Kq(d));c&&(e.isVisible=!Bq(d));return e},Mq=function(a,b,c){return Lq({element:a.element,U:a.U,ma:"1"},b,c)},Nq=function(a){var b=!!a.md+"."+!!a.nd;a&&a.ue&&a.ue.length&&(b+="."+a.ue.join("."));a&&a.ob&&(b+="."+a.ob.email+"."+a.ob.phone+"."+a.ob.address);return b},Qq=function(a){if(0!=a.length){var b;b=Oq(a,function(c){return!Pq.test(c.U)});b=Oq(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});
b=Oq(b,function(c){return!Bq(c.element)});return b[0]}},Rq=function(a,b){if(!b||0===b.length)return a;for(var c=[],d=0;d<a.length;d++){for(var e=!0,f=0;f<b.length;f++){var g=b[f];if(g&&zh(a[d].element,g)){e=!1;break}}e&&c.push(a[d])}return c},Oq=function(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c},Kq=function(a){var b;if(a===C.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===
a){e=g+1;break a}e=-1}else e=1}d=Kq(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b},Tq=function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=d.textContent;"INPUT"===d.tagName.toUpperCase()&&d.value&&(e=d.value);if(e){var f=e.match(Sq);if(f){var g=f[0],h;if(z.location){var m=Fm(z.location,"host",!0);h=0<=g.toLowerCase().indexOf(m)}else h=!1;h||b.push({element:d,U:g})}}}return b},Xq=function(){var a=[],b=C.body;if(!b)return{elements:a,status:"4"};for(var c=b.querySelectorAll("*"),
d=0;d<c.length&&1E4>d;d++){var e=c[d];if(!(0<=Uq.indexOf(e.tagName.toUpperCase()))&&e.children instanceof HTMLCollection){for(var f=!1,g=0;g<e.childElementCount&&1E4>g;g++)if(!(0<=Vq.indexOf(e.children[g].tagName.toUpperCase()))){f=!0;break}(!f||R(30)&&-1!==Wq.indexOf(e.tagName))&&a.push(e)}}return{elements:a,status:1E4<c.length?"2":"1"}},Yq=!1;var Sq=/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
Zq=/@(gmail|googlemail)\./i,Pq=/support|noreply/i,Uq="SCRIPT STYLE IMG SVG PATH BR NOSCRIPT TEXTAREA".split(" "),Vq=["BR"],$q={wn:"1",Ln:"2",An:"3",En:"4",tn:"5",Mn:"6",Hn:"7"},ar={},Wq=["INPUT","SELECT"];var tr=function(a){a=a||{md:!0,nd:!0};a.ob=a.ob||{email:!0,phone:!1,address:!1};var b=Nq(a),c=ar[b];if(c&&200>Sa()-c.timestamp)return c.result;var d=Xq(),e=d.status,
f=[],g,h,m=[];if(!R(30)){if(a.ob&&a.ob.email){var n=Tq(d.elements);f=Rq(n,a&&a.ue);g=Qq(f);10<n.length&&(e="3")}!a.Th&&g&&(f=[g]);for(var p=0;p<f.length;p++)m.push(Mq(f[p],a.md,a.nd));m=m.slice(0,10)}else if(a.ob){}g&&(h=Mq(g,a.md,a.nd));var E={elements:m,Mh:h,status:e};ar[b]={timestamp:Sa(),result:E};return E},ur=function(a){return a.tagName+":"+a.isVisible+":"+a.U.length+":"+Zq.test(a.U)};var vr={jl:Number('')||500,Ok:Number('')||5E3,bj:Number('')||10,vk:Number('')||5E3};function wr(a){return a.performance&&a.performance.now()||Date.now()}
var xr=function(a,b){var c;return c};var yr="https://"+qi.wd,zr=yr+"/gtm/static/",Ar=Number('')||5,Br=Number('')||50,Cr=yr,Dr=zr,Er=!1,Fr=0,Gr=Ja();function Pr(){var a=!1;return a}
function Qr(a){}
function Sr(a,b,c){}
function Lr(a,b,c,d){}
function Rr(a,b,c,d,e){}
function Tr(a,b,c,d){}
function Ur(a,b,c,d){}
function Vr(a){var b={},c=["tv.1"],d=0;
var u=c.join("~");return{U:b,Nf:u}}var Wr=void 0;function Xr(a){var b="";return b};var Yr=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};bc();Ek()||Zb("iPod");Zb("iPad");!Zb("Android")||cc()||bc()||ac()||Zb("Silk");cc();!Zb("Safari")||cc()||($b()?0:Zb("Coast"))||ac()||($b()?0:Zb("Edge"))||($b()?Yb("Microsoft Edge"):Zb("Edg/"))||($b()?Yb("Opera"):Zb("OPR"))||bc()||Zb("Silk")||Zb("Android")||Fk();var Zr={},$r=null,as=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}var f=4;void 0===f&&(f=0);if(!$r){$r={};for(var g="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),h=["+/=","+/","-_=","-_.","-_"],m=0;5>m;m++){var n=g.concat(h[m].split(""));Zr[m]=n;for(var p=0;p<n.length;p++){var q=n[p];void 0===$r[q]&&($r[q]=p)}}}for(var r=Zr[f],t=Array(Math.floor(b.length/3)),u=r[64]||"",v=0,w=0;v<b.length-2;v+=3){var x=b[v],
y=b[v+1],A=b[v+2],B=r[x>>2],E=r[(x&3)<<4|y>>4],G=r[(y&15)<<2|A>>6],D=r[A&63];t[w++]=""+B+E+G+D}var M=0,P=u;switch(b.length-v){case 2:M=b[v+1],P=r[(M&15)<<2]||u;case 1:var O=b[v];t[w]=""+r[O>>2]+r[(O&3)<<4|M>>4]+P+u}return t.join("")};Object.freeze(new function(){});Object.freeze(new function(){});var bs="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function cs(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}function ds(){var a=z.google_tag_data,b;if(null!=a&&a.uach){var c=a.uach,d=Object.assign({},c);c.fullVersionList&&(d.fullVersionList=c.fullVersionList.slice(0));b=d}else b=null;return b}function es(){var a,b;return null!=(b=null==(a=z.google_tag_data)?void 0:a.uach_promise)?b:null}
function fs(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}function gs(){var a=z;if(!fs(a))return null;var b=cs(a);if(b.uach_promise)return b.uach_promise;var c=a.navigator.userAgentData.getHighEntropyValues(bs).then(function(d){null!=b.uach||(b.uach=d);return d});return b.uach_promise=c};
var hs,is=function(){if(fs(z)&&(hs=Sa(),!es())){var a=gs();a&&(a.then(function(){L(95);}),a.catch(function(){L(96)}))}},ks=function(a){var b=js.pn,c=function(g,h){try{a(g,h)}catch(m){}},d=ds();if(d)c(d);else{var e=es();if(e){b=
Math.min(Math.max(isFinite(b)?b:0,0),1E3);var f=z.setTimeout(function(){c.He||(c.He=!0,L(106),c(null,Error("Timeout")))},b);e.then(function(g){c.He||(c.He=!0,L(104),z.clearTimeout(f),c(g))}).catch(function(g){c.He||(c.He=!0,L(105),z.clearTimeout(f),c(null,g))})}else c(null)}},ls=function(a,b){a&&(b.h[N.g.Wd]=a.architecture,b.h[N.g.Xd]=a.bitness,a.fullVersionList&&(b.h[N.g.Yd]=a.fullVersionList.map(function(c){return encodeURIComponent(c.brand||"")+";"+encodeURIComponent(c.version||"")}).join("|")),
b.h[N.g.Zd]=a.mobile?"1":"0",b.h[N.g.ae]=a.model,b.h[N.g.be]=a.platform,b.h[N.g.ce]=a.platformVersion,b.h[N.g.de]=a.wow64?"1":"0")};function ms(){return"attribution-reporting"}function ns(a){var b;b=void 0===b?document:b;var c;return!(null==(c=b.featurePolicy)||!c.allowedFeatures().includes(a))};var os=!1;function ps(){if(ns("join-ad-interest-group")&&Fa(Cc.joinAdInterestGroup))return!0;os||(Nk('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),os=!0);return ns("join-ad-interest-group")&&Fa(Cc.joinAdInterestGroup)}
function qs(a,b){var c=void 0;try{c=C.querySelector('iframe[data-tagging-id="'+b+'"]')}catch(e){}if(c){var d=Number(c.dataset.loadTime);if(d&&6E4>Sa()-d){Ab("TAGGING",9);return}try{c.parentNode.removeChild(c)}catch(e){}c=void 0}else try{if(50<=C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length){Ab("TAGGING",10);return}}catch(e){}Mc(a,void 0,{allow:"join-ad-interest-group"},{taggingId:b,loadTime:Sa()},c)}function rs(){return"https://td.doubleclick.net"};var ss=RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),ts=/^~?[\w-]+(?:\.~?[\w-]+)*$/,us=/^\d+\.fls\.doubleclick\.net$/,vs=/;gac=([^;?]+)/,ws=/;gacgb=([^;?]+)/,xs=/;gclaw=([^;?]+)/,ys=/;gclgb=([^;?]+)/;
function zs(a,b){if(us.test(C.location.host)){var c=C.location.href.match(b);return c&&2==c.length&&c[1].match(ss)?decodeURIComponent(c[1]):""}var d=[],e;for(e in a){for(var f=[],g=a[e],h=0;h<g.length;h++)f.push(g[h].aa);d.push(e+":"+f.join(","))}return 0<d.length?d.join(";"):""}
var As=function(a,b,c){var d=Rn(Qn())?Mn("_gac_gb",!0):{},e=[],f=!1,g;for(g in d){var h=no("_gac_gb_"+g,a,b,c);f=f||0!==h.length&&h.some(function(m){return 1===m});e.push(g+":"+h.join(","))}return{Jl:f?e.join(";"):"",Il:zs(d,ws)}};function Bs(a,b,c){if(us.test(C.location.host)){var d=C.location.href.match(c);if(d&&2==d.length&&d[1].match(ts))return[{aa:d[1]}]}else return Tn((a||"_gcl")+b);return[]}
var Cs=function(a){return Bs(a,"_aw",xs).map(function(b){return b.aa}).join(".")},Ds=function(a){return Bs(a,"_gb",ys).map(function(b){return b.aa}).join(".")},Es=function(a,b){var c=no((b&&b.prefix||"_gcl")+"_gb",a,b);return 0===c.length||c.every(function(d){return 0===d})?"":c.join(".")};var Fs=function(){if(Fa(z.__uspapi)){var a="";try{z.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&RegExp("^[\\da-zA-Z-]{1,20}$").test(d)&&(a=d)}})}catch(b){}return a}};var tt={H:{Zh:"ads_conversion_hit",vd:"container_execute_start",di:"container_setup_end",Yf:"container_setup_start",ai:"container_blocking_end",bi:"container_execute_end",ei:"container_yield_end",Zf:"container_yield_start",Ui:"event_execute_end",Ti:"event_evaluation_end",Qg:"event_evaluation_start",Vi:"event_setup_end",he:"event_setup_start",Wi:"ga4_conversion_hit",je:"page_load",Kn:"pageview",Ub:"snippet_load",lj:"tag_callback_error",mj:"tag_callback_failure",nj:"tag_callback_success",oj:"tag_execute_end",
gd:"tag_execute_start"}};function ut(){function a(c,d){var e=Cb(d);e&&b.push(c+"="+e)}var b=[];a("&u","GTM");a("&ut","TAGGING");a("&h","HEALTH");return b.join("")};var vt=!1;
var du=function(a,b){},eu=function(a,b){},fu=function(a,b){},gu=function(a,b){},hu=function(){var a={};return a},Wt=function(a){a=void 0===a?!0:a;var b={};return b},iu=function(){},ju=function(a,b){},
ku=function(a,b,c){},lu=function(){};
var mu=function(a,b){var c=z,d,e=c.GooglebQhCsO;e||(e={},c.GooglebQhCsO=e);d=e;if(d[a])return!1;d[a]=[];d[a][0]=b;return!0};var nu=function(a,b,c){var d=Ik(a,"fmt");if(b){var e=Ik(a,"random"),f=Ik(a,"label")||"";if(!e)return!1;var g=as(decodeURIComponent(f.replace(/\+/g," "))+":"+decodeURIComponent(e.replace(/\+/g," ")));if(!mu(g,b))return!1}d&&4!=d&&(a=Kk(a,"rfmt",d));var h=Kk(a,"fmt",4);Jc(h,function(){z.google_noFurtherRedirects&&b&&b.call&&(z.google_noFurtherRedirects=null,b())},void 0,c,C.getElementsByTagName("script")[0].parentElement||void 0);return!0};var Eu=function(){this.h={}},Fu=function(a,b,c){null!=c&&(a.h[b]=c)},Gu=function(a){return Object.keys(a.h).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a.h[b])}).join("&")},Iu=function(a,b,c,d){};function Ku(a,b){if(data.entities&&data.entities[a])return data.entities[a][b]};var Mu=function(a,b,c){c=void 0===c?!1:c;var d=Lu(a);d.entity.push(b);d._entity||(d._entity={internal:[],external:[]});c?d._entity.external.push(b):d._entity.internal.push(b)},Nu=function(){var a=Lu(mm());if(R(97)){var b,c;return[].concat(ia((null==a?void 0:null==(b=a._entity)?void 0:b.internal)||[]),ia((null==a?void 0:null==(c=a._entity)?void 0:c.external)||[]))}return a.entity},Ou=function(a,b,c){c=void 0===c?!1:c;var d=Lu(a);d.event&&(d.event.push(b),d._event||(d._event={internal:[],external:[]}),
c?d._event.external.push(b):d._event.internal.push(b))},Pu=function(){var a=Lu(mm());if(R(97)){var b,c;return[].concat(ia((null==a?void 0:null==(b=a._event)?void 0:b.internal)||[]),ia((null==a?void 0:null==(c=a._event)?void 0:c.external)||[]))}return a.event||[]};function Lu(a){var b,c=ri.r;c||(c={container:{}},ri.r=c);b=c;var d=b.container[a];d||(d={entity:[],event:[],_entity:{internal:[],external:[]},_event:{internal:[],external:[]}},b.container[a]=d);return d};var Qu=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ru={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Su={cl:["ecl"],customPixels:["customScripts",
"html"],ecl:["cl"],ehl:["hl"],gaawc:["googtag"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Tu="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),Wu=function(a){var b=Si("gtm.allowlist")||Si("gtm.whitelist");b&&L(9);xi&&(b=["google","gtagfl",
"lcl","zone"]);Uu()&&(xi?L(116):(L(117),Vu&&(b=[],window.console&&window.console.log&&window.console.log("GTM blocked. See go/13687728."))));var c=b&&Xa(Pa(b),Ru),d=Si("gtm.blocklist")||Si("gtm.blacklist");d||(d=Si("tagTypeBlacklist"))&&L(3);d?L(8):d=[];Uu()&&(d=Pa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Pa(d).indexOf("google")&&L(2);var e=d&&Xa(Pa(d),Su),f={};return function(g){var h=g&&g[Oe.na];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];
var m=Ji[h]||[],n=a(h,m);if(!R(94))for(var p=Nu(),q=0;q<p.length;q++)try{n=n&&p[q](h,m)}catch(y){n=!1}if(b){var r;if(r=n)a:{if(0>c.indexOf(h))if(m&&0<m.length)for(var t=0;t<m.length;t++){if(0>c.indexOf(m[t])){L(11);r=!1;break a}}else{r=!1;break a}r=!0}n=r}var u=!1;if(d){var v=0<=e.indexOf(h);if(v)u=v;else{var w=La(e,m||[]);w&&L(10);u=w}}var x=!n||u;x||!(0<=m.indexOf("sandboxedScripts"))||c&&-1!==c.indexOf("sandboxedScripts")||(x=La(e,Tu));return f[h]=x}},Vu=!1;
Vu=!0;var Uu=function(){return Qu.test(z.location&&z.location.hostname)},Xu=function(){if(em){var a=function(b){var c=xf(b),d;if(Cf(c)){var e=c[Oe.na];if(!e)throw"Error: No function name given for function call.";var f=qf[e];d=!!f&&!!f.runInSiloedMode}else d=!!Ku(c[Oe.na],4);return d};R(93)?Mu(mm(),function(b){return a(b.entityId)}):Mu(mm(),a)}};var Zu=function(a,b,c,d,e){if(!Yu()&&!sm(a)){var f="?id="+encodeURIComponent(a)+"&l="+qi.fa,g=0===a.indexOf("GTM-");g||(f+="&cx=c");R(41)&&(f+="&gtm="+Am());var h=bp();h&&(f+="&sign="+qi.zf);var m=c?"/gtag/js":"/gtm.js",n=zi||Bi?ap(b,m+f):void 0;if(!n){var p=qi.wd+m;h&&Dc&&g&&(p=Dc.replace(/^(?:https?:\/\/)?/i,"").split(/[?#]/)[0]);n=Bo("https://","http://",p+f)}var q=a;d.siloed&&(vm({ctid:q,isDestination:!1}),q=gm(q));var r=q,t=um();am().container[r]={state:1,context:d,parent:t};bm({ctid:r,isDestination:!1},
e);Jc(n)}},$u=function(a,b,c,d){if(!Yu()&&!tm(a))if(wm())am().destination[a]={state:0,transportUrl:b,context:c,parent:um()},bm({ctid:a,isDestination:!0},d),L(91);else{var e="/gtag/destination?id="+encodeURIComponent(a)+"&l="+qi.fa+"&cx=c";R(41)&&(e+="&gtm="+Am());bp()&&(e+="&sign="+qi.zf);var f=zi||Bi?ap(b,e):void 0;f||(f=Bo("https://","http://",qi.wd+e));var g=a;c.siloed&&(vm({ctid:g,isDestination:!0}),g=gm(g));am().destination[g]={state:1,context:c,parent:um()};bm({ctid:g,isDestination:!0},d);Jc(f)}};
function Yu(){if($l()){return!0}return!1};var av=!1,bv=0,cv=[];function dv(a){if(!av){var b=C.createEventObject,c="complete"==C.readyState,d="interactive"==C.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){av=!0;for(var e=0;e<cv.length;e++)F(cv[e])}cv.push=function(){for(var f=0;f<arguments.length;f++)F(arguments[f]);return 0}}}function ev(){if(!av&&140>bv){bv++;try{C.documentElement.doScroll("left"),dv()}catch(a){z.setTimeout(ev,50)}}}var fv=function(a){av?a():cv.push(a)};var hv=function(a,b,c){return{entityType:a,indexInOriginContainer:b,nameInOriginContainer:c,originContainerId:lm()}};var jv=function(a,b){this.h=!1;this.F=[];this.M={tags:[]};this.X=!1;this.s=this.C=0;iv(this,a,b)},kv=function(a,b,c,d){if(ui.hasOwnProperty(b)||"__zone"===b)return-1;var e={};mb(d)&&(e=nb(d,e));e.id=c;e.status="timeout";return a.M.tags.push(e)-1},lv=function(a,b,c,d){var e=a.M.tags[b];e&&(e.status=c,e.executionTime=d)},mv=function(a){if(!a.h){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.h=!0;a.F.length=0}},iv=function(a,b,c){void 0!==b&&a.Bf(b);c&&z.setTimeout(function(){return mv(a)},Number(c))};
jv.prototype.Bf=function(a){var b=this,c=Va(function(){return F(function(){a(lm(),b.M)})});this.h?c():this.F.push(c)};var nv=function(a){a.C++;return Va(function(){a.s++;a.X&&a.s>=a.C&&mv(a)})},ov=function(a){a.X=!0;a.s>=a.C&&mv(a)};var pv={},rv=function(){return z[qv()]},sv=!1;
function qv(){return z.GoogleAnalyticsObject||"ga"}
var vv=function(a){},wv=function(a,b){return function(){var c=rv(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),m=0>g.indexOf("&tid="+b);m&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);m&&(f.set("hitPayload",
g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var Bv={},Cv={};function Dv(a,b){if(mp){var c;c=b.match(/^(gtm|gtag)\./)?encodeURIComponent(b):"*";Bv[a]="&e="+c+"&eid="+a;wp(a)}}function Ev(a){var b=a.eventId,c=a.Zb;if(!Bv[b])return"";var d=Cv[b]?"":"&es=1";d+=Bv[b];c&&(Cv[b]=!0);return d};var Fv={};function Gv(a,b){mp&&(Fv[a]=Fv[a]||{},Fv[a][b]=(Fv[a][b]||0)+1)}function Hv(a){var b=a.eventId,c=a.Zb,d=Fv[b]||{},e=[],f;for(f in d)d.hasOwnProperty(f)&&e.push(""+f+d[f]);c&&delete Fv[b];return e.length?"&md="+e.join("."):""};var Iv={},Jv={aev:"1",c:"2",jsm:"3",v:"4",j:"5",smm:"6",rmm:"7",input:"8"};
function Kv(a,b,c){if(mp){Iv[a]=Iv[a]||[];var d=Jv[b]||"0",e;e=c instanceof z.Element?"1":c instanceof z.Event?"2":c instanceof z.RegExp?"3":c===z?"4":c===C?"5":c instanceof z.Promise?"6":c instanceof z.Storage?"7":c instanceof z.Date?"8":c instanceof z.History?"9":c instanceof z.Performance?"a":c===z.crypto?"b":c instanceof z.Location?"c":c instanceof z.Navigator?"d":"object"!==typeof c||mb(c)?"0":"e";Iv[a].push(""+d+e)}}
function Lv(a){var b=a.eventId,c=Iv[b]||[];if(!c.length)return"";a.Zb&&delete Iv[b];return"&pcr="+c.join(".")};var Mv={},Nv={};function Ov(a,b,c){if(mp&&b){var d=dp(b);Mv[a]=Mv[a]||[];Mv[a].push(c+d);var e=(Cf(b)?"1":"2")+d;Nv[a]=Nv[a]||[];Nv[a].push(e);wp(a)}}function Pv(a){var b=a.eventId,c=a.Zb,d="",e=Mv[b]||[];e.length&&(d+="&tr="+e.join("."));var f=Nv[b]||[];f.length&&(d+="&ti="+f.join("."));c&&(delete Mv[b],delete Nv[b]);return d};function Qv(a,b,c,d){var e=of[a],f=Rv(a,b,c,d);if(!f)return null;var g=zf(e[Oe.kj],c,[]);if(g&&g.length){var h=g[0];f=Qv(h.index,{onSuccess:f,onFailure:1===h.Aj?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Rv(a,b,c,d){function e(){if(f[Oe.Tk])h();else{var w=Af(f,c,[]),x=w[Oe.kk];if(null!=x)for(var y=0;y<x.length;y++)if(!ck(x[y])){h();return}var A=kv(c.Vb,String(f[Oe.na]),Number(f[Oe.oe]),w[Oe.Uk]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=Sa()-G;Ov(c.id,of[a],"5");lv(c.Vb,A,"success",D);R(16)&&ku(c,f,tt.H.nj);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=Sa()-G;Ov(c.id,of[a],"6");lv(c.Vb,A,"failure",D);R(16)&&ku(c,f,tt.H.mj);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=
c.id;c.priorityId&&(w.vtp_gtmPriorityId=c.priorityId);Ov(c.id,f,"1");var E=function(){ij(3);var D=Sa()-G;Ov(c.id,f,"7");lv(c.Vb,A,"exception",D);R(16)&&ku(c,f,tt.H.lj);B||(B=!0,h())};R(16)&&ju(c,f);var G=Sa();try{yf(w,{event:c,index:a,type:1})}catch(D){E(D)}R(16)&&ku(c,f,tt.H.oj)}}var f=of[a],g=b.onSuccess,h=b.onFailure,m=b.terminate;if(c.isBlocked(f))return null;var n=zf(f[Oe.pj],c,[]);if(n&&n.length){var p=n[0],q=Qv(p.index,{onSuccess:g,onFailure:h,terminate:m},c,d);if(!q)return null;g=q;h=2===
p.Aj?m:q}if(f[Oe.ej]||f[Oe.Wk]){var r=f[Oe.ej]?pf:c.jn,t=g,u=h;if(!r[a]){e=Va(e);var v=Sv(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function Sv(a,b,c){var d=[],e=[];b[a]=Tv(d,e,c);return{onSuccess:function(){b[a]=Uv;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=Vv;for(var f=0;f<e.length;f++)e[f]()}}}function Tv(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Uv(a){a()}function Vv(a,b){b()};var Xv=function(a,b){return 1===arguments.length?Wv("set",a):Wv("set",a,b)},Yv=function(a,b){return 1===arguments.length?Wv("config",a):Wv("config",a,b)},Zv=function(a,b,c){c=c||{};c[N.g.Ob]=a;return Wv("event",b,c)};function Wv(a){return arguments}var $v=function(){this.h=[];this.s=[]};$v.prototype.enqueue=function(a,b,c){var d=this.h.length+1;a["gtm.uniqueEventId"]=b;a["gtm.priorityId"]=d;c.eventId=b;c.fromContainerExecution=!0;c.priorityId=d;var e={message:a,notBeforeEventId:b,priorityId:d,messageContext:c};this.h.push(e);for(var f=0;f<this.s.length;f++)try{this.s[f](e)}catch(g){}};$v.prototype.listen=function(a){this.s.push(a)};
$v.prototype.get=function(){for(var a={},b=0;b<this.h.length;b++){var c=this.h[b],d=a[c.notBeforeEventId];d||(d=[],a[c.notBeforeEventId]=d);d.push(c)}return a};$v.prototype.prune=function(a){for(var b=[],c=[],d=0;d<this.h.length;d++){var e=this.h[d];e.notBeforeEventId===a?b.push(e):c.push(e)}this.h=c;return b};var bw=function(a,b,c){c.eventMetadata=c.eventMetadata||{};c.eventMetadata.source_canonical_id=Tf.Ef;aw().enqueue(a,b,c)},ww=function(){var a=cw;aw().listen(a)};
function aw(){var a=ri.mb;a||(a=new $v,ri.mb=a);return a}
var Jw=function(a){var b=ri.zones;return b?b.getIsAllowedFn(hm(),a):function(){return!0}},Kw=function(a){var b=ri.zones;return b?b.isActive(hm(),a):!0},Lw=function(){R(93)?Ou(mm(),function(a){return Kw(a.originalEventData["gtm.uniqueEventId"])}):Ou(mm(),function(a,b){return Kw(b)});R(94)&&R(95)&&Mu(mm(),function(a){var b=a.entityId,c=a.securityGroups;return Jw(a.originalEventData["gtm.uniqueEventId"])(b,c)})};var Ow=function(a,b){for(var c=[],d=0;d<of.length;d++)if(a[d]){var e=of[d];var f=nv(b.Vb);try{var g=Qv(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=e[Oe.na];if(!h)throw"Error: No function name given for function call.";var m=qf[h];c.push({Yj:d,Oj:(m?m.priorityOverride||0:0)||Ku(e[Oe.na],1)||0,execute:g})}else Mw(d,b),f()}catch(p){f()}}c.sort(Nw);for(var n=0;n<c.length;n++)c[n].execute();return 0<c.length};
function Nw(a,b){var c,d=b.Oj,e=a.Oj;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Yj,h=b.Yj;f=g>h?1:g<h?-1:0}return f}
function Mw(a,b){if(mp){var c=function(d){var e=b.isBlocked(of[d])?"3":"4",f=zf(of[d][Oe.kj],b,[]);f&&f.length&&c(f[0].index);Ov(b.id,of[d],e);var g=zf(of[d][Oe.pj],b,[]);g&&g.length&&c(g[0].index)};c(a)}}var Rw=!1,Pw;
var Yw=function(a){var b=a["gtm.uniqueEventId"],c=a["gtm.priorityId"],d=a.event;if(R(16)){}if("gtm.js"===d){if(Rw)return!1;Rw=!0}var e,f=!1,g=Pu(),h;if(R(93)){var m=nb(a);h=g.every(function(w){return w({originalEventData:m})})}else h=g.every(function(w){return w(d,b)});if(h)e=Jw(b);else{if("gtm.js"!==d&&"gtm.init"!==d&&"gtm.init_consent"!==
d)return!1;f=!0;e=Jw(Number.MAX_SAFE_INTEGER)}Dv(b,d);var n=a.eventCallback,p=a.eventTimeout,q=nb(a),r={id:b,priorityId:c,name:d,isBlocked:Tw(e,q),jn:[],logMacroError:function(){L(6);ij(0)},cachedModelValues:Uw(),checkPixieIncompatibility:Vw(b),Vb:new jv(function(){if(R(16)){}n&&n.apply(n,[].slice.call(arguments,0))},p),originalEventData:q};R(32)&&(r.reportMacroDiscrepancy=Gv);R(16)&&fu(r.id,r.name);var t=Kf(r);R(16)&&gu(r.id,r.name);f&&(t=Ww(t));if(R(16)){}var u=Ow(t,r),v=!1;ov(r.Vb);"gtm.js"!==d&&"gtm.sync"!==d||vv(lm());return Xw(t,u)||v};function Vw(a){return function(b){pb(b)||Kv(a,"input",b)}}
function Uw(){var a={};a.event=Xi("event",1);a.ecommerce=Xi("ecommerce",1);a.gtm=Xi("gtm");a.eventModel=Xi("eventModel");return a}function Tw(a,b){var c=Wu(a);return R(94)?function(d){if(c(d))return!0;var e=d&&d[Oe.na];if(!e||"string"!=typeof e)return!0;e=e.replace(/^_*/,"");for(var f=Nu(),g=Ji[e]||[],h=ea(f),m=h.next();!m.done;m=h.next()){var n=m.value;try{if(!n({entityId:e,securityGroups:g,originalEventData:b}))return!0}catch(p){return!0}}return!1}:c}
function Ww(a){for(var b=[],c=0;c<a.length;c++)if(a[c]){var d=String(of[c][Oe.na]);if(ti[d]||void 0!==of[c][Oe.Xk]||Ki[d]||Ku(d,2))b[c]=!0}return b}function Xw(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&of[c]&&!ui[String(of[c][Oe.na])])return!0;return!1}var Nf;var Zw={},$w={},ax=function(a,b){for(var c=[],d=[],e={},f=0;f<a.length;e={Kh:void 0,qh:void 0},f++){var g=a[f];if(0<=g.indexOf("-")){if(e.Kh=yo(g,b),e.Kh){var h=jm();Ia(h,function(r){return function(t){return r.Kh.da===t}}(e))?c.push(g):d.push(g)}}else{var m=Zw[g]||[];e.qh={};m.forEach(function(r){return function(t){return r.qh[t]=!0}}(e));for(var n=hm(),p=0;p<n.length;p++)if(e.qh[n[p]]){c=c.concat(jm());break}var q=$w[g]||[];q.length&&(c=c.concat(q))}}return{Cm:c,Fm:d}},bx=function(a){l(Zw,function(b,
c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})},cx=function(a){l($w,function(b,c){var d=c.indexOf(a);0<=d&&c.splice(d,1)})};var dx="HA GF G UA AW DC MC".split(" "),ex=!1,fx=!1;function gx(a,b){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:Li()});b.eventId=a["gtm.uniqueEventId"];b.priorityId=a["gtm.priorityId"];return{eventId:b.eventId,priorityId:b.priorityId}}var hx=void 0,ix=void 0;function jx(a,b,c){var d=nb(a);d.eventId=void 0;d.inheritParentConfig=void 0;Object.keys(b).some(function(f){return void 0!==b[f]})&&L(136);var e=nb(b);nb(c,e);bw(Yv(hm()[0],e),a.eventId,d)}
function kx(a){for(var b=ea([N.g.Sd,N.g.Pb]),c=b.next();!c.done;c=b.next()){var d=c.value,e=a&&a[d]||Pp.C[d];if(e)return e}}
var lx={config:function(a,b){var c=R(33),d=gx(a,b);if(!(2>a.length)&&k(a[1])){var e={};if(2<a.length){if(void 0!=a[2]&&!mb(a[2])||3<a.length)return;e=a[2]}var f=yo(a[1],b.isGtmEvent);if(f){var g,h,m;a:{if(!dm.ie){var n=nm(um());if(ym(n)){var p=n.parent,q=p.isDestination;m={Lm:nm(p),Bm:q};break a}}m=void 0}var r=m;r&&(g=r.Lm,h=r.Bm);Dv(d.eventId,"gtag.config");var t=f.da,u=f.id!==t;if(u?-1===jm().indexOf(t):-1===hm().indexOf(t)){if(!(c&&b.inheritParentConfig||e[N.g.yb])){var v=kx(e);if(u)$u(t,v,{source:2,
fromContainerExecution:b.fromContainerExecution});else if(c&&void 0!==g&&-1!==g.containers.indexOf(t)){var w=e;hx?jx(b,w,hx):ix||(ix=nb(w))}else Zu(t,v,!0,{source:2,fromContainerExecution:b.fromContainerExecution})}}else{if(g&&(L(128),h&&L(130),c&&b.inheritParentConfig)){var x;var y=e;ix?(jx(b,ix,y),x=!1):(!y[N.g.Qb]&&wi&&hx||(hx=nb(y)),x=!0);x&&g.containers&&g.containers.join(",");return}if(wi&&!u&&!e[N.g.Qb]){var A=fx;fx=!0;if(A)return}ex||L(43);if(!b.noTargetGroup)if(u){cx(f.id);var B=f.id,E=e[N.g.Pd]||
"default";E=String(E).split(",");for(var G=0;G<E.length;G++){var D=$w[E[G]]||[];$w[E[G]]=D;0>D.indexOf(B)&&D.push(B)}}else{bx(f.id);var M=f.id,P=e[N.g.Pd]||"default";P=P.toString().split(",");for(var O=0;O<P.length;O++){var T=Zw[P[O]]||[];Zw[P[O]]=T;0>T.indexOf(M)&&T.push(M)}}delete e[N.g.Pd];var Y=b.eventMetadata||{};Y.hasOwnProperty("is_external_event")||(Y.is_external_event=!b.fromContainerExecution);b.eventMetadata=Y;delete e[N.g.Vc];for(var W=u?[f.id]:jm(),X=0;X<W.length;X++){var la=e,ka=W[X],
fa=nb(b),Da=yo(ka,fa.isGtmEvent);Da&&Pp.push("config",[la],Da,fa)}}}}},consent:function(a,b){if(3===a.length){L(39);var c=gx(a,b),d=a[1],e=a[2];b.fromContainerExecution||(e[N.g.N]&&L(139),e[N.g.Ea]&&L(140));"default"===d?Yj(e):"update"===d?Zj(e,c):"declare"===d?b.fromContainerExecution&&Xj(e):R(66)&&"core_platform_services"===d&&ak(e)}},event:function(a,b){var c=a[1];if(!(2>a.length)&&k(c)){var d;if(2<a.length){if(!mb(a[2])&&void 0!=a[2]||3<a.length)return;d=a[2]}var e=d,f={},g=(f.event=c,f);e&&(g.eventModel=
nb(e),e[N.g.Vc]&&(g.eventCallback=e[N.g.Vc]),e[N.g.Kd]&&(g.eventTimeout=e[N.g.Kd]));var h=gx(a,b),m=h.eventId,n=h.priorityId;g["gtm.uniqueEventId"]=m;n&&(g["gtm.priorityId"]=n);if("optimize.callback"===c)return g.eventModel=g.eventModel||{},g;var p;var q=d,r=q&&q[N.g.Ob];void 0===r&&(r=Si(N.g.Ob,2),void 0===r&&(r="default"));if(k(r)||Ha(r)){var t;b.isGtmEvent?t=k(r)?[r]:r:t=r.toString().replace(/\s+/g,"").split(",");var u=ax(t,b.isGtmEvent),v=u.Cm,w=u.Fm;if(w.length)for(var x=kx(q),y=0;y<w.length;y++){var A=
yo(w[y],b.isGtmEvent);A&&$u(A.da,x,{source:3,fromContainerExecution:b.fromContainerExecution})}p=Ao(v,b.isGtmEvent)}else p=void 0;var B=p;if(B){Dv(m,c);for(var E=[],G=0;G<B.length;G++){var D=B[G],M=nb(b);if(-1!==dx.indexOf(om(D.prefix))){var P=nb(d),O=M.eventMetadata||{};O.hasOwnProperty("is_external_event")||(O.is_external_event=!M.fromContainerExecution);M.eventMetadata=O;delete P[N.g.Vc];Rp(c,P,D.id,M)}E.push(D.id)}g.eventModel=g.eventModel||{};0<B.length?g.eventModel[N.g.Ob]=E.join():delete g.eventModel[N.g.Ob];
ex||L(43);void 0===b.noGtmEvent&&b.eventMetadata&&b.eventMetadata.syn_or_mod&&(b.noGtmEvent=!0);g.eventModel[N.g.Lb]&&(b.noGtmEvent=!0);return b.noGtmEvent?void 0:g}}},get:function(a,b){L(53);if(4===a.length&&k(a[1])&&k(a[2])&&Fa(a[3])){var c=yo(a[1],b.isGtmEvent),d=String(a[2]),e=a[3];if(c){ex||L(43);var f=kx();if(!Ia(jm(),function(h){return c.da===h}))$u(c.da,f,{source:4,fromContainerExecution:b.fromContainerExecution});else if(-1!==dx.indexOf(om(c.prefix))){gx(a,b);var g={};Uj(nb((g[N.g.lb]=d,
g[N.g.wb]=e,g)));Sp(d,function(h){F(function(){return e(h)})},c.id,b)}}}},js:function(a,b){if(2==a.length&&a[1].getTime){ex=!0;var c=gx(a,b),d=c.eventId,e=c.priorityId,f={};return f.event="gtm.js",f["gtm.start"]=a[1].getTime(),f["gtm.uniqueEventId"]=d,f["gtm.priorityId"]=e,f}},policy:function(a){if(3===a.length&&k(a[1])&&Fa(a[2])){Of(a[1],a[2]);if(L(74),"all"===a[1]){L(75);var b=!1;try{b=a[2](lm(),"unknown",{})}catch(c){}b||L(76)}}else{
L(73);}},set:function(a,b){var c;2==a.length&&mb(a[1])?c=nb(a[1]):3==a.length&&k(a[1])&&(c={},mb(a[2])||Ha(a[2])?c[a[1]]=nb(a[2]):c[a[1]]=a[2]);if(c){var d=gx(a,b),e=d.eventId,f=d.priorityId;nb(c);var g=nb(c);Pp.push("set",[g],void 0,b);c["gtm.uniqueEventId"]=e;f&&(c["gtm.priorityId"]=f);R(9)&&delete c.event;b.overwriteModelFields=!0;return c}}},mx={policy:!0};var nx=function(a){var b=z[qi.fa].hide;if(b&&void 0!==b[a]&&b.end){b[a]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;break}c&&(b.end(),b.end=null)}},ox=function(a){var b=z[qi.fa],c=b&&b.hide;c&&c.end&&(c[a]=!0)};var px=!1,qx=[];function rx(){if(!px){px=!0;for(var a=0;a<qx.length;a++)F(qx[a])}}var sx=function(a){px?F(a):qx.push(a)};var Jx=function(a){if(Ix(a))return a;this.h=a};Jx.prototype.getUntrustedMessageValue=function(){return this.h};var Ix=function(a){return!a||"object"!==jb(a)||mb(a)?!1:"getUntrustedMessageValue"in a};Jx.prototype.getUntrustedMessageValue=Jx.prototype.getUntrustedMessageValue;var Kx=0,Lx={},Mx=[],Nx=[],Ox=!1,Px=!1;function Qx(a,b){return a.messageContext.eventId-b.messageContext.eventId||a.messageContext.priorityId-b.messageContext.priorityId}
var Rx=function(a){return z[qi.fa].push(a)},Sx=function(a,b,c){a.eventCallback=b;c&&(a.eventTimeout=c);return Rx(a)},Tx=function(a,b){if(!Ga(b)||0>b)b=0;var c=ri[qi.fa],d=0,e=!1,f=void 0;f=z.setTimeout(function(){e||(e=!0,a());f=void 0},b);return function(){var g=c?c.subscribers:1;++d===g&&(f&&(z.clearTimeout(f),f=void 0),e||(a(),e=!0))}};
function Ux(a,b){var c=a._clear||b.overwriteModelFields;l(a,function(e,f){"_clear"!==e&&(c&&Vi(e),Vi(e,f))});Gi||(Gi=a["gtm.start"]);var d=a["gtm.uniqueEventId"];if(!a.event)return!1;"number"!==typeof d&&(d=Li(),a["gtm.uniqueEventId"]=d,Vi("gtm.uniqueEventId",d));return Yw(a)}
function Vx(a){if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ma(a)){var b=a[0];if("config"===b||"event"===b||"js"===b||"get"===b)return!0}return!1}
function Wx(){var a;if(Nx.length)a=Nx.shift();else if(Mx.length)a=Mx.shift();else return;var b;var c=a;if(Ox||!Vx(c.message))b=c;else{Ox=!0;var d=c.message["gtm.uniqueEventId"];"number"!==typeof d&&(d=c.message["gtm.uniqueEventId"]=Li());var e={},f={message:(e.event="gtm.init_consent",e["gtm.uniqueEventId"]=d-2,e),messageContext:{eventId:d-2}},g={},h={message:(g.event="gtm.init",g["gtm.uniqueEventId"]=d-1,g),messageContext:{eventId:d-1}};Mx.unshift(h,c);if(mp){var m=Tf.ctid;if(m){var n,p=nm(um());
n=p&&p.context;var q,r=Lm(z.location.href);q=r.hostname+r.pathname;var t=n&&n.fromContainerExecution,u=n&&n.source,v=Tf.Ef,w=dm.ie;mp&&(Ap||(Ap=q),Bp.push(m+";"+v+";"+(t?1:0)+";"+(u||0)+";"+(w?1:0)))}}b=f}return b}
function Xx(){for(var a=!1,b;!Px&&(b=Wx());){Px=!0;delete Pi.eventModel;Ri();var c=b,d=c.message,e=c.messageContext;if(null==d)Px=!1;else{e.fromContainerExecution&&Wi();try{if(Fa(d))try{d.call(Ti)}catch(x){}else if(Ha(d)){var f=d;if(k(f[0])){var g=f[0].split("."),h=g.pop(),m=f.slice(1),n=Si(g.join("."),2);if(null!=n)try{n[h].apply(n,m)}catch(x){}}}else{var p=void 0,q=!1;if(Ma(d)){a:{if(d.length&&k(d[0])){var r=lx[d[0]];if(r&&(!e.fromContainerExecution||!mx[d[0]])){p=r(d,e);break a}}p=void 0}(q=p&&
"set"===d[0]&&!!p.event)&&L(101)}else p=d;if(p){var t=Ux(p,e);a=t||a;q&&t&&L(113)}}}finally{e.fromContainerExecution&&Ri(!0);var u=d["gtm.uniqueEventId"];if("number"===typeof u){for(var v=Lx[String(u)]||[],w=0;w<v.length;w++)Nx.push(Yx(v[w]));v.length&&Nx.sort(Qx);delete Lx[String(u)];u>Kx&&(Kx=u)}Px=!1}}}return!a}
function Zx(){if(R(16)){var a=$x();}var b=Xx();if(R(16)){}try{nx(lm())}catch(c){}return b}
function cw(a){if(Kx<a.notBeforeEventId){var b=String(a.notBeforeEventId);Lx[b]=Lx[b]||[];Lx[b].push(a)}else Nx.push(Yx(a)),Nx.sort(Qx),F(function(){Px||Xx()})}function Yx(a){return{message:a.message,messageContext:a.messageContext}}
var ay=function(){function a(f){var g={};if(Ix(f)){var h=f;f=Ix(h)?h.getUntrustedMessageValue():void 0;g.fromContainerExecution=!0}return{message:f,messageContext:g}}var b=Ec(qi.fa,[]),c=ri[qi.fa]=ri[qi.fa]||{};!0===c.pruned&&L(83);Lx=aw().get();ww();fv(function(){if(!c.gtmDom){c.gtmDom=!0;var f={};b.push((f.event="gtm.dom",f))}});sx(function(){if(!c.gtmLoad){c.gtmLoad=!0;var f={};b.push((f.event="gtm.load",f))}});c.subscribers=(c.subscribers||0)+1;var d=b.push;b.push=function(){var f;if(0<ri.SANDBOXED_JS_SEMAPHORE){f=
[];for(var g=0;g<arguments.length;g++)f[g]=new Jx(arguments[g])}else f=[].slice.call(arguments,0);var h=f.map(function(q){return a(q)});Mx.push.apply(Mx,h);var m=d.apply(b,f),n=Math.max(100,Number("1000")||300);if(this.length>n)for(L(4),c.pruned=!0;this.length>n;)this.shift();var p="boolean"!==typeof m||m;return Xx()&&p};var e=b.slice(0).map(function(f){return a(f)});Mx.push.apply(Mx,e);if($x()){if(R(16)){}F(Zx)}},$x=function(){var a=!0;a=!1;return a};function by(a){if(null==a||0===a.length)return!1;var b=Number(a),c=Sa();return b<c+3E5&&b>c-9E5}function cy(a){return a&&0===a.indexOf("pending:")?by(a.substr(8)):!1};

var xy=function(){};var yy=function(){};yy.prototype.toString=function(){return"undefined"};var zy=new yy;var gz=z.clearTimeout,hz=z.setTimeout,iz=function(a,b,c,d){if($l()){b&&F(b)}else return Jc(a,b,c,d)},jz=function(){return new Date},kz=function(){return z.location.href},lz=function(a){return Gm(Lm(a),"fragment")},mz=function(a){return Hm(Lm(a))},nz=function(a,b){return Si(a,b||2)},oz=function(a,b,c){return b?Sx(a,b,c):Rx(a)},pz=function(a,b){z[a]=b},U=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},
qz=function(a,b,c){return Hl(a,b,void 0===c?!0:!!c)},rz=function(a,b,c){return 0===Ql(a,b,c)},sz=function(a,b){if($l()){b&&F(b)}else Mc(a,b)},tz=function(a){return!!Ky(a,"init",!1)},uz=function(a){Iy(a,"init",!0)},vz=function(a,b,c){pb(a)||Kv(c,b,a)};

function Sz(a,b){function c(g){var h=Lm(g),m=Gm(h,"protocol"),n=Gm(h,"host",!0),p=Gm(h,"port"),q=Gm(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===m||"http"===m&&"80"===p||"https"===m&&"443"===p)m="web",p="default";return[m,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Tz(a){return Uz(a)?1:0}
function Uz(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Array.isArray(c)){for(var d=0;d<c.length;d++){var e=nb(a,{});nb({arg1:c[d],any_of:void 0},e);if(Tz(e))return!0}return!1}switch(a["function"]){case "_cn":return tg(b,c);case "_css":var f;a:{if(b)try{for(var g=0;g<pg.length;g++){var h=pg[g];if(b[h]){f=b[h](c);break a}}}catch(m){}f=!1}return f;case "_ew":return qg(b,c);case "_eq":return ug(b,c);case "_ge":return vg(b,c);case "_gt":return xg(b,c);case "_lc":return 0<=String(b).split(",").indexOf(String(c));
case "_le":return wg(b,c);case "_lt":return yg(b,c);case "_re":return sg(b,c,a.ignore_case);case "_sw":return zg(b,c);case "_um":return Sz(b,c)}return!1};function Vz(){var a=["&cv=2","&rv="+qi.Ug,"&tc="+of.filter(function(b){return b}).length];qi.me&&a.push("&x="+qi.me);Ni()&&a.push("&tag_exp="+Ni());return a.join("")};function Wz(){var a=qj();return a.length?"&exp_geo="+a:""}var Xz;function Yz(){try{null!=Xz||(Xz=(new Intl.DateTimeFormat).resolvedOptions().timeZone)}catch(b){}var a;return(null==(a=Xz)?0:a.length)?"&exp_tz="+Xz:""};var Zz=function(){return!1},$z=function(){var a={};return function(b,c,d){}};function aA(){var a=bA;return function(b,c,d){var e=d&&d.event;cA(c);var f=0===b.indexOf("__cvt_")?void 0:1,g=new sb;l(c,function(r,t){var u=md(t,void 0,f);void 0===u&&void 0!==t&&L(44);g.set(r,u)});a.h.h.F=Hf();var h={uj:Xf(b),eventId:void 0!==e?e.id:void 0,priorityId:void 0!==e?e.priorityId:void 0,Bf:void 0!==e?function(r){return e.Vb.Bf(r)}:void 0,wc:function(){return b},log:function(){},Fl:{index:d&&d.index,type:d&&d.type,name:d&&d.name},Wm:!!Ku(b,3),originalEventData:null==e?void 0:e.originalEventData};
e&&e.cachedModelValues&&(h.cachedModelValues={gtm:e.cachedModelValues.gtm,ecommerce:e.cachedModelValues.ecommerce});if(Zz()){var m=$z(),n=void 0,p=void 0;h.eb={Vh:[],pe:{},pb:function(r,t,u){1===t&&(n=r);7===t&&(p=u);m(r,t,u)},Dh:ph()};h.log=function(r,t){if(n){var u=Array.prototype.slice.call(arguments,1);m(n,4,{level:r,source:p,message:u})}}}var q=Ke(a,h,[b,g]);a.h.h.F=void 0;q instanceof wa&&"return"===q.h&&(q=q.s);return nd(q,void 0,f)}}
function cA(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){F(b)});Fa(c)&&(a.gtmOnFailure=function(){F(c)})};function dA(a,b){var c=this;}dA.O="addConsentListener";var eA;var fA=function(a){for(var b=0;b<a.length;++b)if(eA)try{a[b]()}catch(c){L(77)}else a[b]()};function gA(a,b,c){var d=this,e;return e}gA.D="internal.addDataLayerEventListener";function hA(a,b,c){}hA.O="addDocumentEventListener";function iA(a,b,c,d){}iA.O="addElementEventListener";function jA(a){}jA.O="addEventCallback";
function nA(a){}nA.D="internal.addFormAbandonmentListener";function oA(a,b,c,d){}oA.D="internal.addFormData";var pA={},qA=[],rA={},sA=0,tA=0;
function AA(a,b){}AA.D="internal.addFormInteractionListener";
function HA(a,b){}HA.D="internal.addFormSubmitListener";
var IA=function(a){return null!=a&&void 0!==a.length&&Fa(a.push)},LA=function(a){var b=JA.exec(a[0]);if(!b)return null;var c=b[2];if(void 0!==c&&c.match(/^(gtm\d+|gtag_.+)$/))return null;var d,e;k(a[1])?(d=a[1],e=[].slice.call(a,2)):(d=a[1]&&a[1].hitType,e=[].slice.call(a,1));if(!d)return null;var f;var g=KA[d],h=e;if(1==h.length&&null!=h[0]&&"object"===typeof h[0])f=h[0];else{for(var m={},n=Math.min(g?g.length+1:1,h.length),p=0;p<n;p++)if("object"===typeof h[p]){for(var q in h[p])h[p].hasOwnProperty(q)&&
(m[q]=h[p][q]);break}else g&&p<g.length&&(m[g[p]]=h[p]);f=m}var r=f;r.hitType=d;return{Be:d,ve:r}},JA=/^((.+)\.)?send$/,KA={pageview:["page"],event:["eventCategory","eventAction","eventLabel","eventValue"],social:["socialNetwork","socialAction","socialTarget"],timing:["timingCategory","timingVar","timingValue","timingLabel"]};
function MA(a){J(I(this),["dustCallback:!Fn"],arguments);K(this,"access_globals","read","GoogleAnalyticsObject");K(this,"access_globals","readwrite","ga.q");K(this,"access_globals","execute","ga.q");var b=0,c=nd(a);F(function(){var d=rv();if(d&&IA(d.q)){for(var e=d.q,f=0;f<e.length;f++){var g=LA(e[f]);b++;null!==g&&c(g.Be,g.ve)}var h=e.push;e.push=function(){var m=rv(),n=[].slice.call(arguments,0);h.apply(e,n);if(!(b>=m.q.length+(m.qd||
0))){var p=LA.apply(this,n);b++;null!==p&&c(p.Be,p.ve)}}}});}MA.D="internal.addGaSendListener";var NA=function(a,b){this.tagId=a;this.uc=b};
function OA(a,b,c){var d=this;}
OA.D="internal.loadGoogleTag";function PA(a){return new ed("",function(b){b=H(this,b);if(b instanceof ed)return new ed("",function(){var c=ta.apply(0,arguments),d=this,e=nb(this.h.h);e.eventId=a.eventId;e.priorityId=a.priorityId;e.originalEventData=a.originalEventData;var f=c.map(function(h){return H(d,h)}),g=Ba(this.h);g.h=e;return b.ab.apply(b,[g].concat(ia(f)))})})};function QA(a,b,c){var d=this;}
QA.D="internal.addGoogleTagRestriction";var RA={},SA=[];
var ZA=function(a,b){};
ZA.D="internal.addHistoryChangeListener";function $A(a,b,c){}$A.O="addWindowEventListener";function aB(a,b){return!0}aB.O="aliasInWindow";function bB(a,b,c){J(I(this),["targetId:!string","name:!string","value:!*"],arguments);for(var d=b.split("."),e=Up(a),f=0;f<d.length-1;f++){if(void 0===e[d[f]])e[d[f]]={};else if(!mb(e[d[f]]))throw Error("apendRemoteConfigParameter failed, path contains a non-object type: "+d[f]);e=e[d[f]]}if(void 0===e[d[f]])e[d[f]]=[];else if(!Ha(e[d[f]]))throw Error("appendRemoteConfigParameter failed, destination is not an array: "+d[f]);
e[d[f]].push(nd(c,this.h));}bB.D="internal.appendRemoteConfigParameter";function cB(){var a=2;return a};function dB(a,b){var c;return c}dB.O="callInWindow";function eB(a){}eB.O="callLater";function fB(a){}fB.D="callOnDomReady";function gB(a){}gB.D="callOnWindowLoad";function hB(a,b){var c;return c}hB.D="internal.computeGtmParameter";function iB(a,b){var c;var d=md(c,this.h,cB());void 0===d&&void 0!==c&&L(45);return d}iB.O="copyFromDataLayer";
function jB(a){var b=void 0;return b}jB.D="internal.copyFromDataLayerCache";function kB(a){var b;return b}kB.O="copyFromWindow";function lB(a){var b=void 0;return md(b,this.h,cB())}lB.D="internal.copyKeyFromWindow";function mB(a,b){var c;J(I(this),["preHit:!PixieMap","dustOptions:?PixieMap"],arguments);var d=nd(b)||{},e=nd(a,this.h,1).Dj(),f=e.o;d.omitEventContext&&(f=yk(new nk(e.o.eventId,e.o.priorityId)));var g=new Ro(e.target,e.eventName,f);d.omitHitData||nb(e.h,g.h);d.omitMetadata?g.metadata={}:nb(e.metadata,g.metadata);g.isAborted=e.isAborted;c=md(Uo(g),this.h,1);return c}mB.D="internal.copyPreHit";function nB(a,b){var c=null,d=cB();return md(c,this.h,d)}nB.O="createArgumentsQueue";function oB(a){var b;return md(b,this.h,1)}oB.D="internal.createGaCommandQueue";function pB(a){var b;return md(b,this.h,
cB())}pB.O="createQueue";function qB(a,b){var c=null;J(I(this),["pattern:!string","flags:?string"],arguments);try{var d=(b||"").split("").filter(function(e){return 0<="ig".indexOf(e)}).join("");c=new jd(new RegExp(a,d))}catch(e){}return c}qB.D="internal.createRegex";function rB(a){if(!a)return{};var b=a.Fl;return hv(b.type,b.index,b.name)}function sB(a){return a?{originatingEntity:rB(a)}:{}};function tB(a){}tB.D="internal.declareConsentState";function uB(a){var b="";return b}uB.D="internal.decodeUrlHtmlEntities";function vB(a,b,c){var d;return d}vB.D="internal.decorateUrlWithGaCookies";function wB(a){var b;K(this,"detect_user_provided_data","auto");var c=nd(a)||{},d=tr({md:!!c.includeSelector,nd:!!c.includeVisibility,ue:c.excludeElementSelectors,ob:c.fieldFilters,Th:!!c.selectMultipleElements});b=new sb;var e=new rb;b.set("elements",e);for(var f=d.elements,g=0;g<f.length;g++)e.push(xB(f[g]));void 0!==d.Mh&&b.set("preferredEmailElement",xB(d.Mh));b.set("status",d.status);
return b}
var xB=function(a){var b=new sb;b.set("userData",a.U);b.set("tagName",a.tagName);void 0!==a.querySelector&&b.set("querySelector",a.querySelector);void 0!==a.isVisible&&b.set("isVisible",a.isVisible);if(R(30)){}else switch(a.type){case "1":b.set("type","email")}return b};wB.D="internal.detectUserProvidedData";
function AB(a,b){return b}AB.D="internal.enableAutoEventOnClick";
function FB(a,b){return b}FB.D="internal.enableAutoEventOnElementVisibility";function GB(){}GB.D="internal.enableAutoEventOnError";var HB={},IB=[],JB={},KB=0,LB=0;
function RB(a,b){var c=this;return b}RB.D="internal.enableAutoEventOnFormInteraction";
function WB(a,b){var c=this;return b}WB.D="internal.enableAutoEventOnFormSubmit";
function aC(){var a=this;}aC.D="internal.enableAutoEventOnGaSend";var bC={},cC=[];
function jC(a,b){var c=this;return b}jC.D="internal.enableAutoEventOnHistoryChange";var kC=["http://","https://","javascript:","file://"];
function oC(a,b){var c=this;return b}oC.D="internal.enableAutoEventOnLinkClick";var pC,qC;
function BC(a,b){var c=this;
return b}BC.D="internal.enableAutoEventOnScroll";function CC(a){return function(){if(a.Ac&&a.Cc>=a.Ac)a.yc&&z.clearInterval(a.yc);else{a.Cc++;var b=Sa();Rx({event:a.eventName,"gtm.timerId":a.yc,"gtm.timerEventNumber":a.Cc,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.Ac,"gtm.timerStartTime":a.Se,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Se,"gtm.triggers":a.Xh})}}}
function DC(a,b){
return b}DC.D="internal.enableAutoEventOnTimer";var xc=ca(["data-gtm-yt-inspected-"]),EC=["www.youtube.com","www.youtube-nocookie.com"],FC,GC=!1;
function QC(a,b){var c=this;return b}QC.D="internal.enableAutoEventOnYouTubeActivity";var RC;function SC(a){var b=!1;return b}SC.D="internal.evaluateMatchingRules";var wD=function(){var a=!0;ml(7)&&ml(9)&&ml(10)||(a=!1);return a};function rE(a,b,c,d){}rE.D="internal.executeEventProcessor";function sE(a){var b=void 0;return md(b,this.h,1)}sE.D="internal.executeJavascriptString";var tE=function(a){var b;return b};function uE(){var a=new sb;K(this,"read_container_data"),a.set("containerId",'G-L62JPMKG3T'),a.set("version",'2'),a.set("environmentName",''),a.set("debugMode",$f),a.set("previewMode",bg),a.set("environmentMode",ag),a.set("firstPartyServing",zi||Bi),a.set("containerUrl",Dc),a.Eb();return a}uE.O="getContainerVersion";function vE(a,b){b=void 0===b?!0:b;var c;return c}vE.O="getCookieValues";function wE(){return qj()}wE.D="internal.getCountryCode";function xE(){var a=[];a=jm();return md(a)}xE.D="internal.getDestinationIds";function yE(a,b){var c="";return c}yE.D="internal.getElementAttribute";function zE(a){var b=null;return b}zE.D="internal.getElementById";function AE(a){var b="";return b}AE.D="internal.getElementInnerText";function BE(a,b){var c=null;return c}BE.D="internal.getElementProperty";function CE(a){var b;return b}CE.D="internal.getElementValue";function DE(a){var b=0;return b}DE.D="internal.getElementVisibilityRatio";function EE(a){var b=null;return b}EE.D="internal.getElementsByCssSelector";
function FE(a){var b=void 0;return b}FE.D="internal.getEventData";var GE={};GE.enableAWFledge=R(6);GE.enableAdsConversionValidation=R(21);GE.enableAutoPiiOnPhoneAndAddress=R(30);GE.enableCachedEcommerceData=R(89);GE.enableCcdPreAutoPiiDetection=R(11);GE.enableCloudRecommentationsErrorLogging=R(73);GE.enableCloudRecommentationsSchemaIngestion=R(72);GE.enableCloudRetailInjectPurchaseMetadata=R(71);GE.enableCloudRetailLogging=R(70);GE.enableCloudRetailPageCategories=R(17);GE.enableConsentDisclosureActivity=R(35);GE.enableDCFledge=R(7);GE.enableDecodeUri=R(53);
GE.enableDeferAllEnhancedMeasurement=R(37);GE.enableDirectTagLoadingInGoogleTag=R(64);GE.enableEuidAutoMode=R(10);GE.enableFormSkipValidation=R(31);GE.enableLoadGoogleTagOptionsObject=R(68);GE.enableUrlDecodeEventUsage=R(47);GE.enableV1HistoryEventInApi=R(78);GE.loadContainerForGtmEventTags=R(34);GE.useEnableAutoEventOnFormApis=R(22);GE.autoPiiEligible=uj();function HE(){return md(GE)}HE.D="internal.getFlags";function IE(){return new jd(zy)}IE.D="internal.getHtmlId";function JE(a,b){var c;J(I(this),["targetId:!string","name:!string"],arguments);var d=Qo(a)||{};c=md(d[b],this.h);return c}JE.D="internal.getProductSettingsParameter";function KE(a,b){var c;J(I(this),["queryKey:!string","retrieveAll:?boolean"],arguments);K(this,"get_url","query",a);var d=Gm(Lm(z.location.href),"query"),e=Dm(d,a,b);c=md(e,this.h);return c}KE.O="getQueryParameters";function LE(a,b){var c;return c}LE.O="getReferrerQueryParameters";function ME(a){var b="";return b}ME.O="getReferrerUrl";function NE(){return rj()}NE.D="internal.getRegionCode";function OE(a,b){var c;return c}OE.D="internal.getRemoteConfigParameter";function PE(a){var b="";return b}PE.O="getUrl";function QE(){K(this,"get_user_agent");return Cc.userAgent}QE.O="getUserAgent";var RE=function(a){return To(a,N.g.Kb,S(a.o,N.g.Kb))||To(a,"google_ono",!1)},SE=function(a){if(a.metadata.is_merchant_center||!cp(a.o))return!1;if(!S(a.o,N.g.Sd)){var b=S(a.o,N.g.Ld);return!0===b||"true"===b}return!0},TE=function(a){var b=a.metadata.user_data;if(mb(b))return b},UE=function(a,b){var c=To(a,N.g.Jd,a.o.s[N.g.Jd]);if(c&&void 0!==c[b||a.eventName])return c[b||a.eventName]},VE=function(a,b,c){a.h[N.g.ne]||(a.h[N.g.ne]={});a.h[N.g.ne][b]=c};var WE=!1,XE=function(a){var b=a.eventName===N.g.ic&&Pj()&&SE(a),c=a.metadata.is_sgtm_service_worker,d=a.metadata.batch_on_navigation,e=a.metadata.is_conversion,f=a.metadata.is_session_start,g=a.metadata.create_dc_join,h=a.metadata.create_google_join,m=a.metadata.euid_mode_enabled&&!!TE(a);return!(!Cc.sendBeacon||e||m||f||g||h||b||c||!d&&WE)};
var YE=function(a){var b=0,c=0;return{start:function(){b=Sa()},stop:function(){c=this.get()},get:function(){var d=0;a.wh()&&(d=Sa()-b);return d+c}}},ZE=function(){this.h=void 0;this.s=0;this.isActive=this.isVisible=this.C=!1;this.M=this.F=void 0};aa=ZE.prototype;aa.Pk=function(a){var b=this;if(!this.h){this.C=C.hasFocus();this.isVisible=!C.hidden;this.isActive=!0;var c=function(d,e,f){Oc(d,e,function(g){b.h.stop();f(g);b.wh()&&b.h.start()})};c(z,"focus",function(){b.C=!0});c(z,"blur",function(){b.C=
!1});c(z,"pageshow",function(d){b.isActive=!0;d.persisted&&L(56);b.M&&b.M()});c(z,"pagehide",function(){b.isActive=!1;b.F&&b.F()});c(C,"visibilitychange",function(){b.isVisible=!C.hidden});SE(a)&&-1===(Cc.userAgent||"").indexOf("Firefox")&&-1===(Cc.userAgent||"").indexOf("FxiOS")&&c(z,"beforeunload",function(){WE=!0});this.Qh();this.s=0}};aa.Qh=function(){this.s+=this.Jf();this.h=YE(this);this.wh()&&this.h.start()};aa.nn=function(a){var b=this.Jf();0<b&&(a.h[N.g.Fd]=b)};aa.Zl=function(a){a.h[N.g.Fd]=
void 0;this.Qh();this.s=0};aa.wh=function(){return this.C&&this.isVisible&&this.isActive};aa.Ql=function(){return this.s+this.Jf()};aa.Jf=function(){return this.h&&this.h.get()||0};aa.Um=function(a){this.F=a};aa.Rj=function(a){this.M=a};var $E=function(a){Ab("GA4_EVENT",a)};function aF(){return z.gaGlobal=z.gaGlobal||{}}var bF=function(){var a=aF();a.hid=a.hid||Ja();return a.hid},cF=function(a,b){var c=aF();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};
var dF=function(a,b,c){var d=a.metadata.client_id_source;if(void 0===d||c<=d)a.h[N.g.ub]=b,a.metadata.client_id_source=c},gF=function(a,b){var c;var d=b.metadata.cookie_options,e=d.prefix+"_ga",f=Om(d,void 0,void 0,N.g.R);if(!1===S(b.o,N.g.mc)&&eF(b)===a)c=!0;else{var g=Yl(a,fF[0],d.domain,d.path);c=1!==Ql(e,g,f)}return c},eF=function(a){var b=a.metadata.cookie_options,c=b.prefix+"_ga",d=Xl(c,b.domain,b.path,fF,N.g.R);if(!d){var e=String(S(a.o,N.g.kc,""));e&&e!=c&&(d=Xl(e,b.domain,b.path,fF,N.g.R))}return d},
fF=["GA1"],hF=function(a,b){var c=a.h[N.g.ub];if(S(a.o,N.g.yb)&&S(a.o,N.g.Lb)||b&&c===b)return c;if(c){c=""+c;if(!gF(c,a))return L(31),a.isAborted=!0,"";cF(c,ck(N.g.R));return c}L(32);a.isAborted=!0;return""};
var kF=function(a,b,c){if(!b)return a;if(!a)return b;var d=iF(a);if(!d)return b;var e,f=Na(null!=(e=S(c.o,N.g.ad))?e:30);if(!(Math.floor(c.metadata.event_start_timestamp_ms/1E3)>d.Ke+60*f))return a;var g=iF(b);if(!g)return a;g.Gc=d.Gc+1;var h;return null!=(h=jF(g.sessionId,g.Gc,g.pd,g.Ke,g.Ah,g.Bc,g.te))?h:b},nF=function(a,b){var c=b.metadata.cookie_options,d=lF(b,c),e=Yl(a,mF[0],c.domain,c.path),f={Gb:N.g.R,domain:c.domain,path:c.path,expires:c.Wb?new Date(Sa()+1E3*c.Wb):void 0,flags:c.flags};Ql(d,
void 0,f);return 1!==Ql(d,e,f)},oF=function(a){var b=a.metadata.cookie_options,c=lF(a,b),d=Xl(c,b.domain,b.path,mF,N.g.R);if(!d)return d;var e=Hl(c,void 0,void 0,N.g.R);if(d&&1<e.length){L(114);for(var f=void 0,g=void 0,h=0;h<e.length;h++){var m=e[h].split(".");if(!(7>m.length)){var n=Number(m[5]);n&&(!g||n>g)&&(g=n,f=e[h])}}f&&f.substring(f.length-d.length,f.length)!==d&&(L(115),d=f.split(".").slice(2).join("."))}return d},jF=function(a,b,c,d,e,f,g){if(a&&b){var h=[a,b,Na(c),d,e];h.push(f?"1":"0");
h.push(g||"0");return h.join(".")}},mF=["GS1"],lF=function(a,b){return b.prefix+"_ga_"+a.target.P[0]},iF=function(a){if(a){var b=a.split(".");if(!(5>b.length||7<b.length)){7>b.length&&L(67);var c=Number(b[1]),d=Number(b[3]),e=Number(b[4]||0);c||L(118);d||L(119);isNaN(e)&&L(120);if(c&&d&&!isNaN(e))return{sessionId:b[0],Gc:c,pd:!!Number(b[2]),Ke:d,Ah:e,Bc:"1"===b[5],te:"0"!==b[6]?b[6]:void 0}}}},pF=function(a){return jF(a.h[N.g.Cb],a.h[N.g.Ud],a.h[N.g.Td],Math.floor(a.metadata.event_start_timestamp_ms/
1E3),a.metadata.join_timer_sec||0,!!a.metadata[N.g.ef],a.h[N.g.Gd])};
var qF=function(a){var b=S(a.o,N.g.Ma),c=a.o.s[N.g.Ma];if(c===b)return c;var d=nb(b);c&&c[N.g.W]&&(d[N.g.W]=(d[N.g.W]||[]).concat(c[N.g.W]));return d},rF=function(a,b){var c=dn(!0);return"1"!==c._up?{}:{clientId:c[a],Sf:c[b]}},sF=function(a,b,c){var d=dn(!0),e=d[b];e&&(dF(a,e,2),gF(e,a));var f=d[c];f&&nF(f,a);return{clientId:e,Sf:f}},tF=!1,uF=function(a){var b=qF(a)||{},c=a.metadata.cookie_options,d=c.prefix+"_ga",e=lF(a,c),f={};xn(b[N.g.qc],!!b[N.g.W])&&(f=sF(a,d,e),f.clientId&&f.Sf&&(tF=!0));b[N.g.W]&&
un(function(){var g={},h=eF(a);h&&(g[d]=h);var m=oF(a);m&&(g[e]=m);var n=Hl("FPLC",void 0,void 0,N.g.R);n.length&&(g._fplc=n[0]);return g},b[N.g.W],b[N.g.Mb],!!b[N.g.zb]);return f},wF=function(a){if(!S(a.o,N.g.Db))return{};var b=a.metadata.cookie_options,c=b.prefix+"_ga",d=lF(a,b);vn(function(){var e;if(ck("analytics_storage"))e={};else{var f={};e=(f._up="1",f[c]=a.h[N.g.ub],f[d]=pF(a),f)}return e},1);return!ck("analytics_storage")&&vF()?rF(c,d):{}},vF=function(){var a=Fm(z.location,"host"),b=Fm(Lm(C.referrer),
"host");return a&&b?a===b||0<=a.indexOf("."+b)||0<=b.indexOf("."+a)?!0:!1:!1};var xF=function(){var a=Sa(),b=a+864E5,c=20,d=5E3;return function(){var e=Sa();e>=b&&(b=e+864E5,d=5E3);if(1>d)return!1;c=Math.min(c+(e-a)/1E3*5,20);a=e;if(1>c)return!1;d--;c--;return!0}};
var yF=function(a,b){tl()&&(a.gcs=ul(),b.metadata.is_consent_update&&(a.gcu="1"));a.gcd=yl(b.o);sl(b.o)?R(29)&&(a.npa="0"):a.npa="1"},BF=function(a){if(a.metadata.is_merchant_center)return"https://www.merchant-center-analytics.goog/mc/collect";var b=ap(cp(a.o),"/g/collect");if(b)return b;var c=RE(a),d=S(a.o,N.g.ib);return c&&!sj()&&!1!==d&&wD()&&ck(N.g.J)&&ck(N.g.R)?zF():AF()},CF=!1;CF=!0;var DF=
{};DF[N.g.ub]="cid";DF[N.g.ff]="_fid";DF[N.g.wg]="_geo";DF[N.g.xb]="gdid";DF[N.g.Wc]="ir";DF[N.g.La]="ul";DF[N.g.Rd]="_rdi";DF[N.g.Bb]="sr";DF[N.g.Ri]="tid";DF[N.g.rf]="tt";DF[N.g.ee]="ec_mode";DF[N.g.aj]="gtm_up";DF[N.g.Wd]="uaa";DF[N.g.Xd]="uab";DF[N.g.Yd]="uafvl";DF[N.g.Zd]="uamb";DF[N.g.ae]="uam";DF[N.g.be]="uap";DF[N.g.ce]="uapv";DF[N.g.de]="uaw";
DF[N.g.Jb]="are";DF[N.g.Si]="ur";DF[N.g.jf]="lps";DF[N.g.Hg]="pae";var EF={};EF[N.g.Ic]="cc";EF[N.g.Jc]="ci";EF[N.g.Kc]="cm";EF[N.g.Lc]="cn";EF[N.g.Nc]="cs";EF[N.g.Oc]="ck";EF[N.g.xa]="cu";EF[N.g.Aa]="dl";EF[N.g.Na]="dr";EF[N.g.Ab]="dt";EF[N.g.Td]="seg";EF[N.g.Cb]="sid";EF[N.g.Ud]="sct";EF[N.g.Ta]="uid";R(20)&&(EF[N.g.Yc]="dp");var FF={};FF[N.g.Fd]="_et";FF[N.g.vb]="edid";
var GF={};GF[N.g.Ic]="cc";GF[N.g.Jc]="ci";GF[N.g.Kc]="cm";GF[N.g.Lc]="cn";GF[N.g.Nc]="cs";GF[N.g.Oc]="ck";var HF={},IF=Object.freeze((HF[N.g.Ba]=1,HF)),AF=function(){var a="www";CF&&tj()&&(a=tj());return"https://"+a+".google-analytics.com/g/collect"},zF=function(){var a;CF&&""!==tj()&&(a=tj());return"https://"+(a?a+".":"")+"analytics.google.com/g/collect"},JF=function(a,b,c){var d={},e={},f={};d.v="2";d.tid=a.target.da;To(a,"google_ono",!1)&&!sj()&&(d._ono=1);d.gtm=Am(So(a));d._p=R(74)?Gi:bF();c&&
(d.em=c);a.metadata.create_google_join&&(d._gaz=1);yF(d,a);Bl()&&(d.dma_cps=zl());d.dma=Al();Xk(el())&&(d.tcfd=Cl());Ni()&&(d.tag_exp=Ni());var g=a.h[N.g.xb];g&&(d.gdid=g);e.en=String(a.eventName);a.metadata.is_first_visit&&(e._fv=a.metadata.is_first_visit_conversion?2:1);a.metadata.is_new_to_site&&(e._nsi=1);a.metadata.is_session_start&&(e._ss=a.metadata.is_session_start_conversion?2:1);a.metadata.is_conversion&&(e._c=1);a.metadata.is_external_event&&(e._ee=1);if(a.metadata.is_ecommerce){var h=a.h[N.g.Z]||
S(a.o,N.g.Z);if(Ha(h))for(var m=0;m<h.length&&200>m;m++)e["pr"+(m+1)]=fg(h[m])}var n=a.h[N.g.vb];n&&(e.edid=n);var p=function(t,u){if("object"!==typeof u||!IF[t]){var v="ep."+t,w="epn."+t;t=Ga(u)?w:v;var x=Ga(u)?v:w;e.hasOwnProperty(x)&&delete e[x];e[t]=String(u)}},q=R(62)&&SE(a);l(a.h,function(t,u){if(void 0!==u&&!bi.hasOwnProperty(t)){null===u&&(u="");var v;t!==N.g.Gd?v=!1:a.metadata.euid_mode_enabled||q?(d.ecid=u,v=!0):v=void 0;if(!v&&t!==N.g.ef){var w=u;!0===u&&(w="1");!1===u&&(w="0");w=String(w);
var x;if(DF[t])x=DF[t],d[x]=w;else if(EF[t])x=EF[t],f[x]=w;else if(FF[t])x=FF[t],e[x]=w;else if("_"===t.charAt(0))d[t]=w;else{var y;GF[t]?y=!0:t!==N.g.Mc?y=!1:("object"!==typeof u&&p(t,u),y=!0);y||p(t,u)}}}});(function(t){SE(a)&&"object"===typeof t&&l(t||{},function(u,v){"object"!==typeof v&&(d["sst."+u]=String(v))})})(a.h[N.g.ne]);var r=a.h[N.g.Ya]||{};R(8)&&!1===S(a.o,N.g.ib,void 0,4)&&(d.ngs="1");l(r,function(t,u){void 0!==u&&((null===u&&(u=""),t!==N.g.Ta||f.uid)?b[t]!==u&&(e[(Ga(u)?"upn.":"up.")+
String(t)]=String(u),b[t]=u):f.uid=String(u))});return hg.call(this,{la:d,Hc:f,kh:e},BF(a),SE(a))||this};sa(JF,hg);var KF=function(a){this.s=a;this.C="";this.h=this.s},LF=function(a,b){a.h=b;return a};function MF(a){var b=a.search;return a.protocol+"//"+a.hostname+a.pathname+(b?b+"&richsstsse":"?richsstsse")}function NF(a,b,c){if(a){var d=a||[],e=mb(b)?b:{};if(Array.isArray(d))for(var f=0;f<d.length;f++)c(d[f],e)}};
var OF=function(a,b){return a.replace(/\$\{([^\}]+)\}/g,function(c,d){return b[d]||c})},PF=function(a){var b={},c="",d=a.pathname.indexOf("/g/collect");0<=d&&(c=a.pathname.substring(0,d));b.transport_url=a.protocol+"//"+a.hostname+c;return b},QF=function(a,b,c){var d=LF(new KF(function(g){var h=OF(g,c);Nc(h)}),function(g){var h=OF(g,c);Uc(h)}),e=0,f=new z.XMLHttpRequest;f.withCredentials=!0;f.onprogress=function(g){if(200===f.status){var h=f.responseText.substring(e);e=g.loaded;var m;m=d.C+h;for(var n=
m.indexOf("\n\n");-1!==n;){var p;a:{var q=ea(m.substring(0,n).split("\n")),r=q.next().value,t=q.next().value;if(0===r.indexOf("event: message")&&0===t.indexOf("data: "))try{p=JSON.parse(t.substring(t.indexOf(":")+1));break a}catch(w){}p=void 0}var u=d,v=p;v&&(NF(v.send_pixel,v.options,u.s),NF(v.send_beacon,void 0,u.h));m=m.substring(n+2);n=m.indexOf("\n\n")}d.C=m}};f.open(b?"POST":"GET",a);f.send(b)},RF=function(a,b){var c=Lm(a),d=PF(c),e=MF(c);R(82)&&R(75)?Ur(e,b,d,function(){return void QF(e,b,
d)}):QF(e,b,d)};
var UF=function(a,b,c,d){var e=R(50)&&d;if(R(49)||e){var f=b,g=Xc();void 0!==g&&(f+="&tfd="+Math.round(g));b=f}var h=a+"?"+b;SF&&(d=!(0===h.indexOf(AF())||0===h.indexOf(zF())));d&&!WE?RF(h,c):TF(a,b,c)},VF=function(a,b){function c(v){q.push(v+"="+encodeURIComponent(""+a.la[v]))}var d=b.dn,e=b.fn,f=b.Tl,g=b.rl,h=b.ql,m=b.jm,n=b.im,p=b.Sm;if(d||e){var q=[];a.la._ono&&c("_ono");c("tid");c("cid");c("gtm");q.push("aip=1");a.Hc.uid&&!n&&q.push("uid="+encodeURIComponent(""+a.Hc.uid));var r=function(){c("dma");
null!=a.la.dma_cps&&c("dma_cps");null!=a.la.gcs&&c("gcs");c("gcd");null!=a.la.npa&&c("npa")};r();d&&(TF("https://stats.g.doubleclick.net/g/collect","v=2&"+q.join("&")),Vj("https://stats.g.doubleclick.net/g/collect?v=2&"+q.join("&")));if(e){var t=function(){var v=rs()+"/td/ga/rul?";q=[];c("tid");q.push("gacid="+encodeURIComponent(String(a.la.cid)));c("gtm");r();R(100)&&c("pscdl");q.push("aip=1");q.push("fledge=1");q.push("z="+Ja());qs(v+q.join("&"),a.la.tid)};q.push("z="+Ja());if(!m){var u=f&&0===
f.indexOf("google.")&&"google.com"!=f?"https://www.%/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&".replace("%",f):void 0;u&&Nc(u+q.join("&"))}R(8)&&(R(87)?p&&!WE&&t():!WE&&g&&h&&ps()&&t())}}},SF=!1;var WF=function(){this.F=1;this.M={};this.h=new ig;this.s=-1};WF.prototype.C=function(a,b){var c=this,d=new JF(a,this.M,b),e=XE(a);e&&this.h.X(d)||this.flush();if(e&&
this.h.add(d)){if(0>this.s){var f=z.setTimeout,g;SE(a)?XF?(XF=!1,g=YF):g=ZF:g=5E3;this.s=f.call(z,function(){return c.flush()},g)}}else{var h=kg(d,this.F++);UF(d.s,h.params,h.body,d.F);var m=a.metadata.create_dc_join,n=a.metadata.create_google_join,p=!1!==S(a.o,N.g.Ga),q=sl(a.o),r={eventId:a.o.eventId,priorityId:a.o.priorityId},t=!1;R(87)&&(t=a.h[N.g.Hg]);var u={dn:m,fn:n,Tl:vj(),rl:p,ql:q,jm:sj(),im:a.metadata.euid_mode_enabled,Wn:r,Sm:t,o:a.o};VF(d,u)}du(a.o.eventId,a.eventName)};WF.prototype.add=
function(a){a.metadata.euid_mode_enabled&&!WE?this.X(a):this.C(a)};WF.prototype.flush=function(){if(this.h.events.length){var a=lg(this.h,this.F++);UF(this.h.s,a.params,a.body,this.h.C);this.h=new ig;0<=this.s&&(z.clearTimeout(this.s),this.s=-1)}};WF.prototype.X=function(a){var b=this,c=TE(a);c?Zh(c,function(d){b.C(a,1===d.split("~").length?void 0:d)}):this.C(a)};var TF=function(a,b,c){var d=a+"?"+b;if(c)try{Cc.sendBeacon&&Cc.sendBeacon(d,c)}catch(e){Ab("TAGGING",15)}else Uc(d)},YF=zk('',
500),ZF=zk('',5E3),XF=!0;var $F=function(a,b,c){void 0===c&&(c={});if("object"===typeof b)for(var d in b)$F(a+"."+d,b[d],c);else c[a]=b;return c},aG=function(a){if(SE(a)){if(R(62)){var b=To(a,"ccd_add_1p_data",!1)?1:0;VE(a,"ude",b)}var c=function(e){var f=$F(N.g.Ba,e);l(f,function(g,h){a.h[g]=h})},d=S(a.o,N.g.Ba);void 0!==d?(c(d),R(57)&&(a.h[N.g.ee]="c")):c(a.metadata.user_data);a.metadata.user_data=void 0}};var bG=window,cG=document,dG=function(a){var b=bG._gaUserPrefs;if(b&&b.ioo&&b.ioo()||cG.documentElement.hasAttribute("data-google-analytics-opt-out")||a&&!0===bG["ga-disable-"+a])return!0;try{var c=bG.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=El("AMP_TOKEN",String(cG.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return cG.getElementById("__gaOptOutExtension")?!0:!1};
var fG=function(a){return!a||eG.test(a)||di.hasOwnProperty(a)},gG=function(a){var b=N.g.Bb,c;c||(c=function(){});void 0!==a.h[b]&&(a.h[b]=c(a.h[b]))},hG=function(a){var b=a.indexOf("?"),c=-1===b?a:a.substring(0,b);try{c=decodeURIComponent(c)}catch(d){}return-1===b?c:""+c+a.substring(b)},iG=function(a,b,c){ck(c)||ek(function(){b.metadata.is_consent_update=!0;var d=li[c||""];d&&VE(b,"gcut",d);a.rj(b)},c)},js={Dl:"",pn:Number("")},jG={},kG=
(jG[N.g.Ic]=1,jG[N.g.Jc]=1,jG[N.g.Kc]=1,jG[N.g.Lc]=1,jG[N.g.Nc]=1,jG[N.g.Oc]=1,jG),eG=/^(_|ga_|google_|gtag\.|firebase_).*$/,lG=function(a){this.Oa=a;this.Rb=new WF;this.h=void 0;this.F=new ZE;this.s=this.C=void 0;this.Sb=this.X=!1;this.ed=0;this.M=!1};aa=lG.prototype;aa.Qm=function(a,b,c){var d=this,e=yo(this.Oa);if(e)if(c.eventMetadata.is_external_event&&"_"===a.charAt(0))c.onFailure();else{a!==N.g.sa&&a!==N.g.Pa&&fG(a)&&L(58);mG(c.h);var f=new Ro(e,a,c);f.metadata.event_start_timestamp_ms=b;var g=
[N.g.R];(To(f,N.g.Kb,S(f.o,N.g.Kb))||SE(f))&&g.push(N.g.J);R(44)&&SE(f)&&g.push(N.g.N);ks(function(){fk(function(){d.Rm(f)},g)})}else c.onFailure()};aa.Rm=function(a){this.s=a;try{if(dG(a.target.da))L(28),a.isAborted=!0;else if(R(24)){var b;var c=nm(um()),d=c&&c.parent;b=d?nm(d):void 0;if(b&&Ha(b.destinations))for(var e=0;e<b.destinations.length;e++)if(dG(b.destinations[e])){L(125);a.isAborted=!0;break}}if(0<=js.Dl.replace(/\s+/g,"").split(",").indexOf(a.eventName))a.isAborted=!0;else{var f=UE(a);
f&&f.blacklisted&&(a.isAborted=!0)}var g=C.location.protocol;"http:"!=g&&"https:"!=g&&(L(29),a.isAborted=!0);Cc&&"preview"==Cc.loadPurpose&&(L(30),a.isAborted=!0);R(27)&&(a.isAborted=!0);tq(a);var h=ri.grl;h||(h=xF(),ri.grl=h);h()||(L(35),a.isAborted=!0);if(a.isAborted){a.o.onFailure();Bb();return}var m={prefix:String(S(a.o,N.g.Ra,"")),path:String(S(a.o,N.g.Qc,"/")),flags:String(S(a.o,N.g.Xa,"")),domain:String(S(a.o,N.g.Wa,"auto")),Wb:Number(S(a.o,N.g.Ka,63072E3))};a.metadata.cookie_options=m;nG(a);
this.Qk(a);this.F.nn(a);a.metadata.is_merchant_center?a.metadata.euid_mode_enabled=!1:To(a,"ccd_add_1p_data",!1)&&(a.metadata.euid_mode_enabled=!0);if(a.metadata.euid_mode_enabled&&To(a,"ccd_add_1p_data",!1)){var n=a.o.s[N.g.fe];if($i(n)){var p=S(a.o,N.g.Ba);null===p?a.metadata.user_data_from_code=null:(n.enable_code&&mb(p)&&(a.metadata.user_data_from_code=p),mb(n.selectors)&&!a.metadata.user_data_from_manual&&(a.metadata.user_data_from_manual=Zi(n.selectors)))}}var q=this.Qj,r;S(a.o,N.g.Db)&&(ck(N.g.R)||
S(a.o,N.g.ub)||(a.h[N.g.aj]=!0));var t;var u;u=void 0===u?3:u;var v=z.location.href;if(v){var w=Lm(v).search.replace("?",""),x=Dm(w,"_gl",!1,!0)||"";t=x?void 0!==on(x,u):!1}else t=!1;t&&SE(a)&&VE(a,"glv",1);if(a.eventName!==N.g.sa)r={};else{S(a.o,N.g.Db)&&ko(["aw","dc"]);mo(["aw","dc"]);var y=uF(a),A=wF(a);r=Object.keys(y).length?y:A}q.call(this,r);var B=a.eventName===N.g.sa;B&&(this.M=!0);a.eventName==N.g.sa&&(S(a.o,N.g.Sa,!0)?(a.o.h[N.g.ba]&&(a.o.C[N.g.ba]=a.o.h[N.g.ba],a.o.h[N.g.ba]=void 0,a.h[N.g.ba]=
void 0),a.eventName=N.g.ic):a.isAborted=!0);B&&!a.isAborted&&0<this.ed++&&$E(17);var E=bb(lk(a.o,N.g.ba,1),".");E&&(a.h[N.g.xb]=E);var G=bb(lk(a.o,N.g.ba,2),".");G&&(a.h[N.g.vb]=G);var D=this.C,M=this.F,P=!this.Sb,O=this.h,T=S(a.o,N.g.ub);if(S(a.o,N.g.yb)&&S(a.o,N.g.Lb))T?dF(a,T,1):(L(127),a.isAborted=!0);else{var Y=T?1:8;a.metadata.is_new_to_site=!1;T||(T=eF(a),Y=3);T||(T=O,Y=5);if(!T){var W=ck(N.g.R),X=aF();T=!X.from_cookie||W?X.vid:void 0;Y=6}T?T=""+T:(T=Wl(),Y=7,a.metadata.is_first_visit=a.metadata.is_new_to_site=
!0);dF(a,T,Y)}var la=Math.floor(a.metadata.event_start_timestamp_ms/1E3),ka=void 0;a.metadata.is_new_to_site||(ka=oF(a)||D);var fa=Na(S(a.o,N.g.ad,30));fa=Math.min(475,fa);fa=Math.max(5,fa);var Da=Na(S(a.o,N.g.pf,1E4)),pa=iF(ka);a.metadata.is_first_visit=!1;a.metadata.is_session_start=!1;a.metadata.join_timer_sec=0;pa&&pa.Ah&&(a.metadata.join_timer_sec=Math.max(0,pa.Ah-Math.max(0,la-pa.Ke)));var Ea=!1;pa||(Ea=a.metadata.is_first_visit=!0,pa={sessionId:String(la),Gc:1,pd:!1,Ke:la,Bc:!1,te:void 0});
la>pa.Ke+60*fa&&(Ea=!0,pa.sessionId=String(la),pa.Gc++,pa.pd=!1,pa.te=void 0);if(Ea)a.metadata.is_session_start=!0,M.Zl(a);else if(M.Ql()>Da||a.eventName==N.g.ic)pa.pd=!0;a.metadata.euid_mode_enabled?S(a.o,N.g.Ta)?pa.Bc=!0:(pa.Bc&&(pa.te=void 0),pa.Bc=!1):pa.Bc=!1;var Ua=pa.te,lb=R(62)&&SE(a);if(a.metadata.euid_mode_enabled||lb){var Ib=S(a.o,N.g.Gd),Kc=Ib?1:8;Ib||(Ib=Ua,Kc=4);Ib||(Ib=Vl(),Kc=7);var ae=Ib.toString(),eh=Kc,jj=a.metadata.enhanced_client_id_source;if(void 0===jj||eh<=jj)a.h[N.g.Gd]=ae,
a.metadata.enhanced_client_id_source=eh}P?(a.copyToHitData(N.g.Cb,pa.sessionId),a.copyToHitData(N.g.Ud,pa.Gc),a.copyToHitData(N.g.Td,pa.pd?1:0)):(a.h[N.g.Cb]=pa.sessionId,a.h[N.g.Ud]=pa.Gc,a.h[N.g.Td]=pa.pd?1:0);a.metadata[N.g.ef]=pa.Bc?1:0;oG(a);if(!S(a.o,N.g.Lb)||!S(a.o,N.g.yb)){var fh="",gh=C.location;if(gh){var kj=gh.pathname||"";"/"!=kj.charAt(0)&&(kj="/"+kj);fh=gh.protocol+"//"+gh.hostname+kj+gh.search}a.copyToHitData(N.g.Aa,fh,hG);var vI=a.copyToHitData,wI=N.g.Na,lj;a:{var dw=Hl("_opt_expid",
void 0,void 0,N.g.R)[0];if(dw){var ew=decodeURIComponent(dw).split("$");if(3===ew.length){lj=ew[2];break a}}if(void 0!==ri.ga4_referrer_override)lj=ri.ga4_referrer_override;else{var fw=Si("gtm.gtagReferrer."+a.target.da),xI=C.referrer;lj=fw?""+fw:xI}}vI.call(a,wI,lj||void 0,hG);a.copyToHitData(N.g.Ab,C.title);a.copyToHitData(N.g.La,(Cc.language||"").toLowerCase());var gw=Aq();a.copyToHitData(N.g.Bb,gw.width+"x"+gw.height);R(20)&&a.copyToHitData(N.g.Yc,void 0,hG);R(51)&&zq()&&a.copyToHitData(N.g.jf,
"1")}a.metadata.create_dc_join=!1;a.metadata.create_google_join=!1;if(!(R(36)&&SE(a)||a.metadata.is_merchant_center||!1===S(a.o,N.g.ib))&&wD()&&ck(N.g.J)){var hw=RE(a);(a.metadata.is_session_start||S(a.o,N.g.vg))&&(a.metadata.create_dc_join=!!hw);var iw;iw=a.metadata.join_timer_sec;hw&&0===(iw||0)&&(a.metadata.join_timer_sec=60,a.metadata.create_google_join=!0)}pG(a);fi.hasOwnProperty(a.eventName)&&(a.metadata.is_ecommerce=!0,a.copyToHitData(N.g.Z),a.copyToHitData(N.g.xa));a.copyToHitData(N.g.rf);
for(var jw=S(a.o,N.g.hf)||[],en=0;en<jw.length;en++){var kw=jw[en];if(kw.rule_result){a.copyToHitData(N.g.rf,kw.traffic_type);$E(3);break}}if(!a.metadata.is_merchant_center&&cp(a.o)){var lw=qF(a)||{},zI=(xn(lw[N.g.qc],!!lw[N.g.W])?dn(!0)._fplc:void 0)||(0<Hl("FPLC",void 0,void 0,N.g.R).length?void 0:"0");a.h._fplc=zI}if(void 0!==S(a.o,N.g.Wc))a.copyToHitData(N.g.Wc);else{var mw=S(a.o,N.g.lf),fn,mj;a:{if(tF){var gn=qF(a)||{};if(gn&&gn[N.g.W])for(var nw=Gm(Lm(a.h[N.g.Na]),"host",!0),nj=gn[N.g.W],hh=
0;hh<nj.length;hh++)if(nj[hh]instanceof RegExp){if(nj[hh].test(nw)){mj=!0;break a}}else if(0<=nw.indexOf(nj[hh])){mj=!0;break a}}mj=!1}if(!(fn=mj)){var oj;if(oj=mw)a:{for(var ow=mw.include_conditions||[],AI=Gm(Lm(a.h[N.g.Na]),"host",!0),hn=0;hn<ow.length;hn++)if(ow[hn].test(AI)){oj=!0;break a}oj=!1}fn=oj}fn&&(a.h[N.g.Wc]="1",$E(4))}SE(a)&&(VE(a,"uc",qj()),Pj()&&VE(a,"rnd",Zl()));
if(R(14)&&SE(a)){To(a,N.g.Kb,!1)&&VE(a,"gse",1);!1===S(a.o,N.g.ib,void 0,4)&&VE(a,"ngs",1);sj()&&VE(a,"ga_rd",1);wD()||VE(a,"ngst",1);var pw=vj();pw&&VE(a,"etld",pw)}if(SE(a)){var qw=CF?tj():"";qw&&VE(a,"gcsub",qw)}SE(a)&&(VE(a,"gcd",yl(a.o)),Pj()&&S(a.o,N.g.wa)&&VE(a,"adr",1));if(SE(a)){var rw=Fs();rw&&VE(a,"us_privacy",rw);var sw=ll();sw&&VE(a,"gdpr",sw);var tw=jl();tw&&VE(a,"gdpr_consent",tw)}R(46)&&SE(a)&&(a.h[N.g.Si]=rj()||qj());if(SE(a)&&R(50)){var uw=Gi;uw&&VE(a,"tft",Number(uw))}R(55)&&SE(a)&&
(a.metadata.speculative&&VE(a,"sp",1),a.metadata.is_syn&&VE(a,"syn",1),a.metadata.em_event&&(VE(a,"em_event",1),VE(a,"sp",1)));if(!fs(z))L(87);else if(void 0!==hs){L(85);var vw=ds();vw?S(a.o,N.g.Rd)&&!SE(a)||ls(vw,a):L(86)}if(R(19)){var jn=ns(ms());jn||qG||(qG=!0,Nk('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'),jn=ns(ms()));jn&&(a.h[N.g.Jb]="1")}if(R(87)&&!1!==S(a.o,N.g.Ga)&&sl(a.o)){var BI=RE(a),CI=S(a.o,N.g.ib);BI&&!1!==CI&&wD()&&ck(N.g.J)&&ns("join-ad-interest-group")&&Fa(Cc.joinAdInterestGroup)&&
(a.h[N.g.Hg]=!0)}R(100)&&uq(a);if(a.eventName==N.g.Pa){var xw=S(a.o,N.g.lb),DI=S(a.o,N.g.wb),yw=void 0;yw=a.h[xw];DI(yw||S(a.o,xw));a.isAborted=!0}a.copyToHitData(N.g.Ta);a.copyToHitData(N.g.Ya);Wo(a);aG(a);R(55)&&SE(a)&&(a.metadata.speculative=!1);var zw=S(a.o,N.g.yb);zw&&$E(12);a.metadata.em_event&&$E(14);var ih=nm(um());(zw||ym(ih)||ih&&ih.parent&&ih.context&&5===ih.context.source)&&$E(19);!this.M&&a.metadata.em_event&&$E(18);var kn=a.metadata.event_usage;if(Ha(kn))for(var ln=0;ln<kn.length;ln++)$E(kn[ln]);
var Aw=Cb("GA4_EVENT");Aw&&(a.h._eu=Aw);if(a.metadata.speculative||a.isAborted){a.o.onFailure();Bb();return}var EI=this.Qj,Bw,FI=this.h,mn;a:{var nn=pF(a);if(nn){if(nF(nn,a)){mn=nn;break a}L(25);a.isAborted=!0}mn=void 0}var GI=mn;Bw={clientId:hF(a,FI),Sf:GI};EI.call(this,Bw);this.Sb=!0;this.kn(a);R(77)&&ck(N.g.R)&&(SE(a)&&R(82)&&(R(75)||R(76))&&(a.metadata.is_sgtm_service_worker=!0),R(75)&&(R(82)&&SE(a)?Qr(ap(cp(a.o),"/_")):R(86)&&(zi||Bi||SE(a)||Qr())));if(SE(a)){var HI=a.metadata.is_conversion;
if("page_view"===a.eventName||HI)iG(this,a,N.g.J),R(44)&&iG(this,a,N.g.N)}this.F.Qh();a.copyToHitData(N.g.wg);S(a.o,N.g.Rd)&&(a.h[N.g.Rd]=!0,SE(a)||gG(a));if(a.isAborted){a.o.onFailure();Bb();return}this.rj(a);a.o.onSuccess()}catch(jJ){a.o.onFailure()}Bb()};aa.rj=function(a){this.Rb.add(a)};aa.Qj=function(a){var b=a.clientId,c=a.Sf;b&&c&&(this.h=b,this.C=c)};aa.flush=function(){this.Rb.flush()};aa.kn=function(a){var b=this;if(!this.X){var c=ck(N.g.R);dk([N.g.R],function(){var d=ck(N.g.R);if(c^d&&
b.s&&b.C&&b.h){var e=b.h;if(d){var f=eF(b.s);if(f){b.h=f;var g=oF(b.s);g&&(b.C=kF(g,b.C,b.s))}else gF(b.h,b.s),cF(b.h,!0);nF(b.C,b.s);var h={};h[N.g.vg]=e;var m=Zv(b.Oa,N.g.xd,h);bw(m,a.o.eventId,{})}else b.C=void 0,b.h=void 0,z.gaGlobal={};c=d}});this.X=!0}};aa.Qk=function(a){a.eventName!==N.g.Pa&&this.F.Pk(a)};var nG=function(a){function b(c,d){bi[c]||void 0===d||(a.h[c]=d)}l(a.o.C,b);l(a.o.h,b)},oG=function(a){var b=mk(a.o),c=function(d,e){kG[d]&&(a.h[d]=e)};mb(b[N.g.Mc])?l(b[N.g.Mc],function(d,
e){c((N.g.Mc+"_"+d).toLowerCase(),e)}):l(b,c)},pG=function(a){var b=function(c){return!!c&&c.conversion};a.metadata.is_conversion=b(UE(a));a.metadata.is_first_visit&&(a.metadata.is_first_visit_conversion=b(UE(a,"first_visit")));a.metadata.is_session_start&&(a.metadata.is_session_start_conversion=b(UE(a,"session_start")))},qG=!1;
function mG(a){l(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[N.g.Ya]||{};l(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var rG=function(a){if(R(40)&&"prerendering"in C?C.prerendering:"prerender"===C.visibilityState)return!1;a();return!0},sG=function(a){if(!rG(a)){var b=!1,c=function(){!b&&rG(a)&&(b=!0,Pc(C,"visibilitychange",c),R(40)&&Pc(C,"prerenderingchange",c),L(55))};Oc(C,"visibilitychange",c);R(40)&&Oc(C,"prerenderingchange",c);L(54)}};var uG=function(a,b){sG(function(){var c=yo(a);if(c){var d=tG(c,b);Qp(a,d)}});};function tG(a,b){var c=function(){};var d=new lG(a.id),e="MC"===a.prefix;c=function(f,g,h,m){e&&(m.eventMetadata.is_merchant_center=!0);d.Qm(g,h,m)};em||vG(a,d,b);return c}
function vG(a,b,c){var d=b.F,e={},f={eventId:c,eventMetadata:(e.batch_on_navigation=!0,e)};R(37)&&(f.deferrable=!0);d.Um(function(){WE=!0;Pp.flush();1E3<=d.Jf()&&Cc.sendBeacon&&Rp(N.g.xd,{},a.id,f);b.flush();d.Rj(function(){WE=!1;d.Rj()})});};var wG=tG;function yG(a,b,c){var d=this;}yG.D="internal.gtagConfig";function zG(){var a={};return a};
function BG(a,b){}BG.O="gtagSet";function CG(a,b){}CG.O="injectHiddenIframe";function DG(a,b,c,d,e){}DG.D="internal.injectHtml";var HG={};
function JG(a,b,c,d){}var KG=Object.freeze({dl:1,id:1}),LG={};
function MG(a,b,c,d){}JG.O="injectScript";MG.D="internal.injectScript";function NG(a){var b=!0;return b}NG.O="isConsentGranted";var OG=function(){var a=kh(function(b){this.h.h.log("error",b)});a.O="JSON";return a};function PG(a){var b=void 0;return md(b)}PG.D="internal.legacyParseUrl";var QG=function(){return!1},RG={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function SG(){}SG.O="logToConsole";function TG(a,b){}TG.D="internal.mergeRemoteConfig";function UG(a,b,c){c=void 0===c?!0:c;var d=[];return d}UG.D="internal.parseCookieValuesFromString";function VG(a){var b=void 0;if("string"!==typeof a)return;a&&0===a.indexOf("//")&&(a=C.location.protocol+a);if("function"===typeof URL){var c;a:{var d;try{d=new URL(a)}catch(w){c=void 0;break a}for(var e={},f=Array.from(d.searchParams),g=0;g<f.length;g++){var h=f[g][0],m=f[g][1];e.hasOwnProperty(h)?"string"===typeof e[h]?e[h]=[e[h],m]:e[h].push(m):e[h]=m}c=md({href:d.href,origin:d.origin,protocol:d.protocol,username:d.username,password:d.password,host:d.host,
hostname:d.hostname,port:d.port,pathname:d.pathname,search:d.search,searchParams:e,hash:d.hash})}return c}var n;try{n=Lm(a)}catch(w){return}if(!n.protocol||!n.host)return;var p={};if(n.search)for(var q=n.search.replace("?","").split("&"),r=0;r<q.length;r++){var t=q[r].split("="),u=t[0],v=decodeURIComponent(t.splice(1).join("=")).replace(/\+/g," ");p.hasOwnProperty(u)?"string"===typeof p[u]?p[u]=[p[u],v]:p[u].push(v):p[u]=v}n.searchParams=p;n.origin=n.protocol+"//"+n.host;n.username="";n.password=
"";b=md(n);return b}VG.O="parseUrl";function WG(a){}WG.D="internal.processAsNewEvent";function XG(a,b,c){var d;return d}XG.D="internal.pushToDataLayer";function YG(a,b){var c=!1;return c}YG.O="queryPermission";function ZG(){var a="";return a}ZG.O="readCharacterSet";function $G(){return qi.fa}$G.D="internal.readDataLayerName";function aH(){var a="";return a}aH.O="readTitle";function bH(a,b){var c=this;J(I(this),["destinationId:!string","callback:!Fn"],arguments),Xo(a,function(d){b.invoke(c.h,md(d,c.h,1))});}bH.D="internal.registerCcdCallback";function cH(a){return!0}cH.D="internal.registerDestination";var dH=Object.freeze(["config","event","get","set"]);function eH(a,b,c){}eH.D="internal.registerGtagCommandListener";function fH(a,b){var c=!1;return c}fH.D="internal.removeDataLayerEventListener";function gH(a,b){}
gH.D="internal.removeFormData";function hH(){}hH.O="resetDataLayer";function iH(a,b,c,d){J(I(this),["destinationIds:!*","eventName:!*","eventParameters:?PixieMap","messageContext:?PixieMap"],arguments);var e=c?nd(c):{},f=nd(a);Array.isArray(f)||(f=[f]);b=String(b);var g=d?nd(d):{},h=this.h.h;g.originatingEntity=rB(h);for(var m=0;m<f.length;m++){var n=f[m];if("string"===typeof n){var p=
nb(e),q=nb(g),r=Zv(n,b,p);bw(r,g.eventId||h.eventId,q)}}}iH.D="internal.sendGtagEvent";function jH(a,b,c){}jH.O="sendPixel";function kH(a,b){}kH.D="internal.setAnchorHref";function lH(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f}lH.O="setCookie";function mH(a,b){}mH.D="internal.setCorePlatformServices";function nH(a,b){}nH.D="internal.setDataLayerValue";function oH(a){}oH.O="setDefaultConsentState";function pH(a,b){}pH.D="internal.setDelegatedConsentType";function qH(a,b){}qH.D="internal.setFormAction";function rH(a,b,c){return!1}rH.O="setInWindow";function sH(a,b,c){J(I(this),["targetId:!string","name:!string","value:!*"],arguments);var d=Qo(a)||{};d[b]=nd(c,this.h);var e=a;Oo||Po();No[e]=d;}sH.D="internal.setProductSettingsParameter";function tH(a,b,c){J(I(this),["targetId:!string","name:!string","value:!*"],arguments);for(var d=b.split("."),e=Up(a),f=0;f<d.length-1;f++){if(void 0===e[d[f]])e[d[f]]={};else if(!mb(e[d[f]]))throw Error("setRemoteConfigParameter failed, path contains a non-object type: "+d[f]);e=e[d[f]]}e[d[f]]=nd(c,this.h,1);}tH.D="internal.setRemoteConfigParameter";function uH(a,b){var c=this;}uH.D="internal.setupConversionLinker";function vH(a,b,c,d){var e=this;}vH.O="sha256";function wH(a,b,c){J(I(this),["targetId:!string","name:!string","options:!PixieMap"],arguments);for(var d=b.split("."),e=Up(a),f=0;f<d.length-1;f++){if(void 0===e[d[f]])throw Error("sortRemoteConfigParameters failed, path points to an undefined object: "+d[f]);if(!mb(e[d[f]]))throw Error("sortRemoteConfigParameters failed, path contains a non-object type: "+d[f]);e=e[d[f]]}if(void 0===e[d[f]])throw Error("sortRemoteConfigParameters failed, destination is undefined "+
d[f]);if(!Ha(e[d[f]]))throw Error("sortRemoteConfigParameters failed, destination is not an array: "+d[f]);var g=nd(c)||{},h=g.sortKey;if(!h)throw Error("sortRemoteConfigParameters failed, option.sortKey is required");var m=!1!==g.ascending;e[d[f]].sort(function(n,p){if(void 0===n[h]||void 0===p[h])throw Error("sortRemoteConfigParameters failed, object does not have required property: "+h);return m?n[h]-p[h]:p[h]-n[h]});}
wH.D="internal.sortRemoteConfigParameters";var xH={},yH={};xH.O="templateStorage";xH.getItem=function(a){var b=null;return b};
xH.setItem=function(a,b){};
xH.removeItem=function(a){};xH.clear=function(){};function zH(a,b){var c=!1;return c}zH.D="internal.testRegex";var AH=function(a){var b;return b};function BH(a){var b;return b}BH.D="internal.unsiloId";function CH(a){}CH.O="updateConsentState";var DH;function EH(a,b,c){DH=DH||new uh;DH.add(a,b,c)}function FH(a,b){var c=DH=DH||new uh;if(c.s.hasOwnProperty(a))throw"Attempting to add a private function which already exists: "+a+".";if(c.h.hasOwnProperty(a))throw"Attempting to add a private function with an existing API name: "+a+".";c.s[a]=Fa(b)?Mg(a,b):Ng(a,b)}
function GH(){return function(a){var b;var c=DH;if(c.h.hasOwnProperty(a))b=c.get(a,this);else{var d;if(d=c.s.hasOwnProperty(a)){var e=!1,f=this.h.h;if(f){var g=f.wc();if(g){0!==g.indexOf("__cvt_")&&(e=!0);}}else e=!0;d=e}if(d){var h=c.s.hasOwnProperty(a)?c.s[a]:void 0;b=h}else throw Error(a+" is not a valid API name.");}return b}};var HH=function(){var a=function(c){return FH(c.D,c)},b=function(c){return EH(c.O,c)};b(dA);b(jA);b(aB);b(dB);b(eB);b(iB);b(kB);b(nB);b(OG());b(pB);b(uE);b(vE);b(KE);b(LE);b(ME);b(PE);b(BG);b(CG);b(JG);b(NG);b(SG);b(VG);b(YG);b(ZG);b(aH);b(jH);b(lH);b(oH);b(rH);b(vH);b(xH);b(CH);EH("Math",Sg());EH("Object",sh);EH("TestHelper",wh());EH("assertApi",Og);EH("assertThat",Pg);EH("decodeUri",Tg);EH("decodeUriComponent",Ug);EH("encodeUri",Vg);EH("encodeUriComponent",Wg);EH("fail",bh);EH("generateRandom",
ch);EH("getTimestamp",dh);EH("getTimestampMillis",dh);EH("getType",jh);EH("makeInteger",lh);EH("makeNumber",mh);EH("makeString",nh);EH("makeTableMap",oh);EH("mock",rh);EH("fromBase64",tE,!("atob"in z));EH("localStorage",RG,!QG());EH("toBase64",AH,!("btoa"in z));a(gA);a(oA);a(AA);a(HA);a(MA);a(QA);a(ZA);a(bB);a(fB);a(gB);a(jB);a(lB);a(mB);a(oB);a(qB);a(tB);a(uB);a(wB);a(AB);a(FB);a(GB);a(RB);a(WB);a(aC);a(jC);a(oC);a(BC);a(DC);a(QC);a(Xg);a(SC);a(rE);a(sE);a(wE);a(xE);a(yE);a(zE);a(AE);a(BE);a(CE);
a(DE);a(EE);a(FE);a(HE);a(IE);a(JE);a(NE);a(OE);a(yG);a(MG);a(PG);a(OA);a(TG);a(UG);a(WG);a(XG);a($G);a(bH);a(cH);a(eH);a(fH);a(gH);a(iH);a(kH);a(mH);a(pH);a(qH);a(sH);a(tH);a(wH);a(zH);FH("internal.GtagSchema",zG());R(56)&&a(DG);R(84)&&a(vB);R(90)&&a(BH);R(88)&&a(nH);R(101)&&a(uH);return GH()};var bA;function IH(){bA.h.h.M=function(a,b,c){ri.SANDBOXED_JS_SEMAPHORE=ri.SANDBOXED_JS_SEMAPHORE||0;ri.SANDBOXED_JS_SEMAPHORE++;try{return a.apply(b,c)}finally{ri.SANDBOXED_JS_SEMAPHORE--}}}function JH(a){void 0!==a&&l(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Ji[e]=Ji[e]||[];Ji[e].push(b)}})};var KH=encodeURI,V=encodeURIComponent,LH=function(a,b,c){Nc(a,b,c)},MH=function(a,b){if(!a)return!1;var c=Gm(Lm(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1},NH=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&
a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};var Z={securityGroups:{}};


Z.securityGroups.c=["google"],function(){(function(a){Z.__c=a;Z.__c.m="c";Z.__c.isVendorTemplate=!0;Z.__c.priorityOverride=0;Z.__c.isInfrastructure=!1;Z.__c.runInSiloedMode=!0})(function(a){vz(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();Z.securityGroups.e=["google"],function(){(function(a){Z.__e=a;Z.__e.m="e";Z.__e.isVendorTemplate=!0;Z.__e.priorityOverride=0;Z.__e.isInfrastructure=!1;Z.__e.runInSiloedMode=!0})(function(a){return String(a.vtp_gtmCachedValues.event)})}();
Z.securityGroups.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid "+b+" request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.m="access_globals";Z.__access_globals.isVendorTemplate=!0;Z.__access_globals.priorityOverride=0;Z.__access_globals.isInfrastructure=!1;
Z.__access_globals.runInSiloedMode=!1})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,e=[],f=[],g=[],h=0;h<c.length;h++){var m=c[h],n=m.key;m.read&&e.push(n);m.write&&f.push(n);m.execute&&g.push(n)}return{assert:function(p,q,r){if(!k(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<e.indexOf(r))return}else if("write"===q){if(-1<f.indexOf(r))return}else if("readwrite"===q){if(-1<f.indexOf(r)&&-1<e.indexOf(r))return}else if("execute"===q){if(-1<g.indexOf(r))return}else throw d(p,
{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+r+".");},K:a}})}();Z.securityGroups.v=["google"],function(){(function(a){Z.__v=a;Z.__v.m="v";Z.__v.isVendorTemplate=!0;Z.__v.priorityOverride=0;Z.__v.isInfrastructure=!1;Z.__v.runInSiloedMode=!1})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=nz(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;vz(d,"v",a.vtp_gtmEventId);return d})}();











Z.securityGroups.read_container_data=["google"],function(){(function(a){Z.__read_container_data=a;Z.__read_container_data.m="read_container_data";Z.__read_container_data.isVendorTemplate=!0;Z.__read_container_data.priorityOverride=0;Z.__read_container_data.isInfrastructure=!1;Z.__read_container_data.runInSiloedMode=!1})(function(){return{assert:function(){},K:function(){return{}}}})}();

Z.securityGroups.detect_user_provided_data=["google"],function(){function a(b,c){return{dataSource:c}}(function(b){Z.__detect_user_provided_data=b;Z.__detect_user_provided_data.m="detect_user_provided_data";Z.__detect_user_provided_data.isVendorTemplate=!0;Z.__detect_user_provided_data.priorityOverride=0;Z.__detect_user_provided_data.isInfrastructure=!1;Z.__detect_user_provided_data.runInSiloedMode=!1})(function(b){var c=b.vtp_createPermissionError;return{assert:function(d,e){if("auto"!==e&&"manual"!==
e&&"code"!==e)throw c(d,{},"Unknown user provided data source.");if(b.vtp_limitDataSources)if("auto"!==e||b.vtp_allowAutoDataSources){if("manual"===e&&!b.vtp_allowManualDataSources)throw c(d,{},"Detection of user provided data via manually specified CSS selectors is not allowed.");if("code"===e&&!b.vtp_allowCodeDataSources)throw c(d,{},"Detection of user provided data from an in-page variable is not allowed.");}else throw c(d,{},"Automatic detection of user provided data is not allowed.");},K:a}})}();


Z.securityGroups.get_url=["google"],function(){function a(b,c,d){return{component:c,queryKey:d}}(function(b){Z.__get_url=b;Z.__get_url.m="get_url";Z.__get_url.isVendorTemplate=!0;Z.__get_url.priorityOverride=0;Z.__get_url.isInfrastructure=!1;Z.__get_url.runInSiloedMode=!1})(function(b){var c="any"===b.vtp_urlParts?null:[];c&&(b.vtp_protocol&&c.push("protocol"),b.vtp_host&&c.push("host"),b.vtp_port&&c.push("port"),b.vtp_path&&c.push("path"),b.vtp_extension&&c.push("extension"),b.vtp_query&&c.push("query"),
b.vtp_fragment&&c.push("fragment"));var d=c&&"any"!==b.vtp_queriesAllowed?b.vtp_queryKeys||[]:null,e=b.vtp_createPermissionError;return{assert:function(f,g,h){if(g){if(!k(g))throw e(f,{},"URL component must be a string.");if(c&&0>c.indexOf(g))throw e(f,{},"Prohibited URL component: "+g);if("query"===g&&d){if(!h)throw e(f,{},"Prohibited from getting entire URL query when query keys are specified.");if(!k(h))throw e(f,{},"Query key must be a string.");if(0>d.indexOf(h))throw e(f,{},"Prohibited query key: "+
h);}}else if(c)throw e(f,{},"Prohibited from getting entire URL when components are specified.");},K:a}})}();



Z.securityGroups.gct=["google"],function(){function a(b){for(var c=[],d=0;d<b.length;d++)try{c.push(new RegExp(b[d]))}catch(e){}return c}(function(b){Z.__gct=b;Z.__gct.m="gct";Z.__gct.isVendorTemplate=!0;Z.__gct.priorityOverride=0;Z.__gct.isInfrastructure=!1;Z.__gct.runInSiloedMode=!0})(function(b){var c={},d=b.vtp_sessionDuration;0<d&&(c[N.g.ad]=d);c[N.g.Jd]=b.vtp_eventSettings;c[N.g.ig]=b.vtp_dynamicEventSettings;c[N.g.Kb]=1===b.vtp_googleSignals;c[N.g.xg]=b.vtp_foreignTld;c[N.g.ug]=1===b.vtp_restrictDomain;
c[N.g.hf]=b.vtp_internalTrafficResults;var e=N.g.Ma,f=b.vtp_linker;f&&f[N.g.W]&&(f[N.g.W]=a(f[N.g.W]));c[e]=f;var g=N.g.lf,h=b.vtp_referralExclusionDefinition;h&&h.include_conditions&&(h.include_conditions=a(h.include_conditions));c[g]=h;var m=om(b.vtp_trackingId);Vp(m,c);uG(m,b.vtp_gtmEventId);F(b.vtp_gtmOnSuccess)})}();


Z.securityGroups.get=["google"],function(){(function(a){Z.__get=a;Z.__get.m="get";Z.__get.isVendorTemplate=!0;Z.__get.priorityOverride=0;Z.__get.isInfrastructure=!1;Z.__get.runInSiloedMode=!1})(function(a){var b=a.vtp_settings,c=b.eventParameters||{},d=String(a.vtp_eventName),e={};e.eventId=a.vtp_gtmEventId;e.priorityId=a.vtp_gtmPriorityId;a.vtp_deferrable&&(e.deferrable=!0);var f=Zv(String(b.streamId),d,c);bw(f,e.eventId,e);a.vtp_gtmOnSuccess()})}();




var hJ={};hJ.dataLayer=Ti;hJ.callback=function(a){Ii.hasOwnProperty(a)&&Fa(Ii[a])&&Ii[a]();delete Ii[a]};hJ.bootstrap=0;hJ._spx=!1;
function iJ(){ri[lm()]=ri[lm()]||hJ;rm();wm()||l(xm(),function(d,e){$u(d,e.transportUrl,e.context);L(92)});Wa(Ji,Z.securityGroups);var a=nm(um()),b,c=null==a?void 0:null==(b=a.context)?void 0:b.source;2!==c&&4!==c&&3!==c||L(142);vf=Lf}
(function(a){function b(){m=C.documentElement.getAttribute("data-tag-assistant-present");by(m)&&(h=g.Mk)}if(!z["__TAGGY_INSTALLED"]){var c=!1;if(C.referrer){var d=Lm(C.referrer);c="cct.google"===Fm(d,"host")}if(!c){var e=Hl("googTaggyReferrer");c=e.length&&e[0].length}c&&(z["__TAGGY_INSTALLED"]=!0,Jc("https://cct.google/taggy/agent.js"))}if(Di)a();else{var f=function(u){var v="GTM",w="GTM";xi?(v="OGT",w="GTAG"):Di&&(w=v="OPT");var x=z["google.tagmanager.debugui2.queue"];x||(x=[],
z["google.tagmanager.debugui2.queue"]=x,Jc("https://"+qi.wd+"/debug/bootstrap?id="+Tf.ctid+"&src="+w+"&cond="+u+"&gtm="+Am()));var y={messageType:"CONTAINER_STARTING",data:{scriptSource:Dc,containerProduct:v,debug:!1,id:Tf.ctid,targetRef:{ctid:Tf.ctid,isDestination:dm.ie},aliases:fm(),destinations:im()}};y.data.resume=function(){a()};qi.lk&&(y.data.initialPublish=!0);x.push(y)},g={Bn:1,Nk:2,Zk:3,nk:4,Mk:5},h=void 0,m=void 0,n=Gm(z.location,"query",!1,void 0,"gtm_debug");by(n)&&(h=g.Nk);if(!h&&C.referrer){var p=Lm(C.referrer);
"tagassistant.google.com"===Fm(p,"host")&&(h=g.Zk)}if(!h){var q=Hl("__TAG_ASSISTANT");q.length&&q[0].length&&(h=g.nk)}h||b();if(!h&&cy(m)){var r=function(){if(t)return!0;t=!0;b();h&&Dc?f(h):a()},t=!1;Oc(C,"TADebugSignal",function(){r()},!1);z.setTimeout(function(){r()},200)}else h&&Dc?f(h):a()}})(function(){try{pm();if(R(16)){}zj().s();kl();(R(98)||R(99)||R(100))&&
pq();var a=mm();if(am().canonical[a]){var b=ri.zones;b&&b.unregisterChild(hm());var c=Lu(mm());c._event&&(c._event.external=[]);c._entity&&(c._entity.external=[]);}else{is();Xu();for(var d=data.resource||{},e=d.macros||[],f=0;f<e.length;f++)lf.push(e[f]);for(var g=d.tags||[],h=0;h<g.length;h++)of.push(g[h]);for(var m=d.predicates||
[],n=0;n<m.length;n++)nf.push(m[n]);for(var p=d.rules||[],q=0;q<p.length;q++){for(var r=p[q],t={},u=0;u<r.length;u++){var v=r[u][0];t[v]=Array.prototype.slice.call(r[u],1);"if"!==v&&"unless"!==v||uf(t[v])}mf.push(t)}qf=Z;rf=Tz;Nf=new Wf;var w=data.sandboxed_scripts,x=data.security_groups,y=data.infra;a:{var A=data.runtime||[],B=data.runtime_lines;bA=new Ie;IH();kf=aA();var E=bA,G=HH(),D=new ed("require",G);D.Eb();E.h.h.set("require",D);for(var M=[],P=0;P<A.length;P++){var O=A[P];if(!Ha(O)||3>O.length){if(0===
O.length)continue;break a}B&&B[P]&&B[P].length&&Ef(O,B[P]);try{bA.execute(O),R(32)&&mp&&50===O[0]&&M.push(O[1])}catch(fh){}}R(32)&&(wf=M)}if(void 0!==w)for(var T=["sandboxedScripts"],Y=0;Y<w.length;Y++){var W=w[Y].replace(/^_*/,"");Ji[W]=T}JH(x);if(void 0!==y)for(var X=0;X<y.length;X++)Ki[y[X]]=!0;iJ();if(R(25)&&!Di){for(var la=pj["7"],ka=la?la.split("|"):[],fa={},Da=0;Da<ka.length;Da++)fa[ka[Da]]=!0;for(var pa=0;pa<Wj.length;pa++){var Ea=Wj[pa],Ua=Ea,lb=fa[Ea]?"granted":"denied";Gj().implicit(Ua,
lb)}}ay();av=!1;bv=0;if("interactive"==C.readyState&&!C.createEventObject||"complete"==C.readyState)dv();else{Oc(C,"DOMContentLoaded",dv);Oc(C,"readystatechange",dv);if(C.createEventObject&&C.documentElement.doScroll){var Ib=!0;try{Ib=!z.frameElement}catch(fh){}Ib&&ev()}Oc(z,"load",dv)}px=!1;"complete"===C.readyState?rx():Oc(z,"load",rx);
mp&&(hp(zp),z.setInterval(yp,864E5));hp(Vz);hp(Ev);hp(ut);hp(Op);hp(Pv);hp(Ep);hp(Xr);hp(Cp);hp(Lv);R(32)&&hp(Hv);R(106)&&(hp(Wz),hp(Yz));xy();ij(1);Lw();Hi=Sa();hJ.bootstrap=Hi;
hJ._spx=!0,Zx();if(R(16)){}}}catch(fh){if(ij(4),mp){var jj=tp(!0,!0);Nc(jj)}}});

})()

lting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );
jQuery.noConflict();