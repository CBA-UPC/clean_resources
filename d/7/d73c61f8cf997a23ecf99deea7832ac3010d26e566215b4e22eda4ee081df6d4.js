/* line 1, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-grid {
  -moz-box-sizing: border-box !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
}
/* line 4, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-grid *, .mz-cms-grid *:after, .mz-cms-grid *:before {
  -moz-box-sizing: border-box !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
}

/* line 10, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-row {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
}
/* line 15, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-row:after {
  content: "";
  display: table;
  clear: both;
}

/* line 22, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-block {
  background-color: transparent;
  min-height: 14px;
  min-width: 80px;
  position: relative;
  padding: 0;
  word-wrap: break-word;
}

/* line 31, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-content {
  overflow: hidden;
  padding: 5px;
}
/* line 35, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-content > :first-child {
  margin-top: 0;
}
/* line 39, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-content .mz-cms-image-maintain {
  width: 100%;
}
/* line 43, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-content .mz-cms-image-cover {
  background-position: center center;
  background-size: cover;
  display: block;
  height: 100%;
  width: 100%;
}

/* line 52, ../../sass/etc/chorizo/_grid.scss */
[class*='mz-cms-col-'] {
  float: left;
  max-height: 99999px;
  overflow: visible;
  position: relative;
}
/* line 58, ../../sass/etc/chorizo/_grid.scss */
[class*='mz-cms-col-'].mz-cms-drop-over {
  background-color: rgba(52, 173, 142, 0.1);
  outline-color: #34ad8e !important;
}
/* line 63, ../../sass/etc/chorizo/_grid.scss */
[class*='mz-cms-col-'] .mz-cms-content {
  padding: 10px;
}
/* line 67, ../../sass/etc/chorizo/_grid.scss */
[class*='mz-cms-col-'] .resizer-column {
  cursor: ew-resize;
  height: 100%;
  margin-right: -8px;
  opacity: 0;
  padding: 0 8px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  -moz-transition: opacity 150ms;
  -o-transition: opacity 150ms;
  -webkit-transition: opacity 150ms;
  transition: opacity 150ms;
}
/* line 79, ../../sass/etc/chorizo/_grid.scss */
[class*='mz-cms-col-'] .resizer-column div {
  background: #34ad8e;
  height: 100%;
  width: 1px;
}
/* line 85, ../../sass/etc/chorizo/_grid.scss */
[class*='mz-cms-col-'] .resizer-column:hover, [class*='mz-cms-col-'] .resizer-column.active {
  opacity: 1;
}

/* line 91, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-row > [class*='mz-cms-col-']:last-child .resizer-column {
  display: none;
}

/* line 95, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-row {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
}

/* line 101, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-row:after {
  content: "";
  display: table;
  clear: both;
}

/* line 107, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-push-right {
  float: right;
}

/* line 111, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-1, .mz-cms-col-12-12 {
  width: 100%;
}

/* line 114, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-2-3, .mz-cms-col-8-12 {
  width: 66.66%;
}

/* line 118, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-2, .mz-cms-col-6-12 {
  width: 50%;
}

/* line 122, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-3, .mz-cms-col-4-12 {
  width: 33.33%;
}

/* line 126, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-4, .mz-cms-col-3-12 {
  width: 25%;
}

/* line 130, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-5 {
  width: 20%;
}

/* line 134, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-6, .mz-cms-col-2-12 {
  width: 16.667%;
}

/* line 138, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-7 {
  width: 14.28%;
}

/* line 142, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-8 {
  width: 12.5%;
}

/* line 146, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-9 {
  width: 11.1%;
}

/* line 150, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-10 {
  width: 10%;
}

/* line 154, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-11 {
  width: 9.09%;
}

/* line 158, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-1-12 {
  width: 8.33%;
}

/* Layout Columns */
/* line 164, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-11-12 {
  width: 91.66%;
}

/* line 168, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-10-12 {
  width: 83.333%;
}

/* line 172, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-9-12 {
  width: 75%;
}

/* line 176, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-5-12 {
  width: 41.66%;
}

/* line 180, ../../sass/etc/chorizo/_grid.scss */
.mz-cms-col-7-12 {
  width: 58.33%;
}

@media handheld, only screen and (max-width: 767px) {
  /* line 185, ../../sass/etc/chorizo/_grid.scss */
  .mz-cms-row {
    width: 100%;
    min-width: 0;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }

  /* line 194, ../../sass/etc/chorizo/_grid.scss */
  [class*='mz-cms-col-'] {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    width: auto !important;
    float: none;
  }
}
gationMenu] ul[id$=RootAspMenu]>li.active>a{background-color:transparent!important;color:#333;font-weight:700}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li.active>a:hover{color:#eaeaea}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li.open>a{background-color:#d5d5d5!important;color:#333}}nav#main-nav div[id$=TopNavigationMenu]{background-color:transparent;position:static;margin:0;width:auto}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li{border-right:1px solid #fff;background-image:linear-gradient(to bottom,transparent 50%,#d5d5d5 50%,#d5d5d5 95%,#d5d5d5 95%);background-size:100% 200%;background-position:top center;outline:none}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li a:hover{background-position:bottom center;background-color:#eaeaea}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li :hover>a{color:#333}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li>a>i.fa:hover{background-color:transparent}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li>a{color:#333;font-weight:400}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li.active>a{background-color:transparent!important;color:#333;font-weight:700}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li.active>a :hover{color:#eaeaea!important}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li.open>a{background-color:#d5d5d5;color:#333}@media(min-width:992px){.main-nav-hover-overlay{border-top:1px solid #fff}.main-nav-hover-overlay-hover{background-color:#eaeaea}}.ms-core-listMenu-selected:link,.ms-core-listMenu-selected:visited,.ms-core-listMenu-selected{background-color:#eaeaea!important;background-color:#eaeaea!important}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li.open>ul>li a:hover{background-color:#eaeaea}#main-container #main-nav-container .search{}#main-container #main-nav-container .search .input-group input[type=text]{background-color:transparent;border-color:#bababa}#main-container #main-nav-container .search .input-group button{background-color:#02acbd;color:#fff;border-color:#bababa}#main-container #main-nav-container .search .advance-search a{color:#333}@media(min-width:992px){}#main-container .content-box .content-box-body-list ul>li:before{color:#74886d}#wpMagazineArtcleNav .magzine-tabs>li>a{background-color:#eaeaeb!important}#wpMagazineArtcleNav .magzine-tabs>li.active>a{background-color:#179399!important;color:#fff!important}#main-container .webpart-title{color:#fff}.theme-title{color:#fff}.theme-color{background-color:#74886d}.theme-color:hover{background-color:#74886d}.theme-font-color{color:#74886d}nav#main-nav div.navbar-header>button .icon-bar{background-color:#333!important}.wpVideoGallery .vgTab.vgActiveTab,.wpVideoGallery .vgTab:hover{background-color:#d5d5d5;color:#333}.wpVideoGallery .vgIcon.vgIconActive,.wpVideoGallery .vgIcon:hover{background-color:#d5d5d5;color:#333}.wk__video-gallery__pager>li>a:hover,.wk__video-gallery__pager>li.active>a,.wk__video-gallery__pager>li.active>a:hover,.wk__video-gallery__pager>li.active>a:focus,.wk__video-gallery__pager>li.active>a:visited{color:#333;background-color:#d5d5d5;border:1px solid #d5d5d5}#forgotpwd-input input[type=submit],#wpLoginBox #login-box #login-actions>.btn-login,#advancedSearch .buttonsDiv>input[type=submit],#wpSearchResults .searchMain .searchFacets .filtersMain .ulfilters .savedSearchClass .searchButtonCenter>input,#wpHealthJobPlus button[aria-controls=jobSearchForm],.ej-feedback-btns input[type=submit],#ej-box-search-similar input[type=submit],.primary-button,#forgotpwd-input input[type=submit]:active,#wpLoginBox #login-box #login-actions>.btn-login:active,#advancedSearch .buttonsDiv>input[type=submit]:active,#wpSearchResults .searchMain .searchFacets .filtersMain .ulfilters .savedSearchClass .searchButtonCenter>input:active,input[type=button].user-registration__submit-btn,input[type=reset].user-registration__submit-btn,input[type=submit].user-registration__submit-btn,button.user-registration__submit-btn,#wpHealthJobPlus button[aria-controls=jobSearchForm]:active,.ej-feedback-btns input[type=submit]:active,#ej-box-search-similar input[type=submit]:active,.primary-button:active{background-color:#179399}#forgotpwd-input input[type=button],#advancedSearch .buttonsDiv input[type=reset],#wpHealthJobPlus input[type=button],.ej-feedback-btns input[type=button],#ej-box-search-similar input[type=button],.secondary-button,#forgotpwd-input input[type=button]:active,#advancedSearch .buttonsDiv input[type=reset]:active,#wpHealthJobPlus input[type=button]:active,.ej-feedback-btns input[type=button]:active,#ej-box-search-similar input[type=button]:active,.secondary-button:active{border:.1rem solid #179399}.ej-advertisement-title{color:#000}.ej-tabs--default .ej-tabs__item{background-color:#d5d5d5;border-color:#d5d5d5}.ej-tabs--most-popular .ej-tabs__item{background-color:#179399;border-color:#179399}.user-action-toolbar{color:#666!important}.header{background-color:#d5e3a3}.top-banner{background-color:#d5e3a3;color:#666!important}.top-banner--low-opacity{background-color:rgba(255,255,255,.1)}.user-action-toolbar__dropdown{background-color:#d5e3a3}#footer-wrapper{background-color:#179399;color:#fff}.footer-list-item a::before{color:#fff}.footer-dotted-line--bg-image{background-image:linear-gradient(to right,transparent 50%,#FFFFFF 50%)}#footer-wrapper .footer-top-content-wrapper .footer-back-to-top-button{background-color:#179399}#main-container #main-nav-container-v2 #main-footer{background-color:#179399;color:#fff}#main-container #main-nav-container-v2{background-color:#d5d5d5}#main-container #main-nav-container-v2 .navbar-nav>li{border-right:1px solid #fff}#main-container #main-nav-container-v2 .navbar-nav>li a{color:#333}#main-container #main-nav-container-v2 .navbar-nav>li ul{background-color:#d5d5d5}#main-container #main-nav-container-v2 .navbar-nav>li ul>li>a{color:#333}#main-nav-container-v2~.main-nav-hover-overlay-hover{background-color:#eaeaea}.navbar-hamburger-button__text{color:#333}.search-v2 .fa{color:#d5d5d5}.search-v2 .advance-search a,.search-v2 .advance-search a:visited{color:#666!important}.navbar-hover-color{background-color:#eaeaea!important}nav#main-nav div[id$=TopNavigationMenu].in ul[id$=RootAspMenu]>li>a{background-color:#d5d5d5!important}.ej-tabs--default .ej-tabs__item .ej-tabs__link,.ej-tabs--default .ej-tabs__item .ej-tabs__text{color:#333}.ejp-footer{background-color:#179399}.ejp-footer__back-to-top-link{background-color:#179399}.header.fixed{background:#d5e3a3}.fixed .header__layout-bottom .search-v2{background-color:#d5e3a3;border:1px solid #d5d5d5}.fixed .header__layout-top .sticky-search{color:#666!important}.header__layout-top .sticky-search.active{border-top:1px solid #d5d5d5;border-left:1px solid #d5d5d5;border-right:1px solid #d5d5d5;background-color:#d5e3a3}.header__layout-top .sticky-search.active:before,.header__layout-top .sticky-search.active:after{background-color:#666!important}nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li.open,nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li.open a.dropdown-toggle,nav#main-nav div[id$=TopNavigationMenu] ul[id$=RootAspMenu]>li:hover,nav#main-nav div[id$=TopNavigationMenu]>ul[id$=RootAspMenu] .dropdown ul li:hover{background-color:#eaeaea!important}peof window)return!1;for(var e in window)try{if(!f["$"+e]&&o.call(window,e)&&null!==window[e]&&"object"==typeof window[e])try{p(window[e])}catch(e){return!0}}catch(e){return!0}return!1}();n=function(e){var t=null!==e&&"object"==typeof e,r="[object Function]"===i.call(e),n=a(e),s=t&&"[object String]"===i.call(e),f=[];if(!t&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var d=c&&r;if(s&&e.length>0&&!o.call(e,0))for(var h=0;h<e.length;++h)f.push(String(h));if(n&&e.length>0)for(var g=0;g<e.length;++g)f.push(String(g));else for(var m in e)d&&"prototype"===m||!o.call(e,m)||f.push(String(m));if(u)for(var v=function(e){if("undefined"==typeof window||!y)return p(e);try{return p(e)}catch(e){return!1}}(e),w=0;w<l.length;++w)v&&"constructor"===l[w]||!o.call(e,l[w])||f.push(l[w]);return f}}e.exports=n},function(e,t,r){"use strict";var n=r(3),o=r(13),i=o(n("String.prototype.indexOf"));e.exports=function(e,t){var r=n(e,!!t);return"function"==typeof r&&i(e,".prototype.")>-1?o(r):r}},function(e,t,r){"use strict";var n="undefined"!=typeof Symbol&&Symbol,o=r(2);e.exports=function(){return"function"==typeof n&&("function"==typeof Symbol&&("symbol"==typeof n("foo")&&("symbol"==typeof Symbol("bar")&&o())))}},function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ",o=Array.prototype.slice,i=Object.prototype.toString;e.exports=function(e){var t=this;if("function"!=typeof t||"[object Function]"!==i.call(t))throw new TypeError(n+t);for(var r,a=o.call(arguments,1),s=function(){if(this instanceof r){var n=t.apply(this,a.concat(o.call(arguments)));return Object(n)===n?n:this}return t.apply(e,a.concat(o.call(arguments)))},u=Math.max(0,t.length-a.length),c=[],l=0;l<u;l++)c.push("$"+l);if(r=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this,arguments); }")(s),t.prototype){var p=function(){};p.prototype=t.prototype,r.prototype=new p,p.prototype=null}return r}},function(e,t,r){"use strict";var n=r(0);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},function(e,t,r){"use strict";var n=r(0),o=r(3),i=o("%Function.prototype.apply%"),a=o("%Function.prototype.call%"),s=o("%Reflect.apply%",!0)||n.call(a,i),u=o("%Object.getOwnPropertyDescriptor%",!0),c=o("%Object.defineProperty%",!0),l=o("%Math.max%");if(c)try{c({},"a",{value:1})}catch(e){c=null}e.exports=function(e){var t=s(n,a,arguments);if(u&&c){var r=u(t,"length");r.configurable&&c(t,"length",{value:1+l(0,e.length-(arguments.length-1))})}return t};var p=function(){return s(n,i,arguments)};c?c(e.exports,"apply",{value:p}):e.exports.apply=p},function(e,t){e.exports={ejpClient:"ejp_v3",defaultQueryString:"*",minRows:1,defaultRows:5,maxRows:100,maxProductCount:100,defaultReturnFields:["Title","SubTitle","PublicationTitle","PublicationDateYear","Volume","Issue","PageRange","DOI","AccessionNumber","PublicationType","wkmridVersioned","wkmrid","AssetProduct","PublicationDate","PublicationDateRange","ProductVersion"]}},function(e,t){t.toQueryString=function(e){return"?"+Object.keys(e).reduce((function(t,r){return t.push(r+"="+encodeURIComponent(e[r])),t}),[]).join("&")},t.parseQueryString=function(e){var t={};if(!e)return t;for(var r=(e=e.replace(/^\?/,"")).split("&"),n=0;n<r.length;n++){var o=r[n].split("=");if(o&&2===o.length){var i=o[0],a=decodeURIComponent(o[1]);t[i]=a}}return t},t.removeNullProperties=function(e){for(var t in e)e.hasOwnProperty(t)&&null==e[t]&&delete e[t]}},function(e,t,r){e.exports=r(17)},function(e,t,r){var n=r(18);window.Widget=n},function(e,t,r){var n,o,i=r(19),a=r(20),s=r(21),u=r(23),c=r(24),l=r(15),p=r(4),f=r(26),y=r(27),d=r(28),h=r(29),g=r(30),m=(n=new a((function(e){return null!=e.attributes["data-widget"]})),{forElementId:function e(t,r){g.validate(r);var a=n.getQueryParam("client")||r.client;if(!a)throw new Error("Client should be specified either in queryParams of current script or options");var y=document.getElementById(t);if(null==y)throw new Error('Element with id "'+t+'" is not found');var d,h={widgetId:t,elementId:t,element:y,baseUrl:n.getBaseUrl(),client:a,showConsoleLog:r.showConsoleLog||!1,selectionMode:[o.PER_LOAD,o.PER_SESSION].indexOf(r.selectMode)>=0?r.selectMode:o.PER_SESSION,sessionStorage:function(e){return e.session&&S(e.session.getItem)&&S(e.session.setItem)?e.session:window.sessionStorage}(r),template:r.template||null,recommenderInput:{rows:r.rows,returnFields:r.returnFields,showConsoleLog:r.showConsoleLog||!1,client:a,entitledSearch:r.entitledSearch,widgetVersion:f()},recommenderResult:null,dataCollection:[]},m={onPreActivate:S(r.onPreActivate)?r.onPreActivate:P,onPreSelect:S(r.onPreSelect)?r.onPreSelect:P,onPreRun:S(r.onPreRun)?r.onPreRun:P,onPreRender:S(r.onPreRender)?r.onPreRender:P,onRender:S(r.onRender)?r.onRender:c,onEnd:S(r.onEnd)?r.onEnd:P,onLog:S(r.onLog)?r.onLog:P,onTrackEvent:S(r.onTrackEvent)?r.onTrackEvent:P},v=new u({widgetId:h.widgetId,onLog:m.onLog,showInConsole:h.showConsoleLog}),w=new s(h.widgetId,r.session);return function(e,t){if(t=t||{},e)for(var r=0;r<e.length;r++){var n=e[r];t[n.getName()]=n.getValue()}}(r.input,h.recommenderInput),b("start",{date:new Date}),d=function(){!function(e){m.onPreSelect(h);var t=w.getRecommenderUrl();if(t&&h.selectionMode===o.PER_SESSION)return v.log("Recommender was got from session:",t),b("selectRecommender",{url:t}),void e(t);var r=new XMLHttpRequest;r.open("GET",p.selectorServiceUrl+"/recommenderscript?widgetversion="+encodeURI(f())+"&product="+encodeURI(a)),r.setRequestHeader("Content-Type","application/json"),r.onload=function(){if(200===r.status&&4===r.readyState){var t=JSON.parse(r.responseText).recommenderUri;if(!t)throw new Error("Error while getting url");w.setRecommenderUrl(t),b("selectRecommender",{url:t}),e(t)}if(404===r.status)throw new Error("The recommender for such a client is not found")},r.send()}((function(e){!function(e,t){b("loadRecommender",{url:e});var r=new XMLHttpRequest;r.open("GET",e),r.onload=function(){200===r.status&&4===r.readyState&&t(r.responseText)},r.send()}(e,(function(e){!function(e,t){var r=new Function(e+"\n;return callRecommender;")(),n=new i;m.onPreRun(h),b("runRecommender",{input:h.recommenderInput}),n.start(),r(h.recommenderInput,(function(e){n.stop(),b("runRecommenderResult",{timeToRecommend_ms:n.getResult(),result:e||{}}),h.recommenderResult=e,t(e)}),(function(e){throw v.log("The error occurs while executing recom.js",e),b("error",{msg:e}),Error(e)}),v.log)}(e,(function(e){!function(e,t){e.Client=h.client,m.onPreRender(h),m.onRender(e,h),function(){for(var e=document.querySelectorAll("#"+h.elementId+" a[href]"),t=0;t<e.length;t++)e[t].addEventListener("mouseover",(function(e){b("mouseoverRecommendation",{link:e.target.href,title:e.target.innerText,mouseX:e.clientX,mouseY:e.clientY})})),e[t].addEventListener("mouseleave",(function(e){b("mouseleaveRecommendation",{link:e.target.href,title:e.target.innerText,mouseX:e.clientX,mouseY:e.clientY})})),e[t].addEventListener("click",(function(e){b("clickRecommendation",{link:e.target.href,title:e.target.innerText,mouseX:e.clientX,mouseY:e.clientY})}))}(),t()}(e,(function(){b("end",{date:new Date}),v.log("The widget is done",h.dataCollection),m.onEnd(h)}))}))}))}))},m.onPreActivate(h),l.removeNullProperties(h.recommenderInput),b("activate",{sessionId:w.sessionId,client:h.client,currentUrl:encodeURIComponent(window.location.href)}),d(),{reload:function(){return e(t,r)}};function b(e,t){var r={event:e,properties:t,timestamp:Date.now()};h.dataCollection.push(r),m.onTrackEvent(r,h.dataCollection)}function P(){}function S(e){return e&&"function"==typeof e}},SelectionMode:o={PER_SESSION:"PER_SESSION",PER_LOAD:"PER_LOAD"},SelectorInputField:y,StaticInputField:d,FuncInputField:h});e.exports=m},function(e,t){e.exports=function(){var e=null,t=null;this.start=function(){e=Date.now(),t=null},this.stop=function(){t=Date.now()},this.getResult=function(){return null==e?0:(t||Date.now())-e}}},function(e,t,r){var n=r(15);e.exports=function(e){var t,r,o;return function(){if(!e||"function"!=typeof e)throw new Error("isThatScript is not defined or not function");if(!(t=function(){for(var t=null,r=document.getElementsByTagName("script"),n=0;n<r.length;n++)if(e(r[n])){t=r[n];break}return t}()))return;i=t,a=i.src.replace(/^[^\?]+\??/,""),r=n.parseQueryString(a),o=function(e){var t=document.createElement("a");t.href=e.src;var r=t.href.replace(t.search,"");return r.substring(0,r.lastIndexOf("/"))}(t);var i,a}(),{getBaseUrl:function(){return o},getQueryParam:function(e){return r[e]}}}},function(e,t,r){var n=r(22);e.exports=function(e,t){t=t||window.sessionStorage;var r,o,i=e?"Widget["+e+"]:":"Widget:",a=this;function s(){return t.getItem(i+"RecommenderUrl")}function u(e){t.setItem(i+"RecommenderUrl",e)}a.getRecommenderUrl=s,a.setRecommenderUrl=u,a.sessionId=t.getItem(i+"SessionId"),(null===a.sessionId||t.getItem(i+"HostPage")!==n())&&(a.sessionId=(o=(new Date).getTime().toString(16)+Math.random().toString(16).substring(2)+function(e,t){for(var r="",n=0;n<t;n++)r+=e;return r}("0",16)).substr(0,8)+"-"+o.substr(8,4)+"-4000-8"+o.substr(12,3)+"-"+o.substr(15,12),r=a.sessionId,t.setItem(i+"SessionId",r),u(""),function(e){t.setItem(i+"HostPage",e)}(n()))}},function(e,t){e.exports=function(){return window.location.href.split("#")[0]}},function(e,t){e.exports=function(e){var t=(e=e||{}).widgetId?"Widget["+e.widgetId+"]: ":"Widget: ",r=[];this.log=function(){arguments.length>0&&"string"==typeof arguments[0]&&(arguments[0]=t+arguments[0]),r.push(arguments),e.showInConsole&&console.log.apply(console,arguments),e.onLog&&"function"==typeof e.onLog&&e.onLog.apply(e.onLog,arguments)},this.getLogs=function(){return r}}},function(e,t,r){var n=r(25);e.exports=function(e,t){var r=e,o=t.template||'<ul class="widget-container"> {{#Documents}} <li class="document"> <a target="_blank" href="https://insights.ovid.com/crossref/{{AccessionNumber}}">{{{TaggedCitation}}}</a> </li> {{/Documents}} </ul>';t.element.innerHTML=n.render(o,r)}},function(e,t,r){e.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var e=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===e.call(t)};function r(e){return"function"==typeof e}function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(e,t){return null!=e&&"object"==typeof e&&t in e}var i=RegExp.prototype.test,a=/\S/;function s(e){return!function(e,t){return i.call(e,t)}(a,e)}var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},c=/\s*/,l=/\s+/,p=/\s*=/,f=/\s*\}/,y=/#|\^|\/|>|\{|&|=|!/;function d(e){this.string=e,this.tail=e,this.pos=0}function h(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function g(){this.cache={}}d.prototype.eos=function(){return""===this.tail},d.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},d.prototype.scanUntil=function(e){var t,r=this.tail.search(e);switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t},h.prototype.push=function(e){return new h(e,this)},h.prototype.lookup=function(e){var t,n,i,a=this.cache;if(a.hasOwnProperty(e))t=a[e];else{for(var s,u,c,l=this,p=!1;l;){if(e.indexOf(".")>0)for(s=l.view,u=e.split("."),c=0;null!=s&&c<u.length;)c===u.length-1&&(p=o(s,u[c])||(n=s,i=u[c],null!=n&&"object"!=typeof n&&n.hasOwnProperty&&n.hasOwnProperty(i))),s=s[u[c++]];else s=l.view[e],p=o(l.view,e);if(p){t=s;break}l=l.parent}a[e]=t}return r(t)&&(t=t.call(this.view)),t},g.prototype.clearCache=function(){this.cache={}},g.prototype.parse=function(e,r){var o=this.cache,i=e+":"+(r||m.tags).join(":"),a=o[i];return null==a&&(a=o[i]=function(e,r){if(!e)return[];var o,i,a,u=!1,h=[],g=[],v=[],w=!1,b=!1,P="",S=0;function A(){if(w&&!b)for(;v.length;)delete g[v.pop()];else v=[];w=!1,b=!1}function E(e){if("string"==typeof e&&(e=e.split(l,2)),!t(e)||2!==e.length)throw new Error("Invalid tags: "+e);o=new RegExp(n(e[0])+"\\s*"),i=new RegExp("\\s*"+n(e[1])),a=new RegExp("\\s*"+n("}"+e[1]))}E(r||m.tags);for(var O,I,R,x,j,U,k=new d(e);!k.eos();){if(O=k.pos,R=k.scanUntil(o))for(var F=0,T=R.length;F<T;++F)s(x=R.charAt(F))?(v.push(g.length),P+=x):(b=!0,u=!0,P+=" "),g.push(["text",x,O,O+1]),O+=1,"\n"===x&&(A(),P="",S=0,u=!1);if(!k.scan(o))break;if(w=!0,I=k.scan(y)||"name",k.scan(c),"="===I?(R=k.scanUntil(p),k.scan(p),k.scanUntil(i)):"{"===I?(R=k.scanUntil(a),k.scan(f),k.scanUntil(i),I="&"):R=k.scanUntil(i),!k.scan(i))throw new Error("Unclosed tag at "+k.pos);if(j=">"==I?[I,R,O,k.pos,P,S,u]:[I,R,O,k.pos],S++,g.push(j),"#"===I||"^"===I)h.push(j);else if("/"===I){if(!(U=h.pop()))throw new Error('Unopened section "'+R+'" at '+O);if(U[1]!==R)throw new Error('Unclosed section "'+U[1]+'" at '+O)}else"name"===I||"{"===I||"&"===I?b=!0:"="===I&&E(R)}if(A(),U=h.pop())throw new Error('Unclosed section "'+U[1]+'" at '+k.pos);return function(e){for(var t,r=[],n=r,o=[],i=0,a=e.length;i<a;++i)switch((t=e[i])[0]){case"#":case"^":n.push(t),o.push(t),n=t[4]=[];break;case"/":o.pop()[5]=t[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(t)}return r}(function(e){for(var t,r,n=[],o=0,i=e.length;o<i;++o)(t=e[o])&&("text"===t[0]&&r&&"text"===r[0]?(r[1]+=t[1],r[3]=t[3]):(n.push(t),r=t));return n}(g))}(e,r)),a},g.prototype.render=function(e,t,r,n){var o=this.parse(e,n),i=t instanceof h?t:new h(t,void 0);return this.renderTokens(o,i,r,e,n)},g.prototype.renderTokens=function(e,t,r,n,o){for(var i,a,s,u="",c=0,l=e.length;c<l;++c)s=void 0,"#"===(a=(i=e[c])[0])?s=this.renderSection(i,t,r,n):"^"===a?s=this.renderInverted(i,t,r,n):">"===a?s=this.renderPartial(i,t,r,o):"&"===a?s=this.unescapedValue(i,t):"name"===a?s=this.escapedValue(i,t):"text"===a&&(s=this.rawValue(i)),void 0!==s&&(u+=s);return u},g.prototype.renderSection=function(e,n,o,i){var a=this,s="",u=n.lookup(e[1]);if(u){if(t(u))for(var c=0,l=u.length;c<l;++c)s+=this.renderTokens(e[4],n.push(u[c]),o,i);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)s+=this.renderTokens(e[4],n.push(u),o,i);else if(r(u)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(u=u.call(n.view,i.slice(e[3],e[5]),(function(e){return a.render(e,n,o)})))&&(s+=u)}else s+=this.renderTokens(e[4],n,o,i);return s}},g.prototype.renderInverted=function(e,r,n,o){var i=r.lookup(e[1]);if(!i||t(i)&&0===i.length)return this.renderTokens(e[4],r,n,o)},g.prototype.indentPartial=function(e,t,r){for(var n=t.replace(/[^ \t]/g,""),o=e.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!r)&&(o[i]=n+o[i]);return o.join("\n")},g.prototype.renderPartial=function(e,t,n,o){if(n){var i=r(n)?n(e[1]):n[e[1]];if(null!=i){var a=e[6],s=e[5],u=e[4],c=i;return 0==s&&u&&(c=this.indentPartial(i,u,a)),this.renderTokens(this.parse(c,o),t,n,c)}}},g.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(null!=r)return r},g.prototype.escapedValue=function(e,t){var r=t.lookup(e[1]);if(null!=r)return m.escape(r)},g.prototype.rawValue=function(e){return e[1]};var m={name:"mustache.js",version:"3.2.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,to_html:void 0,Scanner:void 0,Context:void 0,Writer:void 0},v=new g;return m.clearCache=function(){return v.clearCache()},m.parse=function(e,t){return v.parse(e,t)},m.render=function(e,r,n,o){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(t(i=e)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return v.render(e,r,n,o)},m.to_html=function(e,t,n,o){var i=m.render(e,t,n);if(!r(o))return i;o(i)},m.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return u[e]}))},m.Scanner=d,m.Context=h,m.Writer=g,m}()},function(e,t){e.exports=function(){return"03.00.01.001"}},function(e,t){e.exports=function(e,t){if(null==e)throw new Error("name should be defined");if(null==t||"string"!=typeof t)throw new Error("selector should be defined and string");this.getName=function(){return e},this.getValue=function(){for(var e=document.querySelectorAll(t),r="",n=0;n<e.length;n++){var o=e[n];r+=" "+(o.innerText||o.textContent||o.value||"").trim()}return r?r.trim():null}}},function(e,t){e.exports=function(e,t){if(null==e)throw new Error("name should be defined");if(null==t)throw new Error("value should be defined");this.getName=function(){return e},this.getValue=function(){return t}}},function(e,t){e.exports=function(e,t){if(null==e)throw new Error("name should be defined");if(null==t||"function"!=typeof t)throw new Error("valueProviderFunc should be defined and have function type");this.getName=function(){return e},this.getValue=function(){return t()}}},function(e,t,r){var n=r(31);e.exports={validate:function(e){for(var t=0;t<n.length;t++)n[t](e)}}},function(e,t,r){e.exports=[r(32),r(33),r(34)]},function(e,t){e.exports=function(e){if(null==e.input)throw new Error("options.input is mandatory property");if(!Array.isArray(e.input))throw new Error("options.input should be an array");return!0}},function(e,t,r){var n=r(4);e.exports=function(e){var t=e.rows;if(null==t)return!0;if("number"!=typeof t||isNaN(t))throw Error("options.rows should be a number");if(t<n.minRows)throw Error("options.rows should not be less than "+n.minRows);if(t>n.maxRows)throw Error("options.rows should not be bigger than "+n.maxRows);return!0}},function(e,t){e.exports=function(e){return null==e.entitledSearch||function(e){if(null==e)throw new Error("entitledSearch.userId should not be undefined");return!0}(e.entitledSearch.userId)}}]);